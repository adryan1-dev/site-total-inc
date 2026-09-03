import { useState, type ReactNode } from 'react'
import { messages } from '../data/site'
import { IconArrow, IconWhatsApp } from './Icons'
import { WhatsAppDemoDialog } from './WhatsAppDemoDialog'

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
  const [open, setOpen] = useState(false)
  const classes = variant === 'primary' ? `cta-primary ${className}`.trim() : className

  return (
    <>
      <button type="button" className={`wa-action ${classes}`.trim()} onClick={() => setOpen(true)}>
        {showIcon ? <IconWhatsApp className="shrink-0" /> : null}
        {children}
        {variant === 'primary' ? <IconArrow className="cta-primary-arrow h-4 w-4 shrink-0" /> : null}
      </button>
      {open ? <WhatsAppDemoDialog message={message} onClose={() => setOpen(false)} /> : null}
    </>
  )
}
