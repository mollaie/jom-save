(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{blbe:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=u("e0iR"),s=u("603S"),t=u("ZZ/e"),r=u("n6ga"),a=u("utPD"),i=function(){function l(l,n,u,o,e,s){var t=this;this.router=l,this.dataTransaction=n,this.api=u,this.platform=o,this.restApi=e,this.alert=s,this.ErrorMessage="",this.AccessToken="",this.isDebug=!1,this.Model={Phone:"",Password:"",NewPassword:"",ConfirmPassword:""},this.dataTransaction.getAccessToken().then(function(l){t.AccessToken=l}).catch(function(l){t.ErrorMessage="The system can not detect your corrent password. <br/> please log out and login again."}),this.isDebug=!o.is("cordova")}return l.prototype.ngOnInit=function(){var l=this;this.dataTransaction.getUserPhone().then(function(n){l.Model.Phone=n,l.dataTransaction.getUserPassword().then(function(n){l.Model.Password=n}).catch(function(n){l.ErrorMessage=n})}).catch(function(n){l.ErrorMessage=n})},l.prototype.doNext=function(){var l=this;if(this.doCheckPassword())if(this.isDebug)this.restApi.CreatePassword(this.Model.NewPassword,this.AccessToken).subscribe(function(n){"0"==n.ErrorCode?(alert("Your password has been changed"),l.router.navigate(["mail-confirmation"])):l.ErrorMessage=n.ErrorMessage});else{if(this.Model.NewPassword!=this.Model.ConfirmPassword)return void(this.ErrorMessage="The entered password and confirmation are equal.<br/> please check your entered values.");if(""==this.Model.Password)return void(this.ErrorMessage="The system can not detect your corrent password. <br/> please log out and login again.");this.api.CreatePassword(this.Model.NewPassword,this.AccessToken).then(function(n){if(200==n.status){var u=l.api.converResponseToJson(n.data);(u.ErrorCode="0")?(l.alert.showErrorMessageAlert("Your password has been changed"),l.router.navigate(["mail-confirmation"])):l.alert.showErrorMessageAlert(u.ErrorMessage)}}).catch(function(n){l.alert.showErrorMessageAlert(n)})}},l.prototype.doCheckPassword=function(){return this.ErrorMessage="",this.Model.NewPassword.length<8?(this.ErrorMessage="Your password's length must be at least 8.",!1):!this.Model.NewPassword.includes(this.Model.Phone)||(this.ErrorMessage="Password could not be a part of your phone number",!1)},l.prototype.doLogin=function(){this.router.navigate(["auth-phone"])},l}(),c=function(){return function(){}}(),b=u("pMnS"),d=u("oBZk"),p=u("gIcY"),g=u("Ip0R"),h=u("yp2w"),f=u("uPsM"),w=u("ZYCi"),m=o.nb({encapsulation:0,styles:[[""]],data:{}});function k(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,6,"ion-row",[],null,null,null,d.P,d.q)),o.ob(1,49152,null,0,t.jb,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,4,"ion-col",[],null,null,null,d.E,d.f)),o.ob(3,49152,null,0,t.u,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,2,"ion-item",[["color","danger"],["text-wrap",""]],null,null,null,d.L,d.m)),o.ob(5,49152,null,0,t.I,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.Fb(6,0,[" "," "]))],function(l,n){l(n,5,0,"danger")},function(l,n){l(n,6,0,n.component.ErrorMessage)})}function z(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,7,"ion-header",[["no-border",""]],null,null,null,d.J,d.k)),o.ob(1,49152,null,0,t.C,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,5,"ion-toolbar",[],null,null,null,d.X,d.y)),o.ob(3,49152,null,0,t.Cb,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,d.C,d.d)),o.ob(5,49152,null,0,t.m,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,1,"a",[["class","Login-Link"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doLogin()&&o),o},null,null)),(l()(),o.Fb(-1,null,["Login"])),(l()(),o.pb(8,0,null,null,57,"ion-content",[["class","no-scroll content-background"]],null,null,null,d.F,d.g)),o.ob(9,49152,null,0,t.v,[o.h,o.k],null,null),(l()(),o.pb(10,0,null,0,55,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.pb(11,0,null,null,50,"ion-grid",[],null,null,null,d.I,d.j)),o.ob(12,49152,null,0,t.B,[o.h,o.k],null,null),(l()(),o.pb(13,0,null,0,4,"ion-row",[],null,null,null,d.P,d.q)),o.ob(14,49152,null,0,t.jb,[o.h,o.k],null,null),(l()(),o.pb(15,0,null,0,2,"ion-col",[],null,null,null,d.E,d.f)),o.ob(16,49152,null,0,t.u,[o.h,o.k],null,null),(l()(),o.pb(17,0,null,0,0,"div",[["class","logo"]],null,null,null,null,null)),(l()(),o.pb(18,0,null,0,22,"ion-row",[],null,null,null,d.P,d.q)),o.ob(19,49152,null,0,t.jb,[o.h,o.k],null,null),(l()(),o.pb(20,0,null,0,1,"ion-col",[["size","1"]],null,null,null,d.E,d.f)),o.ob(21,49152,null,0,t.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(22,0,null,0,2,"ion-col",[["size","2"]],null,null,null,d.E,d.f)),o.ob(23,49152,null,0,t.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(24,0,null,0,0,"img",[["src","../../assets/images/icon-change-login-password.svg"]],null,null,null,null,null)),(l()(),o.pb(25,0,null,0,13,"ion-col",[["size","7"]],null,null,null,d.E,d.f)),o.ob(26,49152,null,0,t.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(27,0,null,0,5,"input",[["class","forgot-password-input"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,s=l.component;return"input"===n&&(e=!1!==o.zb(l,28)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.zb(l,28).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.zb(l,28)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.zb(l,28)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(s.Model.NewPassword=u)&&e),e},null,null)),o.ob(28,16384,null,0,p.b,[o.D,o.k,[2,p.a]],null,null),o.Cb(1024,null,p.f,function(l){return[l]},[p.b]),o.ob(30,671744,null,0,p.i,[[8,null],[8,null],[8,null],[6,p.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Cb(2048,null,p.g,null,[p.i]),o.ob(32,16384,null,0,p.h,[[4,p.g]],null,null),(l()(),o.pb(33,0,null,0,1,"span",[["class","forgot-password-span"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["Please key in your new password"])),(l()(),o.pb(35,0,null,0,3,"p",[["class","forgot-password-span"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,[" Password must be 8-20 characters,"])),(l()(),o.pb(37,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.Fb(-1,null,[" 1 letter, 1 CAPS. "])),(l()(),o.pb(39,0,null,0,1,"ion-col",[["size","2"]],null,null,null,d.E,d.f)),o.ob(40,49152,null,0,t.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(41,0,null,0,18,"ion-row",[],null,null,null,d.P,d.q)),o.ob(42,49152,null,0,t.jb,[o.h,o.k],null,null),(l()(),o.pb(43,0,null,0,1,"ion-col",[["size","1"]],null,null,null,d.E,d.f)),o.ob(44,49152,null,0,t.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(45,0,null,0,2,"ion-col",[["size","2"]],null,null,null,d.E,d.f)),o.ob(46,49152,null,0,t.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(47,0,null,0,0,"img",[["src","../../assets/images/icon-confirm-password.svg"]],null,null,null,null,null)),(l()(),o.pb(48,0,null,0,9,"ion-col",[["size","7"]],null,null,null,d.E,d.f)),o.ob(49,49152,null,0,t.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(50,0,null,0,5,"input",[["class","forgot-password-input"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,s=l.component;return"input"===n&&(e=!1!==o.zb(l,51)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.zb(l,51).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.zb(l,51)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.zb(l,51)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(s.Model.ConfirmPassword=u)&&e),"change"===n&&(e=!1!==s.doCheckPassword&&e),e},null,null)),o.ob(51,16384,null,0,p.b,[o.D,o.k,[2,p.a]],null,null),o.Cb(1024,null,p.f,function(l){return[l]},[p.b]),o.ob(53,671744,null,0,p.i,[[8,null],[8,null],[8,null],[6,p.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Cb(2048,null,p.g,null,[p.i]),o.ob(55,16384,null,0,p.h,[[4,p.g]],null,null),(l()(),o.pb(56,0,null,0,1,"span",[["class","forgot-password-span"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["Please confirm your password"])),(l()(),o.pb(58,0,null,0,1,"ion-col",[["size","2"]],null,null,null,d.E,d.f)),o.ob(59,49152,null,0,t.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,k)),o.ob(61,16384,null,0,g.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(62,0,null,null,3,"ion-fab-button",[["class","next-button"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doNext()&&o),o},d.H,d.i)),o.ob(63,49152,null,0,t.y,[o.h,o.k],null,null),(l()(),o.pb(64,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,d.K,d.l)),o.ob(65,49152,null,0,t.D,[o.h,o.k],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,21,0,"1"),l(n,23,0,"2"),l(n,26,0,"7"),l(n,30,0,u.Model.NewPassword),l(n,40,0,"2"),l(n,44,0,"1"),l(n,46,0,"2"),l(n,49,0,"7"),l(n,53,0,u.Model.ConfirmPassword),l(n,59,0,"2"),l(n,61,0,""!=u.ErrorMessage),l(n,65,0,"arrow-forward")},function(l,n){l(n,27,0,o.zb(n,32).ngClassUntouched,o.zb(n,32).ngClassTouched,o.zb(n,32).ngClassPristine,o.zb(n,32).ngClassDirty,o.zb(n,32).ngClassValid,o.zb(n,32).ngClassInvalid,o.zb(n,32).ngClassPending),l(n,50,0,o.zb(n,55).ngClassUntouched,o.zb(n,55).ngClassTouched,o.zb(n,55).ngClassPristine,o.zb(n,55).ngClassDirty,o.zb(n,55).ngClassValid,o.zb(n,55).ngClassInvalid,o.zb(n,55).ngClassPending)})}function C(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,2,"app-change-password",[],null,null,null,z,m)),o.Cb(512,null,s.a,s.a,[h.a,t.Jb,f.a]),o.ob(2,114688,null,0,i,[w.n,e.a,s.a,t.Jb,r.a,a.a],null,null)],function(l,n){l(n,2,0)},null)}var P=o.lb("app-change-password",i,C,{},{},[]);u.d(n,"ChangePasswordPageModuleNgFactory",function(){return M});var M=o.mb(c,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[b.a,P]],[3,o.j],o.x]),o.xb(4608,g.l,g.k,[o.u,[2,g.s]]),o.xb(4608,p.m,p.m,[]),o.xb(4608,t.c,t.c,[o.z,o.g]),o.xb(4608,t.Hb,t.Hb,[t.c,o.j,o.q]),o.xb(4608,t.Kb,t.Kb,[t.c,o.j,o.q]),o.xb(1073742336,g.b,g.b,[]),o.xb(1073742336,p.k,p.k,[]),o.xb(1073742336,p.c,p.c,[]),o.xb(1073742336,t.Eb,t.Eb,[]),o.xb(1073742336,w.o,w.o,[[2,w.u],[2,w.n]]),o.xb(1073742336,c,c,[]),o.xb(1024,w.l,function(){return[[{path:"",component:i}]]},[])])})},utPD:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var o=u("mrSG"),e=u("ZZ/e"),s=u("CcnG"),t=function(){function l(l,n){this.alertController=l,this.loadingCntroller=n}return l.prototype.showErrorMessageAlert=function(l){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Jom-Save",message:l,buttons:["OK"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.ngInjectableDef=s.S({factory:function(){return new l(s.W(e.b),s.W(e.Gb))},token:l,providedIn:"root"}),l}()}}]);