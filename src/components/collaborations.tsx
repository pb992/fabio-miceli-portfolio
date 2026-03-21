'use client'

import { motion } from 'framer-motion'

const collaborators = [
  'Pro Advice Solutions',
  'TXT E-TECH',
  'Gesca S.r.l',
  'Contrader',
  'DocPozz Counseling Academy',
]

export function Collaborations() {
  // Double the array for infinite scroll
  const doubledCollaborators = [...collaborators, ...collaborators]

  return (
    <section className="relative py-20">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-white/40 uppercase tracking-widest">
            Collaborazioni
          </span>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#0a0a1a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a1a] to-transparent z-10" />

        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {doubledCollaborators.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="flex items-center shrink-0 px-8 sm:px-12"
            >
              <span className="text-xl sm:text-2xl font-bold text-white/20 hover:text-white/40 transition-colors duration-300 whitespace-nowrap font-(family-name:--font-manrope)">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
