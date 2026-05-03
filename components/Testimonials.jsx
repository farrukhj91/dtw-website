// src/components/Testimonials.jsx
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    quote:
      "DTW had our Shopify store fully configured and stocked with 200+ products in under two weeks. The attention to detail — from category structure to the product descriptions — made us look like a proper brand from day one.",
    name: 'Sana Mirza',
    role: 'Founder, HarvestCo',
    initials: 'SM',
    color: 'from-accent-blue to-accent-indigo',
  },
  {
    quote:
      "We tried to set up OpenCart ourselves and wasted two months. DigiTechWorks got everything done — store, payment gateway, catalog, and social pages — in ten days. Should have called them first.",
    name: 'Raza Khalid',
    role: 'Director, TechSupply PK',
    initials: 'RK',
    color: 'from-accent-indigo to-accent-cyan',
  },
  {
    quote:
      "The branding work DTW did across our store and social profiles gave us a consistent look we were missing. Our conversion rate improved noticeably just from having a more professional presence.",
    name: 'Alina Tariq',
    role: 'CEO, LuxeKraft Studio',
    initials: 'AT',
    color: 'from-accent-cyan to-accent-blue',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView()

  return (
    <section className="section-pad bg-bg-primary relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-accent-indigo/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 pre-anim ${inView ? 'in-view' : ''}`}
        >
          <span className="inline-block text-xs text-accent-cyan uppercase tracking-[0.2em] font-medium mb-4">
            Client Stories
          </span>
          <h2 className="font-display font-700 text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Stores Launched.<br />
            <span className="text-gradient">Clients Happy.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, name, role, initials, color, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-accent-blue/20 hover:-translate-y-1 transition-all duration-300 pre-anim ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Quote mark */}
      <div className="font-display text-5xl text-accent-blue/20 leading-none mb-4 select-none">"</div>

      <p className="text-white/60 text-sm leading-relaxed flex-1 mb-8">
        {quote}
      </p>

      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-xs font-display font-700">{initials}</span>
        </div>
        <div>
          <p className="text-white font-display font-600 text-sm">{name}</p>
          <p className="text-white/30 text-xs">{role}</p>
        </div>
        {/* Star rating */}
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xs">★</span>
          ))}
        </div>
      </div>
    </div>
  )
}
