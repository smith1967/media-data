<template>
  <v-app id="inspire">
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),

  props: {
    source: String
  }
};
</script>
