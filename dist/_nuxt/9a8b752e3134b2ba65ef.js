(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{304:function(t,r,n){var content=n(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("08d4b84c",content,!0,{sourceMap:!1})},305:function(t,r,n){(t.exports=n(7)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},320:function(t,r,n){"use strict";n.r(r);var e={layout:"center"},o=n(16),l=n(29),c=n.n(l),d=n(106),v=n(103),h=n(261),f=n(92),_=n(95),m=(n(304),n(24)),V={name:"v-form",mixins:[Object(m.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,r=function(input){return input.$watch("hasError",function(r){t.$set(t.errorBag,input._uid,r)},{immediate:!0})},n={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",function(e){e&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=r(input)))}):n.valid=r(input),n},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var r=this.watchers.find(function(i){return i._uid===t._uid});r.valid&&r.valid(),r.shouldValidate&&r.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var r=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return r.$emit("submit",t)}}},this.$slots.default)}},w=n(104),y=n(96),x=n(256),B=n(257),$=n(105),j=n(258),k=n(259),component=Object(o.a)(e,function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("Login form")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var e=r.on;return[n("v-btn",t._g({attrs:{href:t.source,icon:"",large:"",target:"_blank"}},e),[n("v-icon",{attrs:{large:""}},[t._v("code")])],1)]}}])},[t._v(" "),n("span",[t._v("Source")])]),t._v(" "),n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(r){var e=r.on;return[n("v-btn",t._g({attrs:{icon:"",large:"",href:"https://codepen.io/johnjleider/pen/wyYVVj",target:"_blank"}},e),[n("v-icon",{attrs:{large:""}},[t._v("mdi-codepen")])],1)]}}])},[t._v(" "),n("span",[t._v("Codepen")])])],1),t._v(" "),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text"}}),t._v(" "),n("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"password",label:"Password",type:"password"}})],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary"}},[t._v("Login")])],1)],1)],1)],1)],1)},[],!1,null,null,null);r.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VContainer:f.a,VFlex:_.a,VForm:V,VIcon:w.a,VLayout:y.a,VSpacer:x.a,VTextField:B.a,VToolbar:$.a,VToolbarTitle:j.a,VTooltip:k.a})}}]);