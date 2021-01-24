<template>
    <v-app-bar
      app
      color="grey"
      flat
    >
      <v-tabs
        centered
        class="ml-n9"
        color="white darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
          :to='link.route'
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>

    </v-app-bar>

</template>

<script>
export default {
  data: () => ({
    links: [
      {name:"Weather",route:'/weather'},
      {name:"Bitcoin",route:'/bitcoin'},
      {name:"Timer",route:'/timer'},
    ]
  })
}
</script>

<style lang="css" scoped>
</style>
