import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Target, ShieldCheck } from 'lucide-react'
import { fadeLeft, fadeRight, fadeUp } from '../../utils/animations'
import AboutPreviewSlider1 from './AboutPreviewSlider1'
import AboutPreviewSlider2 from './AboutPreviewSlider2'
import ParallaxWrapper from '../common/ParallaxWrapper'

export default function AboutPreviewSection() {
  return (
    <section className="py-28 bg-charcoal relative">
      <ParallaxWrapper className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Row 1: Text Left, Slider Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeRight}
          >
            <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Our History</div>
            <h2 className="font-display font-black text-5xl md:text-6xl text-slate leading-tight mb-6">
              A Legacy of <br /><span className="text-gold">Excellence</span>
            </h2>
            <p className="font-body text-slate/60 text-lg leading-relaxed mb-6">
              Founded in 2006, Fortune Technical Services has grown from a local operation into West Africa's most trusted partner for complex mining and drilling projects.
            </p>
            <p className="font-body text-slate/60 text-lg leading-relaxed mb-10">
              We combine deep regional expertise with world-class engineering standards to deliver results where others can't.
            </p>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Target className="text-gold" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate text-lg">Precision Focused</h4>
                <p className="font-body text-slate/50 text-sm">Every drill, every blast, perfectly executed.</p>
              </div>
            </div>

            <Link to="/about" className="btn-outline">
              Discover Our Story <ChevronRight size={16} />
            </Link>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeLeft}
            className="relative"
          >
             <AboutPreviewSlider1 />
          </motion.div>
        </div>

        {/* Row 2: Slider Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeRight}
            className="order-2 lg:order-1 relative"
          >
             <AboutPreviewSlider2 />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeLeft}
            className="order-1 lg:order-2"
          >
            <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Our Approach</div>
            <h2 className="font-display font-black text-5xl md:text-6xl text-slate leading-tight mb-6">
              Safety First, <br /><span className="text-gold">Always.</span>
            </h2>
            <p className="font-body text-slate/60 text-lg leading-relaxed mb-6">
              We operate some of the most advanced heavy machinery in the world, and our absolute priority is the safety of our team and the environment.
            </p>
            <p className="font-body text-slate/60 text-lg leading-relaxed mb-10">
              Our Zero LTI (Lost Time Injury) record is a testament to our rigorous training programs and uncompromising safety culture.
            </p>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <ShieldCheck className="text-gold" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate text-lg">ISO Certified</h4>
                <p className="font-body text-slate/50 text-sm">Global standards for health, safety & environment.</p>
              </div>
            </div>

            <Link to="/about#team" className="btn-outline">
              Meet Our Team <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </ParallaxWrapper>
    </section>
  )
}
