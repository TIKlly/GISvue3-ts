<template>
    <div class="flex justify-center items-center h-[80%]">
        <!-- <iframe src="https://lottie.host/embed/74a3188f-30e9-40a1-a7ac-969c7f4a8ddb/eUXDhTitLS.json"></iframe> -->
        <img class="w-full " src="@/assets/images/login_left3.png" alt="">
        <!-- <svg src="@/assets/images/Animation - 1697770821211.json"></svg> -->
        <!-- <canvas ref="canvas" class="w-[50%] h-[100%]" width="400" height="400"></canvas> -->
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let smiling = false;

onMounted(() => {
    if (canvas.value) {
        ctx = canvas.value.getContext('2d');
        // setInterval(animateSmile, 1000);
        drawFace();
    }
});

function drawFace() {
    if (!ctx || !canvas.value) return;

    const canvasWidth = canvas.value.width;
    const canvasHeight = canvas.value.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw face
    ctx.beginPath();
    ctx.arc(canvasWidth / 2, canvasHeight / 2, 100, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Draw left eye
    ctx.beginPath();
    ctx.arc(canvasWidth / 2 - 30, canvasHeight / 2 - 20, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();

    // Draw right eye
    ctx.beginPath();
    ctx.arc(canvasWidth / 2 + 30, canvasHeight / 2 - 20, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();

    // Draw mouth
    ctx.beginPath();
    if (smiling) {
        ctx.arc(canvasWidth / 2, canvasHeight / 2 + 20, 50, 0, Math.PI * 2);
    } else {
        ctx.arc(canvasWidth / 2, canvasHeight / 2 + 20, 50, 0, Math.PI);
    }
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();
}

// function animateSmile() {
//     smiling = !smiling;
//     drawFace();
// }
</script>

<style scoped>
.canvas {
    border: 1px solid #ccc;
}
</style>