import { useLocale } from '../i18n/LocaleContext'

const QUESTIONS = [
  { q: 'faq.internet.q', a: 'faq.internet.a' },
  { q: 'faq.os.q', a: 'faq.os.a' },
  { q: 'faq.firewall.q', a: 'faq.firewall.a' },
  { q: 'faq.encryption.q', a: 'faq.encryption.a' },
  { q: 'faq.mobile.q', a: 'faq.mobile.a' }
] as const

export default function Faq() {
  const { t } = useLocale()

  return (
    <section className="section">
      <h2>{t('faq.title')}</h2>
      <dl className="faq">
        {QUESTIONS.map((item) => (
          <div key={item.q}>
            <dt>{t(item.q)}</dt>
            <dd className="muted">{t(item.a)}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
