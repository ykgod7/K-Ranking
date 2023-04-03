<template>
  <div v-if="loading"></div>
  <div class="container" v-else>
    <!-- Filters -->
    <!-- <div class="filter-wrapper">
        <div class="year-filter">
          <select v-model="selectedYear" @change="selectedYear = selectedYear">
            <option :key="i" v-for="(val, i) in years" :value="val">{{ val }}</option>
          </select>
          <div class="year-arrow"><img :src="arrowDown" /></div>
        </div>

        <div class="search-filter">
          <input onkeydown="return (event.keyCode!=13);" type="search" placeholder="학교명 검색"
            aria-describedby="button-addon3" v-model="searchUniversity">
          <div class="search-icon"><img :src="search" /></div>
        </div>

        <div class="subject-filter">
          <select v-model="selectedSubject" @change="selectedSubject = selectedSubject">
            <option :value="null">학과</option>
            eslint-disable-next-line
            <option v-if="selectedSource === 'QS'" v-for="(subject, i) in filteredUniversity[0].qs_subjects" :key="i"
              :value="subject">{{ subject }}</option>
            <option v-else v-for="(subject, j) in filteredUniversity[0].the_subjects" :key="j" :value="subject">{{ subject
            }}</option>
          </select>
          <div class="subject-arrow"><img :src="arrowDown" /></div>
        </div>
      </div> -->


    <!-- 대학교 리스트 -->
    <div class="top-bar-wrapper">
      <div class="inner-wrapper">
        <div class="filter">순위<span class="material-icons-round icon">north</span></div>
        <div class="filter">대학교명<span class="material-icons-round icon">north</span></div>
        <div class="filter">입학 경쟁률<span class="material-icons-round icon">north</span></div>
        <div class="filter">총 학생수<span class="material-icons-round icon">north</span></div>
        <div class="filter">학생/교수 비율<span class="material-icons-round icon">north</span></div>
        <div class="filter">등록금<span class="material-icons-round icon">north</span></div>
      </div>
    </div>

    <div class="university-container">
      <div class="university-wrapper" v-for="(university, idx) in universities" :key="idx"
        @click="detailPage(university)">
        <div class="inner-wrapper">
          <div class="rank">{{ idx + 1 }}</div>
          <div class="university">
            <img class="logo" :src="require(`../assets/logo/서울대학교.png`)" /> <!-- 이미지 파일 이름 수정 -->
            <div class="name">
              <p class="name-korean">{{ university.name }}</p>
              <p class="name-english">{{ university.engName }}</p>
            </div>
          </div>
          <!-- 기타 정보 수정 -->
          <div class="compRate">13.7:1</div>
          <div class="totStud">37125 명</div>
          <div class="SFRatio">27:1</div>
          <div class="tuition">6001785 원</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import sourceSvg from '@/assets/svg/source.svg'
import arrowDown from '@/assets/svg/arrow_down.svg'
import search from '@/assets/svg/search.svg'


export default {
  name: 'MainPage',
  setup() {
    const router = useRouter()
    const store = useStore()
    const years = ref()    // 연도 
    const selectedYear = ref('2022')
    const selectedSubject = ref(null)
    const searchUniversity = ref('')
    const loading = ref(true)

    const universities = computed(() => {
      return store.state.universities[0]
    })




    onBeforeMount(() => {
      loading.value = false
    })

    // const getData = async () => {
    //   const res = await axios.get()
    //   universities.value = res.data
    //   years.value = Object.keys(res.data[0].source.QS).sort((y1, y2) => y1 > y2 ? -1 : 1)
    //   loading.value = false
    // }

    // const filteredUniversity = computed(() => {
    //   if (searchUniversity.value) {
    //     return universities.value.filter(university => {  //  대학교 이름 검색 시
    //       return university.name.includes(searchUniversity.value)
    //     })
    //   }

    //   if (selectedSubject.value) {   // 학과 검색 시
    //     return [...universities.value.filter(university => { return university.source[selectedSource.value][selectedYear.value] })]
    //       .sort((u1, u2) => u1.source[selectedSource.value][selectedYear.value].subject[selectedSubject.value] < u2.source[selectedSource.value][selectedYear.value].subject[selectedSubject.value])
    //   }

    //   // 그 외
    //   return [...universities.value.filter(university => { return university.source[selectedSource.value][selectedYear.value] })]  // 해당 연도 데이터 없는 리스트 제거
    //     .sort((u1, u2) => u1.source[selectedSource.value][selectedYear.value].rank < u2.source[selectedSource.value][selectedYear.value].rank ? -1 : 1)   // 리스트 sort
    // })

    const detailPage = (data) => {
      router.push({
        name: 'Info',
        params: {
          id: data.id,
          name: data.name,
          data: JSON.stringify(data)
        }
      })
    }


    return {
      years,
      detailPage,
      // filteredUniversity,
      universities,
      selectedYear,
      searchUniversity,
      selectedSubject,
      loading,
      sourceSvg,
      arrowDown,
      search,
    }
  },
}
</script>



<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}

.container {
  background: #F5F5F5;



  .top-bar-wrapper {
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    position: sticky;
    top: 0;
    width: 944px;
    margin: 0 auto;
    padding-bottom: 12px;
    background: #F5F5F5;
    height: 110px;

    .inner-wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 800px;

      .filter {
        display: flex;
        cursor: pointer;
        font-family: 'pretendard';
        font-weight: 500;
        font-size: 14px;
        color: #222222;
        line-height: 17px;

        .icon {
          margin: 0 1px;
          font-size: 13px;
          color: #222222;

          &.rotate {
            transform: rotate(180deg);
          }
        }

        &:nth-child(1) {
          width: 60px;

          .icon {
            color: #FF7A00;
          }
        }

        &:nth-child(2) {
          width: 240px;

          .icon {
            color: #82E1FF;
          }
        }

        &:nth-child(3) {
          width: 80px;
        }

        &:nth-child(4) {
          width: 80px;
        }

        &:nth-child(5) {
          width: 100px;
        }

        &:nth-child(6) {
          width: 95px;
        }
      }
    }
  }



  .university-container {
    width: 944px;
    height: calc(100vh - 374px);
    margin: 0 auto;

    .university-wrapper {
      height: 80px;
      border: 1px solid #F2F2F2;
      background: #fff;
      border-radius: 4px;
      transition: all 0.2s ease;
      margin-bottom: 10px;
      cursor: pointer;

      .inner-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 800px;
        height: 100%;

        .rank {
          padding-left: 20px;
          width: 60px;
          font-family: 'pretendard';
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #222222;
        }

        .university {
          display: flex;
          width: 240px;

          .logo {
            width: 40px;
            height: 40px;
            margin-right: 8px;
          }

          .name {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .name-korean {
              font-family: 'pretendard';
              font-size: 16px;
              color: #222222;
              font-weight: 700;
              line-height: 19px;
            }

            .name-english {
              font-family: 'pretendard';
              font-size: 8px;
              font-weight: 500;
              line-height: 9px;
              color: #BABABA;
            }
          }
        }

        .compRate {
          font-family: 'pretendard';
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          color: #222222;
          width: 80px;
          text-align: center;
        }

        .totStud {
          font-family: 'pretendard';
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          color: #222222;
          width: 80px;
          text-align: center;

        }

        .SFRatio {
          font-family: 'pretendard';
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          color: #222222;
          width: 100px;
          text-align: center;

        }

        .tuition {
          font-family: 'pretendard';
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          color: #222222;
          width: 95px;
          text-align: center;

        }
      }

    }
  }

}
</style>