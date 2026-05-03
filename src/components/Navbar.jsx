// src/components/Navbar.jsx
import { useState, useEffect } from 'react'

const links = [
  { label: 'Services',  href: '#services' },
  { label: 'Process',   href: '#process' },
  { label: 'Why DTW',   href: '#why-us' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display font-800 text-2xl tracking-tight">
            <span className="text-gradient">DTW</span>
          </span>
          <span className="hidden sm:block h-4 w-px bg-white/10" />
          <span className="hidden sm:block text-xs text-white/30 font-body tracking-widest uppercase">
            DigiTechWorks
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-body"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2.5 rounded-lg bg-accent-blue text-white hover:bg-blue-500 transition-all duration-200 glow-sm hover:glow-md"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav mt-2 mx-4 rounded-xl p-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/60 hover:text-white py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium px-5 py-2.5 rounded-lg bg-accent-blue text-white text-center"
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  )
}
