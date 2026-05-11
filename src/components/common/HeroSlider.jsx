import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const miningImages = [
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/Bagger-garzweiler.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/54/Bingham_Canyon_April_2005.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9c/Caterpillar_Highwall_Mine_HW300.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/69/Chuquicamata-002.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/54/Coal_Haul_Truck_at_North_Antelope_Rochelle.png',
  'https://upload.wikimedia.org/wikipedia/commons/0/06/Artisanal_gold_Dodoma001.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/ea/Coal_miner_spraying_rock_dust.jpg',
]

export default function HeroSlider({ seedPrefix = 'fortune', images = null }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Use provided images, or deterministically shuffle the mining images based on seedPrefix
  const hash = seedPrefix.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const displayImages = images || [...miningImages].sort((a, b) => {
    const hashA = (hash * a.charCodeAt(10)) % 100
    const hashB = (hash * b.charCodeAt(10)) % 100
    return hashA - hashB
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count)
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
