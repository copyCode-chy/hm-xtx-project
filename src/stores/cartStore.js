// 购物车模块store
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "./userStore";
import { addCartApi, getCartListApi, removeCartItemApi } from "@/apis/cart";

export const useCartStore = defineStore("cart", () => {
  // 获取token
  const userStore = useUserStore()
  // 1.store
  const cartList = ref([])
  // 2.action
  const addCart = async (goods) => {
    const { skuId, count } = goods
    // 添加购物车操作
    // 进行加入购物车操作前，判断token是否存在（判断是本地操作还是接口操作）
    if (userStore.userInfo.token) {
      // 发送加入购物车请求
      await addCartApi({ skuId, count })
      // 获取购物车列表
      await getCartList()
    } else {
      // 本地购物车逻辑
      // 判断是否添加过
      // 已添加过 - count + 1
      // 没添加过 - push
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        // 已添加过
        item.count += 1
      } else {
        cartList.value.push(goods)
      }
    }
  }

  // 删除指定购物车商品
  const removeCartItem = async (skuId) => {
    // 判断token是否存在,接口操作（登录）
    if (userStore.userInfo.token) {
      // 发送删除购物车商品请求
      await removeCartItemApi([skuId])
      // 获取最新的购物车列表
      await getCartList()
    } else {
      // 本地操作（未登录）
      const index = cartList.value.findIndex(item => item.skuId === skuId)
      cartList.value.splice(index, 1)
    }
  }

  // 获取最新的购物车列表
  const getCartList = async () => {
    const res = await getCartListApi()
    cartList.value = res.data.result
  }

  // 购物车商品选中状态
  const singleChecked = (skuId, selected) => {
    // 找到对应的商品
    const item = cartList.value.find(item => item.skuId === skuId)
    if (item) {
      // 设置选中状态
      item.selected = selected
    }
  }

  // 全选方法
  const allCheckedChange = (selected) => {
    cartList.value.forEach(item => {
      item.selected = selected
    })
  }

  // 计算属性
  // 总数
  const totalCount = computed(() => cartList.value.reduce((total, item) => total + item.count, 0))
  // 总价
  const totalPrice = computed(() => cartList.value.reduce((total, item) => total + item.count * item.price, 0))
  // 购物车选中的商品数量
  const selTotal = computed(() => cartList.value.filter((item) => item.selected === true).reduce((total, item) => total + item.count, 0))
  // 购物车选中的商品总价
  const selPrice = computed(() => cartList.value.filter((item) => item.selected === true).reduce((total, item) => total + item.price * item.count, 0))
  //全选框状态
  const allChecked = computed(() => cartList.value.every(item => item.selected === true))
  return {
    cartList,
    addCart,
    removeCartItem,
    totalCount,
    totalPrice,
    singleChecked,
    allChecked,
    allCheckedChange,
    selTotal,
    selPrice
  }
}, { persist: true })