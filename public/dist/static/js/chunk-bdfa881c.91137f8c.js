(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdfa881c"],{"0405":function(t,e,a){},"6af1":function(t,e,a){"use strict";var i=a("0405"),s=a.n(i);s.a},bb6f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"production-value-list"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"季度选择"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.quarter,callback:function(e){t.quarter=e},expression:"quarter"}},t._l(t.quarterList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.season_name,value:t.season_name}})})),1)],1),t._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!t.isDesignDirector&&!t.isSpecialtyPrincipal,expression:"!isDesignDirector && !isSpecialtyPrincipal"}],attrs:{label:"查询类型"}},[a("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.radioList,(function(t,e){return a("el-radio-button",{key:e,attrs:{label:t}})})),1)],1),t._v(" "),"项目"===t.radio?a("el-row",{staticClass:"guapi"},[a("el-form-item",{attrs:{label:"项目类别"}},[a("el-select",{attrs:{placeholder:"项目类别"},model:{value:t.project_Category,callback:function(e){t.project_Category=e},expression:"project_Category"}},t._l(t.propject_CategoryList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"设计阶段"}},[a("el-select",{attrs:{t:"",placeholder:"设计阶段"},model:{value:t.design_Stage,callback:function(e){t.design_Stage=e},expression:"design_Stage"}},t._l(t.design_StageList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"项目名称或编号"}},[a("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"项目名称或编号"},model:{value:t.project_NameOrNumber,callback:function(e){t.project_NameOrNumber=e},expression:"project_NameOrNumber"}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.getData}},[t._v("\n          查询\n        ")])],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.Output}},[a("svg-icon",{staticStyle:{width:"14px",height:"14.5px"},attrs:{iconClass:"excel"}}),t._v("\n          导出\n        ")],1)],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-printer"},on:{click:t.print}},[t._v("\n          打印\n        ")])],1)],1):t._e(),t._v(" "),"项目"!==t.radio?a("div",{staticStyle:{display:"inline-block"}},[a("el-form-item",[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.getData}},[t._v("\n          查询\n      ")])],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.Output}},[a("svg-icon",{staticStyle:{width:"14px",height:"14.5px"},attrs:{iconClass:"excel"}}),t._v("\n          导出\n      ")],1)],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-printer"},on:{click:t.print}},[t._v("\n          打印\n        ")])],1)],1):t._e()],1),t._v(" "),a("el-table",{directives:[{name:"show",rawName:"v-show",value:"所"===t.radio,expression:"radio === '所'"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","summary-method":t.getSummaries1,"show-summary":""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"specialty",label:"所",width:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"specialtyPrincipal",label:"负责所长",width:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusInTotal",label:"所计算产值",width:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusDistributed",label:"已发放产值",width:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusReserved",label:"剩余产值",width:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusSeason",label:"本季度产值",width:"",align:"center"}})],1),t._v(" "),a("el-table",{directives:[{name:"show",rawName:"v-show",value:"人员"===t.radio,expression:"radio === '人员'"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData3,border:"","summary-method":t.getSummaries,"show-summary":""}},[a("el-table-column",{attrs:{type:"index",prop:"index",label:"序号",width:"80",sortable:"",align:"center",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"staffName",label:"员工姓名",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"specialty",label:"所",align:"center",filters:[{text:"环境",value:"环境"},{text:"结构",value:"结构"},{text:"电仪",value:"电仪"}],"filter-method":t.filterTag}}),t._v(" "),a("el-table-column",{attrs:{prop:"calbonus",label:"计算产值",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text","close-transition":""},on:{click:function(a){return t.handleClickStatus(e.row)}}},[t._v("\n          "+t._s(e.row.button)+"\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusAdjust",label:"调剂产值",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusInTotal",label:"产值合计",align:"center"}})],1),t._v(" "),"项目"===t.radio?a("vxe-table",{staticStyle:{"margin-top":"20px"},attrs:{border:"","show-overflow":"","highlight-hover-row":"",align:"center","max-height":t.clientHeight,data:t.tableProjrctData}},[a("vxe-table-column",{attrs:{type:"seq",width:"60",title:"序号",fixed:"left"}}),t._v(" "),a("vxe-table-column",{attrs:{field:"itemNumber",title:"项目编号",width:"130",fixed:"left"}}),t._v(" "),a("vxe-table-column",{attrs:{width:"280",field:"projectName",title:"项目名称",align:"left",fixed:"left"}}),t._v(" "),a("vxe-table-column",{attrs:{"min-width":"100",field:"projectCategory",title:"项目类别",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.projectCategory))])]}}],null,!1,2163463393)}),t._v(" "),a("vxe-table-column",{attrs:{"min-width":"100",field:"designStage",title:"设计阶段",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.designStage))])]}}],null,!1,902503666)}),t._v(" "),a("vxe-table-column",{attrs:{"min-width":"100",field:"designPrincipal",title:"设计负责人"}}),t._v(" "),a("vxe-table-column",{attrs:{width:"80",field:"specialty",title:"所",sortable:"",filters:[{label:"环境",value:"环境"},{label:"结构",value:"结构"},{label:"电仪",value:"电仪"}],"filter-multiple":!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.specialty))])]}}],null,!1,3180037544)}),t._v(" "),a("vxe-table-column",{attrs:{"min-width":"100",field:"specialtyBonus",title:"所计算产值",align:"right"}}),t._v(" "),a("vxe-table-column",{attrs:{"min-width":"100",field:"bonusDistributed",title:"已发放产值",align:"right"}}),t._v(" "),a("vxe-table-column",{attrs:{"min-width":"100",field:"bonusReserved",title:"剩余产值",align:"right"}}),t._v(" "),a("vxe-table-column",{attrs:{"min-width":"100",field:"bonusSeasonProgress",title:"本季度进度",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.bonusSeasonProgress))])]}}],null,!1,1523399897)}),t._v(" "),a("vxe-table-column",{attrs:{"min-width":"100",field:"bonusSeasonAmount",title:"本季度产值",align:"right"}}),t._v(" "),a("vxe-table-column",{attrs:{width:"80",field:"project_submit",title:"项目进度",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.handleProjectProgress(e.row)}}},[a("svg-icon",{staticStyle:{width:"20px",height:"20px"},attrs:{iconClass:e.row.project_submit?"projectprogress":"projectprogress-warn"}})],1)]}}],null,!1,442734816)}),t._v(" "),t.isDesignDirector?t._e():a("vxe-table-column",{attrs:{width:"80",field:"bonus_submit",title:"产值分配",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.handleBonusDistribution(e.row)}}},[a("svg-icon",{staticStyle:{width:"18px",height:"18px"},attrs:{iconClass:e.row.bonus_submit?"bonusdistribution":"bonusdistribution-warn"}})],1)]}}],null,!1,1689647015)}),t._v(" "),a("vxe-table-column",{attrs:{width:"80",field:"itemNumber",title:"操作记录",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.history(e.row)}}},[a("svg-icon",{staticStyle:{width:"18px",height:"18px"},attrs:{iconClass:"project-history"}})],1)]}}],null,!1,2824310662)})],1):t._e()],1)},s=[],r=(a("6b54"),a("96cf"),a("3b8d")),n=a("75fc"),o=(a("c5f6"),a("db72")),l=(a("ac6a"),a("ed08")),u=a("add5"),c=a.n(u),m=a("a78e"),p=a.n(m),b=a("c695"),d=a.n(b),h=["所","项目","人员"],f={name:"production-value-list",data:function(){return{clientHeight:0,user:JSON.parse(p.a.get("userInfo")),project_Category:"",propject_CategoryList:[],design_Stage:"",design_StageList:[],project_NameOrNumber:"",quarterList:[],quarter:"",radioList:h,radio:h[0],tableData:[],placeList:[],tableData3:[],tableProjrctData:[],total:0,pageSize:1,currentPage:1,isDesignDirector:!1,isSpecialtyPrincipal:!1,tempTableData:[],sumSpecialty3:0,sumSpecialty4:0,sumSpecialty5:0,sumSpecialty6:0,sumProject7:0,sumProject8:0,sumProject9:0,sumProject11:0,sumStaff3:0,sumStaff4:0,sumStaff5:0}},computed:{changeRadio:function(){return this.radio}},watch:{changeRadio:function(){console.log(this.radio),"所"===this.radio?this.getTableList():"项目"===this.radio?this.getProjectList():"人员"===this.radio?this.getUserTableList():console.log("error")}},methods:{footerMethod:function(t){var e=t.columns,a=t.data,i=[];return e.forEach((function(t,e){if(0===e)i.push("和值");else{var s=null;switch(t.property){case"specialtyBonus":s=d.a.sum(a,t.property).toFixed(2);break;case"bonusDistributed":s=d.a.sum(a,t.property).toFixed(2);break;case"bonusReserved":s=d.a.sum(a,t.property).toFixed(2);break;case"bonusSeasonAmount":s=d.a.sum(a,t.property).toFixed(2);break}i.push(s)}})),[i]},filterTag:function(t,e){return e.specialty===t},Output:function(){var t=this;if("所"===this.radio){for(var e in this.tempTableData.length=0,this.sumSpecialty3=0,this.sumSpecialty4=0,this.sumSpecialty5=0,this.sumSpecialty6=0,this.tableData)this.tempTableData[e]=Object(o["a"])({},{index:Number(e)+1},{},this.tableData[e]),this.sumSpecialty3+=Number(this.tempTableData[e].bonusInTotal),this.sumSpecialty4+=Number(this.tempTableData[e].bonusDistributed),this.sumSpecialty5+=Number(this.tempTableData[e].bonusReserved),this.sumSpecialty6+=Number(this.tempTableData[e].bonusSeason);this.tempTableData=[].concat(Object(n["a"])(this.tempTableData),[{index:"合计",specialty:"",specialtyPrincipal:"",bonusInTotal:Number(this.sumSpecialty3).toFixed(2),bonusDistributed:Number(this.sumSpecialty4).toFixed(2),bonusReserved:Number(this.sumSpecialty5).toFixed(2),bonusSeason:Number(this.sumSpecialty6).toFixed(2)}]),this.downloadLoading=!0,Promise.all([a.e("chunk-e69e90f4"),a.e("chunk-2181d362")]).then(a.bind(null,"4bf8d")).then((function(e){var a=["序号","所","负责所长","总产值","已发放产值","剩余产值","本季度产值"],i=["index","specialty","specialtyPrincipal","bonusInTotal","bonusDistributed","bonusReserved","bonusSeason"],s=t.tempTableData,r=t.formatJson(i,s);e.export_json_to_excel({header:a,data:r,filename:"所产值统计",autoWidth:!0,bookType:"xlsx"}),t.downloadLoading=!1}))}else if("项目"===this.radio){for(var i in this.tempTableData.length=0,this.sumProject7=0,this.sumProject8=0,this.sumProject9=0,this.sumProject11=0,this.tableProjrctData)this.tempTableData[i]=Object(o["a"])({},{index:Number(i)+1},{},this.tableProjrctData[i]),this.sumProject7+=Number(this.tempTableData[i].specialtyBonus),this.sumProject8+=Number(this.tempTableData[i].bonusDistributed),this.sumProject9+=Number(this.tempTableData[i].bonusReserved),this.sumProject11+=Number(this.tempTableData[i].bonusSeasonAmount);this.tempTableData=[].concat(Object(n["a"])(this.tempTableData),[{index:"合计",itemNumber:"",projectName:"",projectCategory:"",designStage:"",designPrincipal:"",specialty:"",specialtyBonus:Number(this.sumProject7).toFixed(2),bonusDistributed:Number(this.sumProject8).toFixed(2),bonusReserved:Number(this.sumProject9).toFixed(2),bonusSeasonProgress:"",bonusSeasonAmount:Number(this.sumProject11).toFixed(2)}]),this.downloadLoading=!0,Promise.all([a.e("chunk-e69e90f4"),a.e("chunk-2181d362")]).then(a.bind(null,"4bf8d")).then((function(e){var a=["序号","项目编号","项目名称","项目类别","设计阶段","设计负责人","所","所产值","已发放产值","剩余产值","本季度进度","本季度产值"],i=["index","itemNumber","projectName","projectCategory","designStage","designPrincipal","specialty","specialtyBonus","bonusDistributed","bonusReserved","bonusSeasonProgress","bonusSeasonAmount"],s=t.tempTableData,r=t.formatJson(i,s);e.export_json_to_excel({header:a,data:r,filename:"项目产值统计",autoWidth:!0,bookType:"xlsx"}),t.downloadLoading=!1}))}else if("人员"===this.radio){for(var s in this.tempTableData.length=0,this.sumStaff3=0,this.sumStaff4=0,this.sumStaff5=0,this.tableData3)this.tempTableData[s]=Object(o["a"])({},{index:Number(s)+1},{},this.tableData3[s]),this.sumStaff3+=Number(this.tempTableData[s].button),this.sumStaff4+=Number(this.tempTableData[s].bonusAdjust),this.sumStaff5+=Number(this.tempTableData[s].bonusInTotal);this.tempTableData=[].concat(Object(n["a"])(this.tempTableData),[{index:"合计",staffName:"",specialty:"",button:Number(this.sumStaff3).toFixed(2),bonusAdjust:Number(this.sumStaff4).toFixed(2),bonusInTotal:Number(this.sumStaff5).toFixed(2)}]),this.downloadLoading=!0,Promise.all([a.e("chunk-e69e90f4"),a.e("chunk-2181d362")]).then(a.bind(null,"4bf8d")).then((function(e){var a=["序号","员工姓名","所","计算产值","调剂产值","产值合计"],i=["index","staffName","specialty","button","bonusAdjust","bonusInTotal"],s=t.tempTableData,r=t.formatJson(i,s);e.export_json_to_excel({header:a,data:r,filename:"人员产值统计",autoWidth:!0,bookType:"xlsx"}),t.downloadLoading=!1}))}else console.log("error")},print:function(){if("所"===this.radio){for(var t in this.tempTableData.length=0,this.sumSpecialty3=0,this.sumSpecialty4=0,this.sumSpecialty5=0,this.sumSpecialty6=0,this.tableData)this.tempTableData[t]=Object(o["a"])({},{index:Number(t)+1},{},this.tableData[t]),this.sumSpecialty3+=Number(this.tempTableData[t].bonusInTotal),this.sumSpecialty4+=Number(this.tempTableData[t].bonusDistributed),this.sumSpecialty5+=Number(this.tempTableData[t].bonusReserved),this.sumSpecialty6+=Number(this.tempTableData[t].bonusSeason);this.tempTableData=[].concat(Object(n["a"])(this.tempTableData),[{index:"合计",specialty:"",specialtyPrincipal:"",bonusInTotal:Number(this.sumSpecialty3).toFixed(2),bonusDistributed:Number(this.sumSpecialty4).toFixed(2),bonusReserved:Number(this.sumSpecialty5).toFixed(2),bonusSeason:Number(this.sumSpecialty6).toFixed(2)}]);var e={printable:this.tempTableData,properties:[{field:"index",displayName:"序号"},{field:"specialty",displayName:"所"},{field:"specialtyPrincipal",displayName:"负责所长"},{field:"bonusInTotal",displayName:"所计算产值"},{field:"bonusDistributed",displayName:"已发放产值"},{field:"bonusReserved",displayName:"剩余产值"},{field:"bonusSeason",displayName:"本季度产值"}],type:"json",gridHeaderStyle:"color: black;  border: 1px solid #000000;",gridStyle:"border: 1px solid #000000;"};c()(e)}else if("项目"===this.radio){for(var a in this.tempTableData.length=0,this.sumProject7=0,this.sumProject8=0,this.sumProject9=0,this.sumProject11=0,this.tableProjrctData)this.tempTableData[a]=Object(o["a"])({},{index:Number(a)+1},{},this.tableProjrctData[a]),this.sumProject7+=Number(this.tempTableData[a].specialtyBonus),this.sumProject8+=Number(this.tempTableData[a].bonusDistributed),this.sumProject9+=Number(this.tempTableData[a].bonusReserved),this.sumProject11+=Number(this.tempTableData[a].bonusSeasonAmount);this.tempTableData=[].concat(Object(n["a"])(this.tempTableData),[{index:"合计",itemNumber:"",projectName:"",projectCategory:"",designStage:"",designPrincipal:"",specialty:"",specialtyBonus:Number(this.sumProject7).toFixed(2),bonusDistributed:Number(this.sumProject8).toFixed(2),bonusReserved:Number(this.sumProject9).toFixed(2),bonusSeasonProgress:"",bonusSeasonAmount:Number(this.sumProject11).toFixed(2)}]);var i={printable:this.tempTableData,properties:[{field:"index",displayName:"序号"},{field:"itemNumber",displayName:"项目编号"},{field:"projectName",displayName:"项目名称"},{field:"projectCategory",displayName:"项目类别"},{field:"designStage",displayName:"设计阶段"},{field:"designPrincipal",displayName:"设计负责人"},{field:"specialty",displayName:"所"},{field:"specialtyBonus",displayName:"所产值"},{field:"bonusDistributed",displayName:"已发放产值"},{field:"bonusReserved",displayName:"剩余产值"},{field:"bonusSeasonProgress",displayName:"本季度进度"},{field:"bonusSeasonAmount",displayName:"本季度产值"}],type:"json",gridHeaderStyle:"color: black;  border: 1px solid #000000;",gridStyle:"border: 1px solid #000000;"};c()(i)}else if("人员"===this.radio){for(var s in this.tempTableData.length=0,this.sumStaff3=0,this.sumStaff4=0,this.sumStaff5=0,this.tableData3)this.tempTableData[s]=Object(o["a"])({},{index:Number(s)+1},{},this.tableData3[s]),this.sumStaff3+=Number(this.tempTableData[s].button),this.sumStaff4+=Number(this.tempTableData[s].bonusAdjust),this.sumStaff5+=Number(this.tempTableData[s].bonusInTotal);this.tempTableData=[].concat(Object(n["a"])(this.tempTableData),[{index:"合计",staffName:"",specialty:"",button:Number(this.sumStaff3).toFixed(2),bonusAdjust:Number(this.sumStaff4).toFixed(2),bonusInTotal:Number(this.sumStaff5).toFixed(2)}]);var r={printable:this.tempTableData,properties:[{field:"index",displayName:"序号"},{field:"staffName",displayName:"员工姓名"},{field:"specialty",displayName:"所"},{field:"button",displayName:"计算产值"},{field:"bonusAdjust",displayName:"调剂产值"},{field:"bonusInTotal",displayName:"产值合计"}],type:"json",gridHeaderStyle:"color: black;  border: 1px solid #000000;",gridStyle:"border: 1px solid #000000;"};c()(r)}else console.log("error")},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},handleClickStatus:function(t){this.$router.push({path:"/ProductionValueList/StaffBonusDetail/".concat(this.quarter,"/").concat(this.radio),query:{userId:t.staffNumber,userName:t.staffName,specialty:t.specialty}})},history:function(t){this.$router.push({path:"/ProductionValueList/ProjectHistory/".concat(t.itemNumber,"/").concat(this.radio)})},getQuarterList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){e.$store.dispatch("ProductionValueList/getQuarterList").then((function(a){console.log(a),e.quarterList=a,t()})).catch((function(t){e.$message({message:t,type:"warning"}),a(t)}))})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getSummaries1:function(t){var e=t.columns,a=t.data,i=[];return e.forEach((function(t,e){if(e<3)i[e]=0===e?"合计":"";else{var s=a.map((function(e){return Number(e[t.property])}));s.every((function(t){return isNaN(t)}))?i[e]="":(i[e]=s.reduce((function(t,e){var a=Number(e);return isNaN(a)?t:t+e}),0),e>2&&(i[e]=d.a.commafy(i[e].toFixed(2))))}})),i},getSummaries2:function(t){var e=t.columns,a=t.data,i=[];return e.forEach((function(t,e){if(e<7||e>11||10===e)i[e]=0===e?"合计":"";else{var s=a.map((function(e){return Number(e[t.property])}));s.every((function(t){return isNaN(t)}))?i[e]="":(i[e]=s.reduce((function(t,e){var a=Number(e);return isNaN(a)?t:t+e}),0),e>6&&e<13&&(i[e]=i[e].toFixed(2)))}})),i},getSummaries:function(t){var e=t.columns,a=t.data,i=[];return e.forEach((function(t,e){if(e<3)i[e]=0===e?"合计":"";else{var s=a.map((function(e){return Number(e[t.property])}));s.every((function(t){return isNaN(t)}))?i[e]="":(i[e]=s.reduce((function(t,e){var a=Number(e);return isNaN(a)?t:t+e}),0),e>2&&e<6&&(i[e]=d.a.commafy(i[e].toFixed(2))))}})),i},handleCurrentChange:function(t){this.getUserTableList(t)},getTableList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={seasonName:this.quarter},t.abrupt("return",new Promise((function(t,i){a.$store.dispatch("ProductionValueList/getTableList",e).then((function(e){for(var i in console.log(e),a.tableData=e,a.tableData)a.tableData[i].specialty=Object(l["a"])(a.tableData[i].specialty,a.placeList);t()})).catch((function(t){a.$message({message:t,type:"warning"}),i(t)}))})));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getUserTableList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={seasonName:this.quarter,specialty:this.specialty,page:e||""},t.abrupt("return",new Promise((function(t,e){i.$store.dispatch("ProductionValueList/getUserTableList",a).then((function(e){for(var a in console.log(e),i.tableData3=e.data,i.tableData3)i.tableData3[a].specialty=Object(l["a"])(i.tableData3[a].specialty,i.placeList),i.tableData3[a].calbonus=i.tableData3[a].button;console.log("绑定",i.tableData3),t()})).catch((function(t){i.$message({message:t,type:"warning"}),e(t)}))})));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getProjectList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e={projectType:this.project_Category,projectPhase:this.design_Stage,projectSelect:this.project_NameOrNumber,seasonName:this.quarter},this.$store.dispatch("bonusPrincipal/getProjectList",e).then((function(t){for(var e in a.tableProjrctData=t,a.tableProjrctData)a.tableProjrctData[e].projectCategory=Object(l["a"])(a.tableProjrctData[e].projectCategory,a.propject_CategoryList),a.tableProjrctData[e].designStage=Object(l["a"])(a.tableProjrctData[e].designStage,a.design_StageList),a.tableProjrctData[e].specialty=Object(l["a"])(a.tableProjrctData[e].specialty.toString(),a.placeList),a.tableProjrctData[e].designStageName&&(a.tableProjrctData[e].designStage="".concat(a.tableProjrctData[e].designStage,"-").concat(a.tableProjrctData[e].designStageName))})).catch((function(t){a.$message({message:t,type:"warning"})}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getData:function(){"所"===this.radio?this.getTableList():"项目"===this.radio?this.getProjectList():"人员"===this.radio&&this.getUserTableList()},handleProjectProgress:function(t){console.log("待补充：项目进度点击"),this.$router.push({path:"/ProductionValueList/ProjectProgress/".concat(t.itemNumber,"/").concat(t.specialty,"/").concat(this.quarter,"/").concat(this.radio)})},handleBonusDistribution:function(t){console.log("待补充：产值分配点击"),this.$router.push({path:"/ProductionValueList/BonusSubspecialtyList/".concat(t.itemNumber,"/").concat(t.specialty,"/").concat(this.quarter,"/").concat(this.radio)})},init:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("settings/getSettings").then((function(t){a.placeList=t.placeList,a.propject_CategoryList=[{label:"全部",value:""}].concat(Object(n["a"])(t.projectCategory)),a.design_StageList=[{label:"全部",value:""}].concat(Object(n["a"])(t.designPhase))})).catch((function(){}));case 2:return t.next=4,this.getQuarterList();case 4:e=JSON.parse(p.a.get("userInfo")),this.quarterList.length>0&&(this.quarter=this.quarterList[0].season_name),console.log("用户信息",e),1===e.design_director||1===e.specialty_principal?1===e.design_director?(console.log("设计负责人"),this.radio="项目",this.isDesignDirector=!0,this.getProjectList()):1===e.specialty_principal&&(console.log("专业负责人"),this.radio="人员",this.isSpecialtyPrincipal=!0,this.getUserTableList()):(console.log("不是 专业负责人 设计负责人"),this.getTableList()),this.getData();case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){},activated:function(){this.$route.params.type&&(this.radio=this.$route.params.type),this.init(),this.clientHeight=document.body.clientHeight-210},created:function(){this.$route.params.type&&(this.radio=this.$route.params.type),this.init(),this.clientHeight=document.body.clientHeight-210}},g=f,y=g,v=(a("6af1"),a("2877")),S=Object(v["a"])(y,i,s,!1,null,"35488624",null);e["default"]=S.exports},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));a("28a5"),a("a481"),a("6b54"),a("7618");function i(t,e){for(var a in e)if(e[a].value==t)return e[a].label}function s(t,e){for(var a in e)if(e[a].label==t)return e[a].value}}}]);