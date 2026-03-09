'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Progetti' },
  { href: '/progetti', label: 'Tutti i progetti' },
  { href: '/about', label: 'Chi sono' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  const isHome = pathname === '/'

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-lg font-display font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
        >
          FM<span className="text-[var(--primary)]">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isAnchor = link.href.startsWith('/#')
            const Tag = isAnchor && isHome ? 'a' : Link
            const href = isAnchor && isHome ? link.href.replace('/', '') : link.href
            const isActive = !isAnchor && pathname === link.href

            return (
              <Tag
                key={link.href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[var(--primary)]'
                    : 'text-neutral-400 hover:text-[var(--foreground)]'
                }`}
              >
                {link.label}
              </Tag>
            )
          })}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-[var(--foreground)] transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[var(--background)]/95 backdrop-blur-xl border-b border-[var(--border)]"
        >
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-neutral-400 hover:text-[var(--foreground)] transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
