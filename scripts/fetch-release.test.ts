import { describe, it, expect } from 'vitest'
import { buildRelease } from '../src/lib/assets'

describe('release fallback paths', () => {
  it('treats a release with only update feeds as unavailable', () => {
    const result = buildRelease({
      tag_name: 'v0.1.0',
      published_at: '2026-08-18T00:00:00Z',
      assets: [{ name: 'latest.yml', browser_download_url: 'u', size: 1 }]
    })
    expect(result.available).toBe(false)
    expect(result.assets).toEqual([])
    expect(result.version).toBe('v0.1.0')
  })

  it('keeps Windows and Linux when the Mac build has not landed yet', () => {
    const result = buildRelease({
      tag_name: 'v0.1.0',
      published_at: '2026-08-18T00:00:00Z',
      assets: [
        { name: 'AirPass-0.1.0-x64-setup.exe', browser_download_url: 'w', size: 1 },
        { name: 'AirPass-0.1.0-x64.AppImage', browser_download_url: 'l', size: 2 }
      ]
    })
    expect(result.available).toBe(true)
    expect(result.assets.map((a) => a.platform).sort()).toEqual(['linux-appimage', 'win'])
  })
})
