<template>
  <v-layout>
    <v-content>
      <v-toolbar card color="primary" dark dense>
        <v-toolbar-title class="body-2">
          <h1>{{ title }}</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-alert v-model="alert" dismissible :type="valid ? 'success' : 'error'">{{ text_info }}</v-alert>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            prepend-icon="people"
            v-model="fname"
            :counter="100"
            :rules="[rules.required]"
            label="ชื่อ"
            required
          ></v-text-field>
          <v-text-field
            prepend-icon="people"
            v-model="lname"
            :counter="100"
            :rules="[rules.required]"
            label="นามสกุล"
            required
          ></v-text-field>
          <v-text-field
            prepend-icon="email"
            v-model="email"
            :rules="emailRules"
            label="อีเมล์"
            required
          ></v-text-field>
          <v-text-field
            prepend-icon="credit_card"
            v-model="pid"
            :rules="[rules.pid]"
            label="บัตรประชาชน"
            hints="ตัวเลข 13 หลัก เช่น 4320923456145"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.password]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="รหัสผ่าน"
            hint="ต้องเริ่มต้นด้วยอักษรอักษรภาษาอังกฤษตัวพิมพ์เล็ก และประกอบด้วยอักษรภาษาอังกฤษและตัวเลขอย่างน้อย 6 ตัวอักษร"
            counter
            prepend-icon="lock"
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-autocomplete
            prepend-icon="school"
            v-model="school_id"
            :items="school_items"
            :rules="[rules.required]"
            label="สถานศึกษา"
            item-text="school_name"
            item-value="school_id"
            required
          ></v-autocomplete>

          <!-- <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field> -->

          <v-checkbox
            v-model="checkbox"
            :rules="[rules.required]"
            label="ยืนยันข้อมูลถูกต้อง?"
            required
          ></v-checkbox>

          <v-btn :disabled="!valid" color="success" @click="validate">บันทีกข้อมูล</v-btn>

          <v-btn color="error" @click="reset">ล้างข้อมูล</v-btn>

          <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
        </v-form>
      </v-card-text>
    </v-content>
  </v-layout>
</template>
<script>
// import Menu from "~/components/menu";
export default {
  props: ["title"],
  data: () => ({
    alert: false,
    show1: false,
    valid: true,
    text_info: "",
    type: "",
    fname: "",
    lname: "",
    pid: "",
    school_id: "",
    school_items: [],
    password: "",
    rules: {
      required: value => !!value || "กรุณากรอกข้อมูล",
      min: v => v.length >= 6 || "ความยาวไม่น้อยกว่า 6 ตัวอักษร",
      password: v =>
        /^[a-z]\w{5,}/.test(v) ||
        "ต้องเริ่มต้นด้วยอักษรอักษรภาษาอังกฤษตัวพิมพ์เล็ก และประกอบด้วยอักษรภาษาอังกฤษและตัวเลขอย่างน้อย 6 ตัวอักษร",
      //   emailMatch: () => "The email and password you entered don't match",
      pid: v => /[0-9]{13}/.test(v) || "รหัสบัตรประชาชนไม่ถูกต้อง"
    },
    nameRules: [
      v => !!v || "กรุณาใส่ชื่อ",
      v => (v && v.length <= 4) || "ชื่อต้องยาวไม่น้อยกว่า 4 ตัวอักษร"
    ],
    email: "",
    emailRules: [
      v => !!v || "กรุณาใส่อีเมล์",
      v =>
        /^[a-zA-Z]+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(
          v
        ) || "กรุณาใส่อีเมล์"
    ],
    select: null,
    checkbox: false
  }),
  created() {
    this.initialized();
  },

  methods: {
    async initialized() {
      let url = "https://api.cstc.ac.th/school/items";
      let res = await fetch(url);
      let data = await res.json();
      this.school_items = data.school;
    },
    async validate() {
      if (this.$refs.form.validate()) {
        let user = {
          citizen_id: this.pid,
          fname: this.fname,
          lname: this.lname,
          email: this.email.trim(),
          school_id: this.school_id,
          password: this.password.trim()
        };
        console.log(this.$refs.form);
        let res = await fetch("https://api.cstc.ac.th/api/signin/", {
          method: "post",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(user)
        });
        this.snackbar = true;
        let data = await res.json();
        console.log(res);
        if (data.ok === 1) {
          this.valid = true;
          this.alert = true;
          this.text_info = "บันทึกข้อมูลสำเร็จ";
          this.$router.push("/login");
        } else {
          this.valid = false;
          this.alert = true;
          this.text_info = "ไม่สามารถบันทึกข้อมูล";
        }
        //1. จำ user /login
        //window.localStorage.setItem('user', JSON.stringify(res.data.user))// แบบนี้ เก็บถาวร
        // window.sessionStorage.setItem("user", JSON.stringify(data.user)); // แบบนี้หาย เมื่อ restart หรือ ปิด  browser
      } else {
        console.log("form invalid");
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>