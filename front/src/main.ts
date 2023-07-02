import "@/assets/style/index.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue, FormFilePlugin, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;
Vue.use(FormFilePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
