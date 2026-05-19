// src/pages/ComingSoon.jsx
export default function ComingSoon() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full blur-3xl anim-glow pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,70,239,0.22) 0%, rgba(139,92,246,0.12) 40%, transparent 70%)" }}
      />

      <div className="relative z-10 container text-center">
        <div className="anim-fade-up">
          <img
            src="/DTW_1_png_nobg.png"
            alt="DigiTechWorks"
            className="mx-auto block w-56 sm:w-72 md:w-80 lg:w-96 h-auto"
          />
          <p className="mt-4 sm:mt-5 text-2xs sm:text-xs tracking-[0.32em] uppercase text-white/30 font-body">
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
