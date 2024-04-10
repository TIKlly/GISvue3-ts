<template>
  <div class="app__home" id="appHome">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import bubble from './index.ts'
import { useUserStore } from "@/stroe/index.ts"

const store = useUserStore()

onMounted(() => {
  bubble()
  store.setComponentPath('src/views/Canvas/Demo/pages/Bubble/Bubble.vue')
})
</script>

<style lang="scss" scoped>
.app__home {
  width: 800px;
  height: 800px;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>