import {createRouter, createWebHistory} from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import CardsView from "@/views/cards/CardsView.vue"
import TypesView from "@/views/TypesView.vue"
import ClassesView from "@/views/ClassesView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashboardView,
            children: [
                {
                    path: '/cards',
                    name: 'cards',
                    component: CardsView
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
