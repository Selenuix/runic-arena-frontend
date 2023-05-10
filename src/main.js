import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
    faBook,
    faBullseye,
    faDice,
    faHatWizard,
    faQuestion,
    faShield,
    faStaffSnake,
    faUserNinja,
    faXmark,
    faTornado,
    faUser,
    faRightFromBracket,
    faPenToSquare,
    faTrash,
    faEye
} from '@fortawesome/free-solid-svg-icons'
import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons'
import './assets/main.css'

library.add(faShield)
library.add(faHatWizard)
library.add(faBullseye)
library.add(faStaffSnake)
library.add(faUserNinja)
library.add(faDice)
library.add(faXmark)
library.add(faBook)
library.add(faSun)
library.add(faMoon)
library.add(faQuestion)
library.add(faTornado)
library.add(faUser)
library.add(faRightFromBracket)
library.add(faPenToSquare)
library.add(faTrash)
library.add(faEye)

import {getChaosMonsterName} from "@/utils/randomizer";

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
