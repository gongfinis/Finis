import { useState } from "react"
import imgLaunchpad from "@/imports/image.png"
import imgContacts from "@/imports/image-1.png"
import imgMessages from "@/imports/image-2.png"
import imgNotes from "@/imports/image-3.png"
import imgMail from "@/imports/image-4.png"
import imgTrash from "@/imports/image-5.png"

export type DockAction = "launchpad" | "contacts" | "messages" | "notes" | "mail" | "trash"

interface MacDockProps {
  onAction: (action: DockAction) => void
}

const apps = [
  { id: "launchpad" as DockAction, name: "启动台", src: imgLaunchpad },
  { id: "contacts" as DockAction, name: "通讯录", src: imgContacts },
  { id: "messages" as DockAction, name: "信息", src: imgMessages },
  { id: "notes" as DockAction, name: "备忘录", src: imgNotes },
  { id: "mail" as DockAction, name: "邮件", src: imgMail },
  { id: "trash" as DockAction, name: "废纸篓", src: imgTrash },
]

const BASE = 52   // base icon size px
const MAX_SCALE = 1.7
const MID_SCALE = 1.3

export default function MacDock({ onAction }: MacDockProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  // Compute scale + lateral shift for each icon to avoid overlap
  function getStyle(i: number) {
    if (hovered === null) return { scale: 1, tx: 0 }
    const dist = i - hovered
    if (dist === 0) return { scale: MAX_SCALE, tx: 0 }
    if (Math.abs(dist) === 1) return { scale: MID_SCALE, tx: 0 }
    return { scale: 1, tx: 0 }
  }

  // How much extra width each icon takes due to magnification
  function extraWidth(scale: number) {
    return (scale - 1) * BASE
  }

  // Shift each icon laterally so hovered one doesn't overlap neighbors
  function translateX(i: number): number {
    if (hovered === null) return 0
    const hoveredExtra = extraWidth(MAX_SCALE)   // e.g. 36.4px total, 18.2 each side
    const midExtra = extraWidth(MID_SCALE)        // e.g. 15.6px total, 7.8 each side

    if (i < hovered) {
      // push left: hovered icon's left half expansion + neighbor's right half expansion
      if (i === hovered - 1) return -(hoveredExtra / 2 + midExtra / 2)
      return -(hoveredExtra / 2 + midExtra)
    }
    if (i > hovered) {
      if (i === hovered + 1) return (hoveredExtra / 2 + midExtra / 2)
      return (hoveredExtra / 2 + midExtra)
    }
    return 0
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        background: "rgba(255,255,255,0.68)",
        backdropFilter: "blur(30px) saturate(200%)",
        WebkitBackdropFilter: "blur(30px) saturate(200%)",
        borderRadius: 20,
        border: "1px solid rgba(0,0,0,0.10)",
        boxShadow: "0 2px 24px rgba(0,0,0,0.14), inset 0 0 0 0.5px rgba(255,255,255,0.5)",
        padding: "8px 12px",
        display: "flex",
        alignItems: "flex-end",
        gap: 6,
      }}
    >
      {apps.map((app, i) => {
        const { scale } = getStyle(i)
        const tx = translateX(i)
        const size = BASE * scale
        const translateY = scale > 1 ? -(size - BASE) : 0

        return (
          <div
            key={app.id}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onAction(app.id)}
            title={app.name}
            style={{
              width: BASE,
              height: BASE,
              flexShrink: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `translateX(${tx}px) translateY(${translateY}px) scale(${scale})`,
              transition: "transform 0.18s cubic-bezier(0.34,1.56,0.64,1)",
              transformOrigin: "bottom center",
              zIndex: scale > 1 ? 2 : 1,
              position: "relative",
            }}
          >
            <img
              src={app.src}
              alt={app.name}
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 12, display: "block" }}
              draggable={false}
            />
          </div>
        )
      })}
    </div>
  )
}
