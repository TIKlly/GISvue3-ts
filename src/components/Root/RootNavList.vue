<template>
    <template v-for="item in props.routesList">
        <el-menu-item v-if="!('children' in item)" :index="item.path" :key="item.path">
            <i :class="item.meta.icon"></i>
            <template #title>{{ item.meta.navName }}</template>
        </el-menu-item>
        <el-sub-menu v-else :index="item.path" :key="item.path">
            <template #title>
                <i :class="item.meta.icon"></i>
                <span>{{ item.meta.navName }}</span>
            </template>
            <RootNavList :routesList="item.children" />
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