import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { milestones } from '../../utils/data'
import { fadeUp } from '../../utils/animations'

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-28 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="The Journey"
          title={<>Our<br />Milestones</>}
          subtitle="18 years of growth, precision, and delivering results in West Africa's most challenging environments."
        />

        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-steel-dark/40 -translate-x-1/2" />

          {milestones.map((milestone, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={milestone.year}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.1 }}
                className={`relative flex items-start mb-16 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } pl-20 md:pl-0`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold border-4 border-charcoal rounded-full z-10 mt-1" />

                {/* Year badge */}
                <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 font-display font-black text-gold text-xl ${
                  isLeft ? '-translate-x-[calc(50%+60px)]' : 'translate-x-[calc(-50%+60px)]'
                }`}>
                  {milestone.year}
                </div>

                <div className={`md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-2 md:hidden">{milestone.year}</div>
                  <div className="card-dark p-6">
                    <h3 className="font-heading font-bold text-slate mb-3">{milestone.title}</h3>
                    <p className="font-body text-slate/50 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
