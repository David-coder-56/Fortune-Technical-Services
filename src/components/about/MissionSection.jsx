import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { values } from '../../utils/data'
import { fadeLeft, fadeRight } from '../../utils/animations'

export default function MissionSection() {
  return (
    <section className="py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="section-label mb-6">Mission & Vision</div>
            <div className="relative pl-8 border-l-2 border-gold mb-10">
              <Quote size={32} className="text-gold/20 mb-4" />
              <p className="font-display font-bold text-2xl md:text-3xl text-slate leading-snug">
                To be the most trusted and technically capable mining services partner in West Africa — delivering every project safely, on time, and to the highest standard.
              </p>
            </div>
            <p className="font-body text-slate/60 text-lg leading-relaxed mb-6">
              Fortune Technical Services Inc. was founded on the conviction that Liberia's abundant mineral wealth deserves world-class technical expertise delivered by Liberian hands.
            </p>
            <p className="font-body text-slate/60 leading-relaxed">
              Today, with 18 years of proven performance, 42 engineers, and a fleet of 22 drill rigs operating across West Africa, we are the indigenous contractor of choice for multinational mining houses and development agencies alike.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, i) => (
              <div key={value.title} className="card-dark p-6 group hover:bg-navy-light transition-colors">
                <div className="text-gold/40 text-xs font-semibold uppercase tracking-wider mb-4">0{i + 1}</div>
                <h3 className="font-heading font-bold text-slate uppercase tracking-wide text-sm mb-3 group-hover:text-gold transition-colors">
                  {value.title}
                </h3>
                <p className="font-body text-slate/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
