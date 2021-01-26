<template>
  <v-app>
    <v-main>
        <TabHeader />
        <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
