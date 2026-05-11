import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BaseSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="w-full h-[520px] relative rounded-2xl overflow-hidden border border-steel-dark/40 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-navy-dark/25 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
      {/* Slide dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-gold w-5' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  )
}
