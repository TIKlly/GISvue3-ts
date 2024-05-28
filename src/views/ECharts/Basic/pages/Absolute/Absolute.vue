<!-- ECharts - 定位 -->
<template>
  <div
    id="chart"
    class="w-ful h-full min-h-[450px] min-w-[600px]"
    ref="chartDom"
  ></div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import * as echarts from 'echarts'
  import { useUserStore } from '@/stroe/index.ts'
  import { useECharts } from '@/hooks/initchart/useECharts'

  const store = useUserStore()

  // 数据和配置项
  const option: echarts.EChartsOption = {
    title: {
      text: '定位'
    },
    xAxis: {
      // x轴
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {
      // y轴
    },
    grid: {
      // 定位的代码
      top: 100,
      right: 200,
      bottom: 100,
      left: '10%'
    },
    series: {
      // 图表类型
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  }

  // 渲染函数
  const { chartDom } = useECharts(option)

  onMounted(() => {
    store.setComponentPath(
      'src/views/ECharts/Basic/pages/Absolute/Absolute.vue'
    )
  })
</script>

<style lang="scss" scoped></style>
