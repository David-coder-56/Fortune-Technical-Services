import { motion } from 'framer-motion'
import { ShieldCheck, HardHat, FileCheck, Award } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../utils/animations'

const safetyFeatures = [
  {
    icon: HardHat,
    title: 'Personal Protection',
    description: 'Mandatory high-visibility gear, head protection, and respiratory systems for all site personnel.'
  },
  {
    icon: FileCheck,
    title: 'Daily Assessments',
    description: 'Pre-shift safety briefings and Job Hazard Analysis (JHA) are required for every operation.'
  },
  {
    icon: ShieldCheck,
    title: 'ISO 45001',
    description: 'Our occupational health and safety management system is audited to international standards.'
  },
  {
    icon: Award,
    title: 'Training Programs',
    description: 'Continuous heavy machinery and emergency response training for all field operators.'
  }
]

export default function SafetySection() {
  return (
    <section className="py-28 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 grid-line opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="section-label mb-6">Our Priority</motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-black text-5xl text-slate uppercase mb-8">
              Uncompromising <span className="text-gold">Safety</span> Standards
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-slate/60 text-lg leading-relaxed mb-10">
              In the demanding environment of mining and drilling, safety isn't just a requirement—it's our core operating principle. We have maintained a zero Lost Time Injury (LTI) record since 2019, reflecting our absolute commitment to the well-being of our team.
            </motion.p>
            
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-display font-black text-gold mb-2">1M+</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate/40">Safe Man-Hours</div>
              </div>
              <div>
                <div className="text-4xl font-display font-black text-gold mb-2">0</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate/40">Recordable Injuries</div>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-dark p-8 border-l-2 border-transparent hover:border-gold transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <feature.icon className="text-gold" size={24} />
                </div>
                <h3 className="font-heading font-bold text-slate uppercase tracking-wide text-sm mb-4">
                  {feature.title}
                </h3>
                <p className="font-body text-slate/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
