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
        path: "/utils-fe",
        name: "UtilsFE",
        component: () => import("@/views/utils-fe"),
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
      {
        path: "/vue3-enter-key",
        name: "EnterKey",
        component: () => import("@/views/vue3/enter-key"),
      },
      {
        path: "/vue3-focus-input",
        name: "FocusInput",
        component: () => import("@/views/vue3/focus-input"),
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
