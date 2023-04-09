import { createStore } from "vuex";

export default createStore({
    state : {
        universities : [],
        majors : [],
        years : [],
        selectedMajor : 'Universities',
        selectedYear : 2022
    },
    getters : {
        filterUniversity (state) {
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
    },
    mutations : {
        setUniversities(state, value){
            state.universities.push(value);
        },

        setMajors(state, value) {
            state.majors.push(value)
        },

        setYears(state, value) {
            state.years.push(value)
        },

        choosMajor (state, value) {
            state.selectedMajor = value
        },

        chooseYear (state, value) {
            state.selectedYear = value
        }
    },
});