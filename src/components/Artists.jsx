import { motion } from 'framer-motion'

const artists = [
  {
    name: 'Mila',
    title: 'Color Director',
    bio: 'Specialist in dimensional color, lived-in blondes, and glossy finishes.',
    img: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1280&auto=format&fit=crop',
  },
  {
    name: 'Jonas',
    title: 'Cutting Specialist',
    bio: 'Precision cuts and effortless shapes tailored to your features.',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1280&auto=format&fit=crop',
  },
  {
    name: 'Ava',
    title: 'Stylist',
    bio: 'Polished blowouts and event styling with a modern edge.',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1280&auto=format&fit=crop',
  },
]

export default function Artists() {
  return (
    <section id="artists" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Our artists</h2>
          <p className="mt-3 text-gray-600">A team of specialists dedicated to healthy hair and modern, wearable beauty.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {artists.map((a) => (
            <motion.div key={a.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
              <img src={a.img} alt={a.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{a.name}</h3>
                  <span className="text-xs rounded-full bg-purple-50 text-purple-700 px-2 py-1">{a.title}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{a.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
