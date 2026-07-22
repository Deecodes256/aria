import Header from '../layout/Header.jsx'
import './hero.css'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1725152471889-6c59a52e7794?auto=format&fit=crop&w=2000&q=80'

const STATS = [
  { value: '5000+', label: 'Products' },
  { value: '30+', label: 'Brands' },
  { value: '10,000+', label: 'Happy Customers' },
]

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src={HERO_IMAGE}
        alt="Row of acoustic guitars hanging on a wall"
      />
      <div className="hero__overlay" />

      <Header />

      <div className="hero__content">
        <h1>Discover Your Perfect Sound</h1>
        <p>
          Explore our premium collection of musical instruments. From guitars
          to keyboards, find everything you need to create beautiful music.
        </p>

        <div className="hero__cta">
          <button className="hero__btn hero__btn--primary">Shop Now</button>
          <button className="hero__btn hero__btn--secondary">
            View Catalog
          </button>
        </div>
      </div>

      <div className="hero__stats">
        {STATS.map((stat) => (
          <div key={stat.label} className="hero__stat">
            <span className="hero__stat-value">{stat.value}</span>
            <span className="hero__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}