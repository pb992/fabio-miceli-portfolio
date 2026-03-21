'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Camera, 
  FileText, 
  Mic,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

const projects = [
  {
    id: 'counseling-academy',
    title: 'Counseling Academy',
    tagline: 'Piattaforma formativa completa',
    description: 'Sito WordPress per scuola di counseling con area corsi, gestione studenti e pagamenti integrati.',
    icon: GraduationCap,
    accentColor: 'bg-indigo-500',
    gradientFrom: 'from-indigo-500',
    features: ['E-learning', 'Pagamenti online', 'Area riservata'],
    stack: ['WordPress', 'PHP', 'WooCommerce'],
  },
  {
    id: 'frameaboutyou',
    title: 'FrameAboutYou',
    tagline: 'App multi-piattaforma per eventi',
    description: 'Applicazione per gestione foto eventi. Versione web per ospiti e desktop Tauri per i fotografi.',
    icon: Camera,
    accentColor: 'bg-rose-500',
    gradientFrom: 'from-rose-500',
    features: ['Gallery condivise', 'QR Code', 'Desktop app'],
    stack: ['React', 'Tauri', 'Node.js'],
  },
  {
    id: 'convertifacile',
    title: 'ConvertiFacile',
    tagline: 'Convertitore universale',
    description: 'Tool desktop per conversione file: immagini, documenti, audio. Semplice, veloce, offline.',
    icon: FileText,
    accentColor: 'bg-emerald-500',
    gradientFrom: 'from-emerald-500',
    features: ['Offline', 'Multi-formato', 'Batch processing'],
    stack: ['Electron', 'TypeScript', 'Sharp'],
  },
  {
    id: 'transcrypt',
    title: 'Transcrypt',
    tagline: 'Trascrizione AI-powered',
    description: 'Strumento per trascrizione audio automatica con AI. Supporto multilingua e export in vari formati.',
    icon: Mic,
    accentColor: 'bg-violet-500',
    gradientFrom: 'from-violet-500',
    features: ['AI Transcription', 'Multi-lingua', 'Export PDF'],
    stack: ['Python', 'Whisper', 'Flask'],
  },
]

export function Projects() {
  return (
    <section id="progetti" className="relative py-24 sm:py-32">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Progetti in <span className="gradient-text">movimento</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Soluzioni reali per problemi reali. Ogni progetto è una storia di collaborazione e risultati.
          </p>
        </motion.div>

        {/* Projects bento grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl overflow-hidden relative transition-all duration-500 hover:glow-violet card-3d">
                {/* Top accent bar */}
                <div className={`h-1 w-full ${project.accentColor}`} />

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradientFrom} to-transparent/50 flex items-center justify-center shrink-0`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/50">{project.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
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

                  {/* Tech stack */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-white/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-white/40 group-hover:text-violet-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="#contatti"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-white/5 text-white border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 group"
          >
            Tutti i progetti
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
