(self.webpackChunkpz_frontend=self.webpackChunkpz_frontend||[]).push([[6432],{33686:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var a=n(6610),r=n(5991),c=n(65255),s=n(53724),i=n(77608),o=n(99578),d=n(30507);var l=function(t){(0,c.Z)(l,t);var e,n,o=(e=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=(0,i.Z)(e);if(n){var r=(0,i.Z)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return(0,s.Z)(this,t)});function l(){return(0,a.Z)(this,l),o.apply(this,arguments)}return(0,r.Z)(l,[{key:"baseURL",value:function(){return d.API_URL}},{key:"request",value:function(t){return this.$http.request(t)}}]),l}(o.H)},47300:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var a=n(6610),r=n(5991),c=n(65255),s=n(53724),i=n(77608);var o=function(t){(0,c.Z)(d,t);var e,n,o=(e=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=(0,i.Z)(e);if(n){var r=(0,i.Z)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return(0,s.Z)(this,t)});function d(){return(0,a.Z)(this,d),o.apply(this,arguments)}return(0,r.Z)(d,[{key:"resource",value:function(){return"user"}}]),d}(n(33686).Z)},22848:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>c});var a=n(23645),r=n.n(a)()((function(t){return t[1]}));r.push([t.id,"\n.generalBtn[data-v-70ba4e12] {\n\tmargin-left: 5px;\n}\n.deleteBtn[data-v-70ba4e12] {\n\tmargin-left: 90%;\n\tmargin-top: 5px;\n\tmargin-bottom: 5px;\n}\n.areaTitle[data-v-70ba4e12] {\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tpadding-left: 10px;\n\tmargin-bottom: 10px;\n\twidth: 50%;\n}\n.pickerPosition[data-v-70ba4e12] {\n\tmargin: 0 auto;\n\twidth: 100%;\n\tmargin-bottom: 10px;\n\tborder-radius: 10px;\n\tborder-color: #512377;\n}\n",""]);const c=r},16432:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>b});var a=n(92137),r=n(87757),c=n.n(r),s=n(6610),i=n(5991),o=n(65255),d=n(53724),l=n(77608);var u=function(t){(0,o.Z)(r,t);var e,n,a=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=(0,l.Z)(e);if(n){var r=(0,l.Z)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return(0,d.Z)(this,t)});function r(){return(0,s.Z)(this,r),a.apply(this,arguments)}return(0,i.Z)(r,[{key:"resource",value:function(){return"attendance"}}]),r}(n(33686).Z),f=n(47300);const v={data:function(){return{dialogDate:!1,dialogAdd:!1,picker:null,pickerAdd:null,pickedDate:null,pickedAddDate:null,pickedId:null,dataUser:[],dataAttendance:[],dataFull:[],loading:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.getNamesOnlyMe()}))},methods:{clearData:function(){var t=this;return(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(;t.dataFull.length>0;)t.dataFull.pop();case 1:case"end":return e.stop()}}),e)})))()},addAttendanceData:function(){var t=arguments,e=this;return(0,a.Z)(c().mark((function n(){var a,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.length>0&&void 0!==t[0]&&t[0],a=e,e.loading=!0,n.prev=3,r=new u({date:a.pickedAddDate,present:0}),n.next=7,r.save();case 7:a.$toast.success(a.$t("attendance.add.success"),a.$t("notifications.success")),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),a.$toast.error(a.$t("attendance.add.error"),a.$t("notifications.error"));case 13:return n.prev=13,a.loading=!1,n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[3,10,13,16]])})))()},deleteAttendanceData:function(t){var e=arguments,n=this;return(0,a.Z)(c().mark((function a(){var r,s;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.length>1&&void 0!==e[1]&&e[1],r=n,n.loading=!0,a.prev=3,s=new u({id:t}),a.next=7,s.delete();case 7:r.$toast.success(r.$t("attendance.delete.success"),r.$t("notifications.success")),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),r.$toast.error(r.$t("attendance.delete.error"),r.$t("notifications.error"));case 13:return a.prev=13,r.loading=!1,a.finish(13);case 16:case"end":return a.stop()}}),a,null,[[3,10,13,16]])})))()},fetchUser:function(){var t=arguments,e=this;return(0,a.Z)(c().mark((function n(){var a,r,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:null,r=e,e.loading=!0,n.prev=3,n.next=6,f.Z.find(r.pickedId);case 6:s=n.sent,r.dataUser=s,a&&a(),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),r.$toast.error(r.$t("users.get.error"),r.$t("notifications.error"));case 14:return n.prev=14,r.loading=!1,n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[3,11,14,17]])})))()},fetchAttendance:function(){var t=arguments,e=this;return(0,a.Z)(c().mark((function n(){var a,r,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:null,r=e,e.loading=!0,n.prev=3,n.next=6,u.params({date:r.pickedDate}).get();case 6:s=n.sent,r.dataAttendance=s,a&&a(),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),r.$toast.error(r.$t("attendance.get.error"),r.$t("notifications.error"));case 14:return n.prev=14,r.loading=!1,n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[3,11,14,17]])})))()},fetchAttendanceOnlyMe:function(){var t=arguments,e=this;return(0,a.Z)(c().mark((function n(){var a,r,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:null,r=e,e.loading=!0,n.prev=3,n.next=6,u.params({only_me:!0}).get();case 6:s=n.sent,r.dataAttendance=s,a&&a(),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),r.$toast.error(r.$t("attendance.get.error"),r.$t("notifications.error"));case 14:return n.prev=14,r.loading=!1,n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[3,11,14,17]])})))()},getNames:function(){var t=this;return(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$can("read_all","Attendance")){e.next=14;break}return e.next=3,t.fetchAttendance();case 3:return e.next=5,t.clearData();case 5:n=0;case 6:if(!(n<t.dataAttendance.length)){e.next=14;break}return t.pickedId=t.dataAttendance[n].user_id,e.next=10,t.fetchUser();case 10:t.dataFull.push({fullname:t.dataUser.firstname+" "+t.dataUser.surname,attendance_id:t.dataAttendance[n].id});case 11:n++,e.next=6;break;case 14:case"end":return e.stop()}}),e)})))()},getNamesOnlyMe:function(){var t=this;return(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$can("read_me","Attendance")){e.next=14;break}return e.next=3,t.fetchAttendanceOnlyMe();case 3:return e.next=5,t.clearData();case 5:n=0;case 6:if(!(n<t.dataAttendance.length)){e.next=14;break}return t.pickedId=t.dataAttendance[n].user_id,e.next=10,t.fetchUser();case 10:t.dataFull.push({attendance_id:t.dataAttendance[n].id,date:t.dataAttendance[n].date});case 11:n++,e.next=6;break;case 14:case"end":return e.stop()}}),e)})))()},setDate:function(){this.dialogDate=!1,this.pickedDate=this.picker,this.getNames()},attendanceAdd:function(){var t=this;return(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialogAdd=!1,t.pickedAddDate=t.pickerAdd,e.next=4,t.addAttendanceData();case 4:return e.next=6,t.getNamesOnlyMe();case 6:case"end":return e.stop()}}),e)})))()},attendanceDelete:function(t){var e=this;return(0,a.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.deleteAttendanceData(t);case 2:return n.next=4,e.getNamesOnlyMe();case 4:return n.next=6,e.getNames();case 6:case"end":return n.stop()}}),n)})))()}}};var p,h=n(93379),_=n.n(h),k=n(59745),g=n.n(k),x=0,m={injectType:"lazyStyleTag",insert:"head",singleton:!1},y={};y.locals=g().locals||{},y.use=function(){return x++||(p=_()(g(),m)),y},y.unuse=function(){x>0&&!--x&&(p(),p=null)};const b=(0,n(51900).Z)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PageBar"),t._v(" "),n("v-container",{attrs:{fluid:"",tag:"section"}},[n("v-row",{staticClass:"fill-height"},[n("v-col",{attrs:{dark:""}},[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-title",[t._v(" "+t._s(t.$t("attendance.pickedDate"))+": "+t._s(t.pickedDate))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[t.$can("read_all","Attendance")?n("v-btn",t._g(t._b({staticClass:"generalBtn",attrs:{raised:"",color:"white",rounded:"",outlined:"",loading:t.loading}},"v-btn",r,!1),a),[t._v(" "+t._s(t.$t("attendance.pickDate"))+" ")]):t._e()]}}]),model:{value:t.dialogDate,callback:function(e){t.dialogDate=e},expression:"dialogDate"}},[t._v(" "),n("v-card",[n("v-sheet",{staticClass:"areaTitle white--text",attrs:{color:"primary",shaped:"",elevation:"3"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("attendance.pickDate"))+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("v-date-picker",{staticClass:"pickerPosition",attrs:{color:"primary",locale:"pl",elevation:"0","no-title":"","full-width":""},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}}),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{color:"primary",dark:"",outlined:""},on:{click:t.setDate}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("buttons.actions.accept"))+"\n\t\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[t.$can("save_me","Attendance")?n("v-btn",t._g(t._b({staticClass:"generalBtn",attrs:{raised:"",color:"white",rounded:"",outlined:"",loading:t.loading}},"v-btn",r,!1),a),[t._v(" "+t._s(t.$t("attendance.addAbsent")))]):t._e()]}}]),model:{value:t.dialogAdd,callback:function(e){t.dialogAdd=e},expression:"dialogAdd"}},[t._v(" "),n("v-card",[n("v-sheet",{staticClass:"areaTitle white--text",attrs:{color:"primary",shaped:"",elevation:"3"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("attendance.pickDate"))+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("v-date-picker",{staticClass:"pickerPosition",attrs:{color:"primary",locale:"pl",elevation:"0","no-title":"","full-width":""},model:{value:t.pickerAdd,callback:function(e){t.pickerAdd=e},expression:"pickerAdd"}}),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{color:"primary",dark:"",outlined:"",loading:t.loading},on:{click:t.attendanceAdd}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("buttons.actions.accept"))+"\n\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1),t._v(" "),n("v-sheet",{attrs:{height:"600"}},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[t.$can("read_all","Attendance")?n("th",{staticClass:"text-left"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("forms.fields.user.fullName"))+"\n\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),t.$can("read_me","Attendance")?n("th",{staticClass:"text-left"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("attendance.date"))+"\n\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("th",{staticClass:"text-right"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("attendance.deleteAbsent"))+"\n\t\t\t\t\t\t\t\t\t")])],1)]),t._v(" "),n("tbody",t._l(t.dataFull,(function(e){return n("tr",{key:e.id},[t.$can("read_all","Attendance")?n("td",[t._v(t._s(e.fullname))]):t._e(),t._v(" "),t.$can("read_me","Attendance")?n("td",[t._v(t._s(e.date))]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("td",[t.$can("delete","Attendance")?n("v-btn",{staticClass:"deleteBtn",attrs:{small:"",icon:"",loading:t.loading},on:{click:function(n){return t.attendanceDelete(e.attendance_id)}}},[n("v-icon",{attrs:{dark:""}},[t._v("fa-ban")])],1):t._e()],1)],1)})),0)]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,"70ba4e12",null).exports},59745:(t,e,n)=>{var a=n(22848);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,n(45346).Z)("3f0fa5fc",a,!0,{})}}]);