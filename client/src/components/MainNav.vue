<script setup>
import { RouterLink } from 'vue-router'
import { useCart } from '@/stores/cart'

const cart = useCart()
</script>

<template>
  <div class="wrapper text-center my-3">
    <div class="navigation">
      <RouterLink to="/">Menu</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/cart">Cart (0)</RouterLink>
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
