import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {getChaosMonsterName} from "@/utils/randomizer";

const app = createApp(App)

app.use(router)

app.mount('#app')
