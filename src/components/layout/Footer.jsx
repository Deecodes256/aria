import { Instagram, Youtube, Facebook } from 'lucide-react'
import './footer.css'

const FOOTER_COLUMNS = [
  {
    heading: 'About',
    links: ['About Us', 'Pricing', 'Career', 'Features'],
  },
  {
    heading: 'Resources',
    links: ['Blog & Article', 'Contact Us', 'Integrations'],
  },
  {
    heading: 'Company',
    links: ['Privacy policy', 'Terms & conditions', 'Changelog'],
  },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
  { label: 'Facebook', icon: Facebook, href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <a href="/" className="site-footer__logo">
            <span className="site-footer__logo-mark">✳</span>
            Aria
          </a>
          <p>
            Your premier destination for quality musical instruments and
            accessories. Making music accessible to everyone since 2025.
          </p>
          <div className="site-footer__social">
            {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (/*loops through the social media links array above to avoid repeating html */
              <a key={label} href={href} aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__columns">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="site-footer__column">
              <h4>{column.heading}</h4>
              <ul>
                /**loops through the column array above to avoid repeating html */
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>@{year} ARIA, Inc. All rights reserved</p>
      </div>

      <div className="site-footer__wordmark" aria-hidden="true">
        <span>ARIA ARIA ARIA</span>
        <span className="site-footer__wordmark-reflection">ARIA ARIA ARIA</span>
      </div>
    </footer>
  )
}