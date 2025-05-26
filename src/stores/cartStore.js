// 购物车模块store

import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  // 1.store
  const cartList = ref([])
  // 2.action
  const addCart = (goods) => {
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没添加过 - push

    // 判断是否添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      // 已添加过
      item.count += 1
    } else {
      cartList.value.push(goods)
    }
  }

  return {
    cartList,
    addCart
  }
}, { persist: true })