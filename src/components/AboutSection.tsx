'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '5+', label: 'Anni di esperienza' },
  { value: '10+', label: 'Progetti consegnati' },
  { value: '100%', label: 'Clienti soddisfatti' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.15 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-800 dark:text-foreground mb-4 text-center">
            Chi <span className="text-gradient">sono</span>
          </h2>
        </motion.div>

        <div className="space-y-6 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.15 }}
            className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
          >
            Mi chiamo Fabio Miceli, sono uno sviluppatore full-stack con la passione per
            trasformare idee complesse in soluzioni che funzionano. Non sono il tipo da
            buzzword &mdash; preferisco capire il problema, progettare la soluzione e consegnarla.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.15 }}
            className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
          >
            Lavoro come freelancer con un piccolo team agile. Questo significa tempi rapidi,
            comunicazione diretta e zero burocrazia. Che si tratti di un&apos;app desktop, un sito
            web o un sistema gestionale, il mio approccio &egrave; sempre lo stesso: capire il bisogno
            reale e costruire qualcosa che faccia davvero la differenza.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.15 }}
            className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
          >
            Quando non codifico, mi trovi a esplorare nuove tecnologie, ascoltare musica o
            cercare la pizza perfetta.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
              className="text-center p-4 sm:p-6 rounded-2xl border border-neutral-200 dark:border-(--border) bg-neutral-50 dark:bg-(--surface)"
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
      </div>
    </section>
  )
}
