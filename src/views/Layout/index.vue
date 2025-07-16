<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted, getCurrentInstance } from 'vue'

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

  <!-- 注意，二级路由出口 -->
  <!-- 解决路由缓存问题 -->
  <!-- 方法一: 添加:key -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <!-- 方法二：使用onBeforeRouteUpdate  -->
  <RouterView />

  <LayoutFooter />
</template>

<style lang="scss" scoped></style>