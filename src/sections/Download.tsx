import { useMemo } from 'react'
import type { PlatformKey } from '../lib/assets'
import { detectOS, PLATFORMS_FOR_OS } from '../lib/platform'
import { release } from '../lib/release'
import { useLocale } from '../i18n/LocaleContext'
import DownloadButton from '../components/DownloadButton'

const ALL_PLATFORMS: PlatformKey[] = [
  'mac-arm64',
  'mac-x64',
  'win',
  'linux-appimage',
  'linux-deb'
]

const RELEASES_URL = 'https://github.com/airpass-dev/airpass-site/releases'

export default function Download() {
  const { t } = useLocale()
  const os = useMemo(
    () => detectOS(typeof navigator === 'undefined' ? '' : navigator.userAgent),
    []
  )

  const assetFor = (platform: PlatformKey) =>
    release.assets.find((asset) => asset.platform === platform)

  if (!release.available) {
    return (
      <section id="download" className="section">
        <h2>{t('download.title')}</h2>
        <p className="muted">{t('download.unavailable')}</p>
        <a className="dl-card is-primary" href={RELEASES_URL}>
          {t('download.releasesLink')} →
        </a>
      </section>
    )
  }

  const primary = PLATFORMS_FOR_OS[os]
  const rest = ALL_PLATFORMS.filter((p) => !primary.includes(p))

  return (
    <section id="download" className="section">
      <h2>{t('download.title')}</h2>
      <p className="muted">
        {t('download.version')} {release.version}
      </p>

      {primary.length > 0 && (
        <div className="dl-grid">
          {primary.map((platform) => (
            <DownloadButton
              key={platform}
              platform={platform}
              url={assetFor(platform)?.url}
              size={assetFor(platform)?.size}
              primary
            />
          ))}
        </div>
      )}

      <div className="dl-grid dl-grid--secondary">
        {rest.map((platform) => (
          <DownloadButton
            key={platform}
            platform={platform}
            url={assetFor(platform)?.url}
            size={assetFor(platform)?.size}
          />
        ))}
      </div>
    </section>
  )
}
