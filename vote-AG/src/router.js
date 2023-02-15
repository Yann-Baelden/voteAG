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
      path: "/home",
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
      path: "/myaccount",
      component: MyAccount,
    },
    {
      path: "/incommingvotes",
      component: VotesIncomming,
    },
    {
      path: "/",
      component: SimpleLogin,
    },
  ],
});
