import type { Photo } from '../data/developments'
import { HeroLoopVideo } from './HeroLoopVideo'

type Props = {
  photo: Photo
  className?: string
  priority?: boolean
  directed?: boolean
  clip?: boolean
  sizes?: string
  caption?: boolean
}

export function FacadePhoto({
  photo,
  className = '',
  priority = false,
  directed = false,
  clip = false,
  sizes = '(min-width: 768px) 70vw, 100vw',
  caption = false,
}: Props) {
  return (
    <figure
      className={`facade-frame relative m-0 ${directed ? 'facade-frame--directed' : ''} ${className}`}
      {...(clip ? { 'data-clip': true } : {})}
    >
      <div className="facade-media absolute inset-0">
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          fetchPriority={priority ? 'high' : undefined}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          className="size-full object-cover"
        />
        {photo.video ? (
          <HeroLoopVideo src={photo.video} plate={photo.plate ?? photo.src} priority={priority} />
        ) : null}
      </div>
      {caption && photo.caption ? (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-10 m-0 bg-[linear-gradient(to_top,rgb(44_44_44/0.7),transparent)] px-4 pt-10 pb-4 font-sans text-[0.7rem] font-semibold tracking-[0.2em] text-paper uppercase">
          {photo.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
