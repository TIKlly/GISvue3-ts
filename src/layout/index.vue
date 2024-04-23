<template>
    <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="sidebarWidth">
            <RootNav></RootNav>
        </el-aside>
        <!-- 内容区域 -->
        <el-container>
            <el-header>
                <RootHeader></RootHeader>
            </el-header>
            <el-main :style="{ padding: contentPadding }">
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import RootNav from '@/components/Root/RootNav.vue';
import RootHeader from "@/components/Root/RootHeader.vue"

const isMobile = ref<boolean>(false)

onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})

function handleResize() {
    isMobile.value = window.innerWidth < 768
}

// 使用计算属性动态计算侧边栏宽度和内容区域的内边距
const sidebarWidth = computed(() => isMobile.value ? '100%' : '200px')
const contentPadding = computed(() => isMobile.value ? '20px' : '40px')


</script>

<style lang="scss" scoped>
/* 在移动端隐藏侧边栏 */
.el-aside {
    @media (max-width: 767px) {
        display: block;
        width: 100%;
    }
}
</style>