'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import HeroBackground from './HeroBackground'
import MagneticButton from './MagneticButton'

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
      <HeroBackground />

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[var(--foreground)] mb-6">
            Trasformo problemi in{' '}
            <span className="text-gradient">soluzioni</span>.
            <br />
            <span className="text-primary-600">Velocemente</span>.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 font-medium"
        >
          Dev + Design + metodologia agile = Impatto business in tempi da freelance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton strength={0.2}>
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Scopri come lavoro
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}