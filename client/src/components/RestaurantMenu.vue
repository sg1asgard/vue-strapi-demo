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
    <h2 class="text-center">Our Menu</h2>
    <div class="daily-menu mt-5">
      <div class="d-flex flex-row">
        <div class="menu-photo"></div>
        <div class="flex-fill ps-4">
          <div class="d-flex flex-row">
            <div class="menu-title"><h3 class="fs-4">Menu name</h3></div>
            <div class="flex-fill menu-separator"></div>
            <div class="menu-price"><h3 class="fs-4">$15</h3></div>
          </div>
          <p class="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dapibus libero vitae diam porta, ac iaculis turpis tristique. Morbi
            sed suscipit magna, malesuada pretium felis.
          </p>
          <button type="button" @click.prevent="addToCart()">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.restaurant-menu {
  .daily-menu {
    .menu-photo {
      width: 300px;
      min-width: 300px;
      height: 180px;
      background-color: gray;
      background-image: url(https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2584&q=80);
      background-size: cover;
    }
    .menu-separator {
      &::after {
        display: block;
        content: '';
        height: 24px;
        border-bottom: 2px dotted goldenrod;
        margin: 0px 12px;
      }
    }
  }
}
</style>
