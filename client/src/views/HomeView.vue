<script setup>
import PhotoHeader from '@/components/PhotoHeader.vue'
import RestaurantMenu from '../components/RestaurantMenu.vue';
</script>

<template>
  <main>
    <PhotoHeader />
    <RestaurantMenu />
  </main>
</template>

<style lang="scss">
.photo-header {
  background-image: url('@/assets/images/photo-1559339352-11d035aa65de.jpeg');
}
</style>
