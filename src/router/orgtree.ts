

export default {
    path: "/orgtree",
    component: () => import("@/views/Orgtree/index.vue"),
    name: "orgtree",
    meta: {
        navState: true,
        navName: 'OrgTree',
        icon: 'location'
    },
}