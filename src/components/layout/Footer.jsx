import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight, ChevronRight } from 'lucide-react'
import { contactInfo } from '../../utils/data'

const links = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/about#team' },
    { label: 'Milestones', path: '/about#timeline' },
    { label: 'Careers', path: '/contact' },
  ],
  Services: [
    { label: 'Rotary Drilling', path: '/services' },
    { label: 'Mining Operations', path: '/services' },
    { label: 'Geological Survey', path: '/services' },
    { label: 'Equipment Leasing', path: '/services' },
  ],
  Projects: [
    { label: 'All Projects', path: '/projects' },
    { label: 'Mining', path: '/projects?filter=Mining' },
    { label: 'Drilling', path: '/projects?filter=Drilling' },
    { label: 'Civil Works', path: '/projects?filter=Civil' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-steel-dark/30">
      {/* Top strip */}
      <div className="bg-gold py-4 overflow-hidden">
        <div className="ticker-track whitespace-nowrap text-navy font-display font-black uppercase text-sm tracking-widest">
          {Array(8).fill('Fortune Technical Services Inc. — Mining · Drilling · Geology · Equipment ·\u00A0').join('')}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.jpg" alt="Fortune Logo" className="w-12 h-12 object-contain rounded" />
              <div>
                <div className="font-display font-black text-slate text-base uppercase tracking-widest leading-tight">
                  Fortune
                </div>
                <div className="font-mono text-gold text-[10px] uppercase tracking-[0.25em]">
                  Technical Services Inc.
                </div>
              </div>
            </Link>
            <p className="text-slate/50 font-body text-sm leading-relaxed mb-6 max-w-xs">
              West Africa's premier mining and drilling services company. Delivering precision engineering since 2006.
            </p>
            <div className="space-y-3">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-slate/50 hover:text-gold transition-colors text-sm group">
                <Phone size={14} className="text-gold" />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-slate/50 hover:text-gold transition-colors text-sm">
                <Mail size={14} className="text-gold" />
                {contactInfo.email}
              </a>
              <div className="flex items-start gap-3 text-slate/50 text-sm">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                {contactInfo.address}
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-heading font-bold text-slate uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-gold" />
                {section}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-slate/40 hover:text-gold text-sm font-body transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-steel-dark/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate/30 text-xs font-mono">
            © {new Date().getFullYear()} Fortune Technical Services Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate/30 text-xs">
            <span>Monrovia, Liberia</span>
            <span className="w-1 h-1 bg-gold rounded-full" />
            <span>Reg. No. LR-2006-00412</span>
            <span className="w-1 h-1 bg-gold rounded-full" />
            <span>ISO 9001 · ISO 14001 · ISO 45001</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
