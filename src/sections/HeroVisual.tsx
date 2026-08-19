/**
 * Placeholder hero visual: two devices with a transfer arc between them.
 * Replace with a real app screenshot when one is available — keep the
 * outer <div className="hero-visual"> so the layout is unaffected.
 */
export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <svg viewBox="0 0 420 220" role="img" aria-label="Two devices transferring a file">
        <defs>
          <linearGradient id="hv-accent" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>

        <rect x="18" y="52" width="132" height="104" rx="10"
          fill="var(--surface-1)" stroke="var(--border-2)" />
        <rect x="18" y="52" width="132" height="18" rx="10" fill="var(--surface-2)" />

        <rect x="270" y="52" width="132" height="104" rx="10"
          fill="var(--surface-1)" stroke="var(--border-2)" />
        <rect x="270" y="52" width="132" height="18" rx="10" fill="var(--surface-2)" />

        <path d="M160 104 Q210 56 260 104" fill="none" stroke="url(#hv-accent)"
          strokeWidth="2.5" strokeDasharray="6 6" />
        <circle cx="210" cy="79" r="6" fill="url(#hv-accent)" />
        <path d="M252 98 l10 6 -10 6" fill="none" stroke="url(#hv-accent)"
          strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}
