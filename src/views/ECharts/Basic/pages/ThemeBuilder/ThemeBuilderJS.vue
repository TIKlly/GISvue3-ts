<!-- ECharts - 自定义主题JS版 -->
<template>
  <div
    id="chart"
    class="w-ful h-full min-h-[500px] min-w-[300px]"
    ref="chartDom"
  ></div>
  <aside>
    <p>自定义echarts主题说明：</p>
    <p>
      1. 在
      <el-link
        href="https://echarts.apache.org/zh/theme-builder.html"
        target="_blank"
        type="primary"
      >
        「Echarts官方编辑主题<span class="el-icon-link"></span>」
      </el-link>
      ，并下载js资源文件。
    </p>
    <p>2. 将下载下来的主题文件(js)放到 node_modules/echarts/theme 目录下</p>
    <p>
      3. 打开下载好的主题文件，搜索 “echarts.registerTheme”
      即可找到主题名(可以自己修改改主题名)
    </p>
    <p>4. 在vue中引入</p>
    <p>5. 使用</p>

    <p>
      备注：本例所使用的主题放在 src/assets/echarts/theme/vintage2.js
      。本例的主题只改了官方提供的vintage主题的标题颜色
    </p>
  </aside>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import * as echarts from 'echarts'
  import { useUserStore } from '@/stroe'
  import { useECharts } from '@/hooks/initchart/useECharts'

  const store = useUserStore()

  // echart元素

  // 数据和配置项
  const option: echarts.EChartsOption = {
    title: {
      text: '自定义主题 JS版'
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

  // 渲染函数
  const { chartDom } = useECharts(option)

  onMounted(() => {
    store.setComponentPath(
      'src/views/ECharts/Basic/pages/ThemeBuilder/ThemeBuilderJS.vue'
    )
  })
</script>

<style lang="scss" scoped>
  .chart {
    width: 800px;
    height: 400px;
  }
</style>
