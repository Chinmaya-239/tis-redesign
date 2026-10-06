import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, input, select, textarea, label, [data-cursor]'

/** Mouse-follower ring. Not rendered on touch devices; grows over interactive elements. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 520, damping: 42, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 520, damping: 42, mass: 0.4 })

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const sync = () => setEnabled(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => setActive(Boolean(e.target.closest?.(INTERACTIVE)))
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
    }
  }, [enabled, x, y])

  if (!enabled) return null
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[18px] -mt-[18px] size-9 rounded-full border-2 border-white mix-blend-difference"
      style={{ x: sx, y: sy }}
      animate={{ scale: active ? 1.7 : 1, backgroundColor: active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0)' }}
      transition={{ duration: 0.2 }}
    />
  )
}
