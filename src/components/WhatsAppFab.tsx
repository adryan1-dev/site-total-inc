import { useEffect, useState } from 'react'
import { messages, whatsappHref } from '../data/site'
import { IconWhatsApp } from './Icons'

export function WhatsAppFab() {
  const [on, setOn] = useState(false)

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappHref(messages.general)}
      className={`fab-wa ${on ? 'is-on' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconWhatsApp className="h-6 w-6" />
      <span className="sr-only">Falar no WhatsApp (abre numa nova aba)</span>
    </a>
  )
}
