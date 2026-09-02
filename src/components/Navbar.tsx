import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { messages } from '../data/site'
import { IconClose, IconMenu } from './Icons'
import { Logo } from './Logo'
import { WhatsAppLink } from './WhatsAppLink'

const nav = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/empreendimentos', label: 'Empreendimentos' },
  { to: '/contato', label: 'Contato' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div
        className="page-shell flex h-16 items-center justify-between gap-6 md:h-[4.5rem]"
        inert={open || undefined}
      >
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <WhatsAppLink variant="primary" className="cta-primary--nav" message={messages.general}>
            WhatsApp
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
          <div className="flex h-16 items-center justify-between px-5">
            <Logo />
            <button type="button" className="inline-flex p-2 text-ink" onClick={() => setOpen(false)}>
              <span className="sr-only">Fechar menu</span>
              <IconClose />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-8 px-6 pb-16" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-display text-4xl leading-none text-ink no-underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppLink variant="primary" message={messages.general} className="self-start">
              WhatsApp
            </WhatsAppLink>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
