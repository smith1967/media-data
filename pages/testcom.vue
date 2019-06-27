<template>
  <div>
    <Display :title="title" :name="name" :age="age"/>
  </div>
</template>
<script>
import Display from "~/components/display";
export default {
  components: { Display },
  data() {
    return {
      title: "test",
      name: "smith",
      age: 25
    };
  }
};
</script>

