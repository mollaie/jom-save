(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{y8fh:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=function(){return function(){}}(),t=u("pMnS"),a=u("oBZk"),i=u("ZZ/e"),b=u("Ip0R"),c=u("ZYCi"),r=u("e0iR"),h=function(){function l(l,n){var u=this;this.router=l,this.data=n,this.showSplash=!0,this.isClicked=!1,setTimeout(function(){u.showSplash=!1},500),this.routerSubscription=this.router.events.subscribe(function(l){u.data.shouldNavigate&&l instanceof c.d&&"/profile/profile/menu"!=l.url&&u.isClicked&&(u.isClicked=!1,u.router.navigateByUrl("profile/profile/menu"))})}return l.prototype.ngOnInit=function(){},l.prototype.onClick=function(l){this.data.shouldNavigate=!0,this.isClicked=!0},l.prototype.onOtherPageClick=function(l){this.data.page=1,this.data.shouldNavigate=!1},l}(),d=o.nb({encapsulation:0,styles:[[""]],data:{}});function p(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,16,"div",[["class","splash"]],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,15,"ion-grid",[],null,null,null,a.L,a.j)),o.ob(2,49152,null,0,i.B,[o.h,o.k],null,null),(l()(),o.pb(3,0,null,0,4,"ion-row",[],null,null,null,a.U,a.s)),o.ob(4,49152,null,0,i.jb,[o.h,o.k],null,null),(l()(),o.pb(5,0,null,0,2,"ion-col",[["class","text-center"]],null,null,null,a.G,a.e)),o.ob(6,49152,null,0,i.u,[o.h,o.k],null,null),(l()(),o.pb(7,0,null,0,0,"img",[["src","../assets/images/jomsave_logo.svg"]],null,null,null,null,null)),(l()(),o.pb(8,0,null,0,8,"ion-row",[],null,null,null,a.U,a.s)),o.ob(9,49152,null,0,i.jb,[o.h,o.k],null,null),(l()(),o.pb(10,0,null,0,6,"ion-col",[["class","text-center"]],null,null,null,a.G,a.e)),o.ob(11,49152,null,0,i.u,[o.h,o.k],null,null),(l()(),o.pb(12,0,null,0,4,"div",[["class","lds-ellipsis"]],null,null,null,null,null)),(l()(),o.pb(13,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),o.pb(14,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),o.pb(15,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),o.pb(16,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}function s(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,39,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],function(l,n,u){var e=!0;return"ionTabButtonClick"===n&&(e=!1!==o.zb(l,1).select(u.detail.tab)&&e),e},a.Z,a.x)),o.ob(1,49152,null,1,i.wb,[i.Ib],null,null),o.Db(335544320,1,{tabBar:0}),(l()(),o.pb(3,0,null,1,36,"ion-tab-bar",[["class","tab-bar"],["slot","bottom"]],null,null,null,a.X,a.v)),o.ob(4,49152,[[1,4]],0,i.ub,[o.h,o.k],null,null),(l()(),o.pb(5,0,null,0,6,"ion-tab-button",[["tab","home"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onOtherPageClick(u)&&o),o},a.Y,a.w)),o.ob(6,49152,null,0,i.vb,[o.h,o.k],{tab:[0,"tab"]},null),(l()(),o.pb(7,0,null,0,1,"ion-icon",[["name","home"]],null,null,null,a.N,a.l)),o.ob(8,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.pb(9,0,null,0,2,"ion-label",[],null,null,null,a.R,a.p)),o.ob(10,49152,null,0,i.O,[o.h,o.k],null,null),(l()(),o.Fb(-1,0,["Home"])),(l()(),o.pb(12,0,null,0,6,"ion-tab-button",[["tab","deals"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onOtherPageClick(u)&&o),o},a.Y,a.w)),o.ob(13,49152,null,0,i.vb,[o.h,o.k],{tab:[0,"tab"]},null),(l()(),o.pb(14,0,null,0,1,"ion-icon",[["name","star"]],null,null,null,a.N,a.l)),o.ob(15,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.pb(16,0,null,0,2,"ion-label",[],null,null,null,a.R,a.p)),o.ob(17,49152,null,0,i.O,[o.h,o.k],null,null),(l()(),o.Fb(-1,0,["Deals"])),(l()(),o.pb(19,0,null,0,6,"ion-tab-button",[["tab","wallet"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onOtherPageClick(u)&&o),o},a.Y,a.w)),o.ob(20,49152,null,0,i.vb,[o.h,o.k],{tab:[0,"tab"]},null),(l()(),o.pb(21,0,null,0,1,"ion-icon",[["name","wallet"]],null,null,null,a.N,a.l)),o.ob(22,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.pb(23,0,null,0,2,"ion-label",[],null,null,null,a.R,a.p)),o.ob(24,49152,null,0,i.O,[o.h,o.k],null,null),(l()(),o.Fb(-1,0,["Wallet"])),(l()(),o.pb(26,0,null,0,6,"ion-tab-button",[["tab","notification"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onOtherPageClick(u)&&o),o},a.Y,a.w)),o.ob(27,49152,null,0,i.vb,[o.h,o.k],{tab:[0,"tab"]},null),(l()(),o.pb(28,0,null,0,1,"ion-icon",[["name","notifications"]],null,null,null,a.N,a.l)),o.ob(29,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.pb(30,0,null,0,2,"ion-label",[],null,null,null,a.R,a.p)),o.ob(31,49152,null,0,i.O,[o.h,o.k],null,null),(l()(),o.Fb(-1,0,["Notifications"])),(l()(),o.pb(33,0,null,0,6,"ion-tab-button",[["tab","menu"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onClick(u)&&o),o},a.Y,a.w)),o.ob(34,49152,null,0,i.vb,[o.h,o.k],{tab:[0,"tab"]},null),(l()(),o.pb(35,0,null,0,1,"ion-icon",[["name","menu"]],null,null,null,a.N,a.l)),o.ob(36,49152,null,0,i.D,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.pb(37,0,null,0,2,"ion-label",[],null,null,null,a.R,a.p)),o.ob(38,49152,null,0,i.O,[o.h,o.k],null,null),(l()(),o.Fb(-1,0,["Menu"]))],function(l,n){l(n,6,0,"home"),l(n,8,0,"home"),l(n,13,0,"deals"),l(n,15,0,"star"),l(n,20,0,"wallet"),l(n,22,0,"wallet"),l(n,27,0,"notification"),l(n,29,0,"notifications"),l(n,34,0,"menu"),l(n,36,0,"menu")},null)}function m(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,5,"ion-content",[],null,null,null,a.H,a.f)),o.ob(1,49152,null,0,i.v,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,p)),o.ob(3,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,s)),o.ob(5,16384,null,0,b.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.showSplash),l(n,5,0,!u.showSplash)},null)}function f(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-profile",[],null,null,null,m,d)),o.ob(1,114688,null,0,h,[c.n,r.a],null,null)],function(l,n){l(n,1,0)},null)}var k=o.lb("app-profile",h,f,{},{},[]),g=u("gIcY"),w=function(){return function(){}}();u.d(n,"ProfilePageModuleNgFactory",function(){return C});var C=o.mb(e,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[t.a,k]],[3,o.j],o.x]),o.xb(4608,b.l,b.k,[o.u,[2,b.s]]),o.xb(4608,g.n,g.n,[]),o.xb(4608,i.c,i.c,[o.z,o.g]),o.xb(4608,i.Hb,i.Hb,[i.c,o.j,o.q]),o.xb(4608,i.Kb,i.Kb,[i.c,o.j,o.q]),o.xb(1073742336,b.b,b.b,[]),o.xb(1073742336,g.l,g.l,[]),o.xb(1073742336,g.c,g.c,[]),o.xb(1073742336,i.Eb,i.Eb,[]),o.xb(1073742336,c.o,c.o,[[2,c.u],[2,c.n]]),o.xb(1073742336,w,w,[]),o.xb(1073742336,e,e,[]),o.xb(1024,c.l,function(){return[[{path:"profile",component:h,children:[{path:"home",children:[{path:"",loadChildren:"./home/home.module#HomePageModule"}]},{path:"deals",children:[{path:"",loadChildren:"./deals/deals.module#DealsPageModule"}]},{path:"wallet",children:[{path:"",loadChildren:"./wallet/wallet.module#WalletPageModule"},{path:"wallet-history",loadChildren:"./wallet-history/wallet-history.module#WalletHistoryPageModule"},{path:"my-network",loadChildren:"./my-network/my-network.module#MyNetworkPageModule"}]},{path:"menu",children:[{path:"",loadChildren:"./menu/menu.module#MenuPageModule"},{path:"setting",loadChildren:"./setting/setting.module#SettingPageModule"},{path:"feedback",loadChildren:"./feedback/feedback.module#FeedbackPageModule"},{path:"complaints",loadChildren:"./complaints/complaints.module#ComplaintsPageModule"},{path:"account-information",loadChildren:"./account-information/account-information.module#AccountInformationPageModule"},{path:"change-password",loadChildren:"./change-password/change-password.module#ChangePasswordPageModule"},{path:"bank-information",loadChildren:"./bank-information/bank-information.module#BankInformationPageModule"},{path:"location",loadChildren:"./location/location.module#LocationPageModule"},{path:"change-number",loadChildren:"./change-number/change-number.module#ChangeNumberPageModule"}]},{path:"notification",children:[{path:"",loadChildren:"./notification/notification.module#NotificationPageModule"}]}]},{path:"",redirectTo:"profile",pathMatch:"full"}]]},[])])})}}]);