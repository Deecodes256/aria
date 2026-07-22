import { Search, ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'
import './header.css'

const NAV_LINKS = [/**navbar links array */
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Store', href: '#store' },
  { label: 'Delivery', href: '#delivery' },
]/*loops through the navbar links array above to avoid repeating html */

export default function Header() {
  const { cartCount } = useCart()

  return (
    <header className="site-header">
      <a href="/" className="site-header__logo">
        <span className="site-header__logo-mark">✳</span>
        Aria
      </a>

      <nav className="site-header__nav">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="site-header__actions">
        <button className="site-header__icon-btn" aria-label="Cart">
          <ShoppingCart size={18} />
          {cartCount > 0 && (
            <span className="site-header__cart-badge">{cartCount}</span>
          )}
        </button>
        <div className="site-header__search">
          <Search size={16} />
          <input type="text" placeholder="Search Products..." />
        </div>
      </div>
    </header>
  )
}