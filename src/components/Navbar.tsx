import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { messages } from '../data/site'
import { IconClose, IconMenu } from './Icons'
import { Logo } from './Logo'
import { WhatsAppLink } from './WhatsAppLink'

const linkClass =
  'font-sans text-[0.8125rem] font-semibold tracking-[0.14em] text-ink uppercase no-underline transition-colors duration-[420ms] hover:text-brick'

const horizonteAnchors = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#lazer', label: 'Lazer' },
  { href: '#plantas', label: 'Plantas' },
  { href: '#interiores', label: 'Interiores' },
] as const

function DevelopmentsLink({
  onClick,
  className,
}: {
  onClick?: () => void
  className: string
}) {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return (
      <a href="#empreendimentos" className={className} onClick={onClick}>
        Empreendimentos
      </a>
    )
  }

  return (
    <Link to="/#empreendimentos" className={className} onClick={onClick}>
      Empreendimentos
    </Link>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onHorizonte = pathname.includes('recanto-do-horizonte')
  const whatsappMessage = onHorizonte ? messages.horizonte : messages.general

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper pt-[env(safe-area-inset-top,0px)]">
      <div
        className="page-shell flex items-center justify-between gap-6 py-4 md:py-5"
        inert={open || undefined}
      >
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {onHorizonte
            ? horizonteAnchors.map((item) => (
                <a key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </a>
              ))
            : (
              <DevelopmentsLink className={linkClass} />
            )}
          <WhatsAppLink variant="primary" className="cta-primary--nav" message={whatsappMessage}>
            Falar no WhatsApp
          </WhatsAppLink>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {open ? (
        <div
          id="menu-mobile"
          className="menu-enter fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-paper pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)] lg:hidden"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <Logo />
            <button
              type="button"
              className="inline-flex p-2 text-ink"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <IconClose />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-8 px-6 pb-16" aria-label="Mobile">
            {onHorizonte ? (
              horizonteAnchors.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-display text-4xl leading-none font-bold text-ink no-underline"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))
            ) : (
              <DevelopmentsLink
                onClick={() => setOpen(false)}
                className="font-display text-4xl leading-none font-bold text-ink no-underline"
              />
            )}
            <WhatsAppLink
              variant="primary"
              message={whatsappMessage}
              className="self-start"
            >
              Falar no WhatsApp
            </WhatsAppLink>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
