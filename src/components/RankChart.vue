<template>
  <div class="chart-wrapper">
    <div class="container">
      <div class="containerBody" ref="containerBody" :key="nationalRank">
        <LineChart :chartData="chartData" class="chart" :options=options  />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import { ref } from 'vue'
import { useStore } from 'vuex'

Chart.register(...registerables);

export default defineComponent({
  name: 'RankChart',
  components: { LineChart },
  props: ['graph_source', 'universityData'],
  setup() {   
    const store = useStore()
    const years = ref([])
    const globalRank = ref([])
    const nationalRank = ref([])
    const containerBody = ref(null)
    const blueMark = new Image(10, 10)
    const redMark = new Image(10, 10)

    blueMark.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJsSURBVHgBxZdPbtNAFMa/cbtAAglLlVibBexQU7YgEk7Q3CDpCWhv0BsQTlD3BuQEccKepmxZ4C67ALkSSFQqGr6XiWnSzvOf2sBPsmP7zcw3f997MajCxIbYwDaf+rDo8TeCQbiwWWR8nvNJrgSvzLhKk6ZUMMAbPu3/ESrDIuU9xiavF+YMtYWnVgQPKwv6O3CIrjlGZeGpfUvLPtphxOk/QKlwYo84vUO0S0zxvdUPwZpZRtq+qDDEjG2vYFZEB3yLi2p3H7KFR0CPqx7dc9/m3931/hsw/opiLJeva95dC09sxJFO+Bb5yovI0RMnWET6k2U+AWeXapEMv/AYr03mpjrAQBPdvg+c7JSL5h2cP3d1FEIeMzktyxFP7RefsDQkouEmapFdAZ2P6sgXow646LvaaCfP6osKUid+qpvFC8pU93zW3a3rDXQXZGlkMyr0RbjjtWyhMXICvBj0VOGOvkEqo25Ii0iEvebOAzSmYKnCAP8JEc58hvQSjRGPpkAH4sLXLZIMf0+YiUPAW+KzxedojPhvL1aEaffZphfNRi1+Ww0aG0gCuq9TKOu899m5v7pIHQkWWp+YEo0DiRSc7hGUXksDdcRzUTVCLUOvO05XkBjpHfXpD2DnxHWijOTCBQepo5BSMXb6OR+Y3Fn/yHPEjYoPF+eSezY5drIXjs+dcCGS3bx0yd96zuXSk7aSvJusJX23k70Zkz3862RPcAVGaI/RTVG/sBM/WGabKe5OtsjNPTm1UPYXJmKONOCmGwL+LEURHC1OihxVBYOqzGyf9y5rdNgRieHhilDKbwl/xxScFwnm/AbrocDah5DjzQAAAABJRU5ErkJggg=='
    redMark.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKGSURBVHgBxZe/b9NAFMe/50ZCQiB5gLWYDVgS6Izq/6AZkQLFXbqSrnRhKWvDylIHKDP9C2oEa8EsdMTpSodMTKXX985280PvYrtO2690UnLv7j737t7dPSuUkG7DxW00cYo2FHyq8qi4mXlIJYamsoBIfcBemTFVIfAWXtHP7hioYJZIaNSQJhmqzxhUBuvnBvimNFCaAPVXu+ijLFi/wDZ17GIe0ugRfKMQTNAdahxgntK07LtYG69ypqDbc4eyFALdobEnqnJoBy9NUMzSg2XgaQA88oE7Xlo3iNNy8AX4URjQXfUJ787B+hkdjwXs0z9PbM6Q9R3goT9zVPxNgLfU5tgazEM0cF+FGKZL3TDeemLTxSaw9bMYyrrrUds47SPLxYk5LZnHHfwRwewpQ29WPFH/6E7ZbNk8N147ehUrVm9f71eHsrjPemizuviPpkNR7IvmJyvp0l1UvDUcjLLaDG6JpqU2aotPgCRyloNLBt+TqyvJHpAeg91LA9u3ynVwTWLwULQcJ6ito9hmMRdIIpoOI9TWwAqOHTrDkWj6FqK2+P6WpBgMyNbDr/W85q062LOBI4ceh1+w7fP7tfT6qyrus+XDAk04L3P4paC/PbERz5oHqALPobYXSqdPb/468Rspj35EC7L5uFyU89bw48B9JJG3uJGCR4nAKj1XpxbPc/E1ukR3+GJrdMHwhH5HwPd+cUw4CGiZ+xNgA59nkjctRUnfx1HSdzXJHqVUBLUne6YNN1AFS14N2puGiuAMvsH7YYLh4kAO1u748k6aZ0gHlJmcmHwsoOX3UBZISTyflOyoWpqVFH3S8AfbskkcFBWdPacpKDFXr6YPtgbiWcBcZ1DuyOstdJrWAAAAAElFTkSuQmCC'
    
    onMounted(() => {
      // 데이터 세팅 
      let rankData = store.state.detailInfo[0].rank.filter(function(data) {
        return data.majorName === 'Universities'
      }).sort((a, b) => { return a.year - b.year })
  
      for (let i=0; i<rankData.length; i++) {
        years.value.push(rankData[i].year)
        globalRank.value.push(rankData[i].gloRank)
        nationalRank.value.push(rankData[i].totRank)
      }

      // 차트 너비 동적 할당
      if (years.value.length > 10) {
        let newWidth = (years.value.length - 10) * 50
        containerBody.value.style.width = `calc(100% + ${newWidth}px)`
      }

      // x축 앞뒤 간격 여백
      // years.value.unshift('')
      // years.value.push('')
      // globalRank.value.unshift(null)
      // globalRank.value.push(null)
      // nationalRank.value.unshift(null)
      // nationalRank.value.push(null)
    })



    const chartData = {
      labels: years.value,
      datasets: [
        {
          label: '국내 순위',
          data: nationalRank.value,
          backgroundColor: ['#fff'],
          borderColor: ['#00C2FF'],
          borderWidth: 1,
          pointRadius: 0,
          hoverBackgroundColor: 'white',
          pointHoverRadius: 4,
          pointHoverBorderWidth: 2,
          pointHitRadius: 10,
          yAxisID: 'domestic'
        },
        {
          label: '글로벌 순위',
          data: globalRank.value,
          backgroundColor: ['#fff'],
          borderColor: ['#FF5C00'],
          borderWidth: 1,
          pointRadius: 0,
          hoverBackgroundColor: 'white',
          pointHoverRadius: 4,
          pointHoverBorderWidth: 2,
          pointHitRadius: 10,
          yAxisID: 'global'
        }
      ],
    };

    const options = {
      interaction: {
        mode: 'index'
      },
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        // padding: 20
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: '테스트'
        },
        tooltip: {
          backgroundColor: 'white',
          borderColor: '#F2F2F2',
          usePointStyle: true,
          borderWidth: 1, 
          bodyColor: '#bababa',
          bodyFont: {
            size: 12,
            weight: 500,
            family: 'pretendard',
            lineHeight: 1.5
          },
          displayColors: true,
          callbacks: {
            title: function(context) {
              return null
            },
            label: function(context) {
              return ` ${context.dataset.label} ${context.dataset.data[context.dataIndex]}위`
            },
            labelPointStyle: (context) => {
              if (context.datasetIndex === 0) {
                return {
                  pointStyle: blueMark,
                  radius: 10
                }
              } else {
                return {
                  pointStyle: redMark
                }
              }
            }
          },
        }
      },
      scales: {
        x: {
          // offset: false,
        },
        domestic: {
          reverse: true,
          type: 'linear',
          grace: '20%',
          position: 'left',
          ticks: {
            display: false
          },
          grid: {
            drawOnChartArea: false,
            drawTicks: false,
            drawBorder: false,
          }
        },
        global: {
          reverse: true,
          beginAtZero: true,
          type: 'linear',
          position: 'left',
          grace: '20%',
          min: 1,
          ticks: {
            display: false,
          },
          grid: {
            drawOnChartArea: false,
            drawTicks: false,
            drawBorder: false,
          }
        }
      }
    };

 

    return { 
      chartData, 
      options,
      containerBody,
      nationalRank

    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 100%;
  overflow-x: scroll;
}

.containerBody {
  width: 100%;
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