import { Link } from 'react-router-dom'
import { Search, ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'
import './header.css'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Store', href: '#store' },
  { label: 'Delivery', href: '#delivery' },
]

export default function Header() {
  const { cartCount } = useCart()

  return (
    <header className="site-header">
      <Link to="/" className="site-header__logo">
        <span className="site-header__logo-mark">✳</span>
        Aria
      </Link>

      <nav className="site-header__nav">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="site-header__actions">
        <Link to="/cart" className="site-header__icon-btn" aria-label="Cart">
          <ShoppingCart size={18} />
          {cartCount > 0 && (
            <span className="site-header__cart-badge">{cartCount}</span>
          )}
        </Link>
        <div className="site-header__search">
          <Search size={16} />
          <input type="text" placeholder="Search Products..." />
        </div>
      </div>
    </header>
  )
}