import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
// 引入初始化样式
import '@/styles/common.scss'
// 引入自定义图片懒加载插件
import { lazyPlugin } from './directives'
import { componentPlugin } from './components'
// pinia数据持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app
  .use(router)
  .use(pinia)
  .use(lazyPlugin)
  .use(componentPlugin)

app.mount('#app')

