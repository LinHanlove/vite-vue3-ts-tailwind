import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/view/layout/index.vue"),
    children: [
      {
        path: "ts-view",
        name: "ts-view",
        component: () => import("@/view/tsView/index.vue"),
      },
      {
        path: "pinia",
        name: "pinia",
        component: () => import("@/view/pinia/index.vue"),
      },
      {
        path: "video-preview",
        name: "video-preview",
        component: () => import("@/view/videoPreview/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
