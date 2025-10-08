import { createRouter, createWebHistory } from 'vue-router'
const routes=[
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
        path:'/anime',
        name:'Anime',
        component: () => import(/* webpackChunkName: "anime" */ '../views/AnimeView/index.vue'),
        children: [
        {
            path: ':id', // path 不需要再写 /anime/
            name: 'AnimeDetail',
            component: () => import('../views/AnimeView/AnimeDetailView.vue')
        }
    ]
    },
    {
        path:'/novel',
        name:'Novel',
        component: () => import(/* webpackChunkName: "novel" */ '../views/NovelView/index.vue'),
        children:[
            {
                path:':id',
                name:'NovelDetail',
                component: () => import(/* webpackChunkName: "novelDetail" */ '../views/NovelView/NovelDetailView.vue')
            },
        ]

    },
    {
        path:'/elaina',
        name:'Elaina',
        component: () => import(/* webpackChunkName: "elaina" */ '../views/ElainaView.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('../views/NotFoundView.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router