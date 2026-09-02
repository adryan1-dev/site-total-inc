import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { CatalogPage } from './CatalogPage'

describe('CatalogPage', () => {
  it('lists the three Recantos', () => {
    render(
      <MemoryRouter initialEntries={['/empreendimentos']}>
        <CatalogPage />
      </MemoryRouter>,
    )

    expect(screen.getByText('Recanto do Horizonte')).toBeTruthy()
    expect(screen.getByText('Recanto da Mata')).toBeTruthy()
    expect(screen.getByText('Recanto dos Alpes')).toBeTruthy()
  })

  it('shows the empty state when Almenara has no photos yet', () => {
    render(
      <MemoryRouter initialEntries={['/empreendimentos?cidade=almenara']}>
        <CatalogPage />
      </MemoryRouter>,
    )

    expect(screen.getByText('Nenhum Recanto aqui.')).toBeTruthy()
  })
})
