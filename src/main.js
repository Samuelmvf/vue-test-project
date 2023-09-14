import { createApp } from 'vue'
import { appRouter } from "@/routes"
import { appVuetify } from "@/boot/vuetify"

import './styles/global.scss'

import App from './App.vue'

createApp(App)
    .use(appVuetify)
    .use(appRouter)
    .mount('#app')
