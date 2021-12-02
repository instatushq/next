module.exports=(()=>{var __webpack_modules__={287:(__unused_webpack_module,exports)=>{var indexOf=function(e,r){if(e.indexOf)return e.indexOf(r);else for(var t=0;t<e.length;t++){if(e[t]===r)return t}return-1};var Object_keys=function(e){if(Object.keys)return Object.keys(e);else{var r=[];for(var t in e)r.push(t);return r}};var forEach=function(e,r){if(e.forEach)return e.forEach(r);else for(var t=0;t<e.length;t++){r(e[t],t,e)}};var defineProp=function(){try{Object.defineProperty({},"_",{});return function(e,r,t){Object.defineProperty(e,r,{writable:true,enumerable:false,configurable:true,value:t})}}catch(e){return function(e,r,t){e[r]=t}}}();var globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];function Context(){}Context.prototype={};var Script=exports.Script=function NodeScript(e){if(!(this instanceof Script))return new Script(e);this.code=e};Script.prototype.runInContext=function(e){if(!(e instanceof Context)){throw new TypeError("needs a 'context' argument.")}var r=document.createElement("iframe");if(!r.style)r.style={};r.style.display="none";document.body.appendChild(r);var t=r.contentWindow;var n=t.eval,o=t.execScript;if(!n&&o){o.call(t,"null");n=t.eval}forEach(Object_keys(e),function(r){t[r]=e[r]});forEach(globals,function(r){if(e[r]){t[r]=e[r]}});var c=Object_keys(t);var a=n.call(t,this.code);forEach(Object_keys(t),function(r){if(r in e||indexOf(c,r)===-1){e[r]=t[r]}});forEach(globals,function(r){if(!(r in e)){defineProp(e,r,t[r])}});document.body.removeChild(r);return a};Script.prototype.runInThisContext=function(){return eval(this.code)};Script.prototype.runInNewContext=function(e){var r=Script.createContext(e);var t=this.runInContext(r);if(e){forEach(Object_keys(r),function(t){e[t]=r[t]})}return t};forEach(Object_keys(Script.prototype),function(e){exports[e]=Script[e]=function(r){var t=Script(r);return t[e].apply(t,[].slice.call(arguments,1))}});exports.isContext=function(e){return e instanceof Context};exports.createScript=function(e){return exports.Script(e)};exports.createContext=Script.createContext=function(e){var r=new Context;if(typeof e==="object"){forEach(Object_keys(e),function(t){r[t]=e[t]})}return r}}};var __webpack_module_cache__={};function __nccwpck_require__(e){if(__webpack_module_cache__[e]){return __webpack_module_cache__[e].exports}var r=__webpack_module_cache__[e]={exports:{}};var t=true;try{__webpack_modules__[e](r,r.exports,__nccwpck_require__);t=false}finally{if(t)delete __webpack_module_cache__[e]}return r.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(287)})();