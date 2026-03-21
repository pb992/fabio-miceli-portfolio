'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function ProgettiPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla home
          </Link>
          <h1 className="font-(family-name:--font-manrope) text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Tutti i <span className="gradient-text">progetti</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Ogni progetto è una soluzione concreta a un problema reale
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl overflow-hidden relative transition-all duration-500 hover:glow-violet card-3d">
                <div className={`h-1 w-full ${project.accentColor}`} />

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-linear-to-br ${project.gradientFrom} to-transparent/50 flex items-center justify-center shrink-0`}
                    >
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-xs text-white/50">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="text-white/60 mb-5 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium text-white/70 border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="text-xs text-white/30 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-violet-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.gradientFrom} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
