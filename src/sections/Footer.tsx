import { useLocale } from '../i18n/LocaleContext'
import { release } from '../lib/release'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="footer">
      <span>© 2026 AirPass. {t('footer.license')}</span>
      {release.version ? (
        <span className="muted">
          {t('footer.version')} {release.version}
        </span>
      ) : null}
    </footer>
  )
}
