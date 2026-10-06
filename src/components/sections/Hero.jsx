import { motion, useReducedMotion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { SITE } from '../../data/content'
import Button from '../ui/Button'
import HeroImage from '../ui/HeroImage'

export default function Hero() {
  const reduce = useReducedMotion()
  // One orchestrated page-load sequence: children rise in a short stagger.
  const container = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.1 } } }
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="top" className="px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="inline-block rounded-full bg-brand px-4 py-2 text-sm font-bold text-navy">
            CBSE co-ed boarding and day school, Class IV to XII
          </motion.p>
          <motion.h1 variants={item} className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
            Welcome to Tulas International School
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            TIS is one of India’s top boarding and day schools in Dehradun. Our CBSE curriculum focuses on academic excellence,
            holistic development, and preparing students to be global leaders.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={SITE.applyUrl}>Apply now</Button>
            <Button href="#enquire" variant="secondary">Enquire now</Button>
          </motion.div>
          <motion.a variants={item} href={SITE.phoneHref} className="mt-6 inline-flex min-h-12 items-center gap-2 font-bold">
            <Phone size={18} aria-hidden="true" /> Admissions helpline {SITE.phone}
          </motion.a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <HeroImage
            sources={SITE.heroImages}
            alt="Tulas International School campus in Dehradun"
            className="aspect-[4/5] w-full rounded-[2rem] bg-navy sm:aspect-[6/5]"
          />
          <div className="absolute -bottom-6 left-4 max-w-[16rem] rounded-2xl border border-line bg-surface p-4 shadow-lg sm:-left-6">
            <p className="font-display text-xl font-extrabold">Established 2012</p>
            <p className="mt-1 text-sm text-muted">Under the aegis of Rishabh Educational Trust</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
