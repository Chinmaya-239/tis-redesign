export default function SectionHeading({ title, children, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted">{children}</p>}
    </div>
  )
}
