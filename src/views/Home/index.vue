<template>
  <div
    class="flex justify-center items-center bg-black border-[2px] border-gray-600 rounded-lg hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
  >
    <img
      class="h-[600px] w-full object-contain opacity-100 z-0 max-md:h-96"
      src="@/assets/images/logo.png"
      alt=""
    />
    <video
      src="@/assets/Videos/star-wars.mp4"
      autoPlay
      loop
      playsInline
      muted
      class="absolute z-1 object-cover h-[600px] max-md:h-96 w-full top-0 rounded-md opacity-0 hover:opacity-90"
    />
  </div>

  <div class="my-8">
    <div class="flex justify-center">
      <h2 class="text-lg">About</h2>
    </div>
    <About />
  </div>
</template>

<script setup lang="ts">
import About from "../About/About.vue";
</script>

<style scoped>
.canvas {
  border: 1px solid #ccc;
}
</style>
