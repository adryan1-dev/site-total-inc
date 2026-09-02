import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    const html = document.documentElement
    const previous = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'

    if (hash) {
      const id = decodeURIComponent(hash.replace(/^#/, ''))
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ block: 'start', behavior: 'instant' })
        html.style.scrollBehavior = previous
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    html.style.scrollBehavior = previous
  }, [pathname, hash])

  return null
}
