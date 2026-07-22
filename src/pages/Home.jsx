import Hero from '../components/home/Hero.jsx'
import CategoryGrid from '../components/home/CategoryGrid.jsx'
import FeaturedProducts from '../components/home/FeaturedProducts.jsx'
import Newsletter from '../components/home/Newsletter.jsx'
import Footer from '../components/layout/Footer.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </main>
  )
}