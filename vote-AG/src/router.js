import { createRouter, createWebHistory } from "vue-router";
//import VoteNav from "./components/VoteNav.vue";
import TheHome from "@/components/TheHome.vue";
import CurrentVote from "@/components/CurrentVote.vue";
import VotesResults from "@/components/VotesResults.vue";
import MyAccount from "@/components/MyAccount.vue";
import VotesIncomming from "@/components/VotesIncomming.vue";
import SimpleLogin from "@/components/SimpleLogin.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TheHome,
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
    {
      path: "/login",
      component: SimpleLogin,
    },
  ],
});
