import { createRouter, createWebHistory } from "vue-router";
import VoteNav from "./components/VoteNav.vue";
import Home from "@/components/Home.vue";
import CurrentVote from "@/components/CurrentVote.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/votes",
      component: CurrentVote,
    },
  ],
});
