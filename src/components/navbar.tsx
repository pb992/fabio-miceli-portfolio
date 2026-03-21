'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#progetti', label: 'Progetti' },
  { href: '#chi-sono', label: 'Chi sono' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 glass-strong' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative group"
            >
              <motion.span 
                className="text-2xl font-bold font-(family-name:--font-manrope) tracking-tight"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <span className="gradient-text">FM</span>
                <span className="text-white">.</span>
              </motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-violet-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-linear-to-r from-violet-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link href="#contatti">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-linear-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-shadow duration-300"
                >
                  Contattami
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 bg-[#0a0a1a]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="#contatti" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="px-8 py-3 rounded-full text-lg font-medium bg-linear-to-r from-violet-600 to-blue-600 text-white">
                    Contattami
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
