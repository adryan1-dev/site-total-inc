import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'index.css'), 'utf8')

describe('spacing tokens', () => {
  it('defines the DIRECAO page shell and brand colors', () => {
    expect(css).toContain('--header-h:')
    expect(css).toContain('--page-max: 1200px')
    expect(css).toContain('--page-x:')
    expect(css).toContain('--section-y:')
    expect(css).toContain('--color-accent: #a83335')
    expect(css).toContain('--color-ink: #373435')
    expect(css).toContain('--color-dust: #f7f6f3')
    expect(css).toContain('.page-shell')
    expect(css).toContain('.hero-search')
    expect(css).toContain('.cta-primary')
    expect(css).not.toContain('.marquee-track')
  })
})
