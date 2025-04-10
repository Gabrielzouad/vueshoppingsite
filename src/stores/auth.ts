import { defineStore } from 'pinia'

interface User {
  id: number
  username: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null as User | null }),
  actions: {
    login(username: string) {
      // Mock login
      this.user = { id: 1, username } as User
    },
    logout() {
      this.user = null
    },
  },
})
