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

// 请求方法
const getCategoryFilter = async (id = route.params.id) => {
  const res = await getCategoryFilterAPI(id)
  categoryList.value = res.data.result
  console.log('1111');
  console.log(categoryList.value);
}
const getSubCategoryList = async () => {
  const res = await getSubCategoryAPI({
    categoryId: route.params.id,
    page: 1,
    pageSize: 10,
    sortField: 'publishTime'
  })
  subCategoryList.value = res.data.result.items
  console.log(subCategoryList.value);
}

// 发送请求
onMounted(() => {
  getCategoryFilter()
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
      <el-tabs>
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
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