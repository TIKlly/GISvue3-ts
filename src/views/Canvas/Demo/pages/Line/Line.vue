<template>
  <div class="canvas-container" ref="containerRef">
    <canvas width="800" height="600" ref="canvasRef"></canvas>
  </div>

  <div></div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const initCanvas = () => {
    const canvas = canvasRef.value!
    const ctx = canvas.getContext('2d')!
    // 绘制一条线
    ctx.beginPath()
    ctx.moveTo(50, 50) //起点
    ctx.lineTo(100, 50) //终点
    ctx.stroke() // 描边

    // 三角形
    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.lineTo(100, 200)
    ctx.lineTo(200, 200)
    ctx.lineTo(100, 100)
    ctx.stroke()
    // 正方形
    ctx.beginPath()
    ctx.moveTo(200, 200)
    ctx.lineTo(400, 200)
    ctx.lineTo(400, 400)
    ctx.lineTo(200, 400)
    ctx.closePath()
    ctx.stroke()
    // 正方形的另一种写法

    // 颜色填充
    ctx.beginPath()
    ctx.fillStyle = 'blue'
    ctx.strokeStyle = 'red'
    ctx.moveTo(300, 50)
    ctx.lineTo(350, 50)
    ctx.lineTo(350, 100)
    ctx.lineTo(300, 100)
    ctx.fill() // 填充
    ctx.closePath()
    ctx.stroke() // 绘线

    // 折线
    ctx.beginPath()
    ctx.moveTo(400, 50)
    ctx.lineTo(500, 100)
    ctx.lineTo(650, 50)
    ctx.lineTo(750, 200)
    ctx.stroke()

    // 弧线
    ctx.beginPath()
    ctx.arc(400, 400, 50, (Math.PI / 180) * 0, (Math.PI / 180) * 90, false)
    ctx.stroke()

    // 介于两点之间的弧

    ctx.beginPath()
    ctx.moveTo(500, 50)
    ctx.arcTo(600, 50, 600, 100, 50)
    ctx.lineTo(600, 400)
    ctx.stroke()

    // 圆
  }

  onMounted(() => {
    initCanvas()
  })
</script>

<style scoped>
  .canvas-container {
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid #000;
  }
  /* css 会拉伸canvas */
  .canvas {
    width: 100%;
    height: 100%;
    /* background-color: #000; */
  }
</style>
