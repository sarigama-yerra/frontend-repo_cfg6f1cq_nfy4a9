import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'bg-white/80 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-slate-900">Plombier</a>
        <nav className="hidden md:flex gap-6 text-sm text-slate-700">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-cyan-600 transition">{l.label}</a>
          ))}
        </nav>
        <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg"><Menu /></button>
      </div>
    </header>
  )
}
