import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Featured Work</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="group border rounded-xl p-4 bg-white hover:shadow-lg transition">
                  <div className="h-40 rounded-lg bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100" />
                  <h3 className="mt-3 font-semibold">Project {i}</h3>
                  <p className="text-sm text-gray-600">A modern, responsive, and fast web experience.</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="/dashboard" className="px-5 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition">Start your project</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
