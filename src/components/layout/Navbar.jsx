import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScrollY } from '../../hooks/useScroll'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollY = useScrollY()
  const location = useLocation()
  const scrolled = scrollY > 50

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal/90 backdrop-blur-xl border-b border-steel-dark/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.jpg" alt="Fortune Logo" className="w-10 h-10 object-contain rounded transition-transform group-hover:scale-105" />
            <div>
              <div className="font-display font-black text-slate text-sm uppercase tracking-widest leading-tight">
                Fortune
              </div>
              <div className="font-mono text-gold text-[9px] uppercase tracking-[0.25em] leading-tight">
                Technical Services
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-body text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-slate/60 hover:text-slate'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-px bg-gold"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="btn-primary text-xs py-3 px-6">
              Get a Quote <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-2 mt-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-4 font-display font-black text-5xl uppercase tracking-tight border-b border-steel-dark transition-colors ${
                      location.pathname === link.path ? 'text-gold' : 'text-slate/40 hover:text-slate'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-12">
              <Link to="/contact" className="btn-primary w-full justify-center">
                Request a Quote <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gold z-[60] origin-left"
        style={{ scaleX: 0 }}
        id="progress-bar"
      />
    </>
  )
}
