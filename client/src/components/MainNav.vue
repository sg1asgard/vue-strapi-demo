<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from "pinia";
import { useCart } from '@/stores/cart'

const cart = useCart()
// const { getCartNumber } = storeToRefs(cart)
const getCartNumber = computed(() => cart.getCartNumber);


onMounted(() => {})
</script>

<template>
  <div class="wrapper text-center my-3">
    <div class="navigation">
      <RouterLink to="/">Menu</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/cart">Cart ({{ getCartNumber }})</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  display: inline-block;
  width: 100%;
  a {
    display: inline-block;
    padding: 8px 0px;
    margin: 0px 16px;
    color: $gray-700;
    text-decoration: none;
    border-bottom: 2px dotted $white;
    &:hover {
      color: $primary;
      border-bottom: 2px dotted $primary;
    }
    &.router-link-active {
      color: $primary;
      border-bottom: 2px dotted $primary;
    }
  }
}
</style>
