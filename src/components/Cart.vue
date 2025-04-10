<template>
  <div>
    <h2>Your Cart</h2>
    <div v-for="item in cart.items" :key="item.id">
      {{ item.name }} x {{ item.quantity }}
      <button @click="cart.removeFromCart(item.id)">Remove</button>
    </div>
    <button @click="buy">Buy Now</button>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/auth'

const cart = useCartStore()
const auth = useAuthStore()

function buy() {
  if (!auth.user) {
    alert('Please login to place an order.')
    return
  }
  console.log('Order placed for:', cart.items)
  cart.clearCart()
  alert('Order placed successfully (mock)')
}
</script>
