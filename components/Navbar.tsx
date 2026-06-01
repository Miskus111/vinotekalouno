'use client'

import { useState, useEffect } from 'react'
import { navLinks } from '@/lib/nav'
import { WineGlassIcon } from '@/components/icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY > 40
      setScrolled((prev) => (prev === s ? prev : s))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-wine-100/95 backdrop-blur-md shadow-sm border-b border-wine-200'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Hlavní navigace"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="Vinotéka Pohodička – přejít na začátek stránky"
          >
            <WineGlassIcon
              className={`w-7 h-7 transition-colors duration-300 ${
                scrolled ? 'text-wine-600' : 'text-white'
              } group-hover:text-wine-400`}
            />
            <span
              className={`font-serif text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-wine-900' : 'text-white'
              }`}
            >
              Pohodička
            </span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    scrolled
                      ? 'text-wine-700 hover:text-wine-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-wine-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#kontakt"
            className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
          >
            Navštivte nás
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden p-2 rounded-sm transition-colors ${
              scrolled ? 'text-wine-800 hover:bg-wine-200' : 'text-white hover:bg-white/10'
            }`}
            aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <XIcon className="w-6 h-6" /> : <BurgerIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu — CSS-only show/hide so aria-hidden stays the sole AT gate */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-200 bg-wine-100 border-t border-wine-200 ${
            menuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          aria-hidden={!menuOpen}
        >
          <ul className="pt-2 space-y-0.5" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-wine-800 text-base font-medium hover:bg-wine-200 hover:text-wine-600 rounded-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pt-4 border-t border-wine-200 mt-3">
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-sm"
            >
              Navštivte nás
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

function BurgerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
