<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const category = useCategoryStore()

// 调用getCategory让pinia里的categoryList获取到数据
onMounted(() => {
  category.getCategory()
})
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<style lang="scss" scoped></style>