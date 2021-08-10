import { createRouter, createWebHistory } from "vue-router";
import PersonList from '../views/PersonList.vue'
import PersonDetails from '../views/Person/PersonDetails.vue'

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
  name: "PersonDetails",
  component: PersonDetails,
  props: true
},

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
