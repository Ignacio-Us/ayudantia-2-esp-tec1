import { createApp } from "vue";
import { router } from "./router/router.js";
import App from "./App.vue";

import 'bootstrap/dist/css/bootstrap.css';

const app =createApp(App);
app.use(router);
app.mount("#app");
