import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Graphic from "../views/category/Graphic.vue";
import Gallery from "../views/Gallery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/category/graphic",
    name: "Graphic",
    component: Graphic
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
