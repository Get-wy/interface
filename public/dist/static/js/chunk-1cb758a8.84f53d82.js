(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cb758a8"],{2017:function(e,t,o){"use strict";var s=o("b12d"),n=o.n(s);n.a},2952:function(e,t,o){"use strict";var s=o("f506"),n=o.n(s);n.a},"9ed6":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("img",{staticClass:"logo",attrs:{src:o("99dd"),alt:""}}),e._v(" "),s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("上海市政设计院产值奖金管理系统")])]),e._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),s("el-input",{ref:"username",attrs:{placeholder:"用户名",name:"username",type:"text",tabindex:"1","auto-complete":"on"},on:{input:function(t){return e.change(t)}},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},on:{input:function(t){return e.change(t)}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1),e._v(" "),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"bottom"},[e._v("Copyright © 2019 "),o("a",{attrs:{target:"_blank",href:"http://www.zealtec.cn/"}},[e._v("上海卓太实业有限公司")]),e._v(" All Rights Reserved")])}],r=(o("61f7"),o("a78e")),a=o.n(r),i={name:"Login",data:function(){var e=function(e,t,o){t?o():o(new Error("请输入用户名"))},t=function(e,t,o){var s=/^(?!_)(?!.*?_$)[a-zA-Z0-9_]+$/;""===t?o(new Error("请输入密码")):s.test(t)?o():o(new Error("请输入英文、数字、下划线不能开头和结尾"))};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{change:function(e){this.$forceUpdate()},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){var t=JSON.parse(a.a.get("userInfo"));console.log("用户",t),0===t.user_authority?(console.log("设计人员"),1===t.institute||2===t.institute?(console.log("所长"),e.$router.push({path:"/bonus-principal"})):1===t.design_director?(console.log("设计负责人"),e.$router.push({path:"/bonus-designprincipal/ProgressManage"})):1===t.specialty_principal?(e.$router.push({path:"/bonus-subspecialtyprincipal/BonusManage"}),console.log("专业负责人")):e.$router.push({path:"/bonus-staff/StaffBonusDetail"})):1===t.user_authority?(e.$router.push({path:"/project-manage/list"}),console.log("管理员")):2===t.user_authority?(e.$router.push({path:"/bonus-dean"}),console.log("院长")):(console.log("用户身份未知"),e.$message.error("用户身份未知")),e.loading=!1})).catch((function(t){e.loading=!1,e.$message({message:t,type:"error"})}))}))}},mounted:function(){}},l=i,c=(o("2017"),o("2952"),o("2877")),u=Object(c["a"])(l,s,n,!1,null,"c097768c",null);t["default"]=u.exports},b12d:function(e,t,o){},f506:function(e,t,o){}}]);