import { describe, it, expect } from 'vitest'
import { classifyAsset, buildRelease } from './assets'

describe('classifyAsset', () => {
  it('classifies macOS dmg by architecture', () => {
    expect(classifyAsset('AirPass-0.1.0-arm64.dmg')).toBe('mac-arm64')
    expect(classifyAsset('AirPass-0.1.0-x64.dmg')).toBe('mac-x64')
  })

  it('classifies the Windows installer', () => {
    expect(classifyAsset('AirPass-0.1.0-x64-setup.exe')).toBe('win')
  })

  it('classifies Linux packages', () => {
    expect(classifyAsset('AirPass-0.1.0-x64.AppImage')).toBe('linux-appimage')
    expect(classifyAsset('AirPass-0.1.0-amd64.deb')).toBe('linux-deb')
  })

  it('rejects update-feed and non-installer files', () => {
    expect(classifyAsset('latest.yml')).toBeNull()
    expect(classifyAsset('latest-mac.yml')).toBeNull()
    expect(classifyAsset('latest-linux.yml')).toBeNull()
    expect(classifyAsset('AirPass-0.1.0-arm64.dmg.blockmap')).toBeNull()
    expect(classifyAsset('AirPass-0.1.0-arm64-mac.zip')).toBeNull()
  })

  it('prefers the setup installer over the portable build', () => {
    expect(classifyAsset('AirPass-0.1.0-x64-portable.exe')).toBeNull()
  })
})

describe('buildRelease', () => {
  const api = {
    tag_name: 'v0.1.0',
    published_at: '2026-08-18T00:00:00Z',
    assets: [
      {
        name: 'AirPass-0.1.0-x64-setup.exe',
        browser_download_url: 'https://example.com/setup.exe',
        size: 1234
      },
      { name: 'latest.yml', browser_download_url: 'https://example.com/latest.yml', size: 10 }
    ]
  }

  it('maps installer assets and drops the rest', () => {
    const result = buildRelease(api)
    expect(result.available).toBe(true)
    expect(result.version).toBe('v0.1.0')
    expect(result.assets).toEqual([
      { platform: 'win', url: 'https://example.com/setup.exe', size: 1234 }
    ])
  })

  it('reports unavailable when there are no installer assets', () => {
    expect(buildRelease({ ...api, assets: [] }).available).toBe(false)
  })

  it('reports unavailable for malformed input', () => {
    expect(buildRelease(null).available).toBe(false)
    expect(buildRelease({}).available).toBe(false)
  })
})
