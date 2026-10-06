const PHRASE = 'Let’s do it with Tulas'

/** Brand tagline from the original homepage as a pausable ticker. */
export default function Marquee() {
  const row = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="mx-8 font-display text-4xl font-extrabold sm:text-6xl">{PHRASE}</span>
  ))

  return (
    <section aria-label={PHRASE} className="marquee overflow-hidden bg-brand py-6 text-navy">
      <div className="marquee-track flex w-max whitespace-nowrap" aria-hidden="true">
        <div className="flex">{row}</div>
        <div className="flex">{row}</div>
      </div>
      <p className="sr-only">{PHRASE}</p>
    </section>
  )
}
