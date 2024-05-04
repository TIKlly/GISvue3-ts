// Canvas
export default {
  path: '/canvas',
  name: 'Canvas',
  component: () => import('@/views/Canvas/index.vue'),
  meta: {
    navState: true,
    navName: 'Canvas',
    icon: 'MessageBox'
  },
  children: [
    {
      path: '/canvas-demo',
      name: 'CanvasDemo',
      component: () => import('@/views/Canvas/Demo/index.vue'),
      meta: {
        navState: true,
        navName: 'Demo',
      },
      children: [
        {
          path: '/canvas-demo-bubble',
          name: 'CanvasDemoBubble',
          component: () => import('@/views/Canvas/Demo/pages/Bubble/Bubble.vue'),
          meta: {
            navState: true,
            navName: '泡泡'
          }
        },
        {

          path: '/canvas-demo-line',
          name: 'CanvasDemoLine',
          component: () => import('@/views/Canvas/Demo/pages/Line/Line.vue'),
          meta: {
            navState: true,
            navName: '折线'
          }
        }
      ]
    }
  ]
}