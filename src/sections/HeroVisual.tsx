import AppWindow from '../components/AppWindow'
import { FileIcon, FolderIcon, LaptopIcon } from '../components/Icons'
import { useLocale } from '../i18n/LocaleContext'

/**
 * Three AirPass windows, one per desktop OS, each mid-way through a different
 * part of the same exchange: Windows picks a device, the Mac is asked to
 * accept, Linux is sending to the Mac. Device subtitles show address:port
 * because that is what the real app shows (the engine reports no OS).
 */
export default function HeroVisual() {
  const { t } = useLocale()

  return (
    <div className="stage-wrap" role="img" aria-label={t('hero.visual.label')}>
      <div className="stage">
        <figure className="stage-slot stage-slot--side">
          <AppWindow os="windows" title={t('mock.nav.send')} active="send">
            <p className="m-title">{t('mock.send.title')}</p>
            <p className="m-sub">{t('mock.send.found')}</p>
            <div className="m-drop">
              <FolderIcon />
              <span>{t('mock.send.drop')}</span>
            </div>
            <p className="m-label">{t('mock.send.nearby')}</p>
            <div className="m-device">
              <span className="m-avatar">
                <LaptopIcon />
              </span>
              <span className="m-device-text">
                <b>{t('mock.device.mac')}</b>
                <small>192.168.0.12:52110</small>
              </span>
            </div>
            <div className="m-device">
              <span className="m-avatar">
                <LaptopIcon />
              </span>
              <span className="m-device-text">
                <b>{t('mock.device.linux')}</b>
                <small>192.168.0.31:52110</small>
              </span>
            </div>
          </AppWindow>
          <figcaption>Windows</figcaption>
        </figure>

        <figure className="stage-slot stage-slot--center">
          <AppWindow os="mac" title={t('mock.nav.receive')} active="receive">
            <p className="m-title">{t('mock.receive.title')}</p>
            <p className="m-sub">{t('mock.receive.subtitle')}</p>
            <div className="m-card m-card--request">
              <div className="m-card-head">
                <span className="m-avatar m-avatar--square">
                  <LaptopIcon />
                </span>
                <span className="m-device-text">
                  <b>{t('mock.device.windows')}</b>
                  <small>{t('mock.receive.time')}</small>
                </span>
              </div>
              <div className="m-files">
                <div className="m-file">
                  <FileIcon />
                  <span>{t('mock.file.design')}</span>
                  <small>24.1 MB</small>
                </div>
                <div className="m-file">
                  <FileIcon />
                  <span>{t('mock.file.feedback')}</span>
                  <small>1.2 MB</small>
                </div>
                <p className="m-files-total">{t('mock.receive.total')}</p>
              </div>
              <div className="m-actions">
                <span className="m-btn m-btn--reject">{t('mock.receive.reject')}</span>
                <span className="m-btn m-btn--accept">{t('mock.receive.accept')}</span>
              </div>
            </div>
          </AppWindow>
          <figcaption>macOS</figcaption>
        </figure>

        <figure className="stage-slot stage-slot--side">
          <AppWindow os="linux" title={t('mock.queue.title')} active="send">
            <p className="m-title">{t('mock.queue.title')}</p>
            <p className="m-sub">{t('mock.queue.subtitle')}</p>
            <div className="m-card">
              <div className="m-card-head">
                <span className="m-device-text">
                  <b>{t('mock.device.mac')}</b>
                  <small>{t('mock.file.build')}</small>
                </span>
                <span className="m-badge">{t('mock.queue.status')}</span>
              </div>
              <div className="m-progress">
                <span />
              </div>
              <div className="m-progress-meta">
                <small>{t('mock.queue.progress')}</small>
                <small>64%</small>
              </div>
            </div>
          </AppWindow>
          <figcaption>Linux</figcaption>
        </figure>
      </div>
    </div>
  )
}
