'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#0a0a1a]">
        {/* Base gradient */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(129, 140, 248, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 100% 50%, rgba(96, 165, 250, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 0% 80%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Aurora effect - desktop only */}
        {!isMobile && (
          <>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: ['-20%', '20%', '-20%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(129, 140, 248, 0.3) 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4],
                x: ['20%', '-20%', '20%'],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(96, 165, 250, 0.25) 0%, transparent 70%)',
                filter: 'blur(80px)',
              }}
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
          </>
        )}

        {/* Interactive spotlight - desktop only */}
        {!isMobile && (
          <div
            className="absolute inset-0 opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(129, 140, 248, 0.15), transparent 40%)`,
            }}
          />
        )}

        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main headline */}
          <h1 className="font-(family-name:--font-manrope) text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4">
            <span className="text-white">Il tuo problema è la mia </span>
            <span className="gradient-text">soluzione.</span>
          </h1>

          {/* Accent line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-400 mb-6"
          >
            Velocemente.
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Dev + Design + metodologia agile = <br className="sm:hidden" />
            <span className="text-white/80">Impatto business in tempi da freelance</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MagneticButton>
              <a 
                href="#chi-sono"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold bg-linear-to-r from-violet-600 via-violet-500 to-blue-600 text-white overflow-hidden"
              >
                <span className="relative z-10">Scopri come lavoro</span>
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-blue-600 via-violet-500 to-violet-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest">Scorri</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Magnetic button component
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile('ontouchstart' in window)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.15, y: y * 0.15 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}
