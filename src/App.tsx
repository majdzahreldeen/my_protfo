import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import { NavLink } from 'react-router-dom'

const Footer = () => (
  <footer className="max-w-6xl mx-auto text-center py-12 text-sm text-gray-400">© {new Date().getFullYear()} Majd Zahreldeen</footer>
)

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <NavLink className="mr-4 hover:underline" to="/">Home</NavLink>
      <NavLink className="mr-4 hover:underline" to="/projects">Projects</NavLink>
      <NavLink className="hover:underline" to="/contact">Contact</NavLink>
    </nav>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <a href="#content" className="skip-link">Skip to content</a>
      <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#071133] to-[#000000] text-white p-6">
        <header className="max-w-6xl mx-auto flex items-center justify-between py-6">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Majd Zahreldeen logo" className="w-10 h-10 mr-3" />
            <h1 className="text-2xl font-semibold">Majd Zahreldeen</h1>
          </div>
          <Nav />
        </header>

        <Suspense>
          <div id="content">
            <AnimatedRoutes />
          </div>
        </Suspense>

        {/* routes for project details */}
        

        <Footer />
      </main>
    </BrowserRouter>
  )
}
