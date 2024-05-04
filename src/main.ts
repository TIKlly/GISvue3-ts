
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import "@/style/tailwind.css"
import vue3TreeOrg from 'vue3-tree-org'
import 'vue3-tree-org/lib/vue3-tree-org.css'
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// register the element Icons component
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const pinia = createPinia()



app.use(router).use(ElementPlus).use(pinia.use(persist)).use(vue3TreeOrg).mount('#app')

