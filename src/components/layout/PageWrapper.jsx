import { motion } from 'framer-motion'
import { pageTransition } from '../../utils/animations'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        {...pageTransition}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
