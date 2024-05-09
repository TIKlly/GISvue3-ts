<script setup lang="ts">
import disney from '@/assets/Images/disney.png'
import marvel from '@/assets/Images/marvel.png'
import nationalG from '@/assets/Images/nationalG.png'
import pixar from '@/assets/Images/pixar.png'
import starwar from '@/assets/Images/starwar.png'

import starwarV from '@/assets/Videos/star-wars.mp4'
import disneyV from '@/assets/Videos/disney.mp4'
import marvelV from '@/assets/Videos/marvel.mp4'
import nationalGeographicV from '@/assets/Videos/national-geographic.mp4'
import pixarV from '@/assets/Videos/pixar.mp4'

const productionHouseList = [
    {
        id: 1,
        image: disney,
        video: disneyV
    },
    {
        id: 2,
        image: pixar,
        video: pixarV
    },
    {
        id: 3,
        image: marvel,
        video: marvelV
    },
    {
        id: 4,
        image: starwar,
        video: starwarV
    },
    {
        id: 5,
        image: nationalG,
        video: nationalGeographicV
    },
]

</script>
<template>
    <div class='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        <div v-for="item in productionHouseList" :key='item.id' class='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
            <video :src='item.video' autoPlay loop playsInline muted class='absolute z-0  w-full top-0 rounded-md 
            opacity-0 hover:opacity-90' />
            <img :src='item.image' class='w-full z-[1] opacity-100' />
        </div>

    </div>
</template>



<style lang="less" scoped></style>