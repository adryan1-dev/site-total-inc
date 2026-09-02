import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router'
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
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const html = document.documentElement
    const main = document.getElementById('conteudo')
    const footer = document.querySelector('footer')
    html.classList.add('is-nav-open')
    main?.setAttribute('inert', '')
    footer?.setAttribute('inert', '')

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      html.classList.remove('is-nav-open')
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="page-shell flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
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
      {open
        ? createPortal(
            <div id="menu-mobile" className="menu-mobile menu-enter">
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
            </div>,
            document.body,
          )
        : null}
    </header>
  )
}
