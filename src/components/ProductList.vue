<template>
  <div>
    <h2>Products</h2>
    <div v-for="product in products" :key="product.id" class="product">
      <p>{{ product.name }} - ${{ product.price }}</p>
      <button @click="add(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()

const products = [
  { id: 1, name: 'T-Shirt', price: 20 },
  { id: 2, name: 'Sneakers', price: 50 },
]

function add(product) {
  cart.addToCart(product)
}
</script>
