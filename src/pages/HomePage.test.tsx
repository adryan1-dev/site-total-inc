import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('opens on the Horizonte photo with the three Recantos and no video loop', () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    )

    expect(container.querySelector('[data-hero] .page-shell')).not.toBeNull()
    expect(container.querySelector('[data-featured] .page-shell')).not.toBeNull()
    expect(
      container.querySelector('img[src="/assets/recantos/horizonte/hero-640.webp"]'),
    ).not.toBeNull()
    expect(container.querySelector('video')).toBeNull()
    expect(container.querySelector('.hero-search')).not.toBeNull()
    expect(container.textContent).toContain('Recanto do Horizonte')
    expect(container.textContent).toContain('Recanto da Mata')
    expect(container.textContent).toContain('Recanto dos Alpes')
    expect(container.textContent).toContain('177')
    expect(container.textContent).toContain('Falar no WhatsApp')
    expect(container.querySelector('a[href="/contato#formulario"]')).not.toBeNull()
    expect(container.textContent).not.toContain('Jardins')

    const facts = container.querySelector('dl.grid-cols-3')
    expect(facts).not.toBeNull()
    expect(facts?.querySelectorAll('dt.min-h-\\[2\\.75rem\\]')).toHaveLength(3)
  })
})
