'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

function StrategyIllustration() {
  return (
    <svg viewBox="0 0 320 140" fill="none" className="w-full h-full">
      {/* Whiteboard */}
      <rect x="80" y="20" width="160" height="100" rx="6" fill="rgba(129,140,248,0.08)" stroke="rgba(129,140,248,0.3)" strokeWidth="1.5" />
      {/* Flow diagram nodes */}
      <circle cx="120" cy="50" r="12" fill="rgba(129,140,248,0.15)" stroke="rgba(129,140,248,0.5)" strokeWidth="1.2" />
      <circle cx="200" cy="50" r="12" fill="rgba(129,140,248,0.15)" stroke="rgba(129,140,248,0.5)" strokeWidth="1.2" />
      <circle cx="160" cy="90" r="14" fill="rgba(129,140,248,0.2)" stroke="rgba(129,140,248,0.6)" strokeWidth="1.5" />
      {/* Connecting lines */}
      <line x1="132" y1="50" x2="188" y2="50" stroke="rgba(129,140,248,0.3)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="125" y1="60" x2="152" y2="82" stroke="rgba(129,140,248,0.3)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="195" y1="60" x2="168" y2="82" stroke="rgba(129,140,248,0.3)" strokeWidth="1" strokeDasharray="4 3" />
      {/* Check mark in center */}
      <path d="M153 90 L158 95 L168 84" stroke="rgba(129,140,248,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Small dots decorative */}
      <circle cx="100" cy="35" r="2" fill="rgba(129,140,248,0.2)" />
      <circle cx="220" cy="35" r="2" fill="rgba(129,140,248,0.2)" />
      <circle cx="100" cy="105" r="2" fill="rgba(129,140,248,0.2)" />
      <circle cx="220" cy="105" r="2" fill="rgba(129,140,248,0.2)" />
    </svg>
  )
}

function ExecutionIllustration() {
  return (
    <svg viewBox="0 0 320 140" fill="none" className="w-full h-full">
      {/* Code editor window */}
      <rect x="60" y="15" width="200" height="110" rx="8" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.25)" strokeWidth="1.5" />
      {/* Title bar */}
      <rect x="60" y="15" width="200" height="22" rx="8" fill="rgba(59,130,246,0.08)" />
      <rect x="60" y="29" width="200" height="8" fill="rgba(59,130,246,0.08)" />
      {/* Window dots */}
      <circle cx="75" cy="26" r="3" fill="rgba(239,68,68,0.5)" />
      <circle cx="86" cy="26" r="3" fill="rgba(234,179,8,0.5)" />
      <circle cx="97" cy="26" r="3" fill="rgba(34,197,94,0.5)" />
      {/* Code lines */}
      <rect x="78" y="48" width="60" height="3" rx="1.5" fill="rgba(96,165,250,0.3)" />
      <rect x="88" y="58" width="100" height="3" rx="1.5" fill="rgba(129,140,248,0.25)" />
      <rect x="88" y="68" width="75" height="3" rx="1.5" fill="rgba(34,211,238,0.25)" />
      <rect x="88" y="78" width="90" height="3" rx="1.5" fill="rgba(129,140,248,0.2)" />
      <rect x="78" y="88" width="45" height="3" rx="1.5" fill="rgba(96,165,250,0.3)" />
      <rect x="88" y="98" width="110" height="3" rx="1.5" fill="rgba(34,211,238,0.2)" />
      {/* Cursor blink */}
      <rect x="198" y="96" width="2" height="8" rx="1" fill="rgba(96,165,250,0.6)">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </rect>
      {/* Rocket */}
      <g transform="translate(235, 55) rotate(-30)">
        <path d="M0 15 L6 0 L12 15 Z" fill="rgba(96,165,250,0.3)" stroke="rgba(96,165,250,0.5)" strokeWidth="1" />
        <rect x="4" y="15" width="4" height="6" rx="1" fill="rgba(234,179,8,0.3)" />
      </g>
    </svg>
  )
}

function ResultsIllustration() {
  return (
    <svg viewBox="0 0 320 140" fill="none" className="w-full h-full">
      {/* Chart background */}
      <rect x="60" y="15" width="200" height="110" rx="8" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.2)" strokeWidth="1.5" />
      {/* Grid lines */}
      <line x1="80" y1="40" x2="240" y2="40" stroke="rgba(245,158,11,0.08)" strokeWidth="0.5" />
      <line x1="80" y1="60" x2="240" y2="60" stroke="rgba(245,158,11,0.08)" strokeWidth="0.5" />
      <line x1="80" y1="80" x2="240" y2="80" stroke="rgba(245,158,11,0.08)" strokeWidth="0.5" />
      <line x1="80" y1="100" x2="240" y2="100" stroke="rgba(245,158,11,0.12)" strokeWidth="0.5" />
      {/* Rising chart line */}
      <polyline
        points="85,95 110,88 130,82 150,70 170,60 190,42 215,35 235,28"
        stroke="rgba(245,158,11,0.6)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Area fill under line */}
      <polygon
        points="85,95 110,88 130,82 150,70 170,60 190,42 215,35 235,28 235,105 85,105"
        fill="url(#resultGrad)"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="resultGrad" x1="160" y1="28" x2="160" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(245,158,11,0.4)" />
          <stop offset="100%" stopColor="rgba(245,158,11,0)" />
        </linearGradient>
      </defs>
      {/* Data points */}
      <circle cx="150" cy="70" r="3.5" fill="rgba(245,158,11,0.8)" />
      <circle cx="190" cy="42" r="3.5" fill="rgba(245,158,11,0.8)" />
      <circle cx="235" cy="28" r="4" fill="rgba(245,158,11,1)" stroke="rgba(245,158,11,0.3)" strokeWidth="6" />
      {/* Arrow up */}
      <path d="M228 22 L235 14 L242 22" stroke="rgba(245,158,11,0.6)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function Philosophy() {
  const t = useTranslations('philosophy')

  const pillars = [
    {
      title: t('strategy.title'),
      description: t('strategy.description'),
      gradient: 'from-violet-500 to-purple-600',
      illustration: StrategyIllustration,
    },
    {
      title: t('execution.title'),
      description: t('execution.description'),
      gradient: 'from-blue-500 to-cyan-500',
      illustration: ExecutionIllustration,
    },
    {
      title: t('results.title'),
      description: t('results.description'),
      gradient: 'from-amber-500 to-orange-500',
      illustration: ResultsIllustration,
    },
  ]

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px divider-glow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="font-(family-name:--font-manrope) text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t('title1')}<br />
            <span className="gradient-text">{t('title2')}</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl relative overflow-hidden transition-all duration-500 hover:glow-violet hover:scale-[1.02] card-3d">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* SVG Illustration */}
                <div className="h-36 flex items-center justify-center px-4 pt-4">
                  <pillar.illustration />
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
