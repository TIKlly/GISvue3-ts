<template>
    <div className="helloworld-app">
        <div className="app-content" ref='antv' />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from "@/stroe/index.ts"
import { Graph } from "@antv/x6"
import { Snapline } from '@antv/x6-plugin-snapline'
import { data } from "./data.ts"

const store = useUserStore()

const antv = ref()


function componentDidMount() {
    const graph = new Graph({
        container: antv.value,
        // 设置画布背景颜色
        background: {
            color: '#F2F7FA',
        },
    })
    graph.fromJSON(data) // 渲染元素
    graph.centerContent() // 居中显示
    graph.use(new Snapline({
        enabled: true
    }))

}

onMounted(() => {
    componentDidMount()
    store.setComponentPath('src/views/AntX6/Basic/pages/antvx6-1/antvx6-1.vue')
})
</script>

<style lang="scss" scoped>
.helloworld-app {
    display: flex;
    width: 100%;
    padding: 0;
    font-family: sans-serif;

    .app-content {
        flex: 1;
        height: 280px;
        margin-right: 8px;
        margin-left: 8px;
        border-radius: 5px;
        box-shadow: 0 12px 5px -10px rgb(0 0 0 / 10%), 0 0 4px 0 rgb(0 0 0 / 10%);
    }
}
</style>