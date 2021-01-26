<template>
  <v-app id="inspire">
    <tab-header></tab-header>
    <v-main class="grey lighten-3">
      <v-container>
        <div class="wrapper">
          <section class="chart-card">
            <header>
              <h1 class="heading">Bitcoin Price of the last 31 days</h1>
            </header>
            <canvas class="chart" id="chart" width="400" height="300"></canvas>
            {{chart}}
          </section>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import TabHeader from './tabHeader.vue';
  import {mapActions,mapState} from "vuex";

  export default {
      components: {
        TabHeader,
      },
      data () {
        return {
          chartData:[],
        }
      },
      computed: {
        ...mapState(["chart"]),
      },
      mounted() {
        this.fetchData();
      },
      methods: {
        ...mapActions(["getBTCPrice"]),

      }

    }
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
  font-size: 100%;
  font-family: Roboto, sans-serif;
}
.wrapper{
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chart-card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 2%;
  box-shadow: 3px 6px 30px rgba(0,0,0,0.2);
}
.heading, .source {
    text-align: center;
    margin: 1% 0;
}
.chart{
  max-width: 1024px;
}
</style>
