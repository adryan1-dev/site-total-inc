import { useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { GalleryDialog } from '../components/GalleryDialog'
import { PropertyCard } from '../components/PropertyCard'
import { IconHouse } from '../components/Icons'
import {
  developments,
  filterDevelopments,
  type Development,
} from '../data/developments'
import { cities, statuses } from '../data/site'
import { useReveal } from '../lib/reveal'
import { usePageMeta } from '../lib/meta'

export function CatalogPage() {
  const [params, setParams] = useSearchParams()
  const cidade = params.get('cidade')
  const status = params.get('status')
  const items = useMemo(() => filterDevelopments(cidade, status), [cidade, status])
  const gridRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<Development | null>(null)
  const [index, setIndex] = useState(0)

  useReveal(gridRef, `${cidade}-${status}`)
  usePageMeta(
    'Empreendimentos — Total Incorporações',
    'Catálogo da série Recanto em Belo Horizonte. Fotos reais. Fale com a equipe pelo WhatsApp.',
  )

  function toggle(key: 'cidade' | 'status', value: string) {
    const next = new URLSearchParams(params)
    if (next.get(key) === value) next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  return (
    <div className="section-y">
      <div className="page-shell">
        <p className="label text-mute">Catálogo</p>
        <h1 className="font-display mt-3 mb-0 text-5xl leading-none uppercase md:text-6xl">
          Empreendimentos
        </h1>
        <p className="mt-4 mb-0 max-w-[42ch] text-[1.125rem] leading-relaxed text-mute">
          Três Recantos com foto da obra. Toque no card para a galeria.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            type="button"
            className={`chip ${!cidade && !status ? 'is-on' : ''}`}
            onClick={() => setParams(new URLSearchParams(), { replace: true })}
          >
            Todos
          </button>
          {cities.map((city) => (
            <button
              key={city.value}
              type="button"
              className={`chip ${cidade === city.value ? 'is-on' : ''}`}
              onClick={() => toggle('cidade', city.value)}
            >
              {city.label}
            </button>
          ))}
          {statuses.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`chip ${status === item.value ? 'is-on' : ''}`}
              onClick={() => toggle('status', item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <div className="mt-20 flex max-w-md flex-col items-start gap-5 border border-line px-8 py-12">
            <IconHouse className="text-accent" />
            <h2 className="font-display m-0 text-3xl leading-none uppercase">Nenhum Recanto aqui.</h2>
            <p className="m-0 text-mute">
              Esse filtro não encontra obra no portfólio atual. Limpe para ver os três endereços.
            </p>
            <button
              type="button"
              className="cta-primary"
              onClick={() => setParams(new URLSearchParams(), { replace: true })}
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <div ref={gridRef} className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {items.map((item, i) => (
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
        )}

        <p className="mt-16 mb-0 max-w-xl text-sm text-mute">
          {developments.length} empreendimentos no ar. Metragem e preço são placeholder até a
          equipe validar — nomes e fotos são reais.{' '}
          <Link to="/contato" className="text-ink underline decoration-accent underline-offset-4">
            Deixar recado
          </Link>
          .
        </p>
      </div>

      <GalleryDialog item={open} index={index} onIndex={setIndex} onClose={() => setOpen(null)} />
    </div>
  )
}
