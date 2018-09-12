import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions.ts';
import mutations from './mutations.ts';
import state from './state.ts';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  mutations,
});

export default store;