import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { photoSrcSet } from './images'

describe('photoSrcSet', () => {
  it('lists sized siblings before the full-resolution file', () => {
    expect(photoSrcSet('/assets/recantos/horizonte/hero.webp', [480, 640, 960])).toBe(
      '/assets/recantos/horizonte/hero-480.webp 480w, /assets/recantos/horizonte/hero-640.webp 640w, /assets/recantos/horizonte/hero-960.webp 960w',
    )
    expect(photoSrcSet('/assets/recantos/horizonte/hero.webp', [640], 1920)).toBe(
      '/assets/recantos/horizonte/hero-640.webp 640w, /assets/recantos/horizonte/hero.webp 1920w',
    )
  })
})

describe('SEO crawl files', () => {
  it('exposes a valid robots.txt and sitemap for the Vercel demo', () => {
    const robots = readFileSync(resolve(process.cwd(), 'public/robots.txt'), 'utf8')
    const sitemap = readFileSync(resolve(process.cwd(), 'public/sitemap.xml'), 'utf8')

    expect(robots).toContain('User-agent: *')
    expect(robots).toContain('Allow: /')
    expect(robots).toContain('Sitemap: https://site-total-inc.vercel.app/sitemap.xml')
    expect(sitemap).toContain('https://site-total-inc.vercel.app/')
    expect(sitemap).toContain('https://site-total-inc.vercel.app/empreendimentos')
  })
})
