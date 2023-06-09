<template>
  <div v-if="loading"></div>
  <div class="container" v-else>

    <div v-if="openModal" class="modal" data-backdrop="static" data-keyboard="false">
      <div class="modal-content">
        <div class="first-row">
          <div class="logo">
            <img class="logo" :src="require(`../assets/logo/${detailInfo.name}.svg`)" />
          </div>
          <div class="university-name">
            <div class="top-wrapper">
              <div class="korean">{{ detailInfo.name }}</div>
              <span class="material-icons-outlined icon">map</span>
            </div>
            <div class="english">
              {{ detailInfo.engName }}
            </div>
          </div>
          <span class="material-icons-round close-icon" @click="openModal = false">close</span>
        </div>
        <div class="second-row">
          <div class="uni-description">
            {{ detailInfo.intro }}
          </div>
          <input type="checkbox" class="read-more" />
        </div>

        <div class="third-row">
          <div class="line">
            <div class="box">
              <p class="filter-name"><span>총 학생수</span></p>
              <p class="filter-value">{{ addComma(detailInfo.totStud) }}명</p>
            </div>

            <div class="box">
              <p class="filter-name"><span>외국인 학생수</span></p>
              <p class="filter-value">{{ addComma(detailInfo.totStud) }}명</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>신입생 경쟁률</span></p>
              <p class="filter-value">1:{{ detailInfo.compRate }}</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>학생/교수 비율</span></p>
              <p class="filter-value">1:{{ detailInfo.sfRatio }}</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>취업률</span></p>
              <p class="filter-value">87%</p>
            </div>
          </div>
          <div class="line">
            <div class="box">
              <p class="filter-name"><span>평균 등록금</span></p>
              <p class="filter-value">{{ addComma(detailInfo.tuition) }} 원</p>
            </div>
            <div class="box">
              <p class="filter-name"><span>기숙사 수용률</span></p>
              <p class="filter-value">80%</p>
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
      <div class="tot-num" >
        <span class="tot-num-title">총 {{ universities.length }}개 대학</span>
        <p 
        @mouseover="tooltipState = true"
        @mouseout="tooltipState = false"
        class="rank-criteria"><img class="icon" src="@/assets/images/caution.png">순위 기준 안내</p>
        <div :class="tooltipState ? 'show' : null" class="tooltip">
          <p>대학교 순위는 <u>www.scimagoir.com</u>의 데이터를 기준으로 만들어졌습니다.</p>
        </div>
      </div>

      <div class="filter-wrapper" v-click-outside="onClickOutside">
        <div class="year-filter" 
          @click="openFilter(1)">
          <span>{{ selectedYear }}</span>
          <span v-if="filterState === 1" class="material-icons-round icon">expand_less</span>
          <span v-else class="material-icons-round icon">expand_more</span>
          <!-- <img src="@/assets/images/filter_arrow_white.png" :class="filterState === 1 ? 'opened' : 'closed'" alt="" /> -->
          <div class="dropdown-wrapper" :class="filterState === 1 ? 'is-show' : null">
            <div class="option" v-for="year in years" :key="year" @click="chooseYear(year)">{{ year }}</div>
          </div>
        </div>
        <div class="major-filter" @click="openFilter(2)">
          <span>{{ selectedMajor }}</span>
          <span v-if="filterState === 2" class="material-icons-round icon">expand_less</span>
          <span v-else class="material-icons-round icon">expand_more</span>
          <div class="dropdown-wrapper" :class="filterState === 2 ? 'is-show' : null">
            <div class="option" v-for="(major, idx) in majors" :key="idx" @click="chooseMajor(major)">{{ major }}</div>
          </div>
        </div>
        <div class="university-search" @click="filterState = 0">
          <input class="search-input" placeholder="학교를 검색해보세요." v-model="searchInput" />
          <span class="material-icons-round icon">search</span>
        </div>
      </div>

      <!-- 대학교 리스트 -->
      <div class="top-bar-wrapper">
        <div class="rank" @click="changeFilterState(1)">
          <span>순위</span>
          <span v-if="$store.state.sortValue === 1" class="material-icons-round icon">north</span>
          <span v-else class="material-icons-round icon">south</span>
        </div>
        <div class="uni-name"><span>학교명</span></div>
        <div class="comp-rate"><span>입학 경쟁률</span></div>
        <div class="tot-stud"><span>총 학생수</span></div>
        <div class="sf-ratio"><span>학생/교수 비율</span></div>
        <div class="tuition"><span>평균 등록금</span></div>
      </div>
    </div>

    <div class="university-container" :key="universities">
      <div v-if="universities.length < 1" class="no-data">관련된 데이터가 없습니다</div>
      <div class="university-wrapper" v-for="(university, idx) in universities" :key="idx"
      @click="detailPage(university.uni_id)">
        <div class="inner-wrapper">
          <div v-if="selectedMajor === '전체'" class="rank">{{ university.totRank}}위</div>
          <div v-else class="rank">{{ $store.state.sortValue === 1 ? universities.length - idx : idx + 1 }}위</div>
          <div class="university">
            <img class="logo" :src="university.name ? require(`../assets/logo/${university.name}.svg`) : null" />
            <div class="name">
              <p class="name-korean">{{ university.name }}</p>
              <p class="name-english">{{ university.engName }}</p>
            </div>
          </div>
          <!-- 기타 정보 수정 -->
          <div class="compRate">{{ university.compRate }}</div>
          <div class="totStud">{{ addComma(university.totStud) }} 명</div>
          <div class="SFRatio">{{ university.sfratio }}</div>
          <div class="tuition">{{ addComma(university.tuition) }} 원</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RankChart from '@/components/RankChart.vue'
import { ref, onBeforeMount, computed, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import vClickOutside from 'click-outside-vue3'

import sourceSvg from '@/assets/svg/source.svg'
import arrowDown from '@/assets/svg/arrow_down.svg'
import search from '@/assets/svg/search.svg'
import axios from 'axios'


export default {
  name: 'MainPage',
  components: {
    RankChart
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  setup() {
    const router = useRouter()
    const tooltipState = ref(false)
    const openModal = ref(false)
    const store = useStore()
    const loading = ref(true)
    const majorDropdown = ref(false)
    const filterState = ref(0)
    const searchInput = ref(null)
    const selectedYear = ref(2023)
    
    onBeforeMount(() => {
      loading.value = false
    })
    
    const universities = computed(() => {
      return store.getters.filterUniversity
    })

    const addComma = (val) => {
      return val.toLocaleString()
    }

    const changeFilterState = (val) => {
      if (store.state.sortValue === val) {
        store.commit('setSortValue', '')
      } else {
        store.commit('setSortValue', val)
      }
    }

    const chooseYear = async (year) => {
        selectedYear.value = year
        await axios
          .get(`https://k-ranking.co.kr:8081/api/universities/year/${year}`)
          .then((response) => {
            console.log(response.data.universities[0])
            store.commit("setUniversities", response.data.universities);
          })
    }

    const chooseMajor = (major) => {
      store.commit("chooseMajor", major);
    }

    const years = computed(() => {
      return store.state.years[0];
    })

    const selectedMajor = computed(() => store.state.selectedMajor)


    const majors = computed(() => {
      return store.state.majors[0]
    })

    watch(openModal, (val) => {
      if (val) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
    })

    watchEffect(() => {
      store.commit("setInputText", searchInput.value);
    })


    const detailPage = async (id) => {
      await axios.get(`https://k-ranking.co.kr:8081/api/universities/${id}`)
      .then(response => {
        store.commit('setDetailInfo', response.data)
        console.log(response.data)
      })
      openModal.value = true
    }

    const detailInfo = computed(() => {
      return store.state.detailInfo[0]
    })

    const openFilter = (val) => {
      if (filterState.value === val) {
        filterState.value = 0
      } else {
        filterState.value = val
      }
    }

    const onClickOutside = (event) => {
      filterState.value = 0
    }


    return {
      universities,
      loading,
      sourceSvg,
      arrowDown,
      search,
      openModal,
      majors,
      majorDropdown,
      selectedMajor,
      tooltipState,
      filterState,
      searchInput,
      selectedYear,
      years,
      detailInfo,
      chooseYear,
      detailPage,
      addComma,
      changeFilterState,
      openFilter,
      onClickOutside,
      chooseMajor,
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
  width: 944px;
  margin: 0 auto;
  padding-top: 66px;
  position: relative;

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
              color: #bababa;
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
              color: #222222;
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
    position: -webkit-sticky;
    position: sticky;
    top: 66px;

    .tot-num {
      position: relative;
      display: flex;
      padding-top: 30px;
      margin: 0 auto;
      background: #F6FBFF;

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
          width: 23px;
          padding-right: 2px;
          filter: invert(50%);
        }
      }

      .tooltip {
        opacity: 0;
        transition: 0.4s opacity;
        position: absolute;
        top: 23px;
        left: 280px;
        height: 40px;
        padding: 10px 15px;
        border-radius: 5px;
        background: #f2f2f2;

        p {
          color: #bababa;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;

        }

        &.show {
          opacity: 1;
        }

        &::before {
          content: '';
          position: absolute;
          left: -28px;
          top: 6px;
          border: 15px solid;
          transform: rotate(90deg);
          border-color: #f2f2f2 #0000 #0000 #0000;
        }
      }
    }

    .filter-wrapper {
      display: flex;
      padding-top: 10px;
      background: #F6FBFF;

      .year-filter {
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 88px;
        height: 26px;
        border-radius: 4px;
        margin-right: 8px;
        padding: 0 8px;
        color: white;
        font-size: 10px;
        font-weight: 400;
        background: #00c2ff;

        .opened {
          width: 20px;
        }

        .closed {
          width: 20px;
        }
      }
      
      .major-filter {
        cursor: pointer;
        border: 1px solid #E9E9E9;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 140px;
        height: 26px;
        border-radius: 4px;
        margin-right: 8px;
        padding: 0 8px;
        color: #bababa;
        font-size: 10px;
        font-weight: 400;
        background: white;
      }

      .university-search {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 280px;
        height: 26px;
        color: #bababa;
        font-size: 10px;
        font-weight: 400;
        
        .search-input {
          padding-left: 8px;
          font-family: 'pretendard';
          color: #bababa;
          font-size: 10px;
          font-weight: 400;
          border-radius: 4px;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background: white;
          border: 1px solid #e9e9e9;

          &::placeholder {
            color: #bababa;
            font-size: 10px;
            font-weight: 400;
          }
        }

        .icon {
          position: absolute;
          right: 8px;
          z-index: 1;
          pointer-events: none;
        }
      }
      
      .dropdown-wrapper {
        transition: 0.5s height;
        position: absolute;
        top: 26px;
        left: 0;
        width: 100%;
        height: 0;
        overflow-y: scroll;
        background: white;
        z-index: 1;
        border-radius: 0 0 4px 4px;

        .option {
          font-family: "pretendard";
          font-weight: 700;
          font-size: 10px;
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
            background-color: #82e1ff;
          }
    }
        
        &.is-show {
          border: 1px solid #F2F2F2;
          height: 250px;
        }
      }

      .icon {
        font-size: 20px;
      }
      
    }

    .top-bar-wrapper {
      padding-top: 26px;
      padding-bottom: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      background: #F6FBFF;
      font-weight: bold;

      .rank {
        cursor: pointer;
        display: flex;
        justify-content: center;
        height: 12px;
        width: 80px;
        color: #222222;

        .icon {
          font-size: 10px;
        }
      }

      .uni-name {
        height: 12px;
        width: 280px;
        font-weight: bold;
        color: #bababa;
      }

      .comp-rate {
        height: 12px;
        width: 120px;
        font-weight: bold;
        color: #bababa;
        text-align: center;
      }

      .tot-stud {
        height: 12px;
        width: 120px;
        font-weight: bold;
        color: #bababa;
        text-align: center;
      }

      .sf-ratio {
        height: 12px;
        width: 120px;
        font-weight: bold;
        color: #bababa;
        text-align: center;
      }

      .tuition {
        height: 12px;
        width: 120px;
        font-weight: bold;
        color: #bababa;
        text-align: center;
      }
    }
  }




  .university-container {
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
            max-width: 220px;

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