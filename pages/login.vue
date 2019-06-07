<template>
  <v-layout>
    <v-flex xs12 sm4 text-xs-center>
      <div>
        <h1>WELCOME {{ name }}</h1>
        <div>
          <v-text-field v-model="user" prepend-icon="face" placeholder="ชื่อผู้ใช้"></v-text-field>
        </div>
        <div>
          <v-text-field
            v-model="pass"
            prepend-icon="vpn_key"
            placeholder="รหัสผ่าน"
            type="password"
          ></v-text-field>
        </div>
        <!-- <div>
          Remember :
          <input type="checkbox" v-model="remember" id>
        </div>-->
        <div>
          <v-btn small color="primary" @click="doLogin">เข้าระบบ</v-btn>
        </div>
        <div>
          <button :disabled="!valid" @click="doLogin">Login</button>
          <button v-if="valid" @click="doLogin">Login</button>
          <button v-show="valid" @click="doLogin">Login</button>
          <div v-if="!valid">Enter User & password</div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// {} = object หรือ open & close block tag
// [] = array
// export data for nuxt, data is function
export default {
  layout: "login",
  data: function() {
    // data ต้อง return {} = object
    return {
      user: "Smith",
      pass: "",
      remember: true
    };
  },
  computed: {
    name: function() {
      return this.user.toUpperCase();
    },
    valid: function() {
      return this.user.length > 0 && this.pass.length > 3;
    }
  },
  methods: {
    doLogin: function() {
      this.pass = "test";
      // this.$router.push('/student/100')
      // replace ไม่สามารถกด back ได้
      this.$router.replace("student/100");
    }
  }
};
</script>

