import { LeadForm } from '../components/LeadForm'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { site } from '../data/site'
import { usePageMeta } from '../lib/meta'

export function ContactPage() {
  usePageMeta(
    'Contato — Total Incorporações',
    'Fale com a Total Incorporações: formulário, telefone e WhatsApp oficial do Instagram.',
  )

  return (
    <div className="section-y">
      <div className="page-shell grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label text-mute">Contato</p>
          <h1 className="font-display mt-4 mb-0 text-5xl leading-none uppercase md:text-6xl">
            Um recado. Ou o WhatsApp.
          </h1>
          <p className="mt-6 mb-0 max-w-[36ch] text-[1.125rem] leading-relaxed text-mute">
            O WhatsApp da empresa não abre daqui. Sem mapa vazio — o recado fica no formulário.
          </p>
          <ul className="mt-10 mb-0 list-none p-0">
            <li className="border-t border-line py-4">
              <p className="label m-0 text-mute">Telefone</p>
              <a className="mt-2 inline-block text-xl text-ink no-underline" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </li>
            <li className="border-t border-line py-4">
              <p className="label m-0 text-mute">WhatsApp</p>
              <WhatsAppLink className="text-link mt-2 text-ink">
                <span className="text-link-label">Abrir conversa</span>
              </WhatsAppLink>
            </li>
            <li className="border-t border-line py-4">
              <p className="label m-0 text-mute">Instagram</p>
              <a
                className="mt-2 inline-block text-xl text-ink no-underline"
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.instagramHandle}
              </a>
            </li>
            <li className="border-t border-line py-4">
              <p className="label m-0 text-mute">Registro</p>
              <p className="mt-2 mb-0 text-xl">{site.creci}</p>
            </li>
          </ul>
        </div>
        <div id="formulario" className="lg:col-span-6 lg:col-start-7">
          <LeadForm />
        </div>
      </div>
    </div>
  )
}
