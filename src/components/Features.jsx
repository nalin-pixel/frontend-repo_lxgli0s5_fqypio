import React from 'react'
import { Bot, Globe, Calendar, Inbox, MessageSquare, ShieldCheck } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Bot, title: 'Instant replies', desc: 'Answer questions 24/7 with accurate, brand-safe responses.' },
    { icon: Calendar, title: 'Meeting bookings', desc: 'Qualify and book calls directly from chat.' },
    { icon: Inbox, title: 'Lead capture', desc: 'Collect emails and route conversations to your CRM.' },
    { icon: Globe, title: 'Multilingual', desc: 'Serve visitors in 100+ languages automatically.' },
    { icon: MessageSquare, title: 'Omnichannel', desc: 'Embed on web, Intercom, WhatsApp, and more.' },
    { icon: ShieldCheck, title: 'Secure by design', desc: 'PII redaction, role-based access, and audit logs.' },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Key features and benefits</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Everything you need to automate support and convert more visitors with a single script.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
