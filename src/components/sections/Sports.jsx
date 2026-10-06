import { RANKINGS, SPORTS } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Sports() {
  return (
    <section id="sports" className="bg-navy px-4 py-20 text-white sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title="16+ sports curated to bring joy and discipline">
            <span className="text-white/75">It’s not just a facility. At Tulas it’s the foundation!</span>
          </SectionHeading>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {SPORTS.map((sport, i) => (
            <Reveal
              as="li"
              key={sport}
              delay={(i % 4) * 0.06}
              className="rounded-2xl border border-white/15 px-5 py-5 text-lg font-bold transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-navy"
            >
              {sport}
            </Reveal>
          ))}
        </ul>

        <h3 className="mt-20 text-2xl font-extrabold sm:text-3xl">Ranked among India’s leading co-educational boarding schools</h3>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RANKINGS.map((r, i) => (
            <Reveal as="li" key={r.by} delay={i * 0.08} className="rounded-3xl bg-white/5 p-6">
              <p className="font-display text-6xl font-extrabold text-brand">{r.rank}</p>
              <p className="mt-2 text-xl font-bold">{r.place}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{r.by}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
