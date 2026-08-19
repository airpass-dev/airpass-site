import { describe, it, expect } from 'vitest'
import { ko } from './ko'
import { en } from './en'

describe('i18n catalogs', () => {
  it('ko and en define exactly the same keys', () => {
    expect(Object.keys(ko).sort()).toEqual(Object.keys(en).sort())
  })

  it('has no empty strings', () => {
    for (const [key, value] of Object.entries({ ...ko, ...en })) {
      expect(value, `empty value for "${key}"`).not.toBe('')
    }
  })
})
