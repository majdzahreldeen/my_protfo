import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ResponsiveImage from '../components/ResponsiveImage'

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
        {projects.map((p) => (
          <li key={p.id} className="p-6 bg-[#071127] rounded-lg shadow-lg hover:scale-[1.01] transition-transform">
            {p.imageBase ? (
              <div className="mb-4 rounded-md overflow-hidden">
                <ResponsiveImage srcBase={p.imageBase} alt={`${p.title} preview`} />
              </div>
            ) : (
              p.image && <img src={p.image} alt={`${p.title} preview`} loading="lazy" className="mb-4 rounded-md" />
            )}

            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-300">{p.description}</p>
            <div className="mt-4">
              <Link to={`/projects/${p.id}`} className="text-sm underline">View</Link>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
