<template>
  <div v-if="loading"></div>
  <div class="container" v-else>

    <div v-if="openModal" class="modal" data-backdrop="static" data-keyboard="false">
      <div class="modal-content">
        <div class="first-row">
          <div class="logo">
            <img class="logo" :src="require(`../assets/logo/서울대학교.png`)" />
          </div>
          <div class="university-name">
            <div class="top-wrapper">
              <div class="korean">서울대학교</div>
              <span class="material-icons-outlined icon">map</span>
            </div>
            <div class="english">
              Seoul National University
            </div>
          </div>
          <span class="material-icons-round close-icon" @click="openModal = false">close</span>
        </div>
        <div class="second-row">
          <div class="uni-description">
            KAIST는 과학기술을 통한 경제발전이라는 정부의 목표 아래 국내 최초의 연구중심 KAIST는 과학기술을 통한 경제발전이라는 정부의 목표 아래 국내 최초의 연구중심KAIST는 과학기술을 통한
            경제발전이라는 정부의 목표 아래 국내 최초의 연구중심 KAIST는 과학기술을 통한 경제발전이라는 정부의 목표 아래 국내 최초의 연구중심KAIST는 과학기술을 통한 부의 목표 아래 국내 최초의
            연구중심KAIST는 과학기술을 통한 부의 목표 아래 국내 최초의 연구중심KAIST는 과학기술을 통한 부의 목표 아래 국내 최초의 연구중심KAIST는 과학기술을 통한 부의 목표 아래 국내 최초의
            연구중심KAIST는 과학기술을 통한
          </div>
          <input type="checkbox" class="read-more" />
        </div>

        <div class="third-row">
          <div class="line">
            <div class="box">
              <p class="filter-name"><span>총 학생수</span></p>
              <p class="filter-value">6,011명</p>
            </div>

            <div class="box">
              <p class="filter-name"><span>외국인 학생수</span></p>
              <p class="filter-value">6,011명</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>신입생 경쟁률</span></p>
              <p class="filter-value">1:3</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>학생/교수 비율</span></p>
              <p class="filter-value">1:5</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>취업률</span></p>
              <p class="filter-value">87%</p>
            </div>
          </div>
          <div class="line">
            <div class="box">
              <p class="filter-name"><span>평균 등록금</span></p>
              <p class="filter-value">6,011,785원</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>기숙사 수용률</span></p>
              <p class="filter-value">6,011명</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>학생 1인당<br>연간 장학금</span></p>
              <p class="filter-value">6,011,785원</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>학생 1인당<br>평균 교육비</span></p>
              <p class="filter-value">6,011,785원</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>학생 1인당<br>평균 도서 자료수</span></p>
              <p class="filter-value">34권</p>
            </div>

          </div>
        </div>

        <div class="fourth-row">
          <div class="content-left">
            <p class="major-title">학과명</p>
            <div class="major-dropdown" @click="majorDropdown = !majorDropdown">
              <div class="current">
                <p>{{ selectedMajor }}</p>
              </div>
              <div class="dropdown-content" v-if="majorDropdown">
                <div class="option" @click="selectedMajor = '전체'">전체</div>
                <div class="option" v-for="major in majors" :key="major" @click="selectedMajor = major">{{ major }}</div>
              </div>
              <span class="material-icons-round icon">arrow_drop_down</span>
            </div>
          </div>
          <div class="content-right">
            <div class="wrapper">
              <p class="title">신입생 모집 인원</p>
              <div class="value"><span>4,344명</span></div>
            </div>
            <div class="wrapper">
              <p class="title">졸업자 수</p>
              <div class="value"><span>4,344명</span></div>
            </div>
          </div>
        </div>
        <RankChart />
      </div>
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
          <div class="filter rank" @click="changeFilterState(1)"><span class="border"
              :class="filterState === 1 ? 'isActive' : null">순위</span></div>
          <div class="filter name" @click="changeFilterState(2)"><span class="border name"
              :class="filterState === 2 ? 'isActive' : null">학교명</span></div>
          <div class="filter comp" @click="changeFilterState(3)"><span class="border"
              :class="filterState === 3 ? 'isActive' : null">입학 경쟁률</span></div>
          <div class="filter num" @click="changeFilterState(4)"><span class="border"
              :class="filterState === 4 ? 'isActive' : null">총 학생수</span></div>
          <div class="filter sf-ratio" @click="changeFilterState(5)"><span class="border"
              :class="filterState === 5 ? 'isActive' : null">학생/교수 비율</span></div>
          <div class="filter tuition" @click="changeFilterState(6)"><span class="border"
              :class="filterState === 6 ? 'isActive' : null">평균 등록금</span></div>
        </div>
      </div>
    </div>


    <div class="university-container" :key="universities">
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
import RankChart from '@/components/RankChart.vue'
import { ref, onBeforeMount, computed, watch, reactive, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import sourceSvg from '@/assets/svg/source.svg'
import arrowDown from '@/assets/svg/arrow_down.svg'
import search from '@/assets/svg/search.svg'
import axios from 'axios'


export default {
  name: 'MainPage',
  components: {
    RankChart
  },
  setup() {
    const router = useRouter()
    const openModal = ref(false)
    const store = useStore()
    const loading = ref(true)
    const filterState = ref('all')
    const majorDropdown = ref(false)
    const selectedMajor = ref('전체')
    const majors = ref(['경영학', '우주공학', '물리학', '화학', '생물학', '컴퓨터공학', '반도체', '신기술', '의학'])

    const universities = computed(() => {
      return store.getters.filterUniversity
    })

    const addComma = (val) => {
      return val.toLocaleString();
    }

    const changeFilterState = (val) => {
      if (filterState.value === val) {
        filterState.value = 'all'
      } else {
        filterState.value = val
      }
    }

    watch(openModal, (val) => {
      if (val) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
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

    const detailPage = (id) => {
      const res = axios.get(`https://k-ranking.co.kr:8081/api/universities/${id}`)
      .then(response => {
        console.log(response)

      })
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
      filterState,
      majors,
      majorDropdown,
      selectedMajor,
      changeFilterState
    }
  },
}
</script>



<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}

.container {
  min-height: calc(100vh - 194px);
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
      height: 90vh;
      overflow: scroll;
      border-radius: 20px;
      background: white;
      padding: 40px 40px 70px 40px;

      .first-row {
        position: relative;
        height: 60px;
        display: flex;

        .logo {
          width: 60px;
          height: 60px;
        }

        .university-name {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: 20px;
          height: 100%;

          .top-wrapper {
            display: flex;
            align-items: center;

            .korean {
              font-weight: 700;
              font-size: 30px;
              color: #222222;
              line-height: 36px;
              padding-right: 6px;
            }

            .icon {
              cursor: pointer;
              height: max-content;
              font-size: 25px;
            }
          }

          .english {
            font-size: 16px;
            color: #bababa;
            font-weight: 500;
            line-height: 19px;
          }
        }

        .close-icon {
          cursor: pointer;
          position: absolute;
          top: 0;
          right: 0;
          font-size: 32px;
        }
      }

      .second-row {
        position: relative;

        .uni-description {
          padding-top: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
          color: #222222;
          font-weight: 500;
          line-height: 21px;
          font-size: 14px;

          &:has(+ .read-more:checked) {
            -webkit-line-clamp: unset
          }
        }

        .read-more {
          margin-top: 3px;
          color: #BABABA;
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;
          appearance: none;
          cursor: pointer;

          &::before {
            content: "더보기";
          }

          &:checked::before {
            content: "닫기";
          }
        }
      }

      .third-row {
        padding-top: 40px;

        .line {
          display: flex;
          justify-content: space-between;
          height: 78px;
          margin-bottom: 12px;

          .box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 124px;
            height: 100%;
            border: 1px solid #f2f2f2;

            .filter-name {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 108px;
              height: 24px;
              font-size: 10px;
              font-weight: 500;
              line-height: 12px;
              color: #aaaaaa;
            }

            .filter-value {
              padding-top: 4px;
              width: 108px;
              height: 24px;
              text-align: center;
              font-weight: 700;
              font-size: 20px;
              line-height: 24px;
              color: #222222;
            }
          }
        }
      }

      .fourth-row {
        padding-top: 50px;
        display: flex;
        justify-content: space-between;

        .content-left {
          width: 341px;

          .major-title {
            font-weight: 700;
            font-size: 14px;
            color: #222222;
            margin-bottom: 12px;
          }

          .major-dropdown {
            position: relative;
            cursor: pointer;
            border: 1px solid #f2f2f2;
            border-radius: 4px;
            width: 100%;
            height: 44px;
            color: white;

            .current {
              display: flex;
              align-items: center;
              width: 100%;
              height: 100%;

              p {
                font-family: 'pretendard';
                padding-left: 10px;
                font-size: 16px;
                color: #222222;
                line-height: 19px;
                font-weight: 700;
              }
            }

            .dropdown-content {
              position: fixed;
              z-index: 1;
              width: 341px;
              height: 200px;
              overflow-y: scroll;
              border: 1px solid #F2F2F2;
              border-radius: 0 0 4px 4px;

              .option {
                font-family: 'pretendard';
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                background: white;
                padding: 0 10px;
                display: flex;
                align-items: center;
                width: 100%;
                height: 39px;
                color: #222222;
                transition: 0.2s;

                &:hover {
                  background-color: #82E1FF;
                }
              }
            }

            .icon {
              pointer-events: none;
              position: absolute;
              display: block;
              top: 50%;
              transform: translateY(-50%);
              right: 0;
              color: black;
              font-size: 35px;
            }
          }
        }

        .content-right {
          display: flex;
          width: 288px;

          .wrapper {
            width: 139px;

            &:nth-child(1) {
              margin-right: 10px;
            }

            .title {
              font-weight: 700;
              font-size: 14px;
              line-height: 17px;
              color: #222222;
              margin-bottom: 12px;
            }

            .value {
              display: flex;
              align-items: center;
              width: 100%;
              height: 44px;
              border-radius: 4px;
              border: 1px solid #f2f2f2;

              span {
                padding-left: 10px;
                color: #222222;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
              }
            }
          }
        }
      }
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
      padding-top: 32px;

      .inner-wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;

        .filter {
          position: relative;
          display: flex;
          cursor: pointer;
          font-family: 'pretendard';
          font-weight: 500;
          font-size: 14px;
          color: #222222;
          line-height: 17px;
          width: max-content;

          .border {
            position: relative;
            width: 100%;
            padding: 5px 10px;
            border: 1px solid #F2F2F2;
            border-radius: 4px;

            &.isActive::before {
              position: absolute;
              content: url('@/assets/images/Component11.png');
              top: 7px;
              right: 10px;
              width: 10px;
              height: 11px;
            }

            &::before {
              position: absolute;
              content: url('@/assets/images/Component10.png');
              top: 7px;
              right: 10px;
              width: 10px;
              height: 11px;

            }

            &.name {
              width: 80px;
            }
          }


          &.rank {
            width: 80px;
          }

          &.name {
            width: 280px;
          }

          &.comp {
            width: 120px;
          }

          &.num {
            width: 120px;
          }

          &.sf-ratio {
            width: 120px;
          }

          &.tuition {
            width: 120px;
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
        width: 100%;
        height: 100%;

        .rank {
          text-align: center;
          width: 80px;
          font-family: 'pretendard';
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #222222;
        }

        .university {
          display: flex;
          width: 280px;

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
          width: 120px;
          text-align: center;
        }

        .totStud {
          font-family: 'pretendard';
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          color: #222222;
          width: 120px;
          text-align: center;

        }

        .SFRatio {
          font-family: 'pretendard';
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          color: #222222;
          width: 120px;
          text-align: center;

        }

        .tuition {
          font-family: 'pretendard';
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          color: #222222;
          width: 120px;
          text-align: center;

        }
      }

    }
  }

}
</style>