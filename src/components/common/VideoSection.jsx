import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

export default function VideoSection({ title, subtitle, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <section className="py-24 bg-navy relative overflow-hidden border-y border-steel-dark/30">
        <div className="absolute inset-0 grid-line opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-4xl md:text-5xl text-slate uppercase tracking-wide mb-4">
              {title || 'Watch Our Process'}
            </h2>
            <p className="font-body text-slate/40 max-w-2xl mx-auto">
              {subtitle || 'See our team and equipment in action across various high-profile operations.'}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setIsPlaying(true)}>
            <div className="aspect-video bg-charcoal relative">
              <img src={thumbnail || '/images/fabrication.png'} alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold/40 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-navy shadow-lg shadow-gold/20">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsPlaying(false)}
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 p-4 text-slate hover:text-gold transition-colors"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden border border-steel-dark/60 shadow-2xl shadow-black/50"
            >
              {/* Using a placeholder YouTube video embed */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
