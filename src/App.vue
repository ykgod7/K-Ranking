<template>

<Navbar />

<div class="container">
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" :key="$route.fullPath"></component>
        </keep-alive>
    </router-view>
</div>

<Footer />

</template>


<script>
import Navbar from '@/components/NavbarPage.vue'
import Footer from '@/components/FooterPage.vue'


export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
}
</style>
