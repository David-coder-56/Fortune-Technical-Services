import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../utils/animations'
import AboutHeroSlider from './AboutHeroSlider'

export default function AboutHero() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0.7, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden bg-charcoal grid-line">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 to-charcoal z-0" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
      <div className="noise-overlay absolute inset-0 z-10" />

      <motion.div style={{ y, opacity }} className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="section-label mb-6">Our Story</motion.div>
            <motion.h1 variants={fadeUp} className="font-display font-black text-7xl md:text-8xl leading-tight text-slate mb-6">
              Built on<br /><span className="text-gold">Rock Solid</span><br />Values
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body text-slate/60 text-lg leading-relaxed max-w-md">
              Discover the history, mission, and people that make Fortune Technical Services the premier partner in West Africa.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <AboutHeroSlider />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
