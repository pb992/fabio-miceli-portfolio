'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  left: string
  delay: string
  duration: string
  size: number
}

export function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const mobile = window.innerWidth < 768 || 'ontouchstart' in window
    setIsMobile(mobile)

    const count = mobile ? 15 : 35
    const generated: Particle[] = []
    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 15}s`,
        duration: `${Math.random() * 12 + 10}s`,
        size: Math.random() * 2 + 1,
      })
    }
    setParticles(generated)
  }, [])

  if (isMobile && particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            '--delay': p.delay,
            '--duration': p.duration,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
