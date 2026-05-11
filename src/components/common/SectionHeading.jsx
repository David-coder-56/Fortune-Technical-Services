import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../utils/animations'

export default function SectionHeading({ label, title, subtitle, light = false, center = false }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={center ? 'text-center' : ''}
    >
      {label && (
        <motion.div variants={fadeUp} className="section-label justify-center mb-4">
          {label}
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase leading-none mb-6 ${
          light ? 'text-navy' : 'text-slate'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`font-body text-lg leading-relaxed max-w-2xl ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-steel' : 'text-slate/50'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
