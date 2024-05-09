<template>
    <div class=" flex items-center   font-semibold text-cyan-100  cursor-pointer  hover:underline underline-offset-8 mb-2 gap-3"
        v-for="item in menu" :key="item.icon">
        <el-icon>
            <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    menu: {
        name: string,
        icon: string,
        path: string
    }[]
}>()

</script>

<style lang="less" scoped></style>