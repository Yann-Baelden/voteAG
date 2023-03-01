import { createApp } from "vue";
import router from "@/router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faUserXmark } from "@fortawesome/free-solid-svg-icons";

import "@/index.css";
import App from "@/App.vue";

router.beforeEach((to, from, next) => {
  //CHECK USER
  const user = localStorage.getItem("user");
  if (to.fullPath !== "/" && to.fullPath !== "/login") {
    if (!user) {
      next("/login");
      return;
    }
  }
  next();
  return;
});

library.add(faHouse, faUserXmark);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
