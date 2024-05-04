
import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

import { routes } from "./routes copy";

const router = createRouter({
    history: createWebHistory(),
    routes
})


// 动态路由匹配

// router.beforeEach((_to, _from, next) => {
//     NProgress.start()
//     next()
// })

// router.afterEach(() => {
//     NProgress.done()
// })


export default router;