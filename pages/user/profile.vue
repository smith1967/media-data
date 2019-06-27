<template>
  <div>
    <Signin v-bind:title="title"/>
  </div>
</template>

<script>
import Signin from "~/components/Signin";
export default {
  components: { Signin },
  data() {
    return {
      title: "ลงทะเบียนผู้ใช้ระบบ"
    };
  }
};
</script>
