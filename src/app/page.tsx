'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Philosophy } from '@/components/philosophy'
import { Projects } from '@/components/projects'
import { Collaborations } from '@/components/collaborations'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp, SocialSidebar, SpotlightCursor } from '@/components/floating-elements'
import { SectionDivider } from '@/components/section-divider'

export default function Home() {
  return (
    <>
      {/* Global cursor spotlight effect */}
      <SpotlightCursor />
      
      {/* Fixed navigation */}
      <Navbar />
      
      {/* Social sidebar - desktop only */}
      <SocialSidebar />
      
      {/* Floating WhatsApp button */}
      <FloatingWhatsApp />
      
      {/* Main content */}
      <main>
        <Hero />
        
        <SectionDivider />
        
        <Skills />
        
        <SectionDivider />
        
        <Philosophy />
        
        <SectionDivider />
        
        <Projects />
        
        <SectionDivider />
        
        <Collaborations />
        
        <CTASection />
      </main>
      
      <Footer />
    </>
  )
}
