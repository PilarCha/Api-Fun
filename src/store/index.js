import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getBTCPrice() {
      console.log("we are starting the fetch");
      let res = await axios({
        url: 'https://api.coindesk.com/v1/bpi/historical/close.json',
        method: "GET",
      });
      return res;
    }
  },
  modules: {
  }
})
