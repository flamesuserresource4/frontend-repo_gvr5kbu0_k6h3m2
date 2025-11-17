import { Menu, Scissors, Phone, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/40"> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 grid place-items-center text-white">
              <Scissors className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">Atelier Salon</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <button onClick={() => scrollTo('services')} className="hover:text-gray-900 transition-colors">Services</button>
            <button onClick={() => scrollTo('artists')} className="hover:text-gray-900 transition-colors">Artists</button>
            <button onClick={() => scrollTo('booking')} className="hover:text-gray-900 transition-colors">Booking</button>
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-gray-900 font-medium">
              <Phone className="h-4 w-4" /> (123) 456-7890
            </a>
            <button onClick={() => scrollTo('booking')} className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
              <Calendar className="h-4 w-4" /> Book now
            </button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2 text-sm text-gray-700">
              <button onClick={() => scrollTo('services')} className="text-left px-2 py-2 rounded hover:bg-gray-100">Services</button>
              <button onClick={() => scrollTo('artists')} className="text-left px-2 py-2 rounded hover:bg-gray-100">Artists</button>
              <button onClick={() => scrollTo('booking')} className="text-left px-2 py-2 rounded hover:bg-gray-100">Booking</button>
              <a href="tel:+1234567890" className="px-2 py-2 rounded hover:bg-gray-100">Call us</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
