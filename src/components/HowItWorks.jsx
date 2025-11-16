import React from 'react'

export default function HowItWorks() {
  const steps = [
    { title: 'Add a script', desc: 'Paste a single line into your site or install our Shopify/WordPress app.' },
    { title: 'Train with your content', desc: 'Sync help docs, product pages, or a sitemap for instant knowledge.' },
    { title: 'Go live everywhere', desc: 'Drop the widget on your site and connect social channels in one place.' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who it’s for & how it works</h2>
            <p className="mt-3 text-gray-600 max-w-xl">
              Built for e‑commerce stores, service providers, and SaaS teams that want faster responses and more conversions with less overhead.
            </p>
            <ul className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">{i + 1}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{s.title}</div>
                    <div className="text-sm text-gray-600">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <Testimonial
              quote="We cut email volume by 42% in the first month and booked 17% more demos."
              author="Ava, Head of Growth at MapleTech"
            />
            <Testimonial
              quote="Setup took 10 minutes. It feels like adding a teammate who never sleeps."
              author="Sam, Founder at Loop Commerce"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonial({ quote, author }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-gray-900 text-lg">“{quote}”</p>
      <p className="mt-3 text-sm text-gray-600">{author}</p>
    </div>
  )
}
