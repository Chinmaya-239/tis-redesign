import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { NAV, SCHOOL } from '../../data/content'
import Button from '../ui/Button'
import Container from '../ui/Container'
import ThemeToggle from '../ui/ThemeToggle'

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  const tone = scrolled || open ? 'bg-surface/90 text-ink shadow-sm backdrop-blur-md' : 'bg-transparent text-white'

  return (
    <header className={`fixed inset-x-0 top-1 z-50 transition-colors duration-300 ${tone}`}>
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight" aria-label="Tulas International School, home">
          <span className="mr-2 inline-block h-3 w-3 rounded-full bg-gold align-middle" />
          Tulas <span className="font-medium opacity-80">International School</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="group relative py-2 text-sm font-medium">
              {l.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${SCHOOL.phone}`} className="hidden min-h-11 items-center gap-2 px-3 text-sm font-semibold xl:flex">
            <Phone size={16} /> {SCHOOL.phoneLabel}
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button href={SCHOOL.applyUrl} className="hidden sm:inline-flex">Apply now</Button>
          <button
            type="button"
            className="grid size-11 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <Container className="flex flex-col pb-6">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line py-4 font-display text-xl font-bold">
                  {l.label}
                </a>
              ))}
              <Button href={SCHOOL.applyUrl} variant="solid" className="mt-5">Apply now</Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
