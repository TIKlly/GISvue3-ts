<template>
    <div class="absolute w-1/2 z-30  left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2   ">
        <div class="flex flex-col h-auto items-center space-y-6 bg-purple-200 p-8 rounded-lg shadow-lg">
            <label class="text-lg font-bold flex items-center">
                <span class="w-24">用户名：</span>
                <input v-model="userInfo.username"
                    class="focus:outline-none bg-white border border-gray-300 rounded-lg py-2 px-4 flex-grow"
                    placeholder="Username" type="text">
            </label>
            <label class="text-lg font-bold flex items-center">
                <span class="w-24">密码：</span>
                <input v-model="userInfo.password"
                    class="focus:outline-none bg-white border border-gray-300 rounded-lg py-2 px-4 flex-grow"
                    placeholder="Password" type="password">
            </label>
            <label>
                <button @click="handlerLogin"
                    class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none">SIGN
                    UP🎃</button>
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import "@/style/login.scss"

import { useUserStore } from "@/stroe";
import { ref } from "vue";

const useStore = useUserStore()

const userFrom = {
    username: 'admin',
    email: 'admin',
    password: 'admin'
}

const userInfo = ref<LoginType>(userFrom)
const handlerLogin = () => {
    useStore.Login(userInfo.value)
}

</script>



<style lang="less" scoped></style>