import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { STATS } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../animation/Reveal'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, { duration: 1.4, ease: 'easeOut', onUpdate: (n) => setValue(Math.round(n)) })
    return () => controls.stop()
  }, [inView, reduce, to])

  return <span ref={ref}>{value}{suffix}</span>
}

export default function Stats() {
  return (
    <section id="stats" aria-label="Campus facts" className="relative z-10 -mt-px bg-navy text-white">
      <Container>
        <dl className="grid grid-cols-2 divide-white/15 lg:grid-cols-4 lg:divide-x">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="px-2 py-10 sm:px-8">
              <dd className="font-display text-5xl font-extrabold tracking-tight text-gold sm:text-6xl">
                {s.text ?? <Counter to={s.to} suffix={s.suffix} />}
              </dd>
              <dt className="mt-2 text-sm text-white/80 sm:text-base">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  )
}
