import MacNavBar from "../components/MacNavBar"

interface PageProps { onNavigate: (page: string) => void }

const PAGE_BG = "var(--parchment)"

export default function AboutPage({ onNavigate }: PageProps) {
  return (
    <div style={{ minHeight: "100vh", background: PAGE_BG }}>
      <MacNavBar activePage="about" onNavigate={onNavigate} navBg={PAGE_BG} />

      {/* Page hero */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 40px 0" }}>
        {/* using <button> instead of kit Button: kit Button does not support plain text back-nav style */}
        <button onClick={() => onNavigate("home")} style={backBtn}>← Portfolio</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start", marginBottom: 80 }}>
          {/* Left: title block */}
          <div>
            <p style={eyebrow}>ABOUT ME</p>
            <h1 style={heroTitle}>龚小菲<br />Finis Gong</h1>
            <p style={heroSub}>AI Product · Design Engineering · Vibe Coding</p>
            <p style={{ ...bodyText, marginTop: 24, lineHeight: 1.8 }}>
              浙江大学软件学院工业设计工程硕士在读，专注于 AI 产品、设计工程与 vibe coding 的交叉地带。
              曾在京东、腾讯、爱奇艺担任 AI 产品经理，热爱用技术驱动创意。
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
              {["AI 产品", "Vibe Coding", "AIGC 创作", "设计工程", "内容运营"].map((tag) => (
                <span key={tag} style={chip}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right: key stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { num: "3", label: "大厂 AI PM 经历" },
              { num: "2", label: "A\'design Award" },
              { num: "5w+", label: "单条视频点赞" },
              { num: "985", label: "浙江大学在读" },
            ].map(({ num, label }) => (
              <div key={label} style={statCard}>
                <div style={statNum}>{num}</div>
                <div style={statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <Section title="教育经历" eyebrowText="EDUCATION">
          <EduCard
            school="浙江大学（985）"
            degree="硕士研究生 · 工业设计工程"
            period="2024.09 — 2027.06（预计）"
            college="软件学院"
            grades={[
              ["智能设计", "99"], ["设计研究新设计", "95"],
              ["整合与创新设计", "93"], ["设计工程学", "93"], ["产品创新与商业模式", "90"],
            ]}
            note="宣传部部长 | 公众号运营"
          />
          <EduCard
            school="四川农业大学（211）"
            degree="本科 · 园林设计"
            period="2020.09 — 2024.06"
            college="风景园林学院"
            grades={[
              ["园林规划与设计", "95"], ["大学英语", "96"],
              ["高等数学", "93"], ["计算机辅助设计", "92"],
            ]}
            note="女篮队队长 | 带队获女篮冠军"
          />
        </Section>

        {/* Awards */}
        <Section title="获奖荣誉" eyebrowText="AWARDS">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "A\'design Award 银奖", "A\'design Award 铜奖", "优秀研究生", "五好研究生",
              "优秀团干部", "学院宣传部优秀干事", "年度运动队优秀队员&队长", "社会实践优秀团队",
            ].map((a) => (
              <span key={a} style={{
                background: "white", border: "1px solid #e0e0e0",
                borderRadius: 20, padding: "6px 14px",
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 13, color: "var(--ink)",
              }}>{a}</span>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="技能" eyebrowText="SKILLS">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {[
              { title: "AI 工具链", items: ["Vibe Coding", "Midjourney", "Runway", "AIGC内容生成"] },
              { title: "产品设计", items: ["PRD 撰写", "用户调研", "功能设计", "Agent建设"] },
              { title: "数据分析", items: ["数据清洗", "评测体系构建", "竞品分析", "A/B 实验"] },
              { title: "语言", items: ["中文（母语）", "英语（CET-6）"] },
            ].map(({ title, items }) => (
              <div key={title} style={{
                background: "white", borderRadius: 14, padding: "18px 20px",
                border: "1px solid #e8e8e8",
              }}>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 700, color: "var(--blue)", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>{title}</div>
                {items.map((i) => <div key={i} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: "#555", lineHeight: 1.9 }}>{i}</div>)}
              </div>
            ))}
          </div>
        </Section>

        <div style={{ height: 80 }} />
      </div>
    </div>
  )
}

function Section({ title, eyebrowText, children }: { title: string; eyebrowText: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <p style={eyebrow}>{eyebrowText}</p>
      <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 28, fontWeight: 700, color: "var(--ink)", margin: "0 0 24px" }}>{title}</h2>
      {children}
    </div>
  )
}

function EduCard({ school, degree, period, college, grades, note }: {
  school: string; degree: string; period: string; college: string
  grades: [string, string][]; note: string
}) {
  return (
    <div style={{
      background: "white", borderRadius: 16, padding: "24px 28px",
      border: "1px solid #e0e0e0", marginBottom: 16,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
        <div>
          <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 17, fontWeight: 700, color: "var(--ink)" }}>{school}</div>
          <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{college} · {degree}</div>
        </div>
        <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, color: "#aaa", alignSelf: "flex-start" }}>{period}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
        {grades.map(([name, score]) => (
          <span key={name} style={{
            background: "#f5f5f7", borderRadius: 8, padding: "4px 10px",
            fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, color: "#444",
          }}>{name} <strong style={{ color: "var(--blue)" }}>{score}</strong></span>
        ))}
      </div>
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, color: "#888", borderTop: "1px solid #f0f0f0", paddingTop: 10 }}>{note}</div>
    </div>
  )
}

const backBtn: React.CSSProperties = {
  background: "none", border: "none",
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 14, color: "var(--blue)", cursor: "pointer",
  padding: 0, marginBottom: 40,
  display: "flex", alignItems: "center", gap: 6,
}
const eyebrow: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 700,
  color: "var(--blue)", letterSpacing: "0.1em", margin: "0 0 8px",
  textTransform: "uppercase",
}
const heroTitle: React.CSSProperties = {
  fontFamily: "'Anton', system-ui, sans-serif",
  fontSize: "clamp(48px, 6vw, 80px)",
  fontWeight: 400, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1, margin: 0,
}
const heroSub: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16, fontWeight: 300, color: "var(--muted)", marginTop: 10,
}
const bodyText: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15, fontWeight: 400, color: "#444",
}
const chip: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12,
  background: "var(--ink)", color: "white",
  borderRadius: 20, padding: "5px 12px",
}
const statCard: React.CSSProperties = {
  background: "white", borderRadius: 16, padding: "24px 20px",
  border: "1px solid #e8e8e8",
}
const statNum: React.CSSProperties = {
  fontFamily: "'Anton', system-ui, sans-serif",
  fontSize: 40, fontWeight: 400, color: "var(--blue)", lineHeight: 1, marginBottom: 6,
}
const statLabel: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, color: "var(--muted)",
}
