(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{nTAs:function(n,t,e){"use strict";e.r(t),e.d(t,"IonRippleEffect",function(){return a});var i=e("B5Ai"),a=function(){function n(){this.type="bounded"}return n.prototype.addRipple=function(n,t){return i.a(this,void 0,void 0,function(){var e=this;return i.c(this,function(i){return[2,new Promise(function(i){e.queue.read(function(){var a=e.el.getBoundingClientRect(),c=a.width,s=a.height,f=Math.sqrt(c*c+s*s),u=Math.max(s,c),l=e.unbounded?u:f+o,p=Math.floor(u*r),m=l/p,d=n-a.left,b=t-a.top;e.unbounded&&(d=.5*c,b=.5*s);var w=d-.5*p,y=b-.5*p,g=.5*c-d,h=.5*s-b;e.queue.write(function(){var n=e.win.document.createElement("div");n.classList.add("ripple-effect");var t=n.style;t.top=y+"px",t.left=w+"px",t.width=t.height=p+"px",t.setProperty("--final-scale",""+m),t.setProperty("--translate-end",g+"px, "+h+"px"),(e.el.shadowRoot||e.el).appendChild(n),setTimeout(function(){i(function(){!function(n){n.classList.add("fade-out"),setTimeout(function(){n.remove()},200)}(n)})},325)})})})]})})},Object.defineProperty(n.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!0,configurable:!0}),n.prototype.hostData=function(){return{role:"presentation",class:{unbounded:this.unbounded}}},Object.defineProperty(n,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{addRipple:{method:!0},el:{elementRef:!0},queue:{context:"queue"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-ripple-effect-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}.unbounded.sc-ion-ripple-effect-h{contain:layout size style}.ripple-effect.sc-ion-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out.sc-ion-ripple-effect{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"},enumerable:!0,configurable:!0}),n}(),o=10,r=.5}}]);