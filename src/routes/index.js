import { createRouter, createWebHashHistory } from 'vue-router'

import routes from "./routes.js"

export const appRouter = createRouter({
  history: createWebHashHistory(),
  routes
})
