(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{RNiq:function(t,e,r){"use strict";r.r(e);var n,o,i=r("h4VS"),a=r("q1tI"),c=r.n(a),l=r("5Yp1"),u=r("ODXe"),s=r("PSD3"),h=r.n(s),f=r("UYTu"),d=r("pZLH"),p=r("nOHt"),m=r.n(p),y=c.a.createElement;function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var s={};function h(){}function f(){}function d(){}var p={};c(p,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==e&&r.call(y,o)&&(p=y);var w=d.prototype=h.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=d,c(w,"constructor",d),c(d,"constructor",f),f.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var w,g=Object(f.a)(n||(n=Object(i.a)(["\n    mutation eliminarCliente($id: ID!) {\n        eliminarCliente(id:$id) \n    }\n"]))),b=Object(f.a)(o||(o=Object(i.a)(["\n    query obtenerClientesVendedor {\n        obtenerClientesVendedor {\n            id\n            nombre\n            apellido\n            empresa\n            email\n        }\n    }\n\n"]))),x=function(t){var e=t.cliente,r=Object(d.a)(g,{update:function(t){var e=t.readQuery({query:b}).obtenerClientesVendedor;t.writeQuery({query:b,data:{obtenerClientesVendedor:e.filter((function(t){return t.id!==l}))}})}}),n=Object(u.a)(r,1)[0],o=e.nombre,i=e.apellido,a=e.empresa,c=e.email,l=e.id;return y("tr",null,y("td",{className:"border px-4 py-2"},o,"  ",i),y("td",{className:"border px-4 py-2"},a),y("td",{className:"border px-4 py-2"},c),y("td",{className:"border px-4 py-2"},y("button",{type:"button",className:"flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold",onClick:function(){h.a.fire({title:"\xbfDeseas eliminar a este cliente?",text:"Esta acci\xf3n no se puede deshacer",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Eliminar",cancelButtonText:"No, Cancelar"}).then((function(t){var e,r;return v().async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!t.value){o.next=12;break}return o.prev=1,o.next=4,v().awrap(n({variables:{id:l}}));case 4:e=o.sent,r=e.data,h.a.fire("Eliminado!",r.eliminarCliente,"success"),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(1),console.log(o.t0);case 12:case"end":return o.stop()}}),null,null,[[1,9]],Promise)}))}},"Eliminar",y("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",className:"w-4 h-4 ml-2"},y("path",{d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})))),y("td",{className:"border px-4 py-2"},y("button",{type:"button",className:"flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold",onClick:function(){m.a.push({pathname:"/editarcliente/[id]",query:{id:l}})}},"Editar",y("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",className:"w-4 h-4 ml-2"},y("path",{d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})))))},N=r("+TN3"),E=r("YFqc"),L=r.n(E),j=c.a.createElement,k=Object(f.a)(w||(w=Object(i.a)(["\n    query obtenerClientesVendedor {\n        obtenerClientesVendedor {\n            id\n            nombre\n            apellido\n            empresa\n            email\n        }\n    }\n"])));e.default=function(){var t=Object(p.useRouter)(),e=Object(N.a)(k),r=e.data,n=e.loading;e.error;return n?"Cargando....":r.obtenerClientesVendedor?j("div",null,j(l.a,null,j("h1",{className:"text-2xl text-gray-800 font-light"},"Clientes"),j(L.a,{href:"/nuevocliente"},j("a",{className:"bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold w-full lg:w-auto text-center"},"Nuevo Cliente")),j("div",{className:"overflow-x-scroll"},j("table",{className:"table-auto shadow-md mt-10 w-full w-lg"},j("thead",{className:"bg-gray-800"},j("tr",{className:"text-white"},j("th",{className:"w-1/5 py-2"},"Nombre"),j("th",{className:"w-1/5 py-2"},"Empresa"),j("th",{className:"w-1/5 py-2"},"Email"),j("th",{className:"w-1/5 py-2"},"Eliminar"),j("th",{className:"w-1/5 py-2"},"Editar"))),j("tbody",{className:"bg-white"},r.obtenerClientesVendedor.map((function(t){return j(x,{key:t.id,cliente:t})}))))))):t.push("/login")}},vlRD:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",1,2,0,3,4,6]]]);