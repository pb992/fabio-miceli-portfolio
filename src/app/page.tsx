import SpotlightCursor from '@/components/SpotlightCursor'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import PhilosophySection from '@/components/PhilosophySection'
import ProjectsSection from '@/components/ProjectsSection'
import CollaborationsSection from '@/components/CollaborationsSection'
import AboutSection from '@/components/AboutSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpotlightCursor />
      <HeroSection />
      <SectionDivider variant="wave" />
      <SkillsSection />
      <SectionDivider variant="dots" />
      <PhilosophySection />
      <SectionDivider variant="geometric" />
      <ProjectsSection />
      <SectionDivider variant="wave" />
      <CollaborationsSection />
      <SectionDivider variant="dots" />
      <AboutSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
