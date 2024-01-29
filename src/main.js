import { createApp } from 'vue'
import 'vant/lib/index.css';
import './style.css'
import installVant from './config/vant'
import installRouter from './routes/index'
import installPinia from './pinia/index'

import App from './App.vue'
const app = createApp(App)
installRouter(app)
installVant(app)
installPinia(app)
app.mount('#app')
