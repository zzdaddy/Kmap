import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: () => import('demo/views/svg/map2/index.vue')
    },
];

const router = new VueRouter({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    }
});

export default router;
