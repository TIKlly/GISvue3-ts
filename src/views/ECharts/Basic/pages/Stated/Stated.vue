<!-- ECharts - 起步 -->
<template>
  <div
    id="chart"
    class="w-ful h-full min-h-[600px] min-w-[300px]"
    ref="chartDom"
  ></div>

  <div v-highlight>
    <h2>useECharts hooks 封装</h2>
    <pre><code ref="code" class="javascript">{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useECharts } from '@/hooks/initchart/useECharts'
  const code = `
import { ref, onMounted, onUnmounted, Ref } from 'vue'
import * as echarts from 'echarts'

type EChartsOption = echarts.EChartsOption

export function useECharts(option: EChartsOption, theme: string = 'dark') {
  const chartDom: Ref<HTMLElement | null> = ref(null)
  let chartInstance: echarts.ECharts | null = null

  const chartInit = () => {
    if (chartDom.value) {
      chartInstance = echarts.init(chartDom.value, theme)
      chartInstance.setOption(option)
    }
  }

  const resizeChart = () => {
    if (chartInstance) {
      chartInstance.resize()
    }
  }

  onMounted(() => {
    window.addEventListener('resize', resizeChart)
    chartInit()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeChart)
    if (chartInstance) {
      chartInstance.dispose()
    }
  })

  return {
    chartDom,
    chartInit,
    resizeChart
  }
}
`
  import { useUserStore } from '@/stroe/index.ts'
  const store = useUserStore()
  // echart元素

  // 数据和配置项
  const option: echarts.EChartsOption = {
    title: {
      text: '起步'
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
    store.setComponentPath('src/views/ECharts/Basic/pages/Stated/Stated.vue')
  })
</script>

<style lang="scss" scoped>
  .chart {
    width: 800px;
    height: 400px;
  }

  pre {
    padding: 10px;
    border-radius: 5px;
    overflow: auto;
  }
</style>
