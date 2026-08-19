import BrandLogo from '../components/BrandLogo'
import HeroVisual from './HeroVisual'
import LangToggle from '../components/LangToggle'
import { useLocale } from '../i18n/LocaleContext'

export default function Hero() {
  const { t } = useLocale()

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
          <a className="dl-card is-primary" href="#download">
            {t('nav.download')} →
          </a>
        </div>
        <HeroVisual />
      </div>
    </header>
  )
}
