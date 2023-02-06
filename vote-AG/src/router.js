import { createRouter, createWebHistory } from "vue-router";
import VoteNav from "./components/VoteNav.vue";
import Home from "@/components/Home.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/votes",
      component: VoteNav,
    },
  ],
});
