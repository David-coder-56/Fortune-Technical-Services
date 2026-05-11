import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { services } from '../../utils/data'
import { fadeUp, staggerContainer } from '../../utils/animations'
import ParallaxWrapper from '../common/ParallaxWrapper'

const serviceIcons = { Drill: '⬡', Mountain: '▲', Map: '◈', Wrench: '⚙', Construction: '◼', Shield: '⬡' }

export default function ServicesSection() {
  const previewServices = services.slice(0, 4)

  return (
    <section className="py-28 bg-charcoal">
      <ParallaxWrapper className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            label="What We Do"
            title={<>Core<br />Services</>}
            subtitle="Comprehensive mining and drilling services engineered for West Africa's complex geological environments."
          />
          <Link to="/services" className="btn-outline shrink-0">
            All Services <ChevronRight size={14} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {previewServices.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="card-dark p-8 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-gold/40 text-xs font-semibold uppercase tracking-wider mb-6">
                {String(i + 1).padStart(2, '0')} / {service.category}
              </div>
              <div className="text-4xl mb-4 text-gold/60 group-hover:text-gold transition-colors">
                {serviceIcons[service.icon]}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="font-body text-slate/50 text-sm leading-relaxed mb-6">
                {service.description.substring(0, 100)}...
              </p>

              <Link to="/services" className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                Learn More <ArrowRight size={14} />
              </Link>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </ParallaxWrapper>
    </section>
  )
}
