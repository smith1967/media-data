<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>กรอกข้อมูล/ลงทะเบียน เข้าระบบ</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>check_circle</v-icon>
                </v-btn>
              </template>
              <span>ลงทะเบียน</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/wyYVVj"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-alert v-model="alert" dismissible :type="valid ? 'success' : 'error'">{{ text_info }}</v-alert>

            <v-form>
              <v-text-field
                prepend-icon="person"
                v-model="email"
                :rules="emailRules"
                label="อีเมล์"
                required
              ></v-text-field>

              <!-- <v-text-field prepend-icon="person" name="email" label="อีเมล์" type="text"></v-text-field> -->
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :rules="[rules.required, rules.password]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="รหัสผ่าน"
                hint="ต้องเริ่มต้นด้วยอักษรอักษรภาษาอังกฤษตัวพิมพ์เล็ก และประกอบด้วยอักษรภาษาอังกฤษหรือตัวเลขอย่างน้อย 6 ตัวอักษร"
                counter
                prepend-icon="lock"
                @click:append="show1 = !show1"
              ></v-text-field>
              <!-- <v-text-field
                v-model="password"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :rules="[rules.required, rules.min, rules.password]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="รหัสผ่าน"
                hint="ต้องเริ่มต้นด้วยอักษรอักษรภาษาอังกฤษตัวพิมพ์เล็ก และประกอบด้วยอักษรภาษาอังกฤษและตัวเลขอย่างน้อย 6 ตัวอักษร"
                counter
                prepend-icon="lock"
                @click:append="show1 = !show1"
              ></v-text-field>-->
              <!-- <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>-->
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" @click="$router.push('/signin')">ลงทะเบียน</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="doLogin">เข้าระบบ</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: {
    source: "signin"
  },
  layout: "center",
  data() {
    return {
      alert: false,
      show1: false,
      valid: true,
      name: "",
      password: "",
      text_info: "",
      rules: {
        required: value => !!value || "กรุณาใส่รหัสผ่าน",
        min: v => v.length >= 6 || "ไม่น้อยกว่า 6 ตัวอักษร",
        password: v => /^[a-z]\w{5,}/.test(v) || "รหัสผ่านไม่ถูกต้อง"
        // emailMatch: () => "อีเมล์และรหัสผ่านไม่ถูกต้อง",
      },
      email: "",
      emailRules: [
        v => !!v || "กรุณาใส่อีเมล์",
        v => /^[^@]+@[^@]+\.[^@]+$/.test(v) || "กรุณาใส่อีเมล์ให้ถูกต้อง"
      ]
    };
  },
  methods: {
    async doLogin() {
      let user = {
        email: this.email,
        password: this.password
      };
      let res = await fetch("https://api.cstc.ac.th/login/", {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(user)
      });
      let data = await res.json();
      console.log(data);
      if (data.ok === 0) {
        this.valid = false;
        this.alert = true;
        this.text_info = data.error;
        return;
      }
      console.log("user = ", JSON.stringify(data.user));
      //1. จำ user /login
      //window.localStorage.setItem('user', JSON.stringify(res.data.user))// แบบนี้ เก็บถาวร
      window.sessionStorage.setItem("user", JSON.stringify(data.user)); // แบบนี้หาย เมื่อ restart หรือ ปิด  browser
      this.$router.push("/");
    }
  }
};
</script>

