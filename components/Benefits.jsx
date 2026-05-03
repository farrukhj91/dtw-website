// src/components/Benefits.jsx
import { useInView } from '../hooks/useInView'

const benefits = [
  {
    icon: '📱',
    title: 'Mobile-Optimized Stores',
    desc: 'Every store we set up is verified for a flawless mobile shopping experience — where most buyers actually shop.',
  },
  {
    icon: '🔍',
    title: 'SEO-Friendly Structure',
    desc: 'Clean URLs, proper meta fields, structured product data — the right foundations so you can be found.',
  },
  {
    icon: '🗂',
    title: 'Organized Product Catalogs',
    desc: 'Logical categories, consistent naming, and clear variants. No messy, hard-to-maintain product lists.',
  },
  {
    icon: '💡',
    title: 'Conversion-Focused Layouts',
    desc: 'Store layout decisions made with buyer psychology in mind — reducing friction and increasing purchases.',
  },
  {
    icon: '🚀',
    title: 'Fast Deployment',
    desc: 'We move quickly without cutting corners. Your store goes live on schedule, not on "soon."',
  },
  {
    icon: '📈',
    title: 'Built to Scale',
    desc: 'Store architecture that handles 10 products or 10,000 without needing to rebuild from scratch.',
  },
]

export default function Benefits() {
  const [ref, inView] = useInView()

  return (
    <section className="section-pad bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 pre-anim ${inView ? 'in-view' : ''}`}
        >
          <span className="inline-block text-xs text-accent-cyan uppercase tracking-[0.2em] font-medium mb-4">
            What You Get
          </span>
          <h2 className="font-display font-700 text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Every Store Comes<br />
            <span className="text-gradient">Fully Equipped</span>
          </h2>
          <p className="text-white/45 text-base">
            These aren't upsells — they're standard in everything we build.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} {...b} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ icon, title, desc, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 group hover:border-accent-cyan/20 hover:-translate-y-1 transition-all duration-300 pre-anim ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-lg group-hover:bg-accent-cyan/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="font-display font-600 text-white text-base leading-snug">{title}</h3>
      </div>
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
