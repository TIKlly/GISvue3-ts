<template>
    <template v-for="item in props.routesList" :key="item.path">
        <el-menu-item v-if="!('children' in item)" :index="item.path" :key="item.path">
            <!-- <el-icon>
                <component :is="item.meta.icon"></component>
            </el-icon> -->
            <template #title>{{ item.meta.navName }}</template>
        </el-menu-item>
        <el-sub-menu v-else :index="item.path" :key="item.path + '-sub-menu'">
            <template #title>

                <IEpPlus />
                <IEpCaretLeft />
                <el-icon size="30" color="black">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span v-if="!isShow">{{ item.meta.navName }}</span>
            </template>
            <RootNavList :routesList="item.children" :isShow="props.isShow" v-if="item.children" />
        </el-sub-menu>
    </template>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps<{
    isShow: boolean,
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