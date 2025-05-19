<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>

  <HomeHot />
  <HomeNew />
  <HomeProduct />

  <!-- 测试 -->
  <HomePanel title="新鲜好物" subTitle="asdasdasdas" />
  <HomePanel title="人气推荐" subTitle="sadsdnvbnvb" />
</template>

<script setup>
import HomeProduct from './components/HomeProduct.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<style lang="scss" scoped>
.container {}
</style>