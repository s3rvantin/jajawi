(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{229:function(e,t,n){var content=n(256);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("692a9dd0",content,!0,{sourceMap:!1})},255:function(e,t,n){"use strict";var o=n(229);n.n(o).a},256:function(e,t,n){(t=n(54)(!1)).push([e.i,'html{overflow:hidden}@-webkit-keyframes lightGradient{0%{background-position:43% 0}50%{background-position:58% 100%}to{background-position:43% 0}}@keyframes lightGradient{0%{background-position:43% 0}50%{background-position:58% 100%}to{background-position:43% 0}}@-webkit-keyframes darkGradient{0%{background-position:43% 0}50%{background-position:58% 100%}to{background-position:43% 0}}@keyframes darkGradient{0%{background-position:43% 0}50%{background-position:58% 100%}to{background-position:43% 0}}@keyframes fadeIn{50%{opacity:1}to{margin-top:-100px}}@-webkit-keyframes fadeIn{50%{opacity:1}to{margin-top:-100px}}.darkBG,.lightBG{width:100vw}.darkBG{background:linear-gradient(137deg,#2d1f3d,#614385,#516395,#6b82c2);background-size:800% 800%;color:#121829;-o-webkit-animation:darkGradient 11s ease infinite;-o-moz-animation:darkGradient 11s ease infinite;-webkit-animation:darkGradient 11s ease infinite;animation:darkGradient 11s ease infinite}.lightBG{background:linear-gradient(137deg,#ffc3a0,#ffafbd,#dd5e89);background-size:600% 600%;color:#4f3d3f;-o-webkit-animation:lightGradient 8s ease infinite;-o-moz-animation:lightGradient 8s ease infinite;-webkit-animation:lightGradient 8s ease infinite;animation:lightGradient 8s ease infinite}audio{display:none}.particles canvas{width:100%;height:100%;position:absolute}.main{height:100vh;display:flex;align-items:center;justify-content:center;flex-flow:column}.typing{font-family:"Lilita One",cursive;font-size:2.1rem;text-align:center;z-index:1}.vue-typed{min-height:4em}.quotes{font-family:"Montserrat",sans-serif;text-align:center;z-index:1}.quotes-main{font-size:1.1rem}.author{font-size:.7rem}.popup{display:block;text-align:center;width:100px;height:40px;position:absolute;margin-left:-50px;margin-top:-40px;background:transparent;-webkit-animation:fadeIn 1s linear;animation:fadeIn 1s linear;-o-webkit-animation:fadeIn linear 1s;-o-moz-animation:fadeIn linear 1s;opacity:0}',""]),e.exports=t},291:function(e,t,n){"use strict";n.r(t);var o=[{author:"yourboyfiend :)",quotes:"Whatever happens, keep breathing, and smile :)"},{author:"yourboyfiend :)",quotes:"hey stupid, i love you :)"},{author:"yourboyfiend :)",quotes:"Hey! I wuv chuuuu! UwU"},{author:"yourboyfiend :)",quotes:"I love you."},{author:"yourboyfiend :)",quotes:"I may not with you everyday, but I love you everyday."},{author:"yourboyfiend :)",quotes:"I love you."},{author:"yourboyfiend :)",quotes:"I'm sorry for loving you."}],r=["ivaa","driva","delen","nadelen driva"],d={evening:"Good Evening Syg",afternoon:"Good Afternoon Syg",day:"Good Day Syg",morning:"Good Morning Syg",night:"Good Night Syg"},l=(new Date).getHours();window.onNuxtReady((function(e){document.addEventListener("click",(function(e){var t,n=e.clientX,o=e.clientY,r=document.createElement("div");r.innerHTML="<h1>".concat((t=["♥","♥♥","♥♥♥"])[Math.floor(Math.random()*t.length)],"</h1>"),r.classList.add("popup"),r.style.left="".concat(n,"px"),r.style.top="".concat(o,"px"),document.body.appendChild(r),setTimeout((function(){r.style.display="none"}),3e3)}))}));var c={transition:"slide-x-transition",data:function(){return{nicknames:this.random(r),quotes:this.random(o),greetings:function(){return l>=18?d.evening:l>=15?d.afternoon:l>=11?d.day:l>=5?d.morning:l>=0?d.night:void 0},darkMode:function(){return l>=18||!(l>=15)&&(!(l>=11)&&(!(l>=5)&&(l>=0||void 0)))}}},methods:{random:function(e){return e[Math.floor(Math.random()*e.length)]}}},f=(n(255),n(39)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.darkMode()?"darkBG":"lightBG"},[n("vue-particles",{staticClass:"particles",attrs:{hoverMode:"grab",clickMode:"push",linesColor:"#dedede",shapeType:"circle",color:e.darkMode()?"#f5f5f5":"#171717",particleOpacity:.7,particlesNumber:30,particleSize:4,linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,clickEffect:!0}}),e._v(" "),n("div",{staticClass:"main"},[n("vue-typed-js",{staticClass:"vue-typed",attrs:{showCursor:!1,loop:!0,strings:[e.greetings()+", "+e.nicknames+"! ^5000","I always wanted to tell you... ^2500","I Love You >///<"],backDelay:500,typeSpeed:100,backSpeed:20,contentType:"null"}},[n("h1",{staticClass:"typing"})]),e._v(" "),n("h2",{staticClass:"quotes quotes-main"},[e._v(e._s(e.quotes.quotes))]),e._v(" "),n("h3",{staticClass:"quotes author"},[e._v(e._s(e.quotes.author))])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);