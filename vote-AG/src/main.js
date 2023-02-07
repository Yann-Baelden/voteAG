import { createApp } from "vue";
import router from "@/router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faUserXmark } from "@fortawesome/free-solid-svg-icons";

import "@/index.css";
import App from "@/App.vue";

library.add(faHouse, faUserXmark);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
