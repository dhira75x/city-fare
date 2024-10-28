import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: HomePage,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../components/home.vue"),
    },
    {
      path: "/package/:id",
      name: "package-detail",
      component: () => import("../components/packageDetails.vue"),
    },
  ],
});

export default router;
