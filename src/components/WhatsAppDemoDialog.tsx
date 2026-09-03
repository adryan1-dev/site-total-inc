import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { IconClose } from './Icons'

type Props = {
  message: string
  onClose: () => void
}

export function WhatsAppDemoDialog({ message, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof el.showModal === 'function') {
      if (!el.open) el.showModal()
    } else {
      el.setAttribute('open', '')
    }
    return () => {
      if (typeof el.close === 'function') {
        if (el.open) el.close()
      } else {
        el.removeAttribute('open')
      }
    }
  }, [])

  return (
    <dialog
      ref={ref}
      className="wa-demo-dialog m-auto border border-line bg-paper p-8 text-ink"
      aria-labelledby="wa-demo-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="label m-0 text-accent">Protótipo</p>
        <button type="button" className="inline-flex p-1 text-ink" onClick={onClose}>
          <span className="sr-only">Fechar</span>
          <IconClose />
        </button>
      </div>
      <h2 id="wa-demo-title" className="font-display mt-4 mb-0 text-4xl leading-none uppercase">
        Este WhatsApp não chama a Total.
      </h2>
      <p className="mt-4 mb-0 max-w-md text-[1.125rem] leading-relaxed text-mute">
        O número da empresa não sai daqui. No piloto, o recado que iria na conversa fica visível —
        e o formulário é o que guarda a mensagem.
      </p>
      <blockquote className="wa-demo-quote">{message}</blockquote>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link to="/contato#formulario" className="cta-primary" onClick={onClose}>
          Deixar recado no formulário
        </Link>
        <button type="button" className="cta-ghost text-ink" onClick={onClose}>
          Fechar
        </button>
      </div>
    </dialog>
  )
}
