'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Camera, Zap, Code2 } from 'lucide-react'
import GlowCard from '@/components/GlowCard'

const projects = [
  {
    id: 'counseling-academy',
    icon: GraduationCap,
    title: 'Counseling Academy',
    tagline: 'Da gestionale a strategia di differenziazione',
    description: 'Piattaforma WordPress per accademia di counseling con gestione studenti, corsi e comunicazione eventi ottimizzata.',
    features: [
      'Gestione studenti',
      'Automazione comunicazioni',
      'Sezione "Olistica"',
      'Custom Plugins',
    ],
    results: [
      { metric: 'Nuovo ramo business', label: 'Olistico' },
      { metric: 'Comunicazione centralizzata', label: 'Automatizzata' },
    ],
    techStack: ['WordPress', 'PHP', 'HTML/CSS', 'JavaScript', 'Custom Plugins'],
    accentFrom: 'from-primary-500',
    accentTo: 'to-primary-700',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    tagClass: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    resultClass: 'text-primary-600 dark:text-primary-400',
    iconClass: 'text-primary-600',
    taglineClass: 'text-primary-600 dark:text-primary-400',
  },
  {
    id: 'frameaboutyou',
    icon: Camera,
    title: 'FrameAboutYou',
    tagline: 'Da bottleneck operativo a macchina efficiente',
    description: 'App fotografica peer-to-peer per eventi, con backend offline su hardware dedicato e frontend React per gestione e stampa foto.',
    features: [
      'Architettura offline',
      'Sync real-time multi-PC',
      'Migrazione a Tauri',
      'Email autonomo',
    ],
    results: [
      { metric: 'Sync istantaneo', label: 'Multi-device' },
      { metric: 'App nativa', label: 'Cross-platform' },
    ],
    techStack: ['Flask', 'Python', 'React', 'TypeScript', 'Tauri', 'C#'],
    accentFrom: 'from-secondary-500',
    accentTo: 'to-secondary-700',
    glowColor: 'rgba(236, 72, 153, 0.15)',
    tagClass: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300',
    resultClass: 'text-secondary-600 dark:text-secondary-400',
    iconClass: 'text-secondary-600',
    taglineClass: 'text-secondary-600 dark:text-secondary-400',
  },
]

const statsItems = [
  { value: '100%', label: 'Clienti soddisfatti' },
  { value: 'Agile', label: 'Metodologia' },
  { value: 'Full-stack', label: 'Copertura' },
]

const techHighlights = [
  'React', 'TypeScript', 'Python', 'Tauri', 'WordPress', 'Flask',
]

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
          {/* Accent bar */}
          <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo} mb-6`} />

          <div className="flex items-center gap-3 mb-3">
            <Icon className={`w-6 h-6 ${project.iconClass}`} />
            <h3 className="text-2xl font-display font-bold text-neutral-800 dark:text-[var(--foreground)]">
              {project.title}
            </h3>
          </div>

          <p className={`font-semibold mb-3 ${project.taglineClass}`}>
            {project.tagline}
          </p>

          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.features.map((feature) => (
              <span
                key={feature}
                className={`px-3 py-1 rounded-full text-xs font-medium ${project.tagClass}`}
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Results as metric callouts */}
          <div className="flex flex-wrap gap-4 mb-5">
            {project.results.map((r) => (
              <div key={r.metric} className="flex flex-col">
                <span className={`text-lg font-bold ${project.resultClass}`}>{r.metric}</span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">{r.label}</span>
              </div>
            ))}
          </div>

          {/* Tech stack pills */}
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
            Soluzioni che trasformano problemi in opportunit&agrave; di business
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Project 1 - Large card (2/3 width on desktop) */}
          <div className="md:col-span-2 lg:col-span-2">
            <ProjectCard project={projects[0]} delay={0} />
          </div>

          {/* Stats card (1/3 width on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.15 }}
            className="md:col-span-1 lg:col-span-1"
          >
            <GlowCard
              glowColor="rgba(250, 204, 21, 0.12)"
              className="rounded-2xl h-full"
            >
              <div className="rounded-2xl border border-neutral-200 dark:border-[var(--border)] bg-white dark:bg-[var(--surface)] p-6 sm:p-8 h-full flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-accent-500" />
                  <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    In numeri
                  </span>
                </div>
                <div className="space-y-6">
                  {statsItems.map((item) => (
                    <div key={item.label}>
                      <p className="text-3xl font-display font-bold text-neutral-800 dark:text-[var(--foreground)]">
                        {item.value}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Tech card (1/3 width on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.15 }}
            className="md:col-span-1 lg:col-span-1"
          >
            <GlowCard
              glowColor="rgba(59, 130, 246, 0.12)"
              className="rounded-2xl h-full"
            >
              <div className="rounded-2xl border border-neutral-200 dark:border-[var(--border)] bg-white dark:bg-[var(--surface)] p-6 sm:p-8 h-full flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <Code2 className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techHighlights.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Project 2 - Large card (2/3 width on desktop) */}
          <div className="md:col-span-1 lg:col-span-2">
            <ProjectCard project={projects[1]} delay={0.3} />
          </div>

        </div>
      </div>
    </section>
  )
}
