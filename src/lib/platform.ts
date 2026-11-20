import type { PlatformKey } from './assets'

export type DetectedOS = 'mac' | 'windows' | 'linux' | 'unknown'

/**
 * Desktop OS from a user-agent string. Mobile deliberately resolves to
 * 'unknown': there is no mobile build, and every mobile UA contains a
 * desktop-looking token (Android says "Linux", iOS says "like Mac OS X").
 * Checking mobile first keeps those from matching.
 */
export function detectOS(userAgent: string): DetectedOS {
  const ua = userAgent.toLowerCase()
  if (!ua) return 'unknown'

  if (/android|iphone|ipad|ipod|mobile/.test(ua)) return 'unknown'

  if (ua.includes('windows')) return 'windows'
  if (ua.includes('macintosh') || ua.includes('mac os x')) return 'mac'
  if (ua.includes('linux') || ua.includes('x11')) return 'linux'

  return 'unknown'
}

/** macOS lists both architectures: the browser cannot tell them apart reliably. */
export const PLATFORMS_FOR_OS: Record<DetectedOS, PlatformKey[]> = {
  mac: ['mac-arm64', 'mac-x64'],
  windows: ['win'],
  // AppImage is not built (see the app's electron-builder.yml); listing it
  // would show a permanent "coming soon" card and block the one-click .deb.
  linux: ['linux-deb'],
  unknown: []
}
