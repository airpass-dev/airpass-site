import type { PlatformKey } from '../lib/assets'
import type { MessageKey } from '../i18n/LocaleContext'
import { useLocale } from '../i18n/LocaleContext'
import { formatBytes } from '../lib/format'

export const PLATFORM_LABEL: Record<PlatformKey, MessageKey> = {
  'mac-arm64': 'download.mac.arm64',
  'mac-x64': 'download.mac.x64',
  win: 'download.win',
  'linux-appimage': 'download.linux.appimage',
  'linux-deb': 'download.linux.deb'
}

interface Props {
  platform: PlatformKey
  url?: string
  size?: number
  primary?: boolean
}

export default function DownloadButton({ platform, url, size, primary = false }: Props) {
  const { t } = useLocale()
  const label = t(PLATFORM_LABEL[platform])

  if (!url) {
    return (
      <div className="dl-card is-disabled" aria-disabled="true">
        <span className="dl-label">{label}</span>
        <span className="dl-meta">{t('download.soon')}</span>
      </div>
    )
  }

  return (
    <a className={primary ? 'dl-card is-primary' : 'dl-card'} href={url}>
      <span className="dl-label">{label}</span>
      {size ? <span className="dl-meta">{formatBytes(size)}</span> : null}
    </a>
  )
}
