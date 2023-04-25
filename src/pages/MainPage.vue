<template>
  <div v-if="loading"></div>
  <div class="container" v-else>

    <div v-if="openModal" class="modal">
      <div class="modal-content"></div>
      <div class="modal-dim" @click="openModal = false"></div>
    </div>

    <div class="header">
      <div class="tot-num">
        <span class="tot-num-title">총 {{ universities.length }}개 대학</span>
        <p class="rank-criteria"><span class="material-icons-outlined icon">error</span>순위 기준 안내</p>
      </div>

      <!-- 대학교 리스트 -->
      <div class="top-bar-wrapper">
        <div class="inner-wrapper">
          <div class="filter rank">순위<span class="material-icons-round icon">north</span></div>
          <div class="filter name">대학교명<span class="material-icons-round icon">north</span></div>
          <div class="filter comp">입학 경쟁률<span class="material-icons-round icon">north</span></div>
          <div class="filter num">총 학생수<span class="material-icons-round icon">north</span></div>
          <div class="filter sf-ratio">학생/교수 비율<span class="material-icons-round icon">north</span></div>
          <div class="filter tuition">등록금<span class="material-icons-round icon">north</span></div>
        </div>
      </div>
    </div>


    <div class="university-container">
      <div class="university-wrapper" v-for="(university, idx) in universities" :key="idx"
        @click="detailPage(university.uni_id)">
        <div class="inner-wrapper">
          <div class="rank">{{ idx + 1 }}위</div>
          <div class="university">
            <img class="logo" :src="require(`../assets/logo/서울대학교.png`)" /> <!-- 이미지 파일 이름 수정 -->
            <div class="name">
              <p class="name-korean">{{ university.name }}</p>
              <p class="name-english">{{ university.engName }}</p>
            </div>
          </div>
          <!-- 기타 정보 수정 -->
          <div class="compRate">13.7:1</div>
          <div class="totStud">{{ addComma(37125) }} 명</div>
          <div class="SFRatio">27:1</div>
          <div class="tuition">{{ addComma(602123) }} 원</div>
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
import axios from 'axios'


export default {
  name: 'MainPage',
  setup() {
    const router = useRouter()
    const openModal = ref(false)
    const store = useStore()
    const loading = ref(true)

    const universities = computed(() => {
      return store.getters.filterUniversity
    })

    const addComma = (val) => {
      return val.toLocaleString();
    }



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

    const detailPage = (id) => {
      const res = axios.get(`http://k-ranking.co.kr:8081/api/universities/${id}`)
      console.log(res.data)
      openModal.value = true
      // router.push({
      //   name: 'Info',
      //   params: {
      //     id: data.uni_id,
      //     name: data.name,
      //     data: JSON.stringify(data)
      //   }
      // })
    }


    return {
      detailPage,
      addComma,
      universities,
      loading,
      sourceSvg,
      arrowDown,
      search,
      openModal,
    }
  },
}
</script>



<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}

.container {
  position: relative;
  background: #F5F5F5;
  height: calc(100% - 194px);
  overflow: hidden;

  .modal {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    .modal-content {
      z-index: 102;
      width: 750px;
      height: 900px;
      border-radius: 20px;
      background: white;
    }

    .modal-dim {
      position: absolute;
      z-index: 101;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .15);

    }
  }

  .header {
    position: fixed;
    top: 194px;
    left: 50%;
    transform: translateX(-50%);

    .tot-num {
      background-color: #F5F5F5;
      display: flex;
      padding-top: 40px;
      width: 944px;
      margin: 0 auto;

      .tot-num-title {
        font-weight: 700;
        font-size: 24px;
        color: #222222;
        line-height: 29px;
        margin-right: 12px;

      }

      .rank-criteria {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 16px;
        color: #bababa;
        line-height: 19px;

        .icon {
          font-size: 16px;
          padding-right: 2px;
        }
      }
    }

    .top-bar-wrapper {
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      width: 944px;
      margin: 0 auto;
      padding-bottom: 12px;
      background: #F5F5F5;
      padding-top: 44px;

      .inner-wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 850px;

        .filter {
          display: flex;
          cursor: pointer;
          font-family: 'pretendard';
          font-weight: 500;
          font-size: 14px;
          color: #222222;
          line-height: 17px;

          &.rank {
            justify-content: center;
            width: 65px;

            .icon {
              color: #FF7A00;
            }
          }

          &.tuition {
            justify-content: center;
          }

          &.comp {}

          &.name {
            width: 250px;

            .icon {
              color: #82E1FF;
            }
          }

          &.num {
            justify-content: center;
          }

          .icon {
            margin: 0 1px;
            font-size: 13px;
            color: #222222;

            &.rotate {
              transform: rotate(180deg);
            }
          }

          &:nth-child(1) {}

          &:nth-child(2) {}

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
  }




  .university-container {
    padding-top: 142px;
    width: 944px;
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    overflow: auto;


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
        width: 850px;
        height: 100%;

        .rank {
          padding-left: 20px;
          width: 65px;
          font-family: 'pretendard';
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #222222;
        }

        .university {
          display: flex;
          width: 250px;

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
          text-indent: -20px;
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