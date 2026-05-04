// src/pages/Platforms.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { platforms } from '../data/platforms'

function PageHero() {
  return (
    <section className="pt-32 pb-16 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-indigo/5 rounded-full blur-3xl" />
      <div className="container relative">
        <p className="label mb-4 anim-fade-in">Platforms</p>
        <h1 className="font-display font-black text-5xl sm:text-6xl text-white leading-tight mb-5 anim-fade-up">
          Shopify. WooCommerce.<br /><span className="text-gradient">OpenCart.</span>
        </h1>
        <p className="text-white/40 font-body text-lg leading-relaxed max-w-xl anim-fade-up d-200">
          We work across three major ecommerce platforms in operational depth. Here's what we can do on each — and which is right for your business.
        </p>
      </div>
    </section>
  )
}

function PlatformNav({ active, setActive }) {
  return (
    <div className="sticky top-[68px] z-40 bg-bg-secondary border-b border-white/5 py-4">
      <div className="container flex gap-4 overflow-x-auto">
        {platforms.map(p => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`flex-shrink-0 px-5 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200 ${
              active === p.id
                ? 'bg-accent-blue text-white'
                : 'text-white/40 hover:text-white/70 glass'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  )
}

function PlatformDetail({ platform }) {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      id={platform.id}
      className={`section bg-bg-primary border-t border-white/5 reveal ${inView ? 'show' : ''}`}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">{platform.name}</h2>
          <p className="text-accent-cyan text-sm font-body mb-4">{platform.tagline}</p>
          <p className="text-white/45 font-body leading-relaxed">{platform.summary}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* What we do */}
          <div className="lg:col-span-2">
            <p className="label mb-5">What DTW Does on {platform.name}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {platform.whatWeDo.map((item, i) => (
                <div key={i} className="card p-4 flex items-start gap-3">
                  <span className="font-display font-black text-sm text-accent-blue/30 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-white/50 font-body leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Ideal for */}
            <div className="card p-5">
              <p className="label mb-4">Ideal For</p>
              <ul className="flex flex-col gap-2.5">
                {platform.idealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-white/45 font-body leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strengths */}
            <div className="card p-5">
              <p className="label mb-4">Strengths</p>
              <ul className="flex flex-col gap-2.5">
                {platform.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-accent-blue text-xs mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-white/45 font-body leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations */}
            <div className="glass rounded-xl p-5">
              <p className="label mb-4">Considerations</p>
              <ul className="flex flex-col gap-2.5">
                {platform.limitations.map((l, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-white/20 text-xs mt-0.5 flex-shrink-0">—</span>
                    <span className="text-sm text-white/35 font-body leading-relaxed">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Link to="/contact" className="btn-primary">
          Start a {platform.name} Project →
        </Link>
      </div>
    </section>
  )
}

function ComparisonTable() {
  const [ref, inView] = useInView()
  const rows = [
    { label: 'Hosting',          shopify: 'Included', woo: 'Self-managed', opencart: 'Self-managed' },
    { label: 'Platform Cost',    shopify: '$39+/mo',  woo: 'Free (plugin)', opencart: 'Free' },
    { label: 'Setup Complexity', shopify: 'Low',      woo: 'Medium',        opencart: 'Medium' },
    { label: 'Plugin Ecosystem', shopify: 'Very large', woo: 'Very large',  opencart: 'Large' },
    { label: 'Multi-currency',   shopify: 'Built-in', woo: 'Plugin',        opencart: 'Built-in' },
    { label: 'Best For',         shopify: 'Speed & ease', woo: 'Flexibility', opencart: 'Low cost' },
  ]

  return (
    <section ref={ref} className={`section bg-bg-secondary border-t border-white/5 reveal ${inView ? 'show' : ''}`}>
      <div className="container">
        <p className="label mb-4">Platform Comparison</p>
        <h2 className="font-display font-black text-3xl text-white mb-10">Not sure which platform is right?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-3 pr-6 text-white/30 font-medium w-40"></th>
                {['Shopify','WooCommerce','OpenCart'].map(p => (
                  <th key={p} className="text-left py-3 px-4 text-white font-display font-bold">{p}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                  <td className="py-3.5 pr-6 text-white/35 font-medium">{r.label}</td>
                  <td className="py-3.5 px-4 text-white/55">{r.shopify}</td>
                  <td className="py-3.5 px-4 text-white/55">{r.woo}</td>
                  <td className="py-3.5 px-4 text-white/55">{r.opencart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 glass rounded-xl p-6">
          <p className="text-sm text-white/50 font-body leading-relaxed">
            <span className="text-white font-medium">Still unsure?</span> Book a free consultation and we'll recommend the right platform based on your business type, budget, technical capacity, and growth plans.
          </p>
          <Link to="/contact" className="btn-ghost mt-4 inline-flex">Book a Free Consultation →</Link>
        </div>
      </div>
    </section>
  )
}

export default function Platforms() {
  const [active, setActive] = useState(platforms[0].id)

  return (
    <>
      <PageHero />
      <PlatformNav active={active} setActive={setActive} />
      {platforms.map(p => <PlatformDetail key={p.id} platform={p} />)}
      <ComparisonTable />
    </>
  )
}
