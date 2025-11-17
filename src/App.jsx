import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Artists from './components/Artists'
import Booking from './components/Booking'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Artists />
        <Booking />
        <footer className="border-t border-gray-100 bg-white py-10 mt-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Atelier Salon. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#services" className="hover:text-gray-900">Services</a>
              <a href="#artists" className="hover:text-gray-900">Artists</a>
              <a href="#booking" className="hover:text-gray-900">Booking</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
