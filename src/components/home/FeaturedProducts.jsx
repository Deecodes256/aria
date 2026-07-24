import ProductCard from './ProductCard.jsx'
import { featuredProducts } from '../../data/products.js'
import './featured-products.css'

function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const existingGroup = groups.find((group) => group.category === product.category)

    if (existingGroup) {
      existingGroup.products.push(product)
    } else {
      groups.push({ category: product.category, products: [product] })
    }

    return groups
  }, [])
}

export default function FeaturedProducts() {
  const categoryGroups = groupByCategory(featuredProducts)

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

      {/* Desktop / tablet layout: one unified grid, no grouping */}
      <div className="featured-products__grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Mobile layout: grouped by category, each row scrolls horizontally */}
      <div className="featured-products__mobile-categories">
        {categoryGroups.map((group) => (
          <div key={group.category} className="featured-products__category">
            <h3>{group.category}</h3>
            <div className="featured-products__scroll-row">
              {group.products.map((product) => (
                <div key={product.id} className="featured-products__scroll-item">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}