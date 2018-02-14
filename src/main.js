import Vue from 'vue'
import App from './App.vue'
import { createRouter } from '../src/router/router.js';


const router = createRouter();

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
