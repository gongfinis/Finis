import folderImg from "@/imports/image-6.png"

type FolderSize = "sm" | "md" | "lg"

interface FolderIconProps {
  label: string
  size?: FolderSize
  rotation?: number
  onClick?: () => void
  style?: React.CSSProperties
}

const sizes: Record<FolderSize, number> = { sm: 72, md: 100, lg: 130 }

export default function FolderIcon({ label, size = "md", rotation = 0, onClick, style }: FolderIconProps) {
  const w = sizes[size]

  return (
    <div
      onClick={onClick}
      style={{ transform: `rotate(${rotation}deg)`, cursor: "pointer", ...style }}
      className="flex flex-col items-center gap-1 select-none group"
    >
      <img
        src={folderImg}
        alt={label}
        draggable={false}
        style={{
          position: "static",
          width: w,
          height: "auto",
          display: "block",
          filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.18))",
          transition: "transform 0.15s ease, filter 0.15s ease",
        }}
        className="group-hover:scale-110"
      />
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: size === "lg" ? "0.85rem" : "0.75rem",
          fontWeight: 600,
          color: "var(--ink)",
          textShadow: "0 1px 3px rgba(255,255,255,0.9)",
          transform: `rotate(${-rotation}deg)`,
          display: "block",
          textAlign: "center",
          marginTop: 4,
        }}
      >
        {label}
      </span>
    </div>
  )
}
