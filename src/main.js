import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { getTestData } from './apis/testAPI'
getTestData().then(res => {
  console.log(res)
})

createApp(App).mount('#app')
