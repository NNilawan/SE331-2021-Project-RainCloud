import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PersonList from '../views/PersonList.vue'

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    }, {
        path: '/personList',
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;