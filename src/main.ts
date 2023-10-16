/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import Search from './components/Search/Search.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const router = createRouter({
    routes: [{
        path: '/',
        component: App
    },
    {
        path: '/search',
        component: Search
    }],
    history: createWebHistory()
})

const app = createApp(App)
// app.use(router)

registerPlugins(app)

app.mount('#app')
