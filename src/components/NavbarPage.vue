<template>
<nav class="navbar" ref="navbar">
    <div class="navbar-wrapper">
        <router-link class="logo" :to="{name: 'Home'}">
            <div>
                <img src="@/assets/images/k-ranking-logo.png" />
            </div>
            <div class="k-ranking" ><p>K-Ranking</p></div>
        </router-link>
    
        <div class="navbar-links" ref="navbarLinks">
            <div class="links-wrapper">
                <a href=".">로그인</a> |
                <a href=".">회원가입</a>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';

export default {
    setup() {
        onMounted(() => {
            document.addEventListener('scroll', changeNavbarColor)
        })

        onBeforeUnmount(() => {
            document.removeEventListener('scroll', changeNavbarColor)
        })

        const navbar = ref(null)
        const fontColor = ref('#333333')

        const changeNavbarColor = () => {
            if (window.scrollY > 450) {
                navbar.value.style.background = '#333333'
                fontColor.value = 'white'
                
            } else {
                navbar.value.style.background = 'white'
                fontColor.value = '#333333'
            }
        }

        return {
            navbar,
            fontColor
        }
        
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    @include engTitleFont();
    @include centerElement();
    z-index: 10;
    height: 60px;
    background: white;
    position: sticky;
    top: 0;
    transition: all 0.2s ease;

    .navbar-wrapper {
        height: 100%;
        width: max(900px, 70%);
        display: flex;
        justify-content: space-between;

        .logo {
            display: flex;
    
            &:hover {
                cursor: pointer;
            }
    
            div {
    
                &:nth-child(1) {
                    @include centerElement();
                    height: 100%;
                    width: 60px;
    
                    img {
                        height: 52px;
                        width: 52px;
                    }
                }
            }
    
            .k-ranking {
                @include centerElement();
                height: 100%;
                
                p {
                    color: v-bind('fontColor');
                    font-weight: bold;
                    font-size: 2.5rem
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