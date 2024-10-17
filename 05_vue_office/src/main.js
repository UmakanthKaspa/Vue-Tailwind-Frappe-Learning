
import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './Pages/Home.vue'
import About from './Pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


const app = createApp(App)
app.use(router)
app.mount('#app')