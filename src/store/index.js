import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios';

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
    async getBTCPrice(commit) {
      console.log("we are starting the fetch");
      axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
        .then(res => {
          commit("setChart", res.data);
        })
    }
  },
  modules: {
  }
})
