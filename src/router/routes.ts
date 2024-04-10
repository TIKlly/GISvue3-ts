// import nativeRoutes from './nativeRoutes.js'
// import svgRoutes from './svgRoutes.js'
import canvasRoutes from './canvasRoutes.ts'
import echartsRoutes from './echartsRoutes.ts'
// import bmapRoutes from './bmapRoutes.js'
import olRoutes from './olRoutes.ts'
// import threeRoutes from './threeRoutes.js'
// import fabricRoutes from './fabricRoutes.js'

import testRoutes from './testRoutes'


const Home = () => import("@/views/Home/index.vue")
export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    testRoutes,

    // nativeRoutes,
    // svgRoutes,
    canvasRoutes,
    echartsRoutes,
    // bmapRoutes,
    olRoutes,
    // threeRoutes,
    // fabricRoutes,
    { // 404
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound/NotFound.vue')
    },
    { path: '/login', name: 'login', component: () => import("@/views/login/index.vue") }
]