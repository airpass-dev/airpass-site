import { useLocale } from '../i18n/LocaleContext'
import { release } from '../lib/release'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="footer">
      <div className="container">
        <p>{t('footer.trademark')}</p>
        <p className="footer-row">
          <span>© 2026 AirPass. {t('footer.license')}</span>
          {release.version ? (
            <span>
              {t('footer.version')} {release.version}
            </span>
          ) : null}
        </p>
      </div>
    </footer>
  )
}
