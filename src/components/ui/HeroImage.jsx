import { useState } from 'react'

/** Tries each source in order; if every one fails, shows an illustrated campus instead of a broken image. */
export default function HeroImage({ sources, alt, className = '' }) {
  const [index, setIndex] = useState(0)

  if (index < sources.length) {
    return (
      <img
        key={sources[index]}
        src={sources[index]}
        alt={alt}
        width="1200"
        height="630"
        fetchpriority="high"
        onError={() => setIndex((i) => i + 1)}
        className={`object-cover ${className}`}
      />
    )
  }

  return (
    <svg role="img" aria-label={alt} viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice" className={className}>
      <rect width="600" height="500" fill="#16264f" />
      <circle cx="450" cy="120" r="48" fill="#F5B700" />
      <path d="M0 330 L130 190 L230 290 L340 150 L470 300 L600 220 V500 H0Z" fill="#22397a" />
      <path d="M0 380 L110 290 L210 370 L330 260 L450 380 L600 310 V500 H0Z" fill="#2d4a99" />
      <rect x="150" y="300" width="300" height="120" fill="#F7F8FB" />
      <path d="M130 300 L300 220 L470 300Z" fill="#F5B700" />
      <rect x="270" y="340" width="60" height="80" fill="#0F1B3D" />
      {[185, 215, 355, 385].map((x) => (
        <rect key={x} x={x} y="335" width="20" height="30" fill="#2d4a99" />
      ))}
      <rect y="420" width="600" height="80" fill="#1d6b4a" />
    </svg>
  )
}
