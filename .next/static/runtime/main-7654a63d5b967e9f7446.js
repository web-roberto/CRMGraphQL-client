(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1ccW":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},BMP1:function(e,t,r){"use strict";var n=r("7KCV")(r("IKlv"));window.next=n,(0,n.default)().catch((function(e){console.error(e.message+"\n"+e.stack)}))},DqTX:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(){var e=null;return function(t){var r=e=Promise.resolve().then((function(){if(r===e){e=null;var n={};t.forEach((function(e){var t=n[e.type]||[];t.push(e),n[e.type]=t}));var a=n.title?n.title[0]:null,i="";if(a){var c=a.props.children;i="string"===typeof c?c:c.join("")}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]");0;for(var a=Number(n.content),i=[],c=0,u=n.previousElementSibling;c<a;c++,u=u.previousElementSibling)u.tagName.toLowerCase()===e&&i.push(u);var s=t.map(o).filter((function(e){for(var t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return r.insertBefore(e,n)})),n.content=(a-i.length+s.length).toString()}(e,n[e]||[])}))}}))}};var n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function o(e){var t=e.type,r=e.props,o=document.createElement(t);for(var a in r)if(r.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==r[a]){var i=n[a]||a.toLowerCase();o.setAttribute(i,r[a])}var c=r.children,u=r.dangerouslySetInnerHTML;return u?o.innerHTML=u.__html||"":c&&(o.textContent="string"===typeof c?c:c.join("")),o}},IKlv:function(e,t,r){"use strict";var n=r("/GRZ"),o=r("i2R6"),a=r("48fX"),i=r("tCBg"),c=r("T0f4"),u=r("zoAU");function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(T){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=u;var l={};function p(){}function d(){}function h(){}var v={};c(v,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(R([])));y&&y!==t&&r.call(y,o)&&(v=y);var g=h.prototype=p.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,c){var u=f(e[o],e,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function R(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=h,c(g,"constructor",h),c(h,"constructor",d),d.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(E.prototype),c(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(g),c(g,i,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:R(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var l=r("7KCV"),p=r("AroE");t.__esModule=!0,t.render=z,t.renderError=J,t.default=t.emitter=t.router=t.version=void 0;var d=p(r("1ccW")),h=(p(r("7KCV")),p(r("q1tI"))),v=p(r("i8i4")),m=p(r("DqTX")),y=r("nOHt"),g=p(r("dZ6Y")),w=r("g/15"),E=p(r("zmvN")),b=l(r("yLiY")),_=r("FYa8"),x=r("qOIg"),P=r("s4NR"),R=r("/jkW"),S=r("bGXG");"finally"in Promise.prototype||(Promise.prototype.finally=r("Z577"));var k=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=k;t.version="9.3.4";var L=k.props,T=k.err,C=k.page,N=k.query,I=k.buildId,A=k.assetPrefix,j=k.runtimeConfig,O=k.dynamicIds,M=k.isFallback,D=A||"";r.p=D+"/_next/",b.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:j||{}});var B=(0,w.getURL)(),G=new E.default(I,D),q=function(e){var t=u(e,2),r=t[0],n=t[1];return G.registerPage(r,n)};window.__NEXT_P&&window.__NEXT_P.map(q),window.__NEXT_P=[],window.__NEXT_P.push=q;var F,U,H,X,Y,Z,$=(0,m.default)(),K=document.getElementById("__next");t.router=U;var W=function(e){a(r,e);var t=f(r);function r(){return n(this,r),t.apply(this,arguments)}return o(r,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),U.isSsr&&(M||k.nextExport&&((0,R.isDynamicRoute)(U.pathname)||location.search)||L.__N_SSG&&location.search)&&U.replace(U.pathname+"?"+(0,P.stringify)((0,d.default)({},U.query,{},(0,P.parse)(location.search.substr(1)))),B,{_h:1,shallow:!M})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),r}(h.default.Component),V=(0,g.default)();t.emitter=V;function z(e){return s().async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.err){t.next=4;break}return t.next=3,s().awrap(J(e));case 3:return t.abrupt("return");case 4:return t.prev=4,t.next=7,s().awrap(ie(e));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(4),t.next=13,s().awrap(J((0,d.default)({},e,{err:t.t0})));case 13:case"end":return t.stop()}}),null,null,[[4,9]],Promise)}function J(e){var t,r,n,o,a,i;return s().async((function(c){for(;;)switch(c.prev=c.next){case 0:t=e.App,r=e.err,c.next=3;break;case 3:return console.error(r),c.next=7,s().awrap(G.loadPage("/_error"));case 7:if(n=c.sent,H=n.page,o=ae(t),a={Component:H,AppTree:o,router:U,ctx:{err:r,pathname:C,query:N,asPath:B,AppTree:o}},!e.props){c.next=15;break}c.t0=e.props,c.next=18;break;case 15:return c.next=17,s().awrap((0,w.loadGetInitialProps)(t,a));case 17:c.t0=c.sent;case 18:return i=c.t0,c.next=21,s().awrap(ie((0,d.default)({},e,{err:r,Component:H,props:i})));case 21:case"end":return c.stop()}}),null,null,null,Promise)}t.default=function(e){var r,n,o,a,i;return s().async((function(c){for(;;)switch(c.prev=c.next){case 0:return(void 0===e?{}:e).webpackHMR,c.next=4,s().awrap(G.loadPageScript("/_app"));case 4:return r=c.sent,n=r.page,o=r.mod,Y=n,o&&o.unstable_onPerformanceData&&(Z=function(e){var t=e.name,r=e.startTime,n=e.value,a=e.duration,i=e.entryType;o.unstable_onPerformanceData({name:t,startTime:r,value:n,duration:a,entryType:i})}),a=T,c.prev=10,c.next=14,s().awrap(G.loadPage(C));case 14:i=c.sent,X=i.page,c.next=20;break;case 20:c.next=25;break;case 22:c.prev=22,c.t0=c.catch(10),a=c.t0;case 25:if(!window.__NEXT_PRELOADREADY){c.next=28;break}return c.next=28,s().awrap(window.__NEXT_PRELOADREADY(O));case 28:return t.router=U=(0,y.createRouter)(C,N,B,{initialProps:L,pageLoader:G,App:Y,Component:X,wrapApp:ae,err:a,isFallback:M,subscription:function(e,t){z({App:t,Component:e.Component,props:e.props,err:e.err})}}),z({App:Y,Component:X,props:L,err:a}),c.abrupt("return",V);case 34:c.next=36;break;case 36:case"end":return c.stop()}}),null,null,[[10,22]],Promise)};var Q="function"===typeof v.default.hydrate;function ee(e,t){if(w.ST&&performance.mark("beforeRender"),Q?(v.default.hydrate(e,t,te),Q=!1):v.default.render(e,t,re),Z&&w.ST)try{(0,S.observeLayoutShift)(Z),(0,S.observeLargestContentfulPaint)(Z),(0,S.observePaint)(Z)}catch(r){window.addEventListener("load",(function(){performance.getEntriesByType("paint").forEach(Z)}))}}function te(){w.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),Z&&(performance.getEntriesByName("Next.js-hydration").forEach(Z),performance.getEntriesByName("beforeRender").forEach(Z)),ne())}function re(){if(w.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),Z&&(performance.getEntriesByName("Next.js-render").forEach(Z),performance.getEntriesByName("Next.js-route-change-to-render").forEach(Z)),ne())}}function ne(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)})),["Next.js-before-hydration","Next.js-hydration","Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)}))}function oe(e){var t=e.children;return h.default.createElement(W,{fn:function(e){return J({App:Y,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},h.default.createElement(x.RouterContext.Provider,{value:(0,y.makePublicRouterInstance)(U)},h.default.createElement(_.HeadManagerContext.Provider,{value:$},t)))}var ae=function(e){return function(t){var r=(0,d.default)({},t,{Component:X,err:T,router:U});return h.default.createElement(oe,null,h.default.createElement(e,r))}};function ie(e){var t,r,n,o,a,i,c,u,f,l,p;return s().async((function(v){for(;;)switch(v.prev=v.next){case 0:if(t=e.App,r=e.Component,n=e.props,o=e.err,n||!r||r===H||F.Component!==H){v.next=8;break}return i=(a=U).pathname,c=a.query,u=a.asPath,f=ae(t),l={router:U,AppTree:f,Component:H,ctx:{err:o,pathname:i,query:c,asPath:u,AppTree:f}},v.next=7,s().awrap((0,w.loadGetInitialProps)(t,l));case 7:n=v.sent;case 8:r=r||F.Component,n=n||F.props,p=(0,d.default)({},n,{Component:r,err:o,router:U}),F=p,V.emit("before-reactdom-render",{Component:r,ErrorComponent:H,appProps:p}),ee(h.default.createElement(oe,null,h.default.createElement(t,p)),K),V.emit("after-reactdom-render",{Component:r,ErrorComponent:H,appProps:p});case 16:case"end":return v.stop()}}),null,null,null,Promise)}},Z577:function(e,t){Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))}},bGXG:function(e,t,r){"use strict";function n(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return!(!self.PerformanceObserver||!PerformanceObserver.supportedEntryTypes)&&PerformanceObserver.supportedEntryTypes.includes(e)}t.__esModule=!0,t.observeLayoutShift=function(e){if(a("layout-shift")){var t=0,r=new PerformanceObserver((function(e){var r,o=n(e.getEntries());try{for(o.s();!(r=o.n()).done;){var a=r.value;a.hadRecentInput||(t+=a.value)}}catch(i){o.e(i)}finally{o.f()}}));r.observe({type:"layout-shift",buffered:!0}),document.addEventListener("visibilitychange",(function n(){"hidden"===document.visibilityState&&(r.takeRecords(),r.disconnect(),document.removeEventListener("visibilitychange",n,!0),e({name:"cumulative-layout-shift",value:t}))}),!0)}},t.observeLargestContentfulPaint=function(e){if(a("largest-contentful-paint")){var t;new PerformanceObserver((function(e){var r=e.getEntries(),n=r[r.length-1];t=n.renderTime||n.loadTime})).observe({type:"largest-contentful-paint",buffered:!0}),document.addEventListener("visibilitychange",(function r(){t&&"hidden"===document.visibilityState&&(document.removeEventListener("visibilitychange",r,!0),e({name:"largest-contentful-paint",value:t}))}),!0)}},t.observePaint=function(e){new PerformanceObserver((function(t){t.getEntries().forEach(e)})).observe({type:"paint",buffered:!0})}},yLiY:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n},t.setConfig=function(e){n=e}},zmvN:function(e,t,r){"use strict";var n=r("/GRZ"),o=r("i2R6"),a=r("AroE");t.__esModule=!0,t.default=void 0;var i=r("QmWs"),c=a(r("dZ6Y")),u=r("/jkW"),s=r("gguc"),f=r("YTqd");function l(e,t){try{return document.createElement("link").relList.supports(e)}catch(r){}}var p=l("preload")&&!l("prefetch")?"preload":"prefetch";document.createElement("script");function d(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'+e+'"');return"/"===(e=e.replace(/\/index$/,"/"))?e:e.replace(/\/$/,"")}function h(e,t,r){return new Promise((function(n,o,a){(a=document.createElement("link")).crossOrigin=void 0,a.href=e,a.rel=t,r&&(a.as=r),a.onload=n,a.onerror=o,document.head.appendChild(a)}))}var v=function(){function e(t,r){n(this,e),this.buildId=t,this.assetPrefix=r,this.pageCache={},this.pageRegisterEvents=(0,c.default)(),this.loadingRoutes={},this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(r){return r[e]&&r[e].map((function(e){return t.assetPrefix+"/_next/"+encodeURI(e)}))||[]}))}},{key:"getDataHref",value:function(e,t){var r,n=this,o=function(e){return n.assetPrefix+"/_next/data/"+n.buildId+("/"===e?"/index":e)+".json"},a=(0,i.parse)(e,!0),c=a.pathname,l=a.query,p=(0,i.parse)(t).pathname,h=d(c),v=(0,u.isDynamicRoute)(h);if(v){var m=(0,f.getRouteRegex)(h),y=m.groups,g=(0,s.getRouteMatcher)(m)(p)||l;r=h,Object.keys(y).every((function(e){var t=g[e],n=y[e].repeat;return n&&!Array.isArray(t)&&(t=[t]),e in g&&(r=r.replace("["+(n?"...":"")+e+"]",n?t.map(encodeURIComponent).join("/"):encodeURIComponent(t)))}))||(r="")}return v?r&&o(r):o(h)}},{key:"prefetchData",value:function(e,t){var r=this,n=d((0,i.parse)(e,!0).pathname);return this.promisedSsgManifest.then((function(o,a){return o.has(n)&&(a=r.getDataHref(e,t))&&!document.querySelector('link[rel="'+p+'"][href^="'+a+'"]')&&h(a,p,"fetch")}))}},{key:"loadPage",value:function(e){return this.loadPageScript(e)}},{key:"loadPageScript",value:function(e){var t=this;return e=d(e),new Promise((function(r,n){var o=t.pageCache[e];if(o){var a=o.error,i=o.page,c=o.mod;a?n(a):r({page:i,mod:c})}else t.pageRegisterEvents.on(e,(function o(a){var i=a.error,c=a.page,u=a.mod;t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],i?n(i):r({page:c,mod:u})})),document.querySelector('script[data-next-page="'+e+'"]')||t.loadingRoutes[e]||(t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(r){r.forEach((function(r){/\.js$/.test(r)&&!document.querySelector('script[src^="'+r+'"]')&&t.loadScript(r,e,!1),/\.css$/.test(r)&&!document.querySelector('link[rel=stylesheet][href^="'+r+'"]')&&h(r,"stylesheet").catch((function(){}))})),t.loadRoute(e)})))}))}},{key:"loadRoute",value:function(e){var t="/"===(e=d(e))?"/index.js":e+".js",r=this.assetPrefix+"/_next/static/"+encodeURIComponent(this.buildId)+"/pages"+encodeURI(t);this.loadScript(r,e,!0)}},{key:"loadScript",value:function(e,t,r){var n=this,o=document.createElement("script");o.crossOrigin=void 0,o.src=e,o.onerror=function(){var r=new Error("Error loading script "+e);r.code="PAGE_LOAD_ERROR",n.pageRegisterEvents.emit(t,{error:r})},document.body.appendChild(o)}},{key:"registerPage",value:function(e,t){var r=this;!function(){try{var n=t(),o={page:n.default||n,mod:n};r.pageCache[e]=o,r.pageRegisterEvents.emit(e,o)}catch(a){r.pageCache[e]={error:a},r.pageRegisterEvents.emit(e,{error:a})}}()}},{key:"prefetch",value:function(e,t){var r,n,o=this;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return Promise.resolve();if(t)n=e;else{var a=("/"===(e=d(e))?"/index":e)+".js";0,n=this.assetPrefix+"/_next/static/"+encodeURIComponent(this.buildId)+"/pages"+encodeURI(a)}return Promise.all(document.querySelector('link[rel="'+p+'"][href^="'+n+'"], script[data-next-page="'+e+'"]')?[]:[h(n,p,n.match(/\.css$/)?"style":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=v}},[["BMP1",1,2,0]]]);