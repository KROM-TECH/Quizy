import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () =>
      import("../views/Landing.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import("../views/Dashboard.vue")
  },
  {
    path: "/game",
    name: "Game",
    component: () =>
      import("../views/Game.vue")
  },
  {
    path: "/play",
    name: "Play",
    component: () =>
      import("../views/Play.vue")
  },
  {
    path: "/loader",
    name: "Loader",
    component: () =>
      import("../components/Loader.vue")
  },
  {
    path: "/select",
    name: "Select",
    component: () =>
      import("../views/Select.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
