import Vue from 'vue';
import VueRouter from 'vue-router';
import about from '../components/About';
import blog from '../components/Blog';
import contact from '../components/Contact';

Vue.use(VueRouter);

// Use async route components needed for code splitting
export function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [{
          name: about,
          path: '/',
          component: () => import(/* webpackChunkName: "about" */ '../components/About.vue'),
        },
        {
            name: about,
            path: '/about',
            component: () => import(/* webpackChunkName: "about" */ '../components/About.vue'),
        },
        {
            name: blog,
            path: '/blog',
            component: () => import(/* webpackChunkName: "blog" */ '../components/Blog.vue'),
        },
        {
            name: contact,
            path: '/contact',
            component: () => import(/* webpackChunkName: "about" */ '../components/Contact.vue'),
        }]
    });
}