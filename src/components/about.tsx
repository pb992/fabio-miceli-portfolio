'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Music, Dumbbell, MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

function WorkstyleSvg() {
  return (
    <svg viewBox="0 0 120 60" fill="none" className="w-full h-full">
      {/* Desk */}
      <rect x="10" y="44" width="100" height="2" rx="1" fill="rgba(129,140,248,0.35)" />
      {/* Laptop */}
      <rect x="20" y="14" width="55" height="30" rx="3" fill="rgba(129,140,248,0.12)" stroke="rgba(129,140,248,0.45)" strokeWidth="1.2" />
      <rect x="20" y="14" width="55" height="7" rx="3" fill="rgba(129,140,248,0.18)" />
      <circle cx="26" cy="17.5" r="1.2" fill="rgba(239,68,68,0.5)" />
      <circle cx="30.5" cy="17.5" r="1.2" fill="rgba(234,179,8,0.5)" />
      <circle cx="35" cy="17.5" r="1.2" fill="rgba(34,197,94,0.5)" />
      {/* Code lines */}
      <rect x="26" y="26" width="22" height="2" rx="0.5" fill="rgba(129,140,248,0.35)" />
      <rect x="30" y="31" width="35" height="2" rx="0.5" fill="rgba(96,165,250,0.3)" />
      <rect x="30" y="36" width="25" height="2" rx="0.5" fill="rgba(34,211,238,0.3)" />
      {/* Chat bubble */}
      <rect x="84" y="16" width="24" height="14" rx="4" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
      <rect x="88" y="20" width="12" height="1.5" rx="0.5" fill="rgba(34,197,94,0.35)" />
      <rect x="88" y="24" width="16" height="1.5" rx="0.5" fill="rgba(34,197,94,0.25)" />
      {/* Connection line */}
      <path d="M75 26 L84 22" stroke="rgba(34,197,94,0.3)" strokeWidth="0.8" strokeDasharray="2 1.5" />
      {/* Keyboard */}
      <rect x="30" y="44" width="35" height="3" rx="1.5" fill="rgba(129,140,248,0.15)" />
    </svg>
  )
}

export function About() {
  const t = useTranslations('about')

  return (
    <section id="chi-sono" className="relative py-24 sm:py-32">
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
          <h2 className="font-(family-name:--font-manrope) text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t('title1')}<span className="gradient-text">{t('title2')}</span>.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Bio - large card spanning 2 columns */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            className="sm:col-span-2 glass rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="shrink-0 mx-auto sm:mx-0">
                <div className="w-32 h-40 rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/fabio_miceli2.jpg"
                    alt="Fabio Miceli"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">{t('bioTitle')}</h3>
                <p className="text-white/60 leading-relaxed mb-3">
                  {t('bio1')}
                </p>
                <p className="text-white/60 leading-relaxed">
                  {t('bio2')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            className="glass rounded-2xl p-6 sm:p-8 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-5xl font-bold gradient-text">{t('stat1value')}</p>
                <p className="text-sm text-white/40 mt-2">{t('stat1label')}</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold gradient-text">{t('stat2value')}</p>
                <p className="text-sm text-white/40 mt-2">{t('stat2label')}</p>
              </div>
            </div>
          </motion.div>

          {/* Music card */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            className="glass rounded-2xl p-6 group hover:glow-violet transition-all duration-500"
          >
            <Music className="w-8 h-8 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-base font-bold text-white mb-2">{t('music.title')}</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {t('music.description')}
            </p>
          </motion.div>

          {/* Calisthenics card */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            className="glass rounded-2xl p-6 group hover:glow-violet transition-all duration-500"
          >
            <Dumbbell className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-base font-bold text-white mb-2">{t('calisthenics.title')}</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {t('calisthenics.description')}
            </p>
          </motion.div>

          {/* Travel/Kayak card */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            className="glass rounded-2xl p-6 group hover:glow-violet transition-all duration-500"
          >
            <MapPin className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-base font-bold text-white mb-2">{t('nomad.title')}</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {t('nomad.description')}
            </p>
          </motion.div>

          {/* Work style - full width with SVG and centered text */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            className="sm:col-span-2 lg:col-span-3 glass rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-40 h-24 shrink-0 rounded-xl bg-white/5 border border-white/10 p-2">
                <WorkstyleSvg />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{t('workTitle')}</h3>
                <p className="text-white/50 leading-relaxed">
                  {t('workDescription')}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
