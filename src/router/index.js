import {createRouter, createWebHistory} from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import CardsView from "@/views/cards/CardsView.vue"
import CardNewView from "@/views/cards/CardNewView.vue";
import TypesView from "@/views/TypesView.vue"
import ClassesView from "@/views/ClassesView.vue"
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashboardView,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: HomeView
                },
                {
                    path: '/cards',
                    name: 'cards',
                    component: CardsView
                },
                {
                    path: '/cards/new',
                    name: 'card-new',
                    component: CardNewView
                },
                {
                    path: '/types',
                    name: 'types',
                    component: TypesView
                },
                {
                    path: '/classes',
                    name: 'classes',
                    component: ClassesView
                },
            ]
        },

    ]
})

export default router
