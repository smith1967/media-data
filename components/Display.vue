<template>
  <div>
    <h1>{{title}}</h1>
    <h3>Name: {{name}} Age: {{age}}</h3>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    name: String,
    age: Number
  }
};
</script>
