import { useLocale } from '../i18n/LocaleContext'

const STEPS = [
  { title: 'how.step1.title', body: 'how.step1.body' },
  { title: 'how.step2.title', body: 'how.step2.body' },
  { title: 'how.step3.title', body: 'how.step3.body' }
] as const

export default function HowItWorks() {
  const { t } = useLocale()

  return (
    <section className="section">
      <h2>{t('how.title')}</h2>
      <ol className="steps">
        {STEPS.map((step, index) => (
          <li key={step.title}>
            <span className="step-num">{index + 1}</span>
            <h3>{t(step.title)}</h3>
            <p className="muted">{t(step.body)}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
