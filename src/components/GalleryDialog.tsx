import { useEffect, useRef } from 'react'
import type { Development } from '../data/developments'
import { developmentMessage } from '../data/developments'
import { IconChevronLeft, IconChevronRight, IconClose } from './Icons'
import { WhatsAppLink } from './WhatsAppLink'

type Props = {
  item: Development | null
  index: number
  onIndex: (index: number) => void
  onClose: () => void
}

export function GalleryDialog({ item, index, onIndex, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const photo = item?.gallery[index]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (item && !el.open) el.showModal()
    if (!item && el.open) el.close()
  }, [item])

  useEffect(() => {
    if (!item) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') onIndex((index + 1) % item.gallery.length)
      if (event.key === 'ArrowLeft') onIndex((index - 1 + item.gallery.length) % item.gallery.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [item, index, onIndex])

  return (
    <dialog
      ref={ref}
      className="photo-dialog m-auto max-h-[100svh] max-w-[100vw] border-0 bg-ink p-0 text-paper"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {item && photo ? (
        <div className="relative flex max-h-[100svh] min-h-[12rem] w-[min(96vw,72rem)] flex-col">
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <p className="m-0 text-[0.75rem] font-semibold tracking-[0.12em] uppercase">
              {item.title}
              {photo.caption ? ` · ${photo.caption}` : ''}
            </p>
            <button type="button" className="inline-flex p-2 text-paper" onClick={onClose}>
              <span className="sr-only">Fechar</span>
              <IconClose />
            </button>
          </div>
          <div className="relative flex min-h-[12rem] items-center justify-center">
            {item.gallery.length > 1 ? (
              <button
                type="button"
                className="absolute left-2 z-10 inline-flex bg-ink/70 p-2 text-paper"
                onClick={() => onIndex((index - 1 + item.gallery.length) % item.gallery.length)}
              >
                <span className="sr-only">Foto anterior</span>
                <IconChevronLeft />
              </button>
            ) : null}
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="max-h-[72svh] w-full object-contain"
            />
            {item.gallery.length > 1 ? (
              <button
                type="button"
                className="absolute right-2 z-10 inline-flex bg-ink/70 p-2 text-paper"
                onClick={() => onIndex((index + 1) % item.gallery.length)}
              >
                <span className="sr-only">Próxima foto</span>
                <IconChevronRight />
              </button>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4">
            <p className="m-0 text-xs tracking-[0.12em] text-paper/60 uppercase">
              {index + 1} / {item.gallery.length}
            </p>
            <WhatsAppLink variant="primary" message={developmentMessage(item)}>
              Interesse neste Recanto
            </WhatsAppLink>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
