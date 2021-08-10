import { createRouter, createWebHistory } from "vue-router";
import PersonList from '../views/PersonList.vue'
import PersonDetails from '../views/Person/PersonDetails.vue'
import NProgress from 'nprogress'
const routes = [{
        path: '/',
        name: 'PersonList',
        component: PersonList,
        props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/datas/:id",
        name: "PersonDetails",
        component: PersonDetails,
        props: true
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})
router.beforeEach(() => {
    NProgress.start()
})

router.afterEach(() => {
    NProgress.done()
});

export default router;