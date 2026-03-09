import SpotlightCursor from '@/components/SpotlightCursor'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import PhilosophySection from '@/components/PhilosophySection'
import ProjectsSection from '@/components/ProjectsSection'
import ClientsMarquee from '@/components/ClientsMarquee'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpotlightCursor />
      <HeroSection />
      <SectionDivider variant="glow" />
      <SkillsSection />
      <SectionDivider variant="orbit" />
      <ProjectsSection />
      <SectionDivider variant="gradient" />
      <ClientsMarquee />
      <SectionDivider variant="glow" />
      <PhilosophySection />
      <SectionDivider variant="orbit" />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
