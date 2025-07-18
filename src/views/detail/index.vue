<!-- 此为商品详情页 -->
<script setup>
import { getDetail } from "@/apis/detail";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import detailHot from "./components/detailHot.vue";
import { useCartStore } from "@/stores/cartStore";
import { debounce } from 'lodash'

const goodsData = ref({});
const route = useRoute();
const dataType = ref([1, 2]);
// 获取购物车store实例
const cartStore = useCartStore();

// 获取商品详情数据
const getGoodsData = async () => {
  const res = await getDetail(route.params.id);
  goodsData.value = res.data.result;
  console.log('商品详情');
  console.log(goodsData.value);
}

// sku规格被操作时
let skuObj = {}
const skuChange = (sku) => {
  console.log(sku);
  skuObj = sku;
}

// count
const count = ref(1);
const countChange = (count) => {
  console.log(count.value);
}

// 加入购物车
const addCart = () => {
  if (skuObj.skuId) {
    // 规格已选择，触发action
    cartStore.addCart({
      id: goodsData.value.id,
      name: goodsData.value.name,
      picture: goodsData.value.mainPictures[0],
      price: goodsData.value.price,
      count: count.value,
      skuId: skuObj.skuId,
      attrsText: skuObj.specsText,
      selected: true
    })
    ElMessage({
      type: 'success',
      message: '成功加入购物车'
    })
  } else {
    ElMessage.warning("请选择商品规格");
  }
}

const handleAddToCart = debounce(addCart, 500)

onMounted(() => {
  getGoodsData();
})
</script>

<template>
  <div class="xtx-goods-page">
    <div class="container">
      <div class="bread-container">
        <el-breadcrumb separator=">" v-if="goodsData.details">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/${goodsData.categories[1].id}` }">{{
            goodsData.categories[1].name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/${goodsData.categories[0].id}` }">{{ goodsData.categories[0].name
          }}
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ goodsData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 商品信息 -->
      <div class="info-container">
        <div>
          <div class="goods-info">
            <div class="media">
              <!-- 图片预览区 -->
              <XtxImageView :image-list="goodsData.mainPictures"></XtxImageView>
              <!-- 统计数量 -->
              <ul class="goods-sales">
                <li>
                  <p>销量人气</p>
                  <p> {{ goodsData.salesCount }}+ </p>
                  <p><i class="iconfont icon-task-filling"></i>销量人气</p>
                </li>
                <li>
                  <p>商品评价</p>
                  <p>{{ goodsData.commentCount }}+</p>
                  <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
                </li>
                <li>
                  <p>收藏人气</p>
                  <p>{{ goodsData.collectCount }}+</p>
                  <p><i class="iconfont icon-favorite-filling"></i>收藏商品</p>
                </li>
                <li>
                  <p>品牌信息</p>
                  <p>{{ goodsData.brand?.name }}+</p>
                  <p><i class="iconfont icon-dynamic-filling"></i>品牌主页</p>
                </li>
              </ul>
            </div>
            <div class="spec">
              <!-- 商品信息区 -->
              <p class="g-name"> {{ goodsData.name }} </p>
              <p class="g-desc">{{ goodsData.desc }} </p>
              <p class="g-price">
                <span>{{ goodsData.oldPrice }}</span>
                <span> {{ goodsData.price }}</span>
              </p>
              <div class="g-service">
                <dl>
                  <dt>促销</dt>
                  <dd>12月好物放送，App领券购买直降120元</dd>
                </dl>
                <dl>
                  <dt>服务</dt>
                  <dd>
                    <span>无忧退货</span>
                    <span>快速退款</span>
                    <span>免费包邮</span>
                    <a href="javascript:;">了解详情</a>
                  </dd>
                </dl>
              </div>
              <!-- sku组件 -->
              <XtxSku :goods="goodsData" @change="skuChange"></XtxSku>
              <!-- 数据组件 -->
              <el-input-number v-model="count" :min="1" @change="countChange(count)" />
              <!-- 按钮组件 -->
              <div>
                <el-button size="large" class="btn" @click="handleAddToCart">
                  加入购物车
                </el-button>
              </div>

            </div>
          </div>
          <div class="goods-footer">
            <div class="goods-article">
              <!-- 商品详情 -->
              <div class="goods-tabs">
                <nav>
                  <a>商品详情</a>
                </nav>
                <div class="goods-detail" v-if="goodsData.details">
                  <!-- 属性 -->
                  <ul class="attrs">
                    <li v-for="item in goodsData.details.properties" :key="item.value">
                      <span class="dt">{{ item.name }}</span>
                      <span class="dd">{{ item.value }}</span>
                    </li>
                  </ul>
                  <!-- 图片 -->
                  <img v-for="img in goodsData.details.pictures" :key="img" v-img-lazy="img" />
                </div>
              </div>
            </div>
            <!-- 24热榜+专题推荐 -->
            <div class="goods-aside">
              <detailHot :dataType=dataType[0]>
                24小时热榜
              </detailHot>
              <detailHot :dataType=dataType[1]>
                周日榜
              </detailHot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.xtx-goods-page {
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
      width: 940px;
      margin-right: 20px;
    }

    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }

  .goods-tabs {
    min-height: 600px;
    background: #fff;
  }

  .goods-warn {
    min-height: 600px;
    background: #fff;
    margin-top: 20px;
  }

  .number-box {
    display: flex;
    align-items: center;

    .label {
      width: 60px;
      color: #999;
      padding-left: 10px;
    }
  }

  .g-name {
    font-size: 22px;
  }

  .g-desc {
    color: #999;
    margin-top: 10px;
  }

  .g-price {
    margin-top: 10px;

    span {
      &::before {
        content: "¥";
        font-size: 14px;
      }

      &:first-child {
        color: $priceColor;
        margin-right: 10px;
        font-size: 22px;
      }

      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }

  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;

    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: #999;
      }

      dd {
        color: #666;

        &:last-child {
          span {
            margin-right: 10px;

            &::before {
              content: "•";
              color: $xtxColor;
              margin-right: 2px;
            }
          }

          a {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;

    li {
      flex: 1;
      position: relative;

      ~li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: 1px solid #e4e4e4;
        content: "";
      }

      p {
        &:first-child {
          color: #999;
        }

        &:nth-child(2) {
          color: $priceColor;
          margin-top: 10px;
        }

        &:last-child {
          color: #666;
          margin-top: 10px;

          i {
            color: $xtxColor;
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: $xtxColor;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;

  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;

    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;

      >span {
        color: $priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}

.goods-detail {
  padding: 40px;

  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;

      .dt {
        width: 100px;
        color: #999;
      }

      .dd {
        flex: 1;
        color: #666;
      }
    }
  }

  >img {
    width: 100%;
  }
}

.btn {
  margin-top: 20px;

}

.bread-container {
  padding: 25px 0;
}
</style>