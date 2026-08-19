export type PlatformKey = 'mac-arm64' | 'mac-x64' | 'win' | 'linux-appimage' | 'linux-deb'

export interface ReleaseAsset {
  platform: PlatformKey
  url: string
  size: number
}

export interface ReleaseData {
  available: boolean
  version: string | null
  publishedAt: string | null
  assets: ReleaseAsset[]
}

export const EMPTY_RELEASE: ReleaseData = {
  available: false,
  version: null,
  publishedAt: null,
  assets: []
}

/**
 * Installer filename → platform. Anything unrecognised returns null and is
 * dropped: update feeds (latest*.yml), delta maps (*.blockmap), the macOS
 * .zip (which exists only for electron-updater), and the Windows portable
 * build all fall through here.
 */
export function classifyAsset(name: string): PlatformKey | null {
  const lower = name.toLowerCase()

  if (lower.endsWith('.blockmap')) return null
  if (lower.endsWith('.yml') || lower.endsWith('.yaml')) return null

  if (lower.endsWith('.dmg')) {
    if (lower.includes('arm64')) return 'mac-arm64'
    if (lower.includes('x64')) return 'mac-x64'
    return null
  }

  if (lower.endsWith('.exe')) {
    return lower.includes('setup') ? 'win' : null
  }

  if (lower.endsWith('.appimage')) return 'linux-appimage'
  if (lower.endsWith('.deb')) return 'linux-deb'

  return null
}

interface ApiAsset {
  name: string
  browser_download_url: string
  size: number
}

/** GitHub release JSON → the shape the page consumes. Never throws. */
export function buildRelease(apiJson: unknown): ReleaseData {
  if (!apiJson || typeof apiJson !== 'object') return EMPTY_RELEASE

  const release = apiJson as {
    tag_name?: string
    published_at?: string
    assets?: ApiAsset[]
  }
  if (!release.tag_name || !Array.isArray(release.assets)) return EMPTY_RELEASE

  const assets: ReleaseAsset[] = []
  for (const asset of release.assets) {
    const platform = classifyAsset(asset.name)
    if (!platform) continue
    if (assets.some((a) => a.platform === platform)) continue
    assets.push({ platform, url: asset.browser_download_url, size: asset.size })
  }

  return {
    available: assets.length > 0,
    version: release.tag_name,
    publishedAt: release.published_at ?? null,
    assets
  }
}
