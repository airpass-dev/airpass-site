import { describe, it, expect } from 'vitest'
import { detectOS } from './platform'

describe('detectOS', () => {
  it('detects macOS', () => {
    expect(
      detectOS('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36')
    ).toBe('mac')
  })

  it('detects Windows', () => {
    expect(detectOS('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')).toBe(
      'windows'
    )
  })

  it('detects Linux desktop', () => {
    expect(detectOS('Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:120.0) Gecko/20100101')).toBe(
      'linux'
    )
  })

  it('does not mistake Android for Linux desktop', () => {
    expect(detectOS('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36')).toBe(
      'unknown'
    )
  })

  it('does not mistake iOS for macOS', () => {
    expect(detectOS('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)')).toBe('unknown')
  })

  it('falls back to unknown for empty input', () => {
    expect(detectOS('')).toBe('unknown')
  })
})
