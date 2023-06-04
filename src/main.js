import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueCookies from 'vue-cookies'
import router from './router'
import store from './store'
createApp(App).use(store).use(router).use(VueCookies).mount('#app')
