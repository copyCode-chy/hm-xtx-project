import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
// 引入初始化样式
import '@/styles/common.scss'
// 引入自定义图片懒加载插件
import { lazyPlugin } from './directives'

const app = createApp(App)
const pinia = createPinia()

app
  .use(router)
  .use(pinia)
  .use(lazyPlugin)

app.mount('#app')

