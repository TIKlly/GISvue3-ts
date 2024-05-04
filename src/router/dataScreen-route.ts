
export default {
    path: "/dataScreen",
    name: "dataScreen",
    component: () => import("@/views/dataScreen/index.vue"),
    meta: {
        navState: true,
        navName: 'dataScreen',
        icon: 'location',
        _blank: true
    },
}