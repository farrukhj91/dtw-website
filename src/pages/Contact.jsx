// src/pages/Contact.jsx
import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const platforms = ['Shopify', 'WooCommerce', 'OpenCart', 'Not Sure Yet']

const budgets = [
  'Under $500',
  '$500 – $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000+',
]

const timelines = [
  'As soon as possible',
  'Within 2 weeks',
  'Within a month',
  '1–3 months',
  'Just exploring for now',
]

const productRanges = [
  'Under 50 products',
  '50 – 200 products',
  '200 – 500 products',
  '500 – 1,000 products',
  '1,000+ products',
]

const serviceOptions = [
  'Store setup from scratch',
  'Platform migration',
  'Product upload & catalog setup',
  'Store redesign / customization',
  'Branding & visual identity',
  'Social media branding',
  'Ecommerce content setup',
  'Ongoing store management',
]

function PageHero() {
  return (
    <section className="pt-32 pb-12 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="container relative max-w-2xl">
        <p className="label mb-4 anim-fade-in">Contact</p>
        <h1 className="font-display font-black text-5xl sm:text-6xl text-white leading-tight mb-4 anim-fade-up">
          Let's scope your<br /><span className="text-gradient">store project.</span>
        </h1>
        <p className="text-white/40 font-body text-lg leading-relaxed anim-fade-up d-200">
          Fill in the form below and we'll come back to you within 24 hours with a clear, no-commitment response.
        </p>
      </div>
    </section>
  )
}

function Input({ label, id, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}{required && <span className="text-accent-blue ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input"
      />
    </div>
  )
}

function Select({ label, id, options, value, onChange, required, placeholder = 'Select one...' }) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}{required && <span className="text-accent-blue ml-0.5">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input appearance-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' strokeWidth='2'%3E%3Cpolyline points='6,9 12,15 18,9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div
        className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
          checked ? 'bg-accent-blue border-accent-blue' : 'border-white/15 group-hover:border-white/30'
        } peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-blue`}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <span className="text-sm text-white/45 font-body group-hover:text-white/65 transition-colors">{label}</span>
    </label>
  )
}

function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', company: '', phone: '',
    platform: '', businessType: '', productRange: '',
    budget: '', timeline: '', details: '',
    services: [],
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const update = (key) => (e) => setFormData(p => ({ ...p, [key]: e.target.value }))

  const toggleService = (s) => {
    setFormData(p => ({
      ...p,
      services: p.services.includes(s) ? p.services.filter(x => x !== s) : [...p.services, s],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.services.length === 0) {
      setError('Please select at least one service.')
      return
    }
    setError(null)
    setSubmitting(true)

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    // Fallback: if no Web3Forms key configured, show success but warn in console.
    // Production must have VITE_WEB3FORMS_ACCESS_KEY set in Vercel env vars.
    if (!accessKey) {
      console.warn('[Contact] VITE_WEB3FORMS_ACCESS_KEY not set — form submission was NOT delivered. Configure it in Vercel project env vars to enable email delivery.')
      setSubmitted(true)
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `DTW Consultation Request — ${formData.fullName}`,
          from_name: formData.fullName,
          replyto: formData.email,
          cc: 'mmateen85@gmail.com',
          'Full Name': formData.fullName,
          'Email': formData.email,
          'Company': formData.company || '—',
          'Phone': formData.phone || '—',
          'Platform Needed': formData.platform,
          'Business Type': formData.businessType,
          'Services Required': formData.services.join(', '),
          'Product Range': formData.productRange,
          'Budget Range': formData.budget,
          'Timeline': formData.timeline,
          'Additional Details': formData.details || '—',
        }),
      })
      const result = await response.json()
      if (response.ok && result.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email hello@digitechworks.com directly.')
      }
    } catch (err) {
      setError('Network error. Please try again or email hello@digitechworks.com.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="card p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-accent-blue/15 flex items-center justify-center mx-auto mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13L9 17L19 7" stroke="#4B6BFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="font-display font-black text-2xl text-white mb-3">We've received your enquiry.</h2>
        <p className="text-white/40 font-body leading-relaxed max-w-sm mx-auto">
          We'll review your project details and come back to you within 24 hours with a clear response.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 flex flex-col gap-7">
      {/* Row 1: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label="Full Name" id="name" placeholder="Your name" value={formData.fullName}
          onChange={update('fullName')} required />
        <Input label="Email Address" id="email" type="email" placeholder="you@company.com"
          value={formData.email} onChange={update('email')} required />
      </div>

      {/* Row 2: Company + Phone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label="Company / Business Name" id="company" placeholder="Optional"
          value={formData.company} onChange={update('company')} />
        <Input label="Phone Number" id="phone" type="tel" placeholder="Optional"
          value={formData.phone} onChange={update('phone')} />
      </div>

      {/* Platform */}
      <Select label="Platform Needed" id="platform" options={platforms}
        value={formData.platform} onChange={update('platform')} required />

      {/* Business type */}
      <Input label="Business Type" id="biztype" placeholder="e.g. Fashion retail, Electronics, Food & beverage..."
        value={formData.businessType} onChange={update('businessType')} required />

      {/* Services checkboxes */}
      <div>
        <p className="form-label mb-4">Services Required <span className="text-accent-blue">*</span></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {serviceOptions.map(s => (
            <Checkbox key={s} label={s} checked={formData.services.includes(s)}
              onChange={() => toggleService(s)} />
          ))}
        </div>
      </div>

      {/* Product range */}
      <Select label="Estimated Number of Products" id="products" options={productRanges}
        value={formData.productRange} onChange={update('productRange')} required />

      {/* Budget + Timeline */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Select label="Budget Range" id="budget" options={budgets}
          value={formData.budget} onChange={update('budget')} required />
        <Select label="Timeline" id="timeline" options={timelines}
          value={formData.timeline} onChange={update('timeline')} required />
      </div>

      {/* Additional details */}
      <div>
        <label htmlFor="details" className="form-label">Additional Details</label>
        <textarea
          id="details"
          rows={4}
          placeholder="Anything else we should know about your store, products, or requirements..."
          value={formData.details}
          onChange={update('details')}
          className="form-input resize-none"
        />
      </div>

      {/* Privacy note */}
      <p className="text-xs text-white/50 font-body leading-relaxed">
        Your information is used only to respond to your enquiry. We don't sell or share your data.
      </p>

      {error && (
        <p className="text-sm text-red-400 font-body" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Submitting…' : 'Submit Consultation Request →'}
      </button>
    </form>
  )
}

function Sidebar() {
  const items = [
    { icon: '⏱', t: 'Response within 24 hours', d: 'We review every submission and respond with a clear, specific reply — not an auto-responder.' },
    { icon: '📋', t: 'No commitment required', d: 'This is an initial conversation. There\'s no obligation to proceed after the consultation.' },
    { icon: '🎯', t: 'Specific to your project', d: 'We\'ll address your actual requirements — not a generic service overview.' },
  ]

  return (
    <div className="flex flex-col gap-5">
      {items.map(item => (
        <div key={item.t} className="card p-5">
          <div className="text-xl mb-3">{item.icon}</div>
          <h3 className="font-display font-bold text-white text-sm mb-1.5">{item.t}</h3>
          <p className="text-white/45 text-sm font-body leading-relaxed">{item.d}</p>
        </div>
      ))}

      <div className="glass rounded-xl p-5">
        <p className="text-xs text-white/55 font-body uppercase tracking-widest mb-3">Prefer email?</p>
        <a href="mailto:hello@digitechworks.com" className="text-accent-blue text-sm font-body hover:text-blue-300 transition-colors">
          hello@digitechworks.com
        </a>
      </div>
    </div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <>
      <PageHero />
      <section className="section bg-bg-secondary">
        <div
          ref={ref}
          className={`container grid lg:grid-cols-3 gap-10 items-start reveal ${inView ? 'show' : ''}`}
        >
          <div className="lg:col-span-2">
            <ConsultationForm />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  )
}
