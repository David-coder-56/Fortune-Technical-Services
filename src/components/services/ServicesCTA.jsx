import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-gold">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-display font-black text-navy text-4xl md:text-5xl leading-tight">
            Need a Custom Solution?
          </h2>
          <p className="font-body text-navy/80 font-medium mt-2">Our engineers will design a program specific to your geology and budget.</p>
        </div>
        <Link to="/contact" className="shrink-0 inline-flex items-center gap-3 bg-navy text-gold font-heading font-bold uppercase tracking-widest px-10 py-5 hover:bg-navy-light transition-colors">
          Talk to an Engineer <ChevronRight size={18} />
        </Link>
      </div>
    </section>
  )
}
