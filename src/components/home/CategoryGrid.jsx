import './category-grid.css'

const CATEGORIES = [
  {
    id: 'acoustic-guitars',
    name: 'Acoustic Guitars',
    count: '350+ items',
    image: 'https://images.unsplash.com/photo-1647265194908-6815badcc397?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'drum-sets',
    name: 'Drum Sets',
    count: '150+ items',
    image: 'https://images.unsplash.com/photo-1751615254507-030911e4196e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'violin',
    name: 'Violin',
    count: '150+ items',
    image: 'https://images.unsplash.com/photo-1649088547358-aaf4696d747e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'saxophone',
    name: 'Saxophone',
    count: '150+ items',
    image: 'https://images.unsplash.com/photo-1629907451365-6731862a0d32?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'keyboard',
    name: 'Keyboard',
    count: '150+ items',
    image: 'https://images.unsplash.com/photo-1710283360164-59a9941adadb?auto=format&fit=crop&w=400&q=80',
  },
]

export default function CategoryGrid() {
  return (
    <section className="category-grid" id="products">
      <div className="category-grid__heading">
        <h2>Shop by category</h2>
        <p>Browse our extensive collection organized by instrument type.</p>
      </div>

      <div className="category-grid__row">
        {CATEGORIES.map((category) => (
          <a key={category.id} href={`#${category.id}`} className="category-tile">
            <img src={category.image} alt={category.name} />
            <span className="category-tile__name">{category.name}</span>
            <span className="category-tile__count">{category.count}</span>
          </a>
        ))}
      </div>
    </section>
  )
}