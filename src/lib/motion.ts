import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ ignoreMobileResize: true })

export { gsap, ScrollTrigger }

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function headerOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--header-h').trim()
  return raw || '5.5625rem'
}

function playHero(root: HTMLElement) {
  const title = root.querySelector('[data-split]')
  const facade = root.querySelector('[data-hero-facade] .facade-media')
  const late = root.querySelectorAll('[data-hero-late]')

  if (facade && !facade.querySelector('video')) {
    gsap.fromTo(
      facade,
      { scale: 1.08 },
      { scale: 1, duration: 1.35, ease: 'power3.out', clearProps: 'transform' },
    )
  }

  if (title) {
    gsap.fromTo(title, { yPercent: 110 }, { yPercent: 0, duration: 1.05, ease: 'power3.out' })
  }

  if (late.length) {
    gsap.fromTo(
      late,
      { autoAlpha: 0, y: 14 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        delay: 0.38,
        ease: 'power3.out',
        overwrite: true,
      },
    )
  }
}

export function setupHomeMotion(root: HTMLElement, skipHero: boolean) {
  let cancelled = false

  const ctx = gsap.context(() => {
    if (prefersReducedMotion()) return

    const featured = root.querySelector('[data-featured]')
    const featuredMedia = featured?.querySelector('.facade-media')

    gsap.matchMedia().add('(min-width: 768px)', () => {
      if (!featured || !featuredMedia || skipHero) return

      gsap.fromTo(
        featuredMedia,
        { scale: 1.12 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: featured,
            start: () => `top ${headerOffset()}`,
            end: 'bottom top',
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        },
      )
    })

    root.querySelectorAll('[data-clip]').forEach((el) => {
      const media = el.querySelector('.facade-media')
      if (!media) return

      if (skipHero) {
        gsap.set(media, { clipPath: 'inset(0% 0% 0% 0%)' })
        return
      }

      gsap.fromTo(
        media,
        { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.08 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          duration: 1.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
            onRefresh(self) {
              if (self.start < window.scrollY) {
                gsap.set(media, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 })
              }
            },
          },
        },
      )
    })
  }, root)

  if (!skipHero && !prefersReducedMotion()) {
    const startHero = () => {
      if (cancelled || !root.isConnected) return
      ctx.add(() => {
        playHero(root)
        ScrollTrigger.refresh()
      })
    }
    if (document.fonts.status === 'loaded') startHero()
    else void document.fonts.ready.then(startHero)
  }

  return () => {
    cancelled = true
    ctx.revert()
  }
}

function clipMedia(root: HTMLElement) {
  root.querySelectorAll('[data-clip]').forEach((el) => {
    const media = el.querySelector('.facade-media')
    if (!media) return

    gsap.fromTo(
      media,
      { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.08 },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
          onRefresh(self) {
            if (self.start < window.scrollY) {
              gsap.set(media, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 })
            }
          },
        },
      },
    )
  })
}

export function setupHorizonteMotion(root: HTMLElement) {
  let cancelled = false
  const ctx = gsap.context(() => {
    if (prefersReducedMotion()) return
    clipMedia(root)
  }, root)

  if (!prefersReducedMotion()) {
    const startHero = () => {
      if (cancelled || !root.isConnected) return
      ctx.add(() => {
        playHero(root)
        ScrollTrigger.refresh()
      })
    }
    if (document.fonts.status === 'loaded') startHero()
    else void document.fonts.ready.then(startHero)
  }

  return () => {
    cancelled = true
    ctx.revert()
  }
}
