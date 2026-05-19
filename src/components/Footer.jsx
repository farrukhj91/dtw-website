// src/components/Footer.jsx
import { Link } from 'react-router-dom'

const pages = [
  { label: 'Services',  to: '/services' },
  { label: 'Platforms', to: '/platforms' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About',     to: '/about' },
  { label: 'Contact',   to: '/contact' },
]

const servicesList = [
  'Shopify Store Setup',
  'WooCommerce Setup',
  'OpenCart Setup',
  'Product Upload',
  'Store Customization',
  'Social Media Branding',
]

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/5 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <img src="/DTW_1_png_nobg.png" alt="DigiTechWorks" className="h-10 w-auto mb-4" />
            <p className="text-sm text-white/55 leading-relaxed mb-6 font-body">
              Professional ecommerce store setup and optimization. Shopify, WooCommerce, OpenCart.
            </p>
            <a href="mailto:hello@digitechworks.com" className="text-sm text-accent-blue hover:text-blue-300 transition-colors font-body">
              hello@digitechworks.com
            </a>
          </div>

          {/* Pages */}
          <div>
            <p className="label mb-5">Pages</p>
            <ul className="flex flex-col gap-3">
              {pages.map(p => (
                <li key={p.label}>
                  <Link to={p.to} className="text-sm text-white/45 hover:text-white/75 transition-colors font-body">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="label mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {servicesList.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-white/45 hover:text-white/75 transition-colors font-body">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <p className="label mb-5">Follow</p>
            <ul className="flex flex-col gap-3 mb-8">
              {['LinkedIn','Instagram','Facebook'].map(s => (
                <li key={s}>
                  <a href="#" className="text-sm text-white/45 hover:text-white/75 transition-colors font-body">{s}</a>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary text-sm">
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="text-xs text-white/50 font-body">© {new Date().getFullYear()} DigiTechWorks. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/50 hover:text-white/75 transition-colors font-body">Privacy Policy</a>
            <a href="#" className="text-xs text-white/50 hover:text-white/75 transition-colors font-body">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
