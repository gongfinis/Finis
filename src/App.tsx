import { useState } from "react"
import { ThemeProvider } from "@figma/astraui"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import DesignPage from "./pages/DesignPage"
import VibeCodingPage from "./pages/VibeCodingPage"
import InterestsPage from "./pages/InterestsPage"

type Page = "home" | "about" | "projects" | "design" | "vibe" | "interests"

export default function App() {
  const [page, setPage] = useState<Page>("home")

  const navigate = (target: string) => {
    const valid: Page[] = ["home", "about", "projects", "design", "vibe", "interests"]
    if (valid.includes(target as Page)) {
      setPage(target as Page)
      window.scrollTo({ top: 0 })
    }
  }

  const content = (() => {
    switch (page) {
      case "about":      return <AboutPage onNavigate={navigate} />
      case "projects":   return <ProjectsPage onNavigate={navigate} />
      case "design":     return <DesignPage onNavigate={navigate} />
      case "vibe":       return <VibeCodingPage onNavigate={navigate} />
      case "interests":  return <InterestsPage onNavigate={navigate} />
      default:           return <HomePage onNavigate={navigate} />
    }
  })()

  return <ThemeProvider>{content}</ThemeProvider>
}
