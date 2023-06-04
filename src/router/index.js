import { createRouter, createWebHistory } from 'vue-router'
//import API from "@/js/api";
const routes = [
    {
        path: '/test',
        name: 'Magsic',
        component: () =>
            import( /* webpackChunkName: "about" */ '../pages/MusicPageNextCopy.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import( /* webpackChunkName: "about" */ '../pages/SearchPage.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import( /* webpackChunkName: "about" */ '../pages/LoginPage.vue')
    },
    {
        path: '/',
        name: 'Magic',
        component: () =>
            import( /* webpackChunkName: "about" */ '../pages/MusicPageNext.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router