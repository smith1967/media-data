<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>
        <v-text-field v-model="search" append-icon="search" label="ค้นหา" single-line hide-details></v-text-field>
      </v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>

      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn absolute dark fab centered right color="success" v-on="on">
            <v-icon>add</v-icon>
          </v-btn>
          <!-- <v-btn color="primary" dark class="mb-2" v-on="on">เพิ่มข้อมูลสื่อ</v-btn> -->
        </template>
        <v-card>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-radio-group v-model="editedItem.course_level" @click="show_lv" row>
                      <v-radio label="ปวช." value="2" name="course_level"></v-radio>
                      <v-radio label="ปวส." value="3" name="course_level"></v-radio>
                    </v-radio-group>
                  </v-flex>
                  <!-- <v-flex xs12 sm12 md12>
                    <v-text-field
                      v-model="editedItem.citizen_id"
                      v-show="false"
                      label="รหัสบัตรประชาชน"
                    ></v-text-field>
                  </v-flex>-->
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="subject_type_list"
                      label="ประเภทวิชา"
                      v-model="editedItem.subject_type_id"
                      item-text="subject_type_name"
                      item-value="subject_type_id"
                      @change="getMajor"
                    ></v-select>
                    <!-- <v-text-field v-model="editedItem.subject_type" label="ประเภทวิชา"></v-text-field> -->
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-autocomplete
                      v-model="editedItem.major_id"
                      :items="majorList"
                      item-text="major_name"
                      item-value="major_id"
                      label="สาขาวิชา"
                      @change="getMinor"
                    ></v-autocomplete>
                    <!-- <v-text-field v-model="editedItem.major_id" label="สาขาวิชา"></v-text-field> -->
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-autocomplete
                      v-model="editedItem.minor_id"
                      :items="minor_list"
                      item-text="minor_name"
                      item-value="minor_id"
                      label="สาขางาน"
                    ></v-autocomplete>
                    <!-- <v-text-field v-model="editedItem.minor_id" label="สาขางาน"></v-text-field> -->
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-autocomplete
                      v-model="editedItem.media_type_id"
                      :items="media_type_list"
                      item-text="media_type_name"
                      item-value="media_type_id"
                      :label="`ประเภทสื่อ`"
                    ></v-autocomplete>
                    <!-- <v-text-field v-model="editedItem.media_type" label="ประเภทสื่อ"></v-text-field> -->
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="editedItem.subject_code" label="รหัสวิชา"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="editedItem.subject_name" label="ชื่อวิชา"></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12 md12>
                    <v-text-field v-model="editedItem.media_name" label="ชื่อผลงาน/สื่อการสอน"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-slider
                      v-model="editedItem.amount"
                      :min="1"
                      :max="50"
                      label="จำนวน"
                      thumb-label
                    ></v-slider>
                    <!-- <v-text-field v-model="editedItem.amount" label="จำนวน"></v-text-field> -->
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-textarea
                      name="input-7-1"
                      label="หมายเหตุ"
                      value
                      hint="ข้อมูลเพิ่มเติม"
                      v-model="editedItem.note"
                    ></v-textarea>
                    <!-- <v-text-field v-model="editedItem.note" label="หมายเหตุ"></v-text-field> -->
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-text-field
                      v-model="editedItem.link_google"
                      label="ลิ้งค์ข้อมูล"
                      hint="แชร์จาก Google Drive หรือเว็บไซต์"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-radio-group v-model="editedItem.e_training" @click="show_lv">
                      <v-radio
                        label="สื่อสามารถใช้งานเป็น E-Training ได้ทันที"
                        value="ทันที"
                        name="e_train"
                      ></v-radio>
                      <v-radio
                        label="สื่อที่มีต้องพัฒนาเพิ่มเติมเพื่อเข้าระบบ E-Training"
                        value="พัฒนาต่อ"
                        name="e_train"
                      ></v-radio>
                    </v-radio-group>
                  </v-flex>
                  <!-- <v-flex xs12 sm6 md6>
                      
                    <v-text-field v-model="editedItem.e_training" label="E-training"></v-text-field>
                  </v-flex>-->
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" flat @click="close">ปิดหน้าต่าง</v-btn>
              <v-btn color="primary" flat @click="save">บันทึก</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table :headers="headers" :items="medias" :search="search" class="elevation-1">
      <template v-slot:items="props">
        <!-- <td>{{ props.item.name }}</td> -->
        <td class="text-xs-right">{{ props.item.media_type_id }}</td>
        <td class="text-xs-right">{{ props.item.media_name }}</td>
        <td class="text-xs-right">{{ props.item.amount }}</td>
        <td class="text-xs-right">{{ props.item.link_google }}</td>
        <!-- <td class="text-xs-right">{{ props.item.note }}</td> -->
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
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
  data: () => ({
    valid: false,
    search: "",
    dialog: false,
    course_level: "2",
    headers: [
      // {
      //   text: "ที่",
      //   align: "left",
      //   sortable: false,
      //   value: "name"
      // },
      { text: "ประเภทสื่อ", align: "left", value: "media_type_id" },
      { text: "ชื่อผลงาน/สื่อการสอน", align: "left", value: "media_name" },
      { text: "จำนวน", value: "amount" },
      // { text: "หมายเหตุ", align: "left", value: "note" },
      { text: "ลิ้งค์", align: "left", value: "link_google" },
      { text: "กระทำ", value: "name", sortable: false }
    ],
    medias: [],
    editedIndex: -1,
    editedItem: {
      citizen_id: "",
      course_level: "2",
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
      course_level: "2",
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
    },
    majorList() {
      // return this.major_list.filter(function(m) {
      //   return m.major_id.substring(0, 1) == this.editedItem.course_level;
      // });
      // return this.heroes.filter(hero => hero.franchise == this.search);
      return this.major_list.filter(
        m => m.major_id.substring(0, 1) == this.editedItem.course_level
      );
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    // this.getCitizenID();
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
        // console.log(data);
        return data.citizen_id;
        // console.log("citizen_id", data.citizen_id);
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
      let url = "https://api.cstc.ac.th/media/" + this.getCitizenID();
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
      this.editedItem.citizen_id = this.getCitizenID();
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

    show_lv() {
      console.log(this.editedItem.course_level);
    },
    show_st() {
      console.log(this.editedItem.subject_type_id);
    }
  }
};
</script>