import { useLocale } from '../i18n/LocaleContext'

const FEATURES = [
  { title: 'features.discovery.title', body: 'features.discovery.body' },
  { title: 'features.crossplatform.title', body: 'features.crossplatform.body' },
  { title: 'features.local.title', body: 'features.local.body' },
  { title: 'features.history.title', body: 'features.history.body' },
  { title: 'features.pairing.title', body: 'features.pairing.body' },
  { title: 'features.i18n.title', body: 'features.i18n.body' }
] as const

export default function Features() {
  const { t } = useLocale()

  return (
    <section className="section">
      <h2>{t('features.title')}</h2>
      <div className="feature-grid">
        {FEATURES.map((feature) => (
          <article key={feature.title} className="feature">
            <h3>{t(feature.title)}</h3>
            <p className="muted">{t(feature.body)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
