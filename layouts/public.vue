<template>
  <v-app>
    <v-container>
      <!-- <v-navigation-drawer v-model="drawer" app left/>
      <v-toolbar app>
        <v-toolbar-title>Welcome</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      </v-toolbar>-->
      <v-content>
        <nuxt/>
      </v-content>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      // user: {},
      drawer: true
    };
  },
  created() {
    console.log("created");
    let user = window.sessionStorage.getItem("user"); // data is string
    console.log("user = ", user);
    if (user) {
      return this.$router.replace("/");
    }
    // this.user = JSON.parse(user); // แปลงกลับเป็น object ถ้า
    // this.$router.replace("/");
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