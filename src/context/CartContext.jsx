import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addToCart(product) {
    setItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id)

      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }/*when a user clicks add to cart button, the .find checks if the item already exists,if not it adds to the cart and if it exists it increases the quantity of that item by 1*/

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
/*this helps tojust connect components in different files so that way the length of the cart array can be rendered on the cart icon */
  return (
    <CartContext.Provider value={{ items, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside a CartProvider')
  }
  return context
}