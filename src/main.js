import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


// SLIDER 

import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
