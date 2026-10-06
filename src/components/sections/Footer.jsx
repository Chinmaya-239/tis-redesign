import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { SITE } from '../../data/content'

const LINKS = [
  { label: 'FAQ', href: 'https://tis.edu.in/faq/' },
  { label: 'Brochure', href: 'https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf' },
  { label: 'Virtual tour', href: 'https://tis.edu.in/virtual-tour/' },
  { label: 'Privacy policy', href: 'https://tis.edu.in/privacy-policy/' },
  { label: 'Terms and conditions', href: 'https://tis.edu.in/terms-conditions/' },
  { label: 'Child welfare and safety policy', href: 'https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf' },
]

const SOCIAL = [
  { label: 'Facebook', Icon: Facebook, href: 'https://www.facebook.com/tulasinternationalschool/' },
  { label: 'Twitter', Icon: Twitter, href: 'https://twitter.com/tulas_intschool' },
  { label: 'LinkedIn', Icon: Linkedin, href: 'https://www.linkedin.com/school/tulas-international-school/' },
  { label: 'Instagram', Icon: Instagram, href: 'https://www.instagram.com/tulasinternationalschool/' },
  { label: 'YouTube', Icon: Youtube, href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold">{SITE.name}</p>
          <address className="mt-4 space-y-1 not-italic text-muted">
            <p><a href={SITE.mapUrl} target="_blank" rel="noreferrer" className="hover:text-ink">{SITE.address}</a></p>
            <p>Landline {SITE.landlines.join(', ')}</p>
            <p>Admission helpline <a href={SITE.phoneHref} className="font-bold text-ink">{SITE.phone}</a></p>
          </address>
          <ul className="mt-6 flex gap-2">
            {SOCIAL.map(({ label, Icon, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-12 w-12 place-items-center rounded-full border border-line hover:border-ink">
                  <Icon size={20} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-1 sm:grid-cols-2">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer" className="block py-2 text-muted hover:text-ink">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-7xl text-sm text-muted">
        Redesign concept for a frontend assessment. Copy and brand assets belong to Tulas International School, Dehradun.
      </p>
    </footer>
  )
}
