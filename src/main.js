import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App.vue';
import { sync } from 'vuex-router-sync';
import { createRouter } from '../src/router/router';
import { createStore } from '../src/store';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify)

const store = createStore();
const router = createRouter();

sync(store, router);

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
