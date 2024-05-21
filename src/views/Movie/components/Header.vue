<template>
  <div class="flex justify-between gap-3 p-5">
    <div class="flex gap-8 items-center">
      <img
        src="@/assets/images/logo.png"
        class="w-[80px] md:w-[115px] object-cover'"
        alt="Img"
      />
      <div class="pt-2 flex md:flex gap-5">
        <HeaderItem :menu="menu" />
      </div>
    </div>
    <div @click="$router.push('/')">
      <img
        src="@/assets/images/nationalG.png"
        class="w-[30px] h-[30px] rounded-full ml-8 border-4 border-solid border-blue-300 outline-none max-md:border-0 max-md:ml-0"
      />
    </div>
  </div>
  <Slider v-if="$route.path == '/moviespage/one'" />
</template>

<script setup lang="ts">
import HeaderItem from "./HeaderItem.vue";
import Slider from "./Slider.vue";
const menu = [
  {
    name: "HOME",
    icon: "House",
    path: "/moviespage/one",
  },
  {
    name: "SEARCH",
    icon: "Search",
    path: "/moviespage/two",
  },
  {
    name: "WATCH LIST",
    icon: "Plus",
    path: "/moviespage/three",
  },
  {
    name: "ORIGINALS",
    icon: "StarFilled",
    path: "/moviespage/four",
  },
  {
    name: "MOVIES",
    icon: "CirclePlus",
    path: "/moviespage/five",
  },
  {
    name: "SERIES",
    icon: "Compass",
    path: "/moviespage/six",
  },
];
</script>

<style lang="less" scoped></style>
