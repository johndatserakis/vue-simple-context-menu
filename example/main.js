import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import VueSimpleContextMenu from '../src/index.js'
app.component('vue-simple-context-menu', VueSimpleContextMenu)

app.mount('#app')
