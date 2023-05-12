import { createStore } from "vuex";

export default createStore({
    state : {
        universities : [],
        searchedUniversity : [],
        majors : [],
        years : [],
        selectedMajor : 'Universities',
        inputText : ''
    },
    getters : {
        filterUniversity (state) {
            // Data 없을 때
            if (state.universities.length < 1) {
                return []
            }

            // Data 있을 때
            // 학교 이름 검색 시
            if (state.inputText) {
                return [...state.universities[0].filter(uni => uni.name.includes(state.inputText))]
            }

            // 그 외
            return [...state.universities[0].filter(function(uni) {
                return uni.rank.some(el => el.majorName === state.selectedMajor)
            })].sort((u1, u2) => {
                let idx1 = 0
                let idx2 = 0

                for (let i=0; i<u1.rank.length; i++) {
                    if (u1.rank[i].majorName === state.selectedMajor) {
                        idx1 = i
                    }
                }

                for (let j=0; j<u2.rank.length; j++) {
                    if (u2.rank[j].majorName === state.selectedMajor) {
                        idx2 = j
                    }
                }

                return u1.rank[idx1].totRank - u2.rank[idx2].totRank
            })
        },
        searchUniversity (state, value) {
            if (value) {
                console.log(state.universities[0])
            }
        }
    },
    mutations : {
        // 연도 바뀔 때와 처음 화면 뜰 때
        setUniversities(state, value){
            if (state.universities) {
                state.universities[0] = value
            } else {
                state.universities.push(value);
            }
        },

        setMajors(state, value) {
            state.majors.push(value)
        },

        setYears(state, value) {
            state.years.push(value)
        },

        chooseMajor (state, value) {
            state.selectedMajor = value
        },
        setInputText (state, value) {
            state.inputText = value
        },
    },
});