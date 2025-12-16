import ThreeScene from './components/ThreeScene'

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

      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Front-end Developer & 3D UI Enthusiast</h2>
          <p className="mb-6">Hi, I’m Majd — I build immersive interfaces using React and Three.js. (Bio placeholder — you can edit later.)</p>
          <div className="flex gap-4">
            <a className="bg-white text-black px-4 py-2 rounded-md" href="#projects">View Projects</a>
            <a className="border border-white px-4 py-2 rounded-md" href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="shadow-xl rounded-xl overflow-hidden">
          <ThreeScene />
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto mt-20">
        <h3 className="text-2xl font-semibold mb-4">Featured Projects</h3>
        <p className="text-gray-300">(Placeholder project list — I will add projects later.)</p>
      </section>

    </main>
  )
}
