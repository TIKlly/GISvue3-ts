import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import "@/style/tailwind.css"
const pinia = createPinia()

createApp(App).use(router).use(pinia.use(persist)).mount('#app')
