import type { ReactNode } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import { ClockIcon, GearIcon, InboxIcon, SendIcon } from './Icons'

export type WindowOS = 'mac' | 'windows' | 'linux'
type NavKey = 'send' | 'receive' | 'history' | 'settings'

const NAV: { key: NavKey; Icon: typeof SendIcon }[] = [
  { key: 'send', Icon: SendIcon },
  { key: 'receive', Icon: InboxIcon },
  { key: 'history', Icon: ClockIcon },
  { key: 'settings', Icon: GearIcon }
]

/**
 * A drawn copy of the AirPass desktop window: the app's dark title bar with
 * each platform's own window controls, its icon sidebar, and a light content
 * pane. Purely illustrative, so the whole thing is hidden from assistive tech
 * and described once by the parent's aria-label.
 */
export default function AppWindow({
  os,
  title,
  active,
  children
}: {
  os: WindowOS
  title: string
  active: NavKey
  children: ReactNode
}) {
  const { t } = useLocale()

  return (
    <div className={`win win--${os}`} aria-hidden="true">
      <div className="win-bar">
        {os === 'mac' && (
          <span className="win-lights">
            <i />
            <i />
            <i />
          </span>
        )}
        <span className="win-title">AirPass — {title}</span>
        {os === 'windows' && (
          <span className="win-controls">
            <svg viewBox="0 0 10 10">
              <path d="M1 5h8" />
            </svg>
            <svg viewBox="0 0 10 10">
              <rect x="1.5" y="1.5" width="7" height="7" />
            </svg>
            <svg viewBox="0 0 10 10">
              <path d="m1.5 1.5 7 7M8.5 1.5l-7 7" />
            </svg>
          </span>
        )}
        {os === 'linux' && (
          <span className="win-close">
            <svg viewBox="0 0 10 10">
              <path d="m3 3 4 4M7 3 3 7" />
            </svg>
          </span>
        )}
      </div>

      <div className="win-body">
        <nav className="win-side">
          <span className="win-logo">
            <SendIcon />
          </span>
          {NAV.map(({ key, Icon }) => (
            <span key={key} className={key === active ? 'win-nav is-active' : 'win-nav'}>
              <Icon />
              <span>{t(`mock.nav.${key}` as const)}</span>
            </span>
          ))}
        </nav>
        <div className="win-main">{children}</div>
      </div>
    </div>
  )
}
