import { describe, expect, it } from 'vitest'
import { developments, filterDevelopments } from './developments'

describe('developments', () => {
  it('is built from the three Recanto photo folders', () => {
    expect(developments.map((item) => item.folder)).toEqual(['horizonte', 'mata', 'alpes'])
    expect(developments.map((item) => item.title)).toEqual([
      'Recanto do Horizonte',
      'Recanto da Mata',
      'Recanto dos Alpes',
    ])
    expect(developments.every((item) => item.cover.src.startsWith('/assets/recantos/'))).toBe(true)
    expect(developments.every((item) => item.gallery.length >= 1)).toBe(true)
    expect(developments[0]?.gallery.every((photo) => !photo.src.includes('planta'))).toBe(true)
  })

  it('filters by city and status without inventing rows', () => {
    expect(filterDevelopments('bh', null)).toHaveLength(2)
    expect(filterDevelopments(null, 'lancamento').map((item) => item.slug)).toEqual([
      'recanto-do-horizonte',
    ])
    expect(filterDevelopments('bh', 'obras').map((item) => item.slug)).toEqual(['recanto-da-mata'])
    expect(filterDevelopments('almenara', null)).toHaveLength(0)
  })
})
