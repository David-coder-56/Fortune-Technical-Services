import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { fadeUp } from '../../utils/animations'

const serviceIcons = {
  Drill: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="18" y="2" width="4" height="28" fill="currentColor" opacity="0.8"/>
      <polygon points="20,32 15,38 25,38" fill="currentColor"/>
      <rect x="14" y="6" width="12" height="3" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="14" y="12" width="12" height="3" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="14" y="18" width="12" height="3" rx="1" fill="currentColor" opacity="0.4"/>
    </svg>
  ),
  Mountain: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <polygon points="20,4 2,36 38,36" fill="currentColor" opacity="0.15"/>
      <polygon points="20,4 2,36 38,36" stroke="currentColor" strokeWidth="2" fill="none"/>
      <polygon points="20,14 12,36 28,36" fill="currentColor" opacity="0.6"/>
    </svg>
  ),
  Map: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="6" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
      <path d="M14 6v28M26 6v28" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <path d="M4 18h32M4 26h32" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <circle cx="20" cy="20" r="4" fill="currentColor"/>
    </svg>
  ),
  Wrench: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M28 6 C34 6 38 10 38 16 C38 22 34 26 28 26 C26 26 24 25 22 24 L8 38 C7 39 5 39 4 38 C3 37 3 35 4 34 L18 20 C17 18 16 16 14 C16 8 20 4 26 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle cx="28" cy="14" r="4" fill="currentColor" opacity="0.6"/>
    </svg>
  ),
  Construction: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="28" width="32" height="8" rx="1" fill="currentColor" opacity="0.6"/>
      <rect x="10" y="14" width="20" height="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
      <rect x="16" y="8" width="8" height="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
      <line x1="20" y1="4" x2="20" y2="8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Shield: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 4 L36 10 V22 C36 30 28 36 20 38 C12 36 4 30 4 22 V10 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
      <path d="M20 8 L32 13 V22 C32 28 26 33 20 35 C14 33 8 28 8 22 V13 Z" fill="currentColor" opacity="0.15"/>
      <path d="M13 20 L18 25 L28 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

export default function ServiceCard({ service, index, isLarge }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative card-dark p-8 md:p-10 overflow-hidden cursor-pointer transition-all duration-500 ${
        isLarge ? 'flex flex-col md:flex-row gap-8 items-start' : 'flex flex-col'
      }`}
      style={{ minHeight: isLarge ? '200px' : '280px' }}
    >
      {/* Background glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none"
      />

      {/* Number */}
      <div className="absolute top-6 right-8 font-display font-black text-6xl text-slate/5">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className={`text-gold/60 group-hover:text-gold transition-colors duration-300 mb-6 ${isLarge ? 'md:mb-0 shrink-0' : ''}`}>
        {serviceIcons[service.icon]}
      </div>

      <div className="flex-1">
        <div className="text-gold/40 text-xs font-semibold uppercase tracking-wider mb-3">{service.category}</div>
        <h3 className="font-heading font-bold text-slate text-xl md:text-2xl mb-4 group-hover:text-gold transition-colors duration-300">
          {service.title}
        </h3>
        <p className="font-body text-slate/50 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Detail tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.details.map((detail) => (
            <span key={detail} className="text-[10px] font-semibold uppercase tracking-wider text-slate/40 border border-steel-dark/60 px-3 py-1">
              {detail}
            </span>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300"
        >
          Request This Service <ArrowRight size={14} />
        </Link>
      </div>

      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold-light to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  )
}
