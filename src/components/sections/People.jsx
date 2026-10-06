import { LEADERS, PEOPLE } from '../../data/content'
import Avatar from '../ui/Avatar'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'

export default function People() {
  return (
    <section id="people" aria-labelledby="people-title" className="bg-surface py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading id="people-title" title="Champions and leaders walk our campus">
            Sports stars, change-makers and national leaders visit TIS to inspire students.
          </SectionHeading>
        </Reveal>
      </Container>

      <ul className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]" tabIndex={0} aria-label="Influential personalities on campus">
        {PEOPLE.map((p) => (
          <li key={p.name} data-cursor className="group w-64 shrink-0 snap-start">
            <div className="overflow-hidden rounded-3xl">
              <Avatar name={p.name} src={p.img} className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{p.role}</p>
          </li>
        ))}
      </ul>

      <Container className="mt-12">
        <h3 className="font-display text-2xl font-bold">Leaders of India</h3>
        <ul className="mt-5 grid gap-x-10 gap-y-3 text-muted sm:grid-cols-2">
          {LEADERS.map((l) => <li key={l} className="border-t border-line pt-3">{l}</li>)}
        </ul>
      </Container>
    </section>
  )
}
