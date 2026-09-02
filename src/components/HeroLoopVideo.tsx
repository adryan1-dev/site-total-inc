import { useEffect, useRef } from 'react'

const FADE_S = 0.8

type Props = {
  src: string
  plate: string
  priority?: boolean
}

function seamWeight(time: number, duration: number) {
  if (!Number.isFinite(duration) || duration <= 0) return 0
  const edge = Math.min(time, duration - time)
  const t = Math.min(1, Math.max(0, edge / FADE_S))
  return 0.5 - 0.5 * Math.cos(Math.PI * t)
}

export function HeroLoopVideo({ src, plate, priority = false }: Props) {
  const layerA = useRef<HTMLVideoElement>(null)
  const layerB = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const a = layerA.current
    const b = layerB.current
    if (!a || !b) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return

    let raf = 0
    let cancelled = false
    let started = false

    a.muted = true
    b.muted = true
    a.loop = true
    b.loop = true
    a.style.opacity = '0'
    b.style.opacity = '0'

    const mix = () => {
      if (cancelled) return
      raf = requestAnimationFrame(mix)
      a.style.opacity = String(seamWeight(a.currentTime, a.duration))
      b.style.opacity = String(seamWeight(b.currentTime, b.duration))
    }

    const start = () => {
      if (cancelled || started) return
      started = true
      void a.play().catch(() => {})
      void b.play().catch(() => {})
      mix()
    }

    const cueB = () => {
      if (cancelled || !Number.isFinite(b.duration) || b.duration <= 0) return
      b.currentTime = b.duration / 2
    }

    const onBSeeked = () => {
      b.removeEventListener('seeked', onBSeeked)
      start()
    }

    a.addEventListener('loadeddata', () => void a.play().catch(() => {}), { once: true })
    b.addEventListener('seeked', onBSeeked)
    if (b.readyState >= HTMLMediaElement.HAVE_METADATA) cueB()
    else b.addEventListener('loadedmetadata', cueB, { once: true })
    const fallback = window.setTimeout(start, 900)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.clearTimeout(fallback)
      a.pause()
      b.pause()
      b.removeEventListener('seeked', onBSeeked)
    }
  }, [src])

  const className = 'hero-loop hero-loop--blend absolute inset-0 size-full object-cover object-center'
  const preload = priority ? 'auto' : 'metadata'

  return (
    <div className="hero-loop-stack absolute inset-0">
      <img
        src={plate}
        alt=""
        className="hero-loop-plate absolute inset-0 size-full object-cover object-center"
        draggable={false}
      />
      <video
        ref={layerA}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        preload={preload}
        src={src}
        aria-hidden
      />
      <video
        ref={layerB}
        className={className}
        muted
        loop
        playsInline
        disablePictureInPicture
        preload={preload}
        src={src}
        aria-hidden
      />
    </div>
  )
}
