<template>
  <v-container>
    <v-text-field :value="a"></v-text-field>
    <v-text-field v-model="y"></v-text-field>
    <v-text-field v-model="search"></v-text-field>
    {{ marvelHeroes}}
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      x: [1, 2, 3, 4, 5],
      y: 0,
      search: "",
      heroes: [
        { name: "Batman", franchise: "DC" },
        { name: "Ironman", franchise: "Marvel" },
        { name: "Thor", franchise: "Marvel" },
        { name: "Superman", franchise: "DC" }
      ]
    };
  },
  computed: {
    a() {
      return this.x[this.y];
    },
    marvelHeroes() {
      // return this.heroes.filter(function(hero) {
      //   return hero.franchise == "Marvel";
      // });
      return this.heroes.filter(hero => hero.franchise == this.search);
    }
  }
};
</script>

