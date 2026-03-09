'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-2 text-neutral-400">
            <span>© 2026 Fabio Miceli — Full-Stack Developer</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
            <Link href="/progetti" className="hover:text-white transition-colors duration-300">
              Progetti
            </Link>
            <span className="text-neutral-600">•</span>
            <Link href="/about" className="hover:text-white transition-colors duration-300">
              Chi sono
            </Link>
            <span className="text-neutral-600">•</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
          </div>

          <p className="text-sm text-neutral-600">
            Progettato e sviluppato da Fabio Miceli
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
