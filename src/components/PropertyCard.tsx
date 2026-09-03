import type { Development } from '../data/developments'
import { photoSrcSet } from '../lib/images'

type Props = {
  item: Development
  onOpen: (item: Development) => void
  stagger?: number
}

export function PropertyCard({ item, onOpen, stagger = 0 }: Props) {
  const srcSet = photoSrcSet(item.cover.src, [480, 640])

  return (
    <button
      type="button"
      className="photo-card"
      data-reveal
      data-stagger={stagger}
      onClick={() => onOpen(item)}
    >
      <div className="photo-frame relative aspect-[3/2] w-full">
        <img
          src={item.cover.src.replace(/(\.\w+)$/, '-480$1')}
          srcSet={srcSet}
          alt={item.cover.alt}
          width={item.cover.width}
          height={item.cover.height}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
        />
        <span
          className={`chip absolute top-3 left-3 ${item.statusKey === 'lancamento' ? 'chip--accent' : 'chip--on-photo'}`}
        >
          {item.status}
        </span>
      </div>
      <div className="flex min-h-[5.5rem] flex-col gap-1 pt-4">
        <h3 className="m-0 text-xl leading-tight font-semibold tracking-tight md:text-2xl">
          {item.title}
        </h3>
        <p className="m-0 text-sm text-mute">{item.location ?? 'Localização a confirmar'}</p>
      </div>
    </button>
  )
}
