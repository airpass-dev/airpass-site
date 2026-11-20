import type { ReactNode } from 'react'
import {
  ClockIcon,
  FolderIcon,
  GlobeIcon,
  LaptopIcon,
  LockIcon,
  PersonOffIcon
} from '../components/Icons'
import type { MessageKey } from '../i18n/LocaleContext'
import { useLocale } from '../i18n/LocaleContext'

function Tile({
  title,
  body,
  icon,
  wide = false,
  children
}: {
  title: MessageKey
  body: MessageKey
  icon?: ReactNode
  wide?: boolean
  children?: ReactNode
}) {
  const { t } = useLocale()

  return (
    <li className={wide ? 'tile tile--wide' : 'tile'}>
      <div className="tile-copy">
        {icon && <span className="tile-icon">{icon}</span>}
        <h3>{t(title)}</h3>
        <p>{t(body)}</p>
      </div>
      {children}
    </li>
  )
}

/** Decorative QR-like glyph: a fixed pattern, not a scannable code. */
function QrGlyph() {
  const cells = [
    '1110111', '1010100', '1110101', '0001010', '1101111', '0100101', '1011101'
  ]
  return (
    <svg className="tile-qr" viewBox="0 0 7 7" aria-hidden="true" focusable="false">
      {cells.flatMap((row, y) =>
        [...row].map((c, x) =>
          c === '1' ? <rect key={`${x}-${y}`} x={x} y={y} width="0.92" height="0.92" rx="0.18" /> : null
        )
      )}
    </svg>
  )
}

export default function Features() {
  const { t } = useLocale()

  return (
    <section className="section section--night" id="features">
      <div className="container">
        <h2 className="headline">{t('features.title')}</h2>
        <ul className="tiles">
          <Tile title="features.discovery.title" body="features.discovery.body" wide>
            <div className="tile-devices" aria-hidden="true">
              {(['mock.device.mac', 'mock.device.windows', 'mock.device.linux'] as const).map(
                (key, i) => (
                  <div className="tile-device" key={key}>
                    <span className="m-avatar">
                      <LaptopIcon />
                    </span>
                    <span className="m-device-text">
                      <b>{t(key)}</b>
                      <small>192.168.0.{[12, 24, 31][i]}:52110</small>
                    </span>
                  </div>
                )
              )}
            </div>
          </Tile>
          <Tile title="features.resume.title" body="features.resume.body">
            <div className="tile-resume" aria-hidden="true">
              <div className="m-progress">
                <span />
              </div>
              <small>{t('features.resume.status')}</small>
            </div>
          </Tile>
          <Tile title="features.folders.title" body="features.folders.body" icon={<FolderIcon />} />
          <Tile title="features.encryption.title" body="features.encryption.body" icon={<LockIcon />} />
          <Tile title="features.noAccount.title" body="features.noAccount.body" icon={<PersonOffIcon />} />
          <Tile title="features.pairing.title" body="features.pairing.body" icon={<QrGlyph />} />
          <Tile title="features.history.title" body="features.history.body" icon={<ClockIcon />} />
          <Tile title="features.i18n.title" body="features.i18n.body" icon={<GlobeIcon />} />
        </ul>
      </div>
    </section>
  )
}
