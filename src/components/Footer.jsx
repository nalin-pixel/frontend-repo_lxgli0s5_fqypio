import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-lg font-bold text-gray-900">Aurora Widgets</div>
          <p className="text-sm text-gray-600">Trusted by 1,200+ teams worldwide</p>
        </div>

        <div className="flex items-center gap-3">
          <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/svg/1f512.svg" alt="Secure" className="h-6 w-6" />
          <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/svg/2b50.svg" alt="Star" className="h-6 w-6" />
          <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/svg/1f680.svg" alt="Fast" className="h-6 w-6" />
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Twitter</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">GitHub</a>
          <a href="#" className="ml-4 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700">Start your free trial</a>
        </div>
      </div>
    </footer>
  )
}
