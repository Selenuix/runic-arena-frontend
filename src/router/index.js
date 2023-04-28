import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TypesView from "@/views/TypesView.vue";
import ClassesView from "@/views/ClassesView.vue";
import CardsView from "@/views/cards/CardsView.vue";
import CardsNewView from "@/views/cards/CardsNewView.vue";
import CardsEditView from "@/views/cards/CardsEditView.vue";

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
            path: '/cards/edit/:id(\\d+)',
            name: 'cards-edit',
            component: CardsEditView
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
