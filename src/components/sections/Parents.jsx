import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { REVIEWS } from '../../data/content'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'

export default function Parents() {
  const [active, setActive] = useState(0)
  const review = REVIEWS[active]

  return (
    <section id="parents" aria-labelledby="parents-title" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <SectionHeading id="parents-title" title="From the parents" />
          <div role="tablist" aria-label="Parent reviews" className="mt-10 flex flex-col gap-2">
            {REVIEWS.map((r, i) => (
              <button
                key={r.name}
                role="tab"
                id={`tab-${i}`}
                aria-selected={i === active}
                aria-controls="review-panel"
                onClick={() => setActive(i)}
                className={`min-h-11 rounded-2xl px-5 py-3 text-left transition-colors ${i === active ? 'bg-navy text-white dark:bg-gold dark:text-navy' : 'hover:bg-surface'}`}
              >
                <span className="font-semibold">{r.name}</span>
                <span className="block text-sm opacity-75">{r.relation}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="self-center">
          <div id="review-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="min-h-72 rounded-[2rem] bg-surface p-8 ring-1 ring-line sm:p-12">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="font-display text-2xl font-bold leading-snug sm:text-3xl">“{review.text}”</blockquote>
                <figcaption className="mt-8 text-muted">{review.name}, {review.relation}</figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
