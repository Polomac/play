import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import { createRouter } from '../src/router/router.js';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const router = createRouter();

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
