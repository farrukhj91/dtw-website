// src/pages/ComingSoon.jsx
export default function ComingSoon() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full blur-3xl anim-glow pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(75,107,251,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container text-center">
        <div className="anim-fade-up">
          <h1 className="font-display font-black tracking-tight text-gradient text-7xl sm:text-8xl md:text-9xl leading-none">
            DTW
          </h1>
          <p className="mt-4 text-2xs sm:text-xs tracking-[0.32em] uppercase text-white/30 font-body">
            DigiTechWorks
          </p>
        </div>

        <p className="anim-fade-up d-300 mt-12 text-lg sm:text-xl md:text-2xl text-white/70 font-body max-w-xl mx-auto leading-relaxed">
          Ecommerce stores, built right &mdash; launching soon.
        </p>
      </div>
    </main>
  )
}
