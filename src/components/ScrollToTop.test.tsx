import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, it, vi } from 'vitest'
import { ScrollToTop } from './ScrollToTop'

describe('ScrollToTop', () => {
  it('scrolls to the top of the form when the hash is present', () => {
    const scrollIntoView = vi.fn()
    HTMLElement.prototype.scrollIntoView = scrollIntoView
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})

    render(
      <MemoryRouter initialEntries={['/contato#formulario']}>
        <ScrollToTop />
        <Routes>
          <Route path="/contato" element={<div id="formulario">Formulário</div>} />
        </Routes>
      </MemoryRouter>,
    )

    expect(scrollIntoView).toHaveBeenCalled()
    expect(scrollTo).not.toHaveBeenCalled()
  })
})
