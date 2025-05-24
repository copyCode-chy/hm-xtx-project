// axios基础封装
import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
// 引入pinia数据
import { useUserStore } from "@/stores/user";

const instance = axios.create({
  // 基地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 超时时间
  timeout: 5000
})

// 拦截器

// axios添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  // 请求拦截器携带token
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  ElMessage({
    type: "warning",
    message: error.response.data.message || '请求失败',
  })
  return Promise.reject(error);
});

export default instance