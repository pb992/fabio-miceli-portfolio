'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import SpotlightCursor from '@/components/SpotlightCursor'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import MagneticButton from '@/components/MagneticButton'

const stats = [
  { value: '5+', label: 'Anni di esperienza' },
  { value: '10+', label: 'Progetti consegnati' },
  { value: '100%', label: 'Clienti soddisfatti' },
]

const timeline = [
  {
    period: 'Oggi',
    title: 'Freelancer Full-Stack',
    description: 'Sviluppo soluzioni complete per aziende e professionisti: gestionali, app desktop, piattaforme web, tool di automazione. Lavoro con un piccolo team agile.',
  },
  {
    period: 'Il percorso',
    title: 'Dalla curiosità alla professione',
    description: 'Ho iniziato a programmare per passione, risolvendo problemi reali per chi mi stava intorno. Ogni progetto mi ha insegnato qualcosa di nuovo e mi ha portato al prossimo.',
  },
  {
    period: 'L\'approccio',
    title: 'Capire prima, costruire poi',
    description: 'Non scrivo codice per il gusto di scriverlo. Parto dal problema, progetto la soluzione più semplice che funziona, e la consegno. Zero burocrazia, comunicazione diretta.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SpotlightCursor />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-800 dark:text-[var(--foreground)] mb-6 text-center">
              Chi <span className="text-gradient">sono</span>
            </h1>
          </motion.div>

          {/* Intro */}
          <div className="space-y-6 mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
            >
              Mi chiamo Fabio Miceli, sono uno sviluppatore full-stack con la passione per
              trasformare idee complesse in soluzioni che funzionano. Non sono il tipo da
              buzzword &mdash; preferisco capire il problema, progettare la soluzione e consegnarla.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
            >
              Lavoro come freelancer con un piccolo team agile. Questo significa tempi rapidi,
              comunicazione diretta e zero burocrazia. Che si tratti di un&apos;app desktop, un sito
              web o un sistema gestionale, il mio approccio è sempre lo stesso: capire il bisogno
              reale e costruire qualcosa che faccia davvero la differenza.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
            >
              Quando non codifico, mi trovi a esplorare nuove tecnologie, ascoltare musica o
              cercare la pizza perfetta.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-2xl border border-neutral-200 dark:border-[var(--border)] bg-neutral-50 dark:bg-[var(--surface)]"
              >
                <p className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8 mb-20">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex-shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-neutral-200 dark:bg-neutral-700 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-display font-bold text-neutral-800 dark:text-[var(--foreground)] mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center p-8 rounded-2xl border border-neutral-200 dark:border-[var(--border)] bg-neutral-50 dark:bg-[var(--surface)]"
          >
            <h3 className="text-xl font-display font-bold text-neutral-800 dark:text-[var(--foreground)] mb-3">
              Hai un progetto in mente?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Parliamone — senza impegno, senza formalità.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton strength={0.15}>
                <a
                  href="https://wa.me/393474930068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <a
                  href="mailto:fabio.miceli_2011@libero.it"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  )
}
