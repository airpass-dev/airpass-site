export default function BrandLogo({ size = 96 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.22,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: `0 ${Math.round(size * 0.08)}px ${Math.round(size * 0.25)}px rgba(102, 126, 234, 0.35)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      role="img"
      aria-label="AirPass"
    >
      <svg
        width={size * 0.62}
        height={size * 0.62}
        viewBox="0 0 64 64"
        fill="none"
        stroke="#fff"
        strokeWidth={5.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 56 L32 24 L49 56" />
        <path d="M21 45 H43" />
        <path d="M25 22 a7.5 7.5 0 0 1 14 0" />
        <path d="M17 20 a15 15 0 0 1 30 0" />
      </svg>
    </div>
  )
}
