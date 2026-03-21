'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = [
  { label: 'Progetti', href: '#progetti' },
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'Privacy Policy', href: '#' },
]

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-white/40"
          >
            © 2026 Fabio Miceli - Full-Stack Developer · P.IVA 18147041000
          </motion.p>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        </div>
      </div>
    </footer>
  )
}
