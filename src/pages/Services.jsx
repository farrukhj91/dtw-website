// src/pages/Services.jsx
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { services } from '../data/services'

function PageHero() {
  return (
    <section className="pt-32 pb-16 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="container relative">
        <p className="label mb-4 anim-fade-in">Services</p>
        <h1 className="font-display font-black text-5xl sm:text-6xl text-white leading-tight mb-5 anim-fade-up">
          What we set up<br /><span className="text-gradient">and how we do it.</span>
        </h1>
        <p className="text-white/40 font-body text-lg leading-relaxed max-w-xl anim-fade-up d-200">
          Each service is scoped, documented, and delivered systematically. From initial store setup to ongoing monthly operations.
        </p>
      </div>
    </section>
  )
}

function ServiceSection({ service, index }) {
  const [ref, inView] = useInView()
  const isEven = index % 2 === 0

  return (
    <section
      id={service.id}
      ref={ref}
      className={`section border-t border-white/5 reveal ${inView ? 'show' : ''} ${isEven ? 'bg-bg-primary' : 'bg-bg-secondary'}`}
    >
      <div className="container grid lg:grid-cols-2 gap-14 items-start">
        <div className={isEven ? '' : 'lg:order-2'}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-xl">
              {service.icon}
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">{service.title}</h2>
          </div>

          {service.isRetainer && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              <span className="text-xs text-accent-cyan font-body font-medium">Monthly Retainer Service</span>
            </div>
          )}

          <p className="text-white/60 font-body text-base leading-relaxed mb-5">{service.tagline}</p>

          <div className="glass rounded-xl p-5 mb-5">
            <p className="text-xs text-white/30 uppercase tracking-widest font-body mb-2">Who It Is For</p>
            <p className="text-sm text-white/55 font-body leading-relaxed">{service.who}</p>
          </div>

          {service.isRetainer && service.retainerNote && (
            <div className="glass rounded-xl p-5 mb-5 border border-accent-cyan/10">
              <p className="text-xs text-white/30 uppercase tracking-widest font-body mb-2">Retainer Note</p>
              <p className="text-sm text-white/55 font-body leading-relaxed">{service.retainerNote}</p>
            </div>
          )}

          <div>
            <p className="label mb-4">Deliverables</p>
            <ul className="flex flex-col gap-2">
              {service.deliverables.map(d => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-4 h-4 rounded-full bg-accent-blue/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  </span>
                  <span className="text-sm text-white/55 font-body">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={isEven ? '' : 'lg:order-1'}>
          <p className="label mb-5">What Is Included</p>
          <ul className="flex flex-col gap-3">
            {service.includes.map((item, i) => (
              <li key={i} className="card p-4 flex items-start gap-3">
                <span className="font-display font-black text-sm text-accent-blue/40 flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-white/55 font-body leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ServicesCTA() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className={`section bg-bg-secondary reveal ${inView ? 'show' : ''}`}>
      <div className="container text-center max-w-xl mx-auto">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
          Not sure which services you need?
        </h2>
        <p className="text-white/40 font-body mb-7 leading-relaxed">
          Book a free consultation and we will scope exactly what is required for your store, platform, and product range — no commitment needed.
        </p>
        <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero />
      {services.map((s, i) => <ServiceSection key={s.id} service={s} index={i} />)}
      <ServicesCTA />
    </>
  )
}
