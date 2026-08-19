import { describe, it, expect } from 'vitest'
import { formatBytes } from './format'

describe('formatBytes', () => {
  it('formats megabytes with one decimal', () => {
    expect(formatBytes(94_371_840)).toBe('90.0 MB')
  })

  it('formats gigabytes', () => {
    expect(formatBytes(1_610_612_736)).toBe('1.5 GB')
  })

  it('formats kilobytes', () => {
    expect(formatBytes(2048)).toBe('2.0 KB')
  })

  it('handles zero and negatives without producing NaN', () => {
    expect(formatBytes(0)).toBe('0 B')
    expect(formatBytes(-5)).toBe('0 B')
  })
})
