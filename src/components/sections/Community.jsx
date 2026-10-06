import { PERSONALITIES } from '../../data/content'
import Reveal from '../animation/Reveal'
import Avatar from '../ui/Avatar'
import SectionHeading from '../ui/SectionHeading'

export default function Community() {
  return (
    <section id="community" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading title="Influential personalities on campus">
            Champions, creators and changemakers who have visited and inspired the Tulas community.
          </SectionHeading>
        </Reveal>
      </div>

      <ul
        tabIndex={0}
        aria-label="Influential personalities, scroll sideways to see more"
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        {PERSONALITIES.map((p) => (
          <li key={p.name} data-cursor className="w-64 shrink-0 snap-start overflow-hidden rounded-3xl border border-line bg-surface sm:w-72">
            <Avatar src={p.img} name={p.name} className="aspect-[3/4] w-full" />
            <div className="p-5">
              <h3 className="text-xl font-extrabold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
