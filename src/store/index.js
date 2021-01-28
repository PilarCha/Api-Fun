import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chart:[],
  },
  mutations: {
    setChart(state,chart) {
      state.chart = chart;
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
