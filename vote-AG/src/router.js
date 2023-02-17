import { createRouter, createWebHistory } from "vue-router";
//import VoteNav from "./components/VoteNav.vue";
import TheHome from "@/components/TheHome.vue";
import CurrentVote from "@/components/CurrentVote.vue";
import VotesResults from "@/components/VotesResults.vue";
import MyAccount from "@/components/MyAccount.vue";
import VotesIncomming from "@/components/VotesIncomming.vue";
import SimpleLogin from "@/components/SimpleLogin.vue";
import ChartJs from "@/components/ChartJs.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: TheHome,
      beforeEnter: async (to, from, next) => {
        if (await localStorage.getItem("user")) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/votes",
      component: CurrentVote,
      beforeEnter: async (to, from, next) => {
        if (await localStorage.getItem("user")) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/results",
      component: VotesResults,
      beforeEnter: async (to, from, next) => {
        if (await localStorage.getItem("user")) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/myaccount",
      component: MyAccount,
      beforeEnter: async (to, from, next) => {
        if (await localStorage.getItem("user")) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/incommingvotes",
      component: VotesIncomming,
      beforeEnter: async (to, from, next) => {
        if (await localStorage.getItem("user")) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/",
      component: SimpleLogin,
    },
    {
      path: "/event/:id",
      component: ChartJs,
    },
  ],
});
