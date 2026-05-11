import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../utils/animations'

export default function CTASection() {
  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 grid-line opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[100px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="section-label justify-center mb-6">
            Ready to Start?
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-black text-5xl md:text-7xl text-slate leading-tight mb-8">
            Let's Build Something <span className="text-gold">Strong</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-slate/50 text-lg mb-12 max-w-xl mx-auto">
            Whether you're planning a major exploration program or need specialist drilling support, our team is ready to mobilize.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base py-5 px-10">
              Request a Consultation <ChevronRight size={18} />
            </Link>
            <a href="tel:+231776123456" className="btn-outline text-base py-5 px-10">
              Call Us Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
