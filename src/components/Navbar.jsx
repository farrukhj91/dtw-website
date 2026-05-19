// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Services',  to: '/services' },
  { label: 'Platforms', to: '/platforms' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About',     to: '/about' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'py-5'}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/DTW_1_png_nobg.png" alt="DigiTechWorks" className="h-8 w-auto" />
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <span className="hidden sm:block text-2xs text-white/25 tracking-[0.18em] uppercase font-body">DigiTechWorks</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-sm font-body transition-colors duration-200 ${
                pathname === l.to ? 'text-white' : 'text-white/40 hover:text-white/75'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary text-sm">
            Book a Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-px bg-white/70 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px] w-5' : 'w-5'}`} />
          <span className={`block h-px bg-white/70 transition-all duration-300 ${menuOpen ? 'opacity-0 w-3' : 'w-3'}`} />
          <span className={`block h-px bg-white/70 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px] w-5' : 'w-5'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-5 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.label} to={l.to} className="text-sm text-white/60 hover:text-white py-1 transition-colors font-body">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm text-center justify-center mt-1">
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
