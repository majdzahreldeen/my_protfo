import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

const ThreeScene = lazy(() => import('./ThreeScene'))

// helper to pass current route key to the scene via a data attribute
function useRouteKey() {
  try {
    // only works in browser
    return window.location.pathname || 'home'
  } catch {
    return 'home'
  }
}

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold mb-4">Front-end Developer & 3D UI Enthusiast</h2>
        <p className="mb-6 text-gray-300">
          Hi, I’m Majd — I build immersive interfaces using React and Three.js. (Bio placeholder — you can edit later.)
        </p>
        <div className="flex gap-4">
          <a className="bg-white text-black px-4 py-2 rounded-md" href="/projects">View Projects</a>
          <a className="border border-white px-4 py-2 rounded-md" href="#contact">Get in touch</a>
        </div>
      </motion.div>

      <motion.div
        className="shadow-2xl rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'circOut' }}
      >
        <Suspense fallback={<div className="w-full h-96 flex items-center justify-center">Loading 3D…</div>}>
          <ThreeScene sceneKey={useRouteKey()} />
        </Suspense>
      </motion.div>
    </section>
  )
}
