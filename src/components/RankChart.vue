<template>
  <div class="chart-wrapper">
    <LineChart :chartData="testData" class="chart" :options=options />
  </div>
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

    const testData = {
      labels: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035],
      datasets: [
        {
          label: '국내 순위',
          data: [1, 3, 2, 2, 1, 1, 1, 3, 2, 2],
          backgroundColor: ['#fff'],
          borderColor: ['#00C2FF'],
          borderWidth: 1,
          yAxisID: 'domestic'
        },
        {
          label: '글로벌 순위',
          data: [101, 110, 120, 103, 85, 107, 140],
          backgroundColor: ['#fff'],
          borderColor: ['#FF5C00'],
          borderWidth: 1,
          yAxisID: 'global'
        }
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'top',
          
        },
        title: {
          display: false,
          text: '테스트'
        }
      },
      scales: {
        domestic: {
          reverse: true,
          type: 'linear',
          position: 'left',
          ticks: {
            stepSize: 1,
          },
          grid: {
            drawOnChartArea: false
          }
        },
        global: {
          beginAtZero: true,
          type: 'linear',
          position: 'right',

        }
      }
    };

    return { 
      testData, 
      options,
 
    };
  },
});

// export default defineComponent({
//   name: 'RankChart',
//   components: { LineChart },
//   props: ['graph_source', 'universityData'],
//   setup(props) {   
//     const years = ref([])
//     const qs_rank = ref([])
//     const the_rank = ref([])


//     years.value = Object.keys(props.universityData.source.THE)  // 연도 데이터 [2020, 2021, 2022]

//     for (let i = 0; i < years.value.length; i++) {
//       the_rank.value.push(props.universityData.source.THE[years.value[i]].rank)  // 연도별 순위 담기
//       qs_rank.value.push(props.universityData.source.QS[years.value[i]].rank)
//     }

//     const testData = {
//       labels: years.value,
//       datasets: [
//         {
//           data: (props.graph_source == 'THE') ? the_rank.value : qs_rank.value,
//           backgroundColor: ['#00cc44'],
//           borderColor: ['#0d0d0d'],
//           borderWidth: 1
//         },
//       ],
//     };

//     const options = {
//       plugins: {
//         legend: {
//           display: false,
//         },
//       },
//       scales: {
//         y: {
//           reverse: true,
//           // min: 1,
//           // max: max.value + 5,
//           ticks: {
//             stepSize: 1
//           }
//         }
//       }
//     };

//     return { 
//       testData, 
//       options,
 
//     };
//   },
// });
</script>

<style lang="scss" scoped>
.chart-wrapper {
}
.chart {
  padding-top: 14px;
  height: 300px;

}


::v-deep {
  #line-chart {
  }
}
</style>