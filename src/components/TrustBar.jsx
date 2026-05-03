// src/components/TrustBar.jsx
import { useInView } from '../hooks/useInView'

const platforms = ['Shopify', 'OpenCart', 'WooCommerce', 'BigCommerce', 'Wix eCommerce']

const stats = [
  { value: '48hr',  label: 'Average Launch Kickoff' },
  { value: '100%',  label: 'Platform-Native Builds' },
  { value: '3x',    label: 'Faster Than DIY Setup' },
]

export default function TrustBar() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`py-16 border-y border-white/5 bg-bg-secondary pre-anim ${inView ? 'in-view' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs text-white/25 uppercase tracking-[0.2em] mb-10 font-body">
          Platform Expertise
        </p>

        {/* Platform logos (text-based, stylized) */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-14">
          {platforms.map((p, i) => (
            <span
              key={p}
              className="font-display font-600 text-lg text-white/20 hover:text-white/50 transition-colors duration-300 cursor-default select-none"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display font-800 text-4xl text-gradient mb-1">{value}</p>
              <p className="text-xs text-white/35 font-body">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
