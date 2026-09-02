import { developments } from '../data/developments'

export type LeadFields = {
  name: string
  phone: string
  development: string
  message: string
}

type FormEntries = {
  name: string
  phone: string
  development: string
  message: string
}

const SUBMIT_MS = 12_000

const DEFAULT_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSfvcDTQO8Ie3YRcfNrTtBt9QIC35C0XRGWq4EQuD7h5n-6Fiw/formResponse'

const DEFAULT_ENTRIES = {
  name: 'entry.1707591706',
  phone: 'entry.1070325598',
  development: 'entry.1201434642',
  message: 'entry.40408375',
} as const

function env(name: keyof ImportMetaEnv, fallback: string) {
  const value = import.meta.env[name]
  if (value == null) return fallback
  return value.trim()
}

function isEntryId(value: string) {
  return /^entry\.\d+$/.test(value)
}

export function developmentLabel(slug: string) {
  if (!slug) return 'Ainda estou vendo'
  return developments.find((item) => item.slug === slug)?.title ?? slug
}

export function googleFormConfig() {
  const action = env('VITE_GOOGLE_FORM_ACTION', DEFAULT_ACTION)
  const entries: FormEntries = {
    name: env('VITE_GOOGLE_FORM_ENTRY_NAME', DEFAULT_ENTRIES.name),
    phone: env('VITE_GOOGLE_FORM_ENTRY_PHONE', DEFAULT_ENTRIES.phone),
    development: env('VITE_GOOGLE_FORM_ENTRY_DEVELOPMENT', DEFAULT_ENTRIES.development),
    message: env('VITE_GOOGLE_FORM_ENTRY_MESSAGE', DEFAULT_ENTRIES.message),
  }
  const ready = Boolean(
    action.startsWith('https://docs.google.com/forms/') &&
      action.includes('/formResponse') &&
      isEntryId(entries.name) &&
      isEntryId(entries.phone) &&
      isEntryId(entries.development) &&
      isEntryId(entries.message),
  )
  return { action, entries, ready }
}

export async function submitLeadToGoogleForm(fields: LeadFields) {
  const { action, entries, ready } = googleFormConfig()
  if (!ready) {
    throw new Error('Google Form não configurado.')
  }

  const body = new URLSearchParams()
  body.set(entries.name, fields.name.trim())
  body.set(entries.phone, fields.phone.trim())
  body.set(entries.development, developmentLabel(fields.development))
  body.set(entries.message, fields.message.trim())

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), SUBMIT_MS)
  try {
    await fetch(action, {
      method: 'POST',
      mode: 'no-cors',
      body,
      signal: controller.signal,
    })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Tempo esgotado ao enviar. Tente de novo.')
    }
    throw new Error('Não foi possível enviar. Tente de novo ou use o WhatsApp.')
  } finally {
    clearTimeout(timer)
  }
}
