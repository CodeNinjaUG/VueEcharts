<template>
     <v-chart class="chart" :option="barOptions" autoresize/>
</template>
<script>
import { use } from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { TitleComponent, GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import Vchart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';
use([
  BarChart,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
])
export default{
  setup() {
    provide('THEME_KEY', 'dark');
    const barOptions = ref(
      {
        textStyle: {
          fontFamily: 'Inter, "Helvetica Neue"'
        },
        title: {
          text: 'Weekly Sales',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/> {b} : {c}',
        },
        xAxis: {
          type: 'category',
          data: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
        },
        yAxis: {
          type: 'value',
        },
        legend: {
          data: [
            'Sales',
          ]
        },
        series: [
          {
            data: ['30000', '40000', '500000', '10000', '5000', '7900', '4500'],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgb(255,255,255)'
            }
          }
        ]
      }
    );
    return {
        barOptions
     }    
  },
}
</script>

<style scoped>
   .chart{
      height:500px;
      width:800px;
   }
</style>