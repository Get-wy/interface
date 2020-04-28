(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5096d0c1"],{aa57:function(t,e,a){"use strict";var s=a("d73d"),r=a.n(s);r.a},d73d:function(t,e,a){},da4a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projectprogress-container"},[a("el-page-header",{staticStyle:{"margin-left":"30px","margin-bottom":"30px"},attrs:{title:"返回"},on:{back:t.goBack}}),t._v(" "),a("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"阶段状态"}},[a("tag",{attrs:{type:"tag",text:t.form.stage_Status}})],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"项目编号"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.project_Number,callback:function(e){t.$set(t.form,"project_Number",e)},expression:"form.project_Number"}})],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"项目名称"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.project_Name,callback:function(e){t.$set(t.form,"project_Name",e)},expression:"form.project_Name"}})],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"项目类别"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:"",placeholder:"请选择"},model:{value:t.form.project_Category,callback:function(e){t.$set(t.form,"project_Category",e)},expression:"form.project_Category"}},t._l(t.project_CategoryList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"设计阶段"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:"",placeholder:"请选择"},model:{value:t.form.design_Stage,callback:function(e){t.$set(t.form,"design_Stage",e)},expression:"form.design_Stage"}},t._l(t.design_StageList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"当前季度"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.current_Season,callback:function(e){t.$set(t.form,"current_Season",e)},expression:"form.current_Season"}})],1),t._v(" "),a("el-form-item",{staticClass:"short",attrs:{label:"设计负责人"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.design_Principal,callback:function(e){t.$set(t.form,"design_Principal",e)},expression:"form.design_Principal"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"进度调整"}},[a("el-table",{staticStyle:{"margin-top":"15px",width:"90%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"specialty",label:"所",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.renderSpecialty(e.row.specialty)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusInTotal",label:"所计算产值",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"所进度上限",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.progressSpecialtyLimit+"%"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"progressDistributed",label:"已发放进度",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusDistributed",label:"已发放产值",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"progressReserved",label:"剩余进度",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusReserved",label:"剩余产值",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"本季度进度",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"Input",attrs:{disabled:""},on:{blur:function(a){return t.onUpdateBonusSeason(e.$index,e.row)}},model:{value:e.row.progressInput,callback:function(a){t.$set(e.row,"progressInput",a)},expression:"scope.row.progressInput"}},[a("i",{staticClass:"icon iconfont icon-baifenbi",staticStyle:{"line-height":"40px"},attrs:{slot:"suffix"},slot:"suffix"})])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusSeason",label:"本季度产值",align:"center"}})],1)],1)],1)],1)},r=[],o=(a("96cf"),a("3b8d")),n=(a("c5f6"),a("3022")),l=a("ed08"),i=a("c28c"),c=a("a78e"),u=a.n(c),p={name:"",data:function(){var t=function(t,e,a){""===e.progressInput?a(new Error("请输入进度!")):!Object(n["isNumber"])(e.progressInput)||e.progressInput<0?a(new Error("本季度进度格式错误!")):e.progressInput>progressSpecialtyReserved&&a(new Error("本季度进度已超过剩余进度!"))};return{project_CategoryList:[],design_StageList:[],stage_StatusList:[],checked:!1,form:{},total:0,tableData:[],user:{},rules:{progressInput:[{validator:t,trigger:"blur"}]}}},components:{Tag:i["a"]},computed:{},methods:{goBack:function(){this.$router.push({name:"产值查询",params:{type:this.$route.params.type,quarter:this.$route.params.seasonName}})},onUpdateBonusSeason:function(t,e){console.log(t,e),this.tableData[t].bonusSeason=(Number(e.progressInput)/100*Number(e.bonusInTotal)).toFixed(2)},renderSpecialty:function(t){return 1===t?"环境":2===t?"结构":3===t?"电仪":"未知"},getList:function(t){var e=this;this.$store.dispatch("bonusPrincipal/getProjectProgressList",t).then((function(t){e.form=t,e.tableData=t.data,e.form.stage_Status=Object(l["a"])(e.form.stage_Status,e.stage_StatusList)})).catch((function(t){e.$message({message:t,type:"warning"})}))},Output:function(){},init:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,s,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("settings/getSettings").then((function(t){r.project_CategoryList=t.projectCategory,r.design_StageList=t.designPhase,r.stage_StatusList=t.stageStatusDesignprinciple})).catch((function(){console.log("查询项目配置json文件出错")}));case 2:"环境"==this.$route.params.specialty?(e={id:this.$route.params.id,specialty:1,seasonName:this.$route.params.seasonName},this.getList(e)):"结构"==this.$route.params.specialty?(a={id:this.$route.params.id,specialty:2,seasonName:this.$route.params.seasonName},this.getList(a)):"电仪"==this.$route.params.specialty&&(s={id:this.$route.params.id,specialty:3,seasonName:this.$route.params.seasonName},this.getList(s));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.init(),this.user=JSON.parse(u.a.get("userInfo"))}},m=p,f=(a("aa57"),a("2877")),d=Object(f["a"])(m,s,r,!1,null,"840a7be2",null);e["default"]=d.exports}}]);