<template>
  <div class="relative w-full overflow-hidden flex items-center justify-center">
    <video controls ref="V" preload="true" class="w-3/4">
      <source src="@/assets/Videos/marvel.mp4" type="video/webm" />
      <source src="@/assets/Videos/marvel.mp4" type="video/mp4" />
      Download the
      <a href="@/assets/Videos/marvel.mp4">WEBM</a>
      or
      <a href="@/assets/Videos/marvel.mp4">MP4</a>
      video.
    </video>
    <!-- <div class="absolute bottom-1  w-3/4    ">
            <el-progress :percentage="0" status="success" :duration="10" :show-text="false" />
            <div class=" mt-3 mx-3  max-md:mt-1">
                <el-icon @click="handlerpaly" v-if="!isplay" size="28" color="white">
                    <CaretRight />
                </el-icon>
                <el-icon @click="handlderpause" v-if="isplay" size="28" color="white">
                    <VideoPause />
                </el-icon>
                <el-icon size="30" color="white">
                    <DArrowRight />
                </el-icon>
            </div>
        </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const V = ref<HTMLVideoElement>();

// const isplay = ref(false)

// play
// const handlerpaly = () => {
//     V.value!.play()
//     isplay.value = true
// }
// const handlderpause = () => {
//     V.value!.pause()
//     isplay.value = false
// }
</script>

<style scoped>
:deep(.el-progress-bar__outer) {
  height: 2px !important;
}
</style>
