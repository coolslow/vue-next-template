import { createApp } from 'vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import App from './App.vue'

const app = createApp(App)
// 使用 Vuex
app.use(store)
// 使用 Vue-Router
app.use(router)

app.mount('#app')
