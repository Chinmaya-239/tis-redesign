const VARIANTS = {
  primary: 'bg-brand text-navy hover:brightness-105',
  secondary: 'border-2 border-ink/20 text-ink hover:border-ink',
}

export default function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-bold transition-all duration-200 active:scale-95 ${VARIANTS[variant]} ${className}`
  const external = href?.startsWith('http')

  if (href) {
    return (
      <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noreferrer' })} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
