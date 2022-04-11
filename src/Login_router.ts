import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/echarts", component: () => import("./Loginecharts.vue") },
  { path: "/definition", component: () => import("./Logindefinition.vue") },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
