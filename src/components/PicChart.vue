<template>
  <Input3>
      <template v-slot:top>
        <p>这里是头部</p>
      </template>
      <template v-slot:left>
        <p>这里是左边</p>
      </template>
      <template v-slot:right>
        <div id="picChart" :style="{ width: '1500px', height: '550px' }"></div>
      </template>
  </Input3>
</template>

<script lang="ts" setup>
  // 引入echarts

  import * as echarts from 'echarts'
  import { computed, onMounted } from 'vue'
  import Input3 from './Input3.vue';
  const chartProps = defineProps<{
    list: { value: number; name: string }[]
  }>()
  onMounted(() => {
    // 需要获取到element,所以是onMounted的Hook
    let myChart = echarts.init(document.getElementById('picChart'))
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'Nightingale Chart',
        subtext: 'Fake Data',
        left: 'left'
      },
      legend: {
        top: 'bottom'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [25, 80],
          center: ['15%', '25%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data:
              [
                { value: 40, name: 'rose 1' },
                { value: 38, name: 'rose 2' },
                { value: 32, name: 'rose 3' },
                { value: 30, name: 'rose 4' },
                { value: 28, name: 'rose 5' },
                { value: 26, name: 'rose 6' },
                { value: 22, name: 'rose 7' },
                { value: 18, name: 'rose 8' }
              ]
            // chartProps.list
        }
      ]
    })
    window.onresize = function () {
      // 自适应大小
      myChart.resize()
    }
  }
  )
</script>



