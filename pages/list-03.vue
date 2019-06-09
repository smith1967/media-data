<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 style="background-color: pink">
          <h1 class="page-title">Student List</h1>
          <v-btn @click="getStudent">TEST</v-btn>
          <v-select
            v-model="selectedRoom"
            label="เลือกห้อง"
            :items="roomList"
            item-value="code"
            item-text="name"
            @change="getStudent"
          />
        </v-flex>
        <v-flex xs12 sm6 md4 style="background-color: yellow">
          <div>
            <div>{{ idx }}</div>
            <div>
              <input v-model="code">
            </div>
            <div>
              <input v-model="fname">
            </div>
            <div>
              <input v-model="lname">
            </div>
            <div>
              <input v-model="room">
            </div>
            <div>
              <button @click="saveStudent">SAVE</button>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 style="background-color: red">
          <v-text-field v-model="keyword" prepend-inner-icon="face"/>

          <v-data-table
            :headers="headers"
            :items="students"
            class="elevation-1"
            :loading="true"
            :search="keyword"
          >
            <v-progress-linear v-slot:progress color="blue" indeterminate/>
            <template v-slot:items="props">
              <tr>
                <td>{{ props.item.code }}</td>
                <td class="text-xs-right">{{ props.item.first_name }} {{ props.item.last_name }}</td>
                <td class="text-xs-right">{{ props.item.room }}</td>
                <td>
                  <button @click="editStudent(props.item, idx)">EDIT</button>
                  <button @click="$router.push(`/student/${props.item.code}`)">PROFILE</button>
                  <nuxt-link :to="`/student/${props.item.code}`">Profile</nuxt-link>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
        <v-flex xs12 sm6 md4 style="background-color: blue">C</v-flex>
      </v-layout>
    </v-container>
    <!-- <table border="1">
      <tr v-for="(student, idx) in students" :key="student.code">
        <td>{{ idx + 1 }}</td>
        <td><b>{{ student.code }}</b></td>
        <td>{{ student.fname }} {{ student.lname }}</td>
        <td>ปวช. {{ student.room }}</td>
        <td><button @click="editStudent(student, idx)">EDIT</button></td>
        <td><button @click="$router.push(`/student/${student.code}`)">PROFILE</button></td>
        <td><nuxt-link :to="`/student/${student.code}`">Profile</nuxt-link></td>
      </tr>
    </table>-->
  </div>
</template>
<style lang="scss">
/* npm i node-sass sass-loader */
.page-title {
  color: red;
}
</style>

<script>
export default {
  data() {
    return {
      selectedRoom: "",
      keyword: "",
      idx: -1,
      code: "",
      fname: "",
      lname: "",
      room: "1/1",
      roomList: [
        { code: "101", name: "ปวช.1/1" },
        { code: "102", name: "ปวช.1/2" }
      ],
      students: [
        // { code: '6201001', first_name: 'fname1', last_name: 'lname1', room: '1/1' },
        // { code: '6201002', first_name: 'fname2', last_name: 'lname2', room: '1/1' },
        // { code: '6201003', first_name: 'fname3', last_name: 'lname3', room: '1/1' },
      ],
      headers: [
        {
          text: "รหัสนักศึกษา",
          align: "left",
          sortable: true,
          value: "code"
        },
        { text: "ชื่อ - นามสกุล", value: "fname" },
        { text: "ห้อง", value: "room" },
        { text: "คำสั่ง", value: "action" }
      ]
    };
  }, // data

  methods: {
    async getStudent() {
      let url = "http://localhost:7000/api/student/room/" + this.selectedRoom;
      let res = await fetch(url);
      let data = await res.json();
      this.students = data.student;
    },

    async delStudent() {
      let res = await fetch("http://localhost:7000/api/student/" + this.code, {
        method: "delete"
      });
      let data = await res.json();
      console.log("data=", data);
    },
    async saveStudent() {
      let student = {
        code: this.code,
        pre_name: "นาย",
        first_name: this.fname,
        last_name: this.lname,
        room: this.room
      };
      let res = await fetch("http://localhost:7000/api/student/" + this.code, {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(student)
      });
      let data = await res.json();
      console.log("data=", data);

      if (this.idx === -1) {
        this.students.push({
          code: this.code,
          fname: this.fname,
          lname: this.lname,
          room: this.room
        });
      } else {
        // update
        let student = this.students[this.idx];
        student.code = this.code;
        student.fname = this.fname;
        student.lname = this.lname;
        student.room = this.room;
      }
      this.idx = -1;
      this.code = "";
      this.fname = "";
      this.lname = "";
    }, // saveStudent

    editStudent(student, idx) {
      this.idx = idx;
      this.code = student.code;
      this.fname = student.fname;
      this.lname = student.lname;
      this.room = student.room;
    }
  } // methods
};
</script>