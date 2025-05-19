// 引入vueUse的useIntersectionObserver检测目标元素的可见性
import { useIntersectionObserver } from '@vueuse/core'
import { install } from 'element-plus'

// 定义懒加载插件
// 自定义v-img-lasy指令
export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el:指令指定的元素img
        // binding:binding.value 指令传入的值(指令等于号后面绑定的表达式的值)
        const { stop } = useIntersectionObserver(el,
          // isIntersecting判断目标元素是否在视口中
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // 目标元素在视口中,设置img的src属性
              el.src = binding.value

              // 监听过后,停止监听
              stop()
            }
          })
      }
    })
  }
}