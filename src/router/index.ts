import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import CartView from '../views/CartView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: CartView },
  { path: '/login', component: LoginView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
