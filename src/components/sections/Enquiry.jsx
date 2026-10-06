import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { CLASSES, SITE, STATES } from '../../data/content'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

const EMPTY = { name: '', phone: '', grade: '', state: '' }

function validate(v) {
  const errors = {}
  if (v.name.trim().length < 2) errors.name = 'Enter the parent or guardian’s name.'
  if (!/^[6-9]\d{9}$/.test(v.phone)) errors.phone = 'Enter a 10-digit Indian mobile number.'
  if (!v.grade) errors.grade = 'Choose a class.'
  if (!v.state) errors.state = 'Choose your state.'
  return errors
}

function Field({ label, error, children }) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold">{label}</label>
      {children({ id, 'aria-invalid': Boolean(error), 'aria-describedby': error ? `${id}-error` : undefined })}
      {error && <p id={`${id}-error`} className="mt-2 text-sm font-medium text-red-600 dark:text-red-400">{error}</p>}
    </div>
  )
}

const inputClass = 'min-h-12 w-full rounded-2xl border border-line bg-bg px-4 text-base aria-[invalid=true]:border-red-500'

export default function Enquiry() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    // Demo build: swap this for a POST to the admissions API.
    if (Object.keys(found).length === 0) setSent(true)
  }

  const reset = () => {
    setValues(EMPTY)
    setSent(false)
  }

  return (
    <section id="enquire" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-navy p-6 text-white sm:p-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">When you choose a school that chooses you, it becomes a place to belong.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
            Tell us a little about your child and our admissions team will get in touch.
          </p>
          <address className="mt-8 space-y-2 not-italic text-white/85">
            <p><a href={SITE.phoneHref} className="font-bold underline-offset-4 hover:underline">{SITE.phone}</a></p>
            <p><a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:underline">{SITE.email}</a></p>
            <p className="max-w-sm">{SITE.address}</p>
          </address>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl bg-surface p-6 text-ink sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.div key="done" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} role="status" className="py-8 text-center">
                <CheckCircle2 size={48} className="mx-auto text-green-600" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-extrabold">Enquiry received</h3>
                <p className="mt-2 text-muted">We will call {values.name.trim()} on +91 {values.phone} soon.</p>
                <Button type="button" variant="secondary" onClick={reset} className="mt-6">Send another enquiry</Button>
              </motion.div>
            ) : (
              <motion.form key="form" noValidate onSubmit={onSubmit} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="space-y-5">
                <h3 className="text-2xl font-extrabold">Enquire now</h3>
                <Field label="Parent or guardian name" error={errors.name}>
                  {(p) => <input {...p} type="text" autoComplete="name" value={values.name} onChange={set('name')} className={inputClass} />}
                </Field>
                <Field label="Mobile number" error={errors.phone}>
                  {(p) => <input {...p} type="tel" inputMode="numeric" maxLength={10} autoComplete="tel-national" value={values.phone} onChange={set('phone')} className={inputClass} />}
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Class" error={errors.grade}>
                    {(p) => (
                      <select {...p} value={values.grade} onChange={set('grade')} className={inputClass}>
                        <option value="">Select class</option>
                        {CLASSES.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    )}
                  </Field>
                  <Field label="State" error={errors.state}>
                    {(p) => (
                      <select {...p} value={values.state} onChange={set('state')} className={inputClass}>
                        <option value="">Select state</option>
                        {STATES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    )}
                  </Field>
                </div>
                <Button type="submit" className="w-full">Send enquiry</Button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
