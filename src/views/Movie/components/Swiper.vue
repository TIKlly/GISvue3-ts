<template>
  <div class="h-[310px] gap-8 pb-10 md:h-[460px]">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{
        clickable: false,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide v-for="item in bnner" :key="item.name" class="flex w-full">
        <!-- <img class='min-w-full  h-[310px] object-cover  box
            object-left-top   mr-5 rounded-md  transition-all duration-100 ease-in '
                    :src="'https://image.tmdb.org/t/p/original' + item.backdrop_path" alt="" /> -->
        <img
          class="min-w-full h-[310px] md:h-[460px] object-cover object-center rounded-md hover:scale-110 transition-all duration-100 ease-in"
          :src="item.backdrop_path"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

defineProps<{
  bnner: any;
}>();

//默认滑动效果（这里面注释掉的可以不要）
// const onSwiper = swiper => {
// 	console.log(swiper);
// };
// const onSlideChange = e => {
// 	// swiper切换的时候执行的方法
// 	console.log('slide change', e.activeIndex);
// };
// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Autoplay, Pagination, Navigation, A11y];
</script>

<style lang="scss" scoped></style>
