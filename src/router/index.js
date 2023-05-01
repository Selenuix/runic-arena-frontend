import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import CardsView from "@/views/cards/CardsView.vue";
import CardNewView from "@/views/cards/CardNewView.vue";
import CardEditView from "@/views/cards/CardEditView.vue";

import TypesView from "@/views/types/TypesView.vue";
import TypeEditView from "@/views/types/TypeEditView.vue";
import TypeNewView from "@/views/types/TypeNewView.vue";

import ClassesView from "@/views/classes/ClassesView.vue";
import ClassEditView from "@/views/classes/ClassEditView.vue";
import ClassNewView from "@/views/classes/ClassNewView.vue";

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
        },
        {
            path: '/classes/new',
            name: 'class-new',
            component: ClassNewView
        },
        {
            path: '/classes/edit/:id(\\d+)',
            name: 'class-edit',
            component: ClassEditView
        },
    ]
})

export default router
