import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Build your next big idea with a world-class freelancer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-gray-700"
          >
            From ideation to launch — custom software, delightful design, and reliable delivery.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition">View Work</a>
            <a href="/dashboard" className="px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold border border-gray-300 hover:bg-gray-50 transition">Start a Project</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
