(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{274:function(e,t,n){var content=n(303);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("4c8d2896",content,!0,{sourceMap:!1})},302:function(e,t,n){"use strict";var o=n(274);n.n(o).a},303:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".page-title{color:red}",""])},326:function(e,t,n){"use strict";n.r(t);n(76);var o=n(14),r={data:function(){return{selectedRoom:"",keyword:"",idx:-1,code:"",fname:"",lname:"",room:"1/1",roomList:[{code:"101",name:"ปวช.1/1"},{code:"102",name:"ปวช.1/2"}],students:[],headers:[{text:"รหัสนักศึกษา",align:"left",sortable:!0,value:"code"},{text:"ชื่อ - นามสกุล",value:"fname"},{text:"ห้อง",value:"room"},{text:"คำสั่ง",value:"action"}]}},methods:{getStudent:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t,n,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://localhost:7000/api/student/room/"+this.selectedRoom,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:data=e.sent,this.students=data.student;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),delStudent:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:7000/api/student/"+this.code,{method:"delete"});case 2:return t=e.sent,e.next=5,t.json();case 5:data=e.sent,console.log("data=",data);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),saveStudent:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t,n,data,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={code:this.code,pre_name:"นาย",first_name:this.fname,last_name:this.lname,room:this.room},e.next=3,fetch("http://localhost:7000/api/student/"+this.code,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:data=e.sent,console.log("data=",data),-1===this.idx?this.students.push({code:this.code,fname:this.fname,lname:this.lname,room:this.room}):((o=this.students[this.idx]).code=this.code,o.fname=this.fname,o.lname=this.lname,o.room=this.room),this.idx=-1,this.code="",this.fname="",this.lname="";case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),editStudent:function(e,t){this.idx=t,this.code=e.code,this.fname=e.fname,this.lname=e.lname,this.room=e.room}}},c=(n(302),n(16)),l=n(29),d=n.n(l),m=n(106),v=n(92),f=n(319),h=n(95),x=n(96),_=n(101),k=n(314),w=n(257),component=Object(c.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{attrs:{"grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticStyle:{"background-color":"pink"},attrs:{xs12:"",sm6:"",md4:""}},[n("h1",{staticClass:"page-title"},[e._v("Student List")]),e._v(" "),n("v-btn",{on:{click:e.getStudent}},[e._v("TEST")]),e._v(" "),n("v-select",{attrs:{label:"เลือกห้อง",items:e.roomList,"item-value":"code","item-text":"name"},on:{change:e.getStudent},model:{value:e.selectedRoom,callback:function(t){e.selectedRoom=t},expression:"selectedRoom"}})],1),e._v(" "),n("v-flex",{staticStyle:{"background-color":"yellow"},attrs:{xs12:"",sm6:"",md4:""}},[n("div",[n("div",[e._v(e._s(e.idx))]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fname,expression:"fname"}],domProps:{value:e.fname},on:{input:function(t){t.target.composing||(e.fname=t.target.value)}}})]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.lname,expression:"lname"}],domProps:{value:e.lname},on:{input:function(t){t.target.composing||(e.lname=t.target.value)}}})]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.room,expression:"room"}],domProps:{value:e.room},on:{input:function(t){t.target.composing||(e.room=t.target.value)}}})]),e._v(" "),n("div",[n("button",{on:{click:e.saveStudent}},[e._v("SAVE")])])])]),e._v(" "),n("v-flex",{staticStyle:{"background-color":"red"},attrs:{xs12:""}},[n("v-text-field",{attrs:{"prepend-inner-icon":"face"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.students,loading:!0,search:e.keyword},scopedSlots:e._u([{key:"items",fn:function(t){return[n("tr",[n("td",[e._v(e._s(t.item.code))]),e._v(" "),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.first_name)+" "+e._s(t.item.last_name))]),e._v(" "),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.room))]),e._v(" "),n("td",[n("button",{on:{click:function(n){return e.editStudent(t.item,e.idx)}}},[e._v("EDIT")]),e._v(" "),n("button",{on:{click:function(n){return e.$router.push("/student/"+t.item.code)}}},[e._v("PROFILE")]),e._v(" "),n("nuxt-link",{attrs:{to:"/student/"+t.item.code}},[e._v("Profile")])],1)])]}}])},[n("v-progress-linear",{attrs:{color:"blue",indeterminate:""},scopedSlots:e._u([{key:"progress",fn:function(){},proxy:!0}])})],1)],1),e._v(" "),n("v-flex",{staticStyle:{"background-color":"blue"},attrs:{xs12:"",sm6:"",md4:""}},[e._v("C")])],1)],1)],1)},[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VContainer:v.a,VDataTable:f.a,VFlex:h.a,VLayout:x.a,VProgressLinear:_.a,VSelect:k.a,VTextField:w.a})}}]);