<template>
<div v-if="loading"></div>
<div v-else>
    <!-- 타이틀 & 로고 -->
    <div class="website-title">
        <div class="title-content">
            <p class="title">Top University Ranking</p>
            <!-- <p class="title-description">본 웹사이트는 QS World University Rankings (QS)와 Times Higher Education (THE)에 나와 있는 자료를 기반으로 제작되었습니다</p> -->
        </div>
    </div>

    <!-- Filters -->
    <main class="main">
        <div class="filter-wrapper">
            <!-- Source Selector -->
            <div class="source-filter">
                <div class="source" :class="theActive ? 'active' : null" @click="selectedSource = 'THE', selectedSubject = null, theActive = true, qsActive = false">
                    <div class="source_img"><img :src="sourceSvg" /></div>
                    <span>THE</span>
                </div>

                <div class="source" :class="qsActive ? 'active' : null" @click="selectedSource = 'QS', selectedSubject = null, qsActive = true, theActive = false">
                    <div class="source_img"><img :src="sourceSvg" /></div>
                    <span>QS</span>
                </div>
            </div>

            <!-- Year Filter -->
            <div class="year-filter">
                <select 
                    v-model="selectedYear" @change="selectedYear = selectedYear">
                    <option :key="i" v-for="(val, i) in years" :value="val">{{ val }}</option>
                </select>
                <div class="year-arrow"><img :src="arrowDown" /></div>
            </div>

            <!-- Name Filter -->
            <div class="search-filter">
                <input 
                onkeydown="return (event.keyCode!=13);"
                type="search" 
                placeholder="학교명 검색" 
                aria-describedby="button-addon3" 
                v-model="searchUniversity">
                <div class="search-icon"><img :src="search" /></div>
            </div>

            <!-- Subject Filter -->
            <div class="subject-filter">
                <select v-model="selectedSubject" @change="selectedSubject = selectedSubject">
                    <option :value="null">학과</option>
                    <!-- eslint-disable-next-line -->
                    <option v-if="selectedSource === 'QS'" v-for="(subject, i) in filteredUniversity[0].qs_subjects" :key="i" :value="subject">{{ subject }}</option>
                    <option v-else v-for="(subject, j) in filteredUniversity[0].the_subjects" :key="j" :value="subject">{{ subject }}</option>
                </select>
                <div class="subject-arrow"><img :src="arrowDown" /></div>
            </div>
        </div>
        

        <!-- 대학교 리스트 -->
        <div class="title-bar-wrapper">
            <div class="title-bar-content">
                <div class="title-bar-left">순위</div>
                <div class="title-bar-left"></div>
                <div class="title-bar-left">대학교명</div>
            </div>
            <div class="title-bar-content"><p>경쟁률</p></div>
        </div>
        <div class="university-wrapper" v-for="(university, idx) in filteredUniversity" :key="idx" @click="detailPage(university)">
            <div class="university-content">
                <p>{{ idx + 1 }}</p>
                <div class="university-logo">
                    <img :src="require(`../assets/logo/${university.name}.png`)" />
                </div>
                <div class="university-name">
                    <p>{{ university.name }}</p>
                    <p>{{ university.engName }}</p>
                </div>
            </div>
            <div class="university-content">
                <p>{{ university.compRate }}</p>
            </div>
        </div>

    </main>
</div>

</template>

<script>

import { ref, computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/axios'

import sourceSvg from '@/assets/svg/source.svg'
import arrowDown from '@/assets/svg/arrow_down.svg'
import search from '@/assets/svg/search.svg'


export default {
    name: 'MainPage',
    components: {
    },
    setup() {
        const router = useRouter()
        const universities = ref([])  //  University 전체 데이터
        const years = ref()    // 연도 
        const qsActive = ref(false)
        const theActive = ref(true)
        const selectedYear = ref('2022')
        const selectedSubject = ref(null)
        const selectedSource = ref('THE')
        const searchUniversity = ref('')
        const noSearchValue = ref(false)
        const loading = ref(true)
        const data =  {
         "universities" : [
        {
          "website": "https://www.snu.ac.kr/",
          "citation": "https://www.snu.ac.kr/about/overview/vision",
          "tuition": 6011785,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 1,
                  "other": 1,
                  "education": 1,
                  "mathematics": 1,
                  "mechanical": 1,
                  "accounting": 1,
                  "geology": 1,
                  "agriculture": 1,
                  "general": 1,
                  "computer": 1,
                  "psychology": 1,
                  "geography": 1,
                  "civil": 1,
                  "physics": 1,
                  "archaeology": 1,
                  "communication": 1,
                  "architecture": 1,
                  "chemistry": 1,
                  "art": 1,
                  "law": 1,
                  "business": 1,
                  "languages": 1,
                  "electrical": 1,
                  "medicine": 1,
                  "history": 1,
                  "economics": 1,
                  "chemical": 1,
                  "biological": 1,
                  "sport": 1
                },
                "rank": 1
              },
              "2021": {
                "subject": {
                  "politics": 1,
                  "other": 1,
                  "education": 1,
                  "mathematics": 1,
                  "mechanical": 1,
                  "accounting": 1,
                  "geology": 1,
                  "agriculture": 1,
                  "general": 1,
                  "computer": 1,
                  "psychology": 1,
                  "geography": 1,
                  "civil": 1,
                  "physics": 1,
                  "archaeology": 1,
                  "communication": 1,
                  "architecture": 1,
                  "chemistry": 1,
                  "art": 1,
                  "law": 1,
                  "business": 1,
                  "languages": 1,
                  "electrical": 1,
                  "medicine": 1,
                  "history": 1,
                  "economics": 1,
                  "chemical": 1,
                  "biological": 1,
                  "sport": 1
                },
                "rank": 1
              },
              "2022": {
                "subject": {
                  "politics": 1,
                  "other": 1,
                  "education": 1,
                  "mathematics": 1,
                  "mechanical": 1,
                  "accounting": 1,
                  "geology": 1,
                  "agriculture": 1,
                  "general": 1,
                  "computer": 1,
                  "psychology": 1,
                  "geography": 1,
                  "civil": 1,
                  "physics": 1,
                  "archaeology": 1,
                  "communication": 1,
                  "architecture": 1,
                  "chemistry": 1,
                  "art": 1,
                  "law": 1,
                  "business": 1,
                  "languages": 1,
                  "electrical": 1,
                  "medicine": 1,
                  "history": 1,
                  "economics": 1,
                  "chemical": 1,
                  "biological": 1,
                  "sport": 1
                },
                "rank": 1
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": 1,
                  "et_rank": null,
                  "lm_rank": 1,
                  "ns_rank": 1,
                  "sm_rank": 1
                },
                "rank": 1
              },
              "2021": {
                "subject": {
                  "ah_rank": 1,
                  "et_rank": 2,
                  "lm_rank": 1,
                  "ns_rank": 1,
                  "sm_rank": 1
                },
                "rank": 1
              },
              "2022": {
                "subject": {
                  "ah_rank": 1,
                  "et_rank": 2,
                  "lm_rank": 1,
                  "ns_rank": 1,
                  "sm_rank": 1
                },
                "rank": 1
              }
            }
          },
          "SFRatio": "15.33",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Seoul National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 34917,
          "intro": "창의성 및 인성교육 강화를 위한 자율적이고 융합적인 교육체계\n\n전공 간 벽을 낮추",
          "name": "서울대학교",
          "comRate": "https://www.snu.ac.kr/about/overview/vision",
          "id": 1
        },
        {
          "website": "https://www.kaist.ac.kr/kr/",
          "citation": "https://www.kaist.ac.kr/kr/html/kaist/010101.",
          "tuition": 6866000,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 3,
                  "other": 3,
                  "education": 3,
                  "mathematics": 3,
                  "mechanical": 3,
                  "accounting": 3,
                  "geology": 2,
                  "agriculture": null,
                  "general": 3,
                  "computer": 3,
                  "psychology": 3,
                  "geography": null,
                  "civil": 3,
                  "physics": 3,
                  "archaeology": 2,
                  "communication": 3,
                  "architecture": 3,
                  "chemistry": 3,
                  "art": 3,
                  "law": 3,
                  "business": 3,
                  "languages": 3,
                  "electrical": 3,
                  "medicine": 3,
                  "history": 3,
                  "economics": 3,
                  "chemical": 3,
                  "biological": 3,
                  "sport": 3
                },
                "rank": 3
              },
              "2021": {
                "subject": {
                  "politics": 2,
                  "other": 2,
                  "education": 2,
                  "mathematics": 2,
                  "mechanical": 2,
                  "accounting": 2,
                  "geology": 2,
                  "agriculture": null,
                  "general": 2,
                  "computer": 2,
                  "psychology": 2,
                  "geography": null,
                  "civil": 2,
                  "physics": 2,
                  "archaeology": 2,
                  "communication": 2,
                  "architecture": 2,
                  "chemistry": 2,
                  "art": 2,
                  "law": 2,
                  "business": 2,
                  "languages": 2,
                  "electrical": 2,
                  "medicine": 2,
                  "history": 2,
                  "economics": 2,
                  "chemical": 2,
                  "biological": 2,
                  "sport": 2
                },
                "rank": 2
              },
              "2022": {
                "subject": {
                  "politics": 2,
                  "other": 2,
                  "education": 2,
                  "mathematics": 2,
                  "mechanical": 2,
                  "accounting": 2,
                  "geology": 2,
                  "agriculture": null,
                  "general": 2,
                  "computer": 2,
                  "psychology": 2,
                  "geography": null,
                  "civil": 2,
                  "physics": 2,
                  "archaeology": 2,
                  "communication": 2,
                  "architecture": 2,
                  "chemistry": 2,
                  "art": 2,
                  "law": 2,
                  "business": 2,
                  "languages": 2,
                  "electrical": 2,
                  "medicine": 2,
                  "history": 2,
                  "economics": 2,
                  "chemical": 2,
                  "biological": 2,
                  "sport": 2
                },
                "rank": 2
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": 7,
                  "et_rank": null,
                  "lm_rank": 5,
                  "ns_rank": 2,
                  "sm_rank": 5
                },
                "rank": 2
              },
              "2021": {
                "subject": {
                  "ah_rank": 7,
                  "et_rank": 1,
                  "lm_rank": 5,
                  "ns_rank": 2,
                  "sm_rank": 5
                },
                "rank": 2
              },
              "2022": {
                "subject": {
                  "ah_rank": 8,
                  "et_rank": 1,
                  "lm_rank": 5,
                  "ns_rank": 2,
                  "sm_rank": 4
                },
                "rank": 2
              }
            }
          },
          "SFRatio": "22.16",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Korea Advanced Institute of Science and Techn",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 14736,
          "intro": "KAIST는 과학기술을 통한 경제발전이라는 정부의 목표 아래 국내 최초의 연구중심",
          "name": "한국과학기술원",
          "comRate": "https://www.kaist.ac.kr/kr/html/kaist/010101.",
          "id": 2
        },
        {
          "website": "http://www.korea.edu/mbshome/mbs/en/index.do",
          "citation": "https://cn.korea.edu/mbshome/mbs/university/s",
          "tuition": 8279357,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 4,
                  "other": 4,
                  "education": 4,
                  "mathematics": 5,
                  "mechanical": 5,
                  "accounting": 4,
                  "geology": 4,
                  "agriculture": 2,
                  "general": 5,
                  "computer": 5,
                  "psychology": 4,
                  "geography": 2,
                  "civil": 4,
                  "physics": 5,
                  "archaeology": 3,
                  "communication": 4,
                  "architecture": 4,
                  "chemistry": 5,
                  "art": 4,
                  "law": 4,
                  "business": 4,
                  "languages": 4,
                  "electrical": 5,
                  "medicine": 4,
                  "history": 4,
                  "economics": 4,
                  "chemical": 5,
                  "biological": 5,
                  "sport": 4
                },
                "rank": 5
              },
              "2021": {
                "subject": {
                  "politics": 4,
                  "other": 4,
                  "education": 4,
                  "mathematics": 5,
                  "mechanical": 5,
                  "accounting": 4,
                  "geology": 4,
                  "agriculture": 2,
                  "general": 5,
                  "computer": 5,
                  "psychology": 4,
                  "geography": 2,
                  "civil": 4,
                  "physics": 5,
                  "archaeology": 3,
                  "communication": 4,
                  "architecture": 4,
                  "chemistry": 5,
                  "art": 4,
                  "law": 4,
                  "business": 4,
                  "languages": 4,
                  "electrical": 5,
                  "medicine": 4,
                  "history": 4,
                  "economics": 4,
                  "chemical": 5,
                  "biological": 5,
                  "sport": 4
                },
                "rank": 5
              },
              "2022": {
                "subject": {
                  "politics": 5,
                  "other": 5,
                  "education": 5,
                  "mathematics": 7,
                  "mechanical": 7,
                  "accounting": 6,
                  "geology": 6,
                  "agriculture": 2,
                  "general": 7,
                  "computer": 7,
                  "psychology": 5,
                  "geography": 2,
                  "civil": 6,
                  "physics": 7,
                  "archaeology": 3,
                  "communication": 5,
                  "architecture": 5,
                  "chemistry": 7,
                  "art": 5,
                  "law": 5,
                  "business": 6,
                  "languages": 5,
                  "electrical": 7,
                  "medicine": 5,
                  "history": 5,
                  "economics": 6,
                  "chemical": 7,
                  "biological": 7,
                  "sport": 5
                },
                "rank": 7
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": 2,
                  "et_rank": null,
                  "lm_rank": 4,
                  "ns_rank": 3,
                  "sm_rank": 2
                },
                "rank": 3
              },
              "2021": {
                "subject": {
                  "ah_rank": 3,
                  "et_rank": 4,
                  "lm_rank": 4,
                  "ns_rank": 3,
                  "sm_rank": 2
                },
                "rank": 3
              },
              "2022": {
                "subject": {
                  "ah_rank": 2,
                  "et_rank": 3,
                  "lm_rank": 3,
                  "ns_rank": 3,
                  "sm_rank": 2
                },
                "rank": 3
              }
            }
          },
          "SFRatio": "22.46",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Korea University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 33938,
          "intro": "고려대학교는 2005년 개교 100주년을 전후하여 국내뿐만 아니라 세계적인 대학으",
          "name": "고려대학교",
          "comRate": "https://cn.korea.edu/mbshome/mbs/university/s",
          "id": 3
        },
        {
          "website": "https://www.yonsei.ac.kr/sc/",
          "citation": "https://www.yonsei.ac.kr/sc/intro/ideology.js",
          "tuition": 9152134,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 5,
                  "other": 5,
                  "education": 5,
                  "mathematics": 6,
                  "mechanical": 6,
                  "accounting": 5,
                  "geology": 5,
                  "agriculture": null,
                  "general": 6,
                  "computer": 6,
                  "psychology": 5,
                  "geography": null,
                  "civil": 5,
                  "physics": 6,
                  "archaeology": null,
                  "communication": 5,
                  "architecture": 5,
                  "chemistry": 6,
                  "art": 5,
                  "law": 5,
                  "business": 5,
                  "languages": 5,
                  "electrical": 6,
                  "medicine": 5,
                  "history": 5,
                  "economics": 5,
                  "chemical": 6,
                  "biological": 6,
                  "sport": 5
                },
                "rank": 6
              },
              "2021": {
                "subject": {
                  "politics": 5,
                  "other": 5,
                  "education": 5,
                  "mathematics": 7,
                  "mechanical": 7,
                  "accounting": 6,
                  "geology": 6,
                  "agriculture": null,
                  "general": 7,
                  "computer": 7,
                  "psychology": 5,
                  "geography": null,
                  "civil": 6,
                  "physics": 7,
                  "archaeology": null,
                  "communication": 5,
                  "architecture": 5,
                  "chemistry": 7,
                  "art": 5,
                  "law": 5,
                  "business": 6,
                  "languages": 5,
                  "electrical": 7,
                  "medicine": 5,
                  "history": 5,
                  "economics": 6,
                  "chemical": 7,
                  "biological": 7,
                  "sport": 5
                },
                "rank": 7
              },
              "2022": {
                "subject": {
                  "politics": 4,
                  "other": 4,
                  "education": 4,
                  "mathematics": 4,
                  "mechanical": 4,
                  "accounting": 4,
                  "geology": 3,
                  "agriculture": null,
                  "general": 4,
                  "computer": 4,
                  "psychology": 4,
                  "geography": null,
                  "civil": 4,
                  "physics": 4,
                  "archaeology": null,
                  "communication": 4,
                  "architecture": 4,
                  "chemistry": 4,
                  "art": 4,
                  "law": 4,
                  "business": 4,
                  "languages": 4,
                  "electrical": 4,
                  "medicine": 4,
                  "history": 4,
                  "economics": 4,
                  "chemical": 4,
                  "biological": 4,
                  "sport": 4
                },
                "rank": 4
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": 3,
                  "et_rank": null,
                  "lm_rank": 3,
                  "ns_rank": 6,
                  "sm_rank": 3
                },
                "rank": 6
              },
              "2021": {
                "subject": {
                  "ah_rank": 2,
                  "et_rank": 7,
                  "lm_rank": 3,
                  "ns_rank": 6,
                  "sm_rank": 3
                },
                "rank": 5
              },
              "2022": {
                "subject": {
                  "ah_rank": 3,
                  "et_rank": 5,
                  "lm_rank": 2,
                  "ns_rank": 6,
                  "sm_rank": 3
                },
                "rank": 4
              }
            }
          },
          "SFRatio": "21.05",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Yonsei University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 36433,
          "intro": "연세 건학정신\n연세대학교는 ‘너희가 내 말에 거하면 참 내 제자가 되고 진리를 알",
          "name": "연세대학교",
          "comRate": "https://www.yonsei.ac.kr/sc/intro/ideology.js",
          "id": 4
        },
        {
          "website": "https://www.postech.ac.kr/",
          "citation": "https://www.postech.ac.kr/about-postech/intro",
          "tuition": 5613500,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": null,
                  "other": null,
                  "education": null,
                  "mathematics": 4,
                  "mechanical": 4,
                  "accounting": null,
                  "geology": 3,
                  "agriculture": null,
                  "general": 4,
                  "computer": 4,
                  "psychology": null,
                  "geography": null,
                  "civil": null,
                  "physics": 4,
                  "archaeology": null,
                  "communication": null,
                  "architecture": null,
                  "chemistry": 4,
                  "art": null,
                  "law": null,
                  "business": null,
                  "languages": null,
                  "electrical": 4,
                  "medicine": null,
                  "history": null,
                  "economics": null,
                  "chemical": 4,
                  "biological": 4,
                  "sport": null
                },
                "rank": 4
              },
              "2021": {
                "subject": {
                  "politics": null,
                  "other": null,
                  "education": null,
                  "mathematics": 4,
                  "mechanical": 4,
                  "accounting": null,
                  "geology": 3,
                  "agriculture": null,
                  "general": 4,
                  "computer": 4,
                  "psychology": null,
                  "geography": null,
                  "civil": null,
                  "physics": 4,
                  "archaeology": null,
                  "communication": null,
                  "architecture": null,
                  "chemistry": 4,
                  "art": null,
                  "law": null,
                  "business": null,
                  "languages": null,
                  "electrical": 4,
                  "medicine": null,
                  "history": null,
                  "economics": null,
                  "chemical": 4,
                  "biological": 4,
                  "sport": null
                },
                "rank": 4
              },
              "2022": {
                "subject": {
                  "politics": null,
                  "other": null,
                  "education": null,
                  "mathematics": 6,
                  "mechanical": 6,
                  "accounting": null,
                  "geology": 5,
                  "agriculture": null,
                  "general": 6,
                  "computer": 6,
                  "psychology": null,
                  "geography": null,
                  "civil": null,
                  "physics": 6,
                  "archaeology": null,
                  "communication": null,
                  "architecture": null,
                  "chemistry": 6,
                  "art": null,
                  "law": null,
                  "business": null,
                  "languages": null,
                  "electrical": 6,
                  "medicine": null,
                  "history": null,
                  "economics": null,
                  "chemical": 6,
                  "biological": 6,
                  "sport": null
                },
                "rank": 6
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": 15,
                  "ns_rank": 5,
                  "sm_rank": null
                },
                "rank": 4
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 3,
                  "lm_rank": 10,
                  "ns_rank": 4,
                  "sm_rank": null
                },
                "rank": 4
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 4,
                  "lm_rank": 9,
                  "ns_rank": 4,
                  "sm_rank": null
                },
                "rank": 5
              }
            }
          },
          "SFRatio": "15.02",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Pohang University of Science and Technology",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 4311,
          "intro": "건학이념\n포항공과대학은 우리나라와 인류사회 발전에 절실히 필요한 과학과 기술의 심",
          "name": "포항공과대학교",
          "comRate": "https://www.postech.ac.kr/about-postech/intro",
          "id": 5
        },
        {
          "website": "https://www.skku.edu/skku/index.do",
          "citation": "https://www.skku.edu/skku/about/s620/sub04_01",
          "tuition": 8397663,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 2,
                  "other": 2,
                  "education": 2,
                  "mathematics": 2,
                  "mechanical": 2,
                  "accounting": 2,
                  "geology": null,
                  "agriculture": null,
                  "general": 2,
                  "computer": 2,
                  "psychology": 2,
                  "geography": null,
                  "civil": 2,
                  "physics": 2,
                  "archaeology": null,
                  "communication": 2,
                  "architecture": 2,
                  "chemistry": 2,
                  "art": 2,
                  "law": 2,
                  "business": 2,
                  "languages": 2,
                  "electrical": 2,
                  "medicine": 2,
                  "history": 2,
                  "economics": 2,
                  "chemical": 2,
                  "biological": 2,
                  "sport": 2
                },
                "rank": 2
              },
              "2021": {
                "subject": {
                  "politics": 3,
                  "other": 3,
                  "education": 3,
                  "mathematics": 3,
                  "mechanical": 3,
                  "accounting": 3,
                  "geology": null,
                  "agriculture": null,
                  "general": 3,
                  "computer": 3,
                  "psychology": 3,
                  "geography": null,
                  "civil": 3,
                  "physics": 3,
                  "archaeology": null,
                  "communication": 3,
                  "architecture": 3,
                  "chemistry": 3,
                  "art": 3,
                  "law": 3,
                  "business": 3,
                  "languages": 3,
                  "electrical": 3,
                  "medicine": 3,
                  "history": 3,
                  "economics": 3,
                  "chemical": 3,
                  "biological": 3,
                  "sport": 3
                },
                "rank": 3
              },
              "2022": {
                "subject": {
                  "politics": 3,
                  "other": 3,
                  "education": 3,
                  "mathematics": 3,
                  "mechanical": 3,
                  "accounting": 3,
                  "geology": null,
                  "agriculture": null,
                  "general": 3,
                  "computer": 3,
                  "psychology": 3,
                  "geography": null,
                  "civil": 3,
                  "physics": 3,
                  "archaeology": null,
                  "communication": 3,
                  "architecture": 3,
                  "chemistry": 3,
                  "art": 3,
                  "law": 3,
                  "business": 3,
                  "languages": 3,
                  "electrical": 3,
                  "medicine": 3,
                  "history": 3,
                  "economics": 3,
                  "chemical": 3,
                  "biological": 3,
                  "sport": 3
                },
                "rank": 3
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": 4,
                  "et_rank": null,
                  "lm_rank": 2,
                  "ns_rank": 4,
                  "sm_rank": null
                },
                "rank": 5
              },
              "2021": {
                "subject": {
                  "ah_rank": 4,
                  "et_rank": 5,
                  "lm_rank": 2,
                  "ns_rank": 5,
                  "sm_rank": 4
                },
                "rank": 6
              },
              "2022": {
                "subject": {
                  "ah_rank": 5,
                  "et_rank": 7,
                  "lm_rank": 4,
                  "ns_rank": 5,
                  "sm_rank": 5
                },
                "rank": 6
              }
            }
          },
          "SFRatio": "20.17",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Sungkyunkwan University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 30755,
          "intro": "건학이념\n수기치인(修己治人)\n성균관대학교는 인간의 존엄성을 토대로 자기 완성과 인",
          "name": "성균관대학교",
          "comRate": "https://www.skku.edu/skku/about/s620/sub04_01",
          "id": 6
        },
        {
          "website": "https://www.hanyang.ac.kr/",
          "citation": "https://www.hycu.ac.kr/comm/menu/user/1893bc6",
          "tuition": 8499227,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 7,
                  "other": 7,
                  "education": 7,
                  "mathematics": 9,
                  "mechanical": 9,
                  "accounting": 8,
                  "geology": 8,
                  "agriculture": null,
                  "general": 9,
                  "computer": 9,
                  "psychology": 6,
                  "geography": null,
                  "civil": 8,
                  "physics": 9,
                  "archaeology": 4,
                  "communication": 7,
                  "architecture": 7,
                  "chemistry": 9,
                  "art": 7,
                  "law": 7,
                  "business": 8,
                  "languages": 7,
                  "electrical": 9,
                  "medicine": 7,
                  "history": 7,
                  "economics": 8,
                  "chemical": 9,
                  "biological": 9,
                  "sport": 7
                },
                "rank": 9
              },
              "2021": {
                "subject": {
                  "politics": 7,
                  "other": 8,
                  "education": 8,
                  "mathematics": 10,
                  "mechanical": 10,
                  "accounting": 9,
                  "geology": 9,
                  "agriculture": null,
                  "general": 10,
                  "computer": 10,
                  "psychology": 6,
                  "geography": null,
                  "civil": 9,
                  "physics": 10,
                  "archaeology": 4,
                  "communication": 8,
                  "architecture": 8,
                  "chemistry": 10,
                  "art": 8,
                  "law": 8,
                  "business": 9,
                  "languages": 8,
                  "electrical": 10,
                  "medicine": 8,
                  "history": 8,
                  "economics": 9,
                  "chemical": 10,
                  "biological": 10,
                  "sport": 8
                },
                "rank": 10
              },
              "2022": {
                "subject": {
                  "politics": 7,
                  "other": 8,
                  "education": 8,
                  "mathematics": 10,
                  "mechanical": 10,
                  "accounting": 9,
                  "geology": 9,
                  "agriculture": null,
                  "general": 10,
                  "computer": 10,
                  "psychology": 6,
                  "geography": null,
                  "civil": 9,
                  "physics": 10,
                  "archaeology": 4,
                  "communication": 8,
                  "architecture": 8,
                  "chemistry": 10,
                  "art": 8,
                  "law": 8,
                  "business": 9,
                  "languages": 8,
                  "electrical": 10,
                  "medicine": 8,
                  "history": 8,
                  "economics": 9,
                  "chemical": 10,
                  "biological": 10,
                  "sport": 8
                },
                "rank": 10
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": 5,
                  "et_rank": null,
                  "lm_rank": 7,
                  "ns_rank": 7,
                  "sm_rank": 6
                },
                "rank": 7
              },
              "2021": {
                "subject": {
                  "ah_rank": 5,
                  "et_rank": 6,
                  "lm_rank": 8,
                  "ns_rank": 7,
                  "sm_rank": 6
                },
                "rank": 7
              },
              "2022": {
                "subject": {
                  "ah_rank": 4,
                  "et_rank": 6,
                  "lm_rank": 6,
                  "ns_rank": 7,
                  "sm_rank": 6
                },
                "rank": 7
              }
            }
          },
          "SFRatio": "23.86",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Hanyang University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 27153,
          "intro": "한양학원의 건학정신은, 학생들로 하여금 사랑을 이해하고 실천 할 수 있도록 교육하",
          "name": "한양대학교",
          "comRate": "https://www.hycu.ac.kr/comm/menu/user/1893bc6",
          "id": 7
        },
        {
          "website": "https://unist-kor.unist.ac.kr/",
          "citation": "https://unist-kor.unist.ac.kr/about-unist/ove",
          "tuition": 6200250,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": null,
                  "other": null,
                  "education": null,
                  "mathematics": 7,
                  "mechanical": 7,
                  "accounting": 6,
                  "geology": 6,
                  "agriculture": null,
                  "general": 7,
                  "computer": 7,
                  "psychology": null,
                  "geography": null,
                  "civil": 6,
                  "physics": 7,
                  "archaeology": null,
                  "communication": null,
                  "architecture": null,
                  "chemistry": 7,
                  "art": null,
                  "law": null,
                  "business": 6,
                  "languages": null,
                  "electrical": 7,
                  "medicine": null,
                  "history": null,
                  "economics": 6,
                  "chemical": 7,
                  "biological": 7,
                  "sport": null
                },
                "rank": 7
              },
              "2021": {
                "subject": {
                  "politics": null,
                  "other": null,
                  "education": null,
                  "mathematics": 6,
                  "mechanical": 6,
                  "accounting": 5,
                  "geology": 5,
                  "agriculture": null,
                  "general": 6,
                  "computer": 6,
                  "psychology": null,
                  "geography": null,
                  "civil": 5,
                  "physics": 6,
                  "archaeology": null,
                  "communication": null,
                  "architecture": null,
                  "chemistry": 6,
                  "art": null,
                  "law": null,
                  "business": 5,
                  "languages": null,
                  "electrical": 6,
                  "medicine": null,
                  "history": null,
                  "economics": 5,
                  "chemical": 6,
                  "biological": 6,
                  "sport": null
                },
                "rank": 6
              },
              "2022": {
                "subject": {
                  "politics": null,
                  "other": null,
                  "education": null,
                  "mathematics": 5,
                  "mechanical": 5,
                  "accounting": 5,
                  "geology": 4,
                  "agriculture": null,
                  "general": 5,
                  "computer": 5,
                  "psychology": null,
                  "geography": null,
                  "civil": 5,
                  "physics": 5,
                  "archaeology": null,
                  "communication": null,
                  "architecture": null,
                  "chemistry": 5,
                  "art": null,
                  "law": null,
                  "business": 5,
                  "languages": null,
                  "electrical": 5,
                  "medicine": null,
                  "history": null,
                  "economics": 5,
                  "chemical": 5,
                  "biological": 5,
                  "sport": null
                },
                "rank": 5
              }
            },
            "QS": {
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 11,
                  "lm_rank": null,
                  "ns_rank": 10,
                  "sm_rank": null
                },
                "rank": 8
              }
            }
          },
          "SFRatio": "16.01",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Ulsan National Institute of Science and Techn",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 5188,
          "intro": "인류의 삶에 공헌하는 세계적 과학기술 선도 대학\n미래를 개척하는 창의적인 과학기술",
          "name": "울산과학기술원",
          "comRate": "https://unist-kor.unist.ac.kr/about-unist/ove",
          "id": 8
        },
        {
          "website": "https://www.khu.ac.kr/kor/main/index.do",
          "citation": "https://www.khu.ac.kr/kor/sub/content.do?MENU",
          "tuition": 7938301,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 6,
                  "other": 6,
                  "education": 6,
                  "mathematics": 8,
                  "mechanical": 8,
                  "accounting": 7,
                  "geology": 7,
                  "agriculture": 3,
                  "general": 8,
                  "computer": 8,
                  "psychology": null,
                  "geography": 3,
                  "civil": 7,
                  "physics": 8,
                  "archaeology": null,
                  "communication": 6,
                  "architecture": 6,
                  "chemistry": 8,
                  "art": 6,
                  "law": 6,
                  "business": 7,
                  "languages": 6,
                  "electrical": 8,
                  "medicine": 6,
                  "history": 6,
                  "economics": 7,
                  "chemical": 8,
                  "biological": 8,
                  "sport": 6
                },
                "rank": 8
              },
              "2021": {
                "subject": {
                  "politics": 6,
                  "other": 6,
                  "education": 6,
                  "mathematics": 8,
                  "mechanical": 8,
                  "accounting": 7,
                  "geology": 7,
                  "agriculture": 3,
                  "general": 8,
                  "computer": 8,
                  "psychology": null,
                  "geography": 3,
                  "civil": 7,
                  "physics": 8,
                  "archaeology": null,
                  "communication": 6,
                  "architecture": 6,
                  "chemistry": 8,
                  "art": 6,
                  "law": 6,
                  "business": 7,
                  "languages": 6,
                  "electrical": 8,
                  "medicine": 6,
                  "history": 6,
                  "economics": 7,
                  "chemical": 8,
                  "biological": 8,
                  "sport": 6
                },
                "rank": 8
              },
              "2022": {
                "subject": {
                  "politics": 6,
                  "other": 6,
                  "education": 6,
                  "mathematics": 8,
                  "mechanical": 8,
                  "accounting": 7,
                  "geology": 7,
                  "agriculture": 3,
                  "general": 8,
                  "computer": 8,
                  "psychology": null,
                  "geography": 3,
                  "civil": 7,
                  "physics": 8,
                  "archaeology": null,
                  "communication": 6,
                  "architecture": 6,
                  "chemistry": 8,
                  "art": 6,
                  "law": 6,
                  "business": 7,
                  "languages": 6,
                  "electrical": 8,
                  "medicine": 6,
                  "history": 6,
                  "economics": 7,
                  "chemical": 8,
                  "biological": 8,
                  "sport": 6
                },
                "rank": 8
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": 10,
                  "et_rank": null,
                  "lm_rank": 6,
                  "ns_rank": 11,
                  "sm_rank": 7
                },
                "rank": 8
              },
              "2021": {
                "subject": {
                  "ah_rank": 9,
                  "et_rank": 8,
                  "lm_rank": 6,
                  "ns_rank": 12,
                  "sm_rank": 7
                },
                "rank": 8
              },
              "2022": {
                "subject": {
                  "ah_rank": 7,
                  "et_rank": 8,
                  "lm_rank": 7,
                  "ns_rank": 11,
                  "sm_rank": 7
                },
                "rank": 9
              }
            }
          },
          "SFRatio": "27.52",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Kyung Hee University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 37452,
          "intro": "경희정신\n\n경희는 창학 이래 ‘학문과 평화’의 학풍과 전통을 이어왔다. 학술의 권",
          "name": "경희대학교",
          "comRate": "https://www.khu.ac.kr/kor/sub/content.do?MENU",
          "id": 9
        },
        {
          "website": "https://www.gist.ac.kr/kr/main.html",
          "citation": "https://ko.wikipedia.org/wiki/%EA%B4%91%EC%A3",
          "tuition": 2060000,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": null,
                  "other": null,
                  "education": null,
                  "mathematics": null,
                  "mechanical": 10,
                  "accounting": null,
                  "geology": null,
                  "agriculture": null,
                  "general": 10,
                  "computer": 10,
                  "psychology": null,
                  "geography": null,
                  "civil": null,
                  "physics": 10,
                  "archaeology": null,
                  "communication": null,
                  "architecture": null,
                  "chemistry": 10,
                  "art": null,
                  "law": null,
                  "business": null,
                  "languages": null,
                  "electrical": 10,
                  "medicine": null,
                  "history": null,
                  "economics": null,
                  "chemical": 10,
                  "biological": 10,
                  "sport": null
                },
                "rank": 10
              },
              "2021": {
                "subject": {
                  "politics": null,
                  "other": null,
                  "education": null,
                  "mathematics": null,
                  "mechanical": 11,
                  "accounting": null,
                  "geology": null,
                  "agriculture": null,
                  "general": 11,
                  "computer": 11,
                  "psychology": null,
                  "geography": null,
                  "civil": null,
                  "physics": 11,
                  "archaeology": null,
                  "communication": null,
                  "architecture": null,
                  "chemistry": 11,
                  "art": null,
                  "law": null,
                  "business": null,
                  "languages": null,
                  "electrical": 11,
                  "medicine": null,
                  "history": null,
                  "economics": null,
                  "chemical": 11,
                  "biological": 11,
                  "sport": null
                },
                "rank": 11
              },
              "2022": {
                "subject": {
                  "politics": null,
                  "other": null,
                  "education": null,
                  "mathematics": null,
                  "mechanical": 11,
                  "accounting": null,
                  "geology": null,
                  "agriculture": null,
                  "general": 11,
                  "computer": 11,
                  "psychology": null,
                  "geography": null,
                  "civil": null,
                  "physics": 11,
                  "archaeology": null,
                  "communication": null,
                  "architecture": null,
                  "chemistry": 11,
                  "art": null,
                  "law": null,
                  "business": null,
                  "languages": null,
                  "electrical": 11,
                  "medicine": null,
                  "history": null,
                  "economics": null,
                  "chemical": 11,
                  "biological": 11,
                  "sport": null
                },
                "rank": 11
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": 12,
                  "sm_rank": null
                },
                "rank": 9
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 10,
                  "lm_rank": null,
                  "ns_rank": 13,
                  "sm_rank": null
                },
                "rank": 9
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 9,
                  "lm_rank": null,
                  "ns_rank": 14,
                  "sm_rank": null
                },
                "rank": 10
              }
            }
          },
          "SFRatio": "14.26",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Gwangju Institute of Science and Technology",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 2666,
          "intro": "광주과학기술원(光州科學技術院, Gwangju Institute of Science",
          "name": "광주과학기술원",
          "comRate": "https://ko.wikipedia.org/wiki/%EA%B4%91%EC%A3",
          "id": 10
        },
        {
          "website": "https://www.ewha.ac.kr/ewha/index.do",
          "citation": "https://www.ewha.ac.kr/ewha/intro/object.do",
          "tuition": 8689951,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 9,
                  "other": 10,
                  "education": 10,
                  "mathematics": 12,
                  "mechanical": 13,
                  "accounting": 11,
                  "geology": 10,
                  "agriculture": 6,
                  "general": 13,
                  "computer": 13,
                  "psychology": 8,
                  "geography": 5,
                  "civil": 11,
                  "physics": 13,
                  "archaeology": 5,
                  "communication": 10,
                  "architecture": 10,
                  "chemistry": 13,
                  "art": 10,
                  "law": 10,
                  "business": 11,
                  "languages": 10,
                  "electrical": 13,
                  "medicine": 10,
                  "history": 10,
                  "economics": 11,
                  "chemical": 13,
                  "biological": 13,
                  "sport": 10
                },
                "rank": 13
              },
              "2021": {
                "subject": {
                  "politics": 10,
                  "other": 11,
                  "education": 11,
                  "mathematics": 13,
                  "mechanical": 14,
                  "accounting": 12,
                  "geology": 11,
                  "agriculture": 7,
                  "general": 14,
                  "computer": 14,
                  "psychology": 9,
                  "geography": 6,
                  "civil": 12,
                  "physics": 14,
                  "archaeology": 6,
                  "communication": 11,
                  "architecture": 11,
                  "chemistry": 14,
                  "art": 11,
                  "law": 11,
                  "business": 12,
                  "languages": 11,
                  "electrical": 14,
                  "medicine": 11,
                  "history": 11,
                  "economics": 12,
                  "chemical": 14,
                  "biological": 14,
                  "sport": 11
                },
                "rank": 14
              },
              "2022": {
                "subject": {
                  "politics": 10,
                  "other": 11,
                  "education": 11,
                  "mathematics": 13,
                  "mechanical": 14,
                  "accounting": 12,
                  "geology": 11,
                  "agriculture": 7,
                  "general": 14,
                  "computer": 14,
                  "psychology": 9,
                  "geography": 6,
                  "civil": 12,
                  "physics": 14,
                  "archaeology": 6,
                  "communication": 11,
                  "architecture": 11,
                  "chemistry": 14,
                  "art": 11,
                  "law": 11,
                  "business": 12,
                  "languages": 11,
                  "electrical": 14,
                  "medicine": 11,
                  "history": 11,
                  "economics": 12,
                  "chemical": 14,
                  "biological": 14,
                  "sport": 11
                },
                "rank": 14
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": 8,
                  "et_rank": null,
                  "lm_rank": 13,
                  "ns_rank": 10,
                  "sm_rank": 9
                },
                "rank": 10
              },
              "2021": {
                "subject": {
                  "ah_rank": 6,
                  "et_rank": null,
                  "lm_rank": 16,
                  "ns_rank": 10,
                  "sm_rank": 9
                },
                "rank": 10
              },
              "2022": {
                "subject": {
                  "ah_rank": 6,
                  "et_rank": null,
                  "lm_rank": 14,
                  "ns_rank": 13,
                  "sm_rank": 8
                },
                "rank": 11
              }
            }
          },
          "SFRatio": "24.13",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Ewha Womans University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 23869,
          "intro": "이화 교육의 목적은 성숙한 기독교적 인격과 헌신적 봉사정신, 그리고 전문적 학술지",
          "name": "이화여자대학교",
          "comRate": "https://www.ewha.ac.kr/ewha/intro/object.do",
          "id": 11
        },
        {
          "website": "https://www.cau.ac.kr/index.do",
          "citation": "https://www.cau.ac.kr/cms/FR_CON/index.do?MEN",
          "tuition": 7907382,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 8,
                  "other": 9,
                  "education": 9,
                  "mathematics": 11,
                  "mechanical": 12,
                  "accounting": 10,
                  "geology": null,
                  "agriculture": 5,
                  "general": 12,
                  "computer": 12,
                  "psychology": 7,
                  "geography": 4,
                  "civil": 10,
                  "physics": 12,
                  "archaeology": null,
                  "communication": 9,
                  "architecture": 9,
                  "chemistry": 12,
                  "art": 9,
                  "law": 9,
                  "business": 10,
                  "languages": 9,
                  "electrical": 12,
                  "medicine": 9,
                  "history": 9,
                  "economics": 10,
                  "chemical": 12,
                  "biological": 12,
                  "sport": 9
                },
                "rank": 12
              },
              "2021": {
                "subject": {
                  "politics": 9,
                  "other": 10,
                  "education": 10,
                  "mathematics": 12,
                  "mechanical": 13,
                  "accounting": 11,
                  "geology": null,
                  "agriculture": 6,
                  "general": 13,
                  "computer": 13,
                  "psychology": 8,
                  "geography": 5,
                  "civil": 11,
                  "physics": 13,
                  "archaeology": null,
                  "communication": 10,
                  "architecture": 10,
                  "chemistry": 13,
                  "art": 10,
                  "law": 10,
                  "business": 11,
                  "languages": 10,
                  "electrical": 13,
                  "medicine": 10,
                  "history": 10,
                  "economics": 11,
                  "chemical": 13,
                  "biological": 13,
                  "sport": 10
                },
                "rank": 13
              },
              "2022": {
                "subject": {
                  "politics": 9,
                  "other": 10,
                  "education": 10,
                  "mathematics": 12,
                  "mechanical": 13,
                  "accounting": 11,
                  "geology": null,
                  "agriculture": 6,
                  "general": 13,
                  "computer": 13,
                  "psychology": 8,
                  "geography": 5,
                  "civil": 11,
                  "physics": 13,
                  "archaeology": null,
                  "communication": 10,
                  "architecture": 10,
                  "chemistry": 13,
                  "art": 10,
                  "law": 10,
                  "business": 11,
                  "languages": 10,
                  "electrical": 13,
                  "medicine": 10,
                  "history": 10,
                  "economics": 11,
                  "chemical": 13,
                  "biological": 13,
                  "sport": 10
                },
                "rank": 13
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": 11,
                  "et_rank": null,
                  "lm_rank": 12,
                  "ns_rank": null,
                  "sm_rank": 10
                },
                "rank": 12
              },
              "2021": {
                "subject": {
                  "ah_rank": 11,
                  "et_rank": 12,
                  "lm_rank": 14,
                  "ns_rank": null,
                  "sm_rank": 10
                },
                "rank": 12
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": 12,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 12
              }
            }
          },
          "SFRatio": "27.27",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Chung-Ang University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 26423,
          "intro": "교육이념\n의에 죽고 참에 살자\n중앙대학교는 의와 참의 정신을 대학의 교육이념으로 ",
          "name": "중앙대학교",
          "comRate": "https://www.cau.ac.kr/cms/FR_CON/index.do?MEN",
          "id": 12
        },
        {
          "website": "http://www.hufs.ac.kr/",
          "citation": "https://www.hufs.ac.kr/",
          "tuition": 7129945,
          "source": {
            "THE": {},
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 11
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 11
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 13
              }
            }
          },
          "SFRatio": "31.99",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Hankuk University of Foreign Studies",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 20602,
          "intro": "한국외국어대학교 교육이념은 자유민주주의 사상을 바탕으로 학생의 개성을 함양하고 지",
          "name": "한국외국어대학교",
          "comRate": "https://www.hufs.ac.kr/",
          "id": 13
        },
        {
          "website": "https://www.catholic.ac.kr/index.do",
          "citation": "https://cukadmin.catholic.ac.kr/cukedu/intro0",
          "tuition": 6997600,
          "source": {
            "THE": {
              "2021": {
                "subject": {
                  "politics": 19,
                  "other": 19,
                  "education": 20,
                  "mathematics": 22,
                  "mechanical": null,
                  "accounting": 21,
                  "geology": 19,
                  "agriculture": null,
                  "general": 22,
                  "computer": 23,
                  "psychology": 17,
                  "geography": null,
                  "civil": null,
                  "physics": 23,
                  "archaeology": null,
                  "communication": 19,
                  "architecture": null,
                  "chemistry": 23,
                  "art": 19,
                  "law": 20,
                  "business": 21,
                  "languages": 20,
                  "electrical": 23,
                  "medicine": 19,
                  "history": 20,
                  "economics": 21,
                  "chemical": 23,
                  "biological": 23,
                  "sport": null
                },
                "rank": 23
              },
              "2022": {
                "subject": {
                  "politics": 16,
                  "other": 17,
                  "education": 17,
                  "mathematics": 19,
                  "mechanical": null,
                  "accounting": 18,
                  "geology": 17,
                  "agriculture": null,
                  "general": 20,
                  "computer": 20,
                  "psychology": 14,
                  "geography": null,
                  "civil": null,
                  "physics": 20,
                  "archaeology": null,
                  "communication": 16,
                  "architecture": null,
                  "chemistry": 20,
                  "art": 17,
                  "law": 17,
                  "business": 18,
                  "languages": 17,
                  "electrical": 20,
                  "medicine": 17,
                  "history": 17,
                  "economics": 18,
                  "chemical": 20,
                  "biological": 20,
                  "sport": null
                },
                "rank": 20
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 15
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 14
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 14
              }
            }
          },
          "SFRatio": "31.97",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "The Catholic University of Korea",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 8600,
          "intro": "인간을 존중하는 전문인 양성\n진리의 보편성 추구\n인간생명 존중의 교육\n학문간의 대",
          "name": "가톨릭대학교",
          "comRate": "https://cukadmin.catholic.ac.kr/cukedu/intro0",
          "id": 14
        },
        {
          "website": "http://www.dongguk.edu/mbs/kr/index.jsp",
          "citation": "http://www.dongguk.ac.kr/mbs/kr/subview.jsp?i",
          "tuition": 7945683,
          "source": {
            "THE": {},
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 13
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 13
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 15
              }
            }
          },
          "SFRatio": "27.24",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Dongguk University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 18902,
          "intro": "건학이념\n불교정신을 바탕으로 학술과 인격을 연마하고 민족과 인류사회 및 자연에 이",
          "name": "동국대학교",
          "comRate": "http://www.dongguk.ac.kr/mbs/kr/subview.jsp?i",
          "id": 15
        },
        {
          "website": "https://sogang.ac.kr/index.do",
          "citation": "https://www.sogang.ac.kr/intro/ideology.html",
          "tuition": 7944546,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 19,
                  "other": null,
                  "education": 20,
                  "mathematics": 22,
                  "mechanical": 23,
                  "accounting": 20,
                  "geology": null,
                  "agriculture": null,
                  "general": null,
                  "computer": 23,
                  "psychology": 16,
                  "geography": null,
                  "civil": null,
                  "physics": 23,
                  "archaeology": null,
                  "communication": 18,
                  "architecture": null,
                  "chemistry": 23,
                  "art": null,
                  "law": 20,
                  "business": 21,
                  "languages": 20,
                  "electrical": 23,
                  "medicine": null,
                  "history": 20,
                  "economics": 21,
                  "chemical": 23,
                  "biological": 23,
                  "sport": null
                },
                "rank": 23
              },
              "2021": {
                "subject": {
                  "politics": 17,
                  "other": null,
                  "education": 18,
                  "mathematics": 20,
                  "mechanical": 21,
                  "accounting": 19,
                  "geology": null,
                  "agriculture": null,
                  "general": null,
                  "computer": 21,
                  "psychology": 15,
                  "geography": null,
                  "civil": null,
                  "physics": 21,
                  "archaeology": null,
                  "communication": 17,
                  "architecture": null,
                  "chemistry": 21,
                  "art": null,
                  "law": 18,
                  "business": 19,
                  "languages": 18,
                  "electrical": 21,
                  "medicine": null,
                  "history": 18,
                  "economics": 19,
                  "chemical": 21,
                  "biological": 21,
                  "sport": null
                },
                "rank": 21
              },
              "2022": {
                "subject": {
                  "politics": 23,
                  "other": null,
                  "education": 24,
                  "mathematics": 26,
                  "mechanical": 26,
                  "accounting": 24,
                  "geology": null,
                  "agriculture": null,
                  "general": null,
                  "computer": 27,
                  "psychology": 19,
                  "geography": null,
                  "civil": null,
                  "physics": 27,
                  "archaeology": null,
                  "communication": 22,
                  "architecture": null,
                  "chemistry": 27,
                  "art": null,
                  "law": 24,
                  "business": 25,
                  "languages": 24,
                  "electrical": 27,
                  "medicine": null,
                  "history": 23,
                  "economics": 25,
                  "chemical": 27,
                  "biological": 27,
                  "sport": null
                },
                "rank": 27
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": 9,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": 16,
                  "sm_rank": 8
                },
                "rank": 14
              },
              "2021": {
                "subject": {
                  "ah_rank": 10,
                  "et_rank": 16,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": 8
                },
                "rank": 15
              },
              "2022": {
                "subject": {
                  "ah_rank": 10,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": 9
                },
                "rank": 16
              }
            }
          },
          "SFRatio": "33.23",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Sogang University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 13290,
          "intro": "교육이념\n서강대학교는 가톨릭 신앙과 예수회 교육 이념을 토대로 대한민국의 교육 정",
          "name": "서강대학교",
          "comRate": "https://www.sogang.ac.kr/intro/ideology.html",
          "id": 16
        },
        {
          "website": "https://www.ajou.ac.kr/kr/index.do",
          "citation": "https://www.ajou.ac.kr/kr/intro/idea.do",
          "tuition": 8262018,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 13,
                  "other": 14,
                  "education": 14,
                  "mathematics": 16,
                  "mechanical": 17,
                  "accounting": 15,
                  "geology": 14,
                  "agriculture": 9,
                  "general": 17,
                  "computer": 17,
                  "psychology": 11,
                  "geography": 8,
                  "civil": 15,
                  "physics": 17,
                  "archaeology": 7,
                  "communication": 13,
                  "architecture": 14,
                  "chemistry": 17,
                  "art": 14,
                  "law": 14,
                  "business": 15,
                  "languages": 14,
                  "electrical": 17,
                  "medicine": 14,
                  "history": 14,
                  "economics": 15,
                  "chemical": 17,
                  "biological": 17,
                  "sport": 14
                },
                "rank": 17
              },
              "2021": {
                "subject": {
                  "politics": 8,
                  "other": 9,
                  "education": 9,
                  "mathematics": 11,
                  "mechanical": 12,
                  "accounting": 10,
                  "geology": 10,
                  "agriculture": 5,
                  "general": 12,
                  "computer": 12,
                  "psychology": 7,
                  "geography": 4,
                  "civil": 10,
                  "physics": 12,
                  "archaeology": 5,
                  "communication": 9,
                  "architecture": 9,
                  "chemistry": 12,
                  "art": 9,
                  "law": 9,
                  "business": 10,
                  "languages": 9,
                  "electrical": 12,
                  "medicine": 9,
                  "history": 9,
                  "economics": 10,
                  "chemical": 12,
                  "biological": 12,
                  "sport": 9
                },
                "rank": 12
              },
              "2022": {
                "subject": {
                  "politics": 8,
                  "other": 9,
                  "education": 9,
                  "mathematics": 11,
                  "mechanical": 12,
                  "accounting": 10,
                  "geology": 10,
                  "agriculture": 5,
                  "general": 12,
                  "computer": 12,
                  "psychology": 7,
                  "geography": 4,
                  "civil": 10,
                  "physics": 12,
                  "archaeology": 5,
                  "communication": 9,
                  "architecture": 9,
                  "chemistry": 12,
                  "art": 9,
                  "law": 9,
                  "business": 10,
                  "languages": 9,
                  "electrical": 12,
                  "medicine": 9,
                  "history": 9,
                  "economics": 10,
                  "chemical": 12,
                  "biological": 12,
                  "sport": 9
                },
                "rank": 12
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 22
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 18
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 17
              }
            }
          },
          "SFRatio": "20.93",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Ajou University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 15636,
          "intro": "아주대학교는 개교 이래 인간존중, 실사구시, 세계일가를 대학이념으로 추구해 왔습니",
          "name": "아주대학교",
          "comRate": "https://www.ajou.ac.kr/kr/intro/idea.do",
          "id": 17
        },
        {
          "website": "https://www.knu.ac.kr/wbbs/",
          "citation": "https://home.knu.ac.kr/HOME/vcd/sub.htm?nav_c",
          "tuition": 4499592,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 17,
                  "other": 18,
                  "education": 18,
                  "mathematics": 20,
                  "mechanical": 21,
                  "accounting": 19,
                  "geology": 18,
                  "agriculture": 12,
                  "general": 21,
                  "computer": 21,
                  "psychology": 15,
                  "geography": 11,
                  "civil": 19,
                  "physics": 21,
                  "archaeology": 11,
                  "communication": 17,
                  "architecture": 18,
                  "chemistry": 21,
                  "art": 18,
                  "law": 18,
                  "business": 19,
                  "languages": 18,
                  "electrical": 21,
                  "medicine": 18,
                  "history": 18,
                  "economics": 19,
                  "chemical": 21,
                  "biological": 21,
                  "sport": 18
                },
                "rank": 21
              },
              "2021": {
                "subject": {
                  "politics": 15,
                  "other": 16,
                  "education": 16,
                  "mathematics": 18,
                  "mechanical": 19,
                  "accounting": 17,
                  "geology": 16,
                  "agriculture": 10,
                  "general": 19,
                  "computer": 19,
                  "psychology": 13,
                  "geography": 9,
                  "civil": 17,
                  "physics": 19,
                  "archaeology": 9,
                  "communication": 15,
                  "architecture": 16,
                  "chemistry": 19,
                  "art": 16,
                  "law": 16,
                  "business": 17,
                  "languages": 16,
                  "electrical": 19,
                  "medicine": 16,
                  "history": 16,
                  "economics": 17,
                  "chemical": 19,
                  "biological": 19,
                  "sport": 16
                },
                "rank": 19
              },
              "2022": {
                "subject": {
                  "politics": 12,
                  "other": 13,
                  "education": 13,
                  "mathematics": 15,
                  "mechanical": 16,
                  "accounting": 14,
                  "geology": 13,
                  "agriculture": 9,
                  "general": 16,
                  "computer": 16,
                  "psychology": 11,
                  "geography": 8,
                  "civil": 14,
                  "physics": 16,
                  "archaeology": 7,
                  "communication": 13,
                  "architecture": 13,
                  "chemistry": 16,
                  "art": 13,
                  "law": 13,
                  "business": 14,
                  "languages": 13,
                  "electrical": 16,
                  "medicine": 13,
                  "history": 13,
                  "economics": 14,
                  "chemical": 16,
                  "biological": 16,
                  "sport": 13
                },
                "rank": 16
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": 10,
                  "ns_rank": 9,
                  "sm_rank": null
                },
                "rank": 23
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 15,
                  "lm_rank": 11,
                  "ns_rank": 9,
                  "sm_rank": null
                },
                "rank": 21
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 16,
                  "lm_rank": 15,
                  "ns_rank": 8,
                  "sm_rank": null
                },
                "rank": 18
              }
            }
          },
          "SFRatio": "21.18",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Kyungpook National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 29350,
          "intro": "첨단\n창의\n기존의 인식 체계나 태도에 물음을 제기하여 새로운 가능성을 열어놓는 역",
          "name": "경북대학교",
          "comRate": "https://home.knu.ac.kr/HOME/vcd/sub.htm?nav_c",
          "id": 18
        },
        {
          "website": "https://www.ulsan.ac.kr/resources/homepage/st",
          "citation": "https://www.ulsan.ac.kr/kor/CMS/Contents/Cont",
          "tuition": 7336868,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 12,
                  "other": 13,
                  "education": 13,
                  "mathematics": 15,
                  "mechanical": 16,
                  "accounting": 14,
                  "geology": 13,
                  "agriculture": null,
                  "general": 16,
                  "computer": 16,
                  "psychology": null,
                  "geography": null,
                  "civil": 14,
                  "physics": 16,
                  "archaeology": null,
                  "communication": null,
                  "architecture": 13,
                  "chemistry": 16,
                  "art": 13,
                  "law": 13,
                  "business": 14,
                  "languages": 13,
                  "electrical": 16,
                  "medicine": 13,
                  "history": 13,
                  "economics": 14,
                  "chemical": 16,
                  "biological": 16,
                  "sport": 13
                },
                "rank": 16
              },
              "2021": {
                "subject": {
                  "politics": 12,
                  "other": 13,
                  "education": 13,
                  "mathematics": 15,
                  "mechanical": 16,
                  "accounting": 14,
                  "geology": 13,
                  "agriculture": null,
                  "general": 16,
                  "computer": 16,
                  "psychology": null,
                  "geography": null,
                  "civil": 14,
                  "physics": 16,
                  "archaeology": null,
                  "communication": null,
                  "architecture": 13,
                  "chemistry": 16,
                  "art": 13,
                  "law": 13,
                  "business": 14,
                  "languages": 13,
                  "electrical": 16,
                  "medicine": 13,
                  "history": 13,
                  "economics": 14,
                  "chemical": 16,
                  "biological": 16,
                  "sport": 13
                },
                "rank": 16
              },
              "2022": {
                "subject": {
                  "politics": 13,
                  "other": 14,
                  "education": 14,
                  "mathematics": 16,
                  "mechanical": 17,
                  "accounting": 15,
                  "geology": 14,
                  "agriculture": null,
                  "general": 17,
                  "computer": 17,
                  "psychology": null,
                  "geography": null,
                  "civil": 15,
                  "physics": 17,
                  "archaeology": null,
                  "communication": null,
                  "architecture": 14,
                  "chemistry": 17,
                  "art": 14,
                  "law": 14,
                  "business": 15,
                  "languages": 14,
                  "electrical": 17,
                  "medicine": 14,
                  "history": 14,
                  "economics": 15,
                  "chemical": 17,
                  "biological": 17,
                  "sport": 14
                },
                "rank": 17
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 16
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 16
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 19
              }
            }
          },
          "SFRatio": "12.3",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "University of Ulsan",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 13915,
          "intro": "건학이념\n울산대학교의 건학이념은 '국가 기간산업의 육성에 필요한 고급기술 인력의 ",
          "name": "울산대학교",
          "comRate": "https://www.ulsan.ac.kr/kor/CMS/Contents/Cont",
          "id": 19
        },
        {
          "website": "https://www.hallym.ac.kr/",
          "citation": "https://www.hallym.ac.kr/hallym_univ/sub04/cP",
          "tuition": 7483254,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 22,
                  "other": 21,
                  "education": null,
                  "mathematics": 25,
                  "mechanical": null,
                  "accounting": 23,
                  "geology": 22,
                  "agriculture": null,
                  "general": 25,
                  "computer": 26,
                  "psychology": 19,
                  "geography": null,
                  "civil": null,
                  "physics": null,
                  "archaeology": null,
                  "communication": 21,
                  "architecture": null,
                  "chemistry": 26,
                  "art": null,
                  "law": 23,
                  "business": 24,
                  "languages": 23,
                  "electrical": 26,
                  "medicine": 21,
                  "history": null,
                  "economics": 24,
                  "chemical": null,
                  "biological": 26,
                  "sport": null
                },
                "rank": 26
              },
              "2021": {
                "subject": {
                  "politics": 23,
                  "other": 23,
                  "education": null,
                  "mathematics": 26,
                  "mechanical": null,
                  "accounting": 25,
                  "geology": 23,
                  "agriculture": null,
                  "general": 26,
                  "computer": 27,
                  "psychology": 21,
                  "geography": null,
                  "civil": null,
                  "physics": null,
                  "archaeology": null,
                  "communication": 22,
                  "architecture": null,
                  "chemistry": 27,
                  "art": null,
                  "law": 24,
                  "business": 25,
                  "languages": 24,
                  "electrical": 27,
                  "medicine": 23,
                  "history": null,
                  "economics": 25,
                  "chemical": null,
                  "biological": 27,
                  "sport": null
                },
                "rank": 27
              },
              "2022": {
                "subject": {
                  "politics": 26,
                  "other": 24,
                  "education": null,
                  "mathematics": 29,
                  "mechanical": null,
                  "accounting": 27,
                  "geology": 26,
                  "agriculture": null,
                  "general": 29,
                  "computer": 30,
                  "psychology": 22,
                  "geography": null,
                  "civil": null,
                  "physics": null,
                  "archaeology": null,
                  "communication": 24,
                  "architecture": null,
                  "chemistry": 30,
                  "art": null,
                  "law": 27,
                  "business": 28,
                  "languages": 27,
                  "electrical": 30,
                  "medicine": 24,
                  "history": null,
                  "economics": 28,
                  "chemical": null,
                  "biological": 30,
                  "sport": null
                },
                "rank": 30
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 19
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 19
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 20
              }
            }
          },
          "SFRatio": "11.34",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Hallym University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 8649,
          "intro": "한림대학은 1982년 건학 이래 '풍부한 인간성과 창조적 지성을 지닌 인재를 양성",
          "name": "한림대학교",
          "comRate": "https://www.hallym.ac.kr/hallym_univ/sub04/cP",
          "id": 20
        },
        {
          "website": "https://www.inha.ac.kr/kr/index.do",
          "citation": "https://cn.inha.ac.kr/kr/933/subview.do",
          "tuition": 7711149,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 15,
                  "other": 16,
                  "education": 16,
                  "mathematics": 18,
                  "mechanical": 19,
                  "accounting": 17,
                  "geology": 16,
                  "agriculture": null,
                  "general": 19,
                  "computer": 19,
                  "psychology": 13,
                  "geography": null,
                  "civil": 17,
                  "physics": 19,
                  "archaeology": 9,
                  "communication": 15,
                  "architecture": 16,
                  "chemistry": 19,
                  "art": 16,
                  "law": 16,
                  "business": 17,
                  "languages": 16,
                  "electrical": 19,
                  "medicine": 16,
                  "history": 16,
                  "economics": 17,
                  "chemical": 19,
                  "biological": 19,
                  "sport": 16
                },
                "rank": 19
              },
              "2021": {
                "subject": {
                  "politics": 14,
                  "other": 15,
                  "education": 15,
                  "mathematics": 17,
                  "mechanical": 18,
                  "accounting": 16,
                  "geology": 15,
                  "agriculture": null,
                  "general": 18,
                  "computer": 18,
                  "psychology": 12,
                  "geography": null,
                  "civil": 16,
                  "physics": 18,
                  "archaeology": 8,
                  "communication": 14,
                  "architecture": 15,
                  "chemistry": 18,
                  "art": 15,
                  "law": 15,
                  "business": 16,
                  "languages": 15,
                  "electrical": 18,
                  "medicine": 15,
                  "history": 15,
                  "economics": 16,
                  "chemical": 18,
                  "biological": 18,
                  "sport": 15
                },
                "rank": 18
              },
              "2022": {
                "subject": {
                  "politics": 20,
                  "other": 20,
                  "education": 21,
                  "mathematics": 23,
                  "mechanical": 23,
                  "accounting": 22,
                  "geology": 21,
                  "agriculture": null,
                  "general": 24,
                  "computer": 24,
                  "psychology": 17,
                  "geography": null,
                  "civil": 20,
                  "physics": 24,
                  "archaeology": 12,
                  "communication": 20,
                  "architecture": 20,
                  "chemistry": 24,
                  "art": 21,
                  "law": 21,
                  "business": 22,
                  "languages": 21,
                  "electrical": 24,
                  "medicine": 20,
                  "history": 20,
                  "economics": 22,
                  "chemical": 24,
                  "biological": 24,
                  "sport": 20
                },
                "rank": 24
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 17
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 14,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 17
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 15,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 21
              }
            }
          },
          "SFRatio": "25.65",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Inha University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 22033,
          "intro": "인격도야, 진리탐구, 사회봉사\n\n인하 대학교는 1954년 조국부강, 민족번영의 염",
          "name": "인하대학교",
          "comRate": "https://cn.inha.ac.kr/kr/933/subview.do",
          "id": 21
        },
        {
          "website": "https://www.jbnu.ac.kr/kor/",
          "citation": "https://wz3.jbnu.ac.kr/dent/8183/subview.do",
          "tuition": 4415150,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 16,
                  "other": 17,
                  "education": 17,
                  "mathematics": 19,
                  "mechanical": 20,
                  "accounting": 18,
                  "geology": 17,
                  "agriculture": 11,
                  "general": 20,
                  "computer": 20,
                  "psychology": 14,
                  "geography": 10,
                  "civil": 18,
                  "physics": 20,
                  "archaeology": 10,
                  "communication": 16,
                  "architecture": 17,
                  "chemistry": 20,
                  "art": 17,
                  "law": 17,
                  "business": 18,
                  "languages": 17,
                  "electrical": 20,
                  "medicine": 17,
                  "history": 17,
                  "economics": 18,
                  "chemical": 20,
                  "biological": 20,
                  "sport": 17
                },
                "rank": 20
              },
              "2021": {
                "subject": {
                  "politics": 26,
                  "other": 25,
                  "education": 26,
                  "mathematics": 29,
                  "mechanical": 28,
                  "accounting": 28,
                  "geology": 26,
                  "agriculture": 17,
                  "general": 28,
                  "computer": 30,
                  "psychology": 22,
                  "geography": 13,
                  "civil": 24,
                  "physics": 29,
                  "archaeology": 15,
                  "communication": 25,
                  "architecture": 24,
                  "chemistry": 30,
                  "art": 25,
                  "law": 26,
                  "business": 28,
                  "languages": 27,
                  "electrical": 29,
                  "medicine": 24,
                  "history": 25,
                  "economics": 28,
                  "chemical": 29,
                  "biological": 30,
                  "sport": 22
                },
                "rank": 30
              },
              "2022": {
                "subject": {
                  "politics": 21,
                  "other": 21,
                  "education": 22,
                  "mathematics": 24,
                  "mechanical": 24,
                  "accounting": 23,
                  "geology": 22,
                  "agriculture": 14,
                  "general": 25,
                  "computer": 25,
                  "psychology": 18,
                  "geography": 12,
                  "civil": 21,
                  "physics": 25,
                  "archaeology": 13,
                  "communication": 21,
                  "architecture": 21,
                  "chemistry": 25,
                  "art": 22,
                  "law": 22,
                  "business": 23,
                  "languages": 22,
                  "electrical": 25,
                  "medicine": 21,
                  "history": 21,
                  "economics": 23,
                  "chemical": 25,
                  "biological": 25,
                  "sport": 21
                },
                "rank": 25
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": 14,
                  "sm_rank": null
                },
                "rank": 20
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 18,
                  "lm_rank": null,
                  "ns_rank": 15,
                  "sm_rank": null
                },
                "rank": 23
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 12,
                  "lm_rank": null,
                  "ns_rank": 12,
                  "sm_rank": null
                },
                "rank": 22
              }
            }
          },
          "SFRatio": "21.17",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Jeonbuk National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 22931,
          "intro": "전북대학교 창학이념 및 교육목표\n전북대학교 창학이념 (건학이념)\n전북대학교는 호남",
          "name": "전북대학교",
          "comRate": "https://wz3.jbnu.ac.kr/dent/8183/subview.do",
          "id": 22
        },
        {
          "website": "http://www.konkuk.ac.kr/do/Index.do",
          "citation": "https://www.konkuk.ac.kr/Administration/70thA",
          "tuition": 8275634,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 10,
                  "other": 11,
                  "education": 11,
                  "mathematics": 13,
                  "mechanical": 14,
                  "accounting": 12,
                  "geology": 11,
                  "agriculture": 7,
                  "general": 14,
                  "computer": 14,
                  "psychology": 9,
                  "geography": 6,
                  "civil": 12,
                  "physics": 14,
                  "archaeology": null,
                  "communication": 11,
                  "architecture": 11,
                  "chemistry": 14,
                  "art": 11,
                  "law": 11,
                  "business": 12,
                  "languages": 11,
                  "electrical": 14,
                  "medicine": 11,
                  "history": 11,
                  "economics": 12,
                  "chemical": 14,
                  "biological": 14,
                  "sport": 11
                },
                "rank": 14
              },
              "2021": {
                "subject": {
                  "politics": 11,
                  "other": 12,
                  "education": 12,
                  "mathematics": 14,
                  "mechanical": 15,
                  "accounting": 13,
                  "geology": 12,
                  "agriculture": 8,
                  "general": 15,
                  "computer": 15,
                  "psychology": 10,
                  "geography": 7,
                  "civil": 13,
                  "physics": 15,
                  "archaeology": null,
                  "communication": 12,
                  "architecture": 12,
                  "chemistry": 15,
                  "art": 12,
                  "law": 12,
                  "business": 13,
                  "languages": 12,
                  "electrical": 15,
                  "medicine": 12,
                  "history": 12,
                  "economics": 13,
                  "chemical": 15,
                  "biological": 15,
                  "sport": 12
                },
                "rank": 15
              },
              "2022": {
                "subject": {
                  "politics": 11,
                  "other": 12,
                  "education": 12,
                  "mathematics": 14,
                  "mechanical": 15,
                  "accounting": 13,
                  "geology": 12,
                  "agriculture": 8,
                  "general": 15,
                  "computer": 15,
                  "psychology": 10,
                  "geography": 7,
                  "civil": 13,
                  "physics": 15,
                  "archaeology": null,
                  "communication": 12,
                  "architecture": 12,
                  "chemistry": 15,
                  "art": 12,
                  "law": 12,
                  "business": 13,
                  "languages": 12,
                  "electrical": 15,
                  "medicine": 12,
                  "history": 12,
                  "economics": 13,
                  "chemical": 15,
                  "biological": 15,
                  "sport": 12
                },
                "rank": 15
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 21
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 20
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 23
              }
            }
          },
          "SFRatio": "34.62",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Konkuk University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 21705,
          "intro": "교육목적\n수월성 있고 조화로운 교육을 통해 세계적 수준의 식견을 갖춘 전인적 인격",
          "name": "건국대학교",
          "comRate": "https://www.konkuk.ac.kr/Administration/70thA",
          "id": 23
        },
        {
          "website": "https://www.pusan.ac.kr/kor/Main.do",
          "citation": "https://www.pusan.ac.kr/kor/CMS/Contents/Cont",
          "tuition": 4461885,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 11,
                  "other": 12,
                  "education": 12,
                  "mathematics": 14,
                  "mechanical": 15,
                  "accounting": 13,
                  "geology": 12,
                  "agriculture": 8,
                  "general": 15,
                  "computer": 15,
                  "psychology": 10,
                  "geography": 7,
                  "civil": 13,
                  "physics": 15,
                  "archaeology": 6,
                  "communication": 12,
                  "architecture": 12,
                  "chemistry": 15,
                  "art": 12,
                  "law": 12,
                  "business": 13,
                  "languages": 12,
                  "electrical": 15,
                  "medicine": 12,
                  "history": 12,
                  "economics": 13,
                  "chemical": 15,
                  "biological": 15,
                  "sport": 12
                },
                "rank": 15
              },
              "2021": {
                "subject": {
                  "politics": 16,
                  "other": 17,
                  "education": 17,
                  "mathematics": 19,
                  "mechanical": 20,
                  "accounting": 18,
                  "geology": 17,
                  "agriculture": 11,
                  "general": 20,
                  "computer": 20,
                  "psychology": 14,
                  "geography": 10,
                  "civil": 18,
                  "physics": 20,
                  "archaeology": 10,
                  "communication": 16,
                  "architecture": 17,
                  "chemistry": 20,
                  "art": 17,
                  "law": 17,
                  "business": 18,
                  "languages": 17,
                  "electrical": 20,
                  "medicine": 17,
                  "history": 17,
                  "economics": 18,
                  "chemical": 20,
                  "biological": 20,
                  "sport": 17
                },
                "rank": 20
              },
              "2022": {
                "subject": {
                  "politics": 14,
                  "other": 15,
                  "education": 15,
                  "mathematics": 17,
                  "mechanical": 18,
                  "accounting": 16,
                  "geology": 15,
                  "agriculture": 10,
                  "general": 18,
                  "computer": 18,
                  "psychology": 12,
                  "geography": 9,
                  "civil": 16,
                  "physics": 18,
                  "archaeology": 8,
                  "communication": 14,
                  "architecture": 15,
                  "chemistry": 18,
                  "art": 15,
                  "law": 15,
                  "business": 16,
                  "languages": 15,
                  "electrical": 18,
                  "medicine": 15,
                  "history": 15,
                  "economics": 16,
                  "chemical": 18,
                  "biological": 18,
                  "sport": 15
                },
                "rank": 18
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": 16,
                  "ns_rank": 8,
                  "sm_rank": null
                },
                "rank": 18
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 11,
                  "lm_rank": 17,
                  "ns_rank": 8,
                  "sm_rank": null
                },
                "rank": 22
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": 10,
                  "lm_rank": 16,
                  "ns_rank": 9,
                  "sm_rank": null
                },
                "rank": 24
              }
            }
          },
          "SFRatio": "21.24",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Pusan National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 30013,
          "intro": "교육이념\n우리 대학은 진리, 자유, 봉사의 정신을 실현하는 참 대학으로서 인류애를",
          "name": "부산대학교",
          "comRate": "https://www.pusan.ac.kr/kor/CMS/Contents/Cont",
          "id": 24
        },
        {
          "website": "http://www.sejong.ac.kr/",
          "citation": "http://www.sejong.ac.kr/sejong/idea_01.html?m",
          "tuition": 7891281,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": null,
                  "other": 8,
                  "education": 8,
                  "mathematics": 10,
                  "mechanical": 11,
                  "accounting": 9,
                  "geology": 9,
                  "agriculture": 4,
                  "general": 11,
                  "computer": 11,
                  "psychology": null,
                  "geography": null,
                  "civil": 9,
                  "physics": 11,
                  "archaeology": null,
                  "communication": 8,
                  "architecture": 8,
                  "chemistry": 11,
                  "art": 8,
                  "law": 8,
                  "business": 9,
                  "languages": 8,
                  "electrical": 11,
                  "medicine": 8,
                  "history": 8,
                  "economics": 9,
                  "chemical": 11,
                  "biological": 11,
                  "sport": 8
                },
                "rank": 11
              },
              "2021": {
                "subject": {
                  "politics": null,
                  "other": 7,
                  "education": 7,
                  "mathematics": 9,
                  "mechanical": 9,
                  "accounting": 8,
                  "geology": 8,
                  "agriculture": 4,
                  "general": 9,
                  "computer": 9,
                  "psychology": null,
                  "geography": null,
                  "civil": 8,
                  "physics": 9,
                  "archaeology": null,
                  "communication": 7,
                  "architecture": 7,
                  "chemistry": 9,
                  "art": 7,
                  "law": 7,
                  "business": 8,
                  "languages": 7,
                  "electrical": 9,
                  "medicine": 7,
                  "history": 7,
                  "economics": 8,
                  "chemical": 9,
                  "biological": 9,
                  "sport": 7
                },
                "rank": 9
              },
              "2022": {
                "subject": {
                  "politics": null,
                  "other": 7,
                  "education": 7,
                  "mathematics": 9,
                  "mechanical": 9,
                  "accounting": 8,
                  "geology": 8,
                  "agriculture": 4,
                  "general": 9,
                  "computer": 9,
                  "psychology": null,
                  "geography": null,
                  "civil": 8,
                  "physics": 9,
                  "archaeology": null,
                  "communication": 7,
                  "architecture": 7,
                  "chemistry": 9,
                  "art": 7,
                  "law": 7,
                  "business": 8,
                  "languages": 7,
                  "electrical": 9,
                  "medicine": 7,
                  "history": 7,
                  "economics": 8,
                  "chemical": 9,
                  "biological": 9,
                  "sport": 7
                },
                "rank": 9
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 24
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 24
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 25
              }
            }
          },
          "SFRatio": "27.94",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Sejong University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 15369,
          "intro": "세종 7대 핵심역량 지표 및 정의\n논리비판적 사고역량\t\n당면한 문제의 핵심을 파악",
          "name": "세종대학교",
          "comRate": "http://www.sejong.ac.kr/sejong/idea_01.html?m",
          "id": 25
        },
        {
          "website": "https://www.jnu.ac.kr/jnumain.aspx",
          "citation": "https://www.jnu.ac.kr/MainIntro/Intro/develop",
          "tuition": 4167612,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 14,
                  "other": 15,
                  "education": 15,
                  "mathematics": 17,
                  "mechanical": 18,
                  "accounting": 16,
                  "geology": 15,
                  "agriculture": 10,
                  "general": 18,
                  "computer": 18,
                  "psychology": 12,
                  "geography": 9,
                  "civil": 16,
                  "physics": 18,
                  "archaeology": 8,
                  "communication": 14,
                  "architecture": 15,
                  "chemistry": 18,
                  "art": 15,
                  "law": 15,
                  "business": 16,
                  "languages": 15,
                  "electrical": 18,
                  "medicine": 15,
                  "history": 15,
                  "economics": 16,
                  "chemical": 18,
                  "biological": 18,
                  "sport": 15
                },
                "rank": 18
              },
              "2021": {
                "subject": {
                  "politics": 13,
                  "other": 14,
                  "education": 14,
                  "mathematics": 16,
                  "mechanical": 17,
                  "accounting": 15,
                  "geology": 14,
                  "agriculture": 9,
                  "general": 17,
                  "computer": 17,
                  "psychology": 11,
                  "geography": 8,
                  "civil": 15,
                  "physics": 17,
                  "archaeology": 7,
                  "communication": 13,
                  "architecture": 14,
                  "chemistry": 17,
                  "art": 14,
                  "law": 14,
                  "business": 15,
                  "languages": 14,
                  "electrical": 17,
                  "medicine": 14,
                  "history": 14,
                  "economics": 15,
                  "chemical": 17,
                  "biological": 17,
                  "sport": 14
                },
                "rank": 17
              },
              "2022": {
                "subject": {
                  "politics": 17,
                  "other": 18,
                  "education": 18,
                  "mathematics": 20,
                  "mechanical": 20,
                  "accounting": 19,
                  "geology": 18,
                  "agriculture": 12,
                  "general": 21,
                  "computer": 21,
                  "psychology": 15,
                  "geography": 10,
                  "civil": 18,
                  "physics": 21,
                  "archaeology": 10,
                  "communication": 17,
                  "architecture": 17,
                  "chemistry": 21,
                  "art": 18,
                  "law": 18,
                  "business": 19,
                  "languages": 18,
                  "electrical": 21,
                  "medicine": 18,
                  "history": 18,
                  "economics": 19,
                  "chemical": 21,
                  "biological": 21,
                  "sport": 17
                },
                "rank": 21
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": 11,
                  "ns_rank": 13,
                  "sm_rank": null
                },
                "rank": 26
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": 13,
                  "ns_rank": 14,
                  "sm_rank": null
                },
                "rank": 25
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 26
              }
            }
          },
          "SFRatio": "20.28",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Chonnam National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 23103,
          "intro": "대학비전\n교육\n인문학적 상상력과 이공학적 창의력, 미래선도형 교육체제, 취업과 창",
          "name": "전남대학교",
          "comRate": "https://www.jnu.ac.kr/MainIntro/Intro/develop",
          "id": 26
        },
        {
          "website": "https://plus.cnu.ac.kr/html/kr/",
          "citation": "https://plus.cnu.ac.kr/html/kr/sub01/sub01_01",
          "tuition": 4361154,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 21,
                  "other": 20,
                  "education": 22,
                  "mathematics": 24,
                  "mechanical": 25,
                  "accounting": 22,
                  "geology": 21,
                  "agriculture": 14,
                  "general": 24,
                  "computer": 25,
                  "psychology": 18,
                  "geography": 12,
                  "civil": 22,
                  "physics": 25,
                  "archaeology": 13,
                  "communication": 20,
                  "architecture": 21,
                  "chemistry": 25,
                  "art": 21,
                  "law": 22,
                  "business": 23,
                  "languages": 22,
                  "electrical": 25,
                  "medicine": 20,
                  "history": 22,
                  "economics": 23,
                  "chemical": 25,
                  "biological": 25,
                  "sport": 21
                },
                "rank": 25
              },
              "2021": {
                "subject": {
                  "politics": 21,
                  "other": 21,
                  "education": 22,
                  "mathematics": 24,
                  "mechanical": 24,
                  "accounting": 23,
                  "geology": 21,
                  "agriculture": 14,
                  "general": 24,
                  "computer": 25,
                  "psychology": 19,
                  "geography": 11,
                  "civil": 21,
                  "physics": 25,
                  "archaeology": 13,
                  "communication": 20,
                  "architecture": 20,
                  "chemistry": 25,
                  "art": 21,
                  "law": 22,
                  "business": 23,
                  "languages": 22,
                  "electrical": 25,
                  "medicine": 21,
                  "history": 22,
                  "economics": 23,
                  "chemical": 25,
                  "biological": 25,
                  "sport": 19
                },
                "rank": 25
              },
              "2022": {
                "subject": {
                  "politics": 18,
                  "other": 19,
                  "education": 19,
                  "mathematics": 21,
                  "mechanical": 21,
                  "accounting": 20,
                  "geology": 19,
                  "agriculture": 13,
                  "general": 22,
                  "computer": 22,
                  "psychology": 16,
                  "geography": 11,
                  "civil": 19,
                  "physics": 22,
                  "archaeology": 11,
                  "communication": 18,
                  "architecture": 18,
                  "chemistry": 22,
                  "art": 19,
                  "law": 19,
                  "business": 20,
                  "languages": 19,
                  "electrical": 22,
                  "medicine": 19,
                  "history": 19,
                  "economics": 20,
                  "chemical": 22,
                  "biological": 22,
                  "sport": 18
                },
                "rank": 22
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": 17,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 27
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": 15,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 26
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": 13,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 27
              }
            }
          },
          "SFRatio": "23.38",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Chungnam National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 24055,
          "intro": "교육이념\n본교는 국가와 인류사회의 발전에 필요한 학술의 심오한 이론과 그 응용방법",
          "name": "충남대학교",
          "comRate": "https://plus.cnu.ac.kr/html/kr/sub01/sub01_01",
          "id": 27
        },
        {
          "website": "https://www.dankook.ac.kr/web/kor",
          "citation": "https://www.dankook.ac.kr/web/kor/-571",
          "tuition": 8024010,
          "source": {
            "THE": {},
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 28
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 27
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 28
              }
            }
          },
          "SFRatio": "32.09",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Dankook University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 15723,
          "intro": "교육이념 및 목표\n구국·자주·자립을 교육이념으로 하는 우리대학은 교시(校是)인 진",
          "name": "단국대학교",
          "comRate": "https://www.dankook.ac.kr/web/kor/-571",
          "id": 28
        },
        {
          "website": "https://www.uos.ac.kr/main.do?epTicket=LOG",
          "citation": "https://www.uos.ac.kr/kor/html/auos/vision/pr",
          "tuition": 2394440,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 18,
                  "other": null,
                  "education": 19,
                  "mathematics": 21,
                  "mechanical": 22,
                  "accounting": null,
                  "geology": 19,
                  "agriculture": null,
                  "general": 22,
                  "computer": 22,
                  "psychology": null,
                  "geography": null,
                  "civil": 20,
                  "physics": 22,
                  "archaeology": null,
                  "communication": null,
                  "architecture": 19,
                  "chemistry": 22,
                  "art": 19,
                  "law": 19,
                  "business": 20,
                  "languages": 19,
                  "electrical": 22,
                  "medicine": null,
                  "history": 19,
                  "economics": 20,
                  "chemical": 22,
                  "biological": 22,
                  "sport": 19
                },
                "rank": 22
              },
              "2021": {
                "subject": {
                  "politics": 29,
                  "other": null,
                  "education": 29,
                  "mathematics": 32,
                  "mechanical": 31,
                  "accounting": null,
                  "geology": 28,
                  "agriculture": null,
                  "general": 31,
                  "computer": 33,
                  "psychology": null,
                  "geography": null,
                  "civil": 27,
                  "physics": 32,
                  "archaeology": null,
                  "communication": null,
                  "architecture": 27,
                  "chemistry": 33,
                  "art": 28,
                  "law": 29,
                  "business": 31,
                  "languages": 30,
                  "electrical": 32,
                  "medicine": null,
                  "history": 28,
                  "economics": 31,
                  "chemical": 32,
                  "biological": 33,
                  "sport": 25
                },
                "rank": 33
              },
              "2022": {
                "subject": {
                  "politics": 22,
                  "other": null,
                  "education": 23,
                  "mathematics": 25,
                  "mechanical": 25,
                  "accounting": null,
                  "geology": 23,
                  "agriculture": null,
                  "general": 26,
                  "computer": 26,
                  "psychology": null,
                  "geography": null,
                  "civil": 22,
                  "physics": 26,
                  "archaeology": null,
                  "communication": null,
                  "architecture": 22,
                  "chemistry": 26,
                  "art": 23,
                  "law": 23,
                  "business": 24,
                  "languages": 23,
                  "electrical": 26,
                  "medicine": null,
                  "history": 22,
                  "economics": 24,
                  "chemical": 26,
                  "biological": 26,
                  "sport": 22
                },
                "rank": 26
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 25
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 28
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 29
              }
            }
          },
          "SFRatio": "28.16",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "University of Seoul",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 12589,
          "intro": "교육목적\n본교는 학술의 심오한 이론과 그 응용방법을 교수 연구하며, 지도적 인격을",
          "name": "서울시립대학교",
          "comRate": "https://www.uos.ac.kr/kor/html/auos/vision/pr",
          "id": 29
        },
        {
          "website": "https://www.yu.ac.kr/index.php",
          "citation": "https://ental.yu.ac.kr/main/intro/yu-vision.d",
          "tuition": 7458296,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 20,
                  "other": 19,
                  "education": 21,
                  "mathematics": 23,
                  "mechanical": 24,
                  "accounting": 21,
                  "geology": 20,
                  "agriculture": 13,
                  "general": 23,
                  "computer": 24,
                  "psychology": 17,
                  "geography": null,
                  "civil": 21,
                  "physics": 24,
                  "archaeology": 12,
                  "communication": 19,
                  "architecture": 20,
                  "chemistry": 24,
                  "art": 20,
                  "law": 21,
                  "business": 22,
                  "languages": 21,
                  "electrical": 24,
                  "medicine": 19,
                  "history": 21,
                  "economics": 22,
                  "chemical": 24,
                  "biological": 24,
                  "sport": 20
                },
                "rank": 24
              },
              "2021": {
                "subject": {
                  "politics": 18,
                  "other": 18,
                  "education": 19,
                  "mathematics": 21,
                  "mechanical": 22,
                  "accounting": 20,
                  "geology": 18,
                  "agriculture": 12,
                  "general": 21,
                  "computer": 22,
                  "psychology": 16,
                  "geography": null,
                  "civil": 19,
                  "physics": 22,
                  "archaeology": 11,
                  "communication": 18,
                  "architecture": 18,
                  "chemistry": 22,
                  "art": 18,
                  "law": 19,
                  "business": 20,
                  "languages": 19,
                  "electrical": 22,
                  "medicine": 18,
                  "history": 19,
                  "economics": 20,
                  "chemical": 22,
                  "biological": 22,
                  "sport": 18
                },
                "rank": 22
              },
              "2022": {
                "subject": {
                  "politics": 15,
                  "other": 16,
                  "education": 16,
                  "mathematics": 18,
                  "mechanical": 19,
                  "accounting": 17,
                  "geology": 16,
                  "agriculture": 11,
                  "general": 19,
                  "computer": 19,
                  "psychology": 13,
                  "geography": null,
                  "civil": 17,
                  "physics": 19,
                  "archaeology": 9,
                  "communication": 15,
                  "architecture": 16,
                  "chemistry": 19,
                  "art": 16,
                  "law": 16,
                  "business": 17,
                  "languages": 16,
                  "electrical": 19,
                  "medicine": 16,
                  "history": 16,
                  "economics": 17,
                  "chemical": 19,
                  "biological": 19,
                  "sport": 16
                },
                "rank": 19
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 30
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 29
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 30
              }
            }
          },
          "SFRatio": "24.98",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Yeungnam University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 23683,
          "intro": "3대 목표\n사회에 공헌하는 Y형 인재 양성\n실용적 지식뿐만 아니라 인간에 대한 이",
          "name": "영남대학교",
          "comRate": "https://ental.yu.ac.kr/main/intro/yu-vision.d",
          "id": 30
        },
        {
          "website": "https://www.chungbuk.ac.kr/site/www/main.do",
          "citation": "https://www.chungbuk.ac.kr/site/www/sub.do?ke",
          "tuition": 4273533,
          "source": {
            "THE": {
              "2021": {
                "subject": {
                  "politics": 20,
                  "other": 20,
                  "education": 21,
                  "mathematics": 23,
                  "mechanical": 23,
                  "accounting": 22,
                  "geology": 20,
                  "agriculture": 13,
                  "general": 23,
                  "computer": 24,
                  "psychology": 18,
                  "geography": null,
                  "civil": 20,
                  "physics": 24,
                  "archaeology": 12,
                  "communication": null,
                  "architecture": 19,
                  "chemistry": 24,
                  "art": 20,
                  "law": 21,
                  "business": 22,
                  "languages": 21,
                  "electrical": 24,
                  "medicine": 20,
                  "history": 21,
                  "economics": 22,
                  "chemical": 24,
                  "biological": 24,
                  "sport": null
                },
                "rank": 24
              },
              "2022": {
                "subject": {
                  "politics": 24,
                  "other": 22,
                  "education": 25,
                  "mathematics": 27,
                  "mechanical": 27,
                  "accounting": 25,
                  "geology": 24,
                  "agriculture": 15,
                  "general": 27,
                  "computer": 28,
                  "psychology": 20,
                  "geography": null,
                  "civil": 23,
                  "physics": 28,
                  "archaeology": 14,
                  "communication": null,
                  "architecture": 23,
                  "chemistry": 28,
                  "art": 24,
                  "law": 25,
                  "business": 26,
                  "languages": 25,
                  "electrical": 28,
                  "medicine": 22,
                  "history": 24,
                  "economics": 26,
                  "chemical": 28,
                  "biological": 28,
                  "sport": null
                },
                "rank": 28
              }
            },
            "QS": {
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 31
              }
            }
          },
          "SFRatio": "23.3",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Chungbuk National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 17705,
          "intro": "교육목표\n우리 대학의 교육목표는 진리, 정의 개척의 건학이념을 바탕으로 “학문발전",
          "name": "충북대학교",
          "comRate": "https://www.chungbuk.ac.kr/site/www/sub.do?ke",
          "id": 31
        },
        {
          "website": "https://www.jejunu.ac.kr/main",
          "citation": "https://www.jejunu.ac.kr/schoolinfo/univinfo/",
          "tuition": 3927230,
          "source": {
            "THE": {
              "2021": {
                "subject": {
                  "politics": 25,
                  "other": 24,
                  "education": 25,
                  "mathematics": 28,
                  "mechanical": 27,
                  "accounting": 27,
                  "geology": 25,
                  "agriculture": 16,
                  "general": null,
                  "computer": 29,
                  "psychology": null,
                  "geography": null,
                  "civil": 23,
                  "physics": 28,
                  "archaeology": null,
                  "communication": 24,
                  "architecture": 23,
                  "chemistry": 29,
                  "art": 24,
                  "law": null,
                  "business": 27,
                  "languages": 26,
                  "electrical": null,
                  "medicine": null,
                  "history": 24,
                  "economics": 27,
                  "chemical": 28,
                  "biological": 29,
                  "sport": 21
                },
                "rank": 29
              },
              "2022": {
                "subject": {
                  "politics": 27,
                  "other": 25,
                  "education": 27,
                  "mathematics": 30,
                  "mechanical": 29,
                  "accounting": 28,
                  "geology": 27,
                  "agriculture": 17,
                  "general": null,
                  "computer": 31,
                  "psychology": null,
                  "geography": null,
                  "civil": 25,
                  "physics": 30,
                  "archaeology": null,
                  "communication": 25,
                  "architecture": 25,
                  "chemistry": 31,
                  "art": 26,
                  "law": null,
                  "business": 29,
                  "languages": 28,
                  "electrical": null,
                  "medicine": null,
                  "history": 26,
                  "economics": 29,
                  "chemical": 30,
                  "biological": 31,
                  "sport": 23
                },
                "rank": 31
              }
            },
            "QS": {
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 32
              }
            }
          },
          "SFRatio": "18.57",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Jeju National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 12033,
          "intro": "설립이념\n진리, 정의, 창조\n\n비전\n기본에 충실한 대학, 미래를 준비하는 대학\n\n",
          "name": "제주대학교",
          "comRate": "https://www.jejunu.ac.kr/schoolinfo/univinfo/",
          "id": 32
        },
        {
          "website": "https://www.kangwon.ac.kr/www/index.do",
          "citation": "https://www.kangwon.ac.kr/www/contents.do?key",
          "tuition": 4070070,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 24,
                  "other": 22,
                  "education": 24,
                  "mathematics": 27,
                  "mechanical": 27,
                  "accounting": 25,
                  "geology": 24,
                  "agriculture": 15,
                  "general": 27,
                  "computer": 28,
                  "psychology": 20,
                  "geography": null,
                  "civil": 23,
                  "physics": 27,
                  "archaeology": null,
                  "communication": 23,
                  "architecture": 23,
                  "chemistry": 28,
                  "art": 23,
                  "law": 25,
                  "business": 26,
                  "languages": 25,
                  "electrical": 28,
                  "medicine": 22,
                  "history": 23,
                  "economics": 26,
                  "chemical": 27,
                  "biological": 28,
                  "sport": 23
                },
                "rank": 28
              },
              "2021": {
                "subject": {
                  "politics": 27,
                  "other": 26,
                  "education": 27,
                  "mathematics": 30,
                  "mechanical": 29,
                  "accounting": 29,
                  "geology": 27,
                  "agriculture": 18,
                  "general": 29,
                  "computer": 31,
                  "psychology": 23,
                  "geography": null,
                  "civil": 25,
                  "physics": 30,
                  "archaeology": null,
                  "communication": 26,
                  "architecture": 25,
                  "chemistry": 31,
                  "art": 26,
                  "law": 27,
                  "business": 29,
                  "languages": 28,
                  "electrical": 30,
                  "medicine": 25,
                  "history": 26,
                  "economics": 29,
                  "chemical": 30,
                  "biological": 31,
                  "sport": 23
                },
                "rank": 31
              },
              "2022": {
                "subject": {
                  "politics": 28,
                  "other": 26,
                  "education": 28,
                  "mathematics": 31,
                  "mechanical": 30,
                  "accounting": 29,
                  "geology": 28,
                  "agriculture": 18,
                  "general": 30,
                  "computer": 32,
                  "psychology": 23,
                  "geography": null,
                  "civil": 26,
                  "physics": 31,
                  "archaeology": null,
                  "communication": 26,
                  "architecture": 26,
                  "chemistry": 32,
                  "art": 27,
                  "law": 28,
                  "business": 30,
                  "languages": 29,
                  "electrical": 31,
                  "medicine": 25,
                  "history": 27,
                  "economics": 30,
                  "chemical": 31,
                  "biological": 32,
                  "sport": 24
                },
                "rank": 32
              }
            },
            "QS": {
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 33
              }
            }
          },
          "SFRatio": "21.39",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Kangwon National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 17114,
          "intro": "교육목표\n실사구시(實事求是) 건학이념을 바탕으로 '개인의 자아실현 및 공동체 진보",
          "name": "강원대학교",
          "comRate": "https://www.kangwon.ac.kr/www/contents.do?key",
          "id": 33
        },
        {
          "website": "https://www.kookmin.ac.kr/user/index.do",
          "citation": "https://www.kookmin.ac.kr/comm/menu/user/dcc4",
          "tuition": 7927821,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 25,
                  "other": null,
                  "education": 25,
                  "mathematics": 28,
                  "mechanical": 28,
                  "accounting": 26,
                  "geology": null,
                  "agriculture": 16,
                  "general": 28,
                  "computer": 29,
                  "psychology": 21,
                  "geography": null,
                  "civil": 24,
                  "physics": 28,
                  "archaeology": 14,
                  "communication": 24,
                  "architecture": 24,
                  "chemistry": 29,
                  "art": 24,
                  "law": 26,
                  "business": 27,
                  "languages": 26,
                  "electrical": 29,
                  "medicine": null,
                  "history": 24,
                  "economics": 27,
                  "chemical": 28,
                  "biological": 29,
                  "sport": 24
                },
                "rank": 29
              },
              "2021": {
                "subject": {
                  "politics": 28,
                  "other": null,
                  "education": 28,
                  "mathematics": 31,
                  "mechanical": 30,
                  "accounting": 30,
                  "geology": null,
                  "agriculture": 19,
                  "general": 30,
                  "computer": 32,
                  "psychology": 24,
                  "geography": null,
                  "civil": 26,
                  "physics": 31,
                  "archaeology": 16,
                  "communication": 27,
                  "architecture": 26,
                  "chemistry": 32,
                  "art": 27,
                  "law": 28,
                  "business": 30,
                  "languages": 29,
                  "electrical": 31,
                  "medicine": null,
                  "history": 27,
                  "economics": 30,
                  "chemical": 31,
                  "biological": 32,
                  "sport": 24
                },
                "rank": 32
              },
              "2022": {
                "subject": {
                  "politics": 29,
                  "other": null,
                  "education": 29,
                  "mathematics": 32,
                  "mechanical": 31,
                  "accounting": 30,
                  "geology": null,
                  "agriculture": 19,
                  "general": 31,
                  "computer": 33,
                  "psychology": 24,
                  "geography": null,
                  "civil": 27,
                  "physics": 32,
                  "archaeology": 16,
                  "communication": 27,
                  "architecture": 27,
                  "chemistry": 33,
                  "art": 28,
                  "law": 29,
                  "business": 31,
                  "languages": 30,
                  "electrical": 32,
                  "medicine": null,
                  "history": 28,
                  "economics": 31,
                  "chemical": 32,
                  "biological": 33,
                  "sport": 25
                },
                "rank": 33
              }
            },
            "QS": {
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 34
              }
            }
          },
          "SFRatio": "29.49",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Kookmin University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 19702,
          "intro": "01 불망구국(不忘救國) 정신\n\n국민대학교의 설립 주체인 해공을 비롯한 대한민국 ",
          "name": "국민대학교",
          "comRate": "https://www.kookmin.ac.kr/comm/menu/user/dcc4",
          "id": 34
        },
        {
          "website": "https://www.pknu.ac.kr/main",
          "citation": "https://ko.wikipedia.org/wiki/%EB%B6%80%EA%B2",
          "tuition": 4034793,
          "source": {
            "THE": {},
            "QS": {
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 35
              }
            }
          },
          "SFRatio": "30.33",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Pukyong National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 18656,
          "intro": "대학이념·교육목적\n1996년 통합 당시 부경대학교의 대학이념 “열린 사고로 인류의",
          "name": "부경대학교",
          "comRate": "https://ko.wikipedia.org/wiki/%EB%B6%80%EA%B2",
          "id": 35
        },
        {
          "website": "https://www.seoultech.ac.kr/index.jsp",
          "citation": "https://www.seoultech.ac.kr/intro/univ/idea_m",
          "tuition": 5458040,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": null,
                  "other": 23,
                  "education": null,
                  "mathematics": 29,
                  "mechanical": 29,
                  "accounting": null,
                  "geology": 25,
                  "agriculture": null,
                  "general": 29,
                  "computer": 30,
                  "psychology": null,
                  "geography": null,
                  "civil": 25,
                  "physics": 29,
                  "archaeology": null,
                  "communication": null,
                  "architecture": 25,
                  "chemistry": 30,
                  "art": 25,
                  "law": null,
                  "business": 28,
                  "languages": 27,
                  "electrical": 30,
                  "medicine": null,
                  "history": null,
                  "economics": null,
                  "chemical": 29,
                  "biological": null,
                  "sport": 25
                },
                "rank": 30
              },
              "2021": {
                "subject": {
                  "politics": null,
                  "other": 27,
                  "education": null,
                  "mathematics": 33,
                  "mechanical": 32,
                  "accounting": null,
                  "geology": 29,
                  "agriculture": null,
                  "general": 32,
                  "computer": 34,
                  "psychology": null,
                  "geography": null,
                  "civil": 28,
                  "physics": 33,
                  "archaeology": null,
                  "communication": null,
                  "architecture": 28,
                  "chemistry": 34,
                  "art": 29,
                  "law": null,
                  "business": 32,
                  "languages": 31,
                  "electrical": 33,
                  "medicine": null,
                  "history": null,
                  "economics": null,
                  "chemical": 33,
                  "biological": null,
                  "sport": 26
                },
                "rank": 34
              },
              "2022": {
                "subject": {
                  "politics": null,
                  "other": 27,
                  "education": null,
                  "mathematics": 33,
                  "mechanical": 32,
                  "accounting": null,
                  "geology": 29,
                  "agriculture": null,
                  "general": 32,
                  "computer": 34,
                  "psychology": null,
                  "geography": null,
                  "civil": 28,
                  "physics": 33,
                  "archaeology": null,
                  "communication": null,
                  "architecture": 28,
                  "chemistry": 34,
                  "art": 29,
                  "law": null,
                  "business": 32,
                  "languages": 31,
                  "electrical": 33,
                  "medicine": null,
                  "history": null,
                  "economics": null,
                  "chemical": 33,
                  "biological": null,
                  "sport": 26
                },
                "rank": 34
              }
            },
            "QS": {
              "2020": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 29
              },
              "2021": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 30
              },
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 36
              }
            }
          },
          "SFRatio": "30.4",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Seoul National University of Science and Tech",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 12462,
          "intro": "대학 이념\n조국과 인류의 미래에 기여하는 세계속의 대학\n\n3대 교육목표\n1. 통합",
          "name": "서울과학기술대학교",
          "comRate": "https://www.seoultech.ac.kr/intro/univ/idea_m",
          "id": 36
        },
        {
          "website": "https://www.sookmyung.ac.kr/sookmyungkr/index",
          "citation": "https://www.sookmyung.ac.kr/sookmyungkr/923/s",
          "tuition": 8075638,
          "source": {
            "THE": {},
            "QS": {
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 37
              }
            }
          },
          "SFRatio": "29.81",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Sookmyung Women's University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 12760,
          "intro": "교육이념\n정숙, 현명, 정대를 지향하는 여성교육과 민족의 정통성과 주체성을 확립하",
          "name": "숙명여자대학교",
          "comRate": "https://www.sookmyung.ac.kr/sookmyungkr/923/s",
          "id": 37
        },
        {
          "website": "https://www.ysu.ac.kr/kor/Main.do",
          "citation": "https://www3.ysu.ac.kr/Sub_about/corporate01.",
          "tuition": 6762079,
          "source": {
            "THE": {},
            "QS": {
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 38
              }
            }
          },
          "SFRatio": "22.95",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Youngsan University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 2341,
          "intro": "건학이념\n1. 원융무애 : '나'와 '나 아닌 것'의 둘이 아님을 깨달아 자유를 ",
          "name": "영산대학교",
          "comRate": "https://www3.ysu.ac.kr/Sub_about/corporate01.",
          "id": 38
        },
        {
          "website": "https://www.hongik.ac.kr/index.do",
          "citation": "https://www.hongik.ac.kr/contents/www/cor/phi",
          "tuition": 8333478,
          "source": {
            "THE": {},
            "QS": {
              "2022": {
                "subject": {
                  "ah_rank": null,
                  "et_rank": null,
                  "lm_rank": null,
                  "ns_rank": null,
                  "sm_rank": null
                },
                "rank": 39
              }
            }
          },
          "SFRatio": "32.08",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Hongik University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 17743,
          "intro": "건학이념\n1. 홍익인간 : 폭넓은 안목과 소통능력을 갖추어 민주시민으로서 자신의 ",
          "name": "홍익대학교",
          "comRate": "https://www.hongik.ac.kr/contents/www/cor/phi",
          "id": 39
        },
        {
          "website": "https://www.inu.ac.kr/mbshome/mbs/inu/index.d",
          "citation": "https://www.inu.ac.kr/mbshome/mbs/inu/subview",
          "tuition": 4632119,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 23,
                  "other": null,
                  "education": 23,
                  "mathematics": 26,
                  "mechanical": 26,
                  "accounting": 24,
                  "geology": 23,
                  "agriculture": null,
                  "general": 26,
                  "computer": 27,
                  "psychology": null,
                  "geography": null,
                  "civil": null,
                  "physics": 26,
                  "archaeology": null,
                  "communication": 22,
                  "architecture": 22,
                  "chemistry": 27,
                  "art": 22,
                  "law": 24,
                  "business": 25,
                  "languages": 24,
                  "electrical": 27,
                  "medicine": null,
                  "history": null,
                  "economics": 25,
                  "chemical": 26,
                  "biological": 27,
                  "sport": 22
                },
                "rank": 27
              },
              "2021": {
                "subject": {
                  "politics": 24,
                  "other": null,
                  "education": 24,
                  "mathematics": 27,
                  "mechanical": 26,
                  "accounting": 26,
                  "geology": 24,
                  "agriculture": null,
                  "general": 27,
                  "computer": 28,
                  "psychology": null,
                  "geography": null,
                  "civil": null,
                  "physics": 27,
                  "archaeology": null,
                  "communication": 23,
                  "architecture": 22,
                  "chemistry": 28,
                  "art": 23,
                  "law": 25,
                  "business": 26,
                  "languages": 25,
                  "electrical": 28,
                  "medicine": null,
                  "history": null,
                  "economics": 26,
                  "chemical": 27,
                  "biological": 28,
                  "sport": 20
                },
                "rank": 28
              },
              "2022": {
                "subject": {
                  "politics": 19,
                  "other": null,
                  "education": 20,
                  "mathematics": 22,
                  "mechanical": 22,
                  "accounting": 21,
                  "geology": 20,
                  "agriculture": null,
                  "general": 23,
                  "computer": 23,
                  "psychology": null,
                  "geography": null,
                  "civil": null,
                  "physics": 23,
                  "archaeology": null,
                  "communication": 19,
                  "architecture": 19,
                  "chemistry": 23,
                  "art": 20,
                  "law": 20,
                  "business": 21,
                  "languages": 20,
                  "electrical": 23,
                  "medicine": null,
                  "history": null,
                  "economics": 21,
                  "chemical": 23,
                  "biological": 23,
                  "sport": 19
                },
                "rank": 23
              }
            },
            "QS": {}
          },
          "SFRatio": "26.93",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Incheon National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 13195,
          "intro": "비전 : 세계의 인재를 미래의 리더로 양성하는 대학\n\n목표 : 실용학문 중심 연구",
          "name": "인천대학교",
          "comRate": "https://www.inu.ac.kr/mbshome/mbs/inu/subview",
          "id": 40
        },
        {
          "website": "https://www.gnu.ac.kr/main/main.do",
          "citation": "https://namu.wiki/w/%EA%B2%BD%EC%83%81%EA%B5%",
          "tuition": 4083198,
          "source": {
            "THE": {
              "2021": {
                "subject": {
                  "politics": 22,
                  "other": 22,
                  "education": 23,
                  "mathematics": 25,
                  "mechanical": 25,
                  "accounting": 24,
                  "geology": 22,
                  "agriculture": 15,
                  "general": 25,
                  "computer": 26,
                  "psychology": 20,
                  "geography": 12,
                  "civil": 22,
                  "physics": 26,
                  "archaeology": 14,
                  "communication": 21,
                  "architecture": 21,
                  "chemistry": 26,
                  "art": 22,
                  "law": 23,
                  "business": 24,
                  "languages": 23,
                  "electrical": 26,
                  "medicine": 22,
                  "history": 23,
                  "economics": 24,
                  "chemical": 26,
                  "biological": 26,
                  "sport": null
                },
                "rank": 26
              },
              "2022": {
                "subject": {
                  "politics": 25,
                  "other": 23,
                  "education": 26,
                  "mathematics": 28,
                  "mechanical": 28,
                  "accounting": 26,
                  "geology": 25,
                  "agriculture": 16,
                  "general": 28,
                  "computer": 29,
                  "psychology": 21,
                  "geography": 13,
                  "civil": 24,
                  "physics": 29,
                  "archaeology": 15,
                  "communication": 23,
                  "architecture": 24,
                  "chemistry": 29,
                  "art": 25,
                  "law": 26,
                  "business": 27,
                  "languages": 26,
                  "electrical": 29,
                  "medicine": 23,
                  "history": 25,
                  "economics": 27,
                  "chemical": 29,
                  "biological": 29,
                  "sport": null
                },
                "rank": 29
              }
            },
            "QS": {}
          },
          "SFRatio": "17.08",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Gyeongsang National University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 17469,
          "intro": "경상남도 진주시, 통영시, 창원시에 소재한 국립대학이며, 1910년 공립진주실업학",
          "name": "경상국립대학교",
          "comRate": "https://namu.wiki/w/%EA%B2%BD%EC%83%81%EA%B5%",
          "id": 41
        },
        {
          "website": "https://www.sch.ac.kr/",
          "citation": "https://home.sch.ac.kr/sch/01/010700.jsp",
          "tuition": 7830448,
          "source": {
            "THE": {
              "2022": {
                "subject": {
                  "politics": 30,
                  "other": 28,
                  "education": 30,
                  "mathematics": 34,
                  "mechanical": 33,
                  "accounting": 31,
                  "geology": null,
                  "agriculture": null,
                  "general": 33,
                  "computer": 35,
                  "psychology": 25,
                  "geography": null,
                  "civil": null,
                  "physics": 34,
                  "archaeology": null,
                  "communication": 28,
                  "architecture": 29,
                  "chemistry": 35,
                  "art": 30,
                  "law": 30,
                  "business": 33,
                  "languages": 32,
                  "electrical": 34,
                  "medicine": 26,
                  "history": null,
                  "economics": 32,
                  "chemical": 34,
                  "biological": 34,
                  "sport": 27
                },
                "rank": 35
              }
            },
            "QS": {}
          },
          "SFRatio": "12.63",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Soonchunhyang University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 11742,
          "intro": "사회공헌형 창의인재 양성\n1. 공감형 인재\n사회공감, 타인공감, 자기공감\n2. 통",
          "name": "순천향대학교",
          "comRate": "https://home.sch.ac.kr/sch/01/010700.jsp",
          "id": 42
        },
        {
          "website": "https://ssu.ac.kr/",
          "citation": "https://ssu.ac.kr/%ed%95%99%ea%b5%90%ec%86%8c",
          "tuition": 7928397,
          "source": {
            "THE": {
              "2020": {
                "subject": {
                  "politics": 26,
                  "other": null,
                  "education": 26,
                  "mathematics": 30,
                  "mechanical": 30,
                  "accounting": 27,
                  "geology": 26,
                  "agriculture": null,
                  "general": 30,
                  "computer": 31,
                  "psychology": 22,
                  "geography": null,
                  "civil": null,
                  "physics": 30,
                  "archaeology": null,
                  "communication": 25,
                  "architecture": 26,
                  "chemistry": 31,
                  "art": 26,
                  "law": 27,
                  "business": 29,
                  "languages": 28,
                  "electrical": 31,
                  "medicine": null,
                  "history": 25,
                  "economics": 28,
                  "chemical": 30,
                  "biological": 30,
                  "sport": null
                },
                "rank": 31
              },
              "2021": {
                "subject": {
                  "politics": 30,
                  "other": null,
                  "education": 30,
                  "mathematics": 34,
                  "mechanical": 33,
                  "accounting": 31,
                  "geology": 30,
                  "agriculture": null,
                  "general": 33,
                  "computer": 35,
                  "psychology": 25,
                  "geography": null,
                  "civil": null,
                  "physics": 34,
                  "archaeology": null,
                  "communication": 28,
                  "architecture": 29,
                  "chemistry": 35,
                  "art": 30,
                  "law": 30,
                  "business": 33,
                  "languages": 32,
                  "electrical": 34,
                  "medicine": null,
                  "history": 29,
                  "economics": 32,
                  "chemical": 34,
                  "biological": 34,
                  "sport": null
                },
                "rank": 35
              },
              "2022": {
                "subject": {
                  "politics": 31,
                  "other": null,
                  "education": 31,
                  "mathematics": 35,
                  "mechanical": 34,
                  "accounting": 32,
                  "geology": 30,
                  "agriculture": null,
                  "general": 34,
                  "computer": 36,
                  "psychology": 26,
                  "geography": null,
                  "civil": null,
                  "physics": 35,
                  "archaeology": null,
                  "communication": 29,
                  "architecture": 30,
                  "chemistry": 36,
                  "art": 31,
                  "law": 31,
                  "business": 34,
                  "languages": 33,
                  "electrical": 35,
                  "medicine": null,
                  "history": 29,
                  "economics": 33,
                  "chemical": 35,
                  "biological": 35,
                  "sport": null
                },
                "rank": 36
              }
            },
            "QS": {}
          },
          "SFRatio": "34.72",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Soongsil University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 17708,
          "intro": "진리와 봉사\n숭실대학교는 한국 최초의 근대 대학으로서, 기독교 정신을 바탕으로 진",
          "name": "숭실대학교",
          "comRate": "https://ssu.ac.kr/%ed%95%99%ea%b5%90%ec%86%8c",
          "id": 43
        },
        {
          "website": "http://www.hangkong.ac.kr/web/index.do",
          "citation": "http://www.hangkong.ac.kr/web/pages/gc66045h.",
          "tuition": 8465834,
          "source": {
            "THE": {
              "2022": {
                "subject": {
                  "politics": null,
                  "other": null,
                  "education": null,
                  "mathematics": null,
                  "mechanical": 35,
                  "accounting": 33,
                  "geology": null,
                  "agriculture": null,
                  "general": 35,
                  "computer": 37,
                  "psychology": null,
                  "geography": null,
                  "civil": null,
                  "physics": null,
                  "archaeology": null,
                  "communication": null,
                  "architecture": null,
                  "chemistry": null,
                  "art": null,
                  "law": null,
                  "business": 35,
                  "languages": null,
                  "electrical": 36,
                  "medicine": null,
                  "history": null,
                  "economics": 34,
                  "chemical": null,
                  "biological": null,
                  "sport": null
                },
                "rank": 37
              }
            },
            "QS": {}
          },
          "SFRatio": "28.46",
          "qs_subjects": [
            "ah_rank",
            "et_rank",
            "lm_rank",
            "ns_rank",
            "sm_rank"
          ],
          "engName": "Korea Aerospace University",
          "the_subjects": [
            "accounting",
            "agriculture",
            "archaeology",
            "architecture",
            "art"
          ],
          "TotStud": 4838,
          "intro": "건학정신 : 개척자적 정신을 배양하고, 지성인으로서의 교양과 첨단의 과학기술로 무",
          "name": "한국항공대학교",
          "comRate": "http://www.hangkong.ac.kr/web/pages/gc66045h.",
          "id": 44
        }
      ]
}



 


        onBeforeMount(() => {
            // getData()
            universities.value = data.universities
            console.log(universities.value[0].source.QS)
            years.value = Object.keys(universities.value[0].source.QS).sort((y1, y2) => y1 > y2 ? -1 : 1)
            loading.value = false
        })

        const getData = async () => {
            const res = await axios.get()
            universities.value = res.data
            years.value = Object.keys(res.data[0].source.QS).sort((y1, y2) => y1 > y2 ? -1 : 1)
            loading.value = false
        }

        const filteredUniversity = computed(() => {
            if (searchUniversity.value) {   
                return universities.value.filter(university => {  //  대학교 이름 검색 시
                    return university.name.includes(searchUniversity.value)
                })
            }

            if (selectedSubject.value) {   // 학과 검색 시
                return [...universities.value.filter(university => { return university.source[selectedSource.value][selectedYear.value]})]
                .sort((u1, u2) => u1.source[selectedSource.value][selectedYear.value].subject[selectedSubject.value] < u2.source[selectedSource.value][selectedYear.value].subject[selectedSubject.value])
            }
            
            // 그 외
            return [...universities.value.filter(university => {return university.source[selectedSource.value][selectedYear.value]})]  // 해당 연도 데이터 없는 리스트 제거
            .sort((u1, u2) => u1.source[selectedSource.value][selectedYear.value].rank < u2.source[selectedSource.value][selectedYear.value].rank ? -1 : 1)   // 리스트 sort
        })

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
            filteredUniversity,
            selectedYear,
            selectedSource,
            searchUniversity,
            selectedSubject,
            loading,
            theActive,
            qsActive,
            sourceSvg,
            arrowDown,
            search

        }
    },
}
</script>



<style lang="scss" scoped>
.website-title {
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 90px;
    width: 100vw;
    height: 450px;

    &::before {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url("@/assets/images/university_1.jpg");
        background-position: center;
        background-repeat: no-repeat;
        filter: brightness(80%);
    }

    .title-content {
        text-align: center;
        position: relative;

        &:nth-child(1) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 60%;
            min-width: max-content;

            .title {
                @include engTitleFont();
                font-size: 8rem;
                color: #fff
            }

            .title-description {
                @include engContentFont();
                width: 70%;
                text-align: left;
            }
        }

        &:nth-child(2) {
            @include centerElement();
            width: 30%;

            img {
                height: 90%;
            }
        }
    }
}

.main {
    width: max(70%, 900px);
    min-height: 900px;
    margin: 0 auto 200px auto;
}
.filter-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    margin-bottom: 25px;

    .source-filter {
        display: flex;
        width: 30%;
        height: 100%;

        .source {
            @extend %sourceBtn;
            display: flex;
            align-items: center;
            width: 48%;

            .source_img {
                @include centerElement();
                height: 100%;
                width: 35px;
                margin: 0 10px;
                
                img {
                    min-width: 70%;
                    height: 70%;
                }
            }
            
            span {
                @include engContentFont();
                height: fit-content;
                width: 80px;
                font-size: 1.7rem;
                color: $mainColor;
                padding: 0 max(1vw, 15px);

            }
            
            &:nth-child(1) {
                &.active {
                    background: $theColor;
                }
            }
            
            &:nth-child(2) {
                &.active {
                    background: $qsColor;
                }
            }
        }

    }

    .year-filter {
        width: 15%;
        height: 100%;
        position: relative;
        
        
        select {
            @include engContentFont();
            cursor: pointer;
            appearance: none;
            width: 100%;
            height: 100%;
            font-size: 1.7rem;
            font-weight: bold;
            color: $mainColor;
            padding: 10px 10px 0 10px;
            border: none;
            border-bottom: 3px solid $mainColor;
            transition: all 0.3s ease;

            &:hover {
                background: #f2f2f2;
            }
        }

        .year-arrow {
            position: absolute;
            top: 55%;
            right: 5px;
            transform: translateY(-50%);
            width: 25px;
            height: 25px;
            pointer-events: none;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .search-filter {
        position: relative;
        width: 30%;
        height: 100%;
        
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
            -webkit-appearance:none;
        }
        input {
            @include korContentFont();
            font-size: 24px;
            font-weight: 600;
            color: $mainColor;
            padding: 8px 10px 0 10px;
            border: none;
            border-bottom: 3px solid $mainColor;
            width: 100%;
            height: 100%;
            transition: all 0.3s ease;

            &:hover {
                background: #f2f2f2;
            }
        }

        .search-icon {
            position: absolute;
            top: 55%;
            right: 5px;
            transform: translateY(-50%);
            pointer-events: none;
            width: 35px;
            height: 35px;


            img {
                width: 100%;
                height: 100%;
                filter: invert(16%) sepia(10%) saturate(31%) hue-rotate(323deg) brightness(101%) contrast(90%);
            }
        }
    }

    .subject-filter {
        position: relative;
        width: 15%;
        height: 100%;

        select {
            @include korContentFont();
            cursor: pointer;
            appearance: none;
            width: 100%;
            height: 100%;
            font-size: 22px;
            font-weight: bold;
            color: $mainColor;
            padding: 10px 10px 0 10px;
            border: none;
            border-bottom: 3px solid $mainColor;
            transition: all 0.3s ease;

            &:hover {
                background: #f2f2f2;
            }
        }

        .subject-arrow {
            position: absolute;
            top: 55%;
            right: 5px;
            transform: translateY(-50%);
            width: 25px;
            height: 25px;
            pointer-events: none;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}

.title-bar-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    font-size: 1.3rem;
    border-radius: 5px;
    background: $mainColor;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .title-bar-content {
        @include korContentFont();
        font-weight: bold;
        display: flex;
        color: white;


        &:nth-child(1) {
            width: 60%;
            height: 100%;
        }
    
        &:nth-child(2) {
            @include centerElement();
            min-width: 200px;
            height: 100%;
            
        }

        .title-bar-left {

            &:nth-child(1) {
                @include centerElement();
                width: 20%;
            }

            &:nth-child(2) {
                width: 35%;
            }

            &:nth-child(3) {
                display: flex;
                align-items: center;
                width: 45%;
            }
        }
    }
    
}

.university-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    margin: 1rem 0;
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
        background: #f2f2f2;
    }
    
    
    .university-content {
        @include korContentFont();
        font-weight: bold;
        font-size: 1.5rem;
        
        &:nth-child(1) {
            display: flex;
            width: 60%;
            height: 100%;

            p {
                @include centerElement();
                width: 20%;
            }

            .university-logo {
                display: flex;
                align-items: center;
                width: 35%;
                height: 100%;
                padding-left: 2rem;

                img {
                    min-width: 80px;
                    max-height: 90px;
                }
            }

            .university-name {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;

                p {
                    width: fit-content;

                    &:nth-child(1) {
                        color: $mainColor;
                        font-size: 1.5rem;
                    }

                    &:nth-child(2) {
                        color: #898989;
                        font-size: 1rem;
                    }
                }
            }

        }
    
        &:nth-child(2) {
            @include centerElement();
            min-width: 200px;
            height: 100%;
        }
    }
}

</style>