<template>
  <div class="app__home" id="appHome">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import bubble from "./index.ts";
import { useUserStore } from "@/stroe/index.ts";

const store = useUserStore();

onMounted(() => {
  bubble();
  store.setComponentPath("src/views/Canvas/Demo/pages/Bubble/Bubble.vue");
});
</script>

<style lang="scss" scoped>
.app__home {
  width: 800px;
  height: 560px;

  iframe {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 640px) {
  /* 移动设备样式 */
  .app__home {
    width: 400px;
    height: 300px;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
