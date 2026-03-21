'use client'

import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Philosophy } from '@/components/philosophy'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Collaborations } from '@/components/collaborations'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { SocialSidebar, SpotlightCursor } from '@/components/floating-elements'
import { SectionDivider } from '@/components/section-divider'

export default function Home() {
  return (
    <>
      <SpotlightCursor />
      <SocialSidebar />

      <main>
        <Hero />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Philosophy />
        <SectionDivider />
        <About />
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
