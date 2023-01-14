import { defineStore, acceptHMRUpdate } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useCart = defineStore({
  id: 'user_cart',
  state: () => ({
    cartItems: ['1', '2']
  }),
  getters: {
    getCartItems: (state) => state.cartItems,
    getCartNumber: (state) => state.cartItems.length
  },
  actions: {
    storeCartItems(items) {
      this.cartItems.push(items)
    },
    resetStore() {
      this.$reset()
      this.cartItems = []
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCart, import.meta.hot))
}
