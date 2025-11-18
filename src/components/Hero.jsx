import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fcD-iW8YZHyBp1qq/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-900/90" />
        <div className="relative">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur-md ring-1 ring-white/20">Next‑Gen Tech Store</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">Build. Upgrade. Game.</h1>
          <p className="mt-4 text-slate-200/90 max-w-2xl mx-auto">Shop premium PCs, components, and mobile tech. Design your dream rig with our intelligent PC Builder modes.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#builder" className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:scale-[1.02] transition">Start PC Builder</a>
            <a href="#catalog" className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition">Browse Products</a>
          </div>
        </div>
      </div>
    </section>
  )
}
