import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { developments, horizonte } from '../data/developments'
import { clickTriggers, homeFaq, messages } from '../data/site'
import { BairroMarquee } from '../components/BairroMarquee'
import { ClickTrigger, FaqList } from '../components/FaqList'
import { FacadePhoto } from '../components/FacadePhoto'
import { IconArrow } from '../components/Icons'
import { TextLink } from '../components/TextLink'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { usePageMeta } from '../lib/meta'
import { setupHomeMotion } from '../lib/motion'

const indexLabel = ['01', '02', '03'] as const

export function HomePage() {
  const { hash } = useLocation()
  const pageRef = useRef<HTMLDivElement>(null)
  const skipHero = useRef(hash === '#empreendimentos')
  const featured = developments[0]
  const rest = developments.slice(1)

  usePageMeta(
    'Total Incorporações — Construindo seu Lar. Belo Horizonte',
    'Incorporadora em Belo Horizonte. Empreendimentos Recanto para quem busca a casa própria. Fale com a equipe pelo WhatsApp.',
  )

  useLayoutEffect(() => {
    const root = pageRef.current
    if (!root) return
    return setupHomeMotion(root, skipHero.current)
  }, [])

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }, [hash])

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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[58%] bg-[linear-gradient(to_top,rgb(44_44_44/0.92)_0%,rgb(44_44_44/0.35)_48%,transparent_100%)] md:block" />
        </div>
        <div className="bg-paper py-10 md:absolute md:inset-x-0 md:bottom-0 md:bg-transparent md:py-0 md:pb-16">
          <div className="page-shell">
            <p
              className="m-0 font-sans text-[0.7rem] font-semibold tracking-[0.22em] text-mute uppercase md:text-paper/70"
              data-hero-late
            >
              Casa própria em Belo Horizonte
            </p>
            <h1 className="font-display hero-mask mt-4 mb-0 max-w-[12ch] text-[clamp(2.5rem,7vw,6.75rem)] leading-[0.92] font-bold text-ink md:leading-[0.9] md:text-paper">
              <span className="block" data-split>
                Construindo seu Lar.
              </span>
            </h1>
            <p
              className="mt-5 mb-0 max-w-md font-sans text-base leading-relaxed text-pretty text-mute md:text-paper/80"
              data-hero-late
            >
              Série Recanto. Comece pelo lançamento em Canaã — Recanto do Horizonte, incorporação
              registrada.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4" data-hero-late>
              <div className="flex flex-col items-start gap-5 md:flex-row md:flex-wrap md:items-center md:gap-8">
                <WhatsAppLink variant="primary" message={messages.general}>
                  Falar no WhatsApp
                </WhatsAppLink>
                <TextLink to="/empreendimentos/recanto-do-horizonte" className="text-ink md:text-paper">
                  Ver o Recanto do Horizonte
                </TextLink>
              </div>
              <ClickTrigger className="md:text-paper/55">{clickTriggers.whatsapp}</ClickTrigger>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-y">
        <p className="m-0 max-w-[38rem] font-sans text-lg leading-relaxed text-pretty text-mute md:text-xl">
          Incorporadora em Belo Horizonte. Empreendimentos da série Recanto para quem busca a casa
          própria — com informação no lugar certo e conversa direta.
        </p>
      </section>

      <section id="empreendimentos">
        <article className="border-t border-line" data-featured>
          <div className="page-shell grid md:grid-cols-12 md:items-center">
            <div className="order-2 pt-10 pb-12 md:order-1 md:col-span-4 md:py-12 md:pr-8">
              <p className="m-0 font-sans text-sm font-semibold tracking-[0.18em] text-brick tabular-nums">
                {indexLabel[0]}
              </p>
              <h2 className="font-display mt-8 mb-0 text-4xl leading-[0.95] font-bold text-ink md:text-6xl">
                <span className="italic">{featured.recanto} </span>
                {featured.name}
              </h2>
              <p className="mt-3 mb-0 font-sans text-sm text-mute">
                {featured.location}
                {featured.location ? ' · ' : ''}
                {featured.status}
              </p>
              <p className="mt-4 mb-0 max-w-sm font-sans text-base leading-relaxed text-pretty text-ink/80">
                {featured.summary}
              </p>
              <div className="mt-8">
                <TextLink to={featured.href ?? undefined} className="text-ink">
                  Ver o Recanto do Horizonte
                </TextLink>
              </div>
            </div>
            <div className="order-1 md:order-2 md:col-span-8">
              <FacadePhoto
                photo={featured.cover}
                directed
                className="aspect-[4/5] w-full md:aspect-[5/4] md:h-auto md:min-h-[32rem]"
                sizes="(min-width: 768px) 66vw, 100vw"
              />
            </div>
          </div>
        </article>

        <BairroMarquee />

        {rest.map((item, i) => {
          const index = i + 1
          const flip = index % 2 === 1
          return (
            <article key={item.slug} className="border-b border-line">
              <div className="page-shell grid items-stretch md:grid-cols-12 md:items-center">
                <div className={flip ? 'md:col-span-7 md:col-start-6' : 'md:col-span-8'}>
                  <FacadePhoto
                    photo={item.cover}
                    directed
                    clip
                    className="aspect-[16/11] w-full md:aspect-[4/3] md:min-h-[28rem]"
                    sizes="(min-width: 768px) 58vw, 100vw"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center py-10 md:py-12 ${
                    flip
                      ? 'md:col-span-5 md:col-start-1 md:row-start-1 md:items-end md:pr-8 md:text-right'
                      : 'md:col-span-4 md:pl-8'
                  }`}
                >
                  <p className="m-0 font-sans text-sm font-semibold tracking-[0.18em] text-brick tabular-nums">
                    {indexLabel[index]}
                  </p>
                  <h2 className="font-display mt-8 mb-0 text-3xl leading-[0.95] font-bold text-ink md:text-5xl">
                    <span className="italic">{item.recanto} </span>
                    {item.name}
                  </h2>
                  <p className="mt-3 mb-0 font-sans text-sm text-mute">
                    {[item.location, item.status].filter(Boolean).join(' · ')}
                  </p>
                  <p
                    className={`mt-4 mb-0 font-sans text-base leading-relaxed text-pretty text-ink/80 ${
                      flip ? 'md:max-w-sm' : 'max-w-md'
                    }`}
                  >
                    {item.summary}
                  </p>
                  <div className={`mt-8 ${flip ? 'md:self-end' : ''}`}>
                    <WhatsAppLink
                      message={messages[item.whatsappKey]}
                      className="text-link text-ink"
                    >
                      <span className="text-link-label">Perguntar no WhatsApp</span>
                      <IconArrow className="text-link-arrow h-4 w-4 shrink-0" />
                    </WhatsAppLink>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>

      <section className="page-shell section-y grid gap-8 md:grid-cols-12 md:gap-10">
        <h2 className="font-display m-0 text-4xl leading-[0.95] font-bold text-balance text-ink md:col-span-5 md:text-6xl">
          Belo Horizonte.
        </h2>
        <p className="m-0 max-w-xl font-sans text-base leading-relaxed text-pretty text-mute md:col-span-6 md:col-start-7 md:self-end md:text-lg">
          A Total Incorporações desenvolve empreendimentos residenciais em Belo Horizonte — Canaã,
          Jaqueline, Juliana e Barreiro — e também em Almenara/MG. A série Recanto reúne os
          lançamentos apresentados no Instagram oficial.
        </p>
      </section>

      <FaqList items={homeFaq} />

      <section className="bg-ink text-paper">
        <div className="page-shell flex flex-col items-start gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-24">
          <div>
            <h2 className="font-display m-0 max-w-[14ch] text-4xl leading-[0.95] font-bold md:text-6xl">
              A conversa é no WhatsApp.
            </h2>
            <p className="mt-4 mb-0 max-w-md font-sans text-sm leading-relaxed text-paper/65">
              Sem formulário. A equipe comercial atende pelo número oficial do Instagram.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <WhatsAppLink variant="primary" message={messages.general}>
              Chamar no WhatsApp
            </WhatsAppLink>
              <ClickTrigger className="md:text-paper/55">{clickTriggers.whatsapp}</ClickTrigger>
          </div>
        </div>
      </section>
    </div>
  )
}
