import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/view/home/index.vue"),
    children: [
      {
        path: "ts-view",
        name: "ts-view",
        component: () => import("@/view/tsView/index.vue"),
      },
      {
        path: "other",
        name: "other",
        component: () => import("@/view/other/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
