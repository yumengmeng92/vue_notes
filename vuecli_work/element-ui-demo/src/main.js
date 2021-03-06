import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";

import axios from "axios";

// 配置到vue属性
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

Vue.use(ElementUI);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
