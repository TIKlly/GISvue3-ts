<template>
    <div class="">
        <Swiper :bnner="list" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import 'swiper/css';
import GlobalApi from './GlobalApi';
import Swiper from './Swiper.vue';

const list = ref()

// 获取电影列表
const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then(resp => {
        list.value = resp.data.results
    })
}

// 初始电影列表
onMounted(() => {
    getTrendingMovies()
})


</script>

<style lang="less" scoped></style>