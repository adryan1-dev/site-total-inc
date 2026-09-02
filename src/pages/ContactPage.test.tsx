import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { ContactPage } from './ContactPage'
import { AboutPage } from './AboutPage'

describe('AboutPage', () => {
  it('states the Recanto argument without repeating a five-block home', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: /Construir o lar/i })).toBeTruthy()
    expect(screen.getByAltText(/Recanto da Mata/)).toBeTruthy()
  })
})

describe('ContactPage', () => {
  it('validates in Portuguese and then shows a human success state', async () => {
    const { container } = render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    )

    const form = container.querySelector('form')
    expect(form).not.toBeNull()
    expect(container.querySelector('#formulario')).not.toBeNull()
    fireEvent.submit(form!)

    expect(await screen.findByText('Digite seu nome completo.')).toBeTruthy()
    expect(screen.getByText(/telefone com DDD/i)).toBeTruthy()
  })
})
