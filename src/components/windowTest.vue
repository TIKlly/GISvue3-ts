<template>
    <div class="  m-2 p-2 w-96 h-32 bg-green-200  align-middle">
        {{ Ip }}--{{ deviceModel }}--{{ Address }}
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getUserDeviceModel, getUserIP, getUserLoginAddress } from "@/util/checkIp.ts"

const deviceModel = getUserDeviceModel();
const Ip = ref()
const Address = ref()


const handler = async () => {
    Ip.value = await getUserIP()
    Address.value = await getUserLoginAddress()
}

onMounted(() => {
    handler()

})


</script>

<style lang="less" scoped></style>