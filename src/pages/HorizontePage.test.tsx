import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it, vi } from 'vitest'
import { HorizontePage } from './HorizontePage'

vi.mock('../lib/motion', () => ({
  setupHorizonteMotion: () => () => {},
}))

describe('HorizontePage', () => {
  it('uses the page shell on the hero overlay and the facts block', () => {
    const { container } = render(
      <MemoryRouter>
        <HorizontePage />
      </MemoryRouter>,
    )

    expect(container.querySelector('[data-hero] .page-shell')).not.toBeNull()
    expect(container.querySelectorAll('dt').length).toBeGreaterThan(3)
    expect(container.querySelector('#sobre')).not.toBeNull()
    expect(container.querySelector('#lazer')).not.toBeNull()
    expect(container.querySelector('#plantas')).not.toBeNull()
    expect(container.querySelector('#interiores')).not.toBeNull()
    expect(container.querySelector('img[src="/assets/recantos/horizonte/hero.webp"]')).not.toBeNull()
    expect(
      container.querySelector(
        'video[src="/assets/recantos/horizonte/hero.mp4?v=3"]',
      ),
    ).not.toBeNull()
    expect(container.querySelectorAll('#plantas button')).toHaveLength(7)
    expect(container.textContent).toContain('Antes de chamar')
    expect(container.textContent).toContain('Falar deste lançamento')
  })
})
