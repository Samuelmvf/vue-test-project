import { createApp } from 'vue'
import { appRouter } from "@/routes"
import { appVuetify } from "@/boot/vuetify"

import '@/api/server'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './styles/global.scss'

import App from './App.vue'

createApp(App)
    .use(appVuetify)
    .use(appRouter)
    .mount('#app')
