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
      path: '/canvas/canvas-demo',
      name: 'CanvasDemo',
      component: () => import('@/views/Canvas/Demo/index.vue'),
      meta: {
        navState: true,
        navName: 'Demo'
      },
      children: [
        {
          path: '/canvas/canvas-demo/canvas-demo-line',
          name: 'CanvasDemoLine',
          component: () => import('@/views/Canvas/Demo/pages/Line/Line.vue'),
          meta: {
            navState: true,
            navName: '线'
          }
        },
        {
          path: '/canvas/canvas-demo/canvas-demo-circle',
          name: 'CanvasDemoCircle',
          component: () =>
            import('@/views/Canvas/Demo/pages/Circle/Circle.vue'),
          meta: {
            navState: true,
            navName: '圆'
          }
        },
        {
          path: '/canvas/canvas-demo/canvas-demo-bubble',
          name: 'CanvasDemoBubble',
          component: () =>
            import('@/views/Canvas/Demo/pages/Bubble/Bubble.vue'),
          meta: {
            navState: true,
            navName: '泡泡'
          }
        }
      ]
    }
  ]
}
