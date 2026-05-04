// src/pages/About.jsx
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const principles = [
  {
    n: '01',
    t: 'Structure before speed.',
    d: "Most ecommerce setup problems trace back to a catalog architecture or configuration that wasn't thought through on day one. We plan store structure before we touch a single setting. It takes more time upfront and saves significant rework later.",
  },
  {
    n: '02',
    t: 'Platform capability, not workarounds.',
    d: "We work within what your chosen platform does well. We don't hack around limitations or build fragile workarounds that break on the next update. If a platform can't do something natively, we tell you honestly.",
  },
  {
    n: '03',
    t: 'Handover-ready from the start.',
    d: "Every store we build is configured so you can operate it without us. Admin panels are organized, naming conventions are documented, and settings are logical. We're not building dependency — we're building operational clarity.",
  },
  {
    n: '04',
    t: 'Ecommerce-specific, not generic.',
    d: "We work exclusively on ecommerce store setup. That means every default decision, every structural recommendation, and every platform suggestion is informed by ecommerce-specific experience — not adapted from general web design practice.",
  },
]

const capabilities = [
  'Shopify store setup and configuration',
  'WooCommerce setup and plugin stack configuration',
  'OpenCart installation and setup',
  'Product catalog architecture',
  'Bulk product upload and management',
  'Payment gateway integration',
  'Shipping configuration',
  'Store theme customization',
  'Brand identity application',
  'Social media profile setup and alignment',
  'SEO-ready product and page structure',
  'Ecommerce content setup',
]

function PageHero() {
  return (
    <section className="pt-32 pb-16 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="container relative">
        <p className="label mb-4 anim-fade-in">About DTW</p>
        <h1 className="font-display font-black text-5xl sm:text-6xl text-white leading-tight mb-6 anim-fade-up max-w-2xl">
          Ecommerce store setup,<br /><span className="text-gradient">done properly.</span>
        </h1>
        <p className="text-white/40 font-body text-lg leading-relaxed max-w-xl anim-fade-up d-200">
          DigiTechWorks is an ecommerce services agency focused entirely on getting stores live — correctly, efficiently, and without the operational mess that comes from improvised setup.
        </p>
      </div>
    </section>
  )
}

function WhatWeBelieve() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className={`section bg-bg-secondary reveal ${inView ? 'show' : ''}`}>
      <div className="container grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="label mb-4">Our Philosophy</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-5 leading-tight">
            Ecommerce setup is operational work. We treat it that way.
          </h2>
          <p className="text-white/40 font-body leading-relaxed mb-5">
            Most businesses underestimate the setup work involved in launching a real ecommerce store. They assume the platform handles it — until they're three weeks in with an inconsistent catalog, broken payment settings, and shipping zones that don't match their actual delivery coverage.
          </p>
          <p className="text-white/40 font-body leading-relaxed">
            DTW exists to handle that operational layer professionally. We treat store setup as the business-critical task it actually is — not a side job done between other projects.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {principles.map((p, i) => <PrincipleCard key={p.n} {...p} delay={i*80} />)}
        </div>
      </div>
    </section>
  )
}

function PrincipleCard({ n, t, d, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`card p-5 reveal ${inView ? 'show' : ''}`} style={{transitionDelay:`${delay}ms`}}>
      <div className="flex gap-4 items-start">
        <span className="font-display font-black text-2xl text-gradient-warm opacity-20 leading-none flex-shrink-0">{n}</span>
        <div>
          <h3 className="font-display font-bold text-white text-sm mb-1.5">{t}</h3>
          <p className="text-white/35 text-sm font-body leading-relaxed">{d}</p>
        </div>
      </div>
    </div>
  )
}

function Capabilities() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className={`section bg-bg-primary reveal ${inView ? 'show' : ''}`}>
      <div className="container">
        <p className="label mb-4">Capabilities</p>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-10 max-w-xl">
          What we actually do — without the vague language.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {capabilities.map((c, i) => (
            <div key={i} className="card p-4 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
              <span className="text-sm text-white/50 font-body">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const [ref, inView] = useInView()
  const steps = [
    { t:'Scope First', d:"Every project starts with a documented scope. You know exactly what's included before we invoice anything." },
    { t:'Structured Build', d:"We follow a defined build sequence — configuration before content, structure before upload." },
    { t:'QA Before Handover', d:"We review every store across desktop and mobile before declaring it done." },
    { t:'Documented Handover', d:"You receive a handover document covering settings, admin access, and how to manage the store independently." },
  ]

  return (
    <section ref={ref} className={`section bg-bg-secondary reveal ${inView ? 'show' : ''}`}>
      <div className="container">
        <p className="label mb-4">How We Work</p>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-10 max-w-xl">
          No project management theatre. Just structured delivery.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <StepCard key={s.t} n={i+1} {...s} delay={i*80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ n, t, d, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`card p-6 reveal ${inView ? 'show' : ''}`} style={{transitionDelay:`${delay}ms`}}>
      <div className="font-display font-black text-4xl text-gradient-warm opacity-15 mb-4 leading-none">
        {String(n).padStart(2,'0')}
      </div>
      <h3 className="font-display font-bold text-white text-base mb-2">{t}</h3>
      <p className="text-white/35 text-sm font-body leading-relaxed">{d}</p>
    </div>
  )
}

function AboutCTA() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className={`section bg-bg-primary reveal ${inView ? 'show' : ''}`}>
      <div className="container text-center max-w-xl mx-auto">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
          Ready to work with a team that takes ecommerce setup seriously?
        </h2>
        <p className="text-white/40 font-body mb-7 leading-relaxed">
          Book a consultation — we'll understand your requirements and give you a clear, honest assessment of what your store setup involves.
        </p>
        <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHero />
      <WhatWeBelieve />
      <Capabilities />
      <Process />
      <AboutCTA />
    </>
  )
}
