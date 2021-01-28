import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BTCDate:[],
    BTCPrice:[],
  },
  mutations: {
    setChart(state,data) {
      state.BTCDate = data;
      state.BTCPrice = data
    }
  },
  actions: {
    async getBTCPrice({commit}) {
      let res = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')

      commit("setChart", res.data);
    }
  },
  modules: {
  }
})
