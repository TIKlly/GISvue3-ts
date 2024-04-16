import { createApp } from 'vue'
import App from './App.vue'
import "@/style/tailwind.css"
import router from '@/router'

import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
const pinia = createPinia()
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

createApp(App).use(router).use(pinia.use(persist)).mount('#app')
