<template>
  <div class="">
    <Swiper :bnner="list" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import "swiper/css";
import GlobalApi from "./GlobalApi";
import Swiper from "./Swiper.vue";

const list = ref([
  {
    backdrop_path:
      "https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/9/997m2fipgc6erv7.jpg",
    name: "a",
  },
  {
    backdrop_path: "https://pic.52112.com/180303/180303_21/VvSOGERZ7s.jpg",
    name: "b",
  },
  {
    backdrop_path:
      "https://pic2.zhimg.com/62e0bee1e7014c16dc7ff7a30302c711_r.jpg?source=1940ef5c",
    name: "c",
  },
  {
    backdrop_path:
      "https://ts1.cn.mm.bing.net/th/id/R-C.57940f37931e9908063e1f4efb883ced?rik=%2bQvzIeulbjCoig&riu=http%3a%2f%2fww4.sinaimg.cn%2flarge%2f844f612dgw1eoikfhp44cj21kw0r8ng8.jpg&ehk=D40w2irNaHkpoS6ckxXGfaclm5HbE%2bHRX75tEO%2bLlgc%3d&risl=&pid=ImgRaw&r=0",
    name: "c",
  },
]);

// 获取电影列表
const getTrendingMovies = () => {
  GlobalApi.getTrendingVideos.then((resp) => {
    list.value = resp.data.results;
  });
};

// 初始电影列表
onMounted(() => {
  getTrendingMovies();
});
</script>

<style lang="less" scoped></style>
