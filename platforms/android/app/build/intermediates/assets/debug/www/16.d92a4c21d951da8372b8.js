(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"56ai":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var o=u("CcnG"),e=u("ZYCi"),t=function(){function l(l){this.router=l}return l.prototype.nextStep=function(l){switch(l){case"AddReferral":this.router.navigate(["referral"]);break;case"MakePayment":this.router.navigate(["top-up"]);break;case"CreatePassword":this.router.navigate(["change-password"]);break;case"VerifyEmail":this.router.navigate(["mail-confirmation"]);break;case"CompleteProfile":this.router.navigate(["complete-profile"]);break;case"VerifyProfile":this.router.navigate(["profile/profile/home"]);break;case"Password":this.router.navigate(["auth-password"]);break;case"Upline":break;default:this.router.navigate(["profile/profile/home"])}},l.ngInjectableDef=o.S({factory:function(){return new l(o.W(e.n))},token:l,providedIn:"root"}),l}()},gyJ7:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=u("ZYCi"),t=u("e0iR"),r=u("603S"),s=u("ZZ/e"),a=u("n6ga"),i=u("56ai"),c=u("utPD"),b=function(){function l(l,n,u,o,t,r,s){var a=this;this.router=l,this.dataTransaction=n,this.api=u,this.platform=o,this.restApi=t,this.routerProvider=r,this.alert=s,this.Model={Phone:"",Password:""},this.ErrorMessage="",this.isDebug=!1,l.events.subscribe(function(l){l instanceof e.d&&a.ngOnInit()}),this.isDebug=!o.is("cordova"),this.Model.Phone=this.dataTransaction.Phone}return l.prototype.ngOnInit=function(){""!=this.Model.Phone&&""!=this.dataTransaction.Phone||this.router.navigate(["auth-phone"])},l.prototype.doNext=function(){var l=this;this.isDebug?this.restApi.Login(""+this.Model.Phone,this.Model.Password,"FreeMember").subscribe(function(n){var u=l.restApi.converResponseToJson(n);"0"==u.ErrorCode?(l.dataTransaction.setUserPhone(l.Model.Phone),l.dataTransaction.setUserPassword(l.Model.Password),l.dataTransaction.setAccessToken(u.Data.NewAccessToken),l.dataTransaction.setNewRefreshToken(u.Data.NewRefreshToken),l.doGetProfile(u.Data.NewAccessToken),l.platform.is("cordova")&&l.doRegisterNotification(u.Data.NewAccessToken)):l.ErrorMessage=u.ErrorMessage},function(n){l.alert.showErrorMessageAlert(n)}):this.api.Login(""+this.Model.Phone,this.Model.Password,"FreeMember").then(function(n){if(200==n.status){var u=l.api.converResponseToJson(n.data);"0"==u.ErrorCode?(l.dataTransaction.setUserPhone(l.Model.Phone),l.dataTransaction.setUserPassword(l.Model.Password),l.dataTransaction.setAccessToken(u.Data.NewAccessToken),l.dataTransaction.setNewRefreshToken(u.Data.NewRefreshToken),l.doGetProfile(u.Data.NewAccessToken)):l.alert.showErrorMessageAlert(u.ErrorMessage)}}).catch(function(n){l.alert.showErrorMessageAlert(n)})},l.prototype.doGetProfile=function(l){var n=this;this.isDebug?this.restApi.GetProfile(l).subscribe(function(l){var u=n.restApi.converResponseToJson(l);"0"==u.ErrorCode?(n.dataTransaction.setProfile(u.Data),n.routerProvider.nextStep(u.Data.NextStep)):n.ErrorMessage=u.ErrorMessage},function(l){n.ErrorMessage=l}):this.api.GetProfile(l).then(function(l){if(200==l.status){var u=n.api.converResponseToJson(l.data);"0"==u.ErrorCode?(n.dataTransaction.setProfile(u.Data),n.routerProvider.nextStep(u.Data.NextStep)):n.alert.showErrorMessageAlert(u.ErrorMessage)}}).catch(function(l){return n.alert.showErrorMessageAlert(l)})},l.prototype.doRegisterNotification=function(l){var n=this;this.dataTransaction.GetToken().then(function(u){n.api.Register_Notification(u,l).then(function(l){})})},l.prototype.doForgotPassword=function(){this.router.navigate(["forgot-password"])},l.prototype.doCancel=function(){this.router.navigate(["auth-phone"])},l}(),d=function(){return function(){}}(),p=u("pMnS"),h=u("oBZk"),g=u("gIcY"),f=u("Ip0R"),k=u("yp2w"),m=u("uPsM"),v=o.nb({encapsulation:0,styles:[[""]],data:{}});function w(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"span",[["class","errormessage"],["color","danger"]],null,null,null,null,null)),(l()(),o.Fb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.ErrorMessage)})}function P(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,12,"ion-header",[["no-border",""]],null,null,null,h.J,h.k)),o.ob(1,49152,null,0,s.C,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,10,"ion-toolbar",[],null,null,null,h.X,h.y)),o.ob(3,49152,null,0,s.Cb,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,h.C,h.d)),o.ob(5,49152,null,0,s.m,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,1,"a",[["class","Login-Link"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doCancel()&&o),o},null,null)),(l()(),o.Fb(-1,null,["Login"])),(l()(),o.pb(8,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.C,h.d)),o.ob(9,49152,null,0,s.m,[o.h,o.k],null,null),(l()(),o.pb(10,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.zb(l,12).onClick(u)&&e),e},h.A,h.b)),o.ob(11,49152,null,0,s.h,[o.h,o.k],null,null),o.ob(12,16384,null,0,s.i,[[2,s.ib],s.Ib],null,null),(l()(),o.pb(13,0,null,null,61,"ion-content",[["class","no-scroll content-background"]],null,null,null,h.F,h.g)),o.ob(14,49152,null,0,s.v,[o.h,o.k],null,null),(l()(),o.pb(15,0,null,0,59,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.pb(16,0,null,null,6,"ion-grid",[],null,null,null,h.I,h.j)),o.ob(17,49152,null,0,s.B,[o.h,o.k],null,null),(l()(),o.pb(18,0,null,0,4,"ion-row",[],null,null,null,h.P,h.q)),o.ob(19,49152,null,0,s.jb,[o.h,o.k],null,null),(l()(),o.pb(20,0,null,0,2,"ion-col",[],null,null,null,h.E,h.f)),o.ob(21,49152,null,0,s.u,[o.h,o.k],null,null),(l()(),o.pb(22,0,null,0,0,"div",[["class","logo"]],null,null,null,null,null)),(l()(),o.pb(23,0,null,null,47,"ion-grid",[],null,null,null,h.I,h.j)),o.ob(24,49152,null,0,s.B,[o.h,o.k],null,null),(l()(),o.pb(25,0,null,0,20,"ion-row",[],null,null,null,h.P,h.q)),o.ob(26,49152,null,0,s.jb,[o.h,o.k],null,null),(l()(),o.pb(27,0,null,0,1,"ion-col",[["size","1"]],null,null,null,h.E,h.f)),o.ob(28,49152,null,0,s.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(29,0,null,0,14,"ion-col",[["size","10"]],null,null,null,h.E,h.f)),o.ob(30,49152,null,0,s.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(31,0,null,0,12,"div",[["class","input-container"]],null,null,null,null,null)),(l()(),o.pb(32,0,null,null,0,"img",[["class","input--icon"],["src","../../assets/images/icon-smart-phone.svg"]],null,null,null,null,null)),(l()(),o.pb(33,0,null,null,7,"input",[["class","input-icon"],["maxlength","12"],["type","tel"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==o.zb(l,34)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.zb(l,34).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.zb(l,34)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.zb(l,34)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.Model.Phone=u)&&e),e},null,null)),o.ob(34,16384,null,0,g.b,[o.D,o.k,[2,g.a]],null,null),o.ob(35,540672,null,0,g.d,[],{maxlength:[0,"maxlength"]},null),o.Cb(1024,null,g.e,function(l){return[l]},[g.d]),o.Cb(1024,null,g.f,function(l){return[l]},[g.b]),o.ob(38,671744,null,0,g.i,[[8,null],[6,g.e],[8,null],[6,g.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Cb(2048,null,g.g,null,[g.i]),o.ob(40,16384,null,0,g.h,[[4,g.g]],null,null),(l()(),o.pb(41,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.pb(42,0,null,null,1,"span",[["class","input-message"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["Please key in your mobile number "])),(l()(),o.pb(44,0,null,0,1,"ion-col",[["size","1"]],null,null,null,h.E,h.f)),o.ob(45,49152,null,0,s.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(46,0,null,0,24,"ion-row",[],null,null,null,h.P,h.q)),o.ob(47,49152,null,0,s.jb,[o.h,o.k],null,null),(l()(),o.pb(48,0,null,0,1,"ion-col",[["size","1"]],null,null,null,h.E,h.f)),o.ob(49,49152,null,0,s.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(50,0,null,0,18,"ion-col",[["size","10"]],null,null,null,h.E,h.f)),o.ob(51,49152,null,0,s.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(52,0,null,0,13,"div",[["class","input-container"]],null,null,null,null,null)),(l()(),o.pb(53,0,null,null,5,"input",[["class","input-icon-password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==o.zb(l,54)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.zb(l,54).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.zb(l,54)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.zb(l,54)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.Model.Password=u)&&e),e},null,null)),o.ob(54,16384,null,0,g.b,[o.D,o.k,[2,g.a]],null,null),o.Cb(1024,null,g.f,function(l){return[l]},[g.b]),o.ob(56,671744,null,0,g.i,[[8,null],[8,null],[8,null],[6,g.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Cb(2048,null,g.g,null,[g.i]),o.ob(58,16384,null,0,g.h,[[4,g.g]],null,null),(l()(),o.pb(59,0,null,null,0,"img",[["class","input--icon"],["src","../../assets/images/icon-change-login-password.svg"]],null,null,null,null,null)),(l()(),o.pb(60,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.pb(61,0,null,null,1,"span",[["class","input-message"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["Please key in your password "])),(l()(),o.pb(63,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,w)),o.ob(65,16384,null,0,f.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(66,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(67,0,null,0,1,"a",[["class","link"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doForgotPassword()&&o),o},null,null)),(l()(),o.Fb(-1,null,["Forgot Password"])),(l()(),o.pb(69,0,null,0,1,"ion-col",[["size","1"]],null,null,null,h.E,h.f)),o.ob(70,49152,null,0,s.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(71,0,null,null,3,"ion-fab-button",[["class","next-button"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doNext()&&o),o},h.H,h.i)),o.ob(72,49152,null,0,s.y,[o.h,o.k],{disabled:[0,"disabled"]},null),(l()(),o.pb(73,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,h.K,h.l)),o.ob(74,49152,null,0,s.D,[o.h,o.k],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,28,0,"1"),l(n,30,0,"10"),l(n,35,0,"12"),l(n,38,0,u.Model.Phone),l(n,45,0,"1"),l(n,49,0,"1"),l(n,51,0,"10"),l(n,56,0,u.Model.Password),l(n,65,0,""!=u.ErrorMessage),l(n,70,0,"1"),l(n,72,0,""==u.Model.Password),l(n,74,0,"arrow-forward")},function(l,n){l(n,33,0,o.zb(n,35).maxlength?o.zb(n,35).maxlength:null,o.zb(n,40).ngClassUntouched,o.zb(n,40).ngClassTouched,o.zb(n,40).ngClassPristine,o.zb(n,40).ngClassDirty,o.zb(n,40).ngClassValid,o.zb(n,40).ngClassInvalid,o.zb(n,40).ngClassPending),l(n,53,0,o.zb(n,58).ngClassUntouched,o.zb(n,58).ngClassTouched,o.zb(n,58).ngClassPristine,o.zb(n,58).ngClassDirty,o.zb(n,58).ngClassValid,o.zb(n,58).ngClassInvalid,o.zb(n,58).ngClassPending)})}function C(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,2,"app-auth-password",[],null,null,null,P,v)),o.Cb(512,null,r.a,r.a,[k.a,s.Jb,m.a]),o.ob(2,114688,null,0,b,[e.n,t.a,r.a,s.Jb,a.a,i.a,c.a],null,null)],function(l,n){l(n,2,0)},null)}var z=o.lb("app-auth-password",b,C,{},{},[]);u.d(n,"AuthPasswordPageModuleNgFactory",function(){return M});var M=o.mb(d,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[p.a,z]],[3,o.j],o.x]),o.xb(4608,f.l,f.k,[o.u,[2,f.s]]),o.xb(4608,g.m,g.m,[]),o.xb(4608,s.c,s.c,[o.z,o.g]),o.xb(4608,s.Hb,s.Hb,[s.c,o.j,o.q]),o.xb(4608,s.Kb,s.Kb,[s.c,o.j,o.q]),o.xb(1073742336,f.b,f.b,[]),o.xb(1073742336,g.k,g.k,[]),o.xb(1073742336,g.c,g.c,[]),o.xb(1073742336,s.Eb,s.Eb,[]),o.xb(1073742336,e.o,e.o,[[2,e.u],[2,e.n]]),o.xb(1073742336,d,d,[]),o.xb(1024,e.l,function(){return[[{path:"",component:b}]]},[])])})},utPD:function(l,n,u){"use strict";u.d(n,"a",function(){return r});var o=u("mrSG"),e=u("ZZ/e"),t=u("CcnG"),r=function(){function l(l,n){this.alertController=l,this.loadingCntroller=n}return l.prototype.showErrorMessageAlert=function(l){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Jom-Save",message:l,buttons:["OK"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.ngInjectableDef=t.S({factory:function(){return new l(t.W(e.b),t.W(e.Gb))},token:l,providedIn:"root"}),l}()}}]);