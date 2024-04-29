<template>
    <el-menu router :collapse="isCollapse" :default-active="props.currentPath" :unique-opened="true" @open="handleOpen"
        @close="handleClose">
        <el-scrollbar class="h-screen">
            <RootNavList :routesList="routesList" />
        </el-scrollbar>
    </el-menu>


</template>

<script setup lang="ts">
import RootNavList from './RootNavList.vue';
import { ref } from "vue"
import RootBus from '@/hooks/routeTool/RootBus';


const isCollapse = ref(RootBus.isCollapse)
// 规则化获取路由



const props = defineProps<{
    currentPath: string,
    routesList: any
}>()


const handleOpen = (_key: string, _keyPath: string[]) => {
    // console.log(_key, _keyPath)
}
const handleClose = (_key: string, _keyPath: string[]) => {
    // console.log(key, keyPath)
}

</script>

<style lang="scss" scoped></style>