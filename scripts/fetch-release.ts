import { mkdir, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildRelease, EMPTY_RELEASE } from '../src/lib/assets'

const REPO = 'airpass-dev/airpass-site'
const OUT = fileURLToPath(new URL('../src/generated/release.json', import.meta.url))

async function fetchLatest() {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers })

  // 404 is the normal state before the first release exists.
  if (res.status === 404) return EMPTY_RELEASE
  if (!res.ok) throw new Error(`GitHub API responded ${res.status}`)

  return buildRelease(await res.json())
}

async function main() {
  let release = EMPTY_RELEASE
  try {
    release = await fetchLatest()
  } catch (err) {
    console.warn(
      `[fetch-release] falling back to empty release: ${(err as Error).message}`
    )
  }

  await mkdir(dirname(OUT), { recursive: true })
  await writeFile(OUT, `${JSON.stringify(release, null, 2)}\n`)

  console.log(
    release.available
      ? `[fetch-release] ${release.version} — ${release.assets.length} installer(s)`
      : '[fetch-release] no release available; page will link to GitHub Releases'
  )
}

await main()
