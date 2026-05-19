// src/pages/About.jsx
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const principles = [
  {
    n: '01',
    t: 'Structure before speed.',
    d: "Most ecommerce setup problems trace back to a catalog architecture or configuration decision that wasn't thought through on day one. We plan store structure before we touch a single setting. It takes more time upfront and saves significant rework later.",
  },
  {
    n: '02',
    t: 'Platform capability, not workarounds.',
    d: "We work within what your chosen platform does well. We don't hack around limitations or build fragile workarounds that break on the next update. If a platform can't do something natively, we tell you honestly.",
  },
  {
    n: '03',
    t: 'Handover-ready from the start.',
    d: "Every store we build is configured so you can operate it without us. Admin panels are organized, naming conventions are documented, and settings are logical. We build operational clarity — not dependency.",
  },
  {
    n: '04',
    t: 'Ecommerce-specific, not generic.',
    d: "We work exclusively on ecommerce store setup. Every default decision, every structural recommendation, and every platform suggestion is informed by ecommerce-specific experience — not adapted from general web design practice.",
  },
]

const capabilities = [
  'Shopify store setup and configuration',
  'WooCommerce setup and plugin stack configuration',
  'OpenCart installation and setup',
  'Magento setup and catalog architecture',
  'BigCommerce setup and multi-channel configuration',
  'Product catalog architecture and taxonomy',
  'Bulk product upload and management',
  'Payment gateway integration',
  'Shipping configuration across multiple zones',
  'Store theme customization',
  'Brand identity application',
  'Social media profile setup and alignment',
  'SEO-ready product and page structure',
  'Ecommerce content setup',
  'Post-launch operations and maintenance',
  'Order fulfillment monitoring',
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
            Most businesses underestimate the setup work involved in launching a real ecommerce store. They assume the platform handles it — until they are three weeks in with an inconsistent catalog, broken payment settings, and shipping zones that do not match their actual delivery coverage.
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
          <p className="text-white/45 text-sm font-body leading-relaxed">{d}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Agile Delivery ────────────────────────────────────── */
function AgileDelivery() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className={`section bg-bg-primary reveal ${inView ? 'show' : ''}`}>
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="label mb-4">How We Deliver</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-5 leading-tight">
            Structured Agile delivery.<br />Not improvised execution.
          </h2>
          <p className="text-white/40 font-body leading-relaxed mb-5">
            Every DTW project follows a structured Agile delivery process. After an initial requirements gathering phase — where we document your product data, access requirements, and store configuration needs — we move into sprint-based implementation.
          </p>
          <p className="text-white/40 font-body leading-relaxed mb-5">
            Each sprint delivers a defined piece of the store: configuration first, then content, then catalog. You review at each milestone. Nothing progresses without your sign-off. Nothing goes live without passing QA.
          </p>
          <p className="text-white/40 font-body leading-relaxed">
            The outcome is a store that is built correctly, documented thoroughly, and handed over with clarity — not a rushed launch followed by weeks of fixing problems.
          </p>
        </div>

        {/* Process visual */}
        <div className="flex flex-col gap-3">
          {[
            { n:'01', t:'Requirements Gathering', d:'Product data, access credentials, existing systems, and business requirements documented.' },
            { n:'02', t:'Requirements Analysis & SRS', d:'Internal review, scope finalisation, and a written project plan agreed with you before build begins.' },
            { n:'03', t:'Implementation Planning', d:'Backlog created, sprints defined, resources assigned, and timeline confirmed.' },
            { n:'04', t:'Sprint-Based Implementation', d:'PM, QA, and implementation working in structured collaboration. Client checkpoints at each sprint.' },
            { n:'05', t:'QA, Handover & Go-Live', d:'Full QA pass. Handover documentation. Store live and operational.' },
          ].map((step, i) => (
            <AgileStep key={step.n} {...step} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AgileStep({ n, t, d, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`card p-4 flex items-start gap-4 reveal ${inView ? 'show' : ''}`} style={{transitionDelay:`${delay}ms`}}>
      <span className="font-display font-black text-xl text-gradient-warm opacity-25 flex-shrink-0 leading-none mt-0.5">{n}</span>
      <div>
        <h3 className="font-display font-bold text-white text-sm mb-1">{t}</h3>
        <p className="text-white/45 text-xs font-body leading-relaxed">{d}</p>
      </div>
    </div>
  )
}

function Capabilities() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className={`section bg-bg-secondary reveal ${inView ? 'show' : ''}`}>
      <div className="container">
        <p className="label mb-4">Capabilities</p>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-10 max-w-xl">
          What we actually do — without the vague language.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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

function AboutCTA() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className={`section bg-bg-primary reveal ${inView ? 'show' : ''}`}>
      <div className="container text-center max-w-xl mx-auto">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
          Ready to work with a team that takes ecommerce setup seriously?
        </h2>
        <p className="text-white/40 font-body mb-7 leading-relaxed">
          Book a consultation — we will understand your requirements and give you a clear, honest picture of what your store setup involves.
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
      <AgileDelivery />
      <Capabilities />
      <AboutCTA />
    </>
  )
}
