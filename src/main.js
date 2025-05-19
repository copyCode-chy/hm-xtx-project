import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
// 引入初始化样式
import '@/styles/common.scss'
// 引入vueUse的useIntersectionObserver检测目标元素的可见性
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)
const pinia = createPinia()

app
  .use(router)
  .use(pinia)

app.mount('#app')

// 自定义v-img-lasy指令
app.directive('img-lazy', {
  mounted(el, binding) {
    // el:指令指定的元素img
    // binding:binding.value 指令传入的值(指令等于号后面绑定的表达式的值)
    useIntersectionObserver(el,
      // isIntersecting判断目标元素是否在视口中
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 目标元素在视口中,设置img的src属性
          el.src = binding.value
        }
      })
  }
})
