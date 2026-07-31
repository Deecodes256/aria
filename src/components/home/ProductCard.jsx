import { useState } from 'react'
import { Star, ShoppingCart, Check } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'
import './product-card.css'

export default function ProductCard({ product }) {
  const { brand, name, rating, reviewCount, price, originalPrice, image } = product
  const { addToCart } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  function handleAddToCart() {
    addToCart(product)
    setJustAdded(true)

    setTimeout(() => {
      setJustAdded(false)
    }, 4000)
  }

  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt={name} />

      <span className="product-card__brand">{brand}</span>
      <h3 className="product-card__name">{name}</h3>

      <div className="product-card__rating">
        <Star size={14} fill="currentColor" />
        <span>{rating}</span>
        <span className="product-card__review-count">({reviewCount})</span>
      </div>

      <div className="product-card__price-row">
        <span className="product-card__price">${price.toFixed(2)}</span>
        {originalPrice && (
          <span className="product-card__original-price">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      <button className="product-card__add-btn" onClick={handleAddToCart}>
        {justAdded ? <Check size={15} /> : <ShoppingCart size={15} />}
        {justAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}