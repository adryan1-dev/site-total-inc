import { useEffect, type RefObject } from 'react'

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useReveal(ref: RefObject<HTMLElement | null>, resetKey: string | number = 0) {
  useEffect(() => {
    const root = ref.current
    if (!root) return

    const nodes = root.hasAttribute('data-reveal')
      ? [root]
      : Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (prefersReducedMotion()) {
      nodes.forEach((node) => node.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          io.unobserve(el)
          const delay = Number(el.dataset.stagger ?? 0) * 70
          window.setTimeout(() => el.classList.add('is-in'), delay)
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => io.observe(node))
    return () => io.disconnect()
  }, [ref, resetKey])
}
