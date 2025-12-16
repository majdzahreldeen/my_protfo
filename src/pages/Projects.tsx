import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <p className="text-gray-300 mb-6">(Click a project to preview — the hero 3D scene will react to navigation.)</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li className="p-6 bg-[#071127] rounded-lg shadow-lg hover:scale-[1.01] transition-transform">
          <h3 className="font-semibold">Project One</h3>
          <p className="text-gray-300">A demo project showcasing 3D UI.</p>
          <div className="mt-4">
            <Link to="#" className="text-sm underline">View</Link>
          </div>
        </li>
        <li className="p-6 bg-[#071127] rounded-lg shadow-lg hover:scale-[1.01] transition-transform">
          <h3 className="font-semibold">Project Two</h3>
          <p className="text-gray-300">Another demo with animations.</p>
          <div className="mt-4">
            <Link to="#" className="text-sm underline">View</Link>
          </div>
        </li>
      </ul>
    </motion.div>
  )
}
