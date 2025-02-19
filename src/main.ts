import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import createVuetify from '@/plugins/vuetify'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)

app.use(createVuetify).mount('#app')
