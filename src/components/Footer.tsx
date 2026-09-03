import { Link } from 'react-router'
import { site } from '../data/site'
import { WhatsAppLink } from './WhatsAppLink'

export function Footer() {
  return (
    <footer className="border-t border-line bg-dust text-ink">
      <div className="page-shell flex flex-col gap-10 pt-16 pb-10 md:flex-row md:items-start md:justify-between">
        <div>
          <img
            src={site.logo.src}
            alt=""
            width={site.logo.width}
            height={site.logo.height}
            loading="lazy"
            decoding="async"
            className="h-10 w-auto"
          />
          <p className="mt-4 mb-0 max-w-xs text-[0.9375rem] leading-relaxed text-mute">
            Casa própria em Belo Horizonte e Almenara. Série Recanto.
          </p>
        </div>
        <nav className="flex flex-col gap-3" aria-label="Rodapé">
          <Link to="/sobre" className="text-link text-ink">
            <span className="text-link-label">Sobre</span>
          </Link>
          <Link to="/empreendimentos" className="text-link text-ink">
            <span className="text-link-label">Empreendimentos</span>
          </Link>
          <Link to="/contato" className="text-link text-ink">
            <span className="text-link-label">Contato</span>
          </Link>
        </nav>
        <div className="flex flex-col items-start gap-3 text-left text-[0.75rem] font-semibold tracking-[0.12em] text-ink uppercase">
          <a className="text-ink no-underline hover:text-accent" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <WhatsAppLink className="text-ink no-underline hover:text-accent">WhatsApp</WhatsAppLink>
          <a
            className="text-ink no-underline hover:text-accent"
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.instagramHandle}
          </a>
        </div>
      </div>
      <p className="m-0 border-t border-line px-[var(--page-x)] py-5 text-center text-xs leading-relaxed text-mute">
        {site.creci}. Dados tratados conforme a LGPD. Demo com fotos reais; specs marcadas como
        placeholder até validação.
      </p>
    </footer>
  )
}
