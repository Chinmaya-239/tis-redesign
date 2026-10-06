import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, input, select, textarea, [data-cursor]'

/** Ring that follows the mouse and grows over interactive elements. Disabled on touch devices. */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const query = window.matchMedia('(pointer: coarse)')
    const update = () => setEnabled(!query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setActive(Boolean(e.target.closest?.(INTERACTIVE)))
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{ scale: active ? 1.9 : 1, opacity: active ? 0.7 : 1 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border-2 border-white mix-blend-difference"
    />
  )
}
