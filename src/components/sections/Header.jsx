import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { NAV, SITE } from '../../data/content'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-1 z-50 px-3 pt-2 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-line bg-surface/85 py-2 pl-5 pr-2 backdrop-blur-md">
        <a href="#top" className="flex items-center gap-3" aria-label="Tulas International School, home">
          <img src={SITE.logo} alt="" className="h-10 w-auto" />
          <span className="hidden font-display text-lg font-extrabold leading-none sm:block">Tulas International School</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="group relative px-4 py-3 text-sm font-medium">
              {item.label}
              <span className="absolute inset-x-4 bottom-2 h-0.5 origin-left scale-x-0 rounded bg-brand transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} className="hidden items-center gap-2 px-3 text-sm font-bold xl:flex">
            <Phone size={16} aria-hidden="true" /> {SITE.phone}
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button href={SITE.applyUrl} className="hidden sm:inline-flex">Apply now</Button>
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-line bg-surface p-3 lg:hidden"
          >
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-4 text-lg font-bold hover:bg-bg">
                {item.label}
              </a>
            ))}
            <Button href={SITE.applyUrl} className="mt-2 w-full">Apply now</Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
