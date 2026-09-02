import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { IconArrow } from './Icons'

type Props = {
  children: ReactNode
  className?: string
  href?: string
  to?: string
  external?: boolean
}

export function TextLink({ children, className = '', href, to, external }: Props) {
  const inner = (
    <>
      <span className="text-link-label">{children}</span>
      <IconArrow className="text-link-arrow h-4 w-4 shrink-0" />
    </>
  )

  const classes = `text-link ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {inner}
    </a>
  )
}
