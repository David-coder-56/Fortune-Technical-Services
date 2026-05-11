import { motion } from 'framer-motion'
import { X, MapPin, Clock, TrendingUp, ArrowRight } from 'lucide-react'

const bgGradients = {
  mining: 'from-amber-950 via-stone-900 to-navy-dark',
  survey: 'from-blue-950 via-slate-900 to-navy-dark',
  drilling: 'from-orange-950 via-stone-900 to-charcoal',
  civil: 'from-zinc-900 via-neutral-900 to-navy-dark',
}

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-charcoal/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-navy-dark border border-steel-dark/60 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative rounded-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white hover:text-gold transition-colors z-50 bg-black/20 backdrop-blur-sm rounded-full"
        >
          <X size={20} />
        </button>

        <div className={`h-48 bg-gradient-to-br ${bgGradients[project.image]} relative overflow-hidden`}>
          {project.imgUrl && (
            <>
              <img src={project.imgUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-navy-dark/60 mix-blend-multiply" />
            </>
          )}
          <div className="absolute inset-0 grid-line opacity-20" />
          <div className="absolute inset-0 flex items-end p-8 relative z-10">
            <div>
              <div className="text-gold/60 text-xs font-semibold uppercase tracking-wider mb-2">{project.category}</div>
              <h2 className="font-display font-black text-3xl text-slate uppercase leading-tight">{project.title}</h2>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Clock, label: 'Duration', value: project.duration },
              { icon: TrendingUp, label: 'Depth', value: project.depth },
              { icon: MapPin, label: 'Location', value: project.location.split(',')[0] },
              { icon: ArrowRight, label: 'Value', value: project.value },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="border border-steel-dark/40 p-4 rounded-sm">
                <div className="flex items-center gap-1 text-gold/60 mb-2">
                  <Icon size={12} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">{label}</span>
                </div>
                <div className="font-heading font-bold text-slate text-sm uppercase">{value}</div>
              </div>
            ))}
          </div>

          <p className="font-body text-slate/60 leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-gold/60 border border-gold/20 px-3 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
