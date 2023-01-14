<script setup></script>

<template>
  <section class="photo-header p-5 text-center">
    <div class="photo-header__logo text-center p-2">
      <div class="m-2 p-5">
        <h1>
          Welcome to<br />
          d'Georgio &amp; Paul
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.photo-header {
  display: block;
  width: 100%;
  background-image: url('@/assets/images/photo-1559339352-11d035aa65de.jpeg');
  background-position: center;
  background-size: cover;
  &__logo {
    display: inline-block;
    border: 3px dotted $white;
    > div {
      background-color: rgba($color: #000000, $alpha: 0.7);
      h1 {
        color: $white;
        font-style: italic;
        font-weight: 500;
      }
    }
  }
}
</style>
