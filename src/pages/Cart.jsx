import { Link } from 'react-router-dom'
import { ShoppingCart, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import '../styles/cart.css'

export default function Cart() {
  const { items, removeFromCart, cartTotal } = useCart()

  return (
    <main className="cart-page">
      <Link to="/" className="cart-page__back">
        ← Continue Shopping
      </Link>

      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <div className="cart-page__empty">
          <ShoppingCart size={40} />
          <p>Your cart is empty.</p>
          <Link to="/" className="cart-page__shop-link">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-page__list">
            {items.map((item) => (
              <div key={item.id} className="cart-page__item">
                <img src={item.image} alt={item.name} />

                <div className="cart-page__item-details">
                  <span className="cart-page__item-brand">{item.brand}</span>
                  <h3>{item.name}</h3>
                  <span className="cart-page__item-qty">Qty: {item.quantity}</span>
                </div>

                <span className="cart-page__item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  className="cart-page__remove-btn"
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-page__summary">
            <span>Total</span>
            <span className="cart-page__total">${cartTotal.toFixed(2)}</span>
          </div>

          <button className="cart-page__checkout-btn">Proceed to Checkout</button>
        </>
      )}
    </main>
  )
}