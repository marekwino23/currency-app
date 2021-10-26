import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Add from '../components/Add currency.vue';
import Table from '../components/Currency table.vue'
import NestedPages from '@/views/NestedPages.vue'
import Exchange from '../components/Exchange converter'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: '/nested',
    component: NestedPages,
    children: [
        {
          path: '/nested/one',
          component: Add
        },
        {
          path: '/nested/two',
          component: Table
        },
        {
          path: '/nested/three',
          component: Exchange
        }
      ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;