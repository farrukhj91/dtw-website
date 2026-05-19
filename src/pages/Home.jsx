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
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl anim-glow pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.22) 0%, rgba(168,85,247,0.10) 40%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl anim-glow pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.20) 0%, rgba(139,92,246,0.10) 40%, transparent 70%)", animationDelay: '2s' }}
      />

      <div className="container relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-accent-cyan font-body font-medium mb-8 anim-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            Shopify · WooCommerce · OpenCart · Magento · BigCommerce
          </div>

          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight mb-6 anim-fade-up">
            Your ecommerce store,<br />
            <span className="text-gradient">set up properly.</span>
          </h1>

          <p className="text-white/45 text-lg leading-relaxed max-w-xl mb-10 font-body anim-fade-up d-200">
            We handle every layer of your store setup — platform configuration, catalog structure, branding, and ongoing operations — so you launch clean and sell without technical friction.
          </p>

          <div className="flex flex-wrap gap-4 mb-14 anim-fade-up d-300">
            <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
            <Link to="/services" className="btn-ghost">View Services</Link>
          </div>

          <div className="flex flex-wrap gap-10 anim-fade-up d-400">
            {[
              { n: '5',     l: 'Platforms supported' },
              { n: '48hr',  l: 'Average kickoff time' },
              { n: '3',     l: 'Stages: Plan, Build, Operate' },
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

/* ─── Why Go Online (Awareness) ─────────────────────────── */
const awarenessPoints = [
  {
    icon: '📦',
    title: 'Your products deserve more than WhatsApp orders',
    desc: 'Manual order taking through messages and calls doesn\'t scale — and it costs you sales every time someone can\'t reach you. A store works 24/7 without you.',
  },
  {
    icon: '🌍',
    title: 'Your next customer is already searching online',
    desc: 'Buyers research before they purchase. If your business isn\'t findable online, that sale goes to someone who is. An ecommerce store is your permanent, searchable presence.',
  },
  {
    icon: '📊',
    title: 'Visibility into what\'s actually selling',
    desc: 'A properly configured store tells you exactly what sells, when, and to whom. You stop guessing inventory and start making decisions based on real data.',
  },
  {
    icon: '🔄',
    title: 'Operational control you don\'t have right now',
    desc: 'Payments, invoices, shipping labels, order history — all in one place. The manual back-and-forth gets replaced by a system that runs predictably.',
  },
]

function WhyGoOnline() {
  const [ref, inView] = useInView()
  return (
    <section className="section bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/4 rounded-full blur-3xl" />
      <div className="container relative">
        <div ref={ref} className={`max-w-2xl mb-14 reveal ${inView ? 'show' : ''}`}>
          <p className="label mb-3">Why Ecommerce</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-4">
            Still selling manually?<br />
            <span className="text-gradient">Here is what that costs you.</span>
          </h2>
          <p className="text-white/40 font-body leading-relaxed">
            Most businesses know they need an online store. What they underestimate is how much revenue and operational clarity they lose every month without one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {awarenessPoints.map((p, i) => (
            <AwarenessCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>

        {/* Conversion nudge */}
        <div className="glass rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-white text-lg mb-1">
              Ready to move from manual to operational?
            </p>
            <p className="text-white/40 text-sm font-body">
              Book a free 30-minute call. We\'ll tell you exactly what your store setup involves.
            </p>
          </div>
          <Link to="/contact" className="btn-primary flex-shrink-0">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}

function AwarenessCard({ icon, title, desc, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`card p-6 reveal ${inView ? 'show' : ''}`} style={{transitionDelay:`${delay}ms`}}>
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="font-display font-bold text-white text-base mb-2">{title}</h3>
      <p className="text-white/40 text-sm font-body leading-relaxed">{desc}</p>
    </div>
  )
}

/* ─── Platforms bar ─────────────────────────────────────── */
function PlatformsBar() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`border-y border-white/5 bg-bg-primary py-10 reveal ${inView ? 'show' : ''}`}>
      <div className="container">
        <p className="label text-center mb-8">Platform Expertise</p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {['Shopify', 'WooCommerce', 'OpenCart', 'Magento', 'BigCommerce'].map((p, i) => (
            <span key={p} className="font-display font-bold text-lg text-white/15 hover:text-white/45 transition-colors duration-300 cursor-default" style={{transitionDelay:`${i*50}ms`}}>
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
  { icon:'🏪', title:'OpenCart Setup', desc:'Open-source store setup for businesses prioritizing flexibility and low overhead.' },
  { icon:'⚙️', title:'Magento Setup', desc:'Enterprise-grade ecommerce for complex catalogs, B2B, and high-volume operations.' },
  { icon:'🚀', title:'BigCommerce Setup', desc:'Scalable hosted ecommerce with no transaction fees — fully configured.' },
  { icon:'📦', title:'Product Upload', desc:'Structured, SEO-ready product listings uploaded at scale — accurately and consistently.' },
  { icon:'🎨', title:'Store Customization', desc:'Brand-aligned store design using platform-native tools. No custom dev required.' },
  { icon:'🔧', title:'Operations & Maintenance', desc:'Ongoing post-launch support — monitoring, order operations, upgrades, and admin tasks on a monthly retainer.' },
]

function ServicesOverview() {
  const [ref, inView] = useInView()
  return (
    <section className="section bg-bg-primary">
      <div className="container">
        <div ref={ref} className={`max-w-xl mb-14 reveal ${inView ? 'show' : ''}`}>
          <p className="label mb-3">What We Do</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-4">
            Every layer of your store — covered.
          </h2>
          <p className="text-white/40 font-body leading-relaxed">
            From initial platform setup to post-launch operations. We handle the technical and operational work so you can focus on running your business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {overviewServices.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 60} />
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
    <div ref={ref} className={`card p-5 group reveal ${inView ? 'show' : ''}`} style={{transitionDelay:`${delay}ms`}}>
      <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-lg mb-4 group-hover:bg-accent-blue/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-display font-bold text-white text-sm mb-2">{title}</h3>
      <p className="text-white/35 text-xs leading-relaxed font-body">{desc}</p>
    </div>
  )
}

/* ─── 3-Stage Process ───────────────────────────────────── */
const stages = [
  {
    number: '01',
    label: 'Consultation & Planning',
    headline: 'Understand. Plan. Align.',
    desc: 'Every project begins with understanding your business, products, and goals — before recommending a platform or writing a single line of configuration. We produce a clear project scope so there are no surprises once work begins.',
    steps: [
      'Discovery call — business type, product range, sales channels',
      'Platform recommendation based on your actual requirements',
      'Store architecture and catalog structure planning',
      'Project scope, timeline, and delivery plan agreed in writing',
    ],
    outcome: 'Platform selected. Scope documented. Ready to build.',
    color: 'from-accent-blue/10 to-transparent',
    accentColor: 'text-accent-blue',
  },
  {
    number: '02',
    label: 'Agile Implementation',
    headline: 'Build. Test. Deliver.',
    desc: 'Store setup follows a structured Agile delivery process — broken into sprints with regular checkpoints. You see progress throughout, not just at the end. Nothing goes live without passing QA on desktop and mobile.',
    steps: [
      'Sprint-based delivery — configuration, then content, then catalog',
      'PM, QA, and implementation team working in structured collaboration',
      'Client review checkpoints at each sprint milestone',
      'Full QA pass before handover — functionality, mobile, and performance',
    ],
    outcome: 'Store live. Tested. Documented. Ready to sell.',
    color: 'from-accent-indigo/10 to-transparent',
    accentColor: 'text-accent-indigo',
  },
  {
    number: '03',
    label: 'Operations & Maintenance',
    headline: 'Monitor. Support. Maintain.',
    desc: 'Launch is not the end of the work — it is where the operational responsibility begins. Our monthly retainer covers system health, order operations, platform updates, and technical support so your store stays reliable long after go-live.',
    steps: [
      'Daily system health monitoring — uptime, performance, alerts',
      'Order fulfillment monitoring and stuck order resolution',
      'Platform upgrades, patching, and admin configuration',
      'End-user technical support and monthly operations report',
    ],
    outcome: 'Store monitored. Issues resolved. Operations stable.',
    color: 'from-accent-cyan/10 to-transparent',
    accentColor: 'text-accent-cyan',
    isRetainer: true,
  },
]

function Process() {
  const [ref, inView] = useInView()
  return (
    <section className="section bg-bg-secondary relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent-indigo/4 rounded-full blur-3xl" />
      <div className="container relative">
        <div ref={ref} className={`max-w-xl mb-16 reveal ${inView ? 'show' : ''}`}>
          <p className="label mb-3">How We Work</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-4">
            Three stages.<br />Zero ambiguity.
          </h2>
          <p className="text-white/40 font-body leading-relaxed">
            From your first call to ongoing operations, every stage of working with DTW follows a defined, documented process. You always know what is happening and what comes next.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {stages.map((stage, i) => <StageCard key={stage.number} stage={stage} delay={i * 100} />)}
        </div>
      </div>
    </section>
  )
}

function StageCard({ stage, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`card p-7 sm:p-8 reveal ${inView ? 'show' : ''}`}
      style={{transitionDelay:`${delay}ms`}}
    >
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Left: number + label */}
        <div className="lg:col-span-1">
          <div className={`font-display font-black text-5xl leading-none mb-2 ${stage.accentColor} opacity-20`}>
            {stage.number}
          </div>
          <p className="label" style={{color: 'inherit'}}>{stage.label}</p>
          {stage.isRetainer && (
            <span className="inline-block mt-2 text-2xs px-2.5 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan font-body font-medium">
              Monthly Retainer
            </span>
          )}
        </div>

        {/* Middle: headline + desc */}
        <div className="lg:col-span-2">
          <h3 className="font-display font-black text-xl text-white mb-3">{stage.headline}</h3>
          <p className="text-white/45 text-sm font-body leading-relaxed">{stage.desc}</p>
        </div>

        {/* Right: steps + outcome */}
        <div className="lg:col-span-2">
          <ul className="flex flex-col gap-2.5 mb-5">
            {stage.steps.map((s, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className={`text-xs mt-0.5 flex-shrink-0 ${stage.accentColor}`}>✓</span>
                <span className="text-sm text-white/45 font-body leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
          <div className={`rounded-xl p-3.5 bg-gradient-to-r ${stage.color}`}>
            <p className="text-xs text-white/35 font-body">
              <span className="text-white/55 font-medium">Outcome: </span>
              {stage.outcome}
            </p>
          </div>
        </div>
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
              Stores we have launched.
            </h2>
          </div>
          <Link to="/portfolio" className="btn-ghost flex-shrink-0">View All Projects →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.slice(0, 2).map((p, i) => (
            <ProjectCard key={p.id} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ name, category, platform, badge, color, accentColor, summary, metrics, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`card p-7 reveal ${inView ? 'show' : ''}`} style={{transitionDelay:`${delay}ms`}}>
      <div className={`w-full h-24 rounded-xl bg-gradient-to-br ${color} mb-6 flex items-center justify-center`}>
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
  { t:'Ecommerce-only focus', d:'We do not do general web design or development. Every workflow, default, and recommendation is shaped by ecommerce-specific operational experience.' },
  { t:'Structured Agile delivery', d:'Projects are broken into defined sprints with client checkpoints. You see progress throughout — not a black box that opens on launch day.' },
  { t:'Platform depth across five platforms', d:'Shopify, WooCommerce, OpenCart, Magento, and BigCommerce — in operational detail, not just surface-level familiarity.' },
  { t:'Post-launch operations covered', d:'We do not disappear after go-live. Our retainer covers monitoring, order operations, upgrades, and support as an ongoing engagement.' },
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
          <p className="text-white/40 font-body leading-relaxed mb-6">
            Most businesses try to set up their store themselves, spend weeks on avoidable configuration problems, then end up with a catalog structure that becomes a management headache six months later. We prevent that before it starts.
          </p>
          <p className="text-white/40 font-body leading-relaxed mb-8">
            DTW is an ecommerce-only agency. Everything we do — platform selection, store architecture, catalog setup, and post-launch operations — is built around one outcome: a store that works correctly and stays that way.
          </p>
          <Link to="/about" className="btn-ghost">Learn About DTW →</Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {reasons.map((r, i) => <ReasonCard key={r.t} {...r} delay={i * 80} />)}
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

/* ─── Conversion CTA ────────────────────────────────────── */
function HomeCTA() {
  const [ref, inView] = useInView()
  return (
    <section className="section bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] bg-accent-blue/6 rounded-full blur-3xl anim-glow" />

      <div ref={ref} className={`container relative reveal ${inView ? 'show' : ''}`}>
        <div className="max-w-3xl mx-auto">
          {/* Main CTA block */}
          <div className="text-center mb-10">
            <p className="label mb-4">Get Started</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight mb-5">
              Ready to launch your store<br />
              <span className="text-gradient">the right way?</span>
            </h2>
            <p className="text-white/40 font-body leading-relaxed mb-8 max-w-lg mx-auto">
              Book a free 30-minute consultation. We will scope your project, recommend the right platform, and give you a clear picture of what your store setup involves — no commitment required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <Link to="/contact" className="btn-primary px-8 py-4 text-base">
                Book Free Consultation
              </Link>
              <Link to="/portfolio" className="btn-ghost px-8 py-4 text-base">
                See Our Work
              </Link>
            </div>
            <p className="text-xs text-white/20 font-body">
              No commitment · Free consultation · Response within 24 hours
            </p>
          </div>

          {/* Trust signals row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon:'📋', t:'Scoped before we start', d:'You receive a written project scope before any work begins. No surprises mid-project.' },
              { icon:'✅', t:'QA before handover', d:'Every store is tested across desktop and mobile before we hand it over.' },
              { icon:'📄', t:'Documented on completion', d:'You get a full handover document covering settings, access, and how to manage your store.' },
            ].map(item => (
              <div key={item.t} className="card p-5 text-center">
                <div className="text-xl mb-3">{item.icon}</div>
                <h3 className="font-display font-bold text-white text-sm mb-1.5">{item.t}</h3>
                <p className="text-white/30 text-xs font-body leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <WhyGoOnline />
      <PlatformsBar />
      <ServicesOverview />
      <Process />
      <FeaturedProjects />
      <WhyDTW />
      <HomeCTA />
    </>
  )
}
