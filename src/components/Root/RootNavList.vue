<template>
    <template v-for="item in props.routesList" :key="item.path">
        <el-menu-item v-if="!item.children?.length" :index="item.path" :key="item.path">
            <el-icon v-if="item.meta.icon">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <template #title>{{ item.meta.navName }}</template>
        </el-menu-item>
        <el-sub-menu v-else :index="item.path" :key="item.path + '-sub-menu'">
            <template #title>
                <el-icon v-if="item.meta.icon">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.navName }}</span>
            </template>
            <RootNavList :routesList="item.children" v-if="item.children" />
        </el-sub-menu>
    </template>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps<{

    routesList: {
        path: string;
        name: string;
        meta: {
            icon: string;
            navName: string;
            _blank?: boolean
        };
        children?: {
            path: string;
            name: string;
            meta: {
                icon: string;
                navName: string;
            };
            children?: any[]; // 或者根据实际情况指定更具体的类型
        }[];
    }[];
}>();
</script>