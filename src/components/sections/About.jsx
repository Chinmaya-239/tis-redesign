import { STATS } from '../../data/content'
import CountUp from '../animation/CountUp'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title="What’s the secret to making school awesome?">
            It’s all about making learning feel like an adventure, where curiosity leads, creativity thrives, and every day brings
            something new to discover. There, we cracked it!
          </SectionHeading>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
              <dd className="font-display text-5xl font-extrabold sm:text-6xl">
                {stat.text ?? <CountUp to={stat.to} suffix={stat.suffix} />}
              </dd>
              <dt className="mt-3 text-muted">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-12 max-w-3xl text-lg leading-relaxed text-muted">
          Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education
          through seamless opportunities.
        </Reveal>
      </div>
    </section>
  )
}
