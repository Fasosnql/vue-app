import Vue from 'vue'
import { sync } from 'vuex-router-sync';

import router from './router.ts';
import store from './store/index.ts';

sync(store, router);

new Vue({
  el: '#app',
  store,
  router
});