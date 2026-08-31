import { useState } from "react"
import MacNavBar from "../components/MacNavBar"
import { IconCart, IconChat, IconFilm, IconStar } from "../components/Icons"

interface PageProps { onNavigate: (page: string) => void }

const jobs: { company: string; role: string; period: string; color: string; icon: React.ReactNode; highlights: string[]; projects: { title: string; problem: string; action: string; result: string }[] }[] = [
  {
    company: "京东",
    role: "AI 产品经理",
    period: "2026.06 — 2026.08",
    color: "#e8472c",
    icon: <IconCart size={22} strokeWidth={1.5} />,
    highlights: [
      "Agent Skill 蒸馏上线，售中/售后转人工率分别降低 2.03pp / 1.19pp",
      "家政 Agent 知识挖掘，转人工率降低 2.80pp",
      "从 0 到 1 搭建语音 Agent 质量评测体系",
      "开发自动提数 Skill、数据监测看板、语音 Badcase 标注工具",
    ],
    projects: [
      {
        title: "金牌客服决策蒸馏 & Agent Skill 建设",
        problem: "Prompt 优化边际收益递减，优质客服经验未结构化沉淀",
        action: "「通识蒸馏＋环境适配」方案，大模型提取 Work＋Persona 形成 Skill，A/B 验证",
        result: "售中/售后转人工率降低 2.03pp / 1.19pp",
      },
      {
        title: "家政 Agent 知识挖掘",
        problem: "新业务场景知识覆盖不足，缺乏快速搭建新业务 Agent 的途径",
        action: "分析人工对话 → 大模型识别知识缺口 → 三层漏斗框架反哺 Agent",
        result: "售前转人工率降低 2.80pp，形成可复用的知识挖掘方法论",
      },
    ],
  },
  {
    company: "腾讯",
    role: "AI 产品经理",
    period: "2026.03 — 2026.06",
    color: "#07c160",
    icon: <IconChat size={22} strokeWidth={1.5} />,
    highlights: [
      "ASR 自动归因 Agent，评测周期由天级压缩至小时级，准确率/召回率 > 90%",
      "重构 ASR 评测框架，53% 原本无法判定的 case 得到有效判断",
      "制定场景化测试 SOP，统一竞品测试标准",
    ],
    projects: [
      {
        title: "ASR 自动归因 Agent 建设",
        problem: "人工逐条标注，评测周期长，无法支撑模型快速迭代",
        action: "「规则过滤＋自动归因」4 层 Prompt 架构，规则前置拦截 25%–40% 无需标注类型",
        result: "同人力条件下评测周期缩短 50%，准确率与召回率均超 90%",
      },
      {
        title: "ASR 评测体系优化",
        problem: "原有评测无法覆盖复杂上下文场景，53% case 无法有效判定",
        action: "引入上下文维度、四级句意影响等级、10 类根因体系",
        result: "原无法判定案例中超 90% 得到有效判断，评测覆盖率大幅提升",
      },
    ],
  },
  {
    company: "爱奇艺",
    role: "AI 产品经理",
    period: "2025.09 — 2026.01",
    color: "#00c4cc",
    icon: <IconFilm size={22} strokeWidth={1.5} />,
    highlights: [
      "短剧广告 AI 自动化工作流上线，核心指标优于 87% 人工剪辑，CTR 增长 197%",
      "影视解说视频 Agent，日均播放量增长 93%，万赞视频数增长 82%",
      "主导爆文剪辑模板知识库设计，「向量＋标量」混合检索方案",
    ],
    projects: [
      {
        title: "短剧广告 AI 自动化素材生产工作流",
        problem: "海外短剧买量素材高度依赖人工，难以规模化；原产线视频片段跳跃、不连贯",
        action: "以「事件」为核心构建剪辑模式，规划多套 AI 创作工作流（意图解析→事件检索→钩子识别→字幕生成）",
        result: "投放首周核心指标增长 87%，CTR 增长 197%",
      },
      {
        title: "影视解说视频创作 Agent",
        problem: "自动化产线入口分散，不支持精细编辑，质量不可控",
        action: "爆文衍生解说创作模式，主导 P0 需求拆解与 PRD，解说字幕画布＋分镜编辑能力",
        result: "业务方发布数量提升 27%，日均播放量增长 93%，万赞视频数增长 82%",
      },
    ],
  },
  {
    company: "嘉人 Marie Claire",
    role: "内容运营",
    period: "2025.05 — 2025.08",
    color: "#ff69b4",
    icon: <IconStar size={22} strokeWidth={1.5} />,
    highlights: [
      "小红书官方账号运营期间涨粉 4w+",
      "从 0 搭建附属宠物账号，粉丝 1000+",
      "单次活动视频阅读量超百万，小红书热点榜 top4 持续 48h，单条视频获 5w+ 点赞",
    ],
    projects: [
      {
        title: "嘉人开麦 × Omega 品牌活动策划",
        problem: "品牌需突破传统营销方式，打造新商业化栏目 IP",
        action: "设计栏目形式、互动规则、视觉风格，撰写策划案，提案通过后落地执行",
        result: "新栏目首发视频收获 2w+ 点赞，成功开拓品牌新内容阵地",
      },
      {
        title: "赵今麦 × MIUMIU 品牌活动",
        problem: "明星合作内容传播需提升品牌在小红书的曝光量与口碑",
        action: "策划「ABB」主题视频，制定分时段＋热门话题发布策略，效果多维复盘",
        result: "视频成为爆款，5w+ 点赞，曝光量超百万",
      },
    ],
  },
]

export default function ProjectsPage({ onNavigate }: PageProps) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div style={{ minHeight: "100vh", background: "var(--parchment)", paddingBottom: 80 }}>
      <MacNavBar activePage="projects" onNavigate={onNavigate} navBg="var(--parchment)" />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 40px 0" }}>
        <button onClick={() => onNavigate("home")} style={backBtn}>← Portfolio</button>

        <p style={eyebrow}>WORK EXPERIENCE</p>
        <h1 style={display}>工作项目</h1>
        <p style={{ ...muted, marginBottom: 48 }}>AI 产品经理 · 内容运营 · 实习经历</p>

        {jobs.map((job) => (
          <div key={job.company} style={{
            background: "white", borderRadius: 16, marginBottom: 20,
            border: "1px solid #e0e0e0", overflow: "hidden",
          }}>
            {/* Header */}
            <div
              onClick={() => setOpen(open === job.company ? null : job.company)}
              style={{
                padding: "20px 24px", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: open === job.company ? "#fafafa" : "white",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: job.color + "18",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: job.color,
                }}>{job.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 17, fontWeight: 700, color: "#1d1d1f" }}>{job.company}</div>
                  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{job.role} · {job.period}</div>
                </div>
              </div>
              <span style={{ fontSize: 18, color: "#aaa", transform: open === job.company ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>›</span>
            </div>

            {open === job.company && (
              <div style={{ padding: "0 24px 24px", borderTop: "1px solid #f0f0f0" }}>
                {/* Highlights */}
                <div style={{ padding: "16px 0 20px" }}>
                  {job.highlights.map((h) => (
                    <div key={h} style={{
                      fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14,
                      color: "#444", lineHeight: 1.7, paddingLeft: 14,
                      borderLeft: `3px solid ${job.color}`, marginBottom: 8,
                    }}>{h}</div>
                  ))}
                </div>

                {/* Project cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 14 }}>
                  {job.projects.map((p) => (
                    <div key={p.title} style={{
                      background: "#fafafa", borderRadius: 12, padding: "16px 18px",
                      border: "1px solid #ebebeb",
                    }}>
                      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, fontWeight: 700, color: "#1d1d1f", marginBottom: 10 }}>{p.title}</div>
                      {[
                        { label: "背景", val: p.problem },
                        { label: "行动", val: p.action },
                        { label: "结果", val: p.result },
                      ].map(({ label, val }) => (
                        <div key={label} style={{ marginBottom: 7 }}>
                          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 700, color: job.color, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</span>
                          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: "#555", margin: "3px 0 0", lineHeight: 1.6 }}>{val}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

const backBtn: React.CSSProperties = {
  background: "none", border: "none",
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 14, color: "var(--blue)", cursor: "pointer",
  padding: 0, marginBottom: 36,
  display: "flex", alignItems: "center", gap: 6,
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
