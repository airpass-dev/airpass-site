import { PlusIcon } from '../components/Icons'
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
    <section className="section" id="faq">
      <div className="container container--narrow">
        <h2 className="headline headline--left">{t('faq.title')}</h2>
        <div className="faq">
          {QUESTIONS.map((item) => (
            <details key={item.q}>
              <summary>
                <span>{t(item.q)}</span>
                <PlusIcon />
              </summary>
              <p>{t(item.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
