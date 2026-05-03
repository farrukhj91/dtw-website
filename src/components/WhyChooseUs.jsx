// src/components/WhyChooseUs.jsx
import { useInView } from '../hooks/useInView'

const reasons = [
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'Structured workflows mean no waiting around. Your store moves from planning to live on a timeline that respects your business.',
  },
  {
    icon: '🎯',
    title: 'Ecommerce-Focused',
    desc: 'We only do ecommerce. That specialization means fewer mistakes, better defaults, and advice that actually applies to selling online.',
  },
  {
    icon: '🔧',
    title: 'Platform Expertise',
    desc: "Shopify, OpenCart, WooCommerce — we know these platforms deeply. We don't Google the settings while you wait.",
  },
  {
    icon: '📐',
    title: 'Scalable Foundations',
    desc: 'Everything we build is structured to grow with you — catalog architecture, categories, and naming conventions that scale.',
  },
  {
    icon: '🤝',
    title: 'End-to-End Support',
    desc: "We're not just a setup vendor. From first consultation to post-launch questions, we stay available and responsive.",
  },
  {
    icon: '💎',
    title: 'Professional Presentation',
    desc: 'Your store will look the part. We apply design judgment throughout — not just functional setup, but visual quality too.',
  },
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView()

  return (
    <section id="why-us" className="section-pad bg-bg-primary relative overflow-hidden">
      {/* Glow */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div
            ref={ref}
            className={`pre-anim ${inView ? 'in-view' : ''} sticky top-32`}
          >
            <span className="inline-block text-xs text-accent-cyan uppercase tracking-[0.2em] font-medium mb-4">
              Why DTW
            </span>
            <h2 className="font-display font-700 text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Built for Stores<br />
              <span className="text-gradient">That Mean Business</span>
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-8">
              We've distilled ecommerce store setup into a reliable, repeatable, professional service.
              No bloat. No surprises. Just your store, done right.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-white text-sm font-medium hover:bg-blue-500 transition-all duration-200 glow-sm hover:glow-md"
            >
              Start Your Project →
            </a>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <ReasonCard key={r.title} {...r} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ icon, title, desc, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl p-5 hover:border-accent-blue/20 hover:-translate-y-0.5 transition-all duration-300 pre-anim ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-2xl mb-3 block">{icon}</span>
      <h3 className="font-display font-600 text-white text-base mb-1.5">{title}</h3>
      <p className="text-white/35 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
