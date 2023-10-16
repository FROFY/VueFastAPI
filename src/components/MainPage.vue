<template>
  <v-card
    flat
    rounded="0"
  >
    <v-toolbar density="compact" color="deep-purple-darken-1">
      <v-app-bar-nav-icon>
        <v-icon size="x-large">mdi-home-account</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>FROFY</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="$router.push('/record')" icon>
        <v-icon size="x-large">mdi-record-rec</v-icon>
      </v-btn>

      <v-btn @click="$router.push('/search')" icon>
        <v-icon size="x-large">mdi-card-search</v-icon>
      </v-btn>

      <v-btn @click="$router.push('/')" icon>
        <v-icon size="x-large">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script lang="ts">
</script>

<style>
.xuy {
  text-decoration: none;
  color: inherit;
}
</style>
