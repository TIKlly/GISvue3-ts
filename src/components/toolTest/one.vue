<template>
  <div>
    <button @click="updateText">更新文本</button>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { nextTick } from "vue";
const message = ref("初始文本");

const updateText = () => {
  // 在下一个 DOM 更新周期后执行
  message.value = "更新后的文本";
  // DOM 更新尚未完成，此时获取到的文本还是旧的
  console.log(document.querySelector("p")?.innerText); // 输出：初始文本

  // 使用 $nextTick 确保在 DOM 更新完成后再执行回调
  // 此时获取到的文本已经是更新后的文本
  nextTick(() => {
    console.log(document.querySelector("p")?.innerText); // 输出：更新后的文本
  });
};
</script>
