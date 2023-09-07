export const utilsRoute = [
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
    path: "/utils-php",
    name: "UtilsPHP",
    component: () => import("@/views/utils-php"),
  },
];
