<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getCategoryFilterAPI } from '@/apis/categoryList';
import { getSubCategoryAPI } from '@/apis/categoryList';
import goodsItem from '@/views/Home/components/goodsItem.vue';

// 二级分类列表数据
const categoryList = ref([]);
// 导航栏数据
const subCategoryList = ref([]);
const route = useRoute();
const data = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 10,
  sortField: 'publishTime'
})
// 是否禁用无限滚动
const disabled = ref(false)

// 请求方法
const getCategoryFilter = async (id = route.params.id) => {
  const res = await getCategoryFilterAPI(id)
  categoryList.value = res.data.result
}
const getSubCategoryList = async () => {
  const res = await getSubCategoryAPI(data.value)
  subCategoryList.value = res.data.result.items
  console.log(subCategoryList.value);
}
// 事件
const switchTab = () => {
  data.value.page = 1
  console.log('切换tab');
  getSubCategoryList()
}

// 轮动到底部时自动执行
const load = async () => {
  // 页数加1
  data.value.page++
  // 再次发送请求
  const res = await getSubCategoryAPI(data.value)
  // 新老数据拼接
  subCategoryList.value = [...subCategoryList.value, ...res.data.result.items]
  // 如果没有数据了，禁用无限滚动
  if (res.data.result.items === 0) {
    disabled.value = true
  }
}

// 发送请求
onMounted(() => {
  // 获取二级分类列表数据
  getCategoryFilter()
  // 获取导航数据
  getSubCategoryList()
})
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryList.parentId}` }">{{ categoryList.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="switchTab">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" infinite-scroll-delay=200 :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <goods-item v-for="item in subCategoryList" :key="item.id" :goods="item"></goods-item>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>