<template>
    <LineChart :chartData="testData" class="chart" :options=options />
</template>

<script>
import { defineComponent } from 'vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import { ref} from '@vue/reactivity'

Chart.register(...registerables);

export default defineComponent({
  name: 'RankChart',
  components: { LineChart },
  props: ['graph_source', 'universityData'],
  setup(props) {   
    const years = ref([])
    const qs_rank = ref([])
    const the_rank = ref([])


    years.value = Object.keys(props.universityData.source.THE)  // 연도 데이터 [2020, 2021, 2022]

    for (let i = 0; i < years.value.length; i++) {
      the_rank.value.push(props.universityData.source.THE[years.value[i]].rank)  // 연도별 순위 담기
      qs_rank.value.push(props.universityData.source.QS[years.value[i]].rank)
    }

    const testData = {
      labels: years.value,
      datasets: [
        {
          data: (props.graph_source == 'THE') ? the_rank.value : qs_rank.value,
          backgroundColor: ['#00cc44'],
          borderColor: ['#0d0d0d'],
          borderWidth: 1
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          reverse: true,
          // min: 1,
          // max: max.value + 5,
          ticks: {
            stepSize: 1
          }
        }
      }
    };

    return { 
      testData, 
      options,
 
    };
  },
});
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>