import { describe, expect, it } from 'vitest'
import { messages, site, whatsappHref } from './site'

describe('whatsappHref', () => {
  it('builds a wa.me link with the official number and encoded message', () => {
    const href = whatsappHref(messages.horizonte)

    expect(href.startsWith(`https://wa.me/${site.whatsappDigits}?text=`)).toBe(true)
    expect(href).toContain(encodeURIComponent('Recanto do Horizonte'))
  })
})
