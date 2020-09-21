import Vue from 'vue';
import VueRouter from 'vue-router';
//  components
import Home from './layouts/Home';
import Favourites from './layouts/Favourites';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/favourites',
            component: Favourites,
        },
    ],
});
