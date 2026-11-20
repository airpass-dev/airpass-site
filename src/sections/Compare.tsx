import { CheckIcon } from '../components/Icons'
import type { MessageKey } from '../i18n/LocaleContext'
import { useLocale } from '../i18n/LocaleContext'

type Cell = boolean | MessageKey

// Official desktop support as of 2026-11; see compare.note for the scope.
// Quick Share: Android, ChromeOS and 64-bit Windows (no ARM, no Mac app).
// AirDrop: Apple devices only on the computer side.
const ROWS: { label: MessageKey; airdrop: Cell; quickshare: Cell; airpass: Cell }[] = [
  { label: 'compare.row.mac', airdrop: true, quickshare: false, airpass: true },
  { label: 'compare.row.windows', airdrop: false, quickshare: true, airpass: true },
  { label: 'compare.row.linux', airdrop: false, quickshare: false, airpass: true },
  { label: 'compare.row.macWindows', airdrop: false, quickshare: false, airpass: true },
  {
    label: 'compare.row.phone',
    airdrop: 'compare.phone.airdrop',
    quickshare: 'compare.phone.quickshare',
    airpass: 'compare.phone.airpass'
  }
]

function Mark({ value }: { value: Cell }) {
  const { t } = useLocale()

  if (typeof value === 'string') return <span className="cmp-text">{t(value)}</span>
  if (value) {
    return (
      <span className="cmp-yes">
        <CheckIcon />
        <span className="sr-only">{t('compare.yes')}</span>
      </span>
    )
  }
  return (
    <span className="cmp-no">
      <span className="sr-only">{t('compare.no')}</span>
    </span>
  )
}

export default function Compare() {
  const { t } = useLocale()

  return (
    <section className="section section--mist" id="compare">
      <div className="container">
        <h2 className="headline">{t('compare.title')}</h2>
        <p className="intro">{t('compare.lead')}</p>
        <p className="intro-small">{t('compare.body')}</p>

        <div className="cmp-scroll">
          <table className="cmp">
            <caption className="sr-only">{t('compare.caption')}</caption>
            <thead>
              <tr>
                <td />
                <th scope="col">AirDrop</th>
                <th scope="col">Quick Share</th>
                <th scope="col" className="cmp-ours">
                  AirPass
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{t(row.label)}</th>
                  <td>
                    <Mark value={row.airdrop} />
                  </td>
                  <td>
                    <Mark value={row.quickshare} />
                  </td>
                  <td className="cmp-ours">
                    <Mark value={row.airpass} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="footnote">{t('compare.note')}</p>
      </div>
    </section>
  )
}
