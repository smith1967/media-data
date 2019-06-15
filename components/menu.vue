<template>
  <v-toolbar color="primary">
    <v-toolbar-title>ระบบฐานข้อมูลสื่อการเรียนการสอน</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat>{{ item.title }}</v-btn>
      <v-btn @click="doLogout" flat>ออกจากระบบ</v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <!-- <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat>{{ item.title }}</v-btn>
      <v-btn @click="doLogout" flat>ออกจากระบบ</v-btn>-->
      <v-list>
        <v-list-tile v-for="item in menu" :key="item.icon" :to="item.link" @click="item.event">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="doLogout">
          <v-list-tile-content>
            <v-list-tile-title>ออกจากระบบ</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { icon: "home", title: "หน้าหลัก", link: "/" },
        { icon: "info", title: "ดูข้อมูลสื่อทั้งหมด", link: "/media/list" }
        // { icon: "info", title: "ออกจากระบบ", event: "doLogout" }
        // { icon: "key", title: "เข้าระบบ", link: "login" }
      ]
    };
  },
  methods: {
    doLogout() {
      window.sessionStorage.clear();
      return this.$router.replace("/login");
    }
  }
};
</script>

