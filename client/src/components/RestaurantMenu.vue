<script setup>
import { ref } from 'vue'
import { useCart } from '@/stores/cart'

const cart = useCart()
const addToCart = () => {
  let item = ref('item')
  cart.storeCartItems(item.value)
}
</script>

<template>
  <section class="restaurant-menu mt-5">
    <h2>Our Menu</h2>
    <div>...menu</div>
    <div>
      <button type="button" @click.prevent="addToCart()">Add to cart</button>
    </div>
  </section>
</template>

<style lang="scss">
.restaurant-menu {
}
</style>
