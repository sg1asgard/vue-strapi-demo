<script setup>
import { ref, onMounted } from 'vue'
import { useCart } from '@/stores/cart'
import { apiCalls } from '@/utilities/apiCalls.js'

// Errors
const isSuccess = ref(false)
const isError = ref(false)
const message = ref()

const theMenu = ref([])

// Get Education by ID
const getRestaurantMenu = async () => {
  try {
    const response = await apiCalls.getMenus()

    if (response.status === 200) {
      theMenu.value = response.data.data

      console.log('theMenu', theMenu.value)

      isSuccess.value = true
      isError.value = false
    }
    return true
  } catch (error) {
    isSuccess.value = false
    isError.value = true
    message.value = error.message

    return error
  }
}

const cart = useCart()
const addToCart = () => {
  let item = ref('item')
  cart.storeCartItems(item.value)
}

onMounted(() => {
  getRestaurantMenu()
})
</script>

<template>
  <section class="restaurant-menu mt-5">
    <h2 class="text-center">Our Menu</h2>
    <div class="daily-menu mt-5">
      <div v-for="(item, index) in theMenu" :key="index">
        <div class="d-flex flex-row">
          <div
            class="menu-photo"
            :style="`background-image: url(http://localhost:1337${item.attributes.menuphoto.data.attributes.formats.large.url})`"
          ></div>
          <div class="flex-fill ps-4">
            <div class="d-flex flex-row">
              <div class="menu-title">
                <h3 class="fs-4 text-capitalize">
                  {{ item.attributes.menuname }}
                </h3>
              </div>
              <div class="flex-fill menu-separator"></div>
              <div class="menu-price">
                <h3 class="fs-4">${{ item.attributes.menuprice }}</h3>
              </div>
            </div>

            <p class="pt-2">{{ item.attributes.menudescription }}</p>
            <button
              type="button"
              class="btn add-to-cart mt-2"
              @click.prevent="addToCart()"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div class="my-3">
          <hr />
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
    .add-to-cart {
      border: 1px solid goldenrod;
      &:hover {
        background-color: lighten($color: goldenrod, $amount: 30);
      }
    }
  }
}
</style>
