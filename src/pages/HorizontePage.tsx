import { useState, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router'
import { horizonte, type Photo } from '../data/developments'
import { clickTriggers, horizonteFaq, messages } from '../data/site'
import { ClickTrigger, FaqList } from '../components/FaqList'
import { FacadePhoto } from '../components/FacadePhoto'
import { PhotoDialog } from '../components/PhotoDialog'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { usePageMeta } from '../lib/meta'
import { setupHorizonteMotion } from '../lib/motion'

export function HorizontePage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<Photo | null>(null)

  usePageMeta(
    'Recanto do Horizonte — Total Incorporações',
    'Recanto do Horizonte em Canaã, Belo Horizonte. Duas torres, 177 unidades. Fale com a Total pelo WhatsApp.',
  )

  useLayoutEffect(() => {
    const root = pageRef.current
    if (!root) return
    return setupHorizonteMotion(root)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="relative bg-ink" data-hero>
        <div className="hero-stage relative" data-hero-facade>
          <FacadePhoto
            photo={horizonte.hero}
            priority
            className="absolute inset-0 size-full"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[62%] bg-[linear-gradient(to_top,rgb(44_44_44/0.94)_0%,rgb(44_44_44/0.4)_50%,transparent_100%)] md:block" />
        </div>
        <div className="bg-paper py-10 md:absolute md:inset-x-0 md:bottom-0 md:bg-transparent md:py-0 md:pb-16">
          <div className="page-shell">
            <p
              className="m-0 font-sans text-[0.7rem] font-semibold tracking-[0.2em] text-mute uppercase md:text-paper/65"
              data-hero-late
            >
              <Link
                to="/#empreendimentos"
                className="text-mute no-underline hover:text-brick md:text-paper/65 md:hover:text-paper"
              >
                Empreendimentos
              </Link>
              {' / '}
              01
            </p>
            <h1 className="font-display hero-mask mt-4 mb-0 max-w-[16ch] text-[clamp(2.5rem,7vw,6.75rem)] leading-[0.92] font-bold text-ink md:leading-[0.9] md:text-paper">
              <span className="block" data-split>
                Recanto do Horizonte
              </span>
            </h1>
            <p className="mt-3 mb-0 font-sans text-sm text-mute md:tracking-wide md:text-paper/75" data-hero-late>
              {horizonte.location}
            </p>
            <div
              className="mt-8 flex flex-wrap gap-8 border-t border-line pt-6 md:border-paper/20 md:pt-7"
              data-hero-late
            >
              {horizonte.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display m-0 text-2xl font-bold text-ink md:text-paper">{stat.value}</p>
                  <p className="mt-1 mb-0 font-sans text-[0.7rem] font-semibold tracking-[0.14em] text-mute uppercase md:text-paper/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8" data-hero-late>
              <WhatsAppLink
                variant="primary"
                message={messages.horizonte}
              >
                Falar deste lançamento
              </WhatsAppLink>
              <div className="mt-3">
                <ClickTrigger className="md:text-paper/55">{clickTriggers.horizonte}</ClickTrigger>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section-anchor border-t border-line">
        <div className="page-shell grid items-center md:grid-cols-12">
          <div className="md:col-span-6">
            <FacadePhoto
              photo={horizonte.about}
              directed
              clip
              className="aspect-[5/4] w-full md:min-h-[32rem]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="section-y md:col-span-5 md:col-start-8">
            <p className="m-0 font-sans text-[0.7rem] font-semibold tracking-[0.18em] text-brick uppercase">
              Sobre
            </p>
            <h2 className="font-display mt-6 mb-0 text-3xl leading-[0.95] font-bold text-ink md:text-5xl">
              O que já é público sobre o projeto
            </h2>
            <p className="mt-6 mb-0 max-w-[40rem] font-sans text-lg leading-relaxed text-pretty text-ink md:text-xl">
              {horizonte.lead}
            </p>
            <p className="mt-6 mb-0 max-w-xl font-sans text-sm leading-relaxed text-pretty text-mute">
              {horizonte.nearby}
            </p>
          </div>
        </div>
        <div className="page-shell pb-[var(--section-y)]">
          <dl className="grid border-t border-line sm:grid-cols-2">
            {horizonte.facts.map((fact) => (
              <div key={fact.label} className="border-b border-line py-6 sm:odd:pr-10 sm:even:pl-10">
                <dt className="m-0 font-sans text-[0.7rem] font-semibold tracking-[0.16em] text-mute uppercase">
                  {fact.label}
                </dt>
                <dd className="font-display mt-3 mb-0 text-2xl font-bold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-col items-start gap-3">
            <WhatsAppLink variant="primary" message={messages.horizonte}>
              Falar deste lançamento
            </WhatsAppLink>
            <ClickTrigger>{clickTriggers.horizonte}</ClickTrigger>
          </div>
        </div>
      </section>

      <section id="lazer" className="section-anchor border-t border-line">
        <div className="page-shell section-y pb-10 md:pb-12">
          <p className="m-0 font-sans text-[0.7rem] font-semibold tracking-[0.18em] text-brick uppercase">
            Lazer
          </p>
          <h2 className="font-display mt-6 mb-0 max-w-[12ch] text-3xl leading-[0.95] font-bold text-ink md:text-5xl">
            Áreas comuns
          </h2>
        </div>
        <div className="page-shell grid gap-px bg-line pb-[var(--section-y)] md:grid-cols-12">
          <button
            type="button"
            className="m-0 block cursor-zoom-in border-0 bg-paper p-0 text-left md:col-span-7"
            onClick={() => setOpen(horizonte.lazer[0] ?? null)}
          >
            <FacadePhoto
              photo={horizonte.lazer[0] ?? horizonte.about}
              directed
              clip
              caption
              className="aspect-square w-full md:aspect-[5/4] md:min-h-[28rem]"
              sizes="(min-width: 768px) 58vw, 100vw"
            />
          </button>
          <div className="grid gap-px bg-line md:col-span-5">
            {horizonte.lazer.slice(1).map((photo) => (
              <button
                key={photo.src}
                type="button"
                className="m-0 block cursor-zoom-in border-0 bg-paper p-0 text-left"
                onClick={() => setOpen(photo)}
              >
                <FacadePhoto
                  photo={photo}
                  directed
                  clip
                  caption
                  className="aspect-[16/9] w-full md:aspect-[4/3] md:min-h-[14rem]"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="plantas" className="section-anchor border-t border-line">
        <div className="page-shell section-y">
          <p className="m-0 font-sans text-[0.7rem] font-semibold tracking-[0.18em] text-brick uppercase">
            Plantas
          </p>
          <h2 className="font-display mt-6 mb-0 text-3xl leading-[0.95] font-bold text-ink md:text-5xl">
            Blocos 1 e 2
          </h2>
          <ul className="mt-10 mb-0 grid list-none gap-px bg-line p-0 sm:grid-cols-2">
            {horizonte.plantas.map((photo) => (
              <li key={photo.src} className="bg-paper">
                <button
                  type="button"
                  className="group m-0 block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
                  onClick={() => setOpen(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/9] w-full object-contain bg-paper"
                  />
                  <span className="block border-t border-line px-0 py-4 font-sans text-[0.7rem] font-semibold tracking-[0.14em] text-mute uppercase group-hover:text-brick">
                    {photo.caption}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="interiores" className="section-anchor border-t border-line">
        <div className="page-shell section-y">
          <p className="m-0 font-sans text-[0.7rem] font-semibold tracking-[0.18em] text-brick uppercase">
            Interiores
          </p>
          <h2 className="font-display mt-6 mb-0 text-3xl leading-[0.95] font-bold text-ink md:text-5xl">
            Ambientes
          </h2>
          <ul className="mt-10 mb-0 grid list-none grid-cols-2 gap-px bg-line p-0 md:grid-cols-4">
            {horizonte.interiores.map((photo, i) => (
              <li
                key={photo.src}
                className={i === 0 || i === 5 ? 'col-span-2 bg-paper' : 'bg-paper'}
              >
                <button
                  type="button"
                  className="m-0 block w-full cursor-zoom-in border-0 bg-transparent p-0"
                  onClick={() => setOpen(photo)}
                >
                  <FacadePhoto
                    photo={photo}
                    directed
                    clip
                    caption
                    className={
                      i === 0 || i === 5
                        ? 'aspect-[4/3] w-full md:min-h-[22rem]'
                        : 'aspect-square w-full'
                    }
                    sizes={i === 0 || i === 5 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList items={horizonteFaq} />

      <section className="bg-ink text-paper">
        <div className="page-shell flex flex-col items-start gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-24">
          <div>
            <h2 className="font-display m-0 max-w-[14ch] text-4xl leading-[0.95] font-bold md:text-5xl">
              Quero o Recanto do Horizonte
            </h2>
            <p className="mt-4 mb-0 max-w-md font-sans text-sm leading-relaxed text-paper/65">
              A conversa comercial da Total acontece no WhatsApp. A mensagem já cita este
              empreendimento.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <WhatsAppLink variant="primary" message={messages.horizonte}>
              Chamar no WhatsApp
            </WhatsAppLink>
            <ClickTrigger onDark>{clickTriggers.horizonte}</ClickTrigger>
          </div>
        </div>
      </section>

      <PhotoDialog photo={open} onClose={() => setOpen(null)} />
    </div>
  )
}
