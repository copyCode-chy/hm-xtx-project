// 此处存储用户相关数据
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginApi } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
  // 用户信息
  const userInfo = ref({})
  // 获取登录用户信息
  const getUserInfo = async ({ account, password }) => {
    const res = await loginApi({ account, password })
    userInfo.value = res.data.result
    return res
  }
  // 清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
  }
  // 这里的 persist 是 pinia-plugin-persistedstate 插件的配置项
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, { persist: true })