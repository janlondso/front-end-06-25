import NavBar from "../components/NavBar"
import ThemeToggle from "../components/ThemeToggle"
import StarBackground from "@/components/StarBackground"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectSection from "../components/ProjectSection"

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
      {/* Theme toggle */}
        <ThemeToggle />

      {/* Background Effects */}
        <StarBackground />

      {/* Navbar */}
        <NavBar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
      </main>
      {/* Footer */}

    </div>
  )
}

export default Home