
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import "@/style/tailwind.css"
import vue3TreeOrg from 'vue3-tree-org'
import 'vue3-tree-org/lib/vue3-tree-org.css'

const pinia = createPinia()


createApp(App).use(router).use(pinia.use(persist)).use(vue3TreeOrg).mount('#app')

