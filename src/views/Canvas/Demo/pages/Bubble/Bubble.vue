<template>
  <div>
    <canvas id="canvas" ref="canvas" class="border border-solid"> </canvas>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  const NUM_BUBBLE = 30
  const RADIUS = 20
  const COLORS = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D'
  ]

  interface Bubble {
    x: number
    y: number
    radius: number
    dx: number
    dy: number
    color: string
  }

  const canvas = ref<HTMLCanvasElement | null>(null)
  let ctx: CanvasRenderingContext2D | null
  const bubbles: Bubble[] = []

  // toolFN
  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min)
  const randomColor = () => COLORS[randomInt(0, COLORS.length - 1)]

  // 初始化
  const initCanvas = () => {
    if (canvas.value) {
      ctx = canvas.value.getContext('2d')
      if (ctx) {
        canvas.value.width = 800
        canvas.value.height = 600
      }
    }
  }

  // 创建bubble 的属性组
  const createBubble = () => {
    if (canvas) {
      const radius = randomInt(5, RADIUS)
      const x = randomInt(radius, canvas.value!.width - radius)
      const y = randomInt(radius, canvas.value!.height - radius)
      const dx = randomInt(-2, 2)
      const dy = randomInt(-2, 2)
      const color = randomColor()
      bubbles.push({ x, y, radius, dx, dy, color })
    }
  }

  // 创建bubble
  const drawBubble = (bubble: Bubble) => {
    if (ctx) {
      ctx.beginPath()
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 360)
      ctx.fillStyle = bubble.color
      ctx.fill()
      ctx.closePath()
    }
  }

  // 碰撞检测 ,然后对dx和dy取反 本质上是不断改变圆心位置 结合ctx.clearRect 做清除
  const updateCanvas = () => {
    if (ctx) {
      ctx.clearRect(0, 0, 800, 600)
      bubbles.forEach((bubble) => {
        if (canvas) {
          if (
            bubble.x + bubble.radius > canvas.value!.width - bubble.radius ||
            bubble.x + bubble.dx < bubble.radius
          ) {
            bubble.dx = -bubble.dx
          }
          if (
            bubble.y + bubble.radius > canvas.value!.height - bubble.radius ||
            bubble.y + bubble.dy < bubble.radius
          ) {
            bubble.dy = -bubble.dy
          }
          bubble.x += bubble.dx
          bubble.y += bubble.dy
        }
        drawBubble(bubble)
      })
    }
  }
  onMounted(() => {
    // 初始化
    initCanvas()
    // 数量
    for (let i = 0; i < NUM_BUBBLE; i++) {
      createBubble()
    }
    setInterval(updateCanvas, 30)
  })

  onUnmounted(() => {
    bubbles.length = 0
  })
</script>

<style lang="less" scoped></style>
