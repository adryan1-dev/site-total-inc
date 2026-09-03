import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { shouldInitClarity } from './clarity'

describe('shouldInitClarity', () => {
  it('starts only when a project ID exists outside of tests', () => {
    expect(shouldInitClarity('abc123', 'production')).toBe(true)
    expect(shouldInitClarity('abc123', 'development')).toBe(true)
    expect(shouldInitClarity('abc123', 'test')).toBe(false)
    expect(shouldInitClarity('  ', 'production')).toBe(false)
    expect(shouldInitClarity(undefined, 'production')).toBe(false)
  })
})

describe('Clarity tracking snippet', () => {
  it('ships the official tag in index.html so Clarity can verify the install', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')

    expect(html).toContain('https://www.clarity.ms/tag/')
    expect(html).toContain('yc8d2ig6u0')
  })
})
