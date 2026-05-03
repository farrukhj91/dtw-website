// src/components/Hero.jsx

const MockCard = ({ children, className = '' }) => (
  <div className={`glass-card rounded-xl p-4 ${className}`}>
    {children}
  </div>
)

const StoreMetricCard = () => (
  <MockCard className="w-52 animate-float">
    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-3">Store Overview</p>
    <div className="flex items-end gap-2 mb-3">
      <span className="font-display text-3xl font-700 text-white">$24.8k</span>
      <span className="text-xs text-emerald-400 mb-1">+18.4%</span>
    </div>
    <div className="w-full h-1 bg-white/5 rounded-full">
      <div className="h-1 w-3/4 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
    </div>
    <p className="text-[10px] text-white/30 mt-2">Monthly Revenue</p>
  </MockCard>
)

const OrdersCard = () => (
  <MockCard className="w-44 animate-float-alt">
    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Orders Today</p>
    <p className="font-display text-2xl font-700 text-white">142</p>
    <div className="flex gap-1 mt-2">
      {[40,65,50,80,60,90,75].map((h, i) => (
        <div key={i} className="flex-1 bg-accent-blue/30 rounded-sm" style={{ height: `${h * 0.4}px` }} />
      ))}
    </div>
  </MockCard>
)

const PlatformCard = () => (
  <MockCard className="w-48 animate-float">
    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-3">Active Platforms</p>
    {['Shopify', 'OpenCart', 'WooCommerce'].map((p, i) => (
      <div key={p} className="flex items-center gap-2 mb-2">
        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-emerald-400' : i === 1 ? 'bg-accent-blue' : 'bg-accent-cyan'}`} />
        <span className="text-xs text-white/60">{p}</span>
        <span className="ml-auto text-xs text-white/30">{['Active','Active','Ready'][i]}</span>
      </div>
    ))}
  </MockCard>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-indigo/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-accent-cyan font-medium mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            Ecommerce Setup Agency — Shopify · OpenCart · More
          </div>

          {/* Headline */}
          <h1 className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl leading-[1.06] tracking-tight mb-6 animate-fade-up">
            Launch Your<br />
            <span className="text-gradient">Ecommerce Store</span><br />
            Faster.
          </h1>

          <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-10 animate-fade-up delay-200">
            Professional store setup, design, and optimization on Shopify, OpenCart, and beyond —
            without the technical headache. We handle everything so you can focus on selling.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-300">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl bg-accent-blue text-white font-medium text-sm hover:bg-blue-500 transition-all duration-200 glow-sm hover:glow-md"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="px-7 py-3.5 rounded-xl glass-card text-white/70 font-medium text-sm hover:text-white hover:border-accent-blue/30 transition-all duration-200"
            >
              Explore Services →
            </a>
          </div>

          {/* Trust microcopy */}
          <div className="flex flex-wrap gap-6 animate-fade-up delay-400">
            {[
              { label: '48hr', sub: 'Avg. Setup Start' },
              { label: '100%', sub: 'Platform Native' },
              { label: '5★',   sub: 'Client Satisfaction' },
            ].map(({ label, sub }) => (
              <div key={sub}>
                <p className="font-display font-700 text-xl text-white">{label}</p>
                <p className="text-xs text-white/35 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: floating UI mock */}
        <div className="relative hidden lg:flex items-center justify-center h-[500px]">
          <div className="absolute top-8 right-8">
            <StoreMetricCard />
          </div>
          <div className="absolute bottom-16 right-4">
            <OrdersCard />
          </div>
          <div className="absolute top-32 left-0">
            <PlatformCard />
          </div>

          {/* Central glow ring */}
          <div className="w-72 h-72 rounded-full border border-accent-blue/10 flex items-center justify-center">
            <div className="w-52 h-52 rounded-full border border-accent-blue/15 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-indigo/20 blur-sm animate-pulse-glow flex items-center justify-center">
                <span className="font-display font-800 text-3xl text-gradient relative z-10">DTW</span>
              </div>
            </div>
          </div>

          {/* Spinning orbit ring */}
          <div className="absolute w-80 h-80 rounded-full border border-dashed border-accent-blue/8 animate-spin-slow" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  )
}
