<script setup>
import { fetchHotGoodsAPI } from "@/apis/detail";
import { useRoute } from "vue-router";
import { ref, onMounted } from 'vue'

const route = useRoute()
const hotGoods = ref([]);

// 获取父组件传递过来的数据，注意在setup里需要prop.
const prop = defineProps({
  dataType: Number
})

const getHotGoods = async () => {
  const res = await fetchHotGoodsAPI({
    id: route.params.id,
    type: prop.dataType
  });
  hotGoods.value = res.data.result
  console.log(hotGoods.value);
}

onMounted(() => {
  getHotGoods()
})
</script>


<template>
  <div class="goods-hot">
    <h3>
      <slot></slot>
    </h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotGoods" :key="item.id">
      <img v-img-lazy="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>