(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{328:function(e,t,n){"use strict";n.r(t);n(76);var r=n(14),o={data:function(){return{search:"",dialog:!1,course_level:"ปวช.",headers:[{text:"ประเภทสื่อ",align:"left",value:"media_type_id"},{text:"ชื่อผลงาน/สื่อการสอน",align:"left",value:"media_name"},{text:"จำนวน",value:"amount"},{text:"หมายเหตุ",align:"left",value:"note"},{text:"กระทำ",value:"name",sortable:!1}],medias:[],editedIndex:-1,editedItem:{citizen_id:"",course_level:"ปวช.",subject_type_id:"",major_id:"",minor_id:"",subject_name:"",subject_code:"",media_type:"",media_name:"",amount:"",note:"",link_google:"",e_training:"พัฒนาต่อ"},defaultItem:{citizen_id:"",course_level:"ปวช.",subject_type_id:"",major_id:"",minor_id:"",subject_name:"",subject_code:"",media_type_id:"",media_name:"",amount:"",note:"",link_google:"",e_training:"พัฒนาต่อ"},subject_type_list:[],subject_code_list:[],major_list:[],minor_list:[],media_type_list:[]}},computed:{formTitle:function(){return-1===this.editedIndex?"เพิ่มข้อมูลสื่อ":"แก้ไขข้อมูลสื่อ"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getSubjectType(),this.getMediaType(),this.getMedia();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getSubjectType:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://dve.cstc.ac.th:7000/subject_type",e.next=3,fetch("http://dve.cstc.ac.th:7000/subject_type");case 3:return t=e.sent,e.next=6,t.json();case 6:data=e.sent,this.subject_type_list=data.subject_type;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getMediaType:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("media_type"),"http://dve.cstc.ac.th:7000/media_type",e.next=4,fetch("http://dve.cstc.ac.th:7000/media_type");case 4:return t=e.sent,e.next=7,t.json();case 7:data=e.sent,this.media_type_list=data.media_type;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getMajor:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("major"),t="http://dve.cstc.ac.th:7000/major/"+this.editedItem.subject_type_id,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:data=e.sent,this.major_list=data.major;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getMinor:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("minor"),t="http://dve.cstc.ac.th:7000/minor/"+this.editedItem.major_id,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:data=e.sent,this.minor_list=data.minor;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getMedia:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("media all"),"http://dve.cstc.ac.th:7000/mediaAll",e.next=4,fetch("http://dve.cstc.ac.th:7000/mediaAll");case 4:return t=e.sent,e.next=7,t.json();case 7:data=e.sent,this.medias=data.media;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),editItem:function(e){this.editedIndex=this.medias.indexOf(e),this.editedItem=Object.assign({},e),console.log(this.editedItem),this.dialog=!0},deleteItem:function(e){var t=this.medias.indexOf(e);confirm("ยืนยันการลบข้อมูล?")&&this.medias.splice(t,1)},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1},300)},save:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.editedIndex>-1)){e.next=4;break}Object.assign(this.medias[this.editedIndex],this.editedItem),e.next=13;break;case 4:return console.log(this.editedItem),e.next=7,fetch("http://dve.cstc.ac.th:7000/api/media/",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(this.editedItem)});case 7:return t=e.sent,e.next=10,t.json();case 10:(data=e.sent).ok&&this.medias.push(this.editedItem),console.log("data=",data);case 13:this.close();case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),show_lv:function(){console.log(this.editedItem.course_level)},show_st:function(){console.log(this.editedItem.subject_type_id)}}},d=n(16),c=n(29),l=n.n(c),m=n(260),v=n(271),_=n(106),h=n(103),f=n(261),x=n(94),I=n(92),j=n(319),y=n(254),k=n(278),w=n(95),V=n(104),T=n(96),R=n(279),C=n(280),O=n(314),$=n(315),S=n(256),M=n(257),z=n(148),A=n(105),D=n(102),E=n(258),component=Object(d.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-side-icon"),e._v(" "),n("v-toolbar-title",{staticClass:"white--text"},[e._v("Media Data System")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("search")])],1),e._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("apps")])],1),e._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("refresh")])],1),e._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("more_vert")])],1)],1),e._v(" "),n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",[n("v-text-field",{attrs:{"append-icon":"search",label:"ค้นหา","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},r),[e._v("เพิ่มข้อมูลสื่อ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-radio-group",{attrs:{row:""},on:{click:e.show_lv},model:{value:e.editedItem.course_level,callback:function(t){e.$set(e.editedItem,"course_level",t)},expression:"editedItem.course_level"}},[n("v-radio",{attrs:{label:"ปวช.",value:"ปวช.",name:"course_level"}}),e._v(" "),n("v-radio",{attrs:{label:"ปวส.",value:"ปวส.",name:"course_level"}})],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:-1==e.editedIndex,expression:"editedIndex==-1"}],attrs:{label:"รหัสบัตรประชาชน"},model:{value:e.editedItem.citizen_id,callback:function(t){e.$set(e.editedItem,"citizen_id",t)},expression:"editedItem.citizen_id"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-select",{attrs:{items:e.subject_type_list,label:"ประเภทวิชา","item-text":"subject_type_name","item-value":"subject_type_id"},on:{change:e.getMajor},model:{value:e.editedItem.subject_type_id,callback:function(t){e.$set(e.editedItem,"subject_type_id",t)},expression:"editedItem.subject_type_id"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-autocomplete",{attrs:{items:e.major_list,"item-text":"major_name","item-value":"major_id",label:"สาขาวิชา"},on:{change:e.getMinor},model:{value:e.editedItem.major_id,callback:function(t){e.$set(e.editedItem,"major_id",t)},expression:"editedItem.major_id"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-autocomplete",{attrs:{items:e.minor_list,"item-text":"minor_name","item-value":"minor_id",label:"สาขางาน"},model:{value:e.editedItem.minor_id,callback:function(t){e.$set(e.editedItem,"minor_id",t)},expression:"editedItem.minor_id"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-autocomplete",{attrs:{items:e.media_type_list,"item-text":"media_type_name","item-value":"media_type_id",label:"ประเภทสื่อ"},model:{value:e.editedItem.media_type_id,callback:function(t){e.$set(e.editedItem,"media_type_id",t)},expression:"editedItem.media_type_id"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-text-field",{attrs:{label:"รหัสวิชา"},model:{value:e.editedItem.subject_code,callback:function(t){e.$set(e.editedItem,"subject_code",t)},expression:"editedItem.subject_code"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-text-field",{attrs:{label:"ชื่อวิชา"},model:{value:e.editedItem.subject_name,callback:function(t){e.$set(e.editedItem,"subject_name",t)},expression:"editedItem.subject_name"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-text-field",{attrs:{label:"ชื่อผลงาน/สื่อการสอน"},model:{value:e.editedItem.media_name,callback:function(t){e.$set(e.editedItem,"media_name",t)},expression:"editedItem.media_name"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-slider",{attrs:{min:1,max:50,label:"จำนวน","thumb-label":""},model:{value:e.editedItem.amount,callback:function(t){e.$set(e.editedItem,"amount",t)},expression:"editedItem.amount"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-textarea",{attrs:{name:"input-7-1",label:"หมายเหตุ",value:"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.",hint:"ข้อมูลเพิ่มเติม"},model:{value:e.editedItem.note,callback:function(t){e.$set(e.editedItem,"note",t)},expression:"editedItem.note"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-text-field",{attrs:{label:"ลิ้งค์ข้อมูล"},model:{value:e.editedItem.link_google,callback:function(t){e.$set(e.editedItem,"link_google",t)},expression:"editedItem.link_google"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-radio-group",{on:{click:e.show_lv},model:{value:e.editedItem.e_training,callback:function(t){e.$set(e.editedItem,"e_training",t)},expression:"editedItem.e_training"}},[n("v-radio",{attrs:{label:"สื่อสามารถใช้งานเป็น E-Training ได้ทันที",value:"ทันที",name:"e_train"}}),e._v(" "),n("v-radio",{attrs:{label:"สื่อที่มีต้องพัฒนาเพิ่มเติมเพื่อเข้าระบบ E-Training",value:"พัฒนาต่อ",name:"e_train"}})],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("ปิดหน้าต่าง")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.save}},[e._v("บันทึก")])],1)],1)],1)],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.medias,search:e.search},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.media_type_id))]),e._v(" "),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.media_name))]),e._v(" "),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.amount))]),e._v(" "),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.note))]),e._v(" "),n("td",{staticClass:"justify-center layout px-0"},[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(n){return e.editItem(t.item)}}},[e._v("edit")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(n){return e.deleteItem(t.item)}}},[e._v("delete")])],1)]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0},{key:"pageText",fn:function(t){return[e._v("แถวที่ "+e._s(t.pageStart)+" - "+e._s(t.pageStop)+" จาก "+e._s(t.itemsLength))]}}])})],1)],1)},[],!1,null,null,null);t.default=component.exports;l()(component,{VApp:m.a,VAutocomplete:v.a,VBtn:_.a,VCard:h.a,VCardActions:f.a,VCardText:f.b,VCardTitle:x.a,VContainer:I.a,VDataTable:j.a,VDialog:y.a,VDivider:k.a,VFlex:w.a,VIcon:V.a,VLayout:T.a,VRadio:R.a,VRadioGroup:C.a,VSelect:O.a,VSlider:$.a,VSpacer:S.a,VTextField:M.a,VTextarea:z.a,VToolbar:A.a,VToolbarSideIcon:D.a,VToolbarTitle:E.a})}}]);