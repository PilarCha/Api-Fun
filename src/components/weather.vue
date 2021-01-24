<template>
  <v-app id="inspire">
    <tab-header></tab-header>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
              <Weather> </Weather>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <Bitcoin> </Bitcoin>
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <Timer></Timer>
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Weather from './weather.vue';
  import Bitcoin from './bitcoin.vue';
  import Timer from './timer.vue';
  import TabHeader from './tabHeader.vue';

  export default {
    components: {
      Weather,
      Bitcoin,
      Timer,
      TabHeader,
    },
    data: () => ({
      links: [
        'Enter Plants?',
        'Bitcoin',
        'Timer',
      ],
    }),
  }
</script>
