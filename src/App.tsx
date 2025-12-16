import { Suspense } from 'react'
import Hero from './components/Hero'

const Footer = () => (
  <footer className="max-w-6xl mx-auto text-center py-12 text-sm text-gray-400">© {new Date().getFullYear()} Majd Zahreldeen</footer>
)

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#071133] to-[#000000] text-white p-6">
      <header className="max-w-6xl mx-auto flex items-center justify-between py-6">
        <h1 className="text-2xl font-semibold">Majd Zahreldeen</h1>
        <nav>
          <a className="mr-4 hover:underline" href="#projects">Projects</a>
          <a className="mr-4 hover:underline" href="#about">About</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </nav>
      </header>

      <Suspense>
        <Hero />
      </Suspense>

      <section id="projects" className="max-w-6xl mx-auto mt-20">
        <h3 className="text-2xl font-semibold mb-4">Featured Projects</h3>
        <p className="text-gray-300">(Placeholder project list — I will add projects later.)</p>
      </section>

      <Footer />

    </main>
  )
}
