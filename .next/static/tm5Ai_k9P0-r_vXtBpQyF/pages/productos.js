(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{HGzH:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos",function(){return r("KPrw")}])},KPrw:function(t,e,r){"use strict";r.r(e);var n,o,i=r("h4VS"),a=r("q1tI"),c=r.n(a),u=r("5Yp1"),s=r("ODXe"),l=r("PSD3"),h=r.n(l),f=r("UYTu"),d=r("pZLH"),p=r("nOHt"),y=r.n(p),v=c.a.createElement;function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=u;var l={};function h(){}function f(){}function d(){}var p={};c(p,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(P([])));v&&v!==e&&r.call(v,o)&&(p=v);var w=d.prototype=h.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=d,c(w,"constructor",d),c(d,"constructor",f),f.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var w,g=Object(f.a)(n||(n=Object(i.a)(["\n    mutation eliminarProducto($id: ID!) {\n        eliminarProducto(id: $id) \n    }\n"]))),b=Object(f.a)(o||(o=Object(i.a)(["\n  query obtenerProductos {\n      obtenerProductos {\n          id\n          nombre\n          precio\n          existencia\n      }\n  }\n"]))),x=function(t){var e=t.producto,r=e.nombre,n=e.precio,o=e.existencia,i=e.id,a=Object(d.a)(g,{update:function(t){var e=t.readQuery({query:b}).obtenerProductos;t.writeQuery({query:b,data:{obtenerProductos:e.filter((function(t){return t.id!==i}))}})}}),c=Object(s.a)(a,1)[0];return v("tr",null,v("td",{className:"border px-4 py-2"},r," "),v("td",{className:"border px-4 py-2"},o," Piezas"),v("td",{className:"border px-4 py-2"},"$ ",n," "),v("td",{className:"border px-4 py-2"},v("button",{type:"button",className:"flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold",onClick:function(){h.a.fire({title:"\xbfDeseas eliminar a este producto?",text:"Esta acci\xf3n no se puede deshacer",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Eliminar",cancelButtonText:"No, Cancelar"}).then((function(t){var e,r;return m().async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.value){n.next=12;break}return n.prev=1,n.next=4,m().awrap(c({variables:{id:i}}));case 4:e=n.sent,r=e.data,h.a.fire("Correcto",r.eliminarProducto,"success"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),null,null,[[1,9]],Promise)}))}},"Eliminar",v("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",className:"w-4 h-4 ml-2"},v("path",{d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})))),v("td",{className:"border px-4 py-2"},v("button",{type:"button",className:"flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold",onClick:function(){return console.log("click"),void y.a.push({pathname:"/editarproducto/[id]",query:{id:i}})}},"Editar",v("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",className:"w-4 h-4 ml-2"},v("path",{d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})))))},L=r("+TN3"),N=r("YFqc"),E=r.n(N),P=c.a.createElement,k=Object(f.a)(w||(w=Object(i.a)(["\n  query obtenerProductos {\n      obtenerProductos {\n          id\n          nombre\n          precio\n          existencia\n      }\n  }\n"])));e.default=function(){var t=Object(L.a)(k),e=t.data,r=t.loading;t.error;return r?"cargando...":P("div",null,P(u.a,null,P("h1",{className:"text-2xl text-gray-800 font-light"},"Productos"),P(E.a,{href:"/nuevoproducto"},P("a",{className:"bg-blue-800 py-2 px-5 mt-3 inline-block text-white hover:bg-gray-800 hover:text-gray-200 mb-3 rounded uppercase font-bold text-sm"},"Nuevo Producto")),P("table",{className:"table-auto shadow-md mt-10 w-full w-lg"},P("thead",{className:"bg-gray-800"},P("tr",{className:"text-white"},P("th",{className:"w-1/5 py-2"},"Nombre"),P("th",{className:"w-1/5 py-2"},"Existencia"),P("th",{className:"w-1/5 py-2"},"Precio"),P("th",{className:"w-1/5 py-2"},"Eliminar"),P("th",{className:"w-1/5 py-2"},"Editar"))),P("tbody",{className:"bg-white"},e.obtenerProductos.map((function(t){return P(x,{key:t.id,producto:t})}))))))}}},[["HGzH",1,2,0,3,4,6]]]);