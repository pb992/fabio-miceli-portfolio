'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const collaborators = [
  { name: 'Pro Advice Solutions', logo: '/logos/proadvice-logo.png' },
  { name: 'TXT E-TECH', logo: '/logos/txt-logo.png' },
  { name: 'Gesca S.r.l', logo: '/logos/gesca-logo.png' },
  { name: 'Contrader', logo: '/logos/contrader-logo.jpg' },
  { name: 'DocPozz Counseling Academy', logo: '/logos/counseling-academy.logo.png' },
  { name: 'Coisystem', logo: '/logos/coisystem.png' },
  { name: 'Arzillibus', logo: '/logos/arzillibus.png' },
  { name: 'VibeCoded Tools', logo: '/logos/vibecoded-tools-logo.jpeg' },
  { name: 'SerataPerfetta', logo: '/logos/serataperfetta-logo.png' },
]

export function Collaborations() {
  return (
    <section className="relative py-20">
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

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto px-4">
        {collaborators.map((collab, index) => (
          <motion.div
            key={collab.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/15 flex items-center justify-center p-3 group-hover:border-violet-500/40 group-hover:bg-white/15 transition-all duration-300">
              <Image
                src={collab.logo}
                alt={collab.name}
                width={56}
                height={56}
                className="w-full h-full object-contain rounded-full brightness-125 opacity-80 group-hover:opacity-100 group-hover:brightness-150 transition-all duration-300"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-xs text-white/60 whitespace-nowrap bg-white/5 backdrop-blur-sm px-2 py-1 rounded">
                {collab.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
