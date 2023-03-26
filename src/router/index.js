import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/MainPage.vue'
import Info from '../pages/InfoPage.vue'
import Login from '../pages/LoginPage.vue'
import NotFound from '../pages/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/:id',
            name: 'Info',
            component: Info,
            props: true
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/404',
            name: 'notFound',
            component: NotFound
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/404",
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})


export default router;