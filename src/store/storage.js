import { createStore } from "vuex";

export default createStore({
    state : {
        universities : [],
        searchedUniversity : [],
        majors : [],
        years : [],
        selectedMajor : '전체',
        inputText : '',
        sortValue: ''
    },
    getters : {
        filterUniversity (state) {
            // ***Data 없을 때***
            if (state.universities.length < 1) {
                return []
            }

            // ***Data 있을 때***
            // 학교 이름 검색 시
            
            if (state.inputText) {
                return [...state.universities[0].filter(uni => uni.name.includes(state.inputText))]
            }
            
            // 학교 리스트 정렬 시
            if (state.sortValue) {
                let filteredList = [...state.universities[0].filter(function(uni) {
                    return uni.rank.some(el => el.korName === state.selectedMajor)
                })]
                // 순위 정렬
                if (state.sortValue === 1) {
                    return filteredList.sort((u1, u2) => {
                        let idx1 = 0
                        let idx2 = 0

                        for (let i=0; i<u1.rank.length; i++) {
                            if (u1.rank[i].majorName === 'Universities') {
                                idx1 = i
                            }
                        }
        
                        for (let j=0; j<u2.rank.length; j++) {
                            if (u2.rank[j].majorName === 'Universities') {
                                idx2 = j
                            }
                        }

                        return u2.rank[idx2].totRank - u1.rank[idx1].totRank
                    })
                } 
            }

            // 그 외
            return [...state.universities[0].filter(function(uni) {
                return uni.rank.some(el => el.korName === state.selectedMajor)
            })].sort((u1, u2) => {
                let idx1 = 0
                let idx2 = 0

                for (let i=0; i<u1.rank.length; i++) {
                    if (u1.rank[i].korName === state.selectedMajor) {
                        idx1 = i
                    }
                }

                for (let j=0; j<u2.rank.length; j++) {
                    if (u2.rank[j].korName === state.selectedMajor) {
                        idx2 = j
                    }
                }

                return u1.rank[idx1].totRank - u2.rank[idx2].totRank
            })
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
        setSortValue (state, value) {
            state.sortValue = value
        }
    },
});