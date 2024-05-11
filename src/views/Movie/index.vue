<template>
    <div class="bg-slate-950 w-screen  h-screen">
        <Header />

        <!-- <ProductionHouse /> -->
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">

import Header from './components/Header.vue';

</script>

<style lang="less" scoped></style>