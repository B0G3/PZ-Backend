(self.webpackChunkpz_frontend=self.webpackChunkpz_frontend||[]).push([[6839],{33686:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var s=a(6610),r=a(5991),n=a(65255),i=a(53724),l=a(77608),o=a(99578),c=a(30507);var u=function(t){(0,n.Z)(u,t);var e,a,o=(e=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,s=(0,l.Z)(e);if(a){var r=(0,l.Z)(this).constructor;t=Reflect.construct(s,arguments,r)}else t=s.apply(this,arguments);return(0,i.Z)(this,t)});function u(){return(0,s.Z)(this,u),o.apply(this,arguments)}return(0,r.Z)(u,[{key:"baseURL",value:function(){return c.API_URL}},{key:"request",value:function(t){return this.$http.request(t)}}]),u}(o.H)},61540:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>d});var s=a(23645),r=a.n(s),n=a(61667),i=a.n(n),l=a(3566),o=a.n(l),c=r()((function(t){return t[1]})),u=i()(o());c.push([t.id,"\n.v-sheet--offset {\n\ttop: -24px;\n\tposition: relative;\n}\n.v-card__actions a {\n\ttext-decoration: none;\n\tmargin: 0 auto;\n}\n.welcome-card {\n\theight: 223px;\n\tbackground: -o-linear-gradient(303deg, #ab2ffb 15%, #660d96d1 50%), url("+u+"), white;\n\tbackground: linear-gradient(147deg, #ab2ffb 15%, #660d96d1 50%), url("+u+"), white;\n\tbackground-size: 100%;\n\tpadding: 14px;\n}\n.welcome-card .v-card__text {\n\theight: 223px;\n\tborder-bottom: none !important;\n}\n.welcome-card .title {\n\tmargin-top: 0px;\n\tcolor: white;\n\ttext-align: center;\n\tfont-size: 20px !important;\n}\n.welcome-card .description {\n\tmargin-top: 14px;\n\tcolor: white;\n\ttext-align: center;\n\tfont-size: 12px;\n}\n",""]);const d=c},3566:(t,e,a)=>{t.exports=a.p+"card-bg.png?bd4f8704adaacf24ae16d9f3e1419f19"},96839:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>C});var s=a(92137),r=a(87757),n=a.n(r),i=a(6610),l=a(5991),o=a(65255),c=a(53724),u=a(77608);var d=function(t){(0,o.Z)(r,t);var e,a,s=(e=r,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,s=(0,u.Z)(e);if(a){var r=(0,u.Z)(this).constructor;t=Reflect.construct(s,arguments,r)}else t=s.apply(this,arguments);return(0,c.Z)(this,t)});function r(){return(0,i.Z)(this,r),s.apply(this,arguments)}return(0,l.Z)(r,[{key:"resource",value:function(){return"home"}}]),r}(a(33686).Z);const v={ititle:"home.title",data:function(){return{numberOfTeachers:0,numberOfChildren:0,numberOfImages:0,newsData:[],loading:!1,userHeaders:[{text:this.$t("forms.fields.user.id"),align:"start",value:"id"},{text:this.$t("forms.fields.user.firstname"),value:"firstname"},{text:this.$t("forms.fields.user.surname"),value:"surname"},{text:this.$t("general.actions"),value:"actions",sortable:!1}],newsHeaders:[{text:this.$t("forms.fields.announcements.title"),align:"center",value:"title"}],delay:1e3,options:{useEasing:!0,useGrouping:!0,separator:",",decimal:".",prefix:"",suffix:""},usersData:[],labels:[],values:[0,0,0,0,0,0,0]}},computed:{firstname:function(){return this.$store.getters["auth/currentUser"].firstname}},mounted:function(){var t=this;this.$nextTick((function(){t.genLabels(),t.fetchHomeData()}))},methods:{fetchHomeData:function(){var t=arguments,e=this;return(0,s.Z)(n().mark((function a(){var s,r,i,l,o;return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:null,r=e,e.loading=!0,a.prev=3,s&&s(),a.next=7,d.get();case 7:if(i=a.sent,l=i[0])for(r.numberOfTeachers=l.teachers,r.numberOfChildren=l.children,r.numberOfImages=l.images,r.usersData=l.new_users,r.newsData=l.news,r.values=[],o=l.absence.length-1;o>=0;o--)r.values.push(l.absence[o].absent);a.next=15;break;case 12:a.prev=12,a.t0=a.catch(3),r.$toast.error(r.$t("data.error"),r.$t("notifications.error"));case 15:return a.prev=15,r.loading=!1,a.finish(15);case 18:case"end":return a.stop()}}),a,null,[[3,12,15,18]])})))()},genLabels:function(){for(var t=new Date,e=0;e<7;e++)this.labels.push(this.getWeekdayName(t)),t.setDate(t.getDate()-1);this.labels.reverse()},getWeekdayName:function(t){return["Niedz.","Pon.","Wtorek","Środa","Czwartek","Piątek","Sobota"][t.getDay()]}}};var f,m=a(93379),p=a.n(m),h=a(70342),g=a.n(h),x=0,_={injectType:"lazyStyleTag",insert:"head",singleton:!1},b={};b.locals=g().locals||{},b.use=function(){return x++||(f=p()(g(),_)),b},b.unuse=function(){x>0&&!--x&&(f(),f=null)};const C=(0,a(51900).Z)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PageBar"),t._v(" "),a("v-container",{attrs:{fluid:"",tag:"section"}},[a("v-row",[a("v-col",{staticClass:"mt-2",attrs:{cols:"12",lg:"4"}},[a("v-card",{staticClass:"vcard-2"},[a("v-layout",{staticClass:"card-image",attrs:{row:"",fluid:"","justify-center":""}},[a("v-flex",{staticClass:"up",attrs:{xs3:"","align-center":""}},[a("v-icon",{staticClass:"elevation-3 light-blue darken-3",attrs:{height:"80px",width:"80px"}},[t._v("fa-chalkboard-teacher")])],1),t._v(" "),a("v-flex",{staticClass:"up",attrs:{xs3:"","ml-4":""}},[a("v-card-title",{staticClass:"text-no-wrap text-truncate",attrs:{"align-right":""}},[a("div",[a("span",{staticClass:"grey--text text-xs-right"},[t._v(t._s(t.$t("general.teachers")))]),t._v(" "),a("div",{staticClass:"headline text-xs-right"},[a("VueCountUp",{attrs:{delay:t.delay,endVal:t.numberOfTeachers,options:t.options}})],1)])])],1)],1),t._v(" "),t.$can("read","Users")?[a("v-divider"),t._v(" "),a("v-card-actions",{attrs:{"text-xs-center":""}},[a("router-link",{attrs:{to:{name:"UsersList",params:{pageId:1}}}},[a("v-btn",{staticClass:"m0a v",attrs:{small:"",text:"",color:"primary"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("home.vUS"))+"\n\t\t\t\t\t\t\t\t")])],1)],1)]:t._e()],2)],1),t._v(" "),a("v-col",{staticClass:"mt-2",attrs:{cols:"12",lg:"4"}},[a("v-card",{staticClass:"vcard-2"},[a("v-layout",{staticClass:"card-image",attrs:{row:"",fluid:"","justify-center":""}},[a("v-flex",{staticClass:"up",attrs:{xs3:"","align-center":""}},[a("v-icon",{staticClass:"elevation-3 orange lighten-1",attrs:{height:"80px",width:"80px"}},[t._v("fa-child")])],1),t._v(" "),a("v-flex",{staticClass:"up",attrs:{xs3:"","ml-4":""}},[a("v-card-title",{staticClass:"text-no-wrap text-truncate",attrs:{"align-right":""}},[a("div",[a("span",{staticClass:"grey--text text-xs-right"},[t._v(t._s(t.$t("general.children")))]),t._v(" "),a("div",{staticClass:"headline text-xs-right"},[a("VueCountUp",{attrs:{delay:t.delay,endVal:t.numberOfChildren,options:t.options}})],1)])])],1)],1),t._v(" "),t.$can("read","Users")?[a("v-divider"),t._v(" "),a("v-card-actions",{attrs:{"text-xs-center":""}},[a("router-link",{attrs:{to:{name:"UsersList",params:{pageId:1}}}},[a("v-btn",{staticClass:"m0a",attrs:{small:"",text:"",color:"primary"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("home.vUS"))+"\n\t\t\t\t\t\t\t\t")])],1)],1)]:t._e()],2)],1),t._v(" "),a("v-col",{staticClass:"mt-2",attrs:{cols:"12",lg:"4"}},[a("v-card",{staticClass:"vcard-2"},[a("v-layout",{staticClass:"card-image",attrs:{row:"",fluid:"","justify-center":""}},[a("v-flex",{staticClass:"up",attrs:{xs3:"","align-center":""}},[a("v-icon",{staticClass:"elevation-3 light-green darken-1",attrs:{height:"80px",width:"80px"}},[t._v("fa-images")])],1),t._v(" "),a("v-flex",{staticClass:"up",attrs:{xs3:"","ml-4":""}},[a("v-card-title",{staticClass:"text-no-wrap text-truncate",attrs:{"align-right":""}},[a("div",[a("span",{staticClass:"grey--text text-xs-right"},[t._v(t._s(t.$t("general.images")))]),t._v(" "),a("div",{staticClass:"headline text-xs-right"},[a("VueCountUp",{attrs:{delay:t.delay,endVal:t.numberOfImages,options:t.options}})],1)])])],1)],1),t._v(" "),t.$can("read","Users")?[a("v-divider"),t._v(" "),a("v-card-actions",{attrs:{"text-xs-center":""}},[a("router-link",{attrs:{to:{name:"AlbumList",params:{pageId:1}}}},[a("v-btn",{staticClass:"m0a",attrs:{small:"",text:"",color:"primary"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("home.vIL"))+"\n\t\t\t\t\t\t\t\t")])],1)],1)]:t._e()],2)],1),t._v(" "),a("v-col",{staticClass:"mt-4",attrs:{cols:"12",lg:"6"}},[a("v-card",{staticClass:"mx-auto mt-6"},[a("v-sheet",{staticClass:"v-sheet--offset mx-auto",attrs:{color:"cyan",elevation:"12","max-width":"calc(100% - 32px)"}},[a("v-sparkline",{attrs:{labels:t.labels,value:t.values,color:"white","line-width":"2",padding:"16"}})],1),t._v(" "),a("v-card-text",{staticClass:"pt-0"},[a("div",{staticClass:"title font-weight-light mb-2 text-center"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("home.numberOfAbsences"))+"\n\t\t\t\t\t\t")])])],1)],1),t._v(" "),a("v-col",{staticClass:"mt-4",attrs:{cols:"12",lg:"6"}},[a("v-card",{staticClass:"mx-auto welcome-card"},[a("v-card-text",[a("div",{staticClass:"title"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("home.welcome.title"))+" "+t._s(t.firstname)+"!\n\t\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"description",domProps:{innerHTML:t._s(t.$t("home.welcome.description"))}})])],1)],1),t._v(" "),t.$can("read","Users")?a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-title",[a("v-icon",{staticClass:"mr-2"},[t._v("fa-users")]),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("users.list.title"))+"\n\t\t\t\t\t")],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[a("div",{staticClass:"text--primary"},[[a("v-data-table",{attrs:{headers:t.userHeaders,items:t.usersData,"disable-pagination":!0,"footer-props":{disablePagination:!0,disableItemsPerPage:!0},"hide-default-footer":!0,"loading-text":"",loading:t.loading},scopedSlots:t._u([{key:"item.actions",fn:function(e){var s=e.item;return[a("router-link",{attrs:{to:{name:"UsersGet",params:{userId:s.id}}}},[a("v-icon",{attrs:{small:"",disabled:t.loading}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tfas fa-search-plus\n\t\t\t\t\t\t\t\t\t\t\t")])],1)]}},{key:"no-data",fn:function(){return[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("data.noResults"))+"\n\t\t\t\t\t\t\t\t\t")]},proxy:!0}],null,!1,3153285501)},[[a("v-progress-linear",{staticClass:"ma-0",attrs:{slot:"progress",color:"blue",indeterminate:"",height:"4"},slot:"progress"})]],2)]],2)]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",{attrs:{"text-xs-center":""}},[a("router-link",{attrs:{to:{name:"UsersList",params:{pageId:1}}}},[a("v-btn",{staticClass:"m0a",attrs:{small:"",text:"",color:"primary"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("data.seeMore"))+"\n\t\t\t\t\t\t\t")])],1)],1)],1)],1):t._e(),t._v(" "),t.$can("read","Announcements")?a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-title",[a("v-icon",{staticClass:"mr-2"},[t._v("fa-comments")]),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("announcements.list.title"))+"\n\t\t\t\t\t")],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[a("div",{staticClass:"text--primary"},[[a("v-data-table",{attrs:{headers:t.newsHeaders,items:t.newsData,"disable-pagination":!0,"footer-props":{disablePagination:!0,disableItemsPerPage:!0},"hide-default-footer":!0,"loading-text":"",loading:t.loading},scopedSlots:t._u([{key:"no-data",fn:function(){return[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("data.noResults"))+"\n\t\t\t\t\t\t\t\t\t")]},proxy:!0}],null,!1,2008346064)},[[a("v-progress-linear",{staticClass:"ma-0",attrs:{slot:"progress",color:"blue",indeterminate:"",height:"4"},slot:"progress"})]],2)]],2)]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",{attrs:{"text-xs-center":""}},[a("router-link",{attrs:{to:{name:"Announcements",params:{pageId:1}}}},[a("v-btn",{staticClass:"m0a",attrs:{small:"",text:"",color:"primary"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("data.seeMore"))+"\n\t\t\t\t\t\t\t")])],1)],1)],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null).exports},70342:(t,e,a)=>{var s=a(61540);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,a(45346).Z)("62bb1073",s,!0,{})}}]);