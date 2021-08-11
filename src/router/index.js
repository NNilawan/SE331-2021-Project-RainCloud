import { createRouter, createWebHistory } from "vue-router";
import PersonList from '../views/PersonList.vue'
import Layout from '../views/Person/Layout.vue'
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
  name: "Layout",
  props: true,
  component: Layout,
  children: [
    {
      path: '',
      name: "PersonDetails",
      component: PersonDetails,
    },
    {
      path: '/datas/:id/vaccine-details',
      name: 'VaccineDetails',
      props: true,
      component: VaccineDetails
    },
    {
      path: '/datas/:id/doctor-recommendation',
      name: 'DoctorRecommendation',
      props: true,
      component: DoctorRecommendation
    }
  ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
