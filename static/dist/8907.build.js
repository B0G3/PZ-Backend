(self.webpackChunkpz_frontend=self.webpackChunkpz_frontend||[]).push([[8907],{33686:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var r=s(6610),n=s(5991),a=s(65255),l=s(53724),i=s(77608),o=s(99578),u=s(30507);var c=function(t){(0,a.Z)(c,t);var e,s,o=(e=c,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,i.Z)(e);if(s){var n=(0,i.Z)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return(0,l.Z)(this,t)});function c(){return(0,r.Z)(this,c),o.apply(this,arguments)}return(0,n.Z)(c,[{key:"baseURL",value:function(){return u.API_URL}},{key:"request",value:function(t){return this.$http.request(t)}}]),c}(o.H)},47300:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var r=s(6610),n=s(5991),a=s(65255),l=s(53724),i=s(77608);var o=function(t){(0,a.Z)(u,t);var e,s,o=(e=u,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,i.Z)(e);if(s){var n=(0,i.Z)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return(0,l.Z)(this,t)});function u(){return(0,r.Z)(this,u),o.apply(this,arguments)}return(0,n.Z)(u,[{key:"resource",value:function(){return"user"}}]),u}(s(33686).Z)},39527:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});var r=s(23645),n=s.n(r)()((function(t){return t[1]}));n.push([t.id,"\na[data-v-5b2b019b] {\n\tcolor: #212121;\n\ttext-decoration: none;\n}\n",""]);const a=n},54726:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const r={name:"UiInputTextValidation",props:{rules:{type:String,default:""},value:{type:null},disabled:{type:Boolean,default:!1},type:{type:String,default:"text",validator:function(t){return-1!==["url","text","password","email","search"].indexOf(t)}}},data:function(){return{inputValue:""}},computed:{lowerCaseLabel:function(){return this.$attrs.label?this.$attrs.label.toLowerCase().trim():""},vPName:function(){return this.$attrs.vPName?this.$attrs.vPName:this.lowerCaseLabel}},watch:{inputValue:function(t){this.$emit("input",t)},value:function(t){this.inputValue=t}},created:function(){this.value&&(this.inputValue=this.value)}},n=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ValidationProvider",{attrs:{name:t.vPName,rules:t.rules},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[s("v-text-field",{attrs:{label:t.$attrs.label,"error-messages":r,disabled:t.disabled,type:t.type},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})]}}])})}),[],!1,null,null,null).exports},22935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const r={name:"UiSelectValidation",props:{rules:{type:String,default:""},items:{type:Array,default:""},value:{type:null},disabled:{type:Boolean,default:!1}},data:function(){return{selectValue:0}},computed:{lowerCaseLabel:function(){return this.$attrs.label?this.$attrs.label.toLowerCase().trim():""}},watch:{selectValue:function(t){this.$emit("input",t)},value:function(t){if("number"==typeof t){var e=this.getItem(t);if(e)return void(this.selectValue={id:e.id,name:e.name})}this.selectValue=t}},methods:{getItem:function(t){return this.items.find((function(e){return e.id===t}))}},created:function(){if("number"==typeof this.value){var t=this.getItem(this.value);if(t)return void(this.selectValue={id:t.id,name:t.name})}else this.value&&(this.selectValue=this.value)}},n=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ValidationProvider",{attrs:{name:t.lowerCaseLabel},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[s("v-select",{attrs:{hint:t.selectValue.name+", "+t.selectValue.id,items:t.items,"item-text":"name","item-value":"id",label:t.$attrs.label,"error-messages":r,disabled:t.disabled,"persistent-hint":"","return-object":""},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}})]}}])})}),[],!1,null,null,null).exports},38907:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>y});var r=s(92137),n=s(87757),a=s.n(n),l=s(54726),i=s(22935),o=s(47300);const u={ititle:"profile.title",components:{UiInputTextValidation:l.Z,UiSelectValidation:i.Z},data:function(){return{user:{email:"",password:"",firstname:"",surname:"",sex:{id:0,name:"Kobieta"},active:{id:1,name:"Aktywny"},roles:[{id:0,name:""}],groups:[]},userId:-1,loading:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.userId=t.$route.params.userId,t.fetchUser()}))},computed:{noData:function(){return 0===this.user.groups.length&&!this.loading},createdAt:function(){return this.formatDate(this.user.created_at)},updatedAt:function(){return this.formatDate(this.user.updated_at)}},methods:{fetchUser:function(){var t=this;return(0,r.Z)(a().mark((function e(){var s,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t,t.loading=!0,e.prev=2,e.next=5,o.Z.custom("/user/".concat(s.userId)).get();case 5:(r=e.sent)[0]&&(s.user=r[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),s.$toast.error(s.$t("users.get.error"),s.$t("notifications.error"));case 12:return e.prev=12,s.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))()}}};var c,v=s(93379),f=s.n(v),d=s(10361),p=s.n(d),m=0,_={injectType:"lazyStyleTag",insert:"head",singleton:!1},h={};h.locals=p().locals||{},h.use=function(){return m++||(c=f()(p(),_)),h},h.unuse=function(){m>0&&!--m&&(c(),c=null)};const y=(0,s(51900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("PageBar"),t._v(" "),s("v-container",{attrs:{fluid:"",tag:"section"}},[s("v-row",[s("v-col",{attrs:{cols:"12",lg:"6"}},[s("v-card",{staticClass:"mx-auto"},[s("v-card-text",[s("p",{staticClass:"text--primary"},[s("v-icon",{staticClass:"mr-4",attrs:{color:"primary"}},[t._v("fa-user")]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("profile.basicInfo"))+"\n\t\t\t\t\t\t")],1)]),t._v(" "),s("v-card-text",[s("div",{staticClass:"text--primary"},[[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.id"))+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.user.id)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.firstname"))+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.user.firstname)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.surname"))+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.user.surname)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.email"))+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.user.email)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("general.status"))+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t.user.active?[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("general.active"))+"\n\t\t\t\t\t\t\t\t\t\t\t")]:[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("general.inactive"))+"\n\t\t\t\t\t\t\t\t\t\t\t")]],2),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.sex"))+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[0==t.user.sex?[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.female"))+"\n\t\t\t\t\t\t\t\t\t\t\t")]:[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.male"))+"\n\t\t\t\t\t\t\t\t\t\t\t")]],2),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.roles"))+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t.user.roles[0]?["Admin"===t.user.roles[0].title?[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.rolesList.admin"))+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]:"Teacher"===t.user.roles[0].title?[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.rolesList.teacher"))+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]:"Child"===t.user.roles[0].title?[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.rolesList.child"))+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]:t._e()]:[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("general.none"))+"\n\t\t\t\t\t\t\t\t\t\t\t")]],2),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.general.createdAt"))+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.createdAt)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.general.updatedAt"))+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.updatedAt)+"\n\t\t\t\t\t\t\t\t\t\t")])],1)],1)]],2)])],1)],1),t._v(" "),s("v-col",{attrs:{cols:"12",lg:"6"}},[s("v-card",{staticClass:"mx-auto"},[s("v-card-text",[s("p",{staticClass:"text--primary"},[s("v-icon",{staticClass:"mr-4",attrs:{color:"primary"}},[t._v("fa-book-reader")]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("groups.list.title"))+"\n\t\t\t\t\t\t")],1)]),t._v(" "),s("v-card-text",[s("div",{staticClass:"text--primary"},[t.noData?[s("v-col",{attrs:{cols:"12"}},[s("v-alert",{staticClass:"text-center",attrs:{color:"blue",dark:"",transition:"scale-transition"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("users.get.noData"))+"\n\t\t\t\t\t\t\t\t\t")])],1)]:[s("v-list",{attrs:{flat:""}},[s("v-list-item-group",[t._l(t.user.groups,(function(e,r){return[s("v-list-item",{key:"group-"+r},[s("v-list-item-content",[s("v-list-item-title",[s("router-link",{attrs:{to:{name:"GroupUsers",params:{groupId:e.id,pageId:1}}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1)]}))],2)],1)]],2)])],1)],1)],1)],1)],1)}),[],!1,null,"5b2b019b",null).exports},10361:(t,e,s)=>{var r=s(39527);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals),(0,s(45346).Z)("ecde51fc",r,!0,{})}}]);