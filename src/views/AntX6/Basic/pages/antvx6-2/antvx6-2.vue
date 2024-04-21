<template>
    <div class="helloworld-app">
        <div class="app-content" ref="antv" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Graph } from "@antv/x6"
import { Snapline } from '@antv/x6-plugin-snapline'

const antv = ref()

const data = {
    nodes: [
        {
            id: 'node1',
            shape: 'rect',
            x: 40,
            y: 40,
            width: 100,
            height: 40,
            label: 'hello',
            tools: ['button-remove'],
            attrs: {
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    rx: 6,
                    ry: 6,
                },
            },
        },
        {
            id: 'node2',
            shape: 'rect',
            x: 160,
            y: 180,
            width: 100,
            height: 40,
            label: 'world',
            attrs: {
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    rx: 6,
                    ry: 6,
                },
            },
        },
        {
            id: 'node3',
            shape: 'rect',
            x: 10,
            y: 180,
            width: 100,
            height: 40,
            label: 'world2',
            attrs: {
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    rx: 6,
                    ry: 6,
                },
            },
        },
        // Add more nodes
        {
            id: 'node4',
            shape: 'circle',
            x: 250,
            y: 100,
            width: 80,
            height: 80,
            label: 'circle',
            attrs: {
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    r: 40,
                },
            },
        },
        {
            id: 'node5',
            shape: 'ellipse',
            x: 400,
            y: 200,
            width: 120,
            height: 60,
            label: 'ellipse',
            attrs: {
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    rx: 60,
                    ry: 30,
                },
            },
        }
    ],
    edges: [
        {
            shape: 'edge',
            source: 'node1',
            target: 'node2',
            label: 'x6',
            attrs: {
                line: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                },
            },
        },
        {
            shape: 'edge',
            source: 'node2',
            target: 'node3',
            label: 'x6',
            attrs: {
                line: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                },
            },
        },
        {
            shape: 'edge',
            source: 'node3',
            target: 'node4',
            label: 'x6',
            attrs: {
                line: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                },
            },
        },
        {
            shape: 'edge',
            source: 'node4',
            target: 'node5',
            label: 'x6',
            attrs: {
                line: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                },
            },
        },
    ],
}

function componentDidMount() {
    const graph = new Graph({
        container: antv.value,
        background: {
            color: '#F2F7FA',
        },
    })
    graph.fromJSON(data)
    graph.centerContent()
    graph.use(new Snapline({
        enabled: true
    }))
}

onMounted(() => {
    componentDidMount()
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