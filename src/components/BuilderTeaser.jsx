import { Sparkles, Cpu, Gamepad2 } from 'lucide-react'

export default function BuilderTeaser(){
  return (
    <section id="builder" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 ring-1 ring-white/10 backdrop-blur p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 h-64 w-64 bg-emerald-500/20 rounded-full blur-3xl"/>
          <div className="absolute -left-24 -bottom-24 h-64 w-64 bg-cyan-500/20 rounded-full blur-3xl"/>
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-white/90 text-xs">
              <Sparkles size={14}/> Smart PC Builder
            </div>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-white">Three ways to design your perfect PC</h3>
            <p className="mt-2 text-slate-300/90 max-w-2xl">Pick by games, choose components with compatibility checks, or ask our AI assistant for recommendations and FPS estimates.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Gamepad2 className="text-emerald-400"/>
                <h4 className="mt-3 text-white font-semibold">By Games</h4>
                <p className="text-slate-300/80 text-sm">Select titles like Fortnite or Cyberpunk and get three builds with price and FPS.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Cpu className="text-cyan-400"/>
                <h4 className="mt-3 text-white font-semibold">By Components</h4>
                <p className="text-slate-300/80 text-sm">Mix and match parts with live compatibility checks and power guidance.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Sparkles className="text-fuchsia-400"/>
                <h4 className="mt-3 text-white font-semibold">AI Chat</h4>
                <p className="text-slate-300/80 text-sm">Describe your needs; get a complete build with alternatives and FPS.</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="#catalog" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:scale-[1.02] transition">Explore Components</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
