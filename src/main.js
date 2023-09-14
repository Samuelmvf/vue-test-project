import { createApp } from 'vue'
import { appRouter } from "@/routes"
import './styles/global.scss'

import App from './App.vue'

createApp(App).use(appRouter).mount('#app')
