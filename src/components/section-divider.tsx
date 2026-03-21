'use client'

import { motion } from 'framer-motion'

export function SectionDivider() {
  return (
    <div className="relative h-24 flex items-center justify-center overflow-hidden">
      {/* Center glow line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="absolute w-full h-px divider-glow"
      />

      {/* Orbiting dots */}
      <div className="relative w-32 h-8">
        <motion.div
          animate={{ 
            x: [0, 60, 0, -60, 0],
            opacity: [0.8, 0.4, 0.8, 0.4, 0.8],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50"
        />
        <motion.div
          animate={{ 
            x: [0, -60, 0, 60, 0],
            opacity: [0.4, 0.8, 0.4, 0.8, 0.4],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="absolute left-1/2 top-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"
        />
        <motion.div
          animate={{ 
            x: [30, -30, 30],
            opacity: [0.6, 0.6, 0.6],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="absolute left-1/2 top-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50"
        />
      </div>
    </div>
  )
}
