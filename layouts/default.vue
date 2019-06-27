<template>
  <v-app>
    <v-container>
      <Menu/>
      <v-content>
        <nuxt/>
      </v-content>
    </v-container>
  </v-app>
</template>
<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  },
  data() {
    return {
      // user: {},

      drawer: true,
      isLogin: false
    };
  },
  created() {
    let user = window.sessionStorage.getItem("user"); // data is string
    if (!user) {
      return this.$router.replace("/login");
    } else {
      this.isLogin = true;
    }
    //  this.user = JSON.parse(user); // แปลงกลับเป็น object ถ้า
    // this.$router.replace("/signin")
    // เก็บใส่ store ไม่ต้องเขียนแบบนี้ทุกหน้า
    // console.log('user_status=>',this.user.userstatus)
    // if(this.user.userstatus == 11){
    //    this.$router.replace("/");
    // }
    // if (this.user.userstatus == 1){
    //   this.$router.replace("/signin");
    // }
  } // created
};
</script>