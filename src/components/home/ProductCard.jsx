import { Star, ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'
import './product-card.css'

export default function ProductCard({ product }) {/*destructuring object property names into a variable */
  const { brand, name, rating, reviewCount, price, originalPrice, image } = product
  const { addToCart } = useCart()

  return (/*After looping through the array,this renders all the different  objects (product cards) */
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

      <button className="product-card__add-btn" onClick={() => addToCart(product)}>
        <ShoppingCart size={15} />
        Add to Cart
      </button>
    </div>
  )
}