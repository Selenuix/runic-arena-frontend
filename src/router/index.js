import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import ClassesView from "@/views/classes/ClassesView.vue";

import CardsView from "@/views/cards/CardsView.vue";
import CardNewView from "@/views/cards/CardNewView.vue";
import CardEditView from "@/views/cards/CardEditView.vue";

import TypesView from "@/views/types/TypesView.vue";
import TypeEditView from "@/views/types/TypeEditView.vue";
import TypeNewView from "@/views/types/TypeNewView.vue";

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
            name: 'card-new',
            component: CardNewView
        },
        {
            path: '/cards/edit/:id(\\d+)',
            name: 'card-edit',
            component: CardEditView
        },
        {
            path: '/types',
            name: 'types',
            component: TypesView
        },
        {
            path: '/types/new',
            name: 'type-new',
            component: TypeNewView
        },
        {
            path: '/types/edit/:id(\\d+)',
            name: 'type-edit',
            component: TypeEditView
        },
        {
            path: '/classes',
            name: 'classes',
            component: ClassesView
        }
    ]
})

export default router
