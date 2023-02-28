import { createRouter, createWebHistory } from "vue-router";
//import VoteNav from "./components/VoteNav.vue";
import TheHome from "@/components/TheHome.vue";
import CurrentVote from "@/components/CurrentVote.vue";
import VotesResults from "@/components/VotesResults.vue";
import MyAccount from "@/components/MyAccount.vue";
import VotesIncomming from "@/components/VotesIncomming.vue";
import SimpleLogin from "@/components/SimpleLogin.vue";
import VotingResult from "@/components/VotingResult.vue";
import AdminGestion from "@/components/AdminGestion.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: TheHome,
    },
    {
      path: "/votes",
      name: "CurrentVote",
      component: CurrentVote,
      props: true,
    },
    {
      path: "/results",
      component: VotesResults,
      beforeEnter: async (to, from, next) => {
        let currentUser = await JSON.parse(localStorage.getItem("user"));

        if (!currentUser.is_admin) {
          alert("Vous n'avez pas les droits");
          next("/home");
        }
        next();
      },
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
    {
      path: "/event/:id",
      component: VotingResult,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminGestion,
      beforeEnter: async (to, from, next) => {
        let currentUser = await JSON.parse(localStorage.getItem("user"));

        if (!currentUser.is_admin) {
          alert("Vous n'avez pas les droits");
          next("/home");
        }
        next();
      },
    },
  ],
});
