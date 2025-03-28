import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import './assets/styles/variables.css';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
