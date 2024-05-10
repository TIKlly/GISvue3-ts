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
const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then(resp => {
        console.log(resp.data.results, '00');
        list.value = resp.data.results
    })
}

onMounted(() => {
    getTrendingMovies()
})

</script>

<style lang="less" scoped></style>