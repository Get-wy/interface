(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6962901c"],{"28a5":function(e,t,n){"use strict";var r=n("aae3"),a=n("cb7c"),i=n("ebd6"),u=n("0390"),s=n("9def"),c=n("5f1b"),o=n("520a"),l=n("79e5"),f=Math.min,p=[].push,d="split",g="length",h="lastIndex",b=4294967295,m=!l((function(){RegExp(b,"y")}));n("214f")("split",2,(function(e,t,n,l){var v;return v="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[g]||2!="ab"[d](/(?:ab)*/)[g]||4!="."[d](/(.?)(.?)/)[g]||"."[d](/()()/)[g]>1||""[d](/.?/)[g]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(a,e,t);var i,u,s,c=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,d=void 0===t?b:t>>>0,m=new RegExp(e.source,l+"g");while(i=o.call(m,a)){if(u=m[h],u>f&&(c.push(a.slice(f,i.index)),i[g]>1&&i.index<a[g]&&p.apply(c,i.slice(1)),s=i[0][g],f=u,c[g]>=d))break;m[h]===i.index&&m[h]++}return f===a[g]?!s&&m.test("")||c.push(""):c.push(a.slice(f)),c[g]>d?c.slice(0,d):c}:"0"[d](void 0,0)[g]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):v.call(String(a),n,r)},function(e,t){var r=l(v,e,this,t,v!==n);if(r.done)return r.value;var o=a(e),p=String(this),d=i(o,RegExp),g=o.unicode,h=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(m?"y":"g"),w=new d(m?o:"^(?:"+o.source+")",h),x=void 0===t?b:t>>>0;if(0===x)return[];if(0===p.length)return null===c(w,p)?[p]:[];var S=0,y=0,k=[];while(y<p.length){w.lastIndex=m?y:0;var D,N=c(w,m?p:p.slice(y));if(null===N||(D=f(s(w.lastIndex+(m?0:y)),p.length))===S)y=u(p,y,g);else{if(k.push(p.slice(S,y)),k.length===x)return k;for(var _=1;_<=N.length-1;_++)if(k.push(N[_]),k.length===x)return k;y=S=D}}return k.push(p.slice(S)),k}]}))},"63d7":function(e,t,n){"use strict";var r=n("89c0"),a=n.n(r);a.a},"89c0":function(e,t,n){},b56e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"StaffBonusDetail-container"},[n("el-page-header",{attrs:{title:"返回",content:e.contentname},on:{back:e.goBack}}),e._v(" "),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","summary-method":e.getSummaries,"show-summary":""}},[n("el-table-column",{attrs:{type:"index",prop:"index",label:"序号",width:"80",align:"center",fixed:"left"}}),e._v(" "),n("el-table-column",{attrs:{prop:"projectName",label:"项目名称",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"projectNumder",label:"项目编号",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"designStage",label:"设计阶段",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"currentSeason",label:"季度",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"subspecialty",label:"专业",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"bonusCalc",label:"计算产值",align:"center"}})],1)],1)},a=[],i=(n("7f7f"),n("96cf"),n("3b8d")),u=(n("c5f6"),n("ac6a"),n("ed08")),s={name:"StaffBonusDetail",data:function(){return{contentname:"",project_NameOrNumber:"",designStageList:[],tableData:[]}},computed:{},methods:{goBack:function(){this.$router.push({path:"/bonus-dean-staff/StaffBonusList/:specialty"})},getSummaries:function(e){var t=e.columns,n=e.data,r=[];return t.forEach((function(e,t){if(t<6)r[t]=0===t?"合计":"";else{var a=n.map((function(t){return Number(t[e.property])}));a.every((function(e){return isNaN(e)}))?r[t]="":(r[t]=a.reduce((function(e,t){var n=Number(t);return isNaN(n)?e:e+t}),0),6===t&&(r[t]=r[t].toFixed(2)))}})),r},readSettings:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){t.$store.dispatch("settings/getSettings").then((function(n){t.designStageList=n.designPhase,e()})).catch((function(e){t.$message({message:e,type:"error"})}))})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getUserDetails:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){n.$store.dispatch("bonusdean/getuserbonusdetails",{userId:n.$route.params.id}).then((function(t){for(var r in n.tableData=t.tableData,n.tableData)n.tableData[r].designStage=Object(u["a"])(n.tableData[r].designStage,n.designStageList);e()})).catch((function(e){n.$message({message:e,type:"error"})}))})));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),init:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.contentname="员工 : "+this.$route.params.name,e.next=3,this.readSettings();case 3:return e.next=5,this.getUserDetails();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.init()}},c=s,o=c,l=(n("63d7"),n("2877")),f=Object(l["a"])(o,r,a,!1,null,"66f8105d",null);t["default"]=f.exports},ed08:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));n("28a5"),n("a481"),n("6b54"),n("7618");function r(e,t){for(var n in t)if(t[n].value==e)return t[n].label}function a(e,t){for(var n in t)if(t[n].label==e)return t[n].value}}}]);