import Vue from 'vue';

import Vuex from 'vuex';

import page from '../page/module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  modules: {
    page
  }
});
