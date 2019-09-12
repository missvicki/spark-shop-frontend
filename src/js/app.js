// Import Vue
import Vue from "vue";

// Import Framework7
import Framework7 from "framework7/framework7.esm.bundle.js";

// Import Framework7-Vue Plugin
import Framework7Vue from "framework7-vue/framework7-vue.esm.bundle.js";

// Import Framework7 Styles
import "framework7/css/framework7.bundle.css";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.css";

// Import App Component
import App from "../components/app.vue";

import AppNav from "../components/reusables/navbar.vue";

//Use Async/Wait
import babelPolyfill from "babel-polyfill";

//vuex
import store from "../store";
import { FormatMoney } from "./helpers";

Vue.component("AppNav", AppNav);

//filters
Vue.filter("upperCase", value => {
  return value.toUpperCase();
});

Vue.filter("AddUGX", FormatMoney);

//mixins
import Validator from "./mixins/Validator";

Vue.mixin(Validator);

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
new Vue({
  el: "#app",
  render: h => h(App),
  store,

  // Register App Component
  components: {
    app: App
  }
});
