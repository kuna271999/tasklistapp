"use strict";define("task/app",["exports","ember","ember/resolver","ember/load-initializers","task/config/environment"],function(e,t,a,n,r){var d=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,d=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:a.default}),(0,n.default)(d,r.default.modulePrefix),e.default=d}),define("task/components/app-version",["exports","ember-cli-app-version/components/app-version","task/config/environment"],function(e,t,a){var n=a.default.APP.name,r=a.default.APP.version;e.default=t.default.extend({version:r,name:n})}),define("task/controllers/array",["exports","@ember/controller"],function(e,t){e.default=t.default}),define("task/controllers/object",["exports","@ember/controller"],function(e,t){e.default=t.default}),define("task/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","task/config/environment"],function(e,t,a){e.default={name:"App Version",initialize:(0,t.default)(a.default.APP.name,a.default.APP.version)}}),define("task/initializers/export-application-global",["exports","ember","task/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(!1!==a.default.exportApplicationGlobal){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var r,d=a.default.exportApplicationGlobal;r="string"==typeof d?d:t.default.String.classify(a.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("task/pods/addtask/controller",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({actions:{logout:function(){$("#whole").css("margin-top","0px"),this.transitionToRoute("login")},autoassign:function(){var e=this,a=new Date;a.getMinutes();if(a.getHours()>18)alert("You cant assign task after 6:00pm");else{var n,r,d,l,i;!function(){var a=function(){$("#whole").css("margin-top","-155px"),i.transitionToRoute("tasklist")};n=e.get("taskname"),r=e.get("taskdescription"),d=e.get("taskestitime");var o={taskname:n,taskdescription:r,taskestitime:d};l="false",i=e,t.default.$.ajax({url:"/autoassign",type:"POST",dataType:"json",data:o,success:function(e){console.log(e);var t=$.parseJSON(JSON.stringify(e)),n=t[0].result,r=t[0].assigntoo;alert("task is autoassigned to "+r),$.trim(n),a()},error:function(e){alert(e)}})}()}},assignto:function(){var e=new Date;e.getMinutes();e.getHours()>15?alert("You cant assign task after 6:00pm"):t.default.$.ajax({url:"/assign",type:"GET",dataType:"json",success:function(e){var t=$.parseJSON(JSON.stringify(e));console.log(t);var a=" ";a+='<select id="userassign">',$(t).each(function(e,t){var n=t.username;a+='<option value="'+n+'">',a+=n,a+="</option>"}),a+="</select>",$("#assignuser").append(a)},error:function(e){alert(e)}})},createtask:function(){var e=this,a=new Date;a.getMinutes();if(a.getHours()>18)alert("You cant assign task after 6:00pm");else{var n,r,d,l,i,o;!function(){var a=function(){$("#whole").css("margin-top","-155px"),o.transitionToRoute("tasklist")};n=e.get("taskname"),r=e.get("taskdescription"),d=e.get("taskestitime"),l=$("#userassign").val();var p={taskname:n,taskdescription:r,taskestitime:d,taskassign:l};i="false",o=e,t.default.$.ajax({url:"/addtask",type:"POST",dataType:"text",data:p,success:function(e){var t=$.parseJSON(JSON.stringify(e)),n=t[0].result;$.trim(n),a()},error:function(e){alert(e)}})}()}}}})}),define("task/pods/addtask/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("task/pods/addtask/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:30,column:10},end:{line:30,column:38}},moduleName:"task/pods/addtask/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Tasks");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:36,column:79}},moduleName:"task/pods/addtask/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","addtasktable");var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("table");e.setAttribute(n,"class","tab1");var r=e.createTextNode("\n                                ");e.appendChild(n,r);var r=e.createElement("h3"),d=e.createTextNode("Add tasks here!!");e.appendChild(r,d),e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n                                \n                        \n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td");e.setAttribute(d,"id","r");var l=e.createTextNode("Task Name");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("      ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("                \n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td");e.setAttribute(d,"id","r");var l=e.createTextNode("Task Description");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n\t\t\t\t\t\t");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td");e.setAttribute(d,"id","r");var l=e.createTextNode("Task Estimatedtime");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n\t\t\t\t\t\t\t");e.appendChild(r,d);var d=e.createElement("td");e.setAttribute(d,"id","r");var l=e.createTextNode("To assign tasks");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td"),l=e.createTextNode("  ");e.appendChild(d,l);var l=e.createElement("button");e.setAttribute(l,"id","but1");var i=e.createTextNode("Assign to");e.appendChild(l,i),e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n\t\t\t\t\t\t");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n\t\t\t\t\t\t\t");e.appendChild(r,d);var d=e.createElement("td");e.appendChild(r,d);var d=e.createTextNode("\n\t\t\t\t\t\t\t");e.appendChild(r,d);var d=e.createElement("td"),l=e.createElement("div");e.setAttribute(l,"id","assignuser"),e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\t\t\t\t\t\t");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n\t\t\t\t\t\t");e.appendChild(r,d);var d=e.createElement("td"),l=e.createElement("button");e.setAttribute(l,"id","dow");var i=e.createTextNode("createtask");e.appendChild(l,i),e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\t\t\t\t\t\t");e.appendChild(r,d);var d=e.createElement("td"),l=e.createElement("button");e.setAttribute(l,"id","but");var i=e.createTextNode("Auto assign");e.appendChild(l,i),e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\t\t\t\t\t\t");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\t\t\t\t\t\t\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","logoutadd");var n=e.createElement("button");e.setAttribute(n,"id","dow1");var r=e.createTextNode("Logout");return e.appendChild(n,r),e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[1,1]),r=e.childAt(n,[14,3,1]),d=e.childAt(n,[19]),l=e.childAt(d,[1,0]),i=e.childAt(d,[3,0]),o=e.childAt(t,[3,0]),p=new Array(8);return p[0]=e.createMorphAt(e.childAt(n,[4,3]),0,0),p[1]=e.createMorphAt(e.childAt(n,[8,3]),0,0),p[2]=e.createMorphAt(e.childAt(n,[11,3]),0,0),p[3]=e.createElementMorph(r),p[4]=e.createElementMorph(l),p[5]=e.createElementMorph(i),p[6]=e.createMorphAt(e.childAt(d,[5]),0,0),p[7]=e.createElementMorph(o),p},statements:[["inline","input",[],["type","text","placeholder","Please enter taskname","value",["subexpr","@mut",[["get","taskname",["loc",[null,[9,96],[9,104]]]]],[],[]],"id","n"],["loc",[null,[9,32],[9,113]]]],["inline","textarea",[],["value",["subexpr","@mut",[["get","taskdescription",["loc",[null,[13,49],[13,64]]]]],[],[]],"cols","80","rows","6"],["loc",[null,[13,32],[13,85]]]],["inline","input",[],["type","text","placeholder","Please enter estimated time","value",["subexpr","@mut",[["get","taskestitime",["loc",[null,[17,102],[17,114]]]]],[],[]]],["loc",[null,[17,32],[17,116]]]],["element","action",["assignto"],[],["loc",[null,[21,52],[21,73]]]],["element","action",["createtask"],[],["loc",[null,[28,18],[28,41]]]],["element","action",["autoassign"],[],["loc",[null,[29,18],[29,41]]]],["block","link-to",["tasklist"],[],0,null,["loc",[null,[30,10],[30,50]]]],["element","action",["logout"],[],["loc",[null,[36,28],[36,47]]]]],locals:[],templates:[e]}}())}),define("task/pods/createaccount/controller",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({actions:{signup:function(){function e(){l.transitionToRoute("login")}var a=this.get("createname"),n=this.get("createusername"),r=this.get("createpassword"),d={createusername:n,createpassword:r,createname:a},l=this;t.default.$.ajax({url:"/signup",type:"POST",data:d,success:function(t){e()},error:function(e){alert(e)}})}}})}),define("task/pods/createaccount/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({setupController:function(e){e.set("title","My App")}})}),define("task/pods/createaccount/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:21,column:11},end:{line:21,column:41}},moduleName:"task/pods/createaccount/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("HOME");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:27,column:0}},moduleName:"task/pods/createaccount/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","createtable");var n=e.createTextNode("\n                        ");e.appendChild(a,n);var n=e.createElement("table");e.setAttribute(n,"class","tab");var r=e.createTextNode("\n                                ");e.appendChild(n,r);var r=e.createElement("h3"),d=e.createTextNode("Create an account here!");e.appendChild(r,d),e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n                                \n                         ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td");e.setAttribute(d,"id","r");var l=e.createTextNode("Name");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("  ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td");e.setAttribute(d,"id","r");var l=e.createTextNode("Username");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("       ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("               \n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td");e.setAttribute(d,"id","r");var l=e.createTextNode("Password");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("button");e.setAttribute(d,"id","dow");var l=e.createTextNode("Sign Up");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\t\t\t\t\t\t\t");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                            \n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[1,1]),r=e.childAt(n,[16]),d=e.childAt(r,[1]),l=new Array(5);return l[0]=e.createMorphAt(e.childAt(n,[4,3]),0,0),l[1]=e.createMorphAt(e.childAt(n,[8,3]),0,0),l[2]=e.createMorphAt(e.childAt(n,[12,3]),0,0),l[3]=e.createElementMorph(d),l[4]=e.createMorphAt(e.childAt(r,[3]),0,0),l},statements:[["inline","input",[],["type","text","placeholder","Please enter firstname","value",["subexpr","@mut",[["get","createname",["loc",[null,[8,101],[8,111]]]]],[],[]]],["loc",[null,[8,32],[8,113]]]],["inline","input",[],["type","text","placeholder","Please enter firstname","value",["subexpr","@mut",[["get","createusername",["loc",[null,[12,101],[12,115]]]]],[],[]]],["loc",[null,[12,32],[12,117]]]],["inline","input",[],["type","password","placeholder","Please enter password","value",["subexpr","@mut",[["get","createpassword",["loc",[null,[16,102],[16,116]]]]],[],[]]],["loc",[null,[16,32],[16,118]]]],["element","action",["signup"],[],["loc",[null,[20,36],[20,55]]]],["block","link-to",["application"],[],0,null,["loc",[null,[21,11],[21,53]]]]],locals:[],templates:[e]}}())}),define("task/pods/login/controller",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({d:"lo",actions:{fetch:function(){t.default.$.ajax({url:"/fetch",type:"GET",dataType:"json",success:function(e){var t=$.parseJSON(JSON.stringify(e)),a=t[0].result;if("true"==$.trim(a)){var n=t[0].uname,r=$.trim(n),d=t[0].upass,l=$.trim(d);$("#luname").val(r),$("#lupass").val(l)}else alert("Please login")},error:function(e){alert("error")}})},login:function(){function e(){$("#whole").css("margin-top","-155px"),i.transitionToRoute("tasklist")}var a=$("#luname").val(),n=$("#lupass").val(),r=$("#check").prop("checked"),d={loginUsername:a,loginPassword:n,remember:r},l="false",i=this;t.default.$.ajax({url:"/login",type:"POST",dataType:"json",data:d,success:function(t){var a=$.parseJSON(JSON.stringify(t)),n=(a[0].loginusername,a[0].loginpassword,a[0].result),r=$.trim(n);$(".loginresponse").html(r);var d=r;l="true","Successfullogin"==d&&e()},error:function(e){alert(e)}})}}})}),define("task/pods/login/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("task/pods/login/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:28,column:0}},moduleName:"task/pods/login/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","existtable");var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("table");e.setAttribute(n,"class","tab");var r=e.createTextNode("\n                                ");e.appendChild(n,r);var r=e.createElement("h3"),d=e.createTextNode("Already an existing user!");e.appendChild(r,d),e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n                                \n                        \n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td");e.setAttribute(d,"id","r");var l=e.createTextNode("Username");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\t\t\t\t\t\t\t\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("           ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("           \n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td");e.setAttribute(d,"id","r");var l=e.createTextNode("Password");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n                            ");e.appendChild(r,d);var d=e.createElement("td"),l=e.createComment("");e.appendChild(d,l);var l=e.createTextNode("Remember me");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r);var r=e.createElement("tr"),d=e.createTextNode("\n\t\t\t\t\t\t");e.appendChild(r,d);var d=e.createElement("td"),l=e.createElement("button");e.setAttribute(l,"id","dow");var i=e.createTextNode("Login");e.appendChild(l,i),e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\t\t\t\t\t\t");e.appendChild(r,d);var d=e.createElement("td"),l=e.createElement("button");e.setAttribute(l,"id","dow");var i=e.createTextNode("Fetch");e.appendChild(l,i),e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n                        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n\t\t\t\t\t\t");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","loginresponse"),e.appendChild(n,r);var r=e.createTextNode("\n                        ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\t\t\t\t\t\t\n\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[1,1]),r=e.childAt(n,[14]),d=e.childAt(r,[1,0]),l=e.childAt(r,[3,0]),i=new Array(5);return i[0]=e.createMorphAt(e.childAt(n,[4,3]),0,0),i[1]=e.createMorphAt(e.childAt(n,[8,3]),0,0),i[2]=e.createMorphAt(e.childAt(n,[11,1]),0,0),i[3]=e.createElementMorph(d),i[4]=e.createElementMorph(l),i},statements:[["inline","input",[],["type","text","placeholder","Please enter firstname","value",["subexpr","@mut",[["get","loginUsername",["loc",[null,[9,97],[9,110]]]]],[],[]],"id","luname"],["loc",[null,[9,32],[9,125]]]],["inline","input",[],["type","Password","placeholder","Please enter password","value",["subexpr","@mut",[["get","loginPassword",["loc",[null,[14,100],[14,113]]]]],[],[]],"id","lupass"],["loc",[null,[14,32],[14,128]]]],["inline","input",[],["type","checkbox","id","check","name","language"],["loc",[null,[17,32],[17,84]]]],["element","action",["login"],[],["loc",[null,[20,18],[20,36]]]],["element","action",["fetch"],[],["loc",[null,[21,18],[21,36]]]]],locals:[],templates:[]}}())}),define("task/pods/router",["exports","ember","task/pods/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType});n.map(function(){this.route("createaccount"),this.route("login"),this.route("tasklist"),this.route("addtask")}),e.default=n}),define("task/pods/tasklist/controller",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({actions:{report:function(){function e(){n.transitionToRoute("login")}var a=$("#selectmethod").val(),n=this;t.default.$.ajax({url:"/viewtask",type:"GET",data:{selmethod:a},dataType:"json",success:function(t){$("#tasktable").empty(),$("#welcome").empty();var a=$.parseJSON(JSON.stringify(t)),n=a[0].result,r=$.trim(n);if("loginfirst"==r)e();else if("NOtasksavailable"==r){var d=a[0].assigned;$("#welcome").append("Welcome "+d),console.log(a);var l=" ";l+="<h2>",l+="No tasks assigned to you at the moment",l+="</h2>",$("#tasktable").append(l)}else{var d=a[0].assigned;$("#welcome").append("Welcome "+d),console.log(a);var l=" ";l+='<table class="view">',l+="<tr><th>Task id</th> <th>Task Name</th> <th>Task Description</th>  <th>Task Createdtime</th> <th>Task Createdby</th> <th>Task Status</th> <th> change the status <br/>if completed</th></tr>";var i=1;$(a).each(function(e,t){var a=t.taskid,n=t.taskname,r=t.taskdescription,d=t.taskstatus,o=t.taskcreatedtime,p=t.taskcreatedby;l+='<tr id="rowremove">',l+='<td class="tid">'+a+"</td>",l+="<td>"+n+"</td>",l+="<td>"+r+"</td>",l+="<td>"+o+"</td>",l+="<td>"+p+"</td>",l+="<td>"+d+"</td>",l+='<td><select id="'+a+'"> <option value=""></option>   <option value="nottaken">Not taken</option>    <option value="completed">Completed</option></select></td>',l+="</tr>",i+=1}),l+="</table>",$("#tasktable").append(l)}},error:function(e){alert(e)}})},logout:function(){function e(){a.transitionToRoute("login")}$("#whole").css("margin-top","0px");var a=this;t.default.$.ajax({url:"/logout",type:"GET",success:function(t){e()},error:function(e){alert("error")}})},viewtask:function(){function e(){n.transitionToRoute("login")}var a=$("#selectmethod").val(),n=this;t.default.$.ajax({url:"/viewtask",type:"GET",data:{selmethod:a},dataType:"json",success:function(t){$("#tasktable").empty(),$("#welcome").empty();var a=$.parseJSON(JSON.stringify(t)),n=a[0].result,r=$.trim(n);if("loginfirst"==r)e();else if("NOtasksavailable"==r){var d=a[0].assigned;$("#welcome").append("Welcome "+d),console.log(a);var l=" ";l+="<h2>",l+="No tasks assigned to you at the moment",l+="</h2>",$("#tasktable").append(l)}else{var d=a[0].assigned;$("#welcome").append("Welcome "+d),console.log(a);var l=" ";l+='<table class="view">',l+="<tr><th>Task id</th> <th>Task Name</th> <th>Task Description</th>  <th>Task Createdtime</th> <th>Task Createdby</th> <th>Task Status</th> <th> change the status <br/>if completed</th></tr>";var i=1;$(a).each(function(e,t){var a=t.taskid,n=t.taskname,r=t.taskdescription,d=t.taskstatus,o=t.taskcreatedtime,p=t.taskcreatedby;l+='<tr id="rowremove">',l+='<td class="tid">'+a+"</td>",l+="<td>"+n+"</td>",l+="<td>"+r+"</td>",l+="<td>"+o+"</td>",l+="<td>"+p+"</td>",l+="<td>"+d+"</td>",l+='<td><select id="'+a+'"> <option value=""></option>   <option value="nottaken">Not taken</option>    <option value="completed">Completed</option></select></td>',l+="</tr>",i+=1}),l+="</table>",$("#tasktable").append(l)}},error:function(e){alert(e)}})},selection:function(){var e=this;$(".view").find("td.tid").each(function(e){var a=$(this).html(),n=$("#"+a).val(),r={tid:a,tstatus:n};"nottaken"!=n&&"completed"!=n||t.default.$.ajax({url:"/updatetask",type:"POST",data:r,success:function(e){function a(){r.transitionToRoute("login")}var n=$("#selectmethod").val(),r=this;t.default.$.ajax({url:"/viewtask",type:"GET",data:{selmethod:n},dataType:"json",success:function(e){$("#tasktable").empty(),$("#welcome").empty();var t=$.parseJSON(JSON.stringify(e)),n=t[0].result,r=$.trim(n);if("loginfirst"==r)a();else if("NOtasksavailable"==r){var d=t[0].assigned;$("#welcome").append("Welcome "+d),console.log(t);var l=" ";l+="<h2>",l+="No tasks assigned to you at the moment",l+="</h2>",$("#tasktable").append(l)}else{var d=t[0].assigned;$("#welcome").append("Welcome "+d),console.log(t);var l=" ";l+='<table class="view">',l+="<tr><th>Task id</th> <th>Task Name</th> <th>Task Description</th>  <th>Task Createdtime</th> <th>Task Createdby</th> <th>Task Status</th> <th> change the status <br/>if completed</th></tr>";var i=1;$(t).each(function(e,t){var a=t.taskid,n=t.taskname,r=t.taskdescription,d=t.taskstatus,o=t.taskcreatedtime,p=t.taskcreatedby;l+='<tr id="rowremove">',l+='<td class="tid">'+a+"</td>",l+="<td>"+n+"</td>",l+="<td>"+r+"</td>",l+="<td>"+o+"</td>",l+="<td>"+p+"</td>",l+="<td>"+d+"</td>",l+='<td><select id="'+a+'"> <option value=""></option>   <option value="nottaken">Not taken</option>    <option value="completed">Completed</option></select></td>',l+="</tr>",i+=1}),l+="</table>",$("#tasktable").append(l)}},error:function(e){alert(e)}})},error:function(e){alert(e)}})}),$("#whole").css("margin-top","-155px"),e.transitionToRoute("tasklist")}}})}),define("task/pods/tasklist/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("task/pods/tasklist/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:4,column:15},end:{line:4,column:45}},moduleName:"task/pods/tasklist/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("AddTasks");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"task/pods/tasklist/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","taskwhole");var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","welcome"),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","link");var r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("h3");e.setAttribute(n,"class","h3");var r=e.createTextNode("To view the tasks assigned to you");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","viewt"),e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","sel");var r=e.createElement("select");e.setAttribute(r,"id","selectmethod");var d=e.createTextNode(" ");e.appendChild(r,d);var d=e.createElement("option");e.setAttribute(d,"value","all");var l=e.createTextNode("All");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("   ");e.appendChild(r,d);var d=e.createElement("option");e.setAttribute(d,"value","nottaken");var l=e.createTextNode("Not taken");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("    ");e.appendChild(r,d);var d=e.createElement("option");e.setAttribute(d,"value","completed");var l=e.createTextNode("Completed");e.appendChild(d,l),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("   ");e.appendChild(n,r);var r=e.createElement("button");e.setAttribute(r,"id","but");var d=e.createTextNode("Viewtask");e.appendChild(r,d),e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","tasktable");var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","updatebutton");var r=e.createElement("button");e.setAttribute(r,"id","but");var d=e.createTextNode("update");e.appendChild(r,d),e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","logouttask");var n=e.createElement("button");e.setAttribute(n,"id","dow1");var r=e.createTextNode("Logout");e.appendChild(n,r),e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[1]),r=e.childAt(n,[8]),d=e.childAt(r,[0]),l=e.childAt(r,[2]),i=e.childAt(n,[12,0]),o=e.childAt(t,[3,0]),p=new Array(5);return p[0]=e.createMorphAt(e.childAt(n,[3]),0,0),p[1]=e.createAttrMorph(d,"onchange"),p[2]=e.createElementMorph(l),p[3]=e.createElementMorph(i),p[4]=e.createElementMorph(o),p},statements:[["block","link-to",["addtask"],[],0,null,["loc",[null,[4,15],[4,57]]]],["attribute","onchange",["subexpr","action",["report"],[],["loc",[null,[6,74],[6,93]]]]],["element","action",["viewtask"],[],["loc",[null,[6,256],[6,277]]]],["element","action",["selection"],[],["loc",[null,[9,31],[9,53]]]],["element","action",["logout"],[],["loc",[null,[11,29],[11,48]]]]],locals:[],templates:[e]}}())}),
define("task/router",["exports","ember","task/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType});n.map(function(){this.route("createaccount"),this.route("login"),this.route("tasklist"),this.route("addtask")}),e.default=n}),define("task/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:7,column:7},end:{line:7,column:32}},moduleName:"task/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Login");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:10,column:27},end:{line:10,column:61}},moduleName:"task/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Signup");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:18,column:0}},moduleName:"task/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n ");e.appendChild(t,a);var a=e.createElement("header"),n=e.createTextNode("\n            ");e.appendChild(a,n);var n=e.createElement("h1"),r=e.createTextNode("Task List Application");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n            ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","whole");var n=e.createTextNode("\n                                ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("Already an existing user!");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\t\t\t\t\t\t\t");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n                            ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("If you are a new User!");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n                            \n                           ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n\t\t\t\t\t\t   \n            ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\t\t\t ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n            ");e.appendChild(t,a);var a=e.createElement("footer"),n=e.createTextNode("\n               ");e.appendChild(a,n);var n=e.createElement("span"),r=e.createElement("h1"),d=e.createTextNode("Thank you for visiting us");e.appendChild(r,d),e.appendChild(n,r);var r=e.createElement("h2");e.setAttribute(r,"class","foot");var d=e.createTextNode("Copyrights @ Task");e.appendChild(r,d),e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode(" \n            ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[3]),r=new Array(3);return r[0]=e.createMorphAt(n,3,3),r[1]=e.createMorphAt(n,7,7),r[2]=e.createMorphAt(t,5,5,a),r},statements:[["block","link-to",["login"],[],0,null,["loc",[null,[7,7],[7,44]]]],["block","link-to",["createaccount"],[],1,null,["loc",[null,[10,27],[10,73]]]],["content","outlet",["loc",[null,[13,4],[13,14]]]]],locals:[],templates:[e,t]}}())}),define("task/config/environment",["ember"],function(e){try{var t="task/config/environment",a=e.default.$('meta[name="'+t+'"]').attr("content");return{default:JSON.parse(unescape(a))}}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("task/app").default.create({name:"task",version:"0.0.0+6bf5b4a8"});