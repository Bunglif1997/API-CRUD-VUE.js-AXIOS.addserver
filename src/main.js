import Vue from "vue";
import VueRouter from "vue-router";

// ประกาศ Axios
import VueAxios from "vue-axios";
import axios from "axios";
import 'bulma/css/bulma.css'

import App from "./App.vue";
import FoodList from "./components/FoodList.vue";
import CreateFood from "./components/CreateFood.vue";
import Oasis from "./components/Oasis.vue";


Vue.use(VueRouter);

// เรียกใช้
Vue.use(VueAxios, axios);

const routes = [
  {
    name: "FoodList",
    path: "/food_list",
    component: FoodList
  },
  {
    name: "CreateFood",
    path: "/create_food",
    component: CreateFood
    
  },
  {
    name: "Oasis",
    path: "/oasis",
    component: Oasis
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");