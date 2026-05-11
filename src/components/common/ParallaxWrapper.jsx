import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxWrapper({ children, className = '' }) {
  const ref = useRef(null)
  
  // start start: Animation begins when the top of the element hits the top of the viewport
  // end start: Animation ends when the bottom of the element hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  // As the user scrolls down past the element, it fades out and moves down slightly
  // We start the animation only when the element is nearly off-screen (0.7 to 1.0)
  const y = useTransform(scrollYProgress, [0.7, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  )
}
