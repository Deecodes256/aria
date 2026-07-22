import Home from './pages/Home.jsx'
import { CartProvider } from './context/CartContext.jsx'

export default function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  )
}