(function(){const O=document.createElement("link").relList;if(O&&O.supports&&O.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))d(H);new MutationObserver(H=>{for(const M of H)if(M.type==="childList")for(const q of M.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&d(q)}).observe(document,{childList:!0,subtree:!0});function R(H){const M={};return H.integrity&&(M.integrity=H.integrity),H.referrerPolicy&&(M.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?M.credentials="include":H.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function d(H){if(H.ep)return;H.ep=!0;const M=R(H);fetch(H.href,M)}})();function Jd(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var Sr={exports:{}},Hn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function A0(){if(Ud)return Hn;Ud=1;var x=Symbol.for("react.transitional.element"),O=Symbol.for("react.fragment");function R(d,H,M){var q=null;if(M!==void 0&&(q=""+M),H.key!==void 0&&(q=""+H.key),"key"in H){M={};for(var ne in H)ne!=="key"&&(M[ne]=H[ne])}else M=H;return H=M.ref,{$$typeof:x,type:d,key:q,ref:H!==void 0?H:null,props:M}}return Hn.Fragment=O,Hn.jsx=R,Hn.jsxs=R,Hn}var Hd;function T0(){return Hd||(Hd=1,Sr.exports=A0()),Sr.exports}var c=T0(),zr={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function M0(){if(Bd)return Z;Bd=1;var x=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),q=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),he=Symbol.iterator;function Ge(r){return r===null||typeof r!="object"?null:(r=he&&r[he]||r["@@iterator"],typeof r=="function"?r:null)}var je={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Te=Object.assign,ie={};function Ie(r,g,j){this.props=r,this.context=g,this.refs=ie,this.updater=j||je}Ie.prototype.isReactComponent={},Ie.prototype.setState=function(r,g){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,g,"setState")},Ie.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ya(){}Ya.prototype=Ie.prototype;function De(r,g,j){this.props=r,this.context=g,this.refs=ie,this.updater=j||je}var ta=De.prototype=new Ya;ta.constructor=De,Te(ta,Ie.prototype),ta.isPureReactComponent=!0;var Sa=Array.isArray;function Ke(){}var P={H:null,A:null,T:null,S:null},Je=Object.prototype.hasOwnProperty;function za(r,g,j){var E=j.ref;return{$$typeof:x,type:r,key:g,ref:E!==void 0?E:null,props:j}}function ot(r,g){return za(r.type,g,r.props)}function ja(r){return typeof r=="object"&&r!==null&&r.$$typeof===x}function Fe(r){var g={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(j){return g[j]})}var Xa=/\/+/g;function Na(r,g){return typeof r=="object"&&r!==null&&r.key!=null?Fe(""+r.key):g.toString(36)}function Pe(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Ke,Ke):(r.status="pending",r.then(function(g){r.status==="pending"&&(r.status="fulfilled",r.value=g)},function(g){r.status==="pending"&&(r.status="rejected",r.reason=g)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function z(r,g,j,E,C){var w=typeof r;(w==="undefined"||w==="boolean")&&(r=null);var _=!1;if(r===null)_=!0;else switch(w){case"bigint":case"string":case"number":_=!0;break;case"object":switch(r.$$typeof){case x:case O:_=!0;break;case J:return _=r._init,z(_(r._payload),g,j,E,C)}}if(_)return C=C(r),_=E===""?"."+Na(r,0):E,Sa(C)?(j="",_!=null&&(j=_.replace(Xa,"$&/")+"/"),z(C,g,j,"",function(ge){return ge})):C!=null&&(ja(C)&&(C=ot(C,j+(C.key==null||r&&r.key===C.key?"":(""+C.key).replace(Xa,"$&/")+"/")+_)),g.push(C)),1;_=0;var L=E===""?".":E+":";if(Sa(r))for(var X=0;X<r.length;X++)E=r[X],w=L+Na(E,X),_+=z(E,g,j,w,C);else if(X=Ge(r),typeof X=="function")for(r=X.call(r),X=0;!(E=r.next()).done;)E=E.value,w=L+Na(E,X++),_+=z(E,g,j,w,C);else if(w==="object"){if(typeof r.then=="function")return z(Pe(r),g,j,E,C);throw g=String(r),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.")}return _}function D(r,g,j){if(r==null)return r;var E=[],C=0;return z(r,E,"","",function(w){return g.call(j,w,C++)}),E}function V(r){if(r._status===-1){var g=r._result;g=g(),g.then(function(j){(r._status===0||r._status===-1)&&(r._status=1,r._result=j)},function(j){(r._status===0||r._status===-1)&&(r._status=2,r._result=j)}),r._status===-1&&(r._status=0,r._result=g)}if(r._status===1)return r._result.default;throw r._result}var oe=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},h={map:D,forEach:function(r,g,j){D(r,function(){g.apply(this,arguments)},j)},count:function(r){var g=0;return D(r,function(){g++}),g},toArray:function(r){return D(r,function(g){return g})||[]},only:function(r){if(!ja(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return Z.Activity=G,Z.Children=h,Z.Component=Ie,Z.Fragment=R,Z.Profiler=H,Z.PureComponent=De,Z.StrictMode=d,Z.Suspense=B,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,Z.__COMPILER_RUNTIME={__proto__:null,c:function(r){return P.H.useMemoCache(r)}},Z.cache=function(r){return function(){return r.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(r,g,j){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var E=Te({},r.props),C=r.key;if(g!=null)for(w in g.key!==void 0&&(C=""+g.key),g)!Je.call(g,w)||w==="key"||w==="__self"||w==="__source"||w==="ref"&&g.ref===void 0||(E[w]=g[w]);var w=arguments.length-2;if(w===1)E.children=j;else if(1<w){for(var _=Array(w),L=0;L<w;L++)_[L]=arguments[L+2];E.children=_}return za(r.type,C,E)},Z.createContext=function(r){return r={$$typeof:q,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:M,_context:r},r},Z.createElement=function(r,g,j){var E,C={},w=null;if(g!=null)for(E in g.key!==void 0&&(w=""+g.key),g)Je.call(g,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(C[E]=g[E]);var _=arguments.length-2;if(_===1)C.children=j;else if(1<_){for(var L=Array(_),X=0;X<_;X++)L[X]=arguments[X+2];C.children=L}if(r&&r.defaultProps)for(E in _=r.defaultProps,_)C[E]===void 0&&(C[E]=_[E]);return za(r,w,C)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(r){return{$$typeof:ne,render:r}},Z.isValidElement=ja,Z.lazy=function(r){return{$$typeof:J,_payload:{_status:-1,_result:r},_init:V}},Z.memo=function(r,g){return{$$typeof:T,type:r,compare:g===void 0?null:g}},Z.startTransition=function(r){var g=P.T,j={};P.T=j;try{var E=r(),C=P.S;C!==null&&C(j,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(Ke,oe)}catch(w){oe(w)}finally{g!==null&&j.types!==null&&(g.types=j.types),P.T=g}},Z.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},Z.use=function(r){return P.H.use(r)},Z.useActionState=function(r,g,j){return P.H.useActionState(r,g,j)},Z.useCallback=function(r,g){return P.H.useCallback(r,g)},Z.useContext=function(r){return P.H.useContext(r)},Z.useDebugValue=function(){},Z.useDeferredValue=function(r,g){return P.H.useDeferredValue(r,g)},Z.useEffect=function(r,g){return P.H.useEffect(r,g)},Z.useEffectEvent=function(r){return P.H.useEffectEvent(r)},Z.useId=function(){return P.H.useId()},Z.useImperativeHandle=function(r,g,j){return P.H.useImperativeHandle(r,g,j)},Z.useInsertionEffect=function(r,g){return P.H.useInsertionEffect(r,g)},Z.useLayoutEffect=function(r,g){return P.H.useLayoutEffect(r,g)},Z.useMemo=function(r,g){return P.H.useMemo(r,g)},Z.useOptimistic=function(r,g){return P.H.useOptimistic(r,g)},Z.useReducer=function(r,g,j){return P.H.useReducer(r,g,j)},Z.useRef=function(r){return P.H.useRef(r)},Z.useState=function(r){return P.H.useState(r)},Z.useSyncExternalStore=function(r,g,j){return P.H.useSyncExternalStore(r,g,j)},Z.useTransition=function(){return P.H.useTransition()},Z.version="19.2.8",Z}var kd;function Dr(){return kd||(kd=1,zr.exports=M0()),zr.exports}var Ae=Dr();const Fd=Jd(Ae);var jr={exports:{}},Bn={},Nr={exports:{}},Ar={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function E0(){return qd||(qd=1,(function(x){function O(z,D){var V=z.length;z.push(D);e:for(;0<V;){var oe=V-1>>>1,h=z[oe];if(0<H(h,D))z[oe]=D,z[V]=h,V=oe;else break e}}function R(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var D=z[0],V=z.pop();if(V!==D){z[0]=V;e:for(var oe=0,h=z.length,r=h>>>1;oe<r;){var g=2*(oe+1)-1,j=z[g],E=g+1,C=z[E];if(0>H(j,V))E<h&&0>H(C,j)?(z[oe]=C,z[E]=V,oe=E):(z[oe]=j,z[g]=V,oe=g);else if(E<h&&0>H(C,V))z[oe]=C,z[E]=V,oe=E;else break e}}return D}function H(z,D){var V=z.sortIndex-D.sortIndex;return V!==0?V:z.id-D.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;x.unstable_now=function(){return M.now()}}else{var q=Date,ne=q.now();x.unstable_now=function(){return q.now()-ne}}var B=[],T=[],J=1,G=null,he=3,Ge=!1,je=!1,Te=!1,ie=!1,Ie=typeof setTimeout=="function"?setTimeout:null,Ya=typeof clearTimeout=="function"?clearTimeout:null,De=typeof setImmediate<"u"?setImmediate:null;function ta(z){for(var D=R(T);D!==null;){if(D.callback===null)d(T);else if(D.startTime<=z)d(T),D.sortIndex=D.expirationTime,O(B,D);else break;D=R(T)}}function Sa(z){if(Te=!1,ta(z),!je)if(R(B)!==null)je=!0,Ke||(Ke=!0,Fe());else{var D=R(T);D!==null&&Pe(Sa,D.startTime-z)}}var Ke=!1,P=-1,Je=5,za=-1;function ot(){return ie?!0:!(x.unstable_now()-za<Je)}function ja(){if(ie=!1,Ke){var z=x.unstable_now();za=z;var D=!0;try{e:{je=!1,Te&&(Te=!1,Ya(P),P=-1),Ge=!0;var V=he;try{a:{for(ta(z),G=R(B);G!==null&&!(G.expirationTime>z&&ot());){var oe=G.callback;if(typeof oe=="function"){G.callback=null,he=G.priorityLevel;var h=oe(G.expirationTime<=z);if(z=x.unstable_now(),typeof h=="function"){G.callback=h,ta(z),D=!0;break a}G===R(B)&&d(B),ta(z)}else d(B);G=R(B)}if(G!==null)D=!0;else{var r=R(T);r!==null&&Pe(Sa,r.startTime-z),D=!1}}break e}finally{G=null,he=V,Ge=!1}D=void 0}}finally{D?Fe():Ke=!1}}}var Fe;if(typeof De=="function")Fe=function(){De(ja)};else if(typeof MessageChannel<"u"){var Xa=new MessageChannel,Na=Xa.port2;Xa.port1.onmessage=ja,Fe=function(){Na.postMessage(null)}}else Fe=function(){Ie(ja,0)};function Pe(z,D){P=Ie(function(){z(x.unstable_now())},D)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(z){z.callback=null},x.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Je=0<z?Math.floor(1e3/z):5},x.unstable_getCurrentPriorityLevel=function(){return he},x.unstable_next=function(z){switch(he){case 1:case 2:case 3:var D=3;break;default:D=he}var V=he;he=D;try{return z()}finally{he=V}},x.unstable_requestPaint=function(){ie=!0},x.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=he;he=z;try{return D()}finally{he=V}},x.unstable_scheduleCallback=function(z,D,V){var oe=x.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?oe+V:oe):V=oe,z){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=V+h,z={id:J++,callback:D,priorityLevel:z,startTime:V,expirationTime:h,sortIndex:-1},V>oe?(z.sortIndex=V,O(T,z),R(B)===null&&z===R(T)&&(Te?(Ya(P),P=-1):Te=!0,Pe(Sa,V-oe))):(z.sortIndex=h,O(B,z),je||Ge||(je=!0,Ke||(Ke=!0,Fe()))),z},x.unstable_shouldYield=ot,x.unstable_wrapCallback=function(z){var D=he;return function(){var V=he;he=D;try{return z.apply(this,arguments)}finally{he=V}}}})(Ar)),Ar}var Yd;function C0(){return Yd||(Yd=1,Nr.exports=E0()),Nr.exports}var Tr={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function _0(){if(Gd)return $e;Gd=1;var x=Dr();function O(B){var T="https://react.dev/errors/"+B;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var J=2;J<arguments.length;J++)T+="&args[]="+encodeURIComponent(arguments[J])}return"Minified React error #"+B+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(){}var d={d:{f:R,r:function(){throw Error(O(522))},D:R,C:R,L:R,m:R,X:R,S:R,M:R},p:0,findDOMNode:null},H=Symbol.for("react.portal");function M(B,T,J){var G=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:G==null?null:""+G,children:B,containerInfo:T,implementation:J}}var q=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ne(B,T){if(B==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,$e.createPortal=function(B,T){var J=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(O(299));return M(B,T,null,J)},$e.flushSync=function(B){var T=q.T,J=d.p;try{if(q.T=null,d.p=2,B)return B()}finally{q.T=T,d.p=J,d.d.f()}},$e.preconnect=function(B,T){typeof B=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,d.d.C(B,T))},$e.prefetchDNS=function(B){typeof B=="string"&&d.d.D(B)},$e.preinit=function(B,T){if(typeof B=="string"&&T&&typeof T.as=="string"){var J=T.as,G=ne(J,T.crossOrigin),he=typeof T.integrity=="string"?T.integrity:void 0,Ge=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;J==="style"?d.d.S(B,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:G,integrity:he,fetchPriority:Ge}):J==="script"&&d.d.X(B,{crossOrigin:G,integrity:he,fetchPriority:Ge,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},$e.preinitModule=function(B,T){if(typeof B=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var J=ne(T.as,T.crossOrigin);d.d.M(B,{crossOrigin:J,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&d.d.M(B)},$e.preload=function(B,T){if(typeof B=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var J=T.as,G=ne(J,T.crossOrigin);d.d.L(B,J,{crossOrigin:G,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},$e.preloadModule=function(B,T){if(typeof B=="string")if(T){var J=ne(T.as,T.crossOrigin);d.d.m(B,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:J,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else d.d.m(B)},$e.requestFormReset=function(B){d.d.r(B)},$e.unstable_batchedUpdates=function(B,T){return B(T)},$e.useFormState=function(B,T,J){return q.H.useFormState(B,T,J)},$e.useFormStatus=function(){return q.H.useHostTransitionStatus()},$e.version="19.2.8",$e}var Ld;function D0(){if(Ld)return Tr.exports;Ld=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(O){console.error(O)}}return x(),Tr.exports=_0(),Tr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function O0(){if(Qd)return Bn;Qd=1;var x=C0(),O=Dr(),R=D0();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function M(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function q(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function ne(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function B(e){if(M(e)!==e)throw Error(d(188))}function T(e){var a=e.alternate;if(!a){if(a=M(e),a===null)throw Error(d(188));return a!==e?null:e}for(var t=e,l=a;;){var n=t.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){t=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===t)return B(n),e;if(i===l)return B(n),a;i=i.sibling}throw Error(d(188))}if(t.return!==l.return)t=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===t){u=!0,t=n,l=i;break}if(s===l){u=!0,l=n,t=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===t){u=!0,t=i,l=n;break}if(s===l){u=!0,l=i,t=n;break}s=s.sibling}if(!u)throw Error(d(189))}}if(t.alternate!==l)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:a}function J(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=J(e),a!==null)return a;e=e.sibling}return null}var G=Object.assign,he=Symbol.for("react.element"),Ge=Symbol.for("react.transitional.element"),je=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Ya=Symbol.for("react.consumer"),De=Symbol.for("react.context"),ta=Symbol.for("react.forward_ref"),Sa=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),za=Symbol.for("react.activity"),ot=Symbol.for("react.memo_cache_sentinel"),ja=Symbol.iterator;function Fe(e){return e===null||typeof e!="object"?null:(e=ja&&e[ja]||e["@@iterator"],typeof e=="function"?e:null)}var Xa=Symbol.for("react.client.reference");function Na(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case Ie:return"Profiler";case ie:return"StrictMode";case Sa:return"Suspense";case Ke:return"SuspenseList";case za:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case je:return"Portal";case De:return e.displayName||"Context";case Ya:return(e._context.displayName||"Context")+".Consumer";case ta:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return a=e.displayName||null,a!==null?a:Na(e.type)||"Memo";case Je:a=e._payload,e=e._init;try{return Na(e(a))}catch{}}return null}var Pe=Array.isArray,z=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},oe=[],h=-1;function r(e){return{current:e}}function g(e){0>h||(e.current=oe[h],oe[h]=null,h--)}function j(e,a){h++,oe[h]=e.current,e.current=a}var E=r(null),C=r(null),w=r(null),_=r(null);function L(e,a){switch(j(w,a),j(C,e),j(E,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?nd(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=nd(a),e=id(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}g(E),j(E,e)}function X(){g(E),g(C),g(w)}function ge(e){e.memoizedState!==null&&j(_,e);var a=E.current,t=id(a,e.type);a!==t&&(j(C,e),j(E,t))}function fe(e){C.current===e&&(g(E),g(C)),_.current===e&&(g(_),On._currentValue=V)}var xe,Oe;function F(e){if(xe===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);xe=a&&a[1]||"",Oe=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xe+e+Oe}var ke=!1;function ea(e,a){if(!e||ke)return"";ke=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var y=b}Reflect.construct(e,[],A)}else{try{A.call()}catch(b){y=b}e.call(A.prototype)}}else{try{throw Error()}catch(b){y=b}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var o=u.split(`
`),p=s.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===p.length)for(l=o.length-1,n=p.length-1;1<=l&&0<=n&&o[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==p[n]){var S=`
`+o[l].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=l&&0<=n);break}}}finally{ke=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?F(t):""}function fa(e,a){switch(e.tag){case 26:case 27:case 5:return F(e.type);case 16:return F("Lazy");case 13:return e.child!==a&&a!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return ea(e.type,!1);case 11:return ea(e.type.render,!1);case 1:return ea(e.type,!0);case 31:return F("Activity");default:return""}}function Aa(e){try{var a="",t=null;do a+=fa(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ha=Object.prototype.hasOwnProperty,la=x.unstable_scheduleCallback,Yl=x.unstable_cancelCallback,iu=x.unstable_shouldYield,uu=x.unstable_requestPaint,We=x.unstable_now,cu=x.unstable_getCurrentPriorityLevel,Gl=x.unstable_ImmediatePriority,Gn=x.unstable_UserBlockingPriority,al=x.unstable_NormalPriority,Ln=x.unstable_LowPriority,Ll=x.unstable_IdlePriority,Ql=x.log,ru=x.unstable_setDisableYieldValue,Ht=null,da=null;function ft(e){if(typeof Ql=="function"&&ru(e),da&&typeof da.setStrictMode=="function")try{da.setStrictMode(Ht,e)}catch{}}var ma=Math.clz32?Math.clz32:fm,sm=Math.log,om=Math.LN2;function fm(e){return e>>>=0,e===0?32:31-(sm(e)/om|0)|0}var Qn=256,Vn=262144,Xn=4194304;function Bt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zn(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Bt(l):(u&=s,u!==0?n=Bt(u):t||(t=s&~e,t!==0&&(n=Bt(t))))):(s=l&~i,s!==0?n=Bt(s):u!==0?n=Bt(u):t||(t=l&~e,t!==0&&(n=Bt(t)))),n===0?0:a!==0&&a!==n&&(a&i)===0&&(i=n&-n,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:n}function Vl(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function dm(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Br(){var e=Xn;return Xn<<=1,(Xn&62914560)===0&&(Xn=4194304),e}function su(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Xl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mm(e,a,t,l,n,i){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,p=e.hiddenUpdates;for(t=u&~t;0<t;){var S=31-ma(t),A=1<<S;s[S]=0,o[S]=-1;var y=p[S];if(y!==null)for(p[S]=null,S=0;S<y.length;S++){var b=y[S];b!==null&&(b.lane&=-536870913)}t&=~A}l!==0&&kr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~a))}function kr(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-ma(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function qr(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-ma(t),n=1<<l;n&a|e[l]&a&&(e[l]|=a),t&=~n}}function Yr(e,a){var t=a&-a;return t=(t&42)!==0?1:ou(t),(t&(e.suspendedLanes|a))!==0?0:t}function ou(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gr(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:Ed(e.type))}function Lr(e,a){var t=D.p;try{return D.p=e,a()}finally{D.p=t}}var dt=Math.random().toString(36).slice(2),Le="__reactFiber$"+dt,na="__reactProps$"+dt,tl="__reactContainer$"+dt,du="__reactEvents$"+dt,hm="__reactListeners$"+dt,gm="__reactHandles$"+dt,Qr="__reactResources$"+dt,Zl="__reactMarker$"+dt;function mu(e){delete e[Le],delete e[na],delete e[du],delete e[hm],delete e[gm]}function ll(e){var a=e[Le];if(a)return a;for(var t=e.parentNode;t;){if(a=t[tl]||t[Le]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=dd(e);e!==null;){if(t=e[Le])return t;e=dd(e)}return a}e=t,t=e.parentNode}return null}function nl(e){if(e=e[Le]||e[tl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Kl(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function il(e){var a=e[Qr];return a||(a=e[Qr]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function qe(e){e[Zl]=!0}var Vr=new Set,Xr={};function kt(e,a){ul(e,a),ul(e+"Capture",a)}function ul(e,a){for(Xr[e]=a,e=0;e<a.length;e++)Vr.add(a[e])}var vm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zr={},Kr={};function pm(e){return Ha.call(Kr,e)?!0:Ha.call(Zr,e)?!1:vm.test(e)?Kr[e]=!0:(Zr[e]=!0,!1)}function Kn(e,a,t){if(pm(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Jn(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Za(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function Ta(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jr(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ym(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(u){t=""+u,i.call(this,u)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function hu(e){if(!e._valueTracker){var a=Jr(e)?"checked":"value";e._valueTracker=ym(e,a,""+e[a])}}function Fr(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=Jr(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function Fn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bm=/[\n"\\]/g;function Ma(e){return e.replace(bm,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function gu(e,a,t,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ta(a)):e.value!==""+Ta(a)&&(e.value=""+Ta(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?vu(e,u,Ta(a)):t!=null?vu(e,u,Ta(t)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Ta(s):e.removeAttribute("name")}function Wr(e,a,t,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){hu(e);return}t=t!=null?""+Ta(t):"",a=a!=null?""+Ta(a):t,s||a===e.value||(e.value=a),e.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),hu(e)}function vu(e,a,t){a==="number"&&Fn(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function cl(e,a,t,l){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Ta(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function $r(e,a,t){if(a!=null&&(a=""+Ta(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Ta(t):""}function Ir(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(d(92));if(Pe(l)){if(1<l.length)throw Error(d(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=Ta(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),hu(e)}function rl(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var xm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pr(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||xm.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function es(e,a,t){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&t[n]!==l&&Pr(e,n,l)}else for(var i in a)a.hasOwnProperty(i)&&Pr(e,i,a[i])}function pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wn(e){return zm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ka(){}var yu=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,ol=null;function as(e){var a=nl(e);if(a&&(e=a.stateNode)){var t=e[na]||null;e:switch(e=a.stateNode,a.type){case"input":if(gu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ma(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var n=l[na]||null;if(!n)throw Error(d(90));gu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&Fr(l)}break e;case"textarea":$r(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&cl(e,!!t.multiple,a,!1)}}}var xu=!1;function ts(e,a,t){if(xu)return e(a,t);xu=!0;try{var l=e(a);return l}finally{if(xu=!1,(sl!==null||ol!==null)&&(Bi(),sl&&(a=sl,e=ol,ol=sl=null,as(a),e)))for(a=0;a<e.length;a++)as(e[a])}}function Jl(e,a){var t=e.stateNode;if(t===null)return null;var l=t[na]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,a,typeof t));return t}var Ja=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Ja)try{var Fl={};Object.defineProperty(Fl,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Fl,Fl),window.removeEventListener("test",Fl,Fl)}catch{Su=!1}var mt=null,zu=null,$n=null;function ls(){if($n)return $n;var e,a=zu,t=a.length,l,n="value"in mt?mt.value:mt.textContent,i=n.length;for(e=0;e<t&&a[e]===n[e];e++);var u=t-e;for(l=1;l<=u&&a[t-l]===n[i-l];l++);return $n=n.slice(e,1<l?1-l:void 0)}function In(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function ns(){return!1}function ia(e){function a(t,l,n,i,u){this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pn:ns,this.isPropagationStopped=ns,this}return G(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),a}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=ia(qt),Wl=G({},qt,{view:0,detail:0}),jm=ia(Wl),ju,Nu,$l,ai=G({},Wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$l&&($l&&e.type==="mousemove"?(ju=e.screenX-$l.screenX,Nu=e.screenY-$l.screenY):Nu=ju=0,$l=e),ju)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),is=ia(ai),Nm=G({},ai,{dataTransfer:0}),Am=ia(Nm),Tm=G({},Wl,{relatedTarget:0}),Au=ia(Tm),Mm=G({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=ia(Mm),Cm=G({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_m=ia(Cm),Dm=G({},qt,{data:0}),us=ia(Dm),Om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Um(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=wm[e])?!!a[e]:!1}function Tu(){return Um}var Hm=G({},Wl,{key:function(e){if(e.key){var a=Om[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=In(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?In(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?In(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bm=ia(Hm),km=G({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cs=ia(km),qm=G({},Wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Ym=ia(qm),Gm=G({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lm=ia(Gm),Qm=G({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vm=ia(Qm),Xm=G({},qt,{newState:0,oldState:0}),Zm=ia(Xm),Km=[9,13,27,32],Mu=Ja&&"CompositionEvent"in window,Il=null;Ja&&"documentMode"in document&&(Il=document.documentMode);var Jm=Ja&&"TextEvent"in window&&!Il,rs=Ja&&(!Mu||Il&&8<Il&&11>=Il),ss=" ",os=!1;function fs(e,a){switch(e){case"keyup":return Km.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function Fm(e,a){switch(e){case"compositionend":return ds(a);case"keypress":return a.which!==32?null:(os=!0,ss);case"textInput":return e=a.data,e===ss&&os?null:e;default:return null}}function Wm(e,a){if(fl)return e==="compositionend"||!Mu&&fs(e,a)?(e=ls(),$n=zu=mt=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return rs&&a.locale!=="ko"?null:a.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!$m[e.type]:a==="textarea"}function hs(e,a,t,l){sl?ol?ol.push(l):ol=[l]:sl=l,a=Vi(a,"onChange"),0<a.length&&(t=new ei("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var Pl=null,en=null;function Im(e){If(e,0)}function ti(e){var a=Kl(e);if(Fr(a))return e}function gs(e,a){if(e==="change")return a}var vs=!1;if(Ja){var Eu;if(Ja){var Cu="oninput"in document;if(!Cu){var ps=document.createElement("div");ps.setAttribute("oninput","return;"),Cu=typeof ps.oninput=="function"}Eu=Cu}else Eu=!1;vs=Eu&&(!document.documentMode||9<document.documentMode)}function ys(){Pl&&(Pl.detachEvent("onpropertychange",bs),en=Pl=null)}function bs(e){if(e.propertyName==="value"&&ti(en)){var a=[];hs(a,en,e,bu(e)),ts(Im,a)}}function Pm(e,a,t){e==="focusin"?(ys(),Pl=a,en=t,Pl.attachEvent("onpropertychange",bs)):e==="focusout"&&ys()}function eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(en)}function ah(e,a){if(e==="click")return ti(a)}function th(e,a){if(e==="input"||e==="change")return ti(a)}function lh(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ha=typeof Object.is=="function"?Object.is:lh;function an(e,a){if(ha(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var n=t[l];if(!Ha.call(a,n)||!ha(e[n],a[n]))return!1}return!0}function xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ss(e,a){var t=xs(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xs(t)}}function zs(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?zs(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function js(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Fn(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Fn(e.document)}return a}function _u(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var nh=Ja&&"documentMode"in document&&11>=document.documentMode,dl=null,Du=null,tn=null,Ou=!1;function Ns(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ou||dl==null||dl!==Fn(l)||(l=dl,"selectionStart"in l&&_u(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),tn&&an(tn,l)||(tn=l,l=Vi(Du,"onSelect"),0<l.length&&(a=new ei("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=dl)))}function Yt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var ml={animationend:Yt("Animation","AnimationEnd"),animationiteration:Yt("Animation","AnimationIteration"),animationstart:Yt("Animation","AnimationStart"),transitionrun:Yt("Transition","TransitionRun"),transitionstart:Yt("Transition","TransitionStart"),transitioncancel:Yt("Transition","TransitionCancel"),transitionend:Yt("Transition","TransitionEnd")},Ru={},As={};Ja&&(As=document.createElement("div").style,"AnimationEvent"in window||(delete ml.animationend.animation,delete ml.animationiteration.animation,delete ml.animationstart.animation),"TransitionEvent"in window||delete ml.transitionend.transition);function Gt(e){if(Ru[e])return Ru[e];if(!ml[e])return e;var a=ml[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in As)return Ru[e]=a[t];return e}var Ts=Gt("animationend"),Ms=Gt("animationiteration"),Es=Gt("animationstart"),ih=Gt("transitionrun"),uh=Gt("transitionstart"),ch=Gt("transitioncancel"),Cs=Gt("transitionend"),_s=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function Ba(e,a){_s.set(e,a),kt(a,[e])}var li=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ea=[],hl=0,Uu=0;function ni(){for(var e=hl,a=Uu=hl=0;a<e;){var t=Ea[a];Ea[a++]=null;var l=Ea[a];Ea[a++]=null;var n=Ea[a];Ea[a++]=null;var i=Ea[a];if(Ea[a++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Ds(t,n,i)}}function ii(e,a,t,l){Ea[hl++]=e,Ea[hl++]=a,Ea[hl++]=t,Ea[hl++]=l,Uu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Hu(e,a,t,l){return ii(e,a,t,l),ui(e)}function Lt(e,a){return ii(e,null,null,a),ui(e)}function Ds(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var n=!1,i=e.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&a!==null&&(n=31-ma(t),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[a]:l.push(a),a.lane=t|536870912),i):null}function ui(e){if(50<An)throw An=0,Xc=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var gl={};function rh(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ga(e,a,t,l){return new rh(e,a,t,l)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fa(e,a){var t=e.alternate;return t===null?(t=ga(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Os(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ci(e,a,t,l,n,i){var u=0;if(l=e,typeof e=="function")Bu(e)&&(u=1);else if(typeof e=="string")u=m0(e,t,E.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case za:return e=ga(31,t,a,n),e.elementType=za,e.lanes=i,e;case Te:return Qt(t.children,n,i,a);case ie:u=8,n|=24;break;case Ie:return e=ga(12,t,a,n|2),e.elementType=Ie,e.lanes=i,e;case Sa:return e=ga(13,t,a,n),e.elementType=Sa,e.lanes=i,e;case Ke:return e=ga(19,t,a,n),e.elementType=Ke,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case De:u=10;break e;case Ya:u=9;break e;case ta:u=11;break e;case P:u=14;break e;case Je:u=16,l=null;break e}u=29,t=Error(d(130,e===null?"null":typeof e,"")),l=null}return a=ga(u,t,a,n),a.elementType=e,a.type=l,a.lanes=i,a}function Qt(e,a,t,l){return e=ga(7,e,l,a),e.lanes=t,e}function ku(e,a,t){return e=ga(6,e,null,a),e.lanes=t,e}function Rs(e){var a=ga(18,null,null,0);return a.stateNode=e,a}function qu(e,a,t){return a=ga(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var ws=new WeakMap;function Ca(e,a){if(typeof e=="object"&&e!==null){var t=ws.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Aa(a)},ws.set(e,a),a)}return{value:e,source:a,stack:Aa(a)}}var vl=[],pl=0,ri=null,ln=0,_a=[],Da=0,ht=null,Ga=1,La="";function Wa(e,a){vl[pl++]=ln,vl[pl++]=ri,ri=e,ln=a}function Us(e,a,t){_a[Da++]=Ga,_a[Da++]=La,_a[Da++]=ht,ht=e;var l=Ga;e=La;var n=32-ma(l)-1;l&=~(1<<n),t+=1;var i=32-ma(a)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Ga=1<<32-ma(a)+n|t<<n|l,La=i+e}else Ga=1<<i|t<<n|l,La=e}function Yu(e){e.return!==null&&(Wa(e,1),Us(e,1,0))}function Gu(e){for(;e===ri;)ri=vl[--pl],vl[pl]=null,ln=vl[--pl],vl[pl]=null;for(;e===ht;)ht=_a[--Da],_a[Da]=null,La=_a[--Da],_a[Da]=null,Ga=_a[--Da],_a[Da]=null}function Hs(e,a){_a[Da++]=Ga,_a[Da++]=La,_a[Da++]=ht,Ga=a.id,La=a.overflow,ht=e}var Qe=null,Se=null,ue=!1,gt=null,Oa=!1,Lu=Error(d(519));function vt(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nn(Ca(a,e)),Lu}function Bs(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[Le]=e,a[na]=l,t){case"dialog":ae("cancel",a),ae("close",a);break;case"iframe":case"object":case"embed":ae("load",a);break;case"video":case"audio":for(t=0;t<Mn.length;t++)ae(Mn[t],a);break;case"source":ae("error",a);break;case"img":case"image":case"link":ae("error",a),ae("load",a);break;case"details":ae("toggle",a);break;case"input":ae("invalid",a),Wr(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ae("invalid",a);break;case"textarea":ae("invalid",a),Ir(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||td(a.textContent,t)?(l.popover!=null&&(ae("beforetoggle",a),ae("toggle",a)),l.onScroll!=null&&ae("scroll",a),l.onScrollEnd!=null&&ae("scrollend",a),l.onClick!=null&&(a.onclick=Ka),a=!0):a=!1,a||vt(e,!0)}function ks(e){for(Qe=e.return;Qe;)switch(Qe.tag){case 5:case 31:case 13:Oa=!1;return;case 27:case 3:Oa=!0;return;default:Qe=Qe.return}}function yl(e){if(e!==Qe)return!1;if(!ue)return ks(e),ue=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||ur(e.type,e.memoizedProps)),t=!t),t&&Se&&vt(e),ks(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Se=fd(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Se=fd(e)}else a===27?(a=Se,_t(e.type)?(e=fr,fr=null,Se=e):Se=a):Se=Qe?wa(e.stateNode.nextSibling):null;return!0}function Vt(){Se=Qe=null,ue=!1}function Qu(){var e=gt;return e!==null&&(sa===null?sa=e:sa.push.apply(sa,e),gt=null),e}function nn(e){gt===null?gt=[e]:gt.push(e)}var Vu=r(null),Xt=null,$a=null;function pt(e,a,t){j(Vu,a._currentValue),a._currentValue=t}function Ia(e){e._currentValue=Vu.current,g(Vu)}function Xu(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function Zu(e,a,t,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var o=0;o<a.length;o++)if(s.context===a[o]){i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Xu(i.return,t,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(d(341));u.lanes|=t,i=u.alternate,i!==null&&(i.lanes|=t),Xu(u,t,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function bl(e,a,t,l){e=null;for(var n=a,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var s=n.type;ha(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===_.current){if(u=n.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(On):e=[On])}n=n.return}e!==null&&Zu(a,e,t,l),a.flags|=262144}function si(e){for(e=e.firstContext;e!==null;){if(!ha(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zt(e){Xt=e,$a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return qs(Xt,e)}function oi(e,a){return Xt===null&&Zt(e),qs(e,a)}function qs(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},$a===null){if(e===null)throw Error(d(308));$a=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else $a=$a.next=a;return t}var sh=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},oh=x.unstable_scheduleCallback,fh=x.unstable_NormalPriority,Re={$$typeof:De,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new sh,data:new Map,refCount:0}}function un(e){e.refCount--,e.refCount===0&&oh(fh,function(){e.controller.abort()})}var cn=null,Ju=0,xl=0,Sl=null;function dh(e,a){if(cn===null){var t=cn=[];Ju=0,xl=$c(),Sl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Ju++,a.then(Ys,Ys),a}function Ys(){if(--Ju===0&&cn!==null){Sl!==null&&(Sl.status="fulfilled");var e=cn;cn=null,xl=0,Sl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function mh(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),l}var Gs=z.S;z.S=function(e,a){Tf=We(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&dh(e,a),Gs!==null&&Gs(e,a)};var Kt=r(null);function Fu(){var e=Kt.current;return e!==null?e:be.pooledCache}function fi(e,a){a===null?j(Kt,Kt.current):j(Kt,a.pool)}function Ls(){var e=Fu();return e===null?null:{parent:Re._currentValue,pool:e}}var zl=Error(d(460)),Wu=Error(d(474)),di=Error(d(542)),mi={then:function(){}};function Qs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vs(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ka,Ka),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Zs(e),e;default:if(typeof a.status=="string")a.then(Ka,Ka);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Zs(e),e}throw Ft=a,zl}}function Jt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ft=t,zl):t}}var Ft=null;function Xs(){if(Ft===null)throw Error(d(459));var e=Ft;return Ft=null,e}function Zs(e){if(e===zl||e===di)throw Error(d(483))}var jl=null,rn=0;function hi(e){var a=rn;return rn+=1,jl===null&&(jl=[]),Vs(jl,e,a)}function sn(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function gi(e,a){throw a.$$typeof===he?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Ks(e){function a(m,f){if(e){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)a(m,f),f=f.sibling;return null}function l(m){for(var f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function n(m,f){return m=Fa(m,f),m.index=0,m.sibling=null,m}function i(m,f,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=67108866,f):v):(m.flags|=67108866,f)):(m.flags|=1048576,f)}function u(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function s(m,f,v,N){return f===null||f.tag!==6?(f=ku(v,m.mode,N),f.return=m,f):(f=n(f,v),f.return=m,f)}function o(m,f,v,N){var Y=v.type;return Y===Te?S(m,f,v.props.children,N,v.key):f!==null&&(f.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Je&&Jt(Y)===f.type)?(f=n(f,v.props),sn(f,v),f.return=m,f):(f=ci(v.type,v.key,v.props,null,m.mode,N),sn(f,v),f.return=m,f)}function p(m,f,v,N){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=qu(v,m.mode,N),f.return=m,f):(f=n(f,v.children||[]),f.return=m,f)}function S(m,f,v,N,Y){return f===null||f.tag!==7?(f=Qt(v,m.mode,N,Y),f.return=m,f):(f=n(f,v),f.return=m,f)}function A(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=ku(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ge:return v=ci(f.type,f.key,f.props,null,m.mode,v),sn(v,f),v.return=m,v;case je:return f=qu(f,m.mode,v),f.return=m,f;case Je:return f=Jt(f),A(m,f,v)}if(Pe(f)||Fe(f))return f=Qt(f,m.mode,v,null),f.return=m,f;if(typeof f.then=="function")return A(m,hi(f),v);if(f.$$typeof===De)return A(m,oi(m,f),v);gi(m,f)}return null}function y(m,f,v,N){var Y=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return Y!==null?null:s(m,f,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ge:return v.key===Y?o(m,f,v,N):null;case je:return v.key===Y?p(m,f,v,N):null;case Je:return v=Jt(v),y(m,f,v,N)}if(Pe(v)||Fe(v))return Y!==null?null:S(m,f,v,N,null);if(typeof v.then=="function")return y(m,f,hi(v),N);if(v.$$typeof===De)return y(m,f,oi(m,v),N);gi(m,v)}return null}function b(m,f,v,N,Y){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return m=m.get(v)||null,s(f,m,""+N,Y);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ge:return m=m.get(N.key===null?v:N.key)||null,o(f,m,N,Y);case je:return m=m.get(N.key===null?v:N.key)||null,p(f,m,N,Y);case Je:return N=Jt(N),b(m,f,v,N,Y)}if(Pe(N)||Fe(N))return m=m.get(v)||null,S(f,m,N,Y,null);if(typeof N.then=="function")return b(m,f,v,hi(N),Y);if(N.$$typeof===De)return b(m,f,v,oi(f,N),Y);gi(f,N)}return null}function U(m,f,v,N){for(var Y=null,ce=null,k=f,W=f=0,le=null;k!==null&&W<v.length;W++){k.index>W?(le=k,k=null):le=k.sibling;var re=y(m,k,v[W],N);if(re===null){k===null&&(k=le);break}e&&k&&re.alternate===null&&a(m,k),f=i(re,f,W),ce===null?Y=re:ce.sibling=re,ce=re,k=le}if(W===v.length)return t(m,k),ue&&Wa(m,W),Y;if(k===null){for(;W<v.length;W++)k=A(m,v[W],N),k!==null&&(f=i(k,f,W),ce===null?Y=k:ce.sibling=k,ce=k);return ue&&Wa(m,W),Y}for(k=l(k);W<v.length;W++)le=b(k,m,W,v[W],N),le!==null&&(e&&le.alternate!==null&&k.delete(le.key===null?W:le.key),f=i(le,f,W),ce===null?Y=le:ce.sibling=le,ce=le);return e&&k.forEach(function(Ut){return a(m,Ut)}),ue&&Wa(m,W),Y}function Q(m,f,v,N){if(v==null)throw Error(d(151));for(var Y=null,ce=null,k=f,W=f=0,le=null,re=v.next();k!==null&&!re.done;W++,re=v.next()){k.index>W?(le=k,k=null):le=k.sibling;var Ut=y(m,k,re.value,N);if(Ut===null){k===null&&(k=le);break}e&&k&&Ut.alternate===null&&a(m,k),f=i(Ut,f,W),ce===null?Y=Ut:ce.sibling=Ut,ce=Ut,k=le}if(re.done)return t(m,k),ue&&Wa(m,W),Y;if(k===null){for(;!re.done;W++,re=v.next())re=A(m,re.value,N),re!==null&&(f=i(re,f,W),ce===null?Y=re:ce.sibling=re,ce=re);return ue&&Wa(m,W),Y}for(k=l(k);!re.done;W++,re=v.next())re=b(k,m,W,re.value,N),re!==null&&(e&&re.alternate!==null&&k.delete(re.key===null?W:re.key),f=i(re,f,W),ce===null?Y=re:ce.sibling=re,ce=re);return e&&k.forEach(function(N0){return a(m,N0)}),ue&&Wa(m,W),Y}function ye(m,f,v,N){if(typeof v=="object"&&v!==null&&v.type===Te&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ge:e:{for(var Y=v.key;f!==null;){if(f.key===Y){if(Y=v.type,Y===Te){if(f.tag===7){t(m,f.sibling),N=n(f,v.props.children),N.return=m,m=N;break e}}else if(f.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Je&&Jt(Y)===f.type){t(m,f.sibling),N=n(f,v.props),sn(N,v),N.return=m,m=N;break e}t(m,f);break}else a(m,f);f=f.sibling}v.type===Te?(N=Qt(v.props.children,m.mode,N,v.key),N.return=m,m=N):(N=ci(v.type,v.key,v.props,null,m.mode,N),sn(N,v),N.return=m,m=N)}return u(m);case je:e:{for(Y=v.key;f!==null;){if(f.key===Y)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){t(m,f.sibling),N=n(f,v.children||[]),N.return=m,m=N;break e}else{t(m,f);break}else a(m,f);f=f.sibling}N=qu(v,m.mode,N),N.return=m,m=N}return u(m);case Je:return v=Jt(v),ye(m,f,v,N)}if(Pe(v))return U(m,f,v,N);if(Fe(v)){if(Y=Fe(v),typeof Y!="function")throw Error(d(150));return v=Y.call(v),Q(m,f,v,N)}if(typeof v.then=="function")return ye(m,f,hi(v),N);if(v.$$typeof===De)return ye(m,f,oi(m,v),N);gi(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,f!==null&&f.tag===6?(t(m,f.sibling),N=n(f,v),N.return=m,m=N):(t(m,f),N=ku(v,m.mode,N),N.return=m,m=N),u(m)):t(m,f)}return function(m,f,v,N){try{rn=0;var Y=ye(m,f,v,N);return jl=null,Y}catch(k){if(k===zl||k===di)throw k;var ce=ga(29,k,null,m.mode);return ce.lanes=N,ce.return=m,ce}finally{}}}var Wt=Ks(!0),Js=Ks(!1),yt=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xt(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(se&2)!==0){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=ui(e),Ds(e,null,t),a}return ii(e,l,a,t),ui(e)}function on(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,qr(e,t)}}function Pu(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var n=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,t=t.next}while(t!==null);i===null?n=i=a:i=i.next=a}else n=i=a;t={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var ec=!1;function fn(){if(ec){var e=Sl;if(e!==null)throw e}}function dn(e,a,t,l){ec=!1;var n=e.updateQueue;yt=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,p=o.next;o.next=null,u===null?i=p:u.next=p,u=o;var S=e.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==u&&(s===null?S.firstBaseUpdate=p:s.next=p,S.lastBaseUpdate=o))}if(i!==null){var A=n.baseState;u=0,S=p=o=null,s=i;do{var y=s.lane&-536870913,b=y!==s.lane;if(b?(te&y)===y:(l&y)===y){y!==0&&y===xl&&(ec=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var U=e,Q=s;y=a;var ye=t;switch(Q.tag){case 1:if(U=Q.payload,typeof U=="function"){A=U.call(ye,A,y);break e}A=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=Q.payload,y=typeof U=="function"?U.call(ye,A,y):U,y==null)break e;A=G({},A,y);break e;case 2:yt=!0}}y=s.callback,y!==null&&(e.flags|=64,b&&(e.flags|=8192),b=n.callbacks,b===null?n.callbacks=[y]:b.push(y))}else b={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(p=S=b,o=A):S=S.next=b,u|=y;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;b=s,s=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);S===null&&(o=A),n.baseState=o,n.firstBaseUpdate=p,n.lastBaseUpdate=S,i===null&&(n.shared.lanes=0),At|=u,e.lanes=u,e.memoizedState=A}}function Fs(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Ws(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Fs(t[e],a)}var Nl=r(null),vi=r(0);function $s(e,a){e=ct,j(vi,e),j(Nl,a),ct=e|a.baseLanes}function ac(){j(vi,ct),j(Nl,Nl.current)}function tc(){ct=vi.current,g(Nl),g(vi)}var va=r(null),Ra=null;function St(e){var a=e.alternate;j(Ce,Ce.current&1),j(va,e),Ra===null&&(a===null||Nl.current!==null||a.memoizedState!==null)&&(Ra=e)}function lc(e){j(Ce,Ce.current),j(va,e),Ra===null&&(Ra=e)}function Is(e){e.tag===22?(j(Ce,Ce.current),j(va,e),Ra===null&&(Ra=e)):zt()}function zt(){j(Ce,Ce.current),j(va,va.current)}function pa(e){g(va),Ra===e&&(Ra=null),g(Ce)}var Ce=r(0);function pi(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||sr(t)||or(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Pa=0,K=null,ve=null,we=null,yi=!1,Al=!1,$t=!1,bi=0,mn=0,Tl=null,hh=0;function Me(){throw Error(d(321))}function nc(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!ha(e[t],a[t]))return!1;return!0}function ic(e,a,t,l,n,i){return Pa=i,K=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=e===null||e.memoizedState===null?Ho:xc,$t=!1,i=t(l,n),$t=!1,Al&&(i=eo(a,t,l,n)),Ps(e),i}function Ps(e){z.H=vn;var a=ve!==null&&ve.next!==null;if(Pa=0,we=ve=K=null,yi=!1,mn=0,Tl=null,a)throw Error(d(300));e===null||Ue||(e=e.dependencies,e!==null&&si(e)&&(Ue=!0))}function eo(e,a,t,l){K=e;var n=0;do{if(Al&&(Tl=null),mn=0,Al=!1,25<=n)throw Error(d(301));if(n+=1,we=ve=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Bo,i=a(t,l)}while(Al);return i}function gh(){var e=z.H,a=e.useState()[0];return a=typeof a.then=="function"?hn(a):a,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(K.flags|=1024),a}function uc(){var e=bi!==0;return bi=0,e}function cc(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function rc(e){if(yi){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}yi=!1}Pa=0,we=ve=K=null,Al=!1,mn=bi=0,Tl=null}function aa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?K.memoizedState=we=e:we=we.next=e,we}function _e(){if(ve===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var a=we===null?K.memoizedState:we.next;if(a!==null)we=a,ve=e;else{if(e===null)throw K.alternate===null?Error(d(467)):Error(d(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?K.memoizedState=we=e:we=we.next=e}return we}function xi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hn(e){var a=mn;return mn+=1,Tl===null&&(Tl=[]),e=Vs(Tl,e,a),a=K,(we===null?a.memoizedState:we.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?Ho:xc),e}function Si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hn(e);if(e.$$typeof===De)return Ve(e)}throw Error(d(438,String(e)))}function sc(e){var a=null,t=K.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=K.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=xi(),K.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=ot;return a.index++,t}function et(e,a){return typeof a=="function"?a(e):a}function zi(e){var a=_e();return oc(a,ve,e)}function oc(e,a,t){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=t;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}a.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{a=n.next;var s=u=null,o=null,p=a,S=!1;do{var A=p.lane&-536870913;if(A!==p.lane?(te&A)===A:(Pa&A)===A){var y=p.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),A===xl&&(S=!0);else if((Pa&y)===y){p=p.next,y===xl&&(S=!0);continue}else A={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(s=o=A,u=i):o=o.next=A,K.lanes|=y,At|=y;A=p.action,$t&&t(i,A),i=p.hasEagerState?p.eagerState:t(i,A)}else y={lane:A,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(s=o=y,u=i):o=o.next=y,K.lanes|=A,At|=A;p=p.next}while(p!==null&&p!==a);if(o===null?u=i:o.next=s,!ha(i,e.memoizedState)&&(Ue=!0,S&&(t=Sl,t!==null)))throw t;e.memoizedState=i,e.baseState=u,e.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function fc(e){var a=_e(),t=a.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var l=t.dispatch,n=t.pending,i=a.memoizedState;if(n!==null){t.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ha(i,a.memoizedState)||(Ue=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,l]}function ao(e,a,t){var l=K,n=_e(),i=ue;if(i){if(t===void 0)throw Error(d(407));t=t()}else t=a();var u=!ha((ve||n).memoizedState,t);if(u&&(n.memoizedState=t,Ue=!0),n=n.queue,hc(no.bind(null,l,n,e),[e]),n.getSnapshot!==a||u||we!==null&&we.memoizedState.tag&1){if(l.flags|=2048,Ml(9,{destroy:void 0},lo.bind(null,l,n,t,a),null),be===null)throw Error(d(349));i||(Pa&127)!==0||to(l,a,t)}return t}function to(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=K.updateQueue,a===null?(a=xi(),K.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function lo(e,a,t,l){a.value=t,a.getSnapshot=l,io(a)&&uo(e)}function no(e,a,t){return t(function(){io(a)&&uo(e)})}function io(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!ha(e,t)}catch{return!0}}function uo(e){var a=Lt(e,2);a!==null&&oa(a,e,2)}function dc(e){var a=aa();if(typeof e=="function"){var t=e;if(e=t(),$t){ft(!0);try{t()}finally{ft(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:e},a}function co(e,a,t,l){return e.baseState=t,oc(e,ve,typeof l=="function"?l:et)}function vh(e,a,t,l,n){if(Ai(e))throw Error(d(485));if(e=a.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?t(!0):i.isTransition=!1,l(i),t=a.pending,t===null?(i.next=a.pending=i,ro(a,i)):(i.next=t.next,a.pending=t.next=i)}}function ro(e,a){var t=a.action,l=a.payload,n=e.state;if(a.isTransition){var i=z.T,u={};z.T=u;try{var s=t(n,l),o=z.S;o!==null&&o(u,s),so(e,a,s)}catch(p){mc(e,a,p)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=t(n,l),so(e,a,i)}catch(p){mc(e,a,p)}}function so(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){oo(e,a,l)},function(l){return mc(e,a,l)}):oo(e,a,t)}function oo(e,a,t){a.status="fulfilled",a.value=t,fo(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,ro(e,t)))}function mc(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,fo(a),a=a.next;while(a!==l)}e.action=null}function fo(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function mo(e,a){return a}function ho(e,a){if(ue){var t=be.formState;if(t!==null){e:{var l=K;if(ue){if(Se){a:{for(var n=Se,i=Oa;n.nodeType!==8;){if(!i){n=null;break a}if(n=wa(n.nextSibling),n===null){n=null;break a}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Se=wa(n.nextSibling),l=n.data==="F!";break e}}vt(l)}l=!1}l&&(a=t[0])}}return t=aa(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:a},t.queue=l,t=Ro.bind(null,K,l),l.dispatch=t,l=dc(!1),i=bc.bind(null,K,!1,l.queue),l=aa(),n={state:a,dispatch:null,action:e,pending:null},l.queue=n,t=vh.bind(null,K,n,i,t),n.dispatch=t,l.memoizedState=e,[a,t,!1]}function go(e){var a=_e();return vo(a,ve,e)}function vo(e,a,t){if(a=oc(e,a,mo)[0],e=zi(et)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=hn(a)}catch(u){throw u===zl?di:u}else l=a;a=_e();var n=a.queue,i=n.dispatch;return t!==a.memoizedState&&(K.flags|=2048,Ml(9,{destroy:void 0},ph.bind(null,n,t),null)),[l,i,e]}function ph(e,a){e.action=a}function po(e){var a=_e(),t=ve;if(t!==null)return vo(a,t,e);_e(),a=a.memoizedState,t=_e();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function Ml(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=K.updateQueue,a===null&&(a=xi(),K.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function yo(){return _e().memoizedState}function ji(e,a,t,l){var n=aa();K.flags|=e,n.memoizedState=Ml(1|a,{destroy:void 0},t,l===void 0?null:l)}function Ni(e,a,t,l){var n=_e();l=l===void 0?null:l;var i=n.memoizedState.inst;ve!==null&&l!==null&&nc(l,ve.memoizedState.deps)?n.memoizedState=Ml(a,i,t,l):(K.flags|=e,n.memoizedState=Ml(1|a,i,t,l))}function bo(e,a){ji(8390656,8,e,a)}function hc(e,a){Ni(2048,8,e,a)}function yh(e){K.flags|=4;var a=K.updateQueue;if(a===null)a=xi(),K.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function xo(e){var a=_e().memoizedState;return yh({ref:a,nextImpl:e}),function(){if((se&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function So(e,a){return Ni(4,2,e,a)}function zo(e,a){return Ni(4,4,e,a)}function jo(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function No(e,a,t){t=t!=null?t.concat([e]):null,Ni(4,4,jo.bind(null,a,e),t)}function gc(){}function Ao(e,a){var t=_e();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&nc(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function To(e,a){var t=_e();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&nc(a,l[1]))return l[0];if(l=e(),$t){ft(!0);try{e()}finally{ft(!1)}}return t.memoizedState=[l,a],l}function vc(e,a,t){return t===void 0||(Pa&1073741824)!==0&&(te&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Ef(),K.lanes|=e,At|=e,t)}function Mo(e,a,t,l){return ha(t,a)?t:Nl.current!==null?(e=vc(e,t,l),ha(e,a)||(Ue=!0),e):(Pa&42)===0||(Pa&1073741824)!==0&&(te&261930)===0?(Ue=!0,e.memoizedState=t):(e=Ef(),K.lanes|=e,At|=e,a)}function Eo(e,a,t,l,n){var i=D.p;D.p=i!==0&&8>i?i:8;var u=z.T,s={};z.T=s,bc(e,!1,a,t);try{var o=n(),p=z.S;if(p!==null&&p(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var S=mh(o,l);gn(e,a,S,xa(e))}else gn(e,a,l,xa(e))}catch(A){gn(e,a,{then:function(){},status:"rejected",reason:A},xa())}finally{D.p=i,u!==null&&s.types!==null&&(u.types=s.types),z.T=u}}function bh(){}function pc(e,a,t,l){if(e.tag!==5)throw Error(d(476));var n=Co(e).queue;Eo(e,n,a,V,t===null?bh:function(){return _o(e),t(l)})}function Co(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:V},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function _o(e){var a=Co(e);a.next===null&&(a=e.alternate.memoizedState),gn(e,a.next.queue,{},xa())}function yc(){return Ve(On)}function Do(){return _e().memoizedState}function Oo(){return _e().memoizedState}function xh(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=xa();e=bt(t);var l=xt(a,e,t);l!==null&&(oa(l,a,t),on(l,a,t)),a={cache:Ku()},e.payload=a;return}a=a.return}}function Sh(e,a,t){var l=xa();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ai(e)?wo(a,t):(t=Hu(e,a,t,l),t!==null&&(oa(t,e,l),Uo(t,a,l)))}function Ro(e,a,t){var l=xa();gn(e,a,t,l)}function gn(e,a,t,l){var n={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ai(e))wo(a,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var u=a.lastRenderedState,s=i(u,t);if(n.hasEagerState=!0,n.eagerState=s,ha(s,u))return ii(e,a,n,0),be===null&&ni(),!1}catch{}finally{}if(t=Hu(e,a,n,l),t!==null)return oa(t,e,l),Uo(t,a,l),!0}return!1}function bc(e,a,t,l){if(l={lane:2,revertLane:$c(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ai(e)){if(a)throw Error(d(479))}else a=Hu(e,t,l,2),a!==null&&oa(a,e,2)}function Ai(e){var a=e.alternate;return e===K||a!==null&&a===K}function wo(e,a){Al=yi=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Uo(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,qr(e,t)}}var vn={readContext:Ve,use:Si,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};vn.useEffectEvent=Me;var Ho={readContext:Ve,use:Si,useCallback:function(e,a){return aa().memoizedState=[e,a===void 0?null:a],e},useContext:Ve,useEffect:bo,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,ji(4194308,4,jo.bind(null,a,e),t)},useLayoutEffect:function(e,a){return ji(4194308,4,e,a)},useInsertionEffect:function(e,a){ji(4,2,e,a)},useMemo:function(e,a){var t=aa();a=a===void 0?null:a;var l=e();if($t){ft(!0);try{e()}finally{ft(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=aa();if(t!==void 0){var n=t(a);if($t){ft(!0);try{t(a)}finally{ft(!1)}}}else n=a;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Sh.bind(null,K,e),[l.memoizedState,e]},useRef:function(e){var a=aa();return e={current:e},a.memoizedState=e},useState:function(e){e=dc(e);var a=e.queue,t=Ro.bind(null,K,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:gc,useDeferredValue:function(e,a){var t=aa();return vc(t,e,a)},useTransition:function(){var e=dc(!1);return e=Eo.bind(null,K,e.queue,!0,!1),aa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=K,n=aa();if(ue){if(t===void 0)throw Error(d(407));t=t()}else{if(t=a(),be===null)throw Error(d(349));(te&127)!==0||to(l,a,t)}n.memoizedState=t;var i={value:t,getSnapshot:a};return n.queue=i,bo(no.bind(null,l,i,e),[e]),l.flags|=2048,Ml(9,{destroy:void 0},lo.bind(null,l,i,t,a),null),t},useId:function(){var e=aa(),a=be.identifierPrefix;if(ue){var t=La,l=Ga;t=(l&~(1<<32-ma(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=bi++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=hh++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:yc,useFormState:ho,useActionState:ho,useOptimistic:function(e){var a=aa();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=bc.bind(null,K,!0,t),t.dispatch=a,[e,a]},useMemoCache:sc,useCacheRefresh:function(){return aa().memoizedState=xh.bind(null,K)},useEffectEvent:function(e){var a=aa(),t={impl:e};return a.memoizedState=t,function(){if((se&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},xc={readContext:Ve,use:Si,useCallback:Ao,useContext:Ve,useEffect:hc,useImperativeHandle:No,useInsertionEffect:So,useLayoutEffect:zo,useMemo:To,useReducer:zi,useRef:yo,useState:function(){return zi(et)},useDebugValue:gc,useDeferredValue:function(e,a){var t=_e();return Mo(t,ve.memoizedState,e,a)},useTransition:function(){var e=zi(et)[0],a=_e().memoizedState;return[typeof e=="boolean"?e:hn(e),a]},useSyncExternalStore:ao,useId:Do,useHostTransitionStatus:yc,useFormState:go,useActionState:go,useOptimistic:function(e,a){var t=_e();return co(t,ve,e,a)},useMemoCache:sc,useCacheRefresh:Oo};xc.useEffectEvent=xo;var Bo={readContext:Ve,use:Si,useCallback:Ao,useContext:Ve,useEffect:hc,useImperativeHandle:No,useInsertionEffect:So,useLayoutEffect:zo,useMemo:To,useReducer:fc,useRef:yo,useState:function(){return fc(et)},useDebugValue:gc,useDeferredValue:function(e,a){var t=_e();return ve===null?vc(t,e,a):Mo(t,ve.memoizedState,e,a)},useTransition:function(){var e=fc(et)[0],a=_e().memoizedState;return[typeof e=="boolean"?e:hn(e),a]},useSyncExternalStore:ao,useId:Do,useHostTransitionStatus:yc,useFormState:po,useActionState:po,useOptimistic:function(e,a){var t=_e();return ve!==null?co(t,ve,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:sc,useCacheRefresh:Oo};Bo.useEffectEvent=xo;function Sc(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:G({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var zc={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=xa(),n=bt(l);n.payload=a,t!=null&&(n.callback=t),a=xt(e,n,l),a!==null&&(oa(a,e,l),on(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=xa(),n=bt(l);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=xt(e,n,l),a!==null&&(oa(a,e,l),on(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=xa(),l=bt(t);l.tag=2,a!=null&&(l.callback=a),a=xt(e,l,t),a!==null&&(oa(a,e,t),on(a,e,t))}};function ko(e,a,t,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):a.prototype&&a.prototype.isPureReactComponent?!an(t,l)||!an(n,i):!0}function qo(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&zc.enqueueReplaceState(a,a.state,null)}function It(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=G({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function Yo(e){li(e)}function Go(e){console.error(e)}function Lo(e){li(e)}function Ti(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Qo(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function jc(e,a,t){return t=bt(t),t.tag=3,t.payload={element:null},t.callback=function(){Ti(e,a)},t}function Vo(e){return e=bt(e),e.tag=3,e}function Xo(e,a,t,l){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Qo(a,t,l)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Qo(a,t,l),typeof n!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function zh(e,a,t,l,n){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&bl(a,t,n,!0),t=va.current,t!==null){switch(t.tag){case 31:case 13:return Ra===null?ki():t.alternate===null&&Ee===0&&(Ee=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===mi?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Jc(e,l,n)),!1;case 22:return t.flags|=65536,l===mi?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Jc(e,l,n)),!1}throw Error(d(435,t.tag))}return Jc(e,l,n),ki(),!1}if(ue)return a=va.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==Lu&&(e=Error(d(422),{cause:l}),nn(Ca(e,t)))):(l!==Lu&&(a=Error(d(423),{cause:l}),nn(Ca(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ca(l,t),n=jc(e.stateNode,l,n),Pu(e,n),Ee!==4&&(Ee=2)),!1;var i=Error(d(520),{cause:l});if(i=Ca(i,t),Nn===null?Nn=[i]:Nn.push(i),Ee!==4&&(Ee=2),a===null)return!0;l=Ca(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=jc(t.stateNode,l,e),Pu(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Tt===null||!Tt.has(i))))return t.flags|=65536,n&=-n,t.lanes|=n,n=Vo(n),Xo(n,e,t,l),Pu(t,n),!1}t=t.return}while(t!==null);return!1}var Nc=Error(d(461)),Ue=!1;function Xe(e,a,t,l){a.child=e===null?Js(a,null,t,l):Wt(a,e.child,t,l)}function Zo(e,a,t,l,n){t=t.render;var i=a.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return Zt(a),l=ic(e,a,t,u,i,n),s=uc(),e!==null&&!Ue?(cc(e,a,n),at(e,a,n)):(ue&&s&&Yu(a),a.flags|=1,Xe(e,a,l,n),a.child)}function Ko(e,a,t,l,n){if(e===null){var i=t.type;return typeof i=="function"&&!Bu(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,Jo(e,a,i,l,n)):(e=ci(t.type,null,l,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!Oc(e,n)){var u=i.memoizedProps;if(t=t.compare,t=t!==null?t:an,t(u,l)&&e.ref===a.ref)return at(e,a,n)}return a.flags|=1,e=Fa(i,l),e.ref=a.ref,e.return=a,a.child=e}function Jo(e,a,t,l,n){if(e!==null){var i=e.memoizedProps;if(an(i,l)&&e.ref===a.ref)if(Ue=!1,a.pendingProps=l=i,Oc(e,n))(e.flags&131072)!==0&&(Ue=!0);else return a.lanes=e.lanes,at(e,a,n)}return Ac(e,a,t,l,n)}function Fo(e,a,t,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(l=a.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,a.child=null;return Wo(e,a,i,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&fi(a,i!==null?i.cachePool:null),i!==null?$s(a,i):ac(),Is(a);else return l=a.lanes=536870912,Wo(e,a,i!==null?i.baseLanes|t:t,t,l)}else i!==null?(fi(a,i.cachePool),$s(a,i),zt(),a.memoizedState=null):(e!==null&&fi(a,null),ac(),zt());return Xe(e,a,n,t),a.child}function pn(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Wo(e,a,t,l,n){var i=Fu();return i=i===null?null:{parent:Re._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&fi(a,null),ac(),Is(a),e!==null&&bl(e,a,l,!0),a.childLanes=n,null}function Mi(e,a){return a=Ci({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function $o(e,a,t){return Wt(a,e.child,null,t),e=Mi(a,a.pendingProps),e.flags|=2,pa(a),a.memoizedState=null,e}function jh(e,a,t){var l=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ue){if(l.mode==="hidden")return e=Mi(a,l),a.lanes=536870912,pn(null,e);if(lc(a),(e=Se)?(e=od(e,Oa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ht!==null?{id:Ga,overflow:La}:null,retryLane:536870912,hydrationErrors:null},t=Rs(e),t.return=a,a.child=t,Qe=a,Se=null)):e=null,e===null)throw vt(a);return a.lanes=536870912,null}return Mi(a,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(lc(a),n)if(a.flags&256)a.flags&=-257,a=$o(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(Ue||bl(e,a,t,!1),n=(t&e.childLanes)!==0,Ue||n){if(l=be,l!==null&&(u=Yr(l,t),u!==0&&u!==i.retryLane))throw i.retryLane=u,Lt(e,u),oa(l,e,u),Nc;ki(),a=$o(e,a,t)}else e=i.treeContext,Se=wa(u.nextSibling),Qe=a,ue=!0,gt=null,Oa=!1,e!==null&&Hs(a,e),a=Mi(a,l),a.flags|=4096;return a}return e=Fa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Ei(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Ac(e,a,t,l,n){return Zt(a),t=ic(e,a,t,l,void 0,n),l=uc(),e!==null&&!Ue?(cc(e,a,n),at(e,a,n)):(ue&&l&&Yu(a),a.flags|=1,Xe(e,a,t,n),a.child)}function Io(e,a,t,l,n,i){return Zt(a),a.updateQueue=null,t=eo(a,l,t,n),Ps(e),l=uc(),e!==null&&!Ue?(cc(e,a,i),at(e,a,i)):(ue&&l&&Yu(a),a.flags|=1,Xe(e,a,t,i),a.child)}function Po(e,a,t,l,n){if(Zt(a),a.stateNode===null){var i=gl,u=t.contextType;typeof u=="object"&&u!==null&&(i=Ve(u)),i=new t(l,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zc,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=l,i.state=a.memoizedState,i.refs={},$u(a),u=t.contextType,i.context=typeof u=="object"&&u!==null?Ve(u):gl,i.state=a.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Sc(a,t,u,l),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&zc.enqueueReplaceState(i,i.state,null),dn(a,l,i,n),fn(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){i=a.stateNode;var s=a.memoizedProps,o=It(t,s);i.props=o;var p=i.context,S=t.contextType;u=gl,typeof S=="object"&&S!==null&&(u=Ve(S));var A=t.getDerivedStateFromProps;S=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=a.pendingProps!==s,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||p!==u)&&qo(a,i,l,u),yt=!1;var y=a.memoizedState;i.state=y,dn(a,l,i,n),fn(),p=a.memoizedState,s||y!==p||yt?(typeof A=="function"&&(Sc(a,t,A,l),p=a.memoizedState),(o=yt||ko(a,t,o,l,y,p,u))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=p),i.props=l,i.state=p,i.context=u,l=o):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{i=a.stateNode,Iu(e,a),u=a.memoizedProps,S=It(t,u),i.props=S,A=a.pendingProps,y=i.context,p=t.contextType,o=gl,typeof p=="object"&&p!==null&&(o=Ve(p)),s=t.getDerivedStateFromProps,(p=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||y!==o)&&qo(a,i,l,o),yt=!1,y=a.memoizedState,i.state=y,dn(a,l,i,n),fn();var b=a.memoizedState;u!==A||y!==b||yt||e!==null&&e.dependencies!==null&&si(e.dependencies)?(typeof s=="function"&&(Sc(a,t,s,l),b=a.memoizedState),(S=yt||ko(a,t,S,l,y,b,o)||e!==null&&e.dependencies!==null&&si(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,b,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,b,o)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=b),i.props=l,i.state=b,i.context=o,l=S):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(a.flags|=1024),l=!1)}return i=l,Ei(e,a),l=(a.flags&128)!==0,i||l?(i=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&l?(a.child=Wt(a,e.child,null,n),a.child=Wt(a,null,t,n)):Xe(e,a,t,n),a.memoizedState=i.state,e=a.child):e=at(e,a,n),e}function ef(e,a,t,l){return Vt(),a.flags|=256,Xe(e,a,t,l),a.child}var Tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mc(e){return{baseLanes:e,cachePool:Ls()}}function Ec(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=ba),e}function af(e,a,t){var l=a.pendingProps,n=!1,i=(a.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),u&&(n=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(ue){if(n?St(a):zt(),(e=Se)?(e=od(e,Oa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:ht!==null?{id:Ga,overflow:La}:null,retryLane:536870912,hydrationErrors:null},t=Rs(e),t.return=a,a.child=t,Qe=a,Se=null)):e=null,e===null)throw vt(a);return or(e)?a.lanes=32:a.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(zt(),n=a.mode,s=Ci({mode:"hidden",children:s},n),l=Qt(l,n,t,null),s.return=a,l.return=a,s.sibling=l,a.child=s,l=a.child,l.memoizedState=Mc(t),l.childLanes=Ec(e,u,t),a.memoizedState=Tc,pn(null,l)):(St(a),Cc(a,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)a.flags&256?(St(a),a.flags&=-257,a=_c(e,a,t)):a.memoizedState!==null?(zt(),a.child=e.child,a.flags|=128,a=null):(zt(),s=l.fallback,n=a.mode,l=Ci({mode:"visible",children:l.children},n),s=Qt(s,n,t,null),s.flags|=2,l.return=a,s.return=a,l.sibling=s,a.child=l,Wt(a,e.child,null,t),l=a.child,l.memoizedState=Mc(t),l.childLanes=Ec(e,u,t),a.memoizedState=Tc,a=pn(null,l));else if(St(a),or(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var p=u.dgst;u=p,l=Error(d(419)),l.stack="",l.digest=u,nn({value:l,source:null,stack:null}),a=_c(e,a,t)}else if(Ue||bl(e,a,t,!1),u=(t&e.childLanes)!==0,Ue||u){if(u=be,u!==null&&(l=Yr(u,t),l!==0&&l!==o.retryLane))throw o.retryLane=l,Lt(e,l),oa(u,e,l),Nc;sr(s)||ki(),a=_c(e,a,t)}else sr(s)?(a.flags|=192,a.child=e.child,a=null):(e=o.treeContext,Se=wa(s.nextSibling),Qe=a,ue=!0,gt=null,Oa=!1,e!==null&&Hs(a,e),a=Cc(a,l.children),a.flags|=4096);return a}return n?(zt(),s=l.fallback,n=a.mode,o=e.child,p=o.sibling,l=Fa(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,p!==null?s=Fa(p,s):(s=Qt(s,n,t,null),s.flags|=2),s.return=a,l.return=a,l.sibling=s,a.child=l,pn(null,l),l=a.child,s=e.child.memoizedState,s===null?s=Mc(t):(n=s.cachePool,n!==null?(o=Re._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Ls(),s={baseLanes:s.baseLanes|t,cachePool:n}),l.memoizedState=s,l.childLanes=Ec(e,u,t),a.memoizedState=Tc,pn(e.child,l)):(St(a),t=e.child,e=t.sibling,t=Fa(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=t,a.memoizedState=null,t)}function Cc(e,a){return a=Ci({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Ci(e,a){return e=ga(22,e,null,a),e.lanes=0,e}function _c(e,a,t){return Wt(a,e.child,null,t),e=Cc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function tf(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Xu(e.return,a,t)}function Dc(e,a,t,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n,treeForkCount:i}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=t,u.tailMode=n,u.treeForkCount=i)}function lf(e,a,t){var l=a.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Ce.current,s=(u&2)!==0;if(s?(u=u&1|2,a.flags|=128):u&=1,j(Ce,u),Xe(e,a,l,t),l=ue?ln:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tf(e,t,a);else if(e.tag===19)tf(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&pi(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),Dc(a,!1,n,t,i,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&pi(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}Dc(a,!0,t,null,i,l);break;case"together":Dc(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function at(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),At|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(bl(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,t=Fa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Fa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Oc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&si(e)))}function Nh(e,a,t){switch(a.tag){case 3:L(a,a.stateNode.containerInfo),pt(a,Re,e.memoizedState.cache),Vt();break;case 27:case 5:ge(a);break;case 4:L(a,a.stateNode.containerInfo);break;case 10:pt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,lc(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(St(a),a.flags|=128,null):(t&a.child.childLanes)!==0?af(e,a,t):(St(a),e=at(e,a,t),e!==null?e.sibling:null);St(a);break;case 19:var n=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(bl(e,a,t,!1),l=(t&a.childLanes)!==0),n){if(l)return lf(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),j(Ce,Ce.current),l)break;return null;case 22:return a.lanes=0,Fo(e,a,t,a.pendingProps);case 24:pt(a,Re,e.memoizedState.cache)}return at(e,a,t)}function nf(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ue=!0;else{if(!Oc(e,t)&&(a.flags&128)===0)return Ue=!1,Nh(e,a,t);Ue=(e.flags&131072)!==0}else Ue=!1,ue&&(a.flags&1048576)!==0&&Us(a,ln,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=Jt(a.elementType),a.type=e,typeof e=="function")Bu(e)?(l=It(e,l),a.tag=1,a=Po(null,a,e,l,t)):(a.tag=0,a=Ac(null,a,e,l,t));else{if(e!=null){var n=e.$$typeof;if(n===ta){a.tag=11,a=Zo(null,a,e,l,t);break e}else if(n===P){a.tag=14,a=Ko(null,a,e,l,t);break e}}throw a=Na(e)||e,Error(d(306,a,""))}}return a;case 0:return Ac(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,n=It(l,a.pendingProps),Po(e,a,l,n,t);case 3:e:{if(L(a,a.stateNode.containerInfo),e===null)throw Error(d(387));l=a.pendingProps;var i=a.memoizedState;n=i.element,Iu(e,a),dn(a,l,null,t);var u=a.memoizedState;if(l=u.cache,pt(a,Re,l),l!==i.cache&&Zu(a,[Re],t,!0),fn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=ef(e,a,l,t);break e}else if(l!==n){n=Ca(Error(d(424)),a),nn(n),a=ef(e,a,l,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=wa(e.firstChild),Qe=a,ue=!0,gt=null,Oa=!0,t=Js(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Vt(),l===n){a=at(e,a,t);break e}Xe(e,a,l,t)}a=a.child}return a;case 26:return Ei(e,a),e===null?(t=vd(a.type,null,a.pendingProps,null))?a.memoizedState=t:ue||(t=a.type,e=a.pendingProps,l=Xi(w.current).createElement(t),l[Le]=a,l[na]=e,Ze(l,t,e),qe(l),a.stateNode=l):a.memoizedState=vd(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return ge(a),e===null&&ue&&(l=a.stateNode=md(a.type,a.pendingProps,w.current),Qe=a,Oa=!0,n=Se,_t(a.type)?(fr=n,Se=wa(l.firstChild)):Se=n),Xe(e,a,a.pendingProps.children,t),Ei(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ue&&((n=l=Se)&&(l=e0(l,a.type,a.pendingProps,Oa),l!==null?(a.stateNode=l,Qe=a,Se=wa(l.firstChild),Oa=!1,n=!0):n=!1),n||vt(a)),ge(a),n=a.type,i=a.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,ur(n,i)?l=null:u!==null&&ur(n,u)&&(a.flags|=32),a.memoizedState!==null&&(n=ic(e,a,gh,null,null,t),On._currentValue=n),Ei(e,a),Xe(e,a,l,t),a.child;case 6:return e===null&&ue&&((e=t=Se)&&(t=a0(t,a.pendingProps,Oa),t!==null?(a.stateNode=t,Qe=a,Se=null,e=!0):e=!1),e||vt(a)),null;case 13:return af(e,a,t);case 4:return L(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Wt(a,null,l,t):Xe(e,a,l,t),a.child;case 11:return Zo(e,a,a.type,a.pendingProps,t);case 7:return Xe(e,a,a.pendingProps,t),a.child;case 8:return Xe(e,a,a.pendingProps.children,t),a.child;case 12:return Xe(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,pt(a,a.type,l.value),Xe(e,a,l.children,t),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,Zt(a),n=Ve(n),l=l(n),a.flags|=1,Xe(e,a,l,t),a.child;case 14:return Ko(e,a,a.type,a.pendingProps,t);case 15:return Jo(e,a,a.type,a.pendingProps,t);case 19:return lf(e,a,t);case 31:return jh(e,a,t);case 22:return Fo(e,a,t,a.pendingProps);case 24:return Zt(a),l=Ve(Re),e===null?(n=Fu(),n===null&&(n=be,i=Ku(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=t),n=i),a.memoizedState={parent:l,cache:n},$u(a),pt(a,Re,n)):((e.lanes&t)!==0&&(Iu(e,a),dn(a,null,null,t),fn()),n=e.memoizedState,i=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),pt(a,Re,l)):(l=i.cache,pt(a,Re,l),l!==n.cache&&Zu(a,[Re],t,!0))),Xe(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function tt(e){e.flags|=4}function Rc(e,a,t,l,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Of())e.flags|=8192;else throw Ft=mi,Wu}else e.flags&=-16777217}function uf(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sd(a))if(Of())e.flags|=8192;else throw Ft=mi,Wu}function _i(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Br():536870912,e.lanes|=a,Dl|=a)}function yn(e,a){if(!ue)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function Ah(e,a,t){var l=a.pendingProps;switch(Gu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(a),null;case 1:return ze(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Ia(Re),X(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(yl(a)?tt(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Qu())),ze(a),null;case 26:var n=a.type,i=a.memoizedState;return e===null?(tt(a),i!==null?(ze(a),uf(a,i)):(ze(a),Rc(a,n,null,l,t))):i?i!==e.memoizedState?(tt(a),ze(a),uf(a,i)):(ze(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&tt(a),ze(a),Rc(a,n,e,l,t)),null;case 27:if(fe(a),t=w.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&tt(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return ze(a),null}e=E.current,yl(a)?Bs(a):(e=md(n,l,t),a.stateNode=e,tt(a))}return ze(a),null;case 5:if(fe(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&tt(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return ze(a),null}if(i=E.current,yl(a))Bs(a);else{var u=Xi(w.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Le]=a,i[na]=l;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=i;e:switch(Ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&tt(a)}}return ze(a),Rc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&tt(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(d(166));if(e=w.current,yl(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,n=Qe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Le]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||td(e.nodeValue,t)),e||vt(a,!0)}else e=Xi(e).createTextNode(l),e[Le]=a,a.stateNode=e}return ze(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=yl(a),t!==null){if(e===null){if(!l)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Le]=a}else Vt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ze(a),e=!1}else t=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(pa(a),a):(pa(a),null);if((a.flags&128)!==0)throw Error(d(558))}return ze(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=yl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Le]=a}else Vt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ze(a),n=!1}else n=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(pa(a),a):(pa(a),null)}return pa(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),_i(a,a.updateQueue),ze(a),null);case 4:return X(),e===null&&ar(a.stateNode.containerInfo),ze(a),null;case 10:return Ia(a.type),ze(a),null;case 19:if(g(Ce),l=a.memoizedState,l===null)return ze(a),null;if(n=(a.flags&128)!==0,i=l.rendering,i===null)if(n)yn(l,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=pi(e),i!==null){for(a.flags|=128,yn(l,!1),e=i.updateQueue,a.updateQueue=e,_i(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Os(t,e),t=t.sibling;return j(Ce,Ce.current&1|2),ue&&Wa(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&We()>Ui&&(a.flags|=128,n=!0,yn(l,!1),a.lanes=4194304)}else{if(!n)if(e=pi(i),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,_i(a,e),yn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ue)return ze(a),null}else 2*We()-l.renderingStartTime>Ui&&t!==536870912&&(a.flags|=128,n=!0,yn(l,!1),a.lanes=4194304);l.isBackwards?(i.sibling=a.child,a.child=i):(e=l.last,e!==null?e.sibling=i:a.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=We(),e.sibling=null,t=Ce.current,j(Ce,n?t&1|2:t&1),ue&&Wa(a,l.treeForkCount),e):(ze(a),null);case 22:case 23:return pa(a),tc(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(ze(a),a.subtreeFlags&6&&(a.flags|=8192)):ze(a),t=a.updateQueue,t!==null&&_i(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&g(Kt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ia(Re),ze(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function Th(e,a){switch(Gu(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ia(Re),X(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return fe(a),null;case 31:if(a.memoizedState!==null){if(pa(a),a.alternate===null)throw Error(d(340));Vt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(pa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));Vt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return g(Ce),null;case 4:return X(),null;case 10:return Ia(a.type),null;case 22:case 23:return pa(a),tc(),e!==null&&g(Kt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ia(Re),null;case 25:return null;default:return null}}function cf(e,a){switch(Gu(a),a.tag){case 3:Ia(Re),X();break;case 26:case 27:case 5:fe(a);break;case 4:X();break;case 31:a.memoizedState!==null&&pa(a);break;case 13:pa(a);break;case 19:g(Ce);break;case 10:Ia(a.type);break;case 22:case 23:pa(a),tc(),e!==null&&g(Kt);break;case 24:Ia(Re)}}function bn(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var n=l.next;t=n;do{if((t.tag&e)===e){l=void 0;var i=t.create,u=t.inst;l=i(),u.destroy=l}t=t.next}while(t!==n)}}catch(s){me(a,a.return,s)}}function jt(e,a,t){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=a;var o=t,p=s;try{p()}catch(S){me(n,o,S)}}}l=l.next}while(l!==i)}}catch(S){me(a,a.return,S)}}function rf(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Ws(a,t)}catch(l){me(e,e.return,l)}}}function sf(e,a,t){t.props=It(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){me(e,a,l)}}function xn(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(n){me(e,a,n)}}function Qa(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(n){me(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){me(e,a,n)}else t.current=null}function of(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(n){me(e,e.return,n)}}function wc(e,a,t){try{var l=e.stateNode;Jh(l,e.type,t,a),l[na]=a}catch(n){me(e,e.return,n)}}function ff(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_t(e.type)||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_t(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hc(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ka));else if(l!==4&&(l===27&&_t(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(Hc(e,a,t),e=e.sibling;e!==null;)Hc(e,a,t),e=e.sibling}function Di(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&_t(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Di(e,a,t),e=e.sibling;e!==null;)Di(e,a,t),e=e.sibling}function df(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Ze(a,l,t),a[Le]=e,a[na]=t}catch(i){me(e,e.return,i)}}var lt=!1,He=!1,Bc=!1,mf=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Mh(e,a){if(e=e.containerInfo,nr=Ii,e=js(e),_u(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var u=0,s=-1,o=-1,p=0,S=0,A=e,y=null;a:for(;;){for(var b;A!==t||n!==0&&A.nodeType!==3||(s=u+n),A!==i||l!==0&&A.nodeType!==3||(o=u+l),A.nodeType===3&&(u+=A.nodeValue.length),(b=A.firstChild)!==null;)y=A,A=b;for(;;){if(A===e)break a;if(y===t&&++p===n&&(s=u),y===i&&++S===l&&(o=u),(b=A.nextSibling)!==null)break;A=y,y=A.parentNode}A=b}t=s===-1||o===-1?null:{start:s,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(ir={focusedElem:e,selectionRange:t},Ii=!1,Ye=a;Ye!==null;)if(a=Ye,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ye=e;else for(;Ye!==null;){switch(a=Ye,i=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=a,n=i.memoizedProps,i=i.memoizedState,l=t.stateNode;try{var U=It(t.type,n);e=l.getSnapshotBeforeUpdate(U,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(Q){me(t,t.return,Q)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)rr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,Ye=e;break}Ye=a.return}}function hf(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:it(e,t),l&4&&bn(5,t);break;case 1:if(it(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(u){me(t,t.return,u)}else{var n=It(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){me(t,t.return,u)}}l&64&&rf(t),l&512&&xn(t,t.return);break;case 3:if(it(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Ws(e,a)}catch(u){me(t,t.return,u)}}break;case 27:a===null&&l&4&&df(t);case 26:case 5:it(e,t),a===null&&l&4&&of(t),l&512&&xn(t,t.return);break;case 12:it(e,t);break;case 31:it(e,t),l&4&&pf(e,t);break;case 13:it(e,t),l&4&&yf(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Hh.bind(null,t),t0(e,t))));break;case 22:if(l=t.memoizedState!==null||lt,!l){a=a!==null&&a.memoizedState!==null||He,n=lt;var i=He;lt=l,(He=a)&&!i?ut(e,t,(t.subtreeFlags&8772)!==0):it(e,t),lt=n,He=i}break;case 30:break;default:it(e,t)}}function gf(e){var a=e.alternate;a!==null&&(e.alternate=null,gf(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&mu(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,ua=!1;function nt(e,a,t){for(t=t.child;t!==null;)vf(e,a,t),t=t.sibling}function vf(e,a,t){if(da&&typeof da.onCommitFiberUnmount=="function")try{da.onCommitFiberUnmount(Ht,t)}catch{}switch(t.tag){case 26:He||Qa(t,a),nt(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:He||Qa(t,a);var l=Ne,n=ua;_t(t.type)&&(Ne=t.stateNode,ua=!1),nt(e,a,t),Cn(t.stateNode),Ne=l,ua=n;break;case 5:He||Qa(t,a);case 6:if(l=Ne,n=ua,Ne=null,nt(e,a,t),Ne=l,ua=n,Ne!==null)if(ua)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(t.stateNode)}catch(i){me(t,a,i)}else try{Ne.removeChild(t.stateNode)}catch(i){me(t,a,i)}break;case 18:Ne!==null&&(ua?(e=Ne,rd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),ql(e)):rd(Ne,t.stateNode));break;case 4:l=Ne,n=ua,Ne=t.stateNode.containerInfo,ua=!0,nt(e,a,t),Ne=l,ua=n;break;case 0:case 11:case 14:case 15:jt(2,t,a),He||jt(4,t,a),nt(e,a,t);break;case 1:He||(Qa(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&sf(t,a,l)),nt(e,a,t);break;case 21:nt(e,a,t);break;case 22:He=(l=He)||t.memoizedState!==null,nt(e,a,t),He=l;break;default:nt(e,a,t)}}function pf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ql(e)}catch(t){me(a,a.return,t)}}}function yf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ql(e)}catch(t){me(a,a.return,t)}}function Eh(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new mf),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new mf),a;default:throw Error(d(435,e.tag))}}function Oi(e,a){var t=Eh(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var n=Bh.bind(null,e,l);l.then(n,n)}})}function ca(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l],i=e,u=a,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(_t(s.type)){Ne=s.stateNode,ua=!1;break e}break;case 5:Ne=s.stateNode,ua=!1;break e;case 3:case 4:Ne=s.stateNode.containerInfo,ua=!0;break e}s=s.return}if(Ne===null)throw Error(d(160));vf(i,u,n),Ne=null,ua=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)bf(a,e),a=a.sibling}var ka=null;function bf(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ca(a,e),ra(e),l&4&&(jt(3,e,e.return),bn(3,e),jt(5,e,e.return));break;case 1:ca(a,e),ra(e),l&512&&(He||t===null||Qa(t,t.return)),l&64&&lt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var n=ka;if(ca(a,e),ra(e),l&512&&(He||t===null||Qa(t,t.return)),l&4){var i=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Zl]||i[Le]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,l,t),i[Le]=e,qe(i),l=i;break e;case"link":var u=bd("link","href",n).get(l+(t.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(s,1);break a}}i=n.createElement(l),Ze(i,l,t),n.head.appendChild(i);break;case"meta":if(u=bd("meta","content",n).get(l+(t.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(s,1);break a}}i=n.createElement(l),Ze(i,l,t),n.head.appendChild(i);break;default:throw Error(d(468,l))}i[Le]=e,qe(i),l=i}e.stateNode=l}else xd(n,e.type,e.stateNode);else e.stateNode=yd(n,l,e.memoizedProps);else i!==l?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,l===null?xd(n,e.type,e.stateNode):yd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&wc(e,e.memoizedProps,t.memoizedProps)}break;case 27:ca(a,e),ra(e),l&512&&(He||t===null||Qa(t,t.return)),t!==null&&l&4&&wc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ca(a,e),ra(e),l&512&&(He||t===null||Qa(t,t.return)),e.flags&32){n=e.stateNode;try{rl(n,"")}catch(U){me(e,e.return,U)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,wc(e,n,t!==null?t.memoizedProps:n)),l&1024&&(Bc=!0);break;case 6:if(ca(a,e),ra(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(U){me(e,e.return,U)}}break;case 3:if(Ji=null,n=ka,ka=Zi(a.containerInfo),ca(a,e),ka=n,ra(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{ql(a.containerInfo)}catch(U){me(e,e.return,U)}Bc&&(Bc=!1,xf(e));break;case 4:l=ka,ka=Zi(e.stateNode.containerInfo),ca(a,e),ra(e),ka=l;break;case 12:ca(a,e),ra(e);break;case 31:ca(a,e),ra(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 13:ca(a,e),ra(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(wi=We()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 22:n=e.memoizedState!==null;var o=t!==null&&t.memoizedState!==null,p=lt,S=He;if(lt=p||n,He=S||o,ca(a,e),He=S,lt=p,ra(e),l&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||o||lt||He||Pt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){o=t=a;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=o.stateNode;var A=o.memoizedProps.style,y=A!=null&&A.hasOwnProperty("display")?A.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(U){me(o,o.return,U)}}}else if(a.tag===6){if(t===null){o=a;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(U){me(o,o.return,U)}}}else if(a.tag===18){if(t===null){o=a;try{var b=o.stateNode;n?sd(b,!0):sd(o.stateNode,!1)}catch(U){me(o,o.return,U)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Oi(e,t))));break;case 19:ca(a,e),ra(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oi(e,l)));break;case 30:break;case 21:break;default:ca(a,e),ra(e)}}function ra(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(ff(l)){t=l;break}l=l.return}if(t==null)throw Error(d(160));switch(t.tag){case 27:var n=t.stateNode,i=Uc(e);Di(e,i,n);break;case 5:var u=t.stateNode;t.flags&32&&(rl(u,""),t.flags&=-33);var s=Uc(e);Di(e,s,u);break;case 3:case 4:var o=t.stateNode.containerInfo,p=Uc(e);Hc(e,p,o);break;default:throw Error(d(161))}}catch(S){me(e,e.return,S)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function xf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;xf(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function it(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)hf(e,a.alternate,a),a=a.sibling}function Pt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:jt(4,a,a.return),Pt(a);break;case 1:Qa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&sf(a,a.return,t),Pt(a);break;case 27:Cn(a.stateNode);case 26:case 5:Qa(a,a.return),Pt(a);break;case 22:a.memoizedState===null&&Pt(a);break;case 30:Pt(a);break;default:Pt(a)}e=e.sibling}}function ut(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=e,i=a,u=i.flags;switch(i.tag){case 0:case 11:case 15:ut(n,i,t),bn(4,i);break;case 1:if(ut(n,i,t),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){me(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Fs(o[n],s)}catch(p){me(l,l.return,p)}}t&&u&64&&rf(i),xn(i,i.return);break;case 27:df(i);case 26:case 5:ut(n,i,t),t&&l===null&&u&4&&of(i),xn(i,i.return);break;case 12:ut(n,i,t);break;case 31:ut(n,i,t),t&&u&4&&pf(n,i);break;case 13:ut(n,i,t),t&&u&4&&yf(n,i);break;case 22:i.memoizedState===null&&ut(n,i,t),xn(i,i.return);break;case 30:break;default:ut(n,i,t)}a=a.sibling}}function kc(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&un(t))}function qc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&un(e))}function qa(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Sf(e,a,t,l),a=a.sibling}function Sf(e,a,t,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:qa(e,a,t,l),n&2048&&bn(9,a);break;case 1:qa(e,a,t,l);break;case 3:qa(e,a,t,l),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&un(e)));break;case 12:if(n&2048){qa(e,a,t,l),e=a.stateNode;try{var i=a.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){me(a,a.return,o)}}else qa(e,a,t,l);break;case 31:qa(e,a,t,l);break;case 13:qa(e,a,t,l);break;case 23:break;case 22:i=a.stateNode,u=a.alternate,a.memoizedState!==null?i._visibility&2?qa(e,a,t,l):Sn(e,a):i._visibility&2?qa(e,a,t,l):(i._visibility|=2,El(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),n&2048&&kc(u,a);break;case 24:qa(e,a,t,l),n&2048&&qc(a.alternate,a);break;default:qa(e,a,t,l)}}function El(e,a,t,l,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,u=a,s=t,o=l,p=u.flags;switch(u.tag){case 0:case 11:case 15:El(i,u,s,o,n),bn(8,u);break;case 23:break;case 22:var S=u.stateNode;u.memoizedState!==null?S._visibility&2?El(i,u,s,o,n):Sn(i,u):(S._visibility|=2,El(i,u,s,o,n)),n&&p&2048&&kc(u.alternate,u);break;case 24:El(i,u,s,o,n),n&&p&2048&&qc(u.alternate,u);break;default:El(i,u,s,o,n)}a=a.sibling}}function Sn(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,n=l.flags;switch(l.tag){case 22:Sn(t,l),n&2048&&kc(l.alternate,l);break;case 24:Sn(t,l),n&2048&&qc(l.alternate,l);break;default:Sn(t,l)}a=a.sibling}}var zn=8192;function Cl(e,a,t){if(e.subtreeFlags&zn)for(e=e.child;e!==null;)zf(e,a,t),e=e.sibling}function zf(e,a,t){switch(e.tag){case 26:Cl(e,a,t),e.flags&zn&&e.memoizedState!==null&&h0(t,ka,e.memoizedState,e.memoizedProps);break;case 5:Cl(e,a,t);break;case 3:case 4:var l=ka;ka=Zi(e.stateNode.containerInfo),Cl(e,a,t),ka=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=zn,zn=16777216,Cl(e,a,t),zn=l):Cl(e,a,t));break;default:Cl(e,a,t)}}function jf(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function jn(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Ye=l,Af(l,e)}jf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nf(e),e=e.sibling}function Nf(e){switch(e.tag){case 0:case 11:case 15:jn(e),e.flags&2048&&jt(9,e,e.return);break;case 3:jn(e);break;case 12:jn(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ri(e)):jn(e);break;default:jn(e)}}function Ri(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Ye=l,Af(l,e)}jf(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:jt(8,a,a.return),Ri(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Ri(a));break;default:Ri(a)}e=e.sibling}}function Af(e,a){for(;Ye!==null;){var t=Ye;switch(t.tag){case 0:case 11:case 15:jt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:un(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Ye=l;else e:for(t=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(gf(l),l===t){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var Ch={getCacheForType:function(e){var a=Ve(Re),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return Ve(Re).controller.signal}},_h=typeof WeakMap=="function"?WeakMap:Map,se=0,be=null,ee=null,te=0,de=0,ya=null,Nt=!1,_l=!1,Yc=!1,ct=0,Ee=0,At=0,el=0,Gc=0,ba=0,Dl=0,Nn=null,sa=null,Lc=!1,wi=0,Tf=0,Ui=1/0,Hi=null,Tt=null,Be=0,Mt=null,Ol=null,rt=0,Qc=0,Vc=null,Mf=null,An=0,Xc=null;function xa(){return(se&2)!==0&&te!==0?te&-te:z.T!==null?$c():Gr()}function Ef(){if(ba===0)if((te&536870912)===0||ue){var e=Vn;Vn<<=1,(Vn&3932160)===0&&(Vn=262144),ba=e}else ba=536870912;return e=va.current,e!==null&&(e.flags|=32),ba}function oa(e,a,t){(e===be&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),Et(e,te,ba,!1)),Xl(e,t),((se&2)===0||e!==be)&&(e===be&&((se&2)===0&&(el|=t),Ee===4&&Et(e,te,ba,!1)),Va(e))}function Cf(e,a,t){if((se&6)!==0)throw Error(d(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Vl(e,a),n=l?Rh(e,a):Kc(e,a,!0),i=l;do{if(n===0){_l&&!l&&Et(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!Dh(t)){n=Kc(e,a,!1),i=!1;continue}if(n===2){if(i=a,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var s=e;n=Nn;var o=s.current.memoizedState.isDehydrated;if(o&&(Rl(s,u).flags|=256),u=Kc(s,u,!1),u!==2){if(Yc&&!o){s.errorRecoveryDisabledLanes|=i,el|=i,n=4;break e}i=sa,sa=n,i!==null&&(sa===null?sa=i:sa.push.apply(sa,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Rl(e,0),Et(e,a,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:Et(l,a,ba,!Nt);break e;case 2:sa=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(n=wi+300-We(),10<n)){if(Et(l,a,ba,!Nt),Zn(l,0,!0)!==0)break e;rt=a,l.timeoutHandle=ud(_f.bind(null,l,t,sa,Hi,Lc,a,ba,el,Dl,Nt,i,"Throttled",-0,0),n);break e}_f(l,t,sa,Hi,Lc,a,ba,el,Dl,Nt,i,null,-0,0)}}break}while(!0);Va(e)}function _f(e,a,t,l,n,i,u,s,o,p,S,A,y,b){if(e.timeoutHandle=-1,A=a.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ka},zf(a,i,A);var U=(i&62914560)===i?wi-We():(i&4194048)===i?Tf-We():0;if(U=g0(A,U),U!==null){rt=i,e.cancelPendingCommit=U(kf.bind(null,e,a,i,t,l,n,u,s,o,S,A,null,y,b)),Et(e,i,u,!p);return}}kf(e,a,i,t,l,n,u,s,o)}function Dh(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var n=t[l],i=n.getSnapshot;n=n.value;try{if(!ha(i(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Et(e,a,t,l){a&=~Gc,a&=~el,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var n=a;0<n;){var i=31-ma(n),u=1<<i;l[i]=-1,n&=~u}t!==0&&kr(e,t,a)}function Bi(){return(se&6)===0?(Tn(0),!1):!0}function Zc(){if(ee!==null){if(de===0)var e=ee.return;else e=ee,$a=Xt=null,rc(e),jl=null,rn=0,e=ee;for(;e!==null;)cf(e.alternate,e),e=e.return;ee=null}}function Rl(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,$h(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),rt=0,Zc(),be=e,ee=t=Fa(e.current,null),te=a,de=0,ya=null,Nt=!1,_l=Vl(e,a),Yc=!1,Dl=ba=Gc=el=At=Ee=0,sa=Nn=null,Lc=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var n=31-ma(l),i=1<<n;a|=e[n],l&=~i}return ct=a,ni(),t}function Df(e,a){K=null,z.H=vn,a===zl||a===di?(a=Xs(),de=3):a===Wu?(a=Xs(),de=4):de=a===Nc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ya=a,ee===null&&(Ee=1,Ti(e,Ca(a,e.current)))}function Of(){var e=va.current;return e===null?!0:(te&4194048)===te?Ra===null:(te&62914560)===te||(te&536870912)!==0?e===Ra:!1}function Rf(){var e=z.H;return z.H=vn,e===null?vn:e}function wf(){var e=z.A;return z.A=Ch,e}function ki(){Ee=4,Nt||(te&4194048)!==te&&va.current!==null||(_l=!0),(At&134217727)===0&&(el&134217727)===0||be===null||Et(be,te,ba,!1)}function Kc(e,a,t){var l=se;se|=2;var n=Rf(),i=wf();(be!==e||te!==a)&&(Hi=null,Rl(e,a)),a=!1;var u=Ee;e:do try{if(de!==0&&ee!==null){var s=ee,o=ya;switch(de){case 8:Zc(),u=6;break e;case 3:case 2:case 9:case 6:va.current===null&&(a=!0);var p=de;if(de=0,ya=null,wl(e,s,o,p),t&&_l){u=0;break e}break;default:p=de,de=0,ya=null,wl(e,s,o,p)}}Oh(),u=Ee;break}catch(S){Df(e,S)}while(!0);return a&&e.shellSuspendCounter++,$a=Xt=null,se=l,z.H=n,z.A=i,ee===null&&(be=null,te=0,ni()),u}function Oh(){for(;ee!==null;)Uf(ee)}function Rh(e,a){var t=se;se|=2;var l=Rf(),n=wf();be!==e||te!==a?(Hi=null,Ui=We()+500,Rl(e,a)):_l=Vl(e,a);e:do try{if(de!==0&&ee!==null){a=ee;var i=ya;a:switch(de){case 1:de=0,ya=null,wl(e,a,i,1);break;case 2:case 9:if(Qs(i)){de=0,ya=null,Hf(a);break}a=function(){de!==2&&de!==9||be!==e||(de=7),Va(e)},i.then(a,a);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:Qs(i)?(de=0,ya=null,Hf(a)):(de=0,ya=null,wl(e,a,i,7));break;case 5:var u=null;switch(ee.tag){case 26:u=ee.memoizedState;case 5:case 27:var s=ee;if(u?Sd(u):s.stateNode.complete){de=0,ya=null;var o=s.sibling;if(o!==null)ee=o;else{var p=s.return;p!==null?(ee=p,qi(p)):ee=null}break a}}de=0,ya=null,wl(e,a,i,5);break;case 6:de=0,ya=null,wl(e,a,i,6);break;case 8:Zc(),Ee=6;break e;default:throw Error(d(462))}}wh();break}catch(S){Df(e,S)}while(!0);return $a=Xt=null,z.H=l,z.A=n,se=t,ee!==null?0:(be=null,te=0,ni(),Ee)}function wh(){for(;ee!==null&&!iu();)Uf(ee)}function Uf(e){var a=nf(e.alternate,e,ct);e.memoizedProps=e.pendingProps,a===null?qi(e):ee=a}function Hf(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Io(t,a,a.pendingProps,a.type,void 0,te);break;case 11:a=Io(t,a,a.pendingProps,a.type.render,a.ref,te);break;case 5:rc(a);default:cf(t,a),a=ee=Os(a,ct),a=nf(t,a,ct)}e.memoizedProps=e.pendingProps,a===null?qi(e):ee=a}function wl(e,a,t,l){$a=Xt=null,rc(a),jl=null,rn=0;var n=a.return;try{if(zh(e,n,a,t,te)){Ee=1,Ti(e,Ca(t,e.current)),ee=null;return}}catch(i){if(n!==null)throw ee=n,i;Ee=1,Ti(e,Ca(t,e.current)),ee=null;return}a.flags&32768?(ue||l===1?e=!0:_l||(te&536870912)!==0?e=!1:(Nt=e=!0,(l===2||l===9||l===3||l===6)&&(l=va.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bf(a,e)):qi(a)}function qi(e){var a=e;do{if((a.flags&32768)!==0){Bf(a,Nt);return}e=a.return;var t=Ah(a.alternate,a,ct);if(t!==null){ee=t;return}if(a=a.sibling,a!==null){ee=a;return}ee=a=e}while(a!==null);Ee===0&&(Ee=5)}function Bf(e,a){do{var t=Th(e.alternate,e);if(t!==null){t.flags&=32767,ee=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ee=e;return}ee=e=t}while(e!==null);Ee=6,ee=null}function kf(e,a,t,l,n,i,u,s,o){e.cancelPendingCommit=null;do Yi();while(Be!==0);if((se&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(i=a.lanes|a.childLanes,i|=Uu,mm(e,t,i,u,s,o),e===be&&(ee=be=null,te=0),Ol=a,Mt=e,rt=t,Qc=i,Vc=n,Mf=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kh(al,function(){return Qf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,n=D.p,D.p=2,u=se,se|=4;try{Mh(e,a,t)}finally{se=u,D.p=n,z.T=l}}Be=1,qf(),Yf(),Gf()}}function qf(){if(Be===1){Be=0;var e=Mt,a=Ol,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=z.T,z.T=null;var l=D.p;D.p=2;var n=se;se|=4;try{bf(a,e);var i=ir,u=js(e.containerInfo),s=i.focusedElem,o=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&zs(s.ownerDocument.documentElement,s)){if(o!==null&&_u(s)){var p=o.start,S=o.end;if(S===void 0&&(S=p),"selectionStart"in s)s.selectionStart=p,s.selectionEnd=Math.min(S,s.value.length);else{var A=s.ownerDocument||document,y=A&&A.defaultView||window;if(y.getSelection){var b=y.getSelection(),U=s.textContent.length,Q=Math.min(o.start,U),ye=o.end===void 0?Q:Math.min(o.end,U);!b.extend&&Q>ye&&(u=ye,ye=Q,Q=u);var m=Ss(s,Q),f=Ss(s,ye);if(m&&f&&(b.rangeCount!==1||b.anchorNode!==m.node||b.anchorOffset!==m.offset||b.focusNode!==f.node||b.focusOffset!==f.offset)){var v=A.createRange();v.setStart(m.node,m.offset),b.removeAllRanges(),Q>ye?(b.addRange(v),b.extend(f.node,f.offset)):(v.setEnd(f.node,f.offset),b.addRange(v))}}}}for(A=[],b=s;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<A.length;s++){var N=A[s];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Ii=!!nr,ir=nr=null}finally{se=n,D.p=l,z.T=t}}e.current=a,Be=2}}function Yf(){if(Be===2){Be=0;var e=Mt,a=Ol,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=z.T,z.T=null;var l=D.p;D.p=2;var n=se;se|=4;try{hf(e,a.alternate,a)}finally{se=n,D.p=l,z.T=t}}Be=3}}function Gf(){if(Be===4||Be===3){Be=0,uu();var e=Mt,a=Ol,t=rt,l=Mf;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Be=5:(Be=0,Ol=Mt=null,Lf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Tt=null),fu(t),a=a.stateNode,da&&typeof da.onCommitFiberRoot=="function")try{da.onCommitFiberRoot(Ht,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=z.T,n=D.p,D.p=2,z.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{z.T=a,D.p=n}}(rt&3)!==0&&Yi(),Va(e),n=e.pendingLanes,(t&261930)!==0&&(n&42)!==0?e===Xc?An++:(An=0,Xc=e):An=0,Tn(0)}}function Lf(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,un(a)))}function Yi(){return qf(),Yf(),Gf(),Qf()}function Qf(){if(Be!==5)return!1;var e=Mt,a=Qc;Qc=0;var t=fu(rt),l=z.T,n=D.p;try{D.p=32>t?32:t,z.T=null,t=Vc,Vc=null;var i=Mt,u=rt;if(Be=0,Ol=Mt=null,rt=0,(se&6)!==0)throw Error(d(331));var s=se;if(se|=4,Nf(i.current),Sf(i,i.current,u,t),se=s,Tn(0,!1),da&&typeof da.onPostCommitFiberRoot=="function")try{da.onPostCommitFiberRoot(Ht,i)}catch{}return!0}finally{D.p=n,z.T=l,Lf(e,a)}}function Vf(e,a,t){a=Ca(t,a),a=jc(e.stateNode,a,2),e=xt(e,a,2),e!==null&&(Xl(e,2),Va(e))}function me(e,a,t){if(e.tag===3)Vf(e,e,t);else for(;a!==null;){if(a.tag===3){Vf(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Tt===null||!Tt.has(l))){e=Ca(t,e),t=Vo(2),l=xt(a,t,2),l!==null&&(Xo(t,l,a,e),Xl(l,2),Va(l));break}}a=a.return}}function Jc(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new _h;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(t)||(Yc=!0,n.add(t),e=Uh.bind(null,e,a,t),a.then(e,e))}function Uh(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,be===e&&(te&t)===t&&(Ee===4||Ee===3&&(te&62914560)===te&&300>We()-wi?(se&2)===0&&Rl(e,0):Gc|=t,Dl===te&&(Dl=0)),Va(e)}function Xf(e,a){a===0&&(a=Br()),e=Lt(e,a),e!==null&&(Xl(e,a),Va(e))}function Hh(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Xf(e,t)}function Bh(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(a),Xf(e,t)}function kh(e,a){return la(e,a)}var Gi=null,Ul=null,Fc=!1,Li=!1,Wc=!1,Ct=0;function Va(e){e!==Ul&&e.next===null&&(Ul===null?Gi=Ul=e:Ul=Ul.next=e),Li=!0,Fc||(Fc=!0,Yh())}function Tn(e,a){if(!Wc&&Li){Wc=!0;do for(var t=!1,l=Gi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-ma(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Ff(l,i))}else i=te,i=Zn(l,l===be?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Vl(l,i)||(t=!0,Ff(l,i));l=l.next}while(t);Wc=!1}}function qh(){Zf()}function Zf(){Li=Fc=!1;var e=0;Ct!==0&&Wh()&&(e=Ct);for(var a=We(),t=null,l=Gi;l!==null;){var n=l.next,i=Kf(l,a);i===0?(l.next=null,t===null?Gi=n:t.next=n,n===null&&(Ul=t)):(t=l,(e!==0||(i&3)!==0)&&(Li=!0)),l=n}Be!==0&&Be!==5||Tn(e),Ct!==0&&(Ct=0)}function Kf(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ma(i),s=1<<u,o=n[u];o===-1?((s&t)===0||(s&l)!==0)&&(n[u]=dm(s,a)):o<=a&&(e.expiredLanes|=s),i&=~s}if(a=be,t=te,t=Zn(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(de===2||de===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Yl(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Vl(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&Yl(l),fu(t)){case 2:case 8:t=Gn;break;case 32:t=al;break;case 268435456:t=Ll;break;default:t=al}return l=Jf.bind(null,e),t=la(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&Yl(l),e.callbackPriority=2,e.callbackNode=null,2}function Jf(e,a){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Yi()&&e.callbackNode!==t)return null;var l=te;return l=Zn(e,e===be?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Cf(e,l,a),Kf(e,We()),e.callbackNode!=null&&e.callbackNode===t?Jf.bind(null,e):null)}function Ff(e,a){if(Yi())return null;Cf(e,a,!0)}function Yh(){Ih(function(){(se&6)!==0?la(Gl,qh):Zf()})}function $c(){if(Ct===0){var e=xl;e===0&&(e=Qn,Qn<<=1,(Qn&261888)===0&&(Qn=256)),Ct=e}return Ct}function Wf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wn(""+e)}function $f(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Gh(e,a,t,l,n){if(a==="submit"&&t&&t.stateNode===n){var i=Wf((n[na]||null).action),u=l.submitter;u&&(a=(a=u[na]||null)?Wf(a.formAction):u.getAttribute("formAction"),a!==null&&(i=a,u=null));var s=new ei("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ct!==0){var o=u?$f(n,u):new FormData(n);pc(t,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=u?$f(n,u):new FormData(n),pc(t,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Ic=0;Ic<wu.length;Ic++){var Pc=wu[Ic],Lh=Pc.toLowerCase(),Qh=Pc[0].toUpperCase()+Pc.slice(1);Ba(Lh,"on"+Qh)}Ba(Ts,"onAnimationEnd"),Ba(Ms,"onAnimationIteration"),Ba(Es,"onAnimationStart"),Ba("dblclick","onDoubleClick"),Ba("focusin","onFocus"),Ba("focusout","onBlur"),Ba(ih,"onTransitionRun"),Ba(uh,"onTransitionStart"),Ba(ch,"onTransitionCancel"),Ba(Cs,"onTransitionEnd"),ul("onMouseEnter",["mouseout","mouseover"]),ul("onMouseLeave",["mouseout","mouseover"]),ul("onPointerEnter",["pointerout","pointerover"]),ul("onPointerLeave",["pointerout","pointerover"]),kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mn));function If(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],n=l.event;l=l.listeners;e:{var i=void 0;if(a)for(var u=l.length-1;0<=u;u--){var s=l[u],o=s.instance,p=s.currentTarget;if(s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=p;try{i(n)}catch(S){li(S)}n.currentTarget=null,i=o}else for(u=0;u<l.length;u++){if(s=l[u],o=s.instance,p=s.currentTarget,s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=p;try{i(n)}catch(S){li(S)}n.currentTarget=null,i=o}}}}function ae(e,a){var t=a[du];t===void 0&&(t=a[du]=new Set);var l=e+"__bubble";t.has(l)||(Pf(a,e,2,!1),t.add(l))}function er(e,a,t){var l=0;a&&(l|=4),Pf(t,e,l,a)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Qi]){e[Qi]=!0,Vr.forEach(function(t){t!=="selectionchange"&&(Vh.has(t)||er(t,!1,e),er(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Qi]||(a[Qi]=!0,er("selectionchange",!1,a))}}function Pf(e,a,t,l){switch(Ed(a)){case 2:var n=y0;break;case 8:n=b0;break;default:n=vr}t=n.bind(null,a,t,e),n=void 0,!Su||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function tr(e,a,t,l,n){var i=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=ll(s),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){l=i=u;continue e}s=s.parentNode}}l=l.return}ts(function(){var p=i,S=bu(t),A=[];e:{var y=_s.get(e);if(y!==void 0){var b=ei,U=e;switch(e){case"keypress":if(In(t)===0)break e;case"keydown":case"keyup":b=Bm;break;case"focusin":U="focus",b=Au;break;case"focusout":U="blur",b=Au;break;case"beforeblur":case"afterblur":b=Au;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ym;break;case Ts:case Ms:case Es:b=Em;break;case Cs:b=Lm;break;case"scroll":case"scrollend":b=jm;break;case"wheel":b=Vm;break;case"copy":case"cut":case"paste":b=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=cs;break;case"toggle":case"beforetoggle":b=Zm}var Q=(a&4)!==0,ye=!Q&&(e==="scroll"||e==="scrollend"),m=Q?y!==null?y+"Capture":null:y;Q=[];for(var f=p,v;f!==null;){var N=f;if(v=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||v===null||m===null||(N=Jl(f,m),N!=null&&Q.push(En(f,N,v))),ye)break;f=f.return}0<Q.length&&(y=new b(y,U,null,t,S),A.push({event:y,listeners:Q}))}}if((a&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",y&&t!==yu&&(U=t.relatedTarget||t.fromElement)&&(ll(U)||U[tl]))break e;if((b||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,b?(U=t.relatedTarget||t.toElement,b=p,U=U?ll(U):null,U!==null&&(ye=M(U),Q=U.tag,U!==ye||Q!==5&&Q!==27&&Q!==6)&&(U=null)):(b=null,U=p),b!==U)){if(Q=is,N="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(Q=cs,N="onPointerLeave",m="onPointerEnter",f="pointer"),ye=b==null?y:Kl(b),v=U==null?y:Kl(U),y=new Q(N,f+"leave",b,t,S),y.target=ye,y.relatedTarget=v,N=null,ll(S)===p&&(Q=new Q(m,f+"enter",U,t,S),Q.target=v,Q.relatedTarget=ye,N=Q),ye=N,b&&U)a:{for(Q=Xh,m=b,f=U,v=0,N=m;N;N=Q(N))v++;N=0;for(var Y=f;Y;Y=Q(Y))N++;for(;0<v-N;)m=Q(m),v--;for(;0<N-v;)f=Q(f),N--;for(;v--;){if(m===f||f!==null&&m===f.alternate){Q=m;break a}m=Q(m),f=Q(f)}Q=null}else Q=null;b!==null&&ed(A,y,b,Q,!1),U!==null&&ye!==null&&ed(A,ye,U,Q,!0)}}e:{if(y=p?Kl(p):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var ce=gs;else if(ms(y))if(vs)ce=th;else{ce=eh;var k=Pm}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?p&&pu(p.elementType)&&(ce=gs):ce=ah;if(ce&&(ce=ce(e,p))){hs(A,ce,t,S);break e}k&&k(e,y,p),e==="focusout"&&p&&y.type==="number"&&p.memoizedProps.value!=null&&vu(y,"number",y.value)}switch(k=p?Kl(p):window,e){case"focusin":(ms(k)||k.contentEditable==="true")&&(dl=k,Du=p,tn=null);break;case"focusout":tn=Du=dl=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Ns(A,t,S);break;case"selectionchange":if(nh)break;case"keydown":case"keyup":Ns(A,t,S)}var W;if(Mu)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else fl?fs(e,t)&&(le="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(le="onCompositionStart");le&&(rs&&t.locale!=="ko"&&(fl||le!=="onCompositionStart"?le==="onCompositionEnd"&&fl&&(W=ls()):(mt=S,zu="value"in mt?mt.value:mt.textContent,fl=!0)),k=Vi(p,le),0<k.length&&(le=new us(le,e,null,t,S),A.push({event:le,listeners:k}),W?le.data=W:(W=ds(t),W!==null&&(le.data=W)))),(W=Jm?Fm(e,t):Wm(e,t))&&(le=Vi(p,"onBeforeInput"),0<le.length&&(k=new us("onBeforeInput","beforeinput",null,t,S),A.push({event:k,listeners:le}),k.data=W)),Gh(A,e,p,t,S)}If(A,a)})}function En(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Vi(e,a){for(var t=a+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Jl(e,t),n!=null&&l.unshift(En(e,n,i)),n=Jl(e,a),n!=null&&l.push(En(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Xh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ed(e,a,t,l,n){for(var i=a._reactName,u=[];t!==null&&t!==l;){var s=t,o=s.alternate,p=s.stateNode;if(s=s.tag,o!==null&&o===l)break;s!==5&&s!==26&&s!==27||p===null||(o=p,n?(p=Jl(t,i),p!=null&&u.unshift(En(t,p,o))):n||(p=Jl(t,i),p!=null&&u.push(En(t,p,o)))),t=t.return}u.length!==0&&e.push({event:a,listeners:u})}var Zh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(Zh,`
`).replace(Kh,"")}function td(e,a){return a=ad(a),ad(e)===a}function pe(e,a,t,l,n,i){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||rl(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&rl(e,""+l);break;case"className":Jn(e,"class",l);break;case"tabIndex":Jn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,t,l);break;case"style":es(e,l,i);break;case"data":if(a!=="object"){Jn(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Wn(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&pe(e,a,"name",n.name,n,null),pe(e,a,"formEncType",n.formEncType,n,null),pe(e,a,"formMethod",n.formMethod,n,null),pe(e,a,"formTarget",n.formTarget,n,null)):(pe(e,a,"encType",n.encType,n,null),pe(e,a,"method",n.method,n,null),pe(e,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Wn(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=Ka);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Wn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Kn(e,"popover",l);break;case"xlinkActuate":Za(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Za(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Za(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Za(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Za(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Za(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Za(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Za(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Za(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Sm.get(t)||t,Kn(e,t,l))}}function lr(e,a,t,l,n,i){switch(t){case"style":es(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=t}}break;case"children":typeof l=="string"?rl(e,l):(typeof l=="number"||typeof l=="bigint")&&rl(e,""+l);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ka);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),i=e[na]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(a,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,n);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Kn(e,t,l)}}}function Ze(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var l=!1,n=!1,i;for(i in t)if(t.hasOwnProperty(i)){var u=t[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:pe(e,a,i,u,t,null)}}n&&pe(e,a,"srcSet",t.srcSet,t,null),l&&pe(e,a,"src",t.src,t,null);return;case"input":ae("invalid",e);var s=i=u=n=null,o=null,p=null;for(l in t)if(t.hasOwnProperty(l)){var S=t[l];if(S!=null)switch(l){case"name":n=S;break;case"type":u=S;break;case"checked":o=S;break;case"defaultChecked":p=S;break;case"value":i=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(d(137,a));break;default:pe(e,a,l,S,t,null)}}Wr(e,i,s,o,p,u,n,!1);return;case"select":ae("invalid",e),l=u=i=null;for(n in t)if(t.hasOwnProperty(n)&&(s=t[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:pe(e,a,n,s,t,null)}a=i,t=u,e.multiple=!!l,a!=null?cl(e,!!l,a,!1):t!=null&&cl(e,!!l,t,!0);return;case"textarea":ae("invalid",e),i=n=l=null;for(u in t)if(t.hasOwnProperty(u)&&(s=t[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:pe(e,a,u,s,t,null)}Ir(e,l,n,i);return;case"option":for(o in t)if(t.hasOwnProperty(o)&&(l=t[o],l!=null))switch(o){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:pe(e,a,o,l,t,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(l=0;l<Mn.length;l++)ae(Mn[l],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in t)if(t.hasOwnProperty(p)&&(l=t[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:pe(e,a,p,l,t,null)}return;default:if(pu(a)){for(S in t)t.hasOwnProperty(S)&&(l=t[S],l!==void 0&&lr(e,a,S,l,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(l=t[s],l!=null&&pe(e,a,s,l,t,null))}function Jh(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,o=null,p=null,S=null;for(b in t){var A=t[b];if(t.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=A;default:l.hasOwnProperty(b)||pe(e,a,b,null,l,A)}}for(var y in l){var b=l[y];if(A=t[y],l.hasOwnProperty(y)&&(b!=null||A!=null))switch(y){case"type":i=b;break;case"name":n=b;break;case"checked":p=b;break;case"defaultChecked":S=b;break;case"value":u=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,a));break;default:b!==A&&pe(e,a,y,b,l,A)}}gu(e,u,s,o,p,S,i,n);return;case"select":b=u=s=y=null;for(i in t)if(o=t[i],t.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":b=o;default:l.hasOwnProperty(i)||pe(e,a,i,null,l,o)}for(n in l)if(i=l[n],o=t[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":y=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==o&&pe(e,a,n,i,l,o)}a=s,t=u,l=b,y!=null?cl(e,!!t,y,!1):!!l!=!!t&&(a!=null?cl(e,!!t,a,!0):cl(e,!!t,t?[]:"",!1));return;case"textarea":b=y=null;for(s in t)if(n=t[s],t.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:pe(e,a,s,null,l,n)}for(u in l)if(n=l[u],i=t[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":y=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&pe(e,a,u,n,l,i)}$r(e,y,b);return;case"option":for(var U in t)if(y=t[U],t.hasOwnProperty(U)&&y!=null&&!l.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:pe(e,a,U,null,l,y)}for(o in l)if(y=l[o],b=t[o],l.hasOwnProperty(o)&&y!==b&&(y!=null||b!=null))switch(o){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:pe(e,a,o,y,l,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in t)y=t[Q],t.hasOwnProperty(Q)&&y!=null&&!l.hasOwnProperty(Q)&&pe(e,a,Q,null,l,y);for(p in l)if(y=l[p],b=t[p],l.hasOwnProperty(p)&&y!==b&&(y!=null||b!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,a));break;default:pe(e,a,p,y,l,b)}return;default:if(pu(a)){for(var ye in t)y=t[ye],t.hasOwnProperty(ye)&&y!==void 0&&!l.hasOwnProperty(ye)&&lr(e,a,ye,void 0,l,y);for(S in l)y=l[S],b=t[S],!l.hasOwnProperty(S)||y===b||y===void 0&&b===void 0||lr(e,a,S,y,l,b);return}}for(var m in t)y=t[m],t.hasOwnProperty(m)&&y!=null&&!l.hasOwnProperty(m)&&pe(e,a,m,null,l,y);for(A in l)y=l[A],b=t[A],!l.hasOwnProperty(A)||y===b||y==null&&b==null||pe(e,a,A,y,l,b)}function ld(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var n=t[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&ld(u)){for(u=0,s=n.responseEnd,l+=1;l<t.length;l++){var o=t[l],p=o.startTime;if(p>s)break;var S=o.transferSize,A=o.initiatorType;S&&ld(A)&&(o=o.responseEnd,u+=S*(o<s?1:(s-p)/(o-p)))}if(--l,a+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nr=null,ir=null;function Xi(e){return e.nodeType===9?e:e.ownerDocument}function nd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function ur(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var cr=null;function Wh(){var e=window.event;return e&&e.type==="popstate"?e===cr?!1:(cr=e,!0):(cr=null,!1)}var ud=typeof setTimeout=="function"?setTimeout:void 0,$h=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,Ih=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(e){return cd.resolve(null).then(e).catch(Ph)}:ud;function Ph(e){setTimeout(function(){throw e})}function _t(e){return e==="head"}function rd(e,a){var t=a,l=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(n),ql(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Cn(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Cn(t);for(var i=t.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Zl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=u}}else t==="body"&&Cn(e.ownerDocument.body);t=n}while(t);ql(a)}function sd(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function rr(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":rr(t),mu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function e0(e,a,t,l){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Zl])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=wa(e.nextSibling),e===null)break}return null}function a0(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wa(e.nextSibling),e===null))return null;return e}function od(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wa(e.nextSibling),e===null))return null;return e}function sr(e){return e.data==="$?"||e.data==="$~"}function or(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function t0(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function wa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var fr=null;function fd(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return wa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function dd(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function md(e,a,t){switch(a=Xi(t),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Cn(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);mu(e)}var Ua=new Map,hd=new Set;function Zi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var st=D.d;D.d={f:l0,r:n0,D:i0,C:u0,L:c0,m:r0,X:o0,S:s0,M:f0};function l0(){var e=st.f(),a=Bi();return e||a}function n0(e){var a=nl(e);a!==null&&a.tag===5&&a.type==="form"?_o(a):st.r(e)}var Hl=typeof document>"u"?null:document;function gd(e,a,t){var l=Hl;if(l&&typeof a=="string"&&a){var n=Ma(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),hd.has(n)||(hd.add(n),e={rel:e,crossOrigin:t,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),Ze(a,"link",e),qe(a),l.head.appendChild(a)))}}function i0(e){st.D(e),gd("dns-prefetch",e,null)}function u0(e,a){st.C(e,a),gd("preconnect",e,a)}function c0(e,a,t){st.L(e,a,t);var l=Hl;if(l&&e&&a){var n='link[rel="preload"][as="'+Ma(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+Ma(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+Ma(t.imageSizes)+'"]')):n+='[href="'+Ma(e)+'"]';var i=n;switch(a){case"style":i=Bl(e);break;case"script":i=kl(e)}Ua.has(i)||(e=G({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Ua.set(i,e),l.querySelector(n)!==null||a==="style"&&l.querySelector(_n(i))||a==="script"&&l.querySelector(Dn(i))||(a=l.createElement("link"),Ze(a,"link",e),qe(a),l.head.appendChild(a)))}}function r0(e,a){st.m(e,a);var t=Hl;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+Ma(l)+'"][href="'+Ma(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=kl(e)}if(!Ua.has(i)&&(e=G({rel:"modulepreload",href:e},a),Ua.set(i,e),t.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Dn(i)))return}l=t.createElement("link"),Ze(l,"link",e),qe(l),t.head.appendChild(l)}}}function s0(e,a,t){st.S(e,a,t);var l=Hl;if(l&&e){var n=il(l).hoistableStyles,i=Bl(e);a=a||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(_n(i)))s.loading=5;else{e=G({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Ua.get(i))&&dr(e,t);var o=u=l.createElement("link");qe(o),Ze(o,"link",e),o._p=new Promise(function(p,S){o.onload=p,o.onerror=S}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ki(u,a,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function o0(e,a){st.X(e,a);var t=Hl;if(t&&e){var l=il(t).hoistableScripts,n=kl(e),i=l.get(n);i||(i=t.querySelector(Dn(n)),i||(e=G({src:e,async:!0},a),(a=Ua.get(n))&&mr(e,a),i=t.createElement("script"),qe(i),Ze(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function f0(e,a){st.M(e,a);var t=Hl;if(t&&e){var l=il(t).hoistableScripts,n=kl(e),i=l.get(n);i||(i=t.querySelector(Dn(n)),i||(e=G({src:e,async:!0,type:"module"},a),(a=Ua.get(n))&&mr(e,a),i=t.createElement("script"),qe(i),Ze(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function vd(e,a,t,l){var n=(n=w.current)?Zi(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Bl(t.href),t=il(n).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Bl(t.href);var i=il(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(_n(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ua.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ua.set(e,t),i||d0(n,e,t,u.state))),a&&l===null)throw Error(d(528,""));return u}if(a&&l!==null)throw Error(d(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=kl(t),t=il(n).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Bl(e){return'href="'+Ma(e)+'"'}function _n(e){return'link[rel="stylesheet"]['+e+"]"}function pd(e){return G({},e,{"data-precedence":e.precedence,precedence:null})}function d0(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Ze(a,"link",t),qe(a),e.head.appendChild(a))}function kl(e){return'[src="'+Ma(e)+'"]'}function Dn(e){return"script[async]"+e}function yd(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Ma(t.href)+'"]');if(l)return a.instance=l,qe(l),l;var n=G({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),qe(l),Ze(l,"style",n),Ki(l,t.precedence,e),a.instance=l;case"stylesheet":n=Bl(t.href);var i=e.querySelector(_n(n));if(i)return a.state.loading|=4,a.instance=i,qe(i),i;l=pd(t),(n=Ua.get(n))&&dr(l,n),i=(e.ownerDocument||e).createElement("link"),qe(i);var u=i;return u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Ze(i,"link",l),a.state.loading|=4,Ki(i,t.precedence,e),a.instance=i;case"script":return i=kl(t.src),(n=e.querySelector(Dn(i)))?(a.instance=n,qe(n),n):(l=t,(n=Ua.get(i))&&(l=G({},t),mr(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),qe(n),Ze(n,"link",l),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Ki(l,t.precedence,e));return a.instance}function Ki(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===a)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function dr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function mr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Ji=null;function bd(e,a,t){if(Ji===null){var l=new Map,n=Ji=new Map;n.set(t,l)}else n=Ji,l=n.get(t),l||(l=new Map,n.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var i=t[n];if(!(i[Zl]||i[Le]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(a)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function xd(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function m0(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Sd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function h0(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Bl(l.href),i=a.querySelector(_n(n));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Fi.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,qe(i);return}i=a.ownerDocument||a,l=pd(l),(n=Ua.get(n))&&dr(l,n),i=i.createElement("link"),qe(i);var u=i;u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Ze(i,"link",l),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Fi.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var hr=0;function g0(e,a){return e.stylesheets&&e.count===0&&$i(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&$i(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&hr===0&&(hr=62500*Fh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$i(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>hr?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Fi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$i(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wi=null;function $i(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wi=new Map,a.forEach(v0,e),Wi=null,Fi.call(e))}function v0(e,a){if(!(a.state.loading&4)){var t=Wi.get(e);if(t)var l=t.get(null);else{t=new Map,Wi.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),l=u)}l&&t.set(null,l)}n=a.instance,u=n.getAttribute("data-precedence"),i=t.get(u)||l,i===l&&t.set(null,n),t.set(u,n),this.count++,l=Fi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var On={$$typeof:De,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function p0(e,a,t,l,n,i,u,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.hiddenUpdates=su(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function zd(e,a,t,l,n,i,u,s,o,p,S,A){return e=new p0(e,a,t,u,o,p,S,A,s),a=1,i===!0&&(a|=24),i=ga(3,null,null,a),e.current=i,i.stateNode=e,a=Ku(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:l,isDehydrated:t,cache:a},$u(i),e}function jd(e){return e?(e=gl,e):gl}function Nd(e,a,t,l,n,i){n=jd(n),l.context===null?l.context=n:l.pendingContext=n,l=bt(a),l.payload={element:t},i=i===void 0?null:i,i!==null&&(l.callback=i),t=xt(e,l,a),t!==null&&(oa(t,e,a),on(t,e,a))}function Ad(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function gr(e,a){Ad(e,a),(e=e.alternate)&&Ad(e,a)}function Td(e){if(e.tag===13||e.tag===31){var a=Lt(e,67108864);a!==null&&oa(a,e,67108864),gr(e,67108864)}}function Md(e){if(e.tag===13||e.tag===31){var a=xa();a=ou(a);var t=Lt(e,a);t!==null&&oa(t,e,a),gr(e,a)}}var Ii=!0;function y0(e,a,t,l){var n=z.T;z.T=null;var i=D.p;try{D.p=2,vr(e,a,t,l)}finally{D.p=i,z.T=n}}function b0(e,a,t,l){var n=z.T;z.T=null;var i=D.p;try{D.p=8,vr(e,a,t,l)}finally{D.p=i,z.T=n}}function vr(e,a,t,l){if(Ii){var n=pr(l);if(n===null)tr(e,a,l,Pi,t),Cd(e,l);else if(S0(n,e,a,t,l))l.stopPropagation();else if(Cd(e,l),a&4&&-1<x0.indexOf(e)){for(;n!==null;){var i=nl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Bt(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var o=1<<31-ma(u);s.entanglements[1]|=o,u&=~o}Va(i),(se&6)===0&&(Ui=We()+500,Tn(0))}}break;case 31:case 13:s=Lt(i,2),s!==null&&oa(s,i,2),Bi(),gr(i,2)}if(i=pr(l),i===null&&tr(e,a,l,Pi,t),i===n)break;n=i}n!==null&&l.stopPropagation()}else tr(e,a,l,null,t)}}function pr(e){return e=bu(e),yr(e)}var Pi=null;function yr(e){if(Pi=null,e=ll(e),e!==null){var a=M(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=q(a),e!==null)return e;e=null}else if(t===31){if(e=ne(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Pi=e,null}function Ed(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cu()){case Gl:return 2;case Gn:return 8;case al:case Ln:return 32;case Ll:return 268435456;default:return 32}default:return 32}}var br=!1,Dt=null,Ot=null,Rt=null,Rn=new Map,wn=new Map,wt=[],x0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cd(e,a){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Rn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(a.pointerId)}}function Un(e,a,t,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},a!==null&&(a=nl(a),a!==null&&Td(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function S0(e,a,t,l,n){switch(a){case"focusin":return Dt=Un(Dt,e,a,t,l,n),!0;case"dragenter":return Ot=Un(Ot,e,a,t,l,n),!0;case"mouseover":return Rt=Un(Rt,e,a,t,l,n),!0;case"pointerover":var i=n.pointerId;return Rn.set(i,Un(Rn.get(i)||null,e,a,t,l,n)),!0;case"gotpointercapture":return i=n.pointerId,wn.set(i,Un(wn.get(i)||null,e,a,t,l,n)),!0}return!1}function _d(e){var a=ll(e.target);if(a!==null){var t=M(a);if(t!==null){if(a=t.tag,a===13){if(a=q(t),a!==null){e.blockedOn=a,Lr(e.priority,function(){Md(t)});return}}else if(a===31){if(a=ne(t),a!==null){e.blockedOn=a,Lr(e.priority,function(){Md(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=pr(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);yu=l,t.target.dispatchEvent(l),yu=null}else return a=nl(t),a!==null&&Td(a),e.blockedOn=t,!1;a.shift()}return!0}function Dd(e,a,t){eu(e)&&t.delete(a)}function z0(){br=!1,Dt!==null&&eu(Dt)&&(Dt=null),Ot!==null&&eu(Ot)&&(Ot=null),Rt!==null&&eu(Rt)&&(Rt=null),Rn.forEach(Dd),wn.forEach(Dd)}function au(e,a){e.blockedOn===a&&(e.blockedOn=null,br||(br=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,z0)))}var tu=null;function Od(e){tu!==e&&(tu=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){tu===e&&(tu=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],n=e[a+2];if(typeof l!="function"){if(yr(l||t)===null)continue;break}var i=nl(t);i!==null&&(e.splice(a,3),a-=3,pc(i,{pending:!0,data:n,method:t.method,action:l},l,n))}}))}function ql(e){function a(o){return au(o,e)}Dt!==null&&au(Dt,e),Ot!==null&&au(Ot,e),Rt!==null&&au(Rt,e),Rn.forEach(a),wn.forEach(a);for(var t=0;t<wt.length;t++){var l=wt[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<wt.length&&(t=wt[0],t.blockedOn===null);)_d(t),t.blockedOn===null&&wt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var n=t[l],i=t[l+1],u=n[na]||null;if(typeof i=="function")u||Od(t);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[na]||null)s=u.formAction;else if(yr(n)!==null)continue}else s=u.action;typeof s=="function"?t[l+1]=s:(t.splice(l,3),l-=3),Od(t)}}}function Rd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function xr(e){this._internalRoot=e}lu.prototype.render=xr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var t=a.current,l=xa();Nd(t,l,e,a,null,null)},lu.prototype.unmount=xr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Nd(e.current,2,null,e,null,null),Bi(),a[tl]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var a=Gr();e={blockedOn:null,target:e,priority:a};for(var t=0;t<wt.length&&a!==0&&a<wt[t].priority;t++);wt.splice(t,0,e),t===0&&_d(e)}};var wd=O.version;if(wd!=="19.2.8")throw Error(d(527,wd,"19.2.8"));D.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=T(a),e=e!==null?J(e):null,e=e===null?null:e.stateNode,e};var j0={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Ht=nu.inject(j0),da=nu}catch{}}return Bn.createRoot=function(e,a){if(!H(e))throw Error(d(299));var t=!1,l="",n=Yo,i=Go,u=Lo;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=zd(e,1,!1,null,null,t,l,null,n,i,u,Rd),e[tl]=a.current,ar(e),new xr(a)},Bn.hydrateRoot=function(e,a,t){if(!H(e))throw Error(d(299));var l=!1,n="",i=Yo,u=Go,s=Lo,o=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.formState!==void 0&&(o=t.formState)),a=zd(e,1,!0,a,t??null,l,n,o,i,u,s,Rd),a.context=jd(null),t=a.current,l=xa(),l=ou(l),n=bt(l),n.callback=null,xt(t,n,l),t=l,a.current.lanes=t,Xl(a,t),Va(a),e[tl]=a.current,ar(e),new lu(a)},Bn.version="19.2.8",Bn}var Vd;function R0(){if(Vd)return jr.exports;Vd=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(O){console.error(O)}}return x(),jr.exports=O0(),jr.exports}var w0=R0();const U0=Jd(w0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=x=>x.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wd=(...x)=>x.filter((O,R,d)=>!!O&&O.trim()!==""&&d.indexOf(O)===R).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var B0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=Ae.forwardRef(({color:x="currentColor",size:O=24,strokeWidth:R=2,absoluteStrokeWidth:d,className:H="",children:M,iconNode:q,...ne},B)=>Ae.createElement("svg",{ref:B,...B0,width:O,height:O,stroke:x,strokeWidth:d?Number(R)*24/Number(O):R,className:Wd("lucide",H),...ne},[...q.map(([T,J])=>Ae.createElement(T,J)),...Array.isArray(M)?M:[M]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(x,O)=>{const R=Ae.forwardRef(({className:d,...H},M)=>Ae.createElement(k0,{ref:M,iconNode:O,className:Wd(`lucide-${H0(x)}`,d),...H}));return R.displayName=`${x}`,R};/**
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
 */const Z0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],kn=I("Check",Z0);/**
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
 */const l1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],qn=I("ExternalLink",l1);/**
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
 */const u1=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Or=I("Github",u1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],r1=I("Globe",c1);/**
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
 */const v1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Cr=I("Lock",v1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],lm=I("Mail",p1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Rr=I("MapPin",y1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],x1=I("Menu",b1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],z1=I("Moon",S1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],nm=I("PanelsTopLeft",j1);/**
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
 */const C1=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],um=I("Server",C1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],wr=I("ShieldCheck",_1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],_r=I("Sparkles",D1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],R1=I("Sun",O1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],cm=I("Terminal",w1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ur=I("X",U1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],rm=I("Zap",H1),$={name:"Dang Anh Tuong",nickname:"tuongok",brandLogo:"TUONG-DEV",title:"Full-Stack Software Engineer Intern | React, Node.js & Python FastAPI",targetRole:"Seeking Full-Stack Software Engineer Internship",availability:"Available for Full-Stack Internships · HCMC / Remote",location:"Ho Chi Minh City, Vietnam",email:"danganhtuongg@gmail.com",phone:"0335847674",github:"https://github.com/DangAnhTuong",githubUsername:"DangAnhTuong",linkedin:"https://www.linkedin.com/in/đặng-anh-tường-726574361?utm_source=share_via&utm_content=profile&utm_medium=member_ios",cvUrl:"/Dang_Anh_Tuong_CV.pdf",summary:"Final-year Information Technology student at Thuyloi University (HCMC) seeking a Full-Stack Software Engineer Internship. Experienced in building and deploying production-grade web applications with React, Node.js, and Python FastAPI, augmented by modern AI-assisted engineering workflows (Cursor, Claude Code, Google Antigravity). Genuine passion for software engineering, highly coachable, and eager to learn from senior engineers through rigorous code reviews. Ready to dedicate 100% energy and commitment to write clean, reliable code and create meaningful value for the company.",education:{university:"Thuyloi University",location:"Ho Chi Minh City, Vietnam",degree:"Bachelor of Science in Information Technology – 4th Year",timeline:"2023 – Present (Expected Graduation: 2027)",coursework:"Data Structures & Algorithms, Object-Oriented Programming, Database Systems (DBMS), Web Application Development, Software Engineering, Computer Networks",englishCert:"Certified CEFR B1 Standard (University Exit Benchmark)",nativeLang:"Vietnamese (Native)"},stats:[{label:"Academic Standing",value:"4th Year · Thuyloi Univ"},{label:"Target Opportunity",value:"Internship / Full-Stack"},{label:"Core Stack",value:"React · Node.js · FastAPI"},{label:"English Proficiency",value:"CEFR B1 Certified"}]},B1=[{id:"all",label:"All Projects"},{id:"fullstack",label:"Full-Stack & Backend"},{id:"creative",label:"3D Web & Interactive"},{id:"ai-data",label:"AI & Data Systems"}],Zd=[{id:"tuong-tan-toeic",title:"Tuong Tan TOEIC – 4-Skill EdTech Platform",category:"fullstack",featured:!0,role:"Full-Stack Developer | Production Flagship Project",timeline:"Jan. 2026 – Present",tagline:"Commercial-grade TOEIC exam ecosystem serving 18,200 ETS practice questions, 11,785 dictation audio sentences, and 83 SM-2 spaced repetition sets",description:"Developed an extensive TOEIC preparation platform serving 18,200 ETS practice questions with structured 4-part explanations, 11,785 dictation audio sentences with character-level text diffing, and 83 SM-2 spaced repetition sets. Built a 100vh single-frame ETS exam room featuring 200-question interactive bubble sheets, single-sentence waveform audio streaming, and sub-second auto-advancing input mechanics.",image:"/projects/toeic_preview.svg",metrics:["18,200 ETS Questions","11,785 Dictations","100vh Exam Simulator","100% Self-Hosted Media"],techStack:["React 18","Node.js (Express)","MongoDB","TailwindCSS","Vite","Web Audio API","JWT Auth","Nginx","Linux VPS"],bullets:["Learning Engine: Developed an extensive TOEIC preparation platform serving 18,200 ETS practice questions with structured 4-part explanations, 11,785 dictation audio sentences with character-level text diffing, and 83 SM-2 spaced repetition sets.","Exam Simulator: Built a 100vh single-frame ETS exam room featuring 200-question interactive bubble sheets, single-sentence waveform audio streaming, and sub-second auto-advancing input mechanics.","Study Notebook & Gamification: Implemented an automated mistake review notebook for targeted practice, paired with daily streak tracking, XP progression, and a real-time 1v1 multiplayer arena.","Security, Payment & CI/CD: Integrated Google 1-Click OAuth 2.0, automated VietQR payment webhooks for instant 120-day VIP provisioning, and deployed automated 5-step CI/CD pipeline on Ubuntu Linux VPS with Nginx and SSL."],architectureFlow:[{step:"Client Layer",name:"React 18 + Vite 5",desc:"100vh No-Scroll Exam Room, Web Audio API waveform, SM-2 Engine"},{step:"Reverse Proxy",name:"Nginx + SSL",desc:"Rate limiting, TLS 1.3, caching headers, local /media CDN proxy"},{step:"Application",name:"Node.js Express API",desc:"JWT RBAC Middleware, Google OAuth2 verify, VietQR webhooks"},{step:"Data Store",name:"MongoDB + Mongoose",desc:"18.2k ETS indexed items, user streaks, XP & mistake notebooks"},{step:"DevOps & VPS",name:"Ubuntu Linux + PM2",desc:"Autonomous 5-step CI/CD pipeline, logrotate, self-hosted media"}],architecture:{frontend:"React 18, Vite 5, TailwindCSS, Web Audio API, Native Speech API, Lucide React, Custom SM-2 Active Recall Engine",backend:"Node.js Express API (v1), JWT RBAC Middleware, Google OAuth2 Token Verification, VietQR Webhook Listener",database:"MongoDB & Mongoose (18,000+ indexed questions, full-text search, user progress tracking & mistake notebooks)",devops:"Ubuntu Linux VPS, Nginx Reverse Proxy, Let's Encrypt SSL, PM2 Process Manager, Automated 5-Step CI/CD"},github:"https://github.com/DangAnhTuong/tuong_tan_toeic",demo:"https://toeic.danganhtuong.dev",isPrivate:!0,privateNotice:"Mã nguồn đang ở chế độ Private để bảo vệ tài nguyên đề thi ETS. Sẵn sàng mời làm Collaborator/Viewer cho Nhà tuyển dụng quan tâm.",badgeColor:"#3b82f6",gradient:"linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%)"},{id:"ai-english",title:"AI-Powered English Learning Platform",category:"ai-data",featured:!0,role:"Full-Stack Developer | Personal Project",timeline:"Jan. 2026 – Present",tagline:"Decoupled microservices architecture combining Node.js and Python FastAPI with real-time speech processing and pronunciation scoring",description:"Designed a multi-tier backend where Node.js manages user data, authentication, and chat history while Python FastAPI handles compute-heavy real-time speech processing. Integrated Deepgram STT and OpenAI API via WebSockets for low-latency voice evaluation (<1.5s) and automated pronunciation scoring.",image:"/projects/english_preview.svg",metrics:["Decoupled Microservices","<1.5s Voice Streaming","Gemini 3.6 Flash Engine","0ms Mindmap Render"],techStack:["React 19","Node.js (Express)","Python (FastAPI)","MongoDB","Redis","WebSockets","Docker","Nginx"],bullets:["Decoupled Backend: Designed a multi-tier backend where Node.js manages user data, authentication, and chat history while Python FastAPI handles compute-heavy real-time speech processing.","Real-Time Voice Streaming: Integrated Deepgram STT and OpenAI API via WebSockets for low-latency voice evaluation (<1.5s) and automated pronunciation scoring.","Authentication & RBAC: Implemented secure JWT authentication with refresh token flow, Google OAuth2, and granular Role-Based Access Control (RBAC) for learners and admins.","DevOps & Deployment: Containerized application stack using Docker Compose and Nginx Reverse Proxy on Linux VPS; optimized caching headers for static SPA delivery."],architectureFlow:[{step:"Client Layer",name:"React 19 + Ant Design",desc:"Speak.com UI layout, 0ms Optimistic Mindmap, WebSocket Voice recorder"},{step:"API Gateway",name:"Nginx Reverse Proxy",desc:"Routes /api to Node.js (3001) and /py-api to FastAPI (8000)"},{step:"Node Service",name:"Express Auth & Data",desc:"JWT tokens, user sessions, chat history, topic catalogs"},{step:"Python AI",name:"FastAPI Engine",desc:"Asynchronous Gemini 3.6 Flash mindmap generation, speech evaluation"},{step:"Data & Cache",name:"MongoDB + Redis",desc:"User profiles, conversation transcripts, token blacklist caching"}],architecture:{frontend:"React 19, Vite, Web Audio API, WebSocket client, Ant Design",backend:"Node.js Express (Auth & Business API), Python FastAPI (Speech Inference Engine & Mindmap)",database:"MongoDB, Redis (Cache & Session state)",devops:"Docker Compose, Nginx Reverse Proxy, Linux VPS"},github:"https://github.com/DangAnhTuong/ai-english-learning-platform",demo:"https://english.danganhtuong.dev",badgeColor:"#10b981",gradient:"linear-gradient(135deg, #059669 0%, #10b981 100%)"},{id:"tuong-hotel",title:"Tuong Hotel – 3D Showcase & Reservation System",category:"creative",featured:!0,role:"Frontend Developer | Personal Project",timeline:"June 2025 – Aug. 2025",tagline:"Interactive 3D luxury hotel showcase and reservation system powered by Three.js WebGL with 60 FPS performance",description:"Built a luxury hotel showcase featuring interactive 3D WebGL rendering with Three.js, room showcases, dining menus, and tour booking reservation flows. Integrated Ant Design 5 components, custom CSS keyframe animations, and i18next for seamless English/Vietnamese language switching.",image:"/projects/hotel_preview.svg",metrics:["Three.js WebGL Engine","Stable 60 FPS Render","3D Room Explorer","i18next Bilingual UI"],techStack:["React 19","Three.js (@react-three/fiber)","Ant Design 5","HTML5","CSS3","i18next","Netlify"],bullets:["3D Interactive Graphics: Built a luxury hotel showcase featuring interactive 3D WebGL rendering with Three.js, room showcases, dining menus, and tour booking reservation flows.","Localization & UI: Integrated Ant Design 5 components, custom CSS keyframe animations, and i18next for seamless English/Vietnamese language switching.","Asset Optimization & CI/CD: Optimized 3D model geometry and asset loading to maintain steady 60 FPS rendering; set up automated continuous deployment via Netlify."],architectureFlow:[{step:"3D Rendering",name:"Three.js & Fiber",desc:"WebGL canvas, realistic lighting, camera orbit controls, shadow maps"},{step:"UI Component",name:"Ant Design 5 + CSS",desc:"Modal reservation flows, responsive drawer menus, custom keyframes"},{step:"Localization",name:"i18next Engine",desc:"Instant EN/VI language switching without full page reloads"},{step:"Asset Engine",name:"GLTF / Draco Loader",desc:"Optimized 3D geometry compression for instant mobile loading"},{step:"Deployment",name:"Netlify Edge CI/CD",desc:"Continuous automated deployment, global CDN asset caching"}],architecture:{core:"React 19, Three.js, @react-three/fiber, @react-three/drei",ui:"Ant Design 5, Lucide Icons, Custom Keyframe CSS",i18n:"i18next (English & Vietnamese bilingual routing)",deployment:"Netlify Continuous Deployment (CI/CD)"},github:"https://github.com/DangAnhTuong/tuong-hotel",demo:"https://tuong-hotel.vercel.app",badgeColor:"#0ea5e9",gradient:"linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)"},{id:"tickethub",title:"TicketHub – Enterprise Event Ticketing Platform",category:"fullstack",featured:!1,role:"Full-Stack Engineer | Personal Project",timeline:"2025",tagline:"High-concurrency ticket distribution platform with distributed locking and queue management",description:"Engineered a robust event ticketing infrastructure designed to prevent race conditions during high-demand concert ticket sales using Redis Distributed Locks and BullMQ job queues.",image:"/projects/tickethub_preview.svg",metrics:["Redis Distributed Locks","BullMQ Queue Engine","P99 1.82ms Lock Time","Zero Race Conditions"],techStack:["Next.js 19","NestJS","TypeScript","PostgreSQL","Redis","BullMQ","Prisma ORM","Docker Compose"],bullets:["High Concurrency Engine: Solved ticket race conditions using Redis Distributed Lock mechanisms.","Queue Architecture: Built BullMQ job queues to smooth out thousand-request traffic spikes without server crashes.","Enterprise Architecture: Decoupled NestJS backend with Prisma ORM, PostgreSQL, and strict RBAC authorization.","Full Containerization: Shipped complete multi-container Docker Compose setup ready for cloud or VPS."],architectureFlow:[{step:"Frontend App",name:"Next.js 19 TypeScript",desc:"Server-side rendering, real-time seat reservation map, TailwindCSS"},{step:"Backend API",name:"NestJS Modular",desc:"RESTful endpoints, Swagger OpenAPI docs, JWT RBAC security guards"},{step:"Distributed Lock",name:"Redis Mutex (Redlock)",desc:"Guarantees single seat acquisition during simultaneous checkouts"},{step:"Job Queue",name:"BullMQ Asynchronous",desc:"Buffers ticket payment processing, avoids database lock contention"},{step:"Persistence",name:"PostgreSQL + Prisma",desc:"ACID transactional order records, relational event schema"}],architecture:{frontend:"Next.js 19 (TypeScript), Framer Motion, Lucide Icons",backend:"NestJS, Prisma ORM, JWT, RBAC Guards, Swagger Docs",database:"PostgreSQL, Redis (Distributed Lock & BullMQ Job Queue)",devops:"Docker Compose All-in-One, Nginx Reverse Proxy"},github:"https://github.com/DangAnhTuong/event_ticketing_platform-",demo:"https://event-ticketing-platform-omega.vercel.app",badgeColor:"#6366f1",gradient:"linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"}],k1=[{category:"Frontend Development",icon:"Layout",skills:["React 19 / 18","Next.js","TailwindCSS","Three.js (@react-three/fiber)","JavaScript (ES6+)","TypeScript","HTML5","CSS3","Ant Design","Web Audio API"]},{category:"Backend Development",icon:"Server",skills:["Node.js (Express)","Python (FastAPI)","RESTful APIs","WebSockets","Mongoose","JWT Auth","OAuth 2.0","RBAC"]},{category:"Programming Languages",icon:"Code",skills:["JavaScript (ES6+)","TypeScript","Python","C++","Java","SQL"]},{category:"Database & Storage",icon:"Database",skills:["MongoDB","PostgreSQL","MySQL","Redis"]},{category:"AI-Assisted Engineering",icon:"Cpu",skills:["Cursor IDE","Claude Code","Google Antigravity","OpenAI Codex","Prompt Engineering"]},{category:"DevOps & Cloud",icon:"Cloud",skills:["Docker","Docker Compose","Nginx Reverse Proxy","Linux VPS (Ubuntu)","PM2","Git","GitHub","Vercel","Netlify","CI/CD"]},{category:"Software Practices",icon:"Shield",skills:["Clean Architecture","Responsive Web Design","Component-Driven Development","Agile / Scrum","Code Review"]},{category:"Languages",icon:"Globe",skills:["English (CEFR B1 Certified)","Vietnamese (Native)"]}];function q1({theme:x,toggleTheme:O,onOpenCv:R}){const[d,H]=Ae.useState(!1),[M,q]=Ae.useState(!1);return Ae.useEffect(()=>{const ne=()=>{H(window.scrollY>20)};return window.addEventListener("scroll",ne),()=>window.removeEventListener("scroll",ne)},[]),c.jsxs("header",{className:`navbar-wrapper ${d?"navbar-scrolled":""}`,children:[c.jsxs("div",{className:"container navbar-container",children:[c.jsxs("a",{href:"#home",className:"navbar-brand",children:[c.jsx("div",{className:"brand-icon",children:c.jsx(cm,{size:17,color:"var(--accent-cyan)"})}),c.jsxs("div",{className:"brand-text",children:[c.jsx("span",{className:"brand-name",children:$.brandLogo}),c.jsx("span",{className:"brand-role",children:"Software Engineer"})]})]}),c.jsxs("nav",{className:"nav-links",children:[c.jsx("a",{href:"#home",className:"nav-item",children:"Home"}),c.jsx("a",{href:"#about",className:"nav-item",children:"About"}),c.jsx("a",{href:"#projects",className:"nav-item",children:"Projects"}),c.jsx("a",{href:"#contact",className:"nav-item",children:"Contact"}),c.jsxs("a",{href:"#contact",className:"nav-availability-pill",title:"Candidate Availability Status",children:[c.jsx("span",{className:"nav-pulse-dot"}),c.jsx("span",{children:"Open to Work"})]})]}),c.jsxs("div",{className:"navbar-actions",children:[c.jsx("button",{className:"theme-toggle-btn",onClick:O,"aria-label":`Switch to ${x==="dark"?"Light":"Dark"} mode`,title:`Switch to ${x==="dark"?"Light":"Dark"} mode`,children:x==="dark"?c.jsx(R1,{size:18,color:"#fbbf24",className:"theme-icon"}):c.jsx(z1,{size:18,color:"#6366f1",className:"theme-icon"})}),c.jsxs("button",{onClick:R,className:"btn btn-primary btn-sm resume-btn",title:"Preview Official 1-Page Resume (PDF)",children:[c.jsx(Yn,{size:15}),c.jsx("span",{children:"Resume"})]}),c.jsx("button",{className:"mobile-toggle-btn",onClick:()=>q(!M),"aria-label":"Toggle Navigation",children:M?c.jsx(Ur,{size:22}):c.jsx(x1,{size:22})})]})]}),M&&c.jsxs("div",{className:"mobile-menu glass-panel",children:[c.jsx("a",{href:"#home",onClick:()=>q(!1),className:"mobile-nav-item",children:"Home"}),c.jsx("a",{href:"#about",onClick:()=>q(!1),className:"mobile-nav-item",children:"About Me"}),c.jsx("a",{href:"#projects",onClick:()=>q(!1),className:"mobile-nav-item",children:"Featured Projects"}),c.jsx("a",{href:"#contact",onClick:()=>q(!1),className:"mobile-nav-item",children:"Contact"}),c.jsxs("button",{onClick:()=>{q(!1),R()},className:"btn btn-primary btn-sm",style:{marginTop:"8px",width:"100%",justifyContent:"center"},children:[c.jsx(Yn,{size:16}),c.jsx("span",{children:"View Resume PDF"})]})]}),c.jsx("style",{children:`
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
      `})]})}function Y1({onOpenCv:x}){const[O,R]=Ae.useState(null),d=(H,M)=>{navigator.clipboard.writeText(H),R(M),setTimeout(()=>R(null),2200)};return c.jsxs("section",{id:"home",className:"hero-section",children:[c.jsxs("div",{className:"container hero-container",children:[c.jsxs("div",{className:"badge-row",children:[c.jsxs("div",{className:"availability-pill",children:[c.jsx("span",{className:"live-dot"}),c.jsx("span",{children:$.availability})]}),c.jsxs("div",{className:"signature-pill",children:[c.jsx(_r,{size:14,color:"var(--accent-cyan)"}),c.jsx("span",{children:"Signature Focus · Real-Time AI & 3D Web"})]}),c.jsxs("div",{className:"location-pill",children:[c.jsx(Rr,{size:14,color:"var(--accent-indigo)"}),c.jsx("span",{children:$.location})]})]}),c.jsx("h1",{className:"hero-name",children:$.name}),c.jsx("h2",{className:"hero-title text-gradient",children:$.title}),c.jsx("p",{className:"hero-summary",children:$.summary}),c.jsxs("div",{className:"tech-tags-cloud",children:[c.jsxs("span",{className:"tech-tag",children:[c.jsx(tm,{size:13})," React 19 & Next.js"]}),c.jsxs("span",{className:"tech-tag",children:[c.jsx($0,{size:13})," Three.js (@react-three/fiber)"]}),c.jsxs("span",{className:"tech-tag",children:[c.jsx(Pd,{size:13})," Node.js & Python FastAPI"]}),c.jsxs("span",{className:"tech-tag",children:[c.jsx(_r,{size:13})," AI-Assisted Workflows (Antigravity & Claude Code)"]})]}),c.jsxs("div",{className:"hero-actions",children:[c.jsxs("a",{href:"#contact",className:"btn btn-primary",children:[c.jsx("span",{children:"Get In Touch"}),c.jsx($d,{size:16})]}),c.jsxs("button",{onClick:x,className:"btn btn-secondary resume-hero-btn",title:"View 1-Page ATS Resume directly in browser",children:[c.jsx(Yn,{size:16,color:"var(--accent-cyan)"}),c.jsx("span",{children:"Preview CV (1-Page ATS)"})]}),c.jsx("a",{href:"#projects",className:"btn btn-secondary",children:c.jsx("span",{children:"View Projects"})})]}),c.jsxs("div",{className:"quick-contact-strip",children:[c.jsxs("button",{className:"quick-contact-pill",onClick:()=>d($.email,"email"),title:"Click to copy email address",children:[O==="email"?c.jsx(kn,{size:13,color:"var(--accent-emerald)"}):c.jsx(Mr,{size:13}),c.jsx("span",{children:O==="email"?"✓ Copied Email!":`Email: ${$.email}`})]}),c.jsxs("button",{className:"quick-contact-pill",onClick:()=>d($.phone,"phone"),title:"Click to copy phone / Zalo number",children:[O==="phone"?c.jsx(kn,{size:13,color:"var(--accent-emerald)"}):c.jsx(Mr,{size:13}),c.jsx("span",{children:O==="phone"?"✓ Copied Phone/Zalo!":`Phone: ${$.phone}`})]}),c.jsxs("div",{className:"core-vitals-pill",children:[c.jsx(rm,{size:13,color:"var(--accent-emerald)"}),c.jsx("span",{children:"100/100 Core Web Vitals"})]})]}),c.jsx("div",{className:"hero-stats-grid",children:$.stats.map((H,M)=>c.jsxs("div",{className:"stat-card glass-panel",children:[c.jsx("span",{className:"stat-val text-gradient",children:H.value}),c.jsx("span",{className:"stat-lbl",children:H.label})]},M))})]}),c.jsx("style",{children:`
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
      `})]})}function G1({onOpenCv:x}){return c.jsxs("section",{id:"about",className:"about-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("span",{className:"section-tag",children:"Background & Identity"}),c.jsxs("h2",{className:"section-title",children:["About ",c.jsx("span",{className:"text-gradient",children:"Dang Anh Tuong"})]}),c.jsx("p",{className:"section-desc",children:"Final-year Information Technology student at Thuyloi University passionate about building robust web applications and applying cutting-edge engineering tools."})]}),c.jsxs("div",{className:"about-grid",children:[c.jsxs("div",{className:"about-card glass-panel",children:[c.jsxs("div",{className:"about-card-header",children:[c.jsx("div",{className:"card-icon-wrap",children:c.jsx(o1,{size:22,color:"var(--accent-cyan)"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"card-title",children:"Academic Background"}),c.jsx("p",{className:"card-subtitle",children:$.education.university})]})]}),c.jsxs("div",{className:"education-timeline",children:[c.jsxs("div",{className:"edu-item",children:[c.jsx("div",{className:"edu-dot"}),c.jsxs("div",{className:"edu-content",children:[c.jsx("span",{className:"edu-degree",children:$.education.degree}),c.jsxs("span",{className:"edu-school",children:[$.education.university," — ",$.education.location]}),c.jsx("span",{className:"edu-time",children:$.education.timeline})]})]}),c.jsxs("div",{className:"edu-item",children:[c.jsx("div",{className:"edu-dot"}),c.jsxs("div",{className:"edu-content",children:[c.jsxs("div",{className:"cert-pill",children:[c.jsx(G0,{size:15,color:"var(--accent-emerald)"}),c.jsx("span",{className:"cert-name",children:$.education.englishCert})]}),c.jsxs("span",{className:"edu-school",children:["Languages: ",$.education.nativeLang,", English (Certified B1)"]})]})]}),c.jsxs("div",{className:"coursework-box",children:[c.jsxs("div",{className:"coursework-title",children:[c.jsx(Q0,{size:14,color:"var(--accent-cyan)"}),c.jsx("span",{children:"Relevant Coursework:"})]}),c.jsxs("div",{className:"coursework-tags",children:[c.jsx("span",{className:"course-tag",children:"Data Structures & Algorithms"}),c.jsx("span",{className:"course-tag",children:"Object-Oriented Programming (OOP)"}),c.jsx("span",{className:"course-tag",children:"Database Systems (DBMS)"}),c.jsx("span",{className:"course-tag",children:"Web Application Development"}),c.jsx("span",{className:"course-tag",children:"Software Engineering"}),c.jsx("span",{className:"course-tag",children:"Computer Networks"})]})]})]}),c.jsxs("div",{className:"contact-pills-row",children:[c.jsxs("span",{className:"badge",children:[c.jsx(Rr,{size:12})," ",$.location]}),c.jsxs("span",{className:"badge",children:[c.jsx(lm,{size:12})," ",$.email]}),c.jsxs("span",{className:"badge",children:[c.jsx(im,{size:12})," ",$.phone]})]})]}),c.jsxs("div",{className:"about-card glass-panel",children:[c.jsxs("div",{className:"about-card-header",children:[c.jsx("div",{className:"card-icon-wrap",children:c.jsx(X0,{size:22,color:"var(--accent-indigo)"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"card-title",children:"Engineering Methodology"}),c.jsx("p",{className:"card-subtitle",children:"Modern AI-Assisted Software Delivery"})]})]}),c.jsxs("p",{className:"philosophy-text",children:["I focus on bridging ",c.jsx("strong",{children:"full-stack software fundamentals"})," (clean architecture, decoupled microservices, database normalization) with ",c.jsx("strong",{children:"next-generation AI-assisted workflows"}),":"]}),c.jsxs("div",{className:"workflow-points",children:[c.jsxs("div",{className:"point-item",children:[c.jsx("span",{className:"point-badge",children:"Autonomous Workflows"}),c.jsxs("p",{children:["Proficient in orchestrating multi-agent systems via ",c.jsx("strong",{children:"Google Antigravity"})," and ",c.jsx("strong",{children:"Claude Code"})," to handle test generation, linting, and rapid prototyping."]})]}),c.jsxs("div",{className:"point-item",children:[c.jsx("span",{className:"point-badge",children:"Real-World Execution"}),c.jsxs("p",{children:["Proven track record building microservices with ",c.jsx("strong",{children:"Node.js & Python FastAPI"}),", audio streaming via WebSockets, and 3D WebGL rendering with ",c.jsx("strong",{children:"Three.js"}),"."]})]}),c.jsxs("div",{className:"point-item",children:[c.jsx("span",{className:"point-badge",children:"Coachable & Reliable"}),c.jsx("p",{children:"Eager to learn from senior engineers through rigorous code reviews. Ready to dedicate 100% commitment to write clean, reliable production code."})]})]}),c.jsxs("div",{className:"about-actions",children:[c.jsxs("button",{onClick:x,className:"btn btn-primary btn-sm",title:"Preview Official 1-Page Resume (PDF)",children:[c.jsx(am,{size:15}),c.jsx("span",{children:"Preview Resume Online"})]}),c.jsxs("a",{href:$.cvUrl,download:"Dang_Anh_Tuong_CV.pdf",className:"btn btn-secondary btn-sm",title:"Download official PDF file",children:[c.jsx(Er,{size:15}),c.jsx("span",{children:"Download PDF"})]}),c.jsxs("a",{href:$.linkedin,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:[c.jsx(qn,{size:15}),c.jsx("span",{children:"LinkedIn"})]})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function L1({project:x,onClose:O}){return Ae.useEffect(()=>{const R=d=>{d.key==="Escape"&&O()};return window.addEventListener("keydown",R),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",R),document.body.style.overflow="auto"}},[O]),x?c.jsxs("div",{className:"modal-backdrop",onClick:O,children:[c.jsxs("div",{className:"modal-content glass-panel",onClick:R=>R.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"badge",style:{borderColor:x.badgeColor,color:x.badgeColor},children:[x.category.toUpperCase()," · ",x.timeline]}),c.jsx("h2",{className:"modal-title",children:x.title}),c.jsx("p",{className:"modal-role",children:x.role})]}),c.jsx("button",{className:"modal-close-btn",onClick:O,"aria-label":"Close modal",children:c.jsx(Ur,{size:20})})]}),c.jsxs("div",{className:"modal-body",children:[c.jsxs("div",{className:"modal-section",children:[c.jsx("h4",{className:"modal-section-title",children:"Overview & Purpose"}),c.jsx("p",{className:"modal-text",children:x.description})]}),x.architectureFlow&&c.jsxs("div",{className:"modal-section",children:[c.jsxs("h4",{className:"modal-section-title",children:[c.jsx(tm,{size:17,color:"var(--accent-cyan)",style:{display:"inline",marginRight:6}}),"End-to-End System Architecture Pipeline"]}),c.jsx("div",{className:"flowchart-container",children:x.architectureFlow.map((R,d)=>c.jsxs(Fd.Fragment,{children:[c.jsxs("div",{className:"flowchart-node",children:[c.jsx("div",{className:"node-step-tag",children:R.step}),c.jsx("div",{className:"node-title",children:R.name}),c.jsx("div",{className:"node-desc",children:R.desc})]}),d<x.architectureFlow.length-1&&c.jsx("div",{className:"flowchart-connector",children:c.jsx($d,{size:16,className:"connector-arrow"})})]},d))})]}),x.privateNotice&&c.jsxs("div",{className:"private-notice-banner",children:[c.jsx(Cr,{size:20,color:"var(--accent-amber)",className:"private-banner-icon"}),c.jsxs("div",{className:"private-banner-text",children:[c.jsx("span",{className:"banner-title",children:"Mã nguồn & Quyền truy cập:"}),c.jsx("p",{children:x.privateNotice})]})]}),c.jsxs("div",{className:"modal-section",children:[c.jsx("h4",{className:"modal-section-title",children:"Verified Engineering Deliverables"}),c.jsx("div",{className:"highlights-list",children:x.bullets.map((R,d)=>c.jsxs("div",{className:"highlight-item",children:[c.jsx(Id,{size:17,color:"var(--accent-emerald)",className:"highlight-icon"}),c.jsx("span",{children:R})]},d))})]}),c.jsxs("div",{className:"modal-section",children:[c.jsx("h4",{className:"modal-section-title",children:"System Architecture Breakdown"}),c.jsxs("div",{className:"arch-grid",children:[x.architecture.frontend&&c.jsxs("div",{className:"arch-card",children:[c.jsxs("div",{className:"arch-head",children:[c.jsx(nm,{size:15,color:"var(--accent-cyan)"}),c.jsx("span",{children:"Frontend Client"})]}),c.jsx("p",{children:x.architecture.frontend})]}),x.architecture.backend&&c.jsxs("div",{className:"arch-card",children:[c.jsxs("div",{className:"arch-head",children:[c.jsx(um,{size:15,color:"var(--accent-indigo)"}),c.jsx("span",{children:"Backend Microservices"})]}),c.jsx("p",{children:x.architecture.backend})]}),x.architecture.database&&c.jsxs("div",{className:"arch-card",children:[c.jsxs("div",{className:"arch-head",children:[c.jsx(em,{size:15,color:"var(--accent-emerald)"}),c.jsx("span",{children:"Database & Caching"})]}),c.jsx("p",{children:x.architecture.database})]}),x.architecture.devops&&c.jsxs("div",{className:"arch-card",children:[c.jsxs("div",{className:"arch-head",children:[c.jsx(cm,{size:15,color:"var(--accent-amber)"}),c.jsx("span",{children:"DevOps & Infrastructure"})]}),c.jsx("p",{children:x.architecture.devops})]}),x.architecture.core&&c.jsxs("div",{className:"arch-card",children:[c.jsxs("div",{className:"arch-head",children:[c.jsx(wr,{size:15,color:"var(--accent-cyan)"}),c.jsx("span",{children:"3D Graphics & Engine"})]}),c.jsx("p",{children:x.architecture.core})]})]})]}),c.jsxs("div",{className:"modal-section",children:[c.jsx("h4",{className:"modal-section-title",children:"Technologies Used"}),c.jsx("div",{className:"tags-container",children:x.techStack.map((R,d)=>c.jsx("span",{className:"badge",children:R},d))})]})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsxs("a",{href:x.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",title:x.privateNotice||"View Source Code",children:[c.jsx(Or,{size:17}),c.jsx("span",{children:x.isPrivate?"GitHub (Private Repo)":"View Source Code"}),x.isPrivate&&c.jsx(Cr,{size:14,color:"var(--accent-amber)",style:{marginLeft:4}})]}),c.jsxs("a",{href:x.demo,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:[c.jsx(qn,{size:17}),c.jsx("span",{children:"Interactive Demo"})]})]})]}),c.jsx("style",{children:`
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
      `})]}):null}function Q1(){const[x,O]=Ae.useState("all"),[R,d]=Ae.useState(null),H=x==="all"?Zd:Zd.filter(M=>M.category===x);return c.jsxs("section",{id:"projects",className:"projects-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("span",{className:"section-tag",children:"Featured Engineering"}),c.jsxs("h2",{className:"section-title",children:["Production & Personal ",c.jsx("span",{className:"text-gradient",children:"Projects"})]}),c.jsx("p",{className:"section-desc",children:"Decoupled microservices, real-time AI audio streaming, and high-fidelity 3D WebGL interfaces built with verified engineering standards."})]}),c.jsx("div",{className:"category-filters",children:B1.map(M=>c.jsx("button",{className:`filter-btn ${x===M.id?"active":""}`,onClick:()=>O(M.id),children:M.label},M.id))}),c.jsx("div",{className:"projects-grid",children:H.map(M=>c.jsxs("div",{className:"project-card glass-panel",children:[c.jsx("div",{className:"card-glow-bar",style:{background:M.gradient}}),M.image&&c.jsxs("div",{className:"project-mockup-wrapper",onClick:()=>d(M),title:"Click to view full architecture & design",children:[c.jsx("img",{src:M.image,alt:M.title,className:"project-mockup-img",loading:"lazy"}),c.jsx("div",{className:"mockup-hover-overlay",children:c.jsxs("span",{className:"overlay-pill",children:[c.jsx(am,{size:14})," Quick Architecture"]})})]}),c.jsxs("div",{className:"card-content",children:[c.jsxs("div",{className:"card-meta",children:[c.jsx("span",{className:"badge category-badge",style:{borderColor:M.badgeColor,color:M.badgeColor},children:M.category.toUpperCase()}),c.jsx("span",{className:"timeline-pill",children:M.timeline})]}),c.jsx("h3",{className:"project-title",children:M.title}),c.jsx("p",{className:"project-role",children:M.role}),c.jsx("p",{className:"project-tagline",children:M.tagline}),M.metrics&&c.jsx("div",{className:"project-metrics-row",children:M.metrics.map((q,ne)=>c.jsxs("span",{className:"metric-pill",children:[c.jsx(rm,{size:11,color:"var(--accent-amber)"}),c.jsx("span",{children:q})]},ne))}),c.jsx("div",{className:"project-bullets",children:M.bullets.slice(0,2).map((q,ne)=>c.jsxs("div",{className:"bullet-row",children:[c.jsx(Id,{size:15,color:"var(--accent-emerald)",className:"bullet-icon"}),c.jsx("span",{children:q})]},ne))}),c.jsxs("div",{className:"project-tags",children:[M.techStack.slice(0,5).map((q,ne)=>c.jsx("span",{className:"badge tag-pill",children:q},ne)),M.techStack.length>5&&c.jsxs("span",{className:"badge tag-pill-more",children:["+",M.techStack.length-5]})]}),M.privateNotice&&c.jsxs("div",{className:"card-private-hint",children:[c.jsx(Cr,{size:13,color:"var(--accent-amber)"}),c.jsx("span",{children:M.privateNotice})]}),c.jsxs("div",{className:"card-actions",children:[c.jsxs("button",{className:"btn btn-secondary card-btn",onClick:()=>d(M),children:[c.jsx(d1,{size:15,color:"var(--accent-cyan)"}),c.jsx("span",{children:"System Architecture"})]}),c.jsxs("div",{className:"action-links",children:[c.jsx("a",{href:M.github,target:"_blank",rel:"noopener noreferrer",className:"icon-action-btn",title:M.privateNotice||"View GitHub Repository",children:c.jsx(Or,{size:17})}),c.jsx("a",{href:M.demo,target:"_blank",rel:"noopener noreferrer",className:"icon-action-btn primary-action",title:"Open Live Preview",children:c.jsx(qn,{size:17})})]})]})]})]},M.id))})]}),R&&c.jsx(L1,{project:R,onClose:()=>d(null)}),c.jsx("style",{children:`
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

        /* Mockup Frame */
        .project-mockup-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #090e17;
          border-bottom: 1px solid var(--border-subtle);
          cursor: pointer;
        }

        .project-mockup-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-mockup-img {
          transform: scale(1.03);
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
      `})]})}function V1(){const x=O=>{switch(O){case"Layout":return c.jsx(nm,{size:18,color:"var(--accent-cyan)"});case"Server":return c.jsx(um,{size:18,color:"var(--accent-indigo)"});case"Code":return c.jsx(Xd,{size:18,color:"var(--accent-purple)"});case"Database":return c.jsx(em,{size:18,color:"var(--accent-emerald)"});case"Cpu":return c.jsx(Pd,{size:18,color:"#ec4899"});case"Cloud":return c.jsx(F0,{size:18,color:"var(--accent-amber)"});case"Globe":return c.jsx(r1,{size:18,color:"var(--accent-cyan)"});default:return c.jsx(Xd,{size:18})}};return c.jsxs("section",{id:"skills",className:"skills-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("span",{className:"section-tag",children:"Technical Competencies"}),c.jsxs("h2",{className:"section-title",children:["Skills & ",c.jsx("span",{className:"text-gradient",children:"Core Capabilities"})]}),c.jsx("p",{className:"section-desc",children:"Verified technologies, frameworks, and modern agentic engineering tools actively used in production and personal projects."})]}),c.jsx("div",{className:"skills-grid",children:k1.map((O,R)=>c.jsxs("div",{className:"skill-cat-card glass-panel",children:[c.jsxs("div",{className:"cat-header",children:[c.jsx("div",{className:"cat-icon-wrap",children:x(O.icon)}),c.jsx("h3",{className:"cat-title",children:O.category})]}),c.jsx("div",{className:"skills-pills-wrap",children:O.skills.map((d,H)=>c.jsx("span",{className:"skill-pill",children:d},H))})]},R))})]}),c.jsx("style",{children:`
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
      `})]})}var Hr={};(function x(O,R,d,H){var M=!!(O.Worker&&O.Blob&&O.Promise&&O.OffscreenCanvas&&O.OffscreenCanvasRenderingContext2D&&O.HTMLCanvasElement&&O.HTMLCanvasElement.prototype.transferControlToOffscreen&&O.URL&&O.URL.createObjectURL),q=typeof Path2D=="function"&&typeof DOMMatrix=="function",ne=(function(){if(!O.OffscreenCanvas)return!1;try{var h=new OffscreenCanvas(1,1),r=h.getContext("2d");r.fillRect(0,0,1,1);var g=h.transferToImageBitmap();r.createPattern(g,"no-repeat")}catch{return!1}return!0})();function B(){}function T(h){var r=R.exports.Promise,g=r!==void 0?r:O.Promise;return typeof g=="function"?new g(h):(h(B,B),null)}var J=(function(h,r){return{transform:function(g){if(h)return g;if(r.has(g))return r.get(g);var j=new OffscreenCanvas(g.width,g.height),E=j.getContext("2d");return E.drawImage(g,0,0),r.set(g,j),j},clear:function(){r.clear()}}})(ne,new Map),G=(function(){var h=Math.floor(16.666666666666668),r,g,j={},E=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(r=function(C){var w=Math.random();return j[w]=requestAnimationFrame(function _(L){E===L||E+h-1<L?(E=L,delete j[w],C()):j[w]=requestAnimationFrame(_)}),w},g=function(C){j[C]&&cancelAnimationFrame(j[C])}):(r=function(C){return setTimeout(C,h)},g=function(C){return clearTimeout(C)}),{frame:r,cancel:g}})(),he=(function(){var h,r,g={};function j(E){function C(w,_){E.postMessage({options:w||{},callback:_})}E.init=function(_){var L=_.transferControlToOffscreen();E.postMessage({canvas:L},[L])},E.fire=function(_,L,X){if(r)return C(_,null),r;var ge=Math.random().toString(36).slice(2);return r=T(function(fe){function xe(Oe){Oe.data.callback===ge&&(delete g[ge],E.removeEventListener("message",xe),r=null,J.clear(),X(),fe())}E.addEventListener("message",xe),C(_,ge),g[ge]=xe.bind(null,{data:{callback:ge}})}),r},E.reset=function(){E.postMessage({reset:!0});for(var _ in g)g[_](),delete g[_]}}return function(){if(h)return h;if(!d&&M){var E=["var CONFETTI, SIZE = {}, module = {};","("+x.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{h=new Worker(URL.createObjectURL(new Blob([E])))}catch(C){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",C),null}j(h)}return h}})(),Ge={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function je(h,r){return r?r(h):h}function Te(h){return h!=null}function ie(h,r,g){return je(h&&Te(h[r])?h[r]:Ge[r],g)}function Ie(h){return h<0?0:Math.floor(h)}function Ya(h,r){return Math.floor(Math.random()*(r-h))+h}function De(h){return parseInt(h,16)}function ta(h){return h.map(Sa)}function Sa(h){var r=String(h).replace(/[^0-9a-f]/gi,"");return r.length<6&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),{r:De(r.substring(0,2)),g:De(r.substring(2,4)),b:De(r.substring(4,6))}}function Ke(h){var r=ie(h,"origin",Object);return r.x=ie(r,"x",Number),r.y=ie(r,"y",Number),r}function P(h){h.width=document.documentElement.clientWidth,h.height=document.documentElement.clientHeight}function Je(h){var r=h.getBoundingClientRect();h.width=r.width,h.height=r.height}function za(h){var r=document.createElement("canvas");return r.style.position="fixed",r.style.top="0px",r.style.left="0px",r.style.pointerEvents="none",r.style.zIndex=h,r}function ot(h,r,g,j,E,C,w,_,L){h.save(),h.translate(r,g),h.rotate(C),h.scale(j,E),h.arc(0,0,1,w,_,L),h.restore()}function ja(h){var r=h.angle*(Math.PI/180),g=h.spread*(Math.PI/180);return{x:h.x,y:h.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:h.startVelocity*.5+Math.random()*h.startVelocity,angle2D:-r+(.5*g-Math.random()*g),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:h.color,shape:h.shape,tick:0,totalTicks:h.ticks,decay:h.decay,drift:h.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:h.gravity*3,ovalScalar:.6,scalar:h.scalar,flat:h.flat}}function Fe(h,r){r.x+=Math.cos(r.angle2D)*r.velocity+r.drift,r.y+=Math.sin(r.angle2D)*r.velocity+r.gravity,r.velocity*=r.decay,r.flat?(r.wobble=0,r.wobbleX=r.x+10*r.scalar,r.wobbleY=r.y+10*r.scalar,r.tiltSin=0,r.tiltCos=0,r.random=1):(r.wobble+=r.wobbleSpeed,r.wobbleX=r.x+10*r.scalar*Math.cos(r.wobble),r.wobbleY=r.y+10*r.scalar*Math.sin(r.wobble),r.tiltAngle+=.1,r.tiltSin=Math.sin(r.tiltAngle),r.tiltCos=Math.cos(r.tiltAngle),r.random=Math.random()+2);var g=r.tick++/r.totalTicks,j=r.x+r.random*r.tiltCos,E=r.y+r.random*r.tiltSin,C=r.wobbleX+r.random*r.tiltCos,w=r.wobbleY+r.random*r.tiltSin;if(h.fillStyle="rgba("+r.color.r+", "+r.color.g+", "+r.color.b+", "+(1-g)+")",h.beginPath(),q&&r.shape.type==="path"&&typeof r.shape.path=="string"&&Array.isArray(r.shape.matrix))h.fill(D(r.shape.path,r.shape.matrix,r.x,r.y,Math.abs(C-j)*.1,Math.abs(w-E)*.1,Math.PI/10*r.wobble));else if(r.shape.type==="bitmap"){var _=Math.PI/10*r.wobble,L=Math.abs(C-j)*.1,X=Math.abs(w-E)*.1,ge=r.shape.bitmap.width*r.scalar,fe=r.shape.bitmap.height*r.scalar,xe=new DOMMatrix([Math.cos(_)*L,Math.sin(_)*L,-Math.sin(_)*X,Math.cos(_)*X,r.x,r.y]);xe.multiplySelf(new DOMMatrix(r.shape.matrix));var Oe=h.createPattern(J.transform(r.shape.bitmap),"no-repeat");Oe.setTransform(xe),h.globalAlpha=1-g,h.fillStyle=Oe,h.fillRect(r.x-ge/2,r.y-fe/2,ge,fe),h.globalAlpha=1}else if(r.shape==="circle")h.ellipse?h.ellipse(r.x,r.y,Math.abs(C-j)*r.ovalScalar,Math.abs(w-E)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI):ot(h,r.x,r.y,Math.abs(C-j)*r.ovalScalar,Math.abs(w-E)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI);else if(r.shape==="star")for(var F=Math.PI/2*3,ke=4*r.scalar,ea=8*r.scalar,fa=r.x,Aa=r.y,Ha=5,la=Math.PI/Ha;Ha--;)fa=r.x+Math.cos(F)*ea,Aa=r.y+Math.sin(F)*ea,h.lineTo(fa,Aa),F+=la,fa=r.x+Math.cos(F)*ke,Aa=r.y+Math.sin(F)*ke,h.lineTo(fa,Aa),F+=la;else h.moveTo(Math.floor(r.x),Math.floor(r.y)),h.lineTo(Math.floor(r.wobbleX),Math.floor(E)),h.lineTo(Math.floor(C),Math.floor(w)),h.lineTo(Math.floor(j),Math.floor(r.wobbleY));return h.closePath(),h.fill(),r.tick<r.totalTicks}function Xa(h,r,g,j,E){var C=r.slice(),w=h.getContext("2d"),_,L,X=T(function(ge){function fe(){_=L=null,w.clearRect(0,0,j.width,j.height),J.clear(),E(),ge()}function xe(){d&&!(j.width===H.width&&j.height===H.height)&&(j.width=h.width=H.width,j.height=h.height=H.height),!j.width&&!j.height&&(g(h),j.width=h.width,j.height=h.height),w.clearRect(0,0,j.width,j.height),C=C.filter(function(Oe){return Fe(w,Oe)}),C.length?_=G.frame(xe):fe()}_=G.frame(xe),L=fe});return{addFettis:function(ge){return C=C.concat(ge),X},canvas:h,promise:X,reset:function(){_&&G.cancel(_),L&&L()}}}function Na(h,r){var g=!h,j=!!ie(r||{},"resize"),E=!1,C=ie(r,"disableForReducedMotion",Boolean),w=M&&!!ie(r||{},"useWorker"),_=w?he():null,L=g?P:Je,X=h&&_?!!h.__confetti_initialized:!1,ge=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,fe;function xe(F,ke,ea){for(var fa=ie(F,"particleCount",Ie),Aa=ie(F,"angle",Number),Ha=ie(F,"spread",Number),la=ie(F,"startVelocity",Number),Yl=ie(F,"decay",Number),iu=ie(F,"gravity",Number),uu=ie(F,"drift",Number),We=ie(F,"colors",ta),cu=ie(F,"ticks",Number),Gl=ie(F,"shapes"),Gn=ie(F,"scalar"),al=!!ie(F,"flat"),Ln=Ke(F),Ll=fa,Ql=[],ru=h.width*Ln.x,Ht=h.height*Ln.y;Ll--;)Ql.push(ja({x:ru,y:Ht,angle:Aa,spread:Ha,startVelocity:la,color:We[Ll%We.length],shape:Gl[Ya(0,Gl.length)],ticks:cu,decay:Yl,gravity:iu,drift:uu,scalar:Gn,flat:al}));return fe?fe.addFettis(Ql):(fe=Xa(h,Ql,L,ke,ea),fe.promise)}function Oe(F){var ke=C||ie(F,"disableForReducedMotion",Boolean),ea=ie(F,"zIndex",Number);if(ke&&ge)return T(function(la){la()});g&&fe?h=fe.canvas:g&&!h&&(h=za(ea),document.body.appendChild(h)),j&&!X&&L(h);var fa={width:h.width,height:h.height};_&&!X&&_.init(h),X=!0,_&&(h.__confetti_initialized=!0);function Aa(){if(_){var la={getBoundingClientRect:function(){if(!g)return h.getBoundingClientRect()}};L(la),_.postMessage({resize:{width:la.width,height:la.height}});return}fa.width=fa.height=null}function Ha(){fe=null,j&&(E=!1,O.removeEventListener("resize",Aa)),g&&h&&(document.body.contains(h)&&document.body.removeChild(h),h=null,X=!1)}return j&&!E&&(E=!0,O.addEventListener("resize",Aa,!1)),_?_.fire(F,fa,Ha):xe(F,fa,Ha)}return Oe.reset=function(){_&&_.reset(),fe&&fe.reset()},Oe}var Pe;function z(){return Pe||(Pe=Na(null,{useWorker:!0,resize:!0})),Pe}function D(h,r,g,j,E,C,w){var _=new Path2D(h),L=new Path2D;L.addPath(_,new DOMMatrix(r));var X=new Path2D;return X.addPath(L,new DOMMatrix([Math.cos(w)*E,Math.sin(w)*E,-Math.sin(w)*C,Math.cos(w)*C,g,j])),X}function V(h){if(!q)throw new Error("path confetti are not supported in this browser");var r,g;typeof h=="string"?r=h:(r=h.path,g=h.matrix);var j=new Path2D(r),E=document.createElement("canvas"),C=E.getContext("2d");if(!g){for(var w=1e3,_=w,L=w,X=0,ge=0,fe,xe,Oe=0;Oe<w;Oe+=2)for(var F=0;F<w;F+=2)C.isPointInPath(j,Oe,F,"nonzero")&&(_=Math.min(_,Oe),L=Math.min(L,F),X=Math.max(X,Oe),ge=Math.max(ge,F));fe=X-_,xe=ge-L;var ke=10,ea=Math.min(ke/fe,ke/xe);g=[ea,0,0,ea,-Math.round(fe/2+_)*ea,-Math.round(xe/2+L)*ea]}return{type:"path",path:r,matrix:g}}function oe(h){var r,g=1,j="#000000",E='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof h=="string"?r=h:(r=h.text,g="scalar"in h?h.scalar:g,E="fontFamily"in h?h.fontFamily:E,j="color"in h?h.color:j);var C=10*g,w=""+C+"px "+E,_=new OffscreenCanvas(C,C),L=_.getContext("2d");L.font=w;var X=L.measureText(r),ge=Math.ceil(X.actualBoundingBoxRight+X.actualBoundingBoxLeft),fe=Math.ceil(X.actualBoundingBoxAscent+X.actualBoundingBoxDescent),xe=2,Oe=X.actualBoundingBoxLeft+xe,F=X.actualBoundingBoxAscent+xe;ge+=xe+xe,fe+=xe+xe,_=new OffscreenCanvas(ge,fe),L=_.getContext("2d"),L.font=w,L.fillStyle=j,L.fillText(r,Oe,F);var ke=1/g;return{type:"bitmap",bitmap:_.transferToImageBitmap(),matrix:[ke,0,0,ke,-ge*ke/2,-fe*ke/2]}}R.exports=function(){return z().apply(this,arguments)},R.exports.reset=function(){z().reset()},R.exports.create=Na,R.exports.shapeFromPath=V,R.exports.shapeFromText=oe})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Hr,!1);const Kd=Hr.exports;Hr.exports.create;function X1({onOpenCv:x}){const[O,R]=Ae.useState(!1),[d,H]=Ae.useState(!1),[M,q]=Ae.useState({name:"",email:"",message:""}),[ne,B]=Ae.useState(!1),[T,J]=Ae.useState(null),G=()=>{navigator.clipboard.writeText($.email),R(!0),Kd({particleCount:50,spread:60,origin:{y:.85},colors:["#0ea5e9","#6366f1","#10b981","#ffffff"]}),setTimeout(()=>R(!1),3e3)},he=()=>{navigator.clipboard.writeText($.phone),H(!0),setTimeout(()=>H(!1),2500)},Ge=async je=>{je.preventDefault(),B(!0),J(null);try{const Te=await fetch(`https://formsubmit.co/ajax/${$.email}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:M.name,email:M.email,message:M.message,_subject:`New Portfolio Message from ${M.name} (${M.email})`,_template:"table"})}),ie=await Te.json();if(Te.ok||ie.success==="true")J({success:!0,message:"Message dispatched successfully! I will reply to your email shortly."}),q({name:"",email:"",message:""}),Kd({particleCount:60,spread:70,origin:{y:.8},colors:["#0ea5e9","#6366f1","#10b981","#ffffff"]});else throw new Error(ie.message||"Failed to submit")}catch(Te){console.error("Contact form error:",Te);const ie=`mailto:${$.email}?subject=Inquiry from ${encodeURIComponent(M.name)}&body=${encodeURIComponent(M.message+`

Sender Contact: `+M.email)}`;window.location.href=ie,J({success:!0,message:"Opening your default mail client..."})}finally{B(!1),setTimeout(()=>J(null),8e3)}};return c.jsxs("footer",{id:"contact",className:"contact-footer",children:[c.jsxs("div",{className:"container",children:[c.jsx("div",{className:"contact-card glass-panel",children:c.jsxs("div",{className:"contact-grid",children:[c.jsxs("div",{className:"contact-info",children:[c.jsx("span",{className:"section-tag",children:"Direct Communication"}),c.jsxs("h2",{className:"contact-title",children:["Let's Discuss Next ",c.jsx("br",{}),c.jsx("span",{className:"text-gradient",children:"Opportunities"})]}),c.jsxs("p",{className:"contact-desc",children:["I am actively seeking a ",c.jsx("strong",{children:"Full-Stack Software Engineer Internship"}),". Feel free to reach out via email, phone, or LinkedIn to discuss how I can contribute to your engineering team."]}),c.jsxs("div",{className:"info-pills-list",children:[c.jsxs("div",{className:"email-copy-box",children:[c.jsxs("div",{className:"email-text-wrap",children:[c.jsx(lm,{size:16,color:"var(--accent-cyan)"}),c.jsx("span",{className:"email-text",children:$.email})]}),c.jsx("button",{className:`copy-btn ${O?"copied":""}`,onClick:G,title:"Copy email to clipboard",children:O?c.jsxs(c.Fragment,{children:[c.jsx(kn,{size:15,color:"var(--accent-emerald)"}),c.jsx("span",{children:"Copied!"})]}):c.jsxs(c.Fragment,{children:[c.jsx(Mr,{size:15}),c.jsx("span",{children:"Copy Email"})]})})]}),c.jsxs("div",{className:"contact-meta-row",children:[c.jsxs("button",{onClick:he,className:"meta-item-btn",title:"Click to copy Phone / Zalo",children:[d?c.jsx(kn,{size:15,color:"var(--accent-emerald)"}):c.jsx(im,{size:15,color:"var(--accent-emerald)"}),c.jsx("span",{children:d?"✓ Copied Phone!":`${$.phone} (Call / Zalo)`})]}),c.jsxs("div",{className:"meta-item",children:[c.jsx(Rr,{size:15,color:"var(--accent-indigo)"}),c.jsx("span",{children:$.location})]})]})]}),c.jsxs("div",{className:"social-links-row",children:[c.jsxs("a",{href:$.github,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"GitHub Profile",children:[c.jsx(Or,{size:17}),c.jsx("span",{children:"GitHub"})]}),c.jsxs("a",{href:$.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"LinkedIn Profile",children:[c.jsx(g1,{size:17}),c.jsx("span",{children:"LinkedIn"})]}),c.jsxs("button",{onClick:x,className:"social-btn",title:"Preview Official 1-Page Resume (PDF)",children:[c.jsx(Yn,{size:17}),c.jsx("span",{children:"Resume (PDF)"})]})]}),c.jsxs("div",{className:"standards-badge",children:[c.jsx(wr,{size:16,color:"var(--accent-emerald)"}),c.jsx("span",{children:"Clean Architecture · High Performance · 100% Verified Work"})]})]}),c.jsx("div",{className:"contact-form-wrap",children:c.jsxs("form",{onSubmit:Ge,className:"quick-form",children:[c.jsx("h3",{className:"form-title",children:"Send a Quick Message"}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"form-name",children:"Your Full Name"}),c.jsx("input",{id:"form-name",type:"text",required:!0,placeholder:"e.g. Hiring Manager / Tech Recruiter",value:M.name,onChange:je=>q({...M,name:je.target.value})})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"form-email",children:"Your Work Email"}),c.jsx("input",{id:"form-email",type:"email",required:!0,placeholder:"hr@company.com",value:M.email,onChange:je=>q({...M,email:je.target.value})})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"form-msg",children:"Message / Internship Inquiry"}),c.jsx("textarea",{id:"form-msg",required:!0,rows:4,placeholder:"Let us know about your team, tech stack, or open positions...",value:M.message,onChange:je=>q({...M,message:je.target.value})})]}),T&&c.jsx("div",{className:`form-alert ${T.success?"success":"error"}`,children:T.message}),c.jsxs("button",{type:"submit",disabled:ne,className:"btn btn-primary form-submit-btn",children:[c.jsx("span",{children:ne?"Sending...":"Send Message"}),c.jsx(E1,{size:16})]})]})})]})}),c.jsxs("div",{className:"footer-bottom",children:[c.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," ",$.name,". All rights reserved. Built with React 19, Three.js & deployed on Vercel Edge."]}),c.jsxs("div",{className:"bottom-badges",children:[c.jsx("span",{className:"footer-badge",children:"Vite 6 SPA"}),c.jsx("span",{className:"footer-badge",children:"Zero Cache Stale"}),c.jsx("span",{className:"footer-badge",children:"CEFR B1 English"})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function Z1({isOpen:x,onClose:O}){const[R,d]=Ae.useState(!1);if(Ae.useEffect(()=>{const q=ne=>{ne.key==="Escape"&&O()};return x&&(window.addEventListener("keydown",q),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",q),document.body.style.overflow="auto"}},[x,O]),!x)return null;const H=()=>{navigator.clipboard.writeText($.email),d(!0),setTimeout(()=>d(!1),2500)},M=()=>{const q=document.getElementById("cv-frame-viewer");q&&q.contentWindow?(q.contentWindow.focus(),q.contentWindow.print()):window.open($.cvUrl,"_blank")};return c.jsxs("div",{className:"cv-modal-backdrop",onClick:O,children:[c.jsxs("div",{className:"cv-modal-container glass-panel",onClick:q=>q.stopPropagation(),children:[c.jsxs("div",{className:"cv-modal-header",children:[c.jsxs("div",{className:"cv-header-left",children:[c.jsxs("div",{className:"cv-file-badge",children:[c.jsx(Yn,{size:18,color:"var(--accent-cyan)"}),c.jsx("span",{className:"cv-file-title",children:"Dang_Anh_Tuong_CV.pdf"})]}),c.jsxs("div",{className:"cv-status-pill",children:[c.jsx("span",{className:"pulse-dot"}),c.jsx("span",{children:"1-Page Official ATS Resume · 2026"})]})]}),c.jsxs("div",{className:"cv-header-actions",children:[c.jsxs("button",{className:"cv-tool-btn copy-btn",onClick:H,title:"Copy Email Contact",children:[R?c.jsx(kn,{size:15,color:"var(--accent-emerald)"}):c.jsx(_r,{size:15}),c.jsx("span",{children:R?"Copied Email!":"Quick Email"})]}),c.jsxs("button",{className:"cv-tool-btn",onClick:M,title:"Print Resume",children:[c.jsx(T1,{size:15}),c.jsx("span",{children:"Print"})]}),c.jsxs("a",{href:$.cvUrl,target:"_blank",rel:"noopener noreferrer",className:"cv-tool-btn",title:"Open PDF in new browser tab",children:[c.jsx(qn,{size:15}),c.jsx("span",{children:"New Tab"})]}),c.jsxs("a",{href:$.cvUrl,download:"Dang_Anh_Tuong_CV.pdf",className:"cv-tool-btn primary",title:"Download official PDF file",children:[c.jsx(Er,{size:15}),c.jsx("span",{children:"Download PDF"})]}),c.jsx("button",{className:"cv-close-btn",onClick:O,"aria-label":"Close modal",children:c.jsx(Ur,{size:20})})]})]}),c.jsxs("div",{className:"cv-modal-body",children:[c.jsx("iframe",{id:"cv-frame-viewer",src:`${$.cvUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`,title:"Dang Anh Tuong - Software Engineer Resume",className:"cv-pdf-frame"}),c.jsx("div",{className:"cv-mobile-fallback",children:c.jsxs("div",{className:"fallback-card",children:[c.jsx(wr,{size:28,color:"var(--accent-emerald)"}),c.jsx("h4",{children:"Bản CV 1 trang chuẩn quốc tế ATS"}),c.jsx("p",{children:"Phù hợp tối ưu cho các hệ thống lọc tự động và nhà tuyển dụng."}),c.jsxs("div",{className:"fallback-actions",children:[c.jsxs("a",{href:$.cvUrl,download:!0,className:"btn btn-primary btn-sm",children:[c.jsx(Er,{size:16})," Tải PDF Về Máy"]}),c.jsxs("a",{href:$.cvUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:[c.jsx(qn,{size:16})," Mở Toàn Màn Hình"]})]})]})})]})]}),c.jsx("style",{children:`
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
      `})]})}function K1(){const[x,O]=Ae.useState(()=>localStorage.getItem("theme")||"dark"),[R,d]=Ae.useState(!1);Ae.useEffect(()=>{document.documentElement.setAttribute("data-theme",x),localStorage.setItem("theme",x)},[x]);const H=()=>{O(ne=>ne==="light"?"dark":"light")},M=()=>d(!0),q=()=>d(!1);return c.jsxs("div",{className:"portfolio-app",children:[c.jsx(q1,{theme:x,toggleTheme:H,onOpenCv:M}),c.jsxs("main",{children:[c.jsx(Y1,{onOpenCv:M}),c.jsx(G1,{onOpenCv:M}),c.jsx(Q1,{}),c.jsx(V1,{})]}),c.jsx(X1,{onOpenCv:M}),c.jsx(Z1,{isOpen:R,onClose:q})]})}U0.createRoot(document.getElementById("root")).render(c.jsx(Fd.StrictMode,{children:c.jsx(K1,{})}));
