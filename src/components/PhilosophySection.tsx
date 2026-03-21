'use client'

import { motion } from 'framer-motion'
import { Target, Zap, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Strategia',
    description: 'Analisi problema e architettura soluzione',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50 dark:bg-primary-900/20',
  },
  {
    icon: Zap,
    title: 'Esecuzione',
    description: 'Sviluppo rapido senza compromessi qualità',
    color: 'text-secondary-600',
    bgColor: 'bg-secondary-50 dark:bg-secondary-900/20',
  },
  {
    icon: TrendingUp,
    title: 'Risultati',
    description: 'Impatto misurabile sul business',
    color: 'text-accent-600',
    bgColor: 'bg-accent-50 dark:bg-accent-900/20',
  },
]

export default function PhilosophySection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-800 dark:text-foreground mb-6">
            Non vendo codice.{' '}
            <span className="text-gradient">Vendo velocità e impatto</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-none text-neutral-600 dark:text-neutral-400 mb-16 text-center"
        >
          <p className="text-xl leading-relaxed mb-6">
            Ogni progetto parte da una domanda: <strong>"Quale problema risolviamo?"</strong> non 
            "Quale tecnologia usiamo?".
          </p>
          <p className="text-xl leading-relaxed">
            Lavoro con un approccio ibrido: strategia umana + esecuzione rapida. Ho un team agile 
            (sviluppo + design) per consegnare soluzioni scalabili in tempi competitivi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.15 }}
              className="group"
            >
              <div className={`${pillar.bgColor} p-8 rounded-2xl transition-all duration-300 group-hover:shadow-lg dark:group-hover:shadow-primary-500/10 group-hover:-translate-y-2 text-center`}>
                <div className={`${pillar.color} mb-4 flex justify-center`}>
                  <pillar.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}