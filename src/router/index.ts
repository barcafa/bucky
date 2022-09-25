import { createRouter, createWebHistory } from "vue-router";
import StartMenuView from "../views/StartMenu.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: StartMenuView,
    },
    {
      path: "/character",
      name: "character",
      component: () => import("../views/CharacterMenu.vue"),
    },
    {
      path: "/role",
      name: "role",
      component: () => import("../views/RoleMenu.vue"),
    },
    {
      path: "/weaponspec",
      name: "weaponspec",
      component: () => import("../views/WeaponSpecMenu.vue"),
    },
  ],
});

export default router;
