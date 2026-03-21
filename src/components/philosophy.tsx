'use client'

import { motion } from 'framer-motion'
import { Target, Zap, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Strategia',
    description: 'Ogni progetto parte da un\'analisi approfondita. Capisco i tuoi obiettivi prima di scrivere una riga di codice.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Esecuzione',
    description: 'Metodologia agile, iterazioni rapide, feedback costante. Risultati tangibili in settimane, non mesi.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Risultati',
    description: 'Non consegno progetti, ma soluzioni che funzionano. Misuro il successo con i tuoi KPI, non con le righe di codice.',
    gradient: 'from-amber-500 to-orange-500',
  },
]

export function Philosophy() {
  return (
    <section id="chi-sono" className="relative py-24 sm:py-32">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-4 block">
            Filosofia
          </span>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Non vendo codice.<br />
            <span className="gradient-text">Vendo velocità e impatto.</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Un approccio ibrido che unisce la profondità di un\'agenzia alla velocità di un freelance. 
            Lavoro con te, non per te.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:glow-violet card-3d">
                {/* Gradient background on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <pillar.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-white/[0.02] rounded-tl-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
