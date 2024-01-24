import { createApp } from 'vue'
import App from './App.vue'
import ZeroTransToAuto from './ZttaPlugin'

createApp(App).use(ZeroTransToAuto).mount('#app')
