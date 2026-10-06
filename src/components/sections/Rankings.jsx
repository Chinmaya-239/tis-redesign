import { RANKINGS } from '../../data/content'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'

export default function Rankings() {
  return (
    <section id="rankings" aria-labelledby="rank-title" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading id="rank-title" title="Ranked among India’s best co-educational boarding schools" />
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RANKINGS.map((r, i) => (
            <Reveal as="li" key={r.where} delay={i * 0.08} className={`rounded-3xl p-7 ${i === 0 ? 'bg-gold text-navy lg:col-span-2 lg:row-span-1' : 'bg-surface ring-1 ring-line'}`}>
              <p className={`font-display font-extrabold leading-none tracking-tighter ${i === 0 ? 'text-8xl' : 'text-6xl text-brand'}`}>{r.rank}</p>
              <p className="mt-4 font-display text-xl font-bold">{r.where}</p>
              <p className={`mt-1 text-sm ${i === 0 ? 'text-navy/80' : 'text-muted'}`}>{r.title}, by {r.by}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
