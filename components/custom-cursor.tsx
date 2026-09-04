'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip on touch / coarse pointers
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0
    let raf = 0
    let visible = false

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      // The dot tracks the pointer 1:1
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      if (!visible) {
        visible = true
        ring.classList.add('is-visible')
        dot.classList.add('is-visible')
      }

      // Expand the ring when hovering interactive elements
      const target = e.target as HTMLElement | null
      const interactive = target?.closest('a, button, [role="button"], input, textarea, .glass')
      ring.classList.toggle('is-hovering', Boolean(interactive))
    }

    const onLeave = () => {
      visible = false
      ring.classList.remove('is-visible')
      dot.classList.remove('is-visible')
    }

    // Smooth trailing follow for the ring
    const tick = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
