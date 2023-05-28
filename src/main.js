import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/storage"

const app = createApp(App)
app.use(router).use(store).mount('#app')
app.config.globalProperties.filters = ['THE', '2021', 'Subject'];
