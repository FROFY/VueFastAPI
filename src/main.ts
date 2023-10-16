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
    }],
    history: createWebHistory()
})

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
