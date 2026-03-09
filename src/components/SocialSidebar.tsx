'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/fabio-miceli',
    color: 'hover:text-gray-800 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/fabio-miceli',
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/393474930068',
    color: 'hover:text-green-600 dark:hover:text-green-400'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:fabio.miceli_2011@libero.it',
    color: 'hover:text-red-600 dark:hover:text-red-400'
  }
]

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-5 top-1/2 transform -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
          >
            {/* Tooltip */}
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {link.name}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-neutral-100 dark:bg-neutral-900 rotate-45"></div>
            </div>

            {/* Icon */}
            <div className="w-12 h-12 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white dark:group-hover:bg-neutral-700">
              <link.icon className={`w-5 h-5 text-neutral-600 dark:text-neutral-300 transition-colors duration-300 ${link.color}`} />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Vertical line */}
      <div className="absolute left-6 top-16 w-0.5 h-20 bg-linear-to-b from-neutral-300 dark:from-neutral-600 to-transparent"></div>
    </motion.div>
  )
}
