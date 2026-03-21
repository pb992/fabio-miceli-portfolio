'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:fabio.miceli_2011@libero.it',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/393474930068',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/fabio-miceli-00a0b166',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pb992',
    icon: Github,
  },
]

export function CTASection() {
  const t = useTranslations('cta')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = encodeURIComponent(`Ciao Fabio! Sono ${name}. ${message}`)
    window.open(`https://wa.me/393474930068?text=${whatsappMessage}`, '_blank')
  }

  return (
    <section id="contatti" className="relative py-24 sm:py-32">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(129, 140, 248, 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-(family-name:--font-manrope) text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-balance">
            {t('title1')}
            <br />
            <span className="gradient-text">{t('title2')}</span>
          </h2>
          <p className="text-white/50 text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-6 sm:p-8 mb-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                {t('nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('namePlaceholder')}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                {t('messageLabel')}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('messagePlaceholder')}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl font-semibold bg-linear-to-r from-green-600 to-green-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-shadow"
            >
              <Send className="w-5 h-5" />
              {t('send')}
            </motion.button>
          </form>
        </motion.div>

        {/* Alternative contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-center text-white/40 text-sm mb-4">
            {t('or')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-medium text-white/70 hover:text-white hover:border-violet-500/50 transition-all"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
