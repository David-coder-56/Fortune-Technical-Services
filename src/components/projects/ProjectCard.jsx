import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { fadeUp } from '../../utils/animations'

const bgGradients = {
  mining: 'from-amber-950 via-stone-900 to-navy-dark',
  survey: 'from-blue-950 via-slate-900 to-navy-dark',
  drilling: 'from-orange-950 via-stone-900 to-charcoal',
  civil: 'from-zinc-900 via-neutral-900 to-navy-dark',
}

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      layout
      variants={fadeUp}
      onClick={() => onClick(project)}
      className="group cursor-pointer border border-steel-dark/40 hover:border-gold/40 transition-all duration-500 overflow-hidden"
    >
      {/* Image area */}
      <div className={`relative h-52 bg-gradient-to-br ${bgGradients[project.image]} overflow-hidden`}>
        {project.imgUrl && (
          <>
            <img src={project.imgUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-navy-dark/40 mix-blend-multiply" />
          </>
        )}
        <div className="absolute inset-0 grid-line opacity-20" />
        <div className="absolute inset-0 flex items-end justify-between p-4">
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 ${
            project.status === 'Ongoing'
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-slate/10 text-slate/50 border border-slate/10'
          }`}>
            {project.status}
          </span>
          <span className="font-display font-black text-5xl text-white/5">{project.year}</span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
            <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">Click for Details</div>
            <ArrowRight size={20} className="text-gold mx-auto" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-navy-dark p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gold/60 text-[10px] font-semibold uppercase tracking-wider">{project.category}</span>
          <span className="w-1 h-1 bg-gold/30 rounded-full" />
          <span className="text-slate/40 text-[10px] font-semibold uppercase tracking-wider">{project.value}</span>
        </div>
        <h3 className="font-heading font-bold text-slate text-lg uppercase leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex items-center gap-1 text-slate/40 text-xs mb-4">
          <MapPin size={10} className="text-gold/40" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">{project.location}</span>
        </div>
        <p className="font-body text-slate/50 text-sm leading-relaxed line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-slate/40 border border-steel-dark/40 px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
