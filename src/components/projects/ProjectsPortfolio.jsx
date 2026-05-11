import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, filterCategories } from '../../utils/data'
import { staggerContainer } from '../../utils/animations'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function ProjectsPortfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-semibold uppercase tracking-wider px-5 py-2 border transition-all duration-200 rounded-sm ${
                  activeFilter === cat
                    ? 'bg-gold text-navy border-gold'
                    : 'text-slate/50 border-steel-dark/40 hover:border-gold/40 hover:text-slate'
                }`}
              >
                {cat}
              </button>
            ))}
            <div className="ml-auto text-slate/40 text-xs font-semibold uppercase tracking-wider self-center">
              {filtered.length} Projects
            </div>
          </div>

          {/* Grid */}
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="wait">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
