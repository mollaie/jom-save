(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ZG4G:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=u("mrSG"),t=u("e0iR"),s=u("BoD5"),i=u("603S"),a=u("ZZ/e"),r=u("n6ga"),b=u("utPD"),c=function(){function l(l,n,u,o,e,t,s){this.router=l,this.dataTransaction=n,this.api=u,this.platform=o,this.restApi=e,this.loadingCtrl=t,this.alert=s,this.Model={Phone:"",Password:"",Resouses:{PhoneIcon:"",WorldPicture:""}},this.isDebug=!1,this.ErrorMessage="",this.isDebug=!o.is("cordova")}return l.prototype.ngOnInit=function(){var l=this;this.Model.Phone="",this.Model.Resouses.WorldPicture=s.a.WorldMap_Picture,this.Model.Resouses.PhoneIcon=s.a.icon_smart_phone,this.dataTransaction.getUserPhone().then(function(n){null==n&&l.dataTransaction.setUserPhone("11111111111")})},l.prototype.doLogin=function(){this.router.navigate(["auth-password"])},l.prototype.doRegister=function(){var l=this;this.dataTransaction.getUserPhone().then(function(n){null!=n&&""!=n&&"11111111111"!=n&&l.router.navigate(["signup"])})},l.prototype.doNext=function(){return e.b(this,void 0,void 0,function(){var l,n=this;return e.e(this,function(u){switch(u.label){case 0:return[4,this.loadingCtrl.create({spinner:"dots",duration:5e3,message:"Please Wait ..."})];case 1:return[4,(l=u.sent()).present()];case 2:return u.sent(),this.isDebug?this.restApi.IsMobileRgistered("60"+this.Model.Phone).subscribe(function(u){l.dismiss(),"0"==n.restApi.converResponseToJson(u).Data.IsRegistered?(n.dataTransaction.setUserPhone(n.Model.Phone),n.doRegister()):(n.dataTransaction.setUserPhone(n.Model.Phone),n.doLogin())}):this.api.IsMobileRgistered("+60"+this.Model.Phone).then(function(u){l.dismiss(),200==u.status?"0"==n.api.converResponseToJson(u.data).Data.IsRegistered?(n.dataTransaction.setUserPhone(n.Model.Phone),n.doRegister()):(n.dataTransaction.setUserPhone(n.Model.Phone),n.doLogin()):n.alert.showErrorMessageAlert(u.error)}).catch(function(l){n.alert.showErrorMessageAlert(l)}),[2]}})})},l.prototype.doForgotPassword=function(){},l}(),d=function(){return function(){}}(),h=u("pMnS"),g=u("oBZk"),p=u("gIcY"),f=u("Ip0R"),y=u("yp2w"),w=u("uPsM"),v=u("ZYCi"),P=o.nb({encapsulation:0,styles:[[""]],data:{}});function m(l){return o.Db(0,[(l()(),o.pb(0,0,null,null,10,"ion-row",[],null,null,null,g.S,g.s)),o.ob(1,49152,null,0,a.jb,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,8,"ion-col",[],null,null,null,g.F,g.f)),o.ob(3,49152,null,0,a.u,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,6,"ion-textarea",[["style","width: 100%;word-wrap: break-word"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,t=l.component;return"ionBlur"===n&&(e=!1!==o.yb(l,5)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==o.yb(l,5)._handleInputEvent(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.ErrorMessage=u)&&e),e},g.Y,g.y)),o.ob(5,16384,null,0,a.Nb,[o.k],null,null),o.zb(1024,null,p.f,function(l){return[l]},[a.Nb]),o.ob(7,671744,null,0,p.i,[[8,null],[8,null],[8,null],[6,p.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.zb(2048,null,p.g,null,[p.i]),o.ob(9,16384,null,0,p.h,[[4,p.g]],null,null),o.ob(10,49152,null,0,a.yb,[o.h,o.k],{rows:[0,"rows"]},null)],function(l,n){l(n,7,0,n.component.ErrorMessage),l(n,10,0,10)},function(l,n){l(n,4,0,o.yb(n,9).ngClassUntouched,o.yb(n,9).ngClassTouched,o.yb(n,9).ngClassPristine,o.yb(n,9).ngClassDirty,o.yb(n,9).ngClassValid,o.yb(n,9).ngClassInvalid,o.yb(n,9).ngClassPending)})}function C(l){return o.Db(0,[(l()(),o.pb(0,0,null,null,5,"ion-header",[["no-border",""]],null,null,null,g.K,g.k)),o.ob(1,49152,null,0,a.C,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,3,"ion-toolbar",[],null,null,null,g.Z,g.z)),o.ob(3,49152,null,0,a.Cb,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,1,"ion-buttons",[],null,null,null,g.D,g.d)),o.ob(5,49152,null,0,a.m,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,null,37,"ion-content",[["class","no-scroll"]],null,null,null,g.G,g.g)),o.ob(7,49152,null,0,a.v,[o.h,o.k],null,null),(l()(),o.pb(8,0,null,0,35,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.pb(9,0,null,null,30,"ion-grid",[],null,null,null,g.J,g.j)),o.ob(10,49152,null,0,a.B,[o.h,o.k],null,null),(l()(),o.pb(11,0,null,0,4,"ion-row",[],null,null,null,g.S,g.s)),o.ob(12,49152,null,0,a.jb,[o.h,o.k],null,null),(l()(),o.pb(13,0,null,0,2,"ion-col",[],null,null,null,g.F,g.f)),o.ob(14,49152,null,0,a.u,[o.h,o.k],null,null),(l()(),o.pb(15,0,null,0,0,"div",[["class","logo"]],null,null,null,null,null)),(l()(),o.pb(16,0,null,0,21,"ion-row",[],null,null,null,g.S,g.s)),o.ob(17,49152,null,0,a.jb,[o.h,o.k],null,null),(l()(),o.pb(18,0,null,0,1,"ion-col",[["size","1"]],null,null,null,g.F,g.f)),o.ob(19,49152,null,0,a.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(20,0,null,0,15,"ion-col",[["size","10"]],null,null,null,g.F,g.f)),o.ob(21,49152,null,0,a.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(22,0,null,0,13,"div",[["class","input-container"]],null,null,null,null,null)),(l()(),o.pb(23,0,null,null,0,"img",[["class","input--icon"],["src","../../assets/images/icon-smart-phone.svg"]],null,null,null,null,null)),(l()(),o.pb(24,0,null,null,1,"span",[["class","input-content"]],null,null,null,null,null)),(l()(),o.Cb(-1,null,["60"])),(l()(),o.pb(26,0,null,null,6,"input",[["class","input-icon"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==o.yb(l,27)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.yb(l,27).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.yb(l,27)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.yb(l,27)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==o.yb(l,28).onChange(u.target.value)&&e),"input"===n&&(e=!1!==o.yb(l,28).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==o.yb(l,28).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(t.Model.Phone=u)&&e),e},null,null)),o.ob(27,16384,null,0,p.b,[o.D,o.k,[2,p.a]],null,null),o.ob(28,16384,null,0,p.k,[o.D,o.k],null,null),o.zb(1024,null,p.f,function(l,n){return[l,n]},[p.b,p.k]),o.ob(30,671744,null,0,p.i,[[8,null],[8,null],[8,null],[6,p.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.zb(2048,null,p.g,null,[p.i]),o.ob(32,16384,null,0,p.h,[[4,p.g]],null,null),(l()(),o.pb(33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.pb(34,0,null,null,1,"span",[["class","input-message"]],null,null,null,null,null)),(l()(),o.Cb(-1,null,["Please key in your mobile number "])),(l()(),o.pb(36,0,null,0,1,"ion-col",[["size","1"]],null,null,null,g.F,g.f)),o.ob(37,49152,null,0,a.u,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,m)),o.ob(39,16384,null,0,f.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(40,0,null,null,3,"ion-fab-button",[["class","next-button"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doNext()&&o),o},g.I,g.i)),o.ob(41,49152,null,0,a.y,[o.h,o.k],{disabled:[0,"disabled"]},null),(l()(),o.pb(42,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,g.L,g.l)),o.ob(43,49152,null,0,a.D,[o.h,o.k],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,19,0,"1"),l(n,21,0,"10"),l(n,30,0,u.Model.Phone),l(n,37,0,"1"),l(n,39,0,u.ErrorMessage),l(n,41,0,""==u.Model.Phone),l(n,43,0,"arrow-forward")},function(l,n){l(n,26,0,o.yb(n,32).ngClassUntouched,o.yb(n,32).ngClassTouched,o.yb(n,32).ngClassPristine,o.yb(n,32).ngClassDirty,o.yb(n,32).ngClassValid,o.yb(n,32).ngClassInvalid,o.yb(n,32).ngClassPending)})}function M(l){return o.Db(0,[(l()(),o.pb(0,0,null,null,2,"app-auth-phone",[],null,null,null,C,P)),o.zb(512,null,i.a,i.a,[y.a,a.Jb,w.a]),o.ob(2,114688,null,0,c,[v.n,t.a,i.a,a.Jb,r.a,a.Gb,b.a],null,null)],function(l,n){l(n,2,0)},null)}var k=o.lb("app-auth-phone",c,M,{},{},[]);u.d(n,"AuthPhonePageModuleNgFactory",function(){return z});var z=o.mb(d,[],function(l){return o.vb([o.wb(512,o.j,o.bb,[[8,[h.a,k]],[3,o.j],o.x]),o.wb(4608,f.k,f.j,[o.u,[2,f.r]]),o.wb(4608,p.l,p.l,[]),o.wb(4608,a.c,a.c,[o.z,o.g]),o.wb(4608,a.Hb,a.Hb,[a.c,o.j,o.q]),o.wb(4608,a.Kb,a.Kb,[a.c,o.j,o.q]),o.wb(1073742336,f.b,f.b,[]),o.wb(1073742336,p.j,p.j,[]),o.wb(1073742336,p.c,p.c,[]),o.wb(1073742336,a.Eb,a.Eb,[]),o.wb(1073742336,v.o,v.o,[[2,v.u],[2,v.n]]),o.wb(1073742336,d,d,[]),o.wb(1024,v.l,function(){return[[{path:"",component:c}]]},[])])})}}]);