import { describe, expect, it } from 'vitest'
import { developments } from './developments'

describe('developments', () => {
  it('lists only Recantos that have photos, with Horizonte as the featured route', () => {
    expect(developments.map((item) => item.slug)).toEqual([
      'recanto-do-horizonte',
      'recanto-da-mata',
      'recanto-dos-alpes',
    ])
    expect(developments[0]?.href).toBe('/empreendimentos/recanto-do-horizonte')
    expect(developments.slice(1).every((item) => item.href === null)).toBe(true)
    expect(developments.every((item) => item.cover.src.startsWith('/assets/recantos/'))).toBe(true)
  })
})
