import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[88vh] flex items-center">
        {/* Spline background */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* subtle gradient to improve text contrast */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Automate your customer support 24/7 with AI widgets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl"
            >
              Drop a single script on your site to deliver instant answers, qualify leads, and book meetings—no team online required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button onClick={onPrimaryClick} className="inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-semibold shadow-lg shadow-indigo-600/20">
                Try it free
              </button>
              <button onClick={onSecondaryClick} className="inline-flex items-center justify-center rounded-lg bg-white/80 backdrop-blur border border-gray-200 hover:bg-white text-gray-900 px-6 py-3 font-semibold">
                Get a demo
              </button>
            </motion.div>
          </div>

          {/* Above-the-fold interactive demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, delay: 0.2 }}
            className="order-first md:order-none"
          >
            <DemoWidget />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DemoWidget() {
  const [messages, setMessages] = React.useState([
    { role: 'ai', text: 'Hi! I can answer questions, capture leads, and book meetings. Ask me anything.' },
  ])
  const [input, setInput] = React.useState('Do you integrate with Shopify?')

  const send = () => {
    const userMsg = input.trim()
    if (!userMsg) return
    setMessages((m) => [...m, { role: 'user', text: userMsg }])
    setInput('')
    // Simulated AI reply
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'ai',
          text:
            'Absolutely. Our widget installs via a one-line script and native app. It syncs products, answers order questions, and can create support tickets.',
        },
      ])
    }, 500)
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-xl">
      <div className="p-4 border-b border-gray-200">
        <div className="text-sm font-semibold text-gray-900">AI Assistant Demo</div>
        <div className="text-xs text-gray-500">Try a quick question</div>
      </div>
      <div className="h-64 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm ${
                m.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-sm'
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-gray-200 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Type a question..."
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button onClick={send} className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 text-sm font-medium">
          Send
        </button>
      </div>
    </div>
  )
}
