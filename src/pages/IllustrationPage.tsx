import MacNavBar from "../components/MacNavBar"
import MacDock from "../components/MacDock"

interface PageProps {
  onNavigate: (page: string) => void
}

const projects = [
  {
    title: "Character Illustration Series",
    desc: "A set of ten character portraits exploring cultural identity through illustration.",
    img: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Editorial Illustrations",
    desc: "Full-spread illustrations for a quarterly magazine on technology culture.",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Digital Collage",
    desc: "Mixed media digital collage exploring themes of urban nature overlap.",
    img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Icon Library",
    desc: "A 200-icon set designed for a productivity software platform.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Children's Book",
    desc: "Full illustration and layout for a 32-page picture book.",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Mural Design",
    desc: "Commissioned mural artwork for a 12-meter wall in a creative coworking space.",
    img: "https://images.unsplash.com/photo-1551913902-c92207136625?w=600&h=400&fit=crop&auto=format",
  },
]

export default function IllustrationPage({ onNavigate }: PageProps) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--parchment)", paddingTop: 44, paddingBottom: 120 }}>
      <MacNavBar activePage="illustration" onNavigate={onNavigate} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 32px 0" }}>
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
          Illustration
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
          Digital and print illustration work
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>

      <MacDock onAction={() => {}} />
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
        <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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
