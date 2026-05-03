// src/components/Footer.jsx

const navLinks = [
  { label: 'Services',  href: '#services' },
  { label: 'Process',   href: '#process' },
  { label: 'Why DTW',   href: '#why-us' },
]

const serviceLinks = [
  'Shopify Store Setup',
  'OpenCart Setup',
  'Store Customization',
  'Product Upload',
  'Branding & Identity',
  'Social Media Branding',
]

const socialLinks = [
  { label: 'LinkedIn',  href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter/X', href: '#' },
  { label: 'Facebook',  href: '#' },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-bg-primary border-t border-white/5 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display font-800 text-2xl text-gradient mb-3">DTW</div>
            <p className="text-white/30 text-sm leading-relaxed mb-5">
              Professional ecommerce store setup and optimization. Shopify, OpenCart, and beyond.
            </p>
            <a
              href="mailto:hello@digitechworks.com"
              className="text-sm text-accent-blue hover:text-blue-300 transition-colors duration-200"
            >
              hello@digitechworks.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-white/25 uppercase tracking-[0.15em] mb-5 font-body">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs text-white/25 uppercase tracking-[0.15em] mb-5 font-body">Services</p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact CTA */}
          <div>
            <p className="text-xs text-white/25 uppercase tracking-[0.15em] mb-5 font-body">Connect</p>
            <ul className="flex flex-col gap-3 mb-8">
              {socialLinks.map(s => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block px-5 py-2.5 rounded-lg bg-accent-blue text-white text-sm font-medium hover:bg-blue-500 transition-all duration-200 glow-sm"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="text-xs text-white/20 font-body">
            © {new Date().getFullYear()} DigiTechWorks. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
