import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { LeadForm } from './LeadForm'

const ACTION = 'https://docs.google.com/forms/d/e/TEST_ID/formResponse'

function field(name: string) {
  return document.querySelector(`[name="${name}"]`) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
}

function fillValidLead() {
  fireEvent.change(field('name'), { target: { value: 'Maria Silva' } })
  fireEvent.change(field('phone'), { target: { value: '31999990000' } })
  fireEvent.change(field('development'), { target: { value: 'recanto-do-horizonte' } })
  fireEvent.change(field('message'), { target: { value: 'Quero saber das unidades no Canaã.' } })
}

beforeEach(() => {
  vi.stubEnv('VITE_GOOGLE_FORM_ACTION', ACTION)
  vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_NAME', 'entry.11')
  vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_PHONE', 'entry.22')
  vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_DEVELOPMENT', 'entry.33')
  vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_MESSAGE', 'entry.44')
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

describe('LeadForm', () => {
  it('keeps the person on the form until Google Forms accepts the recado', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null))
    vi.stubGlobal('fetch', fetchMock)
    render(<LeadForm />)

    fireEvent.submit(screen.getByRole('button', { name: 'Enviar mensagem' }).closest('form')!)
    expect(await screen.findByText('Digite seu nome completo.')).toBeTruthy()
    expect(fetchMock).not.toHaveBeenCalled()

    fillValidLead()
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensagem' }))

    expect(await screen.findByText(/Obrigado, Maria/i)).toBeTruthy()
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const body = (fetchMock.mock.calls[0] as [string, RequestInit])[1].body as URLSearchParams
    expect(body.get('entry.33')).toBe('Recanto do Horizonte')
  })

  it('stays on the form when the destination cannot be reached', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))
    render(<LeadForm />)
    fillValidLead()
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensagem' }))

    expect(await screen.findByRole('alert')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Enviar mensagem' })).toBeTruthy()
    await waitFor(() => {
      expect(screen.queryByText(/Obrigado/i)).toBeNull()
    })
  })
})
