import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [{
          path: '/',
          component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue'),
        },
        {
            path: '/home',
            component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue'),
        },
        {
            path: '/tests',
            component: () => import(/* webpackChunkName: "tests" */ '../components/Tests.vue'),
        },
        {
            path: '/contact',
            component: () => import(/* webpackChunkName: "contact" */ '../components/Contact.vue'),
        }]
    });
}