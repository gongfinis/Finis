import { useState } from "react"
import photo1 from "@/imports/ChatGPT_Image_2026_8_27__23_11_53.png"
import photo2 from "@/imports/ChatGPT_Image_2026_8_27__23_11_53-1.png"
import photo3 from "@/imports/ChatGPT_Image_2026_8_27__23_11_53-2.png"
import FolderIcon from "../components/FolderIcon"
import MacDock, { type DockAction } from "../components/MacDock"
import MacNavBar from "../components/MacNavBar"
import {
  LaunchpadModal, ContactsModal, MessagesModal,
  NotesModal, MailModal, TrashModal,
} from "../components/DockModals"

interface HomePageProps {
  onNavigate: (page: string) => void
}

const folders = [
  { label: "关于我", page: "about", size: "lg" as const, rotation: -7, top: "10%", left: "7%" },
  { label: "工作项目", page: "projects", size: "md" as const, rotation: 5, top: "8%", left: "55%" },
  { label: "设计", page: "design", size: "sm" as const, rotation: -4, top: "7%", left: "80%" },
  { label: "Vibe Coding", page: "vibe", size: "md" as const, rotation: 3, top: "55%", left: "10%" },
  { label: "兴趣爱好", page: "interests", size: "lg" as const, rotation: -2, top: "56%", left: "72%" },
]

// Circular photo overlays on PORTFOLIO letters
const photoOverlays = [
  { src: photo1, top: 55, left: 122, width: 110, height: 110 },
  { src: photo2, top: 50, left: 463, width: 147, height: 155 },
  { src: photo3, top: 51, left: 673, width: 117, height: 117 },
]

export default function HomePage({ onNavigate }: HomePageProps) {
  const [modal, setModal] = useState<DockAction | null>(null)

  return (
    <div style={{ minHeight: "100vh", background: "var(--canvas)", position: "relative", overflow: "hidden" }}>
      <MacNavBar activePage="home" onNavigate={onNavigate} />

      {/* Scattered folders */}
      {folders.map((f, i) => (
        <div key={i} style={{ position: "absolute", top: f.top, left: f.left, zIndex: 10 }}>
          <FolderIcon
            label={f.label}
            size={f.size}
            rotation={f.rotation}
            onClick={() => onNavigate(f.page)}
          />
        </div>
      ))}

      {/* PORTFOLIO hero */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center", zIndex: 5,
        pointerEvents: "none", width: "100%", padding: "0 20px",
      }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <h1 style={{
            fontFamily: "'Atma', system-ui, sans-serif",
            fontSize: 130,
            fontWeight: 700,
            color: "var(--ink)",
            letterSpacing: "14px",
            lineHeight: 1,
            margin: 0,
            userSelect: "none",
          }}>
            PORTFOLIO
          </h1>

          {/* Circular photo overlays */}
          {photoOverlays.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt=""
              style={{
                position: "absolute",
                borderRadius: "50%",
                objectFit: "cover",
                border: "none",
                boxShadow: "none",
                top: p.top,
                left: p.left,
                width: p.width,
                height: p.height,
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            />
          ))}
        </div>

        <p style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "clamp(18px, 3vw, 44px)",
          fontWeight: 300,
          color: "var(--ink)",
          letterSpacing: "0.06em",
          margin: "10px 0 14px",
          lineHeight: 1.2,
        }}>
          graphic design · AI product · vibe coding
        </p>

        <p style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "clamp(13px, 1.3vw, 17px)",
          fontWeight: 400, color: "var(--ink)", margin: 0, opacity: 0.8,
        }}>
          by{" "}
          <span style={{ borderBottom: "2px solid var(--blue)", paddingBottom: 1, color: "var(--blue)" }}>
            龚小菲 · Finis
          </span>
        </p>
      </div>

      {/* Dock */}
      <MacDock onAction={(a) => setModal(a)} />

      {/* Modals */}
      {modal === "launchpad" && <LaunchpadModal onClose={() => setModal(null)} />}
      {modal === "contacts" && <ContactsModal onClose={() => setModal(null)} />}
      {modal === "messages" && <MessagesModal onClose={() => setModal(null)} />}
      {modal === "notes" && <NotesModal onClose={() => setModal(null)} />}
      {modal === "mail" && <MailModal onClose={() => setModal(null)} />}
      {modal === "trash" && <TrashModal onClose={() => setModal(null)} />}
    </div>
  )
}
