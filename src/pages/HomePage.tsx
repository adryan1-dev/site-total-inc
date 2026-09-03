import { lazy, Suspense, useRef, useState } from 'react'
import { Link } from 'react-router'
import { HeroSearch } from '../components/HeroSearch'
import { PropertyCard } from '../components/PropertyCard'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { developments, featured, type Development } from '../data/developments'
import { messages, site } from '../data/site'
import { photoSrcSet } from '../lib/images'
import { useReveal } from '../lib/reveal'
import { usePageMeta } from '../lib/meta'

const GalleryDialog = lazy(() =>
  import('../components/GalleryDialog').then((module) => ({ default: module.GalleryDialog })),
)

const heroSrcSet = photoSrcSet(featured.cover.src, [480, 640, 960, 1280])

export function HomePage() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const instRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState<Development | null>(null)
  const [index, setIndex] = useState(0)

  useReveal(cardsRef)
  useReveal(instRef)
  usePageMeta(
    'Total Incorporações — Construindo seu Lar. Belo Horizonte',
    'Incorporadora em Belo Horizonte. Série Recanto para quem busca a casa própria. Fale com a equipe pelo WhatsApp.',
  )

  return (
    <div>
      <section className="relative z-0 isolate min-h-[calc(100svh-var(--header-h))] bg-ink text-paper" data-hero>
        <img
          src="/assets/recantos/horizonte/hero-640.webp"
          srcSet={heroSrcSet}
          sizes="100vw"
          alt={featured.cover.alt}
          width={featured.cover.width}
          height={featured.cover.height}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(55_52_53/0.92)_0%,rgb(55_52_53/0.45)_42%,rgb(55_52_53/0.2)_100%)]" />
        <div className="page-shell relative z-10 flex min-h-[calc(100svh-var(--header-h))] flex-col justify-end pt-24 pb-10 md:pb-14">
          <div className="hero-enter max-w-3xl">
            <p className="label text-paper/70">{featured.location}</p>
            <h1 className="font-display mt-4 mb-0 text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.9] uppercase">
              {featured.title}
            </h1>
            <p className="chip chip--accent mt-5">{featured.status}</p>
            <p className="mt-5 mb-0 max-w-md text-[1.125rem] leading-relaxed text-pretty text-paper/85">
              {featured.summary}
            </p>
            <p className="mt-3 mb-0 text-[1.125rem] text-paper/75">{site.slogan}</p>
            <div className="mt-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
              <WhatsAppLink variant="primary" message={messages.horizonte}>
                Falar no WhatsApp
              </WhatsAppLink>
              <Link to="/empreendimentos" className="cta-ghost text-paper">
                Ver empreendimentos
              </Link>
            </div>
          </div>
          <div className="mt-10 md:mt-12">
            <HeroSearch />
          </div>
        </div>
      </section>

      <section className="section-y" data-featured>
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label text-mute">Série Recanto</p>
              <h2 className="font-display mt-3 mb-0 text-4xl leading-none uppercase md:text-5xl">
                Três endereços. Fotos reais.
              </h2>
            </div>
            <Link to="/empreendimentos" className="text-link text-ink">
              <span className="text-link-label">Abrir catálogo</span>
            </Link>
          </div>
          <div ref={cardsRef} className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {developments.map((item, i) => (
              <PropertyCard
                key={item.slug}
                item={item}
                stagger={i}
                onOpen={(next) => {
                  setOpen(next)
                  setIndex(0)
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section ref={instRef} className="border-y border-line bg-dust section-y">
        <div className="page-shell grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6" data-reveal>
            <p className="label text-mute">A incorporadora</p>
            <h2 className="font-display mt-4 mb-0 max-w-[12ch] text-5xl leading-[0.92] uppercase md:text-6xl">
              Casa própria
              <span className="mt-1 block text-mute">em Belo Horizonte.</span>
            </h2>
            <p className="mt-6 mb-0 max-w-[38ch] text-[1.125rem] leading-relaxed text-pretty">
              A Total Incorporações constrói e comercializa a série Recanto — habitação sólida em BH
              e em Almenara. Sem portal lotado: três obras, conversa no WhatsApp.
            </p>
            {featured.facts ? (
              <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-line pt-8 sm:gap-4">
                {featured.facts.map((fact) => (
                  <div key={fact.label} className="flex min-w-0 flex-col">
                    <dt className="label m-0 flex min-h-[2.75rem] items-end text-mute">{fact.label}</dt>
                    <dd className="font-display mt-2 mb-0 text-3xl leading-none uppercase md:text-4xl">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
          <div className="photo-frame aspect-[4/5] lg:col-span-5 lg:col-start-8" data-reveal data-stagger="1">
            <img
              src="/assets/recantos/horizonte/fachada-2-640.webp"
              srcSet={photoSrcSet('/assets/recantos/horizonte/fachada-2.webp', [480, 640, 960])}
              sizes="(min-width: 1024px) 400px, 100vw"
              alt="Fachada do Recanto do Horizonte."
              width={1600}
              height={1333}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="page-shell flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display m-0 max-w-[14ch] text-5xl leading-[0.92] uppercase md:text-6xl">
              Fale com a equipe.
            </h2>
            <p className="mt-4 mb-0 max-w-md text-[1.125rem] leading-relaxed text-mute">
              Neste piloto o WhatsApp mostra o recado que iria na conversa. O formulário é o que
              guarda a mensagem.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <WhatsAppLink variant="primary" message={messages.general}>
              WhatsApp
            </WhatsAppLink>
            <Link to="/contato#formulario" className="cta-ghost text-ink">
              Formulário
            </Link>
          </div>
        </div>
      </section>

      {open ? (
        <Suspense fallback={null}>
          <GalleryDialog
            item={open}
            index={index}
            onIndex={setIndex}
            onClose={() => setOpen(null)}
          />
        </Suspense>
      ) : null}
    </div>
  )
}
