import { useState } from 'react'

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('')

/** Photo with an initials fallback so a broken remote image never leaves a hole. */
export default function Avatar({ src, name, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`grid place-items-center bg-navy font-display text-4xl font-extrabold text-brand ${className}`} role="img" aria-label={name}>
        {initials(name)}
      </div>
    )
  }
  return <img src={src} alt={name} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}
