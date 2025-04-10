<template>
  <div>
    <input v-model="username" placeholder="Username" />
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const username = ref('')
const auth = useAuthStore()

function login() {
  auth.login(username.value)
}
</script>
