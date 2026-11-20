import { useMemo } from 'react'
import HeroVisual from './HeroVisual'
import { ChevronRight } from '../components/Icons'
import { useLocale } from '../i18n/LocaleContext'
import { detectOS, PLATFORMS_FOR_OS } from '../lib/platform'
import { release } from '../lib/release'

export default function Hero() {
  const { t } = useLocale()

  const os = useMemo(
    () => detectOS(typeof navigator === 'undefined' ? '' : navigator.userAgent),
    []
  )

  // One-click download only when there is exactly one asset-bearing platform
  // for the detected OS. macOS always offers two architectures and must
  // never be guessed between, so it (like "unknown") falls through to the
  // #download section instead.
  const primaryUrl = useMemo(() => {
    if (!release.available || os === 'mac') return '#download'
    const candidates = PLATFORMS_FOR_OS[os].filter((platform) =>
      release.assets.some((asset) => asset.platform === platform)
    )
    if (candidates.length !== 1) return '#download'
    return release.assets.find((asset) => asset.platform === candidates[0])!.url
  }, [os])

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-lead">{t('hero.subtitle')}</p>
        <div className="hero-actions">
          <a className="btn" href={primaryUrl}>
            {t('hero.cta.download')}
          </a>
          <a className="link" href="#compare">
            {t('hero.cta.compare')}
            <ChevronRight />
          </a>
        </div>
        {release.available && (
          <p className="hero-version">
            {t('download.version')} {release.version}
          </p>
        )}
      </div>
      <HeroVisual />
    </section>
  )
}
