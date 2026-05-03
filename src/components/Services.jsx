// src/components/Services.jsx
import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: '🛍',
    title: 'Shopify Store Setup',
    desc: 'Full Shopify store configuration — theme selection, navigation, payment gateways, taxes, and shipping. Ready to sell from day one.',
  },
  {
    icon: '🛒',
    title: 'OpenCart Setup',
    desc: 'End-to-end OpenCart installation and configuration tailored to your product catalogue and business workflow.',
  },
  {
    icon: '🎨',
    title: 'Store Customization',
    desc: 'Leverage platform-native customization tools to build a store that looks and feels uniquely yours — no custom code required.',
  },
  {
    icon: '📦',
    title: 'Product Upload & Catalog Management',
    desc: 'Structured, SEO-ready product listings with proper categorization, descriptions, variants, and pricing — uploaded at scale.',
  },
  {
    icon: '✨',
    title: 'Branding & Store Visual Identity',
    desc: 'Cohesive visual presentation across your store — logo placement, typography, color palette, and imagery alignment.',
  },
  {
    icon: '📝',
    title: 'Ecommerce Content Setup',
    desc: 'Homepage copy, category descriptions, about pages, and policy pages — all crafted to build trust and convert visitors.',
  },
  {
    icon: '📱',
    title: 'Social Media Branding Support',
    desc: 'Brand consistency extended to your social profiles — bios, profile visuals, and link pages aligned with your store identity.',
  },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="section-pad bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 pre-anim ${inView ? 'in-view' : ''}`}
        >
          <span className="inline-block text-xs text-accent-cyan uppercase tracking-[0.2em] font-medium mb-4">
            What We Do
          </span>
          <h2 className="font-display font-700 text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Everything You Need to<br />
            <span className="text-gradient">Launch & Grow</span>
          </h2>
          <p className="text-white/45 text-base leading-relaxed">
            From blank slate to fully operational store — we cover every layer of your ecommerce setup.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc, delay }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 group hover:border-accent-blue/25 hover:-translate-y-1 transition-all duration-300 cursor-default pre-anim ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-accent-blue/10 flex items-center justify-center text-xl mb-5 group-hover:bg-accent-blue/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-display font-600 text-white text-lg mb-2 leading-snug">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>

      {/* Hover indicator */}
      <div className="mt-5 flex items-center gap-1.5 text-accent-blue text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn more
        <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
      </div>
    </div>
  )
}
