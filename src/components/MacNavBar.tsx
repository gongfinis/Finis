interface MacNavBarProps {
  activePage: string
  onNavigate: (page: string) => void
  navBg?: string
  navTextColor?: string
}

const links = [
  { key: "about", label: "关于我" },
  { key: "projects", label: "工作项目" },
  { key: "design", label: "设计" },
  { key: "vibe", label: "Vibe Coding" },
  { key: "interests", label: "兴趣爱好" },
]

export default function MacNavBar({ activePage, onNavigate, navBg, navTextColor }: MacNavBarProps) {
  const textColor = navTextColor ?? "var(--ink)"
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 44,
        background: navBg ?? "var(--parchment)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      {/* Portfolio brand */}
      {/* using <button> instead of kit Button: kit Button is not used for plain text nav links in this macOS-style nav bar */}
      <button
        onClick={() => onNavigate("home")}
        style={{
          background: "none", border: "none",
          color: textColor,
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 13, fontWeight: activePage === "home" ? 700 : 600,
          letterSpacing: "-0.12px", cursor: "pointer",
          padding: "0 14px 0 0",
        }}
      >
        Portfolio
      </button>

      {/* Separator */}
      <div style={{ width: 1, height: 16, background: navTextColor ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)", marginRight: 14 }} />

      {/* Nav links */}
      {links.map((link) => (
        <button
          key={link.key}
          onClick={() => onNavigate(link.key)}
          style={{
            background: "none", border: "none",
            color: textColor,
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 12, fontWeight: 400,
            letterSpacing: "-0.12px", cursor: "pointer",
            padding: "0 10px",
            opacity: activePage === link.key ? 1 : 0.55,
            position: "relative",
          }}
        >
          {link.label}
          {activePage === link.key && (
            <span style={{
              position: "absolute", bottom: -12, left: "50%",
              transform: "translateX(-50%)",
              width: 4, height: 4, borderRadius: "50%",
              background: "var(--blue)",
            }} />
          )}
        </button>
      ))}

      <div style={{ flex: 1 }} />

      <span style={{ color: textColor, fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, opacity: 0.4, letterSpacing: "-0.12px" }}>
        © 2026 Finis
      </span>
    </nav>
  )
}
