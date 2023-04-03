import { createStore } from "vuex";

export default createStore({
    state : {
        universities : [],
        majors : [],
        years : []
    },
    getters : {
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
        }
    },
});