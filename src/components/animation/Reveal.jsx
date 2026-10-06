import { motion, useReducedMotion } from 'framer-motion'

/** Fades and lifts children into view once. Pass `delay` to stagger siblings. */
export default function Reveal({ as = 'div', delay = 0, y = 24, className, children }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
