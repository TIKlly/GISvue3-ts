// import nativeRoutes from './nativeRoutes.js'
// import svgRoutes from './svgRoutes.js'
import canvasRoutes from "./canvasRoutes.ts";
import echartsRoutes from "./echartsRoutes.ts";
// import bmapRoutes from './bmapRoutes.js'
import olRoutes from "./olRoutes.ts";
// import threeRoutes from './threeRoutes.js'
// import fabricRoutes from './fabricRoutes.js'
import antvX6 from "./antvX6.ts";
import testRoutes from "./testRoutes";
import Orgtree from "./orgtree";
import Rirebase from "./firebase_route.ts";
import dataScreen from "./dataScreen-route.ts";

const Index = () => import("@/layout/index.vue");
const Home = () => import("@/views/Home/index.vue");
export const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
    redirect: "/home",
    meta: {
      navState: true,
      navName: "首页",
      icon: "HomeFilled",
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      testRoutes,
      antvX6,
      Rirebase,
      canvasRoutes,
      echartsRoutes,
      olRoutes,
      Orgtree,
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About/About.vue"),
        meta: {
          navState: true,
          navName: "About us",
        },
      },
    ],
  },
  dataScreen,
  {
    path: "/moviespage",
    name: "movies",
    redirect: "/moviespage/one",
    component: () => import("../views/Movie/index.vue"),
    meta: {
      navState: true,
      navName: "M页面",
      icon: "HelpFilled",
    },
    children: [
      {
        path: "/moviespage/one",
        name: "HOME",
        component: () =>
          import("../views/Movie/components/ProductionHouse.vue"),
      },
      {
        path: "/moviespage/two",
        name: "SEARCH",
        component: () => import("../views/Movie/components/Searchpage.vue"),
      },
      {
        path: "/moviespage/three",
        name: "WATCH LIST",
        component: () =>
          import("../views/Movie/components/ProductionHouse.vue"),
      },
      {
        path: "/moviespage/four",
        name: "ORIGINALS",
        component: () =>
          import("../views/Movie/components/ProductionHouse.vue"),
      },
      {
        path: "/moviespage/five",
        name: "MOVIES",
        component: () => import("../views/Movie/components/MoviePage.vue"),
      },
      {
        path: "/moviespage/six",
        name: "SERIES",
        component: () =>
          import("../views/Movie/components/ProductionHouse.vue"),
      },
    ],
  },
  {
    // 404
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound/NotFound.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
];
