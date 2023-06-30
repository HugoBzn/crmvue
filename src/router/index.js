import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/ClientesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/agregar-cliente",
      name: "agregar-cliente",
      component: () => import("../views/NuevoClienteView.vue"),
    },
  ],
});

export default router;
