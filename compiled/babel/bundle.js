    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(e);function buildGlobal(e){const r=t().identifier("babelHelpers");const n=[];const i=t().functionExpression(null,[t().identifier("global")],t().blockStatement(n));const a=t().program([t().expressionStatement(t().callExpression(i,[t().conditionalExpression(t().binaryExpression("===",t().unaryExpression("typeof",t().identifier("global")),t().stringLiteral("undefined")),t().identifier("self"),t().identifier("global"))]))]);n.push(t().variableDeclaration("var",[t().variableDeclarator(r,t().assignmentExpression("=",t().memberExpression(t().identifier("global"),r),t().objectExpression([])))]));buildHelpers(n,r,e);return a}function buildModule(e){const r=[];const n=buildHelpers(r,null,e);r.unshift(t().exportNamedDeclaration(null,Object.keys(n).map(e=>{return t().exportSpecifier(t().cloneNode(n[e]),t().identifier(e))})));return t().program(r,[],"module")}function buildUmd(e){const r=t().identifier("babelHelpers");const n=[];n.push(t().variableDeclaration("var",[t().variableDeclarator(r,t().identifier("global"))]));buildHelpers(n,r,e);return t().program([a({FACTORY_PARAMETERS:t().identifier("global"),BROWSER_ARGUMENTS:t().assignmentExpression("=",t().memberExpression(t().identifier("root"),r),t().objectExpression([])),COMMON_ARGUMENTS:t().identifier("exports"),AMD_ARGUMENTS:t().arrayExpression([t().stringLiteral("exports")]),FACTORY_BODY:n,UMD_ROOT:t().identifier("this")})])}function buildVar(e){const r=t().identifier("babelHelpers");const n=[];n.push(t().variableDeclaration("var",[t().variableDeclarator(r,t().objectExpression([]))]));const i=t().program(n);buildHelpers(n,r,e);n.push(t().expressionStatement(r));return i}function buildHelpers(e,r,n){const a=e=>{return r?t().memberExpression(r,t().identifier(e)):t().identifier(`_${e}`)};const s={};helpers().list.forEach(function(t){if(n&&n.indexOf(t)<0)return;const r=s[t]=a(t);helpers().ensure(t,i.default);const{nodes:o}=helpers().get(t,a,r);e.push(...o)});return s}function _default(e,t="global"){let r;const n={global:buildGlobal,module:buildModule,umd:buildUmd,var:buildVar}[t];if(n){r=n(e)}else{throw new Error(`Unsupported output type ${t}`)}return(0,_generator().default)(r).code}},52446:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.transformFromAstAsync=t.transformFromAstSync=t.transformFromAst=void 0;function _gensync(){const e=r(67941);_gensync=function(){return e};return e}var n=r(21146);var i=r(26995);const a=_gensync()(function*(e,t,r){const a=yield*(0,n.default)(r);if(a===null)return null;if(!e)throw new Error("No AST given");return yield*(0,i.run)(a,t,e)});const s=function transformFromAst(e,t,r,n){if(typeof r==="function"){n=r;r=undefined}if(n===undefined){return a.sync(e,t,r)}a.errback(e,t,r,n)};t.transformFromAst=s;const o=a.sync;t.transformFromAstSync=o;const l=a.async;t.transformFromAstAsync=l},13581:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.transformFileAsync=t.transformFileSync=t.transformFile=void 0;function _gensync(){const e=r(67941);_gensync=function(){return e};return e}var n=r(21146);var i=r(26995);var a=r(8758);({});const s=_gensync()(function*(e,t){const r=Object.assign({},t,{filename:e});const s=yield*(0,n.default)(r);if(s===null)return null;const o=yield*a.readFile(e,"utf8");return yield*(0,i.run)(s,o)});const o=s.errback;t.transformFile=o;const l=s.sync;t.transformFileSync=l;const u=s.async;t.transformFileAsync=u},464:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.transformAsync=t.transformSync=t.transform=void 0;function _gensync(){const e=r(67941);_gensync=function(){return e};return e}var n=r(21146);var i=r(26995);const a=_gensync()(function*transform(e,t){const r=yield*(0,n.default)(t);if(r===null)return null;return yield*(0,i.run)(r,e)});const s=function transform(e,t,r){if(typeof t==="function"){r=t;t=undefined}if(r===undefined)return a.sync(e,t);a.errback(e,t,r)};t.transform=s;const o=a.sync;t.transformSync=o;const l=a.async;t.transformAsync=l},63029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=loadBlockHoistPlugin;function _traverse(){const e=r(25008);_traverse=function(){return e};return e}var n=r(37481);let i;function loadBlockHoistPlugin(){if(!i){i=new n.default(Object.assign({},a,{visitor:_traverse().default.explode(a.visitor)}),{})}return i}function priority(e){const t=e==null?void 0:e._blockHoist;if(t==null)return 1;if(t===true)return 2;return t}function stableSort(e){const t=Object.create(null);for(let r=0;r<e.length;r++){const n=e[r];const i=priority(n);const a=t[i]||(t[i]=[]);a.push(n)}const r=Object.keys(t).map(e=>+e).sort((e,t)=>t-e);let n=0;for(const i of r){const r=t[i];for(const t of r){e[n++]=t}}return e}const a={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){const{body:t}=e;let r=Math.pow(2,30)-1;let n=false;for(let e=0;e<t.length;e++){const i=t[e];const a=priority(i);if(a>r){n=true;break}r=a}if(!n)return;e.body=stableSort(t.slice())}}}}},92418:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.default=void 0;function helpers(){const e=n(71804);helpers=function(){return e};return e}function _traverse(){const e=n(25008);_traverse=function(){return e};return e}function _codeFrame(){const e=n(11796);_codeFrame=function(){return e};return e}function t(){const e=n(57012);t=function(){return e};return e}function _helperModuleTransforms(){const e=n(53224);_helperModuleTransforms=function(){return e};return e}function _semver(){const e=n(62519);_semver=function(){return e};return e}const i={enter(e,t){const r=e.node.loc;if(r){t.loc=r;e.stop()}}};class File{constructor(e,{code:t,ast:r,inputMap:n}){this._map=new Map;this.opts=void 0;this.declarations={};this.path=null;this.ast={};this.scope=void 0;this.metadata={};this.code="";this.inputMap=null;this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)};this.opts=e;this.code=t;this.ast=r;this.inputMap=n;this.path=_traverse().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext();this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){if(e){this.path.get("interpreter").replaceWith(t().interpreterDirective(e))}else{this.path.get("interpreter").remove()}}set(e,t){if(e==="helpersNamespace"){throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility."+"If you are using @babel/plugin-external-helpers you will need to use a newer "+"version than the one you currently have installed. "+"If you have your own implementation, you'll want to explore using 'helperGenerator' "+"alongside 'file.availableHelper()'.")}this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,_helperModuleTransforms().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this "+"functionality in Babel 7, you should import the "+"'@babel/helper-module-imports' module and use the functions exposed "+" from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let r;try{r=helpers().minVersion(e)}catch(e){if(e.code!=="BABEL_HELPER_UNKNOWN")throw e;return false}if(typeof t!=="string")return true;if(_semver().valid(t))t=`^${t}`;return!_semver().intersects(`<${r}`,t)&&!_semver().intersects(`>=8.0.0`,t)}addHelper(e){const r=this.declarations[e];if(r)return t().cloneNode(r);const n=this.get("helperGenerator");if(n){const t=n(e);if(t)return t}helpers().ensure(e,File);const i=this.declarations[e]=this.scope.generateUidIdentifier(e);const a={};for(const t of helpers().getDependencies(e)){a[t]=this.addHelper(t)}const{nodes:s,globals:o}=helpers().get(e,e=>a[e],i,Object.keys(this.scope.getAllBindings()));o.forEach(e=>{if(this.path.scope.hasBinding(e,true)){this.path.scope.rename(e)}});s.forEach(e=>{e._compact=true});this.path.unshiftContainer("body",s);this.path.get("body").forEach(e=>{if(s.indexOf(e.node)===-1)return;if(e.isVariableDeclaration())this.scope.registerDeclaration(e)});return i}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,r=SyntaxError){let n=e&&(e.loc||e._loc);if(!n&&e){const r={loc:null};(0,_traverse().default)(e,i,this.scope,r);n=r.loc;let a="This is an error on an internal node. Probably an internal error.";if(n)a+=" Location has been estimated.";t+=` (${a})`}if(n){const{highlightCode:e=true}=this.opts;t+="\n"+(0,_codeFrame().codeFrameColumns)(this.code,{start:{line:n.start.line,column:n.start.column+1},end:n.end&&n.start.line===n.end.line?{line:n.end.line,column:n.end.column+1}:undefined},{highlightCode:e})}return new r(t)}}r.default=File},12712:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=generateCode;function _convertSourceMap(){const e=r(36301);_convertSourceMap=function(){return e};return e}function _generator(){const e=r(43187);_generator=function(){return e};return e}var n=r(23687);function generateCode(e,t){const{opts:r,ast:i,code:a,inputMap:s}=t;const o=[];for(const t of e){for(const e of t){const{generatorOverride:t}=e;if(t){const e=t(i,r.generatorOpts,a,_generator().default);if(e!==undefined)o.push(e)}}}let l;if(o.length===0){l=(0,_generator().default)(i,r.generatorOpts,a)}else if(o.length===1){l=o[0];if(typeof l.then==="function"){throw new Error(`You appear to be using an async codegen plugin, `+`which your current version of Babel does not support. `+`If you're using a published plugin, `+`you may need to upgrade your @babel/core version.`)}}else{throw new Error("More than one plugin attempted to override codegen.")}let{code:u,map:p}=l;if(p&&s){p=(0,n.default)(s.toObject(),p)}if(r.sourceMaps==="inline"||r.sourceMaps==="both"){u+="\n"+_convertSourceMap().fromObject(p).toComment()}if(r.sourceMaps==="inline"){p=null}return{outputCode:u,outputMap:p}}},23687:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=mergeSourceMap;function _sourceMap(){const e=r(96241);_sourceMap=function(){return e};return e}function mergeSourceMap(e,t){const r=buildMappingData(e);const n=buildMappingData(t);const i=new(_sourceMap().SourceMapGenerator);for(const{source:e}of r.sources){if(typeof e.content==="string"){i.setSourceContent(e.path,e.content)}}if(n.sources.length===1){const e=n.sources[0];const t=new Map;eachInputGeneratedRange(r,(r,n,a)=>{eachOverlappingGeneratedOutputRange(e,r,e=>{const r=makeMappingKey(e);if(t.has(r))return;t.set(r,e);i.addMapping({source:a.path,original:{line:n.line,column:n.columnStart},generated:{line:e.line,column:e.columnStart},name:n.name})})});for(const e of t.values()){if(e.columnEnd===Infinity){continue}const r={line:e.line,columnStart:e.columnEnd};const n=makeMappingKey(r);if(t.has(n)){continue}i.addMapping({generated:{line:r.line,column:r.columnStart}})}}const a=i.toJSON();if(typeof r.sourceRoot==="string"){a.sourceRoot=r.sourceRoot}return a}function makeMappingKey(e){return`${e.line}/${e.columnStart}`}function eachOverlappingGeneratedOutputRange(e,t,r){const n=filterApplicableOriginalRanges(e,t);for(const{generated:e}of n){for(const t of e){r(t)}}}function filterApplicableOriginalRanges({mappings:e},{line:t,columnStart:r,columnEnd:n}){return filterSortedArray(e,({original:e})=>{if(t>e.line)return-1;if(t<e.line)return 1;if(r>=e.columnEnd)return-1;if(n<=e.columnStart)return 1;return 0})}function eachInputGeneratedRange(e,t){for(const{source:r,mappings:n}of e.sources){for(const{original:e,generated:i}of n){for(const n of i){t(n,e,r)}}}}function buildMappingData(e){const t=new(_sourceMap().SourceMapConsumer)(Object.assign({},e,{sourceRoot:null}));const r=new Map;const n=new Map;let i=null;t.computeColumnSpans();t.eachMapping(e=>{if(e.originalLine===null)return;let a=r.get(e.source);if(!a){a={path:e.source,content:t.sourceContentFor(e.source,true)};r.set(e.source,a)}let s=n.get(a);if(!s){s={source:a,mappings:[]};n.set(a,s)}const o={line:e.originalLine,columnStart:e.originalColumn,columnEnd:Infinity,name:e.name};if(i&&i.source===a&&i.mapping.line===e.originalLine){i.mapping.columnEnd=e.originalColumn}i={source:a,mapping:o};s.mappings.push({original:o,generated:t.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map(e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1}))})},null,_sourceMap().SourceMapConsumer.ORIGINAL_ORDER);return{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(n.values())}}function findInsertionLocation(e,t){let r=0;let n=e.length;while(r<n){const i=Math.floor((r+n)/2);const a=e[i];const s=t(a);if(s===0){r=i;break}if(s>=0){n=i}else{r=i+1}}let i=r;if(i<e.length){while(i>=0&&t(e[i])>=0){i--}return i+1}return i}function filterSortedArray(e,t){const r=findInsertionLocation(e,t);const n=[];for(let i=r;i<e.length&&t(e[i])===0;i++){n.push(e[i])}return n}},26995:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.run=run;function _traverse(){const e=r(25008);_traverse=function(){return e};return e}var n=r(43062);var i=r(63029);var a=r(2536);var s=r(38026);var o=r(12712);function*run(e,t,r){const n=yield*(0,s.default)(e.passes,(0,a.default)(e),t,r);const i=n.opts;try{yield*transformFile(n,e.passes)}catch(e){var l;e.message=`${(l=i.filename)!=null?l:"unknown"}: ${e.message}`;if(!e.code){e.code="BABEL_TRANSFORM_ERROR"}throw e}let u,p;try{if(i.code!==false){({outputCode:u,outputMap:p}=(0,o.default)(e.passes,n))}}catch(e){var f;e.message=`${(f=i.filename)!=null?f:"unknown"}: ${e.message}`;if(!e.code){e.code="BABEL_GENERATE_ERROR"}throw e}return{metadata:n.metadata,options:i,ast:i.ast===true?n.ast:null,code:u===undefined?null:u,map:p===undefined?null:p,sourceType:n.ast.program.sourceType}}function*transformFile(e,t){for(const r of t){const t=[];const a=[];const s=[];for(const o of r.concat([(0,i.default)()])){const r=new n.default(e,o.key,o.options);t.push([o,r]);a.push(r);s.push(o.visitor)}for(const[r,n]of t){const t=r.pre;if(t){const r=t.call(n,e);yield*[];if(isThenable(r)){throw new Error(`You appear to be using an plugin with an async .pre, `+`which your current version of Babel does not support. `+`If you're using a published plugin, you may need to upgrade `+`your @babel/core version.`)}}}const o=_traverse().default.visitors.merge(s,a,e.opts.wrapPluginVisitorMethod);(0,_traverse().default)(e.ast,o,e.scope);for(const[r,n]of t){const t=r.post;if(t){const r=t.call(n,e);yield*[];if(isThenable(r)){throw new Error(`You appear to be using an plugin with an async .post, `+`which your current version of Babel does not support. `+`If you're using a published plugin, you may need to upgrade `+`your @babel/core version.`)}}}}}function isThenable(e){return!!e&&(typeof e==="object"||typeof e==="function")&&!!e.then&&typeof e.then==="function"}},38026:(e,r,n)=>{"use strict";Object.defineProperty(r,"__esModule",{value:true});r.default=normalizeFile;function _fs(){const e=n(35747);_fs=function(){return e};return e}function _path(){const e=n(85622);_path=function(){return e};return e}function _debug(){const e=n(31185);_debug=function(){return e};return e}function t(){const e=n(57012);t=function(){return e};return e}function _convertSourceMap(){const e=n(36301);_convertSourceMap=function(){return e};return e}var i=n(92418);var a=n(5101);var s=n(11557);const o=_debug()("babel:transform:file");const l=1e6;function*normalizeFile(e,r,n,f){n=`${n||""}`;if(f){if(f.type==="Program"){f=t().file(f,[],[])}else if(f.type!=="File"){throw new Error("AST root must be a Program or File node")}if(r.cloneInputAst){f=(0,s.default)(f)}}else{f=yield*(0,a.default)(e,r,n)}let c=null;if(r.inputSourceMap!==false){if(typeof r.inputSourceMap==="object"){c=_convertSourceMap().fromObject(r.inputSourceMap)}if(!c){const e=extractComments(u,f);if(e){try{c=_convertSourceMap().fromComment(e)}catch(e){o("discarding unknown inline input sourcemap",e)}}}if(!c){const e=extractComments(p,f);if(typeof r.filename==="string"&&e){try{const t=p.exec(e);const n=_fs().readFileSync(_path().resolve(_path().dirname(r.filename),t[1]));if(n.length>l){o("skip merging input map > 1 MB")}else{c=_convertSourceMap().fromJSON(n)}}catch(e){o("discarding unknown file input sourcemap",e)}}else if(e){o("discarding un-loadable file input sourcemap")}}}return new i.default(r,{code:n,ast:f,inputMap:c})}const u=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/;const p=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function extractCommentsFromList(e,t,r){if(t){t=t.filter(({value:t})=>{if(e.test(t)){r=t;return false}return true})}return[t,r]}function extractComments(e,r){let n=null;t().traverseFast(r,t=>{[t.leadingComments,n]=extractCommentsFromList(e,t.leadingComments,n);[t.innerComments,n]=extractCommentsFromList(e,t.innerComments,n);[t.trailingComments,n]=extractCommentsFromList(e,t.trailingComments,n)});return n}},2536:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=normalizeOptions;function _path(){const e=r(85622);_path=function(){return e};return e}function normalizeOptions(e){const{filename:t,cwd:r,filenameRelative:n=(typeof t==="string"?_path().relative(r,t):"unknown"),sourceType:i="module",inputSourceMap:a,sourceMaps:s=!!a,sourceRoot:o=e.options.moduleRoot,sourceFileName:l=_path().basename(n),comments:u=true,compact:p="auto"}=e.options;const f=e.options;const c=Object.assign({},f,{parserOpts:Object.assign({sourceType:_path().extname(n)===".mjs"?"module":i,sourceFileName:t,plugins:[]},f.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:f.auxiliaryCommentBefore,auxiliaryCommentAfter:f.auxiliaryCommentAfter,retainLines:f.retainLines,comments:u,shouldPrintComment:f.shouldPrintComment,compact:p,minified:f.minified,sourceMaps:s,sourceRoot:o,sourceFileName:l},f.generatorOpts)});for(const t of e.passes){for(const e of t){if(e.manipulateOptions){e.manipulateOptions(c,c.parserOpts)}}}return c}},43062:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;class PluginPass{constructor(e,t,r){this._map=new Map;this.key=void 0;this.file=void 0;this.opts=void 0;this.cwd=void 0;this.filename=void 0;this.key=t;this.file=e;this.opts=r||{};this.cwd=e.opts.cwd;this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}buildCodeFrameError(e,t,r){return this.file.buildCodeFrameError(e,t,r)}}t.default=PluginPass;{PluginPass.prototype.getModuleName=function getModuleName(){return this.file.getModuleName()}}},88755:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=_default;const r="$$ babel internal serialized type"+Math.random();function serialize(e,t){if(typeof t!=="bigint")return t;return{[r]:"BigInt",value:t.toString()}}function revive(e,t){if(!t||typeof t!=="object")return t;if(t[r]!=="BigInt")return t;return BigInt(t.value)}function _default(e){return JSON.parse(JSON.stringify(e,serialize),revive)}},11557:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=_default;function _v(){const e=r(68987);_v=function(){return e};return e}var n=r(88755);function _default(e){if(_v().deserialize&&_v().serialize){return _v().deserialize(_v().serialize(e))}return(0,n.default)(e)}},11796:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.codeFrameColumns=codeFrameColumns;t.default=_default;var n=r(36860);let i=false;function getDefs(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}const a=/\r\n|[\n\r\u2028\u2029]/;function getMarkerLines(e,t,r){const n=Object.assign({column:0,line:-1},e.start);const i=Object.assign({},n,e.end);const{linesAbove:a=2,linesBelow:s=3}=r||{};const o=n.line;const l=n.column;const u=i.line;const p=i.column;let f=Math.max(o-(a+1),0);let c=Math.min(t.length,u+s);if(o===-1){f=0}if(u===-1){c=t.length}const d=u-o;const y={};if(d){for(let e=0;e<=d;e++){const r=e+o;if(!l){y[r]=true}else if(e===0){const e=t[r-1].length;y[r]=[l,e-l+1]}else if(e===d){y[r]=[0,p]}else{const n=t[r-e].length;y[r]=[0,n]}}}else{if(l===p){if(l){y[o]=[l,0]}else{y[o]=true}}else{y[o]=[l,p-l]}}return{start:f,end:c,markerLines:y}}function codeFrameColumns(e,t,r={}){const i=(r.highlightCode||r.forceColor)&&(0,n.shouldHighlight)(r);const s=(0,n.getChalk)(r);const o=getDefs(s);const l=(e,t)=>{return i?e(t):t};const u=e.split(a);const{start:p,end:f,markerLines:c}=getMarkerLines(t,u,r);const d=t.start&&typeof t.start.column==="number";const y=String(f).length;const m=i?(0,n.default)(e,r):e;let T=m.split(a).slice(p,f).map((e,t)=>{const n=p+1+t;const i=` ${n}`.slice(-y);const a=` ${i} |`;const s=c[n];const u=!c[n+1];if(s){let t="";if(Array.isArray(s)){const n=e.slice(0,Math.max(s[0]-1,0)).replace(/[^\t]/g," ");const i=s[1]||1;t=["\n ",l(o.gutter,a.replace(/\d/g," "))," ",n,l(o.marker,"^").repeat(i)].join("");if(u&&r.message){t+=" "+l(o.message,r.message)}}return[l(o.marker,">"),l(o.gutter,a),e.length>0?` ${e}`:"",t].join("")}else{return` ${l(o.gutter,a)}${e.length>0?` ${e}`:""}`}}).join("\n");if(r.message&&!d){T=`${" ".repeat(y+1)}${r.message}\n${T}`}if(i){return s.reset(T)}else{return T}}function _default(e,t,r,n={}){if(!i){i=true;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(process.emitWarning){process.emitWarning(e,"DeprecationWarning")}else{const t=new Error(e);t.name="DeprecationWarning";console.warn(new Error(e))}}r=Math.max(r,0);const a={start:{column:r,line:t}};return codeFrameColumns(e,a,n)}},37790:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getInclusionReasons=getInclusionReasons;var n=r(62519);var i=r(87059);var a=r(41953);function getInclusionReasons(e,t,r){const s=r[e]||{};return Object.keys(t).reduce((e,r)=>{const o=(0,a.getLowestImplementedVersion)(s,r);const l=t[r];if(!o){e[r]=(0,i.prettifyVersion)(l)}else{const t=(0,a.isUnreleasedVersion)(o,r);const s=(0,a.isUnreleasedVersion)(l,r);if(!s&&(t||n.lt(l.toString(),(0,a.semverify)(o)))){e[r]=(0,i.prettifyVersion)(l)}}return e},{})}},54263:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.targetsSupported=targetsSupported;t.isRequired=isRequired;t.default=filterItems;var n=r(62519);var i=r(70251);var a=r(41953);function targetsSupported(e,t){const r=Object.keys(e);if(r.length===0){return false}const i=r.filter(r=>{const i=(0,a.getLowestImplementedVersion)(t,r);if(!i){return true}const s=e[r];if((0,a.isUnreleasedVersion)(s,r)){return false}if((0,a.isUnreleasedVersion)(i,r)){return true}if(!n.valid(s.toString())){throw new Error(`Invalid version passed for target "${r}": "${s}". `+"Versions must be in semver format (major.minor.patch)")}return n.gt((0,a.semverify)(i),s.toString())});return i.length===0}function isRequired(e,t,{compatData:r=i,includes:n,excludes:a}={}){if(a!=null&&a.has(e))return false;if(n!=null&&n.has(e))return true;return!targetsSupported(t,r[e])}function filterItems(e,t,r,n,i,a,s){const o=new Set;const l={compatData:e,includes:t,excludes:r};for(const t in e){if(isRequired(t,n,l)){o.add(t)}else if(s){const e=s.get(t);if(e){o.add(e)}}}if(i){i.forEach(e=>!r.has(e)&&o.add(e))}if(a){a.forEach(e=>!t.has(e)&&o.delete(e))}return o}},55937:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.isBrowsersQueryValid=isBrowsersQueryValid;t.default=getTargets;Object.defineProperty(t,"unreleasedLabels",{enumerable:true,get:function(){return o.unreleasedLabels}});Object.defineProperty(t,"TargetNames",{enumerable:true,get:function(){return l.TargetNames}});Object.defineProperty(t,"prettifyTargets",{enumerable:true,get:function(){return u.prettifyTargets}});Object.defineProperty(t,"getInclusionReasons",{enumerable:true,get:function(){return p.getInclusionReasons}});Object.defineProperty(t,"filterItems",{enumerable:true,get:function(){return f.default}});Object.defineProperty(t,"isRequired",{enumerable:true,get:function(){return f.isRequired}});var n=r(3561);var i=r(69562);var a=r(89556);var s=r(41953);var o=r(81830);var l=r(53097);var u=r(87059);var p=r(37790);var f=r(54263);const c=a["es6.module"];const d=new i.OptionValidator("@babel/helper-compilation-targets");function validateTargetNames(e){const t=Object.keys(l.TargetNames);for(const r of Object.keys(e)){if(!(r in l.TargetNames)){throw new Error(d.formatMessage(`'${r}' is not a valid target\n- Did you mean '${(0,i.findSuggestion)(r,t)}'?`))}}return e}function isBrowsersQueryValid(e){return typeof e==="string"||Array.isArray(e)&&e.every(e=>typeof e==="string")}function validateBrowsers(e){d.invariant(e===undefined||isBrowsersQueryValid(e),`'${String(e)}' is not a valid browserslist query`);return e}function getLowestVersions(e){return e.reduce((e,t)=>{const[r,n]=t.split(" ");const i=o.browserNameMap[r];if(!i){return e}try{const t=n.split("-")[0].toLowerCase();const a=(0,s.isUnreleasedVersion)(t,r);if(!e[i]){e[i]=a?t:(0,s.semverify)(t);return e}const o=e[i];const l=(0,s.isUnreleasedVersion)(o,r);if(l&&a){e[i]=(0,s.getLowestUnreleased)(o,t,r)}else if(l){e[i]=(0,s.semverify)(t)}else if(!l&&!a){const r=(0,s.semverify)(t);e[i]=(0,s.semverMin)(o,r)}}catch(e){}return e},{})}function outputDecimalWarning(e){if(!e.length){return}console.warn("Warning, the following targets are using a decimal version:\n");e.forEach(({target:e,value:t})=>console.warn(`  ${e}: ${t}`));console.warn(`\nWe recommend using a string for minor/patch versions to avoid numbers like 6.10\ngetting parsed as 6.1, which can lead to unexpected behavior.\n`)}function semverifyTarget(e,t){try{return(0,s.semverify)(t)}catch(r){throw new Error(d.formatMessage(`'${t}' is not a valid value for 'targets.${e}'.`))}}const y={__default(e,t){const r=(0,s.isUnreleasedVersion)(t,e)?t.toLowerCase():semverifyTarget(e,t);return[e,r]},node(e,t){const r=t===true||t==="current"?process.versions.node:semverifyTarget(e,t);return[e,r]}};function generateTargets(e){const t=Object.assign({},e);delete t.esmodules;delete t.browsers;return t}function resolveTargets(e){const t=n(e,{mobileToDesktop:true});return getLowestVersions(t)}function getTargets(e={},t={}){var r;let{browsers:i,esmodules:a}=e;const{configPath:o="."}=t;validateBrowsers(i);const l=generateTargets(e);let u=validateTargetNames(l);const p=!!i;const f=p||Object.keys(u).length>0;const d=!t.ignoreBrowserslistConfig&&!f;if(!i&&d){i=n.loadConfig({config:t.configFile,path:o,env:t.browserslistEnv});if(i==null){{i=[]}}}if(a&&(a!=="intersect"||!((r=i)!=null&&r.length))){i=Object.keys(c).map(e=>`${e} >= ${c[e]}`).join(", ");a=false}if(i){const e=resolveTargets(i);if(a==="intersect"){for(const t of Object.keys(e)){const r=e[t];if(c[t]){e[t]=(0,s.getHighestUnreleased)(r,(0,s.semverify)(c[t]),t)}else{delete e[t]}}}u=Object.assign(e,u)}const m={};const T=[];for(const e of Object.keys(u).sort()){var S;const t=u[e];if(typeof t==="number"&&t%1!==0){T.push({target:e,value:t})}const r=(S=y[e])!=null?S:y.__default;const[n,i]=r(e,t);if(i){m[n]=i}}outputDecimalWarning(T);return m}},53097:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.TargetNames=void 0;const r={node:"node",chrome:"chrome",opera:"opera",edge:"edge",firefox:"firefox",safari:"safari",ie:"ie",ios:"ios",android:"android",electron:"electron",samsung:"samsung",rhino:"rhino"};t.TargetNames=r},87059:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.prettifyVersion=prettifyVersion;t.prettifyTargets=prettifyTargets;var n=r(62519);var i=r(81830);function prettifyVersion(e){if(typeof e!=="string"){return e}const t=[n.major(e)];const r=n.minor(e);const i=n.patch(e);if(r||i){t.push(r)}if(i){t.push(i)}return t.join(".")}function prettifyTargets(e){return Object.keys(e).reduce((t,r)=>{let n=e[r];const a=i.unreleasedLabels[r];if(typeof n==="string"&&a!==n){n=prettifyVersion(n)}t[r]=n;return t},{})}},81830:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.browserNameMap=t.unreleasedLabels=void 0;const r={safari:"tp"};t.unreleasedLabels=r;const n={and_chr:"chrome",and_ff:"firefox",android:"android",chrome:"chrome",edge:"edge",firefox:"firefox",ie:"ie",ie_mob:"ie",ios_saf:"ios",node:"node",op_mob:"opera",opera:"opera",safari:"safari",samsung:"samsung"};t.browserNameMap=n},41953:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.semverMin=semverMin;t.semverify=semverify;t.isUnreleasedVersion=isUnreleasedVersion;t.getLowestUnreleased=getLowestUnreleased;t.getHighestUnreleased=getHighestUnreleased;t.getLowestImplementedVersion=getLowestImplementedVersion;var n=r(62519);var i=r(69562);var a=r(81830);const s=/^(\d+|\d+.\d+)$/;const o=new i.OptionValidator("@babel/helper-compilation-targets");function semverMin(e,t){return e&&n.lt(e,t)?e:t}function semverify(e){if(typeof e==="string"&&n.valid(e)){return e}o.invariant(typeof e==="number"||typeof e==="string"&&s.test(e),`'${e}' is not a valid version`);const t=e.toString().split(".");while(t.length<3){t.push("0")}return t.join(".")}function isUnreleasedVersion(e,t){const r=a.unreleasedLabels[t];return!!r&&r===e.toString().toLowerCase()}function getLowestUnreleased(e,t,r){const n=a.unreleasedLabels[r];const i=[e,t].some(e=>e===n);if(i){return e===i?t:e||t}return semverMin(e,t)}function getHighestUnreleased(e,t,r){return getLowestUnreleased(e,t,r)===e?t:e}function getLowestImplementedVersion(e,t){const r=e[t];if(!r&&t==="android"){return e.chrome}return r}},52647:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(57012);function _interopNamespace(e){if(e&&e.__esModule)return e;var t=Object.create(null);if(e){Object.keys(e).forEach(function(r){if(r!=="default"){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:true,get:function(){return e[r]}})}})}t["default"]=e;return Object.freeze(t)}var i=_interopNamespace(n);function willPathCastToBoolean(e){const t=e;const{node:r,parentPath:n}=t;if(n.isLogicalExpression()){const{operator:e,right:t}=n.node;if(e==="&&"||e==="||"||e==="??"&&r===t){return willPathCastToBoolean(n)}}if(n.isSequenceExpression()){const{expressions:e}=n.node;if(e[e.length-1]===r){return willPathCastToBoolean(n)}else{return true}}return n.isConditional({test:r})||n.isUnaryExpression({operator:"!"})||n.isLoop({test:r})}class AssignmentMemoiser{constructor(){this._map=void 0;this._map=new WeakMap}has(e){return this._map.has(e)}get(e){if(!this.has(e))return;const t=this._map.get(e);const{value:r}=t;t.count--;if(t.count===0){return i.assignmentExpression("=",r,e)}return r}set(e,t,r){return this._map.set(e,{count:r,value:t})}}function toNonOptional(e,t){const{node:r}=e;if(i.isOptionalMemberExpression(r)){return i.memberExpression(t,r.property,r.computed)}if(e.isOptionalCallExpression()){const r=e.get("callee");if(e.node.optional&&r.isOptionalMemberExpression()){const{object:n}=r.node;const a=e.scope.maybeGenerateMemoised(n)||n;r.get("object").replaceWith(i.assignmentExpression("=",a,n));return i.callExpression(i.memberExpression(t,i.identifier("call")),[a,...e.node.arguments])}return i.callExpression(t,e.node.arguments)}return e.node}function isInDetachedTree(e){while(e){if(e.isProgram())break;const{parentPath:t,container:r,listKey:n}=e;const i=t.node;if(n){if(r!==i[n])return true}else{if(r!==i)return true}e=t}return false}const a={memoise(){},handle(e,t){const{node:r,parent:n,parentPath:a,scope:s}=e;if(e.isOptionalMemberExpression()){if(isInDetachedTree(e))return;const o=e.find(({node:t,parent:r})=>{if(i.isOptionalMemberExpression(r)){return r.optional||r.object!==t}if(i.isOptionalCallExpression(r)){return t!==e.node&&r.optional||r.callee!==t}return true});if(s.path.isPattern()){o.replaceWith(i.callExpression(i.arrowFunctionExpression([],o.node),[]));return}const l=willPathCastToBoolean(o);const u=o.parentPath;if(u.isUpdateExpression({argument:r})||u.isAssignmentExpression({left:r})){throw e.buildCodeFrameError(`can't handle assignment`)}const p=u.isUnaryExpression({operator:"delete"});if(p&&o.isOptionalMemberExpression()&&o.get("property").isPrivateName()){throw e.buildCodeFrameError(`can't delete a private class element`)}let f=e;for(;;){if(f.isOptionalMemberExpression()){if(f.node.optional)break;f=f.get("object");continue}else if(f.isOptionalCallExpression()){if(f.node.optional)break;f=f.get("callee");continue}throw new Error(`Internal error: unexpected ${f.node.type}`)}const c=f.isOptionalMemberExpression()?"object":"callee";const d=f.node[c];const y=s.maybeGenerateMemoised(d);const m=y!=null?y:d;const T=a.isOptionalCallExpression({callee:r});const S=e=>T;const h=a.isCallExpression({callee:r});f.replaceWith(toNonOptional(f,m));if(S()){if(n.optional){a.replaceWith(this.optionalCall(e,n.arguments))}else{a.replaceWith(this.call(e,n.arguments))}}else if(h){e.replaceWith(this.boundGet(e))}else{e.replaceWith(this.get(e))}let E=e.node;for(let t=e;t!==o;){const e=t.parentPath;if(e===o&&S()&&n.optional){E=e.node;break}E=toNonOptional(e,E);t=e}let b;const P=o.parentPath;if(i.isMemberExpression(E)&&P.isOptionalCallExpression({callee:o.node,optional:true})){const{object:t}=E;b=e.scope.maybeGenerateMemoised(t);if(b){E.object=i.assignmentExpression("=",b,t)}}let x=o;if(p){x=P;E=P.node}const g=y?i.assignmentExpression("=",i.cloneNode(m),i.cloneNode(d)):i.cloneNode(m);if(l){let e;if(t){e=i.binaryExpression("!=",g,i.nullLiteral())}else{e=i.logicalExpression("&&",i.binaryExpression("!==",g,i.nullLiteral()),i.binaryExpression("!==",i.cloneNode(m),s.buildUndefinedNode()))}x.replaceWith(i.logicalExpression("&&",e,E))}else{let e;if(t){e=i.binaryExpression("==",g,i.nullLiteral())}else{e=i.logicalExpression("||",i.binaryExpression("===",g,i.nullLiteral()),i.binaryExpression("===",i.cloneNode(m),s.buildUndefinedNode()))}x.replaceWith(i.conditionalExpression(e,p?i.booleanLiteral(true):s.buildUndefinedNode(),E))}if(b){const e=P.node;P.replaceWith(i.optionalCallExpression(i.optionalMemberExpression(e.callee,i.identifier("call"),false,true),[i.cloneNode(b),...e.arguments],false))}return}if(i.isUpdateExpression(n,{argument:r})){if(this.simpleSet){e.replaceWith(this.simpleSet(e));return}const{operator:t,prefix:s}=n;this.memoise(e,2);const o=i.binaryExpression(t[0],i.unaryExpression("+",this.get(e)),i.numericLiteral(1));if(s){a.replaceWith(this.set(e,o))}else{const{scope:t}=e;const n=t.generateUidIdentifierBasedOnNode(r);t.push({id:n});o.left=i.assignmentExpression("=",i.cloneNode(n),o.left);a.replaceWith(i.sequenceExpression([this.set(e,o),i.cloneNode(n)]))}return}if(a.isAssignmentExpression({left:r})){if(this.simpleSet){e.replaceWith(this.simpleSet(e));return}const{operator:t,right:r}=a.node;if(t==="="){a.replaceWith(this.set(e,r))}else{const n=t.slice(0,-1);if(i.LOGICAL_OPERATORS.includes(n)){this.memoise(e,1);a.replaceWith(i.logicalExpression(n,this.get(e),this.set(e,r)))}else{this.memoise(e,2);a.replaceWith(this.set(e,i.binaryExpression(n,this.get(e),r)))}}return}if(a.isCallExpression({callee:r})){a.replaceWith(this.call(e,a.node.arguments));return}if(a.isOptionalCallExpression({callee:r})){if(s.path.isPattern()){a.replaceWith(i.callExpression(i.arrowFunctionExpression([],a.node),[]));return}a.replaceWith(this.optionalCall(e,a.node.arguments));return}if(a.isForXStatement({left:r})||a.isObjectProperty({value:r})&&a.parentPath.isObjectPattern()||a.isAssignmentPattern({left:r})&&a.parentPath.isObjectProperty({value:n})&&a.parentPath.parentPath.isObjectPattern()||a.isArrayPattern()||a.isAssignmentPattern({left:r})&&a.parentPath.isArrayPattern()||a.isRestElement()){e.replaceWith(this.destructureSet(e));return}if(a.isTaggedTemplateExpression()){e.replaceWith(this.boundGet(e))}else{e.replaceWith(this.get(e))}}};function memberExpressionToFunctions(e,t,r){e.traverse(t,Object.assign({},a,r,{memoiser:new AssignmentMemoiser}))}t.default=memberExpressionToFunctions},73865:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=getModuleName;{const e=getModuleName;t.default=getModuleName=function getModuleName(t,r){var n,i,a,s;return e(t,{moduleId:(n=r.moduleId)!=null?n:t.moduleId,moduleIds:(i=r.moduleIds)!=null?i:t.moduleIds,getModuleId:(a=r.getModuleId)!=null?a:t.getModuleId,moduleRoot:(s=r.moduleRoot)!=null?s:t.moduleRoot})}}function getModuleName(e,t){const{filename:r,filenameRelative:n=r,sourceRoot:i=t.moduleRoot}=e;const{moduleId:a,moduleIds:s=!!a,getModuleId:o,moduleRoot:l=i}=t;if(!s)return null;if(a!=null&&!o){return a}let u=l!=null?l+"/":"";if(n){const e=i!=null?new RegExp("^"+i+"/?"):"";u+=n.replace(e,"").replace(/\.(\w*?)$/,"")}u=u.replace(/\\/g,"/");if(o){return o(u)||u}else{return u}}},53224:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.rewriteModuleStatementsAndPrepareHeader=rewriteModuleStatementsAndPrepareHeader;t.ensureStatementsHoisted=ensureStatementsHoisted;t.wrapInterop=wrapInterop;t.buildNamespaceInitStatements=buildNamespaceInitStatements;Object.defineProperty(t,"isModule",{enumerable:true,get:function(){return s.isModule}});Object.defineProperty(t,"rewriteThis",{enumerable:true,get:function(){return o.default}});Object.defineProperty(t,"hasExports",{enumerable:true,get:function(){return u.hasExports}});Object.defineProperty(t,"isSideEffectImport",{enumerable:true,get:function(){return u.isSideEffectImport}});Object.defineProperty(t,"getModuleName",{enumerable:true,get:function(){return p.default}});var n=r(42357);var i=r(57012);var a=r(36900);var s=r(76098);var o=r(7161);var l=r(13361);var u=r(252);var p=r(73865);function rewriteModuleStatementsAndPrepareHeader(e,{loose:t,exportName:r,strict:a,allowTopLevelThis:p,strictMode:f,noInterop:c,importInterop:d=(c?"none":"babel"),lazy:y,esNamespaceOnly:m,constantReexports:T=t,enumerableModuleMeta:S=t,noIncompleteNsImportDetection:h}){(0,u.validateImportInteropOption)(d);n((0,s.isModule)(e),"Cannot process module statements in a script");e.node.sourceType="script";const E=(0,u.default)(e,r,{importInterop:d,initializeReexports:T,lazy:y,esNamespaceOnly:m});if(!p){(0,o.default)(e)}(0,l.default)(e,E);if(f!==false){const t=e.node.directives.some(e=>{return e.value.value==="use strict"});if(!t){e.unshiftContainer("directives",i.directive(i.directiveLiteral("use strict")))}}const b=[];if((0,u.hasExports)(E)&&!a){b.push(buildESModuleHeader(E,S))}const P=buildExportNameListDeclaration(e,E);if(P){E.exportNameListName=P.name;b.push(P.statement)}b.push(...buildExportInitializationStatements(e,E,T,h));return{meta:E,headers:b}}function ensureStatementsHoisted(e){e.forEach(e=>{e._blockHoist=3})}function wrapInterop(e,t,r){if(r==="none"){return null}if(r==="node-namespace"){return i.callExpression(e.hub.addHelper("interopRequireWildcard"),[t,i.booleanLiteral(true)])}else if(r==="node-default"){return null}let n;if(r==="default"){n="interopRequireDefault"}else if(r==="namespace"){n="interopRequireWildcard"}else{throw new Error(`Unknown interop: ${r}`)}return i.callExpression(e.hub.addHelper(n),[t])}function buildNamespaceInitStatements(e,t,r=false){const n=[];let s=i.identifier(t.name);if(t.lazy)s=i.callExpression(s,[]);for(const e of t.importsNamespace){if(e===t.name)continue;n.push(a.default.statement`var NAME = SOURCE;`({NAME:e,SOURCE:i.cloneNode(s)}))}if(r){n.push(...c(e,t,true))}for(const r of t.reexportNamespace){n.push((t.lazy?a.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:a.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:r,NAMESPACE:i.cloneNode(s)}))}if(t.reexportAll){const a=buildNamespaceReexport(e,i.cloneNode(s),r);a.loc=t.reexportAll.loc;n.push(a)}return n}const f={constant:a.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,constantComputed:a.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,spec:(0,a.default)`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `};const c=(e,t,r)=>{const n=t.lazy?i.callExpression(i.identifier(t.name),[]):i.identifier(t.name);const{stringSpecifiers:a}=e;return Array.from(t.reexports,([s,o])=>{let l=i.cloneNode(n);if(o==="default"&&t.interop==="node-default"){}else if(a.has(o)){l=i.memberExpression(l,i.stringLiteral(o),true)}else{l=i.memberExpression(l,i.identifier(o))}const u={EXPORTS:e.exportName,EXPORT_NAME:s,NAMESPACE_IMPORT:l};if(r||i.isIdentifier(l)){if(a.has(s)){return f.constantComputed(u)}else{return f.constant(u)}}else{return f.spec(u)}})};function buildESModuleHeader(e,t=false){return(t?a.default.statement`
        EXPORTS.__esModule = true;
      `:a.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}function buildNamespaceReexport(e,t,r){return(r?a.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:a.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?(0,a.default)`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}function buildExportNameListDeclaration(e,t){const r=Object.create(null);for(const e of t.local.values()){for(const t of e.names){r[t]=true}}let n=false;for(const e of t.source.values()){for(const t of e.reexports.keys()){r[t]=true}for(const t of e.reexportNamespace){r[t]=true}n=n||!!e.reexportAll}if(!n||Object.keys(r).length===0)return null;const a=e.scope.generateUidIdentifier("exportNames");delete r.default;return{name:a.name,statement:i.variableDeclaration("var",[i.variableDeclarator(a,i.valueToNode(r))])}}function buildExportInitializationStatements(e,t,r=false,n=false){const a=[];const s=[];for(const[e,r]of t.local){if(r.kind==="import"){}else if(r.kind==="hoisted"){a.push(buildInitStatement(t,r.names,i.identifier(e)))}else{s.push(...r.names)}}for(const e of t.source.values()){if(!r){a.push(...c(t,e,false))}for(const t of e.reexportNamespace){s.push(t)}}if(!n){a.push(...chunk(s,100).map(r=>{return buildInitStatement(t,r,e.scope.buildUndefinedNode())}))}return a}const d={computed:a.default.expression`EXPORTS["NAME"] = VALUE`,default:a.default.expression`EXPORTS.NAME = VALUE`};function buildInitStatement(e,t,r){const{stringSpecifiers:n,exportName:a}=e;return i.expressionStatement(t.reduce((e,t)=>{const r={EXPORTS:a,NAME:t,VALUE:e};if(n.has(t)){return d.computed(r)}else{return d.default(r)}},r))}function chunk(e,t){const r=[];for(let n=0;n<e.length;n+=t){r.push(e.slice(n,n+t))}return r}},252:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.hasExports=hasExports;t.isSideEffectImport=isSideEffectImport;t.validateImportInteropOption=validateImportInteropOption;t.default=normalizeModuleAndLoadMetadata;var n=r(85622);var i=r(86607);var a=r(76729);function hasExports(e){return e.hasExports}function isSideEffectImport(e){return e.imports.size===0&&e.importsNamespace.size===0&&e.reexports.size===0&&e.reexportNamespace.size===0&&!e.reexportAll}function validateImportInteropOption(e){if(typeof e!=="function"&&e!=="none"&&e!=="babel"&&e!=="node"){throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${e}).`)}return e}function resolveImportInterop(e,t){if(typeof e==="function"){return validateImportInteropOption(e(t))}return e}function normalizeModuleAndLoadMetadata(e,t,{importInterop:r,initializeReexports:n=false,lazy:i=false,esNamespaceOnly:a=false}){if(!t){t=e.scope.generateUidIdentifier("exports").name}const s=new Set;nameAnonymousExports(e);const{local:o,source:l,hasExports:u}=getModuleMetadata(e,{initializeReexports:n,lazy:i},s);removeModuleDeclarations(e);for(const[,e]of l){if(e.importsNamespace.size>0){e.name=e.importsNamespace.values().next().value}const t=resolveImportInterop(r,e.source);if(t==="none"){e.interop="none"}else if(t==="node"&&e.interop==="namespace"){e.interop="node-namespace"}else if(t==="node"&&e.interop==="default"){e.interop="node-default"}else if(a&&e.interop==="namespace"){e.interop="default"}}return{exportName:t,exportNameListName:null,hasExports:u,local:o,source:l,stringSpecifiers:s}}function getExportSpecifierName(e,t){if(e.isIdentifier()){return e.node.name}else if(e.isStringLiteral()){const r=e.node.value;if(!(0,i.isIdentifierName)(r)){t.add(r)}return r}else{throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`)}}function assertExportSpecifier(e){if(e.isExportSpecifier()){return}else if(e.isExportNamespaceSpecifier()){throw e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`.")}else{throw e.buildCodeFrameError("Unexpected export specifier type")}}function getModuleMetadata(e,{lazy:t,initializeReexports:r},i){const a=getLocalExportMetadata(e,r,i);const s=new Map;const o=t=>{const r=t.value;let i=s.get(r);if(!i){i={name:e.scope.generateUidIdentifier((0,n.basename)(r,(0,n.extname)(r))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:false,source:r};s.set(r,i)}return i};let l=false;e.get("body").forEach(e=>{if(e.isImportDeclaration()){const t=o(e.node.source);if(!t.loc)t.loc=e.node.loc;e.get("specifiers").forEach(e=>{if(e.isImportDefaultSpecifier()){const r=e.get("local").node.name;t.imports.set(r,"default");const n=a.get(r);if(n){a.delete(r);n.names.forEach(e=>{t.reexports.set(e,"default")})}}else if(e.isImportNamespaceSpecifier()){const r=e.get("local").node.name;t.importsNamespace.add(r);const n=a.get(r);if(n){a.delete(r);n.names.forEach(e=>{t.reexportNamespace.add(e)})}}else if(e.isImportSpecifier()){const r=getExportSpecifierName(e.get("imported"),i);const n=e.get("local").node.name;t.imports.set(n,r);const s=a.get(n);if(s){a.delete(n);s.names.forEach(e=>{t.reexports.set(e,r)})}}})}else if(e.isExportAllDeclaration()){l=true;const t=o(e.node.source);if(!t.loc)t.loc=e.node.loc;t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){l=true;const t=o(e.node.source);if(!t.loc)t.loc=e.node.loc;e.get("specifiers").forEach(e=>{assertExportSpecifier(e);const r=getExportSpecifierName(e.get("local"),i);const n=getExportSpecifierName(e.get("exported"),i);t.reexports.set(n,r);if(n==="__esModule"){throw e.get("exported").buildCodeFrameError('Illegal export "__esModule".')}})}else if(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration()){l=true}});for(const e of s.values()){let t=false;let r=false;if(e.importsNamespace.size>0){t=true;r=true}if(e.reexportAll){r=true}for(const n of e.imports.values()){if(n==="default")t=true;else r=true}for(const n of e.reexports.values()){if(n==="default")t=true;else r=true}if(t&&r){e.interop="namespace"}else if(t){e.interop="default"}}for(const[e,r]of s){if(t!==false&&!(isSideEffectImport(r)||r.reexportAll)){if(t===true){r.lazy=!/\./.test(e)}else if(Array.isArray(t)){r.lazy=t.indexOf(e)!==-1}else if(typeof t==="function"){r.lazy=t(e)}else{throw new Error(`.lazy must be a boolean, string array, or function`)}}}return{hasExports:l,local:a,source:s}}function getLocalExportMetadata(e,t,r){const n=new Map;e.get("body").forEach(e=>{let r;if(e.isImportDeclaration()){r="import"}else{if(e.isExportDefaultDeclaration())e=e.get("declaration");if(e.isExportNamedDeclaration()){if(e.node.declaration){e=e.get("declaration")}else if(t&&e.node.source&&e.get("source").isStringLiteral()){e.get("specifiers").forEach(e=>{assertExportSpecifier(e);n.set(e.get("local").node.name,"block")});return}}if(e.isFunctionDeclaration()){r="hoisted"}else if(e.isClassDeclaration()){r="block"}else if(e.isVariableDeclaration({kind:"var"})){r="var"}else if(e.isVariableDeclaration()){r="block"}else{return}}Object.keys(e.getOuterBindingIdentifiers()).forEach(e=>{n.set(e,r)})});const i=new Map;const a=e=>{const t=e.node.name;let r=i.get(t);if(!r){const a=n.get(t);if(a===undefined){throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`)}r={names:[],kind:a};i.set(t,r)}return r};e.get("body").forEach(e=>{if(e.isExportNamedDeclaration()&&(t||!e.node.source)){if(e.node.declaration){const t=e.get("declaration");const r=t.getOuterBindingIdentifierPaths();Object.keys(r).forEach(e=>{if(e==="__esModule"){throw t.buildCodeFrameError('Illegal export "__esModule".')}a(r[e]).names.push(e)})}else{e.get("specifiers").forEach(e=>{const t=e.get("local");const n=e.get("exported");const i=a(t);const s=getExportSpecifierName(n,r);if(s==="__esModule"){throw n.buildCodeFrameError('Illegal export "__esModule".')}i.names.push(s)})}}else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(t.isFunctionDeclaration()||t.isClassDeclaration()){a(t.get("id")).names.push("default")}else{throw t.buildCodeFrameError("Unexpected default expression export.")}}});return i}function nameAnonymousExports(e){e.get("body").forEach(e=>{if(!e.isExportDefaultDeclaration())return;(0,a.default)(e)})}function removeModuleDeclarations(e){e.get("body").forEach(e=>{if(e.isImportDeclaration()){e.remove()}else if(e.isExportNamedDeclaration()){if(e.node.declaration){e.node.declaration._blockHoist=e.node._blockHoist;e.replaceWith(e.node.declaration)}else{e.remove()}}else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(t.isFunctionDeclaration()||t.isClassDeclaration()){t._blockHoist=e.node._blockHoist;e.replaceWith(t)}else{throw t.buildCodeFrameError("Unexpected default expression export.")}}else if(e.isExportAllDeclaration()){e.remove()}})}},13361:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=rewriteLiveReferences;var n=r(42357);var i=r(57012);var a=r(36900);var s=r(46511);function rewriteLiveReferences(e,t){const r=new Map;const n=new Map;const a=t=>{e.requeue(t)};for(const[e,n]of t.source){for(const[t,i]of n.imports){r.set(t,[e,i,null])}for(const t of n.importsNamespace){r.set(t,[e,null,t])}}for(const[e,r]of t.local){let t=n.get(e);if(!t){t=[];n.set(e,t)}t.push(...r.names)}const l={metadata:t,requeueInParent:a,scope:e.scope,exported:n};e.traverse(o,l);(0,s.default)(e,new Set([...Array.from(r.keys()),...Array.from(n.keys())]));const u={seen:new WeakSet,metadata:t,requeueInParent:a,scope:e.scope,imported:r,exported:n,buildImportReference:([e,r,n],a)=>{const s=t.source.get(e);if(n){if(s.lazy)a=i.callExpression(a,[]);return a}let o=i.identifier(s.name);if(s.lazy)o=i.callExpression(o,[]);if(r==="default"&&s.interop==="node-default"){return o}const l=t.stringSpecifiers.has(r);return i.memberExpression(o,l?i.stringLiteral(r):i.identifier(r),l)}};e.traverse(p,u)}const o={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this;const{id:a}=e.node;if(!a)throw new Error("Expected class to have a name");const s=a.name;const o=r.get(s)||[];if(o.length>0){const r=i.expressionStatement(l(n,o,i.identifier(s)));r._blockHoist=e.node._blockHoist;t(e.insertAfter(r)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach(a=>{const s=r.get(a)||[];if(s.length>0){const r=i.expressionStatement(l(n,s,i.identifier(a)));r._blockHoist=e.node._blockHoist;t(e.insertAfter(r)[0])}})}};const l=(e,t,r)=>{return(t||[]).reduce((t,r)=>{const{stringSpecifiers:n}=e;const a=n.has(r);return i.assignmentExpression("=",i.memberExpression(i.identifier(e.exportName),a?i.stringLiteral(r):i.identifier(r),a),t)},r)};const u=e=>{return a.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `};const p={ReferencedIdentifier(e){const{seen:t,buildImportReference:r,scope:n,imported:a,requeueInParent:s}=this;if(t.has(e.node))return;t.add(e.node);const o=e.node.name;const l=a.get(o);if(l){const t=e.scope.getBinding(o);const a=n.getBinding(o);if(a!==t)return;const u=r(l,e.node);u.loc=e.node.loc;if((e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&i.isMemberExpression(u)){e.replaceWith(i.sequenceExpression([i.numericLiteral(0),u]))}else if(e.isJSXIdentifier()&&i.isMemberExpression(u)){const{object:t,property:r}=u;e.replaceWith(i.jsxMemberExpression(i.jsxIdentifier(t.name),i.jsxIdentifier(r.name)))}else{e.replaceWith(u)}s(e);e.skip()}},AssignmentExpression:{exit(e){const{scope:t,seen:r,imported:a,exported:s,requeueInParent:o,buildImportReference:p}=this;if(r.has(e.node))return;r.add(e.node);const f=e.get("left");if(f.isMemberExpression())return;if(f.isIdentifier()){const r=f.node.name;if(t.getBinding(r)!==e.scope.getBinding(r)){return}const c=s.get(r);const d=a.get(r);if((c==null?void 0:c.length)>0||d){n(e.node.operator==="=","Path was not simplified");const t=e.node;if(d){t.left=p(d,t.left);t.right=i.sequenceExpression([t.right,u(r)])}e.replaceWith(l(this.metadata,c,t));o(e)}}else{const r=f.getOuterBindingIdentifiers();const n=Object.keys(r).filter(r=>t.getBinding(r)===e.scope.getBinding(r));const p=n.find(e=>a.has(e));if(p){e.node.right=i.sequenceExpression([e.node.right,u(p)])}const c=[];n.forEach(e=>{const t=s.get(e)||[];if(t.length>0){c.push(l(this.metadata,t,i.identifier(e)))}});if(c.length>0){let t=i.sequenceExpression(c);if(e.parentPath.isExpressionStatement()){t=i.expressionStatement(t);t._blockHoist=e.parentPath.node._blockHoist}const r=e.insertAfter(t)[0];o(r)}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:r}=e;const{left:n}=r;const{exported:a,imported:s,scope:o}=this;if(!i.isVariableDeclaration(n)){let r=false,l;const p=e.get("body").scope;for(const e of Object.keys(i.getOuterBindingIdentifiers(n))){if(o.getBinding(e)===t.getBinding(e)){if(a.has(e)){r=true;if(p.hasOwnBinding(e)){p.rename(e)}}if(s.has(e)&&!l){l=e}}}if(!r&&!l){return}e.ensureBlock();const f=e.get("body");const c=t.generateUidIdentifierBasedOnNode(n);e.get("left").replaceWith(i.variableDeclaration("let",[i.variableDeclarator(i.cloneNode(c))]));t.registerDeclaration(e.get("left"));if(r){f.unshiftContainer("body",i.expressionStatement(i.assignmentExpression("=",n,c)))}if(l){f.unshiftContainer("body",i.expressionStatement(u(l)))}}}}},7161:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=rewriteThis;var n=r(7076);var i=r(25008);var a=r(57012);function rewriteThis(e){(0,i.default)(e.node,Object.assign({},s,{noScope:true}))}const s=i.default.visitors.merge([n.environmentVisitor,{ThisExpression(e){e.replaceWith(a.unaryExpression("void",a.numericLiteral(0),true))}}])},7076:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.skipAllButComputedKey=skipAllButComputedKey;t.default=t.environmentVisitor=void 0;var n=r(25008);var i=r(52647);var a=r(68720);var s=r(57012);function getPrototypeOfExpression(e,t,r,n){e=s.cloneNode(e);const i=t||n?e:s.memberExpression(e,s.identifier("prototype"));return s.callExpression(r.addHelper("getPrototypeOf"),[i])}function skipAllButComputedKey(e){if(!e.node.computed){e.skip();return}const t=s.VISITOR_KEYS[e.type];for(const r of t){if(r!=="key")e.skipKey(r)}}const o={[`${s.staticBlock?"StaticBlock|":""}ClassPrivateProperty|TypeAnnotation`](e){e.skip()},Function(e){if(e.isMethod())return;if(e.isArrowFunctionExpression())return;e.skip()},"Method|ClassProperty"(e){skipAllButComputedKey(e)}};t.environmentVisitor=o;const l=n.default.visitors.merge([o,{Super(e,t){const{node:r,parentPath:n}=e;if(!n.isMemberExpression({object:r}))return;t.handle(n)}}]);const u=n.default.visitors.merge([o,{Scopable(e,{refName:t}){const r=e.scope.getOwnBinding(t);if(r&&r.identifier.name===t){e.scope.rename(t)}}}]);const p={memoise(e,t){const{scope:r,node:n}=e;const{computed:i,property:a}=n;if(!i){return}const s=r.maybeGenerateMemoised(a);if(!s){return}this.memoiser.set(a,s,t)},prop(e){const{computed:t,property:r}=e.node;if(this.memoiser.has(r)){return s.cloneNode(this.memoiser.get(r))}if(t){return s.cloneNode(r)}return s.stringLiteral(r.name)},get(e){return this._get(e,this._getThisRefs())},_get(e,t){const r=getPrototypeOfExpression(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return s.callExpression(this.file.addHelper("get"),[t.memo?s.sequenceExpression([t.memo,r]):r,this.prop(e),t.this])},_getThisRefs(){if(!this.isDerivedConstructor){return{this:s.thisExpression()}}const e=this.scope.generateDeclaredUidIdentifier("thisSuper");return{memo:s.assignmentExpression("=",e,s.thisExpression()),this:s.cloneNode(e)}},set(e,t){const r=this._getThisRefs();const n=getPrototypeOfExpression(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return s.callExpression(this.file.addHelper("set"),[r.memo?s.sequenceExpression([r.memo,n]):n,this.prop(e),t,r.this,s.booleanLiteral(e.isInStrictMode())])},destructureSet(e){throw e.buildCodeFrameError(`Destructuring to a super field is not supported yet.`)},call(e,t){const r=this._getThisRefs();return(0,a.default)(this._get(e,r),s.cloneNode(r.this),t,false)},optionalCall(e,t){const r=this._getThisRefs();return(0,a.default)(this._get(e,r),s.cloneNode(r.this),t,true)}};const f=Object.assign({},p,{prop(e){const{property:t}=e.node;if(this.memoiser.has(t)){return s.cloneNode(this.memoiser.get(t))}return s.cloneNode(t)},get(e){const{isStatic:t,getSuperRef:r}=this;const{computed:n}=e.node;const i=this.prop(e);let a;if(t){var o;a=(o=r())!=null?o:s.memberExpression(s.identifier("Function"),s.identifier("prototype"))}else{var l;a=s.memberExpression((l=r())!=null?l:s.identifier("Object"),s.identifier("prototype"))}return s.memberExpression(a,i,n)},set(e,t){const{computed:r}=e.node;const n=this.prop(e);return s.assignmentExpression("=",s.memberExpression(s.thisExpression(),n,r),t)},destructureSet(e){const{computed:t}=e.node;const r=this.prop(e);return s.memberExpression(s.thisExpression(),r,t)},call(e,t){return(0,a.default)(this.get(e),s.thisExpression(),t,false)},optionalCall(e,t){return(0,a.default)(this.get(e),s.thisExpression(),t,true)}});class ReplaceSupers{constructor(e){var t;const r=e.methodPath;this.methodPath=r;this.isDerivedConstructor=r.isClassMethod({kind:"constructor"})&&!!e.superRef;this.isStatic=r.isObjectMethod()||r.node.static||(r.isStaticBlock==null?void 0:r.isStaticBlock());this.isPrivateMethod=r.isPrivate()&&r.isMethod();this.file=e.file;this.constantSuper=(t=e.constantSuper)!=null?t:e.isLoose;this.opts=e}getObjectRef(){return s.cloneNode(this.opts.objectRef||this.opts.getObjectRef())}getSuperRef(){if(this.opts.superRef)return s.cloneNode(this.opts.superRef);if(this.opts.getSuperRef)return s.cloneNode(this.opts.getSuperRef())}replace(){if(this.opts.refToPreserve){this.methodPath.traverse(u,{refName:this.opts.refToPreserve.name})}const e=this.constantSuper?f:p;(0,i.default)(this.methodPath,l,Object.assign({file:this.file,scope:this.methodPath.scope,isDerivedConstructor:this.isDerivedConstructor,isStatic:this.isStatic,isPrivateMethod:this.isPrivateMethod,getObjectRef:this.getObjectRef.bind(this),getSuperRef:this.getSuperRef.bind(this),boundGet:e.get},e))}}t.default=ReplaceSupers},46511:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=simplifyAccess;var n=r(57012);function simplifyAccess(e,t){e.traverse(i,{scope:e.scope,bindingNames:t,seen:new WeakSet})}const i={UpdateExpression:{exit(e){const{scope:t,bindingNames:r}=this;const i=e.get("argument");if(!i.isIdentifier())return;const a=i.node.name;if(!r.has(a))return;if(t.getBinding(a)!==e.scope.getBinding(a)){return}if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t=e.node.operator=="++"?"+=":"-=";e.replaceWith(n.assignmentExpression(t,i.node,n.numericLiteral(1)))}else if(e.node.prefix){e.replaceWith(n.assignmentExpression("=",n.identifier(a),n.binaryExpression(e.node.operator[0],n.unaryExpression("+",i.node),n.numericLiteral(1))))}else{const t=e.scope.generateUidIdentifierBasedOnNode(i.node,"old");const r=t.name;e.scope.push({id:t});const a=n.binaryExpression(e.node.operator[0],n.identifier(r),n.numericLiteral(1));e.replaceWith(n.sequenceExpression([n.assignmentExpression("=",n.identifier(r),n.unaryExpression("+",i.node)),n.assignmentExpression("=",n.cloneNode(i.node),a),n.identifier(r)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:r,bindingNames:i}=this;if(e.node.operator==="=")return;if(r.has(e.node))return;r.add(e.node);const a=e.get("left");if(!a.isIdentifier())return;const s=a.node.name;if(!i.has(s))return;if(t.getBinding(s)!==e.scope.getBinding(s)){return}const o=e.node.operator.slice(0,-1);if(n.LOGICAL_OPERATORS.includes(o)){e.replaceWith(n.logicalExpression(o,e.node.left,n.assignmentExpression("=",n.cloneNode(e.node.left),e.node.right)))}else{e.node.right=n.binaryExpression(o,n.cloneNode(e.node.left),e.node.right);e.node.operator="="}}}}},66396:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.isIdentifierStart=isIdentifierStart;t.isIdentifierChar=isIdentifierChar;t.isIdentifierName=isIdentifierName;let r="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";let n="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const i=new RegExp("["+r+"]");const a=new RegExp("["+r+n+"]");r=n=null;const s=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938];const o=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function isInAstralSet(e,t){let r=65536;for(let n=0,i=t.length;n<i;n+=2){r+=t[n];if(r>e)return false;r+=t[n+1];if(r>=e)return true}return false}function isIdentifierStart(e){if(e<65)return e===36;if(e<=90)return true;if(e<97)return e===95;if(e<=122)return true;if(e<=65535){return e>=170&&i.test(String.fromCharCode(e))}return isInAstralSet(e,s)}function isIdentifierChar(e){if(e<48)return e===36;if(e<58)return true;if(e<65)return false;if(e<=90)return true;if(e<97)return e===95;if(e<=122)return true;if(e<=65535){return e>=170&&a.test(String.fromCharCode(e))}return isInAstralSet(e,s)||isInAstralSet(e,o)}function isIdentifierName(e){let t=true;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if((n&64512)===55296&&r+1<e.length){const t=e.charCodeAt(++r);if((t&64512)===56320){n=65536+((n&1023)<<10)+(t&1023)}}if(t){t=false;if(!isIdentifierStart(n)){return false}}else if(!isIdentifierChar(n)){return false}}return!t}},86607:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"isIdentifierName",{enumerable:true,get:function(){return n.isIdentifierName}});Object.defineProperty(t,"isIdentifierChar",{enumerable:true,get:function(){return n.isIdentifierChar}});Object.defineProperty(t,"isIdentifierStart",{enumerable:true,get:function(){return n.isIdentifierStart}});Object.defineProperty(t,"isReservedWord",{enumerable:true,get:function(){return i.isReservedWord}});Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:true,get:function(){return i.isStrictBindOnlyReservedWord}});Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:true,get:function(){return i.isStrictBindReservedWord}});Object.defineProperty(t,"isStrictReservedWord",{enumerable:true,get:function(){return i.isStrictReservedWord}});Object.defineProperty(t,"isKeyword",{enumerable:true,get:function(){return i.isKeyword}});var n=r(66396);var i=r(47249)},47249:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.isReservedWord=isReservedWord;t.isStrictReservedWord=isStrictReservedWord;t.isStrictBindOnlyReservedWord=isStrictBindOnlyReservedWord;t.isStrictBindReservedWord=isStrictBindReservedWord;t.isKeyword=isKeyword;const r={keyword:["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"],strict:["implements","interface","let","package","private","protected","public","static","yield"],strictBind:["eval","arguments"]};const n=new Set(r.keyword);const i=new Set(r.strict);const a=new Set(r.strictBind);function isReservedWord(e,t){return t&&e==="await"||e==="enum"}function isStrictReservedWord(e,t){return isReservedWord(e,t)||i.has(e)}function isStrictBindOnlyReservedWord(e){return a.has(e)}function isStrictBindReservedWord(e,t){return isStrictReservedWord(e,t)||isStrictBindOnlyReservedWord(e)}function isKeyword(e){return n.has(e)}},67514:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.wrapRegExp=t.typeof=t.objectSpread2=t.jsx=void 0;var n=r(36900);const i={minVersion:"7.0.0-beta.0",ast:()=>n.default.program.ast('\nvar REACT_ELEMENT_TYPE;\nexport default function _createRawReactElement(type, props, key, children) {\n  if (!REACT_ELEMENT_TYPE) {\n    REACT_ELEMENT_TYPE =\n      (typeof Symbol === "function" &&\n        \n        Symbol["for"] &&\n        Symbol["for"]("react.element")) ||\n      0xeac7;\n  }\n  var defaultProps = type && type.defaultProps;\n  var childrenLength = arguments.length - 3;\n  if (!props && childrenLength !== 0) {\n    \n    \n    props = { children: void 0 };\n  }\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = new Array(childrenLength);\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 3];\n    }\n    props.children = childArray;\n  }\n  if (props && defaultProps) {\n    for (var propName in defaultProps) {\n      if (props[propName] === void 0) {\n        props[propName] = defaultProps[propName];\n      }\n    }\n  } else if (!props) {\n    props = defaultProps || {};\n  }\n  return {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type: type,\n    key: key === undefined ? null : "" + key,\n    ref: null,\n    props: props,\n    _owner: null,\n  };\n}\n')};t.jsx=i;const a={minVersion:"7.5.0",ast:()=>n.default.program.ast('\nimport defineProperty from "defineProperty";\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) {\n      symbols = symbols.filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n      });\n    }\n    keys.push.apply(keys, symbols);\n  }\n  return keys;\n}\nexport default function _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(\n          target,\n          key,\n          Object.getOwnPropertyDescriptor(source, key)\n        );\n      });\n    }\n  }\n  return target;\n}\n')};t.objectSpread2=a;const s={minVersion:"7.0.0-beta.0",ast:()=>n.default.program.ast('\nexport default function _typeof(obj) {\n  "@babel/helpers - typeof";\n  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj &&\n        typeof Symbol === "function" &&\n        obj.constructor === Symbol &&\n        obj !== Symbol.prototype\n        ? "symbol"\n        : typeof obj;\n    };\n  }\n  return _typeof(obj);\n}\n')};t.typeof=s;const o={minVersion:"7.2.6",ast:()=>n.default.program.ast('\nimport setPrototypeOf from "setPrototypeOf";\nimport inherits from "inherits";\nexport default function _wrapRegExp() {\n  _wrapRegExp = function (re, groups) {\n    return new BabelRegExp(re, undefined, groups);\n  };\n  var _super = RegExp.prototype;\n  var _groups = new WeakMap();\n  function BabelRegExp(re, flags, groups) {\n    var _this = new RegExp(re, flags);\n    \n    _groups.set(_this, groups || _groups.get(re));\n    return setPrototypeOf(_this, BabelRegExp.prototype);\n  }\n  inherits(BabelRegExp, RegExp);\n  BabelRegExp.prototype.exec = function (str) {\n    var result = _super.exec.call(this, str);\n    if (result) result.groups = buildGroups(result, this);\n    return result;\n  };\n  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {\n    if (typeof substitution === "string") {\n      var groups = _groups.get(this);\n      return _super[Symbol.replace].call(\n        this,\n        str,\n        substitution.replace(/\\$<([^>]+)>/g, function (_, name) {\n          return "$" + groups[name];\n        })\n      );\n    } else if (typeof substitution === "function") {\n      var _this = this;\n      return _super[Symbol.replace].call(this, str, function () {\n        var args = arguments;\n        \n        if (typeof args[args.length - 1] !== "object") {\n          args = [].slice.call(args);\n          args.push(buildGroups(args, _this));\n        }\n        return substitution.apply(this, args);\n      });\n    } else {\n      return _super[Symbol.replace].call(this, str, substitution);\n    }\n  };\n  function buildGroups(result, re) {\n    \n    \n    var g = _groups.get(re);\n    return Object.keys(g).reduce(function (groups, name) {\n      groups[name] = result[g[name]];\n      return groups;\n    }, Object.create(null));\n  }\n  return _wrapRegExp.apply(this, arguments);\n}\n')};t.wrapRegExp=o},71432:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(36900);var i=r(67514);const a=Object.assign({__proto__:null},i);var s=a;t.default=s;const o=e=>t=>({minVersion:e,ast:()=>n.default.program.ast(t)});a.asyncIterator=o("7.0.0-beta.0")`
  export default function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator];
      if (method == null && Symbol.iterator) method = iterable[Symbol.iterator];
    }
    if (method == null) method = iterable["@@asyncIterator"];
    if (method == null) method = iterable["@@iterator"]
    if (method == null) throw new TypeError("Object is not async iterable");
    return method.call(iterable);
  }
`;a.AwaitValue=o("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`;a.AsyncGenerator=o("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`;a.wrapAsyncGenerator=o("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`;a.awaitAsyncGenerator=o("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`;a.asyncGeneratorDelegate=o("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () { return this; };

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`;a.asyncToGenerator=o("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`;a.classCallCheck=o("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`;a.createClass=o("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`;a.defineEnumerableProperties=o("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`;a.defaults=o("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`;a.defineProperty=o("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`;a.extends=o("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`;a.objectSpread=o("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`;a.inherits=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`;a.inheritsLoose=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
  }
`;a.getPrototypeOf=o("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`;a.setPrototypeOf=o("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`;a.isNativeReflectConstruct=o("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Boolean object.

      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`;a.construct=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`;a.isNativeFunction=o("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`;a.wrapNativeSuper=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`;a.instanceof=o("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`;a.interopRequireDefault=o("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`;a.interopRequireWildcard=o("7.14.0")`
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  export default function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`;a.newArrowCheck=o("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`;a.objectDestructuringEmpty=o("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`;a.objectWithoutPropertiesLoose=o("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`;a.objectWithoutProperties=o("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`;a.assertThisInitialized=o("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`;a.possibleConstructorReturn=o("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }
`;a.createSuper=o("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `;a.superPropBase=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`;a.get=o("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`;a.set=o("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`;a.taggedTemplateLiteral=o("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`;a.taggedTemplateLiteralLoose=o("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`;a.readOnlyError=o("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`;a.writeOnlyError=o("7.12.13")`
  export default function _writeOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is write-only");
  }
`;a.classNameTDZError=o("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`;a.temporalUndefined=o("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`;a.tdz=o("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`;a.temporalRef=o("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`;a.slicedToArray=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`;a.slicedToArrayLoose=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`;a.toArray=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`;a.toConsumableArray=o("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`;a.arrayWithoutHoles=o("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`;a.arrayWithHoles=o("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`;a.maybeArrayLike=o("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`;a.iterableToArray=o("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
`;a.iterableToArrayLimit=o("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`;a.iterableToArrayLimitLoose=o("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`;a.unsupportedIterableToArray=o("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`;a.arrayLikeToArray=o("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`;a.nonIterableSpread=o("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`;a.nonIterableRest=o("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`;a.createForOfIteratorHelper=o("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`;a.createForOfIteratorHelperLoose=o("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (it) return (it = it.call(o)).next.bind(it);

    // Fallback for engines without symbol support
    if (
      Array.isArray(o) ||
      (it = unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
`;a.skipFirstGeneratorNext=o("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`;a.toPrimitive=o("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`;a.toPropertyKey=o("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`;a.initializerWarningHelper=o("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`;a.initializerDefineProperty=o("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`;a.applyDecoratedDescriptor=o("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`;a.classPrivateFieldLooseKey=o("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`;a.classPrivateFieldLooseBase=o("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`;a.classPrivateFieldGet=o("7.0.0-beta.0")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`;a.classPrivateFieldSet=o("7.0.0-beta.0")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`;a.classPrivateFieldDestructureSet=o("7.4.4")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`;a.classExtractFieldDescriptor=o("7.13.10")`
  export default function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
`;a.classStaticPrivateFieldSpecGet=o("7.0.2")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`;a.classStaticPrivateFieldSpecSet=o("7.0.2")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`;a.classStaticPrivateMethodGet=o("7.3.2")`
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
`;a.classStaticPrivateMethodSet=o("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`;a.classApplyDescriptorGet=o("7.13.10")`
  export default function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`;a.classApplyDescriptorSet=o("7.13.10")`
  export default function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
`;a.classApplyDescriptorDestructureSet=o("7.13.10")`
  export default function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`;a.classStaticPrivateFieldDestructureSet=o("7.13.10")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`;a.classCheckPrivateStaticAccess=o("7.13.10")`
  export default function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
`;a.classCheckPrivateStaticFieldDescriptor=o("7.13.10")`
  export default function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
`;a.decorate=o("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`;a.classPrivateMethodGet=o("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`;{a.classPrivateMethodSet=o("7.1.6")`
    export default function _classPrivateMethodSet() {
      throw new TypeError("attempted to reassign private method");
    }