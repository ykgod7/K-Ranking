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


export default {
    components: {
        Navbar,
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    overflow-x: hidden;
}
</style>
