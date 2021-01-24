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
        >
          {{ link }}
        </v-tab>
      </v-tabs>

    </v-app-bar>

</template>

<script>
export default {
  data: () => ({
    links: [
      "Weather",
      "Bitcoin",
      "Tiimer"
    ]
  })
}
</script>

<style lang="css" scoped>
</style>
