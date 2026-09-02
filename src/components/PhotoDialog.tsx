import { useEffect, useRef } from 'react'
import type { Photo } from '../data/developments'
import { IconClose } from './Icons'

type Props = {
  photo: Photo | null
  onClose: () => void
}

export function PhotoDialog({ photo, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (photo && !el.open) el.showModal()
    if (!photo && el.open) el.close()
  }, [photo])

  return (
    <dialog
      ref={ref}
      className="photo-dialog m-auto max-h-[100svh] max-w-[100vw] border-0 bg-ink p-0 text-paper"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {photo ? (
        <div className="relative flex max-h-[100svh] min-h-[12rem] w-[min(96vw,72rem)] flex-col">
          <button
            type="button"
            className="absolute top-3 right-3 z-10 inline-flex bg-ink/70 p-2 text-paper"
            onClick={onClose}
          >
            <span className="sr-only">Fechar</span>
            <IconClose />
          </button>
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="max-h-[88svh] w-full object-contain"
          />
          {photo.caption ? (
            <p className="m-0 px-4 py-3 font-sans text-[0.7rem] font-semibold tracking-[0.16em] text-paper/70 uppercase">
              {photo.caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </dialog>
  )
}
