import { useEffect, useState } from 'react'
import { Calendar, Mail, Phone, User, Loader2 } from 'lucide-react'

const defaultServices = [
  { id: 'cut', name: 'Signature Haircut' },
  { id: 'color', name: 'Color & Gloss' },
  { id: 'blowout', name: 'Blowout' },
  { id: 'treatment', name: 'Scalp Treatment' },
]

export default function Booking() {
  const [services, setServices] = useState(defaultServices)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(null)
  const [form, setForm] = useState({
    client_name: '', email: '', phone: '', service: 'cut', stylist: '', date: '', time: '', notes: ''
  })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    // Attempt to fetch services from backend if available
    fetch(`${backend}/api/services`).then(async (res) => {
      if (res.ok) {
        const data = await res.json()
        setServices(data.map(d => ({ id: d.id, name: d.name })))
      }
    }).catch(() => {})
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitted(null)
    try {
      const res = await fetch(`${backend}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setSubmitted({ ok: true })
        setForm({ client_name: '', email: '', phone: '', service: services[0]?.id || 'cut', stylist: '', date: '', time: '', notes: '' })
      } else {
        setSubmitted({ ok: false, error: data.detail || 'Unable to submit' })
      }
    } catch (err) {
      setSubmitted({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="relative py-24 bg-gradient-to-b from-white to-purple-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Book an appointment</h2>
          <p className="mt-3 text-gray-600">Well confirm your time by email or phone shortly after submission.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Full name</label>
            <div className="relative">
              <User className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input name="client_name" value={form.client_name} onChange={handleChange} required placeholder="Taylor Swift" className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <div className="relative">
              <Phone className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="(123) 456-7890" className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Service</label>
            <select name="service" value={form.service} onChange={handleChange} className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400">
              {services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Preferred stylist (optional)</label>
            <input name="stylist" value={form.stylist} onChange={handleChange} placeholder="Any" className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Time</label>
            <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>

          <div className="md:col-span-2 grid gap-2">
            <label className="text-sm font-medium text-gray-700">Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" placeholder="Tell us anything we should know" className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>

          <div className="md:col-span-2">
            <button disabled={loading} className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              {loading && <Loader2 className="h-4 w-4 animate-spin" />} Request booking
            </button>
            {submitted?.ok && <p className="mt-3 text-sm text-green-600">Thanks! Well be in touch soon.</p>}
            {submitted && !submitted.ok && <p className="mt-3 text-sm text-red-600">{submitted.error}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
