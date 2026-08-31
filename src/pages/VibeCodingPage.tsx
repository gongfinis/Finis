import MacNavBar from "../components/MacNavBar"
import { IconMic, IconBarChart, IconBolt, IconClock, IconClipboard, IconBookmark, IconCode } from "../components/Icons"

interface PageProps { onNavigate: (page: string) => void }

const workProjects = [
  {
    title: "客服语音通话标注工具",
    desc: "独立开发，支持文本＋音频双模态标注，实现语音标注从纯人工到系统自动标注的跨越",
    tags: ["React", "Audio API", "标注系统"],
    icon: <IconMic size={24} color="#f0883e" strokeWidth={1.5} />,
  },
  {
    title: "ASR 自动标注及可视化系统",
    desc: "基于大模型驱动自动归因，评测周期从天级压缩至小时级，准确率和召回率均超 90%",
    tags: ["LLM", "数据可视化", "自动化"],
    icon: <IconBarChart size={24} color="#f0883e" strokeWidth={1.5} />,
  },
  {
    title: "自动提数 Skill 体系",
    desc: "自动提数 Skill · 客服数据埋点串表 Skill · 数据波动分析 Skill · 场景意图形成 Skill · 评测报告产出 Skill，将高频工作流自动化",
    tags: ["Skill 工程", "自动化", "Agent"],
    icon: <IconBolt size={24} color="#f0883e" strokeWidth={1.5} />,
  },
]

const lifeProjects = [
  {
    title: "番茄钟专注 App",
    desc: "为个人高效学习开发的专注计时应用，支持任务管理和专注数据统计",
    tags: ["React", "本地存储", "效率工具"],
    icon: <IconClock size={24} color="#3fb950" strokeWidth={1.5} />,
  },
  {
    title: "秋招进度监控网站",
    desc: "实时追踪秋招投递进度与反馈状态，支持多维筛选与可视化展示",
    tags: ["数据可视化", "状态管理"],
    icon: <IconClipboard size={24} color="#3fb950" strokeWidth={1.5} />,
  },
  {
    title: "小红书笔记智能收藏",
    desc: "基于 AI 的笔记自动分类与语义检索功能，解决「收藏了但找不到」的问题",
    tags: ["LLM", "向量检索", "浏览器插件"],
    icon: <IconBookmark size={24} color="#3fb950" strokeWidth={1.5} />,
  },
  {
    title: "这个作品集网站",
    desc: "用 Figma Make + vibe coding 构建的交互式作品集，包含 macOS 风格 UI 和多页面导航",
    tags: ["React", "Figma Make", "Vibe Coding"],
    icon: <IconCode size={24} color="#3fb950" strokeWidth={1.5} />,
  },
]

export default function VibeCodingPage({ onNavigate }: PageProps) {
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", paddingBottom: 80 }}>
      <MacNavBar activePage="vibe" onNavigate={onNavigate} navBg="#0d1117" navTextColor="#e6edf3" />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 40px 0" }}>
        <button onClick={() => onNavigate("home")} style={{ ...backBtn, color: "#58a6ff" }}>← Portfolio</button>

        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 700, color: "#58a6ff", letterSpacing: "0.1em", margin: "0 0 8px", textTransform: "uppercase" as const }}>VIBE CODING</p>
        <h1 style={{ ...display, color: "#e6edf3" }}>Vibe Coding</h1>
        <p style={{ ...muted, marginBottom: 20, color: "#8b949e" }}>
          用 AI 辅助编程把想法变成现实
        </p>

        {/* Philosophy */}
        <div style={{
          background: "#161b22", border: "1px solid #30363d",
          borderRadius: 12, padding: "20px 24px", marginBottom: 48,
        }}>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15,
            color: "#c9d1d9", lineHeight: 1.75, margin: 0,
          }}>
            我相信 vibe coding 不是「不用动脑」，而是把执行力的门槛降低，让想法可以快速验证。
            从需求文档到可运行 demo，有时候只需要一个下午。<br /><br />
            <span style={{ color: "#58a6ff" }}>工作中</span>：开发评测工具、自动化 Skill、数据看板，把重复劳动交给程序。<br />
            <span style={{ color: "#3fb950" }}>生活中</span>：番茄钟、求职追踪、笔记助手，自己的问题自己解决。
          </p>
        </div>

        {/* Work section */}
        <SectionTitle title="工作场景" color="#f0883e" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {workProjects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>

        {/* Life section */}
        <SectionTitle title="生活场景" color="#3fb950" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {lifeProjects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>

    </div>
  )
}

function SectionTitle({ title, color }: { title: string; color: string }) {
  return (
    <div style={{
      fontFamily: "'Inter', system-ui, sans-serif", fontSize: 18, fontWeight: 700,
      color, marginBottom: 16,
      borderLeft: `3px solid ${color}`, paddingLeft: 12,
    }}>{title}</div>
  )
}

function ProjectCard({ title, desc, tags, icon }: { title: string; desc: string; tags: string[]; icon: React.ReactNode }) {
  return (
    <div style={{
      background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "18px 20px",
      transition: "border-color 0.15s ease",
    }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#58a6ff" }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#30363d" }}
    >
      <div style={{ marginBottom: 12 }}>{icon}</div>
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{title}</div>
      <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: "#8b949e", lineHeight: 1.65, margin: "0 0 14px" }}>{desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map((t) => (
          <span key={t} style={{
            fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11,
            background: "#1f2937", color: "#58a6ff",
            borderRadius: 20, padding: "3px 9px",
            border: "1px solid #30363d",
          }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

const backBtn: React.CSSProperties = {
  background: "none", border: "none",
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 14, cursor: "pointer",
  padding: 0, marginBottom: 36,
}
const display: React.CSSProperties = {
  fontFamily: "'Anton', system-ui, sans-serif",
  fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
  letterSpacing: "-0.02em", lineHeight: 1, margin: "0 0 10px",
}
const muted: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, sans-serif", fontSize: 17, fontWeight: 300,
}
