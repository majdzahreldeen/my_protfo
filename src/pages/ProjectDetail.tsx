import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import ThreeScene from '../components/ThreeScene'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-2xl font-semibold">Project not found</h2>
        <p className="mt-4">The project you are looking for does not exist.</p>
        <Link className="underline mt-6 block" to="/projects">Back to projects</Link>
      </div>
    )
  }

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto py-12"
    >
      <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
      <p className="text-gray-300 mb-6">{project.description}</p>

      <div className="shadow-lg rounded-xl overflow-hidden mb-8">
        {/* pass the project id as sceneKey so ThreeScene can change color/animation */}
        <ThreeScene sceneKey={project.id} />
      </div>

      <Link className="underline" to="/projects">Back to projects</Link>
    </motion.div>
  )
}
