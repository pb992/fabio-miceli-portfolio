'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import GlowCard from '@/components/GlowCard'
import MagneticButton from '@/components/MagneticButton'
import { projects } from '@/data/projects'

const featured = projects.filter((p) => p.featured)

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const Icon = project.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.15 }}
      className="h-full"
    >
      <GlowCard glowColor={project.glowColor} className="rounded-2xl h-full">
        <div className="rounded-2xl border border-neutral-200 dark:border-[var(--border)] bg-white dark:bg-[var(--surface)] p-6 sm:p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.accentColor} mb-6`} />

          <div className="flex items-center gap-3 mb-3">
            <Icon className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-800 dark:text-[var(--foreground)]">
              {project.title}
            </h3>
          </div>

          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-3">
            {project.tagline}
          </p>

          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5 text-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.features.slice(0, 4).map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-300"
              >
                {feature}
              </span>
            ))}
            {project.features.length > 4 && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800/60 text-neutral-500 dark:text-neutral-400">
                +{project.features.length - 4} altro
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-800 dark:text-[var(--foreground)] mb-4">
            Progetti in <span className="text-gradient">movimento</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Soluzioni che trasformano problemi in opportunità di business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center"
        >
          <MagneticButton strength={0.15}>
            <Link
              href="/progetti"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Tutti i progetti
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
