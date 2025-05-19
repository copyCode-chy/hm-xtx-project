<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>

  <HomeHot />
  <HomeNew />
  <HomeProduct />

</template>

<script setup>
import HomeProduct from './components/HomeProduct.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
</script>

<style lang="scss" scoped></style>