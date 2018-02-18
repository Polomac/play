import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../components/Home';
import tests from '../components/Tests';
import contact from '../components/Contact';

Vue.use(VueRouter);

export function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [{
          name: home,
          path: '/',
          redirect: '/home',
        },
        {
            name: home,
            path: '/home',
            component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue'),
        },
        {
            name: tests,
            path: '/tests',
            component: () => import(/* webpackChunkName: "tests" */ '../components/Tests.vue'),
        },
        {
            name: contact,
            path: '/contact',
            component: () => import(/* webpackChunkName: "contact" */ '../components/Contact.vue'),
        }]
    });
}