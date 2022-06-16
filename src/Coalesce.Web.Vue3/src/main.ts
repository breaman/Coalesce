import './css/site.scss';

import 'typeface-roboto';
import 'typeface-roboto-mono';
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import App from './App.vue';
import { AxiosClient } from 'coalesce-vue'

import { createRouter, createWebHistory } from 'vue-router';

// viewmodels.g has sideeffects - it populates the global lookup on ViewModel and ListViewModel.
import '@/viewmodels.g';

import { createApp } from 'vue';
import { createVuetify } from 'vuetify'

AxiosClient.defaults.baseURL = '/api'
AxiosClient.defaults.withCredentials = true

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import("@/components/HelloWorld.vue"), },
    { path: '/test', component: () => import("./components/test.vue"), },
  ]
});

// (async function loadFonts () {
//   const webFontLoader = await import('webfontloader')
//   webFontLoader.load({
//     google: {
//       families: ['Roboto:100,300,400,500,700,900&display=swap'],
//     },
//   })
// })()

const vuetify = createVuetify()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
