import { Link } from 'react-router'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { messages } from '../data/site'
import { usePageMeta } from '../lib/meta'

export function AboutPage() {
  usePageMeta(
    'Sobre — Total Incorporações',
    'Incorporadora da série Recanto em Belo Horizonte e Almenara. Casa própria, conversa no WhatsApp.',
  )

  return (
    <div className="section-y">
      <div className="page-shell grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="label text-mute">Sobre</p>
          <h1 className="font-display mt-4 mb-0 max-w-[12ch] text-5xl leading-[0.92] uppercase md:text-7xl">
            Construir o lar.
            <span className="mt-1 block text-mute">Sem teatro de luxo.</span>
          </h1>
          <p className="mt-8 mb-0 max-w-[42ch] text-[1.125rem] leading-relaxed text-pretty">
            A Total Incorporações trabalha habitação acessível em Belo Horizonte e Almenara. O
            portfólio no ar é a série Recanto: Horizonte em lançamento, Mata em obras, Alpes no
            conjunto. Fatos públicos entram no site; o resto espera validação.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WhatsAppLink variant="primary" message={messages.general}>
              WhatsApp
            </WhatsAppLink>
            <Link to="/empreendimentos" className="cta-ghost text-ink">
              Ver Recantos
            </Link>
          </div>
        </div>
        <div className="photo-frame aspect-[4/5] lg:col-span-5 lg:col-start-8">
          <img
            src="/assets/recantos/mata/fachada.webp"
            alt="Fachada do Recanto da Mata, em Jaqueline."
            width={1600}
            height={1600}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
