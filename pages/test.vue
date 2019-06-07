<template>
  <div>
    <v-app>
      <v-container fluid px-0>
        <v-checkbox v-model="checkbox" :label="`Checkbox 1: ${checkbox.toString()}`"></v-checkbox>
        <v-radio-group v-model="radioGroup">
          <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n" name="xxx"></v-radio>
        </v-radio-group>
        <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`"></v-switch>
        <v-text-field v-model="radioGroup"></v-text-field>
      </v-container>
    </v-app>
  </div>
</template>
</div>
<script>
export default {
  data() {
    return {
      checkbox: true,
      radioGroup: 2,
      switch1: true
    };
  }
};
</script>