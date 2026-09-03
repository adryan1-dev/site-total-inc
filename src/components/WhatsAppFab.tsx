import { useEffect, useState } from 'react'
import { messages } from '../data/site'
import { IconWhatsApp } from './Icons'
import { WhatsAppDemoDialog } from './WhatsAppDemoDialog'

export function WhatsAppFab() {
  const [on, setOn] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <button
        type="button"
        className={`fab-wa ${on ? 'is-on' : ''}`}
        onClick={() => setOpen(true)}
      >
        <IconWhatsApp className="h-6 w-6" />
        <span className="sr-only">Abrir o WhatsApp do protótipo</span>
      </button>
      {open ? <WhatsAppDemoDialog message={messages.general} onClose={() => setOpen(false)} /> : null}
    </>
  )
}
