<template>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :value="false">expand</el-radio-button>
        <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group> -->
    <el-menu router :collapse="isCollapse" :default-active="currentPath" :unique-opened="true" @open="handleOpen"
        @close="handleClose">
        <el-scrollbar class="h-screen">
            <RootNavList :routesList="routesList" />
        </el-scrollbar>
    </el-menu>
</template>

<script setup lang="ts">
import RootNavList from './RootNavList.vue';
import { ref, computed } from "vue"
import { useRoute, useRouter } from 'vue-router';
import { Route, filterRoutes } from "@/hooks/routeTool/filtterRoutes"
import RootBus from '@/hooks/routeTool/RootBus';


const router = useRouter()
const route = useRoute()

const isCollapse = ref(RootBus.isCollapse)
// 规则化获取路由

const routesList: any = computed(() => {
    return filterRoutes(router.options.routes as Route[])
    // return router.options.routes as Route[]
})




// 当前路由
const currentPath = computed(() => {
    return route.path
})

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<style lang="scss" scoped></style>