'use client'

import { motion } from 'framer-motion'
import GlowCard from '@/components/GlowCard'
import SpotlightCursor from '@/components/SpotlightCursor'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { projects } from '@/data/projects'

export default function ProgettiPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SpotlightCursor />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-800 dark:text-[var(--foreground)] mb-4">
              Tutti i <span className="text-gradient">progetti</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Ogni progetto è una soluzione concreta a un problema reale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <GlowCard glowColor={project.glowColor} className="rounded-2xl h-full">
                    <div className="rounded-2xl border border-neutral-200 dark:border-[var(--border)] bg-white dark:bg-[var(--surface)] p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.accentColor} mb-5`} />

                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                        <h2 className="text-lg font-display font-bold text-neutral-800 dark:text-[var(--foreground)]">
                          {project.title}
                        </h2>
                      </div>

                      <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-3">
                        {project.tagline}
                      </p>

                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 text-sm">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2.5 py-0.5 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  )
}
