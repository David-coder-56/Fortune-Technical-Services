import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const heroImages = [
  '/images/nimba_mountain.png',
  '/images/fabrication.png',
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-[600px] relative rounded-3xl overflow-hidden border border-steel-dark/40 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={heroImages[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-navy-dark/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
    </div>
  )
}
