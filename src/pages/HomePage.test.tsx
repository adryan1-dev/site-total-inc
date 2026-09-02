import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it, vi } from 'vitest'
import { HomePage } from './HomePage'

vi.mock('../lib/motion', () => ({
  setupHomeMotion: () => () => {},
}))

describe('HomePage', () => {
  it('puts hero copy inside the page shell so it lines up with the nav', () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    )

    expect(container.querySelector('[data-hero] .page-shell')).not.toBeNull()
    expect(container.querySelector('#empreendimentos')).not.toBeNull()
    expect(container.querySelector('[data-featured] .page-shell')).not.toBeNull()
    expect(container.querySelectorAll('[data-clip]')).toHaveLength(2)
    expect(container.querySelector('img[src="/assets/recantos/horizonte/hero.webp"]')).not.toBeNull()
    expect(
      container.querySelector(
        'video[src="/assets/recantos/horizonte/hero.mp4?v=3"]',
      ),
    ).not.toBeNull()
    expect(container.textContent).toContain('Recanto dos Alpes')
    expect(container.textContent).not.toContain('Jardins')
    expect(container.querySelector('.marquee-track')).not.toBeNull()
    expect(container.querySelectorAll('.marquee-item').length).toBeGreaterThan(4)
    expect(container.textContent).toContain('Falar no WhatsApp')
    expect(container.textContent).toContain('Antes de chamar')
  })
})
