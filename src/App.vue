<template>
    <Navbar />

    <div class="container">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" :key="$route.fullPath"></component>
            </keep-alive>
        </router-view>
    </div>
</template>


<script>
import Navbar from '@/components/NavbarPage.vue'
import { ref, onBeforeMount, watch, watchEffect } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'


export default {
    components: {
        Navbar,
    },
    setup() {
        const store = useStore()
        const data = {
            "universities": [
                {
                    "uni_id": 1,
                    "name": "서울대학교",
                    "engName": "Seoul National University",
                    "citation": "https://www.snu.ac.kr/about/overview/vision",
                    "compRate": "5.6",
                    "intro": "창의성 및 인성교육 강화를 위한 자율적이고 융합적인 교육체계\n\n전공 간 벽을 낮추는 융합 L자형 교육체계 도입과 삶의 핵심적 주제에 대한 학제적 탐구와 비판적이고 창의적인 사고와 심층적 토론을 통해 협력적 실천 능력 배양을 목표로 다양한 학문적 접근 기회를 제공합니다. 학생자율교육과정, 학생설계전공과 융합 주제 강좌의 심층 있는 토론을 통하여 다양한 관점을 상호보완 할 수 있도록 도와줍니다.\n\n데이터사이언스와 전문분야 지식을 갖춘 디지털 혁신인재 양성, ‘데이터사이언스 대학원’\n\n모든 학문에 데이터사이언스 기반 교육을 제공하는 전 세계 학계의 흐름에 따라 데이터사이언스 전문대학원 신설을 통해 해당 분야에 대한 공통적이고 표준화된 교육과정을 개발함으로써 새로운 교육 모델을 제시하고 있습니다. 글로벌 시대에 선제적으로 대응할 수 있도록 학문 전분야에 경계를 뛰어넘는 초학제적 연구의 허브(hub)성격을 지향합니다.\n\n나눔의 선순환 및 국내외 사회공헌활동을 통한 사회 속의 대학 구현\n\n다양한 사회공헌활동 발굴을 통해 나눔을 실천하고 봉사하는 인재를 양성합니다. 교육과 연계한 사회공헌 참여를 통해 공헌활동 체험의 기회를 제공하고 사회에 폭넓은 기여를 할 수 있습니다. 이처럼 다양한 활동을 통해 학생들은 자원봉사 · 세계시민 · 인권의 개념을 알아가면서 다양성을 이해하게 되며 냉철한 이성과 따뜻한 가슴을 가진 ‘샤눔형(서울대+나눔)’ 인재로 성장합니다.\n\n미래형 스마트 멀티캠퍼스 구축\n\n제4차 산업혁명을 선도하고 혁신 성장 동력을 확보하기 위한 글로벌 R&D 캠퍼스가 열립니다. 무인이동체(자동차 · 선박 · 항공) 분야를 구축하여 미래 성장 동력을 창출합니다.\n신개념 ICT를 통한 캠퍼스 혁신을 통해서 미래 교육환경 변화에 대응하고 에너지 절약을 지향하는 친환경 스마트 캠퍼스를 구축해 나갑니다.",
                    "totStud": 34917,
                    "tuition": 6011785,
                    "website": "https://www.snu.ac.kr/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 3,
                            "gloRank": 317,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 1,
                            "gloRank": 281,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 1,
                            "gloRank": 295,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 1,
                            "gloRank": 179,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 2,
                            "gloRank": 86,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 2,
                            "gloRank": 87,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 3,
                            "gloRank": 162,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 1,
                            "gloRank": 90,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 1,
                            "gloRank": 13,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 2,
                            "gloRank": 170,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 1,
                            "gloRank": 198,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 1,
                            "gloRank": 89,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 1,
                            "gloRank": 91,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 1,
                            "gloRank": 381,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 1,
                            "gloRank": 98,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 1,
                            "gloRank": 330,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 1,
                            "gloRank": 248,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 1,
                            "gloRank": 135,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 1,
                            "gloRank": 54,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 1,
                            "gloRank": 78,
                            "year": 2023
                        }
                    ],
                    "sfratio": "15.33"
                },
                {
                    "uni_id": 8,
                    "name": "한국과학기술원",
                    "engName": "Korea Advanced Institute of Science and Technology",
                    "citation": "https://www.kaist.ac.kr/kr/html/kaist/010101.html",
                    "compRate": "6.3",
                    "intro": "KAIST는 과학기술을 통한 경제발전이라는 정부의 목표 아래 국내 최초의 연구중심 이공계 특수대학원으로 1971년 설립됐다. 정부는 과학기술원 설립과 운영을 위한 특별법을 제정해 최신식 장비·우수한 교수진 및 학생을 위한 교육비 지원과 병역에 대한 면제 조치를 적용할 수 있는 과학기술처 산하 교육 기관을 설립하기로 했다. 이처럼 대담하고 창조적이면서도 현실적인 계획을 가능하게 한 배경에는 다음 세 가지 요소가 작용했다. 경제발전의 원동력을 이공계교육과 과학기술의 연구개발에서 찾았던 지도자들의 비전과 노력 · 이를 실행시킨 정부의 확고한 의지 · 그리고 미국 국제개발처(USAID)의 차관이 바로 그 핵심이다. 1970년대 초반까지도 우리나라의 사회, 경제, 교육 환경은 여전히 열악해 수많은 인재가 배움의 길을 찾아 해외로 떠났으며 대부분 다시 돌아오지 않았다. KAIST 출범은 대한민국의 인재를 대한민국이 교육하여 국가발전을 위해 역량을 발휘할 수 있는 기반을 마련하는 계기가 되었으며 그 결과 ‘한강의 기적’으로 비유되는 놀라운 초고속 경제성장을 뒷받침했다.",
                    "totStud": 14736,
                    "tuition": 6866000,
                    "website": "https://www.kaist.ac.kr/kr/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 11,
                            "gloRank": 723,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 2,
                            "gloRank": 322,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 3,
                            "gloRank": 479,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 8,
                            "gloRank": 499,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 1,
                            "gloRank": 80,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 15,
                            "gloRank": 454,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 2,
                            "gloRank": 157,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 10,
                            "gloRank": 512,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 1,
                            "gloRank": 98,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 4,
                            "gloRank": 493,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 4,
                            "gloRank": 339,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 6,
                            "gloRank": 435,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 12,
                            "gloRank": 1417,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 4,
                            "gloRank": 294,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 4,
                            "gloRank": 538,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 3,
                            "gloRank": 371,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 7,
                            "gloRank": 737,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 2,
                            "gloRank": 106,
                            "year": 2023
                        }
                    ],
                    "sfratio": "22.16"
                },
                {
                    "uni_id": 15,
                    "name": "고려대학교",
                    "engName": "Korea University",
                    "citation": "https://cn.korea.edu/mbshome/mbs/university/subview.do?id=university_010602000000",
                    "compRate": "10.8",
                    "intro": "고려대학교는 2005년 개교 100주년을 전후하여 국내뿐만 아니라 세계적인 대학으로 거듭났다. 1990년대 중후반 국제화 준비기를 거치며 다진 인프라를 디딤돌로 삼아 영어강의를 대폭 확대하였으며, 외국인 교원을 충원하였다. 아울러 2004년 세계대학의 다자간 협력체인 U21(Universitas 21) 회원교가 되었고 2005년에는 세계대학 총장 포럼을 개최하기도 하였다. 2008년에는 환태평양 대학교류협의회(APRU, Association of Pacific Rim Universities)에 가입하였으며 현재까지 90여 개 국가 · 850여 개 대학 및 기관과 학술교류협정을 맺었다. 고려대학교는 현재 국제화 전진기지로서 중국인민대학(중국인민대학) · 캐나다 UBC(The University of British Columbia) 등 세계적인 명문대학 내에 학생 기숙사를 보유하고 있으며 안암 캠퍼스에는 외국인 교수 및 학생 전용 기숙사인 CJ International House · Anam Global House를 갖추고 있다. 고려대학교는 명실공히 민족의 대학으로서 그 고유한 정체성을 보존하면서도 세계적인 연구중심대학으로 나아가기 위한 국제적 인지도와 실력을 갖추어나가고 있다.",
                    "totStud": 33938,
                    "tuition": 8279357,
                    "website": "http://www.korea.edu/mbshome/mbs/en/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 1,
                            "gloRank": 235,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 4,
                            "gloRank": 460,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 6,
                            "gloRank": 708,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 7,
                            "gloRank": 458,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 3,
                            "gloRank": 158,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 9,
                            "gloRank": 363,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 4,
                            "gloRank": 166,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 3,
                            "gloRank": 374,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 5,
                            "gloRank": 234,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 3,
                            "gloRank": 279,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 3,
                            "gloRank": 395,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 3,
                            "gloRank": 291,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 3,
                            "gloRank": 260,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 2,
                            "gloRank": 413,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 3,
                            "gloRank": 288,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 16,
                            "gloRank": 1591,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 2,
                            "gloRank": 314,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 3,
                            "gloRank": 339,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 17,
                            "gloRank": 788,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 3,
                            "gloRank": 174,
                            "year": 2023
                        }
                    ],
                    "sfratio": "22.46"
                },
                {
                    "uni_id": 22,
                    "name": "연세대학교",
                    "engName": "Yonsei University",
                    "citation": "https://www.yonsei.ac.kr/sc/intro/ideology.jsp",
                    "compRate": "10.7",
                    "intro": "연세 건학정신\n연세대학교는 ‘너희가 내 말에 거하면 참 내 제자가 되고 진리를 알지니 진리가 너희를 자유케 하리라’ 는 성경말씀(요한복음 8:31~32)을 바탕으로 진리와 자유의 정신을 체득한 지도자를 양성한다.\n\n연세이념\n연세대학교는 기독교의 가르침을 바탕으로 진리와 자유의 정신에 따라 사회에 이바지할 지도자를 기르는 배움터이다.\n연세인은 겨레와 인류의 문화유산을 이어받고 창의력과 비판력을 길러 학문의 발전을 이끌어간다. 또한 정의감과 기백을 드높이고 열린 마음으로 이웃을 위해 봉사하며 · 인류의 번영에 이바지한다. 우리 연세인은 이러한 사명을 깊이 새겨 세계 속에 자랑스러운 연세 정신을 구현하기 위해 지도적 역량을 힘껏 발휘한다.",
                    "totStud": 36433,
                    "tuition": 9152134,
                    "website": "https://www.yonsei.ac.kr/sc/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 10,
                            "gloRank": 696,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 3,
                            "gloRank": 438,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 2,
                            "gloRank": 453,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 2,
                            "gloRank": 182,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 4,
                            "gloRank": 186,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 17,
                            "gloRank": 493,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 9,
                            "gloRank": 371,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 6,
                            "gloRank": 479,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 2,
                            "gloRank": 24,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 7,
                            "gloRank": 429,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 2,
                            "gloRank": 323,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 2,
                            "gloRank": 270,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 2,
                            "gloRank": 144,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 3,
                            "gloRank": 471,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 2,
                            "gloRank": 232,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 6,
                            "gloRank": 731,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 7,
                            "gloRank": 580,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 4,
                            "gloRank": 392,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 7,
                            "gloRank": 360,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 4,
                            "gloRank": 209,
                            "year": 2023
                        }
                    ],
                    "sfratio": "21.05"
                },
                {
                    "uni_id": 29,
                    "name": "포항공과대학교",
                    "engName": "Pohang University of Science and Technology",
                    "citation": "https://www.postech.ac.kr/about-postech/introduction-to-postech/founding-tenets/",
                    "compRate": "7.1",
                    "intro": "건학이념\n포항공과대학은 우리나라와 인류사회 발전에 절실히 필요한 과학과 기술의 심오한 이론과 광범위한 응용방법을 깊이 있게 연구하고 · 소수의 영재를 모아 질 높은 교육을 실시함으로써 지식과 지성을 겸비한 국제적 수준의 고급인재를 양성함과 아울러  산·학·연 협동의 구체적인 실현을 통하여 연구한 결과를 산업체에 전파함으로써 사회와 인류에 봉사할 목적으로 설립되었다.\n이러한 목적에 따라 포항공과대학은 세계적인 대학들과 긴밀히 협력하여 기초과학과 공학 각 분야의 첨단적인 연구에 중점을 두는 한편 소재산업 관련 연구에서는 세계적인 중심지로 발전하고자 한다.\n또한 성실하고 창의적이며 진취적 기상을 지닌 지성인을 양성하기 위하여 전문교육뿐만 아니라 전인교육을 강조하며 · 인류 복지향상을 위하여 산학협동의 폭을 세계의 전 산업체로 확대함으로써 세계 속의 대학으로 발전하고자 한다.",
                    "totStud": 4311,
                    "tuition": 5613500,
                    "website": "https://www.postech.ac.kr/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 4,
                            "gloRank": 335,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 6,
                            "gloRank": 518,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 12,
                            "gloRank": 453,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 18,
                            "gloRank": 565,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 7,
                            "gloRank": 307,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 14,
                            "gloRank": 630,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 4,
                            "gloRank": 308,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 14,
                            "gloRank": 1186,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 14,
                            "gloRank": 689,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 19,
                            "gloRank": 1033,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 8,
                            "gloRank": 837,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 3,
                            "gloRank": 488,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 12,
                            "gloRank": 958,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 7,
                            "gloRank": 350,
                            "year": 2023
                        }
                    ],
                    "sfratio": "15.02"
                },
                {
                    "uni_id": 36,
                    "name": "성균관대학교",
                    "engName": "Sungkyunkwan University",
                    "citation": "https://www.skku.edu/skku/about/s620/sub04_01.do",
                    "compRate": "16.7",
                    "intro": "건학이념\n수기치인(修己治人)\n성균관대학교는 인간의 존엄성을 토대로 자기 완성과 인류평화의 달성을 목표로 하는 修己治人의 儒敎精神을 건학이념으로 하고 있다. 유교정신은 현실생활에 있어서의 實踐道德과 철저한 人本主義 思想에 바탕을 두고 있으며, 인격도야와 학문연마를 통하여 人倫大道를 밝히고 인류공동의 理念具現에 공헌할 수 있는 國家棟樑의 人材를 길러내는데, 교육의 목표를 두고 있다.\n\n교육은 인간이 타고난 天賦의 德目을 계발해서 참되고 착하고 아름다움에 기본을 둔 올바른 價値觀을 정립하는데 기여해야 하며 인간에게 부여된 역사적 사명의 자각에서 빛나는 내일을 향하여 새로운 문화의 창조에 기여해야 한다. 교육은 또한 인간이 지닌 특성을 열어주고 최대한으로 북돋아 주어서 自己完成을 실현시킬 수 있도록 해야 하며, 政治·經濟·文化 등 각 분야에 걸쳐 균형된 발전을 기약하고 진정한 삶의 指標와 社會正義의 소재를 천착(穿鑿) 확인함으로써 궁극적으로는 전인류가 함께 지향하고 있는 理想社會 建設을 목표로 삼아야 한다. 이것이 본교의 교육지침이자 이념이며, 유교사상의 근본정신이다.",
                    "totStud": 30755,
                    "tuition": 8397663,
                    "website": "https://www.skku.edu/skku/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 14,
                            "gloRank": 822,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 5,
                            "gloRank": 476,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 7,
                            "gloRank": 916,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 6,
                            "gloRank": 444,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 7,
                            "gloRank": 311,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 27,
                            "gloRank": 669,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 6,
                            "gloRank": 247,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 2,
                            "gloRank": 279,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 12,
                            "gloRank": 581,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 7,
                            "gloRank": 666,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 5,
                            "gloRank": 408,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 4,
                            "gloRank": 336,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 4,
                            "gloRank": 1067,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 5,
                            "gloRank": 383,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 17,
                            "gloRank": 1659,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 4,
                            "gloRank": 455,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 2,
                            "gloRank": 330,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 6,
                            "gloRank": 243,
                            "year": 2023
                        }
                    ],
                    "sfratio": "20.17"
                },
                {
                    "uni_id": 43,
                    "name": "한양대학교",
                    "engName": "Hanyang University",
                    "citation": "https://www.hycu.ac.kr/comm/menu/user/1893bc65f367baa1aab507f02cc4e21d/content/index.do#:~:text=%ED%95%9C%EC%96%91%ED%95%99%EC%9B%90%20%EA%B1%B4%ED%95%99%EC%9D%B4%EB%85%90,%EC%8B%A4%EC%B2%9C%EC%9E%90%EB%A5%BC%20%EA%B8%B0%EB%A5%B4%EB%8A%94%EB%8D%B0%20%EC%9E%88%EB%8B%A4.",
                    "compRate": "18.9",
                    "intro": "한양학원의 건학정신은, 학생들로 하여금 사랑을 이해하고 실천 할 수 있도록 교육하여 근면, 정직, 겸손, 봉사할 수 있는 인간형성을 도모하고, 숭고한 학문 정신을 드높여 나만을 위한 것이 아니라 지역사회, 나라와 겨레, 나아가 인류를 위해 이바지하는 위대한 사랑의 실천자를 기르는 데 있다.\n\n한양학원의 이와 같은 건학정신은 대한민국 교육법 제1조에 명시된 홍익 인간의 이념에 입각한 개인의 인격 완성, 자주적 생활능력을 갖춘 공민으로서의 자질 함양, 그리고 민주 국가발전에 봉사이며 인류공영의 이상 실현에 기여할 국민의 양성이라는 교육 목적과 맥을 같이하는 것이다.\n\n가장 어려우면서도 가치 있는일이\n사람을 가르쳐 사람되게 하는 일이다.\n\n이러한 일을 교육이라고 한다. 사람은 누구나 뜻있게 살려는 소망을 간직하고 자신의 잠재력을 계발하고 자아를 실현시켜 삶을 보다 풍요롭게 만들고자 한다. 교육은 가르치고 배우는 과정을 통하여 사람들로 하여금 이러한 소망을 구현하도록 돕는 일이다. 교육이란 행위는 여러 가지의 모습으로 나타날 수 있다. 지식을 얻게 할 수도 있고 지혜를 발견하도록 유도할수도 있다. 그러나 가장 바람직스러운 교육은 지식과 지혜가 융합된 차원에서 얻어지는 것이다.\n\n지식과 지혜가 융합되어 개성과 인품이 조화된 인간이야말로 이상적인 인간상이라고 할 수 있다. 한양학원의 건학정신은 이러한 인간상을 창출하여 삶의 행복을 극대화 시키려는 데 있다. <사랑의 실천>이 바로 그러한 교육이념인것이다. 사람이 사람을 사랑한다는 것만큼 참되고, 착하고, 고운 것은 없을 것이다.",
                    "totStud": 27153,
                    "tuition": 8499227,
                    "website": "https://www.hanyang.ac.kr/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 5,
                            "gloRank": 431,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 7,
                            "gloRank": 536,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 5,
                            "gloRank": 581,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 4,
                            "gloRank": 257,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 5,
                            "gloRank": 268,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 38,
                            "gloRank": 1000,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 1,
                            "gloRank": 124,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 11,
                            "gloRank": 514,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 13,
                            "gloRank": 739,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 5,
                            "gloRank": 379,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 5,
                            "gloRank": 533,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 6,
                            "gloRank": 587,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 10,
                            "gloRank": 692,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 5,
                            "gloRank": 1078,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 6,
                            "gloRank": 480,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 5,
                            "gloRank": 559,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 6,
                            "gloRank": 501,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 11,
                            "gloRank": 966,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 5,
                            "gloRank": 220,
                            "year": 2023
                        }
                    ],
                    "sfratio": "23.86"
                },
                {
                    "uni_id": 50,
                    "name": "울산과학기술원",
                    "engName": "Ulsan National Institute of Science and Technology",
                    "citation": "https://unist-kor.unist.ac.kr/about-unist/overview/vision/",
                    "compRate": "13.9",
                    "intro": "인류의 삶에 공헌하는 세계적 과학기술 선도 대학\n미래를 개척하는 창의적인 과학기술 글로벌 리더양성과 새로운 패러다임을 제시하는 융합과학기술 구현을 통해 인류의 삶에 공헌하는 세계적 과학기술 선도대학을 만듭니다.\n\n2030년 세계 10위권 과학기술 특성화 대학\n새로운 패러다임을 제시하는 21세기 융합과학 기술 구현, 미래를 개척하는 창의적 과학기술 글로벌 리더 양성\n\n창의, 융합, 글로벌화, 선택과 집중\nIT기반 학생주도적 토론식수업\n(Flipped Learning), 전학생 무전공 입학, 교수의 2개 이상 학부 소속 의무화, 화국내 대학 유일 전 교과 과정의 영어교육, 외국인교수 및 학생비중 20%까지 확대, 중점연구분야인 차세대에너지와 첨단신소재(기계, 에너지, 바이오)분야 집중연구",
                    "totStud": 5188,
                    "tuition": 6200250,
                    "website": "https://unist-kor.unist.ac.kr/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 7,
                            "gloRank": 523,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 9,
                            "gloRank": 559,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 4,
                            "gloRank": 538,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 12,
                            "gloRank": 1019,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 14,
                            "gloRank": 617,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 57,
                            "gloRank": 1963,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 5,
                            "gloRank": 243,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 37,
                            "gloRank": 1363,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 17,
                            "gloRank": 930,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 22,
                            "gloRank": 1592,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 11,
                            "gloRank": 656,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 16,
                            "gloRank": 986,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 10,
                            "gloRank": 1329,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 9,
                            "gloRank": 850,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 9,
                            "gloRank": 980,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 5,
                            "gloRank": 485,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 32,
                            "gloRank": 1944,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 9,
                            "gloRank": 392,
                            "year": 2023
                        }
                    ],
                    "sfratio": "16.01"
                },
                {
                    "uni_id": 55,
                    "name": "경희대학교",
                    "engName": "Kyung Hee University",
                    "citation": "https://www.khu.ac.kr/kor/sub/content.do?MENU_SEQ=124",
                    "compRate": "16.4",
                    "intro": "경희정신\n\n경희는 창학 이래 ‘학문과 평화’의 학풍과 전통을 이어왔다. 학술의 권위를 세우고 창조적인 학문세계를 이뤘다. 학술과 실천의 결합으로 평화로운 인류사회에 기여하는 대학을 추구해왔다. 개교 60주년을 전후해 경희는 학문과 평화의 새로운 지평을 열고 있다. 다양성과 창의성을 바탕으로 학문의 탁월성을 실현하고 석학, 대가, 거장의 길을 제시하고 있다. 더 나은 인간, 더 나은 세계를 위한 공적 실천의 장으로서 대학의 ‘지구적 존엄’을 구현하고 있다.\n\n경희는 학문과 평화의 전통을 계승하며 21세기를 이끌어갈 ‘대학다운 미래대학’으로 거듭나고자 한다. 대학다운 미래대학은 이론과 현실, 학술과 실천, 과거와 미래, 지역과 지구를 창조적으로 연계한다. 경계와 차별을 넘어 차이의 공존을 실현하며 ‘지구공동사회’를 건설한다. 대학다운 미래대학 건설의 핵심가치는 학문의 권위 재건, 소통의 학문세계, 화합과 창조의 미래사회이다.\n\n교육과 연구의 수월성으로 학문의 권위를 정립할 때 대학은 대학다워진다. 경희는 분과 학문에 대한 심도 있는 연구와 학문 분야 간 창조적 융합을 통해 학문세계의 자긍심을 회복하려고 한다. 학문의 대상과 대학의 실천 공간이 확장되고 있다. 학문세계의 소통이 어느 때보다 절실하다. 경희는 학문과 학문, 학문과 현실의 진정한 소통을 실현함으로써 미래대학의 공적 책임을 다하고자 한다. 화합과 창조만이 지구공동사회를 만들 수 있다. 화합과 창조는 배려와 존중, 나눔과 섬김의 문화를 세우는 바탕이다. 경희는 경계를 허물고 차이를 인정하며 다양성이 생동하는 미래사회를 열 것이다.\n\n미래대학을 향한 경희의 여정은 역동적이다. 후마니타스칼리지, 지구사회봉사단(GSC), 자율운영, 미래협약과 미래전략, 학술진흥 2020, 캠퍼스 종합개발사업 Space 21 등, 세계적인 미래대학을 만들기 위해 힘찬 발걸음을 내딛고 있다. 경이로운 경희의 길, 함께 꿈꾸고 만들어갈 경희의 역사다.",
                    "totStud": 37452,
                    "tuition": 7938301,
                    "website": "https://www.khu.ac.kr/kor/main/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 20,
                            "gloRank": 1142,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 20,
                            "gloRank": 1067,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 8,
                            "gloRank": 1085,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 5,
                            "gloRank": 273,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 8,
                            "gloRank": 377,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 3,
                            "gloRank": 156,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 10,
                            "gloRank": 412,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 4,
                            "gloRank": 431,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 3,
                            "gloRank": 140,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 8,
                            "gloRank": 518,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 6,
                            "gloRank": 602,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 13,
                            "gloRank": 687,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 8,
                            "gloRank": 561,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 15,
                            "gloRank": 1578,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 7,
                            "gloRank": 661,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 11,
                            "gloRank": 1199,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 8,
                            "gloRank": 782,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 8,
                            "gloRank": 743,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 10,
                            "gloRank": 448,
                            "year": 2023
                        }
                    ],
                    "sfratio": "27.52"
                },
                {
                    "uni_id": 62,
                    "name": "광주과학기술원",
                    "engName": "Gwangju Institute of Science and Technology",
                    "citation": "https://ko.wikipedia.org/wiki/%EA%B4%91%EC%A3%BC%EA%B3%BC%ED%95%99%EA%B8%B0%EC%88%A0%EC%9B%90",
                    "compRate": "18.5",
                    "intro": "광주과학기술원(光州科學技術院, Gwangju Institute of Science and Technology)는 1993년 대한민국의 정부출연 연구중심 대학원 및 대학이다. 약칭은 GIST 또는 지스트이다.\n\n대한민국 과학기술정보통신부 산하 기타공공기관으로, 1993년에 설립되어 1995년에 첫 석사과정이 시작되었으며, 2010년부터 학사과정을 운영 중이다. 광주광역시 북구 오룡동에 위치하고 있다.\n\n2015년 영국 글로벌 대학평가 기관인 QS가 실시한 세계대학평가에서 지스트는 '교수 1인당 SCI급 논문 피인용지수(Citations per faculty)' 부문에서 세계 2위(영국 QS 대학평가 2015/16)[1], 2014년 처음 평가 대상이 된 THE(Times Higher Education) 세계대학평가에서는 '공학, 기술' 분야 대한민국 4위, 세계 96위[2]에 랭크되었다.",
                    "totStud": 2666,
                    "tuition": 2060000,
                    "website": "https://www.gist.ac.kr/kr/main.html",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 28,
                            "gloRank": 1494,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 21,
                            "gloRank": 1096,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 31,
                            "gloRank": 1074,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 44,
                            "gloRank": 1131,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 22,
                            "gloRank": 782,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 15,
                            "gloRank": 631,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 15,
                            "gloRank": 916,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 36,
                            "gloRank": 1631,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 21,
                            "gloRank": 1095,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 28,
                            "gloRank": 1692,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 25,
                            "gloRank": 1961,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 31,
                            "gloRank": 1357,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 25,
                            "gloRank": 1035,
                            "year": 2023
                        }
                    ],
                    "sfratio": "14.26"
                },
                {
                    "uni_id": 69,
                    "name": "이화여자대학교",
                    "engName": "Ewha Womans University",
                    "citation": "https://www.ewha.ac.kr/ewha/intro/object.do",
                    "compRate": "8.8",
                    "intro": "이화 교육의 목적은 성숙한 기독교적 인격과 헌신적 봉사정신, 그리고 전문적 학술지식을 바탕으로 남녀 양성의 평등이 조화롭게 완성된 사회를 구현해 가는 개척자적인 여성 지도인력을 양성하는 것이었다. 대학 설립 이후 이제까지 18만여명의 여자 대학 졸업자를 한국사회에 배출한 것은 여성 고등교육 인구의 저변 확대를 목표했던 이화의 괄목할 만한 성과이다. 3·1운동 이후 열화와 같이 일기 시작한 민족교육의 요구를 수용하기 위해 노력했고, 유치원 사범과와 같은 새로운 교육기구를 설립하여 민족의 미래를 짊어질 2세 국민교육과 교사 양성에 누구보다도 앞장섰으며, 조국 광복과 함께 대학의 문을 활짝 열고 다양한 전공학과를 앞장서 개설하여 여성전문교육 확대에 주력하였다. 1980년대에는 국내 최초로 평생교육원을 설립하고, 다양한 특수대학원과 전문대학원을 설립함으로써 이화의 교육기능을 확장하고 극대화하였다. 이화가 배출한 인재들은 종교계와 교육계는 물론이고 인문·사회·자연·예술계 등 각 방면에서 여성지도자로 활동하면서 이화 교육의 우수성을 입증하고 있다. 이화 역사의 페이지마다 무수히 붙어 있는 '최초'라는 접두사는 이화의 특별한 목표가 아니라 기독교 정신과 진선미의 이념을 실천하는 개척자적인 여성지도자 양성을 위해 힘써온 이화의 고난에 찬 노력과 인고의 결과였다.\n\n이화의 교육적 노력은, 엄격한 신분차별과 극단적인 남녀의 차별이 상존하는 가운데 근대 문명세계와는 철저히 단절된 암울한 19세기 조선왕조 말기의 한국사회를 근대화하는 데 실질적으로 기여해 왔다. 이화에서 교육받은 수많은 선각자들은 교육과 의술, 전도를 통하여 암울했던 이 땅에 근대화의 빛을 비추었다.\n\n이화의 교육은 또한 모든 여성들에게 교육의 기회를 확대하는 것을 넘어서서 남녀 양성의 평등이 조화롭게 완성된 사회를 이룩하는 데 기여해 왔다. 이화는 교육을 통하여 여성의 능력을 개발하고 온전한 인격화를 이룸과 동시에 끊임없이 남성들의 인식 변화를 유도하였다. 여성들의 자각과 사회활동을 통해 남성들의 변화를 간접적으로 유도해 온 이화는 1970년대 중엽 국내에서는 처음으로 개설한 '여성학'을 통해서 남성들의 인식 변화에 직접적으로 기여해 왔다. 남녀가 조화롭게 동반자로서 공존하는 사회에서 여성이 그 절반의 역할을 충실하게 수행하는 사회, 그것은 아직도 이화가 추구해야 할 목표로 존재한다.\n\n이화는 섬김과 나눔이라는 이화정신에 뿌리를 두고 21세기 우리 사회와 세계가 요구하는 사회적 책무를 다하는 이화 교육의 미래상을 제시하고, 이화만의 발전을 넘어서 겨레와 조국을 섬기며 공동선을 향해 인류사회에 이바지하고자 한 이화의 궁극적인 목적에 한 걸음 더 다가서고자 한다.",
                    "totStud": 23869,
                    "tuition": 8689951,
                    "website": "https://www.ewha.ac.kr/ewha/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 34,
                            "gloRank": 1716,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 34,
                            "gloRank": 1488,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 12,
                            "gloRank": 1377,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 19,
                            "gloRank": 1230,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 43,
                            "gloRank": 1409,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 47,
                            "gloRank": 1490,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 21,
                            "gloRank": 755,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 23,
                            "gloRank": 909,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 50,
                            "gloRank": 2145,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 11,
                            "gloRank": 925,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 24,
                            "gloRank": 1098,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 24,
                            "gloRank": 1137,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 13,
                            "gloRank": 1476,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 26,
                            "gloRank": 1590,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 21,
                            "gloRank": 1803,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 13,
                            "gloRank": 979,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 18,
                            "gloRank": 1258,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 36,
                            "gloRank": 1434,
                            "year": 2023
                        }
                    ],
                    "sfratio": "24.13"
                },
                {
                    "uni_id": 76,
                    "name": "중앙대학교",
                    "engName": "Chung-Ang University",
                    "citation": "https://www.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=1630",
                    "compRate": "23.4",
                    "intro": "교육이념\n의에 죽고 참에 살자\n중앙대학교는 의와 참의 정신을 대학의 교육이념으로 한다.의와 참의 정신은 중앙대학교 교육목적과 목표의 원천으로서 진리를 탐구하고 실천적 참여봉사를 통해 사회정의를 구현하고 나아가 국가와 인류공영에 기여하는 인재를 양성하는 것을 의미한다.\n\n\"우리 사랑하는 아들 딸들은 자신을 위해서 굳세고 용감하고 어질고, 지혜롭고 착하며 가정에서는 좋은 부모님께 효성 있는 자녀가 되고 나라에는 충성스런 일꾼이 되고 세계에는 평화의 사도가 되어주기를 주야로 기도하고 힘들여 노력할 것이며 더불어 그렇게 되리라고 깊이 믿는 바이다. 나의 이념인 의에 죽고 참에 사는 정신으로 나라에 영구히 빛나는 태양과 항상 목마르지 않는 영원한 생명수가 되기를 기도하는 바이다“\n\n임영신 박사 \"중대는 영원한 생명\"에서 1963.5.22",
                    "totStud": 26423,
                    "tuition": 7907382,
                    "website": "https://www.cau.ac.kr/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 43,
                            "gloRank": 2128,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 10,
                            "gloRank": 806,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 10,
                            "gloRank": 1297,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 9,
                            "gloRank": 699,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 13,
                            "gloRank": 494,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 21,
                            "gloRank": 615,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 27,
                            "gloRank": 954,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 22,
                            "gloRank": 886,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 26,
                            "gloRank": 1213,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 10,
                            "gloRank": 776,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 18,
                            "gloRank": 953,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 17,
                            "gloRank": 1001,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 9,
                            "gloRank": 1222,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 14,
                            "gloRank": 1144,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 16,
                            "gloRank": 1073,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 9,
                            "gloRank": 770,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 14,
                            "gloRank": 560,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 11,
                            "gloRank": 527,
                            "year": 2023
                        }
                    ],
                    "sfratio": "27.27"
                },
                {
                    "uni_id": 83,
                    "name": "한국외국어대학교",
                    "engName": "Hankuk University of Foreign Studies",
                    "citation": "https://www.hufs.ac.kr/",
                    "compRate": "11.8",
                    "intro": "한국외국어대학교 교육이념은 자유민주주의 사상을 바탕으로 학생의 개성을 함양하고 지도자적 인격을 도야하여 장차 국가와 세계발전에 공헌할 수 있는 유능한 인재를 양성함으로써 '진리, 평화, 창조'의 창학 정신을 구현하는데 있다. \n\n한국외국어대학교는 교육기본법에 명시된 「홍익인간」의 국가교육이념과 「인격도야」라는 대학교육의 목적을 바탕으로 '진리·평화· 창조'의 창학정신을 구현하고자 노력한다. 아울러 우리 학교는 학생들의 개성을 존중하고, 그들의 지도자적 인격을 도야함으로써 장차 국가와 세계발전에 공헌할 수 있는 유능한 인재를 양성하고자 한다.\n특히 한국외국어대학교는 교육기관으로서의 공공성을 깊이 인식하는 동시에 사립학교로서의 자주성을 확립하고자 한다. 또한, 우리 학교는 그 명칭에 나타나 있듯이 다른 고등교육기관과의 차별화를 기하고, 특수성을 견지하고자 한다.",
                    "totStud": 20602,
                    "tuition": 7129945,
                    "website": "http://www.hufs.ac.kr/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 59,
                            "gloRank": 3214,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 19,
                            "gloRank": 1757,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 16,
                            "gloRank": 1151,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 38,
                            "gloRank": 1334,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 70,
                            "gloRank": 3199,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 43,
                            "gloRank": 1895,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 26,
                            "gloRank": 1682,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 12,
                            "gloRank": 680,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 30,
                            "gloRank": 2504,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 74,
                            "gloRank": 4886,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 2,
                            "gloRank": 476,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 17,
                            "gloRank": 1094,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 21,
                            "gloRank": 1403,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 37,
                            "gloRank": 1439,
                            "year": 2023
                        }
                    ],
                    "sfratio": "31.99"
                },
                {
                    "uni_id": 87,
                    "name": "가톨릭대학교",
                    "engName": "The Catholic University of Korea",
                    "citation": "https://cukadmin.catholic.ac.kr/cukedu/intro01.html",
                    "compRate": "12.7",
                    "intro": "인간을 존중하는 전문인 양성\n진리의 보편성 추구\n인간생명 존중의 교육\n학문간의 대화와 만남 추진\n\n민족문화 창달에 기여하는 균형 잡힌 사회인 양성\n이성과 신앙과 현실을 균형있게 종합하는 능력배양\n공동선의 실현을 위해 헌신하는 주체성 함양\n긍정적, 희망적 역사관으로 미래를 개척하는 끈기 연마\n\n인류사회 발전과 평화에 기여하는 열린 세계인 양성\n다양한 문화의 건전한 비판과 체계적 승화\n세계의 평화와 정의에 대한 봉사의 역량 증대\n자연과 환경을 살리는 교육",
                    "totStud": 8600,
                    "tuition": 6997600,
                    "website": "https://www.catholic.ac.kr/index.do",
                    "rank": [],
                    "sfratio": "31.97"
                },
                {
                    "uni_id": 93,
                    "name": "동국대학교",
                    "engName": "Dongguk University",
                    "citation": "http://www.dongguk.ac.kr/mbs/kr/subview.jsp?id=kr_010203000000",
                    "compRate": "18.9",
                    "intro": "건학이념\n불교정신을 바탕으로 학술과 인격을 연마하고 민족과 인류사회 및 자연에 이르기까지 지혜와 자비를 충만케 하여 서로 신뢰하고 공경하는 이상 세계의 구현\n\n교육목적\n본교는 건학이념에 따라 학술의 이론과 응용방법을 연구교수하여 불교를 비롯한 한국문화의 세계화에 노력하며 민족과 인류사회의 이상실현에 기여할 지도적 인재의 양성을 목적으로 한다.",
                    "totStud": 18902,
                    "tuition": 7945683,
                    "website": "http://www.dongguk.edu/mbs/kr/index.jsp",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 17,
                            "gloRank": 1037,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 8,
                            "gloRank": 550,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 14,
                            "gloRank": 1494,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 13,
                            "gloRank": 1094,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 9,
                            "gloRank": 408,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 41,
                            "gloRank": 1065,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 20,
                            "gloRank": 745,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 18,
                            "gloRank": 741,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 35,
                            "gloRank": 1672,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 33,
                            "gloRank": 1840,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 19,
                            "gloRank": 1034,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 18,
                            "gloRank": 1031,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 17,
                            "gloRank": 1694,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 22,
                            "gloRank": 1385,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 30,
                            "gloRank": 2553,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 15,
                            "gloRank": 1059,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 26,
                            "gloRank": 1603,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 12,
                            "gloRank": 531,
                            "year": 2023
                        }
                    ],
                    "sfratio": "27.24"
                },
                {
                    "uni_id": 97,
                    "name": "서강대학교",
                    "engName": "Sogang University",
                    "citation": "https://www.sogang.ac.kr/intro/ideology.html",
                    "compRate": "20.1",
                    "intro": "교육이념\n서강대학교는 가톨릭 신앙과 예수회 교육 이념을 토대로 대한민국의 교육 정신에 따라 예수회가 설립한 교육 기관이다. 서강대학교는 학문을 탐구하고 진리를 추구하면서 정의를 실천하고 인간의 존엄성과 생명의 가치를 존중하는, 사랑과 믿음을 갖춘 전인교육을 지향한다. 이를 통하여 인류 문화와 인류 공동체의 발전에 헌신할 수 있는 참 인재를 양성한다.\n\n교육목적\n예수회의 교육 기관으로서 서강대학교는 지난 480여 년에 걸쳐 전세계 예수회 대학에서 이루어 온 굳건한 전통에 따라 하느님을 경외하고 인생의 진정한 의미를 이해하는 교육을 지향한다.\n서강대학교는 학문의 질적 탁월성을 추구해 온 전통을 이어 학문적 우수성과 창의력을 갖춘 지성인을 양성한다.\n헌신의 정신과 책임감, 성숙하고 원만한 인격으로 사회와 국가에 공헌할 수 있는 지도적 시민을 양성하고, 세계의 변화와 시대적 흐름을 이해하고 이에 대응할 수 있는 비판적 판단력을 갖추어 민족의 번영 및 세계 평화에 기여할 수 있는 참된 세계인을 양성한다.",
                    "totStud": 13290,
                    "tuition": 7944546,
                    "website": "https://sogang.ac.kr/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 24,
                            "gloRank": 1400,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 40,
                            "gloRank": 1815,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 16,
                            "gloRank": 1564,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 15,
                            "gloRank": 1137,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 35,
                            "gloRank": 1169,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 13,
                            "gloRank": 524,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 36,
                            "gloRank": 1325,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 36,
                            "gloRank": 1673,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 49,
                            "gloRank": 2649,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 29,
                            "gloRank": 1247,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 25,
                            "gloRank": 1168,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 24,
                            "gloRank": 2037,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 35,
                            "gloRank": 2301,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 39,
                            "gloRank": 1617,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 14,
                            "gloRank": 1072,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 26,
                            "gloRank": 1134,
                            "year": 2023
                        }
                    ],
                    "sfratio": "33.23"
                },
                {
                    "uni_id": 104,
                    "name": "아주대학교",
                    "engName": "Ajou University",
                    "citation": "https://www.ajou.ac.kr/kr/intro/idea.do",
                    "compRate": "17.5",
                    "intro": "아주대학교는 개교 이래 인간존중, 실사구시, 세계일가를 대학이념으로 추구해 왔습니다.\n\n인간존중\n인간존중이란 '자신을 소중히 여기는 동시에 남을 귀하게 받드는 정신'을 말하는 것으로 아주대학교가 연구와 교육 그리고 사회봉사에 걸쳐서 으뜸으로 추구해온 이념입니다. 인간을 수단으로 보지 않고 궁극적인 목적 또는 가치로 여김으로써 나를 이웃과 국가 그리고 세계와 연결시켜 남을 받들게 만들고자 하는 것입니다.\n\n실사구시\n실사구시란 '사실에 근거하여 진리를 추구한다'는 뜻으로 학문의 결과가 실제에 유용해야 한다는 의미도 함께 담고 있습니다. 진리탐구와 학문연구가 사실에 부합되어야 하고, 인류복지에 기여하는 결과를 산출해야 한다는 것은 아주대학교가 연구활동에 있어서 으뜸으로 추구해온 이념입니다.\n\n세계일가\n세계일가란 '세계인류가 하나가 되어 조화를 이루고 살아가야 한다는 정신'을 말하는 것입니다. 우리나라도 한반도라는 좁은 울타리를 벗어나 세계로 뻗어가야 하는 동시에 세계가 우리나라의 영역 안으로 들어오는 것도 받아들여야 한다는 것은 아주대학교가 젊은 세대를 교육함에 있어서 으뜸으로 추구해온 이념입니다.",
                    "totStud": 15636,
                    "tuition": 8262018,
                    "website": "https://www.ajou.ac.kr/kr/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 9,
                            "gloRank": 565,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 11,
                            "gloRank": 809,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 17,
                            "gloRank": 1633,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 31,
                            "gloRank": 1760,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 16,
                            "gloRank": 741,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 5,
                            "gloRank": 265,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 8,
                            "gloRank": 357,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 9,
                            "gloRank": 509,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 6,
                            "gloRank": 398,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 29,
                            "gloRank": 1779,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 16,
                            "gloRank": 818,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 32,
                            "gloRank": 1309,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 26,
                            "gloRank": 2251,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 16,
                            "gloRank": 1183,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 28,
                            "gloRank": 2314,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 14,
                            "gloRank": 1045,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 30,
                            "gloRank": 1910,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 15,
                            "gloRank": 744,
                            "year": 2023
                        }
                    ],
                    "sfratio": "20.93"
                },
                {
                    "uni_id": 111,
                    "name": "경북대학교",
                    "engName": "Kyungpook National University",
                    "citation": "https://home.knu.ac.kr/HOME/vcd/sub.htm?nav_code=vcd1622521143",
                    "compRate": "11.3",
                    "intro": "첨단\n창의\n기존의 인식 체계나 태도에 물음을 제기하여 새로운 가능성을 열어놓는 역량\n융합\n학문 영역의 경계를 넘어 교류와 협력을 통해 통합적으로 사유함으로써 새로운 지식가치를 창출하는 역량\n성찰\n비판\n근원적 문제 제기를 통해 기존의 독단과 편견을 시정하고 개방된 인식과 태도로 공론장 활성화에 기여하는 역량\n탐색\n부단한 질문을 통해 드러나지 않은 근원을 탐구하여 궁극적 진리에 이르는 역량\n인성\n소통\n사회적 존재이자 문화적 존재인 인간으로서 서로 관계를 맺으며 살아가는데 필수적으로 요구되는 대화 역량\n책임\n자연 환경 및 사회 환경에서 발생하는 제반 문제에 대한 자각을 통해 지역, 국가, 인류의 공동선 실현을 위해 갖추어야 할 역량",
                    "totStud": 29350,
                    "tuition": 4499592,
                    "website": "https://www.knu.ac.kr/wbbs/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 13,
                            "gloRank": 810,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 29,
                            "gloRank": 1232,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 9,
                            "gloRank": 1117,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 25,
                            "gloRank": 1463,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 10,
                            "gloRank": 421,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 11,
                            "gloRank": 401,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 25,
                            "gloRank": 886,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 5,
                            "gloRank": 465,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 4,
                            "gloRank": 191,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 23,
                            "gloRank": 1122,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 13,
                            "gloRank": 1117,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 15,
                            "gloRank": 806,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 11,
                            "gloRank": 705,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 19,
                            "gloRank": 1785,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 10,
                            "gloRank": 889,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 24,
                            "gloRank": 1912,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 27,
                            "gloRank": 1295,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 10,
                            "gloRank": 832,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 4,
                            "gloRank": 216,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 13,
                            "gloRank": 595,
                            "year": 2023
                        }
                    ],
                    "sfratio": "21.18"
                },
                {
                    "uni_id": 118,
                    "name": "울산대학교",
                    "engName": "University of Ulsan",
                    "citation": "https://www.ulsan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN021#:~:text=%EA%B1%B4%ED%95%99%EC%9D%B4%EB%85%90,%EC%8B%9C%EB%AF%BC%EC%9D%98%20%EC%96%91%EC%84%B1'%EC%97%90%20%EC%9E%88%EB%8B%A4.",
                    "compRate": "5.1",
                    "intro": "건학이념\n울산대학교의 건학이념은 '국가 기간산업의 육성에 필요한 고급기술 인력의 양성'과\n'국가 및 지역사회의 발전에 기여할 수 있는 민주 시민의 양성'에 있다.\n\n대학이념\n1. 우리 대학은 자유로운 학술활동을\n통하여 진리와 지혜를 추구한다.\n2. 우리 대학은 자율과 혁신을\n중시하는 열린 공동체를 지향한다.\n3. 우리 대학은 헌신과 책임의 정신을 바탕으로 국가 및 지역사회의 발전을 선도한다.\n\n교육목적\n'창조적 탐구인', '자주적 지성인', '유능한 직능인'의 자질을 갖춘 인재 양성을 교육목적으로 삼다.",
                    "totStud": 13915,
                    "tuition": 7336868,
                    "website": "https://www.ulsan.ac.kr/resources/homepage/story/story.html",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 53,
                            "gloRank": 2660,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 13,
                            "gloRank": 862,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 11,
                            "gloRank": 1371,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 47,
                            "gloRank": 2342,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 21,
                            "gloRank": 871,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 25,
                            "gloRank": 659,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 40,
                            "gloRank": 1435,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 50,
                            "gloRank": 1951,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 10,
                            "gloRank": 381,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 19,
                            "gloRank": 1014,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 21,
                            "gloRank": 1569,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 21,
                            "gloRank": 1068,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 5,
                            "gloRank": 364,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 14,
                            "gloRank": 1497,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 12,
                            "gloRank": 1033,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 8,
                            "gloRank": 832,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 24,
                            "gloRank": 1225,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 23,
                            "gloRank": 995,
                            "year": 2023
                        }
                    ],
                    "sfratio": "12.3"
                },
                {
                    "uni_id": 124,
                    "name": "한림대학교",
                    "engName": "Hallym University",
                    "citation": "https://www.hallym.ac.kr/hallym_univ/sub04/cP2/sCP1.html",
                    "compRate": "4.6",
                    "intro": "한림대학은 1982년 건학 이래 '풍부한 인간성과 창조적 지성을 지닌 인재를 양성하고, 학술 및 문화의 진흥을 도모'함으로써 '개인의 성장, 사회의 발전, 국가의 번영, 인류의 행복에 기여함'을 실현하기 위해 매진해 왔습니다.\n\n한림비전 2030은 한림의 교육 이념을 시대와 사회의 요구에 맞추어 혁신하고 계승합니다.\n\n \n교육이념\n개인의 성장, 사회의 발전, 국가의 번영, 인류의 행복에 기여\n\n교육목적\n풍부한 인간성과 창조적 지성을 지닌 인재를 양성하고 학술 및 문화의 진흥을 도모\n\n교육목표\n선진 인재 양성",
                    "totStud": 8649,
                    "tuition": 7483254,
                    "website": "https://www.hallym.ac.kr/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 30,
                            "gloRank": 1513,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 42,
                            "gloRank": 1874,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 46,
                            "gloRank": 1542,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 50,
                            "gloRank": 1569,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 50,
                            "gloRank": 1790,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 30,
                            "gloRank": 1110,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 29,
                            "gloRank": 1406,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 32,
                            "gloRank": 1820,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 46,
                            "gloRank": 2057,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 30,
                            "gloRank": 1240,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 11,
                            "gloRank": 1338,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 32,
                            "gloRank": 2123,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 35,
                            "gloRank": 1524,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 41,
                            "gloRank": 1575,
                            "year": 2023
                        }
                    ],
                    "sfratio": "11.34"
                },
                {
                    "uni_id": 131,
                    "name": "인하대학교",
                    "engName": "Inha University",
                    "citation": "https://cn.inha.ac.kr/kr/933/subview.do",
                    "compRate": "13.7",
                    "intro": "인격도야, 진리탐구, 사회봉사\n\n인하 대학교는 1954년 조국부강, 민족번영의 염원으로 개교하여 창의, 근면, 봉사의 창학정신을 구현하기 위한 인격도야, 진리탐구, 사회봉사의 3대교육 이념을 표방하고 있다.\n\n이는 교훈 「眞」과 함께 연구하는 대학으로서의 참된 인간 수련을 통하여 국가와 인류사회 발전에 공헌하려는 의욕적 자세와 세계로 웅비하는 발전 「仁荷」의 의지 및 진리 탐구를 위한 학문에의 열정을 집약한 것이다. 위의 이념을 기초로 우리 대학은 인격을 도야하고, 건전한 사상을 함양하는 동시에 심오한 학술이론과 그 응용방법을 연구, 교수하여 국가와 인류사회발전에 공헌할 수 있는 지도적 인재양성을 교육목적으로 두고 있다.",
                    "totStud": 22033,
                    "tuition": 7711149,
                    "website": "https://www.inha.ac.kr/kr/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 25,
                            "gloRank": 1436,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 35,
                            "gloRank": 1731,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 23,
                            "gloRank": 1926,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 10,
                            "gloRank": 858,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 20,
                            "gloRank": 856,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 58,
                            "gloRank": 1970,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 14,
                            "gloRank": 535,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 60,
                            "gloRank": 2547,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 16,
                            "gloRank": 928,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 18,
                            "gloRank": 1487,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 52,
                            "gloRank": 2355,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 44,
                            "gloRank": 1954,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 6,
                            "gloRank": 1110,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 30,
                            "gloRank": 1862,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 14,
                            "gloRank": 1487,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 34,
                            "gloRank": 1474,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 24,
                            "gloRank": 1511,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 20,
                            "gloRank": 873,
                            "year": 2023
                        }
                    ],
                    "sfratio": "25.65"
                },
                {
                    "uni_id": 138,
                    "name": "전북대학교",
                    "engName": "Jeonbuk National University",
                    "citation": "https://wz3.jbnu.ac.kr/dent/8183/subview.do",
                    "compRate": "7.9",
                    "intro": "전북대학교 창학이념 및 교육목표\n전북대학교 창학이념 (건학이념)\n전북대학교는 호남평야와 서해안의 중심지에 설립된 국립대학교로서 자유, 정의, 창조의 이념 아래 지역사회의 발전과 국가의 번영 그리고 인류공영에 기여한다.\n\n전북대학교 대학목표와 교육목표\n1. 전문적인 학술 이론과 그 응용 방법을 연구 개발하고, 최고 수준의 지식과 기술을 교육한다. 또한, 지역의 전통문화 계승 및 창달과 주민의 교육복지를 구현한다.\n\n2. 더불어 함께 사는 민주시민의 덕목을 갖춘 교양인, 자유와 정의를 구현하는 지성인, 진리를 부단히 탐구하는 창조적 전문인, 전통문화를 계승하여 지역의 세계화를 추구하는 문화인, 국가 번영과 인류공영에 기여하는 세계인의 자질과 정신을 갖춘 인재를 양성 한다.",
                    "totStud": 22931,
                    "tuition": 4415150,
                    "website": "https://www.jbnu.ac.kr/kor/",
                    "rank": [],
                    "sfratio": "21.17"
                },
                {
                    "uni_id": 145,
                    "name": "건국대학교",
                    "engName": "Konkuk University",
                    "citation": "https://www.konkuk.ac.kr/Administration/70thAnniversary/jsp/intro_education.jsp",
                    "compRate": "18.3",
                    "intro": "교육목적\n수월성 있고 조화로운 교육을 통해 세계적 수준의 식견을 갖춘 전인적 인격의 지성인,\n미래지향적 전문인, 공동체 발전의 선도자를 양성함.\n\n교육목표\nWE人인재(글로벌 공동체의 이익을 위해 주도적으로 움직일 줄 아는 창의적 미래 인재) 양성\n",
                    "totStud": 21705,
                    "tuition": 8275634,
                    "website": "http://www.konkuk.ac.kr/do/Index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 16,
                            "gloRank": 888,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 33,
                            "gloRank": 1405,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 13,
                            "gloRank": 1422,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 22,
                            "gloRank": 1257,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 26,
                            "gloRank": 999,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 7,
                            "gloRank": 329,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 31,
                            "gloRank": 1049,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 16,
                            "gloRank": 656,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 49,
                            "gloRank": 2132,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 19,
                            "gloRank": 1502,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 10,
                            "gloRank": 641,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 13,
                            "gloRank": 801,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 21,
                            "gloRank": 1878,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 13,
                            "gloRank": 1113,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 27,
                            "gloRank": 2239,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 9,
                            "gloRank": 814,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 12,
                            "gloRank": 994,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 2,
                            "gloRank": 131,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 28,
                            "gloRank": 1230,
                            "year": 2023
                        }
                    ],
                    "sfratio": "34.62"
                },
                {
                    "uni_id": 152,
                    "name": "부산대학교",
                    "engName": "Pusan National University",
                    "citation": "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN150",
                    "compRate": "12.4",
                    "intro": "교육이념\n우리 대학은 진리, 자유, 봉사의 정신을 실현하는 참 대학으로서 인류애를 기반으로 시대의 흐름을 통찰한 새로운 가치 체계를 만들어 지역과 국가 그리고 인류 사회의 발전에 기여하는 학문 연구와 인재 양성을 통해 사회의 미래 비전을 제시하고 실천합니다.\n\n진리\n진리의 전당\n교육이념우리 대학은 진리를 추구하고, 상상력과 창의력에 기반한 학문적 발전을 도모하는 교육과 연구를 수행하여 한국을 대표하는 참 대학으로서 세계적 경쟁력을 확보하고, 이웃과 사회와 적극적으로 공감하며 시대를 통찰할 수 있는 창의적 통섭형 인재를 양성합니다.\n\n \n자유\n자유의 요람\n우리 대학은 생명의 근본인 자유를 지키고, 상생과 협력 공동체 정신에 근거한 자유로운 진리 탐구와 교육을 수행하여, 국가와 인류의 발전을 위해 창의성을 적극 활용할 수 있는 능력과 태도를 가진 성숙한 지성인을 양성하는 참 대학입니다.\n\n \n봉사\n봉사의 산실\n우리 대학은 진리와 자유에 기반한 지식과 교육을 탐구하며, 인류애 실현과 사회·국가의 발전에 필요한 다양한 봉사를 제공하고자하며 개인적으로 사회가 필요로 하는 봉사 활동에 기꺼이 참여하는 태도와 덕성을 가진 지성인을 양성하고, 대학 차원에서 사회 발전과 평생 교육, 재교육 등의 봉사 활동 체제를 구축한 참 대학입니다.",
                    "totStud": 30013,
                    "tuition": 4461885,
                    "website": "https://www.pusan.ac.kr/kor/Main.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 15,
                            "gloRank": 851,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 30,
                            "gloRank": 1237,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 26,
                            "gloRank": 2017,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 17,
                            "gloRank": 1198,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 19,
                            "gloRank": 832,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 31,
                            "gloRank": 766,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 11,
                            "gloRank": 472,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 28,
                            "gloRank": 1062,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 6,
                            "gloRank": 296,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 22,
                            "gloRank": 1118,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 12,
                            "gloRank": 1060,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 26,
                            "gloRank": 1178,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 29,
                            "gloRank": 1239,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 8,
                            "gloRank": 1172,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 15,
                            "gloRank": 1179,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 22,
                            "gloRank": 1813,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 18,
                            "gloRank": 1105,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 5,
                            "gloRank": 397,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 9,
                            "gloRank": 385,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 17,
                            "gloRank": 821,
                            "year": 2023
                        }
                    ],
                    "sfratio": "21.24"
                },
                {
                    "uni_id": 159,
                    "name": "세종대학교",
                    "engName": "Sejong University",
                    "citation": "http://www.sejong.ac.kr/sejong/idea_01.html?menu_id=1.1",
                    "compRate": "14.7",
                    "intro": "세종 7대 핵심역량 지표 및 정의\n논리비판적 사고역량\t\n당면한 문제의 핵심을 파악하기 위해 비판적으로 탐색하고, 다양한 요소 간의 관계를\n명확하게 규명하며, 자신의 사고과정과 활동에 대해 올바르게 평가하는 능력\t\n\n창의융합적 사고역량\t\n남들이 발견하지 못한 문제들을 민감하게 인식하고 자신의 전공지식을 확산하고, 보다 정교하게 구조화하여 다양한 영역의 지식에 효과적으로 연계시킬 수 있는 능력\n\n자기관리 역량\t\n자신에 대한 객관적이고 긍정적인 인식을 바탕으로 진로개발의 목표를 성취하기 위한 전략을 주도적으로 발휘하는 능력\t\n\n문제해결 역량\n문제해결 역량\t주어진 문제를 효과적으로 해결하기 위해 자신의 지적 능력을 적절하게 활용하고, 높은 동기 수준을 유지하며 문제해결에 필요한 최적의 환경을 선택 및 조성하는 능력\t\n\n소통 역량\n타인과의 조화로운 관계를 유지하기 위해 자신의 생각을 효과적으로 전달 및 공유하고 공동의 목표를 달성하는데 발생할 수 있는 다양한 문제들을 주도적으로 해결하는 능력\t\n\n글로벌 역량\n다양한 문화의 특성과 고유한 가치를 긍정적으로 인식하고, 이를 바탕으로 국제 사회에서 공유되는 이슈를 올바르게 이해하고 해석하는 능력\n\n공동체의식 역량\t\n공동체의 발전을 위해 사회구성원으로서 권리와 책임을 다하고 사회에 긍정적으로\n이바지할 수 있는 능력",
                    "totStud": 15369,
                    "tuition": 7891281,
                    "website": "http://www.sejong.ac.kr/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 8,
                            "gloRank": 553,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 16,
                            "gloRank": 995,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 3,
                            "gloRank": 245,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 6,
                            "gloRank": 286,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 28,
                            "gloRank": 684,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 15,
                            "gloRank": 545,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 55,
                            "gloRank": 2310,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 13,
                            "gloRank": 693,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 9,
                            "gloRank": 718,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 42,
                            "gloRank": 1832,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 25,
                            "gloRank": 1168,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 17,
                            "gloRank": 1204,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 15,
                            "gloRank": 1496,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 25,
                            "gloRank": 1227,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 27,
                            "gloRank": 1686,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 8,
                            "gloRank": 364,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 8,
                            "gloRank": 390,
                            "year": 2023
                        }
                    ],
                    "sfratio": "27.94"
                },
                {
                    "uni_id": 166,
                    "name": "전남대학교",
                    "engName": "Chonnam National University",
                    "citation": "https://www.jnu.ac.kr/MainIntro/Intro/developmentplan",
                    "compRate": "8.2",
                    "intro": "대학비전\n교육\n인문학적 상상력과 이공학적 창의력, 미래선도형 교육체제, 취업과 창업 지원 및 자기주도적 학습활동, 전략적 국제화\n\n연구\n연구자 친화형 캠퍼스, 우수 연구집단 육성, 대학원생 확보, 융복합 활동 공간\n\n지역사회\n지역사회 평생교육, 시·도·기업 협력체제, 대학자원 개방, 지역대학 협력체제, 전남대 브랜드 전략\n\n행정\n행정 민주화, 대학혁신, 재정 운용전략, 캠퍼스 발전전략\n\n복지\n[전남대학교 복지플랜 2021], 맞춤형 복지제도, 교직원 상생문화, 생동하는 학생문화",
                    "totStud": 23103,
                    "tuition": 4167612,
                    "website": "https://www.jnu.ac.kr/jnumain.aspx",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 21,
                            "gloRank": 1267,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 18,
                            "gloRank": 1049,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 24,
                            "gloRank": 1979,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 27,
                            "gloRank": 1621,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 36,
                            "gloRank": 1190,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 13,
                            "gloRank": 428,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 12,
                            "gloRank": 505,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 27,
                            "gloRank": 1059,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 9,
                            "gloRank": 358,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 32,
                            "gloRank": 1599,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 20,
                            "gloRank": 1520,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 30,
                            "gloRank": 1308,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 28,
                            "gloRank": 1174,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 20,
                            "gloRank": 1837,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 19,
                            "gloRank": 1308,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 31,
                            "gloRank": 2588,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 28,
                            "gloRank": 1299,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 15,
                            "gloRank": 1090,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 13,
                            "gloRank": 547,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 21,
                            "gloRank": 896,
                            "year": 2023
                        }
                    ],
                    "sfratio": "20.28"
                },
                {
                    "uni_id": 173,
                    "name": "충남대학교",
                    "engName": "Chungnam National University",
                    "citation": "https://plus.cnu.ac.kr/html/kr/sub01/sub01_010101.html",
                    "compRate": "9.6",
                    "intro": "교육이념\n본교는 국가와 인류사회의 발전에 필요한 학술의 심오한 이론과 그 응용방법을 교수ㆍ연구하는 동시에 창의ㆍ개발ㆍ봉사정신이 풍부한 지도적 인격을 갖춘 인재를 양성함을 교육 목표로 한다.",
                    "totStud": 24055,
                    "tuition": 4361154,
                    "website": "https://plus.cnu.ac.kr/html/kr/",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 36,
                            "gloRank": 1761,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 24,
                            "gloRank": 1176,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 30,
                            "gloRank": 2245,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 37,
                            "gloRank": 1958,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 40,
                            "gloRank": 1358,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 20,
                            "gloRank": 590,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 24,
                            "gloRank": 853,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 13,
                            "gloRank": 608,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 42,
                            "gloRank": 1849,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 17,
                            "gloRank": 1352,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 20,
                            "gloRank": 1050,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 15,
                            "gloRank": 953,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 27,
                            "gloRank": 2342,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 23,
                            "gloRank": 1392,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 20,
                            "gloRank": 1758,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 41,
                            "gloRank": 1741,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 19,
                            "gloRank": 1350,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 5,
                            "gloRank": 238,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 39,
                            "gloRank": 1460,
                            "year": 2023
                        }
                    ],
                    "sfratio": "23.38"
                },
                {
                    "uni_id": 180,
                    "name": "단국대학교",
                    "engName": "Dankook University",
                    "citation": "https://www.dankook.ac.kr/web/kor/-571",
                    "compRate": "13.9",
                    "intro": "교육이념 및 목표\n구국·자주·자립을 교육이념으로 하는 우리대학은 교시(校是)인 진리·봉사를 실현하기 위하여 ‘민족애를 바탕으로 인류사회에 공헌하는 능동·혁신·헌신의 D3 인재 양성’을 대학교육의 목표로 설정한다. 인재상 ‘능동·혁신·헌신의 D3 인재’는 우리대학의 교육목표를 구체화한 실천적 목표로서, 개인의 성장과 사회의 발전을 함께 추구하는 시대적 요청을 반영한 것이다.",
                    "totStud": 15723,
                    "tuition": 8024010,
                    "website": "https://www.dankook.ac.kr/web/kor",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 67,
                            "gloRank": 3466,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 53,
                            "gloRank": 2321,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 28,
                            "gloRank": 2100,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 33,
                            "gloRank": 1805,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 52,
                            "gloRank": 1777,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 53,
                            "gloRank": 1745,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 58,
                            "gloRank": 2186,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 53,
                            "gloRank": 2135,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 7,
                            "gloRank": 309,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 48,
                            "gloRank": 2128,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 34,
                            "gloRank": 1909,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 47,
                            "gloRank": 2191,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 46,
                            "gloRank": 2039,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 22,
                            "gloRank": 1908,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 47,
                            "gloRank": 3090,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 36,
                            "gloRank": 2835,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 74,
                            "gloRank": 3502,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 35,
                            "gloRank": 2006,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 12,
                            "gloRank": 487,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 44,
                            "gloRank": 1781,
                            "year": 2023
                        }
                    ],
                    "sfratio": "32.09"
                },
                {
                    "uni_id": 184,
                    "name": "서울시립대학교",
                    "engName": "University of Seoul",
                    "citation": "https://www.uos.ac.kr/kor/html/auos/vision/principle/principle.do?menuid=2000001002006000000&epTicket=LOG",
                    "compRate": "14.5",
                    "intro": "교육목적\n본교는 학술의 심오한 이론과 그 응용방법을 교수 연구하며, 지도적 인격을 도야함으로써 국가, 인류사회의 발전에 공헌함과 아울러 서울시민의 생활과 문화의 향상에 기여함을 목적으로 한다\n\n교육목표\n본 대학의 교육은 대한민국 교육법에 그 이념적 바탕을 두고 서울시립대학교 교훈에 제시된 대학이념과 교육목적에 따라 다음과 같은 목표를 구현한다.\n\n1. 폭넓은 교양과 심오한 학문적 이론 및 창의적 전문기술을 지닌 지성인을 기른다.\n2. 성실한 근면을 바탕으로 책임과 의무를 다하는 건전한 인격을 갖춘 민주 시민을 기른다.\n3. 급변하는 미래 사회에의 적응력과 새 문화의 창조력을 함양하여 서울특별시와 국가 및 인류 사회 발전에 공헌할 수 있는 지도자를 기른다.",
                    "totStud": 12589,
                    "tuition": 2394440,
                    "website": "https://www.uos.ac.kr/main.do?epTicket=LOG",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 19,
                            "gloRank": 1105,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 28,
                            "gloRank": 1210,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 35,
                            "gloRank": 1878,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 24,
                            "gloRank": 987,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 69,
                            "gloRank": 2797,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 37,
                            "gloRank": 1353,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 21,
                            "gloRank": 871,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 27,
                            "gloRank": 1277,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 16,
                            "gloRank": 1304,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 50,
                            "gloRank": 2283,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 36,
                            "gloRank": 1518,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 41,
                            "gloRank": 2627,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 33,
                            "gloRank": 2729,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 36,
                            "gloRank": 1548,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 37,
                            "gloRank": 2055,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 43,
                            "gloRank": 1736,
                            "year": 2023
                        }
                    ],
                    "sfratio": "28.16"
                },
                {
                    "uni_id": 191,
                    "name": "영남대학교",
                    "engName": "Yeungnam University",
                    "citation": "https://ental.yu.ac.kr/main/intro/yu-vision.do",
                    "compRate": "6.5",
                    "intro": "3대 목표\n사회에 공헌하는 Y형 인재 양성\n실용적 지식뿐만 아니라 인간에 대한 이해, 인문학적 사고를 조화시키는 교육을 통해 사회를 이롭게 변화시키는 인재 양성 \n\n새로운 지식의 생산과 확산\n끊임없는 연구를 통해 지식기반사회에 부합하는 새로운 지적 자산을 창출하고 확산하는데 기여\n\n글로벌 공동체 봉사\n더불어 살아가는 공동체 의식 함양을 통해 국가와 더불어 글로벌 공동체에 사회적 책임을 실천",
                    "totStud": 23683,
                    "tuition": 7458296,
                    "website": "https://www.yu.ac.kr/index.php",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 29,
                            "gloRank": 1505,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 25,
                            "gloRank": 1180,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 18,
                            "gloRank": 1214,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 11,
                            "gloRank": 435,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 30,
                            "gloRank": 748,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 18,
                            "gloRank": 689,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 19,
                            "gloRank": 761,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 9,
                            "gloRank": 525,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 24,
                            "gloRank": 1660,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 34,
                            "gloRank": 1564,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 33,
                            "gloRank": 1329,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 33,
                            "gloRank": 2552,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 27,
                            "gloRank": 1622,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 29,
                            "gloRank": 1320,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 6,
                            "gloRank": 576,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 14,
                            "gloRank": 633,
                            "year": 2023
                        }
                    ],
                    "sfratio": "24.98"
                },
                {
                    "uni_id": 198,
                    "name": "충북대학교",
                    "engName": "Chungbuk National University",
                    "citation": "https://www.chungbuk.ac.kr/site/www/sub.do?key=1725",
                    "compRate": "11.2",
                    "intro": "교육목표\n우리 대학의 교육목표는 진리, 정의 개척의 건학이념을 바탕으로 “학문발전을 선도”하고, “공동선을 추구하는 민주시민을 양성하고, 국가와 사회의 미래 개척에 헌신”하며, “지역사회 문화 창달에 노력하고 인류사회의 지속 가능한 발전을 모색”하는 것임\n\n핵심역량\n직지의 창의 정신을 품은 개신인재가 갖추어야 할 6대 역량으로서 창의성·휴머니즘·능동성·공동체·글로벌·전문성(New-CHANGE)을 설정함\n\n1. CHANGE : 창의성(Creativity), 휴머니즘(Humanism), 능동성(Activeness), 공동체(Neighbor Minded), 글로벌(Global), 전문성(Expertise)\n2. 고정된 것이 아닌 시대 및 사회의 변화에 능동적이고 유연하게 대응할 수 있도록 항상 새롭게 정립해 나갈 수 있는 New-CHANGE 역량 추구함\n3. 우리대학의 학생들은 개신인으로서 갖추어야 할 핵심역량(CHANGE역량)을 재학중에 함양하도록 노력함",
                    "totStud": 17705,
                    "tuition": 4273533,
                    "website": "https://www.chungbuk.ac.kr/site/www/main.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 46,
                            "gloRank": 2227,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 49,
                            "gloRank": 2075,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 29,
                            "gloRank": 2161,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 41,
                            "gloRank": 2087,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 33,
                            "gloRank": 1167,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 55,
                            "gloRank": 1833,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 41,
                            "gloRank": 1454,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 31,
                            "gloRank": 1137,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 30,
                            "gloRank": 1426,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 23,
                            "gloRank": 1621,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 44,
                            "gloRank": 1994,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 35,
                            "gloRank": 1402,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 34,
                            "gloRank": 2274,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 19,
                            "gloRank": 1751,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 47,
                            "gloRank": 2006,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 25,
                            "gloRank": 1530,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 11,
                            "gloRank": 436,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 45,
                            "gloRank": 1801,
                            "year": 2023
                        }
                    ],
                    "sfratio": "23.3"
                },
                {
                    "uni_id": 202,
                    "name": "제주대학교",
                    "engName": "Jeju National University",
                    "citation": "https://www.jejunu.ac.kr/schoolinfo/univinfo/vission",
                    "compRate": "7.5",
                    "intro": "설립이념\n진리, 정의, 창조\n\n비전\n기본에 충실한 대학, 미래를 준비하는 대학\n\n6대 목표\n1. 4차산업을 견인하는 인재양성대학\n2. 미래가치를 창출하는 연구대학\n3. 융복합시대를 선도하는 산학협력대학\n4. 제주의 가치를 높이는 특성화 대학\n5. 상생협력의 열린 대학\n6. 구성원의 꿈이 커가는 지속성장대학",
                    "totStud": 12033,
                    "tuition": 3927230,
                    "website": "https://www.jejunu.ac.kr/main",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 37,
                            "gloRank": 1855,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 39,
                            "gloRank": 1795,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 32,
                            "gloRank": 1091,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 43,
                            "gloRank": 1099,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 38,
                            "gloRank": 1415,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 45,
                            "gloRank": 1754,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 34,
                            "gloRank": 1670,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 51,
                            "gloRank": 2760,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 57,
                            "gloRank": 2601,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 53,
                            "gloRank": 2571,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 48,
                            "gloRank": 3114,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 40,
                            "gloRank": 3017,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 26,
                            "gloRank": 1263,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 15,
                            "gloRank": 618,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 30,
                            "gloRank": 1342,
                            "year": 2023
                        }
                    ],
                    "sfratio": "18.57"
                },
                {
                    "uni_id": 206,
                    "name": "강원대학교",
                    "engName": "Kangwon National University",
                    "citation": "https://www.kangwon.ac.kr/www/contents.do?key=2108&",
                    "compRate": "7.9",
                    "intro": "교육목표\n실사구시(實事求是) 건학이념을 바탕으로 '개인의 자아실현 및 공동체 진보를 구현하는 실사구시형 창의·협동 인재양성'을 학부교육의 목표로 설정함\n\n건학이념\n실사구시(實事求是)\n\n교육철학\n1. 참으로 존재하는 세계에 바탕을 두어 진리를 탐구함\n\n2. 올바른 마음, 열린 정신으로 품격과 실용을 추구함\n\n3. 학술·예술·기술에 대한 연구와 배움을 실천하고 인류 공동선에 이바지함\n\n교육목표\n실사구시 건학이념을 바탕으로 개인의 자아실현 및 공동체 진보를 구현하는 ‘실사구시형 창의·협동 인재’양성",
                    "totStud": 17114,
                    "tuition": 4070070,
                    "website": "https://www.kangwon.ac.kr/www/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 31,
                            "gloRank": 1517,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 57,
                            "gloRank": 2437,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 22,
                            "gloRank": 1889,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 24,
                            "gloRank": 1338,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 53,
                            "gloRank": 1802,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 34,
                            "gloRank": 900,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 17,
                            "gloRank": 684,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 29,
                            "gloRank": 1088,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 60,
                            "gloRank": 2643,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 25,
                            "gloRank": 1671,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 35,
                            "gloRank": 1573,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 22,
                            "gloRank": 1134,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 32,
                            "gloRank": 2542,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 31,
                            "gloRank": 2001,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 35,
                            "gloRank": 2756,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 49,
                            "gloRank": 2144,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 13,
                            "gloRank": 1069,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 10,
                            "gloRank": 389,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 48,
                            "gloRank": 1882,
                            "year": 2023
                        }
                    ],
                    "sfratio": "21.39"
                },
                {
                    "uni_id": 211,
                    "name": "국민대학교",
                    "engName": "Kookmin University",
                    "citation": "https://www.kookmin.ac.kr/comm/menu/user/dcc49bd0de0a82d918456e893d7bb02e/content/index.do",
                    "compRate": "9.6",
                    "intro": "01 불망구국(不忘救國) 정신\n\n국민대학교의 설립 주체인 해공을 비롯한 대한민국 임시정부의 구국정신과 독립정신이 투영되어 나타난 이념이다. 해공은 1946년 9월 1일 창학연설을 통하여 대학의 학문활동은 궁극적으로 국가와 민족을 구하는 일이어야 함을 역설하였다. 이는 선생이 몸소 체험한 독립운동의 실질적경험이 실천과 실용을 중시한 학풍으로 발전해야 함을 강조한 것이며, 대학의 학문활동이 궁극적으로 국가와 민족을 위하여야 한다는 해공의 평소 소신을 피력한 것이다.\n\n02 대학 본연의 임무 아카데미즘(학문연구)\n\n국민대학교의 아카데미즘은 '최고 수준의 학술연찬', '최고 권위의 진리탐구'라는 목표와 함께 ‘최고 교육의 보편화'라는 점에 역점을 두었다. 즉 국민대학교의 아카데미즘은 학술의 심오한 연구에 그치는 것만이 아니라, ‘최고 교육의 보편화'를 통해 건전한 정신과 이상을 배양시키고자 한 것이다. 국민대학교가 야간대학으로 출발한 것은, '생활상 사정의 소치로 주간업무에 종사하고 있는 허다(許多)한 구학(求學)의 청년에게 최고 학술을 연구하는 기회를 주어 최고 교육의 보편화를 추구'하는데 있었다. 이 점에서도 국민대학교는 '국민의 대학'이자 '민족의 대학'인 것이다.\n\n03 실천궁행(實踐躬行) 이념\n\n해공이 일제 강점기에 개인적으로 민족문제를 방기하지 않고 독립운동, 민족교육운동을 전개할 수 있었던 것은 실천궁행의 정신이 바로섰기 때문이다. 이러한 해공의 정신이 이어져 \"모든 학문은 실제를 존중하여 공막(空漠)한 이상의 추구에만 그치지 말고 반드시 실천궁행으로써 국리민복(國利民福)에 공헌해야 한다\" 는 국민대학교의 실천적 건학이념이 되었다.",
                    "totStud": 19702,
                    "tuition": 7927821,
                    "website": "https://www.kookmin.ac.kr/user/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 58,
                            "gloRank": 3172,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 32,
                            "gloRank": 1308,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 25,
                            "gloRank": 1990,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 39,
                            "gloRank": 2000,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 28,
                            "gloRank": 1033,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 65,
                            "gloRank": 2361,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 54,
                            "gloRank": 1899,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 58,
                            "gloRank": 2353,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 31,
                            "gloRank": 1503,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 41,
                            "gloRank": 2264,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 28,
                            "gloRank": 1236,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 34,
                            "gloRank": 1354,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 35,
                            "gloRank": 2581,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 40,
                            "gloRank": 2598,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 32,
                            "gloRank": 1453,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 34,
                            "gloRank": 1976,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 38,
                            "gloRank": 1452,
                            "year": 2023
                        }
                    ],
                    "sfratio": "29.49"
                },
                {
                    "uni_id": 216,
                    "name": "부경대학교",
                    "engName": "Pukyong National University",
                    "citation": "https://ko.wikipedia.org/wiki/%EB%B6%80%EA%B2%BD%EB%8C%80%ED%95%99%EA%B5%90",
                    "compRate": "8.4",
                    "intro": "대학이념·교육목적\n1996년 통합 당시 부경대학교의 대학이념 “열린 사고로 인류의 밝은 미래 창조”,교육목적 “열린 사고와 책임있는 실천력을 겸비한 인재양성”, 교훈 “미래를 우리 손으로\"이다.\n부경대학교의 대학이념, 교육목적, 교훈은 모두 개인의 창조적 성장뿐만 아니라 공동체의 발전을 위한 책임과 봉사를 함의하고 있으며 아울러 대학헌장(University Charter)의 구조도 자아의 성장이 사회와 인류의 공헌으로 이어질 수 있도록 되어 있다.\n부경대학교의 대학이념은 대학과 학생의 발전뿐만 아니라 그 발전이 지역, 사회, 인류로 확산을 지향한다.",
                    "totStud": 18656,
                    "tuition": 4034793,
                    "website": "https://www.pknu.ac.kr/main",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 41,
                            "gloRank": 2088,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 52,
                            "gloRank": 2128,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 20,
                            "gloRank": 1234,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 47,
                            "gloRank": 1591,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 51,
                            "gloRank": 1603,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 23,
                            "gloRank": 795,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 24,
                            "gloRank": 917,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 44,
                            "gloRank": 1928,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 27,
                            "gloRank": 1692,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 62,
                            "gloRank": 2775,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 42,
                            "gloRank": 1815,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 51,
                            "gloRank": 3366,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 23,
                            "gloRank": 1878,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 46,
                            "gloRank": 2002,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 17,
                            "gloRank": 1203,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 46,
                            "gloRank": 1816,
                            "year": 2023
                        }
                    ],
                    "sfratio": "30.33"
                },
                {
                    "uni_id": 218,
                    "name": "서울과학기술대학교",
                    "engName": "Seoul National University of Science and Technology",
                    "citation": "https://www.seoultech.ac.kr/intro/univ/idea_moral/",
                    "compRate": "11.5",
                    "intro": "대학 이념\n조국과 인류의 미래에 기여하는 세계속의 대학\n\n3대 교육목표\n1. 통합적 상상력을 추구하는 창의 교육\n2. 윤리적 판단을 고취하는 인문 교육\n3. 현장 적합성을 높이는 실천적 전공 교육",
                    "totStud": 12462,
                    "tuition": 5458040,
                    "website": "https://www.seoultech.ac.kr/index.jsp",
                    "rank": [],
                    "sfratio": "30.4"
                },
                {
                    "uni_id": 225,
                    "name": "숙명여자대학교",
                    "engName": "Sookmyung Women's University",
                    "citation": "https://www.sookmyung.ac.kr/sookmyungkr/923/subview.do",
                    "compRate": "12.7",
                    "intro": "교육이념\n정숙, 현명, 정대를 지향하는 여성교육과 민족의 정통성과 주체성을 확립하는 민족교육의 실현이라는 창학이념을 바탕으로 시대의 요청에 부응하는 능력 있는 여성을 양성하고 국가와 민족, 인류 발전에 기여하는 여성지도자를 배출하는데 있다.\n\n교육목적\n교육목적은 국가와 민족, 인류 발전에 기여하는 여성지도자 배출이라는 교육이념을 바탕으로 창의, 자주, 봉사의 정신을 가진 전문인을 육성하는데 있다.\n\n교육목표\n품격과 교양을 갖춘 문화인을 양성한다.\n전문성과 윤리의식을 겸비한 직업인을 육성한다.\n국가와 민족을 위하여 봉사하는 민주시민을 양성한다.\n세계화 시대를 이끌어 갈 여성지도자를 배출한다.",
                    "totStud": 12760,
                    "tuition": 8075638,
                    "website": "https://www.sookmyung.ac.kr/sookmyungkr/index.do",
                    "rank": [],
                    "sfratio": "29.81"
                },
                {
                    "uni_id": 227,
                    "name": "영산대학교",
                    "engName": "Youngsan University",
                    "citation": "https://www3.ysu.ac.kr/Sub_about/corporate01.asp?m=aea",
                    "compRate": "5.1",
                    "intro": "건학이념\n1. 원융무애 : '나'와 '나 아닌 것'의 둘이 아님을 깨달아 자유를 얻음\n2. 홍익인간 : 널리 세상을 이롭게 하는 경륜을 가짐\n\n교육목적\n참된 인성\n1. 진리에 입각한 합리적이고 올바른 가치관 정립\n2. 자우주체의식을 바탕으로 자신과 타인에 대한 진실성과 봉사를 생활화하는 품성\n\n창의성\n1. 자연과 사회의 이치와 진실을 보고 그 진실에 입각하여 문제를 해결하는 능력\n2. 지식과 기술을 통합하여 미래 지식체계나 기술을 창출 할 수 있는 능력\n\n실용성\n1. 기초 및 전문지식 등의 배양을 통하여 현실의 문제를 해결 할 수 있는 능력\n2. 글로벌 의사소통능력과 타문화에 대한 개방적 수용자세",
                    "totStud": 2341,
                    "tuition": 6762079,
                    "website": "https://www.ysu.ac.kr/kor/Main.do",
                    "rank": [],
                    "sfratio": "22.95"
                },
                {
                    "uni_id": 229,
                    "name": "홍익대학교",
                    "engName": "Hongik University",
                    "citation": "https://www.hongik.ac.kr/contents/www/cor/philosophy.html",
                    "compRate": "16.2",
                    "intro": "건학이념\n1. 홍익인간 : 폭넓은 안목과 소통능력을 갖추어 민주시민으로서 자신의 책임을 다하는 인재\n2. 산학일체 : 교육의 생산성을 높여 산업사회를 주도하고 능동적 인재를 양성하는 실용적 학문 교육을 지향한다. \n\n교육목적\n홍익인간과 산학일체의 이념으로 개인의 능력을 계발하고, 주체성과 자주성을 길러 국가사회 발전에 능동적으로 공헌할 수 있는 인재를 양성한다. \n\n교육목표\n1. 폭넓은 안목과 소통능력을 갖추어 민주시민으로서 자신의 책임을 다한느 자주적인 교양인 육성\n2. 학문과 예술의 능력을 길러 민족문화를 수호하고 글로벌 시대의 변화를 주도하는 창조적인 전문인 육성\n3. 공동의 행복을 추구하고 미래지향적인 자세로 사회발전에 공헌하는 협동적인 사회인 육성",
                    "totStud": 17743,
                    "tuition": 8333478,
                    "website": "https://www.hongik.ac.kr/index.do",
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 33,
                            "gloRank": 1651,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 55,
                            "gloRank": 2372,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 15,
                            "gloRank": 1540,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 30,
                            "gloRank": 1735,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 33,
                            "gloRank": 1167,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 51,
                            "gloRank": 1807,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 40,
                            "gloRank": 1835,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 36,
                            "gloRank": 1940,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 33,
                            "gloRank": 1525,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 63,
                            "gloRank": 3998,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 53,
                            "gloRank": 2337,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 23,
                            "gloRank": 1451,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 50,
                            "gloRank": 1935,
                            "year": 2023
                        }
                    ],
                    "sfratio": "32.08"
                },
                {
                    "uni_id": 231,
                    "name": "인천대학교",
                    "engName": null,
                    "citation": "https://www.inu.ac.kr/mbshome/mbs/inu/subview.do?id=inu_010400000000",
                    "compRate": "9.3",
                    "intro": "비전 : 세계의 인재를 미래의 리더로 양성하는 대학\n\n목표 : 실용학문 중심 연구 거점 국립대학 체계 정착\n\n3대 추진전략 :\n    1. 교육, 연구 인프라 확충\n   2. 특성화 및 공유가치 창출\n   3. 대학 운영 체계 혁신\n\n전략목표:\n   1. 매트릭스형 대학으로 창의적 인재 양성\n   2. 글로벌 연구, 산학협력 역량 강화\n   3. 대학-사회 공유가치 창출\n   4. 혁신적 발상으로 대학운영 체계 개선",
                    "totStud": 13195,
                    "tuition": 4632119,
                    "website": "https://www.inu.ac.kr/mbshome/mbs/inu/index.do",
                    "rank": [],
                    "sfratio": "26.93"
                },
                {
                    "uni_id": 235,
                    "name": "경상국립대학교",
                    "engName": null,
                    "citation": "https://namu.wiki/w/%EA%B2%BD%EC%83%81%EA%B5%AD%EB%A6%BD%EB%8C%80%ED%95%99%EA%B5%90",
                    "compRate": "6.6",
                    "intro": "경상남도 진주시, 통영시, 창원시에 소재한 국립대학이며, 1910년 공립진주실업학교로 설립된 현재 경상남도에서 가장 오래된 대학교이다. 1948년 진주농림중학교에서 도립진주농과대학으로 분리 승격되었고, 이후 별도의 학교로 성장해 각각 경남과기대와 경상대가 되었다. 그리고 2021년 3월 1일 다시 경상대학교가 경남과학기술대학교를 흡수통합[4]하는 형태로 결합하여 경상국립대학교가 되었다.[5]\n\n이외에도 1984년 경남간호전문대학, 1995년 통영수산전문대학을 통합하고 성장하여 현재는 학부생이 약 2만 명이 훨씬 넘는 경남 최대규모의 국립대학이 되었다. 또한 거점국립대학교인만큼 경상남도에 위치한 대학 중 유일하게 의과대학, 약학대학, 수의과대학, 사범대학 등이 모두 있으며 이는 전국에서도 보기 드문 규모이다.\n",
                    "totStud": 17469,
                    "tuition": 4083198,
                    "website": "https://www.gnu.ac.kr/main/main.do",
                    "rank": [],
                    "sfratio": "17.08"
                },
                {
                    "uni_id": 238,
                    "name": "순천향대학교",
                    "engName": null,
                    "citation": "https://home.sch.ac.kr/sch/01/010700.jsp",
                    "compRate": "8.2",
                    "intro": "사회공헌형 창의인재 양성\n1. 공감형 인재\n사회공감, 타인공감, 자기공감\n2. 통섭형 창의 인재\n평생학습, 통섭, 창의적 문제해결\n3. 글로벌 소통 인재\n글로벌, 지역사회, 커뮤니케이션\n\n사회공감 : 인간사랑 정신을 가지고 공동체 의식을 바탕으로 나눔을 실천할 수 있는 능력\n타인공감 : 타인에 대한 배려와 포옹력을 바탕으로 협업을 통해 최상의 성과를 이끌어 내는 능력\n자기공감 : 자신에 대한 이해와 믿음을 바탕으로 목표를 설정하고자기주도적 삶을 영위하는 능력\n평생학습 : 통섭을 위한 학습 방법과 전략을 바탕으로 지식획들을 위한 노력을 평생동안 실천하는 능력\n통섭역량 : 다양한 분야에서 학습한 내용을 상호 연관시켜 통합하고 체계화 할 수 있는 능력\n창의적 문제해결 : 새로운 것을 도출하고 자원과 정보를 효율적으로 활용하여 문제를 해결하는 능력\n글로벌 : 국제 사회와 외국인에 대한 이해를 기초로 유능한 세계인으로 기능할 수 있는 능력\n지역사회 : 지역사회에 대한 관심과 애정을 갖고 지역사회 발전과 삶의 질 향상을 위한 활동을 수행하는 능력\n커뮤니케이션 : 다양한 도구를 활용하여 자신의 생각과 감정을 효과적으로 표현하고 타인의 의사를 정확하게 이해하는 능력",
                    "totStud": 11742,
                    "tuition": 7830448,
                    "website": "https://www.sch.ac.kr/",
                    "rank": [],
                    "sfratio": "12.63"
                },
                {
                    "uni_id": 240,
                    "name": "숭실대학교",
                    "engName": null,
                    "citation": "https://ssu.ac.kr/%ed%95%99%ea%b5%90%ec%86%8c%ea%b0%9c/%ea%b5%90%ec%9c%a1%ec%9d%b4%eb%85%90/",
                    "compRate": "13.8",
                    "intro": "진리와 봉사\n숭실대학교는 한국 최초의 근대 대학으로서, 기독교 정신을 바탕으로 진리와 봉사를 건학이념으로 하여 설립되었습니다.\n\n교육목표\n1. 기독교적 인간교육 : 기독교 가치체계와 세계관의 함양을 위해 기독교적 인간교육을 실시하고 있습니다.\n2. 첨단응용 기술교육 : 미래사회를 주도해 나갈 유능한 인재를 양성하기 위하여 심오한 학문과 첨단응용 기술 교육을 실시하고 있습니다.\n3. 봉사적 실천교육 : 전공분야의 전문적 수월성 교육과 국가와 인류에 기여할 인재를 양성하는 봉사적 실천교육을 실시하고 있습니다.\n4. 통일지향적 세계시민교육 : 민족 발전을 위한 평화 통일 및 국가와 인류의 번영을 선도하기 위하여 통일지향적 세계 시민 교육을 실시하고 있습니다.",
                    "totStud": 17708,
                    "tuition": 7928397,
                    "website": "https://ssu.ac.kr/",
                    "rank": [],
                    "sfratio": "34.72"
                },
                {
                    "uni_id": 244,
                    "name": "한국항공대학교",
                    "engName": null,
                    "citation": "http://www.hangkong.ac.kr/web/pages/gc66045h.do",
                    "compRate": "9.9",
                    "intro": "건학정신 : 개척자적 정신을 배양하고, 지성인으로서의 교양과 첨단의 과학기술로 무장하여, 새로운 시대의 역사적 소임을 다할 수 있는 능력있는 선도자를 배출\n\n<교육이념>\n인격도야(人格陶冶) : 마음과 몸매를 말게\n진리탐구(眞理探究) : 학문과 창의를 넓게\n인화협동(人和協同) : 화협과 단결을 굳게\n\n교육목적 : 항공우주과학을 중심으로 국가사회와 인류발전에 필요한 다양한 학문분야에 관한 이론과 응용방법을 교수 및 연구지도자로서의 인격과 실력을 갖춘 유능한 인재양성",
                    "totStud": 4838,
                    "tuition": 8465834,
                    "website": "http://www.hangkong.ac.kr/web/index.do",
                    "rank": [],
                    "sfratio": "28.46"
                },
                {
                    "uni_id": 2965,
                    "name": null,
                    "engName": "Korea University of Science and Technology",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 2,
                            "gloRank": 240,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 23,
                            "gloRank": 1149,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 41,
                            "gloRank": 1359,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 10,
                            "gloRank": 400,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 16,
                            "gloRank": 594,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 8,
                            "gloRank": 495,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 45,
                            "gloRank": 1944,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 8,
                            "gloRank": 697,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 7,
                            "gloRank": 606,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 12,
                            "gloRank": 749,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 11,
                            "gloRank": 981,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 7,
                            "gloRank": 773,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 10,
                            "gloRank": 922,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 19,
                            "gloRank": 977,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 24,
                            "gloRank": 1016,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 2970,
                    "name": null,
                    "engName": "Myongji University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 6,
                            "gloRank": 505,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 59,
                            "gloRank": 2943,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 46,
                            "gloRank": 2295,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 66,
                            "gloRank": 2487,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 6,
                            "gloRank": 305,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 26,
                            "gloRank": 918,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 41,
                            "gloRank": 1519,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 33,
                            "gloRank": 1657,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 55,
                            "gloRank": 3076,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 8,
                            "gloRank": 610,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 31,
                            "gloRank": 1275,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 50,
                            "gloRank": 3279,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 39,
                            "gloRank": 2952,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 43,
                            "gloRank": 1873,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 54,
                            "gloRank": 2278,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 2977,
                    "name": null,
                    "engName": "Chonbuk National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 12,
                            "gloRank": 759,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 26,
                            "gloRank": 1196,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 20,
                            "gloRank": 1845,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 38,
                            "gloRank": 1961,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 17,
                            "gloRank": 742,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 26,
                            "gloRank": 666,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 19,
                            "gloRank": 738,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 17,
                            "gloRank": 698,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 8,
                            "gloRank": 311,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 21,
                            "gloRank": 1093,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 50,
                            "gloRank": 2726,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 22,
                            "gloRank": 1094,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 27,
                            "gloRank": 1173,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 38,
                            "gloRank": 2647,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 18,
                            "gloRank": 1292,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 18,
                            "gloRank": 1702,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 11,
                            "gloRank": 938,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 20,
                            "gloRank": 1372,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 3,
                            "gloRank": 204,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 16,
                            "gloRank": 794,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 2984,
                    "name": null,
                    "engName": "Sookmyung Womens University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 18,
                            "gloRank": 1041,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 15,
                            "gloRank": 930,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 52,
                            "gloRank": 2551,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 50,
                            "gloRank": 1651,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 12,
                            "gloRank": 419,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 38,
                            "gloRank": 1415,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 43,
                            "gloRank": 1623,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 39,
                            "gloRank": 1759,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 63,
                            "gloRank": 3555,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 41,
                            "gloRank": 1771,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 40,
                            "gloRank": 1733,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 34,
                            "gloRank": 2579,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 37,
                            "gloRank": 2421,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 38,
                            "gloRank": 1586,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 39,
                            "gloRank": 2125,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 31,
                            "gloRank": 1347,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 2989,
                    "name": null,
                    "engName": "Daegu Gyeongbuk Institute of Science and Technology",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 22,
                            "gloRank": 1368,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 22,
                            "gloRank": 1143,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 22,
                            "gloRank": 926,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 1,
                            "gloRank": 73,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 29,
                            "gloRank": 994,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 7,
                            "gloRank": 493,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 11,
                            "gloRank": 565,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 25,
                            "gloRank": 1155,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 14,
                            "gloRank": 857,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 20,
                            "gloRank": 1345,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 30,
                            "gloRank": 1325,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 18,
                            "gloRank": 847,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 2991,
                    "name": null,
                    "engName": "Daegu Catholic University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 23,
                            "gloRank": 1370,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 54,
                            "gloRank": 1830,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 37,
                            "gloRank": 995,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 63,
                            "gloRank": 2466,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 33,
                            "gloRank": 1213,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 61,
                            "gloRank": 2862,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 54,
                            "gloRank": 3066,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 51,
                            "gloRank": 2317,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 52,
                            "gloRank": 2450,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 56,
                            "gloRank": 3651,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 69,
                            "gloRank": 2903,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 75,
                            "gloRank": 3586,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 2995,
                    "name": null,
                    "engName": "Korea Maritime University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 26,
                            "gloRank": 1461,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 61,
                            "gloRank": 3012,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 51,
                            "gloRank": 2536,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 67,
                            "gloRank": 2546,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 61,
                            "gloRank": 2215,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 48,
                            "gloRank": 1741,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 47,
                            "gloRank": 1836,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 38,
                            "gloRank": 1733,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 83,
                            "gloRank": 4315,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 75,
                            "gloRank": 4930,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 37,
                            "gloRank": 2881,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 54,
                            "gloRank": 2338,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 55,
                            "gloRank": 2291,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 2997,
                    "name": null,
                    "engName": "Daegu University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 27,
                            "gloRank": 1462,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 65,
                            "gloRank": 3563,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 72,
                            "gloRank": 2902,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 42,
                            "gloRank": 1073,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 67,
                            "gloRank": 2765,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 64,
                            "gloRank": 3044,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 68,
                            "gloRank": 3395,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 56,
                            "gloRank": 3136,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 79,
                            "gloRank": 3957,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 61,
                            "gloRank": 3227,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 28,
                            "gloRank": 2422,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 89,
                            "gloRank": 5921,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 71,
                            "gloRank": 3227,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 70,
                            "gloRank": 3177,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3003,
                    "name": null,
                    "engName": "Catholic University of Korea",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 32,
                            "gloRank": 1571,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 14,
                            "gloRank": 879,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 53,
                            "gloRank": 2602,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 23,
                            "gloRank": 966,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 59,
                            "gloRank": 2015,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 74,
                            "gloRank": 3313,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 26,
                            "gloRank": 1024,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 11,
                            "gloRank": 441,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 52,
                            "gloRank": 2219,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 57,
                            "gloRank": 3285,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 23,
                            "gloRank": 1096,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 7,
                            "gloRank": 506,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 16,
                            "gloRank": 1592,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 21,
                            "gloRank": 1347,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 22,
                            "gloRank": 1215,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 40,
                            "gloRank": 2159,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 27,
                            "gloRank": 1183,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3007,
                    "name": null,
                    "engName": "Soongsil University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 35,
                            "gloRank": 1724,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 54,
                            "gloRank": 2324,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 29,
                            "gloRank": 1726,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 30,
                            "gloRank": 1064,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 35,
                            "gloRank": 1283,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 63,
                            "gloRank": 2978,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 47,
                            "gloRank": 2085,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 40,
                            "gloRank": 2223,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 65,
                            "gloRank": 2904,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 47,
                            "gloRank": 2137,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 43,
                            "gloRank": 2937,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 42,
                            "gloRank": 1791,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 33,
                            "gloRank": 1956,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 33,
                            "gloRank": 1418,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3011,
                    "name": null,
                    "engName": "Gyeongsang National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 38,
                            "gloRank": 1881,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 58,
                            "gloRank": 2704,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 27,
                            "gloRank": 2061,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 26,
                            "gloRank": 1521,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 61,
                            "gloRank": 2064,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 19,
                            "gloRank": 576,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 47,
                            "gloRank": 1707,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 39,
                            "gloRank": 1468,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 46,
                            "gloRank": 1972,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 37,
                            "gloRank": 2175,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 40,
                            "gloRank": 1759,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 38,
                            "gloRank": 1613,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 36,
                            "gloRank": 2377,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 34,
                            "gloRank": 2735,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 57,
                            "gloRank": 2454,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 6,
                            "gloRank": 293,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 62,
                            "gloRank": 2688,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3013,
                    "name": null,
                    "engName": "Kwangwoon University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 39,
                            "gloRank": 1987,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 12,
                            "gloRank": 823,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 27,
                            "gloRank": 1030,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 30,
                            "gloRank": 1028,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 28,
                            "gloRank": 1292,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 28,
                            "gloRank": 1769,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 17,
                            "gloRank": 913,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 9,
                            "gloRank": 611,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 25,
                            "gloRank": 1539,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 20,
                            "gloRank": 1167,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 22,
                            "gloRank": 962,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3015,
                    "name": null,
                    "engName": "Keimyung University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 40,
                            "gloRank": 2084,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 17,
                            "gloRank": 1040,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 40,
                            "gloRank": 2033,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 51,
                            "gloRank": 1684,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 14,
                            "gloRank": 432,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 36,
                            "gloRank": 1309,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 48,
                            "gloRank": 1846,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 72,
                            "gloRank": 3585,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 38,
                            "gloRank": 2180,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 64,
                            "gloRank": 2898,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 55,
                            "gloRank": 2687,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 25,
                            "gloRank": 2078,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 55,
                            "gloRank": 3600,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 48,
                            "gloRank": 2112,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 53,
                            "gloRank": 2169,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3018,
                    "name": null,
                    "engName": "Dong-Eui University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 42,
                            "gloRank": 2114,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 74,
                            "gloRank": 2920,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 74,
                            "gloRank": 3708,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 71,
                            "gloRank": 3216,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 62,
                            "gloRank": 2970,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 72,
                            "gloRank": 3257,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 57,
                            "gloRank": 2755,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 83,
                            "gloRank": 5512,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 72,
                            "gloRank": 3301,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 77,
                            "gloRank": 3649,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3021,
                    "name": null,
                    "engName": "Seoul National University of Science & Technology",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 44,
                            "gloRank": 2137,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 47,
                            "gloRank": 2057,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 18,
                            "gloRank": 1651,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 49,
                            "gloRank": 2398,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 25,
                            "gloRank": 996,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 32,
                            "gloRank": 787,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 57,
                            "gloRank": 2082,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 18,
                            "gloRank": 972,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 31,
                            "gloRank": 1809,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 69,
                            "gloRank": 2985,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 54,
                            "gloRank": 3525,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 13,
                            "gloRank": 1346,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 45,
                            "gloRank": 1905,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 36,
                            "gloRank": 2026,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 47,
                            "gloRank": 1831,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3023,
                    "name": null,
                    "engName": "Incheon National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 45,
                            "gloRank": 2140,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 48,
                            "gloRank": 2071,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 14,
                            "gloRank": 1098,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 29,
                            "gloRank": 1055,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 63,
                            "gloRank": 2241,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 28,
                            "gloRank": 980,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 44,
                            "gloRank": 1725,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 10,
                            "gloRank": 531,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 15,
                            "gloRank": 1253,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 58,
                            "gloRank": 2647,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 37,
                            "gloRank": 1559,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 23,
                            "gloRank": 2029,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 46,
                            "gloRank": 3067,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 41,
                            "gloRank": 3225,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 44,
                            "gloRank": 1891,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 31,
                            "gloRank": 1939,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 35,
                            "gloRank": 1429,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3026,
                    "name": null,
                    "engName": "Hanbat National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 47,
                            "gloRank": 2257,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 45,
                            "gloRank": 1982,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 48,
                            "gloRank": 2359,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 58,
                            "gloRank": 2011,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 45,
                            "gloRank": 1624,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 51,
                            "gloRank": 2175,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 35,
                            "gloRank": 1919,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 66,
                            "gloRank": 2906,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 80,
                            "gloRank": 5269,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 65,
                            "gloRank": 2726,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 57,
                            "gloRank": 2419,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3028,
                    "name": null,
                    "engName": "Sunchon National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 48,
                            "gloRank": 2327,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 63,
                            "gloRank": 3226,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 56,
                            "gloRank": 1943,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 62,
                            "gloRank": 2218,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 55,
                            "gloRank": 1912,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 52,
                            "gloRank": 2083,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 64,
                            "gloRank": 3171,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 70,
                            "gloRank": 3139,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 45,
                            "gloRank": 1963,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 66,
                            "gloRank": 4191,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 55,
                            "gloRank": 2352,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 16,
                            "gloRank": 763,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 61,
                            "gloRank": 2625,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3030,
                    "name": null,
                    "engName": "Gachon University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 49,
                            "gloRank": 2398,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 31,
                            "gloRank": 1250,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 36,
                            "gloRank": 1921,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 18,
                            "gloRank": 831,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 35,
                            "gloRank": 933,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 52,
                            "gloRank": 1863,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 25,
                            "gloRank": 954,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 25,
                            "gloRank": 1189,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 46,
                            "gloRank": 2511,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 27,
                            "gloRank": 1228,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 20,
                            "gloRank": 1050,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 29,
                            "gloRank": 2497,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 29,
                            "gloRank": 1720,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 33,
                            "gloRank": 1456,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 29,
                            "gloRank": 1897,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 29,
                            "gloRank": 1258,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3032,
                    "name": null,
                    "engName": "Kyonggi University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 50,
                            "gloRank": 2534,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 62,
                            "gloRank": 3034,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 21,
                            "gloRank": 1242,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 64,
                            "gloRank": 2313,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 39,
                            "gloRank": 1044,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 44,
                            "gloRank": 1591,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 73,
                            "gloRank": 4048,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 57,
                            "gloRank": 2577,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 43,
                            "gloRank": 2290,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 78,
                            "gloRank": 3807,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 59,
                            "gloRank": 2860,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 76,
                            "gloRank": 4986,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 68,
                            "gloRank": 2863,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 28,
                            "gloRank": 1757,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 67,
                            "gloRank": 3109,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3034,
                    "name": null,
                    "engName": "Wonkwang University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 51,
                            "gloRank": 2553,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 26,
                            "gloRank": 1196,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 63,
                            "gloRank": 2196,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 23,
                            "gloRank": 638,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 76,
                            "gloRank": 3385,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 34,
                            "gloRank": 1317,
                            "year": 2023
                        },
                        {
                            "majorName": "Dentistry",
                            "totRank": 12,
                            "gloRank": 555,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 59,
                            "gloRank": 2629,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 43,
                            "gloRank": 1890,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 49,
                            "gloRank": 2269,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 42,
                            "gloRank": 2824,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 19,
                            "gloRank": 1151,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 52,
                            "gloRank": 2121,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3036,
                    "name": null,
                    "engName": "Woosong University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 52,
                            "gloRank": 2646,
                            "year": 2023
                        },
                        {
                            "majorName": "Arts and Humanities",
                            "totRank": 21,
                            "gloRank": 1852,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 23,
                            "gloRank": 1287,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 59,
                            "gloRank": 2020,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 60,
                            "gloRank": 2307,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 41,
                            "gloRank": 1846,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 30,
                            "gloRank": 1780,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 87,
                            "gloRank": 5749,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 22,
                            "gloRank": 1417,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 58,
                            "gloRank": 2538,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3039,
                    "name": null,
                    "engName": "Changwon National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 54,
                            "gloRank": 2847,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 64,
                            "gloRank": 3344,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 34,
                            "gloRank": 1852,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 65,
                            "gloRank": 2439,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 60,
                            "gloRank": 2118,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 68,
                            "gloRank": 2828,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 69,
                            "gloRank": 3560,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 71,
                            "gloRank": 3488,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 61,
                            "gloRank": 3542,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 85,
                            "gloRank": 4508,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 70,
                            "gloRank": 4467,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 91,
                            "gloRank": 6010,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 42,
                            "gloRank": 3419,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 75,
                            "gloRank": 3512,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 69,
                            "gloRank": 3145,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3041,
                    "name": null,
                    "engName": "Semyung University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 55,
                            "gloRank": 2998,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 77,
                            "gloRank": 3533,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 54,
                            "gloRank": 1760,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 61,
                            "gloRank": 2781,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 80,
                            "gloRank": 4082,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 67,
                            "gloRank": 4106,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 93,
                            "gloRank": 6381,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 73,
                            "gloRank": 3397,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3043,
                    "name": null,
                    "engName": "Kongju National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 56,
                            "gloRank": 3130,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 36,
                            "gloRank": 1743,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 43,
                            "gloRank": 2124,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 62,
                            "gloRank": 2108,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 49,
                            "gloRank": 1522,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 42,
                            "gloRank": 1486,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 67,
                            "gloRank": 3465,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 55,
                            "gloRank": 2391,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 52,
                            "gloRank": 2799,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 73,
                            "gloRank": 3310,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 58,
                            "gloRank": 2832,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 65,
                            "gloRank": 4136,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 38,
                            "gloRank": 2888,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 63,
                            "gloRank": 2620,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 60,
                            "gloRank": 2585,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3045,
                    "name": null,
                    "engName": "Dong-A University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 57,
                            "gloRank": 3156,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 38,
                            "gloRank": 1794,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 11,
                            "gloRank": 996,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 68,
                            "gloRank": 2578,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 36,
                            "gloRank": 978,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 64,
                            "gloRank": 2515,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 51,
                            "gloRank": 1977,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 67,
                            "gloRank": 3385,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 42,
                            "gloRank": 2276,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 63,
                            "gloRank": 2819,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 56,
                            "gloRank": 2748,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 59,
                            "gloRank": 3863,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 58,
                            "gloRank": 2459,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 65,
                            "gloRank": 2977,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3049,
                    "name": null,
                    "engName": "Chosun University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 60,
                            "gloRank": 3289,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 41,
                            "gloRank": 1871,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 28,
                            "gloRank": 1678,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 37,
                            "gloRank": 1285,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 29,
                            "gloRank": 731,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 49,
                            "gloRank": 1743,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 46,
                            "gloRank": 1766,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 56,
                            "gloRank": 2430,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 45,
                            "gloRank": 2473,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 60,
                            "gloRank": 2745,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 54,
                            "gloRank": 2634,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 49,
                            "gloRank": 3198,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 10,
                            "gloRank": 1038,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 51,
                            "gloRank": 2186,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 32,
                            "gloRank": 1412,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3051,
                    "name": null,
                    "engName": "Kunsan National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 61,
                            "gloRank": 3302,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 51,
                            "gloRank": 2110,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 55,
                            "gloRank": 1838,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 64,
                            "gloRank": 2274,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 62,
                            "gloRank": 2456,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 58,
                            "gloRank": 2621,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 70,
                            "gloRank": 4662,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 29,
                            "gloRank": 2441,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 67,
                            "gloRank": 2824,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 51,
                            "gloRank": 1991,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3053,
                    "name": null,
                    "engName": "Sun Moon University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 62,
                            "gloRank": 3309,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 40,
                            "gloRank": 1472,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 67,
                            "gloRank": 2924,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 62,
                            "gloRank": 3233,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 90,
                            "gloRank": 5980,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 37,
                            "gloRank": 1558,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 76,
                            "gloRank": 3639,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3055,
                    "name": null,
                    "engName": "Paichai University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 63,
                            "gloRank": 3329,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 79,
                            "gloRank": 3624,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 99,
                            "gloRank": 7180,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3057,
                    "name": null,
                    "engName": "Catholic Kwandong University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 64,
                            "gloRank": 3352,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 39,
                            "gloRank": 1732,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 50,
                            "gloRank": 2293,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 53,
                            "gloRank": 3522,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3059,
                    "name": null,
                    "engName": "Eulji University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 65,
                            "gloRank": 3388,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 71,
                            "gloRank": 3322,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 65,
                            "gloRank": 3158,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 74,
                            "gloRank": 3399,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 63,
                            "gloRank": 3395,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 73,
                            "gloRank": 4879,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 59,
                            "gloRank": 2504,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3061,
                    "name": null,
                    "engName": "The Korea National University of Transportation",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 66,
                            "gloRank": 3403,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 37,
                            "gloRank": 1792,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 54,
                            "gloRank": 2610,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 42,
                            "gloRank": 1373,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 16,
                            "gloRank": 476,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 77,
                            "gloRank": 3520,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 20,
                            "gloRank": 1067,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 38,
                            "gloRank": 1699,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 43,
                            "gloRank": 1889,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 64,
                            "gloRank": 4109,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 40,
                            "gloRank": 1667,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 59,
                            "gloRank": 2553,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3064,
                    "name": null,
                    "engName": "Hankyong National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 68,
                            "gloRank": 3471,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 73,
                            "gloRank": 2914,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 66,
                            "gloRank": 2365,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 56,
                            "gloRank": 2079,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 42,
                            "gloRank": 1528,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 76,
                            "gloRank": 3584,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 72,
                            "gloRank": 4859,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 66,
                            "gloRank": 2770,
                            "year": 2023
                        },
                        {
                            "majorName": "Veterinary",
                            "totRank": 18,
                            "gloRank": 840,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 71,
                            "gloRank": 3230,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3066,
                    "name": null,
                    "engName": "Cha University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 69,
                            "gloRank": 3516,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 45,
                            "gloRank": 1508,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 33,
                            "gloRank": 848,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 38,
                            "gloRank": 1406,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 32,
                            "gloRank": 1518,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 39,
                            "gloRank": 1720,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 39,
                            "gloRank": 2518,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 21,
                            "gloRank": 1195,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3068,
                    "name": null,
                    "engName": "Kumoh National Institute of Technology",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 70,
                            "gloRank": 3557,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 56,
                            "gloRank": 2405,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 39,
                            "gloRank": 1341,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 46,
                            "gloRank": 1656,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 37,
                            "gloRank": 1706,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 56,
                            "gloRank": 2522,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 62,
                            "gloRank": 3950,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 62,
                            "gloRank": 2586,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 34,
                            "gloRank": 1422,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3070,
                    "name": null,
                    "engName": "Gangneung-Wonju National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 71,
                            "gloRank": 3566,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 60,
                            "gloRank": 2985,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 75,
                            "gloRank": 2977,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 45,
                            "gloRank": 1258,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 61,
                            "gloRank": 2443,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 70,
                            "gloRank": 3717,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 44,
                            "gloRank": 2293,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 86,
                            "gloRank": 4672,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 66,
                            "gloRank": 3893,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 79,
                            "gloRank": 5179,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 26,
                            "gloRank": 2000,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 76,
                            "gloRank": 3585,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 73,
                            "gloRank": 3312,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3072,
                    "name": null,
                    "engName": "Andong National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 72,
                            "gloRank": 3597,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 66,
                            "gloRank": 3614,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 68,
                            "gloRank": 2723,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 66,
                            "gloRank": 3349,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 53,
                            "gloRank": 2472,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 94,
                            "gloRank": 6511,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 78,
                            "gloRank": 3715,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 79,
                            "gloRank": 3697,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3074,
                    "name": null,
                    "engName": "Sangji University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 73,
                            "gloRank": 3999,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 72,
                            "gloRank": 3428,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 56,
                            "gloRank": 2311,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 87,
                            "gloRank": 4771,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 68,
                            "gloRank": 4388,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 82,
                            "gloRank": 5431,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3076,
                    "name": null,
                    "engName": "Mokpo National University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 74,
                            "gloRank": 4014,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 44,
                            "gloRank": 1416,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 52,
                            "gloRank": 1709,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 59,
                            "gloRank": 2197,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 20,
                            "gloRank": 848,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 47,
                            "gloRank": 2540,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 45,
                            "gloRank": 1999,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 60,
                            "gloRank": 3898,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 12,
                            "gloRank": 1308,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 50,
                            "gloRank": 2161,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 56,
                            "gloRank": 2364,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3078,
                    "name": null,
                    "engName": "Soon Chun Hyang University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 75,
                            "gloRank": 4163,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 19,
                            "gloRank": 1059,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 44,
                            "gloRank": 2263,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 15,
                            "gloRank": 717,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 4,
                            "gloRank": 254,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 32,
                            "gloRank": 1085,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 57,
                            "gloRank": 2346,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 14,
                            "gloRank": 773,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 48,
                            "gloRank": 2603,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 48,
                            "gloRank": 2211,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 48,
                            "gloRank": 2199,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 36,
                            "gloRank": 2631,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 38,
                            "gloRank": 2451,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 23,
                            "gloRank": 1222,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 19,
                            "gloRank": 848,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3080,
                    "name": null,
                    "engName": "Cheongju University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 76,
                            "gloRank": 4176,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 50,
                            "gloRank": 2487,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 72,
                            "gloRank": 3256,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 92,
                            "gloRank": 6230,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 83,
                            "gloRank": 4434,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 80,
                            "gloRank": 3826,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3082,
                    "name": null,
                    "engName": "Hannam University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 77,
                            "gloRank": 4265,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 70,
                            "gloRank": 2645,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 33,
                            "gloRank": 1191,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 69,
                            "gloRank": 3477,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 62,
                            "gloRank": 3553,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 75,
                            "gloRank": 3536,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 85,
                            "gloRank": 5687,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 77,
                            "gloRank": 3631,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 16,
                            "gloRank": 1191,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 72,
                            "gloRank": 3253,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3084,
                    "name": null,
                    "engName": "Sangmyung University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 78,
                            "gloRank": 4268,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 43,
                            "gloRank": 1929,
                            "year": 2023
                        },
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 45,
                            "gloRank": 2287,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 49,
                            "gloRank": 1599,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 70,
                            "gloRank": 3215,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 73,
                            "gloRank": 3298,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 24,
                            "gloRank": 1142,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 59,
                            "gloRank": 3414,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 88,
                            "gloRank": 4878,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 69,
                            "gloRank": 4396,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 7,
                            "gloRank": 1148,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 68,
                            "gloRank": 4485,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 80,
                            "gloRank": 3902,
                            "year": 2023
                        },
                        {
                            "majorName": "Economics, Econometrics and Finance",
                            "totRank": 38,
                            "gloRank": 2067,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 40,
                            "gloRank": 1485,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3086,
                    "name": null,
                    "engName": "Kyungsung University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 79,
                            "gloRank": 4308,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 46,
                            "gloRank": 1383,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 69,
                            "gloRank": 3127,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 68,
                            "gloRank": 3510,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 84,
                            "gloRank": 4318,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 88,
                            "gloRank": 5752,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3088,
                    "name": null,
                    "engName": "Hoseo University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 80,
                            "gloRank": 4317,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 69,
                            "gloRank": 2609,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 24,
                            "gloRank": 647,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 75,
                            "gloRank": 3341,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 54,
                            "gloRank": 2140,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 54,
                            "gloRank": 2323,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 39,
                            "gloRank": 2196,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 71,
                            "gloRank": 3254,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 51,
                            "gloRank": 2303,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 77,
                            "gloRank": 5139,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 82,
                            "gloRank": 4333,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 78,
                            "gloRank": 3662,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3090,
                    "name": null,
                    "engName": "Daejeon University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 81,
                            "gloRank": 4444,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 48,
                            "gloRank": 1517,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 34,
                            "gloRank": 1218,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 59,
                            "gloRank": 2417,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 59,
                            "gloRank": 2724,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 60,
                            "gloRank": 2960,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 57,
                            "gloRank": 3754,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 60,
                            "gloRank": 2541,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3092,
                    "name": null,
                    "engName": "Sahmyook University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 82,
                            "gloRank": 4469,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 66,
                            "gloRank": 3448,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 82,
                            "gloRank": 4314,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 86,
                            "gloRank": 5693,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3094,
                    "name": null,
                    "engName": "Inje University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 83,
                            "gloRank": 4491,
                            "year": 2023
                        },
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 46,
                            "gloRank": 1986,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 60,
                            "gloRank": 2026,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 56,
                            "gloRank": 1942,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 66,
                            "gloRank": 2740,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 32,
                            "gloRank": 1195,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 53,
                            "gloRank": 3061,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 61,
                            "gloRank": 2750,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 41,
                            "gloRank": 1742,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 18,
                            "gloRank": 1783,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 44,
                            "gloRank": 3031,
                            "year": 2023
                        },
                        {
                            "majorName": "Earth and Planetary Sciences",
                            "totRank": 32,
                            "gloRank": 2690,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 52,
                            "gloRank": 2296,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 42,
                            "gloRank": 1689,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3096,
                    "name": null,
                    "engName": "Kosin University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Environmental Science",
                            "totRank": 84,
                            "gloRank": 4660,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 71,
                            "gloRank": 3836,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 81,
                            "gloRank": 4258,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 65,
                            "gloRank": 3874,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 84,
                            "gloRank": 5565,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3141,
                    "name": null,
                    "engName": "Korea Aerospace University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 44,
                            "gloRank": 1963,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 57,
                            "gloRank": 2005,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 65,
                            "gloRank": 2610,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 70,
                            "gloRank": 3484,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 81,
                            "gloRank": 5356,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 70,
                            "gloRank": 3044,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 63,
                            "gloRank": 2694,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3148,
                    "name": null,
                    "engName": "Korea University of Technology and Education",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Physics and Astronomy",
                            "totRank": 50,
                            "gloRank": 2091,
                            "year": 2023
                        },
                        {
                            "majorName": "Computer Science",
                            "totRank": 47,
                            "gloRank": 1591,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 53,
                            "gloRank": 1896,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 53,
                            "gloRank": 2265,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 58,
                            "gloRank": 3762,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 61,
                            "gloRank": 2562,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 49,
                            "gloRank": 1927,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3227,
                    "name": null,
                    "engName": "Jeonju University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 32,
                            "gloRank": 1772,
                            "year": 2023
                        },
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 67,
                            "gloRank": 2443,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 60,
                            "gloRank": 3466,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 77,
                            "gloRank": 3798,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 31,
                            "gloRank": 2540,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 95,
                            "gloRank": 6692,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 79,
                            "gloRank": 3852,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 68,
                            "gloRank": 3113,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3238,
                    "name": null,
                    "engName": "Duksung Womens University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Business, Management and Accounting",
                            "totRank": 42,
                            "gloRank": 2099,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 12,
                            "gloRank": 548,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 58,
                            "gloRank": 3292,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 31,
                            "gloRank": 1341,
                            "year": 2023
                        },
                        {
                            "majorName": "Psychology",
                            "totRank": 37,
                            "gloRank": 2636,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 33,
                            "gloRank": 2231,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 56,
                            "gloRank": 2380,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3322,
                    "name": null,
                    "engName": "Dongseo University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Computer Science",
                            "totRank": 71,
                            "gloRank": 2739,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 96,
                            "gloRank": 6739,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 66,
                            "gloRank": 2991,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3328,
                    "name": null,
                    "engName": "Korea Polytechnic University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Computer Science",
                            "totRank": 76,
                            "gloRank": 2987,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 78,
                            "gloRank": 5157,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 64,
                            "gloRank": 2955,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3331,
                    "name": null,
                    "engName": "The University of Suwon",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Computer Science",
                            "totRank": 78,
                            "gloRank": 3543,
                            "year": 2023
                        },
                        {
                            "majorName": "Energy",
                            "totRank": 43,
                            "gloRank": 1493,
                            "year": 2023
                        },
                        {
                            "majorName": "Mathematics",
                            "totRank": 62,
                            "gloRank": 3074,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 97,
                            "gloRank": 6914,
                            "year": 2023
                        },
                        {
                            "majorName": "Engineering",
                            "totRank": 74,
                            "gloRank": 3489,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3341,
                    "name": null,
                    "engName": "Daegu Haany University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 8,
                            "gloRank": 344,
                            "year": 2023
                        },
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 35,
                            "gloRank": 1323,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 37,
                            "gloRank": 1670,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 23,
                            "gloRank": 1135,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 24,
                            "gloRank": 1475,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3356,
                    "name": null,
                    "engName": "Seoul Womens University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 22,
                            "gloRank": 616,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 68,
                            "gloRank": 2954,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 71,
                            "gloRank": 4666,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3375,
                    "name": null,
                    "engName": "Silla University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 40,
                            "gloRank": 1046,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 61,
                            "gloRank": 3933,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3409,
                    "name": null,
                    "engName": "Sungshin Womens University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Agricultural and Biological Sciences",
                            "totRank": 73,
                            "gloRank": 3604,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 65,
                            "gloRank": 3689,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 54,
                            "gloRank": 2481,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 52,
                            "gloRank": 3385,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3537,
                    "name": null,
                    "engName": "Woosuk University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 48,
                            "gloRank": 1846,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 55,
                            "gloRank": 2496,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 69,
                            "gloRank": 4602,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 64,
                            "gloRank": 2636,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3561,
                    "name": null,
                    "engName": "Hanseo University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Pharmacology, Toxicology and Pharmaceutics",
                            "totRank": 72,
                            "gloRank": 4011,
                            "year": 2023
                        },
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 89,
                            "gloRank": 4949,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 101,
                            "gloRank": 8063,
                            "year": 2023
                        },
                        {
                            "majorName": "Chemistry",
                            "totRank": 81,
                            "gloRank": 4055,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3639,
                    "name": null,
                    "engName": "Kyungnam University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Mathematics",
                            "totRank": 63,
                            "gloRank": 3098,
                            "year": 2023
                        },
                        {
                            "majorName": "Social Sciences",
                            "totRank": 64,
                            "gloRank": 3665,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 98,
                            "gloRank": 6986,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3642,
                    "name": null,
                    "engName": "Daejin University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Mathematics",
                            "totRank": 65,
                            "gloRank": 3204,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 100,
                            "gloRank": 7634,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3724,
                    "name": null,
                    "engName": "Handong Global University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 9,
                            "gloRank": 619,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 45,
                            "gloRank": 3061,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                },
                {
                    "uni_id": 3765,
                    "name": null,
                    "engName": "Konyang University",
                    "citation": null,
                    "compRate": null,
                    "intro": null,
                    "totStud": null,
                    "tuition": null,
                    "website": null,
                    "rank": [
                        {
                            "majorName": "Biochemistry, Genetics and Molecular Biology",
                            "totRank": 49,
                            "gloRank": 2267,
                            "year": 2023
                        },
                        {
                            "majorName": "Medicine",
                            "totRank": 64,
                            "gloRank": 3441,
                            "year": 2023
                        },
                        {
                            "majorName": "Universities",
                            "totRank": 67,
                            "gloRank": 4404,
                            "year": 2023
                        }
                    ],
                    "sfratio": null
                }
            ],
            "majors": [
                "Environmental Science",
                "Physics and Astronomy",
                "Arts and Humanities",
                "Business, Management and Accounting",
                "Computer Science",
                "Agricultural and Biological Sciences",
                "Energy",
                "Pharmacology, Toxicology and Pharmaceutics",
                "Dentistry",
                "Mathematics",
                "Social Sciences",
                "Biochemistry, Genetics and Molecular Biology",
                "Medicine",
                "Psychology",
                "Universities",
                "Earth and Planetary Sciences",
                "Chemistry",
                "Economics, Econometrics and Finance",
                "Veterinary",
                "Engineering"
            ]
        }

        const getData = async () => {
            const res = await axios.get('https://k-ranking.co.kr:8081/api/universities')
            store.commit('setUniversities', res.data.universities)
            store.commit('setMajors', res.data.majors)
            store.commit('setYears', [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009])

        }

        onBeforeMount(async () => {
            getData()
            // store.commit('setUniversities', data.universities)
            // store.commit('setMajors', data.majors)
            // store.commit('setYears', [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009])

        })

        // 연도 변경시 데이터 요청
        watchEffect(() => console.log(store.state.selectedYear))

    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    overflow-x: hidden;
    font-family: 'pretendard';
}
</style>
