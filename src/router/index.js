import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CardsView from "@/views/CardsView.vue";
import CardsNewView from "@/views/CardsNewView.vue";
import TypesView from "@/views/TypesView.vue";
import ClassesView from "@/views/ClassesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
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
            name: 'cards-new',
            component: CardsNewView
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
        }
    ]
})

export default router
