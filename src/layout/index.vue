<template>
    <el-container>
        <!-- 侧边栏按钮（仅在移动端显示） -->
        <el-button v-if="isMobile" type="primary" class="sidebar-btn" @click="toggleDrawer">
            open
        </el-button>
        <!-- 侧边栏（移动端布局） -->
        <el-drawer v-if="isMobile" v-model="isDrawerVisible" direction="ltr" :modal="false" >
            <RootNav></RootNav>
        </el-drawer>

        <!-- 侧边栏（大屏幕布局） -->
        <el-aside v-else>
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
const isDrawerVisible = ref<boolean>(false)

onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    handleRouteChange();
})

function handleResize() {
    isMobile.value = window.innerWidth < 767
}

function toggleDrawer() {
    isDrawerVisible.value = !isDrawerVisible.value
}

// 根据当前的布局方式设置侧边栏的显示状态
function handleRouteChange() {
    if (isMobile.value) {
        isDrawerVisible.value = false; // 在移动端布局中，路由跳转时隐藏侧边栏
    }
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