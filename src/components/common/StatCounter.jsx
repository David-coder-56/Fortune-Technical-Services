import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'

export default function StatCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCounter(value, 2200, inView)

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-black text-4xl md:text-5xl text-gold leading-none">
        {count}{suffix}
      </div>
      <div className="font-mono text-slate/50 text-xs uppercase tracking-[0.2em] mt-2">
        {label}
      </div>
    </div>
  )
}
