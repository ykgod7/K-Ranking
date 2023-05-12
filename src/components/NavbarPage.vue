<template>
  <nav class="navbar" ref="navbar">
    <div class="navbar-wrapper">
      <div class="row-1">
        <router-link class="logo" :to="{ name: 'Home' }">
          <div class="k-ranking">
            <p>K-Ranking</p>
          </div>
        </router-link>

        <div class="navbar-links" ref="navbarLinks">
          <div class="links-wrapper">
            <a href=".">로그인</a> |
            <a href=".">회원가입</a>
          </div>
        </div>
      </div>

      <div class="row-2">
        <!-- 연도 필터 -->
        <div class="year-filter">
          <div class="filter-name">년도</div>
          <div class="year-dropdown" @click="yearDropdown = !yearDropdown">
            <div class="current">
              <p>{{ selectedYear }}</p>
            </div>
            <div class="dropdown-content" v-if="yearDropdown">
              <div
                class="option"
                v-for="year in years"
                :key="year"
                @click="chooseYear(year)"
              >
                {{ year }} 
              </div>
            </div>
            <span class="material-icons-round icon">arrow_drop_down</span>
          </div>
        </div>

        <!-- 학과 필터 -->
        <div class="subject-filter">
          <div class="filter-name">학부/학과명</div>
          <div
            class="subject-dropdown"
            @click="subjectDropdown = !subjectDropdown"
          >
            <div class="current">
              <p>{{ selectedMajor }}</p>
            </div>
            <div class="dropdown-content" v-if="subjectDropdown">
              <div class="option" @click="chooseMajor('Universities')">
                전체
              </div>
              <div
                class="option"
                v-for="(major, idx) in majors"
                :key="idx"
                @click="chooseMajor(major)"
              >
                {{ major }}
              </div>
            </div>
            <span class="material-icons-round icon">arrow_drop_down</span>
          </div>
        </div>
        <div class="name-filter">
          <div class="filter-name">학교명으로 검색</div>
          <div class="wrapper">
            <input
              class="name-input"
              placeholder="학교명을 입력해주세요."
              v-model="searchInput"
            />
            <span class="material-icons-round icon">search</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed, reactive, watchEffect } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default {
  name: "NavbarPage",
  setup() {
    const store = useStore();
    const yearDropdown = ref(false);
    const subjectDropdown = ref(false);
    const searchInput = ref();
    const testData = {
      universities: [
        {
          uni_id: 1,
          name: "서울대학교",
          engName: "Seoul National University",
          citation: "https://www.snu.ac.kr/about/overview/vision",
          compRate: "5.6",
          intro:
            "창의성 및 인성교육 강화를 위한 자율적이고 융합적인 교육체계\n\n전공 간 벽을 낮추는 융합 L자형 교육체계 도입과 삶의 핵심적 주제에 대한 학제적 탐구와 비판적이고 창의적인 사고와 심층적 토론을 통해 협력적 실천 능력 배양을 목표로 다양한 학문적 접근 기회를 제공합니다. 학생자율교육과정, 학생설계전공과 융합 주제 강좌의 심층 있는 토론을 통하여 다양한 관점을 상호보완 할 수 있도록 도와줍니다.\n\n데이터사이언스와 전문분야 지식을 갖춘 디지털 혁신인재 양성, ‘데이터사이언스 대학원’\n\n모든 학문에 데이터사이언스 기반 교육을 제공하는 전 세계 학계의 흐름에 따라 데이터사이언스 전문대학원 신설을 통해 해당 분야에 대한 공통적이고 표준화된 교육과정을 개발함으로써 새로운 교육 모델을 제시하고 있습니다. 글로벌 시대에 선제적으로 대응할 수 있도록 학문 전분야에 경계를 뛰어넘는 초학제적 연구의 허브(hub)성격을 지향합니다.\n\n나눔의 선순환 및 국내외 사회공헌활동을 통한 사회 속의 대학 구현\n\n다양한 사회공헌활동 발굴을 통해 나눔을 실천하고 봉사하는 인재를 양성합니다. 교육과 연계한 사회공헌 참여를 통해 공헌활동 체험의 기회를 제공하고 사회에 폭넓은 기여를 할 수 있습니다. 이처럼 다양한 활동을 통해 학생들은 자원봉사 · 세계시민 · 인권의 개념을 알아가면서 다양성을 이해하게 되며 냉철한 이성과 따뜻한 가슴을 가진 ‘샤눔형(서울대+나눔)’ 인재로 성장합니다.\n\n미래형 스마트 멀티캠퍼스 구축\n\n제4차 산업혁명을 선도하고 혁신 성장 동력을 확보하기 위한 글로벌 R&D 캠퍼스가 열립니다. 무인이동체(자동차 · 선박 · 항공) 분야를 구축하여 미래 성장 동력을 창출합니다.\n신개념 ICT를 통한 캠퍼스 혁신을 통해서 미래 교육환경 변화에 대응하고 에너지 절약을 지향하는 친환경 스마트 캠퍼스를 구축해 나갑니다.",
          totStud: 34917,
          tuition: 6011785,
          website: "https://www.snu.ac.kr/",
          rank: [
            {
              majorName: "Environmental Science",
              totRank: 3,
              gloRank: 317,
              year: 2023,
            },
            {
              majorName: "Physics and Astronomy",
              totRank: 1,
              gloRank: 281,
              year: 2023,
            },
            {
              majorName: "Arts and Humanities",
              totRank: 1,
              gloRank: 295,
              year: 2023,
            },
            {
              majorName: "Business, Management and Accounting",
              totRank: 1,
              gloRank: 179,
              year: 2023,
            },
            {
              majorName: "Computer Science",
              totRank: 2,
              gloRank: 86,
              year: 2023,
            },
            {
              majorName: "Agricultural and Biological Sciences",
              totRank: 2,
              gloRank: 87,
              year: 2023,
            },
            {
              majorName: "Energy",
              totRank: 3,
              gloRank: 162,
              year: 2023,
            },
            {
              majorName: "Pharmacology, Toxicology and Pharmaceutics",
              totRank: 1,
              gloRank: 90,
              year: 2023,
            },
            {
              majorName: "Dentistry",
              totRank: 1,
              gloRank: 13,
              year: 2023,
            },
            {
              majorName: "Mathematics",
              totRank: 2,
              gloRank: 170,
              year: 2023,
            },
            {
              majorName: "Social Sciences",
              totRank: 1,
              gloRank: 198,
              year: 2023,
            },
            {
              majorName: "Biochemistry, Genetics and Molecular Biology",
              totRank: 1,
              gloRank: 89,
              year: 2023,
            },
            {
              majorName: "Medicine",
              totRank: 1,
              gloRank: 91,
              year: 2023,
            },
            {
              majorName: "Psychology",
              totRank: 1,
              gloRank: 381,
              year: 2023,
            },
            {
              majorName: "Universities",
              totRank: 1,
              gloRank: 98,
              year: 2023,
            },
            {
              majorName: "Earth and Planetary Sciences",
              totRank: 1,
              gloRank: 330,
              year: 2023,
            },
            {
              majorName: "Chemistry",
              totRank: 1,
              gloRank: 248,
              year: 2023,
            },
            {
              majorName: "Economics, Econometrics and Finance",
              totRank: 1,
              gloRank: 135,
              year: 2023,
            },
            {
              majorName: "Veterinary",
              totRank: 1,
              gloRank: 54,
              year: 2023,
            },
            {
              majorName: "Engineering",
              totRank: 1,
              gloRank: 78,
              year: 2023,
            },
          ],
          sfratio: "15.33",
        },
        {
          uni_id: 8,
          name: "한국과학기술원",
          engName: "Korea Advanced Institute of Science and Technology",
          citation: "https://www.kaist.ac.kr/kr/html/kaist/010101.html",
          compRate: "6.3",
          intro:
            "KAIST는 과학기술을 통한 경제발전이라는 정부의 목표 아래 국내 최초의 연구중심 이공계 특수대학원으로 1971년 설립됐다. 정부는 과학기술원 설립과 운영을 위한 특별법을 제정해 최신식 장비·우수한 교수진 및 학생을 위한 교육비 지원과 병역에 대한 면제 조치를 적용할 수 있는 과학기술처 산하 교육 기관을 설립하기로 했다. 이처럼 대담하고 창조적이면서도 현실적인 계획을 가능하게 한 배경에는 다음 세 가지 요소가 작용했다. 경제발전의 원동력을 이공계교육과 과학기술의 연구개발에서 찾았던 지도자들의 비전과 노력 · 이를 실행시킨 정부의 확고한 의지 · 그리고 미국 국제개발처(USAID)의 차관이 바로 그 핵심이다. 1970년대 초반까지도 우리나라의 사회, 경제, 교육 환경은 여전히 열악해 수많은 인재가 배움의 길을 찾아 해외로 떠났으며 대부분 다시 돌아오지 않았다. KAIST 출범은 대한민국의 인재를 대한민국이 교육하여 국가발전을 위해 역량을 발휘할 수 있는 기반을 마련하는 계기가 되었으며 그 결과 ‘한강의 기적’으로 비유되는 놀라운 초고속 경제성장을 뒷받침했다.",
          totStud: 14736,
          tuition: 6866000,
          website: "https://www.kaist.ac.kr/kr/",
          rank: [
            {
              majorName: "Environmental Science",
              totRank: 11,
              gloRank: 723,
              year: 2023,
            },
            {
              majorName: "Physics and Astronomy",
              totRank: 2,
              gloRank: 322,
              year: 2023,
            },
            {
              majorName: "Arts and Humanities",
              totRank: 3,
              gloRank: 479,
              year: 2023,
            },
            {
              majorName: "Business, Management and Accounting",
              totRank: 8,
              gloRank: 499,
              year: 2023,
            },
            {
              majorName: "Computer Science",
              totRank: 1,
              gloRank: 80,
              year: 2023,
            },
            {
              majorName: "Agricultural and Biological Sciences",
              totRank: 15,
              gloRank: 454,
              year: 2023,
            },
            {
              majorName: "Energy",
              totRank: 2,
              gloRank: 157,
              year: 2023,
            },
            {
              majorName: "Pharmacology, Toxicology and Pharmaceutics",
              totRank: 10,
              gloRank: 512,
              year: 2023,
            },
            {
              majorName: "Mathematics",
              totRank: 1,
              gloRank: 98,
              year: 2023,
            },
            {
              majorName: "Social Sciences",
              totRank: 4,
              gloRank: 493,
              year: 2023,
            },
            {
              majorName: "Biochemistry, Genetics and Molecular Biology",
              totRank: 4,
              gloRank: 339,
              year: 2023,
            },
            {
              majorName: "Medicine",
              totRank: 6,
              gloRank: 435,
              year: 2023,
            },
            {
              majorName: "Psychology",
              totRank: 12,
              gloRank: 1417,
              year: 2023,
            },
            {
              majorName: "Universities",
              totRank: 4,
              gloRank: 294,
              year: 2023,
            },
            {
              majorName: "Earth and Planetary Sciences",
              totRank: 4,
              gloRank: 538,
              year: 2023,
            },
            {
              majorName: "Chemistry",
              totRank: 3,
              gloRank: 371,
              year: 2023,
            },
            {
              majorName: "Economics, Econometrics and Finance",
              totRank: 7,
              gloRank: 737,
              year: 2023,
            },
            {
              majorName: "Engineering",
              totRank: 2,
              gloRank: 106,
              year: 2023,
            },
          ],
          sfratio: "22.16",
        },
        {
          uni_id: 15,
          name: "고려대학교",
          engName: "Korea University",
          citation:
            "https://cn.korea.edu/mbshome/mbs/university/subview.do?id=university_010602000000",
          compRate: "10.8",
          intro:
            "고려대학교는 2005년 개교 100주년을 전후하여 국내뿐만 아니라 세계적인 대학으로 거듭났다. 1990년대 중후반 국제화 준비기를 거치며 다진 인프라를 디딤돌로 삼아 영어강의를 대폭 확대하였으며, 외국인 교원을 충원하였다. 아울러 2004년 세계대학의 다자간 협력체인 U21(Universitas 21) 회원교가 되었고 2005년에는 세계대학 총장 포럼을 개최하기도 하였다. 2008년에는 환태평양 대학교류협의회(APRU, Association of Pacific Rim Universities)에 가입하였으며 현재까지 90여 개 국가 · 850여 개 대학 및 기관과 학술교류협정을 맺었다. 고려대학교는 현재 국제화 전진기지로서 중국인민대학(중국인민대학) · 캐나다 UBC(The University of British Columbia) 등 세계적인 명문대학 내에 학생 기숙사를 보유하고 있으며 안암 캠퍼스에는 외국인 교수 및 학생 전용 기숙사인 CJ International House · Anam Global House를 갖추고 있다. 고려대학교는 명실공히 민족의 대학으로서 그 고유한 정체성을 보존하면서도 세계적인 연구중심대학으로 나아가기 위한 국제적 인지도와 실력을 갖추어나가고 있다.",
          totStud: 33938,
          tuition: 8279357,
          website: "http://www.korea.edu/mbshome/mbs/en/index.do",
          rank: [
            {
              majorName: "Environmental Science",
              totRank: 1,
              gloRank: 235,
              year: 2023,
            },
            {
              majorName: "Physics and Astronomy",
              totRank: 4,
              gloRank: 460,
              year: 2023,
            },
            {
              majorName: "Arts and Humanities",
              totRank: 6,
              gloRank: 708,
              year: 2023,
            },
            {
              majorName: "Business, Management and Accounting",
              totRank: 7,
              gloRank: 458,
              year: 2023,
            },
            {
              majorName: "Computer Science",
              totRank: 3,
              gloRank: 158,
              year: 2023,
            },
            {
              majorName: "Agricultural and Biological Sciences",
              totRank: 9,
              gloRank: 363,
              year: 2023,
            },
            {
              majorName: "Energy",
              totRank: 4,
              gloRank: 166,
              year: 2023,
            },
            {
              majorName: "Pharmacology, Toxicology and Pharmaceutics",
              totRank: 3,
              gloRank: 374,
              year: 2023,
            },
            {
              majorName: "Dentistry",
              totRank: 5,
              gloRank: 234,
              year: 2023,
            },
            {
              majorName: "Mathematics",
              totRank: 3,
              gloRank: 279,
              year: 2023,
            },
            {
              majorName: "Social Sciences",
              totRank: 3,
              gloRank: 395,
              year: 2023,
            },
            {
              majorName: "Biochemistry, Genetics and Molecular Biology",
              totRank: 3,
              gloRank: 291,
              year: 2023,
            },
            {
              majorName: "Medicine",
              totRank: 3,
              gloRank: 260,
              year: 2023,
            },
            {
              majorName: "Psychology",
              totRank: 2,
              gloRank: 413,
              year: 2023,
            },
            {
              majorName: "Universities",
              totRank: 3,
              gloRank: 288,
              year: 2023,
            },
            {
              majorName: "Earth and Planetary Sciences",
              totRank: 16,
              gloRank: 1591,
              year: 2023,
            },
            {
              majorName: "Chemistry",
              totRank: 2,
              gloRank: 314,
              year: 2023,
            },
            {
              majorName: "Economics, Econometrics and Finance",
              totRank: 3,
              gloRank: 339,
              year: 2023,
            },
            {
              majorName: "Veterinary",
              totRank: 17,
              gloRank: 788,
              year: 2023,
            },
            {
              majorName: "Engineering",
              totRank: 3,
              gloRank: 174,
              year: 2023,
            },
          ],
          sfratio: "22.46",
        },
      ],
    };

    const selectedMajor = computed(() => store.state.selectedMajor);

    const selectedYear = ref(2022)

    const majors = computed(() => {
      return store.state.majors[0];
    });

    const years = computed(() => {
      return store.state.years[0];
    });

    const getSelectedYearData = (year) => {
      selectedYear.value = year;
    };

    const chooseMajor = (major) => {
      store.commit("chooseMajor", major);
    };

    const chooseYear = async (year) => {
        selectedYear.value = year
      //   let res = await axios
      //     .get(`https://k-ranking.co.kr:8081/api/universities/${year}`)
      //     .then((response) => {
      //       store.commit("setUniversities", response);
      //     });
      store.commit("setUniversities", testData.universities);
    };

    watchEffect(() => {
      store.commit("setInputText", searchInput.value);
    });

    return {
      subjectDropdown,
      yearDropdown,
      getSelectedYearData,
      chooseMajor,
      chooseYear,
      selectedYear,
      selectedMajor,
      majors,
      years,
      searchInput,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  @include centerElement();
  z-index: 10;
  height: 194px;
  background: white;
  position: sticky;
  top: 0;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f2f2f2;

  .navbar-wrapper {
    height: 100%;
    width: 944px;

    .row-1 {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        display: flex;

        &:hover {
          cursor: pointer;
        }

        .k-ranking {
          font-family: "pretendard";
          @include centerElement();
          height: 100%;

          p {
            color: $mainColor;
            font-weight: bold;
            font-size: 2.5rem;
          }
        }
      }

      .navbar-links {
        .links-wrapper {
          a {
            font-family: "pretendard";
          }
        }
      }
    }

    .row-2 {
      position: absolute;
      width: 944px;
      bottom: 40px;
      display: flex;
      justify-content: space-between;

      .show {
        display: block;
      }

      .filter-name {
        color: #222222;
        font-family: "pretendard";
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 10px;
      }

      .year-filter {
        width: 221px;

        .year-dropdown {
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
              font-family: "pretendard";
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
            width: 221px;
            height: 300px;
            overflow-y: scroll;
            border: 1px solid #f2f2f2;
            border-radius: 0 0 4px 4px;

            .option {
              font-family: "pretendard";
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
                background-color: #82e1ff;
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

      .subject-filter {
        width: 341px;

        .subject-dropdown {
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
              font-family: "pretendard";
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
            border: 1px solid #f2f2f2;
            border-radius: 0 0 4px 4px;
            height: 300px;
            overflow-y: scroll;

            .option {
              font-family: "pretendard";
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
                background-color: #82e1ff;
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

      .name-filter {
        width: 342px;

        .wrapper {
          position: relative;
          width: 100%;
          height: 44px;

          .name-input {
            font-family: "pretendard";
            padding-left: 10px;
            font-size: 16px;
            color: #222222;
            line-height: 19px;
            font-weight: 700;
            width: 100%;
            height: 100%;
            padding: 0 10px;
            border: 1px solid #f2f2f2;
            border-radius: 4px;

            &::placeholder {
              font-family: "pretendard";
              color: #bababa;
              font-size: 16px;
              font-weight: 700;
              line-height: 19px;
            }
          }

          .icon {
            pointer-events: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            font-size: 25px;
          }
        }
      }
    }
  }

  .navbar-links {
    @include centerElement();
    @include korContentFont();
    height: 100%;
    min-width: fit-content;
    color: v-bind(fontColor);
    font-weight: bold;

    a {
      color: v-bind(fontColor);
      padding: 0 5px;

      &:hover {
        color: #bfbfbf;
      }
    }
  }
}
</style>
