import { defineStore } from 'pinia'

// Define the CartProduct type
interface CartProduct {
  id: string
  name: string
  price: number
  quantity?: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] as CartProduct[] }),
  actions: {
    addToCart(product: CartProduct) {
      const existing = this.items.find((i) => i.id === product.id)
      if (existing) {
        existing.quantity = (existing.quantity || 0) + 1
      } else this.items.push({ ...product, quantity: 1 })
    },
    removeFromCart(productId: string) {
      this.items = this.items.filter((item) => item.id !== productId)
    },
    clearCart() {
      this.items = []
    },
  },
})
