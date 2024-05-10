<template>
    <el-menu class=" h-screen w-[180px]" router :collapse="isCollapse" :default-active="props.currentPath"
        :unique-opened="true" @open="handleOpen" @close="handleClose">
        <RootNavList :routesList="routesList" />
    </el-menu>
</template>

<script setup lang="ts">
import RootNavList from './RootNavList.vue';
import { onMounted, ref } from "vue"
import RootBus from '@/hooks/routeTool/RootBus';

const isCollapse = ref(RootBus.isCollapse)
// 规则化获取路由
const props = defineProps<{
    currentPath: string,
    routesList: any
}>()

onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
});



// 屏幕检测
function handleResize() {
    isCollapse.value = window.innerWidth < 767;
}

const handleOpen = (_key: string, _keyPath: string[]) => {
    // console.log(_key, _keyPath)
}
const handleClose = (_key: string, _keyPath: string[]) => {
    // console.log(key, keyPath)
}

</script>

<style lang="scss" scoped></style>