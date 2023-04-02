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
                <div class="year-filter">
                    <div class="filter-name">년도</div>
                    <div class="year-dropdown" @click="yearDropdown = !yearDropdown">
                        <!-- 년도 데이터  -->
                        <div class="current">
                            <p>2023</p>
                        </div>
                        <div class="dropdown-content" v-if="yearDropdown">
                            <!-- 반복문으로 연도 넣기 -->
                            <div class="option" @click="getSelectedYearData(year)">2022</div>
                            <div class="option">2021</div>
                            <div class="option">2020</div>
                        </div>
                        <span class="material-icons-round icon">arrow_drop_down</span>

                    </div>
                </div>
                <div class="subject-filter">
                    <div class="filter-name">학부/학과명</div>
                    <div class="subject-dropdown" @click="subjectDropdown = !subjectDropdown">
                        <div class="current">
                            <p>전체</p>
                        </div>
                        <div class="dropdown-content" v-if="subjectDropdown">
                            <div class="option">간호학과</div>
                            <div class="option">경제학과</div>
                            <div class="option">기계공학과</div>
                            <div class="option">법학과</div>
                        </div>
                        <span class="material-icons-round icon">arrow_drop_down</span>
                    </div>
                </div>
                <div class="name-filter">
                    <div class="filter-name">학교명으로 검색</div>
                    <div class="wrapper">
                        <input class="name-input" placeholder="학교명을 입력해주세요.">
                        <span class="material-icons-round icon">search</span>
                    </div>

                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue'

export default {
    components: {
    },
    setup() {
        const yearDropdown = ref(false)
        const subjectDropdown = ref(0)

        const getSelectedYearData = (year) => {
            console.log('clicked')
        }


        return {
            subjectDropdown,
            yearDropdown,
            getSelectedYearData
        }
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    @include centerElement();
    z-index: 10;
    height: 254px;
    background: white;
    position: sticky;
    top: 0;
    transition: all 0.2s ease;
    border-bottom: 1px solid #F2F2F2;

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
                    font-family: 'pretendard';
                    @include centerElement();
                    height: 100%;

                    p {
                        color: $mainColor;
                        font-weight: bold;
                        font-size: 2.5rem
                    }
                }
            }

            .navbar-links {
                .links-wrapper {
                    a {
                        font-family: 'pretendard';
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
                font-family: 'pretendard';
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
                    border: 1px solid #F2F2F2;
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
                        width: 221px;
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

            .subject-filter {
                width: 341px;

                .subject-dropdown {
                    position: relative;
                    cursor: pointer;
                    border: 1px solid #F2F2F2;
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
                        border: 1px solid #F2F2F2;
                        border-radius: 0 0 4px 4px;
                        // display: none;

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

            .name-filter {
                width: 342px;

                .wrapper {
                    position: relative;
                    width: 100%;
                    height: 44px;

                    .name-input {
                        width: 100%;
                        height: 100%;
                        padding: 0 10px;
                        border: 1px solid #F2F2F2;
                        border-radius: 4px;

                        &::placeholder {
                            font-family: 'pretendard';
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