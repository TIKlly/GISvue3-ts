export default {
  path: '/opencv',
  component: () => import('@/views/opencv/index.vue'),
  name: 'opencv',
  meta: {
    navState: true,
    navName: 'opencv',
    icon: 'PictureRounded'
  },
  children: [
    {
      path: '/opencv_start',
      component: () => import('@/views/opencv/pages/Started/Started.vue'),
      name: 'opencv_start',
      meta: {
        navState: true,
        navName: '起步',
        icon: 'Share'
      }
    }
  ]
}
