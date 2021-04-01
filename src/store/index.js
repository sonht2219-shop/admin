import Vue from 'vue'
import Vuex from 'vuex'
import {authStore} from "@/modules/auth";
import layoutStore from '@/store/layout';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authStore,
    layoutStore
  }
})
