<template>
  <Signin :title="title"/>
</template>
<script>
import Signin from "~/components/Signin";
export default {
  layout: "public",
  components: {
    Signin
  },
  data() {
    return {
      title: "ลงทะเบียนผู้ใช้งานระบบ"
    };
  }
};
</script>