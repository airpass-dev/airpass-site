import { useMemo } from 'react'
import type { PlatformKey } from '../lib/assets'
import { detectOS, PLATFORMS_FOR_OS } from '../lib/platform'
import { release } from '../lib/release'
import { useLocale } from '../i18n/LocaleContext'
import DownloadButton from '../components/DownloadButton'
import { ChevronRight } from '../components/Icons'

const ALL_PLATFORMS: PlatformKey[] = [
  'mac-arm64',
  'mac-x64',
  'win',
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

  const primary = PLATFORMS_FOR_OS[os]
  const rest = ALL_PLATFORMS.filter((p) => !primary.includes(p))

  return (
    <section className="section section--mist" id="download">
      <div className="container">
        <h2 className="headline">{t('download.title')}</h2>
        <p className="intro">
          {release.available
            ? `${t('download.subtitle')} ${t('download.version')} ${release.version}`
            : t('download.subtitle')}
        </p>

        {!release.available ? (
          <div className="dl-empty">
            <p>{t('download.unavailable')}</p>
            <a className="link" href={RELEASES_URL}>
              {t('download.releasesLink')}
              <ChevronRight />
            </a>
          </div>
        ) : (
          <>
            {primary.length > 0 && (
              <div className="dl-grid dl-grid--primary">
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
            <div className="dl-grid">
              {rest.map((platform) => (
                <DownloadButton
                  key={platform}
                  platform={platform}
                  url={assetFor(platform)?.url}
                  size={assetFor(platform)?.size}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
