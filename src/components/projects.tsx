'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { useTranslations } from 'next-intl'

const featured = projects.slice(0, 4)

// Map project id to translation key
const projectIdToKey: Record<string, string> = {
  'serata-perfetta': 'serataPerfetta',
  'vibecoded-tools': 'vibecodedTools',
  'counseling-academy': 'counselingAcademy',
  'frameaboutyou': 'frameAboutYou',
  'transcrypt': 'transcrypt',
  'convertifacile': 'convertiFacile',
  'lineart-studio': 'lineArtStudio',
  'slide-maker': 'slideMaker',
}

export function Projects() {
  const t = useTranslations('projects')

  return (
    <section id="progetti" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-4 block">
            {t('label')}
          </span>
          <h2 className="font-(family-name:--font-manrope) text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title1')}<span className="gradient-text">{t('title2')}</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {featured.map((project, index) => {
            const key = projectIdToKey[project.id]
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full glass rounded-2xl overflow-hidden relative transition-all duration-500 hover:glow-violet hover:scale-[1.02] card-3d shimmer">
                  <div className={`h-1 w-full ${project.accentColor}`} />

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`shrink-0 w-10 h-10 rounded-xl bg-linear-to-br ${project.gradientFrom} to-transparent/50 flex items-center justify-center`}>
                        <project.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/50">
                          {key ? t(`${key}.tagline`) : project.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-white/60 mb-6 leading-relaxed">
                      {key ? t(`${key}.description`) : project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${project.accentColor}/10 text-white/80 border border-white/10`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {project.client && (
                      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                        <Image
                          src={project.client.logo}
                          alt={project.client.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 rounded-full object-contain"
                        />
                        <span className="text-xs text-white/40">
                          {project.client.name}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="text-xs text-white/40">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="text-white/40 group-hover:text-violet-400 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.div>
                        </a>
                      ) : (
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-white/40 group-hover:text-violet-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-linear-to-br ${project.gradientFrom} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/progetti"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-white/5 text-white border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 group"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
