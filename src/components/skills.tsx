'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Monitor,
  Server,
  Palette,
  Sparkles,
  ChevronDown,
  ArrowRight
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Skills() {
  const t = useTranslations('skills')
  const [openId, setOpenId] = useState<string | null>('frontend')

  const skillCategories = [
    {
      id: 'frontend',
      title: t('frontend.title'),
      icon: Monitor,
      gradient: 'from-violet-500 to-purple-600',
      skills: ['React', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      description: t('frontend.description'),
    },
    {
      id: 'backend',
      title: t('backend.title'),
      icon: Server,
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['Python', 'C#', 'Java', 'Flask', 'PHP', 'Node.js'],
      description: t('backend.description'),
    },
    {
      id: 'cms-design',
      title: t('cms.title'),
      icon: Palette,
      gradient: 'from-rose-500 to-pink-500',
      skills: ['WordPress', 'Figma', 'UI/UX', 'Responsive Design'],
      description: t('cms.description'),
    },
    {
      id: 'ai-tools',
      title: t('ai.title'),
      icon: Sparkles,
      gradient: 'from-amber-500 to-orange-500',
      skills: ['Claude', 'Cursor', 'Vercel', 'Git'],
      description: t('ai.description'),
    },
  ]

  const toggleCategory = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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

        {/* Workspace illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <svg viewBox="0 0 800 120" fill="none" className="w-full max-w-3xl mx-auto opacity-40">
            {/* Desk surface */}
            <rect x="50" y="95" width="700" height="2" rx="1" fill="rgba(129,140,248,0.2)" />
            {/* Laptop */}
            <rect x="280" y="30" width="240" height="150" rx="8" fill="rgba(129,140,248,0.06)" stroke="rgba(129,140,248,0.2)" strokeWidth="1.2" />
            <rect x="280" y="30" width="240" height="14" rx="8" fill="rgba(129,140,248,0.08)" />
            <rect x="280" y="38" width="240" height="6" fill="rgba(129,140,248,0.08)" />
            {/* Screen dots */}
            <circle cx="294" cy="37" r="2" fill="rgba(239,68,68,0.4)" />
            <circle cx="302" cy="37" r="2" fill="rgba(234,179,8,0.4)" />
            <circle cx="310" cy="37" r="2" fill="rgba(34,197,94,0.4)" />
            {/* Code lines on screen */}
            <rect x="298" y="52" width="50" height="2.5" rx="1" fill="rgba(129,140,248,0.2)" />
            <rect x="306" y="60" width="80" height="2.5" rx="1" fill="rgba(96,165,250,0.15)" />
            <rect x="306" y="68" width="60" height="2.5" rx="1" fill="rgba(34,211,238,0.15)" />
            <rect x="306" y="76" width="90" height="2.5" rx="1" fill="rgba(129,140,248,0.12)" />
            <rect x="298" y="84" width="40" height="2.5" rx="1" fill="rgba(129,140,248,0.2)" />
            {/* Keyboard base */}
            <rect x="300" y="92" width="200" height="3" rx="1.5" fill="rgba(129,140,248,0.1)" />
            {/* Coffee cup */}
            <circle cx="170" cy="75" r="18" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
            <circle cx="170" cy="75" r="10" fill="rgba(245,158,11,0.08)" />
            {/* Steam */}
            <path d="M165 55 Q167 48 170 52 Q173 48 175 55" stroke="rgba(245,158,11,0.15)" strokeWidth="1" fill="none" />
            {/* Mouse */}
            <rect x="590" y="65" width="22" height="32" rx="11" fill="rgba(129,140,248,0.05)" stroke="rgba(129,140,248,0.15)" strokeWidth="1" />
            <line x1="601" y1="68" x2="601" y2="78" stroke="rgba(129,140,248,0.15)" strokeWidth="0.8" />
            {/* Phone */}
            <rect x="650" y="55" width="24" height="40" rx="4" fill="rgba(34,211,238,0.04)" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
            <rect x="656" y="62" width="12" height="2" rx="1" fill="rgba(34,211,238,0.1)" />
            <rect x="656" y="67" width="8" height="2" rx="1" fill="rgba(34,211,238,0.08)" />
            {/* Plant */}
            <circle cx="100" cy="70" r="14" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.15)" strokeWidth="1" />
            <path d="M95 72 Q100 55 105 72" stroke="rgba(34,197,94,0.25)" strokeWidth="1.2" fill="none" />
            <path d="M98 68 Q100 60 102 68" stroke="rgba(34,197,94,0.2)" strokeWidth="1" fill="none" />
          </svg>
        </motion.div>

        {/* Skills accordion */}
        <div className="space-y-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
                  openId === category.id ? 'glow-violet' : ''
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 flex items-center gap-4 group"
                >
                  {/* Icon in circle */}
                  <div className={`w-12 h-12 rounded-full bg-linear-to-br ${category.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title & description */}
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-white/50">
                      {category.description}
                    </p>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: openId === category.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white/50" />
                  </motion.div>
                </button>

                {/* Accordion content */}
                <AnimatePresence>
                  {openId === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.05 }}
                              className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-white/80 border border-white/10 hover:border-violet-500/50 hover:text-white transition-all duration-300"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            href="#progetti"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-white/5 text-white border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 group"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
