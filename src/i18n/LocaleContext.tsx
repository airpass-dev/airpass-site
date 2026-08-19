import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { ko } from './ko'
import { en } from './en'

export type Locale = 'ko' | 'en'
export type MessageKey = keyof typeof ko

const CATALOGS = { ko, en } as const
const STORAGE_KEY = 'airpass-site-locale'

function initialLocale(): Locale {
  if (typeof window === 'undefined') return 'ko'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'ko' || saved === 'en') return saved
  } catch {
    // localStorage can throw (e.g. SecurityError when a visitor blocks all
    // cookies/site data). Fall through to language detection.
  }
  return navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en'
}

interface LocaleValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: MessageKey) => string
}

const Ctx = createContext<LocaleValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // Same SecurityError as above — the UI still works without persistence.
    }
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((l: Locale) => setLocaleState(l), [])
  const t = useCallback((key: MessageKey) => CATALOGS[locale][key], [locale])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useLocale(): LocaleValue {
  const value = useContext(Ctx)
  if (!value) throw new Error('useLocale must be used inside LocaleProvider')
  return value
}
