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

    const selectedMajor = computed(() => store.state.selectedMajor);

    const selectedYear = ref(2023)

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
        await axios
          .get(`https://k-ranking.co.kr:8081/api/universities/year/${year}`)
          .then((response) => {
            console.log(response.data.universities[0])
            store.commit("setUniversities", response.data.universities);
          });
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
  height: 66px;
  background: white;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s ease;
  border-bottom: 1px solid #f2f2f2;

  .navbar-wrapper {
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
            color: white;
            font-weight: bold;
            font-size: 1.5rem;
            background: #00C2FF;
            border-radius: 4px;
            padding: 10px;
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
