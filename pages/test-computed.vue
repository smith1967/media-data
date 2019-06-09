<template>
  <v-container>
    <v-text-field :value="a"></v-text-field>
    <v-text-field v-model="y"></v-text-field>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      x: [1, 2, 3, 4, 5],
      y: 0
    };
  },
  computed: {
    a() {
      return this.x[this.y];
    }
  }
};
</script>

