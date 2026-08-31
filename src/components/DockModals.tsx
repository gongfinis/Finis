import { useState, useRef } from "react"
import imgApps from "@/imports/___2.png"
import { IconPerson, IconMail, IconPhone, IconMessageCircle, IconNote } from "@/components/Icons"

// ── Shared backdrop ─────────────────────────────────────────────────────────
function Backdrop({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  )
}

function WindowChrome({ title, onClose, children, width = 640 }: {
  title: string; onClose: () => void; children: React.ReactNode; width?: number
}) {
  return (
    <div style={{
      width, maxWidth: "92vw", maxHeight: "85vh",
      background: "rgba(246,246,246,0.96)",
      backdropFilter: "blur(20px)",
      borderRadius: 14,
      boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
      overflow: "hidden",
      display: "flex", flexDirection: "column",
    }}>
      {/* Title bar */}
      <div style={{
        height: 40, background: "rgba(230,230,230,0.9)",
        display: "flex", alignItems: "center", padding: "0 14px",
        borderBottom: "1px solid rgba(0,0,0,0.08)", flexShrink: 0,
      }}>
        <button onClick={onClose} style={{
          width: 13, height: 13, borderRadius: "50%",
          background: "#ff5f57", border: "none", cursor: "pointer",
          marginRight: 7, flexShrink: 0,
        }} />
        <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#febc2e", marginRight: 7 }} />
        <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#28c840" }} />
        <span style={{
          flex: 1, textAlign: "center",
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 13, fontWeight: 500, color: "#3a3a3a", marginRight: 46,
        }}>{title}</span>
      </div>
      <div style={{ overflow: "auto", flex: 1 }}>{children}</div>
    </div>
  )
}

// ── Launchpad modal ─────────────────────────────────────────────────────────
export function LaunchpadModal({ onClose }: { onClose: () => void }) {
  return (
    <Backdrop onClose={onClose}>
      <WindowChrome title="应用程序" onClose={onClose} width={720}>
        <img src={imgApps} alt="应用程序" style={{ width: "100%", display: "block" }} />
      </WindowChrome>
    </Backdrop>
  )
}

// ── Contact info ─────────────────────────────────────────────────────────────
function ContactInfo() {
  const rows = [
    { label: "姓名", value: "龚小菲（Finis）" },
    { label: "电话", value: "18008199877" },
    { label: "邮箱", value: "386476092@qq.com" },
    { label: "微信", value: "gxf03079877" },
    { label: "学校", value: "浙江大学 · 软件学院" },
    { label: "专业", value: "工业设计工程（硕士）" },
  ]
  return (
    <div style={{ padding: 28 }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: "#f5f5f7", border: "1px solid #e0e0e0",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 20px", color: "#1d1d1f",
      }}>
        <IconPerson size={32} strokeWidth={1} />
      </div>
      {rows.map(({ label, value }) => (
        <div key={label} style={{
          display: "flex", gap: 16, padding: "10px 0",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}>
          <span style={{ width: 60, color: "#888", fontSize: 14, flexShrink: 0 }}>{label}</span>
          <span style={{ fontSize: 14, color: "#1d1d1f", fontWeight: 500 }}>{value}</span>
        </div>
      ))}
    </div>
  )
}

export function ContactsModal({ onClose }: { onClose: () => void }) {
  return (
    <Backdrop onClose={onClose}>
      <WindowChrome title="通讯录" onClose={onClose} width={400}>
        <ContactInfo />
      </WindowChrome>
    </Backdrop>
  )
}

export function MessagesModal({ onClose }: { onClose: () => void }) {
  return (
    <Backdrop onClose={onClose}>
      <WindowChrome title="联系方式" onClose={onClose} width={400}>
        <ContactInfo />
      </WindowChrome>
    </Backdrop>
  )
}

export function MailModal({ onClose }: { onClose: () => void }) {
  return (
    <Backdrop onClose={onClose}>
      <WindowChrome title="发送邮件" onClose={onClose} width={440}>
        <div style={{ padding: 28, fontFamily: "'Inter', system-ui, sans-serif" }}>
          <p style={{ fontSize: 15, color: "#555", marginBottom: 24, lineHeight: 1.6 }}>
            欢迎通过以下方式联系我
          </p>
          {[
            { icon: <IconMail size={20} color="#0066cc" strokeWidth={1.5} />, label: "邮箱", val: "386476092@qq.com" },
            { icon: <IconPhone size={20} color="#0066cc" strokeWidth={1.5} />, label: "电话", val: "18008199877" },
            { icon: <IconMessageCircle size={20} color="#0066cc" strokeWidth={1.5} />, label: "微信", val: "gxf03079877" },
          ].map(({ icon, label, val }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "12px 16px", marginBottom: 10,
              background: "white", borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}>
              <span style={{ display: "flex" }}>{icon}</span>
              <div>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f" }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
      </WindowChrome>
    </Backdrop>
  )
}

// ── Notes / Guestbook ────────────────────────────────────────────────────────
interface GuestMessage { id: number; name: string; text: string; time: string }

const INITIAL_MESSAGES: GuestMessage[] = [
  { id: 1, name: "Emma", text: "Finis 是个非常有创意、执行力超强的同学，一起做项目很愉快！", time: "2026-07-12" },
  { id: 2, name: "Alex", text: "看了你的 vibe coding 项目，真的很厉害，期待合作！", time: "2026-08-01" },
  { id: 3, name: "Lily", text: "篮球队的小菲姐永远是最努力的那个，带队拿冠军那天真的太燃了。", time: "2026-08-15" },
]

export function NotesModal({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<GuestMessage[]>(INITIAL_MESSAGES)
  const [name, setName] = useState("")
  const [text, setText] = useState("")

  function submit() {
    if (!text.trim()) return
    const now = new Date()
    const time = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
    setMessages((prev) => [...prev, { id: Date.now(), name: name.trim() || "匿名", text: text.trim(), time }])
    setName("")
    setText("")
  }

  return (
    <Backdrop onClose={onClose}>
      <WindowChrome title="留言板" onClose={onClose} width={500}>
        <div style={{ padding: "20px 24px 24px", fontFamily: "'Inter', system-ui, sans-serif" }}>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 18 }}>
            来给 Finis 留下你的评价或建议吧
          </p>

          {/* Messages list */}
          <div style={{ marginBottom: 20, maxHeight: 280, overflowY: "auto" }}>
            {messages.map((m) => (
              <div key={m.id} style={{
                background: "#fffde7", borderRadius: 10, padding: "12px 14px",
                marginBottom: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                borderLeft: "3px solid #f9c12e",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontWeight: 600, fontSize: 13, color: "#333" }}>{m.name}</span>
                  <span style={{ fontSize: 11, color: "#aaa" }}>{m.time}</span>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: "#444", lineHeight: 1.6 }}>{m.text}</p>
              </div>
            ))}
          </div>

          {/* Input form */}
          <div style={{
            background: "white", borderRadius: 10, padding: 16,
            border: "1px solid rgba(0,0,0,0.08)",
          }}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="你的名字（可选）"
              style={{
                width: "100%", border: "none", outline: "none",
                borderBottom: "1px solid #e8e8e8",
                padding: "6px 0", marginBottom: 10,
                fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: "#333",
                background: "transparent",
              }}
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="写下你想说的话..."
              rows={3}
              style={{
                width: "100%", border: "none", outline: "none", resize: "none",
                fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: "#333",
                background: "transparent", lineHeight: 1.6,
              }}
            />
            <div style={{ textAlign: "right", marginTop: 8 }}>
              <button
                onClick={submit}
                style={{
                  background: "var(--blue)", color: "white",
                  border: "none", borderRadius: 20, padding: "7px 20px",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 13, fontWeight: 600, cursor: "pointer",
                }}
              >
                发送
              </button>
            </div>
          </div>
        </div>
      </WindowChrome>
    </Backdrop>
  )
}

// ── Trash / 碎碎念 canvas ────────────────────────────────────────────────────
interface StickyNote { id: number; text: string; color: string; x: number; y: number; rotate: number }

const MUSINGS: StickyNote[] = [
  { id: 1, text: "为什么产品经理要懂代码？\n因为不懂的时候你永远不知道「简单」有多复杂 😅", color: "#fff9c4", x: 40, y: 60, rotate: -2 },
  { id: 2, text: "今天用 vibe coding 两小时做完了\n以前需要三天的需求文档", color: "#c8e6c9", x: 280, y: 40, rotate: 3 },
  { id: 3, text: "设计的本质是解决问题\n而不是让东西「看起来好看」", color: "#fce4ec", x: 520, y: 80, rotate: -1 },
  { id: 4, text: "今日咖啡 ☕ × 3\n明日 deadline × 5", color: "#e3f2fd", x: 100, y: 240, rotate: 2 },
  { id: 5, text: "打完篮球发现\n原来运动才是最好的产品思维", color: "#f3e5f5", x: 360, y: 220, rotate: -3 },
  { id: 6, text: "AI 会取代 PM 吗？\n不会，但不懂 AI 的 PM 会被懂 AI 的 PM 取代", color: "#fff3e0", x: 580, y: 230, rotate: 1 },
  { id: 7, text: "在杭州的第一年 🍂\n雨很多，但好像习惯了", color: "#e8f5e9", x: 180, y: 380, rotate: -2 },
  { id: 8, text: "想做的事太多\n时间太少\n但还是要一件一件来 ✨", color: "#fff9c4", x: 460, y: 370, rotate: 2 },
]

export function TrashModal({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLDivElement>(null)

  return (
    <Backdrop onClose={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(820px, 94vw)", height: "min(560px, 88vh)",
          background: "rgba(245,245,245,0.97)",
          backdropFilter: "blur(20px)",
          borderRadius: 14,
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}
      >
        {/* Title bar */}
        <div style={{
          height: 40, background: "rgba(230,230,230,0.9)",
          display: "flex", alignItems: "center", padding: "0 14px",
          borderBottom: "1px solid rgba(0,0,0,0.08)", flexShrink: 0,
        }}>
          <button onClick={onClose} style={{
            width: 13, height: 13, borderRadius: "50%",
            background: "#ff5f57", border: "none", cursor: "pointer", marginRight: 7,
          }} />
          <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#febc2e", marginRight: 7 }} />
          <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#28c840" }} />
          <span style={{
            flex: 1, textAlign: "center",
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 13, fontWeight: 500, color: "#3a3a3a", marginRight: 46,
          }}>碎碎念 · 画布</span>
        </div>

        {/* Canvas area */}
        <div
          ref={canvasRef}
          style={{
            flex: 1, overflow: "auto", position: "relative",
            background: "repeating-linear-gradient(0deg, transparent, transparent 27px, #e0e0e0 27px, #e0e0e0 28px), repeating-linear-gradient(90deg, transparent, transparent 27px, #e0e0e0 27px, #e0e0e0 28px)",
            backgroundSize: "28px 28px",
            backgroundColor: "#f8f8f8",
          }}
        >
          <div style={{ position: "relative", width: 820, height: 500 }}>
            {MUSINGS.map((note) => (
              <div
                key={note.id}
                style={{
                  position: "absolute",
                  left: note.x, top: note.y,
                  width: 180, minHeight: 90,
                  background: note.color,
                  borderRadius: 6,
                  padding: "12px 14px",
                  boxShadow: "2px 4px 12px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)",
                  transform: `rotate(${note.rotate}deg)`,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 13, color: "#333", lineHeight: 1.65,
                  whiteSpace: "pre-line",
                  cursor: "default",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.transform = `rotate(${note.rotate}deg) scale(1.05)`
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = "4px 8px 24px rgba(0,0,0,0.18)"
                  ;(e.currentTarget as HTMLDivElement).style.zIndex = "10"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.transform = `rotate(${note.rotate}deg) scale(1)`
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = "2px 4px 12px rgba(0,0,0,0.12)"
                  ;(e.currentTarget as HTMLDivElement).style.zIndex = "1"
                }}
              >
                {note.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Backdrop>
  )
}
