(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0da7edf6"],{1102:function(t,e,a){"use strict";var s=a("d66d"),n=a.n(s);n.a},"3edc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"BonusSubspecialty-container"},[a("el-page-header",{staticStyle:{"margin-left":"30px","margin-bottom":"30px"},attrs:{title:"返回"},on:{back:t.goBack}}),t._v(" "),a("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"阶段状态"}},[a("tag",{attrs:{type:"tag",text:t.form.subspecialty_status}},[t._v("\n          "+t._s(t.form.subspecialty_status)+"\n      ")])],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"项目编号"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.project_id,callback:function(e){t.$set(t.form,"project_id",e)},expression:"form.project_id"}})],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"项目名称"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.project_name,callback:function(e){t.$set(t.form,"project_name",e)},expression:"form.project_name"}})],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"项目类别"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:""},model:{value:t.form.project_type,callback:function(e){t.$set(t.form,"project_type",e)},expression:"form.project_type"}},t._l(t.projectTypeList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"设计负责人"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.design_director,callback:function(e){t.$set(t.form,"design_director",e)},expression:"form.design_director"}})],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"设计阶段"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:""},model:{value:t.form.project_phase,callback:function(e){t.$set(t.form,"project_phase",e)},expression:"form.project_phase"}},t._l(t.projectPhaseList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"当前季度"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.season_name,callback:function(e){t.$set(t.form,"season_name",e)},expression:"form.season_name"}})],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"当前所"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:""},model:{value:t.form.specialty,callback:function(e){t.$set(t.form,"specialty",e)},expression:"form.specialty"}},t._l(t.specialtyList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"当前专业"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:""},model:{value:t.form.subspecialty,callback:function(e){t.$set(t.form,"subspecialty",e)},expression:"form.subspecialty"}})],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"专业季度产值"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.subspecialty_sum_bonus,callback:function(e){t.$set(t.form,"subspecialty_sum_bonus",e)},expression:"form.subspecialty_sum_bonus"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"产值分配"}},[a("el-button",{attrs:{size:"small",type:"success",plain:""},on:{click:function(e){return t.handleAdd()}}},[t._v("\n        新增\n      ")]),t._v(" "),a("el-table",{staticStyle:{width:"750px"},attrs:{"summary-method":t.getSummaries,data:t.tableData,"show-summary":"",border:""}},[a("el-table-column",{attrs:{label:"序号",prop:"index",type:"index",width:"80px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"staff",label:"设计人员",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{on:{change:function(e){return t.changeTableUserListEnabledStatus()}},model:{value:e.row.staff,callback:function(a){t.$set(e.row,"staff",a)},expression:"scope.row.staff"}},t._l(t.selectList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})),1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"ratio",label:"季度产值比例",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"Input",on:{input:function(e){return t.change(e)},blur:function(a){return t.calcuBonus(e.$index,e.row)}},model:{value:e.row.bonusInput,callback:function(a){t.$set(e.row,"bonusInput",a)},expression:"scope.row.bonusInput"}},[a("i",{staticClass:"icon iconfont icon-baifenbi",staticStyle:{"line-height":"40px"},attrs:{slot:"suffix"},slot:"suffix"})])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusStaffSeason",label:"季度产值",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(a){return t.handleDel(e.$index,t.tableData)}}},[t._v("\n              删除\n            ")])]}}])})],1),t._v(" "),a("el-link",{directives:[{name:"show",rawName:"v-show",value:t.sumRatio<100,expression:"sumRatio < 100"}],attrs:{underline:!1,type:"warning"}},[t._v("产值比例未完全分配")]),t._v(" "),a("el-link",{directives:[{name:"show",rawName:"v-show",value:t.sumRatio>100,expression:"sumRatio > 100"}],attrs:{underline:!1,type:"warning"}},[t._v("产值比例分配超标")])],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",disabled:!t.isInputLegal||1===t.user.institute||100!=t.sumRatio||"已提交"!==t.form.subspecialty_status&&"已修改"!==t.form.subspecialty_status},on:{click:function(e){return t.onSubmit()}}},[t._v("\n        确定\n      ")]),t._v(" "),a("el-button",{staticClass:"filter-item",on:{click:function(e){return t.goBack()}}},[t._v("\n        取消\n      ")])],1)],1)],1)},n=[],r=(a("7f7f"),a("96cf"),a("3b8d")),i=(a("c5f6"),a("ac6a"),a("75fc")),o=(a("3022"),a("ed08")),u=a("a78e"),l=a.n(u),c=a("c28c"),p={name:"BonusSubspecialty",data:function(){return{user:JSON.parse(l.a.get("userInfo")),checked:!1,projectTypeList:[],projectPhaseList:[],specialtyList:[],statusList:[],selectList:[],form:{},tableData:[],sumRatio:0,isInputLegal:!0}},computed:{},components:{Tag:c["a"]},methods:{change:function(t){this.$forceUpdate()},validate:function(){for(var t in this.isInputLegal=!0,this.tableData)if(void 0==this.tableData[t].staff||""===this.tableData[t].staff)return void(this.isInputLegal=!1)},handleAdd:function(){this.tableData=[{staff:"",bonusInput:"",bonusStaffSeason:""}].concat(Object(i["a"])(this.tableData)),this.tableData.reverse().reverse(),this.validate()},handleDel:function(t,e){this.changeTableUserListEnabledStatus(),e.splice(t,1),this.tableData.reverse().reverse(),this.validate()},changeTableUserListEnabledStatus:function(){var t=[];for(var e in this.tableData)t.push(this.tableData[e].staff);for(var a in this.selectList)t.lastIndexOf(this.selectList[a].value)>-1?this.selectList[a].disabled=!0:this.selectList[a].disabled=!1;this.validate()},getSummaries:function(t){var e=this,a=t.columns,s=t.data,n=[];return a.forEach((function(t,a){if(a<2)n[a]=0===a?"合计":"";else{var r=s.map((function(e){return Number(e[t.property])}));r.every((function(t){return isNaN(t)}))?n[a]="":(n[a]=r.reduce((function(t,e){var a=Number(e);return isNaN(a)?t:t+e}),0),a>1&&a<4&&(n[a]=n[a].toFixed(0))),2==a&&(e.sumRatio=n[a],n[a]+="%")}})),n},goBack:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$router.push({path:"/bonus-principal-project/BonusSubspecialtyList/".concat(this.$route.params.id)});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getUserBonusArray:function(){this.usersBonusArray=this.tableData.map((function(t){return{userId:t.staff,staffBonusRatio:t.bonusInput/100,staffBonus:t.bonusStaffSeason}}))},onSubmit:function(){var t=this;this.getUserBonusArray(),this.$store.dispatch("productionSubspecialtyPrincipal/addbonus",{projectId:this.form.project_id,subspecialty:this.form.subspecialty,sumBonus:this.form.subspecialty_sum_bonus,usersBonusArray:this.usersBonusArray,subspecialtyStatus:!0}).then((function(e){t.$message({message:"产值分配修改成功!",type:"success"}),t.goBack()}),(function(e){t.$message({message:e,type:"error"})}))},getUserList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){var s={userCard:3,page:"no"};e.$store.dispatch("user/userList",s).then((function(a){var s=[];for(var n in a.data)a.data[n].specialty===e.user.specialty&&a.data[n].subspecialty.lastIndexOf(e.$route.params.name)>-1&&s.push({value:a.data[n].user_id,label:a.data[n].user_name});e.selectList=s,e.validate(),t()})).catch((function(){}))})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),calcuBonus:function(t,e){e.bonusInput||(this.tableData[t].bonusStaffSeason=0),Number(e.bonusInput)>100?this.tableData[t].bonusInput=100:e.bonusInput&&(e.bonusInput=parseInt(e.bonusInput),this.tableData[t].bonusStaffSeason=(Number(e.bonusInput/100)*Number(this.form.subspecialty_sum_bonus)).toFixed(2)),e.ratio=this.tableData[t].bonusInput},getUserBonusSpecialty:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){e.$store.dispatch("productionSubspecialtyPrincipal/getinfo",{projectId:e.$route.params.id,subspecialty:e.$route.params.name}).then((function(a){for(var s in e.form=a,e.form.subspecialty_status=Object(o["a"])(e.form.subspecialty_status,e.statusList),e.tableData=a.usersBonusArray,e.tableData)e.tableData[s].ratio=e.tableData[s].bonusInput;t()})).catch((function(t){e.$message({message:t,type:"error"})}))})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),readSettings:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){e.$store.dispatch("settings/getSettings").then((function(a){e.projectTypeList=a.projectCategory,e.projectPhaseList=a.designPhase,e.specialtyList=a.placeList,e.statusList=a.stageStatusDesignprinciple,t()}),(function(t){a(t)}))})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),init:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.readSettings();case 2:return t.next=4,this.getUserList();case 4:return t.next=6,this.getUserBonusSpecialty();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.init()}},f=p,m=f,b=(a("1102"),a("2877")),d=Object(b["a"])(m,s,n,!1,null,"0cc29b2e",null);e["default"]=d.exports},d66d:function(t,e,a){}}]);