<!-- ECharts - SVG渲染 -->
<template>
  <div
    id="chart"
    class="w-ful h-full min-h-[600px] min-w-[300px]"
    ref="chartDom"
  ></div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import * as echarts from 'echarts'
  import { useUserStore } from '@/stroe/index.ts'
  import { useECharts } from '@/hooks/initchart/useECharts'

  const store = useUserStore()

  // echart元素

  // 数据和配置项
  const option: echarts.EChartsOption = {
    title: {
      text: 'SVG渲染'
    },
    xAxis: {
      // x轴
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {
      // y轴
    },
    series: {
      // 图表类型
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  }

  const { chartDom } = useECharts(option)

  onMounted(() => {
    store.setComponentPath(
      'src/views/ECharts/Basic/pages/RendererSVG/RendererSVG.vue'
    )
  })
</script>

<style lang="scss" scoped></style>
