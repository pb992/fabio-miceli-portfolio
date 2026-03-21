'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import MagneticButton from './MagneticButton'
import { 
  Code, 
  Server, 
  Palette, 
  Bot,
  Globe,
  Type,
  Paintbrush,
  Database,
  FlaskConical,
  FileCode,
  Circle,
  Figma,
  Smartphone,
  Sparkles,
  Monitor,
  Zap,
  GitBranch,
  ChevronDown,
  Square,
  Coffee
} from 'lucide-react'

const skillsData = [
  {
    category: 'Frontend',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', icon: Code },
      { name: 'Angular', icon: Square },
      { name: 'Next.js', icon: Globe },
      { name: 'TypeScript', icon: Type },
      { name: 'Tailwind', icon: Paintbrush }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Python', icon: FlaskConical },
      { name: 'C#', icon: Code },
      { name: 'Java', icon: Coffee },
      { name: 'Flask', icon: FlaskConical },
      { name: 'PHP', icon: FileCode },
      { name: 'Node.js', icon: Circle }
    ]
  },
  {
    category: 'CMS & Design',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'WordPress', icon: Globe },
      { name: 'Figma', icon: Figma },
      { name: 'UI/UX', icon: Palette },
      { name: 'Responsive', icon: Smartphone }
    ]
  },
  {
    category: 'AI/Tools',
    icon: Bot,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Claude', icon: Sparkles },
      { name: 'Cursor', icon: Monitor },
      { name: 'Vercel', icon: Zap },
      { name: 'Git', icon: GitBranch }
    ]
  }
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category)
  }

  return (
    <section id="skills" className="py-20 bg-neutral-50 dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-800 dark:text-foreground mb-6">
            Le mie <span className="text-gradient">competenze</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Un mix equilibrato di tecnologie moderne e metodologie collaudate per creare soluzioni complete
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
              className="bg-white dark:bg-(--surface) rounded-2xl shadow-sm border border-neutral-200 dark:border-(--border) overflow-hidden"
            >
              {/* Category Header - Clickable */}
              <motion.button
                onClick={() => toggleCategory(category.category)}
                className="w-full p-4 lg:p-6 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-(--surface-hover) transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-foreground">
                    {category.category}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: activeCategory === category.category ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-neutral-500 dark:text-neutral-400" />
                </motion.div>
              </motion.button>

              {/* Skills Content - Accordion */}
              <AnimatePresence>
                {activeCategory === category.category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                            className="group bg-white dark:bg-(--surface) rounded-xl p-3 shadow-sm border border-neutral-200 dark:border-(--border) hover:shadow-md hover:border-primary-200 dark:hover:border-primary-500/30 transition-all duration-300"
                          >
                            <div className="flex flex-col items-center justify-center text-center gap-2">
                              <div className="w-10 h-10 rounded-lg bg-linear-to-r from-primary-500 to-primary-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <skill.icon className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="font-semibold text-neutral-800 dark:text-foreground group-hover:text-primary-600 dark:group-hover:text-(--primary) transition-colors duration-300">
                                {skill.name}
                              </h4>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Vuoi vedere queste competenze in azione?
          </p>
          <MagneticButton strength={0.2}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              onClick={() => {
                const projectsSection = document.getElementById('projects')
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Vedi i miei progetti
            </motion.button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
