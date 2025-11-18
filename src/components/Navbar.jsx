import { ShoppingCart, Cpu, Smartphone, Monitor, Moon, Sun, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white font-semibold">
            <span className="inline-flex h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500" />
            <span>NeoTech</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <a href="#catalog" className="hover:text-white">All Products</a>
            <a href="#components" className="hover:text-white flex items-center gap-1"><Cpu size={16}/> Components</a>
            <a href="#phones" className="hover:text-white flex items-center gap-1"><Smartphone size={16}/> Phones</a>
            <a href="#accessories" className="hover:text-white flex items-center gap-1"><Monitor size={16}/> Accessories</a>
            <a href="#builder" className="hover:text-white">PC Builder</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setDark(!dark)} className="p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10">
              {dark ? <Sun size={18}/> : <Moon size={18}/>}      
            </button>
            <a href="#cart" className="relative p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10">
              <ShoppingCart size={18}/>
              <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">2</span>
            </a>
            <button className="md:hidden p-2 rounded-lg bg-white/5 text-slate-200" onClick={() => setOpen(v=>!v)}>
              <Menu size={18}/>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4 text-slate-200">
            <div className="grid gap-2">
              <a href="#catalog" className="px-3 py-2 rounded-lg bg-white/5">All Products</a>
              <a href="#components" className="px-3 py-2 rounded-lg bg-white/5">Components</a>
              <a href="#phones" className="px-3 py-2 rounded-lg bg-white/5">Phones</a>
              <a href="#accessories" className="px-3 py-2 rounded-lg bg-white/5">Accessories</a>
              <a href="#builder" className="px-3 py-2 rounded-lg bg-white/5">PC Builder</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
