export default {
  path: "/test",
  name: "Test",
  component: () => import("@/components/toolTest/index.vue"),
  meta: {
    navState: true,
    navName: "测试",
    icon: "MessageBox",
  },
  children: [
    {
      path: "/one",
      name: "homeIndex",
      component: () => import("@/components/toolTest/one.vue"),
      meta: {
        navState: true,
        navName: "ONE",
      },
    },
    {
      path: "/two",
      name: "homeAbout",
      component: () => import("@/components/toolTest/two.vue"),
      meta: {
        navState: true,
        navName: "TWO",
      },
    },
    {
      path: "/three",
      name: "homeContact",
      component: () => import("@/components/toolTest/three.vue"),
      meta: {
        navState: true,
        navName: "THREE",
      },
    },
    {
      path: "/fours",
      name: "homeNews",
      component: () => import("@/components/toolTest/four.vue"),

      meta: {
        navState: true,
        navName: "NEWS",
      },
    },
  ],
};
