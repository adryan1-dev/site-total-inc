import { describe, expect, it } from 'vitest'
import { messages, site } from './site'

describe('site contacts', () => {
  it('does not publish a WhatsApp number or wa.me link', () => {
    expect(site).not.toHaveProperty('whatsappDigits')
    expect(JSON.stringify({ site, messages })).not.toMatch(/wa\.me|553197653008/)
  })
})
