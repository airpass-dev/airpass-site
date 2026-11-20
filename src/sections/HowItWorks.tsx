import { useLocale } from '../i18n/LocaleContext'

// A real sequence, so the numbers carry meaning.
const STEPS = [
  { title: 'steps.1.title', body: 'steps.1.body' },
  { title: 'steps.2.title', body: 'steps.2.body' },
  { title: 'steps.3.title', body: 'steps.3.body' }
] as const

export default function HowItWorks() {
  const { t } = useLocale()

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline">{t('steps.title')}</h2>
        <ol className="steps">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <span className="step-num" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{t(step.title)}</h3>
              <p>{t(step.body)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
