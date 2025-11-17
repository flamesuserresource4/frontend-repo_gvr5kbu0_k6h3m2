import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid place-items-center overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-blue-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
          The Fragrance of Style
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-gray-700">
          A modern salon experience blending precision cuts, color artistry, and effortless care.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">Book an appointment</a>
          <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur border border-white/60 text-gray-900 px-6 py-3 text-sm font-medium hover:bg-white transition-colors">Explore services</a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
    </section>
  )
}
