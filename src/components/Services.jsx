import { Scissors, SprayCan, Brush, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Signature Haircut',
    description: 'Tailored cut and precision finish to suit your features and lifestyle.',
    price: '$55',
  },
  {
    icon: SprayCan,
    title: 'Color & Gloss',
    description: 'Customized shade and luminous gloss for a radiant, healthy look.',
    price: '$120',
  },
  {
    icon: Brush,
    title: 'Blowout',
    description: 'Smooth, voluminous styling with long-lasting polish.',
    price: '$45',
  },
  {
    icon: Sparkles,
    title: 'Scalp Treatment',
    description: 'Relaxing, restorative cleanse and scalp therapy.',
    price: '$35',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">Crafted treatments designed for modern hair health and effortless style.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white grid place-items-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.description}</p>
              <p className="mt-4 text-sm font-medium text-gray-900">Starting at {s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
