'use client'

import { motion } from 'framer-motion'

const collaborations = [
  {
    name: 'Pro Advice Solutions',
    logo: '/logos/proadvice-logo.png',
  },
  {
    name: 'TXT E-TECH',
    logo: '/logos/txt-logo.png',
  },
  {
    name: 'Gesca S.r.l',
    logo: '/logos/gesca-logo.png',
  },
  {
    name: 'Contrader',
    logo: '/logos/contrader-logo.jpg',
  },
  {
    name: 'DocPozz Counseling Academy',
    logo: '/logos/counseling-academy.logo.png',
  },
]

// Duplicate for infinite scroll
const duplicatedCollaborations = [...collaborations, ...collaborations]

export default function CollaborationsSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-(--surface)">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-800 dark:text-foreground mb-4">
            <span className="text-gradient">Collaborazioni</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Aziende che hanno scelto la mia squadra
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -50 * duplicatedCollaborations.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
            {duplicatedCollaborations.map((collaboration, index) => (
              <div
                key={`${collaboration.name}-${index}`}
                className="shrink-0 flex items-center justify-center"
              >
                <div className="group relative">
                  <div className="w-24 h-24 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg dark:shadow-neutral-900/50 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center p-3 group-hover:shadow-xl transition-all duration-300">
                    <img 
                      src={collaboration.logo} 
                      alt={collaboration.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {collaboration.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-500 dark:text-neutral-400 italic">
            "La fiducia si costruisce con risultati concreti, non con promesse"
          </p>
        </motion.div>
      </div>
    </section>
  )
}