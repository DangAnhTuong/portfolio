(function(){const O=document.createElement("link").relList;if(O&&O.supports&&O.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))d(k);new MutationObserver(k=>{for(const M of k)if(M.type==="childList")for(const q of M.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&d(q)}).observe(document,{childList:!0,subtree:!0});function w(k){const M={};return k.integrity&&(M.integrity=k.integrity),k.referrerPolicy&&(M.referrerPolicy=k.referrerPolicy),k.crossOrigin==="use-credentials"?M.credentials="include":k.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function d(k){if(k.ep)return;k.ep=!0;const M=w(k);fetch(k.href,M)}})();function Jd(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var Sr={exports:{}},Hn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function A0(){if(Ud)return Hn;Ud=1;var x=Symbol.for("react.transitional.element"),O=Symbol.for("react.fragment");function w(d,k,M){var q=null;if(M!==void 0&&(q=""+M),k.key!==void 0&&(q=""+k.key),"key"in k){M={};for(var ne in k)ne!=="key"&&(M[ne]=k[ne])}else M=k;return k=M.ref,{$$typeof:x,type:d,key:q,ref:k!==void 0?k:null,props:M}}return Hn.Fragment=O,Hn.jsx=w,Hn.jsxs=w,Hn}var kd;function T0(){return kd||(kd=1,Sr.exports=A0()),Sr.exports}var u=T0(),jr={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function M0(){if(Hd)return Z;Hd=1;var x=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),q=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),he=Symbol.iterator;function Ge(r){return r===null||typeof r!="object"?null:(r=he&&r[he]||r["@@iterator"],typeof r=="function"?r:null)}var ze={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Te=Object.assign,ie={};function Ie(r,g,z){this.props=r,this.context=g,this.refs=ie,this.updater=z||ze}Ie.prototype.isReactComponent={},Ie.prototype.setState=function(r,g){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,g,"setState")},Ie.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ya(){}Ya.prototype=Ie.prototype;function De(r,g,z){this.props=r,this.context=g,this.refs=ie,this.updater=z||ze}var ta=De.prototype=new Ya;ta.constructor=De,Te(ta,Ie.prototype),ta.isPureReactComponent=!0;var Sa=Array.isArray;function Ke(){}var P={H:null,A:null,T:null,S:null},Je=Object.prototype.hasOwnProperty;function ja(r,g,z){var E=z.ref;return{$$typeof:x,type:r,key:g,ref:E!==void 0?E:null,props:z}}function ot(r,g){return ja(r.type,g,r.props)}function za(r){return typeof r=="object"&&r!==null&&r.$$typeof===x}function Fe(r){var g={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(z){return g[z]})}var Xa=/\/+/g;function Na(r,g){return typeof r=="object"&&r!==null&&r.key!=null?Fe(""+r.key):g.toString(36)}function Pe(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Ke,Ke):(r.status="pending",r.then(function(g){r.status==="pending"&&(r.status="fulfilled",r.value=g)},function(g){r.status==="pending"&&(r.status="rejected",r.reason=g)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function j(r,g,z,E,C){var R=typeof r;(R==="undefined"||R==="boolean")&&(r=null);var _=!1;if(r===null)_=!0;else switch(R){case"bigint":case"string":case"number":_=!0;break;case"object":switch(r.$$typeof){case x:case O:_=!0;break;case J:return _=r._init,j(_(r._payload),g,z,E,C)}}if(_)return C=C(r),_=E===""?"."+Na(r,0):E,Sa(C)?(z="",_!=null&&(z=_.replace(Xa,"$&/")+"/"),j(C,g,z,"",function(ge){return ge})):C!=null&&(za(C)&&(C=ot(C,z+(C.key==null||r&&r.key===C.key?"":(""+C.key).replace(Xa,"$&/")+"/")+_)),g.push(C)),1;_=0;var L=E===""?".":E+":";if(Sa(r))for(var X=0;X<r.length;X++)E=r[X],R=L+Na(E,X),_+=j(E,g,z,R,C);else if(X=Ge(r),typeof X=="function")for(r=X.call(r),X=0;!(E=r.next()).done;)E=E.value,R=L+Na(E,X++),_+=j(E,g,z,R,C);else if(R==="object"){if(typeof r.then=="function")return j(Pe(r),g,z,E,C);throw g=String(r),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.")}return _}function D(r,g,z){if(r==null)return r;var E=[],C=0;return j(r,E,"","",function(R){return g.call(z,R,C++)}),E}function V(r){if(r._status===-1){var g=r._result;g=g(),g.then(function(z){(r._status===0||r._status===-1)&&(r._status=1,r._result=z)},function(z){(r._status===0||r._status===-1)&&(r._status=2,r._result=z)}),r._status===-1&&(r._status=0,r._result=g)}if(r._status===1)return r._result.default;throw r._result}var oe=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},h={map:D,forEach:function(r,g,z){D(r,function(){g.apply(this,arguments)},z)},count:function(r){var g=0;return D(r,function(){g++}),g},toArray:function(r){return D(r,function(g){return g})||[]},only:function(r){if(!za(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return Z.Activity=G,Z.Children=h,Z.Component=Ie,Z.Fragment=w,Z.Profiler=k,Z.PureComponent=De,Z.StrictMode=d,Z.Suspense=H,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,Z.__COMPILER_RUNTIME={__proto__:null,c:function(r){return P.H.useMemoCache(r)}},Z.cache=function(r){return function(){return r.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(r,g,z){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var E=Te({},r.props),C=r.key;if(g!=null)for(R in g.key!==void 0&&(C=""+g.key),g)!Je.call(g,R)||R==="key"||R==="__self"||R==="__source"||R==="ref"&&g.ref===void 0||(E[R]=g[R]);var R=arguments.length-2;if(R===1)E.children=z;else if(1<R){for(var _=Array(R),L=0;L<R;L++)_[L]=arguments[L+2];E.children=_}return ja(r.type,C,E)},Z.createContext=function(r){return r={$$typeof:q,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:M,_context:r},r},Z.createElement=function(r,g,z){var E,C={},R=null;if(g!=null)for(E in g.key!==void 0&&(R=""+g.key),g)Je.call(g,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(C[E]=g[E]);var _=arguments.length-2;if(_===1)C.children=z;else if(1<_){for(var L=Array(_),X=0;X<_;X++)L[X]=arguments[X+2];C.children=L}if(r&&r.defaultProps)for(E in _=r.defaultProps,_)C[E]===void 0&&(C[E]=_[E]);return ja(r,R,C)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(r){return{$$typeof:ne,render:r}},Z.isValidElement=za,Z.lazy=function(r){return{$$typeof:J,_payload:{_status:-1,_result:r},_init:V}},Z.memo=function(r,g){return{$$typeof:T,type:r,compare:g===void 0?null:g}},Z.startTransition=function(r){var g=P.T,z={};P.T=z;try{var E=r(),C=P.S;C!==null&&C(z,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(Ke,oe)}catch(R){oe(R)}finally{g!==null&&z.types!==null&&(g.types=z.types),P.T=g}},Z.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},Z.use=function(r){return P.H.use(r)},Z.useActionState=function(r,g,z){return P.H.useActionState(r,g,z)},Z.useCallback=function(r,g){return P.H.useCallback(r,g)},Z.useContext=function(r){return P.H.useContext(r)},Z.useDebugValue=function(){},Z.useDeferredValue=function(r,g){return P.H.useDeferredValue(r,g)},Z.useEffect=function(r,g){return P.H.useEffect(r,g)},Z.useEffectEvent=function(r){return P.H.useEffectEvent(r)},Z.useId=function(){return P.H.useId()},Z.useImperativeHandle=function(r,g,z){return P.H.useImperativeHandle(r,g,z)},Z.useInsertionEffect=function(r,g){return P.H.useInsertionEffect(r,g)},Z.useLayoutEffect=function(r,g){return P.H.useLayoutEffect(r,g)},Z.useMemo=function(r,g){return P.H.useMemo(r,g)},Z.useOptimistic=function(r,g){return P.H.useOptimistic(r,g)},Z.useReducer=function(r,g,z){return P.H.useReducer(r,g,z)},Z.useRef=function(r){return P.H.useRef(r)},Z.useState=function(r){return P.H.useState(r)},Z.useSyncExternalStore=function(r,g,z){return P.H.useSyncExternalStore(r,g,z)},Z.useTransition=function(){return P.H.useTransition()},Z.version="19.2.8",Z}var Bd;function Dr(){return Bd||(Bd=1,jr.exports=M0()),jr.exports}var Ae=Dr();const Fd=Jd(Ae);var zr={exports:{}},Bn={},Nr={exports:{}},Ar={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function E0(){return qd||(qd=1,(function(x){function O(j,D){var V=j.length;j.push(D);e:for(;0<V;){var oe=V-1>>>1,h=j[oe];if(0<k(h,D))j[oe]=D,j[V]=h,V=oe;else break e}}function w(j){return j.length===0?null:j[0]}function d(j){if(j.length===0)return null;var D=j[0],V=j.pop();if(V!==D){j[0]=V;e:for(var oe=0,h=j.length,r=h>>>1;oe<r;){var g=2*(oe+1)-1,z=j[g],E=g+1,C=j[E];if(0>k(z,V))E<h&&0>k(C,z)?(j[oe]=C,j[E]=V,oe=E):(j[oe]=z,j[g]=V,oe=g);else if(E<h&&0>k(C,V))j[oe]=C,j[E]=V,oe=E;else break e}}return D}function k(j,D){var V=j.sortIndex-D.sortIndex;return V!==0?V:j.id-D.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;x.unstable_now=function(){return M.now()}}else{var q=Date,ne=q.now();x.unstable_now=function(){return q.now()-ne}}var H=[],T=[],J=1,G=null,he=3,Ge=!1,ze=!1,Te=!1,ie=!1,Ie=typeof setTimeout=="function"?setTimeout:null,Ya=typeof clearTimeout=="function"?clearTimeout:null,De=typeof setImmediate<"u"?setImmediate:null;function ta(j){for(var D=w(T);D!==null;){if(D.callback===null)d(T);else if(D.startTime<=j)d(T),D.sortIndex=D.expirationTime,O(H,D);else break;D=w(T)}}function Sa(j){if(Te=!1,ta(j),!ze)if(w(H)!==null)ze=!0,Ke||(Ke=!0,Fe());else{var D=w(T);D!==null&&Pe(Sa,D.startTime-j)}}var Ke=!1,P=-1,Je=5,ja=-1;function ot(){return ie?!0:!(x.unstable_now()-ja<Je)}function za(){if(ie=!1,Ke){var j=x.unstable_now();ja=j;var D=!0;try{e:{ze=!1,Te&&(Te=!1,Ya(P),P=-1),Ge=!0;var V=he;try{a:{for(ta(j),G=w(H);G!==null&&!(G.expirationTime>j&&ot());){var oe=G.callback;if(typeof oe=="function"){G.callback=null,he=G.priorityLevel;var h=oe(G.expirationTime<=j);if(j=x.unstable_now(),typeof h=="function"){G.callback=h,ta(j),D=!0;break a}G===w(H)&&d(H),ta(j)}else d(H);G=w(H)}if(G!==null)D=!0;else{var r=w(T);r!==null&&Pe(Sa,r.startTime-j),D=!1}}break e}finally{G=null,he=V,Ge=!1}D=void 0}}finally{D?Fe():Ke=!1}}}var Fe;if(typeof De=="function")Fe=function(){De(za)};else if(typeof MessageChannel<"u"){var Xa=new MessageChannel,Na=Xa.port2;Xa.port1.onmessage=za,Fe=function(){Na.postMessage(null)}}else Fe=function(){Ie(za,0)};function Pe(j,D){P=Ie(function(){j(x.unstable_now())},D)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(j){j.callback=null},x.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Je=0<j?Math.floor(1e3/j):5},x.unstable_getCurrentPriorityLevel=function(){return he},x.unstable_next=function(j){switch(he){case 1:case 2:case 3:var D=3;break;default:D=he}var V=he;he=D;try{return j()}finally{he=V}},x.unstable_requestPaint=function(){ie=!0},x.unstable_runWithPriority=function(j,D){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var V=he;he=j;try{return D()}finally{he=V}},x.unstable_scheduleCallback=function(j,D,V){var oe=x.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?oe+V:oe):V=oe,j){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=V+h,j={id:J++,callback:D,priorityLevel:j,startTime:V,expirationTime:h,sortIndex:-1},V>oe?(j.sortIndex=V,O(T,j),w(H)===null&&j===w(T)&&(Te?(Ya(P),P=-1):Te=!0,Pe(Sa,V-oe))):(j.sortIndex=h,O(H,j),ze||Ge||(ze=!0,Ke||(Ke=!0,Fe()))),j},x.unstable_shouldYield=ot,x.unstable_wrapCallback=function(j){var D=he;return function(){var V=he;he=D;try{return j.apply(this,arguments)}finally{he=V}}}})(Ar)),Ar}var Yd;function C0(){return Yd||(Yd=1,Nr.exports=E0()),Nr.exports}var Tr={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function _0(){if(Gd)return $e;Gd=1;var x=Dr();function O(H){var T="https://react.dev/errors/"+H;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var J=2;J<arguments.length;J++)T+="&args[]="+encodeURIComponent(arguments[J])}return"Minified React error #"+H+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(){}var d={d:{f:w,r:function(){throw Error(O(522))},D:w,C:w,L:w,m:w,X:w,S:w,M:w},p:0,findDOMNode:null},k=Symbol.for("react.portal");function M(H,T,J){var G=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:G==null?null:""+G,children:H,containerInfo:T,implementation:J}}var q=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ne(H,T){if(H==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,$e.createPortal=function(H,T){var J=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(O(299));return M(H,T,null,J)},$e.flushSync=function(H){var T=q.T,J=d.p;try{if(q.T=null,d.p=2,H)return H()}finally{q.T=T,d.p=J,d.d.f()}},$e.preconnect=function(H,T){typeof H=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,d.d.C(H,T))},$e.prefetchDNS=function(H){typeof H=="string"&&d.d.D(H)},$e.preinit=function(H,T){if(typeof H=="string"&&T&&typeof T.as=="string"){var J=T.as,G=ne(J,T.crossOrigin),he=typeof T.integrity=="string"?T.integrity:void 0,Ge=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;J==="style"?d.d.S(H,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:G,integrity:he,fetchPriority:Ge}):J==="script"&&d.d.X(H,{crossOrigin:G,integrity:he,fetchPriority:Ge,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},$e.preinitModule=function(H,T){if(typeof H=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var J=ne(T.as,T.crossOrigin);d.d.M(H,{crossOrigin:J,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&d.d.M(H)},$e.preload=function(H,T){if(typeof H=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var J=T.as,G=ne(J,T.crossOrigin);d.d.L(H,J,{crossOrigin:G,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},$e.preloadModule=function(H,T){if(typeof H=="string")if(T){var J=ne(T.as,T.crossOrigin);d.d.m(H,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:J,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else d.d.m(H)},$e.requestFormReset=function(H){d.d.r(H)},$e.unstable_batchedUpdates=function(H,T){return H(T)},$e.useFormState=function(H,T,J){return q.H.useFormState(H,T,J)},$e.useFormStatus=function(){return q.H.useHostTransitionStatus()},$e.version="19.2.8",$e}var Ld;function D0(){if(Ld)return Tr.exports;Ld=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(O){console.error(O)}}return x(),Tr.exports=_0(),Tr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function O0(){if(Qd)return Bn;Qd=1;var x=C0(),O=Dr(),w=D0();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function M(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function q(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function ne(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function H(e){if(M(e)!==e)throw Error(d(188))}function T(e){var a=e.alternate;if(!a){if(a=M(e),a===null)throw Error(d(188));return a!==e?null:e}for(var t=e,l=a;;){var n=t.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){t=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===t)return H(n),e;if(i===l)return H(n),a;i=i.sibling}throw Error(d(188))}if(t.return!==l.return)t=n,l=i;else{for(var c=!1,s=n.child;s;){if(s===t){c=!0,t=n,l=i;break}if(s===l){c=!0,l=n,t=i;break}s=s.sibling}if(!c){for(s=i.child;s;){if(s===t){c=!0,t=i,l=n;break}if(s===l){c=!0,l=i,t=n;break}s=s.sibling}if(!c)throw Error(d(189))}}if(t.alternate!==l)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:a}function J(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=J(e),a!==null)return a;e=e.sibling}return null}var G=Object.assign,he=Symbol.for("react.element"),Ge=Symbol.for("react.transitional.element"),ze=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Ya=Symbol.for("react.consumer"),De=Symbol.for("react.context"),ta=Symbol.for("react.forward_ref"),Sa=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),ja=Symbol.for("react.activity"),ot=Symbol.for("react.memo_cache_sentinel"),za=Symbol.iterator;function Fe(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var Xa=Symbol.for("react.client.reference");function Na(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case Ie:return"Profiler";case ie:return"StrictMode";case Sa:return"Suspense";case Ke:return"SuspenseList";case ja:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ze:return"Portal";case De:return e.displayName||"Context";case Ya:return(e._context.displayName||"Context")+".Consumer";case ta:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return a=e.displayName||null,a!==null?a:Na(e.type)||"Memo";case Je:a=e._payload,e=e._init;try{return Na(e(a))}catch{}}return null}var Pe=Array.isArray,j=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},oe=[],h=-1;function r(e){return{current:e}}function g(e){0>h||(e.current=oe[h],oe[h]=null,h--)}function z(e,a){h++,oe[h]=e.current,e.current=a}var E=r(null),C=r(null),R=r(null),_=r(null);function L(e,a){switch(z(R,a),z(C,e),z(E,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?nd(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=nd(a),e=id(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}g(E),z(E,e)}function X(){g(E),g(C),g(R)}function ge(e){e.memoizedState!==null&&z(_,e);var a=E.current,t=id(a,e.type);a!==t&&(z(C,e),z(E,t))}function fe(e){C.current===e&&(g(E),g(C)),_.current===e&&(g(_),wn._currentValue=V)}var xe,Oe;function F(e){if(xe===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);xe=a&&a[1]||"",Oe=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xe+e+Oe}var Be=!1;function ea(e,a){if(!e||Be)return"";Be=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var y=b}Reflect.construct(e,[],A)}else{try{A.call()}catch(b){y=b}e.call(A.prototype)}}else{try{throw Error()}catch(b){y=b}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],s=i[1];if(c&&s){var o=c.split(`
`),v=s.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===v.length)for(l=o.length-1,n=v.length-1;1<=l&&0<=n&&o[l]!==v[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==v[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==v[n]){var S=`
`+o[l].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=l&&0<=n);break}}}finally{Be=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?F(t):""}function fa(e,a){switch(e.tag){case 26:case 27:case 5:return F(e.type);case 16:return F("Lazy");case 13:return e.child!==a&&a!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return ea(e.type,!1);case 11:return ea(e.type.render,!1);case 1:return ea(e.type,!0);case 31:return F("Activity");default:return""}}function Aa(e){try{var a="",t=null;do a+=fa(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ka=Object.prototype.hasOwnProperty,la=x.unstable_scheduleCallback,Gl=x.unstable_cancelCallback,ic=x.unstable_shouldYield,cc=x.unstable_requestPaint,We=x.unstable_now,uc=x.unstable_getCurrentPriorityLevel,Ll=x.unstable_ImmediatePriority,Gn=x.unstable_UserBlockingPriority,al=x.unstable_NormalPriority,Ln=x.unstable_LowPriority,Ql=x.unstable_IdlePriority,Vl=x.log,rc=x.unstable_setDisableYieldValue,kt=null,da=null;function ft(e){if(typeof Vl=="function"&&rc(e),da&&typeof da.setStrictMode=="function")try{da.setStrictMode(kt,e)}catch{}}var ma=Math.clz32?Math.clz32:fm,sm=Math.log,om=Math.LN2;function fm(e){return e>>>=0,e===0?32:31-(sm(e)/om|0)|0}var Qn=256,Vn=262144,Xn=4194304;function Ht(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zn(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Ht(l):(c&=s,c!==0?n=Ht(c):t||(t=s&~e,t!==0&&(n=Ht(t))))):(s=l&~i,s!==0?n=Ht(s):c!==0?n=Ht(c):t||(t=l&~e,t!==0&&(n=Ht(t)))),n===0?0:a!==0&&a!==n&&(a&i)===0&&(i=n&-n,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:n}function Xl(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function dm(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hr(){var e=Xn;return Xn<<=1,(Xn&62914560)===0&&(Xn=4194304),e}function sc(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Zl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mm(e,a,t,l,n,i){var c=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,v=e.hiddenUpdates;for(t=c&~t;0<t;){var S=31-ma(t),A=1<<S;s[S]=0,o[S]=-1;var y=v[S];if(y!==null)for(v[S]=null,S=0;S<y.length;S++){var b=y[S];b!==null&&(b.lane&=-536870913)}t&=~A}l!==0&&Br(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~a))}function Br(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-ma(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function qr(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-ma(t),n=1<<l;n&a|e[l]&a&&(e[l]|=a),t&=~n}}function Yr(e,a){var t=a&-a;return t=(t&42)!==0?1:oc(t),(t&(e.suspendedLanes|a))!==0?0:t}function oc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gr(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:Ed(e.type))}function Lr(e,a){var t=D.p;try{return D.p=e,a()}finally{D.p=t}}var dt=Math.random().toString(36).slice(2),Le="__reactFiber$"+dt,na="__reactProps$"+dt,tl="__reactContainer$"+dt,dc="__reactEvents$"+dt,hm="__reactListeners$"+dt,gm="__reactHandles$"+dt,Qr="__reactResources$"+dt,Kl="__reactMarker$"+dt;function mc(e){delete e[Le],delete e[na],delete e[dc],delete e[hm],delete e[gm]}function ll(e){var a=e[Le];if(a)return a;for(var t=e.parentNode;t;){if(a=t[tl]||t[Le]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=dd(e);e!==null;){if(t=e[Le])return t;e=dd(e)}return a}e=t,t=e.parentNode}return null}function nl(e){if(e=e[Le]||e[tl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Jl(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function il(e){var a=e[Qr];return a||(a=e[Qr]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function qe(e){e[Kl]=!0}var Vr=new Set,Xr={};function Bt(e,a){cl(e,a),cl(e+"Capture",a)}function cl(e,a){for(Xr[e]=a,e=0;e<a.length;e++)Vr.add(a[e])}var pm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zr={},Kr={};function vm(e){return ka.call(Kr,e)?!0:ka.call(Zr,e)?!1:pm.test(e)?Kr[e]=!0:(Zr[e]=!0,!1)}function Kn(e,a,t){if(vm(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Jn(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Za(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function Ta(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jr(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ym(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(c){t=""+c,i.call(this,c)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function hc(e){if(!e._valueTracker){var a=Jr(e)?"checked":"value";e._valueTracker=ym(e,a,""+e[a])}}function Fr(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=Jr(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function Fn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bm=/[\n"\\]/g;function Ma(e){return e.replace(bm,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function gc(e,a,t,l,n,i,c,s){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),a!=null?c==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ta(a)):e.value!==""+Ta(a)&&(e.value=""+Ta(a)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),a!=null?pc(e,c,Ta(a)):t!=null?pc(e,c,Ta(t)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Ta(s):e.removeAttribute("name")}function Wr(e,a,t,l,n,i,c,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){hc(e);return}t=t!=null?""+Ta(t):"",a=a!=null?""+Ta(a):t,s||a===e.value||(e.value=a),e.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),hc(e)}function pc(e,a,t){a==="number"&&Fn(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ul(e,a,t,l){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Ta(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function $r(e,a,t){if(a!=null&&(a=""+Ta(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Ta(t):""}function Ir(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(d(92));if(Pe(l)){if(1<l.length)throw Error(d(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=Ta(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),hc(e)}function rl(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var xm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pr(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||xm.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function es(e,a,t){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&t[n]!==l&&Pr(e,n,l)}else for(var i in a)a.hasOwnProperty(i)&&Pr(e,i,a[i])}function vc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wn(e){return jm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ka(){}var yc=null;function bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,ol=null;function as(e){var a=nl(e);if(a&&(e=a.stateNode)){var t=e[na]||null;e:switch(e=a.stateNode,a.type){case"input":if(gc(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ma(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var n=l[na]||null;if(!n)throw Error(d(90));gc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&Fr(l)}break e;case"textarea":$r(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&ul(e,!!t.multiple,a,!1)}}}var xc=!1;function ts(e,a,t){if(xc)return e(a,t);xc=!0;try{var l=e(a);return l}finally{if(xc=!1,(sl!==null||ol!==null)&&(Hi(),sl&&(a=sl,e=ol,ol=sl=null,as(a),e)))for(a=0;a<e.length;a++)as(e[a])}}function Fl(e,a){var t=e.stateNode;if(t===null)return null;var l=t[na]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,a,typeof t));return t}var Ja=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sc=!1;if(Ja)try{var Wl={};Object.defineProperty(Wl,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",Wl,Wl),window.removeEventListener("test",Wl,Wl)}catch{Sc=!1}var mt=null,jc=null,$n=null;function ls(){if($n)return $n;var e,a=jc,t=a.length,l,n="value"in mt?mt.value:mt.textContent,i=n.length;for(e=0;e<t&&a[e]===n[e];e++);var c=t-e;for(l=1;l<=c&&a[t-l]===n[i-l];l++);return $n=n.slice(e,1<l?1-l:void 0)}function In(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function ns(){return!1}function ia(e){function a(t,l,n,i,c){this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pn:ns,this.isPropagationStopped=ns,this}return G(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),a}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=ia(qt),$l=G({},qt,{view:0,detail:0}),zm=ia($l),zc,Nc,Il,ai=G({},$l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Il&&(Il&&e.type==="mousemove"?(zc=e.screenX-Il.screenX,Nc=e.screenY-Il.screenY):Nc=zc=0,Il=e),zc)},movementY:function(e){return"movementY"in e?e.movementY:Nc}}),is=ia(ai),Nm=G({},ai,{dataTransfer:0}),Am=ia(Nm),Tm=G({},$l,{relatedTarget:0}),Ac=ia(Tm),Mm=G({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=ia(Mm),Cm=G({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_m=ia(Cm),Dm=G({},qt,{data:0}),cs=ia(Dm),Om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Um(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Rm[e])?!!a[e]:!1}function Tc(){return Um}var km=G({},$l,{key:function(e){if(e.key){var a=Om[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=In(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?In(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?In(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hm=ia(km),Bm=G({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),us=ia(Bm),qm=G({},$l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),Ym=ia(qm),Gm=G({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lm=ia(Gm),Qm=G({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vm=ia(Qm),Xm=G({},qt,{newState:0,oldState:0}),Zm=ia(Xm),Km=[9,13,27,32],Mc=Ja&&"CompositionEvent"in window,Pl=null;Ja&&"documentMode"in document&&(Pl=document.documentMode);var Jm=Ja&&"TextEvent"in window&&!Pl,rs=Ja&&(!Mc||Pl&&8<Pl&&11>=Pl),ss=" ",os=!1;function fs(e,a){switch(e){case"keyup":return Km.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function Fm(e,a){switch(e){case"compositionend":return ds(a);case"keypress":return a.which!==32?null:(os=!0,ss);case"textInput":return e=a.data,e===ss&&os?null:e;default:return null}}function Wm(e,a){if(fl)return e==="compositionend"||!Mc&&fs(e,a)?(e=ls(),$n=jc=mt=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return rs&&a.locale!=="ko"?null:a.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!$m[e.type]:a==="textarea"}function hs(e,a,t,l){sl?ol?ol.push(l):ol=[l]:sl=l,a=Vi(a,"onChange"),0<a.length&&(t=new ei("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var en=null,an=null;function Im(e){If(e,0)}function ti(e){var a=Jl(e);if(Fr(a))return e}function gs(e,a){if(e==="change")return a}var ps=!1;if(Ja){var Ec;if(Ja){var Cc="oninput"in document;if(!Cc){var vs=document.createElement("div");vs.setAttribute("oninput","return;"),Cc=typeof vs.oninput=="function"}Ec=Cc}else Ec=!1;ps=Ec&&(!document.documentMode||9<document.documentMode)}function ys(){en&&(en.detachEvent("onpropertychange",bs),an=en=null)}function bs(e){if(e.propertyName==="value"&&ti(an)){var a=[];hs(a,an,e,bc(e)),ts(Im,a)}}function Pm(e,a,t){e==="focusin"?(ys(),en=a,an=t,en.attachEvent("onpropertychange",bs)):e==="focusout"&&ys()}function eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(an)}function ah(e,a){if(e==="click")return ti(a)}function th(e,a){if(e==="input"||e==="change")return ti(a)}function lh(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ha=typeof Object.is=="function"?Object.is:lh;function tn(e,a){if(ha(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var n=t[l];if(!ka.call(a,n)||!ha(e[n],a[n]))return!1}return!0}function xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ss(e,a){var t=xs(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xs(t)}}function js(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?js(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function zs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Fn(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Fn(e.document)}return a}function _c(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var nh=Ja&&"documentMode"in document&&11>=document.documentMode,dl=null,Dc=null,ln=null,Oc=!1;function Ns(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Oc||dl==null||dl!==Fn(l)||(l=dl,"selectionStart"in l&&_c(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ln&&tn(ln,l)||(ln=l,l=Vi(Dc,"onSelect"),0<l.length&&(a=new ei("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=dl)))}function Yt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var ml={animationend:Yt("Animation","AnimationEnd"),animationiteration:Yt("Animation","AnimationIteration"),animationstart:Yt("Animation","AnimationStart"),transitionrun:Yt("Transition","TransitionRun"),transitionstart:Yt("Transition","TransitionStart"),transitioncancel:Yt("Transition","TransitionCancel"),transitionend:Yt("Transition","TransitionEnd")},wc={},As={};Ja&&(As=document.createElement("div").style,"AnimationEvent"in window||(delete ml.animationend.animation,delete ml.animationiteration.animation,delete ml.animationstart.animation),"TransitionEvent"in window||delete ml.transitionend.transition);function Gt(e){if(wc[e])return wc[e];if(!ml[e])return e;var a=ml[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in As)return wc[e]=a[t];return e}var Ts=Gt("animationend"),Ms=Gt("animationiteration"),Es=Gt("animationstart"),ih=Gt("transitionrun"),ch=Gt("transitionstart"),uh=Gt("transitioncancel"),Cs=Gt("transitionend"),_s=new Map,Rc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rc.push("scrollEnd");function Ha(e,a){_s.set(e,a),Bt(a,[e])}var li=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ea=[],hl=0,Uc=0;function ni(){for(var e=hl,a=Uc=hl=0;a<e;){var t=Ea[a];Ea[a++]=null;var l=Ea[a];Ea[a++]=null;var n=Ea[a];Ea[a++]=null;var i=Ea[a];if(Ea[a++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Ds(t,n,i)}}function ii(e,a,t,l){Ea[hl++]=e,Ea[hl++]=a,Ea[hl++]=t,Ea[hl++]=l,Uc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function kc(e,a,t,l){return ii(e,a,t,l),ci(e)}function Lt(e,a){return ii(e,null,null,a),ci(e)}function Ds(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var n=!1,i=e.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&a!==null&&(n=31-ma(t),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[a]:l.push(a),a.lane=t|536870912),i):null}function ci(e){if(50<Tn)throw Tn=0,Xu=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var gl={};function rh(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ga(e,a,t,l){return new rh(e,a,t,l)}function Hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fa(e,a){var t=e.alternate;return t===null?(t=ga(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Os(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ui(e,a,t,l,n,i){var c=0;if(l=e,typeof e=="function")Hc(e)&&(c=1);else if(typeof e=="string")c=m0(e,t,E.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ja:return e=ga(31,t,a,n),e.elementType=ja,e.lanes=i,e;case Te:return Qt(t.children,n,i,a);case ie:c=8,n|=24;break;case Ie:return e=ga(12,t,a,n|2),e.elementType=Ie,e.lanes=i,e;case Sa:return e=ga(13,t,a,n),e.elementType=Sa,e.lanes=i,e;case Ke:return e=ga(19,t,a,n),e.elementType=Ke,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case De:c=10;break e;case Ya:c=9;break e;case ta:c=11;break e;case P:c=14;break e;case Je:c=16,l=null;break e}c=29,t=Error(d(130,e===null?"null":typeof e,"")),l=null}return a=ga(c,t,a,n),a.elementType=e,a.type=l,a.lanes=i,a}function Qt(e,a,t,l){return e=ga(7,e,l,a),e.lanes=t,e}function Bc(e,a,t){return e=ga(6,e,null,a),e.lanes=t,e}function ws(e){var a=ga(18,null,null,0);return a.stateNode=e,a}function qc(e,a,t){return a=ga(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Rs=new WeakMap;function Ca(e,a){if(typeof e=="object"&&e!==null){var t=Rs.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Aa(a)},Rs.set(e,a),a)}return{value:e,source:a,stack:Aa(a)}}var pl=[],vl=0,ri=null,nn=0,_a=[],Da=0,ht=null,Ga=1,La="";function Wa(e,a){pl[vl++]=nn,pl[vl++]=ri,ri=e,nn=a}function Us(e,a,t){_a[Da++]=Ga,_a[Da++]=La,_a[Da++]=ht,ht=e;var l=Ga;e=La;var n=32-ma(l)-1;l&=~(1<<n),t+=1;var i=32-ma(a)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Ga=1<<32-ma(a)+n|t<<n|l,La=i+e}else Ga=1<<i|t<<n|l,La=e}function Yc(e){e.return!==null&&(Wa(e,1),Us(e,1,0))}function Gc(e){for(;e===ri;)ri=pl[--vl],pl[vl]=null,nn=pl[--vl],pl[vl]=null;for(;e===ht;)ht=_a[--Da],_a[Da]=null,La=_a[--Da],_a[Da]=null,Ga=_a[--Da],_a[Da]=null}function ks(e,a){_a[Da++]=Ga,_a[Da++]=La,_a[Da++]=ht,Ga=a.id,La=a.overflow,ht=e}var Qe=null,Se=null,ce=!1,gt=null,Oa=!1,Lc=Error(d(519));function pt(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cn(Ca(a,e)),Lc}function Hs(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[Le]=e,a[na]=l,t){case"dialog":ae("cancel",a),ae("close",a);break;case"iframe":case"object":case"embed":ae("load",a);break;case"video":case"audio":for(t=0;t<En.length;t++)ae(En[t],a);break;case"source":ae("error",a);break;case"img":case"image":case"link":ae("error",a),ae("load",a);break;case"details":ae("toggle",a);break;case"input":ae("invalid",a),Wr(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ae("invalid",a);break;case"textarea":ae("invalid",a),Ir(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||td(a.textContent,t)?(l.popover!=null&&(ae("beforetoggle",a),ae("toggle",a)),l.onScroll!=null&&ae("scroll",a),l.onScrollEnd!=null&&ae("scrollend",a),l.onClick!=null&&(a.onclick=Ka),a=!0):a=!1,a||pt(e,!0)}function Bs(e){for(Qe=e.return;Qe;)switch(Qe.tag){case 5:case 31:case 13:Oa=!1;return;case 27:case 3:Oa=!0;return;default:Qe=Qe.return}}function yl(e){if(e!==Qe)return!1;if(!ce)return Bs(e),ce=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||cr(e.type,e.memoizedProps)),t=!t),t&&Se&&pt(e),Bs(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Se=fd(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Se=fd(e)}else a===27?(a=Se,_t(e.type)?(e=fr,fr=null,Se=e):Se=a):Se=Qe?Ra(e.stateNode.nextSibling):null;return!0}function Vt(){Se=Qe=null,ce=!1}function Qc(){var e=gt;return e!==null&&(sa===null?sa=e:sa.push.apply(sa,e),gt=null),e}function cn(e){gt===null?gt=[e]:gt.push(e)}var Vc=r(null),Xt=null,$a=null;function vt(e,a,t){z(Vc,a._currentValue),a._currentValue=t}function Ia(e){e._currentValue=Vc.current,g(Vc)}function Xc(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function Zc(e,a,t,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var o=0;o<a.length;o++)if(s.context===a[o]){i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Xc(i.return,t,e),l||(c=null);break e}i=s.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(d(341));c.lanes|=t,i=c.alternate,i!==null&&(i.lanes|=t),Xc(c,t,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function bl(e,a,t,l){e=null;for(var n=a,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(d(387));if(c=c.memoizedProps,c!==null){var s=n.type;ha(n.pendingProps.value,c.value)||(e!==null?e.push(s):e=[s])}}else if(n===_.current){if(c=n.alternate,c===null)throw Error(d(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(wn):e=[wn])}n=n.return}e!==null&&Zc(a,e,t,l),a.flags|=262144}function si(e){for(e=e.firstContext;e!==null;){if(!ha(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zt(e){Xt=e,$a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return qs(Xt,e)}function oi(e,a){return Xt===null&&Zt(e),qs(e,a)}function qs(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},$a===null){if(e===null)throw Error(d(308));$a=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else $a=$a.next=a;return t}var sh=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},oh=x.unstable_scheduleCallback,fh=x.unstable_NormalPriority,we={$$typeof:De,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kc(){return{controller:new sh,data:new Map,refCount:0}}function un(e){e.refCount--,e.refCount===0&&oh(fh,function(){e.controller.abort()})}var rn=null,Jc=0,xl=0,Sl=null;function dh(e,a){if(rn===null){var t=rn=[];Jc=0,xl=$u(),Sl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Jc++,a.then(Ys,Ys),a}function Ys(){if(--Jc===0&&rn!==null){Sl!==null&&(Sl.status="fulfilled");var e=rn;rn=null,xl=0,Sl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function mh(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),l}var Gs=j.S;j.S=function(e,a){Tf=We(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&dh(e,a),Gs!==null&&Gs(e,a)};var Kt=r(null);function Fc(){var e=Kt.current;return e!==null?e:be.pooledCache}function fi(e,a){a===null?z(Kt,Kt.current):z(Kt,a.pool)}function Ls(){var e=Fc();return e===null?null:{parent:we._currentValue,pool:e}}var jl=Error(d(460)),Wc=Error(d(474)),di=Error(d(542)),mi={then:function(){}};function Qs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vs(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ka,Ka),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Zs(e),e;default:if(typeof a.status=="string")a.then(Ka,Ka);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Zs(e),e}throw Ft=a,jl}}function Jt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ft=t,jl):t}}var Ft=null;function Xs(){if(Ft===null)throw Error(d(459));var e=Ft;return Ft=null,e}function Zs(e){if(e===jl||e===di)throw Error(d(483))}var zl=null,sn=0;function hi(e){var a=sn;return sn+=1,zl===null&&(zl=[]),Vs(zl,e,a)}function on(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function gi(e,a){throw a.$$typeof===he?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Ks(e){function a(m,f){if(e){var p=m.deletions;p===null?(m.deletions=[f],m.flags|=16):p.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)a(m,f),f=f.sibling;return null}function l(m){for(var f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function n(m,f){return m=Fa(m,f),m.index=0,m.sibling=null,m}function i(m,f,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<f?(m.flags|=67108866,f):p):(m.flags|=67108866,f)):(m.flags|=1048576,f)}function c(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function s(m,f,p,N){return f===null||f.tag!==6?(f=Bc(p,m.mode,N),f.return=m,f):(f=n(f,p),f.return=m,f)}function o(m,f,p,N){var Y=p.type;return Y===Te?S(m,f,p.props.children,N,p.key):f!==null&&(f.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Je&&Jt(Y)===f.type)?(f=n(f,p.props),on(f,p),f.return=m,f):(f=ui(p.type,p.key,p.props,null,m.mode,N),on(f,p),f.return=m,f)}function v(m,f,p,N){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=qc(p,m.mode,N),f.return=m,f):(f=n(f,p.children||[]),f.return=m,f)}function S(m,f,p,N,Y){return f===null||f.tag!==7?(f=Qt(p,m.mode,N,Y),f.return=m,f):(f=n(f,p),f.return=m,f)}function A(m,f,p){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Bc(""+f,m.mode,p),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ge:return p=ui(f.type,f.key,f.props,null,m.mode,p),on(p,f),p.return=m,p;case ze:return f=qc(f,m.mode,p),f.return=m,f;case Je:return f=Jt(f),A(m,f,p)}if(Pe(f)||Fe(f))return f=Qt(f,m.mode,p,null),f.return=m,f;if(typeof f.then=="function")return A(m,hi(f),p);if(f.$$typeof===De)return A(m,oi(m,f),p);gi(m,f)}return null}function y(m,f,p,N){var Y=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return Y!==null?null:s(m,f,""+p,N);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ge:return p.key===Y?o(m,f,p,N):null;case ze:return p.key===Y?v(m,f,p,N):null;case Je:return p=Jt(p),y(m,f,p,N)}if(Pe(p)||Fe(p))return Y!==null?null:S(m,f,p,N,null);if(typeof p.then=="function")return y(m,f,hi(p),N);if(p.$$typeof===De)return y(m,f,oi(m,p),N);gi(m,p)}return null}function b(m,f,p,N,Y){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return m=m.get(p)||null,s(f,m,""+N,Y);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ge:return m=m.get(N.key===null?p:N.key)||null,o(f,m,N,Y);case ze:return m=m.get(N.key===null?p:N.key)||null,v(f,m,N,Y);case Je:return N=Jt(N),b(m,f,p,N,Y)}if(Pe(N)||Fe(N))return m=m.get(p)||null,S(f,m,N,Y,null);if(typeof N.then=="function")return b(m,f,p,hi(N),Y);if(N.$$typeof===De)return b(m,f,p,oi(f,N),Y);gi(f,N)}return null}function U(m,f,p,N){for(var Y=null,ue=null,B=f,W=f=0,le=null;B!==null&&W<p.length;W++){B.index>W?(le=B,B=null):le=B.sibling;var re=y(m,B,p[W],N);if(re===null){B===null&&(B=le);break}e&&B&&re.alternate===null&&a(m,B),f=i(re,f,W),ue===null?Y=re:ue.sibling=re,ue=re,B=le}if(W===p.length)return t(m,B),ce&&Wa(m,W),Y;if(B===null){for(;W<p.length;W++)B=A(m,p[W],N),B!==null&&(f=i(B,f,W),ue===null?Y=B:ue.sibling=B,ue=B);return ce&&Wa(m,W),Y}for(B=l(B);W<p.length;W++)le=b(B,m,W,p[W],N),le!==null&&(e&&le.alternate!==null&&B.delete(le.key===null?W:le.key),f=i(le,f,W),ue===null?Y=le:ue.sibling=le,ue=le);return e&&B.forEach(function(Ut){return a(m,Ut)}),ce&&Wa(m,W),Y}function Q(m,f,p,N){if(p==null)throw Error(d(151));for(var Y=null,ue=null,B=f,W=f=0,le=null,re=p.next();B!==null&&!re.done;W++,re=p.next()){B.index>W?(le=B,B=null):le=B.sibling;var Ut=y(m,B,re.value,N);if(Ut===null){B===null&&(B=le);break}e&&B&&Ut.alternate===null&&a(m,B),f=i(Ut,f,W),ue===null?Y=Ut:ue.sibling=Ut,ue=Ut,B=le}if(re.done)return t(m,B),ce&&Wa(m,W),Y;if(B===null){for(;!re.done;W++,re=p.next())re=A(m,re.value,N),re!==null&&(f=i(re,f,W),ue===null?Y=re:ue.sibling=re,ue=re);return ce&&Wa(m,W),Y}for(B=l(B);!re.done;W++,re=p.next())re=b(B,m,W,re.value,N),re!==null&&(e&&re.alternate!==null&&B.delete(re.key===null?W:re.key),f=i(re,f,W),ue===null?Y=re:ue.sibling=re,ue=re);return e&&B.forEach(function(N0){return a(m,N0)}),ce&&Wa(m,W),Y}function ye(m,f,p,N){if(typeof p=="object"&&p!==null&&p.type===Te&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ge:e:{for(var Y=p.key;f!==null;){if(f.key===Y){if(Y=p.type,Y===Te){if(f.tag===7){t(m,f.sibling),N=n(f,p.props.children),N.return=m,m=N;break e}}else if(f.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Je&&Jt(Y)===f.type){t(m,f.sibling),N=n(f,p.props),on(N,p),N.return=m,m=N;break e}t(m,f);break}else a(m,f);f=f.sibling}p.type===Te?(N=Qt(p.props.children,m.mode,N,p.key),N.return=m,m=N):(N=ui(p.type,p.key,p.props,null,m.mode,N),on(N,p),N.return=m,m=N)}return c(m);case ze:e:{for(Y=p.key;f!==null;){if(f.key===Y)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){t(m,f.sibling),N=n(f,p.children||[]),N.return=m,m=N;break e}else{t(m,f);break}else a(m,f);f=f.sibling}N=qc(p,m.mode,N),N.return=m,m=N}return c(m);case Je:return p=Jt(p),ye(m,f,p,N)}if(Pe(p))return U(m,f,p,N);if(Fe(p)){if(Y=Fe(p),typeof Y!="function")throw Error(d(150));return p=Y.call(p),Q(m,f,p,N)}if(typeof p.then=="function")return ye(m,f,hi(p),N);if(p.$$typeof===De)return ye(m,f,oi(m,p),N);gi(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,f!==null&&f.tag===6?(t(m,f.sibling),N=n(f,p),N.return=m,m=N):(t(m,f),N=Bc(p,m.mode,N),N.return=m,m=N),c(m)):t(m,f)}return function(m,f,p,N){try{sn=0;var Y=ye(m,f,p,N);return zl=null,Y}catch(B){if(B===jl||B===di)throw B;var ue=ga(29,B,null,m.mode);return ue.lanes=N,ue.return=m,ue}finally{}}}var Wt=Ks(!0),Js=Ks(!1),yt=!1;function $c(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ic(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xt(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(se&2)!==0){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=ci(e),Ds(e,null,t),a}return ii(e,l,a,t),ci(e)}function fn(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,qr(e,t)}}function Pc(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var n=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,t=t.next}while(t!==null);i===null?n=i=a:i=i.next=a}else n=i=a;t={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var eu=!1;function dn(){if(eu){var e=Sl;if(e!==null)throw e}}function mn(e,a,t,l){eu=!1;var n=e.updateQueue;yt=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,v=o.next;o.next=null,c===null?i=v:c.next=v,c=o;var S=e.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==c&&(s===null?S.firstBaseUpdate=v:s.next=v,S.lastBaseUpdate=o))}if(i!==null){var A=n.baseState;c=0,S=v=o=null,s=i;do{var y=s.lane&-536870913,b=y!==s.lane;if(b?(te&y)===y:(l&y)===y){y!==0&&y===xl&&(eu=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var U=e,Q=s;y=a;var ye=t;switch(Q.tag){case 1:if(U=Q.payload,typeof U=="function"){A=U.call(ye,A,y);break e}A=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=Q.payload,y=typeof U=="function"?U.call(ye,A,y):U,y==null)break e;A=G({},A,y);break e;case 2:yt=!0}}y=s.callback,y!==null&&(e.flags|=64,b&&(e.flags|=8192),b=n.callbacks,b===null?n.callbacks=[y]:b.push(y))}else b={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(v=S=b,o=A):S=S.next=b,c|=y;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;b=s,s=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);S===null&&(o=A),n.baseState=o,n.firstBaseUpdate=v,n.lastBaseUpdate=S,i===null&&(n.shared.lanes=0),At|=c,e.lanes=c,e.memoizedState=A}}function Fs(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Ws(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Fs(t[e],a)}var Nl=r(null),pi=r(0);function $s(e,a){e=ut,z(pi,e),z(Nl,a),ut=e|a.baseLanes}function au(){z(pi,ut),z(Nl,Nl.current)}function tu(){ut=pi.current,g(Nl),g(pi)}var pa=r(null),wa=null;function St(e){var a=e.alternate;z(Ce,Ce.current&1),z(pa,e),wa===null&&(a===null||Nl.current!==null||a.memoizedState!==null)&&(wa=e)}function lu(e){z(Ce,Ce.current),z(pa,e),wa===null&&(wa=e)}function Is(e){e.tag===22?(z(Ce,Ce.current),z(pa,e),wa===null&&(wa=e)):jt()}function jt(){z(Ce,Ce.current),z(pa,pa.current)}function va(e){g(pa),wa===e&&(wa=null),g(Ce)}var Ce=r(0);function vi(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||sr(t)||or(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Pa=0,K=null,pe=null,Re=null,yi=!1,Al=!1,$t=!1,bi=0,hn=0,Tl=null,hh=0;function Me(){throw Error(d(321))}function nu(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!ha(e[t],a[t]))return!1;return!0}function iu(e,a,t,l,n,i){return Pa=i,K=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,j.H=e===null||e.memoizedState===null?ko:xu,$t=!1,i=t(l,n),$t=!1,Al&&(i=eo(a,t,l,n)),Ps(e),i}function Ps(e){j.H=vn;var a=pe!==null&&pe.next!==null;if(Pa=0,Re=pe=K=null,yi=!1,hn=0,Tl=null,a)throw Error(d(300));e===null||Ue||(e=e.dependencies,e!==null&&si(e)&&(Ue=!0))}function eo(e,a,t,l){K=e;var n=0;do{if(Al&&(Tl=null),hn=0,Al=!1,25<=n)throw Error(d(301));if(n+=1,Re=pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}j.H=Ho,i=a(t,l)}while(Al);return i}function gh(){var e=j.H,a=e.useState()[0];return a=typeof a.then=="function"?gn(a):a,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(K.flags|=1024),a}function cu(){var e=bi!==0;return bi=0,e}function uu(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function ru(e){if(yi){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}yi=!1}Pa=0,Re=pe=K=null,Al=!1,hn=bi=0,Tl=null}function aa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?K.memoizedState=Re=e:Re=Re.next=e,Re}function _e(){if(pe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var a=Re===null?K.memoizedState:Re.next;if(a!==null)Re=a,pe=e;else{if(e===null)throw K.alternate===null?Error(d(467)):Error(d(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Re===null?K.memoizedState=Re=e:Re=Re.next=e}return Re}function xi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gn(e){var a=hn;return hn+=1,Tl===null&&(Tl=[]),e=Vs(Tl,e,a),a=K,(Re===null?a.memoizedState:Re.next)===null&&(a=a.alternate,j.H=a===null||a.memoizedState===null?ko:xu),e}function Si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gn(e);if(e.$$typeof===De)return Ve(e)}throw Error(d(438,String(e)))}function su(e){var a=null,t=K.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=K.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=xi(),K.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=ot;return a.index++,t}function et(e,a){return typeof a=="function"?a(e):a}function ji(e){var a=_e();return ou(a,pe,e)}function ou(e,a,t){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=t;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}a.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{a=n.next;var s=c=null,o=null,v=a,S=!1;do{var A=v.lane&-536870913;if(A!==v.lane?(te&A)===A:(Pa&A)===A){var y=v.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),A===xl&&(S=!0);else if((Pa&y)===y){v=v.next,y===xl&&(S=!0);continue}else A={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},o===null?(s=o=A,c=i):o=o.next=A,K.lanes|=y,At|=y;A=v.action,$t&&t(i,A),i=v.hasEagerState?v.eagerState:t(i,A)}else y={lane:A,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},o===null?(s=o=y,c=i):o=o.next=y,K.lanes|=A,At|=A;v=v.next}while(v!==null&&v!==a);if(o===null?c=i:o.next=s,!ha(i,e.memoizedState)&&(Ue=!0,S&&(t=Sl,t!==null)))throw t;e.memoizedState=i,e.baseState=c,e.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function fu(e){var a=_e(),t=a.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var l=t.dispatch,n=t.pending,i=a.memoizedState;if(n!==null){t.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ha(i,a.memoizedState)||(Ue=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,l]}function ao(e,a,t){var l=K,n=_e(),i=ce;if(i){if(t===void 0)throw Error(d(407));t=t()}else t=a();var c=!ha((pe||n).memoizedState,t);if(c&&(n.memoizedState=t,Ue=!0),n=n.queue,hu(no.bind(null,l,n,e),[e]),n.getSnapshot!==a||c||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,Ml(9,{destroy:void 0},lo.bind(null,l,n,t,a),null),be===null)throw Error(d(349));i||(Pa&127)!==0||to(l,a,t)}return t}function to(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=K.updateQueue,a===null?(a=xi(),K.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function lo(e,a,t,l){a.value=t,a.getSnapshot=l,io(a)&&co(e)}function no(e,a,t){return t(function(){io(a)&&co(e)})}function io(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!ha(e,t)}catch{return!0}}function co(e){var a=Lt(e,2);a!==null&&oa(a,e,2)}function du(e){var a=aa();if(typeof e=="function"){var t=e;if(e=t(),$t){ft(!0);try{t()}finally{ft(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:e},a}function uo(e,a,t,l){return e.baseState=t,ou(e,pe,typeof l=="function"?l:et)}function ph(e,a,t,l,n){if(Ai(e))throw Error(d(485));if(e=a.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};j.T!==null?t(!0):i.isTransition=!1,l(i),t=a.pending,t===null?(i.next=a.pending=i,ro(a,i)):(i.next=t.next,a.pending=t.next=i)}}function ro(e,a){var t=a.action,l=a.payload,n=e.state;if(a.isTransition){var i=j.T,c={};j.T=c;try{var s=t(n,l),o=j.S;o!==null&&o(c,s),so(e,a,s)}catch(v){mu(e,a,v)}finally{i!==null&&c.types!==null&&(i.types=c.types),j.T=i}}else try{i=t(n,l),so(e,a,i)}catch(v){mu(e,a,v)}}function so(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){oo(e,a,l)},function(l){return mu(e,a,l)}):oo(e,a,t)}function oo(e,a,t){a.status="fulfilled",a.value=t,fo(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,ro(e,t)))}function mu(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,fo(a),a=a.next;while(a!==l)}e.action=null}function fo(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function mo(e,a){return a}function ho(e,a){if(ce){var t=be.formState;if(t!==null){e:{var l=K;if(ce){if(Se){a:{for(var n=Se,i=Oa;n.nodeType!==8;){if(!i){n=null;break a}if(n=Ra(n.nextSibling),n===null){n=null;break a}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Se=Ra(n.nextSibling),l=n.data==="F!";break e}}pt(l)}l=!1}l&&(a=t[0])}}return t=aa(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:a},t.queue=l,t=wo.bind(null,K,l),l.dispatch=t,l=du(!1),i=bu.bind(null,K,!1,l.queue),l=aa(),n={state:a,dispatch:null,action:e,pending:null},l.queue=n,t=ph.bind(null,K,n,i,t),n.dispatch=t,l.memoizedState=e,[a,t,!1]}function go(e){var a=_e();return po(a,pe,e)}function po(e,a,t){if(a=ou(e,a,mo)[0],e=ji(et)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=gn(a)}catch(c){throw c===jl?di:c}else l=a;a=_e();var n=a.queue,i=n.dispatch;return t!==a.memoizedState&&(K.flags|=2048,Ml(9,{destroy:void 0},vh.bind(null,n,t),null)),[l,i,e]}function vh(e,a){e.action=a}function vo(e){var a=_e(),t=pe;if(t!==null)return po(a,t,e);_e(),a=a.memoizedState,t=_e();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function Ml(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=K.updateQueue,a===null&&(a=xi(),K.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function yo(){return _e().memoizedState}function zi(e,a,t,l){var n=aa();K.flags|=e,n.memoizedState=Ml(1|a,{destroy:void 0},t,l===void 0?null:l)}function Ni(e,a,t,l){var n=_e();l=l===void 0?null:l;var i=n.memoizedState.inst;pe!==null&&l!==null&&nu(l,pe.memoizedState.deps)?n.memoizedState=Ml(a,i,t,l):(K.flags|=e,n.memoizedState=Ml(1|a,i,t,l))}function bo(e,a){zi(8390656,8,e,a)}function hu(e,a){Ni(2048,8,e,a)}function yh(e){K.flags|=4;var a=K.updateQueue;if(a===null)a=xi(),K.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function xo(e){var a=_e().memoizedState;return yh({ref:a,nextImpl:e}),function(){if((se&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function So(e,a){return Ni(4,2,e,a)}function jo(e,a){return Ni(4,4,e,a)}function zo(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function No(e,a,t){t=t!=null?t.concat([e]):null,Ni(4,4,zo.bind(null,a,e),t)}function gu(){}function Ao(e,a){var t=_e();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&nu(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function To(e,a){var t=_e();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&nu(a,l[1]))return l[0];if(l=e(),$t){ft(!0);try{e()}finally{ft(!1)}}return t.memoizedState=[l,a],l}function pu(e,a,t){return t===void 0||(Pa&1073741824)!==0&&(te&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Ef(),K.lanes|=e,At|=e,t)}function Mo(e,a,t,l){return ha(t,a)?t:Nl.current!==null?(e=pu(e,t,l),ha(e,a)||(Ue=!0),e):(Pa&42)===0||(Pa&1073741824)!==0&&(te&261930)===0?(Ue=!0,e.memoizedState=t):(e=Ef(),K.lanes|=e,At|=e,a)}function Eo(e,a,t,l,n){var i=D.p;D.p=i!==0&&8>i?i:8;var c=j.T,s={};j.T=s,bu(e,!1,a,t);try{var o=n(),v=j.S;if(v!==null&&v(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var S=mh(o,l);pn(e,a,S,xa(e))}else pn(e,a,l,xa(e))}catch(A){pn(e,a,{then:function(){},status:"rejected",reason:A},xa())}finally{D.p=i,c!==null&&s.types!==null&&(c.types=s.types),j.T=c}}function bh(){}function vu(e,a,t,l){if(e.tag!==5)throw Error(d(476));var n=Co(e).queue;Eo(e,n,a,V,t===null?bh:function(){return _o(e),t(l)})}function Co(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:V},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function _o(e){var a=Co(e);a.next===null&&(a=e.alternate.memoizedState),pn(e,a.next.queue,{},xa())}function yu(){return Ve(wn)}function Do(){return _e().memoizedState}function Oo(){return _e().memoizedState}function xh(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=xa();e=bt(t);var l=xt(a,e,t);l!==null&&(oa(l,a,t),fn(l,a,t)),a={cache:Kc()},e.payload=a;return}a=a.return}}function Sh(e,a,t){var l=xa();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ai(e)?Ro(a,t):(t=kc(e,a,t,l),t!==null&&(oa(t,e,l),Uo(t,a,l)))}function wo(e,a,t){var l=xa();pn(e,a,t,l)}function pn(e,a,t,l){var n={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ai(e))Ro(a,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var c=a.lastRenderedState,s=i(c,t);if(n.hasEagerState=!0,n.eagerState=s,ha(s,c))return ii(e,a,n,0),be===null&&ni(),!1}catch{}finally{}if(t=kc(e,a,n,l),t!==null)return oa(t,e,l),Uo(t,a,l),!0}return!1}function bu(e,a,t,l){if(l={lane:2,revertLane:$u(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ai(e)){if(a)throw Error(d(479))}else a=kc(e,t,l,2),a!==null&&oa(a,e,2)}function Ai(e){var a=e.alternate;return e===K||a!==null&&a===K}function Ro(e,a){Al=yi=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Uo(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,qr(e,t)}}var vn={readContext:Ve,use:Si,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};vn.useEffectEvent=Me;var ko={readContext:Ve,use:Si,useCallback:function(e,a){return aa().memoizedState=[e,a===void 0?null:a],e},useContext:Ve,useEffect:bo,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,zi(4194308,4,zo.bind(null,a,e),t)},useLayoutEffect:function(e,a){return zi(4194308,4,e,a)},useInsertionEffect:function(e,a){zi(4,2,e,a)},useMemo:function(e,a){var t=aa();a=a===void 0?null:a;var l=e();if($t){ft(!0);try{e()}finally{ft(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=aa();if(t!==void 0){var n=t(a);if($t){ft(!0);try{t(a)}finally{ft(!1)}}}else n=a;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Sh.bind(null,K,e),[l.memoizedState,e]},useRef:function(e){var a=aa();return e={current:e},a.memoizedState=e},useState:function(e){e=du(e);var a=e.queue,t=wo.bind(null,K,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:gu,useDeferredValue:function(e,a){var t=aa();return pu(t,e,a)},useTransition:function(){var e=du(!1);return e=Eo.bind(null,K,e.queue,!0,!1),aa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=K,n=aa();if(ce){if(t===void 0)throw Error(d(407));t=t()}else{if(t=a(),be===null)throw Error(d(349));(te&127)!==0||to(l,a,t)}n.memoizedState=t;var i={value:t,getSnapshot:a};return n.queue=i,bo(no.bind(null,l,i,e),[e]),l.flags|=2048,Ml(9,{destroy:void 0},lo.bind(null,l,i,t,a),null),t},useId:function(){var e=aa(),a=be.identifierPrefix;if(ce){var t=La,l=Ga;t=(l&~(1<<32-ma(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=bi++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=hh++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:yu,useFormState:ho,useActionState:ho,useOptimistic:function(e){var a=aa();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=bu.bind(null,K,!0,t),t.dispatch=a,[e,a]},useMemoCache:su,useCacheRefresh:function(){return aa().memoizedState=xh.bind(null,K)},useEffectEvent:function(e){var a=aa(),t={impl:e};return a.memoizedState=t,function(){if((se&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},xu={readContext:Ve,use:Si,useCallback:Ao,useContext:Ve,useEffect:hu,useImperativeHandle:No,useInsertionEffect:So,useLayoutEffect:jo,useMemo:To,useReducer:ji,useRef:yo,useState:function(){return ji(et)},useDebugValue:gu,useDeferredValue:function(e,a){var t=_e();return Mo(t,pe.memoizedState,e,a)},useTransition:function(){var e=ji(et)[0],a=_e().memoizedState;return[typeof e=="boolean"?e:gn(e),a]},useSyncExternalStore:ao,useId:Do,useHostTransitionStatus:yu,useFormState:go,useActionState:go,useOptimistic:function(e,a){var t=_e();return uo(t,pe,e,a)},useMemoCache:su,useCacheRefresh:Oo};xu.useEffectEvent=xo;var Ho={readContext:Ve,use:Si,useCallback:Ao,useContext:Ve,useEffect:hu,useImperativeHandle:No,useInsertionEffect:So,useLayoutEffect:jo,useMemo:To,useReducer:fu,useRef:yo,useState:function(){return fu(et)},useDebugValue:gu,useDeferredValue:function(e,a){var t=_e();return pe===null?pu(t,e,a):Mo(t,pe.memoizedState,e,a)},useTransition:function(){var e=fu(et)[0],a=_e().memoizedState;return[typeof e=="boolean"?e:gn(e),a]},useSyncExternalStore:ao,useId:Do,useHostTransitionStatus:yu,useFormState:vo,useActionState:vo,useOptimistic:function(e,a){var t=_e();return pe!==null?uo(t,pe,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:su,useCacheRefresh:Oo};Ho.useEffectEvent=xo;function Su(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:G({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ju={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=xa(),n=bt(l);n.payload=a,t!=null&&(n.callback=t),a=xt(e,n,l),a!==null&&(oa(a,e,l),fn(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=xa(),n=bt(l);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=xt(e,n,l),a!==null&&(oa(a,e,l),fn(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=xa(),l=bt(t);l.tag=2,a!=null&&(l.callback=a),a=xt(e,l,t),a!==null&&(oa(a,e,t),fn(a,e,t))}};function Bo(e,a,t,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):a.prototype&&a.prototype.isPureReactComponent?!tn(t,l)||!tn(n,i):!0}function qo(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&ju.enqueueReplaceState(a,a.state,null)}function It(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=G({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function Yo(e){li(e)}function Go(e){console.error(e)}function Lo(e){li(e)}function Ti(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Qo(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function zu(e,a,t){return t=bt(t),t.tag=3,t.payload={element:null},t.callback=function(){Ti(e,a)},t}function Vo(e){return e=bt(e),e.tag=3,e}function Xo(e,a,t,l){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Qo(a,t,l)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Qo(a,t,l),typeof n!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function jh(e,a,t,l,n){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&bl(a,t,n,!0),t=pa.current,t!==null){switch(t.tag){case 31:case 13:return wa===null?Bi():t.alternate===null&&Ee===0&&(Ee=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===mi?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Ju(e,l,n)),!1;case 22:return t.flags|=65536,l===mi?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Ju(e,l,n)),!1}throw Error(d(435,t.tag))}return Ju(e,l,n),Bi(),!1}if(ce)return a=pa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==Lc&&(e=Error(d(422),{cause:l}),cn(Ca(e,t)))):(l!==Lc&&(a=Error(d(423),{cause:l}),cn(Ca(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ca(l,t),n=zu(e.stateNode,l,n),Pc(e,n),Ee!==4&&(Ee=2)),!1;var i=Error(d(520),{cause:l});if(i=Ca(i,t),An===null?An=[i]:An.push(i),Ee!==4&&(Ee=2),a===null)return!0;l=Ca(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=zu(t.stateNode,l,e),Pc(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Tt===null||!Tt.has(i))))return t.flags|=65536,n&=-n,t.lanes|=n,n=Vo(n),Xo(n,e,t,l),Pc(t,n),!1}t=t.return}while(t!==null);return!1}var Nu=Error(d(461)),Ue=!1;function Xe(e,a,t,l){a.child=e===null?Js(a,null,t,l):Wt(a,e.child,t,l)}function Zo(e,a,t,l,n){t=t.render;var i=a.ref;if("ref"in l){var c={};for(var s in l)s!=="ref"&&(c[s]=l[s])}else c=l;return Zt(a),l=iu(e,a,t,c,i,n),s=cu(),e!==null&&!Ue?(uu(e,a,n),at(e,a,n)):(ce&&s&&Yc(a),a.flags|=1,Xe(e,a,l,n),a.child)}function Ko(e,a,t,l,n){if(e===null){var i=t.type;return typeof i=="function"&&!Hc(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,Jo(e,a,i,l,n)):(e=ui(t.type,null,l,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!Ou(e,n)){var c=i.memoizedProps;if(t=t.compare,t=t!==null?t:tn,t(c,l)&&e.ref===a.ref)return at(e,a,n)}return a.flags|=1,e=Fa(i,l),e.ref=a.ref,e.return=a,a.child=e}function Jo(e,a,t,l,n){if(e!==null){var i=e.memoizedProps;if(tn(i,l)&&e.ref===a.ref)if(Ue=!1,a.pendingProps=l=i,Ou(e,n))(e.flags&131072)!==0&&(Ue=!0);else return a.lanes=e.lanes,at(e,a,n)}return Au(e,a,t,l,n)}function Fo(e,a,t,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(l=a.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,a.child=null;return Wo(e,a,i,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&fi(a,i!==null?i.cachePool:null),i!==null?$s(a,i):au(),Is(a);else return l=a.lanes=536870912,Wo(e,a,i!==null?i.baseLanes|t:t,t,l)}else i!==null?(fi(a,i.cachePool),$s(a,i),jt(),a.memoizedState=null):(e!==null&&fi(a,null),au(),jt());return Xe(e,a,n,t),a.child}function yn(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Wo(e,a,t,l,n){var i=Fc();return i=i===null?null:{parent:we._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&fi(a,null),au(),Is(a),e!==null&&bl(e,a,l,!0),a.childLanes=n,null}function Mi(e,a){return a=Ci({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function $o(e,a,t){return Wt(a,e.child,null,t),e=Mi(a,a.pendingProps),e.flags|=2,va(a),a.memoizedState=null,e}function zh(e,a,t){var l=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ce){if(l.mode==="hidden")return e=Mi(a,l),a.lanes=536870912,yn(null,e);if(lu(a),(e=Se)?(e=od(e,Oa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ht!==null?{id:Ga,overflow:La}:null,retryLane:536870912,hydrationErrors:null},t=ws(e),t.return=a,a.child=t,Qe=a,Se=null)):e=null,e===null)throw pt(a);return a.lanes=536870912,null}return Mi(a,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(lu(a),n)if(a.flags&256)a.flags&=-257,a=$o(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(Ue||bl(e,a,t,!1),n=(t&e.childLanes)!==0,Ue||n){if(l=be,l!==null&&(c=Yr(l,t),c!==0&&c!==i.retryLane))throw i.retryLane=c,Lt(e,c),oa(l,e,c),Nu;Bi(),a=$o(e,a,t)}else e=i.treeContext,Se=Ra(c.nextSibling),Qe=a,ce=!0,gt=null,Oa=!1,e!==null&&ks(a,e),a=Mi(a,l),a.flags|=4096;return a}return e=Fa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Ei(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Au(e,a,t,l,n){return Zt(a),t=iu(e,a,t,l,void 0,n),l=cu(),e!==null&&!Ue?(uu(e,a,n),at(e,a,n)):(ce&&l&&Yc(a),a.flags|=1,Xe(e,a,t,n),a.child)}function Io(e,a,t,l,n,i){return Zt(a),a.updateQueue=null,t=eo(a,l,t,n),Ps(e),l=cu(),e!==null&&!Ue?(uu(e,a,i),at(e,a,i)):(ce&&l&&Yc(a),a.flags|=1,Xe(e,a,t,i),a.child)}function Po(e,a,t,l,n){if(Zt(a),a.stateNode===null){var i=gl,c=t.contextType;typeof c=="object"&&c!==null&&(i=Ve(c)),i=new t(l,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ju,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=l,i.state=a.memoizedState,i.refs={},$c(a),c=t.contextType,i.context=typeof c=="object"&&c!==null?Ve(c):gl,i.state=a.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Su(a,t,c,l),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&ju.enqueueReplaceState(i,i.state,null),mn(a,l,i,n),dn(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){i=a.stateNode;var s=a.memoizedProps,o=It(t,s);i.props=o;var v=i.context,S=t.contextType;c=gl,typeof S=="object"&&S!==null&&(c=Ve(S));var A=t.getDerivedStateFromProps;S=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=a.pendingProps!==s,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||v!==c)&&qo(a,i,l,c),yt=!1;var y=a.memoizedState;i.state=y,mn(a,l,i,n),dn(),v=a.memoizedState,s||y!==v||yt?(typeof A=="function"&&(Su(a,t,A,l),v=a.memoizedState),(o=yt||Bo(a,t,o,l,y,v,c))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=v),i.props=l,i.state=v,i.context=c,l=o):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{i=a.stateNode,Ic(e,a),c=a.memoizedProps,S=It(t,c),i.props=S,A=a.pendingProps,y=i.context,v=t.contextType,o=gl,typeof v=="object"&&v!==null&&(o=Ve(v)),s=t.getDerivedStateFromProps,(v=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==A||y!==o)&&qo(a,i,l,o),yt=!1,y=a.memoizedState,i.state=y,mn(a,l,i,n),dn();var b=a.memoizedState;c!==A||y!==b||yt||e!==null&&e.dependencies!==null&&si(e.dependencies)?(typeof s=="function"&&(Su(a,t,s,l),b=a.memoizedState),(S=yt||Bo(a,t,S,l,y,b,o)||e!==null&&e.dependencies!==null&&si(e.dependencies))?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,b,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,b,o)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=b),i.props=l,i.state=b,i.context=o,l=S):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=1024),l=!1)}return i=l,Ei(e,a),l=(a.flags&128)!==0,i||l?(i=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&l?(a.child=Wt(a,e.child,null,n),a.child=Wt(a,null,t,n)):Xe(e,a,t,n),a.memoizedState=i.state,e=a.child):e=at(e,a,n),e}function ef(e,a,t,l){return Vt(),a.flags|=256,Xe(e,a,t,l),a.child}var Tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mu(e){return{baseLanes:e,cachePool:Ls()}}function Eu(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=ba),e}function af(e,a,t){var l=a.pendingProps,n=!1,i=(a.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),c&&(n=!0,a.flags&=-129),c=(a.flags&32)!==0,a.flags&=-33,e===null){if(ce){if(n?St(a):jt(),(e=Se)?(e=od(e,Oa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ht!==null?{id:Ga,overflow:La}:null,retryLane:536870912,hydrationErrors:null},t=ws(e),t.return=a,a.child=t,Qe=a,Se=null)):e=null,e===null)throw pt(a);return or(e)?a.lanes=32:a.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(jt(),n=a.mode,s=Ci({mode:"hidden",children:s},n),l=Qt(l,n,t,null),s.return=a,l.return=a,s.sibling=l,a.child=s,l=a.child,l.memoizedState=Mu(t),l.childLanes=Eu(e,c,t),a.memoizedState=Tu,yn(null,l)):(St(a),Cu(a,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)a.flags&256?(St(a),a.flags&=-257,a=_u(e,a,t)):a.memoizedState!==null?(jt(),a.child=e.child,a.flags|=128,a=null):(jt(),s=l.fallback,n=a.mode,l=Ci({mode:"visible",children:l.children},n),s=Qt(s,n,t,null),s.flags|=2,l.return=a,s.return=a,l.sibling=s,a.child=l,Wt(a,e.child,null,t),l=a.child,l.memoizedState=Mu(t),l.childLanes=Eu(e,c,t),a.memoizedState=Tu,a=yn(null,l));else if(St(a),or(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var v=c.dgst;c=v,l=Error(d(419)),l.stack="",l.digest=c,cn({value:l,source:null,stack:null}),a=_u(e,a,t)}else if(Ue||bl(e,a,t,!1),c=(t&e.childLanes)!==0,Ue||c){if(c=be,c!==null&&(l=Yr(c,t),l!==0&&l!==o.retryLane))throw o.retryLane=l,Lt(e,l),oa(c,e,l),Nu;sr(s)||Bi(),a=_u(e,a,t)}else sr(s)?(a.flags|=192,a.child=e.child,a=null):(e=o.treeContext,Se=Ra(s.nextSibling),Qe=a,ce=!0,gt=null,Oa=!1,e!==null&&ks(a,e),a=Cu(a,l.children),a.flags|=4096);return a}return n?(jt(),s=l.fallback,n=a.mode,o=e.child,v=o.sibling,l=Fa(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,v!==null?s=Fa(v,s):(s=Qt(s,n,t,null),s.flags|=2),s.return=a,l.return=a,l.sibling=s,a.child=l,yn(null,l),l=a.child,s=e.child.memoizedState,s===null?s=Mu(t):(n=s.cachePool,n!==null?(o=we._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Ls(),s={baseLanes:s.baseLanes|t,cachePool:n}),l.memoizedState=s,l.childLanes=Eu(e,c,t),a.memoizedState=Tu,yn(e.child,l)):(St(a),t=e.child,e=t.sibling,t=Fa(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(c=a.deletions,c===null?(a.deletions=[e],a.flags|=16):c.push(e)),a.child=t,a.memoizedState=null,t)}function Cu(e,a){return a=Ci({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Ci(e,a){return e=ga(22,e,null,a),e.lanes=0,e}function _u(e,a,t){return Wt(a,e.child,null,t),e=Cu(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function tf(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Xc(e.return,a,t)}function Du(e,a,t,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n,treeForkCount:i}:(c.isBackwards=a,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=t,c.tailMode=n,c.treeForkCount=i)}function lf(e,a,t){var l=a.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=Ce.current,s=(c&2)!==0;if(s?(c=c&1|2,a.flags|=128):c&=1,z(Ce,c),Xe(e,a,l,t),l=ce?nn:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tf(e,t,a);else if(e.tag===19)tf(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&vi(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),Du(a,!1,n,t,i,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&vi(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}Du(a,!0,t,null,i,l);break;case"together":Du(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function at(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),At|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(bl(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,t=Fa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Fa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Ou(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&si(e)))}function Nh(e,a,t){switch(a.tag){case 3:L(a,a.stateNode.containerInfo),vt(a,we,e.memoizedState.cache),Vt();break;case 27:case 5:ge(a);break;case 4:L(a,a.stateNode.containerInfo);break;case 10:vt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,lu(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(St(a),a.flags|=128,null):(t&a.child.childLanes)!==0?af(e,a,t):(St(a),e=at(e,a,t),e!==null?e.sibling:null);St(a);break;case 19:var n=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(bl(e,a,t,!1),l=(t&a.childLanes)!==0),n){if(l)return lf(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),z(Ce,Ce.current),l)break;return null;case 22:return a.lanes=0,Fo(e,a,t,a.pendingProps);case 24:vt(a,we,e.memoizedState.cache)}return at(e,a,t)}function nf(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ue=!0;else{if(!Ou(e,t)&&(a.flags&128)===0)return Ue=!1,Nh(e,a,t);Ue=(e.flags&131072)!==0}else Ue=!1,ce&&(a.flags&1048576)!==0&&Us(a,nn,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=Jt(a.elementType),a.type=e,typeof e=="function")Hc(e)?(l=It(e,l),a.tag=1,a=Po(null,a,e,l,t)):(a.tag=0,a=Au(null,a,e,l,t));else{if(e!=null){var n=e.$$typeof;if(n===ta){a.tag=11,a=Zo(null,a,e,l,t);break e}else if(n===P){a.tag=14,a=Ko(null,a,e,l,t);break e}}throw a=Na(e)||e,Error(d(306,a,""))}}return a;case 0:return Au(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,n=It(l,a.pendingProps),Po(e,a,l,n,t);case 3:e:{if(L(a,a.stateNode.containerInfo),e===null)throw Error(d(387));l=a.pendingProps;var i=a.memoizedState;n=i.element,Ic(e,a),mn(a,l,null,t);var c=a.memoizedState;if(l=c.cache,vt(a,we,l),l!==i.cache&&Zc(a,[we],t,!0),dn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=ef(e,a,l,t);break e}else if(l!==n){n=Ca(Error(d(424)),a),cn(n),a=ef(e,a,l,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=Ra(e.firstChild),Qe=a,ce=!0,gt=null,Oa=!0,t=Js(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Vt(),l===n){a=at(e,a,t);break e}Xe(e,a,l,t)}a=a.child}return a;case 26:return Ei(e,a),e===null?(t=pd(a.type,null,a.pendingProps,null))?a.memoizedState=t:ce||(t=a.type,e=a.pendingProps,l=Xi(R.current).createElement(t),l[Le]=a,l[na]=e,Ze(l,t,e),qe(l),a.stateNode=l):a.memoizedState=pd(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return ge(a),e===null&&ce&&(l=a.stateNode=md(a.type,a.pendingProps,R.current),Qe=a,Oa=!0,n=Se,_t(a.type)?(fr=n,Se=Ra(l.firstChild)):Se=n),Xe(e,a,a.pendingProps.children,t),Ei(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ce&&((n=l=Se)&&(l=e0(l,a.type,a.pendingProps,Oa),l!==null?(a.stateNode=l,Qe=a,Se=Ra(l.firstChild),Oa=!1,n=!0):n=!1),n||pt(a)),ge(a),n=a.type,i=a.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,cr(n,i)?l=null:c!==null&&cr(n,c)&&(a.flags|=32),a.memoizedState!==null&&(n=iu(e,a,gh,null,null,t),wn._currentValue=n),Ei(e,a),Xe(e,a,l,t),a.child;case 6:return e===null&&ce&&((e=t=Se)&&(t=a0(t,a.pendingProps,Oa),t!==null?(a.stateNode=t,Qe=a,Se=null,e=!0):e=!1),e||pt(a)),null;case 13:return af(e,a,t);case 4:return L(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Wt(a,null,l,t):Xe(e,a,l,t),a.child;case 11:return Zo(e,a,a.type,a.pendingProps,t);case 7:return Xe(e,a,a.pendingProps,t),a.child;case 8:return Xe(e,a,a.pendingProps.children,t),a.child;case 12:return Xe(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,vt(a,a.type,l.value),Xe(e,a,l.children,t),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,Zt(a),n=Ve(n),l=l(n),a.flags|=1,Xe(e,a,l,t),a.child;case 14:return Ko(e,a,a.type,a.pendingProps,t);case 15:return Jo(e,a,a.type,a.pendingProps,t);case 19:return lf(e,a,t);case 31:return zh(e,a,t);case 22:return Fo(e,a,t,a.pendingProps);case 24:return Zt(a),l=Ve(we),e===null?(n=Fc(),n===null&&(n=be,i=Kc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=t),n=i),a.memoizedState={parent:l,cache:n},$c(a),vt(a,we,n)):((e.lanes&t)!==0&&(Ic(e,a),mn(a,null,null,t),dn()),n=e.memoizedState,i=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),vt(a,we,l)):(l=i.cache,vt(a,we,l),l!==n.cache&&Zc(a,[we],t,!0))),Xe(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function tt(e){e.flags|=4}function wu(e,a,t,l,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Of())e.flags|=8192;else throw Ft=mi,Wc}else e.flags&=-16777217}function cf(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sd(a))if(Of())e.flags|=8192;else throw Ft=mi,Wc}function _i(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Hr():536870912,e.lanes|=a,Dl|=a)}function bn(e,a){if(!ce)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function Ah(e,a,t){var l=a.pendingProps;switch(Gc(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(a),null;case 1:return je(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Ia(we),X(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(yl(a)?tt(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Qc())),je(a),null;case 26:var n=a.type,i=a.memoizedState;return e===null?(tt(a),i!==null?(je(a),cf(a,i)):(je(a),wu(a,n,null,l,t))):i?i!==e.memoizedState?(tt(a),je(a),cf(a,i)):(je(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&tt(a),je(a),wu(a,n,e,l,t)),null;case 27:if(fe(a),t=R.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&tt(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return je(a),null}e=E.current,yl(a)?Hs(a):(e=md(n,l,t),a.stateNode=e,tt(a))}return je(a),null;case 5:if(fe(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&tt(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return je(a),null}if(i=E.current,yl(a))Hs(a);else{var c=Xi(R.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Le]=a,i[na]=l;e:for(c=a.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break e;for(;c.sibling===null;){if(c.return===null||c.return===a)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}a.stateNode=i;e:switch(Ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&tt(a)}}return je(a),wu(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&tt(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(d(166));if(e=R.current,yl(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,n=Qe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Le]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||td(e.nodeValue,t)),e||pt(a,!0)}else e=Xi(e).createTextNode(l),e[Le]=a,a.stateNode=e}return je(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=yl(a),t!==null){if(e===null){if(!l)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Le]=a}else Vt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;je(a),e=!1}else t=Qc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(va(a),a):(va(a),null);if((a.flags&128)!==0)throw Error(d(558))}return je(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=yl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Le]=a}else Vt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;je(a),n=!1}else n=Qc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(va(a),a):(va(a),null)}return va(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),_i(a,a.updateQueue),je(a),null);case 4:return X(),e===null&&ar(a.stateNode.containerInfo),je(a),null;case 10:return Ia(a.type),je(a),null;case 19:if(g(Ce),l=a.memoizedState,l===null)return je(a),null;if(n=(a.flags&128)!==0,i=l.rendering,i===null)if(n)bn(l,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=vi(e),i!==null){for(a.flags|=128,bn(l,!1),e=i.updateQueue,a.updateQueue=e,_i(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Os(t,e),t=t.sibling;return z(Ce,Ce.current&1|2),ce&&Wa(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&We()>Ui&&(a.flags|=128,n=!0,bn(l,!1),a.lanes=4194304)}else{if(!n)if(e=vi(i),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,_i(a,e),bn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ce)return je(a),null}else 2*We()-l.renderingStartTime>Ui&&t!==536870912&&(a.flags|=128,n=!0,bn(l,!1),a.lanes=4194304);l.isBackwards?(i.sibling=a.child,a.child=i):(e=l.last,e!==null?e.sibling=i:a.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=We(),e.sibling=null,t=Ce.current,z(Ce,n?t&1|2:t&1),ce&&Wa(a,l.treeForkCount),e):(je(a),null);case 22:case 23:return va(a),tu(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(je(a),a.subtreeFlags&6&&(a.flags|=8192)):je(a),t=a.updateQueue,t!==null&&_i(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&g(Kt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ia(we),je(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function Th(e,a){switch(Gc(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ia(we),X(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return fe(a),null;case 31:if(a.memoizedState!==null){if(va(a),a.alternate===null)throw Error(d(340));Vt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(va(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));Vt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return g(Ce),null;case 4:return X(),null;case 10:return Ia(a.type),null;case 22:case 23:return va(a),tu(),e!==null&&g(Kt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ia(we),null;case 25:return null;default:return null}}function uf(e,a){switch(Gc(a),a.tag){case 3:Ia(we),X();break;case 26:case 27:case 5:fe(a);break;case 4:X();break;case 31:a.memoizedState!==null&&va(a);break;case 13:va(a);break;case 19:g(Ce);break;case 10:Ia(a.type);break;case 22:case 23:va(a),tu(),e!==null&&g(Kt);break;case 24:Ia(we)}}function xn(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var n=l.next;t=n;do{if((t.tag&e)===e){l=void 0;var i=t.create,c=t.inst;l=i(),c.destroy=l}t=t.next}while(t!==n)}}catch(s){me(a,a.return,s)}}function zt(e,a,t){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,n=a;var o=t,v=s;try{v()}catch(S){me(n,o,S)}}}l=l.next}while(l!==i)}}catch(S){me(a,a.return,S)}}function rf(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Ws(a,t)}catch(l){me(e,e.return,l)}}}function sf(e,a,t){t.props=It(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){me(e,a,l)}}function Sn(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(n){me(e,a,n)}}function Qa(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(n){me(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){me(e,a,n)}else t.current=null}function of(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(n){me(e,e.return,n)}}function Ru(e,a,t){try{var l=e.stateNode;Jh(l,e.type,t,a),l[na]=a}catch(n){me(e,e.return,n)}}function ff(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_t(e.type)||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_t(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ka));else if(l!==4&&(l===27&&_t(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(ku(e,a,t),e=e.sibling;e!==null;)ku(e,a,t),e=e.sibling}function Di(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&_t(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Di(e,a,t),e=e.sibling;e!==null;)Di(e,a,t),e=e.sibling}function df(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Ze(a,l,t),a[Le]=e,a[na]=t}catch(i){me(e,e.return,i)}}var lt=!1,ke=!1,Hu=!1,mf=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Mh(e,a){if(e=e.containerInfo,nr=Ii,e=zs(e),_c(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var c=0,s=-1,o=-1,v=0,S=0,A=e,y=null;a:for(;;){for(var b;A!==t||n!==0&&A.nodeType!==3||(s=c+n),A!==i||l!==0&&A.nodeType!==3||(o=c+l),A.nodeType===3&&(c+=A.nodeValue.length),(b=A.firstChild)!==null;)y=A,A=b;for(;;){if(A===e)break a;if(y===t&&++v===n&&(s=c),y===i&&++S===l&&(o=c),(b=A.nextSibling)!==null)break;A=y,y=A.parentNode}A=b}t=s===-1||o===-1?null:{start:s,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(ir={focusedElem:e,selectionRange:t},Ii=!1,Ye=a;Ye!==null;)if(a=Ye,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ye=e;else for(;Ye!==null;){switch(a=Ye,i=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=a,n=i.memoizedProps,i=i.memoizedState,l=t.stateNode;try{var U=It(t.type,n);e=l.getSnapshotBeforeUpdate(U,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(Q){me(t,t.return,Q)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)rr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,Ye=e;break}Ye=a.return}}function hf(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:it(e,t),l&4&&xn(5,t);break;case 1:if(it(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(c){me(t,t.return,c)}else{var n=It(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(c){me(t,t.return,c)}}l&64&&rf(t),l&512&&Sn(t,t.return);break;case 3:if(it(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Ws(e,a)}catch(c){me(t,t.return,c)}}break;case 27:a===null&&l&4&&df(t);case 26:case 5:it(e,t),a===null&&l&4&&of(t),l&512&&Sn(t,t.return);break;case 12:it(e,t);break;case 31:it(e,t),l&4&&vf(e,t);break;case 13:it(e,t),l&4&&yf(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=kh.bind(null,t),t0(e,t))));break;case 22:if(l=t.memoizedState!==null||lt,!l){a=a!==null&&a.memoizedState!==null||ke,n=lt;var i=ke;lt=l,(ke=a)&&!i?ct(e,t,(t.subtreeFlags&8772)!==0):it(e,t),lt=n,ke=i}break;case 30:break;default:it(e,t)}}function gf(e){var a=e.alternate;a!==null&&(e.alternate=null,gf(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&mc(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,ca=!1;function nt(e,a,t){for(t=t.child;t!==null;)pf(e,a,t),t=t.sibling}function pf(e,a,t){if(da&&typeof da.onCommitFiberUnmount=="function")try{da.onCommitFiberUnmount(kt,t)}catch{}switch(t.tag){case 26:ke||Qa(t,a),nt(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ke||Qa(t,a);var l=Ne,n=ca;_t(t.type)&&(Ne=t.stateNode,ca=!1),nt(e,a,t),_n(t.stateNode),Ne=l,ca=n;break;case 5:ke||Qa(t,a);case 6:if(l=Ne,n=ca,Ne=null,nt(e,a,t),Ne=l,ca=n,Ne!==null)if(ca)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(t.stateNode)}catch(i){me(t,a,i)}else try{Ne.removeChild(t.stateNode)}catch(i){me(t,a,i)}break;case 18:Ne!==null&&(ca?(e=Ne,rd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),ql(e)):rd(Ne,t.stateNode));break;case 4:l=Ne,n=ca,Ne=t.stateNode.containerInfo,ca=!0,nt(e,a,t),Ne=l,ca=n;break;case 0:case 11:case 14:case 15:zt(2,t,a),ke||zt(4,t,a),nt(e,a,t);break;case 1:ke||(Qa(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&sf(t,a,l)),nt(e,a,t);break;case 21:nt(e,a,t);break;case 22:ke=(l=ke)||t.memoizedState!==null,nt(e,a,t),ke=l;break;default:nt(e,a,t)}}function vf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ql(e)}catch(t){me(a,a.return,t)}}}function yf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ql(e)}catch(t){me(a,a.return,t)}}function Eh(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new mf),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new mf),a;default:throw Error(d(435,e.tag))}}function Oi(e,a){var t=Eh(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var n=Hh.bind(null,e,l);l.then(n,n)}})}function ua(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l],i=e,c=a,s=c;e:for(;s!==null;){switch(s.tag){case 27:if(_t(s.type)){Ne=s.stateNode,ca=!1;break e}break;case 5:Ne=s.stateNode,ca=!1;break e;case 3:case 4:Ne=s.stateNode.containerInfo,ca=!0;break e}s=s.return}if(Ne===null)throw Error(d(160));pf(i,c,n),Ne=null,ca=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)bf(a,e),a=a.sibling}var Ba=null;function bf(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ua(a,e),ra(e),l&4&&(zt(3,e,e.return),xn(3,e),zt(5,e,e.return));break;case 1:ua(a,e),ra(e),l&512&&(ke||t===null||Qa(t,t.return)),l&64&&lt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var n=Ba;if(ua(a,e),ra(e),l&512&&(ke||t===null||Qa(t,t.return)),l&4){var i=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Kl]||i[Le]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,l,t),i[Le]=e,qe(i),l=i;break e;case"link":var c=bd("link","href",n).get(l+(t.href||""));if(c){for(var s=0;s<c.length;s++)if(i=c[s],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(s,1);break a}}i=n.createElement(l),Ze(i,l,t),n.head.appendChild(i);break;case"meta":if(c=bd("meta","content",n).get(l+(t.content||""))){for(s=0;s<c.length;s++)if(i=c[s],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(s,1);break a}}i=n.createElement(l),Ze(i,l,t),n.head.appendChild(i);break;default:throw Error(d(468,l))}i[Le]=e,qe(i),l=i}e.stateNode=l}else xd(n,e.type,e.stateNode);else e.stateNode=yd(n,l,e.memoizedProps);else i!==l?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,l===null?xd(n,e.type,e.stateNode):yd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ru(e,e.memoizedProps,t.memoizedProps)}break;case 27:ua(a,e),ra(e),l&512&&(ke||t===null||Qa(t,t.return)),t!==null&&l&4&&Ru(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ua(a,e),ra(e),l&512&&(ke||t===null||Qa(t,t.return)),e.flags&32){n=e.stateNode;try{rl(n,"")}catch(U){me(e,e.return,U)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Ru(e,n,t!==null?t.memoizedProps:n)),l&1024&&(Hu=!0);break;case 6:if(ua(a,e),ra(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(U){me(e,e.return,U)}}break;case 3:if(Ji=null,n=Ba,Ba=Zi(a.containerInfo),ua(a,e),Ba=n,ra(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{ql(a.containerInfo)}catch(U){me(e,e.return,U)}Hu&&(Hu=!1,xf(e));break;case 4:l=Ba,Ba=Zi(e.stateNode.containerInfo),ua(a,e),ra(e),Ba=l;break;case 12:ua(a,e),ra(e);break;case 31:ua(a,e),ra(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 13:ua(a,e),ra(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ri=We()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 22:n=e.memoizedState!==null;var o=t!==null&&t.memoizedState!==null,v=lt,S=ke;if(lt=v||n,ke=S||o,ua(a,e),ke=S,lt=v,ra(e),l&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||o||lt||ke||Pt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){o=t=a;try{if(i=o.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=o.stateNode;var A=o.memoizedProps.style,y=A!=null&&A.hasOwnProperty("display")?A.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(U){me(o,o.return,U)}}}else if(a.tag===6){if(t===null){o=a;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(U){me(o,o.return,U)}}}else if(a.tag===18){if(t===null){o=a;try{var b=o.stateNode;n?sd(b,!0):sd(o.stateNode,!1)}catch(U){me(o,o.return,U)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Oi(e,t))));break;case 19:ua(a,e),ra(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 30:break;case 21:break;default:ua(a,e),ra(e)}}function ra(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(ff(l)){t=l;break}l=l.return}if(t==null)throw Error(d(160));switch(t.tag){case 27:var n=t.stateNode,i=Uu(e);Di(e,i,n);break;case 5:var c=t.stateNode;t.flags&32&&(rl(c,""),t.flags&=-33);var s=Uu(e);Di(e,s,c);break;case 3:case 4:var o=t.stateNode.containerInfo,v=Uu(e);ku(e,v,o);break;default:throw Error(d(161))}}catch(S){me(e,e.return,S)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function xf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;xf(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function it(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)hf(e,a.alternate,a),a=a.sibling}function Pt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:zt(4,a,a.return),Pt(a);break;case 1:Qa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&sf(a,a.return,t),Pt(a);break;case 27:_n(a.stateNode);case 26:case 5:Qa(a,a.return),Pt(a);break;case 22:a.memoizedState===null&&Pt(a);break;case 30:Pt(a);break;default:Pt(a)}e=e.sibling}}function ct(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=e,i=a,c=i.flags;switch(i.tag){case 0:case 11:case 15:ct(n,i,t),xn(4,i);break;case 1:if(ct(n,i,t),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(v){me(l,l.return,v)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Fs(o[n],s)}catch(v){me(l,l.return,v)}}t&&c&64&&rf(i),Sn(i,i.return);break;case 27:df(i);case 26:case 5:ct(n,i,t),t&&l===null&&c&4&&of(i),Sn(i,i.return);break;case 12:ct(n,i,t);break;case 31:ct(n,i,t),t&&c&4&&vf(n,i);break;case 13:ct(n,i,t),t&&c&4&&yf(n,i);break;case 22:i.memoizedState===null&&ct(n,i,t),Sn(i,i.return);break;case 30:break;default:ct(n,i,t)}a=a.sibling}}function Bu(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&un(t))}function qu(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&un(e))}function qa(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Sf(e,a,t,l),a=a.sibling}function Sf(e,a,t,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:qa(e,a,t,l),n&2048&&xn(9,a);break;case 1:qa(e,a,t,l);break;case 3:qa(e,a,t,l),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&un(e)));break;case 12:if(n&2048){qa(e,a,t,l),e=a.stateNode;try{var i=a.memoizedProps,c=i.id,s=i.onPostCommit;typeof s=="function"&&s(c,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){me(a,a.return,o)}}else qa(e,a,t,l);break;case 31:qa(e,a,t,l);break;case 13:qa(e,a,t,l);break;case 23:break;case 22:i=a.stateNode,c=a.alternate,a.memoizedState!==null?i._visibility&2?qa(e,a,t,l):jn(e,a):i._visibility&2?qa(e,a,t,l):(i._visibility|=2,El(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),n&2048&&Bu(c,a);break;case 24:qa(e,a,t,l),n&2048&&qu(a.alternate,a);break;default:qa(e,a,t,l)}}function El(e,a,t,l,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,c=a,s=t,o=l,v=c.flags;switch(c.tag){case 0:case 11:case 15:El(i,c,s,o,n),xn(8,c);break;case 23:break;case 22:var S=c.stateNode;c.memoizedState!==null?S._visibility&2?El(i,c,s,o,n):jn(i,c):(S._visibility|=2,El(i,c,s,o,n)),n&&v&2048&&Bu(c.alternate,c);break;case 24:El(i,c,s,o,n),n&&v&2048&&qu(c.alternate,c);break;default:El(i,c,s,o,n)}a=a.sibling}}function jn(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,n=l.flags;switch(l.tag){case 22:jn(t,l),n&2048&&Bu(l.alternate,l);break;case 24:jn(t,l),n&2048&&qu(l.alternate,l);break;default:jn(t,l)}a=a.sibling}}var zn=8192;function Cl(e,a,t){if(e.subtreeFlags&zn)for(e=e.child;e!==null;)jf(e,a,t),e=e.sibling}function jf(e,a,t){switch(e.tag){case 26:Cl(e,a,t),e.flags&zn&&e.memoizedState!==null&&h0(t,Ba,e.memoizedState,e.memoizedProps);break;case 5:Cl(e,a,t);break;case 3:case 4:var l=Ba;Ba=Zi(e.stateNode.containerInfo),Cl(e,a,t),Ba=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=zn,zn=16777216,Cl(e,a,t),zn=l):Cl(e,a,t));break;default:Cl(e,a,t)}}function zf(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Nn(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Ye=l,Af(l,e)}zf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nf(e),e=e.sibling}function Nf(e){switch(e.tag){case 0:case 11:case 15:Nn(e),e.flags&2048&&zt(9,e,e.return);break;case 3:Nn(e);break;case 12:Nn(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,wi(e)):Nn(e);break;default:Nn(e)}}function wi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Ye=l,Af(l,e)}zf(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:zt(8,a,a.return),wi(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,wi(a));break;default:wi(a)}e=e.sibling}}function Af(e,a){for(;Ye!==null;){var t=Ye;switch(t.tag){case 0:case 11:case 15:zt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:un(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Ye=l;else e:for(t=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(gf(l),l===t){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var Ch={getCacheForType:function(e){var a=Ve(we),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return Ve(we).controller.signal}},_h=typeof WeakMap=="function"?WeakMap:Map,se=0,be=null,ee=null,te=0,de=0,ya=null,Nt=!1,_l=!1,Yu=!1,ut=0,Ee=0,At=0,el=0,Gu=0,ba=0,Dl=0,An=null,sa=null,Lu=!1,Ri=0,Tf=0,Ui=1/0,ki=null,Tt=null,He=0,Mt=null,Ol=null,rt=0,Qu=0,Vu=null,Mf=null,Tn=0,Xu=null;function xa(){return(se&2)!==0&&te!==0?te&-te:j.T!==null?$u():Gr()}function Ef(){if(ba===0)if((te&536870912)===0||ce){var e=Vn;Vn<<=1,(Vn&3932160)===0&&(Vn=262144),ba=e}else ba=536870912;return e=pa.current,e!==null&&(e.flags|=32),ba}function oa(e,a,t){(e===be&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(wl(e,0),Et(e,te,ba,!1)),Zl(e,t),((se&2)===0||e!==be)&&(e===be&&((se&2)===0&&(el|=t),Ee===4&&Et(e,te,ba,!1)),Va(e))}function Cf(e,a,t){if((se&6)!==0)throw Error(d(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Xl(e,a),n=l?wh(e,a):Ku(e,a,!0),i=l;do{if(n===0){_l&&!l&&Et(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!Dh(t)){n=Ku(e,a,!1),i=!1;continue}if(n===2){if(i=a,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){a=c;e:{var s=e;n=An;var o=s.current.memoizedState.isDehydrated;if(o&&(wl(s,c).flags|=256),c=Ku(s,c,!1),c!==2){if(Yu&&!o){s.errorRecoveryDisabledLanes|=i,el|=i,n=4;break e}i=sa,sa=n,i!==null&&(sa===null?sa=i:sa.push.apply(sa,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){wl(e,0),Et(e,a,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:Et(l,a,ba,!Nt);break e;case 2:sa=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(n=Ri+300-We(),10<n)){if(Et(l,a,ba,!Nt),Zn(l,0,!0)!==0)break e;rt=a,l.timeoutHandle=cd(_f.bind(null,l,t,sa,ki,Lu,a,ba,el,Dl,Nt,i,"Throttled",-0,0),n);break e}_f(l,t,sa,ki,Lu,a,ba,el,Dl,Nt,i,null,-0,0)}}break}while(!0);Va(e)}function _f(e,a,t,l,n,i,c,s,o,v,S,A,y,b){if(e.timeoutHandle=-1,A=a.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ka},jf(a,i,A);var U=(i&62914560)===i?Ri-We():(i&4194048)===i?Tf-We():0;if(U=g0(A,U),U!==null){rt=i,e.cancelPendingCommit=U(Bf.bind(null,e,a,i,t,l,n,c,s,o,S,A,null,y,b)),Et(e,i,c,!v);return}}Bf(e,a,i,t,l,n,c,s,o)}function Dh(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var n=t[l],i=n.getSnapshot;n=n.value;try{if(!ha(i(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Et(e,a,t,l){a&=~Gu,a&=~el,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var n=a;0<n;){var i=31-ma(n),c=1<<i;l[i]=-1,n&=~c}t!==0&&Br(e,t,a)}function Hi(){return(se&6)===0?(Mn(0),!1):!0}function Zu(){if(ee!==null){if(de===0)var e=ee.return;else e=ee,$a=Xt=null,ru(e),zl=null,sn=0,e=ee;for(;e!==null;)uf(e.alternate,e),e=e.return;ee=null}}function wl(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,$h(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),rt=0,Zu(),be=e,ee=t=Fa(e.current,null),te=a,de=0,ya=null,Nt=!1,_l=Xl(e,a),Yu=!1,Dl=ba=Gu=el=At=Ee=0,sa=An=null,Lu=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var n=31-ma(l),i=1<<n;a|=e[n],l&=~i}return ut=a,ni(),t}function Df(e,a){K=null,j.H=vn,a===jl||a===di?(a=Xs(),de=3):a===Wc?(a=Xs(),de=4):de=a===Nu?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ya=a,ee===null&&(Ee=1,Ti(e,Ca(a,e.current)))}function Of(){var e=pa.current;return e===null?!0:(te&4194048)===te?wa===null:(te&62914560)===te||(te&536870912)!==0?e===wa:!1}function wf(){var e=j.H;return j.H=vn,e===null?vn:e}function Rf(){var e=j.A;return j.A=Ch,e}function Bi(){Ee=4,Nt||(te&4194048)!==te&&pa.current!==null||(_l=!0),(At&134217727)===0&&(el&134217727)===0||be===null||Et(be,te,ba,!1)}function Ku(e,a,t){var l=se;se|=2;var n=wf(),i=Rf();(be!==e||te!==a)&&(ki=null,wl(e,a)),a=!1;var c=Ee;e:do try{if(de!==0&&ee!==null){var s=ee,o=ya;switch(de){case 8:Zu(),c=6;break e;case 3:case 2:case 9:case 6:pa.current===null&&(a=!0);var v=de;if(de=0,ya=null,Rl(e,s,o,v),t&&_l){c=0;break e}break;default:v=de,de=0,ya=null,Rl(e,s,o,v)}}Oh(),c=Ee;break}catch(S){Df(e,S)}while(!0);return a&&e.shellSuspendCounter++,$a=Xt=null,se=l,j.H=n,j.A=i,ee===null&&(be=null,te=0,ni()),c}function Oh(){for(;ee!==null;)Uf(ee)}function wh(e,a){var t=se;se|=2;var l=wf(),n=Rf();be!==e||te!==a?(ki=null,Ui=We()+500,wl(e,a)):_l=Xl(e,a);e:do try{if(de!==0&&ee!==null){a=ee;var i=ya;a:switch(de){case 1:de=0,ya=null,Rl(e,a,i,1);break;case 2:case 9:if(Qs(i)){de=0,ya=null,kf(a);break}a=function(){de!==2&&de!==9||be!==e||(de=7),Va(e)},i.then(a,a);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:Qs(i)?(de=0,ya=null,kf(a)):(de=0,ya=null,Rl(e,a,i,7));break;case 5:var c=null;switch(ee.tag){case 26:c=ee.memoizedState;case 5:case 27:var s=ee;if(c?Sd(c):s.stateNode.complete){de=0,ya=null;var o=s.sibling;if(o!==null)ee=o;else{var v=s.return;v!==null?(ee=v,qi(v)):ee=null}break a}}de=0,ya=null,Rl(e,a,i,5);break;case 6:de=0,ya=null,Rl(e,a,i,6);break;case 8:Zu(),Ee=6;break e;default:throw Error(d(462))}}Rh();break}catch(S){Df(e,S)}while(!0);return $a=Xt=null,j.H=l,j.A=n,se=t,ee!==null?0:(be=null,te=0,ni(),Ee)}function Rh(){for(;ee!==null&&!ic();)Uf(ee)}function Uf(e){var a=nf(e.alternate,e,ut);e.memoizedProps=e.pendingProps,a===null?qi(e):ee=a}function kf(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Io(t,a,a.pendingProps,a.type,void 0,te);break;case 11:a=Io(t,a,a.pendingProps,a.type.render,a.ref,te);break;case 5:ru(a);default:uf(t,a),a=ee=Os(a,ut),a=nf(t,a,ut)}e.memoizedProps=e.pendingProps,a===null?qi(e):ee=a}function Rl(e,a,t,l){$a=Xt=null,ru(a),zl=null,sn=0;var n=a.return;try{if(jh(e,n,a,t,te)){Ee=1,Ti(e,Ca(t,e.current)),ee=null;return}}catch(i){if(n!==null)throw ee=n,i;Ee=1,Ti(e,Ca(t,e.current)),ee=null;return}a.flags&32768?(ce||l===1?e=!0:_l||(te&536870912)!==0?e=!1:(Nt=e=!0,(l===2||l===9||l===3||l===6)&&(l=pa.current,l!==null&&l.tag===13&&(l.flags|=16384))),Hf(a,e)):qi(a)}function qi(e){var a=e;do{if((a.flags&32768)!==0){Hf(a,Nt);return}e=a.return;var t=Ah(a.alternate,a,ut);if(t!==null){ee=t;return}if(a=a.sibling,a!==null){ee=a;return}ee=a=e}while(a!==null);Ee===0&&(Ee=5)}function Hf(e,a){do{var t=Th(e.alternate,e);if(t!==null){t.flags&=32767,ee=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ee=e;return}ee=e=t}while(e!==null);Ee=6,ee=null}function Bf(e,a,t,l,n,i,c,s,o){e.cancelPendingCommit=null;do Yi();while(He!==0);if((se&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(i=a.lanes|a.childLanes,i|=Uc,mm(e,t,i,c,s,o),e===be&&(ee=be=null,te=0),Ol=a,Mt=e,rt=t,Qu=i,Vu=n,Mf=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bh(al,function(){return Qf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,n=D.p,D.p=2,c=se,se|=4;try{Mh(e,a,t)}finally{se=c,D.p=n,j.T=l}}He=1,qf(),Yf(),Gf()}}function qf(){if(He===1){He=0;var e=Mt,a=Ol,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=j.T,j.T=null;var l=D.p;D.p=2;var n=se;se|=4;try{bf(a,e);var i=ir,c=zs(e.containerInfo),s=i.focusedElem,o=i.selectionRange;if(c!==s&&s&&s.ownerDocument&&js(s.ownerDocument.documentElement,s)){if(o!==null&&_c(s)){var v=o.start,S=o.end;if(S===void 0&&(S=v),"selectionStart"in s)s.selectionStart=v,s.selectionEnd=Math.min(S,s.value.length);else{var A=s.ownerDocument||document,y=A&&A.defaultView||window;if(y.getSelection){var b=y.getSelection(),U=s.textContent.length,Q=Math.min(o.start,U),ye=o.end===void 0?Q:Math.min(o.end,U);!b.extend&&Q>ye&&(c=ye,ye=Q,Q=c);var m=Ss(s,Q),f=Ss(s,ye);if(m&&f&&(b.rangeCount!==1||b.anchorNode!==m.node||b.anchorOffset!==m.offset||b.focusNode!==f.node||b.focusOffset!==f.offset)){var p=A.createRange();p.setStart(m.node,m.offset),b.removeAllRanges(),Q>ye?(b.addRange(p),b.extend(f.node,f.offset)):(p.setEnd(f.node,f.offset),b.addRange(p))}}}}for(A=[],b=s;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<A.length;s++){var N=A[s];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Ii=!!nr,ir=nr=null}finally{se=n,D.p=l,j.T=t}}e.current=a,He=2}}function Yf(){if(He===2){He=0;var e=Mt,a=Ol,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=j.T,j.T=null;var l=D.p;D.p=2;var n=se;se|=4;try{hf(e,a.alternate,a)}finally{se=n,D.p=l,j.T=t}}He=3}}function Gf(){if(He===4||He===3){He=0,cc();var e=Mt,a=Ol,t=rt,l=Mf;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?He=5:(He=0,Ol=Mt=null,Lf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Tt=null),fc(t),a=a.stateNode,da&&typeof da.onCommitFiberRoot=="function")try{da.onCommitFiberRoot(kt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=j.T,n=D.p,D.p=2,j.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var s=l[c];i(s.value,{componentStack:s.stack})}}finally{j.T=a,D.p=n}}(rt&3)!==0&&Yi(),Va(e),n=e.pendingLanes,(t&261930)!==0&&(n&42)!==0?e===Xu?Tn++:(Tn=0,Xu=e):Tn=0,Mn(0)}}function Lf(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,un(a)))}function Yi(){return qf(),Yf(),Gf(),Qf()}function Qf(){if(He!==5)return!1;var e=Mt,a=Qu;Qu=0;var t=fc(rt),l=j.T,n=D.p;try{D.p=32>t?32:t,j.T=null,t=Vu,Vu=null;var i=Mt,c=rt;if(He=0,Ol=Mt=null,rt=0,(se&6)!==0)throw Error(d(331));var s=se;if(se|=4,Nf(i.current),Sf(i,i.current,c,t),se=s,Mn(0,!1),da&&typeof da.onPostCommitFiberRoot=="function")try{da.onPostCommitFiberRoot(kt,i)}catch{}return!0}finally{D.p=n,j.T=l,Lf(e,a)}}function Vf(e,a,t){a=Ca(t,a),a=zu(e.stateNode,a,2),e=xt(e,a,2),e!==null&&(Zl(e,2),Va(e))}function me(e,a,t){if(e.tag===3)Vf(e,e,t);else for(;a!==null;){if(a.tag===3){Vf(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Tt===null||!Tt.has(l))){e=Ca(t,e),t=Vo(2),l=xt(a,t,2),l!==null&&(Xo(t,l,a,e),Zl(l,2),Va(l));break}}a=a.return}}function Ju(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new _h;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(t)||(Yu=!0,n.add(t),e=Uh.bind(null,e,a,t),a.then(e,e))}function Uh(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,be===e&&(te&t)===t&&(Ee===4||Ee===3&&(te&62914560)===te&&300>We()-Ri?(se&2)===0&&wl(e,0):Gu|=t,Dl===te&&(Dl=0)),Va(e)}function Xf(e,a){a===0&&(a=Hr()),e=Lt(e,a),e!==null&&(Zl(e,a),Va(e))}function kh(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Xf(e,t)}function Hh(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(a),Xf(e,t)}function Bh(e,a){return la(e,a)}var Gi=null,Ul=null,Fu=!1,Li=!1,Wu=!1,Ct=0;function Va(e){e!==Ul&&e.next===null&&(Ul===null?Gi=Ul=e:Ul=Ul.next=e),Li=!0,Fu||(Fu=!0,Yh())}function Mn(e,a){if(!Wu&&Li){Wu=!0;do for(var t=!1,l=Gi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-ma(42|e)+1)-1,i&=n&~(c&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Ff(l,i))}else i=te,i=Zn(l,l===be?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Xl(l,i)||(t=!0,Ff(l,i));l=l.next}while(t);Wu=!1}}function qh(){Zf()}function Zf(){Li=Fu=!1;var e=0;Ct!==0&&Wh()&&(e=Ct);for(var a=We(),t=null,l=Gi;l!==null;){var n=l.next,i=Kf(l,a);i===0?(l.next=null,t===null?Gi=n:t.next=n,n===null&&(Ul=t)):(t=l,(e!==0||(i&3)!==0)&&(Li=!0)),l=n}He!==0&&He!==5||Mn(e),Ct!==0&&(Ct=0)}function Kf(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-ma(i),s=1<<c,o=n[c];o===-1?((s&t)===0||(s&l)!==0)&&(n[c]=dm(s,a)):o<=a&&(e.expiredLanes|=s),i&=~s}if(a=be,t=te,t=Zn(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(de===2||de===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Gl(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Xl(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&Gl(l),fc(t)){case 2:case 8:t=Gn;break;case 32:t=al;break;case 268435456:t=Ql;break;default:t=al}return l=Jf.bind(null,e),t=la(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&Gl(l),e.callbackPriority=2,e.callbackNode=null,2}function Jf(e,a){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Yi()&&e.callbackNode!==t)return null;var l=te;return l=Zn(e,e===be?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Cf(e,l,a),Kf(e,We()),e.callbackNode!=null&&e.callbackNode===t?Jf.bind(null,e):null)}function Ff(e,a){if(Yi())return null;Cf(e,a,!0)}function Yh(){Ih(function(){(se&6)!==0?la(Ll,qh):Zf()})}function $u(){if(Ct===0){var e=xl;e===0&&(e=Qn,Qn<<=1,(Qn&261888)===0&&(Qn=256)),Ct=e}return Ct}function Wf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wn(""+e)}function $f(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Gh(e,a,t,l,n){if(a==="submit"&&t&&t.stateNode===n){var i=Wf((n[na]||null).action),c=l.submitter;c&&(a=(a=c[na]||null)?Wf(a.formAction):c.getAttribute("formAction"),a!==null&&(i=a,c=null));var s=new ei("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ct!==0){var o=c?$f(n,c):new FormData(n);vu(t,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=c?$f(n,c):new FormData(n),vu(t,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Iu=0;Iu<Rc.length;Iu++){var Pu=Rc[Iu],Lh=Pu.toLowerCase(),Qh=Pu[0].toUpperCase()+Pu.slice(1);Ha(Lh,"on"+Qh)}Ha(Ts,"onAnimationEnd"),Ha(Ms,"onAnimationIteration"),Ha(Es,"onAnimationStart"),Ha("dblclick","onDoubleClick"),Ha("focusin","onFocus"),Ha("focusout","onBlur"),Ha(ih,"onTransitionRun"),Ha(ch,"onTransitionStart"),Ha(uh,"onTransitionCancel"),Ha(Cs,"onTransitionEnd"),cl("onMouseEnter",["mouseout","mouseover"]),cl("onMouseLeave",["mouseout","mouseover"]),cl("onPointerEnter",["pointerout","pointerover"]),cl("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En));function If(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],n=l.event;l=l.listeners;e:{var i=void 0;if(a)for(var c=l.length-1;0<=c;c--){var s=l[c],o=s.instance,v=s.currentTarget;if(s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=v;try{i(n)}catch(S){li(S)}n.currentTarget=null,i=o}else for(c=0;c<l.length;c++){if(s=l[c],o=s.instance,v=s.currentTarget,s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=v;try{i(n)}catch(S){li(S)}n.currentTarget=null,i=o}}}}function ae(e,a){var t=a[dc];t===void 0&&(t=a[dc]=new Set);var l=e+"__bubble";t.has(l)||(Pf(a,e,2,!1),t.add(l))}function er(e,a,t){var l=0;a&&(l|=4),Pf(t,e,l,a)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Qi]){e[Qi]=!0,Vr.forEach(function(t){t!=="selectionchange"&&(Vh.has(t)||er(t,!1,e),er(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Qi]||(a[Qi]=!0,er("selectionchange",!1,a))}}function Pf(e,a,t,l){switch(Ed(a)){case 2:var n=y0;break;case 8:n=b0;break;default:n=pr}t=n.bind(null,a,t,e),n=void 0,!Sc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function tr(e,a,t,l,n){var i=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var s=l.stateNode.containerInfo;if(s===n)break;if(c===4)for(c=l.return;c!==null;){var o=c.tag;if((o===3||o===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;s!==null;){if(c=ll(s),c===null)return;if(o=c.tag,o===5||o===6||o===26||o===27){l=i=c;continue e}s=s.parentNode}}l=l.return}ts(function(){var v=i,S=bc(t),A=[];e:{var y=_s.get(e);if(y!==void 0){var b=ei,U=e;switch(e){case"keypress":if(In(t)===0)break e;case"keydown":case"keyup":b=Hm;break;case"focusin":U="focus",b=Ac;break;case"focusout":U="blur",b=Ac;break;case"beforeblur":case"afterblur":b=Ac;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ym;break;case Ts:case Ms:case Es:b=Em;break;case Cs:b=Lm;break;case"scroll":case"scrollend":b=zm;break;case"wheel":b=Vm;break;case"copy":case"cut":case"paste":b=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=us;break;case"toggle":case"beforetoggle":b=Zm}var Q=(a&4)!==0,ye=!Q&&(e==="scroll"||e==="scrollend"),m=Q?y!==null?y+"Capture":null:y;Q=[];for(var f=v,p;f!==null;){var N=f;if(p=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||p===null||m===null||(N=Fl(f,m),N!=null&&Q.push(Cn(f,N,p))),ye)break;f=f.return}0<Q.length&&(y=new b(y,U,null,t,S),A.push({event:y,listeners:Q}))}}if((a&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",y&&t!==yc&&(U=t.relatedTarget||t.fromElement)&&(ll(U)||U[tl]))break e;if((b||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,b?(U=t.relatedTarget||t.toElement,b=v,U=U?ll(U):null,U!==null&&(ye=M(U),Q=U.tag,U!==ye||Q!==5&&Q!==27&&Q!==6)&&(U=null)):(b=null,U=v),b!==U)){if(Q=is,N="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(Q=us,N="onPointerLeave",m="onPointerEnter",f="pointer"),ye=b==null?y:Jl(b),p=U==null?y:Jl(U),y=new Q(N,f+"leave",b,t,S),y.target=ye,y.relatedTarget=p,N=null,ll(S)===v&&(Q=new Q(m,f+"enter",U,t,S),Q.target=p,Q.relatedTarget=ye,N=Q),ye=N,b&&U)a:{for(Q=Xh,m=b,f=U,p=0,N=m;N;N=Q(N))p++;N=0;for(var Y=f;Y;Y=Q(Y))N++;for(;0<p-N;)m=Q(m),p--;for(;0<N-p;)f=Q(f),N--;for(;p--;){if(m===f||f!==null&&m===f.alternate){Q=m;break a}m=Q(m),f=Q(f)}Q=null}else Q=null;b!==null&&ed(A,y,b,Q,!1),U!==null&&ye!==null&&ed(A,ye,U,Q,!0)}}e:{if(y=v?Jl(v):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var ue=gs;else if(ms(y))if(ps)ue=th;else{ue=eh;var B=Pm}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?v&&vc(v.elementType)&&(ue=gs):ue=ah;if(ue&&(ue=ue(e,v))){hs(A,ue,t,S);break e}B&&B(e,y,v),e==="focusout"&&v&&y.type==="number"&&v.memoizedProps.value!=null&&pc(y,"number",y.value)}switch(B=v?Jl(v):window,e){case"focusin":(ms(B)||B.contentEditable==="true")&&(dl=B,Dc=v,ln=null);break;case"focusout":ln=Dc=dl=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Ns(A,t,S);break;case"selectionchange":if(nh)break;case"keydown":case"keyup":Ns(A,t,S)}var W;if(Mc)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else fl?fs(e,t)&&(le="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(le="onCompositionStart");le&&(rs&&t.locale!=="ko"&&(fl||le!=="onCompositionStart"?le==="onCompositionEnd"&&fl&&(W=ls()):(mt=S,jc="value"in mt?mt.value:mt.textContent,fl=!0)),B=Vi(v,le),0<B.length&&(le=new cs(le,e,null,t,S),A.push({event:le,listeners:B}),W?le.data=W:(W=ds(t),W!==null&&(le.data=W)))),(W=Jm?Fm(e,t):Wm(e,t))&&(le=Vi(v,"onBeforeInput"),0<le.length&&(B=new cs("onBeforeInput","beforeinput",null,t,S),A.push({event:B,listeners:le}),B.data=W)),Gh(A,e,v,t,S)}If(A,a)})}function Cn(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Vi(e,a){for(var t=a+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Fl(e,t),n!=null&&l.unshift(Cn(e,n,i)),n=Fl(e,a),n!=null&&l.push(Cn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Xh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ed(e,a,t,l,n){for(var i=a._reactName,c=[];t!==null&&t!==l;){var s=t,o=s.alternate,v=s.stateNode;if(s=s.tag,o!==null&&o===l)break;s!==5&&s!==26&&s!==27||v===null||(o=v,n?(v=Fl(t,i),v!=null&&c.unshift(Cn(t,v,o))):n||(v=Fl(t,i),v!=null&&c.push(Cn(t,v,o)))),t=t.return}c.length!==0&&e.push({event:a,listeners:c})}var Zh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(Zh,`
`).replace(Kh,"")}function td(e,a){return a=ad(a),ad(e)===a}function ve(e,a,t,l,n,i){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||rl(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&rl(e,""+l);break;case"className":Jn(e,"class",l);break;case"tabIndex":Jn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,t,l);break;case"style":es(e,l,i);break;case"data":if(a!=="object"){Jn(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Wn(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&ve(e,a,"name",n.name,n,null),ve(e,a,"formEncType",n.formEncType,n,null),ve(e,a,"formMethod",n.formMethod,n,null),ve(e,a,"formTarget",n.formTarget,n,null)):(ve(e,a,"encType",n.encType,n,null),ve(e,a,"method",n.method,n,null),ve(e,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Wn(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=Ka);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Wn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Kn(e,"popover",l);break;case"xlinkActuate":Za(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Za(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Za(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Za(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Za(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Za(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Za(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Za(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Za(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Sm.get(t)||t,Kn(e,t,l))}}function lr(e,a,t,l,n,i){switch(t){case"style":es(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=t}}break;case"children":typeof l=="string"?rl(e,l):(typeof l=="number"||typeof l=="bigint")&&rl(e,""+l);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ka);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),i=e[na]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(a,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,n);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Kn(e,t,l)}}}function Ze(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var l=!1,n=!1,i;for(i in t)if(t.hasOwnProperty(i)){var c=t[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:ve(e,a,i,c,t,null)}}n&&ve(e,a,"srcSet",t.srcSet,t,null),l&&ve(e,a,"src",t.src,t,null);return;case"input":ae("invalid",e);var s=i=c=n=null,o=null,v=null;for(l in t)if(t.hasOwnProperty(l)){var S=t[l];if(S!=null)switch(l){case"name":n=S;break;case"type":c=S;break;case"checked":o=S;break;case"defaultChecked":v=S;break;case"value":i=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(d(137,a));break;default:ve(e,a,l,S,t,null)}}Wr(e,i,s,o,v,c,n,!1);return;case"select":ae("invalid",e),l=c=i=null;for(n in t)if(t.hasOwnProperty(n)&&(s=t[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":c=s;break;case"multiple":l=s;default:ve(e,a,n,s,t,null)}a=i,t=c,e.multiple=!!l,a!=null?ul(e,!!l,a,!1):t!=null&&ul(e,!!l,t,!0);return;case"textarea":ae("invalid",e),i=n=l=null;for(c in t)if(t.hasOwnProperty(c)&&(s=t[c],s!=null))switch(c){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:ve(e,a,c,s,t,null)}Ir(e,l,n,i);return;case"option":for(o in t)if(t.hasOwnProperty(o)&&(l=t[o],l!=null))switch(o){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ve(e,a,o,l,t,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(l=0;l<En.length;l++)ae(En[l],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in t)if(t.hasOwnProperty(v)&&(l=t[v],l!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:ve(e,a,v,l,t,null)}return;default:if(vc(a)){for(S in t)t.hasOwnProperty(S)&&(l=t[S],l!==void 0&&lr(e,a,S,l,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(l=t[s],l!=null&&ve(e,a,s,l,t,null))}function Jh(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,s=null,o=null,v=null,S=null;for(b in t){var A=t[b];if(t.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=A;default:l.hasOwnProperty(b)||ve(e,a,b,null,l,A)}}for(var y in l){var b=l[y];if(A=t[y],l.hasOwnProperty(y)&&(b!=null||A!=null))switch(y){case"type":i=b;break;case"name":n=b;break;case"checked":v=b;break;case"defaultChecked":S=b;break;case"value":c=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,a));break;default:b!==A&&ve(e,a,y,b,l,A)}}gc(e,c,s,o,v,S,i,n);return;case"select":b=c=s=y=null;for(i in t)if(o=t[i],t.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":b=o;default:l.hasOwnProperty(i)||ve(e,a,i,null,l,o)}for(n in l)if(i=l[n],o=t[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":y=i;break;case"defaultValue":s=i;break;case"multiple":c=i;default:i!==o&&ve(e,a,n,i,l,o)}a=s,t=c,l=b,y!=null?ul(e,!!t,y,!1):!!l!=!!t&&(a!=null?ul(e,!!t,a,!0):ul(e,!!t,t?[]:"",!1));return;case"textarea":b=y=null;for(s in t)if(n=t[s],t.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ve(e,a,s,null,l,n)}for(c in l)if(n=l[c],i=t[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":y=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&ve(e,a,c,n,l,i)}$r(e,y,b);return;case"option":for(var U in t)if(y=t[U],t.hasOwnProperty(U)&&y!=null&&!l.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:ve(e,a,U,null,l,y)}for(o in l)if(y=l[o],b=t[o],l.hasOwnProperty(o)&&y!==b&&(y!=null||b!=null))switch(o){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:ve(e,a,o,y,l,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in t)y=t[Q],t.hasOwnProperty(Q)&&y!=null&&!l.hasOwnProperty(Q)&&ve(e,a,Q,null,l,y);for(v in l)if(y=l[v],b=t[v],l.hasOwnProperty(v)&&y!==b&&(y!=null||b!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,a));break;default:ve(e,a,v,y,l,b)}return;default:if(vc(a)){for(var ye in t)y=t[ye],t.hasOwnProperty(ye)&&y!==void 0&&!l.hasOwnProperty(ye)&&lr(e,a,ye,void 0,l,y);for(S in l)y=l[S],b=t[S],!l.hasOwnProperty(S)||y===b||y===void 0&&b===void 0||lr(e,a,S,y,l,b);return}}for(var m in t)y=t[m],t.hasOwnProperty(m)&&y!=null&&!l.hasOwnProperty(m)&&ve(e,a,m,null,l,y);for(A in l)y=l[A],b=t[A],!l.hasOwnProperty(A)||y===b||y==null&&b==null||ve(e,a,A,y,l,b)}function ld(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var n=t[l],i=n.transferSize,c=n.initiatorType,s=n.duration;if(i&&s&&ld(c)){for(c=0,s=n.responseEnd,l+=1;l<t.length;l++){var o=t[l],v=o.startTime;if(v>s)break;var S=o.transferSize,A=o.initiatorType;S&&ld(A)&&(o=o.responseEnd,c+=S*(o<s?1:(s-v)/(o-v)))}if(--l,a+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nr=null,ir=null;function Xi(e){return e.nodeType===9?e:e.ownerDocument}function nd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function cr(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ur=null;function Wh(){var e=window.event;return e&&e.type==="popstate"?e===ur?!1:(ur=e,!0):(ur=null,!1)}var cd=typeof setTimeout=="function"?setTimeout:void 0,$h=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,Ih=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(e){return ud.resolve(null).then(e).catch(Ph)}:cd;function Ph(e){setTimeout(function(){throw e})}function _t(e){return e==="head"}function rd(e,a){var t=a,l=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(n),ql(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")_n(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,_n(t);for(var i=t.firstChild;i;){var c=i.nextSibling,s=i.nodeName;i[Kl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=c}}else t==="body"&&_n(e.ownerDocument.body);t=n}while(t);ql(a)}function sd(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function rr(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":rr(t),mc(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function e0(e,a,t,l){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Kl])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ra(e.nextSibling),e===null)break}return null}function a0(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ra(e.nextSibling),e===null))return null;return e}function od(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ra(e.nextSibling),e===null))return null;return e}function sr(e){return e.data==="$?"||e.data==="$~"}function or(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function t0(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ra(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var fr=null;function fd(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Ra(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function dd(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function md(e,a,t){switch(a=Xi(t),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function _n(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);mc(e)}var Ua=new Map,hd=new Set;function Zi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var st=D.d;D.d={f:l0,r:n0,D:i0,C:c0,L:u0,m:r0,X:o0,S:s0,M:f0};function l0(){var e=st.f(),a=Hi();return e||a}function n0(e){var a=nl(e);a!==null&&a.tag===5&&a.type==="form"?_o(a):st.r(e)}var kl=typeof document>"u"?null:document;function gd(e,a,t){var l=kl;if(l&&typeof a=="string"&&a){var n=Ma(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),hd.has(n)||(hd.add(n),e={rel:e,crossOrigin:t,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),Ze(a,"link",e),qe(a),l.head.appendChild(a)))}}function i0(e){st.D(e),gd("dns-prefetch",e,null)}function c0(e,a){st.C(e,a),gd("preconnect",e,a)}function u0(e,a,t){st.L(e,a,t);var l=kl;if(l&&e&&a){var n='link[rel="preload"][as="'+Ma(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+Ma(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+Ma(t.imageSizes)+'"]')):n+='[href="'+Ma(e)+'"]';var i=n;switch(a){case"style":i=Hl(e);break;case"script":i=Bl(e)}Ua.has(i)||(e=G({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Ua.set(i,e),l.querySelector(n)!==null||a==="style"&&l.querySelector(Dn(i))||a==="script"&&l.querySelector(On(i))||(a=l.createElement("link"),Ze(a,"link",e),qe(a),l.head.appendChild(a)))}}function r0(e,a){st.m(e,a);var t=kl;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+Ma(l)+'"][href="'+Ma(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(e)}if(!Ua.has(i)&&(e=G({rel:"modulepreload",href:e},a),Ua.set(i,e),t.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(On(i)))return}l=t.createElement("link"),Ze(l,"link",e),qe(l),t.head.appendChild(l)}}}function s0(e,a,t){st.S(e,a,t);var l=kl;if(l&&e){var n=il(l).hoistableStyles,i=Hl(e);a=a||"default";var c=n.get(i);if(!c){var s={loading:0,preload:null};if(c=l.querySelector(Dn(i)))s.loading=5;else{e=G({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Ua.get(i))&&dr(e,t);var o=c=l.createElement("link");qe(o),Ze(o,"link",e),o._p=new Promise(function(v,S){o.onload=v,o.onerror=S}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ki(c,a,l)}c={type:"stylesheet",instance:c,count:1,state:s},n.set(i,c)}}}function o0(e,a){st.X(e,a);var t=kl;if(t&&e){var l=il(t).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=t.querySelector(On(n)),i||(e=G({src:e,async:!0},a),(a=Ua.get(n))&&mr(e,a),i=t.createElement("script"),qe(i),Ze(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function f0(e,a){st.M(e,a);var t=kl;if(t&&e){var l=il(t).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=t.querySelector(On(n)),i||(e=G({src:e,async:!0,type:"module"},a),(a=Ua.get(n))&&mr(e,a),i=t.createElement("script"),qe(i),Ze(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function pd(e,a,t,l){var n=(n=R.current)?Zi(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Hl(t.href),t=il(n).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Hl(t.href);var i=il(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Dn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Ua.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ua.set(e,t),i||d0(n,e,t,c.state))),a&&l===null)throw Error(d(528,""));return c}if(a&&l!==null)throw Error(d(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Bl(t),t=il(n).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Hl(e){return'href="'+Ma(e)+'"'}function Dn(e){return'link[rel="stylesheet"]['+e+"]"}function vd(e){return G({},e,{"data-precedence":e.precedence,precedence:null})}function d0(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Ze(a,"link",t),qe(a),e.head.appendChild(a))}function Bl(e){return'[src="'+Ma(e)+'"]'}function On(e){return"script[async]"+e}function yd(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Ma(t.href)+'"]');if(l)return a.instance=l,qe(l),l;var n=G({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),qe(l),Ze(l,"style",n),Ki(l,t.precedence,e),a.instance=l;case"stylesheet":n=Hl(t.href);var i=e.querySelector(Dn(n));if(i)return a.state.loading|=4,a.instance=i,qe(i),i;l=vd(t),(n=Ua.get(n))&&dr(l,n),i=(e.ownerDocument||e).createElement("link"),qe(i);var c=i;return c._p=new Promise(function(s,o){c.onload=s,c.onerror=o}),Ze(i,"link",l),a.state.loading|=4,Ki(i,t.precedence,e),a.instance=i;case"script":return i=Bl(t.src),(n=e.querySelector(On(i)))?(a.instance=n,qe(n),n):(l=t,(n=Ua.get(i))&&(l=G({},t),mr(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),qe(n),Ze(n,"link",l),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Ki(l,t.precedence,e));return a.instance}function Ki(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var s=l[c];if(s.dataset.precedence===a)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function dr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function mr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Ji=null;function bd(e,a,t){if(Ji===null){var l=new Map,n=Ji=new Map;n.set(t,l)}else n=Ji,l=n.get(t),l||(l=new Map,n.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var i=t[n];if(!(i[Kl]||i[Le]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(a)||"";c=e+c;var s=l.get(c);s?s.push(i):l.set(c,[i])}}return l}function xd(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function m0(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Sd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function h0(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Hl(l.href),i=a.querySelector(Dn(n));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Fi.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,qe(i);return}i=a.ownerDocument||a,l=vd(l),(n=Ua.get(n))&&dr(l,n),i=i.createElement("link"),qe(i);var c=i;c._p=new Promise(function(s,o){c.onload=s,c.onerror=o}),Ze(i,"link",l),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Fi.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var hr=0;function g0(e,a){return e.stylesheets&&e.count===0&&$i(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&$i(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&hr===0&&(hr=62500*Fh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$i(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>hr?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Fi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$i(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wi=null;function $i(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wi=new Map,a.forEach(p0,e),Wi=null,Fi.call(e))}function p0(e,a){if(!(a.state.loading&4)){var t=Wi.get(e);if(t)var l=t.get(null);else{t=new Map,Wi.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),l=c)}l&&t.set(null,l)}n=a.instance,c=n.getAttribute("data-precedence"),i=t.get(c)||l,i===l&&t.set(null,n),t.set(c,n),this.count++,l=Fi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var wn={$$typeof:De,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function v0(e,a,t,l,n,i,c,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.hiddenUpdates=sc(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function jd(e,a,t,l,n,i,c,s,o,v,S,A){return e=new v0(e,a,t,c,o,v,S,A,s),a=1,i===!0&&(a|=24),i=ga(3,null,null,a),e.current=i,i.stateNode=e,a=Kc(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:l,isDehydrated:t,cache:a},$c(i),e}function zd(e){return e?(e=gl,e):gl}function Nd(e,a,t,l,n,i){n=zd(n),l.context===null?l.context=n:l.pendingContext=n,l=bt(a),l.payload={element:t},i=i===void 0?null:i,i!==null&&(l.callback=i),t=xt(e,l,a),t!==null&&(oa(t,e,a),fn(t,e,a))}function Ad(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function gr(e,a){Ad(e,a),(e=e.alternate)&&Ad(e,a)}function Td(e){if(e.tag===13||e.tag===31){var a=Lt(e,67108864);a!==null&&oa(a,e,67108864),gr(e,67108864)}}function Md(e){if(e.tag===13||e.tag===31){var a=xa();a=oc(a);var t=Lt(e,a);t!==null&&oa(t,e,a),gr(e,a)}}var Ii=!0;function y0(e,a,t,l){var n=j.T;j.T=null;var i=D.p;try{D.p=2,pr(e,a,t,l)}finally{D.p=i,j.T=n}}function b0(e,a,t,l){var n=j.T;j.T=null;var i=D.p;try{D.p=8,pr(e,a,t,l)}finally{D.p=i,j.T=n}}function pr(e,a,t,l){if(Ii){var n=vr(l);if(n===null)tr(e,a,l,Pi,t),Cd(e,l);else if(S0(n,e,a,t,l))l.stopPropagation();else if(Cd(e,l),a&4&&-1<x0.indexOf(e)){for(;n!==null;){var i=nl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ht(i.pendingLanes);if(c!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var o=1<<31-ma(c);s.entanglements[1]|=o,c&=~o}Va(i),(se&6)===0&&(Ui=We()+500,Mn(0))}}break;case 31:case 13:s=Lt(i,2),s!==null&&oa(s,i,2),Hi(),gr(i,2)}if(i=vr(l),i===null&&tr(e,a,l,Pi,t),i===n)break;n=i}n!==null&&l.stopPropagation()}else tr(e,a,l,null,t)}}function vr(e){return e=bc(e),yr(e)}var Pi=null;function yr(e){if(Pi=null,e=ll(e),e!==null){var a=M(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=q(a),e!==null)return e;e=null}else if(t===31){if(e=ne(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Pi=e,null}function Ed(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(uc()){case Ll:return 2;case Gn:return 8;case al:case Ln:return 32;case Ql:return 268435456;default:return 32}default:return 32}}var br=!1,Dt=null,Ot=null,wt=null,Rn=new Map,Un=new Map,Rt=[],x0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cd(e,a){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":Rn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(a.pointerId)}}function kn(e,a,t,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},a!==null&&(a=nl(a),a!==null&&Td(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function S0(e,a,t,l,n){switch(a){case"focusin":return Dt=kn(Dt,e,a,t,l,n),!0;case"dragenter":return Ot=kn(Ot,e,a,t,l,n),!0;case"mouseover":return wt=kn(wt,e,a,t,l,n),!0;case"pointerover":var i=n.pointerId;return Rn.set(i,kn(Rn.get(i)||null,e,a,t,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Un.set(i,kn(Un.get(i)||null,e,a,t,l,n)),!0}return!1}function _d(e){var a=ll(e.target);if(a!==null){var t=M(a);if(t!==null){if(a=t.tag,a===13){if(a=q(t),a!==null){e.blockedOn=a,Lr(e.priority,function(){Md(t)});return}}else if(a===31){if(a=ne(t),a!==null){e.blockedOn=a,Lr(e.priority,function(){Md(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=vr(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);yc=l,t.target.dispatchEvent(l),yc=null}else return a=nl(t),a!==null&&Td(a),e.blockedOn=t,!1;a.shift()}return!0}function Dd(e,a,t){ec(e)&&t.delete(a)}function j0(){br=!1,Dt!==null&&ec(Dt)&&(Dt=null),Ot!==null&&ec(Ot)&&(Ot=null),wt!==null&&ec(wt)&&(wt=null),Rn.forEach(Dd),Un.forEach(Dd)}function ac(e,a){e.blockedOn===a&&(e.blockedOn=null,br||(br=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,j0)))}var tc=null;function Od(e){tc!==e&&(tc=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],n=e[a+2];if(typeof l!="function"){if(yr(l||t)===null)continue;break}var i=nl(t);i!==null&&(e.splice(a,3),a-=3,vu(i,{pending:!0,data:n,method:t.method,action:l},l,n))}}))}function ql(e){function a(o){return ac(o,e)}Dt!==null&&ac(Dt,e),Ot!==null&&ac(Ot,e),wt!==null&&ac(wt,e),Rn.forEach(a),Un.forEach(a);for(var t=0;t<Rt.length;t++){var l=Rt[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Rt.length&&(t=Rt[0],t.blockedOn===null);)_d(t),t.blockedOn===null&&Rt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var n=t[l],i=t[l+1],c=n[na]||null;if(typeof i=="function")c||Od(t);else if(c){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[na]||null)s=c.formAction;else if(yr(n)!==null)continue}else s=c.action;typeof s=="function"?t[l+1]=s:(t.splice(l,3),l-=3),Od(t)}}}function wd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function xr(e){this._internalRoot=e}lc.prototype.render=xr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var t=a.current,l=xa();Nd(t,l,e,a,null,null)},lc.prototype.unmount=xr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Nd(e.current,2,null,e,null,null),Hi(),a[tl]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var a=Gr();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Rt.length&&a!==0&&a<Rt[t].priority;t++);Rt.splice(t,0,e),t===0&&_d(e)}};var Rd=O.version;if(Rd!=="19.2.8")throw Error(d(527,Rd,"19.2.8"));D.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=T(a),e=e!==null?J(e):null,e=e===null?null:e.stateNode,e};var z0={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{kt=nc.inject(z0),da=nc}catch{}}return Bn.createRoot=function(e,a){if(!k(e))throw Error(d(299));var t=!1,l="",n=Yo,i=Go,c=Lo;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError)),a=jd(e,1,!1,null,null,t,l,null,n,i,c,wd),e[tl]=a.current,ar(e),new xr(a)},Bn.hydrateRoot=function(e,a,t){if(!k(e))throw Error(d(299));var l=!1,n="",i=Yo,c=Go,s=Lo,o=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.formState!==void 0&&(o=t.formState)),a=jd(e,1,!0,a,t??null,l,n,o,i,c,s,wd),a.context=zd(null),t=a.current,l=xa(),l=oc(l),n=bt(l),n.callback=null,xt(t,n,l),t=l,a.current.lanes=t,Zl(a,t),Va(a),e[tl]=a.current,ar(e),new lc(a)},Bn.version="19.2.8",Bn}var Vd;function w0(){if(Vd)return zr.exports;Vd=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(O){console.error(O)}}return x(),zr.exports=O0(),zr.exports}var R0=w0();const U0=Jd(R0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=x=>x.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wd=(...x)=>x.filter((O,w,d)=>!!O&&O.trim()!==""&&d.indexOf(O)===w).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=Ae.forwardRef(({color:x="currentColor",size:O=24,strokeWidth:w=2,absoluteStrokeWidth:d,className:k="",children:M,iconNode:q,...ne},H)=>Ae.createElement("svg",{ref:H,...H0,width:O,height:O,stroke:x,strokeWidth:d?Number(w)*24/Number(O):w,className:Wd("lucide",k),...ne},[...q.map(([T,J])=>Ae.createElement(T,J)),...Array.isArray(M)?M:[M]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(x,O)=>{const w=Ae.forwardRef(({className:d,...k},M)=>Ae.createElement(B0,{ref:M,iconNode:O,className:Wd(`lucide-${k0(x)}`,d),...k}));return w.displayName=`${x}`,w};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$d=I("ArrowRight",q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],G0=I("Award",Y0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Q0=I("BookOpen",L0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],X0=I("Bot",V0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qn=I("Check",Z0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Id=I("CircleCheck",K0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],F0=I("Cloud",J0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],$0=I("CodeXml",W0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],Xd=I("Code",I0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Mr=I("Copy",P0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Pd=I("Cpu",e1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],em=I("Database",a1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Er=I("Download",t1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Yl=I("ExternalLink",l1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],am=I("Eye",n1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Yn=I("FileText",i1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Or=I("Github",c1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],r1=I("Globe",u1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],o1=I("GraduationCap",s1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],d1=I("Info",f1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],tm=I("Layers",m1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],g1=I("Linkedin",h1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Cr=I("Lock",p1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],lm=I("Mail",v1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],wr=I("MapPin",y1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],x1=I("Menu",b1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],j1=I("Moon",S1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],nm=I("PanelsTopLeft",z1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],im=I("Phone",N1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],T1=I("Printer",A1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],E1=I("Send",M1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],cm=I("Server",C1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Rr=I("ShieldCheck",_1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],_r=I("Sparkles",D1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],w1=I("Sun",O1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],um=I("Terminal",R1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ur=I("X",U1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],rm=I("Zap",k1),$={name:"Dang Anh Tuong",nickname:"tuongok",brandLogo:"TUONG-DEV",title:"Full-Stack Software Engineer Intern | React, Node.js & Python FastAPI",targetRole:"Seeking Full-Stack Software Engineer Internship",availability:"Available for Full-Stack Internships · HCMC / Remote",location:"Ho Chi Minh City, Vietnam",email:"danganhtuongg@gmail.com",phone:"0335847674",github:"https://github.com/DangAnhTuong",githubUsername:"DangAnhTuong",linkedin:"https://www.linkedin.com/in/đặng-anh-tường-726574361?utm_source=share_via&utm_content=profile&utm_medium=member_ios",cvUrl:"/Dang_Anh_Tuong_CV.pdf",summary:"Final-year Information Technology student at Thuyloi University (HCMC) seeking a Full-Stack Software Engineer Internship. Experienced in building and deploying production-grade web applications with React, Node.js, and Python FastAPI, augmented by modern AI-assisted engineering workflows (Cursor, Claude Code, Google Antigravity). Genuine passion for software engineering, highly coachable, and eager to learn from senior engineers through rigorous code reviews. Ready to dedicate 100% energy and commitment to write clean, reliable code and create meaningful value for the company.",education:{university:"Thuyloi University",location:"Ho Chi Minh City, Vietnam",degree:"Bachelor of Science in Information Technology – 4th Year",timeline:"2023 – Present (Expected Graduation: 2027)",coursework:"Data Structures & Algorithms, Object-Oriented Programming, Database Systems (DBMS), Web Application Development, Software Engineering, Computer Networks",englishCert:"Certified CEFR B1 Standard (University Exit Benchmark)",nativeLang:"Vietnamese (Native)"},stats:[{label:"Academic Standing",value:"4th Year · Thuyloi Univ"},{label:"Target Opportunity",value:"Internship / Full-Stack"},{label:"Core Stack",value:"React · Node.js · FastAPI"},{label:"English Proficiency",value:"CEFR B1 Certified"}]},H1=[{id:"all",label:"All Projects"},{id:"fullstack",label:"Full-Stack & Backend"},{id:"creative",label:"3D Web & Interactive"},{id:"ai-data",label:"AI & Data Systems"}],Zd=[{id:"tuong-tan-toeic",title:"Tuong Tan TOEIC – 4-Skill EdTech Platform",category:"fullstack",featured:!0,role:"Full-Stack Developer | Production Flagship Project",timeline:"Jan. 2026 – Present",tagline:"Commercial-grade TOEIC exam ecosystem serving 18,200 ETS practice questions, 11,785 dictation audio sentences, and 83 SM-2 spaced repetition sets",description:"Developed an extensive TOEIC preparation platform serving 18,200 ETS practice questions with structured 4-part explanations, 11,785 dictation audio sentences with character-level text diffing, and 83 SM-2 spaced repetition sets. Built a 100vh single-frame ETS exam room featuring 200-question interactive bubble sheets, single-sentence waveform audio streaming, and sub-second auto-advancing input mechanics.",image:"/projects/toeic_real.webp",metrics:["18,200 ETS Questions","11,785 Dictations","100vh Exam Simulator","100% Self-Hosted Media"],techStack:["React 18","Node.js (Express)","MongoDB","TailwindCSS","Vite","Web Audio API","JWT Auth","Nginx","Linux VPS"],bullets:["Learning Engine: Developed an extensive TOEIC preparation platform serving 18,200 ETS practice questions with structured 4-part explanations, 11,785 dictation audio sentences with character-level text diffing, and 83 SM-2 spaced repetition sets.","Exam Simulator: Built a 100vh single-frame ETS exam room featuring 200-question interactive bubble sheets, single-sentence waveform audio streaming, and sub-second auto-advancing input mechanics.","Study Notebook & Gamification: Implemented an automated mistake review notebook for targeted practice, paired with daily streak tracking, XP progression, and a real-time 1v1 multiplayer arena.","Security, Payment & CI/CD: Integrated Google 1-Click OAuth 2.0, automated VietQR payment webhooks for instant 120-day VIP provisioning, and deployed automated 5-step CI/CD pipeline on Ubuntu Linux VPS with Nginx and SSL."],architectureFlow:[{step:"Client Layer",name:"React 18 + Vite 5",desc:"100vh No-Scroll Exam Room, Web Audio API waveform, SM-2 Engine"},{step:"Reverse Proxy",name:"Nginx + SSL",desc:"Rate limiting, TLS 1.3, caching headers, local /media CDN proxy"},{step:"Application",name:"Node.js Express API",desc:"JWT RBAC Middleware, Google OAuth2 verify, VietQR webhooks"},{step:"Data Store",name:"MongoDB + Mongoose",desc:"18.2k ETS indexed items, user streaks, XP & mistake notebooks"},{step:"DevOps & VPS",name:"Ubuntu Linux + PM2",desc:"Autonomous 5-step CI/CD pipeline, logrotate, self-hosted media"}],architecture:{frontend:"React 18, Vite 5, TailwindCSS, Web Audio API, Native Speech API, Lucide React, Custom SM-2 Active Recall Engine",backend:"Node.js Express API (v1), JWT RBAC Middleware, Google OAuth2 Token Verification, VietQR Webhook Listener",database:"MongoDB & Mongoose (18,000+ indexed questions, full-text search, user progress tracking & mistake notebooks)",devops:"Ubuntu Linux VPS, Nginx Reverse Proxy, Let's Encrypt SSL, PM2 Process Manager, Automated 5-Step CI/CD"},github:"https://github.com/DangAnhTuong/tuong_tan_toeic",demo:"https://toeic.danganhtuong.dev",isPrivate:!0,privateNotice:"Mã nguồn đang ở chế độ Private để bảo vệ tài nguyên đề thi ETS. Sẵn sàng mời làm Collaborator/Viewer cho Nhà tuyển dụng quan tâm.",badgeColor:"#3b82f6",gradient:"linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%)"},{id:"ai-english",title:"AI-Powered English Learning Platform",category:"ai-data",featured:!0,role:"Full-Stack Developer | Personal Project",timeline:"Jan. 2026 – Present",tagline:"Decoupled microservices architecture combining Node.js and Python FastAPI with real-time speech processing and pronunciation scoring",description:"Designed a multi-tier backend where Node.js manages user data, authentication, and chat history while Python FastAPI handles compute-heavy real-time speech processing. Integrated Deepgram STT and OpenAI API via WebSockets for low-latency voice evaluation (<1.5s) and automated pronunciation scoring.",image:"/projects/english_real.webp",metrics:["Decoupled Microservices","<1.5s Voice Streaming","Gemini 3.6 Flash Engine","0ms Mindmap Render"],techStack:["React 19","Node.js (Express)","Python (FastAPI)","MongoDB","Redis","WebSockets","Docker","Nginx"],bullets:["Decoupled Backend: Designed a multi-tier backend where Node.js manages user data, authentication, and chat history while Python FastAPI handles compute-heavy real-time speech processing.","Real-Time Voice Streaming: Integrated Deepgram STT and OpenAI API via WebSockets for low-latency voice evaluation (<1.5s) and automated pronunciation scoring.","Authentication & RBAC: Implemented secure JWT authentication with refresh token flow, Google OAuth2, and granular Role-Based Access Control (RBAC) for learners and admins.","DevOps & Deployment: Containerized application stack using Docker Compose and Nginx Reverse Proxy on Linux VPS; optimized caching headers for static SPA delivery."],architectureFlow:[{step:"Client Layer",name:"React 19 + Ant Design",desc:"Speak.com UI layout, 0ms Optimistic Mindmap, WebSocket Voice recorder"},{step:"API Gateway",name:"Nginx Reverse Proxy",desc:"Routes /api to Node.js (3001) and /py-api to FastAPI (8000)"},{step:"Node Service",name:"Express Auth & Data",desc:"JWT tokens, user sessions, chat history, topic catalogs"},{step:"Python AI",name:"FastAPI Engine",desc:"Asynchronous Gemini 3.6 Flash mindmap generation, speech evaluation"},{step:"Data & Cache",name:"MongoDB + Redis",desc:"User profiles, conversation transcripts, token blacklist caching"}],architecture:{frontend:"React 19, Vite, Web Audio API, WebSocket client, Ant Design",backend:"Node.js Express (Auth & Business API), Python FastAPI (Speech Inference Engine & Mindmap)",database:"MongoDB, Redis (Cache & Session state)",devops:"Docker Compose, Nginx Reverse Proxy, Linux VPS"},github:"https://github.com/DangAnhTuong/ai-english-learning-platform",demo:"https://english.danganhtuong.dev",badgeColor:"#10b981",gradient:"linear-gradient(135deg, #059669 0%, #10b981 100%)"},{id:"tuong-hotel",title:"Tuong Hotel – 3D Showcase & Reservation System",category:"creative",featured:!0,role:"Frontend Developer | Personal Project",timeline:"June 2025 – Aug. 2025",tagline:"Interactive 3D luxury hotel showcase and reservation system powered by Three.js WebGL with 60 FPS performance",description:"Built a luxury hotel showcase featuring interactive 3D WebGL rendering with Three.js, room showcases, dining menus, and tour booking reservation flows. Integrated Ant Design 5 components, custom CSS keyframe animations, and i18next for seamless English/Vietnamese language switching.",image:"/projects/hotel_real.webp",metrics:["Three.js WebGL Engine","Stable 60 FPS Render","3D Room Explorer","i18next Bilingual UI"],techStack:["React 19","Three.js (@react-three/fiber)","Ant Design 5","HTML5","CSS3","i18next","Netlify"],bullets:["3D Interactive Graphics: Built a luxury hotel showcase featuring interactive 3D WebGL rendering with Three.js, room showcases, dining menus, and tour booking reservation flows.","Localization & UI: Integrated Ant Design 5 components, custom CSS keyframe animations, and i18next for seamless English/Vietnamese language switching.","Asset Optimization & CI/CD: Optimized 3D model geometry and asset loading to maintain steady 60 FPS rendering; set up automated continuous deployment via Netlify."],architectureFlow:[{step:"3D Rendering",name:"Three.js & Fiber",desc:"WebGL canvas, realistic lighting, camera orbit controls, shadow maps"},{step:"UI Component",name:"Ant Design 5 + CSS",desc:"Modal reservation flows, responsive drawer menus, custom keyframes"},{step:"Localization",name:"i18next Engine",desc:"Instant EN/VI language switching without full page reloads"},{step:"Asset Engine",name:"GLTF / Draco Loader",desc:"Optimized 3D geometry compression for instant mobile loading"},{step:"Deployment",name:"Netlify Edge CI/CD",desc:"Continuous automated deployment, global CDN asset caching"}],architecture:{core:"React 19, Three.js, @react-three/fiber, @react-three/drei",ui:"Ant Design 5, Lucide Icons, Custom Keyframe CSS",i18n:"i18next (English & Vietnamese bilingual routing)",deployment:"Netlify Continuous Deployment (CI/CD)"},github:"https://github.com/DangAnhTuong/tuong-hotel",demo:"https://tuong-hotel.vercel.app",badgeColor:"#0ea5e9",gradient:"linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)"},{id:"tickethub",title:"TicketHub – Enterprise Event Ticketing Platform",category:"fullstack",featured:!1,role:"Full-Stack Engineer | Personal Project",timeline:"2025",tagline:"High-concurrency ticket distribution platform with distributed locking and queue management",description:"Engineered a robust event ticketing infrastructure designed to prevent race conditions during high-demand concert ticket sales using Redis Distributed Locks and BullMQ job queues.",image:"/projects/tickethub_real.webp",metrics:["Redis Distributed Locks","BullMQ Queue Engine","P99 1.82ms Lock Time","Zero Race Conditions"],techStack:["Next.js 19","NestJS","TypeScript","PostgreSQL","Redis","BullMQ","Prisma ORM","Docker Compose"],bullets:["High Concurrency Engine: Solved ticket race conditions using Redis Distributed Lock mechanisms.","Queue Architecture: Built BullMQ job queues to smooth out thousand-request traffic spikes without server crashes.","Enterprise Architecture: Decoupled NestJS backend with Prisma ORM, PostgreSQL, and strict RBAC authorization.","Full Containerization: Shipped complete multi-container Docker Compose setup ready for cloud or VPS."],architectureFlow:[{step:"Frontend App",name:"Next.js 19 TypeScript",desc:"Server-side rendering, real-time seat reservation map, TailwindCSS"},{step:"Backend API",name:"NestJS Modular",desc:"RESTful endpoints, Swagger OpenAPI docs, JWT RBAC security guards"},{step:"Distributed Lock",name:"Redis Mutex (Redlock)",desc:"Guarantees single seat acquisition during simultaneous checkouts"},{step:"Job Queue",name:"BullMQ Asynchronous",desc:"Buffers ticket payment processing, avoids database lock contention"},{step:"Persistence",name:"PostgreSQL + Prisma",desc:"ACID transactional order records, relational event schema"}],architecture:{frontend:"Next.js 19 (TypeScript), Framer Motion, Lucide Icons",backend:"NestJS, Prisma ORM, JWT, RBAC Guards, Swagger Docs",database:"PostgreSQL, Redis (Distributed Lock & BullMQ Job Queue)",devops:"Docker Compose All-in-One, Nginx Reverse Proxy"},github:"https://github.com/DangAnhTuong/event_ticketing_platform-",demo:"https://event-ticketing-platform-omega.vercel.app",badgeColor:"#6366f1",gradient:"linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"}],B1=[{category:"Frontend Development",icon:"Layout",skills:["React 19 / 18","Next.js","TailwindCSS","Three.js (@react-three/fiber)","JavaScript (ES6+)","TypeScript","HTML5","CSS3","Ant Design","Web Audio API"]},{category:"Backend Development",icon:"Server",skills:["Node.js (Express)","Python (FastAPI)","RESTful APIs","WebSockets","Mongoose","JWT Auth","OAuth 2.0","RBAC"]},{category:"Programming Languages",icon:"Code",skills:["JavaScript (ES6+)","TypeScript","Python","C++","Java","SQL"]},{category:"Database & Storage",icon:"Database",skills:["MongoDB","PostgreSQL","MySQL","Redis"]},{category:"AI-Assisted Engineering",icon:"Cpu",skills:["Cursor IDE","Claude Code","Google Antigravity","OpenAI Codex","Prompt Engineering"]},{category:"DevOps & Cloud",icon:"Cloud",skills:["Docker","Docker Compose","Nginx Reverse Proxy","Linux VPS (Ubuntu)","PM2","Git","GitHub","Vercel","Netlify","CI/CD"]},{category:"Software Practices",icon:"Shield",skills:["Clean Architecture","Responsive Web Design","Component-Driven Development","Agile / Scrum","Code Review"]},{category:"Languages",icon:"Globe",skills:["English (CEFR B1 Certified)","Vietnamese (Native)"]}];function q1({theme:x,toggleTheme:O,onOpenCv:w}){const[d,k]=Ae.useState(!1),[M,q]=Ae.useState(!1);return Ae.useEffect(()=>{const ne=()=>{k(window.scrollY>20)};return window.addEventListener("scroll",ne),()=>window.removeEventListener("scroll",ne)},[]),u.jsxs("header",{className:`navbar-wrapper ${d?"navbar-scrolled":""}`,children:[u.jsxs("div",{className:"container navbar-container",children:[u.jsxs("a",{href:"#home",className:"navbar-brand",children:[u.jsx("div",{className:"brand-icon",children:u.jsx(um,{size:17,color:"var(--accent-cyan)"})}),u.jsxs("div",{className:"brand-text",children:[u.jsx("span",{className:"brand-name",children:$.brandLogo}),u.jsx("span",{className:"brand-role",children:"Software Engineer"})]})]}),u.jsxs("nav",{className:"nav-links",children:[u.jsx("a",{href:"#home",className:"nav-item",children:"Home"}),u.jsx("a",{href:"#about",className:"nav-item",children:"About"}),u.jsx("a",{href:"#projects",className:"nav-item",children:"Projects"}),u.jsx("a",{href:"#contact",className:"nav-item",children:"Contact"}),u.jsxs("a",{href:"#contact",className:"nav-availability-pill",title:"Candidate Availability Status",children:[u.jsx("span",{className:"nav-pulse-dot"}),u.jsx("span",{children:"Open to Work"})]})]}),u.jsxs("div",{className:"navbar-actions",children:[u.jsx("button",{className:"theme-toggle-btn",onClick:O,"aria-label":`Switch to ${x==="dark"?"Light":"Dark"} mode`,title:`Switch to ${x==="dark"?"Light":"Dark"} mode`,children:x==="dark"?u.jsx(w1,{size:18,color:"#fbbf24",className:"theme-icon"}):u.jsx(j1,{size:18,color:"#6366f1",className:"theme-icon"})}),u.jsxs("button",{onClick:w,className:"btn btn-primary btn-sm resume-btn",title:"Preview Official 1-Page Resume (PDF)",children:[u.jsx(Yn,{size:15}),u.jsx("span",{children:"Resume"})]}),u.jsx("button",{className:"mobile-toggle-btn",onClick:()=>q(!M),"aria-label":"Toggle Navigation",children:M?u.jsx(Ur,{size:22}):u.jsx(x1,{size:22})})]})]}),M&&u.jsxs("div",{className:"mobile-menu glass-panel",children:[u.jsx("a",{href:"#home",onClick:()=>q(!1),className:"mobile-nav-item",children:"Home"}),u.jsx("a",{href:"#about",onClick:()=>q(!1),className:"mobile-nav-item",children:"About Me"}),u.jsx("a",{href:"#projects",onClick:()=>q(!1),className:"mobile-nav-item",children:"Featured Projects"}),u.jsx("a",{href:"#contact",onClick:()=>q(!1),className:"mobile-nav-item",children:"Contact"}),u.jsxs("button",{onClick:()=>{q(!1),w()},className:"btn btn-primary btn-sm",style:{marginTop:"8px",width:"100%",justifyContent:"center"},children:[u.jsx(Yn,{size:16}),u.jsx("span",{children:"View Resume PDF"})]})]}),u.jsx("style",{children:`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          height: 72px;
          display: flex;
          align-items: center;
          transition: background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .navbar-scrolled {
          background-color: var(--bg-nav);
          border-bottom: 1px solid var(--border-subtle);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          height: 64px;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .brand-role {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nav-item {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-item:hover {
          color: var(--accent-cyan);
        }

        .nav-availability-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.74rem;
          font-weight: 700;
          font-family: var(--font-mono);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: var(--accent-emerald);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .nav-availability-pill:hover {
          background: rgba(16, 185, 129, 0.2);
          transform: scale(1.02);
        }

        .nav-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 6px var(--accent-emerald);
          animation: navPulse 1.6s infinite;
        }

        @keyframes navPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .theme-toggle-btn {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          border-color: var(--border-focus);
          transform: translateY(-1px);
        }

        .resume-btn {
          cursor: pointer;
        }

        .mobile-toggle-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 4px;
        }

        .mobile-menu {
          position: fixed;
          top: 72px;
          left: 16px;
          right: 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          z-index: 998;
          backdrop-filter: blur(16px);
        }

        .mobile-nav-item {
          padding: 10px 14px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          border-radius: var(--radius-sm);
        }

        .mobile-nav-item:hover {
          background: var(--badge-bg);
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
        }
      `})]})}function Y1({onOpenCv:x}){const[O,w]=Ae.useState(null),d=(k,M)=>{navigator.clipboard.writeText(k),w(M),setTimeout(()=>w(null),2200)};return u.jsxs("section",{id:"home",className:"hero-section",children:[u.jsxs("div",{className:"container hero-container",children:[u.jsxs("div",{className:"badge-row",children:[u.jsxs("div",{className:"availability-pill",children:[u.jsx("span",{className:"live-dot"}),u.jsx("span",{children:$.availability})]}),u.jsxs("div",{className:"signature-pill",children:[u.jsx(_r,{size:14,color:"var(--accent-cyan)"}),u.jsx("span",{children:"Signature Focus · Real-Time AI & 3D Web"})]}),u.jsxs("div",{className:"location-pill",children:[u.jsx(wr,{size:14,color:"var(--accent-indigo)"}),u.jsx("span",{children:$.location})]})]}),u.jsx("h1",{className:"hero-name",children:$.name}),u.jsx("h2",{className:"hero-title text-gradient",children:$.title}),u.jsx("p",{className:"hero-summary",children:$.summary}),u.jsxs("div",{className:"tech-tags-cloud",children:[u.jsxs("span",{className:"tech-tag",children:[u.jsx(tm,{size:13})," React 19 & Next.js"]}),u.jsxs("span",{className:"tech-tag",children:[u.jsx($0,{size:13})," Three.js (@react-three/fiber)"]}),u.jsxs("span",{className:"tech-tag",children:[u.jsx(Pd,{size:13})," Node.js & Python FastAPI"]}),u.jsxs("span",{className:"tech-tag",children:[u.jsx(_r,{size:13})," AI-Assisted Workflows (Antigravity & Claude Code)"]})]}),u.jsxs("div",{className:"hero-actions",children:[u.jsxs("a",{href:"#contact",className:"btn btn-primary",children:[u.jsx("span",{children:"Get In Touch"}),u.jsx($d,{size:16})]}),u.jsxs("button",{onClick:x,className:"btn btn-secondary resume-hero-btn",title:"View 1-Page ATS Resume directly in browser",children:[u.jsx(Yn,{size:16,color:"var(--accent-cyan)"}),u.jsx("span",{children:"Preview CV (1-Page ATS)"})]}),u.jsx("a",{href:"#projects",className:"btn btn-secondary",children:u.jsx("span",{children:"View Projects"})})]}),u.jsxs("div",{className:"quick-contact-strip",children:[u.jsxs("button",{className:"quick-contact-pill",onClick:()=>d($.email,"email"),title:"Click to copy email address",children:[O==="email"?u.jsx(qn,{size:13,color:"var(--accent-emerald)"}):u.jsx(Mr,{size:13}),u.jsx("span",{children:O==="email"?"✓ Copied Email!":`Email: ${$.email}`})]}),u.jsxs("button",{className:"quick-contact-pill",onClick:()=>d($.phone,"phone"),title:"Click to copy phone / Zalo number",children:[O==="phone"?u.jsx(qn,{size:13,color:"var(--accent-emerald)"}):u.jsx(Mr,{size:13}),u.jsx("span",{children:O==="phone"?"✓ Copied Phone/Zalo!":`Phone: ${$.phone}`})]}),u.jsxs("div",{className:"core-vitals-pill",children:[u.jsx(rm,{size:13,color:"var(--accent-emerald)"}),u.jsx("span",{children:"100/100 Core Web Vitals"})]})]}),u.jsx("div",{className:"hero-stats-grid",children:$.stats.map((k,M)=>u.jsxs("div",{className:"stat-card glass-panel",children:[u.jsx("span",{className:"stat-val text-gradient",children:k.value}),u.jsx("span",{className:"stat-lbl",children:k.label})]},M))})]}),u.jsx("style",{children:`
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 135px 0 65px;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 940px;
        }

        .badge-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .availability-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: var(--accent-emerald);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald);
          animation: livePulse 1.6s infinite;
        }

        @keyframes livePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        .signature-pill, .location-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          color: var(--text-primary);
        }

        .signature-pill {
          border-color: rgba(14, 165, 233, 0.3);
        }

        .hero-name {
          font-size: 3.8rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .hero-title {
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-bottom: 22px;
        }

        .hero-summary {
          font-size: 1.08rem;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 820px;
          margin-bottom: 30px;
        }

        .tech-tags-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px;
          margin-bottom: 34px;
        }

        .tech-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 26px;
        }

        .resume-hero-btn {
          cursor: pointer;
          border-color: rgba(14, 165, 233, 0.4);
        }

        .resume-hero-btn:hover {
          border-color: var(--accent-cyan);
          background: rgba(14, 165, 233, 0.1);
        }

        /* Quick Contact Strip */
        .quick-contact-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .quick-contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quick-contact-pill:hover {
          color: var(--accent-cyan);
          border-color: var(--border-focus);
          transform: translateY(-1px);
        }

        .core-vitals-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: var(--accent-emerald);
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
        }

        .stat-card {
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          background: var(--bg-card);
        }

        .stat-val {
          font-family: var(--font-heading);
          font-size: 1.12rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .stat-lbl {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.6rem;
          }
          .hero-title {
            font-size: 1.25rem;
          }
          .hero-summary {
            font-size: 0.98rem;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})}function G1({onOpenCv:x}){return u.jsxs("section",{id:"about",className:"about-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-tag",children:"Background & Identity"}),u.jsxs("h2",{className:"section-title",children:["About ",u.jsx("span",{className:"text-gradient",children:"Dang Anh Tuong"})]}),u.jsx("p",{className:"section-desc",children:"Final-year Information Technology student at Thuyloi University passionate about building robust web applications and applying cutting-edge engineering tools."})]}),u.jsxs("div",{className:"about-grid",children:[u.jsxs("div",{className:"about-card glass-panel",children:[u.jsxs("div",{className:"about-card-header",children:[u.jsx("div",{className:"card-icon-wrap",children:u.jsx(o1,{size:22,color:"var(--accent-cyan)"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"card-title",children:"Academic Background"}),u.jsx("p",{className:"card-subtitle",children:$.education.university})]})]}),u.jsxs("div",{className:"education-timeline",children:[u.jsxs("div",{className:"edu-item",children:[u.jsx("div",{className:"edu-dot"}),u.jsxs("div",{className:"edu-content",children:[u.jsx("span",{className:"edu-degree",children:$.education.degree}),u.jsxs("span",{className:"edu-school",children:[$.education.university," — ",$.education.location]}),u.jsx("span",{className:"edu-time",children:$.education.timeline})]})]}),u.jsxs("div",{className:"edu-item",children:[u.jsx("div",{className:"edu-dot"}),u.jsxs("div",{className:"edu-content",children:[u.jsxs("div",{className:"cert-pill",children:[u.jsx(G0,{size:15,color:"var(--accent-emerald)"}),u.jsx("span",{className:"cert-name",children:$.education.englishCert})]}),u.jsxs("span",{className:"edu-school",children:["Languages: ",$.education.nativeLang,", English (Certified B1)"]})]})]}),u.jsxs("div",{className:"coursework-box",children:[u.jsxs("div",{className:"coursework-title",children:[u.jsx(Q0,{size:14,color:"var(--accent-cyan)"}),u.jsx("span",{children:"Relevant Coursework:"})]}),u.jsxs("div",{className:"coursework-tags",children:[u.jsx("span",{className:"course-tag",children:"Data Structures & Algorithms"}),u.jsx("span",{className:"course-tag",children:"Object-Oriented Programming (OOP)"}),u.jsx("span",{className:"course-tag",children:"Database Systems (DBMS)"}),u.jsx("span",{className:"course-tag",children:"Web Application Development"}),u.jsx("span",{className:"course-tag",children:"Software Engineering"}),u.jsx("span",{className:"course-tag",children:"Computer Networks"})]})]})]}),u.jsxs("div",{className:"contact-pills-row",children:[u.jsxs("span",{className:"badge",children:[u.jsx(wr,{size:12})," ",$.location]}),u.jsxs("span",{className:"badge",children:[u.jsx(lm,{size:12})," ",$.email]}),u.jsxs("span",{className:"badge",children:[u.jsx(im,{size:12})," ",$.phone]})]})]}),u.jsxs("div",{className:"about-card glass-panel",children:[u.jsxs("div",{className:"about-card-header",children:[u.jsx("div",{className:"card-icon-wrap",children:u.jsx(X0,{size:22,color:"var(--accent-indigo)"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"card-title",children:"Engineering Methodology"}),u.jsx("p",{className:"card-subtitle",children:"Modern AI-Assisted Software Delivery"})]})]}),u.jsxs("p",{className:"philosophy-text",children:["I focus on bridging ",u.jsx("strong",{children:"full-stack software fundamentals"})," (clean architecture, decoupled microservices, database normalization) with ",u.jsx("strong",{children:"next-generation AI-assisted workflows"}),":"]}),u.jsxs("div",{className:"workflow-points",children:[u.jsxs("div",{className:"point-item",children:[u.jsx("span",{className:"point-badge",children:"Autonomous Workflows"}),u.jsxs("p",{children:["Proficient in orchestrating multi-agent systems via ",u.jsx("strong",{children:"Google Antigravity"})," and ",u.jsx("strong",{children:"Claude Code"})," to handle test generation, linting, and rapid prototyping."]})]}),u.jsxs("div",{className:"point-item",children:[u.jsx("span",{className:"point-badge",children:"Real-World Execution"}),u.jsxs("p",{children:["Proven track record building microservices with ",u.jsx("strong",{children:"Node.js & Python FastAPI"}),", audio streaming via WebSockets, and 3D WebGL rendering with ",u.jsx("strong",{children:"Three.js"}),"."]})]}),u.jsxs("div",{className:"point-item",children:[u.jsx("span",{className:"point-badge",children:"Coachable & Reliable"}),u.jsx("p",{children:"Eager to learn from senior engineers through rigorous code reviews. Ready to dedicate 100% commitment to write clean, reliable production code."})]})]}),u.jsxs("div",{className:"about-actions",children:[u.jsxs("button",{onClick:x,className:"btn btn-primary btn-sm",title:"Preview Official 1-Page Resume (PDF)",children:[u.jsx(am,{size:15}),u.jsx("span",{children:"Preview Resume Online"})]}),u.jsxs("a",{href:$.cvUrl,download:"Dang_Anh_Tuong_CV.pdf",className:"btn btn-secondary btn-sm",title:"Download official PDF file",children:[u.jsx(Er,{size:15}),u.jsx("span",{children:"Download PDF"})]}),u.jsxs("a",{href:$.linkedin,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:[u.jsx(Yl,{size:15}),u.jsx("span",{children:"LinkedIn"})]})]})]})]})]}),u.jsx("style",{children:`
        .about-section {
          padding: 70px 0;
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 28px;
        }

        .about-card {
          padding: 32px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 16px;
        }

        .card-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-title {
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .card-subtitle {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .edu-item {
          display: flex;
          gap: 14px;
        }

        .edu-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent-cyan);
          margin-top: 6px;
          box-shadow: 0 0 8px var(--accent-cyan);
          flex-shrink: 0;
        }

        .edu-content {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .edu-degree {
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .edu-school {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .edu-time {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .cert-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: var(--accent-emerald);
          width: fit-content;
          margin-bottom: 2px;
        }

        /* Coursework Box */
        .coursework-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 14px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }

        .coursework-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-family: var(--font-mono);
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .coursework-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .course-tag {
          font-size: 0.74rem;
          font-family: var(--font-mono);
          padding: 3px 8px;
          border-radius: 4px;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
        }

        .contact-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        .philosophy-text {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .workflow-points {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .point-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .point-badge {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--accent-indigo);
          text-transform: uppercase;
        }

        .point-item p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .about-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function L1({project:x,onClose:O}){return Ae.useEffect(()=>{const w=d=>{d.key==="Escape"&&O()};return window.addEventListener("keydown",w),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",w),document.body.style.overflow="auto"}},[O]),x?u.jsxs("div",{className:"modal-backdrop",onClick:O,children:[u.jsxs("div",{className:"modal-content glass-panel",onClick:w=>w.stopPropagation(),children:[u.jsxs("div",{className:"modal-header",children:[u.jsxs("div",{children:[u.jsxs("span",{className:"badge",style:{borderColor:x.badgeColor,color:x.badgeColor},children:[x.category.toUpperCase()," · ",x.timeline]}),u.jsx("h2",{className:"modal-title",children:x.title}),u.jsx("p",{className:"modal-role",children:x.role})]}),u.jsx("button",{className:"modal-close-btn",onClick:O,"aria-label":"Close modal",children:u.jsx(Ur,{size:20})})]}),u.jsxs("div",{className:"modal-body",children:[x.image&&u.jsxs("div",{className:"modal-screenshot-section",children:[u.jsxs("div",{className:"modal-browser-bar",children:[u.jsxs("div",{className:"browser-dots",children:[u.jsx("span",{className:"dot dot-red"}),u.jsx("span",{className:"dot dot-yellow"}),u.jsx("span",{className:"dot dot-green"})]}),u.jsx("div",{className:"modal-browser-url",children:u.jsx("span",{children:x.demo||"https://danganhtuong.dev"})}),x.demo&&u.jsxs("a",{href:x.demo,target:"_blank",rel:"noopener noreferrer",className:"modal-open-live-btn",children:[u.jsx(Yl,{size:12})," Visit Live Production"]})]}),u.jsx("div",{className:"modal-screenshot-container",children:u.jsx("img",{src:x.image,alt:x.title,className:"modal-screenshot-img"})})]}),u.jsxs("div",{className:"modal-section",children:[u.jsx("h4",{className:"modal-section-title",children:"Overview & Purpose"}),u.jsx("p",{className:"modal-text",children:x.description})]}),x.architectureFlow&&u.jsxs("div",{className:"modal-section",children:[u.jsxs("h4",{className:"modal-section-title",children:[u.jsx(tm,{size:17,color:"var(--accent-cyan)",style:{display:"inline",marginRight:6}}),"End-to-End System Architecture Pipeline"]}),u.jsx("div",{className:"flowchart-container",children:x.architectureFlow.map((w,d)=>u.jsxs(Fd.Fragment,{children:[u.jsxs("div",{className:"flowchart-node",children:[u.jsx("div",{className:"node-step-tag",children:w.step}),u.jsx("div",{className:"node-title",children:w.name}),u.jsx("div",{className:"node-desc",children:w.desc})]}),d<x.architectureFlow.length-1&&u.jsx("div",{className:"flowchart-connector",children:u.jsx($d,{size:16,className:"connector-arrow"})})]},d))})]}),x.privateNotice&&u.jsxs("div",{className:"private-notice-banner",children:[u.jsx(Cr,{size:20,color:"var(--accent-amber)",className:"private-banner-icon"}),u.jsxs("div",{className:"private-banner-text",children:[u.jsx("span",{className:"banner-title",children:"Mã nguồn & Quyền truy cập:"}),u.jsx("p",{children:x.privateNotice})]})]}),u.jsxs("div",{className:"modal-section",children:[u.jsx("h4",{className:"modal-section-title",children:"Verified Engineering Deliverables"}),u.jsx("div",{className:"highlights-list",children:x.bullets.map((w,d)=>u.jsxs("div",{className:"highlight-item",children:[u.jsx(Id,{size:17,color:"var(--accent-emerald)",className:"highlight-icon"}),u.jsx("span",{children:w})]},d))})]}),u.jsxs("div",{className:"modal-section",children:[u.jsx("h4",{className:"modal-section-title",children:"System Architecture Breakdown"}),u.jsxs("div",{className:"arch-grid",children:[x.architecture.frontend&&u.jsxs("div",{className:"arch-card",children:[u.jsxs("div",{className:"arch-head",children:[u.jsx(nm,{size:15,color:"var(--accent-cyan)"}),u.jsx("span",{children:"Frontend Client"})]}),u.jsx("p",{children:x.architecture.frontend})]}),x.architecture.backend&&u.jsxs("div",{className:"arch-card",children:[u.jsxs("div",{className:"arch-head",children:[u.jsx(cm,{size:15,color:"var(--accent-indigo)"}),u.jsx("span",{children:"Backend Microservices"})]}),u.jsx("p",{children:x.architecture.backend})]}),x.architecture.database&&u.jsxs("div",{className:"arch-card",children:[u.jsxs("div",{className:"arch-head",children:[u.jsx(em,{size:15,color:"var(--accent-emerald)"}),u.jsx("span",{children:"Database & Caching"})]}),u.jsx("p",{children:x.architecture.database})]}),x.architecture.devops&&u.jsxs("div",{className:"arch-card",children:[u.jsxs("div",{className:"arch-head",children:[u.jsx(um,{size:15,color:"var(--accent-amber)"}),u.jsx("span",{children:"DevOps & Infrastructure"})]}),u.jsx("p",{children:x.architecture.devops})]}),x.architecture.core&&u.jsxs("div",{className:"arch-card",children:[u.jsxs("div",{className:"arch-head",children:[u.jsx(Rr,{size:15,color:"var(--accent-cyan)"}),u.jsx("span",{children:"3D Graphics & Engine"})]}),u.jsx("p",{children:x.architecture.core})]})]})]}),u.jsxs("div",{className:"modal-section",children:[u.jsx("h4",{className:"modal-section-title",children:"Technologies Used"}),u.jsx("div",{className:"tags-container",children:x.techStack.map((w,d)=>u.jsx("span",{className:"badge",children:w},d))})]})]}),u.jsxs("div",{className:"modal-footer",children:[u.jsxs("a",{href:x.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",title:x.privateNotice||"View Source Code",children:[u.jsx(Or,{size:17}),u.jsx("span",{children:x.isPrivate?"GitHub (Private Repo)":"View Source Code"}),x.isPrivate&&u.jsx(Cr,{size:14,color:"var(--accent-amber)",style:{marginLeft:4}})]}),u.jsxs("a",{href:x.demo,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:[u.jsx(Yl,{size:17}),u.jsx("span",{children:"Interactive Demo"})]})]})]}),u.jsx("style",{children:`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 7, 13, 0.82);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalFadeIn 0.25s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 24px 28px;
          border-bottom: 1px solid var(--border-subtle);
          gap: 16px;
        }

        .modal-title {
          font-size: 1.45rem;
          font-weight: 800;
          margin: 6px 0 2px;
          line-height: 1.25;
        }

        .modal-role {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--accent-cyan);
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          background: var(--badge-bg);
        }

        .modal-body {
          padding: 28px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        /* Modal Screenshot Section */
        .modal-screenshot-section {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          background: #090e17;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .modal-browser-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 16px;
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          gap: 12px;
        }

        .browser-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .modal-browser-url {
          flex: 1;
          max-width: 480px;
          margin: 0 auto;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 3px 12px;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-muted);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .modal-open-live-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--accent-cyan);
          text-decoration: none;
          padding: 4px 10px;
          border-radius: 4px;
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.25);
          transition: all 0.2s ease;
        }

        .modal-open-live-btn:hover {
          background: var(--accent-cyan);
          color: #ffffff;
        }

        .modal-screenshot-container {
          position: relative;
          width: 100%;
          max-height: 380px;
          overflow: hidden;
          background: #0b1120;
        }

        .modal-screenshot-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .modal-section-title {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
        }

        .modal-text {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Flowchart Styles */
        .flowchart-container {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          padding: 14px 4px 18px;
        }

        .flowchart-node {
          flex: 1;
          min-width: 145px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .flowchart-node:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .node-step-tag {
          font-size: 0.68rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .node-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .node-desc {
          font-size: 0.76rem;
          color: var(--text-secondary);
          line-height: 1.35;
        }

        .flowchart-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          opacity: 0.8;
          flex-shrink: 0;
        }

        .private-notice-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          background: rgba(245, 158, 11, 0.08);
          border: 1px dashed rgba(245, 158, 11, 0.35);
        }

        .private-banner-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .banner-title {
          font-weight: 700;
          color: var(--accent-amber);
          margin-right: 6px;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .highlight-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .arch-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
        }

        .arch-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
        }

        .arch-head {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .arch-card p {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          padding: 18px 28px;
          border-top: 1px solid var(--border-subtle);
          background: var(--bg-secondary);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .modal-content {
            max-height: 95vh;
          }
          .modal-header, .modal-body, .modal-footer {
            padding: 18px;
          }
          .flowchart-container {
            flex-direction: column;
            align-items: stretch;
          }
          .flowchart-connector {
            transform: rotate(90deg);
            padding: 4px 0;
          }
        }
      `})]}):null}function Q1(){const[x,O]=Ae.useState("all"),[w,d]=Ae.useState(null),k=x==="all"?Zd:Zd.filter(M=>M.category===x);return u.jsxs("section",{id:"projects",className:"projects-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-tag",children:"Featured Engineering"}),u.jsxs("h2",{className:"section-title",children:["Production & Personal ",u.jsx("span",{className:"text-gradient",children:"Projects"})]}),u.jsx("p",{className:"section-desc",children:"Decoupled microservices, real-time AI audio streaming, and high-fidelity 3D WebGL interfaces built with verified engineering standards."})]}),u.jsx("div",{className:"category-filters",children:H1.map(M=>u.jsx("button",{className:`filter-btn ${x===M.id?"active":""}`,onClick:()=>O(M.id),children:M.label},M.id))}),u.jsx("div",{className:"projects-grid",children:k.map(M=>u.jsxs("div",{className:"project-card glass-panel",children:[u.jsx("div",{className:"card-glow-bar",style:{background:M.gradient}}),M.image&&u.jsxs("div",{className:"project-mockup-wrapper",onClick:()=>d(M),title:"Click to view full architecture & real UI",children:[u.jsxs("div",{className:"card-browser-bar",children:[u.jsxs("div",{className:"browser-dots",children:[u.jsx("span",{className:"dot dot-red"}),u.jsx("span",{className:"dot dot-yellow"}),u.jsx("span",{className:"dot dot-green"})]}),u.jsx("span",{className:"browser-domain-text",children:M.demo?M.demo.replace("https://",""):"production.app"}),u.jsx("span",{className:"browser-live-badge",children:"REAL UI"})]}),u.jsxs("div",{className:"mockup-img-container",children:[u.jsx("img",{src:M.image,alt:M.title,className:"project-mockup-img",loading:"lazy"}),u.jsx("div",{className:"mockup-hover-overlay",children:u.jsxs("span",{className:"overlay-pill",children:[u.jsx(am,{size:14})," View Live UI & Architecture"]})})]})]}),u.jsxs("div",{className:"card-content",children:[u.jsxs("div",{className:"card-meta",children:[u.jsx("span",{className:"badge category-badge",style:{borderColor:M.badgeColor,color:M.badgeColor},children:M.category.toUpperCase()}),u.jsx("span",{className:"timeline-pill",children:M.timeline})]}),u.jsx("h3",{className:"project-title",children:M.title}),u.jsx("p",{className:"project-role",children:M.role}),u.jsx("p",{className:"project-tagline",children:M.tagline}),M.metrics&&u.jsx("div",{className:"project-metrics-row",children:M.metrics.map((q,ne)=>u.jsxs("span",{className:"metric-pill",children:[u.jsx(rm,{size:11,color:"var(--accent-amber)"}),u.jsx("span",{children:q})]},ne))}),u.jsx("div",{className:"project-bullets",children:M.bullets.slice(0,2).map((q,ne)=>u.jsxs("div",{className:"bullet-row",children:[u.jsx(Id,{size:15,color:"var(--accent-emerald)",className:"bullet-icon"}),u.jsx("span",{children:q})]},ne))}),u.jsxs("div",{className:"project-tags",children:[M.techStack.slice(0,5).map((q,ne)=>u.jsx("span",{className:"badge tag-pill",children:q},ne)),M.techStack.length>5&&u.jsxs("span",{className:"badge tag-pill-more",children:["+",M.techStack.length-5]})]}),M.privateNotice&&u.jsxs("div",{className:"card-private-hint",children:[u.jsx(Cr,{size:13,color:"var(--accent-amber)"}),u.jsx("span",{children:M.privateNotice})]}),u.jsxs("div",{className:"card-actions",children:[u.jsxs("button",{className:"btn btn-secondary card-btn",onClick:()=>d(M),children:[u.jsx(d1,{size:15,color:"var(--accent-cyan)"}),u.jsx("span",{children:"System Architecture"})]}),u.jsxs("div",{className:"action-links",children:[u.jsx("a",{href:M.github,target:"_blank",rel:"noopener noreferrer",className:"icon-action-btn",title:M.privateNotice||"View GitHub Repository",children:u.jsx(Or,{size:17})}),u.jsx("a",{href:M.demo,target:"_blank",rel:"noopener noreferrer",className:"icon-action-btn primary-action",title:"Open Live Preview",children:u.jsx(Yl,{size:17})})]})]})]})]},M.id))})]}),w&&u.jsx(L1,{project:w,onClose:()=>d(null)}),u.jsx("style",{children:`
        .projects-section {
          padding: 80px 0;
          position: relative;
        }

        .category-filters {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 44px;
        }

        .filter-btn {
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
        }

        .filter-btn.active {
          background: var(--accent-cyan);
          border-color: var(--accent-cyan);
          color: #ffffff;
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.35);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
          gap: 28px;
        }

        .project-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          border: 1px solid var(--border-subtle);
          background: var(--bg-card);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 25px rgba(14, 165, 233, 0.12);
          border-color: rgba(14, 165, 233, 0.35);
        }

        .card-glow-bar {
          height: 3px;
          width: 100%;
        }

        /* Real Mockup Frame */
        .project-mockup-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #090e17;
          border-bottom: 1px solid var(--border-subtle);
          cursor: pointer;
        }

        .card-browser-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }

        .browser-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .browser-domain-text {
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .browser-live-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 4px;
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.3);
          letter-spacing: 0.05em;
        }

        .mockup-img-container {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: #0b1120;
        }

        .project-mockup-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-mockup-img {
          transform: scale(1.04);
        }

        .mockup-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(4, 7, 13, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .project-mockup-wrapper:hover .mockup-hover-overlay {
          opacity: 1;
        }

        .overlay-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 700;
          background: rgba(14, 165, 233, 0.9);
          color: #ffffff;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .card-content {
          padding: 26px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 14px;
        }

        .card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .category-badge {
          font-size: 0.72rem;
          font-weight: 700;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          padding: 3px 8px;
          border-radius: 4px;
          border-width: 1px;
          border-style: solid;
          background: transparent;
        }

        .timeline-pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1.3;
          color: var(--text-primary);
        }

        .project-role {
          font-size: 0.84rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          font-weight: 600;
          margin-top: -8px;
        }

        .project-tagline {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Production Metrics Row */
        .project-metrics-row {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin: 2px 0;
        }

        .metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          font-family: var(--font-mono);
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: var(--text-primary);
        }

        .project-bullets {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin: 4px 0;
        }

        .bullet-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .bullet-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
          padding-top: 10px;
        }

        .tag-pill {
          font-size: 0.76rem;
          font-family: var(--font-mono);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 3px 9px;
        }

        .tag-pill-more {
          font-size: 0.74rem;
          font-family: var(--font-mono);
          background: var(--badge-bg);
          color: var(--accent-cyan);
          border: 1px solid rgba(14, 165, 233, 0.3);
          padding: 3px 8px;
        }

        .card-private-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: var(--accent-amber);
          background: rgba(245, 158, 11, 0.08);
          border: 1px dashed rgba(245, 158, 11, 0.3);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
        }

        .card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
          margin-top: 8px;
        }

        .card-btn {
          flex: 1;
          justify-content: center;
          font-size: 0.85rem;
          padding: 8px 14px;
        }

        .action-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .icon-action-btn:hover {
          background: var(--border-subtle);
          color: var(--accent-cyan);
          border-color: var(--border-focus);
          transform: translateY(-2px);
        }

        .icon-action-btn.primary-action {
          background: var(--accent-cyan);
          border-color: var(--accent-cyan);
          color: #ffffff;
        }

        .icon-action-btn.primary-action:hover {
          filter: brightness(1.1);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-mockup-wrapper {
            height: 200px;
          }
          .card-content {
            padding: 20px;
          }
        }
      `})]})}function V1(){const x=O=>{switch(O){case"Layout":return u.jsx(nm,{size:18,color:"var(--accent-cyan)"});case"Server":return u.jsx(cm,{size:18,color:"var(--accent-indigo)"});case"Code":return u.jsx(Xd,{size:18,color:"var(--accent-purple)"});case"Database":return u.jsx(em,{size:18,color:"var(--accent-emerald)"});case"Cpu":return u.jsx(Pd,{size:18,color:"#ec4899"});case"Cloud":return u.jsx(F0,{size:18,color:"var(--accent-amber)"});case"Globe":return u.jsx(r1,{size:18,color:"var(--accent-cyan)"});default:return u.jsx(Xd,{size:18})}};return u.jsxs("section",{id:"skills",className:"skills-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-tag",children:"Technical Competencies"}),u.jsxs("h2",{className:"section-title",children:["Skills & ",u.jsx("span",{className:"text-gradient",children:"Core Capabilities"})]}),u.jsx("p",{className:"section-desc",children:"Verified technologies, frameworks, and modern agentic engineering tools actively used in production and personal projects."})]}),u.jsx("div",{className:"skills-grid",children:B1.map((O,w)=>u.jsxs("div",{className:"skill-cat-card glass-panel",children:[u.jsxs("div",{className:"cat-header",children:[u.jsx("div",{className:"cat-icon-wrap",children:x(O.icon)}),u.jsx("h3",{className:"cat-title",children:O.category})]}),u.jsx("div",{className:"skills-pills-wrap",children:O.skills.map((d,k)=>u.jsx("span",{className:"skill-pill",children:d},k))})]},w))})]}),u.jsx("style",{children:`
        .skills-section {
          padding: 80px 0;
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .skill-cat-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 12px;
        }

        .cat-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cat-title {
          font-size: 1.05rem;
          color: var(--text-primary);
          font-weight: 700;
        }

        .skills-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          padding: 5px 12px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 500;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .skill-pill:hover {
          border-color: var(--border-focus);
          color: var(--accent-cyan);
          transform: translateY(-1px);
        }

        @media (max-width: 980px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}var kr={};(function x(O,w,d,k){var M=!!(O.Worker&&O.Blob&&O.Promise&&O.OffscreenCanvas&&O.OffscreenCanvasRenderingContext2D&&O.HTMLCanvasElement&&O.HTMLCanvasElement.prototype.transferControlToOffscreen&&O.URL&&O.URL.createObjectURL),q=typeof Path2D=="function"&&typeof DOMMatrix=="function",ne=(function(){if(!O.OffscreenCanvas)return!1;try{var h=new OffscreenCanvas(1,1),r=h.getContext("2d");r.fillRect(0,0,1,1);var g=h.transferToImageBitmap();r.createPattern(g,"no-repeat")}catch{return!1}return!0})();function H(){}function T(h){var r=w.exports.Promise,g=r!==void 0?r:O.Promise;return typeof g=="function"?new g(h):(h(H,H),null)}var J=(function(h,r){return{transform:function(g){if(h)return g;if(r.has(g))return r.get(g);var z=new OffscreenCanvas(g.width,g.height),E=z.getContext("2d");return E.drawImage(g,0,0),r.set(g,z),z},clear:function(){r.clear()}}})(ne,new Map),G=(function(){var h=Math.floor(16.666666666666668),r,g,z={},E=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(r=function(C){var R=Math.random();return z[R]=requestAnimationFrame(function _(L){E===L||E+h-1<L?(E=L,delete z[R],C()):z[R]=requestAnimationFrame(_)}),R},g=function(C){z[C]&&cancelAnimationFrame(z[C])}):(r=function(C){return setTimeout(C,h)},g=function(C){return clearTimeout(C)}),{frame:r,cancel:g}})(),he=(function(){var h,r,g={};function z(E){function C(R,_){E.postMessage({options:R||{},callback:_})}E.init=function(_){var L=_.transferControlToOffscreen();E.postMessage({canvas:L},[L])},E.fire=function(_,L,X){if(r)return C(_,null),r;var ge=Math.random().toString(36).slice(2);return r=T(function(fe){function xe(Oe){Oe.data.callback===ge&&(delete g[ge],E.removeEventListener("message",xe),r=null,J.clear(),X(),fe())}E.addEventListener("message",xe),C(_,ge),g[ge]=xe.bind(null,{data:{callback:ge}})}),r},E.reset=function(){E.postMessage({reset:!0});for(var _ in g)g[_](),delete g[_]}}return function(){if(h)return h;if(!d&&M){var E=["var CONFETTI, SIZE = {}, module = {};","("+x.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{h=new Worker(URL.createObjectURL(new Blob([E])))}catch(C){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",C),null}z(h)}return h}})(),Ge={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function ze(h,r){return r?r(h):h}function Te(h){return h!=null}function ie(h,r,g){return ze(h&&Te(h[r])?h[r]:Ge[r],g)}function Ie(h){return h<0?0:Math.floor(h)}function Ya(h,r){return Math.floor(Math.random()*(r-h))+h}function De(h){return parseInt(h,16)}function ta(h){return h.map(Sa)}function Sa(h){var r=String(h).replace(/[^0-9a-f]/gi,"");return r.length<6&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),{r:De(r.substring(0,2)),g:De(r.substring(2,4)),b:De(r.substring(4,6))}}function Ke(h){var r=ie(h,"origin",Object);return r.x=ie(r,"x",Number),r.y=ie(r,"y",Number),r}function P(h){h.width=document.documentElement.clientWidth,h.height=document.documentElement.clientHeight}function Je(h){var r=h.getBoundingClientRect();h.width=r.width,h.height=r.height}function ja(h){var r=document.createElement("canvas");return r.style.position="fixed",r.style.top="0px",r.style.left="0px",r.style.pointerEvents="none",r.style.zIndex=h,r}function ot(h,r,g,z,E,C,R,_,L){h.save(),h.translate(r,g),h.rotate(C),h.scale(z,E),h.arc(0,0,1,R,_,L),h.restore()}function za(h){var r=h.angle*(Math.PI/180),g=h.spread*(Math.PI/180);return{x:h.x,y:h.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:h.startVelocity*.5+Math.random()*h.startVelocity,angle2D:-r+(.5*g-Math.random()*g),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:h.color,shape:h.shape,tick:0,totalTicks:h.ticks,decay:h.decay,drift:h.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:h.gravity*3,ovalScalar:.6,scalar:h.scalar,flat:h.flat}}function Fe(h,r){r.x+=Math.cos(r.angle2D)*r.velocity+r.drift,r.y+=Math.sin(r.angle2D)*r.velocity+r.gravity,r.velocity*=r.decay,r.flat?(r.wobble=0,r.wobbleX=r.x+10*r.scalar,r.wobbleY=r.y+10*r.scalar,r.tiltSin=0,r.tiltCos=0,r.random=1):(r.wobble+=r.wobbleSpeed,r.wobbleX=r.x+10*r.scalar*Math.cos(r.wobble),r.wobbleY=r.y+10*r.scalar*Math.sin(r.wobble),r.tiltAngle+=.1,r.tiltSin=Math.sin(r.tiltAngle),r.tiltCos=Math.cos(r.tiltAngle),r.random=Math.random()+2);var g=r.tick++/r.totalTicks,z=r.x+r.random*r.tiltCos,E=r.y+r.random*r.tiltSin,C=r.wobbleX+r.random*r.tiltCos,R=r.wobbleY+r.random*r.tiltSin;if(h.fillStyle="rgba("+r.color.r+", "+r.color.g+", "+r.color.b+", "+(1-g)+")",h.beginPath(),q&&r.shape.type==="path"&&typeof r.shape.path=="string"&&Array.isArray(r.shape.matrix))h.fill(D(r.shape.path,r.shape.matrix,r.x,r.y,Math.abs(C-z)*.1,Math.abs(R-E)*.1,Math.PI/10*r.wobble));else if(r.shape.type==="bitmap"){var _=Math.PI/10*r.wobble,L=Math.abs(C-z)*.1,X=Math.abs(R-E)*.1,ge=r.shape.bitmap.width*r.scalar,fe=r.shape.bitmap.height*r.scalar,xe=new DOMMatrix([Math.cos(_)*L,Math.sin(_)*L,-Math.sin(_)*X,Math.cos(_)*X,r.x,r.y]);xe.multiplySelf(new DOMMatrix(r.shape.matrix));var Oe=h.createPattern(J.transform(r.shape.bitmap),"no-repeat");Oe.setTransform(xe),h.globalAlpha=1-g,h.fillStyle=Oe,h.fillRect(r.x-ge/2,r.y-fe/2,ge,fe),h.globalAlpha=1}else if(r.shape==="circle")h.ellipse?h.ellipse(r.x,r.y,Math.abs(C-z)*r.ovalScalar,Math.abs(R-E)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI):ot(h,r.x,r.y,Math.abs(C-z)*r.ovalScalar,Math.abs(R-E)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI);else if(r.shape==="star")for(var F=Math.PI/2*3,Be=4*r.scalar,ea=8*r.scalar,fa=r.x,Aa=r.y,ka=5,la=Math.PI/ka;ka--;)fa=r.x+Math.cos(F)*ea,Aa=r.y+Math.sin(F)*ea,h.lineTo(fa,Aa),F+=la,fa=r.x+Math.cos(F)*Be,Aa=r.y+Math.sin(F)*Be,h.lineTo(fa,Aa),F+=la;else h.moveTo(Math.floor(r.x),Math.floor(r.y)),h.lineTo(Math.floor(r.wobbleX),Math.floor(E)),h.lineTo(Math.floor(C),Math.floor(R)),h.lineTo(Math.floor(z),Math.floor(r.wobbleY));return h.closePath(),h.fill(),r.tick<r.totalTicks}function Xa(h,r,g,z,E){var C=r.slice(),R=h.getContext("2d"),_,L,X=T(function(ge){function fe(){_=L=null,R.clearRect(0,0,z.width,z.height),J.clear(),E(),ge()}function xe(){d&&!(z.width===k.width&&z.height===k.height)&&(z.width=h.width=k.width,z.height=h.height=k.height),!z.width&&!z.height&&(g(h),z.width=h.width,z.height=h.height),R.clearRect(0,0,z.width,z.height),C=C.filter(function(Oe){return Fe(R,Oe)}),C.length?_=G.frame(xe):fe()}_=G.frame(xe),L=fe});return{addFettis:function(ge){return C=C.concat(ge),X},canvas:h,promise:X,reset:function(){_&&G.cancel(_),L&&L()}}}function Na(h,r){var g=!h,z=!!ie(r||{},"resize"),E=!1,C=ie(r,"disableForReducedMotion",Boolean),R=M&&!!ie(r||{},"useWorker"),_=R?he():null,L=g?P:Je,X=h&&_?!!h.__confetti_initialized:!1,ge=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,fe;function xe(F,Be,ea){for(var fa=ie(F,"particleCount",Ie),Aa=ie(F,"angle",Number),ka=ie(F,"spread",Number),la=ie(F,"startVelocity",Number),Gl=ie(F,"decay",Number),ic=ie(F,"gravity",Number),cc=ie(F,"drift",Number),We=ie(F,"colors",ta),uc=ie(F,"ticks",Number),Ll=ie(F,"shapes"),Gn=ie(F,"scalar"),al=!!ie(F,"flat"),Ln=Ke(F),Ql=fa,Vl=[],rc=h.width*Ln.x,kt=h.height*Ln.y;Ql--;)Vl.push(za({x:rc,y:kt,angle:Aa,spread:ka,startVelocity:la,color:We[Ql%We.length],shape:Ll[Ya(0,Ll.length)],ticks:uc,decay:Gl,gravity:ic,drift:cc,scalar:Gn,flat:al}));return fe?fe.addFettis(Vl):(fe=Xa(h,Vl,L,Be,ea),fe.promise)}function Oe(F){var Be=C||ie(F,"disableForReducedMotion",Boolean),ea=ie(F,"zIndex",Number);if(Be&&ge)return T(function(la){la()});g&&fe?h=fe.canvas:g&&!h&&(h=ja(ea),document.body.appendChild(h)),z&&!X&&L(h);var fa={width:h.width,height:h.height};_&&!X&&_.init(h),X=!0,_&&(h.__confetti_initialized=!0);function Aa(){if(_){var la={getBoundingClientRect:function(){if(!g)return h.getBoundingClientRect()}};L(la),_.postMessage({resize:{width:la.width,height:la.height}});return}fa.width=fa.height=null}function ka(){fe=null,z&&(E=!1,O.removeEventListener("resize",Aa)),g&&h&&(document.body.contains(h)&&document.body.removeChild(h),h=null,X=!1)}return z&&!E&&(E=!0,O.addEventListener("resize",Aa,!1)),_?_.fire(F,fa,ka):xe(F,fa,ka)}return Oe.reset=function(){_&&_.reset(),fe&&fe.reset()},Oe}var Pe;function j(){return Pe||(Pe=Na(null,{useWorker:!0,resize:!0})),Pe}function D(h,r,g,z,E,C,R){var _=new Path2D(h),L=new Path2D;L.addPath(_,new DOMMatrix(r));var X=new Path2D;return X.addPath(L,new DOMMatrix([Math.cos(R)*E,Math.sin(R)*E,-Math.sin(R)*C,Math.cos(R)*C,g,z])),X}function V(h){if(!q)throw new Error("path confetti are not supported in this browser");var r,g;typeof h=="string"?r=h:(r=h.path,g=h.matrix);var z=new Path2D(r),E=document.createElement("canvas"),C=E.getContext("2d");if(!g){for(var R=1e3,_=R,L=R,X=0,ge=0,fe,xe,Oe=0;Oe<R;Oe+=2)for(var F=0;F<R;F+=2)C.isPointInPath(z,Oe,F,"nonzero")&&(_=Math.min(_,Oe),L=Math.min(L,F),X=Math.max(X,Oe),ge=Math.max(ge,F));fe=X-_,xe=ge-L;var Be=10,ea=Math.min(Be/fe,Be/xe);g=[ea,0,0,ea,-Math.round(fe/2+_)*ea,-Math.round(xe/2+L)*ea]}return{type:"path",path:r,matrix:g}}function oe(h){var r,g=1,z="#000000",E='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof h=="string"?r=h:(r=h.text,g="scalar"in h?h.scalar:g,E="fontFamily"in h?h.fontFamily:E,z="color"in h?h.color:z);var C=10*g,R=""+C+"px "+E,_=new OffscreenCanvas(C,C),L=_.getContext("2d");L.font=R;var X=L.measureText(r),ge=Math.ceil(X.actualBoundingBoxRight+X.actualBoundingBoxLeft),fe=Math.ceil(X.actualBoundingBoxAscent+X.actualBoundingBoxDescent),xe=2,Oe=X.actualBoundingBoxLeft+xe,F=X.actualBoundingBoxAscent+xe;ge+=xe+xe,fe+=xe+xe,_=new OffscreenCanvas(ge,fe),L=_.getContext("2d"),L.font=R,L.fillStyle=z,L.fillText(r,Oe,F);var Be=1/g;return{type:"bitmap",bitmap:_.transferToImageBitmap(),matrix:[Be,0,0,Be,-ge*Be/2,-fe*Be/2]}}w.exports=function(){return j().apply(this,arguments)},w.exports.reset=function(){j().reset()},w.exports.create=Na,w.exports.shapeFromPath=V,w.exports.shapeFromText=oe})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),kr,!1);const Kd=kr.exports;kr.exports.create;function X1({onOpenCv:x}){const[O,w]=Ae.useState(!1),[d,k]=Ae.useState(!1),[M,q]=Ae.useState({name:"",email:"",message:""}),[ne,H]=Ae.useState(!1),[T,J]=Ae.useState(null),G=()=>{navigator.clipboard.writeText($.email),w(!0),Kd({particleCount:50,spread:60,origin:{y:.85},colors:["#0ea5e9","#6366f1","#10b981","#ffffff"]}),setTimeout(()=>w(!1),3e3)},he=()=>{navigator.clipboard.writeText($.phone),k(!0),setTimeout(()=>k(!1),2500)},Ge=async ze=>{ze.preventDefault(),H(!0),J(null);try{const Te=await fetch(`https://formsubmit.co/ajax/${$.email}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:M.name,email:M.email,message:M.message,_subject:`New Portfolio Message from ${M.name} (${M.email})`,_template:"table"})}),ie=await Te.json();if(Te.ok||ie.success==="true")J({success:!0,message:"Message dispatched successfully! I will reply to your email shortly."}),q({name:"",email:"",message:""}),Kd({particleCount:60,spread:70,origin:{y:.8},colors:["#0ea5e9","#6366f1","#10b981","#ffffff"]});else throw new Error(ie.message||"Failed to submit")}catch(Te){console.error("Contact form error:",Te);const ie=`mailto:${$.email}?subject=Inquiry from ${encodeURIComponent(M.name)}&body=${encodeURIComponent(M.message+`

Sender Contact: `+M.email)}`;window.location.href=ie,J({success:!0,message:"Opening your default mail client..."})}finally{H(!1),setTimeout(()=>J(null),8e3)}};return u.jsxs("footer",{id:"contact",className:"contact-footer",children:[u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"contact-card glass-panel",children:u.jsxs("div",{className:"contact-grid",children:[u.jsxs("div",{className:"contact-info",children:[u.jsx("span",{className:"section-tag",children:"Direct Communication"}),u.jsxs("h2",{className:"contact-title",children:["Let's Discuss Next ",u.jsx("br",{}),u.jsx("span",{className:"text-gradient",children:"Opportunities"})]}),u.jsxs("p",{className:"contact-desc",children:["I am actively seeking a ",u.jsx("strong",{children:"Full-Stack Software Engineer Internship"}),". Feel free to reach out via email, phone, or LinkedIn to discuss how I can contribute to your engineering team."]}),u.jsxs("div",{className:"info-pills-list",children:[u.jsxs("div",{className:"email-copy-box",children:[u.jsxs("div",{className:"email-text-wrap",children:[u.jsx(lm,{size:16,color:"var(--accent-cyan)"}),u.jsx("span",{className:"email-text",children:$.email})]}),u.jsx("button",{className:`copy-btn ${O?"copied":""}`,onClick:G,title:"Copy email to clipboard",children:O?u.jsxs(u.Fragment,{children:[u.jsx(qn,{size:15,color:"var(--accent-emerald)"}),u.jsx("span",{children:"Copied!"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Mr,{size:15}),u.jsx("span",{children:"Copy Email"})]})})]}),u.jsxs("div",{className:"contact-meta-row",children:[u.jsxs("button",{onClick:he,className:"meta-item-btn",title:"Click to copy Phone / Zalo",children:[d?u.jsx(qn,{size:15,color:"var(--accent-emerald)"}):u.jsx(im,{size:15,color:"var(--accent-emerald)"}),u.jsx("span",{children:d?"✓ Copied Phone!":`${$.phone} (Call / Zalo)`})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx(wr,{size:15,color:"var(--accent-indigo)"}),u.jsx("span",{children:$.location})]})]})]}),u.jsxs("div",{className:"social-links-row",children:[u.jsxs("a",{href:$.github,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"GitHub Profile",children:[u.jsx(Or,{size:17}),u.jsx("span",{children:"GitHub"})]}),u.jsxs("a",{href:$.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"LinkedIn Profile",children:[u.jsx(g1,{size:17}),u.jsx("span",{children:"LinkedIn"})]}),u.jsxs("button",{onClick:x,className:"social-btn",title:"Preview Official 1-Page Resume (PDF)",children:[u.jsx(Yn,{size:17}),u.jsx("span",{children:"Resume (PDF)"})]})]}),u.jsxs("div",{className:"standards-badge",children:[u.jsx(Rr,{size:16,color:"var(--accent-emerald)"}),u.jsx("span",{children:"Clean Architecture · High Performance · 100% Verified Work"})]})]}),u.jsx("div",{className:"contact-form-wrap",children:u.jsxs("form",{onSubmit:Ge,className:"quick-form",children:[u.jsx("h3",{className:"form-title",children:"Send a Quick Message"}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"form-name",children:"Your Full Name"}),u.jsx("input",{id:"form-name",type:"text",required:!0,placeholder:"e.g. Hiring Manager / Tech Recruiter",value:M.name,onChange:ze=>q({...M,name:ze.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"form-email",children:"Your Work Email"}),u.jsx("input",{id:"form-email",type:"email",required:!0,placeholder:"hr@company.com",value:M.email,onChange:ze=>q({...M,email:ze.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"form-msg",children:"Message / Internship Inquiry"}),u.jsx("textarea",{id:"form-msg",required:!0,rows:4,placeholder:"Let us know about your team, tech stack, or open positions...",value:M.message,onChange:ze=>q({...M,message:ze.target.value})})]}),T&&u.jsx("div",{className:`form-alert ${T.success?"success":"error"}`,children:T.message}),u.jsxs("button",{type:"submit",disabled:ne,className:"btn btn-primary form-submit-btn",children:[u.jsx("span",{children:ne?"Sending...":"Send Message"}),u.jsx(E1,{size:16})]})]})})]})}),u.jsxs("div",{className:"footer-bottom",children:[u.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," ",$.name,". All rights reserved. Built with React 19, Three.js & deployed on Vercel Edge."]}),u.jsxs("div",{className:"bottom-badges",children:[u.jsx("span",{className:"footer-badge",children:"Vite 6 SPA"}),u.jsx("span",{className:"footer-badge",children:"Zero Cache Stale"}),u.jsx("span",{className:"footer-badge",children:"CEFR B1 English"})]})]})]}),u.jsx("style",{children:`
        .contact-footer {
          padding: 80px 0 35px;
          position: relative;
        }

        .contact-card {
          padding: 44px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          background: var(--bg-card);
          box-shadow: var(--shadow-card);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 48px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-title {
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .contact-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .info-pills-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 4px;
        }

        .email-copy-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 8px 14px;
          gap: 12px;
        }

        .email-text-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .email-text {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-focus);
        }

        .copy-btn.copied {
          background: rgba(16, 185, 129, 0.12);
          border-color: rgba(16, 185, 129, 0.35);
          color: var(--accent-emerald);
        }

        .contact-meta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .meta-item-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .meta-item-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-focus);
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .social-links-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.84rem;
          font-weight: 600;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          background: var(--border-subtle);
          color: var(--accent-cyan);
          border-color: var(--border-focus);
          transform: translateY(-2px);
        }

        .standards-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          width: fit-content;
        }

        /* Form Column */
        .quick-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.82rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.92rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
        }

        .form-alert {
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .form-alert.success {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: var(--accent-emerald);
        }

        .form-alert.error {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #ef4444;
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 12px;
          font-size: 0.95rem;
          margin-top: 6px;
        }

        /* Footer Bottom */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 30px;
          margin-top: 30px;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright-text {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .bottom-badges {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 3px 8px;
          border-radius: 4px;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .contact-card {
            padding: 28px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}function Z1({isOpen:x,onClose:O}){const[w,d]=Ae.useState(!1);if(Ae.useEffect(()=>{const q=ne=>{ne.key==="Escape"&&O()};return x&&(window.addEventListener("keydown",q),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",q),document.body.style.overflow="auto"}},[x,O]),!x)return null;const k=()=>{navigator.clipboard.writeText($.email),d(!0),setTimeout(()=>d(!1),2500)},M=()=>{const q=document.getElementById("cv-frame-viewer");q&&q.contentWindow?(q.contentWindow.focus(),q.contentWindow.print()):window.open($.cvUrl,"_blank")};return u.jsxs("div",{className:"cv-modal-backdrop",onClick:O,children:[u.jsxs("div",{className:"cv-modal-container glass-panel",onClick:q=>q.stopPropagation(),children:[u.jsxs("div",{className:"cv-modal-header",children:[u.jsxs("div",{className:"cv-header-left",children:[u.jsxs("div",{className:"cv-file-badge",children:[u.jsx(Yn,{size:18,color:"var(--accent-cyan)"}),u.jsx("span",{className:"cv-file-title",children:"Dang_Anh_Tuong_CV.pdf"})]}),u.jsxs("div",{className:"cv-status-pill",children:[u.jsx("span",{className:"pulse-dot"}),u.jsx("span",{children:"1-Page Official ATS Resume · 2026"})]})]}),u.jsxs("div",{className:"cv-header-actions",children:[u.jsxs("button",{className:"cv-tool-btn copy-btn",onClick:k,title:"Copy Email Contact",children:[w?u.jsx(qn,{size:15,color:"var(--accent-emerald)"}):u.jsx(_r,{size:15}),u.jsx("span",{children:w?"Copied Email!":"Quick Email"})]}),u.jsxs("button",{className:"cv-tool-btn",onClick:M,title:"Print Resume",children:[u.jsx(T1,{size:15}),u.jsx("span",{children:"Print"})]}),u.jsxs("a",{href:$.cvUrl,target:"_blank",rel:"noopener noreferrer",className:"cv-tool-btn",title:"Open PDF in new browser tab",children:[u.jsx(Yl,{size:15}),u.jsx("span",{children:"New Tab"})]}),u.jsxs("a",{href:$.cvUrl,download:"Dang_Anh_Tuong_CV.pdf",className:"cv-tool-btn primary",title:"Download official PDF file",children:[u.jsx(Er,{size:15}),u.jsx("span",{children:"Download PDF"})]}),u.jsx("button",{className:"cv-close-btn",onClick:O,"aria-label":"Close modal",children:u.jsx(Ur,{size:20})})]})]}),u.jsxs("div",{className:"cv-modal-body",children:[u.jsx("iframe",{id:"cv-frame-viewer",src:`${$.cvUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`,title:"Dang Anh Tuong - Software Engineer Resume",className:"cv-pdf-frame"}),u.jsx("div",{className:"cv-mobile-fallback",children:u.jsxs("div",{className:"fallback-card",children:[u.jsx(Rr,{size:28,color:"var(--accent-emerald)"}),u.jsx("h4",{children:"Bản CV 1 trang chuẩn quốc tế ATS"}),u.jsx("p",{children:"Phù hợp tối ưu cho các hệ thống lọc tự động và nhà tuyển dụng."}),u.jsxs("div",{className:"fallback-actions",children:[u.jsxs("a",{href:$.cvUrl,download:!0,className:"btn btn-primary btn-sm",children:[u.jsx(Er,{size:16})," Tải PDF Về Máy"]}),u.jsxs("a",{href:$.cvUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:[u.jsx(Yl,{size:16})," Mở Toàn Màn Hình"]})]})]})})]})]}),u.jsx("style",{children:`
        .cv-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 7, 13, 0.82);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: cvModalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cv-modal-container {
          width: 100%;
          max-width: 1020px;
          height: 92vh;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(14, 165, 233, 0.15);
        }

        .cv-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-bottom: 1px solid var(--border-subtle);
          background: var(--bg-secondary);
          flex-wrap: wrap;
          gap: 12px;
        }

        .cv-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cv-file-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-family: var(--font-mono);
          font-size: 0.92rem;
          color: var(--text-primary);
        }

        .cv-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: var(--accent-emerald);
          font-weight: 600;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald);
          animation: pulseAnim 1.6s infinite;
        }

        .cv-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cv-tool-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cv-tool-btn:hover {
          background: var(--border-subtle);
          color: var(--accent-cyan);
          border-color: var(--border-focus);
        }

        .cv-tool-btn.primary {
          background: var(--accent-cyan);
          border-color: var(--accent-cyan);
          color: #ffffff;
        }

        .cv-tool-btn.primary:hover {
          filter: brightness(1.1);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
        }

        .cv-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cv-close-btn:hover {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.3);
        }

        .cv-modal-body {
          flex: 1;
          position: relative;
          background: #1e293b;
          overflow: hidden;
        }

        .cv-pdf-frame {
          width: 100%;
          height: 100%;
          border: none;
          background: #ffffff;
        }

        .cv-mobile-fallback {
          display: none;
          position: absolute;
          inset: 0;
          background: var(--bg-card);
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
        }

        .fallback-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          max-width: 360px;
        }

        .fallback-actions {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }

        @keyframes cvModalFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes pulseAnim {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        @media (max-width: 768px) {
          .cv-modal-container {
            height: 96vh;
            padding: 0;
          }
          .cv-header-actions span {
            display: none;
          }
          .cv-header-actions .cv-tool-btn {
            padding: 8px;
          }
          .cv-status-pill {
            display: none;
          }
          @supports (-webkit-touch-callout: none) {
            .cv-mobile-fallback {
              display: flex;
            }
            .cv-pdf-frame {
              display: none;
            }
          }
        }
      `})]})}function K1(){const[x,O]=Ae.useState(()=>localStorage.getItem("theme")||"dark"),[w,d]=Ae.useState(!1);Ae.useEffect(()=>{document.documentElement.setAttribute("data-theme",x),localStorage.setItem("theme",x)},[x]);const k=()=>{O(ne=>ne==="light"?"dark":"light")},M=()=>d(!0),q=()=>d(!1);return u.jsxs("div",{className:"portfolio-app",children:[u.jsx(q1,{theme:x,toggleTheme:k,onOpenCv:M}),u.jsxs("main",{children:[u.jsx(Y1,{onOpenCv:M}),u.jsx(G1,{onOpenCv:M}),u.jsx(Q1,{}),u.jsx(V1,{})]}),u.jsx(X1,{onOpenCv:M}),u.jsx(Z1,{isOpen:w,onClose:q})]})}U0.createRoot(document.getElementById("root")).render(u.jsx(Fd.StrictMode,{children:u.jsx(K1,{})}));
