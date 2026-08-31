import MacNavBar from "../components/MacNavBar"

interface PageProps {
  onNavigate: (page: string) => void
}

const projects = [
  {
    title: "Neovia Brand System",
    desc: "Complete brand identity including logomark, wordmark, and visual language.",
    img: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Retail Brand Launch",
    desc: "Identity system and in-store experience for a lifestyle boutique.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Startup Visual Identity",
    desc: "Logo design and brand guidelines for a SaaS productivity tool.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Event Branding",
    desc: "Visual identity and collateral for an international design conference.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Restaurant Brand",
    desc: "Name, logo, menu design, and environmental graphics for a modern bistro.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "NGO Rebranding",
    desc: "Refreshed identity for a climate-focused nonprofit, accessible and bold.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&auto=format",
  },
]

export default function BrandingPage({ onNavigate }: PageProps) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--parchment)", paddingTop: 44, paddingBottom: 80 }}>
      <MacNavBar activePage="branding" onNavigate={onNavigate} navBg="var(--parchment)" />

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
          Branding
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
          Identity systems and brand strategy
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
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
