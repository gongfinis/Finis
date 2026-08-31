// Clean line-art SVG icons following the Apple SF Symbols style.
// All icons: 24×24 viewBox, 1.5px stroke, round caps/joins, no fill unless noted.

interface IconProps {
  size?: number
  color?: string
  strokeWidth?: number
}

const defaults = { size: 24, color: "currentColor", strokeWidth: 1.5 }

function base(props: IconProps) {
  return { ...defaults, ...props }
}

export function IconPerson({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" />
    </svg>
  )
}

export function IconGraduation({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L2 8l10 5 10-5-10-5z" />
      <path d="M6 10.5v5c0 2 2.686 3.5 6 3.5s6-1.5 6-3.5v-5" />
      <line x1="20" y1="8" x2="20" y2="15" />
    </svg>
  )
}

export function IconTrophy({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8M12 17v4" />
      <path d="M7 4H4v4c0 2.21 1.79 4 4 4" />
      <path d="M17 4h3v4c0 2.21-1.79 4-4 4" />
      <path d="M7 4h10v6a5 5 0 01-10 0V4z" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  )
}

export function IconTool({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

export function IconCart({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  )
}

export function IconChat({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}

export function IconFilm({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  )
}

export function IconStar({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function IconMic({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
    </svg>
  )
}

export function IconBarChart({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  )
}

export function IconBolt({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

export function IconClock({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function IconClipboard({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  )
}

export function IconBookmark({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
  )
}

export function IconCode({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

export function IconBasketball({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M4.93 4.93c4.47 4.47 4.47 11.67 0 16.14" />
      <path d="M19.07 4.93c-4.47 4.47-4.47 11.67 0 16.14" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  )
}

export function IconCamera({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

export function IconMusic({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

export function IconDrum({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="10" rx="10" ry="4" />
      <path d="M2 10v6c0 2.21 4.48 4 10 4s10-1.79 10-4v-6" />
      <line x1="8" y1="4" x2="4" y2="1" />
      <line x1="16" y1="4" x2="20" y2="1" />
    </svg>
  )
}

export function IconPalette({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="1" fill={p.color} stroke="none" />
      <circle cx="17.5" cy="10.5" r="1" fill={p.color} stroke="none" />
      <circle cx="8.5" cy="7.5" r="1" fill={p.color} stroke="none" />
      <circle cx="6.5" cy="12.5" r="1" fill={p.color} stroke="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.1 0 2-.9 2-2v-1c0-.55.45-1 1-1h1c2.76 0 5-2.24 5-5 0-5.52-4.03-9-9-9z" />
    </svg>
  )
}

export function IconMail({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export function IconPhone({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.1 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

export function IconMessageCircle({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  )
}

export function IconNote({ size, color, strokeWidth }: IconProps = {}) {
  const p = base({ size, color, strokeWidth })
  return (
    <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="12" y2="17" />
    </svg>
  )
}
