import type { ko } from './ko'

export const en: Record<keyof typeof ko, string> = {
  'nav.compare': 'Compare',
  'nav.features': 'Features',
  'nav.download': 'Download',
  'nav.faq': 'FAQ',

  'hero.title': 'From Mac to Windows.\nFrom Windows to Mac.',
  'hero.subtitle':
    'Send and receive files between Mac, Windows, and Linux.\nOn the same network, with no addresses and no accounts.',
  'hero.cta.download': 'Download',
  'hero.cta.compare': 'Compare with AirDrop and Quick Share',
  'hero.visual.label':
    'AirPass windows: a Windows PC picking a device to send to, a Mac receiving files, and a Linux PC sending to the Mac',

  'mock.nav.send': 'Send',
  'mock.nav.receive': 'Receive',
  'mock.nav.history': 'History',
  'mock.nav.settings': 'Settings',
  'mock.send.title': 'Send files',
  'mock.send.found': '2 devices found',
  'mock.send.drop': 'Drag files in or click to choose',
  'mock.send.nearby': 'Nearby devices',
  'mock.receive.title': 'Receive',
  'mock.receive.subtitle': 'Receive files from other devices',
  'mock.receive.time': 'Just now',
  'mock.receive.total': '2 files, 25.3 MB total',
  'mock.receive.reject': 'Reject',
  'mock.receive.accept': 'Accept',
  'mock.queue.title': 'Transfer queue',
  'mock.queue.subtitle': '1 sending',
  'mock.queue.status': 'Sending',
  'mock.queue.progress': '214 MB / 336 MB',
  'mock.device.mac': "Jieun's MacBook Pro",
  'mock.device.windows': 'Design team Windows PC',
  'mock.device.linux': 'Build server (Ubuntu)',
  'mock.file.design': 'mockup_v3.png',
  'mock.file.feedback': 'feedback.pdf',
  'mock.file.build': 'build-1120.tar.gz',

  'compare.title': 'Where AirDrop and\nQuick Share stop.',
  'compare.lead': 'AirPass connects computers on all three operating systems.',
  'compare.body':
    'AirDrop works between Apple devices. Quick Share works between Android, Chromebook, and Windows. So between a Mac and a Windows PC on the same desk, neither one works.',
  'compare.caption': 'Supported devices by product',
  'compare.row.mac': 'Mac',
  'compare.row.windows': 'Windows PC',
  'compare.row.linux': 'Linux PC',
  'compare.row.macWindows': 'Between Mac and Windows PC',
  'compare.row.phone': 'Phones',
  'compare.yes': 'Supported',
  'compare.no': 'Not supported',
  'compare.phone.airdrop': 'iPhone',
  'compare.phone.quickshare': 'Android',
  'compare.phone.airpass': 'Coming later',
  'compare.note':
    'Official support as of November 2026. The Quick Share Windows app runs on 64-bit Windows 10 and later and does not support ARM-based PCs. Some Android phones, including Pixel 9, Pixel 10, and Galaxy S26, can use Quick Share to send files to iPhone, iPad, and Mac. That compatibility runs on those phones only and does not cover transfers between a Windows PC and a Mac. AirPass needs both devices on the same network.',

  'steps.title': 'Open. Pick. Send.',
  'steps.1.title': 'Open AirPass on both devices',
  'steps.1.body': 'Devices on the same network find each other automatically.',
  'steps.2.title': 'Drop files and pick a device',
  'steps.2.body': 'Drag in files or folders, then choose who gets them from the list.',
  'steps.3.title': 'The other side accepts',
  'steps.3.body': 'The transfer starts the moment they accept, and the files open right away.',

  'features.title': 'Everything a transfer needs.\nNothing it doesn’t.',
  'features.discovery.title': 'Open it and they’re there.',
  'features.discovery.body':
    'No IP addresses to look up. Devices on the same network show up in the list on their own.',
  'features.resume.title': 'Picks up where it left off.',
  'features.resume.body':
    'An interrupted transfer can pick up from where it stopped instead of starting over.',
  'features.resume.status': 'Resuming from 64%',
  'features.folders.title': 'Whole folders.',
  'features.folders.body': 'Send many files, or entire folders, in one go.',
  'features.encryption.title': 'Encrypted contents.',
  'features.encryption.body':
    'File contents travel encrypted with keys created fresh for each connection.',
  'features.noAccount.title': 'No account.',
  'features.noAccount.body':
    'No sign-up, no sign-in. Files go device to device without passing through a cloud.',
  'features.pairing.title': 'Pair with a QR code.',
  'features.pairing.body': 'Connect devices with a QR code and keep them as trusted devices.',
  'features.history.title': 'A history you can search.',
  'features.history.body':
    'Find what you sent, to whom, and when in your transfer history. It stays after you restart the app.',
  'features.i18n.title': 'Korean and English.',
  'features.i18n.body': 'The app and this page both speak both languages.',

  'download.title': 'Download AirPass',
  'download.subtitle': 'Installers for Mac, Windows, and Linux.',
  'download.version': 'Version',
  'download.soon': 'Coming soon',
  'download.unavailable':
    'The first release is on its way. Once it’s out, you can download it right here.',
  'download.releasesLink': 'View the releases page',
  'download.mac.arm64': 'macOS (Apple Silicon)',
  'download.mac.x64': 'macOS (Intel)',
  'download.win': 'Windows',
  'download.linux.appimage': 'Linux (AppImage)',
  'download.linux.deb': 'Linux (.deb)',

  'faq.title': 'Frequently asked questions',
  'faq.internet.q': 'Do I need an internet connection?',
  'faq.internet.a':
    'No. Both devices only need to be on the same network. Files never travel over the internet.',
  'faq.os.q': 'Which operating systems are supported?',
  'faq.os.a': 'Windows, macOS, and Linux desktops.',
  'faq.firewall.q': "I can't see the other device.",
  'faq.firewall.a':
    'Check that both devices are on the same network and that a firewall is not blocking AirPass. Guest networks and Wi-Fi with client isolation prevent devices from finding each other.',
  'faq.encryption.q': 'Are transfers encrypted?',
  'faq.encryption.a':
    "File contents are encrypted with keys created fresh for each connection, so someone watching the network can't read them. File names and sizes are not encrypted yet, and the other device's identity is not verified yet, so please use AirPass on networks you trust.",
  'faq.mobile.q': 'Is there a mobile app?',
  'faq.mobile.a': 'Not yet. It is planned.',

  'footer.trademark':
    'AirDrop is a trademark of Apple Inc. Quick Share is a trademark of Google LLC. AirPass is not affiliated with either company.',
  'footer.license': 'All rights reserved.',
  'footer.version': 'Current version'
}
