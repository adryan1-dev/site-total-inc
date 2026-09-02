import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'index.css'), 'utf8')

describe('spacing tokens', () => {
  it('defines the page shell, section rhythm and header offset', () => {
    expect(css).toContain('--header-h:')
    expect(css).toContain('--page-max: 1400px')
    expect(css).toContain('--page-x:')
    expect(css).toContain('--section-y:')
    expect(css).toContain('--group: 2rem')
    expect(css).toContain('.page-shell')
    expect(css).toContain('.section-y')
    expect(css).toContain('.hero-mask')
    expect(css).toContain('.section-anchor')
    expect(css).toContain('.cta-primary')
    expect(css).toContain('.marquee-track')
    expect(css).toContain('height: calc(100svh - var(--header-h))')
  })
})
