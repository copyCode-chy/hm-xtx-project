<script setup>
import { ref, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";
// 接收商品图片数据
defineProps({
  imageList: {
    type: Array,
    default: () => []
  }
})

// 图片下标
const activeImg = ref(0)
// 获取相应图片下标
const getIndex = (i) => {
  activeImg.value = i
}

// 存储滑块位置
const left = ref(0)
const top = ref(0)

// 大图位置
const bigLeft = ref(0)
const bigTop = ref(0)

// 获取大图的dom元素
const target = ref(null)

// 获取鼠标位置
const { elementX, elementY, isOutside } = useMouseInElement(target)

// 监听鼠标位置变化
watch([elementX, elementY], () => {
  if (isOutside.value) { return 0 }
  // 有效范围内控制滑块距离
  // // 横向
  // if (elementX.value > 100 && elementX.value < 300) {
  //   left.value = elementX.value - 100
  // }
  // // 纵向
  // if (elementY.value > 100 && elementY.value < 300) {
  //   top.value = elementY.value - 100
  // }

  // // 边界处理
  // // 纵
  // if (elementY.value > 300) { top.value = 200 }
  // if (elementY.value < 100) { top.value = 0 }
  // // 横
  // if (elementX.value > 300) { left.value = 200 }
  // if (elementX.value < 100) { left.value = 0 }
  // 始终让滑块值保持在 0 - 200 区间（滑块尺寸是 200x200）
  left.value = Math.max(0, Math.min(elementX.value - 100, 200))
  top.value = Math.max(0, Math.min(elementY.value - 100, 200))
  // 大图位置
  bigLeft.value = -left.value * 2
  bigTop.value = -top.value * 2
})

</script>


<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[activeImg]" alt="" />
      <!-- 蒙层小滑块 -->
      <div class="layer" :style="{ left: `${left}px`, top: `${top}px` }"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="getIndex(i)" :class="{ active: i === activeImg }">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div class="large" :style="[
      {
        backgroundImage: `url(${imageList[activeImg]})`,
        backgroundPositionX: `${bigLeft}px`,
        backgroundPositionY: `${bigTop}px`,
      },
    ]" v-show="!isOutside"></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>