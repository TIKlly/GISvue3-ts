<template>
    <el-container>
        <!-- 侧边栏按钮（仅在移动端显示） -->
        <el-button v-if="isMobile" type="primary" class="sidebar-btn" @click="toggleDrawer">
            <el-icon>
                <Operation />
            </el-icon>
        </el-button>

        <!-- 侧边栏（大屏幕布局） -->
        <el-aside v-if="!isMobile" class="w-[180px]">
            <RootNav :currentPath="currentPath"></RootNav>
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
import { Operation } from "@element-plus/icons-vue"
import { useRoute } from 'vue-router';

const route = useRoute()
const isMobile = ref<boolean | any>(false)

onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})

function handleResize() {
    isMobile.value = window.innerWidth < 767
}


// 当前路由
const currentPath = computed(() => {
    return route.path
})

function toggleDrawer() {
    isMobile.value = !isMobile.value
    // 在移动端不再使用侧边栏，因此不需要相关的逻辑了
}

// 使用计算属性动态计算内容区域的内边距
const contentPadding = computed(() => isMobile.value ? '20px' : '40px')
</script>

<style scoped lang="scss">
.sidebar-btn {
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 24px;
    cursor: pointer;
    z-index: 1000;
}
</style>
