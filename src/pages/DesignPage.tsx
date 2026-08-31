import MacNavBar from "../components/MacNavBar"

interface PageProps {
  onNavigate: (page: string) => void
}

const projects = [
  {
    title: "Brand Identity System",
    desc: "Visual identity, typography, and color system for a fintech startup.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Editorial Layout",
    desc: "Magazine spread design with bold typographic hierarchy.",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Poster Series",
    desc: "A three-part poster campaign for a contemporary art exhibition.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Packaging Design",
    desc: "Sustainable cosmetics packaging with a minimal aesthetic.",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "UI/UX Design",
    desc: "Mobile app design for a wellness and meditation platform.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Motion Design",
    desc: "Animated logo reveal and brand motion guidelines.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop&auto=format",
  },
]

export default function DesignPage({ onNavigate }: PageProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--parchment)",
        paddingTop: 44,
        paddingBottom: 80,
      }}
    >
      <MacNavBar activePage="design" onNavigate={onNavigate} navBg="var(--parchment)" />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 32px 0" }}>
        {/* Back link */}
        <button
          onClick={() => onNavigate("home")}
          style={{
            background: "none",
            border: "none",
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 14,
            color: "var(--blue)",
            cursor: "pointer",
            padding: 0,
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          ← Portfolio
        </button>

        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 700, color: "var(--blue)", letterSpacing: "0.1em", margin: "0 0 8px", textTransform: "uppercase" }}>DESIGN WORK</p>
        <h1
          style={{
            fontFamily: "'Anton', system-ui, sans-serif",
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 400,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            margin: "0 0 12px",
          }}
        >
          Design
        </h1>
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 17,
            fontWeight: 300,
            color: "var(--muted)",
            marginBottom: 56,
            letterSpacing: "-0.374px",
          }}
        >
          Selected graphic design projects
        </p>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>

    </div>
  )
}

function ProjectCard({ title, desc, img }: { title: string; desc: string; img: string }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid #e0e0e0",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = "none"
      }}
    >
      <div style={{ width: "100%", aspectRatio: "3/2", overflow: "hidden", background: "#f0f0f0" }}>
        <img
          src={img}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div style={{ padding: "20px 22px 22px" }}>
        <h3
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 17,
            fontWeight: 600,
            color: "var(--ink)",
            margin: "0 0 6px",
            letterSpacing: "-0.374px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 14,
            fontWeight: 400,
            color: "var(--muted)",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}
