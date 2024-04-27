<template>
    <div v-if="showStartupPage" class="flex flex-col items-center justify-center h-screen">
        <!-- <img src="logo.png" alt="Logo" class="w-20 h-20 mb-4"> -->
        <h1 class="text-3xl font-bold text-gray-800 mb-2">欢迎来到tik的练习日常</h1>
        <p class="text-lg text-gray-600">这是一个简单的启动页示例</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const showStartupPage = ref(false);
// 检查本地存储中是否已经显示过启动页
const hasShown = localStorage.getItem('hasShownStartupPage');
if (!hasShown) {
    showStartupPage.value = true;
    // 在本地存储中设置标志，表示已经显示过启动页
    localStorage.setItem('hasShownStartupPage', 'true');
}

// 在3秒后隐藏启动页
onMounted(() => {
    setTimeout(() => {
        showStartupPage.value = false;
    }, 2500); // 设置为3秒，可以根据需要调整
});

onUnmounted(() => {
    showStartupPage.value = false
})

// 当前路由

</script>

<style scoped lang="sass">
</style>
