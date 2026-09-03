import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { messages } from '../data/site'
import { WhatsAppLink } from './WhatsAppLink'

describe('WhatsAppLink', () => {
  it('opens the prototype notice instead of a wa.me number', () => {
    render(
      <MemoryRouter>
        <WhatsAppLink message={messages.horizonte}>WhatsApp</WhatsAppLink>
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'WhatsApp' }))

    expect(screen.getByRole('dialog')).toBeTruthy()
    expect(screen.getByText(/não chama a Total/i)).toBeTruthy()
    expect(screen.getByText(/Recanto do Horizonte/)).toBeTruthy()
    expect(document.querySelector('a[href*="wa.me"]')).toBeNull()
    expect(screen.getByRole('link', { name: /formulário/i }).getAttribute('href')).toBe(
      '/contato#formulario',
    )
  })
})
