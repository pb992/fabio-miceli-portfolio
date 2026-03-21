'use client'

import { motion } from 'framer-motion'
import { Music, Dumbbell, MapPin, Code, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{t('bioTitle')}</h3>
                </div>
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

          {/* Work style - full width */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            className="sm:col-span-2 lg:col-span-3 glass rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="flex gap-3 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
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
