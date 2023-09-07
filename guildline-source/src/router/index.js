import { createRouter, createWebHistory } from "vue-router";
import { utilsRoute } from './utils';
import { vue3Route } from './vue-3';

export const routes = [
  {
    path: "/",
    component: () => import("@/layout"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/home"),
      },
      ...utilsRoute,
      ...vue3Route,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { el: to.hash };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
