import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Home.vue";
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
      component: () => import("../components/Home.vue"),
    },
    {
      path: "/terms-of-engagement",
      name: "engagement-terms",
      component: () => import("../components/PolicyDocument.vue"),
    },
    {
      path: "/package/:id",
      name: "package-detail",
      component: () => import("../components/packageDetails.vue"),
    },
    {
      path: "/delete-account",
      name: "delete-account",
      component: () => import("../components/DeleteAccount.vue"),
    },
  ],
});

export default router;
