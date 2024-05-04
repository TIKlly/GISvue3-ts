<template>
    <div>
        <span class=" mx-1 ">{{ username }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from "@/stroe/modules/user"
const userStore = useUserStore()
const username = computed(() => userStore.userInfo.name);

</script>

<style lang="less" scoped></style>