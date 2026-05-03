// src/components/Process.jsx
import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We learn about your business, products, target audience, and goals. A 30-minute call is all it takes to map the full scope.',
  },
  {
    number: '02',
    title: 'Store Planning',
    desc: 'We define your platform, structure, sitemap, and design direction. You review and approve before a single pixel is moved.',
  },
  {
    number: '03',
    title: 'Setup & Configuration',
    desc: 'Store build begins — platform setup, theme, navigation, payment and shipping configuration, and all technical settings.',
  },
  {
    number: '04',
    title: 'Content & Product Upload',
    desc: 'Your catalog goes live — structured product listings, copy, imagery, and all supporting store content added and optimized.',
  },
  {
    number: '05',
    title: 'Launch & Optimization',
    desc: "Final QA across devices, speed check, and go-live. We don't disappear post-launch — we're here for refinements and support.",
  },
]

export default function Process() {
  const [ref, inView] = useInView()

  return (
    <section id="process" className="section-pad bg-bg-secondary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent-indigo/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 pre-anim ${inView ? 'in-view' : ''}`}
        >
          <span className="inline-block text-xs text-accent-cyan uppercase tracking-[0.2em] font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-display font-700 text-4xl sm:text-5xl text-white mb-4 leading-tight">
            From Idea to Live Store<br />
            <span className="text-gradient">In Five Steps</span>
          </h2>
          <p className="text-white/45 text-base">
            A structured, transparent process so you always know where things stand.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line on desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-blue/20 to-transparent" />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <ProcessStep key={step.number} {...step} isEven={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ number, title, desc, isEven }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pre-anim ${inView ? 'in-view' : ''}`}
    >
      {/* Spacer for alternating layout */}
      {isEven && <div className="hidden lg:block" />}

      <div className={`glass-card rounded-2xl p-7 group hover:border-accent-blue/20 transition-all duration-300 hover:-translate-y-0.5 ${isEven ? 'lg:col-start-1' : ''}`}>
        <div className="flex items-start gap-5">
          <div className="flex-shrink-0">
            <span className="font-display font-800 text-5xl text-gradient-full opacity-25 group-hover:opacity-50 transition-opacity duration-300 leading-none">
              {number}
            </span>
          </div>
          <div>
            <h3 className="font-display font-600 text-white text-xl mb-2">{title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>

      {/* Dot on the center line */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-blue glow-sm items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </div>

      {!isEven && <div className="hidden lg:block" />}
    </div>
  )
}
