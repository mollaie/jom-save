(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{SqUn:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=u("mrSG"),i=u("ZZ/e"),s=u("e0iR"),t=u("BoD5"),r=u("n6ga"),a=u("603S"),b=function(){function l(l,n,u,o,e,i,s){var t=this;this.dataTransaction=l,this.router=n,this.constantService=u,this.restApi=o,this.api=e,this.alertController=i,this.platform=s,this.Model={Phone:"",Email:""},this.isDebug=!1,this.ErrorMessage="",this.AccessToken="",l.getAccessToken().then(function(l){t.AccessToken=l}),this.isDebug=!s.is("cordova")}return l.prototype.ngOnInit=function(){var l=this;this.dataTransaction.getUserPhone().then(function(n){console.log(n),null!=n?l.Model.Phone=""+n:alert("phone does not exists")})},l.prototype.doCancel=function(){this.router.navigate(["auth-password"])},l.prototype.doNext=function(){var l=this;this.doValidate()&&(this.isDebug?this.restApi.RequestResetPassword(this.Model.Phone,this.Model.Email,this.AccessToken).subscribe(function(n){var u=l.restApi.converResponseToJson(n);"0"==u.ErrorCode?""==u.Data?l.ErrorMessage="this email is not registered with the <br/> mobile number.please check the <br/> email address above again.":l.showAlert("Your password has been sent to <br/> "+l.Model.Email+"."):l.ErrorMessage=u.ErrorMessage}):this.api.RequestResetPassword(""+this.Model.Phone,this.Model.Email,this.AccessToken).then(function(n){200==n.status&&(""==l.api.converResponseToJson(n.data).Data?l.ErrorMessage="this email is not registered with the <br/> mobile number.please check the <br/> email address above again.":l.showAlert("Your password has been sent to <br/> "+l.Model.Email+"."))}))},l.prototype.showAlert=function(l){return e.b(this,void 0,void 0,function(){var n=this;return e.e(this,function(u){switch(u.label){case 0:return[4,this.alertController.create({header:"JomSave",subHeader:"Reset Password",message:l,buttons:[{text:"Okay",handler:function(){n.router.navigate(["auth-password"])}}]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}})})},l.prototype.doValidate=function(){if(""!=this.Model.Email){var l=this.constantService.ValidateEmail(this.Model.Email);return this.ErrorMessage=l?"":"Input email is invalid",l}},l}(),c=function(){return function(){}}(),p=u("pMnS"),h=u("oBZk"),d=u("gIcY"),g=u("Ip0R"),k=u("ZYCi"),m=o.nb({encapsulation:0,styles:[[""]],data:{}});function z(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,5,"ion-row",[],null,null,null,h.U,h.s)),o.ob(1,49152,null,0,i.jb,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,3,"ion-col",[],null,null,null,h.G,h.e)),o.ob(3,49152,null,0,i.u,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,1,"p",[["class","error-message"]],null,null,null,null,null)),(l()(),o.Fb(5,null,["",""]))],null,function(l,n){l(n,5,0,n.component.ErrorMessage)})}function f(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,8,"ion-header",[["no-border",""]],null,null,null,h.M,h.k)),o.ob(1,49152,null,0,i.C,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,6,"ion-toolbar",[],null,null,null,h.db,h.B)),o.ob(3,49152,null,0,i.Cb,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.F,h.d)),o.ob(5,49152,null,0,i.m,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.zb(l,8).onClick(u)&&e),e},h.D,h.b)),o.ob(7,49152,null,0,i.h,[o.h,o.k],null,null),o.ob(8,16384,null,0,i.i,[[2,i.ib],i.Ib],null,null),(l()(),o.pb(9,0,null,null,68,"ion-content",[["class","no-scroll content-background"]],null,null,null,h.H,h.f)),o.ob(10,49152,null,0,i.v,[o.h,o.k],null,null),(l()(),o.pb(11,0,null,0,66,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.pb(12,0,null,null,65,"ion-grid",[],null,null,null,h.L,h.j)),o.ob(13,49152,null,0,i.B,[o.h,o.k],null,null),(l()(),o.pb(14,0,null,0,4,"ion-row",[],null,null,null,h.U,h.s)),o.ob(15,49152,null,0,i.jb,[o.h,o.k],null,null),(l()(),o.pb(16,0,null,0,2,"ion-col",[],null,null,null,h.G,h.e)),o.ob(17,49152,null,0,i.u,[o.h,o.k],null,null),(l()(),o.pb(18,0,null,0,0,"div",[["class","logo"]],null,null,null,null,null)),(l()(),o.pb(19,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(20,0,null,0,9,"ion-row",[],null,null,null,h.U,h.s)),o.ob(21,49152,null,0,i.jb,[o.h,o.k],null,null),(l()(),o.pb(22,0,null,0,1,"ion-col",[["size","1"]],null,null,null,h.G,h.e)),o.ob(23,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(24,0,null,0,3,"ion-col",[["size","10"]],null,null,null,h.G,h.e)),o.ob(25,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(26,0,null,0,1,"h3",[["class","text-center"]],null,null,null,null,null)),(l()(),o.Fb(27,null,["",""])),(l()(),o.pb(28,0,null,0,1,"ion-col",[["size","1"]],null,null,null,h.G,h.e)),o.ob(29,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(30,0,null,0,18,"ion-row",[],null,null,null,h.U,h.s)),o.ob(31,49152,null,0,i.jb,[o.h,o.k],null,null),(l()(),o.pb(32,0,null,0,1,"ion-col",[["size","1"]],null,null,null,h.G,h.e)),o.ob(33,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(34,0,null,0,12,"ion-col",[["size","10"]],null,null,null,h.G,h.e)),o.ob(35,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(36,0,null,0,10,"div",[["class","input-container"]],null,null,null,null,null)),(l()(),o.pb(37,0,null,null,5,"input",[["class","input-icon-password"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==o.zb(l,38)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.zb(l,38).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.zb(l,38)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.zb(l,38)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.Model.Email=u)&&e),e},null,null)),o.ob(38,16384,null,0,d.b,[o.D,o.k,[2,d.a]],null,null),o.Cb(1024,null,d.f,function(l){return[l]},[d.b]),o.ob(40,671744,null,0,d.i,[[8,null],[8,null],[8,null],[6,d.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Cb(2048,null,d.g,null,[d.i]),o.ob(42,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),o.pb(43,0,null,null,0,"img",[["class","input--icon"],["src","../../assets/images/icon-email.svg"]],null,null,null,null,null)),(l()(),o.pb(44,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.pb(45,0,null,null,1,"span",[["class","input-message"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["Please key in your email address "])),(l()(),o.pb(47,0,null,0,1,"ion-col",[["size","1"]],null,null,null,h.G,h.e)),o.ob(48,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(49,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.gb(16777216,null,0,1,null,z)),o.ob(51,16384,null,0,g.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(52,0,null,0,12,"ion-row",[],null,null,null,h.U,h.s)),o.ob(53,49152,null,0,i.jb,[o.h,o.k],null,null),(l()(),o.pb(54,0,null,0,1,"ion-col",[["size","3"]],null,null,null,h.G,h.e)),o.ob(55,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(56,0,null,0,6,"ion-col",[["size","6"]],null,null,null,h.G,h.e)),o.ob(57,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(58,0,null,0,4,"ion-button",[["color","success"],["expand","block"],["fill","outline"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doNext()&&o),o},h.E,h.c)),o.ob(59,49152,null,0,i.l,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),o.pb(60,0,null,0,1,"ion-icon",[["name","checkmark"]],null,null,null,h.N,h.l)),o.ob(61,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.Fb(-1,0,[" Confirm Reset"])),(l()(),o.pb(63,0,null,0,1,"ion-col",[["size","3"]],null,null,null,h.G,h.e)),o.ob(64,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(65,0,null,0,12,"ion-row",[],null,null,null,h.U,h.s)),o.ob(66,49152,null,0,i.jb,[o.h,o.k],null,null),(l()(),o.pb(67,0,null,0,1,"ion-col",[["size","3"]],null,null,null,h.G,h.e)),o.ob(68,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(69,0,null,0,6,"ion-col",[["size","6"]],null,null,null,h.G,h.e)),o.ob(70,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(71,0,null,0,4,"ion-button",[["color","danger"],["expand","block"],["fill","outline"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doCancel()&&o),o},h.E,h.c)),o.ob(72,49152,null,0,i.l,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),o.pb(73,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,h.N,h.l)),o.ob(74,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.Fb(-1,0,[" Cancel"])),(l()(),o.pb(76,0,null,0,1,"ion-col",[["size","3"]],null,null,null,h.G,h.e)),o.ob(77,49152,null,0,i.u,[o.h,o.k],{size:[0,"size"]},null)],function(l,n){var u=n.component;l(n,23,0,"1"),l(n,25,0,"10"),l(n,29,0,"1"),l(n,33,0,"1"),l(n,35,0,"10"),l(n,40,0,u.Model.Email),l(n,48,0,"1"),l(n,51,0,u.ErrorMessage),l(n,55,0,"3"),l(n,57,0,"6"),l(n,59,0,"success","block","outline"),l(n,61,0,"checkmark"),l(n,64,0,"3"),l(n,68,0,"3"),l(n,70,0,"6"),l(n,72,0,"danger","block","outline"),l(n,74,0,"close"),l(n,77,0,"3")},function(l,n){l(n,27,0,n.component.Model.Phone),l(n,37,0,o.zb(n,42).ngClassUntouched,o.zb(n,42).ngClassTouched,o.zb(n,42).ngClassPristine,o.zb(n,42).ngClassDirty,o.zb(n,42).ngClassValid,o.zb(n,42).ngClassInvalid,o.zb(n,42).ngClassPending)})}function v(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-forgot-password",[],null,null,null,f,m)),o.ob(1,114688,null,0,b,[s.a,k.n,t.a,r.a,a.a,i.b,i.Jb],null,null)],function(l,n){l(n,1,0)},null)}var w=o.lb("app-forgot-password",b,v,{},{},[]);u.d(n,"ForgotPasswordPageModuleNgFactory",function(){return M});var M=o.mb(c,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[p.a,w]],[3,o.j],o.x]),o.xb(4608,g.l,g.k,[o.u,[2,g.s]]),o.xb(4608,d.n,d.n,[]),o.xb(4608,i.c,i.c,[o.z,o.g]),o.xb(4608,i.Hb,i.Hb,[i.c,o.j,o.q]),o.xb(4608,i.Kb,i.Kb,[i.c,o.j,o.q]),o.xb(1073742336,g.b,g.b,[]),o.xb(1073742336,d.l,d.l,[]),o.xb(1073742336,d.c,d.c,[]),o.xb(1073742336,i.Eb,i.Eb,[]),o.xb(1073742336,k.o,k.o,[[2,k.u],[2,k.n]]),o.xb(1073742336,c,c,[]),o.xb(1024,k.l,function(){return[[{path:"",component:b}]]},[])])})}}]);