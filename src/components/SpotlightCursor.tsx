'use client'

import { useEffect, useRef } from 'react'

export default function SpotlightCursor() {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const el = divRef.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      el.style.opacity = '1'
      el.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(99, 102, 241, 0.06), transparent 40%)`
    }
    const onLeave = () => { el.style.opacity = '0' }
    const onEnter = () => { el.style.opacity = '1' }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <div
      ref={divRef}
      className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
      style={{ opacity: 0 }}
    />
  )
}
