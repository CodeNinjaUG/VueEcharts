import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueEcharts from 'vue-echarts';
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.component('v-chart',VueEcharts)
app.mount('#app')
