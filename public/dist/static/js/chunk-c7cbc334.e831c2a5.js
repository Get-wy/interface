(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7cbc334"],{"28a5":function(e,t,a){"use strict";var n=a("aae3"),s=a("cb7c"),r=a("ebd6"),i=a("0390"),o=a("9def"),l=a("5f1b"),u=a("520a"),c=a("79e5"),d=Math.min,f=[].push,m="split",p="length",v="lastIndex",g=4294967295,h=!c((function(){RegExp(g,"y")}));a("214f")("split",2,(function(e,t,a,c){var b;return b="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!n(e))return a.call(s,e,t);var r,i,o,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=void 0===t?g:t>>>0,h=new RegExp(e.source,c+"g");while(r=u.call(h,s)){if(i=h[v],i>d&&(l.push(s.slice(d,r.index)),r[p]>1&&r.index<s[p]&&f.apply(l,r.slice(1)),o=r[0][p],d=i,l[p]>=m))break;h[v]===r.index&&h[v]++}return d===s[p]?!o&&h.test("")||l.push(""):l.push(s.slice(d)),l[p]>m?l.slice(0,m):l}:"0"[m](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,n){var s=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,s,n):b.call(String(s),a,n)},function(e,t){var n=c(b,e,this,t,b!==a);if(n.done)return n.value;var u=s(e),f=String(this),m=r(u,RegExp),p=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),_=new m(h?u:"^(?:"+u.source+")",v),y=void 0===t?g:t>>>0;if(0===y)return[];if(0===f.length)return null===l(_,f)?[f]:[];var k=0,w=0,x=[];while(w<f.length){_.lastIndex=h?w:0;var T,$=l(_,h?f:f.slice(w));if(null===$||(T=d(o(_.lastIndex+(h?0:w)),f.length))===k)w=i(f,w,p);else{if(x.push(f.slice(k,w)),x.length===y)return x;for(var O=1;O<=$.length-1;O++)if(x.push($[O]),x.length===y)return x;w=k=T}}return x.push(f.slice(k)),x}]}))},"873f":function(e,t,a){},de7e:function(e,t,a){"use strict";var n=a("873f"),s=a.n(n);s.a},ff07:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"production-update"},[a("el-page-header",{staticClass:"text",attrs:{title:"返回",content:""},on:{back:e.goBack}}),e._v(" "),a("el-form",{ref:"form",staticClass:"from",attrs:{model:e.form,"label-width":"140px"}},[a("el-form-item",{staticStyle:{width:"700px"},attrs:{label:"当前季度"}},[a("el-date-picker",{staticClass:"value-time",staticStyle:{width:"147px"},attrs:{disabled:!e.form.forbidden,prop:"season_year",align:"right",type:"year",placeholder:"选择年","value-format":"yyyy"},model:{value:e.form.season_year,callback:function(t){e.$set(e.form,"season_year",t)},expression:"form.season_year"}}),e._v(" "),a("span",[e._v("     年     ")]),e._v(" "),a("el-select",{staticStyle:{width:"150px"},attrs:{disabled:!e.form.forbidden,prop:"season_season",placeholder:"请选择季度"},model:{value:e.form.season_season,callback:function(t){e.$set(e.form,"season_season",t)},expression:"form.season_season"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{staticClass:"block",attrs:{label:"当前季度周期"}},[a("el-date-picker",{staticClass:"value-time",attrs:{disabled:!e.form.forbidden,prop:"valueTime",type:"daterange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.form.valueTime,callback:function(t){e.$set(e.form,"valueTime",t)},expression:"form.valueTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"系统开放时间"}},[a("el-date-picker",{staticClass:"value-time",attrs:{prop:"valueOpenTime",type:"daterange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.form.valueOpenTime,callback:function(t){e.$set(e.form,"valueOpenTime",t)},expression:"form.valueOpenTime"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("确认")])],1)],1)],1)},s=[],r=(a("28a5"),{name:"production-update",data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},form:{season_year:"",season_season:"",valueTime:"",valueOpenTime:""},rules:{season_year:[{required:!0,message:"请选择年份",trigger:"change"}],season_season:[{required:!0,message:"请选择季度",trigger:"change"}],valueTime:[{type:"date",required:!0,message:"请选择产值季度时间",trigger:"change"}],valueOpenTime:[{type:"date",required:!0,message:"请选择季度开放时间",trigger:"change"}]},options:[{value:"第一季度",label:"第一季度"},{value:"第二季度",label:"第二季度"},{value:"第三季度",label:"第三季度"},{value:"第四季度",label:"第四季度"}],value:""}},methods:{goBack:function(){this.$router.push({path:"/production-setting/setting"})},bonustatustrans:function(e){switch(e){case 0:return"未发放";case 1:return"已发放";default:return"未知"}},loginstatustrans:function(e){switch(e){case 0:return"已关闭";case 1:return"已开放";default:return"未知"}},onSubmit:function(e){var t=this;console.log(this.form),this.$refs[e].validate((function(e){if(!e)return console.log("error submit !!"),!1;var a={seasonsName:t.form.season_year+"年"+t.form.season_season,seasonDate:t.form.valueTime,loginDate:t.form.valueOpenTime,id:t.$route.params.id};t.$store.dispatch("production/updateSeasoninfo",a).then((function(){t.$message({message:"修改季度信息成功",type:"success"}),t.$router.push({path:"/production-setting/setting"})})).catch((function(e){console.log("error",e),t.$message({message:e,type:"warning"})}))}))}},mounted:function(){var e=this;this.$store.dispatch("production/getseasoninfo").then((function(t){var a=t.data.season_start_date+","+t.data.season_end_date,n=t.data.login_start_date+","+t.data.login_end_date;e.form.name=t.data.season_name,e.form.valueTime=a.split(","),e.form.valueOpenTime=n.split(","),e.form.value=t.data.season_distribute_bonus,e.form.valueStatus=e.bonustatustrans(t.data.bonus_distribute_status),e.form.valueOpenStatus=e.loginstatustrans(t.data.login_open_status),e.form.forbidden=t.data.forbidden,e.form.id=t.data.id,e.form.season_year=t.data.season_name.slice(0,4),e.form.season_season=t.data.season_name.slice(5,9),e.form.forbidden=t.data.forbidden})).catch((function(){}))}}),i=r,o=i,l=(a("de7e"),a("2877")),u=Object(l["a"])(o,n,s,!1,null,"21333b68",null);t["default"]=u.exports}}]);