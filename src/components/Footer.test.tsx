import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('keeps phone, WhatsApp and Instagram on the same left edge', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    )

    const phone = screen.getByRole('link', { name: '(31) 3568-6227' })
    const whatsapp = screen.getByRole('button', { name: 'WhatsApp' })
    const instagram = screen.getByRole('link', { name: '@totalincorporacoes' })
    const stack = phone.parentElement

    expect(stack).toBe(whatsapp.parentElement)
    expect(stack).toBe(instagram.parentElement)
    expect(stack?.className).toMatch(/items-start/)
    expect(stack?.className).toMatch(/text-left/)
  })
})
