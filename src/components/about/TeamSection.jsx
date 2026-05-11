import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { team } from '../../utils/data'
import { staggerContainer, scaleIn } from '../../utils/animations'

export default function TeamSection() {
  return (
    <section id="team" className="py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Leadership"
          title={<>Meet the<br />Team</>}
          subtitle="Certified engineers and seasoned professionals driving excellence across every project."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              variants={scaleIn}
              className="group"
            >
              {/* Photo placeholder with initials */}
              <div className="h-56 bg-steel-dark relative overflow-hidden mb-4 rounded-t-lg">
                {member.imgUrl ? (
                  <img src={member.imgUrl} alt={member.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-navy to-steel-dark" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display font-black text-6xl text-slate/10 uppercase">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
              <div className="text-gold/60 text-xs font-semibold uppercase tracking-wider mb-1">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-heading font-bold text-slate mb-1 group-hover:text-gold transition-colors">
                {member.name}
              </h3>
              <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</div>
              <p className="font-body text-slate/50 text-sm leading-relaxed">{member.credentials}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
