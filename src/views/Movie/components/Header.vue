<template>
    <div class=" flex   justify-between gap-3 p-5">
        <div class=" flex  gap-8  items-center">
            <img src="@/assets/images/logo.png" class="w-[80px] 
        md:w-[115px] object-cover'" alt="Img">
            <div class="hidden md:flex gap-5">
                <HeaderItem :menu="menu" />
            </div>
        </div>
        <img src="@/assets/images/Agumon.png"
            className='w-[40px] rounded-full  mr-10' />
        <!-- <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            className='w-[40px] rounded-full  mr-10' /> -->
    </div>
</template>

<script setup lang="ts">
import HeaderItem from './HeaderItem.vue';
const menu = [
    {
        name: 'HOME',
        icon: 'House',
        path: '/'
    },
    {
        name: 'SEARCH',
        icon: "Search",
        path: '/search'

    },
    {
        name: 'WATCH LIST',
        icon: "Plus",
        path: '/watch'
    },
    {
        name: 'ORIGINALS',
        icon: "StarFilled",
        path: '/originals'
    },
    {
        name: 'MOVIES',
        icon: "CirclePlus",
        path: '/movies'
    },
    {
        name: 'SERIES',
        icon: "Compass",
        path: '/series'
    }
]

</script>

<style lang="less" scoped></style>