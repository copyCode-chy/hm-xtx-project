import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
// 引入初始化样式
import '@/styles/common.scss'

const app = createApp(App)
const pinia = createPinia()

app
  .use(router)
  .use(pinia)

app.mount('#app')
