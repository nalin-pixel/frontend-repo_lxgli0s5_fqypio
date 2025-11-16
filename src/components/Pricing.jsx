import React from 'react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/mo',
      features: ['Up to 200 chats', 'Email capture', '1 website', 'Basic reporting'],
      cta: 'Start free',
      highlight: false,
    },
    {
      name: 'Business',
      price: '$49',
      period: '/mo',
      features: ['Unlimited chats', 'Bookings & calendars', 'Integrations', 'Priority support'],
      cta: 'Start trial',
      highlight: true,
    },
    {
      name: 'Premium',
      price: '$199',
      period: '/mo',
      features: ['SSO & roles', 'Advanced analytics', 'White‑label', 'Dedicated CSM'],
      cta: 'Contact sales',
      highlight: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Simple pricing</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Pick a plan that fits. Upgrade or cancel anytime.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.highlight ? 'border-indigo-600' : 'border-gray-200'} bg-white p-6 shadow-sm`}>
              <div className="flex items-baseline gap-2">
                <div className="text-xl font-semibold text-gray-900">{p.name}</div>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <div className="text-4xl font-extrabold text-gray-900">{p.price}</div>
                <div className="text-gray-600">{p.period}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2 font-semibold ${p.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-900 text-white hover:bg-black'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
