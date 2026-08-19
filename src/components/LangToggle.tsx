import { useLocale } from '../i18n/LocaleContext'

export default function LangToggle() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLocale('ko')}
        aria-pressed={locale === 'ko'}
        className={locale === 'ko' ? 'is-active' : ''}
      >
        한국어
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={locale === 'en' ? 'is-active' : ''}
      >
        English
      </button>
    </div>
  )
}
