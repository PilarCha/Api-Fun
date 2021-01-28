import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import moment from 'moment';

Vue.use(Vuex)

var now = moment()

console.log(now)

export default new Vuex.Store({
  state: {
    BTCDate:[],
    BTCPrice:[],
  },
  mutations: {
    setChart(state,data) {
      Object.keys(data.bpi).forEach(function(key) {
        state.BTCPrice.push(data.bpi[key]);
        state.BTCDate.push(key);
      })
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
