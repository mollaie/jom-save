(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"dFu+":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("ZZ/e"),e=u("603S"),i=u("n6ga"),s=u("utPD"),r=u("e0iR"),a=function(){function l(l,n,u,t,o){var e=this;this.platform=l,this.api=n,this.restApi=u,this.alert=t,this.dataTransaction=o,this.isDebug=!1,this.ErrorMessage="",this.Satisfy="",this.Model={Title:"",Body:"",NumberOfStars:1},this.isDebug=!l.is("cordova"),this.dataTransaction.getAccessToken().then(function(l){e.AccessToken=l.toString()}),this.Model.Title="",this.Model.Body=""}return l.prototype.ngOnInit=function(){},l.prototype.doChangeSatisfy=function(l){switch(this.Model.NumberOfStars=l,l){case 1:this.Satisfy="Angry";break;case 2:this.Satisfy="Sad";break;case 3:this.Satisfy="Happy";break;case 4:this.Satisfy="Love"}},l.prototype.doNext=function(){var l=this;this.isDebug?this.restApi.AddFeedback(this.Model.Title,this.Model.Body,this.Model.NumberOfStars,this.AccessToken).subscribe(function(n){var u=l.restApi.converResponseToJson(n);"0"==u.ErrorCode?l.alert.showErrorMessageAlert("Your Feedback is saved."):l.ErrorMessage=u.ErrorMessage}):this.api.AddFeedback(this.Model.Title,this.Model.Body,this.Model.NumberOfStars,this.AccessToken).then(function(n){if(200==n.status){var u=l.api.converResponseToJson(n.data);l.alert.showErrorMessageAlert("0"==u.ErrorCode?"Your Feedback is saved.":u.ErrorMessage)}}).catch(function(n){l.alert.showErrorMessageAlert(n)})},l}(),b=function(){return function(){}}(),c=u("pMnS"),d=u("oBZk"),p=u("gIcY"),h=t.nb({encapsulation:0,styles:[[""]],data:{}});function g(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,d.I,d.j)),t.ob(1,49152,null,0,o.C,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,d.X,d.y)),t.ob(3,49152,null,0,o.Cb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,2,"ion-title",[["class","text-center"]],null,null,null,d.V,d.w)),t.ob(5,49152,null,0,o.Ab,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["Feedback"])),(l()(),t.pb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.C,d.d)),t.ob(8,49152,null,0,o.m,[t.h,t.k],null,null),(l()(),t.pb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.zb(l,11).onClick(u)&&o),o},d.A,d.b)),t.ob(10,49152,null,0,o.h,[t.h,t.k],null,null),t.ob(11,16384,null,0,o.i,[[2,o.ib],o.Ib],null,null),(l()(),t.pb(12,0,null,null,42,"ion-content",[["padding",""]],null,null,null,d.E,d.f)),t.ob(13,49152,null,0,o.v,[t.h,t.k],null,null),(l()(),t.pb(14,0,null,0,40,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,35,"ion-grid",[],null,null,null,d.H,d.i)),t.ob(16,49152,null,0,o.B,[t.h,t.k],null,null),(l()(),t.pb(17,0,null,0,9,"ion-row",[],null,null,null,d.O,d.p)),t.ob(18,49152,null,0,o.jb,[t.h,t.k],null,null),(l()(),t.pb(19,0,null,0,7,"ion-col",[],null,null,null,d.D,d.e)),t.ob(20,49152,null,0,o.u,[t.h,t.k],null,null),(l()(),t.pb(21,0,null,0,5,"input",[["class","input"],["placeholder","Title"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0,e=l.component;return"input"===n&&(o=!1!==t.zb(l,22)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.zb(l,22).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.zb(l,22)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.zb(l,22)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(e.Model.Title=u)&&o),o},null,null)),t.ob(22,16384,null,0,p.b,[t.D,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.f,function(l){return[l]},[p.b]),t.ob(24,671744,null,0,p.i,[[8,null],[8,null],[8,null],[6,p.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,p.g,null,[p.i]),t.ob(26,16384,null,0,p.h,[[4,p.g]],null,null),(l()(),t.pb(27,0,null,0,9,"ion-row",[],null,null,null,d.O,d.p)),t.ob(28,49152,null,0,o.jb,[t.h,t.k],null,null),(l()(),t.pb(29,0,null,0,7,"ion-col",[],null,null,null,d.D,d.e)),t.ob(30,49152,null,0,o.u,[t.h,t.k],null,null),(l()(),t.pb(31,0,null,0,5,"textarea",[["class","input"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0,e=l.component;return"input"===n&&(o=!1!==t.zb(l,32)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.zb(l,32).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.zb(l,32)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.zb(l,32)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(e.Model.Body=u)&&o),o},null,null)),t.ob(32,16384,null,0,p.b,[t.D,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.f,function(l){return[l]},[p.b]),t.ob(34,671744,null,0,p.i,[[8,null],[8,null],[8,null],[6,p.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,p.g,null,[p.i]),t.ob(36,16384,null,0,p.h,[[4,p.g]],null,null),(l()(),t.pb(37,0,null,0,7,"ion-row",[],null,null,null,d.O,d.p)),t.ob(38,49152,null,0,o.jb,[t.h,t.k],null,null),(l()(),t.pb(39,0,null,0,5,"ion-col",[],null,null,null,d.D,d.e)),t.ob(40,49152,null,0,o.u,[t.h,t.k],null,null),(l()(),t.pb(41,0,null,0,0,"button",[["class","emoji-button angry"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.doChangeSatisfy(1)&&t),t},null,null)),(l()(),t.pb(42,0,null,0,0,"button",[["class","emoji-button sad"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.doChangeSatisfy(2)&&t),t},null,null)),(l()(),t.pb(43,0,null,0,0,"button",[["class","emoji-button happy"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.doChangeSatisfy(3)&&t),t},null,null)),(l()(),t.pb(44,0,null,0,0,"button",[["class","emoji-button love"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.doChangeSatisfy(4)&&t),t},null,null)),(l()(),t.pb(45,0,null,0,5,"ion-row",[],null,null,null,d.O,d.p)),t.ob(46,49152,null,0,o.jb,[t.h,t.k],null,null),(l()(),t.pb(47,0,null,0,3,"ion-col",[],null,null,null,d.D,d.e)),t.ob(48,49152,null,0,o.u,[t.h,t.k],null,null),(l()(),t.pb(49,0,null,0,1,"p",[["class","text-center"],["style","font-weight: bold;font-size:16px;"]],null,null,null,null,null)),(l()(),t.Fb(50,null,["",""])),(l()(),t.pb(51,0,null,null,3,"ion-fab-button",[["class","next-button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.doNext()&&t),t},d.G,d.h)),t.ob(52,49152,null,0,o.y,[t.h,t.k],null,null),(l()(),t.pb(53,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,d.J,d.k)),t.ob(54,49152,null,0,o.D,[t.h,t.k],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,24,0,u.Model.Title),l(n,34,0,u.Model.Body),l(n,54,0,"arrow-forward")},function(l,n){var u=n.component;l(n,21,0,t.zb(n,26).ngClassUntouched,t.zb(n,26).ngClassTouched,t.zb(n,26).ngClassPristine,t.zb(n,26).ngClassDirty,t.zb(n,26).ngClassValid,t.zb(n,26).ngClassInvalid,t.zb(n,26).ngClassPending),l(n,31,0,t.zb(n,36).ngClassUntouched,t.zb(n,36).ngClassTouched,t.zb(n,36).ngClassPristine,t.zb(n,36).ngClassDirty,t.zb(n,36).ngClassValid,t.zb(n,36).ngClassInvalid,t.zb(n,36).ngClassPending),l(n,50,0,u.Satisfy)})}function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-feedback",[],null,null,null,g,h)),t.ob(1,114688,null,0,a,[o.Jb,e.a,i.a,s.a,r.a],null,null)],function(l,n){l(n,1,0)},null)}var k=t.lb("app-feedback",a,f,{},{},[]),m=u("Ip0R"),v=u("ZYCi");u.d(n,"FeedbackPageModuleNgFactory",function(){return C});var C=t.mb(b,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[c.a,k]],[3,t.j],t.x]),t.xb(4608,m.l,m.k,[t.u,[2,m.s]]),t.xb(4608,p.n,p.n,[]),t.xb(4608,o.c,o.c,[t.z,t.g]),t.xb(4608,o.Hb,o.Hb,[o.c,t.j,t.q]),t.xb(4608,o.Kb,o.Kb,[o.c,t.j,t.q]),t.xb(1073742336,m.b,m.b,[]),t.xb(1073742336,p.l,p.l,[]),t.xb(1073742336,p.c,p.c,[]),t.xb(1073742336,o.Eb,o.Eb,[]),t.xb(1073742336,v.o,v.o,[[2,v.u],[2,v.n]]),t.xb(1073742336,b,b,[]),t.xb(1024,v.l,function(){return[[{path:"",component:a}]]},[])])})},utPD:function(l,n,u){"use strict";u.d(n,"a",function(){return i});var t=u("mrSG"),o=u("ZZ/e"),e=u("CcnG"),i=function(){function l(l,n){this.alertController=l,this.loadingCntroller=n}return l.prototype.showErrorMessageAlert=function(l){return t.b(this,void 0,void 0,function(){return t.e(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Jom-Save",message:l,buttons:["OK"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.ngInjectableDef=e.S({factory:function(){return new l(e.W(o.b),e.W(o.Gb))},token:l,providedIn:"root"}),l}()}}]);