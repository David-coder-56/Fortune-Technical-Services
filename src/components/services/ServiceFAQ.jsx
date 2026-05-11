import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../utils/animations'

const faqs = [
  {
    question: 'What regions do you operate in?',
    answer: 'While our headquarters are in Monrovia, Liberia, we have full operational capability across West Africa, including Sierra Leone, Guinea, and Côte d\'Ivoire.'
  },
  {
    question: 'Do you provide short-term equipment rental?',
    answer: 'Yes, we offer flexible leasing options for our heavy machinery fleet, ranging from a few weeks for specific projects to multi-year contracts for mine site support.'
  },
  {
    question: 'How do you ensure environmental compliance?',
    answer: 'Every project begins with a comprehensive Environmental Management Plan (EMP). We strictly adhere to ISO 14001 standards and local regulatory requirements to minimize our footprint.'
  },
  {
    question: 'What is your typical lead time for mobilization?',
    answer: 'Mobilization times vary depending on site location and equipment requirements, but we generally aim to be operational within 14-21 days for regional projects.'
  },
  {
    question: 'Are your operators certified?',
    answer: 'Every machine operator and drill crew member at Fortune undergoes rigorous internal training and holds recognized certifications for their specific machinery.'
  }
]

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(index === 0)

  return (
    <div className="border-b border-steel-dark/40 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <h3 className={`font-display font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-gold' : 'text-slate group-hover:text-gold/70'}`}>
          {faq.question}
        </h3>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-gold text-charcoal' : 'bg-gold/5 text-gold'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-body text-slate/50 text-base leading-relaxed pt-4 max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServiceFAQ() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div variants={fadeUp} className="section-label mb-6">Common Questions</motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-black text-5xl text-slate uppercase mb-8">
              Service <br /><span className="text-gold">Insights</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-slate/60 text-lg leading-relaxed mb-10">
              Clear answers to the most common inquiries about our operations, mobilization, and compliance standards.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex items-center gap-4 p-6 bg-gold/5 border border-gold/20 rounded-lg">
              <HelpCircle className="text-gold shrink-0" size={32} />
              <div>
                <p className="text-slate/70 text-sm font-semibold">Still have questions?</p>
                <p className="text-slate/40 text-xs mt-1">Our technical team is available 24/7 for consultations.</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-2">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
