import { motion } from 'framer-motion'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* pass the route key down so the 3D scene can react on route changes */}
      <Hero />
    </motion.div>
  )
}
