<template>
  <div>
    <v-app>
      <v-toolbar flat color="white">
        <v-toolbar-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="ค้นหา"
            single-line
            hide-details
          ></v-text-field>
        </v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">เพิ่มข้อมูลสื่อ</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm8 md8>
                    <v-radio-group v-model="course_level" @click="show_lv" row>
                      <v-radio label="ปวช." value="2" :key="2" name="xxx"></v-radio>
                      <v-radio label="ปวส." value="3" :key="3" name="xxx"></v-radio>
                    </v-radio-group>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      v-model="editedItem.citizen_id"
                      v-show="editedIndex==-1"
                      label="รหัสบัตรประชาชน"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select
                      :items="subject_type_list"
                      label="ประเภทวิชา"
                      v-model="editItem.subject_type"
                      item-text="name"
                      item-value="code"
                    ></v-select>
                    <!-- <v-text-field v-model="editedItem.subject_type" label="ประเภทวิชา"></v-text-field> -->
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.major" label="สาขาวิชา"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.minor" label="สาขางาน"></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md4>
                    <v-autocomplete
                      v-model="editedItem.subject_code"
                      :items="subject_code_list"
                      item-text="name"
                      item-value="code"
                      :label="`รหัสวิชา`"
                    ></v-autocomplete>
                    <!-- <v-text-field v-model="editedItem.subject_code" label="รหัสวิชา"></v-text-field> -->
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.subject_name" label="ชื่อวิชา"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.media_type" label="ประเภทสื่อ"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.media_name" label="ชื่อผลงาน/สื่อการสอน"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.amount" label="จำนวน"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.note" label="หมายเหตุ"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.link_google" label="ลิ้งค์ข้อมูล"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm8 md8>
                    <v-radio-group v-model="editedItem.e_training" @click="show_lv" row>
                      <v-radio label="ทันที" value="0" name="xxx"></v-radio>
                      <v-radio label="พัฒนาต่อ" value="1" name="xxx"></v-radio>
                    </v-radio-group>
                  </v-flex>
                  <!-- <v-flex xs12 sm6 md4>
                      
                    <v-text-field v-model="editedItem.e_training" label="E-training"></v-text-field>
                  </v-flex>-->
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">ปิดหน้าต่าง</v-btn>
              <v-btn color="blue darken-1" flat @click="save">บันทึก</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table :headers="headers" :items="medias" :search="search" class="elevation-1">
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.media_type }}</td>
          <td class="text-xs-right">{{ props.item.media_name }}</td>
          <td class="text-xs-right">{{ props.item.amount }}</td>
          <td class="text-xs-right">{{ props.item.note }}</td>
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
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    search: "",
    dialog: false,
    course_level: "2",
    headers: [
      {
        text: "ที่",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "ประเภทสื่อ", value: "media_type" },
      { text: "ชื่อผลงาน/สื่อการสอน", value: "media_name" },
      { text: "จำนวน", value: "amount" },
      { text: "หมายเหตุ", value: "note" },
      { text: "กระทำ", value: "name", sortable: false }
    ],
    medias: [],
    editedIndex: -1,
    editedItem: {
      citizen_id: "",
      course_level: "2",
      subject_type: "",
      major: "",
      minor: "",
      subject_name: "",
      subject_code: "",
      media_type: "",
      media_name: "",
      amount: "",
      note: "",
      link_google: "",
      e_training: ""
    },
    defaultItem: {
      citizen_id: "",
      course_level: "2",
      subject_type: "",
      major: "",
      minor: "",
      subject_name: "",
      subject_code: "",
      media_type: "",
      media_name: "",
      amount: "",
      note: "",
      link_google: "",
      e_training: ""
    },
    subject_type_list: [
      { code: "10", name: "อุตสาหกรรม" },
      { code: "20", name: "พาณิชย์" }
    ],
    subject_code_list: [
      { code: "2105-2000", name: "ระบบเครือข่าย" },
      { code: "3105-2000", name: "การเขียนโปรแกรม" }
    ]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "เพิ่มข้อมูล" : "แก้ไขข้อมูล";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.medias = [
        {
          citizen_id: "123456",
          course_level: "2",
          subject_type: "อุตสาหกรรม",
          major: "EP",
          minor: "EE",
          subject_name: "IT",
          subject_code: "2105-1001",
          media_type: "M",
          media_name: "การคอนฟิกเร้าเตอร์",
          amount: "2",
          note: "xxxx",
          link_google: "link",
          e_training: "ทันที"
        },
        {
          citizen_id: "123456",
          course_level: "2",
          subject_type: "อุตสาหกรรม",
          major: "EP",
          minor: "EE",
          subject_name: "IT",
          subject_code: "2105-1001",
          media_type: "M",
          media_name: "การคอนฟิกเร้าเตอร์",
          amount: "2",
          note: "xxxx",
          link_google: "link",
          e_training: "ทันที"
        }
      ];
    },

    editItem(item) {
      console.log(item);
      this.editedIndex = this.medias.indexOf(item);
      this.editedItem = Object.assign({}, item);
      // this.editedItem = JSON.parse(JSON.stringify(item))

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

    deleteItem(item) {
      const index = this.medias.indexOf(item);
      confirm("ยืนยันการลบข้อมูล?") && this.medias.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.medias[this.editedIndex], this.editedItem);
      } else {
        this.medias.push(this.editedItem);
      }
      this.close();
    },

    show_lv() {
      console.log(this.course_level);
    }
  }
};
</script>