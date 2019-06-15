<template>
  <v-container fill-height style="height: calc(100vh - 58px);">
    <v-layout align-center>
      <v-flex text-xs-center>
        <h1 class="display-2 error--text">พบข้อผิดพลาด, 404</h1>
        <h6 class="display-1 primary--text">ไม่พบหน้าที่ท่านต้องการ</h6>
        <v-btn to="/" outline color="primary">หน้าหลัก</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "FourOhFour",

  props: {
    lang: {
      type: String,
      default: "en"
    }
  },

  created() {
    this.$ssrContext && this.$ssrContext.res.status(404);
  }
};
</script>
