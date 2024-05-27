// useECharts.ts
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
