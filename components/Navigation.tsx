'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path || (path === '/' && pathname === '/')
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-sky-100/80 border-b border-sky-100' : 'bg-white/60 backdrop-blur-sm'}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 no-underline min-w-0">
          <Image
            src="/assets/company-logo.png"
            alt="Novultex logo"
            width={80}
            height={80}
            className="h-12 w-12 md:h-20 md:w-20 object-contain flex-shrink-0"
            priority
          />
          <span className="font-bold text-base sm:text-lg md:text-xl tracking-tight text-slate-900 whitespace-nowrap">
            Novultex
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? 'text-accent font-medium'
                  : 'text-slate-600 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/contact#quote" className="hidden md:inline-block btn btn--primary">
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-slate-900 transition-all"></span>
          <span className="w-6 h-0.5 bg-slate-900 transition-all"></span>
          <span className="w-6 h-0.5 bg-slate-900 transition-all"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sky-100">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 transition-colors ${
                  isActive(link.href)
                    ? 'text-accent font-medium'
                    : 'text-slate-600 hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact#quote" className="btn btn--primary mt-4 w-full">
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
