import type { ReactNode } from 'react'
import { messages, whatsappHref } from '../data/site'
import { IconArrow, IconWhatsApp } from './Icons'

type Props = {
  message?: string
  children: ReactNode
  className?: string
  showIcon?: boolean
  variant?: 'text' | 'primary'
}

export function WhatsAppLink({
  message = messages.general,
  children,
  className = '',
  showIcon = false,
  variant = 'text',
}: Props) {
  const classes =
    variant === 'primary' ? `cta-primary ${className}`.trim() : className

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {showIcon ? <IconWhatsApp className="shrink-0" /> : null}
      {children}
      {variant === 'primary' ? <IconArrow className="cta-primary-arrow h-4 w-4 shrink-0" /> : null}
      <span className="sr-only"> (abre numa nova aba)</span>
    </a>
  )
}
