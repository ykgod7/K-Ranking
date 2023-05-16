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

        const getData = async () => {
            let res = await axios.get('https://k-ranking.co.kr:8081/api/universities')
            store.commit('setUniversities', res.data.universities)
            store.commit('setMajors', res.data.majors)
            store.commit('setYears', [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009])
        }

        onBeforeMount(() => {
            getData()
        })
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
