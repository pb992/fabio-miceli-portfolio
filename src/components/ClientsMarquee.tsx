'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'Coisystem', logo: '/logos/coisystem.png' },
  { name: 'Arzillibus', logo: '/logos/arzillibus.png' },
  { name: 'Counseling Academy', logo: '/logos/counseling-academy.logo.png' },
  { name: 'Pro Advice Solutions', logo: '/logos/proadvice-logo.png' },
  { name: 'TXT E-TECH', logo: '/logos/txt-logo.png' },
  { name: 'Gesca S.r.l', logo: '/logos/gesca-logo.png' },
  { name: 'Contrader', logo: '/logos/contrader-logo.jpg' },
]

// Single duplication — 7 items * ~160px spacing = ~1120px per set
// Viewport max ~1000px visible, so one set fills the screen
const doubled = [...clients, ...clients]

export default function ClientsMarquee() {
  return (
    <section className="py-20 px-4 bg-neutral-50 dark:bg-[var(--surface)] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.15 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-800 dark:text-[var(--foreground)] mb-4">
          <span className="text-gradient">Collaborazioni</span>
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Aziende che hanno scelto la mia squadra
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -(clients.length * 160)]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear',
              },
            }}
          >
            {doubled.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="shrink-0 flex items-center justify-center"
              >
                <div className="group relative">
                  <div className="w-24 h-24 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg dark:shadow-neutral-900/50 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center p-3 group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {client.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
