'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface SectionDividerProps {
  variant?: 'glow' | 'gradient' | 'orbit'
  className?: string
}

function MouseGlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const glow = glowRef.current
    if (!container || !glow) return

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const isNear = Math.abs(e.clientY - rect.top - rect.height / 2) < 80
      glow.style.opacity = isNear ? '1' : '0'
      glow.style.left = `${x}px`
    }

    const onLeave = () => {
      if (glow) glow.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    container.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      container.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <div
        ref={glowRef}
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 rounded-full opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, var(--primary) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
    </div>
  )
}

export default function SectionDivider({
  variant = 'glow',
  className = '',
}: SectionDividerProps) {
  if (variant === 'gradient') {
    return (
      <div className={`relative py-8 ${className}`}>
        <MouseGlow />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="h-px mx-auto max-w-2xl bg-linear-to-r from-transparent via-(--primary) to-transparent"
        />
      </div>
    )
  }

  if (variant === 'orbit') {
    return (
      <div className={`relative py-10 flex items-center justify-center ${className}`}>
        <MouseGlow />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="h-px w-full max-w-md bg-linear-to-r from-transparent via-neutral-700 to-transparent"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="absolute w-2 h-2 rounded-full bg-(--primary)"
        >
          <div className="absolute inset-0 rounded-full bg-(--primary) animate-ping opacity-30" />
        </motion.div>
      </div>
    )
  }

  // Default: glow
  return (
    <div className={`relative py-12 ${className}`}>
      <MouseGlow />
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative h-px mx-auto max-w-3xl"
      >
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-(--primary) to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-(--primary) to-transparent blur-sm" />
        <div className="absolute -inset-1 bg-linear-to-r from-transparent via-(--primary) to-transparent blur-md opacity-50" />
      </motion.div>
    </div>
  )
}
