<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>
        <v-text-field v-model="search" append-icon="search" label="ค้นหา" single-line hide-details></v-text-field>
      </v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table :headers="headers" :items="medias" :search="search" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.media_type_id }}</td>
        <td class="text-xs-left">{{ props.item.media_name }}</td>
        <td class="text-xs-left">{{ props.item.amount }}</td>
        <td class="text-xs-left">{{ props.item.link_google }}</td>
        <td class="text-xs-left">{{ props.item.note }}</td>
        <!-- <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
            <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>-->
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
      <template
        v-slot:pageText="props"
      >แถวที่ {{ props.pageStart }} - {{ props.pageStop }} จาก {{ props.itemsLength }}</template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  props: {
    menu: []
  },
  data: () => ({
    search: "",
    dialog: false,
    course_level: "ปวช.",
    headers: [
      {
        text: "ที่",
        align: "left",
        value: "name"
      },
      { text: "ประเภทสื่อ", align: "left", value: "media_type_id" },
      { text: "ชื่อผลงาน/สื่อการสอน", align: "left", value: "media_name" },
      { text: "จำนวน", value: "amount" },
      { text: "ลิ้งค์", align: "left", value: "link_google" },
      { text: "หมายเหตุ", align: "left", value: "note" }
      // { text: "กระทำ", value: "name", sortable: false }
    ],
    medias: [],
    editedIndex: -1,
    editedItem: {
      citizen_id: "",
      course_level: "ปวช.",
      subject_type_id: "",
      major_id: "",
      minor_id: "",
      subject_name: "",
      subject_code: "",
      media_type: "",
      media_name: "",
      amount: "",
      note: "",
      link_google: "",
      e_training: "พัฒนาต่อ"
    },
    defaultItem: {
      citizen_id: "",
      course_level: "ปวช.",
      subject_type_id: "",
      major_id: "",
      minor_id: "",
      subject_name: "",
      subject_code: "",
      media_type_id: "",
      media_name: "",
      amount: "",
      note: "",
      link_google: "",
      e_training: "พัฒนาต่อ"
    },
    subject_type_list: [],
    subject_code_list: [],
    major_list: [],
    minor_list: [],
    media_type_list: []
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "เพิ่มข้อมูลสื่อ" : "แก้ไขข้อมูลสื่อ";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.getCitizenID();
    this.initialize();
    // console.log("citizen_id ", window.sessionStorage.getItem("citizen_id"));
  },

  methods: {
    async initialize() {
      this.getSubjectType();
      // this.medias = [];
      this.getMediaType();
      this.getMedia();
    },
    getCitizenID() {
      if (window.sessionStorage.getItem("user")) {
        let user = window.sessionStorage.getItem("user");
        let data = JSON.parse(user);
        console.log(data);
        this.editedItem.citizen_id = data.citizen_id;
        console.log("citizen_id", this.editedItem.citizen_id);
      }
    },
    async getSubjectType() {
      let url = "https://api.cstc.ac.th/subject_type";
      let res = await fetch(url);
      let data = await res.json();
      this.subject_type_list = data.subject_type;
    },
    async getMediaType() {
      console.log("media_type");
      let url = "https://api.cstc.ac.th/media_type";
      let res = await fetch(url);
      let data = await res.json();
      this.media_type_list = data.media_type;
    },
    async getMajor() {
      console.log("major", this.editedItem.subject_type_id);
      let url =
        "https://api.cstc.ac.th/major/" + this.editedItem.subject_type_id;
      let res = await fetch(url);
      let data = await res.json();
      this.major_list = data.major;
    },
    async getMinor() {
      console.log("minor");
      let url = "https://api.cstc.ac.th/minor/" + this.editedItem.major_id;
      let res = await fetch(url);
      let data = await res.json();
      this.minor_list = data.minor;
    },
    async getMedia() {
      console.log("media all");
      let url = "https://api.cstc.ac.th/media/all";
      let res = await fetch(url);
      let data = await res.json();
      this.medias = data.media;
    },
    editItem(item) {
      this.editedIndex = this.medias.indexOf(item);
      this.editedItem = Object.assign({}, item);
      // this.editedItem = JSON.parse(JSON.stringify(item))
      console.log(this.editedItem);
      // var a = { id: 1, name: 'a', list: [] }
      // var b = Object.assign({}, a);
      // b.list.push(111)
      // b.id = 1
      // b.name = 'a'
      // b.list = a.list

      // console.log('a=', a.list)
      // let obj = Object.assign({id: 2}, {id: 1})
      this.dialog = true;
    },

    async deleteItem(item) {
      console.log(item);
      const index = this.medias.indexOf(item);
      confirm("ยืนยันการลบข้อมูล?") && this.medias.splice(index, 1);
      console.log(index);
      let res = await fetch("https://api.cstc.ac.th/api/media/" + item.id, {
        method: "delete"
      });
      let data = await res.json();
      console.log("data=", data);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    async save() {
      this.getCitizenID();
      if (this.editedIndex > -1) {
        // // update
        // console.log(this.editedItem);
        // if (this.editedItem.citizen_id == "") return;

        // return;
        let res = await fetch("https://api.cstc.ac.th/api/media/", {
          method: "put",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(this.editedItem)
        });
        let data = await res.json();
        if (data.ok)
          Object.assign(this.medias[this.editedIndex], this.editedItem);
      } else {
        // insert
        console.log(this.editedItem);
        if (this.editedItem.citizen_id == "") return;

        // return;
        let res = await fetch("https://api.cstc.ac.th/api/media/", {
          method: "post",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(this.editedItem)
        });
        let data = await res.json();
        if (data.ok) this.medias.push(this.editedItem);
        console.log("data=", data);
      }
      this.close();
    },
    doLogout() {
      window.sessionStorage.clear();
      return this.$router.replace("/login");
    },
    show_lv() {
      console.log(this.editedItem.course_level);
    },
    show_st() {
      console.log(this.editedItem.subject_type_id);
    }
  }
};
</script>