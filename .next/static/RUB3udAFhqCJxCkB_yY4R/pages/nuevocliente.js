(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{BsWD:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},KQm4:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("a3WO");var o=r("BsWD");function a(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},ODXe:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},RrE2:function(e,t,r){"use strict";r.r(t);var n,o,a=r("KQm4"),i=r("ODXe"),l=r("h4VS"),u=r("q1tI"),c=r.n(u),s=r("5Yp1"),d=r("KYPV"),f=r("UGp+"),p=r("UYTu"),h=r("pZLH"),m=r("nOHt"),v=c.a.createElement;function b(){b=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=x(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=u;var s={};function d(){}function f(){}function p(){}var h={};l(h,o,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(N([])));v&&v!==t&&r.call(v,o)&&(h=v);var y=p.prototype=d.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,l){var u=c(e[o],e,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,l(y,"constructor",p),l(p,"constructor",f),f.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),l(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),l(y,i,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var y=Object(p.a)(n||(n=Object(l.a)(["\n    mutation nuevoCliente($input: ClienteInput) {\n        nuevoCliente(input: $input) {\n            id\n            nombre\n            apellido\n            empresa\n            email\n            telefono\n        }\n    }\n"]))),g=Object(p.a)(o||(o=Object(l.a)(["\n    query obtenerClientesVendedor {\n        obtenerClientesVendedor {\n            id\n            nombre\n            apellido\n            empresa\n            email\n        }\n    }\n\n"])));t.default=function(){var e=Object(m.useRouter)(),t=Object(u.useState)(null),r=t[0],n=t[1],o=Object(h.a)(y,{update:function(e,t){var r=t.data.nuevoCliente,n=e.readQuery({query:g}).obtenerClientesVendedor;e.writeQuery({query:g,data:{obtenerClientesVendedor:[].concat(Object(a.a)(n),[r])}})}}),l=Object(i.a)(o,1)[0],c=Object(d.b)({initialValues:{nombre:"",apellido:"",empresa:"",email:"",telefono:""},validationSchema:f.b({nombre:f.c().required("El nombre del cliente es obligatorio"),apellido:f.c().required("El apellido del cliente es obligatorio"),empresa:f.c().required("El campo empresa  es obligatorio"),email:f.c().email("Email no v\xe1lido").required("El email del cliente es obligatorio")}),onSubmit:function(t){var r,o,a,i,u,c;return b().async((function(s){for(;;)switch(s.prev=s.next){case 0:return r=t.nombre,o=t.apellido,a=t.empresa,i=t.email,u=t.telefono,s.prev=1,s.next=4,b().awrap(l({variables:{input:{nombre:r,apellido:o,empresa:a,email:i,telefono:u}}}));case 4:c=s.sent,c.data,e.push("/"),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(1),n(s.t0.message.replace("GraphQL error: ","")),setTimeout((function(){n(null)}),2e3);case 13:case"end":return s.stop()}}),null,null,[[1,9]],Promise)}});return v(s.a,null,v("h1",{className:"text-2xl text-gray-800 font-light"},"Nuevo Cliente"),r&&v("div",{className:"bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto"},v("p",null,r)),v("div",{className:"flex justify-center mt-5"},v("div",{className:"w-full max-w-lg"},v("form",{className:"bg-white shadow-md px-8 pt-6 pb-8 mb-4",onSubmit:c.handleSubmit},v("div",{className:"mb-4"},v("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"nombre"},"Nombre"),v("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"nombre",type:"text",placeholder:"Nombre Cliente",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.nombre})),c.touched.nombre&&c.errors.nombre?v("div",{className:"my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"},v("p",{className:"font-bold"},"Error"),v("p",null,c.errors.nombre)):null,v("div",{className:"mb-4"},v("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"apellido"},"Apellido"),v("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"apellido",type:"text",placeholder:"Apellido Cliente",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.apellido})),c.touched.apellido&&c.errors.apellido?v("div",{className:"my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"},v("p",{className:"font-bold"},"Error"),v("p",null,c.errors.apellido)):null,v("div",{className:"mb-4"},v("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"empresa"},"Empresa"),v("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"empresa",type:"text",placeholder:"Empresa Cliente",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.empresa})),c.touched.empresa&&c.errors.empresa?v("div",{className:"my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"},v("p",{className:"font-bold"},"Error"),v("p",null,c.errors.empresa)):null,v("div",{className:"mb-4"},v("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email"},"Email"),v("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"email",placeholder:"Email Cliente",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.email})),c.touched.email&&c.errors.email?v("div",{className:"my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"},v("p",{className:"font-bold"},"Error"),v("p",null,c.errors.email)):null,v("div",{className:"mb-4"},v("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"telefono"},"Tel\xe9fono"),v("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"telefono",type:"tel",placeholder:"Tel\xe9fono Cliente",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.telefono})),v("input",{type:"submit",className:"bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900",value:"Registrar Cliente"})))))}},a3WO:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},fWwd:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nuevocliente",function(){return r("RrE2")}])},pZLH:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("zC+P"),o=r("q1tI"),a=r("g0nf"),i=r("qx2n"),l=r("v2L8"),u=r("PKC9"),c=r("6OIj");function s(e,t){var r=Object(c.a)(null===t||void 0===t?void 0:t.client);Object(l.b)(e,l.a.Mutation);var s=Object(o.useState)({called:!1,loading:!1,client:r}),d=s[0],f=s[1],p=Object(o.useRef)({result:d,mutationId:0,isMounted:!0,client:r,mutation:e,options:t});Object.assign(p.current,{client:r,options:t,mutation:e});var h=Object(o.useCallback)((function(e){void 0===e&&(e={});var t=p.current,r=t.client,o=t.options,l=t.mutation,c=Object(n.a)(Object(n.a)({},o),{mutation:l});p.current.result.loading||c.ignoreResults||f(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var s=++p.current.mutationId,d=Object(a.a)(c,e);return r.mutate(d).then((function(t){var n,o,a,l=t.data,c=t.errors,h=c&&c.length>0?new u.a({graphQLErrors:c}):void 0;if(s===p.current.mutationId&&!d.ignoreResults){var m={called:!0,loading:!1,data:l,error:h,client:r};p.current.isMounted&&!Object(i.a)(p.current.result,m)&&f(p.current.result=m)}return null===(o=null===(n=p.current.options)||void 0===n?void 0:n.onCompleted)||void 0===o||o.call(n,t.data),null===(a=e.onCompleted)||void 0===a||a.call(e,t.data),t})).catch((function(t){var n,o,a,l;if(s===p.current.mutationId&&p.current.isMounted){var u={loading:!1,error:t,data:void 0,called:!0,client:r};Object(i.a)(p.current.result,u)||f(p.current.result=u)}if((null===(n=p.current.options)||void 0===n?void 0:n.onError)||d.onError)return null===(a=null===(o=p.current.options)||void 0===o?void 0:o.onError)||void 0===a||a.call(o,t),null===(l=e.onError)||void 0===l||l.call(e,t),{data:void 0,errors:t};throw t}))}),[]),m=Object(o.useCallback)((function(){f({called:!1,loading:!1,client:r})}),[]);return Object(o.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[h,Object(n.a)({reset:m},d)]}}},[["fWwd",1,2,0,3,4,5,7]]]);