import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  const handlePrimary = () => {
    const el = document.getElementById('pricing')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const handleSecondary = () => {
    const el = document.getElementById('demo')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-20 backdrop-blur border-b border-gray-200/70 bg-white/70">
        <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="font-extrabold text-xl">Aurora Widgets</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <button onClick={handlePrimary} className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 font-semibold">Try it free</button>
          </nav>
        </div>
      </header>

      {/* Hero with above-the-fold demo */}
      <div id="demo">
        <Hero onPrimaryClick={handlePrimary} onSecondaryClick={handleSecondary} />
      </div>

      {/* Features */}
      <div id="features">
        <Features />
      </div>

      {/* How it works / Use cases */}
      <div id="how">
        <HowItWorks />
      </div>

      {/* Pricing */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
