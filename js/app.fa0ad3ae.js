(function(e){function n(n){for(var c,r,o=n[0],d=n[1],h=n[2],i=0,f=[];i<o.length;i++)r=o[i],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&f.push(u[r][0]),u[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,h||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==u[o]&&(c=!1)}c&&(a.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},r={app:0},u={app:0},a=[];function o(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-047aeb86":"a4297cbe","chunk-116143d1":"07d00bfa","chunk-5050242a":"1b9446ba","chunk-44563e4a":"f3002a49","chunk-80612ce4":"f0208157","chunk-b1e0f92c":"dc9894d8","chunk-2d0ced7d":"1c513e57","chunk-8dd0a98e":"ec72e46c","chunk-5181d2ca":"14fe7b96","chunk-52b22f9a":"77bdba88","chunk-5a557b24":"a47f7b2a","chunk-883abc04":"ee16f75a","chunk-b5cf892a":"a210002d","chunk-c474b0ec":"2de76de7","chunk-dd2262c0":"7b59f653","chunk-e6c79ee6":"3a30c9c0"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-047aeb86":1,"chunk-116143d1":1,"chunk-44563e4a":1,"chunk-80612ce4":1,"chunk-b1e0f92c":1,"chunk-8dd0a98e":1,"chunk-5181d2ca":1,"chunk-e6c79ee6":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-047aeb86":"ca646dae","chunk-116143d1":"49b2197b","chunk-5050242a":"31d6cfe0","chunk-44563e4a":"ee277f6e","chunk-80612ce4":"e1f11255","chunk-b1e0f92c":"132455d6","chunk-2d0ced7d":"31d6cfe0","chunk-8dd0a98e":"46a093f0","chunk-5181d2ca":"fd959bf5","chunk-52b22f9a":"31d6cfe0","chunk-5a557b24":"31d6cfe0","chunk-883abc04":"31d6cfe0","chunk-b5cf892a":"31d6cfe0","chunk-c474b0ec":"31d6cfe0","chunk-dd2262c0":"31d6cfe0","chunk-e6c79ee6":"4c60c8aa"}[e]+".css",u=d.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var h=a[o],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===c||i===u))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){h=f[o],i=h.getAttribute("data-href");if(i===c||i===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],l.parentNode.removeChild(l),t(a)},l.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=a);var h,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=o(e);var f=new Error;h=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}u[e]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:i})}),12e4);i.onerror=i.onload=h,document.head.appendChild(i)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/weeksixcli/",d.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=n,h=h.slice();for(var f=0;f<h.length;f++)n(h[f]);var l=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var c=t("7a23"),r=(t("7b17"),t("bc3a")),u=t.n(r),a=t("2106"),o=t.n(a);function d(e,n){var t=Object(c["D"])("router-view");return Object(c["u"])(),Object(c["e"])(t)}const h={};h.render=d;var i=h,f=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),l=[{path:"/",component:function(){return t.e("chunk-116143d1").then(t.bind(null,"bb51"))},children:[{path:"",component:function(){return t.e("chunk-e6c79ee6").then(t.bind(null,"d504"))}},{path:"products",name:"產品列表",component:function(){return Promise.all([t.e("chunk-5050242a"),t.e("chunk-b1e0f92c"),t.e("chunk-8dd0a98e")]).then(t.bind(null,"e6dc"))}},{path:"products-lazy",name:"單一產品列表",component:function(){return Promise.all([t.e("chunk-5050242a"),t.e("chunk-b1e0f92c"),t.e("chunk-2d0ced7d")]).then(t.bind(null,"60d1"))}},{path:"cart",name:"購物車列表",component:function(){return t.e("chunk-5181d2ca").then(t.bind(null,"b789"))}},{path:"product/:id",name:"產品細節",component:function(){return t.e("chunk-047aeb86").then(t.bind(null,"d2f1"))}}]},{path:"/login",component:function(){return t.e("chunk-883abc04").then(t.bind(null,"a55b"))}},{path:"/admin",component:function(){return t.e("chunk-dd2262c0").then(t.bind(null,"7277"))},children:[{path:"products",name:"後台產品",component:function(){return Promise.all([t.e("chunk-5050242a"),t.e("chunk-44563e4a")]).then(t.bind(null,"1fae"))}},{path:"usercart",name:"後台購物車",component:function(){return t.e("chunk-5a557b24").then(t.bind(null,"44d7"))}},{path:"order",name:"後台訂單",component:function(){return Promise.all([t.e("chunk-5050242a"),t.e("chunk-80612ce4")]).then(t.bind(null,"4a6a"))}},{path:"product/:productId",name:"單一產品",component:function(){return t.e("chunk-b5cf892a").then(t.bind(null,"18cd"))}},{path:"checkout/:orderId",name:"確定結帳頁面",component:function(){return t.e("chunk-52b22f9a").then(t.bind(null,"090f"))}},{path:"coupons",name:"優惠券",component:function(){return t.e("chunk-c474b0ec").then(t.bind(null,"9097"))}}]}],b=Object(f["a"])({history:Object(f["b"])(),routes:l}),p=b,s=t("8a14"),k=(t("fe26"),t("7bb1")),m=t("3aa8"),v=t("cbdf"),g=t("9457");Object.keys(m["a"]).forEach((function(e){Object(k["e"])(e,m["a"][e])})),Object(k["d"])({generateMessage:Object(v["a"])({zh_TW:g}),validateOnInput:!0}),Object(v["b"])("zh_TW");var y=Object(c["d"])(i);y.use(p),y.use(o.a,u.a),y.component("Loading",s["a"]),y.component("Form",k["c"]),y.component("Field",k["b"]),y.component("ErrorMessage",k["a"]),y.mount("#app")}});
//# sourceMappingURL=app.fa0ad3ae.js.map