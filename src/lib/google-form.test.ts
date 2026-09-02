import { afterEach, describe, expect, it, vi } from 'vitest'
import { developmentLabel, googleFormConfig, submitLeadToGoogleForm } from './google-form'

const ACTION = 'https://docs.google.com/forms/d/e/TEST_ID/formResponse'

function stubFormEnv() {
  vi.stubEnv('VITE_GOOGLE_FORM_ACTION', ACTION)
  vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_NAME', 'entry.11')
  vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_PHONE', 'entry.22')
  vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_DEVELOPMENT', 'entry.33')
  vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_MESSAGE', 'entry.44')
}

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

describe('developmentLabel', () => {
  it('sends a readable Recanto name instead of the slug', () => {
    expect(developmentLabel('')).toBe('Ainda estou vendo')
    expect(developmentLabel('recanto-do-horizonte')).toBe('Recanto do Horizonte')
  })
})

describe('googleFormConfig', () => {
  it('points at the piloto form by default', () => {
    const config = googleFormConfig()
    expect(config.ready).toBe(true)
    expect(config.action).toContain('1FAIpQLSfvcDTQO8Ie3YRcfNrTtBt9QIC35C0XRGWq4EQuD7h5n-6Fiw')
    expect(config.entries.name).toBe('entry.1707591706')
  })

  it('rejects placeholder entry ids', () => {
    vi.stubEnv('VITE_GOOGLE_FORM_ACTION', ACTION)
    vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_NAME', 'entry.')
    vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_PHONE', 'entry.22')
    vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_DEVELOPMENT', 'entry.33')
    vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_MESSAGE', 'entry.44')
    expect(googleFormConfig().ready).toBe(false)
  })
})

describe('submitLeadToGoogleForm', () => {
  it('posts the four fields to the form response endpoint', async () => {
    stubFormEnv()
    const fetchMock = vi.fn().mockResolvedValue(new Response(null))
    vi.stubGlobal('fetch', fetchMock)

    await submitLeadToGoogleForm({
      name: ' Maria Silva ',
      phone: '(31) 99999-0000',
      development: 'recanto-do-horizonte',
      message: 'Quero saber das unidades.',
    })

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe(ACTION)
    expect(init.method).toBe('POST')
    expect(init.mode).toBe('no-cors')
    const body = init.body as URLSearchParams
    expect(body.get('entry.11')).toBe('Maria Silva')
    expect(body.get('entry.22')).toBe('(31) 99999-0000')
    expect(body.get('entry.33')).toBe('Recanto do Horizonte')
    expect(body.get('entry.44')).toBe('Quero saber das unidades.')
  })

  it('fails closed when the destination is missing', async () => {
    vi.stubEnv('VITE_GOOGLE_FORM_ACTION', '')
    vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_NAME', '')
    vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_PHONE', '')
    vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_DEVELOPMENT', '')
    vi.stubEnv('VITE_GOOGLE_FORM_ENTRY_MESSAGE', '')
    await expect(
      submitLeadToGoogleForm({
        name: 'Maria Silva',
        phone: '31999990000',
        development: '',
        message: 'Quero saber das unidades.',
      }),
    ).rejects.toThrow(/não configurado/i)
  })
})
