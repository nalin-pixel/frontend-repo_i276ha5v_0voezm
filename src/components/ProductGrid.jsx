import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    fetch(`${API}/api/products?limit=12&sort=${sort}&q=${encodeURIComponent(q)}`, { signal: controller.signal })
      .then(r => r.json())
      .then(d => setItems(d.items || []))
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [q, sort])

  return (
    <section id="catalog" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <h2 className="text-2xl font-semibold text-white">Featured Products</h2>
          <div className="flex items-center gap-2">
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products" className="px-3 py-2 rounded-xl bg-white/10 text-white placeholder:text-slate-300/60 ring-1 ring-white/10"/>
            <select value={sort} onChange={e=>setSort(e.target.value)} className="px-3 py-2 rounded-xl bg-white/10 text-white ring-1 ring-white/10">
              <option value="newest">Newest</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({length:8}).map((_,i)=> (
              <div key={i} className="aspect-[4/5] rounded-2xl bg-white/5 animate-pulse"/>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((p)=> (
              <a key={p.id || p.sku} href={`#product-${p.id || p.sku}`} className="group relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-emerald-500/40 transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={(p.images && p.images[0]) || 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition"/>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium line-clamp-2">{p.title}</h3>
                  <p className="mt-1 text-emerald-400 font-semibold">${p.price?.toFixed(2)}</p>
                  <p className="mt-1 text-xs text-slate-300/70">{(p.category||'').toUpperCase()}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
