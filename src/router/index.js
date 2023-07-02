import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/ClientesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: { titleProp: "Listado de Clientes" },
    },
    {
      path: "/agregar-cliente",
      name: "agregar-cliente",
      component: () => import("../views/NuevoClienteView.vue"),
      props: { titleProp: "Agregar cliente" },
    },
    {
      path: "/editar-cliente/:id",
      name: "editar-cliente",
      component: () => import("../views/EditarClienteView.vue"),
      props: { titleProp: "Editar cliente" },
    },
  ],
});

export default router;
