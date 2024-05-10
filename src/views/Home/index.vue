<template>
    <div class="flex justify-center items-center bg-black  border-[2px] border-gray-600
            rounded-lg  hover:scale-95 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800 ">
        <img class=" h-[600px]  w-full   object-contain opacity-100 z-0    max-md:h-96" src="@/assets/images/logo.png"
            alt="">
        <video src='@/assets/Videos/star-wars.mp4' autoPlay loop playsInline muted class='absolute z-1  object-cover h-[600px]  max-md:h-96 w-full top-0 rounded-md 
            opacity-0 hover:opacity-90' />

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