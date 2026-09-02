import { site } from '../data/site'
import { WhatsAppLink } from './WhatsAppLink'

export function Footer() {
  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="page-shell flex flex-col gap-8 pt-12 pb-8 md:flex-row md:items-end md:justify-between md:pt-16 md:pb-10">
        <div>
          <p className="font-display m-0 text-3xl leading-none font-bold text-paper uppercase md:text-4xl">
            {site.name}
          </p>
          <p className="mt-3 mb-0 max-w-xs font-sans text-sm tracking-wide text-paper/65">
            {site.slogan}
          </p>
        </div>
        <div className="flex flex-col gap-3 font-sans text-[0.8125rem] font-semibold tracking-[0.12em] text-paper uppercase">
          <a className="text-paper no-underline transition-colors duration-[420ms] hover:text-paper/70" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <WhatsAppLink className="text-paper no-underline transition-colors duration-[420ms] hover:text-paper/70">
            WhatsApp
          </WhatsAppLink>
          <a
            className="text-paper no-underline transition-colors duration-[420ms] hover:text-paper/70"
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram {site.instagramHandle}
          </a>
        </div>
      </div>
      <p className="m-0 border-t border-paper/10 px-[var(--page-x)] py-5 text-center font-sans text-xs leading-relaxed text-paper/45">
        Protótipo comercial com dados públicos. Contatos do Instagram oficial — validar internamente
        antes de publicar.
      </p>
    </footer>
  )
}
