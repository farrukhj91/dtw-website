// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'

/* ─── Hero ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-3xl anim-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-indigo/5 rounded-full blur-3xl anim-glow" style={{animationDelay:'2s'}} />

      <div className="container relative">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-accent-cyan font-body font-medium mb-8 anim-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            Shopify · WooCommerce · OpenCart
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight mb-6 anim-fade-up">
            Your ecommerce store,<br />
            <span className="text-gradient">set up properly.</span>
          </h1>

          <p className="text-white/45 text-lg leading-relaxed max-w-xl mb-10 font-body anim-fade-up d-200">
            We handle the technical setup, catalog structure, and store configuration across Shopify, WooCommerce, and OpenCart — so your store launches clean and runs without operational headaches.
          </p>

          <div className="flex flex-wrap gap-4 mb-14 anim-fade-up d-300">
            <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
            <Link to="/services" className="btn-ghost">View Services</Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-8 anim-fade-up d-400">
            {[
              { n: '48hr',  l: 'Average kickoff time' },
              { n: '3',     l: 'Major platforms covered' },
              { n: '100%',  l: 'Platform-native builds' },
            ].map(({ n, l }) => (
              <div key={l}>
                <p className="font-display font-black text-2xl text-white">{n}</p>
                <p className="text-xs text-white/30 font-body mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Platforms bar ─────────────────────────────────────── */
function PlatformsBar() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`border-y border-white/5 bg-bg-secondary py-10 reveal ${inView ? 'show' : ''}`}>
      <div className="container">
        <p className="label text-center mb-8">Platform Expertise</p>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {['Shopify','WooCommerce','OpenCart','BigCommerce','Wix Stores'].map((p, i) => (
            <span key={p} className="font-display font-bold text-lg text-white/15 hover:text-white/40 transition-colors cursor-default" style={{transitionDelay:`${i*50}ms`}}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Services overview ─────────────────────────────────── */
const overviewServices = [
  { icon:'🛍', title:'Shopify Setup', desc:'Full store configuration, payment, shipping, and catalog setup on Shopify.' },
  { icon:'🛒', title:'WooCommerce Setup', desc:'WordPress ecommerce configured correctly from installation to launch.' },
  { icon:'🏪', title:'OpenCart Setup', desc:'Open-source store setup for businesses prioritizing platform flexibility and low overhead.' },
  { icon:'📦', title:'Product Upload', desc:'Structured, SEO-ready product listings uploaded at scale — accurately and consistently.' },
  { icon:'🎨', title:'Store Customization', desc:'Brand-aligned store design using platform-native tools. No custom dev needed.' },
  { icon:'📱', title:'Social & Branding', desc:'Brand consistency from your store to your social presence, configured and aligned.' },
]

function ServicesOverview() {
  const [ref, inView] = useInView()
  return (
    <section className="section bg-bg-primary">
      <div className="container">
        <div ref={ref} className={`max-w-xl mb-14 reveal ${inView ? 'show' : ''}`}>
          <p className="label mb-3">What We Do</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-4">
            Every layer of your store setup — covered.
          </h2>
          <p className="text-white/40 font-body leading-relaxed">
            From initial platform configuration to product catalog uploads, we handle the operational work so you don't have to figure it out yourself.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {overviewServices.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 70} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="btn-ghost">View Full Service Details →</Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`card p-6 group reveal ${inView ? 'show' : ''}`} style={{transitionDelay:`${delay}ms`}}>
      <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-lg mb-5 group-hover:bg-accent-blue/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-display font-bold text-white text-base mb-2">{title}</h3>
      <p className="text-white/35 text-sm leading-relaxed font-body">{desc}</p>
    </div>
  )
}

/* ─── Process ───────────────────────────────────────────── */
const steps = [
  { n:'01', t:'Discovery Call', d:'A 30-minute conversation to understand your business, platform needs, product range, and timeline. No commitment required.' },
  { n:'02', t:'Store Planning', d:'We map your category structure, page architecture, and platform configuration before touching anything live.' },
  { n:'03', t:'Setup & Configuration', d:'Platform installation, theme setup, payment and shipping configuration — done systematically, not haphazardly.' },
  { n:'04', t:'Content & Product Upload', d:'Your catalog goes live — structured, SEO-ready, and consistently formatted across every listing.' },
  { n:'05', t:'Launch & Handover', d:'Final QA across desktop and mobile. You receive a handover document with everything documented.' },
]

function Process() {
  const [ref, inView] = useInView()
  return (
    <section className="section bg-bg-secondary">
      <div className="container">
        <div ref={ref} className={`max-w-xl mb-14 reveal ${inView ? 'show' : ''}`}>
          <p className="label mb-3">How We Work</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-4">
            A structured process. No surprises.
          </h2>
          <p className="text-white/40 font-body leading-relaxed">
            Every project follows the same disciplined sequence — so you know exactly where things stand at every stage.
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-2xl">
          {steps.map((s, i) => <ProcessStep key={s.n} {...s} delay={i*80} />)}
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ n, t, d, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`card p-6 flex gap-6 items-start hover:border-accent-blue/20 reveal ${inView ? 'show' : ''}`} style={{transitionDelay:`${delay}ms`}}>
      <span className="font-display font-black text-3xl text-gradient-warm opacity-20 leading-none flex-shrink-0 mt-0.5">{n}</span>
      <div>
        <h3 className="font-display font-bold text-white text-base mb-1.5">{t}</h3>
        <p className="text-white/35 text-sm leading-relaxed font-body">{d}</p>
      </div>
    </div>
  )
}

/* ─── Featured Projects ─────────────────────────────────── */
function FeaturedProjects() {
  const [ref, inView] = useInView()
  return (
    <section className="section bg-bg-primary">
      <div className="container">
        <div ref={ref} className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 reveal ${inView ? 'show' : ''}`}>
          <div>
            <p className="label mb-3">Recent Work</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Stores we've launched.
            </h2>
          </div>
          <Link to="/portfolio" className="btn-ghost flex-shrink-0">View All Projects →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.slice(0, 2).map((p, i) => <ProjectCard key={p.id} {...p} delay={i*100} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ name, category, platform, badge, color, accentColor, summary, metrics, tags, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`card p-7 reveal ${inView ? 'show' : ''}`} style={{transitionDelay:`${delay}ms`}}>
      <div className={`w-full h-28 rounded-xl bg-gradient-to-br ${color} mb-6 flex items-center justify-center`}>
        <span className={`font-display font-black text-3xl ${accentColor} opacity-40`}>{name[0]}</span>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xs text-white/30 font-body uppercase tracking-widest">{category}</span>
        <span className="text-white/15">·</span>
        <span className={`text-2xs font-body font-medium uppercase tracking-widest ${accentColor}`}>{badge}</span>
      </div>
      <h3 className="font-display font-bold text-white text-xl mb-2">{name}</h3>
      <p className="text-white/35 text-sm leading-relaxed font-body mb-5">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {metrics.map(m => (
          <span key={m} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 font-body">{m}</span>
        ))}
      </div>
    </div>
  )
}

/* ─── Why DTW ───────────────────────────────────────────── */
const reasons = [
  { t:'Ecommerce-only focus', d:'We don\'t do general web design. Every workflow, decision, and default we use is shaped by ecommerce-specific requirements.' },
  { t:'Structured delivery', d:'Projects follow a defined sequence. You get a scope document before we start and a handover document when we finish.' },
  { t:'Platform depth', d:'We know Shopify, WooCommerce, and OpenCart in operational detail — not just the surface settings most generalists touch.' },
  { t:'Catalog-first thinking', d:'We structure your product catalog for manageability and scale — not just to look good on launch day.' },
]

function WhyDTW() {
  const [ref, inView] = useInView()
  return (
    <section className="section bg-bg-secondary">
      <div className="container grid lg:grid-cols-2 gap-16 items-start">
        <div ref={ref} className={`reveal ${inView ? 'show' : ''}`}>
          <p className="label mb-3">Why DTW</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-5">
            Ecommerce setup done by people who do only this.
          </h2>
          <p className="text-white/40 font-body leading-relaxed mb-8">
            Most businesses try to set up their store themselves, waste weeks on avoidable configuration errors, then end up with a catalog structure that becomes a problem six months later. We fix that before it starts.
          </p>
          <Link to="/about" className="btn-ghost">Learn About DTW →</Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {reasons.map((r, i) => <ReasonCard key={r.t} {...r} delay={i*80} />)}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ t, d, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`card p-5 reveal ${inView ? 'show' : ''}`} style={{transitionDelay:`${delay}ms`}}>
      <div className="flex items-start gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
        <div>
          <h3 className="font-display font-bold text-white text-sm mb-1.5">{t}</h3>
          <p className="text-white/35 text-sm leading-relaxed font-body">{d}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Home CTA ──────────────────────────────────────────── */
function HomeCTA() {
  const [ref, inView] = useInView()
  return (
    <section className="section bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-accent-blue/6 rounded-full blur-3xl anim-glow" />
      <div ref={ref} className={`container relative text-center max-w-2xl mx-auto reveal ${inView ? 'show' : ''}`}>
        <p className="label mb-4">Get Started</p>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-5">
          Ready to launch your store?
        </h2>
        <p className="text-white/40 font-body leading-relaxed mb-8 max-w-lg mx-auto">
          Book a free 30-minute consultation. We'll scope your project, identify the right platform, and tell you exactly what's involved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link to="/contact" className="btn-primary">Book Free Consultation</Link>
          <Link to="/portfolio" className="btn-ghost">See Our Work</Link>
        </div>
        <p className="text-xs text-white/20 font-body">No commitment · Free consultation · Response within 24 hours</p>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <PlatformsBar />
      <ServicesOverview />
      <Process />
      <FeaturedProjects />
      <WhyDTW />
      <HomeCTA />
    </>
  )
}
