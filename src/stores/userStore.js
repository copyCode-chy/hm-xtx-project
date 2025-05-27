// 此处存储用户相关数据
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginApi } from '@/apis/user'
import { useCartStore } from '@/stores/cartStore'
import { mergeCartApi } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
  // 用户信息
  const userInfo = ref({})
  // 获取购物车store
  const cartStore = useCartStore()
  // 获取登录用户信息
  const getUserInfo = async ({ account, password }) => {
    const res = await loginApi({ account, password })
    userInfo.value = res.data.result

    // 合并购物车(登陆前与登陆后)的数据
    await mergeCartApi(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    // 获取最新的购物车列表
    await cartStore.getCartList()

    // 返回用户信息
    return res
  }
  // 清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
    // 清除购物车
    cartStore.clearCart()
  }
  // 这里的 persist 是 pinia-plugin-persistedstate 插件的配置项
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, { persist: true })