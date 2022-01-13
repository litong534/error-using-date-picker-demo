import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
const app = createApp(App)
// 使用element-plus 并且设置全局的大小
app.use(ElementPlus)
app.mount('#app')
