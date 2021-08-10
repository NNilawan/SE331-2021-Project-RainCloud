import { createRouter, createWebHistory } from "vue-router";
import PersonList from '../views/PersonList.vue'
import Details from '../views/Person/Details.vue'

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
    import( /* webpackChunkName: "about" */ "../views/About.vue"),
},
{
  path: "/datas/:id",
  name: "Details",
  component: Details,
  props: true
},

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
