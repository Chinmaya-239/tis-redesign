import { Mail, MapPin, Phone } from 'lucide-react'
import { SCHOOL } from '../../data/content'
import Container from '../ui/Container'

const LINKS = [
  ['FAQ', 'https://tis.edu.in/faq/'],
  ['Virtual tour', SCHOOL.tourUrl],
  ['Brochure', 'https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf'],
  ['Privacy policy', 'https://tis.edu.in/privacy-policy/'],
  ['Terms & conditions', 'https://tis.edu.in/terms-conditions/'],
  ['Child welfare & safety policy', 'https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf'],
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-extrabold">{SCHOOL.name}</p>
          <p className="mt-4 max-w-sm text-white/75">
            Established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.
          </p>
        </div>
        <address className="space-y-3 text-sm not-italic text-white/85">
          <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" />{SCHOOL.address}</p>
          <a className="flex gap-3 hover:text-gold" href={`tel:${SCHOOL.phone}`}><Phone size={18} className="shrink-0 text-gold" />Admissions {SCHOOL.phoneLabel}</a>
          <p className="flex gap-3"><Phone size={18} className="shrink-0 text-gold" />Landline {SCHOOL.landlines.join(', ')}</p>
          <a className="flex gap-3 hover:text-gold" href={`mailto:${SCHOOL.email}`}><Mail size={18} className="shrink-0 text-gold" />{SCHOOL.email}</a>
        </address>
        <nav aria-label="Footer">
          <ul className="space-y-1 text-sm text-white/85">
            {LINKS.map(([label, href]) => (
              <li key={label}><a className="inline-block py-1.5 hover:text-gold" href={href} target="_blank" rel="noreferrer">{label}</a></li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-white/15 py-5 text-center text-xs text-white/60">
        Copyright © 2026 Tulas International School, Dehradun. Redesign concept built for a frontend assessment.
      </div>
    </footer>
  )
}
