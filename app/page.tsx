import { PortfolioHeader } from "@/components/portfolio-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
// import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioHeader />
      <HeroSection />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
