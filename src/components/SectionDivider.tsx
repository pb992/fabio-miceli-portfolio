'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'wave' | 'dots' | 'geometric'
  className?: string
}

export default function SectionDivider({ 
  variant = 'wave', 
  className = '' 
}: SectionDividerProps) {
  const variants = {
    wave: (
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path 
          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" 
          fill="url(#waveGradient)"
        />
      </svg>
    ),
    dots: (
      <svg 
        viewBox="0 0 1200 80" 
        preserveAspectRatio="none" 
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="dotsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {Array.from({ length: 20 }, (_, i) => (
          <motion.circle
            key={i}
            cx={60 + i * 60}
            cy={40}
            r="3"
            fill="url(#dotsGradient)"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: i * 0.05,
            }}
            viewport={{ once: true, amount: 0.15 }}
          />
        ))}
      </svg>
    ),
    geometric: (
      <svg 
        viewBox="0 0 1200 80" 
        preserveAspectRatio="none" 
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="geometricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.polygon
          points="0,80 200,0 400,80 600,0 800,80 1000,0 1200,80"
          fill="url(#geometricGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.15 }}
        />
      </svg>
    )
  }

  return (
    <motion.div 
      className={`w-full h-16 sm:h-20 opacity-70 dark:opacity-100 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {variants[variant]}
    </motion.div>
  )
}
