import './css/site.scss';

import 'typeface-roboto';
import 'typeface-roboto-mono';
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createApp } from 'vue';
import { createVuetify } from 'vuetify'
import { createRouter, createWebHistory } from 'vue-router';
import { AxiosClient } from 'coalesce-vue'
import { createCoalesceVuetify } from 'coalesce-vue-vuetify'

import App from './App.vue';

// viewmodels.g has sideeffects - it populates the global lookup on ViewModel and ListViewModel.
import '@/viewmodels.g';
import $metadata from '@/metadata.g';


AxiosClient.defaults.baseURL = '/api'
AxiosClient.defaults.withCredentials = true

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import("@/components/HelloWorld.vue"), },
    { path: '/test', component: () => import("./components/test.vue"), },
  ]
});

const vuetify = createVuetify()
const coalesceVuetify = createCoalesceVuetify({
  metadata: $metadata
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(coalesceVuetify)
app.mount('#app')
