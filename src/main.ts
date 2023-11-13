import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import HeaderMenu from './components/HeaderMenu.vue'


const app = createApp(App)  

app.use(router)

app.component('HeaderMenu', HeaderMenu)

app.mount('#app')