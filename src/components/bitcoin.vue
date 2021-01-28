<template>
  <v-card
    class="mx-auto text-center"
    color="green"
    dark
    max-width="1200"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="BTCPriceArr"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          :fill="fill"
          smooth
        >
          <template v-for = "date in BTCDateArr">
            {{ date }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">
        BitCoin Price last 31 days
      </div>
    </v-card-text>
    {{BTCDateArr}}
    {{BTCPrice}}
  </v-card>
</template>

<script>
  import {mapActions,mapState} from "vuex";

  export default {
      components: {
      },
      data: () => ({
        fill:true,
        BTCDateArr: [],
        BTCPriceArr: [],
      }),
      computed: {
        ...mapState(["BTCDate"]),
        ...mapState(["BTCPrice"]),

      },
      mounted() {
        this.$store.dispatch("getBTCPrice");
        this.setUpBTCData();
      },
      methods: {
        ...mapActions(["getBTCPrice"]),

        setUpBTCData () {
          this.BTCDateArr = this.BTCDate;
          this.BTCPriceArr = this.BTCPrice;
        }
      },


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
