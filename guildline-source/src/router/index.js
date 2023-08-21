import { createRouter, createWebHistory } from "vue-router";

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
      {
        path: "/utils-test",
        name: "UtilsTest",
        component: () => import("@/views/utils-test"),
      },
      {
        path: "/vue3-loading",
        name: "Vue3Loading",
        component: () => import("@/views/vue3/loading"),
      },
      {
        path: "/vue3-code-mirror",
        name: "CodeMirror",
        component: () => import("@/views/vue3/code-mirror"),
      },
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
