(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{266:function(t,e,o){var content=o(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("97d4060c",content,!0,{sourceMap:!1})},267:function(t,e,o){(t.exports=o(7)(!1)).push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;margin-right:16px;outline:none}.v-radio--is-disabled{pointer-events:none}",""])},268:function(t,e,o){var content=o(269);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("ccc1b94c",content,!0,{sourceMap:!1})},269:function(t,e,o){(t.exports=o(7)(!1)).push([t.i,".v-input--radio-group__input{display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""])},279:function(t,e,o){"use strict";o(266);var n=o(30),r=o(56),l=o(9),d=o(265),c=o(6),m=o(264),v=o(24),h=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a={name:"v-radio",mixins:[l.a,d.a,Object(v.a)("radio","v-radio","v-radio-group"),c.a],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:h({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var t,e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];return(t=m.a.options.methods.genInput).call.apply(t,[this].concat(function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)}(o)))},genLabel:function(){return this.$createElement(r.a,{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||"",dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",h({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(n.a,this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(t){return t("div",this.computedData,[this.genRadio(),this.genLabel()])}}},280:function(t,e,o){"use strict";o(263),o(268);var n=o(34),r=o(262),l=o(24);e.a=n.a.extend({name:"v-radio-group",mixins:[r.a,Object(l.b)("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},n.a.options.methods.genDefaultSlot.call(this))},onRadioChange:function(t){this.disabled||(this.hasInput=!0,this.internalValue=t,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(t){t.relatedTarget&&t.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",t))},register:function(t){t.isActive=this.valueComparator(this.internalValue,t.value),t.$on("change",this.onRadioChange),t.$on("blur",this.onRadioBlur),this.radios.push(t)},setErrorState:function(t){for(var e=this.radios.length;--e>=0;)this.radios[e].parentError=t},setActiveRadio:function(){for(var t=this.radios.length;--t>=0;){var e=this.radios[t];e.isActive=this.valueComparator(this.internalValue,e.value)}},unregister:function(t){t.$off("change",this.onRadioChange),t.$off("blur",this.onRadioBlur);var e=this.radios.findIndex(function(e){return e===t});e>-1&&this.radios.splice(e,1)}}})},323:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{search:"",dialog:!1,course_level:"2",headers:[{text:"ที่",align:"left",sortable:!1,value:"name"},{text:"ประเภทสื่อ",value:"media_type"},{text:"ชื่อผลงาน/สื่อการสอน",value:"media_name"},{text:"จำนวน",value:"amount"},{text:"หมายเหตุ",value:"note"},{text:"กระทำ",value:"name",sortable:!1}],medias:[],editedIndex:-1,editedItem:{citizen_id:"",course_level:"2",subject_type:"",major:"",minor:"",subject_name:"",subject_code:"",media_type:"",media_name:"",amount:"",note:"",link_google:"",e_training:""},defaultItem:{citizen_id:"",course_level:"2",subject_type:"",major:"",minor:"",subject_name:"",subject_code:"",media_type:"",media_name:"",amount:"",note:"",link_google:"",e_training:""},subject_type_list:[{code:"10",name:"อุตสาหกรรม"},{code:"20",name:"พาณิชย์"}],subject_code_list:[{code:"2105-2000",name:"ระบบเครือข่าย"},{code:"3105-2000",name:"การเขียนโปรแกรม"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"เพิ่มข้อมูล":"แก้ไขข้อมูล"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.medias=[{citizen_id:"123456",course_level:"2",subject_type:"อุตสาหกรรม",major:"EP",minor:"EE",subject_name:"IT",subject_code:"2105-1001",media_type:"M",media_name:"การคอนฟิกเร้าเตอร์",amount:"2",note:"xxxx",link_google:"link",e_training:"ทันที"},{citizen_id:"123456",course_level:"2",subject_type:"อุตสาหกรรม",major:"EP",minor:"EE",subject_name:"IT",subject_code:"2105-1001",media_type:"M",media_name:"การคอนฟิกเร้าเตอร์",amount:"2",note:"xxxx",link_google:"link",e_training:"ทันที"}]},editItem:function(t){console.log(t),this.editedIndex=this.medias.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this.medias.indexOf(t);confirm("ยืนยันการลบข้อมูล?")&&this.medias.splice(e,1)},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){this.editedIndex>-1?Object.assign(this.medias[this.editedIndex],this.editedItem):this.medias.push(this.editedItem),this.close()},show_lv:function(){console.log(this.course_level)}}},r=o(16),l=o(29),d=o.n(l),c=o(260),m=o(271),v=o(106),h=o(103),f=o(261),_=o(94),x=o(92),I=o(319),y=o(254),k=o(278),j=o(95),C=o(104),w=o(96),$=o(279),V=o(280),S=o(314),A=o(256),T=o(257),E=o(105),R=o(258),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-app",[o("v-toolbar",{attrs:{flat:"",color:"white"}},[o("v-toolbar-title",[o("v-text-field",{attrs:{"append-icon":"search",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),o("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),o("v-spacer"),t._v(" "),o("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},n),[t._v("เพิ่มข้อมูลสื่อ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),o("v-card-text",[o("v-container",{attrs:{"grid-list-md":""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:"",sm8:"",md8:""}},[o("v-radio-group",{attrs:{row:""},on:{click:t.show_lv},model:{value:t.course_level,callback:function(e){t.course_level=e},expression:"course_level"}},[o("v-radio",{key:2,attrs:{label:"ปวช.",value:"2",name:"xxx"}}),t._v(" "),o("v-radio",{key:3,attrs:{label:"ปวส.",value:"3",name:"xxx"}})],1)],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{directives:[{name:"show",rawName:"v-show",value:-1==t.editedIndex,expression:"editedIndex==-1"}],attrs:{label:"รหัสบัตรประชาชน"},model:{value:t.editedItem.citizen_id,callback:function(e){t.$set(t.editedItem,"citizen_id",e)},expression:"editedItem.citizen_id"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-select",{attrs:{items:t.subject_type_list,label:"ประเภทวิชา","item-text":"name","item-value":"code"},model:{value:t.editItem.subject_type,callback:function(e){t.$set(t.editItem,"subject_type",e)},expression:"editItem.subject_type"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"สาขาวิชา"},model:{value:t.editedItem.major,callback:function(e){t.$set(t.editedItem,"major",e)},expression:"editedItem.major"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"สาขางาน"},model:{value:t.editedItem.minor,callback:function(e){t.$set(t.editedItem,"minor",e)},expression:"editedItem.minor"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-autocomplete",{attrs:{items:t.subject_code_list,"item-text":"name","item-value":"code",label:"รหัสวิชา"},model:{value:t.editedItem.subject_code,callback:function(e){t.$set(t.editedItem,"subject_code",e)},expression:"editedItem.subject_code"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"ชื่อวิชา"},model:{value:t.editedItem.subject_name,callback:function(e){t.$set(t.editedItem,"subject_name",e)},expression:"editedItem.subject_name"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"ประเภทสื่อ"},model:{value:t.editedItem.media_type,callback:function(e){t.$set(t.editedItem,"media_type",e)},expression:"editedItem.media_type"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"ชื่อผลงาน/สื่อการสอน"},model:{value:t.editedItem.media_name,callback:function(e){t.$set(t.editedItem,"media_name",e)},expression:"editedItem.media_name"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"จำนวน"},model:{value:t.editedItem.amount,callback:function(e){t.$set(t.editedItem,"amount",e)},expression:"editedItem.amount"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"หมายเหตุ"},model:{value:t.editedItem.note,callback:function(e){t.$set(t.editedItem,"note",e)},expression:"editedItem.note"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"ลิ้งค์ข้อมูล"},model:{value:t.editedItem.link_google,callback:function(e){t.$set(t.editedItem,"link_google",e)},expression:"editedItem.link_google"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm8:"",md8:""}},[o("v-radio-group",{attrs:{row:""},on:{click:t.show_lv},model:{value:t.editedItem.e_training,callback:function(e){t.$set(t.editedItem,"e_training",e)},expression:"editedItem.e_training"}},[o("v-radio",{attrs:{label:"ทันที",value:"0",name:"xxx"}}),t._v(" "),o("v-radio",{attrs:{label:"พัฒนาต่อ",value:"1",name:"xxx"}})],1)],1)],1)],1)],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v("ปิดหน้าต่าง")]),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("บันทึก")])],1)],1)],1)],1),t._v(" "),o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.medias,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[o("td",[t._v(t._s(e.item.name))]),t._v(" "),o("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.media_type))]),t._v(" "),o("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.media_name))]),t._v(" "),o("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.amount))]),t._v(" "),o("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.note))]),t._v(" "),o("td",{staticClass:"justify-center layout px-0"},[o("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(o){return t.editItem(e.item)}}},[t._v("edit")]),t._v(" "),o("v-icon",{attrs:{small:""},on:{click:function(o){return t.deleteItem(e.item)}}},[t._v("delete")])],1)]}},{key:"no-data",fn:function(){return[o("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0},{key:"pageText",fn:function(e){return[t._v("แถวที่ "+t._s(e.pageStart)+" - "+t._s(e.pageStop)+" จาก "+t._s(e.itemsLength))]}}])})],1)],1)},[],!1,null,null,null);e.default=component.exports;d()(component,{VApp:c.a,VAutocomplete:m.a,VBtn:v.a,VCard:h.a,VCardActions:f.a,VCardText:f.b,VCardTitle:_.a,VContainer:x.a,VDataTable:I.a,VDialog:y.a,VDivider:k.a,VFlex:j.a,VIcon:C.a,VLayout:w.a,VRadio:$.a,VRadioGroup:V.a,VSelect:S.a,VSpacer:A.a,VTextField:T.a,VToolbar:E.a,VToolbarTitle:R.a})}}]);