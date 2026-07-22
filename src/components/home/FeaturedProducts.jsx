import ProductCard from './ProductCard.jsx'
import { featuredProducts } from '../../data/products.js'
import './featured-products.css'

export default function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="featured-products__heading">
        <div>
          <h2>Featured Products</h2>
          <p>Top picks from our collections.</p>
        </div>
        <a href="#all-products" className="featured-products__view-all">
          View All Products
        </a>
      </div>

      <div className="featured-products__grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}