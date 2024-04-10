<template>
    <div class="app__home">
        <div class="text">
            <span v-for="str in myNameArr" :key="str" v-html="str">
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const myName = ref(`I'm Tik_o`)
const myNameArr = computed(() => {
    let arr = []
    for (let i = 0; i < myName.value.length; i++) {
        let str = myName.value[i] !== ' ' ? myName.value[i] : '&nbsp;'
        arr.push(str)
    }
    return arr
})

</script>

<style lang="scss" scoped>
@import url('./index2.css');
</style>