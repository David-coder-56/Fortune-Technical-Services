import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { projects } from '../../utils/data'
import { fadeUp, staggerContainer } from '../../utils/animations'

const bgColors = {
  mining: 'from-amber-900/30 to-stone-900/60',
  survey: 'from-blue-900/30 to-slate-900/60',
  drilling: 'from-orange-900/30 to-stone-900/60',
}

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            label="Featured Work"
            title={<>Proven<br />Projects</>}
          />
          <Link to="/projects" className="btn-outline shrink-0">
            All Projects <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden border border-steel-dark/40 hover:border-gold/40 transition-colors duration-500 cursor-pointer"
            >
              {/* Simulated image with gradient */}
              <div className={`h-56 bg-gradient-to-br ${bgColors[project.image]} relative overflow-hidden`}>
                <div className="absolute inset-0 grid-line opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-black text-8xl text-white/5 uppercase">
                    {project.category[0]}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">Duration: {project.duration}</div>
                    {project.depth !== 'N/A' && (
                      <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">Depth: {project.depth}</div>
                    )}
                    <div className="text-gold text-xs font-semibold uppercase tracking-wider">Value: {project.value}</div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-dark p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gold/60 text-[10px] font-semibold uppercase tracking-wider">{project.category}</span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 ${
                    project.status === 'Ongoing' ? 'bg-green-500/20 text-green-400' : 'bg-steel-dark/60 text-slate/40'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-slate text-lg mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate/50 text-sm font-body leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
