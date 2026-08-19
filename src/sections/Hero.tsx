import { useMemo } from 'react'
import BrandLogo from '../components/BrandLogo'
import HeroVisual from './HeroVisual'
import LangToggle from '../components/LangToggle'
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
    <header className="hero">
      <nav className="hero-nav">
        <BrandLogo size={36} />
        <span className="wordmark">AirPass</span>
        <div className="spacer" />
        <LangToggle />
      </nav>

      <div className="hero-body">
        <div>
          <h1>{t('hero.title')}</h1>
          <p className="lead">{t('hero.subtitle')}</p>
          <div className="hero-cta">
            <a className="dl-card is-primary" href={primaryUrl}>
              {t('nav.download')} →
            </a>
            <a className="hero-cta-secondary" href="#download">
              {t('hero.cta.all')}
            </a>
          </div>
          {release.available && (
            <p className="hero-version muted">
              {t('download.version')} {release.version}
            </p>
          )}
        </div>
        <HeroVisual />
      </div>
    </header>
  )
}
