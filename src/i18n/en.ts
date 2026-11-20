import type { ko } from './ko'

export const en: Record<keyof typeof ko, string> = {
  'nav.download': 'Download',

  'hero.title': 'File transfer across devices on your Wi-Fi',
  'hero.subtitle':
    'No IP addresses to type. Open the app and nearby devices appear — send a file in one click.',
  'hero.cta.all': 'See all platforms',

  'how.title': 'How it works',
  'how.step1.title': 'Open the app',
  'how.step1.body': 'Run AirPass on both the sending and receiving device.',
  'how.step2.title': 'Devices appear',
  'how.step2.body': 'Devices on the same network show up in a list. Nothing to look up.',
  'how.step3.title': 'Send',
  'how.step3.body': 'Drop your files in, pick a device, done.',

  'features.title': 'Features',
  'features.discovery.title': 'Automatic discovery',
  'features.discovery.body': 'Finds devices on your network by itself, over mDNS.',
  'features.crossplatform.title': 'Cross-platform',
  'features.crossplatform.body': 'Send between Windows, macOS, and Linux.',
  'features.history.title': 'Transfer history',
  'features.history.body': 'Past transfers are kept; interrupted ones can resume or be cancelled.',
  'features.pairing.title': 'QR pairing',
  'features.pairing.body': 'Pair devices by QR code and save them as trusted.',
  'features.local.title': 'No server in between',
  'features.local.body':
    'Files move directly between devices on your own network. No account, no cloud.',
  'features.i18n.title': 'Korean · English',
  'features.i18n.body': 'Both the app and this page ship in two languages.',

  'download.title': 'Download',
  'download.version': 'Version',
  'download.soon': 'Coming soon',
  'download.unavailable': 'No installer has been published yet.',
  'download.releasesLink': 'Check GitHub Releases',
  'download.mac.arm64': 'macOS (Apple Silicon)',
  'download.mac.x64': 'macOS (Intel)',
  'download.win': 'Windows',
  'download.linux.appimage': 'Linux (AppImage)',
  'download.linux.deb': 'Linux (.deb)',

  'faq.title': 'FAQ',
  'faq.internet.q': 'Do I need an internet connection?',
  'faq.internet.a':
    'No. The two devices just need to be on the same network. Files never travel over the internet.',
  'faq.os.q': 'Which operating systems are supported?',
  'faq.os.a': 'Windows, macOS, and Linux desktops.',
  'faq.mobile.q': 'Is there a mobile app?',
  'faq.mobile.a': 'Not yet. It is planned.',
  'faq.firewall.q': "I can't see the other device.",
  'faq.firewall.a':
    'Check that both devices are on the same network and that a firewall is not blocking AirPass. Guest networks and Wi-Fi with client isolation prevent devices from finding each other.',
  'faq.encryption.q': 'Are transfers encrypted?',
  'faq.encryption.a':
    "File contents are encrypted with keys created fresh for each connection, so someone watching the network can't read them. File names and sizes are not encrypted yet, and the other device's identity is not verified yet, so please use AirPass on networks you trust.",

  'footer.license': 'All rights reserved.',
  'footer.version': 'Current version'
}
