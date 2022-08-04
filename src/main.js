import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/app.scss'
import money from 'v-money' 

createApp(App).use(store).use(router).use(money).mount('#app')
