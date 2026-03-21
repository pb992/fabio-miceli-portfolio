'use client'

import { motion } from 'framer-motion'
import { Music, Dumbbell, MapPin } from 'lucide-react'

const stats = [
  { value: '4+', label: 'Anni di esperienza' },
  { value: '10+', label: 'Progetti consegnati' },
  { value: '100%', label: 'Clienti soddisfatti' },
]

const traits = [
  {
    icon: Music,
    text: 'Piano, batteria, chitarra - tre strumenti per staccare dal codice',
  },
  {
    icon: Dumbbell,
    text: 'Calisthenics e handstand - equilibrio in tutto, anche a testa in giù',
  },
  {
    icon: MapPin,
    text: 'Kayak, laghi, concerti - lavoro ovunque ci sia una connessione',
  },
]

export function About() {
  return (
    <section id="chi-sono" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-4 block">
            Chi sono
          </span>
          <h2 className="font-(family-name:--font-manrope) text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Sviluppatore, musicista, <span className="gradient-text">atleta</span>.
          </h2>
        </motion.div>

        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 mb-16"
        >
          <p className="text-lg text-white/60 leading-relaxed text-center">
            Mi chiamo Fabio. Scrivo codice di giorno e suono piano, batteria e chitarra quando stacco.
            Pratico calisthenics (s&igrave;, mi trovi a testa in gi&ugrave; pi&ugrave; spesso di quanto credi)
            e quando posso prendo un kayak e mi perdo in qualche lago.
          </p>
          <p className="text-lg text-white/60 leading-relaxed text-center">
            Sono curioso per natura: in 4 anni ho lavorato con stack diversi, team diversi e settori diversi.
            Non lo vedo come instabilit&agrave; - &egrave; versatilit&agrave;. Ogni progetto nuovo &egrave; un problema nuovo da risolvere,
            e a me i problemi piacciono.
          </p>
          <p className="text-lg text-white/60 leading-relaxed text-center">
            Il mio obiettivo? Lavorare ovunque ci sia una connessione Wi-Fi, bilanciando codice, viaggi e concerti.
            Per questo lavoro come freelancer con un team agile: zero burocrazia, comunicazione diretta, risultati concreti.
          </p>
        </motion.div>

        {/* Traits */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <trait.icon className="w-6 h-6 text-violet-400 mx-auto mb-3" />
              <p className="text-sm text-white/60 leading-relaxed">
                {trait.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
