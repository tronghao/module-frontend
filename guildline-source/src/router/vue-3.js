export const vue3Route = [
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
];
