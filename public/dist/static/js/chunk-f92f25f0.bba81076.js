(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f92f25f0"],{"094c":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"BonusSubspecialtyList-container"},[r("el-page-header",{staticStyle:{"margin-left":"30px","margin-bottom":"30px"},attrs:{title:"返回"},on:{back:t.goBack}}),t._v(" "),r("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"100px"}},[r("el-form-item",{staticClass:"short",attrs:{label:"项目编号"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.project_Number,callback:function(e){t.$set(t.form,"project_Number",e)},expression:"form.project_Number"}})],1),t._v(" "),r("el-form-item",{staticClass:"short",attrs:{label:"项目名称"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.project_Name,callback:function(e){t.$set(t.form,"project_Name",e)},expression:"form.project_Name"}})],1),t._v(" "),r("el-form-item",{staticClass:"short",attrs:{label:"项目类别"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.project_Category,callback:function(e){t.$set(t.form,"project_Category",e)},expression:"form.project_Category"}})],1),t._v(" "),r("el-form-item",{staticClass:"short",attrs:{label:"设计阶段"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.design_Stage,callback:function(e){t.$set(t.form,"design_Stage",e)},expression:"form.design_Stage"}})],1),t._v(" "),r("el-form-item",{staticClass:"short",attrs:{label:"当前季度"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.current_Season,callback:function(e){t.$set(t.form,"current_Season",e)},expression:"form.current_Season"}})],1),t._v(" "),r("el-form-item",{staticClass:"short",attrs:{label:"当前所"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.current_Specialty,callback:function(e){t.$set(t.form,"current_Specialty",e)},expression:"form.current_Specialty"}})],1),t._v(" "),r("el-form-item",{staticClass:"short",attrs:{label:"所季度产值"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.seasonBonus,callback:function(e){t.$set(t.form,"seasonBonus",e)},expression:"form.seasonBonus"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"产值分配"}},[r("el-table",{staticStyle:{"margin-top":"15px",width:"1000px"},attrs:{data:t.tableData,border:""}},[r("el-table-column",{attrs:{prop:"subspecialty",label:"专业",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"subspecialtyPrincipal",label:"专业负责人",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"subspecialtyBonusRatio",label:"产值比例",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"subspecialtyBonus",label:"专业季度产值",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"阶段状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("tag",{attrs:{open:"未录入"===e.row.button||"已录入"===e.row.button,type:"button",text:e.row.button},nativeOn:{click:function(r){return t.handleClickStatus(e.row)}}})]}}])})],1)],1)],1)],1)},n=[],s=(r("96cf"),r("3b8d")),i=r("ed08"),o=r("c28c"),l={name:"BonusSubspecialtyList",data:function(){return{subspecialtyVal:"",specialtyList:[],catagoryList:[],stageList:[],statusList:[],form:{},tableData:[]}},computed:{},components:{Tag:o["a"]},methods:{goBack:function(){this.$router.push({path:"/bonus-dean-project/ProjectList/:specialty"})},handleClickStatus:function(t){"未录入"!==t.button&&"已录入"!==t.button&&this.$router.push({path:"/bonus-dean-project/BonusSubspecialty/".concat(this.$route.params.projectid,"/").concat(this.$route.params.specialty,"/").concat(t.subspecialty)})},readSettings:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){e.$store.dispatch("settings/getSettings").then((function(r){e.specialtyList=r.placeList,e.catagoryList=r.projectCategory,e.stageList=r.designPhase,e.statusList=r.stageStatusDesignprinciple,t()}))})).catch((function(t){e.$message({message:t,type:"error"})})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getSubspecialtyList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){e.$store.dispatch("bonusdean/getSubspecialtyList",{projectId:e.$route.params.projectid,specialty:e.$route.params.specialty}).then((function(r){for(var a in e.form=r.form,e.form.current_Specialty=Object(i["a"])(e.$route.params.specialty,e.specialtyList),e.form.project_Category=Object(i["a"])(e.form.project_Category,e.catagoryList),e.form.design_Stage=Object(i["a"])(e.form.design_Stage,e.stageList),e.tableData=r.tableData,e.tableData)e.tableData[a].button=Object(i["a"])(e.tableData[a].button,e.statusList);t()})).catch((function(t){e.$message({message:t,type:"error"})}))})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),init:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.readSettings();case 2:return t.next=4,this.getSubspecialtyList();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.init()}},c=l,u=c,p=(r("41f7"),r("2877")),f=Object(p["a"])(u,a,n,!1,null,null,null);e["default"]=f.exports},"28a5":function(t,e,r){"use strict";var a=r("aae3"),n=r("cb7c"),s=r("ebd6"),i=r("0390"),o=r("9def"),l=r("5f1b"),c=r("520a"),u=r("79e5"),p=Math.min,f=[].push,m="split",b="length",d="lastIndex",g=4294967295,h=!u((function(){RegExp(g,"y")}));r("214f")("split",2,(function(t,e,r,u){var v;return v="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[b]||2!="ab"[m](/(?:ab)*/)[b]||4!="."[m](/(.?)(.?)/)[b]||"."[m](/()()/)[b]>1||""[m](/.?/)[b]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!a(t))return r.call(n,t,e);var s,i,o,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,m=void 0===e?g:e>>>0,h=new RegExp(t.source,u+"g");while(s=c.call(h,n)){if(i=h[d],i>p&&(l.push(n.slice(p,s.index)),s[b]>1&&s.index<n[b]&&f.apply(l,s.slice(1)),o=s[0][b],p=i,l[b]>=m))break;h[d]===s.index&&h[d]++}return p===n[b]?!o&&h.test("")||l.push(""):l.push(n.slice(p)),l[b]>m?l.slice(0,m):l}:"0"[m](void 0,0)[b]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,a){var n=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,n,a):v.call(String(n),r,a)},function(t,e){var a=u(v,t,this,e,v!==r);if(a.done)return a.value;var c=n(t),f=String(this),m=s(c,RegExp),b=c.unicode,d=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),y=new m(h?c:"^(?:"+c.source+")",d),_=void 0===e?g:e>>>0;if(0===_)return[];if(0===f.length)return null===l(y,f)?[f]:[];var x=0,S=0,w=[];while(S<f.length){y.lastIndex=h?S:0;var j,C=l(y,h?f:f.slice(S));if(null===C||(j=p(o(y.lastIndex+(h?0:S)),f.length))===x)S=i(f,S,b);else{if(w.push(f.slice(x,S)),w.length===_)return w;for(var k=1;k<=C.length-1;k++)if(w.push(C[k]),w.length===_)return w;S=x=j}}return w.push(f.slice(x)),w}]}))},"41f7":function(t,e,r){"use strict";var a=r("f8ed"),n=r.n(a);n.a},c28c:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tag"},["tag"===t.type?r("el-tag",{attrs:{type:t.selectColor}},[t._v(t._s(t.text))]):t._e(),t._v(" "),"button"===t.type?r("el-button",{attrs:{type:t.selectColor,plain:"",size:"small",disabled:t.open}},[t._v(t._s(t.text))]):t._e()],1)},n=[],s={name:"tag",props:{type:{type:String,default:function(){return"请输入类型"}},text:{type:String,default:function(){return"请输入文字"}},open:{type:Boolean,default:function(){return!1}}},computed:{selectColor:function(){switch(this.text){case"未录入":return"danger";case"已录入":return"warning";case"已提交":return"success";case"已修改":return"primary";case"已发放":return"info";default:return"info"}}},data:function(){return{}},mounted:function(){}},i=s,o=r("2877"),l=Object(o["a"])(i,a,n,!1,null,null,null);e["a"]=l.exports},ed08:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));r("28a5"),r("a481"),r("6b54"),r("7618");function a(t,e){for(var r in e)if(e[r].value==t)return e[r].label}function n(t,e){for(var r in e)if(e[r].label==t)return e[r].value}},f8ed:function(t,e,r){}}]);