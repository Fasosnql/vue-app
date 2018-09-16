import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

import router from './router';

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  router
});