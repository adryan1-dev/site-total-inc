import { useState, type FormEvent } from 'react'
import { developments } from '../data/developments'
import { submitLeadToGoogleForm } from '../lib/google-form'
import { whatsappHref } from '../data/site'

type Fields = {
  name: string
  phone: string
  development: string
  message: string
}

type FieldName = keyof Pick<Fields, 'name' | 'phone' | 'message'>

const empty: Fields = { name: '', phone: '', development: '', message: '' }

function validate(fields: Fields): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {}
  if (fields.name.trim().length < 2) errors.name = 'Digite seu nome completo.'
  const digits = fields.phone.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 11) {
    errors.phone = 'Informe o telefone com DDD (10 ou 11 dígitos).'
  }
  if (fields.message.trim().length < 10) {
    errors.message = 'Escreva em poucas linhas o que você busca.'
  }
  return errors
}

export function LeadForm() {
  const [fields, setFields] = useState(empty)
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = validate(fields)
    setErrors(next)
    if (Object.keys(next).length > 0 || submitting) return
    setSubmitError('')
    setSubmitting(true)
    try {
      await submitLeadToGoogleForm(fields)
      setSent(true)
    } catch {
      setSubmitError('Não foi possível enviar. Tente de novo ou fale no WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    const interest = fields.development
      ? developments.find((item) => item.slug === fields.development)
      : null
    const text = interest
      ? `Olá, sou ${fields.name}. Tenho interesse no ${interest.title}. ${fields.message}`
      : `Olá, sou ${fields.name}. ${fields.message}`

    return (
      <div className="border border-line bg-dust px-6 py-8">
        <p className="label text-accent">Mensagem recebida</p>
        <h2 className="font-display mt-3 mb-0 text-4xl leading-none uppercase">
          Obrigado, {fields.name.split(' ')[0]}.
        </h2>
        <p className="mt-4 mb-0 max-w-md text-[1.125rem] leading-relaxed text-mute">
          A equipe entra em contato neste telefone. Se preferir agora, o WhatsApp já leva o seu
          recado.
        </p>
        <a href={whatsappHref(text)} className="cta-primary mt-8" target="_blank" rel="noopener noreferrer">
          Continuar no WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit} noValidate aria-busy={submitting}>
      <label className={`field ${errors.name ? 'is-error' : ''}`}>
        <span>Nome</span>
        <input
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={(event) => update('name', event.target.value)}
        />
        {errors.name ? <p className="field-error">{errors.name}</p> : null}
      </label>
      <label className={`field ${errors.phone ? 'is-error' : ''}`}>
        <span>Telefone</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="(31) 00000-0000"
          value={fields.phone}
          onChange={(event) => update('phone', event.target.value)}
        />
        {errors.phone ? <p className="field-error">{errors.phone}</p> : null}
      </label>
      <label className="field">
        <span>Empreendimento</span>
        <select
          name="development"
          value={fields.development}
          onChange={(event) => update('development', event.target.value)}
        >
          <option value="">Ainda estou vendo</option>
          {developments.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
      </label>
      <label className={`field ${errors.message ? 'is-error' : ''}`}>
        <span>Mensagem</span>
        <textarea
          name="message"
          value={fields.message}
          onChange={(event) => update('message', event.target.value)}
        />
        {errors.message ? <p className="field-error">{errors.message}</p> : null}
      </label>
      {submitError ? (
        <p className="field-error" role="alert">
          {submitError}
        </p>
      ) : null}
      <button type="submit" className="cta-primary w-full md:w-auto" disabled={submitting}>
        {submitting ? 'Enviando...' : 'Enviar mensagem'}
      </button>
    </form>
  )
}
