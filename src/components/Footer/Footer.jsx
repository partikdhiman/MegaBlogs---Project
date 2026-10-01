import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../index.js'

const columns = [
  { title: 'Company', links: ['Features', 'Pricing', 'Affiliate Program', 'Press Kit'] },
  { title: 'Support', links: ['Account', 'Help', 'Contact Us', 'Customer Support'] },
  { title: 'Legals', links: ['Terms & Conditions', 'Privacy Policy', 'Licensing'] },
]

function Footer() {
  return (
    <footer className="w-full bg-slate-900 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap gap-y-8">
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between gap-4">
              <div className="w-fit rounded-lg bg-white/90 px-3 py-2">
                <Logo />
              </div>
              <p className="text-sm text-slate-400">
                &copy; {new Date().getFullYear()} MegaBlogs. All Rights Reserved.
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="w-full md:w-1/3 lg:w-2/12">
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="text-base font-medium text-slate-200 duration-200 hover:text-indigo-400"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer