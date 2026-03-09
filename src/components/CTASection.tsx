'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react'
import { useState } from 'react'
import MagneticButton from './MagneticButton'

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Ciao Fabio! Mi chiamo ${formData.name}. ${formData.message}`
    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/393474930068?text=${encoded}`, '_blank')
  }

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary-600 via-primary-700 to-secondary-600 dark:from-primary-900 dark:via-[#0a0a1a] dark:to-secondary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.15 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Non serve essere una grande azienda
            <br />
            per avere una <span className="text-accent-300">grande idea</span>.
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Io ti aiuto a realizzarla — con velocità, precisione e impatto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.15 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full max-w-md mx-auto block px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent text-center"
                placeholder="Il tuo nome"
              />
            </div>
            <div className="text-center">
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent resize-none text-center"
                placeholder="Raccontami il tuo progetto..."
              />
            </div>
            <MagneticButton strength={0.2}>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Scrivimi su WhatsApp
              </button>
            </MagneticButton>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton strength={0.2}>
              <a
                href="mailto:fabio.miceli_2011@libero.it"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="https://wa.me/393474930068"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="https://linkedin.com/in/fabio-miceli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="https://github.com/fabio-miceli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </MagneticButton>
          </div>

          <div>
            <p className="text-primary-100 text-lg">
              Oppure scrivimi direttamente a:{' '}
              <a
                href="mailto:fabio.miceli_2011@libero.it"
                className="text-accent-300 hover:text-accent-200 font-semibold transition-colors duration-300"
              >
                fabio.miceli_2011@libero.it
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
