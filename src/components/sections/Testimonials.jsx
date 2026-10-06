import { Quote } from 'lucide-react'
import { REVIEWS } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section id="parents" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title="From the parents">
            Real words from families who chose a school that chooses their child.
          </SectionHeading>
        </Reveal>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal as="li" key={r.name} delay={(i % 3) * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7">
                <Quote size={28} className="text-brand" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 leading-relaxed">{r.quote}</blockquote>
                <figcaption className="mt-6">
                  <p className="font-bold">{r.name}</p>
                  <p className="text-sm text-muted">{r.relation}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
