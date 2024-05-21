<template>
  <div class="canvas-container" ref="containerRef">
    <canvas class="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useUserStore } from "@/stroe";

const stroe = useUserStore();

const containerRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let canvasWidth = 0;
let canvasHeight = 0;
let ctx: CanvasRenderingContext2D | null = null;
const lines: Line[] = [];

interface Line {
  [x: string]: /* __placeholder__ */
  any;
  x: number;
  y: number;
  length: number;
  speed: number;
  directionX: number;
  directionY: number;
  color: CanvasGradient;
}

const createCanvasAnimation = () => {
  if (!containerRef.value || !canvasRef.value) return;
  const canvas = canvasRef.value;
  ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvasWidth = canvas.width = containerRef.value.offsetWidth;
  canvasHeight = canvas.height = containerRef.value.offsetHeight;

  const randomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createGradient = () => {
    const gradient = ctx!.createLinearGradient(0, 0, canvasWidth, canvasHeight);
    gradient.addColorStop(
      0,
      `rgba(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)}, 1)`,
    );
    gradient.addColorStop(
      1,
      `rgba(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)}, 1)`,
    );
    return gradient;
  };

  class LineClass implements Line {
    x: number;
    y: number;
    length: number;
    speed: number;
    directionX: number;
    directionY: number;
    color: CanvasGradient;

    constructor(
      x: number,
      y: number,
      length: number,
      speed: number,
      directionX: number,
      directionY: number,
      color: CanvasGradient,
    ) {
      this.x = x;
      this.y = y;
      this.length = length;
      this.speed = speed;
      this.directionX = directionX;
      this.directionY = directionY;
      this.color = color;
    }

    draw() {
      this.x += this.speed * this.directionX;
      this.y += this.speed * this.directionY;

      if (this.x > canvasWidth || this.x < 0) {
        this.directionX = -this.directionX;
        this.color = createGradient();
      }
      if (this.y > canvasHeight || this.y < 0) {
        this.directionY = -this.directionY;
        this.color = createGradient();
      }

      ctx!.beginPath();
      ctx!.moveTo(this.x, this.y);
      ctx!.lineTo(
        this.x + this.length * this.directionX,
        this.y + this.length * this.directionY,
      );
      ctx!.strokeStyle = this.color;
      ctx!.lineWidth = 2;
      ctx!.stroke();
      ctx!.closePath();
    }
  }

  const lineCount = 20;
  const maxLineLength = 300;
  const minLineLength = 100;
  const minSpeed = 1;
  const maxSpeed = 5;

  // Create initial lines
  for (let i = 0; i < lineCount; i++) {
    const x = randomNum(0, canvasWidth);
    const y = randomNum(0, canvasHeight);
    const length = randomNum(minLineLength, maxLineLength);
    const speed = randomNum(minSpeed, maxSpeed) / 10;
    const directionX = randomNum(-1, 1) || 1;
    const directionY = randomNum(-1, 1) || 1;
    const color = createGradient();
    lines.push(
      new LineClass(x, y, length, speed, directionX, directionY, color),
    );
  }

  const animate = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (const line of lines) {
      line.draw();
    }

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

onMounted(() => {
  createCanvasAnimation();
  stroe.setComponentPath("src/views/Canvas/Demo/pages/Bubble/Bubble.vue");
});

onUnmounted(() => {
  // Clean up any resources if needed
});
</script>

<style scoped>
.canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.canvas {
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>
