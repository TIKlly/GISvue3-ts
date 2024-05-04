
export default {
    path: "/firebase_tool",
    name: "firebase_tool",
    component: () => import("@/views/FireBase/index.vue"),
    meta: {
        navState: true,
        navName: 'FireBase',
        icon: 'location'
    },
    children: [
        {
            path: "/firestore",
            name: "firestore",
            component: () => import("@/components/Upload.vue"),
            meta: {
                navState: true,
                navName: 'Firestore',
            }
        }

    ]

}