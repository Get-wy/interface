(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-748897f8"],{"295a":function(e,r,t){},"6ac9":function(e,r,t){"use strict";var a=t("295a"),s=t.n(a);s.a},b7e3:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"user-manage-edit"},[t("el-page-header",{attrs:{title:"返回",content:"人员修改"},on:{back:e.goBack}}),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"账号",prop:"userName"}},[t("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.userName,callback:function(r){e.$set(e.ruleForm,"userName",r)},expression:"ruleForm.userName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{staticClass:"identity",attrs:{label:"用户身份",prop:"Identity"}},[t("el-radio-group",{on:{change:e.selectIdentity},model:{value:e.ruleForm.Identity,callback:function(r){e.$set(e.ruleForm,"Identity",r)},expression:"ruleForm.Identity"}},[t("el-radio-button",{attrs:{label:"0"}},[e._v("设计人员")]),e._v(" "),t("el-radio-button",{attrs:{label:"2"}},[e._v("院长")]),e._v(" "),t("el-radio-button",{attrs:{label:"1"}},[e._v("管理员")])],1)],1),e._v(" "),t("el-form-item",{staticClass:"identity",attrs:{label:"所长身份",prop:"directorship"}},[t("el-radio-group",{attrs:{disabled:e.disabled},model:{value:e.ruleForm.directorship,callback:function(r){e.$set(e.ruleForm,"directorship",r)},expression:"ruleForm.directorship"}},[t("el-radio-button",{attrs:{label:"0"}},[e._v("无")]),e._v(" "),t("el-radio-button",{attrs:{label:"1"}},[e._v("所长")]),e._v(" "),t("el-radio-button",{attrs:{label:"2"}},[e._v("负责所长")])],1)],1),e._v(" "),t("el-form-item",{staticClass:"designManager",attrs:{label:"设计负责人",prop:"designManager"}},[t("el-radio-group",{attrs:{disabled:e.disabled},model:{value:e.ruleForm.designManager,callback:function(r){e.$set(e.ruleForm,"designManager",r)},expression:"ruleForm.designManager"}},[t("el-radio-button",{attrs:{label:"0"}},[e._v("否")]),e._v(" "),t("el-radio-button",{attrs:{label:"1"}},[e._v("是")])],1)],1),e._v(" "),t("el-form-item",{staticClass:"designManager",attrs:{label:"专业负责人",prop:"personInCharge"}},[t("el-radio-group",{attrs:{disabled:e.disabled},model:{value:e.ruleForm.personInCharge,callback:function(r){e.$set(e.ruleForm,"personInCharge",r)},expression:"ruleForm.personInCharge"}},[t("el-radio-button",{attrs:{label:"0"}},[e._v("否")]),e._v(" "),t("el-radio-button",{attrs:{label:"1"}},[e._v("是")])],1)],1),e._v(" "),t("el-form-item",{staticClass:"designManager",attrs:{label:"所",prop:"place"}},[t("el-radio-group",{attrs:{disabled:e.disabled},on:{change:e.selectPlace},model:{value:e.ruleForm.place,callback:function(r){e.$set(e.ruleForm,"place",r)},expression:"ruleForm.place"}},[t("el-radio-button",{attrs:{label:"1"}},[e._v("环境")]),e._v(" "),t("el-radio-button",{attrs:{label:"2"}},[e._v("结构")]),e._v(" "),t("el-radio-button",{attrs:{label:"3"}},[e._v("电仪")])],1)],1),e._v(" "),t("el-form-item",{staticClass:"designManager",attrs:{label:"专业",prop:"specialty"}},[t("el-checkbox-group",{directives:[{name:"show",rawName:"v-show",value:1==e.ruleForm.place,expression:"ruleForm.place == 1"}],attrs:{disabled:e.disabled},on:{change:e.selectSpecialty},model:{value:e.ruleForm.specialty,callback:function(r){e.$set(e.ruleForm,"specialty",r)},expression:"ruleForm.specialty"}},[t("el-checkbox-button",{attrs:{label:"环卫"}},[e._v("环卫")]),e._v(" "),t("el-checkbox-button",{attrs:{label:"排水"}},[e._v("排水")]),e._v(" "),t("el-checkbox-button",{attrs:{label:"除臭"}},[e._v("除臭")])],1),e._v(" "),t("el-checkbox-group",{directives:[{name:"show",rawName:"v-show",value:2==e.ruleForm.place,expression:"ruleForm.place == 2"}],attrs:{disabled:e.disabled},on:{change:e.selectSpecialty},model:{value:e.ruleForm.specialty,callback:function(r){e.$set(e.ruleForm,"specialty",r)},expression:"ruleForm.specialty"}},[t("el-checkbox-button",{attrs:{label:"建筑"}},[e._v("建筑")]),e._v(" "),t("el-checkbox-button",{attrs:{label:"结构"}},[e._v("结构")]),e._v(" "),t("el-checkbox-button",{attrs:{label:"水工"}},[e._v("水工")])],1),e._v(" "),t("el-checkbox-group",{directives:[{name:"show",rawName:"v-show",value:3==e.ruleForm.place,expression:"ruleForm.place == 3"}],attrs:{disabled:e.disabled},on:{change:e.selectSpecialty},model:{value:e.ruleForm.specialty,callback:function(r){e.$set(e.ruleForm,"specialty",r)},expression:"ruleForm.specialty"}},[t("el-checkbox-button",{attrs:{label:"电气"}},[e._v("电气")]),e._v(" "),t("el-checkbox-button",{attrs:{label:"仪表"}},[e._v("仪表")])],1)],1),e._v(" "),t("el-form-item",{staticClass:"designManager",attrs:{label:"账户状态",prop:"forbidden"}},[t("el-radio-group",{model:{value:e.ruleForm.forbidden,callback:function(r){e.$set(e.ruleForm,"forbidden",r)},expression:"ruleForm.forbidden"}},[t("el-radio-button",{attrs:{label:"0"}},[e._v("正常")]),e._v(" "),t("el-radio-button",{attrs:{label:"1"}},[e._v("禁用")])],1)],1),e._v(" "),t("el-form-item",{staticClass:"bottom"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("确认")]),e._v(" "),t("el-button",{on:{click:function(r){return e.goBack()}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"danger"},on:{click:e.resetPassWorld}},[e._v("重置密码")])],1)],1)],1)},s=[],l=(t("7f7f"),{name:"user-manage-edit",data:function(){var e=function(e,r,t){var a=/^(?!_)(?!.*?_$)[a-zA-Z0-9_]+$/;""===r?t(new Error("请输入账号")):a.test(r)?t():t(new Error("请输入英文、数字、下划线不能开头和结尾"))},r=function(e,r,t){var a=/^[\u4E00-\u9FA5]{2,5}$/;""===r?t(new Error("请输入账号")):a.test(r)?t():t(new Error("请输入2~5个汉字"))};return{disabled:!1,userInfo:{},ruleForm:{userName:"",name:"",Identity:0,directorship:0,designManager:0,personInCharge:0,place:1,specialty:["环卫"],forbidden:0},rules:{userName:[{required:!0,message:"请输入账号",trigger:"blur"},{validator:e,trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"},{validator:r,trigger:"blur"}],Identity:[{required:!0,message:"请选择用户身份",trigger:"change"}],directorship:[{required:!0,message:"请选择用户身份",trigger:"change"}],designManager:[{required:!0,message:"请选择用户身份",trigger:"change"}],personInCharge:[{required:!0,message:"请选择用户身份",trigger:"change"}],place:[{required:!0,message:"请选择用户身份",trigger:"change"}],specialty:[{required:!0,message:"请选择用户身份",trigger:"change"}],forbidden:[{required:!0,message:"请选择账户状态",trigger:"change"}]}}},methods:{goBack:function(){this.$router.push({name:"人员管理",params:{page:this.$route.params.page}})},submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var t={};t=r.disabled?{userName:r.ruleForm.userName,name:r.ruleForm.name,Identity:r.ruleForm.Identity,forbidden:r.ruleForm.forbidden}:r.ruleForm,r.$store.dispatch("user/edit",t).then((function(e){r.$message({message:"修改人员成功",type:"success"}),r.$router.push({name:"人员管理",params:{page:r.$route.params.page}})})).catch((function(e){r.$message({message:e,type:"warning"})}))}))},selectPlace:function(){var e=this.ruleForm.place;this.ruleForm.specialty="1"===e?["环卫"]:"2"===e?["建筑"]:["电气"]},selectSpecialty:function(){var e=this.ruleForm.place;0===this.ruleForm.specialty.length&&(this.ruleForm.specialty="1"===e?["环卫"]:"2"===e?["建筑"]:["电气"])},selectIdentity:function(){"0"!==this.ruleForm.Identity?this.disabled=!0:this.disabled=!1},resetPassWorld:function(){var e=this;console.log(this.ruleForm.userName),this.$prompt("请输入新密码","重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[a-zA-Z0-9]{6,18}$/,inputErrorMessage:"密码由数字或字母组成，位数为6-18位!"}).then((function(r){var t=r.value;e.$store.dispatch("user/resetPassWorld",{userId:e.ruleForm.userName,password:t}).then((function(r){e.$message({message:"重置该用户密码成功",type:"success"})})).catch((function(r){e.$message({message:r,type:"warning"})}))})).catch((function(){e.$message({type:"info",message:"已取消"})}))}},mounted:function(){this.userInfo=this.$route.params,console.log(this.userInfo),this.userInfo.user_id?(0!==this.userInfo.user_authority?this.disabled=!0:this.disabled=!1,this.ruleForm.userName=this.userInfo.user_id,this.ruleForm.name=this.userInfo.user_name,this.ruleForm.Identity=this.userInfo.user_authority,this.ruleForm.directorship=this.userInfo.institute?this.userInfo.institute:0,this.ruleForm.designManager=this.userInfo.design_director?this.userInfo.design_director:0,this.ruleForm.personInCharge=this.userInfo.specialty_principal?this.userInfo.specialty_principal:0,this.ruleForm.forbidden=this.userInfo.forbidden?this.userInfo.forbidden:0,"环境"===this.userInfo.specialty?(this.ruleForm.place=1,this.ruleForm.specialty=this.userInfo.subspecialty):"结构"===this.userInfo.specialty?(this.ruleForm.place=2,this.ruleForm.specialty=this.userInfo.subspecialty):"电仪"===this.userInfo.specialty&&(this.ruleForm.place=3,this.ruleForm.specialty=this.userInfo.subspecialty)):this.$router.push({name:"人员管理",params:{page:this.$route.params.page}})}}),o=l,i=o,n=(t("6ac9"),t("2877")),u=Object(n["a"])(i,a,s,!1,null,"22b2fb74",null);r["default"]=u.exports}}]);