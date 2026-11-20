import BrandLogo from '../components/BrandLogo'
import LangToggle from '../components/LangToggle'
import { useLocale } from '../i18n/LocaleContext'

export default function Nav() {
  const { t } = useLocale()

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          <BrandLogo size={22} />
          <span>AirPass</span>
        </a>
        <nav className="nav-links" aria-label="AirPass">
          <a href="#compare">{t('nav.compare')}</a>
          <a href="#features">{t('nav.features')}</a>
          <a href="#faq">{t('nav.faq')}</a>
        </nav>
        <a className="nav-cta" href="#download">
          {t('nav.download')}
        </a>
        <LangToggle />
      </div>
    </header>
  )
}
