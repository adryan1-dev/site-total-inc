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
