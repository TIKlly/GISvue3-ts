
export default {
    path: '/antvx6',
    name: 'Antvx6',
    component: () => import('@/views/AntX6/index.vue'),
    meta: {
        navState: true,
        navName: 'Antvx6',
        icon: 'MessageBox'
    },
    children: [
        {

            path: '/antvx6/antvx6-basic',
            name: 'antvx6-basic',
            component: () => import('@/views/AntX6/Basic/index.vue'),
            meta: {
                navState: true,
                navName: 'antvx6-basic',
            },
            children: [
                {
                    path: '/antvx6/antvx6-basic/basic-1',
                    name: 'basic-1',
                    component: () => import('@/views/AntX6/Basic/pages/antvx6-1/antvx6-1.vue'),
                    meta: {
                        navState: true,
                        navName: 'basic-1',
                    }
                },
                {
                    path: '/antvx6/antvx6-basic/basic-2',
                    name: 'basic-2',
                    component: () => import('@/views/AntX6/Basic/pages/antvx6-2/antvx6-2.vue'),
                    meta: {
                        navState: true,
                        navName: 'basic-2',

                    }
                }
            ]
        }
    ]
}