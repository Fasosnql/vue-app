import Vue from 'vue';
import VueRouter from 'vue-router';

import AppContainer from './components/containers/App/index.ts';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      component: AppContainer,
      name: 'index',
      path: '/',
    }
  ],
});

export default router;