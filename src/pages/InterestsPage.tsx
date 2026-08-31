import MacNavBar from "../components/MacNavBar"
import { IconCamera, IconBasketball, IconDrum } from "../components/Icons"
import basketballImg from "../../interest-basketball.jpg"
import climbingImg from "../../interest-climbing.jpg"
import drumImg from "../../interest-drum.jpg"
import photoImg from "../../photo-1.jpg"

interface PageProps { onNavigate: (page: string) => void }

function IconMountain({ size = 24, color = "currentColor", strokeWidth = 1.5 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20l6-11 4 6 2.5-4L21 20z" />
      <path d="M3 20h18" />
    </svg>
  )
}

const interests = [
  {
    icon: <IconCamera size={20} strokeWidth={1.6} />,
    title: "摄影",
    sub: "视觉表达",
    desc: "热爱摄影与视频拍摄，具备良好的审美能力。在嘉人担任运营期间独立完成视频创意策划与拍摄执行，单条视频获 5w+ 点赞。",
    img: photoImg,
    color: "#0ea5e9",
    rot: -4, oy: -6,
  },
  {
    icon: <IconBasketball size={20} strokeWidth={1.6} />,
    title: "篮球",
    sub: "前女篮队长",
    desc: "本科四年坚持每周篮球训练，担任女子篮球队队长，带队荣获女子篮球比赛冠军。篮球教会了我团队协作和领导力。",
    img: basketballImg,
    color: "#ff8c00",
    rot: 3, oy: 8,
  },
  {
    icon: <IconMountain size={20} strokeWidth={1.6} />,
    title: "攀岩",
    sub: "向上攀登",
    desc: "攀岩让我学会在垂直的岩壁上寻找路径——专注、冷静、不放弃。和做产品一样，每一步都在拆解问题。",
    img: climbingImg,
    color: "#10b981",
    rot: -3, oy: -4,
  },
  {
    icon: <IconDrum size={20} strokeWidth={1.6} />,
    title: "架子鼓",
    sub: "节奏控",
    desc: "打鼓让我在快节奏的产品工作之外找到另一种专注状态。节奏感不只属于音乐，也属于产品迭代。",
    img: drumImg,
    color: "#ef4444",
    rot: 4, oy: 6,
  },
]

export default function InterestsPage({ onNavigate }: PageProps) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--parchment)", paddingBottom: 100 }}>
      <MacNavBar activePage="interests" onNavigate={onNavigate} navBg="var(--parchment)" />

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "80px 32px 0" }}>
        <button onClick={() => onNavigate("home")} style={backBtn}>← Portfolio</button>

        <p style={eyebrow}>BEYOND WORK</p>
        <h1 style={display}>兴趣爱好</h1>
        <p style={{ ...muted, marginBottom: 48 }}>生活不只有工作，这些是让我充电的地方</p>

        {/* Folder as base */}
        <div style={{ position: "relative", marginTop: 8 }}>
          {/* Tab */}
          <div style={folderTab}>
            <span style={folderTabLabel}>INTERESTS</span>
            <span style={folderTabCount}>4 items</span>
          </div>

          {/* Body */}
          <div style={folderBody}>
            <div style={cardRow}>
              {interests.map((it) => (
                <div
                  key={it.title}
                  className="interest-card"
                  style={{
                    ["--rot" as string]: `${it.rot}deg`,
                    ["--oy" as string]: `${it.oy}px`,
                    width: 190,
                    aspectRatio: "3 / 4",
                    borderRadius: 14,
                    overflow: "hidden",
                    position: "relative",
                    background: "white",
                    border: "2px solid white",
                  } as React.CSSProperties}
                >
                  <img
                    src={it.img}
                    alt={it.title}
                    draggable={false}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />

                  {/* Hover description overlay */}
                  <div className="interest-desc" style={descOverlay}>
                    <p style={descText}>{it.desc}</p>
                  </div>

                  {/* Bottom gradient for label legibility */}
                  <div style={bottomShade} />

                  {/* Icon badge */}
                  <div style={{ ...iconBadge, color: it.color }}>{it.icon}</div>

                  {/* Title + sub label */}
                  <div style={cardLabel}>
                    <div style={cardTitle}>{it.title}</div>
                    <div style={cardSub}>{it.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const backBtn: React.CSSProperties = {
  background: "none", border: "none",
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 14, color: "var(--blue)", cursor: "pointer",
  padding: 0, marginBottom: 36,
}
const display: React.CSSProperties = {
  fontFamily: "'Anton', system-ui, sans-serif",
  fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
  color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1, margin: "0 0 10px",
}
const muted: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif", fontSize: 17, fontWeight: 300, color: "var(--muted)",
}
const eyebrow: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 700,
  color: "var(--blue)", letterSpacing: "0.1em", margin: "0 0 8px",
  textTransform: "uppercase",
}

const folderTab: React.CSSProperties = {
  width: "42%", minWidth: 220, height: 38,
  background: "linear-gradient(180deg, #7DB8EA 0%, #5A9CE0 100%)",
  borderRadius: "14px 14px 0 0",
  marginLeft: 36,
  position: "relative", zIndex: 2,
  border: "1px solid rgba(255,255,255,0.3)", borderBottom: "none",
  display: "flex", alignItems: "center", justifyContent: "space-between",
  padding: "0 18px",
}
const folderTabLabel: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 11, fontWeight: 700, color: "white", letterSpacing: "0.14em",
}
const folderTabCount: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,0.85)",
}
const folderBody: React.CSSProperties = {
  position: "relative",
  background: "linear-gradient(160deg, #6FB3E8 0%, #4A9BE0 55%, #2E7BD0 100%)",
  borderRadius: "0 20px 20px 20px",
  padding: "60px 44px 64px",
  boxShadow: "0 28px 64px rgba(0,80,180,0.30), inset 0 1px 0 rgba(255,255,255,0.4)",
  border: "1px solid rgba(255,255,255,0.3)", borderTop: "none",
  overflow: "visible",
}
const cardRow: React.CSSProperties = {
  display: "flex", flexWrap: "wrap",
  justifyContent: "center", alignItems: "center",
  gap: 30,
}

const descOverlay: React.CSSProperties = {
  position: "absolute", inset: 0,
  background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.78) 100%)",
  display: "flex", alignItems: "center", justifyContent: "center",
  padding: 18,
}
const descText: React.CSSProperties = {
  color: "white",
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 12.5, lineHeight: 1.6, textAlign: "center", margin: 0,
}
const bottomShade: React.CSSProperties = {
  position: "absolute", left: 0, right: 0, bottom: 0, height: "46%",
  background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.72) 100%)",
  pointerEvents: "none",
}
const iconBadge: React.CSSProperties = {
  position: "absolute", top: 12, left: 12,
  width: 34, height: 34, borderRadius: 10,
  background: "rgba(255,255,255,0.92)",
  display: "flex", alignItems: "center", justifyContent: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  zIndex: 3,
}
const cardLabel: React.CSSProperties = {
  position: "absolute", left: 14, right: 14, bottom: 14, zIndex: 2,
}
const cardTitle: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 15, fontWeight: 700, color: "white",
  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
}
const cardSub: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 11, fontWeight: 600, color: "white", opacity: 0.9, marginTop: 2,
}
