import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from "axios";


// import "./assets/ress.min.css"
// import "./assets/reset.scss"
import "./assets/null.scss"


// vuex;
import store from "@/store/store";


// привязка axios к прототипу vue для того чтобы он был доступен в каждом компоненте через this. 
Vue.prototype.axios = axios;

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
