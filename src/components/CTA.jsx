// src/components/CTA.jsx
import { useInView } from '../hooks/useInView'

export default function CTA() {
  const [ref, inView] = useInView()

  return (
    <section className="section-pad bg-bg-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent-blue/8 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-accent-indigo/8 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div
        ref={ref}
        className={`relative max-w-3xl mx-auto px-6 text-center pre-anim ${inView ? 'in-view' : ''}`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent-cyan font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          Taking new projects — limited spots available
        </div>

        <h2 className="font-display font-800 text-5xl sm:text-6xl text-white leading-[1.06] mb-6">
          Ready to Launch Your<br />
          <span className="text-gradient-full">Ecommerce Store?</span>
        </h2>

        <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Book a free 30-minute consultation. We'll scope your project, answer your questions,
          and tell you exactly what it'll take to get your store live.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-accent-blue text-white font-medium text-base hover:bg-blue-500 transition-all duration-200 glow-md hover:scale-[1.02]"
          >
            Book Free Consultation
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl glass-card text-white/70 font-medium text-base hover:text-white hover:border-accent-blue/30 transition-all duration-200"
          >
            View All Services
          </a>
        </div>

        {/* Micro trust line */}
        <p className="text-white/20 text-xs font-body">
          No commitment required · Response within 24 hours · 100% free consultation
        </p>
      </div>
    </section>
  )
}
