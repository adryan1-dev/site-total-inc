import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('opens a single-logo overlay portaled outside the sticky header', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }))

    const overlay = document.getElementById('menu-mobile')
    expect(overlay).not.toBeNull()
    expect(overlay?.parentElement).toBe(document.body)
    expect(container.querySelector('header')?.contains(overlay)).toBe(false)
    expect(document.querySelectorAll('header a[aria-label="Total Incorporações"]')).toHaveLength(1)
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toBeTruthy()
  })
})
