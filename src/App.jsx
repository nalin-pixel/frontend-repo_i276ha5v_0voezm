import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import BuilderTeaser from './components/BuilderTeaser'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 bg-[radial-gradient(600px_200px_at_10%_-20%,rgba(16,185,129,0.15),transparent),radial-gradient(600px_200px_at_90%_120%,rgba(34,211,238,0.12),transparent)] pointer-events-none"/>
      <Navbar />
      <Hero />
      <ProductGrid />
      <BuilderTeaser />
      <footer className="py-10 text-center text-slate-400/80">© {new Date().getFullYear()} NeoTech • Built for speed and style</footer>
    </div>
  )
}

export default App
