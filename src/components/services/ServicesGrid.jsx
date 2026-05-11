import { motion } from 'framer-motion'
import { services } from '../../utils/data'
import { staggerContainer } from '../../utils/animations'
import ServiceCard from './ServiceCard'


export default function ServicesGrid() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} isLarge={false} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
