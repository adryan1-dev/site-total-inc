import { afterEach, describe, expect, it, vi } from 'vitest'
import { headerOffset, prefersReducedMotion } from './motion'

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
      onchange: null,
    })),
  })
}

describe('prefersReducedMotion', () => {
  afterEach(() => {
    mockMatchMedia(false)
  })

  it('is true when the user asked to reduce motion', () => {
    mockMatchMedia(true)
    expect(prefersReducedMotion()).toBe(true)
  })

  it('is false otherwise', () => {
    mockMatchMedia(false)
    expect(prefersReducedMotion()).toBe(false)
  })
})

describe('headerOffset', () => {
  it('reads --header-h from the document', () => {
    document.documentElement.style.setProperty('--header-h', '5.5625rem')
    expect(headerOffset()).toBe('5.5625rem')
  })
})
