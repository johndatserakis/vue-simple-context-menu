import { createApp } from 'vue';
import App from './App.vue';
import VueSimpleContextMenu from '../src/index.js';

const app = createApp(App);

app.component('vue-simple-context-menu', VueSimpleContextMenu);

app.mount('#app');
