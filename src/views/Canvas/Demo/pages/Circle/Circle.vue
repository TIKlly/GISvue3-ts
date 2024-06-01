<template>
  <div>
    <button>随机生成</button>
    <canvas id="canvas" :width="width" :height="height" ref="canvasRef">
    </canvas>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const width = 800
  const height = 600

  const draw = (canvas: HTMLCanvasElement, width: number, height: number) => {
    console.log(canvas)
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    // 设置字体样式
    ctx.clearRect(0, 0, width, height) // 清除画布
    ctx.beginPath()
    ctx.arc(200, 200, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false)
    ctx.stroke()
  }

  interface Bubble {
    x: number
    y: number
    dx: number
    dy: number
    radius: number
  }

  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min)
  const bubble: Bubble = {
    radius: randomInt(5, 30),
    x: randomInt(30, 800),
    y: randomInt(30, 800),
    dx: randomInt(-2, 2),
    dy: randomInt(-2, 2)
  }

  const draw2 = (canvas: HTMLCanvasElement, bubble: Bubble) => {
    console.log(canvas)
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    // 设置字体样式
    // ctx.clearRect(0, 0, width, height) // 清除画布
    ctx.beginPath()
    ctx.fillStyle = `#B34D4D`
    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 360)
    ctx.fill()
    ctx.closePath()
  }

  onMounted(() => {
    const canvas = canvasRef.value
    draw(canvas!, width, height)
    draw2(canvas!, bubble)
  })
</script>

<style lang="less" scoped></style>
