<script setup></script>

<template>
  <main>
    <section class="photo-header">
      <div class="photo-header__logo text-center">
        Welcome to<br />
        d'Georgion &amp; Paul
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.photo-header {
  display: block;
  width: 100%;
  background-image: url('@/assets/images/photo-1559339352-11d035aa65de.jpeg');
  &__logo {
    display: inline-block;
    max-width: 300px;
    background-color: rgba($color: #000000, $alpha: 0.3);
    color: $white;
  }
}
</style>
