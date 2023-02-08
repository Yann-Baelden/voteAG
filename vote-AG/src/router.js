import { createRouter, createWebHistory } from "vue-router";
import VoteNav from "./components/VoteNav.vue";
import Home from "@/components/Home.vue";
import CurrentVote from "@/components/CurrentVote.vue";
import VotesResults from "@/components/VotesResults.vue";
import MyAccount from "@/components/MyAccount.vue";
import VotesIncomming from "@/components/VotesIncomming.vue";

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
    {
      path: "/results",
      component: VotesResults,
    },
    {
      path: "/my-account",
      component: MyAccount,
    },
    {
      path: "/incomming-votes",
      component: VotesIncomming,
    },
  ],
});
