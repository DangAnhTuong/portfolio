(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const Y of document.querySelectorAll('link[rel="modulepreload"]'))m(Y);new MutationObserver(Y=>{for(const D of Y)if(D.type==="childList")for(const te of D.addedNodes)te.tagName==="LINK"&&te.rel==="modulepreload"&&m(te)}).observe(document,{childList:!0,subtree:!0});function U(Y){const D={};return Y.integrity&&(D.integrity=Y.integrity),Y.referrerPolicy&&(D.referrerPolicy=Y.referrerPolicy),Y.crossOrigin==="use-credentials"?D.credentials="include":Y.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function m(Y){if(Y.ep)return;Y.ep=!0;const D=U(Y);fetch(Y.href,D)}})();function Xd(z){return z&&z.__esModule&&Object.prototype.hasOwnProperty.call(z,"default")?z.default:z}var bf={exports:{}},Bn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function g0(){if(Dd)return Bn;Dd=1;var z=Symbol.for("react.transitional.element"),R=Symbol.for("react.fragment");function U(m,Y,D){var te=null;if(D!==void 0&&(te=""+D),Y.key!==void 0&&(te=""+Y.key),"key"in Y){D={};for(var xe in Y)xe!=="key"&&(D[xe]=Y[xe])}else D=Y;return Y=D.ref,{$$typeof:z,type:m,key:te,ref:Y!==void 0?Y:null,props:D}}return Bn.Fragment=R,Bn.jsx=U,Bn.jsxs=U,Bn}var Cd;function y0(){return Cd||(Cd=1,bf.exports=g0()),bf.exports}var s=y0(),xf={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function p0(){if(Od)return Z;Od=1;var z=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),te=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),pe=Symbol.iterator;function Fe(c){return c===null||typeof c!="object"?null:(c=pe&&c[pe]||c["@@iterator"],typeof c=="function"?c:null)}var Ze={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ye=Object.assign,ce={};function Ie(c,v,M){this.props=c,this.context=v,this.refs=ce,this.updater=M||Ze}Ie.prototype.isReactComponent={},Ie.prototype.setState=function(c,v){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,v,"setState")},Ie.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Lt(){}Lt.prototype=Ie.prototype;function Ee(c,v,M){this.props=c,this.context=v,this.refs=ce,this.updater=M||Ze}var lt=Ee.prototype=new Lt;lt.constructor=Ee,Ye(lt,Ie.prototype),lt.isPureReactComponent=!0;var St=Array.isArray;function ke(){}var W={H:null,A:null,T:null,S:null},Ke=Object.prototype.hasOwnProperty;function zt(c,v,M){var A=M.ref;return{$$typeof:z,type:c,key:v,ref:A!==void 0?A:null,props:M}}function rl(c,v){return zt(c.type,v,c.props)}function Mt(c){return typeof c=="object"&&c!==null&&c.$$typeof===z}function Je(c){var v={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(M){return v[M]})}var Zt=/\/+/g;function Tt(c,v){return typeof c=="object"&&c!==null&&c.key!=null?Je(""+c.key):v.toString(36)}function Pe(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(ke,ke):(c.status="pending",c.then(function(v){c.status==="pending"&&(c.status="fulfilled",c.value=v)},function(v){c.status==="pending"&&(c.status="rejected",c.reason=v)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function S(c,v,M,A,E){var O=typeof c;(O==="undefined"||O==="boolean")&&(c=null);var _=!1;if(c===null)_=!0;else switch(O){case"bigint":case"string":case"number":_=!0;break;case"object":switch(c.$$typeof){case z:case R:_=!0;break;case I:return _=c._init,S(_(c._payload),v,M,A,E)}}if(_)return E=E(c),_=A===""?"."+Tt(c,0):A,St(E)?(M="",_!=null&&(M=_.replace(Zt,"$&/")+"/"),S(E,v,M,"",function(me){return me})):E!=null&&(Mt(E)&&(E=rl(E,M+(E.key==null||c&&c.key===E.key?"":(""+E.key).replace(Zt,"$&/")+"/")+_)),v.push(E)),1;_=0;var Q=A===""?".":A+":";if(St(c))for(var V=0;V<c.length;V++)A=c[V],O=Q+Tt(A,V),_+=S(A,v,M,O,E);else if(V=Fe(c),typeof V=="function")for(c=V.call(c),V=0;!(A=c.next()).done;)A=A.value,O=Q+Tt(A,V++),_+=S(A,v,M,O,E);else if(O==="object"){if(typeof c.then=="function")return S(Pe(c),v,M,A,E);throw v=String(c),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.")}return _}function C(c,v,M){if(c==null)return c;var A=[],E=0;return S(c,A,"","",function(O){return v.call(M,O,E++)}),A}function X(c){if(c._status===-1){var v=c._result;v=v(),v.then(function(M){(c._status===0||c._status===-1)&&(c._status=1,c._result=M)},function(M){(c._status===0||c._status===-1)&&(c._status=2,c._result=M)}),c._status===-1&&(c._status=0,c._result=v)}if(c._status===1)return c._result.default;throw c._result}var fe=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(v))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},h={map:C,forEach:function(c,v,M){C(c,function(){v.apply(this,arguments)},M)},count:function(c){var v=0;return C(c,function(){v++}),v},toArray:function(c){return C(c,function(v){return v})||[]},only:function(c){if(!Mt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return Z.Activity=L,Z.Children=h,Z.Component=Ie,Z.Fragment=U,Z.Profiler=Y,Z.PureComponent=Ee,Z.StrictMode=m,Z.Suspense=H,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Z.__COMPILER_RUNTIME={__proto__:null,c:function(c){return W.H.useMemoCache(c)}},Z.cache=function(c){return function(){return c.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(c,v,M){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var A=Ye({},c.props),E=c.key;if(v!=null)for(O in v.key!==void 0&&(E=""+v.key),v)!Ke.call(v,O)||O==="key"||O==="__self"||O==="__source"||O==="ref"&&v.ref===void 0||(A[O]=v[O]);var O=arguments.length-2;if(O===1)A.children=M;else if(1<O){for(var _=Array(O),Q=0;Q<O;Q++)_[Q]=arguments[Q+2];A.children=_}return zt(c.type,E,A)},Z.createContext=function(c){return c={$$typeof:te,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:D,_context:c},c},Z.createElement=function(c,v,M){var A,E={},O=null;if(v!=null)for(A in v.key!==void 0&&(O=""+v.key),v)Ke.call(v,A)&&A!=="key"&&A!=="__self"&&A!=="__source"&&(E[A]=v[A]);var _=arguments.length-2;if(_===1)E.children=M;else if(1<_){for(var Q=Array(_),V=0;V<_;V++)Q[V]=arguments[V+2];E.children=Q}if(c&&c.defaultProps)for(A in _=c.defaultProps,_)E[A]===void 0&&(E[A]=_[A]);return zt(c,O,E)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(c){return{$$typeof:xe,render:c}},Z.isValidElement=Mt,Z.lazy=function(c){return{$$typeof:I,_payload:{_status:-1,_result:c},_init:X}},Z.memo=function(c,v){return{$$typeof:N,type:c,compare:v===void 0?null:v}},Z.startTransition=function(c){var v=W.T,M={};W.T=M;try{var A=c(),E=W.S;E!==null&&E(M,A),typeof A=="object"&&A!==null&&typeof A.then=="function"&&A.then(ke,fe)}catch(O){fe(O)}finally{v!==null&&M.types!==null&&(v.types=M.types),W.T=v}},Z.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Z.use=function(c){return W.H.use(c)},Z.useActionState=function(c,v,M){return W.H.useActionState(c,v,M)},Z.useCallback=function(c,v){return W.H.useCallback(c,v)},Z.useContext=function(c){return W.H.useContext(c)},Z.useDebugValue=function(){},Z.useDeferredValue=function(c,v){return W.H.useDeferredValue(c,v)},Z.useEffect=function(c,v){return W.H.useEffect(c,v)},Z.useEffectEvent=function(c){return W.H.useEffectEvent(c)},Z.useId=function(){return W.H.useId()},Z.useImperativeHandle=function(c,v,M){return W.H.useImperativeHandle(c,v,M)},Z.useInsertionEffect=function(c,v){return W.H.useInsertionEffect(c,v)},Z.useLayoutEffect=function(c,v){return W.H.useLayoutEffect(c,v)},Z.useMemo=function(c,v){return W.H.useMemo(c,v)},Z.useOptimistic=function(c,v){return W.H.useOptimistic(c,v)},Z.useReducer=function(c,v,M){return W.H.useReducer(c,v,M)},Z.useRef=function(c){return W.H.useRef(c)},Z.useState=function(c){return W.H.useState(c)},Z.useSyncExternalStore=function(c,v,M){return W.H.useSyncExternalStore(c,v,M)},Z.useTransition=function(){return W.H.useTransition()},Z.version="19.2.8",Z}var Ud;function Ef(){return Ud||(Ud=1,xf.exports=p0()),xf.exports}var Ve=Ef();const b0=Xd(Ve);var Sf={exports:{}},qn={},zf={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function x0(){return Rd||(Rd=1,(function(z){function R(S,C){var X=S.length;S.push(C);e:for(;0<X;){var fe=X-1>>>1,h=S[fe];if(0<Y(h,C))S[fe]=C,S[X]=h,X=fe;else break e}}function U(S){return S.length===0?null:S[0]}function m(S){if(S.length===0)return null;var C=S[0],X=S.pop();if(X!==C){S[0]=X;e:for(var fe=0,h=S.length,c=h>>>1;fe<c;){var v=2*(fe+1)-1,M=S[v],A=v+1,E=S[A];if(0>Y(M,X))A<h&&0>Y(E,M)?(S[fe]=E,S[A]=X,fe=A):(S[fe]=M,S[v]=X,fe=v);else if(A<h&&0>Y(E,X))S[fe]=E,S[A]=X,fe=A;else break e}}return C}function Y(S,C){var X=S.sortIndex-C.sortIndex;return X!==0?X:S.id-C.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;z.unstable_now=function(){return D.now()}}else{var te=Date,xe=te.now();z.unstable_now=function(){return te.now()-xe}}var H=[],N=[],I=1,L=null,pe=3,Fe=!1,Ze=!1,Ye=!1,ce=!1,Ie=typeof setTimeout=="function"?setTimeout:null,Lt=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;function lt(S){for(var C=U(N);C!==null;){if(C.callback===null)m(N);else if(C.startTime<=S)m(N),C.sortIndex=C.expirationTime,R(H,C);else break;C=U(N)}}function St(S){if(Ye=!1,lt(S),!Ze)if(U(H)!==null)Ze=!0,ke||(ke=!0,Je());else{var C=U(N);C!==null&&Pe(St,C.startTime-S)}}var ke=!1,W=-1,Ke=5,zt=-1;function rl(){return ce?!0:!(z.unstable_now()-zt<Ke)}function Mt(){if(ce=!1,ke){var S=z.unstable_now();zt=S;var C=!0;try{e:{Ze=!1,Ye&&(Ye=!1,Lt(W),W=-1),Fe=!0;var X=pe;try{t:{for(lt(S),L=U(H);L!==null&&!(L.expirationTime>S&&rl());){var fe=L.callback;if(typeof fe=="function"){L.callback=null,pe=L.priorityLevel;var h=fe(L.expirationTime<=S);if(S=z.unstable_now(),typeof h=="function"){L.callback=h,lt(S),C=!0;break t}L===U(H)&&m(H),lt(S)}else m(H);L=U(H)}if(L!==null)C=!0;else{var c=U(N);c!==null&&Pe(St,c.startTime-S),C=!1}}break e}finally{L=null,pe=X,Fe=!1}C=void 0}}finally{C?Je():ke=!1}}}var Je;if(typeof Ee=="function")Je=function(){Ee(Mt)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,Tt=Zt.port2;Zt.port1.onmessage=Mt,Je=function(){Tt.postMessage(null)}}else Je=function(){Ie(Mt,0)};function Pe(S,C){W=Ie(function(){S(z.unstable_now())},C)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(S){S.callback=null},z.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ke=0<S?Math.floor(1e3/S):5},z.unstable_getCurrentPriorityLevel=function(){return pe},z.unstable_next=function(S){switch(pe){case 1:case 2:case 3:var C=3;break;default:C=pe}var X=pe;pe=C;try{return S()}finally{pe=X}},z.unstable_requestPaint=function(){ce=!0},z.unstable_runWithPriority=function(S,C){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var X=pe;pe=S;try{return C()}finally{pe=X}},z.unstable_scheduleCallback=function(S,C,X){var fe=z.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?fe+X:fe):X=fe,S){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=X+h,S={id:I++,callback:C,priorityLevel:S,startTime:X,expirationTime:h,sortIndex:-1},X>fe?(S.sortIndex=X,R(N,S),U(H)===null&&S===U(N)&&(Ye?(Lt(W),W=-1):Ye=!0,Pe(St,X-fe))):(S.sortIndex=h,R(H,S),Ze||Fe||(Ze=!0,ke||(ke=!0,Je()))),S},z.unstable_shouldYield=rl,z.unstable_wrapCallback=function(S){var C=pe;return function(){var X=pe;pe=C;try{return S.apply(this,arguments)}finally{pe=X}}}})(Mf)),Mf}var Hd;function S0(){return Hd||(Hd=1,zf.exports=x0()),zf.exports}var Tf={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function z0(){if(Bd)return $e;Bd=1;var z=Ef();function R(H){var N="https://react.dev/errors/"+H;if(1<arguments.length){N+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)N+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+H+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var m={d:{f:U,r:function(){throw Error(R(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},Y=Symbol.for("react.portal");function D(H,N,I){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:L==null?null:""+L,children:H,containerInfo:N,implementation:I}}var te=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function xe(H,N){if(H==="font")return"";if(typeof N=="string")return N==="use-credentials"?N:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,$e.createPortal=function(H,N){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!N||N.nodeType!==1&&N.nodeType!==9&&N.nodeType!==11)throw Error(R(299));return D(H,N,null,I)},$e.flushSync=function(H){var N=te.T,I=m.p;try{if(te.T=null,m.p=2,H)return H()}finally{te.T=N,m.p=I,m.d.f()}},$e.preconnect=function(H,N){typeof H=="string"&&(N?(N=N.crossOrigin,N=typeof N=="string"?N==="use-credentials"?N:"":void 0):N=null,m.d.C(H,N))},$e.prefetchDNS=function(H){typeof H=="string"&&m.d.D(H)},$e.preinit=function(H,N){if(typeof H=="string"&&N&&typeof N.as=="string"){var I=N.as,L=xe(I,N.crossOrigin),pe=typeof N.integrity=="string"?N.integrity:void 0,Fe=typeof N.fetchPriority=="string"?N.fetchPriority:void 0;I==="style"?m.d.S(H,typeof N.precedence=="string"?N.precedence:void 0,{crossOrigin:L,integrity:pe,fetchPriority:Fe}):I==="script"&&m.d.X(H,{crossOrigin:L,integrity:pe,fetchPriority:Fe,nonce:typeof N.nonce=="string"?N.nonce:void 0})}},$e.preinitModule=function(H,N){if(typeof H=="string")if(typeof N=="object"&&N!==null){if(N.as==null||N.as==="script"){var I=xe(N.as,N.crossOrigin);m.d.M(H,{crossOrigin:I,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0})}}else N==null&&m.d.M(H)},$e.preload=function(H,N){if(typeof H=="string"&&typeof N=="object"&&N!==null&&typeof N.as=="string"){var I=N.as,L=xe(I,N.crossOrigin);m.d.L(H,I,{crossOrigin:L,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,type:typeof N.type=="string"?N.type:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0,referrerPolicy:typeof N.referrerPolicy=="string"?N.referrerPolicy:void 0,imageSrcSet:typeof N.imageSrcSet=="string"?N.imageSrcSet:void 0,imageSizes:typeof N.imageSizes=="string"?N.imageSizes:void 0,media:typeof N.media=="string"?N.media:void 0})}},$e.preloadModule=function(H,N){if(typeof H=="string")if(N){var I=xe(N.as,N.crossOrigin);m.d.m(H,{as:typeof N.as=="string"&&N.as!=="script"?N.as:void 0,crossOrigin:I,integrity:typeof N.integrity=="string"?N.integrity:void 0})}else m.d.m(H)},$e.requestFormReset=function(H){m.d.r(H)},$e.unstable_batchedUpdates=function(H,N){return H(N)},$e.useFormState=function(H,N,I){return te.H.useFormState(H,N,I)},$e.useFormStatus=function(){return te.H.useHostTransitionStatus()},$e.version="19.2.8",$e}var qd;function M0(){if(qd)return Tf.exports;qd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(R){console.error(R)}}return z(),Tf.exports=z0(),Tf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function T0(){if(Yd)return qn;Yd=1;var z=S0(),R=Ef(),U=M0();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function D(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function te(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xe(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function H(e){if(D(e)!==e)throw Error(m(188))}function N(e){var t=e.alternate;if(!t){if(t=D(e),t===null)throw Error(m(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return H(n),e;if(i===a)return H(n),t;i=i.sibling}throw Error(m(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,f=n.child;f;){if(f===l){u=!0,l=n,a=i;break}if(f===a){u=!0,a=n,l=i;break}f=f.sibling}if(!u){for(f=i.child;f;){if(f===l){u=!0,l=i,a=n;break}if(f===a){u=!0,a=i,l=n;break}f=f.sibling}if(!u)throw Error(m(189))}}if(l.alternate!==a)throw Error(m(190))}if(l.tag!==3)throw Error(m(188));return l.stateNode.current===l?e:t}function I(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=I(e),t!==null)return t;e=e.sibling}return null}var L=Object.assign,pe=Symbol.for("react.element"),Fe=Symbol.for("react.transitional.element"),Ze=Symbol.for("react.portal"),Ye=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Lt=Symbol.for("react.consumer"),Ee=Symbol.for("react.context"),lt=Symbol.for("react.forward_ref"),St=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),zt=Symbol.for("react.activity"),rl=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=Mt&&e[Mt]||e["@@iterator"],typeof e=="function"?e:null)}var Zt=Symbol.for("react.client.reference");function Tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ye:return"Fragment";case Ie:return"Profiler";case ce:return"StrictMode";case St:return"Suspense";case ke:return"SuspenseList";case zt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ze:return"Portal";case Ee:return e.displayName||"Context";case Lt:return(e._context.displayName||"Context")+".Consumer";case lt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Tt(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return Tt(e(t))}catch{}}return null}var Pe=Array.isArray,S=R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},fe=[],h=-1;function c(e){return{current:e}}function v(e){0>h||(e.current=fe[h],fe[h]=null,h--)}function M(e,t){h++,fe[h]=e.current,e.current=t}var A=c(null),E=c(null),O=c(null),_=c(null);function Q(e,t){switch(M(O,t),M(E,e),M(A,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Po(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Po(t),e=ed(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}v(A),M(A,e)}function V(){v(A),v(E),v(O)}function me(e){e.memoizedState!==null&&M(_,e);var t=A.current,l=ed(t,e.type);t!==l&&(M(E,e),M(A,l))}function se(e){E.current===e&&(v(A),v(E)),_.current===e&&(v(_),On._currentValue=X)}var be,_e;function K(e){if(be===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||"",_e=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+be+e+_e}var He=!1;function et(e,t){if(!e||He)return"";He=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(b){var p=b}Reflect.construct(e,[],j)}else{try{j.call()}catch(b){p=b}e.call(j.prototype)}}else{try{throw Error()}catch(b){p=b}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(b){if(b&&p&&typeof b.stack=="string")return[b.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],f=i[1];if(u&&f){var r=u.split(`
`),y=f.split(`
`);for(n=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;if(a===r.length||n===y.length)for(a=r.length-1,n=y.length-1;1<=a&&0<=n&&r[a]!==y[n];)n--;for(;1<=a&&0<=n;a--,n--)if(r[a]!==y[n]){if(a!==1||n!==1)do if(a--,n--,0>n||r[a]!==y[n]){var x=`
`+r[a].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=a&&0<=n);break}}}finally{He=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?K(l):""}function ot(e,t){switch(e.tag){case 26:case 27:case 5:return K(e.type);case 16:return K("Lazy");case 13:return e.child!==t&&t!==null?K("Suspense Fallback"):K("Suspense");case 19:return K("SuspenseList");case 0:case 15:return et(e.type,!1);case 11:return et(e.type.render,!1);case 1:return et(e.type,!0);case 31:return K("Activity");default:return""}}function jt(e){try{var t="",l=null;do t+=ot(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Bt=Object.prototype.hasOwnProperty,at=z.unstable_scheduleCallback,La=z.unstable_cancelCallback,lu=z.unstable_shouldYield,au=z.unstable_requestPaint,We=z.unstable_now,nu=z.unstable_getCurrentPriorityLevel,Qa=z.unstable_ImmediatePriority,Yn=z.unstable_UserBlockingPriority,ta=z.unstable_NormalPriority,Gn=z.unstable_LowPriority,wa=z.unstable_IdlePriority,Xa=z.log,iu=z.unstable_setDisableYieldValue,Bl=null,dt=null;function ol(e){if(typeof Xa=="function"&&iu(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Bl,e)}catch{}}var mt=Math.clz32?Math.clz32:lm,em=Math.log,tm=Math.LN2;function lm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var Ln=256,Qn=262144,wn=4194304;function ql(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?n=ql(a):(u&=f,u!==0?n=ql(u):l||(l=f&~e,l!==0&&(n=ql(l))))):(f=a&~i,f!==0?n=ql(f):u!==0?n=ql(u):l||(l=a&~e,l!==0&&(n=ql(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Va(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function am(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uf(){var e=wn;return wn<<=1,(wn&62914560)===0&&(wn=4194304),e}function uu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Za(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nm(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var f=e.entanglements,r=e.expirationTimes,y=e.hiddenUpdates;for(l=u&~l;0<l;){var x=31-mt(l),j=1<<x;f[x]=0,r[x]=-1;var p=y[x];if(p!==null)for(y[x]=null,x=0;x<p.length;x++){var b=p[x];b!==null&&(b.lane&=-536870913)}l&=~j}a!==0&&Rf(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Rf(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-mt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Hf(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-mt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Bf(e,t){var l=t&-t;return l=(l&42)!==0?1:cu(l),(l&(e.suspendedLanes|t))!==0?0:l}function cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qf(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:Md(e.type))}function Yf(e,t){var l=C.p;try{return C.p=e,t()}finally{C.p=l}}var dl=Math.random().toString(36).slice(2),Ge="__reactFiber$"+dl,nt="__reactProps$"+dl,la="__reactContainer$"+dl,su="__reactEvents$"+dl,im="__reactListeners$"+dl,um="__reactHandles$"+dl,Gf="__reactResources$"+dl,ka="__reactMarker$"+dl;function ru(e){delete e[Ge],delete e[nt],delete e[su],delete e[im],delete e[um]}function aa(e){var t=e[Ge];if(t)return t;for(var l=e.parentNode;l;){if(t=l[la]||l[Ge]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=cd(e);e!==null;){if(l=e[Ge])return l;e=cd(e)}return t}e=l,l=e.parentNode}return null}function na(e){if(e=e[Ge]||e[la]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ka(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function ia(e){var t=e[Gf];return t||(t=e[Gf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Be(e){e[ka]=!0}var Lf=new Set,Qf={};function Yl(e,t){ua(e,t),ua(e+"Capture",t)}function ua(e,t){for(Qf[e]=t,e=0;e<t.length;e++)Lf.add(t[e])}var cm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wf={},Xf={};function fm(e){return Bt.call(Xf,e)?!0:Bt.call(wf,e)?!1:cm.test(e)?Xf[e]=!0:(wf[e]=!0,!1)}function Vn(e,t,l){if(fm(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Zn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function kt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sm(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ou(e){if(!e._valueTracker){var t=Vf(e)?"checked":"value";e._valueTracker=sm(e,t,""+e[t])}}function Zf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Vf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rm=/[\n"\\]/g;function At(e){return e.replace(rm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function du(e,t,l,a,n,i,u,f){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?mu(e,u,Nt(t)):l!=null?mu(e,u,Nt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Nt(f):e.removeAttribute("name")}function kf(e,t,l,a,n,i,u,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ou(e);return}l=l!=null?""+Nt(l):"",t=t!=null?""+Nt(t):l,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),ou(e)}function mu(e,t,l){t==="number"&&kn(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function ca(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Nt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Kf(e,t,l){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Nt(l):""}function Jf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(m(92));if(Pe(a)){if(1<a.length)throw Error(m(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Nt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),ou(e)}function fa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var om=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wf(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||om.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function $f(e,t,l){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Wf(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Wf(e,i,t[i])}function hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return mm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Kt(){}var vu=null;function gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,ra=null;function Ff(e){var t=na(e);if(t&&(e=t.stateNode)){var l=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(du(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[nt]||null;if(!n)throw Error(m(90));du(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Zf(a)}break e;case"textarea":Kf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&ca(e,!!l.multiple,t,!1)}}}var yu=!1;function If(e,t,l){if(yu)return e(t,l);yu=!0;try{var a=e(t);return a}finally{if(yu=!1,(sa!==null||ra!==null)&&(Ri(),sa&&(t=sa,e=ra,ra=sa=null,Ff(t),e)))for(t=0;t<e.length;t++)Ff(e[t])}}function Ja(e,t){var l=e.stateNode;if(l===null)return null;var a=l[nt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(m(231,t,typeof l));return l}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(Jt)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{pu=!1}var ml=null,bu=null,Jn=null;function Pf(){if(Jn)return Jn;var e,t=bu,l=t.length,a,n="value"in ml?ml.value:ml.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return Jn=n.slice(e,1<a?1-a:void 0)}function Wn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $n(){return!0}function es(){return!1}function it(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(l=e[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$n:es,this.isPropagationStopped=es,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),t}var Gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fn=it(Gl),$a=L({},Gl,{view:0,detail:0}),hm=it($a),xu,Su,Fa,In=L({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fa&&(Fa&&e.type==="mousemove"?(xu=e.screenX-Fa.screenX,Su=e.screenY-Fa.screenY):Su=xu=0,Fa=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:Su}}),ts=it(In),vm=L({},In,{dataTransfer:0}),gm=it(vm),ym=L({},$a,{relatedTarget:0}),zu=it(ym),pm=L({},Gl,{animationName:0,elapsedTime:0,pseudoElement:0}),bm=it(pm),xm=L({},Gl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sm=it(xm),zm=L({},Gl,{data:0}),ls=it(zm),Mm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jm[e])?!!t[e]:!1}function Mu(){return Nm}var Am=L({},$a,{key:function(e){if(e.key){var t=Mm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Em=it(Am),_m=L({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),as=it(_m),Dm=L({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Cm=it(Dm),Om=L({},Gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Um=it(Om),Rm=L({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hm=it(Rm),Bm=L({},Gl,{newState:0,oldState:0}),qm=it(Bm),Ym=[9,13,27,32],Tu=Jt&&"CompositionEvent"in window,Ia=null;Jt&&"documentMode"in document&&(Ia=document.documentMode);var Gm=Jt&&"TextEvent"in window&&!Ia,ns=Jt&&(!Tu||Ia&&8<Ia&&11>=Ia),is=" ",us=!1;function cs(e,t){switch(e){case"keyup":return Ym.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oa=!1;function Lm(e,t){switch(e){case"compositionend":return fs(t);case"keypress":return t.which!==32?null:(us=!0,is);case"textInput":return e=t.data,e===is&&us?null:e;default:return null}}function Qm(e,t){if(oa)return e==="compositionend"||!Tu&&cs(e,t)?(e=Pf(),Jn=bu=ml=null,oa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ns&&t.locale!=="ko"?null:t.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wm[e.type]:t==="textarea"}function rs(e,t,l,a){sa?ra?ra.push(a):ra=[a]:sa=a,t=Qi(t,"onChange"),0<t.length&&(l=new Fn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Pa=null,en=null;function Xm(e){Ko(e,0)}function Pn(e){var t=Ka(e);if(Zf(t))return e}function os(e,t){if(e==="change")return t}var ds=!1;if(Jt){var ju;if(Jt){var Nu="oninput"in document;if(!Nu){var ms=document.createElement("div");ms.setAttribute("oninput","return;"),Nu=typeof ms.oninput=="function"}ju=Nu}else ju=!1;ds=ju&&(!document.documentMode||9<document.documentMode)}function hs(){Pa&&(Pa.detachEvent("onpropertychange",vs),en=Pa=null)}function vs(e){if(e.propertyName==="value"&&Pn(en)){var t=[];rs(t,en,e,gu(e)),If(Xm,t)}}function Vm(e,t,l){e==="focusin"?(hs(),Pa=t,en=l,Pa.attachEvent("onpropertychange",vs)):e==="focusout"&&hs()}function Zm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(en)}function km(e,t){if(e==="click")return Pn(t)}function Km(e,t){if(e==="input"||e==="change")return Pn(t)}function Jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Jm;function tn(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Bt.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function gs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ys(e,t){var l=gs(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=gs(l)}}function ps(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ps(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=kn(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=kn(e.document)}return t}function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Wm=Jt&&"documentMode"in document&&11>=document.documentMode,da=null,Eu=null,ln=null,_u=!1;function xs(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;_u||da==null||da!==kn(a)||(a=da,"selectionStart"in a&&Au(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ln&&tn(ln,a)||(ln=a,a=Qi(Eu,"onSelect"),0<a.length&&(t=new Fn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=da)))}function Ll(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ma={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionrun:Ll("Transition","TransitionRun"),transitionstart:Ll("Transition","TransitionStart"),transitioncancel:Ll("Transition","TransitionCancel"),transitionend:Ll("Transition","TransitionEnd")},Du={},Ss={};Jt&&(Ss=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Ql(e){if(Du[e])return Du[e];if(!ma[e])return e;var t=ma[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Ss)return Du[e]=t[l];return e}var zs=Ql("animationend"),Ms=Ql("animationiteration"),Ts=Ql("animationstart"),$m=Ql("transitionrun"),Fm=Ql("transitionstart"),Im=Ql("transitioncancel"),js=Ql("transitionend"),Ns=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function qt(e,t){Ns.set(e,t),Yl(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],ha=0,Ou=0;function ti(){for(var e=ha,t=Ou=ha=0;t<e;){var l=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var n=Et[t];Et[t++]=null;var i=Et[t];if(Et[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&As(l,n,i)}}function li(e,t,l,a){Et[ha++]=e,Et[ha++]=t,Et[ha++]=l,Et[ha++]=a,Ou|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Uu(e,t,l,a){return li(e,t,l,a),ai(e)}function wl(e,t){return li(e,null,null,t),ai(e)}function As(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-mt(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function ai(e){if(50<jn)throw jn=0,wc=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var va={};function Pm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,l,a){return new Pm(e,t,l,a)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var l=e.alternate;return l===null?(l=vt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Es(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")Ru(e)&&(u=1);else if(typeof e=="string")u=n0(e,l,A.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case zt:return e=vt(31,l,t,n),e.elementType=zt,e.lanes=i,e;case Ye:return Xl(l.children,n,i,t);case ce:u=8,n|=24;break;case Ie:return e=vt(12,l,t,n|2),e.elementType=Ie,e.lanes=i,e;case St:return e=vt(13,l,t,n),e.elementType=St,e.lanes=i,e;case ke:return e=vt(19,l,t,n),e.elementType=ke,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ee:u=10;break e;case Lt:u=9;break e;case lt:u=11;break e;case W:u=14;break e;case Ke:u=16,a=null;break e}u=29,l=Error(m(130,e===null?"null":typeof e,"")),a=null}return t=vt(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Xl(e,t,l,a){return e=vt(7,e,a,t),e.lanes=l,e}function Hu(e,t,l){return e=vt(6,e,null,t),e.lanes=l,e}function _s(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function Bu(e,t,l){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ds=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var l=Ds.get(e);return l!==void 0?l:(t={value:e,source:t,stack:jt(t)},Ds.set(e,t),t)}return{value:e,source:t,stack:jt(t)}}var ga=[],ya=0,ii=null,an=0,Dt=[],Ct=0,hl=null,Qt=1,wt="";function $t(e,t){ga[ya++]=an,ga[ya++]=ii,ii=e,an=t}function Cs(e,t,l){Dt[Ct++]=Qt,Dt[Ct++]=wt,Dt[Ct++]=hl,hl=e;var a=Qt;e=wt;var n=32-mt(a)-1;a&=~(1<<n),l+=1;var i=32-mt(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Qt=1<<32-mt(t)+n|l<<n|a,wt=i+e}else Qt=1<<i|l<<n|a,wt=e}function qu(e){e.return!==null&&($t(e,1),Cs(e,1,0))}function Yu(e){for(;e===ii;)ii=ga[--ya],ga[ya]=null,an=ga[--ya],ga[ya]=null;for(;e===hl;)hl=Dt[--Ct],Dt[Ct]=null,wt=Dt[--Ct],Dt[Ct]=null,Qt=Dt[--Ct],Dt[Ct]=null}function Os(e,t){Dt[Ct++]=Qt,Dt[Ct++]=wt,Dt[Ct++]=hl,Qt=t.id,wt=t.overflow,hl=e}var Le=null,Se=null,le=!1,vl=null,Ot=!1,Gu=Error(m(519));function gl(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nn(_t(t,e)),Gu}function Us(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ge]=e,t[nt]=a,l){case"dialog":F("cancel",t),F("close",t);break;case"iframe":case"object":case"embed":F("load",t);break;case"video":case"audio":for(l=0;l<An.length;l++)F(An[l],t);break;case"source":F("error",t);break;case"img":case"image":case"link":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"input":F("invalid",t),kf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":F("invalid",t);break;case"textarea":F("invalid",t),Jf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Fo(t.textContent,l)?(a.popover!=null&&(F("beforetoggle",t),F("toggle",t)),a.onScroll!=null&&F("scroll",t),a.onScrollEnd!=null&&F("scrollend",t),a.onClick!=null&&(t.onclick=Kt),t=!0):t=!1,t||gl(e,!0)}function Rs(e){for(Le=e.return;Le;)switch(Le.tag){case 5:case 31:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:Le=Le.return}}function pa(e){if(e!==Le)return!1;if(!le)return Rs(e),le=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||af(e.type,e.memoizedProps)),l=!l),l&&Se&&gl(e),Rs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));Se=ud(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));Se=ud(e)}else t===27?(t=Se,Dl(e.type)?(e=sf,sf=null,Se=e):Se=t):Se=Le?Rt(e.stateNode.nextSibling):null;return!0}function Vl(){Se=Le=null,le=!1}function Lu(){var e=vl;return e!==null&&(st===null?st=e:st.push.apply(st,e),vl=null),e}function nn(e){vl===null?vl=[e]:vl.push(e)}var Qu=c(null),Zl=null,Ft=null;function yl(e,t,l){M(Qu,t._currentValue),t._currentValue=l}function It(e){e._currentValue=Qu.current,v(Qu)}function wu(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Xu(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var r=0;r<t.length;r++)if(f.context===t[r]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),wu(i.return,l,e),a||(u=null);break e}i=f.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(m(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),wu(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ba(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var f=n.type;ht(n.pendingProps.value,u.value)||(e!==null?e.push(f):e=[f])}}else if(n===_.current){if(u=n.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(On):e=[On])}n=n.return}e!==null&&Xu(t,e,l,a),t.flags|=262144}function ui(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function kl(e){Zl=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Hs(Zl,e)}function ci(e,t){return Zl===null&&kl(e),Hs(e,t)}function Hs(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Ft===null){if(e===null)throw Error(m(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return l}var eh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},th=z.unstable_scheduleCallback,lh=z.unstable_NormalPriority,De={$$typeof:Ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new eh,data:new Map,refCount:0}}function un(e){e.refCount--,e.refCount===0&&th(lh,function(){e.controller.abort()})}var cn=null,Zu=0,xa=0,Sa=null;function ah(e,t){if(cn===null){var l=cn=[];Zu=0,xa=Jc(),Sa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Zu++,t.then(Bs,Bs),t}function Bs(){if(--Zu===0&&cn!==null){Sa!==null&&(Sa.status="fulfilled");var e=cn;cn=null,xa=0,Sa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function nh(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var qs=S.S;S.S=function(e,t){So=We(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ah(e,t),qs!==null&&qs(e,t)};var Kl=c(null);function ku(){var e=Kl.current;return e!==null?e:ye.pooledCache}function fi(e,t){t===null?M(Kl,Kl.current):M(Kl,t.pool)}function Ys(){var e=ku();return e===null?null:{parent:De._currentValue,pool:e}}var za=Error(m(460)),Ku=Error(m(474)),si=Error(m(542)),ri={then:function(){}};function Gs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ls(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Kt,Kt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ws(e),e;default:if(typeof t.status=="string")t.then(Kt,Kt);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ws(e),e}throw Wl=t,za}}function Jl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Wl=l,za):l}}var Wl=null;function Qs(){if(Wl===null)throw Error(m(459));var e=Wl;return Wl=null,e}function ws(e){if(e===za||e===si)throw Error(m(483))}var Ma=null,fn=0;function oi(e){var t=fn;return fn+=1,Ma===null&&(Ma=[]),Ls(Ma,e,t)}function sn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===pe?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xs(e){function t(d,o){if(e){var g=d.deletions;g===null?(d.deletions=[o],d.flags|=16):g.push(o)}}function l(d,o){if(!e)return null;for(;o!==null;)t(d,o),o=o.sibling;return null}function a(d){for(var o=new Map;d!==null;)d.key!==null?o.set(d.key,d):o.set(d.index,d),d=d.sibling;return o}function n(d,o){return d=Wt(d,o),d.index=0,d.sibling=null,d}function i(d,o,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<o?(d.flags|=67108866,o):g):(d.flags|=67108866,o)):(d.flags|=1048576,o)}function u(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function f(d,o,g,T){return o===null||o.tag!==6?(o=Hu(g,d.mode,T),o.return=d,o):(o=n(o,g),o.return=d,o)}function r(d,o,g,T){var G=g.type;return G===Ye?x(d,o,g.props.children,T,g.key):o!==null&&(o.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ke&&Jl(G)===o.type)?(o=n(o,g.props),sn(o,g),o.return=d,o):(o=ni(g.type,g.key,g.props,null,d.mode,T),sn(o,g),o.return=d,o)}function y(d,o,g,T){return o===null||o.tag!==4||o.stateNode.containerInfo!==g.containerInfo||o.stateNode.implementation!==g.implementation?(o=Bu(g,d.mode,T),o.return=d,o):(o=n(o,g.children||[]),o.return=d,o)}function x(d,o,g,T,G){return o===null||o.tag!==7?(o=Xl(g,d.mode,T,G),o.return=d,o):(o=n(o,g),o.return=d,o)}function j(d,o,g){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Hu(""+o,d.mode,g),o.return=d,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Fe:return g=ni(o.type,o.key,o.props,null,d.mode,g),sn(g,o),g.return=d,g;case Ze:return o=Bu(o,d.mode,g),o.return=d,o;case Ke:return o=Jl(o),j(d,o,g)}if(Pe(o)||Je(o))return o=Xl(o,d.mode,g,null),o.return=d,o;if(typeof o.then=="function")return j(d,oi(o),g);if(o.$$typeof===Ee)return j(d,ci(d,o),g);di(d,o)}return null}function p(d,o,g,T){var G=o!==null?o.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return G!==null?null:f(d,o,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fe:return g.key===G?r(d,o,g,T):null;case Ze:return g.key===G?y(d,o,g,T):null;case Ke:return g=Jl(g),p(d,o,g,T)}if(Pe(g)||Je(g))return G!==null?null:x(d,o,g,T,null);if(typeof g.then=="function")return p(d,o,oi(g),T);if(g.$$typeof===Ee)return p(d,o,ci(d,g),T);di(d,g)}return null}function b(d,o,g,T,G){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return d=d.get(g)||null,f(o,d,""+T,G);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Fe:return d=d.get(T.key===null?g:T.key)||null,r(o,d,T,G);case Ze:return d=d.get(T.key===null?g:T.key)||null,y(o,d,T,G);case Ke:return T=Jl(T),b(d,o,g,T,G)}if(Pe(T)||Je(T))return d=d.get(g)||null,x(o,d,T,G,null);if(typeof T.then=="function")return b(d,o,g,oi(T),G);if(T.$$typeof===Ee)return b(d,o,g,ci(o,T),G);di(o,T)}return null}function B(d,o,g,T){for(var G=null,ne=null,q=o,J=o=0,ee=null;q!==null&&J<g.length;J++){q.index>J?(ee=q,q=null):ee=q.sibling;var ie=p(d,q,g[J],T);if(ie===null){q===null&&(q=ee);break}e&&q&&ie.alternate===null&&t(d,q),o=i(ie,o,J),ne===null?G=ie:ne.sibling=ie,ne=ie,q=ee}if(J===g.length)return l(d,q),le&&$t(d,J),G;if(q===null){for(;J<g.length;J++)q=j(d,g[J],T),q!==null&&(o=i(q,o,J),ne===null?G=q:ne.sibling=q,ne=q);return le&&$t(d,J),G}for(q=a(q);J<g.length;J++)ee=b(q,d,J,g[J],T),ee!==null&&(e&&ee.alternate!==null&&q.delete(ee.key===null?J:ee.key),o=i(ee,o,J),ne===null?G=ee:ne.sibling=ee,ne=ee);return e&&q.forEach(function(Hl){return t(d,Hl)}),le&&$t(d,J),G}function w(d,o,g,T){if(g==null)throw Error(m(151));for(var G=null,ne=null,q=o,J=o=0,ee=null,ie=g.next();q!==null&&!ie.done;J++,ie=g.next()){q.index>J?(ee=q,q=null):ee=q.sibling;var Hl=p(d,q,ie.value,T);if(Hl===null){q===null&&(q=ee);break}e&&q&&Hl.alternate===null&&t(d,q),o=i(Hl,o,J),ne===null?G=Hl:ne.sibling=Hl,ne=Hl,q=ee}if(ie.done)return l(d,q),le&&$t(d,J),G;if(q===null){for(;!ie.done;J++,ie=g.next())ie=j(d,ie.value,T),ie!==null&&(o=i(ie,o,J),ne===null?G=ie:ne.sibling=ie,ne=ie);return le&&$t(d,J),G}for(q=a(q);!ie.done;J++,ie=g.next())ie=b(q,d,J,ie.value,T),ie!==null&&(e&&ie.alternate!==null&&q.delete(ie.key===null?J:ie.key),o=i(ie,o,J),ne===null?G=ie:ne.sibling=ie,ne=ie);return e&&q.forEach(function(v0){return t(d,v0)}),le&&$t(d,J),G}function ge(d,o,g,T){if(typeof g=="object"&&g!==null&&g.type===Ye&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Fe:e:{for(var G=g.key;o!==null;){if(o.key===G){if(G=g.type,G===Ye){if(o.tag===7){l(d,o.sibling),T=n(o,g.props.children),T.return=d,d=T;break e}}else if(o.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ke&&Jl(G)===o.type){l(d,o.sibling),T=n(o,g.props),sn(T,g),T.return=d,d=T;break e}l(d,o);break}else t(d,o);o=o.sibling}g.type===Ye?(T=Xl(g.props.children,d.mode,T,g.key),T.return=d,d=T):(T=ni(g.type,g.key,g.props,null,d.mode,T),sn(T,g),T.return=d,d=T)}return u(d);case Ze:e:{for(G=g.key;o!==null;){if(o.key===G)if(o.tag===4&&o.stateNode.containerInfo===g.containerInfo&&o.stateNode.implementation===g.implementation){l(d,o.sibling),T=n(o,g.children||[]),T.return=d,d=T;break e}else{l(d,o);break}else t(d,o);o=o.sibling}T=Bu(g,d.mode,T),T.return=d,d=T}return u(d);case Ke:return g=Jl(g),ge(d,o,g,T)}if(Pe(g))return B(d,o,g,T);if(Je(g)){if(G=Je(g),typeof G!="function")throw Error(m(150));return g=G.call(g),w(d,o,g,T)}if(typeof g.then=="function")return ge(d,o,oi(g),T);if(g.$$typeof===Ee)return ge(d,o,ci(d,g),T);di(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,o!==null&&o.tag===6?(l(d,o.sibling),T=n(o,g),T.return=d,d=T):(l(d,o),T=Hu(g,d.mode,T),T.return=d,d=T),u(d)):l(d,o)}return function(d,o,g,T){try{fn=0;var G=ge(d,o,g,T);return Ma=null,G}catch(q){if(q===za||q===si)throw q;var ne=vt(29,q,null,d.mode);return ne.lanes=T,ne.return=d,ne}finally{}}}var $l=Xs(!0),Vs=Xs(!1),pl=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ue&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=ai(e),As(e,null,l),t}return li(e,a,t,l),ai(e)}function rn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Hf(e,l)}}function $u(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Fu=!1;function on(){if(Fu){var e=Sa;if(e!==null)throw e}}function dn(e,t,l,a){Fu=!1;var n=e.updateQueue;pl=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var r=f,y=r.next;r.next=null,u===null?i=y:u.next=y,u=r;var x=e.alternate;x!==null&&(x=x.updateQueue,f=x.lastBaseUpdate,f!==u&&(f===null?x.firstBaseUpdate=y:f.next=y,x.lastBaseUpdate=r))}if(i!==null){var j=n.baseState;u=0,x=y=r=null,f=i;do{var p=f.lane&-536870913,b=p!==f.lane;if(b?(P&p)===p:(a&p)===p){p!==0&&p===xa&&(Fu=!0),x!==null&&(x=x.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var B=e,w=f;p=t;var ge=l;switch(w.tag){case 1:if(B=w.payload,typeof B=="function"){j=B.call(ge,j,p);break e}j=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=w.payload,p=typeof B=="function"?B.call(ge,j,p):B,p==null)break e;j=L({},j,p);break e;case 2:pl=!0}}p=f.callback,p!==null&&(e.flags|=64,b&&(e.flags|=8192),b=n.callbacks,b===null?n.callbacks=[p]:b.push(p))}else b={lane:p,tag:f.tag,payload:f.payload,callback:f.callback,next:null},x===null?(y=x=b,r=j):x=x.next=b,u|=p;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;b=f,f=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);x===null&&(r=j),n.baseState=r,n.firstBaseUpdate=y,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),jl|=u,e.lanes=u,e.memoizedState=j}}function Zs(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function ks(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Zs(l[e],t)}var Ta=c(null),mi=c(0);function Ks(e,t){e=cl,M(mi,e),M(Ta,t),cl=e|t.baseLanes}function Iu(){M(mi,cl),M(Ta,Ta.current)}function Pu(){cl=mi.current,v(Ta),v(mi)}var gt=c(null),Ut=null;function Sl(e){var t=e.alternate;M(Ne,Ne.current&1),M(gt,e),Ut===null&&(t===null||Ta.current!==null||t.memoizedState!==null)&&(Ut=e)}function ec(e){M(Ne,Ne.current),M(gt,e),Ut===null&&(Ut=e)}function Js(e){e.tag===22?(M(Ne,Ne.current),M(gt,e),Ut===null&&(Ut=e)):zl()}function zl(){M(Ne,Ne.current),M(gt,gt.current)}function yt(e){v(gt),Ut===e&&(Ut=null),v(Ne)}var Ne=c(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||cf(l)||ff(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pt=0,k=null,he=null,Ce=null,vi=!1,ja=!1,Fl=!1,gi=0,mn=0,Na=null,ih=0;function Te(){throw Error(m(321))}function tc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!ht(e[l],t[l]))return!1;return!0}function lc(e,t,l,a,n,i){return Pt=i,k=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?Cr:yc,Fl=!1,i=l(a,n),Fl=!1,ja&&(i=$s(t,l,a,n)),Ws(e),i}function Ws(e){S.H=gn;var t=he!==null&&he.next!==null;if(Pt=0,Ce=he=k=null,vi=!1,mn=0,Na=null,t)throw Error(m(300));e===null||Oe||(e=e.dependencies,e!==null&&ui(e)&&(Oe=!0))}function $s(e,t,l,a){k=e;var n=0;do{if(ja&&(Na=null),mn=0,ja=!1,25<=n)throw Error(m(301));if(n+=1,Ce=he=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}S.H=Or,i=t(l,a)}while(ja);return i}function uh(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?hn(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(k.flags|=1024),t}function ac(){var e=gi!==0;return gi=0,e}function nc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function ic(e){if(vi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vi=!1}Pt=0,Ce=he=k=null,ja=!1,mn=gi=0,Na=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?k.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function Ae(){if(he===null){var e=k.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=Ce===null?k.memoizedState:Ce.next;if(t!==null)Ce=t,he=e;else{if(e===null)throw k.alternate===null?Error(m(467)):Error(m(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Ce===null?k.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hn(e){var t=mn;return mn+=1,Na===null&&(Na=[]),e=Ls(Na,e,t),t=k,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?Cr:yc),e}function pi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hn(e);if(e.$$typeof===Ee)return Qe(e)}throw Error(m(438,String(e)))}function uc(e){var t=null,l=k.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=k.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=yi(),k.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=rl;return t.index++,l}function el(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=Ae();return cc(t,he,e)}function cc(e,t,l){var a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=u=null,r=null,y=t,x=!1;do{var j=y.lane&-536870913;if(j!==y.lane?(P&j)===j:(Pt&j)===j){var p=y.revertLane;if(p===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),j===xa&&(x=!0);else if((Pt&p)===p){y=y.next,p===xa&&(x=!0);continue}else j={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},r===null?(f=r=j,u=i):r=r.next=j,k.lanes|=p,jl|=p;j=y.action,Fl&&l(i,j),i=y.hasEagerState?y.eagerState:l(i,j)}else p={lane:j,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},r===null?(f=r=p,u=i):r=r.next=p,k.lanes|=j,jl|=j;y=y.next}while(y!==null&&y!==t);if(r===null?u=i:r.next=f,!ht(i,e.memoizedState)&&(Oe=!0,x&&(l=Sa,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=r,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function fc(e){var t=Ae(),l=t.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ht(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Fs(e,t,l){var a=k,n=Ae(),i=le;if(i){if(l===void 0)throw Error(m(407));l=l()}else l=t();var u=!ht((he||n).memoizedState,l);if(u&&(n.memoizedState=l,Oe=!0),n=n.queue,oc(er.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||Ce!==null&&Ce.memoizedState.tag&1){if(a.flags|=2048,Aa(9,{destroy:void 0},Ps.bind(null,a,n,l,t),null),ye===null)throw Error(m(349));i||(Pt&127)!==0||Is(a,t,l)}return l}function Is(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=k.updateQueue,t===null?(t=yi(),k.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Ps(e,t,l,a){t.value=l,t.getSnapshot=a,tr(t)&&lr(e)}function er(e,t,l){return l(function(){tr(t)&&lr(e)})}function tr(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!ht(e,l)}catch{return!0}}function lr(e){var t=wl(e,2);t!==null&&rt(t,e,2)}function sc(e){var t=tt();if(typeof e=="function"){var l=e;if(e=l(),Fl){ol(!0);try{l()}finally{ol(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:e},t}function ar(e,t,l,a){return e.baseState=l,cc(e,he,typeof a=="function"?a:el)}function ch(e,t,l,a,n){if(zi(e))throw Error(m(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};S.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,nr(t,i)):(i.next=l.next,t.pending=l.next=i)}}function nr(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=S.T,u={};S.T=u;try{var f=l(n,a),r=S.S;r!==null&&r(u,f),ir(e,t,f)}catch(y){rc(e,t,y)}finally{i!==null&&u.types!==null&&(i.types=u.types),S.T=i}}else try{i=l(n,a),ir(e,t,i)}catch(y){rc(e,t,y)}}function ir(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){ur(e,t,a)},function(a){return rc(e,t,a)}):ur(e,t,l)}function ur(e,t,l){t.status="fulfilled",t.value=l,cr(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,nr(e,l)))}function rc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,cr(t),t=t.next;while(t!==a)}e.action=null}function cr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function fr(e,t){return t}function sr(e,t){if(le){var l=ye.formState;if(l!==null){e:{var a=k;if(le){if(Se){t:{for(var n=Se,i=Ot;n.nodeType!==8;){if(!i){n=null;break t}if(n=Rt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Se=Rt(n.nextSibling),a=n.data==="F!";break e}}gl(a)}a=!1}a&&(t=l[0])}}return l=tt(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:t},l.queue=a,l=Er.bind(null,k,a),a.dispatch=l,a=sc(!1),i=gc.bind(null,k,!1,a.queue),a=tt(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=ch.bind(null,k,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function rr(e){var t=Ae();return or(t,he,e)}function or(e,t,l){if(t=cc(e,t,fr)[0],e=bi(el)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=hn(t)}catch(u){throw u===za?si:u}else a=t;t=Ae();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(k.flags|=2048,Aa(9,{destroy:void 0},fh.bind(null,n,l),null)),[a,i,e]}function fh(e,t){e.action=t}function dr(e){var t=Ae(),l=he;if(l!==null)return or(t,l,e);Ae(),t=t.memoizedState,l=Ae();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Aa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=k.updateQueue,t===null&&(t=yi(),k.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function mr(){return Ae().memoizedState}function xi(e,t,l,a){var n=tt();k.flags|=e,n.memoizedState=Aa(1|t,{destroy:void 0},l,a===void 0?null:a)}function Si(e,t,l,a){var n=Ae();a=a===void 0?null:a;var i=n.memoizedState.inst;he!==null&&a!==null&&tc(a,he.memoizedState.deps)?n.memoizedState=Aa(t,i,l,a):(k.flags|=e,n.memoizedState=Aa(1|t,i,l,a))}function hr(e,t){xi(8390656,8,e,t)}function oc(e,t){Si(2048,8,e,t)}function sh(e){k.flags|=4;var t=k.updateQueue;if(t===null)t=yi(),k.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function vr(e){var t=Ae().memoizedState;return sh({ref:t,nextImpl:e}),function(){if((ue&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function gr(e,t){return Si(4,2,e,t)}function yr(e,t){return Si(4,4,e,t)}function pr(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function br(e,t,l){l=l!=null?l.concat([e]):null,Si(4,4,pr.bind(null,t,e),l)}function dc(){}function xr(e,t){var l=Ae();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&tc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Sr(e,t){var l=Ae();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&tc(t,a[1]))return a[0];if(a=e(),Fl){ol(!0);try{e()}finally{ol(!1)}}return l.memoizedState=[a,t],a}function mc(e,t,l){return l===void 0||(Pt&1073741824)!==0&&(P&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Mo(),k.lanes|=e,jl|=e,l)}function zr(e,t,l,a){return ht(l,t)?l:Ta.current!==null?(e=mc(e,l,a),ht(e,t)||(Oe=!0),e):(Pt&42)===0||(Pt&1073741824)!==0&&(P&261930)===0?(Oe=!0,e.memoizedState=l):(e=Mo(),k.lanes|=e,jl|=e,t)}function Mr(e,t,l,a,n){var i=C.p;C.p=i!==0&&8>i?i:8;var u=S.T,f={};S.T=f,gc(e,!1,t,l);try{var r=n(),y=S.S;if(y!==null&&y(f,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var x=nh(r,a);vn(e,t,x,xt(e))}else vn(e,t,a,xt(e))}catch(j){vn(e,t,{then:function(){},status:"rejected",reason:j},xt())}finally{C.p=i,u!==null&&f.types!==null&&(u.types=f.types),S.T=u}}function rh(){}function hc(e,t,l,a){if(e.tag!==5)throw Error(m(476));var n=Tr(e).queue;Mr(e,n,t,X,l===null?rh:function(){return jr(e),l(a)})}function Tr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:X},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function jr(e){var t=Tr(e);t.next===null&&(t=e.alternate.memoizedState),vn(e,t.next.queue,{},xt())}function vc(){return Qe(On)}function Nr(){return Ae().memoizedState}function Ar(){return Ae().memoizedState}function oh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=xt();e=bl(l);var a=xl(t,e,l);a!==null&&(rt(a,t,l),rn(a,t,l)),t={cache:Vu()},e.payload=t;return}t=t.return}}function dh(e,t,l){var a=xt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},zi(e)?_r(t,l):(l=Uu(e,t,l,a),l!==null&&(rt(l,e,a),Dr(l,t,a)))}function Er(e,t,l){var a=xt();vn(e,t,l,a)}function vn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(zi(e))_r(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,f=i(u,l);if(n.hasEagerState=!0,n.eagerState=f,ht(f,u))return li(e,t,n,0),ye===null&&ti(),!1}catch{}finally{}if(l=Uu(e,t,n,a),l!==null)return rt(l,e,a),Dr(l,t,a),!0}return!1}function gc(e,t,l,a){if(a={lane:2,revertLane:Jc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zi(e)){if(t)throw Error(m(479))}else t=Uu(e,l,a,2),t!==null&&rt(t,e,2)}function zi(e){var t=e.alternate;return e===k||t!==null&&t===k}function _r(e,t){ja=vi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Dr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Hf(e,l)}}var gn={readContext:Qe,use:pi,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te};gn.useEffectEvent=Te;var Cr={readContext:Qe,use:pi,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:hr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,xi(4194308,4,pr.bind(null,t,e),l)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){xi(4,2,e,t)},useMemo:function(e,t){var l=tt();t=t===void 0?null:t;var a=e();if(Fl){ol(!0);try{e()}finally{ol(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=tt();if(l!==void 0){var n=l(t);if(Fl){ol(!0);try{l(t)}finally{ol(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=dh.bind(null,k,e),[a.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=sc(e);var t=e.queue,l=Er.bind(null,k,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:dc,useDeferredValue:function(e,t){var l=tt();return mc(l,e,t)},useTransition:function(){var e=sc(!1);return e=Mr.bind(null,k,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=k,n=tt();if(le){if(l===void 0)throw Error(m(407));l=l()}else{if(l=t(),ye===null)throw Error(m(349));(P&127)!==0||Is(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,hr(er.bind(null,a,i,e),[e]),a.flags|=2048,Aa(9,{destroy:void 0},Ps.bind(null,a,i,l,t),null),l},useId:function(){var e=tt(),t=ye.identifierPrefix;if(le){var l=wt,a=Qt;l=(a&~(1<<32-mt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=gi++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=ih++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:vc,useFormState:sr,useActionState:sr,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=gc.bind(null,k,!0,l),l.dispatch=t,[e,t]},useMemoCache:uc,useCacheRefresh:function(){return tt().memoizedState=oh.bind(null,k)},useEffectEvent:function(e){var t=tt(),l={impl:e};return t.memoizedState=l,function(){if((ue&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}},yc={readContext:Qe,use:pi,useCallback:xr,useContext:Qe,useEffect:oc,useImperativeHandle:br,useInsertionEffect:gr,useLayoutEffect:yr,useMemo:Sr,useReducer:bi,useRef:mr,useState:function(){return bi(el)},useDebugValue:dc,useDeferredValue:function(e,t){var l=Ae();return zr(l,he.memoizedState,e,t)},useTransition:function(){var e=bi(el)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:hn(e),t]},useSyncExternalStore:Fs,useId:Nr,useHostTransitionStatus:vc,useFormState:rr,useActionState:rr,useOptimistic:function(e,t){var l=Ae();return ar(l,he,e,t)},useMemoCache:uc,useCacheRefresh:Ar};yc.useEffectEvent=vr;var Or={readContext:Qe,use:pi,useCallback:xr,useContext:Qe,useEffect:oc,useImperativeHandle:br,useInsertionEffect:gr,useLayoutEffect:yr,useMemo:Sr,useReducer:fc,useRef:mr,useState:function(){return fc(el)},useDebugValue:dc,useDeferredValue:function(e,t){var l=Ae();return he===null?mc(l,e,t):zr(l,he.memoizedState,e,t)},useTransition:function(){var e=fc(el)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:hn(e),t]},useSyncExternalStore:Fs,useId:Nr,useHostTransitionStatus:vc,useFormState:dr,useActionState:dr,useOptimistic:function(e,t){var l=Ae();return he!==null?ar(l,he,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:uc,useCacheRefresh:Ar};Or.useEffectEvent=vr;function pc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:L({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var bc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=xt(),n=bl(a);n.payload=t,l!=null&&(n.callback=l),t=xl(e,n,a),t!==null&&(rt(t,e,a),rn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=xt(),n=bl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=xl(e,n,a),t!==null&&(rt(t,e,a),rn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=xt(),a=bl(l);a.tag=2,t!=null&&(a.callback=t),t=xl(e,a,l),t!==null&&(rt(t,e,l),rn(t,e,l))}};function Ur(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!tn(l,a)||!tn(n,i):!0}function Rr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function Il(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=L({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Hr(e){ei(e)}function Br(e){console.error(e)}function qr(e){ei(e)}function Mi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Yr(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function xc(e,t,l){return l=bl(l),l.tag=3,l.payload={element:null},l.callback=function(){Mi(e,t)},l}function Gr(e){return e=bl(e),e.tag=3,e}function Lr(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Yr(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Yr(t,l,a),typeof n!="function"&&(Nl===null?Nl=new Set([this]):Nl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function mh(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ba(t,l,n,!0),l=gt.current,l!==null){switch(l.tag){case 31:case 13:return Ut===null?Hi():l.alternate===null&&je===0&&(je=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===ri?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Zc(e,a,n)),!1;case 22:return l.flags|=65536,a===ri?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Zc(e,a,n)),!1}throw Error(m(435,l.tag))}return Zc(e,a,n),Hi(),!1}if(le)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Gu&&(e=Error(m(422),{cause:a}),nn(_t(e,l)))):(a!==Gu&&(t=Error(m(423),{cause:a}),nn(_t(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=_t(a,l),n=xc(e.stateNode,a,n),$u(e,n),je!==4&&(je=2)),!1;var i=Error(m(520),{cause:a});if(i=_t(i,l),Tn===null?Tn=[i]:Tn.push(i),je!==4&&(je=2),t===null)return!0;a=_t(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=xc(l.stateNode,a,e),$u(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Nl===null||!Nl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Gr(n),Lr(n,e,l,a),$u(l,n),!1}l=l.return}while(l!==null);return!1}var Sc=Error(m(461)),Oe=!1;function we(e,t,l,a){t.child=e===null?Vs(t,null,l,a):$l(t,e.child,l,a)}function Qr(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var f in a)f!=="ref"&&(u[f]=a[f])}else u=a;return kl(t),a=lc(e,t,l,u,i,n),f=ac(),e!==null&&!Oe?(nc(e,t,n),tl(e,t,n)):(le&&f&&qu(t),t.flags|=1,we(e,t,a,n),t.child)}function wr(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Ru(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Xr(e,t,i,a,n)):(e=ni(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!_c(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:tn,l(u,a)&&e.ref===t.ref)return tl(e,t,n)}return t.flags|=1,e=Wt(i,a),e.ref=t.ref,e.return=t,t.child=e}function Xr(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(tn(i,a)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=a=i,_c(e,n))(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,tl(e,t,n)}return zc(e,t,l,a,n)}function Vr(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Zr(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fi(t,i!==null?i.cachePool:null),i!==null?Ks(t,i):Iu(),Js(t);else return a=t.lanes=536870912,Zr(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(fi(t,i.cachePool),Ks(t,i),zl(),t.memoizedState=null):(e!==null&&fi(t,null),Iu(),zl());return we(e,t,n,l),t.child}function yn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Zr(e,t,l,a,n){var i=ku();return i=i===null?null:{parent:De._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&fi(t,null),Iu(),Js(t),e!==null&&ba(e,t,a,!0),t.childLanes=n,null}function Ti(e,t){return t=Ni({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function kr(e,t,l){return $l(t,e.child,null,l),e=Ti(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function hh(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(le){if(a.mode==="hidden")return e=Ti(t,a),t.lanes=536870912,yn(null,e);if(ec(t),(e=Se)?(e=id(e,Ot),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hl!==null?{id:Qt,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},l=_s(e),l.return=t,t.child=l,Le=t,Se=null)):e=null,e===null)throw gl(t);return t.lanes=536870912,null}return Ti(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(ec(t),n)if(t.flags&256)t.flags&=-257,t=kr(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Oe||ba(e,t,l,!1),n=(l&e.childLanes)!==0,Oe||n){if(a=ye,a!==null&&(u=Bf(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,wl(e,u),rt(a,e,u),Sc;Hi(),t=kr(e,t,l)}else e=i.treeContext,Se=Rt(u.nextSibling),Le=t,le=!0,vl=null,Ot=!1,e!==null&&Os(t,e),t=Ti(t,a),t.flags|=4096;return t}return e=Wt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ji(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(m(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function zc(e,t,l,a,n){return kl(t),l=lc(e,t,l,a,void 0,n),a=ac(),e!==null&&!Oe?(nc(e,t,n),tl(e,t,n)):(le&&a&&qu(t),t.flags|=1,we(e,t,l,n),t.child)}function Kr(e,t,l,a,n,i){return kl(t),t.updateQueue=null,l=$s(t,a,l,n),Ws(e),a=ac(),e!==null&&!Oe?(nc(e,t,i),tl(e,t,i)):(le&&a&&qu(t),t.flags|=1,we(e,t,l,i),t.child)}function Jr(e,t,l,a,n){if(kl(t),t.stateNode===null){var i=va,u=l.contextType;typeof u=="object"&&u!==null&&(i=Qe(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Ju(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?Qe(u):va,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(pc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&bc.enqueueReplaceState(i,i.state,null),dn(t,a,i,n),on(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,r=Il(l,f);i.props=r;var y=i.context,x=l.contextType;u=va,typeof x=="object"&&x!==null&&(u=Qe(x));var j=l.getDerivedStateFromProps;x=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||y!==u)&&Rr(t,i,a,u),pl=!1;var p=t.memoizedState;i.state=p,dn(t,a,i,n),on(),y=t.memoizedState,f||p!==y||pl?(typeof j=="function"&&(pc(t,l,j,a),y=t.memoizedState),(r=pl||Ur(t,l,r,a,p,y,u))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=u,a=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Wu(e,t),u=t.memoizedProps,x=Il(l,u),i.props=x,j=t.pendingProps,p=i.context,y=l.contextType,r=va,typeof y=="object"&&y!==null&&(r=Qe(y)),f=l.getDerivedStateFromProps,(y=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==j||p!==r)&&Rr(t,i,a,r),pl=!1,p=t.memoizedState,i.state=p,dn(t,a,i,n),on();var b=t.memoizedState;u!==j||p!==b||pl||e!==null&&e.dependencies!==null&&ui(e.dependencies)?(typeof f=="function"&&(pc(t,l,f,a),b=t.memoizedState),(x=pl||Ur(t,l,x,a,p,b,r)||e!==null&&e.dependencies!==null&&ui(e.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,b,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,b,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),i.props=a,i.state=b,i.context=r,a=x):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,ji(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=$l(t,e.child,null,n),t.child=$l(t,null,l,n)):we(e,t,l,n),t.memoizedState=i.state,e=t.child):e=tl(e,t,n),e}function Wr(e,t,l,a){return Vl(),t.flags|=256,we(e,t,l,a),t.child}var Mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(e){return{baseLanes:e,cachePool:Ys()}}function jc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=bt),e}function $r(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ne.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(le){if(n?Sl(t):zl(),(e=Se)?(e=id(e,Ot),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hl!==null?{id:Qt,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},l=_s(e),l.return=t,t.child=l,Le=t,Se=null)):e=null,e===null)throw gl(t);return ff(e)?t.lanes=32:t.lanes=536870912,null}var f=a.children;return a=a.fallback,n?(zl(),n=t.mode,f=Ni({mode:"hidden",children:f},n),a=Xl(a,n,l,null),f.return=t,a.return=t,f.sibling=a,t.child=f,a=t.child,a.memoizedState=Tc(l),a.childLanes=jc(e,u,l),t.memoizedState=Mc,yn(null,a)):(Sl(t),Nc(t,f))}var r=e.memoizedState;if(r!==null&&(f=r.dehydrated,f!==null)){if(i)t.flags&256?(Sl(t),t.flags&=-257,t=Ac(e,t,l)):t.memoizedState!==null?(zl(),t.child=e.child,t.flags|=128,t=null):(zl(),f=a.fallback,n=t.mode,a=Ni({mode:"visible",children:a.children},n),f=Xl(f,n,l,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,$l(t,e.child,null,l),a=t.child,a.memoizedState=Tc(l),a.childLanes=jc(e,u,l),t.memoizedState=Mc,t=yn(null,a));else if(Sl(t),ff(f)){if(u=f.nextSibling&&f.nextSibling.dataset,u)var y=u.dgst;u=y,a=Error(m(419)),a.stack="",a.digest=u,nn({value:a,source:null,stack:null}),t=Ac(e,t,l)}else if(Oe||ba(e,t,l,!1),u=(l&e.childLanes)!==0,Oe||u){if(u=ye,u!==null&&(a=Bf(u,l),a!==0&&a!==r.retryLane))throw r.retryLane=a,wl(e,a),rt(u,e,a),Sc;cf(f)||Hi(),t=Ac(e,t,l)}else cf(f)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,Se=Rt(f.nextSibling),Le=t,le=!0,vl=null,Ot=!1,e!==null&&Os(t,e),t=Nc(t,a.children),t.flags|=4096);return t}return n?(zl(),f=a.fallback,n=t.mode,r=e.child,y=r.sibling,a=Wt(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,y!==null?f=Wt(y,f):(f=Xl(f,n,l,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,yn(null,a),a=t.child,f=e.child.memoizedState,f===null?f=Tc(l):(n=f.cachePool,n!==null?(r=De._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Ys(),f={baseLanes:f.baseLanes|l,cachePool:n}),a.memoizedState=f,a.childLanes=jc(e,u,l),t.memoizedState=Mc,yn(e.child,a)):(Sl(t),l=e.child,e=l.sibling,l=Wt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Nc(e,t){return t=Ni({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ni(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function Ac(e,t,l){return $l(t,e.child,null,l),e=Nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fr(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),wu(e.return,t,l)}function Ec(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Ir(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=Ne.current,f=(u&2)!==0;if(f?(u=u&1|2,t.flags|=128):u&=1,M(Ne,u),we(e,t,a,l),a=le?an:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fr(e,l,t);else if(e.tag===19)Fr(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&hi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Ec(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&hi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Ec(t,!0,l,null,i,a);break;case"together":Ec(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function tl(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),jl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ba(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,l=Wt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Wt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function _c(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ui(e)))}function vh(e,t,l){switch(t.tag){case 3:Q(t,t.stateNode.containerInfo),yl(t,De,e.memoizedState.cache),Vl();break;case 27:case 5:me(t);break;case 4:Q(t,t.stateNode.containerInfo);break;case 10:yl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ec(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Sl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?$r(e,t,l):(Sl(t),e=tl(e,t,l),e!==null?e.sibling:null);Sl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ba(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Ir(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),M(Ne,Ne.current),a)break;return null;case 22:return t.lanes=0,Vr(e,t,l,t.pendingProps);case 24:yl(t,De,e.memoizedState.cache)}return tl(e,t,l)}function Pr(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Oe=!0;else{if(!_c(e,l)&&(t.flags&128)===0)return Oe=!1,vh(e,t,l);Oe=(e.flags&131072)!==0}else Oe=!1,le&&(t.flags&1048576)!==0&&Cs(t,an,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Jl(t.elementType),t.type=e,typeof e=="function")Ru(e)?(a=Il(e,a),t.tag=1,t=Jr(null,t,e,a,l)):(t.tag=0,t=zc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===lt){t.tag=11,t=Qr(null,t,e,a,l);break e}else if(n===W){t.tag=14,t=wr(null,t,e,a,l);break e}}throw t=Tt(e)||e,Error(m(306,t,""))}}return t;case 0:return zc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Il(a,t.pendingProps),Jr(e,t,a,n,l);case 3:e:{if(Q(t,t.stateNode.containerInfo),e===null)throw Error(m(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,Wu(e,t),dn(t,a,null,l);var u=t.memoizedState;if(a=u.cache,yl(t,De,a),a!==i.cache&&Xu(t,[De],l,!0),on(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Wr(e,t,a,l);break e}else if(a!==n){n=_t(Error(m(424)),t),nn(n),t=Wr(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=Rt(e.firstChild),Le=t,le=!0,vl=null,Ot=!0,l=Vs(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Vl(),a===n){t=tl(e,t,l);break e}we(e,t,a,l)}t=t.child}return t;case 26:return ji(e,t),e===null?(l=od(t.type,null,t.pendingProps,null))?t.memoizedState=l:le||(l=t.type,e=t.pendingProps,a=wi(O.current).createElement(l),a[Ge]=t,a[nt]=e,Xe(a,l,e),Be(a),t.stateNode=a):t.memoizedState=od(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&le&&(a=t.stateNode=fd(t.type,t.pendingProps,O.current),Le=t,Ot=!0,n=Se,Dl(t.type)?(sf=n,Se=Rt(a.firstChild)):Se=n),we(e,t,t.pendingProps.children,l),ji(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&le&&((n=a=Se)&&(a=Zh(a,t.type,t.pendingProps,Ot),a!==null?(t.stateNode=a,Le=t,Se=Rt(a.firstChild),Ot=!1,n=!0):n=!1),n||gl(t)),me(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,af(n,i)?a=null:u!==null&&af(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=lc(e,t,uh,null,null,l),On._currentValue=n),ji(e,t),we(e,t,a,l),t.child;case 6:return e===null&&le&&((e=l=Se)&&(l=kh(l,t.pendingProps,Ot),l!==null?(t.stateNode=l,Le=t,Se=null,e=!0):e=!1),e||gl(t)),null;case 13:return $r(e,t,l);case 4:return Q(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=$l(t,null,a,l):we(e,t,a,l),t.child;case 11:return Qr(e,t,t.type,t.pendingProps,l);case 7:return we(e,t,t.pendingProps,l),t.child;case 8:return we(e,t,t.pendingProps.children,l),t.child;case 12:return we(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,yl(t,t.type,a.value),we(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,kl(t),n=Qe(n),a=a(n),t.flags|=1,we(e,t,a,l),t.child;case 14:return wr(e,t,t.type,t.pendingProps,l);case 15:return Xr(e,t,t.type,t.pendingProps,l);case 19:return Ir(e,t,l);case 31:return hh(e,t,l);case 22:return Vr(e,t,l,t.pendingProps);case 24:return kl(t),a=Qe(De),e===null?(n=ku(),n===null&&(n=ye,i=Vu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Ju(t),yl(t,De,n)):((e.lanes&l)!==0&&(Wu(e,t),dn(t,null,null,l),on()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),yl(t,De,a)):(a=i.cache,yl(t,De,a),a!==n.cache&&Xu(t,[De],l,!0))),we(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function ll(e){e.flags|=4}function Dc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Ao())e.flags|=8192;else throw Wl=ri,Ku}else e.flags&=-16777217}function eo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gd(t))if(Ao())e.flags|=8192;else throw Wl=ri,Ku}function Ai(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Uf():536870912,e.lanes|=t,Ca|=t)}function pn(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function gh(e,t,l){var a=t.pendingProps;switch(Yu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),It(De),V(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(pa(t)?ll(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lu())),ze(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ll(t),i!==null?(ze(t),eo(t,i)):(ze(t),Dc(t,n,null,a,l))):i?i!==e.memoizedState?(ll(t),ze(t),eo(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&ll(t),ze(t),Dc(t,n,e,a,l)),null;case 27:if(se(t),l=O.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ll(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return ze(t),null}e=A.current,pa(t)?Us(t):(e=fd(n,a,l),t.stateNode=e,ll(t))}return ze(t),null;case 5:if(se(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ll(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return ze(t),null}if(i=A.current,pa(t))Us(t);else{var u=wi(O.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Ge]=t,i[nt]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Xe(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&ll(t)}}return ze(t),Dc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&ll(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(m(166));if(e=O.current,pa(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Le,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Fo(e.nodeValue,l)),e||gl(t,!0)}else e=wi(e).createTextNode(a),e[Ge]=t,t.stateNode=e}return ze(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=pa(t),l!==null){if(e===null){if(!a)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[Ge]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else l=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(m(558))}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=pa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[Ge]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Ai(t,t.updateQueue),ze(t),null);case 4:return V(),e===null&&Ic(t.stateNode.containerInfo),ze(t),null;case 10:return It(t.type),ze(t),null;case 19:if(v(Ne),a=t.memoizedState,a===null)return ze(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)pn(a,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=hi(e),i!==null){for(t.flags|=128,pn(a,!1),e=i.updateQueue,t.updateQueue=e,Ai(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Es(l,e),l=l.sibling;return M(Ne,Ne.current&1|2),le&&$t(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&We()>Oi&&(t.flags|=128,n=!0,pn(a,!1),t.lanes=4194304)}else{if(!n)if(e=hi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ai(t,e),pn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!le)return ze(t),null}else 2*We()-a.renderingStartTime>Oi&&l!==536870912&&(t.flags|=128,n=!0,pn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=We(),e.sibling=null,l=Ne.current,M(Ne,n?l&1|2:l&1),le&&$t(t,a.treeForkCount),e):(ze(t),null);case 22:case 23:return yt(t),Pu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),l=t.updateQueue,l!==null&&Ai(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&v(Kl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),It(De),ze(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function yh(e,t){switch(Yu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return It(De),V(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return se(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(m(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return v(Ne),null;case 4:return V(),null;case 10:return It(t.type),null;case 22:case 23:return yt(t),Pu(),e!==null&&v(Kl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return It(De),null;case 25:return null;default:return null}}function to(e,t){switch(Yu(t),t.tag){case 3:It(De),V();break;case 26:case 27:case 5:se(t);break;case 4:V();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:v(Ne);break;case 10:It(t.type);break;case 22:case 23:yt(t),Pu(),e!==null&&v(Kl);break;case 24:It(De)}}function bn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(f){de(t,t.return,f)}}function Ml(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,f=u.destroy;if(f!==void 0){u.destroy=void 0,n=t;var r=l,y=f;try{y()}catch(x){de(n,r,x)}}}a=a.next}while(a!==i)}}catch(x){de(t,t.return,x)}}function lo(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{ks(t,l)}catch(a){de(e,e.return,a)}}}function ao(e,t,l){l.props=Il(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){de(e,t,a)}}function xn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){de(e,t,n)}}function Xt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){de(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){de(e,t,n)}else l.current=null}function no(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){de(e,e.return,n)}}function Cc(e,t,l){try{var a=e.stateNode;Gh(a,e.type,l,t),a[nt]=t}catch(n){de(e,e.return,n)}}function io(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dl(e.type)||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||io(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Kt));else if(a!==4&&(a===27&&Dl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Uc(e,t,l),e=e.sibling;e!==null;)Uc(e,t,l),e=e.sibling}function Ei(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Dl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ei(e,t,l),e=e.sibling;e!==null;)Ei(e,t,l),e=e.sibling}function uo(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Xe(t,a,l),t[Ge]=e,t[nt]=l}catch(i){de(e,e.return,i)}}var al=!1,Ue=!1,Rc=!1,co=typeof WeakSet=="function"?WeakSet:Set,qe=null;function ph(e,t){if(e=e.containerInfo,tf=Wi,e=bs(e),Au(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,f=-1,r=-1,y=0,x=0,j=e,p=null;t:for(;;){for(var b;j!==l||n!==0&&j.nodeType!==3||(f=u+n),j!==i||a!==0&&j.nodeType!==3||(r=u+a),j.nodeType===3&&(u+=j.nodeValue.length),(b=j.firstChild)!==null;)p=j,j=b;for(;;){if(j===e)break t;if(p===l&&++y===n&&(f=u),p===i&&++x===a&&(r=u),(b=j.nextSibling)!==null)break;j=p,p=j.parentNode}j=b}l=f===-1||r===-1?null:{start:f,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(lf={focusedElem:e,selectionRange:l},Wi=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var B=Il(l.type,n);e=a.getSnapshotBeforeUpdate(B,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(w){de(l,l.return,w)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)uf(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function fo(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:il(e,l),a&4&&bn(5,l);break;case 1:if(il(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){de(l,l.return,u)}else{var n=Il(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){de(l,l.return,u)}}a&64&&lo(l),a&512&&xn(l,l.return);break;case 3:if(il(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{ks(e,t)}catch(u){de(l,l.return,u)}}break;case 27:t===null&&a&4&&uo(l);case 26:case 5:il(e,l),t===null&&a&4&&no(l),a&512&&xn(l,l.return);break;case 12:il(e,l);break;case 31:il(e,l),a&4&&oo(e,l);break;case 13:il(e,l),a&4&&mo(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Ah.bind(null,l),Kh(e,l))));break;case 22:if(a=l.memoizedState!==null||al,!a){t=t!==null&&t.memoizedState!==null||Ue,n=al;var i=Ue;al=a,(Ue=t)&&!i?ul(e,l,(l.subtreeFlags&8772)!==0):il(e,l),al=n,Ue=i}break;case 30:break;default:il(e,l)}}function so(e){var t=e.alternate;t!==null&&(e.alternate=null,so(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ru(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,ut=!1;function nl(e,t,l){for(l=l.child;l!==null;)ro(e,t,l),l=l.sibling}function ro(e,t,l){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Bl,l)}catch{}switch(l.tag){case 26:Ue||Xt(l,t),nl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ue||Xt(l,t);var a=Me,n=ut;Dl(l.type)&&(Me=l.stateNode,ut=!1),nl(e,t,l),_n(l.stateNode),Me=a,ut=n;break;case 5:Ue||Xt(l,t);case 6:if(a=Me,n=ut,Me=null,nl(e,t,l),Me=a,ut=n,Me!==null)if(ut)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(l.stateNode)}catch(i){de(l,t,i)}else try{Me.removeChild(l.stateNode)}catch(i){de(l,t,i)}break;case 18:Me!==null&&(ut?(e=Me,ad(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ga(e)):ad(Me,l.stateNode));break;case 4:a=Me,n=ut,Me=l.stateNode.containerInfo,ut=!0,nl(e,t,l),Me=a,ut=n;break;case 0:case 11:case 14:case 15:Ml(2,l,t),Ue||Ml(4,l,t),nl(e,t,l);break;case 1:Ue||(Xt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&ao(l,t,a)),nl(e,t,l);break;case 21:nl(e,t,l);break;case 22:Ue=(a=Ue)||l.memoizedState!==null,nl(e,t,l),Ue=a;break;default:nl(e,t,l)}}function oo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ga(e)}catch(l){de(t,t.return,l)}}}function mo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ga(e)}catch(l){de(t,t.return,l)}}function bh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new co),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new co),t;default:throw Error(m(435,e.tag))}}function _i(e,t){var l=bh(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Eh.bind(null,e,a);a.then(n,n)}})}function ct(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 27:if(Dl(f.type)){Me=f.stateNode,ut=!1;break e}break;case 5:Me=f.stateNode,ut=!1;break e;case 3:case 4:Me=f.stateNode.containerInfo,ut=!0;break e}f=f.return}if(Me===null)throw Error(m(160));ro(i,u,n),Me=null,ut=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ho(t,e),t=t.sibling}var Yt=null;function ho(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ft(e),a&4&&(Ml(3,e,e.return),bn(3,e),Ml(5,e,e.return));break;case 1:ct(t,e),ft(e),a&512&&(Ue||l===null||Xt(l,l.return)),a&64&&al&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Yt;if(ct(t,e),ft(e),a&512&&(Ue||l===null||Xt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[ka]||i[Ge]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Xe(i,a,l),i[Ge]=e,Be(i),a=i;break e;case"link":var u=hd("link","href",n).get(a+(l.href||""));if(u){for(var f=0;f<u.length;f++)if(i=u[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(f,1);break t}}i=n.createElement(a),Xe(i,a,l),n.head.appendChild(i);break;case"meta":if(u=hd("meta","content",n).get(a+(l.content||""))){for(f=0;f<u.length;f++)if(i=u[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(f,1);break t}}i=n.createElement(a),Xe(i,a,l),n.head.appendChild(i);break;default:throw Error(m(468,a))}i[Ge]=e,Be(i),a=i}e.stateNode=a}else vd(n,e.type,e.stateNode);else e.stateNode=md(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?vd(n,e.type,e.stateNode):md(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Cc(e,e.memoizedProps,l.memoizedProps)}break;case 27:ct(t,e),ft(e),a&512&&(Ue||l===null||Xt(l,l.return)),l!==null&&a&4&&Cc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ct(t,e),ft(e),a&512&&(Ue||l===null||Xt(l,l.return)),e.flags&32){n=e.stateNode;try{fa(n,"")}catch(B){de(e,e.return,B)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Cc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Rc=!0);break;case 6:if(ct(t,e),ft(e),a&4){if(e.stateNode===null)throw Error(m(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(B){de(e,e.return,B)}}break;case 3:if(Zi=null,n=Yt,Yt=Xi(t.containerInfo),ct(t,e),Yt=n,ft(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ga(t.containerInfo)}catch(B){de(e,e.return,B)}Rc&&(Rc=!1,vo(e));break;case 4:a=Yt,Yt=Xi(e.stateNode.containerInfo),ct(t,e),ft(e),Yt=a;break;case 12:ct(t,e),ft(e);break;case 31:ct(t,e),ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_i(e,a)));break;case 13:ct(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ci=We()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_i(e,a)));break;case 22:n=e.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,y=al,x=Ue;if(al=y||n,Ue=x||r,ct(t,e),Ue=x,al=y,ft(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||r||al||Ue||Pl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){r=l=t;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=r.stateNode;var j=r.memoizedProps.style,p=j!=null&&j.hasOwnProperty("display")?j.display:null;f.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(B){de(r,r.return,B)}}}else if(t.tag===6){if(l===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(B){de(r,r.return,B)}}}else if(t.tag===18){if(l===null){r=t;try{var b=r.stateNode;n?nd(b,!0):nd(r.stateNode,!1)}catch(B){de(r,r.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,_i(e,l))));break;case 19:ct(t,e),ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_i(e,a)));break;case 30:break;case 21:break;default:ct(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(io(a)){l=a;break}a=a.return}if(l==null)throw Error(m(160));switch(l.tag){case 27:var n=l.stateNode,i=Oc(e);Ei(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(fa(u,""),l.flags&=-33);var f=Oc(e);Ei(e,f,u);break;case 3:case 4:var r=l.stateNode.containerInfo,y=Oc(e);Uc(e,y,r);break;default:throw Error(m(161))}}catch(x){de(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vo(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vo(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function il(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fo(e,t.alternate,t),t=t.sibling}function Pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ml(4,t,t.return),Pl(t);break;case 1:Xt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&ao(t,t.return,l),Pl(t);break;case 27:_n(t.stateNode);case 26:case 5:Xt(t,t.return),Pl(t);break;case 22:t.memoizedState===null&&Pl(t);break;case 30:Pl(t);break;default:Pl(t)}e=e.sibling}}function ul(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:ul(n,i,l),bn(4,i);break;case 1:if(ul(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){de(a,a.return,y)}if(a=i,n=a.updateQueue,n!==null){var f=a.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Zs(r[n],f)}catch(y){de(a,a.return,y)}}l&&u&64&&lo(i),xn(i,i.return);break;case 27:uo(i);case 26:case 5:ul(n,i,l),l&&a===null&&u&4&&no(i),xn(i,i.return);break;case 12:ul(n,i,l);break;case 31:ul(n,i,l),l&&u&4&&oo(n,i);break;case 13:ul(n,i,l),l&&u&4&&mo(n,i);break;case 22:i.memoizedState===null&&ul(n,i,l),xn(i,i.return);break;case 30:break;default:ul(n,i,l)}t=t.sibling}}function Hc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&un(l))}function Bc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&un(e))}function Gt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)go(e,t,l,a),t=t.sibling}function go(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Gt(e,t,l,a),n&2048&&bn(9,t);break;case 1:Gt(e,t,l,a);break;case 3:Gt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&un(e)));break;case 12:if(n&2048){Gt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,f=i.onPostCommit;typeof f=="function"&&f(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){de(t,t.return,r)}}else Gt(e,t,l,a);break;case 31:Gt(e,t,l,a);break;case 13:Gt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Gt(e,t,l,a):Sn(e,t):i._visibility&2?Gt(e,t,l,a):(i._visibility|=2,Ea(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Hc(u,t);break;case 24:Gt(e,t,l,a),n&2048&&Bc(t.alternate,t);break;default:Gt(e,t,l,a)}}function Ea(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,f=l,r=a,y=u.flags;switch(u.tag){case 0:case 11:case 15:Ea(i,u,f,r,n),bn(8,u);break;case 23:break;case 22:var x=u.stateNode;u.memoizedState!==null?x._visibility&2?Ea(i,u,f,r,n):Sn(i,u):(x._visibility|=2,Ea(i,u,f,r,n)),n&&y&2048&&Hc(u.alternate,u);break;case 24:Ea(i,u,f,r,n),n&&y&2048&&Bc(u.alternate,u);break;default:Ea(i,u,f,r,n)}t=t.sibling}}function Sn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:Sn(l,a),n&2048&&Hc(a.alternate,a);break;case 24:Sn(l,a),n&2048&&Bc(a.alternate,a);break;default:Sn(l,a)}t=t.sibling}}var zn=8192;function _a(e,t,l){if(e.subtreeFlags&zn)for(e=e.child;e!==null;)yo(e,t,l),e=e.sibling}function yo(e,t,l){switch(e.tag){case 26:_a(e,t,l),e.flags&zn&&e.memoizedState!==null&&i0(l,Yt,e.memoizedState,e.memoizedProps);break;case 5:_a(e,t,l);break;case 3:case 4:var a=Yt;Yt=Xi(e.stateNode.containerInfo),_a(e,t,l),Yt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=zn,zn=16777216,_a(e,t,l),zn=a):_a(e,t,l));break;default:_a(e,t,l)}}function po(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];qe=a,xo(a,e)}po(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bo(e),e=e.sibling}function bo(e){switch(e.tag){case 0:case 11:case 15:Mn(e),e.flags&2048&&Ml(9,e,e.return);break;case 3:Mn(e);break;case 12:Mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Di(e)):Mn(e);break;default:Mn(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];qe=a,xo(a,e)}po(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ml(8,t,t.return),Di(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Di(t));break;default:Di(t)}e=e.sibling}}function xo(e,t){for(;qe!==null;){var l=qe;switch(l.tag){case 0:case 11:case 15:Ml(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:un(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,qe=a;else e:for(l=e;qe!==null;){a=qe;var n=a.sibling,i=a.return;if(so(a),a===l){qe=null;break e}if(n!==null){n.return=i,qe=n;break e}qe=i}}}var xh={getCacheForType:function(e){var t=Qe(De),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Qe(De).controller.signal}},Sh=typeof WeakMap=="function"?WeakMap:Map,ue=0,ye=null,$=null,P=0,oe=0,pt=null,Tl=!1,Da=!1,qc=!1,cl=0,je=0,jl=0,ea=0,Yc=0,bt=0,Ca=0,Tn=null,st=null,Gc=!1,Ci=0,So=0,Oi=1/0,Ui=null,Nl=null,Re=0,Al=null,Oa=null,fl=0,Lc=0,Qc=null,zo=null,jn=0,wc=null;function xt(){return(ue&2)!==0&&P!==0?P&-P:S.T!==null?Jc():qf()}function Mo(){if(bt===0)if((P&536870912)===0||le){var e=Qn;Qn<<=1,(Qn&3932160)===0&&(Qn=262144),bt=e}else bt=536870912;return e=gt.current,e!==null&&(e.flags|=32),bt}function rt(e,t,l){(e===ye&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(Ua(e,0),El(e,P,bt,!1)),Za(e,l),((ue&2)===0||e!==ye)&&(e===ye&&((ue&2)===0&&(ea|=l),je===4&&El(e,P,bt,!1)),Vt(e))}function To(e,t,l){if((ue&6)!==0)throw Error(m(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Va(e,t),n=a?Th(e,t):Vc(e,t,!0),i=a;do{if(n===0){Da&&!a&&El(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!zh(l)){n=Vc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var f=e;n=Tn;var r=f.current.memoizedState.isDehydrated;if(r&&(Ua(f,u).flags|=256),u=Vc(f,u,!1),u!==2){if(qc&&!r){f.errorRecoveryDisabledLanes|=i,ea|=i,n=4;break e}i=st,st=n,i!==null&&(st===null?st=i:st.push.apply(st,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ua(e,0),El(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:El(a,t,bt,!Tl);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(n=Ci+300-We(),10<n)){if(El(a,t,bt,!Tl),Xn(a,0,!0)!==0)break e;fl=t,a.timeoutHandle=td(jo.bind(null,a,l,st,Ui,Gc,t,bt,ea,Ca,Tl,i,"Throttled",-0,0),n);break e}jo(a,l,st,Ui,Gc,t,bt,ea,Ca,Tl,i,null,-0,0)}}break}while(!0);Vt(e)}function jo(e,t,l,a,n,i,u,f,r,y,x,j,p,b){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kt},yo(t,i,j);var B=(i&62914560)===i?Ci-We():(i&4194048)===i?So-We():0;if(B=u0(j,B),B!==null){fl=i,e.cancelPendingCommit=B(Uo.bind(null,e,t,i,l,a,n,u,f,r,x,j,null,p,b)),El(e,i,u,!y);return}}Uo(e,t,i,l,a,n,u,f,r)}function zh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function El(e,t,l,a){t&=~Yc,t&=~ea,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-mt(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Rf(e,l,t)}function Ri(){return(ue&6)===0?(Nn(0),!1):!0}function Xc(){if($!==null){if(oe===0)var e=$.return;else e=$,Ft=Zl=null,ic(e),Ma=null,fn=0,e=$;for(;e!==null;)to(e.alternate,e),e=e.return;$=null}}function Ua(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,wh(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),fl=0,Xc(),ye=e,$=l=Wt(e.current,null),P=t,oe=0,pt=null,Tl=!1,Da=Va(e,t),qc=!1,Ca=bt=Yc=ea=jl=je=0,st=Tn=null,Gc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-mt(a),i=1<<n;t|=e[n],a&=~i}return cl=t,ti(),l}function No(e,t){k=null,S.H=gn,t===za||t===si?(t=Qs(),oe=3):t===Ku?(t=Qs(),oe=4):oe=t===Sc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,$===null&&(je=1,Mi(e,_t(t,e.current)))}function Ao(){var e=gt.current;return e===null?!0:(P&4194048)===P?Ut===null:(P&62914560)===P||(P&536870912)!==0?e===Ut:!1}function Eo(){var e=S.H;return S.H=gn,e===null?gn:e}function _o(){var e=S.A;return S.A=xh,e}function Hi(){je=4,Tl||(P&4194048)!==P&&gt.current!==null||(Da=!0),(jl&134217727)===0&&(ea&134217727)===0||ye===null||El(ye,P,bt,!1)}function Vc(e,t,l){var a=ue;ue|=2;var n=Eo(),i=_o();(ye!==e||P!==t)&&(Ui=null,Ua(e,t)),t=!1;var u=je;e:do try{if(oe!==0&&$!==null){var f=$,r=pt;switch(oe){case 8:Xc(),u=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var y=oe;if(oe=0,pt=null,Ra(e,f,r,y),l&&Da){u=0;break e}break;default:y=oe,oe=0,pt=null,Ra(e,f,r,y)}}Mh(),u=je;break}catch(x){No(e,x)}while(!0);return t&&e.shellSuspendCounter++,Ft=Zl=null,ue=a,S.H=n,S.A=i,$===null&&(ye=null,P=0,ti()),u}function Mh(){for(;$!==null;)Do($)}function Th(e,t){var l=ue;ue|=2;var a=Eo(),n=_o();ye!==e||P!==t?(Ui=null,Oi=We()+500,Ua(e,t)):Da=Va(e,t);e:do try{if(oe!==0&&$!==null){t=$;var i=pt;t:switch(oe){case 1:oe=0,pt=null,Ra(e,t,i,1);break;case 2:case 9:if(Gs(i)){oe=0,pt=null,Co(t);break}t=function(){oe!==2&&oe!==9||ye!==e||(oe=7),Vt(e)},i.then(t,t);break e;case 3:oe=7;break e;case 4:oe=5;break e;case 7:Gs(i)?(oe=0,pt=null,Co(t)):(oe=0,pt=null,Ra(e,t,i,7));break;case 5:var u=null;switch($.tag){case 26:u=$.memoizedState;case 5:case 27:var f=$;if(u?gd(u):f.stateNode.complete){oe=0,pt=null;var r=f.sibling;if(r!==null)$=r;else{var y=f.return;y!==null?($=y,Bi(y)):$=null}break t}}oe=0,pt=null,Ra(e,t,i,5);break;case 6:oe=0,pt=null,Ra(e,t,i,6);break;case 8:Xc(),je=6;break e;default:throw Error(m(462))}}jh();break}catch(x){No(e,x)}while(!0);return Ft=Zl=null,S.H=a,S.A=n,ue=l,$!==null?0:(ye=null,P=0,ti(),je)}function jh(){for(;$!==null&&!lu();)Do($)}function Do(e){var t=Pr(e.alternate,e,cl);e.memoizedProps=e.pendingProps,t===null?Bi(e):$=t}function Co(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Kr(l,t,t.pendingProps,t.type,void 0,P);break;case 11:t=Kr(l,t,t.pendingProps,t.type.render,t.ref,P);break;case 5:ic(t);default:to(l,t),t=$=Es(t,cl),t=Pr(l,t,cl)}e.memoizedProps=e.pendingProps,t===null?Bi(e):$=t}function Ra(e,t,l,a){Ft=Zl=null,ic(t),Ma=null,fn=0;var n=t.return;try{if(mh(e,n,t,l,P)){je=1,Mi(e,_t(l,e.current)),$=null;return}}catch(i){if(n!==null)throw $=n,i;je=1,Mi(e,_t(l,e.current)),$=null;return}t.flags&32768?(le||a===1?e=!0:Da||(P&536870912)!==0?e=!1:(Tl=e=!0,(a===2||a===9||a===3||a===6)&&(a=gt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Oo(t,e)):Bi(t)}function Bi(e){var t=e;do{if((t.flags&32768)!==0){Oo(t,Tl);return}e=t.return;var l=gh(t.alternate,t,cl);if(l!==null){$=l;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);je===0&&(je=5)}function Oo(e,t){do{var l=yh(e.alternate,e);if(l!==null){l.flags&=32767,$=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){$=e;return}$=e=l}while(e!==null);je=6,$=null}function Uo(e,t,l,a,n,i,u,f,r){e.cancelPendingCommit=null;do qi();while(Re!==0);if((ue&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(i=t.lanes|t.childLanes,i|=Ou,nm(e,l,i,u,f,r),e===ye&&($=ye=null,P=0),Oa=t,Al=e,fl=l,Lc=i,Qc=n,zo=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_h(ta,function(){return Yo(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,n=C.p,C.p=2,u=ue,ue|=4;try{ph(e,t,l)}finally{ue=u,C.p=n,S.T=a}}Re=1,Ro(),Ho(),Bo()}}function Ro(){if(Re===1){Re=0;var e=Al,t=Oa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=S.T,S.T=null;var a=C.p;C.p=2;var n=ue;ue|=4;try{ho(t,e);var i=lf,u=bs(e.containerInfo),f=i.focusedElem,r=i.selectionRange;if(u!==f&&f&&f.ownerDocument&&ps(f.ownerDocument.documentElement,f)){if(r!==null&&Au(f)){var y=r.start,x=r.end;if(x===void 0&&(x=y),"selectionStart"in f)f.selectionStart=y,f.selectionEnd=Math.min(x,f.value.length);else{var j=f.ownerDocument||document,p=j&&j.defaultView||window;if(p.getSelection){var b=p.getSelection(),B=f.textContent.length,w=Math.min(r.start,B),ge=r.end===void 0?w:Math.min(r.end,B);!b.extend&&w>ge&&(u=ge,ge=w,w=u);var d=ys(f,w),o=ys(f,ge);if(d&&o&&(b.rangeCount!==1||b.anchorNode!==d.node||b.anchorOffset!==d.offset||b.focusNode!==o.node||b.focusOffset!==o.offset)){var g=j.createRange();g.setStart(d.node,d.offset),b.removeAllRanges(),w>ge?(b.addRange(g),b.extend(o.node,o.offset)):(g.setEnd(o.node,o.offset),b.addRange(g))}}}}for(j=[],b=f;b=b.parentNode;)b.nodeType===1&&j.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<j.length;f++){var T=j[f];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}Wi=!!tf,lf=tf=null}finally{ue=n,C.p=a,S.T=l}}e.current=t,Re=2}}function Ho(){if(Re===2){Re=0;var e=Al,t=Oa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=S.T,S.T=null;var a=C.p;C.p=2;var n=ue;ue|=4;try{fo(e,t.alternate,t)}finally{ue=n,C.p=a,S.T=l}}Re=3}}function Bo(){if(Re===4||Re===3){Re=0,au();var e=Al,t=Oa,l=fl,a=zo;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Re=5:(Re=0,Oa=Al=null,qo(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Nl=null),fu(l),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,n=C.p,C.p=2,S.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var f=a[u];i(f.value,{componentStack:f.stack})}}finally{S.T=t,C.p=n}}(fl&3)!==0&&qi(),Vt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===wc?jn++:(jn=0,wc=e):jn=0,Nn(0)}}function qo(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,un(t)))}function qi(){return Ro(),Ho(),Bo(),Yo()}function Yo(){if(Re!==5)return!1;var e=Al,t=Lc;Lc=0;var l=fu(fl),a=S.T,n=C.p;try{C.p=32>l?32:l,S.T=null,l=Qc,Qc=null;var i=Al,u=fl;if(Re=0,Oa=Al=null,fl=0,(ue&6)!==0)throw Error(m(331));var f=ue;if(ue|=4,bo(i.current),go(i,i.current,u,l),ue=f,Nn(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Bl,i)}catch{}return!0}finally{C.p=n,S.T=a,qo(e,t)}}function Go(e,t,l){t=_t(l,t),t=xc(e.stateNode,t,2),e=xl(e,t,2),e!==null&&(Za(e,2),Vt(e))}function de(e,t,l){if(e.tag===3)Go(e,e,l);else for(;t!==null;){if(t.tag===3){Go(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Nl===null||!Nl.has(a))){e=_t(l,e),l=Gr(2),a=xl(t,l,2),a!==null&&(Lr(l,a,t,e),Za(a,2),Vt(a));break}}t=t.return}}function Zc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Sh;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(qc=!0,n.add(l),e=Nh.bind(null,e,t,l),t.then(e,e))}function Nh(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ye===e&&(P&l)===l&&(je===4||je===3&&(P&62914560)===P&&300>We()-Ci?(ue&2)===0&&Ua(e,0):Yc|=l,Ca===P&&(Ca=0)),Vt(e)}function Lo(e,t){t===0&&(t=Uf()),e=wl(e,t),e!==null&&(Za(e,t),Vt(e))}function Ah(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Lo(e,l)}function Eh(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(t),Lo(e,l)}function _h(e,t){return at(e,t)}var Yi=null,Ha=null,kc=!1,Gi=!1,Kc=!1,_l=0;function Vt(e){e!==Ha&&e.next===null&&(Ha===null?Yi=Ha=e:Ha=Ha.next=e),Gi=!0,kc||(kc=!0,Ch())}function Nn(e,t){if(!Kc&&Gi){Kc=!0;do for(var l=!1,a=Yi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-mt(42|e)+1)-1,i&=n&~(u&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Vo(a,i))}else i=P,i=Xn(a,a===ye?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Va(a,i)||(l=!0,Vo(a,i));a=a.next}while(l);Kc=!1}}function Dh(){Qo()}function Qo(){Gi=kc=!1;var e=0;_l!==0&&Qh()&&(e=_l);for(var t=We(),l=null,a=Yi;a!==null;){var n=a.next,i=wo(a,t);i===0?(a.next=null,l===null?Yi=n:l.next=n,n===null&&(Ha=l)):(l=a,(e!==0||(i&3)!==0)&&(Gi=!0)),a=n}Re!==0&&Re!==5||Nn(e),_l!==0&&(_l=0)}function wo(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-mt(i),f=1<<u,r=n[u];r===-1?((f&l)===0||(f&a)!==0)&&(n[u]=am(f,t)):r<=t&&(e.expiredLanes|=f),i&=~f}if(t=ye,l=P,l=Xn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&La(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Va(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&La(a),fu(l)){case 2:case 8:l=Yn;break;case 32:l=ta;break;case 268435456:l=wa;break;default:l=ta}return a=Xo.bind(null,e),l=at(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&La(a),e.callbackPriority=2,e.callbackNode=null,2}function Xo(e,t){if(Re!==0&&Re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(qi()&&e.callbackNode!==l)return null;var a=P;return a=Xn(e,e===ye?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(To(e,a,t),wo(e,We()),e.callbackNode!=null&&e.callbackNode===l?Xo.bind(null,e):null)}function Vo(e,t){if(qi())return null;To(e,t,!0)}function Ch(){Xh(function(){(ue&6)!==0?at(Qa,Dh):Qo()})}function Jc(){if(_l===0){var e=xa;e===0&&(e=Ln,Ln<<=1,(Ln&261888)===0&&(Ln=256)),_l=e}return _l}function Zo(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function ko(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Oh(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=Zo((n[nt]||null).action),u=a.submitter;u&&(t=(t=u[nt]||null)?Zo(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var f=new Fn("action","action",null,a,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(_l!==0){var r=u?ko(n,u):new FormData(n);hc(l,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(f.preventDefault(),r=u?ko(n,u):new FormData(n),hc(l,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Wc=0;Wc<Cu.length;Wc++){var $c=Cu[Wc],Uh=$c.toLowerCase(),Rh=$c[0].toUpperCase()+$c.slice(1);qt(Uh,"on"+Rh)}qt(zs,"onAnimationEnd"),qt(Ms,"onAnimationIteration"),qt(Ts,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt($m,"onTransitionRun"),qt(Fm,"onTransitionStart"),qt(Im,"onTransitionCancel"),qt(js,"onTransitionEnd"),ua("onMouseEnter",["mouseout","mouseover"]),ua("onMouseLeave",["mouseout","mouseover"]),ua("onPointerEnter",["pointerout","pointerover"]),ua("onPointerLeave",["pointerout","pointerover"]),Yl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(An));function Ko(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var f=a[u],r=f.instance,y=f.currentTarget;if(f=f.listener,r!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=y;try{i(n)}catch(x){ei(x)}n.currentTarget=null,i=r}else for(u=0;u<a.length;u++){if(f=a[u],r=f.instance,y=f.currentTarget,f=f.listener,r!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=y;try{i(n)}catch(x){ei(x)}n.currentTarget=null,i=r}}}}function F(e,t){var l=t[su];l===void 0&&(l=t[su]=new Set);var a=e+"__bubble";l.has(a)||(Jo(t,e,2,!1),l.add(a))}function Fc(e,t,l){var a=0;t&&(a|=4),Jo(l,e,a,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function Ic(e){if(!e[Li]){e[Li]=!0,Lf.forEach(function(l){l!=="selectionchange"&&(Hh.has(l)||Fc(l,!1,e),Fc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,Fc("selectionchange",!1,t))}}function Jo(e,t,l,a){switch(Md(t)){case 2:var n=s0;break;case 8:n=r0;break;default:n=hf}l=n.bind(null,t,l,e),n=void 0,!pu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Pc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===n)break;if(u===4)for(u=a.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;f!==null;){if(u=aa(f),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){a=i=u;continue e}f=f.parentNode}}a=a.return}If(function(){var y=i,x=gu(l),j=[];e:{var p=Ns.get(e);if(p!==void 0){var b=Fn,B=e;switch(e){case"keypress":if(Wn(l)===0)break e;case"keydown":case"keyup":b=Em;break;case"focusin":B="focus",b=zu;break;case"focusout":B="blur",b=zu;break;case"beforeblur":case"afterblur":b=zu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Cm;break;case zs:case Ms:case Ts:b=bm;break;case js:b=Um;break;case"scroll":case"scrollend":b=hm;break;case"wheel":b=Hm;break;case"copy":case"cut":case"paste":b=Sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=as;break;case"toggle":case"beforetoggle":b=qm}var w=(t&4)!==0,ge=!w&&(e==="scroll"||e==="scrollend"),d=w?p!==null?p+"Capture":null:p;w=[];for(var o=y,g;o!==null;){var T=o;if(g=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||g===null||d===null||(T=Ja(o,d),T!=null&&w.push(En(o,T,g))),ge)break;o=o.return}0<w.length&&(p=new b(p,B,null,l,x),j.push({event:p,listeners:w}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",p&&l!==vu&&(B=l.relatedTarget||l.fromElement)&&(aa(B)||B[la]))break e;if((b||p)&&(p=x.window===x?x:(p=x.ownerDocument)?p.defaultView||p.parentWindow:window,b?(B=l.relatedTarget||l.toElement,b=y,B=B?aa(B):null,B!==null&&(ge=D(B),w=B.tag,B!==ge||w!==5&&w!==27&&w!==6)&&(B=null)):(b=null,B=y),b!==B)){if(w=ts,T="onMouseLeave",d="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(w=as,T="onPointerLeave",d="onPointerEnter",o="pointer"),ge=b==null?p:Ka(b),g=B==null?p:Ka(B),p=new w(T,o+"leave",b,l,x),p.target=ge,p.relatedTarget=g,T=null,aa(x)===y&&(w=new w(d,o+"enter",B,l,x),w.target=g,w.relatedTarget=ge,T=w),ge=T,b&&B)t:{for(w=Bh,d=b,o=B,g=0,T=d;T;T=w(T))g++;T=0;for(var G=o;G;G=w(G))T++;for(;0<g-T;)d=w(d),g--;for(;0<T-g;)o=w(o),T--;for(;g--;){if(d===o||o!==null&&d===o.alternate){w=d;break t}d=w(d),o=w(o)}w=null}else w=null;b!==null&&Wo(j,p,b,w,!1),B!==null&&ge!==null&&Wo(j,ge,B,w,!0)}}e:{if(p=y?Ka(y):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var ne=os;else if(ss(p))if(ds)ne=Km;else{ne=Zm;var q=Vm}else b=p.nodeName,!b||b.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?y&&hu(y.elementType)&&(ne=os):ne=km;if(ne&&(ne=ne(e,y))){rs(j,ne,l,x);break e}q&&q(e,p,y),e==="focusout"&&y&&p.type==="number"&&y.memoizedProps.value!=null&&mu(p,"number",p.value)}switch(q=y?Ka(y):window,e){case"focusin":(ss(q)||q.contentEditable==="true")&&(da=q,Eu=y,ln=null);break;case"focusout":ln=Eu=da=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,xs(j,l,x);break;case"selectionchange":if(Wm)break;case"keydown":case"keyup":xs(j,l,x)}var J;if(Tu)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else oa?cs(e,l)&&(ee="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ee="onCompositionStart");ee&&(ns&&l.locale!=="ko"&&(oa||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&oa&&(J=Pf()):(ml=x,bu="value"in ml?ml.value:ml.textContent,oa=!0)),q=Qi(y,ee),0<q.length&&(ee=new ls(ee,e,null,l,x),j.push({event:ee,listeners:q}),J?ee.data=J:(J=fs(l),J!==null&&(ee.data=J)))),(J=Gm?Lm(e,l):Qm(e,l))&&(ee=Qi(y,"onBeforeInput"),0<ee.length&&(q=new ls("onBeforeInput","beforeinput",null,l,x),j.push({event:q,listeners:ee}),q.data=J)),Oh(j,e,y,l,x)}Ko(j,t)})}function En(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Qi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ja(e,l),n!=null&&a.unshift(En(e,n,i)),n=Ja(e,t),n!=null&&a.push(En(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Bh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wo(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var f=l,r=f.alternate,y=f.stateNode;if(f=f.tag,r!==null&&r===a)break;f!==5&&f!==26&&f!==27||y===null||(r=y,n?(y=Ja(l,i),y!=null&&u.unshift(En(l,y,r))):n||(y=Ja(l,i),y!=null&&u.push(En(l,y,r)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var qh=/\r\n?/g,Yh=/\u0000|\uFFFD/g;function $o(e){return(typeof e=="string"?e:""+e).replace(qh,`
`).replace(Yh,"")}function Fo(e,t){return t=$o(t),$o(e)===t}function ve(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||fa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&fa(e,""+a);break;case"className":Zn(e,"class",a);break;case"tabIndex":Zn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,l,a);break;case"style":$f(e,a,i);break;case"data":if(t!=="object"){Zn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Kn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&ve(e,t,"name",n.name,n,null),ve(e,t,"formEncType",n.formEncType,n,null),ve(e,t,"formMethod",n.formMethod,n,null),ve(e,t,"formTarget",n.formTarget,n,null)):(ve(e,t,"encType",n.encType,n,null),ve(e,t,"method",n.method,n,null),ve(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Kn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Kt);break;case"onScroll":a!=null&&F("scroll",e);break;case"onScrollEnd":a!=null&&F("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Kn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":F("beforetoggle",e),F("toggle",e),Vn(e,"popover",a);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Vn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=dm.get(l)||l,Vn(e,l,a))}}function ef(e,t,l,a,n,i){switch(l){case"style":$f(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"children":typeof a=="string"?fa(e,a):(typeof a=="number"||typeof a=="bigint")&&fa(e,""+a);break;case"onScroll":a!=null&&F("scroll",e);break;case"onScrollEnd":a!=null&&F("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[nt]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Vn(e,l,a)}}}function Xe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",e),F("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:ve(e,t,i,u,l,null)}}n&&ve(e,t,"srcSet",l.srcSet,l,null),a&&ve(e,t,"src",l.src,l,null);return;case"input":F("invalid",e);var f=i=u=n=null,r=null,y=null;for(a in l)if(l.hasOwnProperty(a)){var x=l[a];if(x!=null)switch(a){case"name":n=x;break;case"type":u=x;break;case"checked":r=x;break;case"defaultChecked":y=x;break;case"value":i=x;break;case"defaultValue":f=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(m(137,t));break;default:ve(e,t,a,x,l,null)}}kf(e,i,f,r,y,u,n,!1);return;case"select":F("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":u=f;break;case"multiple":a=f;default:ve(e,t,n,f,l,null)}t=i,l=u,e.multiple=!!a,t!=null?ca(e,!!a,t,!1):l!=null&&ca(e,!!a,l,!0);return;case"textarea":F("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(f=l[u],f!=null))switch(u){case"value":a=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(m(91));break;default:ve(e,t,u,f,l,null)}Jf(e,a,n,i);return;case"option":for(r in l)if(l.hasOwnProperty(r)&&(a=l[r],a!=null))switch(r){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ve(e,t,r,a,l,null)}return;case"dialog":F("beforetoggle",e),F("toggle",e),F("cancel",e),F("close",e);break;case"iframe":case"object":F("load",e);break;case"video":case"audio":for(a=0;a<An.length;a++)F(An[a],e);break;case"image":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"embed":case"source":case"link":F("error",e),F("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(a=l[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:ve(e,t,y,a,l,null)}return;default:if(hu(t)){for(x in l)l.hasOwnProperty(x)&&(a=l[x],a!==void 0&&ef(e,t,x,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&ve(e,t,f,a,l,null))}function Gh(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,f=null,r=null,y=null,x=null;for(b in l){var j=l[b];if(l.hasOwnProperty(b)&&j!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":r=j;default:a.hasOwnProperty(b)||ve(e,t,b,null,a,j)}}for(var p in a){var b=a[p];if(j=l[p],a.hasOwnProperty(p)&&(b!=null||j!=null))switch(p){case"type":i=b;break;case"name":n=b;break;case"checked":y=b;break;case"defaultChecked":x=b;break;case"value":u=b;break;case"defaultValue":f=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(m(137,t));break;default:b!==j&&ve(e,t,p,b,a,j)}}du(e,u,f,r,y,x,i,n);return;case"select":b=u=f=p=null;for(i in l)if(r=l[i],l.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":b=r;default:a.hasOwnProperty(i)||ve(e,t,i,null,a,r)}for(n in a)if(i=a[n],r=l[n],a.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":p=i;break;case"defaultValue":f=i;break;case"multiple":u=i;default:i!==r&&ve(e,t,n,i,a,r)}t=f,l=u,a=b,p!=null?ca(e,!!l,p,!1):!!a!=!!l&&(t!=null?ca(e,!!l,t,!0):ca(e,!!l,l?[]:"",!1));return;case"textarea":b=p=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ve(e,t,f,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":p=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&ve(e,t,u,n,a,i)}Kf(e,p,b);return;case"option":for(var B in l)if(p=l[B],l.hasOwnProperty(B)&&p!=null&&!a.hasOwnProperty(B))switch(B){case"selected":e.selected=!1;break;default:ve(e,t,B,null,a,p)}for(r in a)if(p=a[r],b=l[r],a.hasOwnProperty(r)&&p!==b&&(p!=null||b!=null))switch(r){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:ve(e,t,r,p,a,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in l)p=l[w],l.hasOwnProperty(w)&&p!=null&&!a.hasOwnProperty(w)&&ve(e,t,w,null,a,p);for(y in a)if(p=a[y],b=l[y],a.hasOwnProperty(y)&&p!==b&&(p!=null||b!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,t));break;default:ve(e,t,y,p,a,b)}return;default:if(hu(t)){for(var ge in l)p=l[ge],l.hasOwnProperty(ge)&&p!==void 0&&!a.hasOwnProperty(ge)&&ef(e,t,ge,void 0,a,p);for(x in a)p=a[x],b=l[x],!a.hasOwnProperty(x)||p===b||p===void 0&&b===void 0||ef(e,t,x,p,a,b);return}}for(var d in l)p=l[d],l.hasOwnProperty(d)&&p!=null&&!a.hasOwnProperty(d)&&ve(e,t,d,null,a,p);for(j in a)p=a[j],b=l[j],!a.hasOwnProperty(j)||p===b||p==null&&b==null||ve(e,t,j,p,a,b)}function Io(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,f=n.duration;if(i&&f&&Io(u)){for(u=0,f=n.responseEnd,a+=1;a<l.length;a++){var r=l[a],y=r.startTime;if(y>f)break;var x=r.transferSize,j=r.initiatorType;x&&Io(j)&&(r=r.responseEnd,u+=x*(r<f?1:(f-y)/(r-y)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tf=null,lf=null;function wi(e){return e.nodeType===9?e:e.ownerDocument}function Po(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ed(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function af(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nf=null;function Qh(){var e=window.event;return e&&e.type==="popstate"?e===nf?!1:(nf=e,!0):(nf=null,!1)}var td=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,Xh=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(Vh)}:td;function Vh(e){setTimeout(function(){throw e})}function Dl(e){return e==="head"}function ad(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ga(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")_n(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,_n(l);for(var i=l.firstChild;i;){var u=i.nextSibling,f=i.nodeName;i[ka]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&_n(e.ownerDocument.body);l=n}while(l);Ga(t)}function nd(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function uf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":uf(l),ru(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Zh(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ka])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function kh(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Rt(e.nextSibling),e===null))return null;return e}function id(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function cf(e){return e.data==="$?"||e.data==="$~"}function ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Kh(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var sf=null;function ud(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Rt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function fd(e,t,l){switch(t=wi(l),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function _n(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ru(e)}var Ht=new Map,sd=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sl=C.d;C.d={f:Jh,r:Wh,D:$h,C:Fh,L:Ih,m:Ph,X:t0,S:e0,M:l0};function Jh(){var e=sl.f(),t=Ri();return e||t}function Wh(e){var t=na(e);t!==null&&t.tag===5&&t.type==="form"?jr(t):sl.r(e)}var Ba=typeof document>"u"?null:document;function rd(e,t,l){var a=Ba;if(a&&typeof t=="string"&&t){var n=At(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),sd.has(n)||(sd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Xe(t,"link",e),Be(t),a.head.appendChild(t)))}}function $h(e){sl.D(e),rd("dns-prefetch",e,null)}function Fh(e,t){sl.C(e,t),rd("preconnect",e,t)}function Ih(e,t,l){sl.L(e,t,l);var a=Ba;if(a&&e&&t){var n='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+At(l.imageSizes)+'"]')):n+='[href="'+At(e)+'"]';var i=n;switch(t){case"style":i=qa(e);break;case"script":i=Ya(e)}Ht.has(i)||(e=L({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Ht.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Dn(i))||t==="script"&&a.querySelector(Cn(i))||(t=a.createElement("link"),Xe(t,"link",e),Be(t),a.head.appendChild(t)))}}function Ph(e,t){sl.m(e,t);var l=Ba;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+At(a)+'"][href="'+At(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ya(e)}if(!Ht.has(i)&&(e=L({rel:"modulepreload",href:e},t),Ht.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Cn(i)))return}a=l.createElement("link"),Xe(a,"link",e),Be(a),l.head.appendChild(a)}}}function e0(e,t,l){sl.S(e,t,l);var a=Ba;if(a&&e){var n=ia(a).hoistableStyles,i=qa(e);t=t||"default";var u=n.get(i);if(!u){var f={loading:0,preload:null};if(u=a.querySelector(Dn(i)))f.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Ht.get(i))&&rf(e,l);var r=u=a.createElement("link");Be(r),Xe(r,"link",e),r._p=new Promise(function(y,x){r.onload=y,r.onerror=x}),r.addEventListener("load",function(){f.loading|=1}),r.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Vi(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:f},n.set(i,u)}}}function t0(e,t){sl.X(e,t);var l=Ba;if(l&&e){var a=ia(l).hoistableScripts,n=Ya(e),i=a.get(n);i||(i=l.querySelector(Cn(n)),i||(e=L({src:e,async:!0},t),(t=Ht.get(n))&&of(e,t),i=l.createElement("script"),Be(i),Xe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function l0(e,t){sl.M(e,t);var l=Ba;if(l&&e){var a=ia(l).hoistableScripts,n=Ya(e),i=a.get(n);i||(i=l.querySelector(Cn(n)),i||(e=L({src:e,async:!0,type:"module"},t),(t=Ht.get(n))&&of(e,t),i=l.createElement("script"),Be(i),Xe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function od(e,t,l,a){var n=(n=O.current)?Xi(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=qa(l.href),l=ia(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=qa(l.href);var i=ia(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Dn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ht.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ht.set(e,l),i||a0(n,e,l,u.state))),t&&a===null)throw Error(m(528,""));return u}if(t&&a!==null)throw Error(m(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ya(l),l=ia(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function qa(e){return'href="'+At(e)+'"'}function Dn(e){return'link[rel="stylesheet"]['+e+"]"}function dd(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function a0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Xe(t,"link",l),Be(t),e.head.appendChild(t))}function Ya(e){return'[src="'+At(e)+'"]'}function Cn(e){return"script[async]"+e}function md(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+At(l.href)+'"]');if(a)return t.instance=a,Be(a),a;var n=L({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Be(a),Xe(a,"style",n),Vi(a,l.precedence,e),t.instance=a;case"stylesheet":n=qa(l.href);var i=e.querySelector(Dn(n));if(i)return t.state.loading|=4,t.instance=i,Be(i),i;a=dd(l),(n=Ht.get(n))&&rf(a,n),i=(e.ownerDocument||e).createElement("link"),Be(i);var u=i;return u._p=new Promise(function(f,r){u.onload=f,u.onerror=r}),Xe(i,"link",a),t.state.loading|=4,Vi(i,l.precedence,e),t.instance=i;case"script":return i=Ya(l.src),(n=e.querySelector(Cn(i)))?(t.instance=n,Be(n),n):(a=l,(n=Ht.get(i))&&(a=L({},l),of(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Be(n),Xe(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Vi(a,l.precedence,e));return t.instance}function Vi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var f=a[u];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function rf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function of(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zi=null;function hd(e,t,l){if(Zi===null){var a=new Map,n=Zi=new Map;n.set(l,a)}else n=Zi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[ka]||i[Ge]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var f=a.get(u);f?f.push(i):a.set(u,[i])}}return a}function vd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function n0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function i0(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=qa(a.href),i=t.querySelector(Dn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ki.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Be(i);return}i=t.ownerDocument||t,a=dd(a),(n=Ht.get(n))&&rf(a,n),i=i.createElement("link"),Be(i);var u=i;u._p=new Promise(function(f,r){u.onload=f,u.onerror=r}),Xe(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=ki.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var df=0;function u0(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&df===0&&(df=62500*Lh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>df?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(c0,e),Ki=null,ki.call(e))}function c0(e,t){if(!(t.state.loading&4)){var l=Ki.get(e);if(l)var a=l.get(null);else{l=new Map,Ki.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=ki.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var On={$$typeof:Ee,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function f0(e,t,l,a,n,i,u,f,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.hiddenUpdates=uu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function yd(e,t,l,a,n,i,u,f,r,y,x,j){return e=new f0(e,t,l,u,r,y,x,j,f),t=1,i===!0&&(t|=24),i=vt(3,null,null,t),e.current=i,i.stateNode=e,t=Vu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Ju(i),e}function pd(e){return e?(e=va,e):va}function bd(e,t,l,a,n,i){n=pd(n),a.context===null?a.context=n:a.pendingContext=n,a=bl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=xl(e,a,t),l!==null&&(rt(l,e,t),rn(l,e,t))}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function mf(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function Sd(e){if(e.tag===13||e.tag===31){var t=wl(e,67108864);t!==null&&rt(t,e,67108864),mf(e,67108864)}}function zd(e){if(e.tag===13||e.tag===31){var t=xt();t=cu(t);var l=wl(e,t);l!==null&&rt(l,e,t),mf(e,t)}}var Wi=!0;function s0(e,t,l,a){var n=S.T;S.T=null;var i=C.p;try{C.p=2,hf(e,t,l,a)}finally{C.p=i,S.T=n}}function r0(e,t,l,a){var n=S.T;S.T=null;var i=C.p;try{C.p=8,hf(e,t,l,a)}finally{C.p=i,S.T=n}}function hf(e,t,l,a){if(Wi){var n=vf(a);if(n===null)Pc(e,t,a,$i,l),Td(e,a);else if(d0(n,e,t,l,a))a.stopPropagation();else if(Td(e,a),t&4&&-1<o0.indexOf(e)){for(;n!==null;){var i=na(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=ql(i.pendingLanes);if(u!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;u;){var r=1<<31-mt(u);f.entanglements[1]|=r,u&=~r}Vt(i),(ue&6)===0&&(Oi=We()+500,Nn(0))}}break;case 31:case 13:f=wl(i,2),f!==null&&rt(f,i,2),Ri(),mf(i,2)}if(i=vf(a),i===null&&Pc(e,t,a,$i,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Pc(e,t,a,null,l)}}function vf(e){return e=gu(e),gf(e)}var $i=null;function gf(e){if($i=null,e=aa(e),e!==null){var t=D(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=te(t),e!==null)return e;e=null}else if(l===31){if(e=xe(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $i=e,null}function Md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nu()){case Qa:return 2;case Yn:return 8;case ta:case Gn:return 32;case wa:return 268435456;default:return 32}default:return 32}}var yf=!1,Cl=null,Ol=null,Ul=null,Un=new Map,Rn=new Map,Rl=[],o0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Td(e,t){switch(e){case"focusin":case"focusout":Cl=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":Ul=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function Hn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=na(t),t!==null&&Sd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function d0(e,t,l,a,n){switch(t){case"focusin":return Cl=Hn(Cl,e,t,l,a,n),!0;case"dragenter":return Ol=Hn(Ol,e,t,l,a,n),!0;case"mouseover":return Ul=Hn(Ul,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Un.set(i,Hn(Un.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Rn.set(i,Hn(Rn.get(i)||null,e,t,l,a,n)),!0}return!1}function jd(e){var t=aa(e.target);if(t!==null){var l=D(t);if(l!==null){if(t=l.tag,t===13){if(t=te(l),t!==null){e.blockedOn=t,Yf(e.priority,function(){zd(l)});return}}else if(t===31){if(t=xe(l),t!==null){e.blockedOn=t,Yf(e.priority,function(){zd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=vf(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);vu=a,l.target.dispatchEvent(a),vu=null}else return t=na(l),t!==null&&Sd(t),e.blockedOn=l,!1;t.shift()}return!0}function Nd(e,t,l){Fi(e)&&l.delete(t)}function m0(){yf=!1,Cl!==null&&Fi(Cl)&&(Cl=null),Ol!==null&&Fi(Ol)&&(Ol=null),Ul!==null&&Fi(Ul)&&(Ul=null),Un.forEach(Nd),Rn.forEach(Nd)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,yf||(yf=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,m0)))}var Pi=null;function Ad(e){Pi!==e&&(Pi=e,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(gf(a||l)===null)continue;break}var i=na(l);i!==null&&(e.splice(t,3),t-=3,hc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ga(e){function t(r){return Ii(r,e)}Cl!==null&&Ii(Cl,e),Ol!==null&&Ii(Ol,e),Ul!==null&&Ii(Ul,e),Un.forEach(t),Rn.forEach(t);for(var l=0;l<Rl.length;l++){var a=Rl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Rl.length&&(l=Rl[0],l.blockedOn===null);)jd(l),l.blockedOn===null&&Rl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[nt]||null;if(typeof i=="function")u||Ad(l);else if(u){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[nt]||null)f=u.formAction;else if(gf(n)!==null)continue}else f=u.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),Ad(l)}}}function Ed(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function pf(e){this._internalRoot=e}eu.prototype.render=pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var l=t.current,a=xt();bd(l,a,e,t,null,null)},eu.prototype.unmount=pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bd(e.current,2,null,e,null,null),Ri(),t[la]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var t=qf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Rl.length&&t!==0&&t<Rl[l].priority;l++);Rl.splice(l,0,e),l===0&&jd(e)}};var _d=R.version;if(_d!=="19.2.8")throw Error(m(527,_d,"19.2.8"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=N(t),e=e!==null?I(e):null,e=e===null?null:e.stateNode,e};var h0={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Bl=tu.inject(h0),dt=tu}catch{}}return qn.createRoot=function(e,t){if(!Y(e))throw Error(m(299));var l=!1,a="",n=Hr,i=Br,u=qr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=yd(e,1,!1,null,null,l,a,null,n,i,u,Ed),e[la]=t.current,Ic(e),new pf(t)},qn.hydrateRoot=function(e,t,l){if(!Y(e))throw Error(m(299));var a=!1,n="",i=Hr,u=Br,f=qr,r=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),t=yd(e,1,!0,t,l??null,a,n,r,i,u,f,Ed),t.context=pd(null),l=t.current,a=xt(),a=cu(a),n=bl(a),n.callback=null,xl(l,n,a),l=a,t.current.lanes=l,Za(t,l),Vt(t),e[la]=t.current,Ic(e),new eu(t)},qn.version="19.2.8",qn}var Gd;function j0(){if(Gd)return Sf.exports;Gd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(R){console.error(R)}}return z(),Sf.exports=T0(),Sf.exports}var N0=j0();const A0=Xd(N0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vd=(...z)=>z.filter((R,U,m)=>!!R&&R.trim()!==""&&m.indexOf(R)===U).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=Ve.forwardRef(({color:z="currentColor",size:R=24,strokeWidth:U=2,absoluteStrokeWidth:m,className:Y="",children:D,iconNode:te,...xe},H)=>Ve.createElement("svg",{ref:H,..._0,width:R,height:R,stroke:z,strokeWidth:m?Number(U)*24/Number(R):U,className:Vd("lucide",Y),...xe},[...te.map(([N,I])=>Ve.createElement(N,I)),...Array.isArray(D)?D:[D]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(z,R)=>{const U=Ve.forwardRef(({className:m,...Y},D)=>Ve.createElement(D0,{ref:D,iconNode:R,className:Vd(`lucide-${E0(z)}`,m),...Y}));return U.displayName=`${z}`,U};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],O0=ae("ArrowRight",C0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],R0=ae("Award",U0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],B0=ae("Bot",H0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ld=ae("Check",q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Zd=ae("CircleCheck",Y0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],L0=ae("Cloud",G0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],w0=ae("CodeXml",Q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],Qd=ae("Code",X0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Z0=ae("Copy",V0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],kd=ae("Cpu",k0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Kd=ae("Database",K0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],W0=ae("Download",J0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],_f=ae("ExternalLink",$0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],jf=ae("FileText",F0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Df=ae("Github",I0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],e1=ae("Globe",P0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],l1=ae("GraduationCap",t1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],n1=ae("Info",a1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],u1=ae("Layers",i1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],f1=ae("Linkedin",c1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Nf=ae("Lock",s1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Jd=ae("Mail",r1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Cf=ae("MapPin",o1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],m1=ae("Menu",d1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],v1=ae("Moon",h1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Wd=ae("PanelsTopLeft",g1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],$d=ae("Phone",y1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],b1=ae("Send",p1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Fd=ae("Server",x1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],z1=ae("ShieldCheck",S1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Af=ae("Sparkles",M1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],j1=ae("Sun",T1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Id=ae("Terminal",N1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Pd=ae("X",A1),re={name:"Dang Anh Tuong",brandLogo:"TUONG-DEV",title:"Software Engineer | Frontend & Full-Stack Development",location:"Ho Chi Minh City, Vietnam",email:"danganhtuongg@gmail.com",phone:"0335847674",github:"https://github.com/DangAnhTuong",linkedin:"https://www.linkedin.com/in/đặng-anh-tường-726574361?utm_source=share_via&utm_content=profile&utm_medium=member_ios",cvUrl:"/Dang_Anh_Tuong_CV.pdf",summary:"Final-year Information Technology student at Thuyloi University (HCMC) seeking a Full-stack / Frontend Software Engineer Internship. Possesses hands-on experience developing full-stack web applications with React 19, Three.js, Node.js, and Python FastAPI. Proficient in real-time AI streaming, 3D web rendering, database architecture, and cutting-edge AI-assisted engineering workflows (Google Antigravity, Claude Code, OpenAI Codex, Cursor). Certified English proficiency at CEFR B1 level.",education:{university:"Thuyloi University",location:"Ho Chi Minh City, Vietnam",degree:"Bachelor of Science in Information Technology – 4th Year",timeline:"2023 – Present (Expected Graduation: 2027)",englishCert:"Certified CEFR B1 Standard (University Exit Benchmark)",nativeLang:"Vietnamese (Native)"},stats:[{label:"Academic Standing",value:"4th Year · Thuyloi Univ"},{label:"Target Opportunity",value:"Internship / Full-Stack"},{label:"Core Stack",value:"React 19 · Three.js · Node.js"},{label:"English Proficiency",value:"CEFR B1 Certified"}]},E1=[{id:"all",label:"All Projects"},{id:"fullstack",label:"Full-Stack & Backend"},{id:"creative",label:"3D Web & Interactive"},{id:"ai-data",label:"AI & Data Systems"}],wd=[{id:"tuong-tan-toeic",title:"Tường Tận TOEIC – Comprehensive 4-Skill EdTech & Test Preparation Platform",category:"fullstack",featured:!0,role:"Full-stack Engineer | Flagship Production Project",timeline:"Jan. 2026 – Production Live",tagline:"Commercial-grade TOEIC exam ecosystem featuring SM-2 Spaced Repetition, real-time dictation diff engine, and full 200-question ETS mock exam rooms",description:"Designed, engineered, and deployed an end-to-end 4-skill TOEIC preparation platform hosting 18,200 ETS practice questions, 11,785 dictation audio exercises, and 3,500+ Spaced Repetition vocabulary flashcards. Integrated Google 1-Click OAuth 2.0, automated VietQR payment webhooks, and zero-overflow native mobile UX. Deployed to Linux VPS with Nginx and SSL.",techStack:["React 18","Node.js (Express)","MongoDB","TailwindCSS","Vite","JWT Auth","Google OAuth 2.0","Web Audio API","VietQR","Nginx","Linux VPS"],bullets:["4-Skill EdTech Ecosystem: Delivered 18,200 ETS questions with 4-part pedagogical explanations, 11,785 dictation audio sentences with live word-level diffing, and 83 SM-2 vocabulary topics.","High-Precision Audio & Exam Rooms: Engineered 100vh no-scroll ETS exam simulator with 200-question bubble sheets, single-sentence waveform audio streaming, and zero-spoil interactive blank inputs with auto-advance.","Secure Auth & Automated Monetization: Built 100% Google 1-Click OAuth 2.0 authentication, role-based access control (RBAC), and automated VietQR payment webhook integration for instant 120-day VIP membership provisioning.","Native Mobile UX & Production DevOps: Optimized mobile layouts with thumb-zone bottom navigation and off-canvas drawers; established an automated 5-step CI/CD pipeline deployed on Ubuntu VPS via Nginx reverse proxy with SSL."],architecture:{frontend:"React 18, Vite 5, TailwindCSS, Web Audio API, Native Speech API, Lucide React, Custom SM-2 Active Recall Engine",backend:"Node.js Express API (v1), JWT RBAC Middleware, Google OAuth2 Token Verification, VietQR Webhook Listener",database:"MongoDB & Mongoose (18,000+ indexed questions, full-text search, user progress tracking & mistake notebooks)",devops:"Ubuntu Linux VPS, Nginx Reverse Proxy, Let's Encrypt SSL, PM2 Process Manager, Automated 5-Step CI/CD"},github:"https://github.com/DangAnhTuong/tuong_tan_toeic",demo:"https://toeic.danganhtuong.dev",isPrivate:!0,privateNotice:"Mã nguồn đang ở chế độ Private để bảo vệ tài nguyên đề thi. Sẵn sàng mời làm Collaborator/Viewer cho Nhà tuyển dụng quan tâm.",badgeColor:"#3b82f6",gradient:"linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%)"},{id:"ai-english",title:"AI-Powered English Learning Platform",category:"ai-data",featured:!0,role:"Full-stack Developer | Personal Project",timeline:"Jan. 2026 – Present",tagline:"Microservices platform with real-time AI voice streaming and automated pronunciation scoring",description:"Designed and engineered a decoupled full-stack platform combining Node.js for auth/business logic and Python FastAPI for real-time speech processing. Integrated Deepgram STT and OpenAI via WebSockets for sub-1.5s audio evaluation.",techStack:["React 19","Node.js (Express)","Python (FastAPI)","MongoDB","Redis","WebSockets","Docker","Nginx"],bullets:["Microservices Architecture: Designed a decoupled backend system combining Node.js for business logic/auth and Python FastAPI for real-time AI speech processing.","Real-time Voice Streaming: Integrated Deepgram STT and OpenAI API via WebSockets for instant speech recognition, low-latency audio feedback (<1.5s), and automated pronunciation scoring.","Authentication & Security: Implemented JWT authentication with refresh token flow, Google OAuth2, and Role-Based Access Control (RBAC) across learner and admin portals.","DevOps & Infrastructure: Containerized application stack using Docker Compose and Nginx Reverse Proxy on Linux VPS; configured zero-cache HTTP headers for SPA static bundle delivery."],architecture:{frontend:"React 19, Vite, Web Audio API, WebSocket client",backend:"Node.js Express (Auth & Business API), Python FastAPI (Speech Inference Engine)",database:"MongoDB, Redis (Cache & Session state)",devops:"Docker Compose, Nginx Reverse Proxy, Linux VPS"},github:"https://github.com/DangAnhTuong/ai-english-learning-platform",demo:"https://english.danganhtuong.dev",badgeColor:"#10b981",gradient:"linear-gradient(135deg, #059669 0%, #10b981 100%)"},{id:"tuong-hotel",title:"Tuong Hotel – 3D Showcase & Reservation System",category:"creative",featured:!0,role:"Frontend Developer | Personal Project",timeline:"June 2025 – Aug. 2025",tagline:"Interactive 3D luxury hotel showcase and reservation system powered by Three.js WebGL",description:"Built an interactive luxury hotel website featuring real-time 3D graphics rendering with Three.js. Implemented room showcases, dining menus, tour booking flows, and smooth 60 FPS performance optimization.",techStack:["React 19","Three.js (@react-three/fiber)","Ant Design 5","HTML5","CSS3","i18next","Netlify"],bullets:["3D Graphics & UI Design: Built an interactive luxury hotel website featuring 3D graphics rendering with Three.js, room showcases, dining menus, and tour booking flows.","Multi-language Integration: Integrated Ant Design 5 UI components, custom keyframe animations, and i18next for seamless bilingual (English/Vietnamese) support for international guests.","Performance & Deployment: Optimized 3D model assets and geometry loading to maintain smooth 60 FPS rendering; deployed production build to Netlify with continuous deployment pipelines."],architecture:{core:"React 19, Three.js, @react-three/fiber, @react-three/drei",ui:"Ant Design 5, Lucide Icons, Custom Keyframe CSS",i18n:"i18next (English & Vietnamese bilingual routing)",deployment:"Netlify Continuous Deployment (CI/CD)"},github:"https://github.com/DangAnhTuong/tuong-hotel",demo:"https://tuong-hotel.vercel.app",badgeColor:"#0ea5e9",gradient:"linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)"},{id:"tickethub",title:"TicketHub – Enterprise Event Ticketing Platform",category:"fullstack",featured:!0,role:"Full-stack Engineer | Personal Project",timeline:"2025",tagline:"High-concurrency ticket distribution platform with distributed locking and queue management",description:"Engineered a robust event ticketing infrastructure designed to prevent race conditions during high-demand concert ticket sales using Redis Distributed Locks and BullMQ job queues.",techStack:["Next.js 19","NestJS","TypeScript","PostgreSQL","Redis","BullMQ","Prisma ORM","Docker Compose"],bullets:["High Concurrency Engine: Solved ticket race conditions using Redis Distributed Lock mechanisms.","Queue Architecture: Built BullMQ job queues to smooth out thousand-request traffic spikes without server crashes.","Enterprise Architecture: Decoupled NestJS backend with Prisma ORM, PostgreSQL, and strict RBAC authorization.","Full Containerization: Shipped complete multi-container Docker Compose setup ready for cloud or VPS."],architecture:{frontend:"Next.js 19 (TypeScript), Framer Motion, Lucide Icons",backend:"NestJS, Prisma ORM, JWT, RBAC Guards, Swagger Docs",database:"PostgreSQL, Redis (Distributed Lock & BullMQ Job Queue)",devops:"Docker Compose All-in-One, Nginx Reverse Proxy"},github:"https://github.com/DangAnhTuong/event_ticketing_platform-",demo:"https://event-ticketing-platform-omega.vercel.app",badgeColor:"#6366f1",gradient:"linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"},{id:"olist-analytics",title:"Olist E-Commerce Analytics End-to-End",category:"ai-data",featured:!1,role:"Data & ML Engineer | Academic Project",timeline:"2025",tagline:"Customer segmentation & churn prediction pipeline on 100,000+ e-commerce orders",description:"End-to-end data science and machine learning project analyzing Brazilian e-commerce transactions. Built RFM customer segmentation and predictive churn classification models.",techStack:["Python","Pandas","Scikit-Learn","NumPy","Seaborn","Streamlit","Matplotlib"],bullets:["Large-scale Data Pipeline: Cleaned and normalized complex multi-table relational datasets covering 100,000 orders.","RFM Customer Segmentation: Applied K-Means clustering to identify high-value consumer groups.","Predictive Modeling: Trained classification models (Random Forest, Logistic Regression) to assess delivery delays and satisfaction.","Interactive Dashboard: Deployed an exploratory data visualization application using Streamlit Cloud."],architecture:{dataProcessing:"Python, Pandas, NumPy, Scipy",machineLearning:"Scikit-Learn (K-Means, Random Forest, Logistic Regression)",visualization:"Plotly, Seaborn, Matplotlib",dashboard:"Streamlit Community Cloud"},github:"https://github.com/DangAnhTuong/Olist-Ecommerce-Analytics-End-to-End",demo:"/Olist_Analytics_Report.pdf",badgeColor:"#f59e0b",gradient:"linear-gradient(135deg, #d97706 0%, #f59e0b 100%)"}],_1=[{category:"Frontend Development",icon:"Layout",skills:["React 19 / 18","Next.js","TailwindCSS","Three.js (@react-three/fiber)","JavaScript (ES6+)","HTML5","CSS3","Ant Design","Web Audio API"]},{category:"Backend Development",icon:"Server",skills:["Node.js (Express)","Python (FastAPI)","RESTful APIs","WebSockets","Mongoose","JWT Auth","OAuth 2.0"]},{category:"Programming Languages",icon:"Code",skills:["JavaScript","Python","C++","Java"]},{category:"Database & Storage",icon:"Database",skills:["MongoDB","PostgreSQL","MySQL","Redis"]},{category:"AI & Agentic Tools",icon:"Cpu",skills:["Google Antigravity","Claude Code","OpenAI Codex","Cursor IDE","Prompt Engineering"]},{category:"DevOps & Cloud",icon:"Cloud",skills:["Docker","Docker Compose","Nginx Reverse Proxy","Linux VPS","PM2","Git","GitHub","Vercel","Netlify"]},{category:"Foreign Languages",icon:"Globe",skills:["English (CEFR B1 Certified)","Vietnamese (Native)"]}];function D1({theme:z,toggleTheme:R}){const[U,m]=Ve.useState(!1),[Y,D]=Ve.useState(!1);return Ve.useEffect(()=>{const te=()=>{m(window.scrollY>20)};return window.addEventListener("scroll",te),()=>window.removeEventListener("scroll",te)},[]),s.jsxs("header",{className:`navbar-wrapper ${U?"navbar-scrolled":""}`,children:[s.jsxs("div",{className:"container navbar-container",children:[s.jsxs("a",{href:"#home",className:"navbar-brand",children:[s.jsx("div",{className:"brand-icon",children:s.jsx(Id,{size:17,color:"var(--accent-cyan)"})}),s.jsxs("div",{className:"brand-text",children:[s.jsx("span",{className:"brand-name",children:re.brandLogo}),s.jsx("span",{className:"brand-role",children:"Software Engineer"})]})]}),s.jsxs("nav",{className:"nav-links",children:[s.jsx("a",{href:"#home",className:"nav-item",children:"Home"}),s.jsx("a",{href:"#about",className:"nav-item",children:"About"}),s.jsx("a",{href:"#projects",className:"nav-item",children:"Projects"}),s.jsx("a",{href:"#contact",className:"nav-item",children:"Contact"})]}),s.jsxs("div",{className:"navbar-actions",children:[s.jsx("button",{className:"theme-toggle-btn",onClick:R,"aria-label":`Switch to ${z==="dark"?"Light":"Dark"} mode`,title:`Switch to ${z==="dark"?"Light":"Dark"} mode`,children:z==="dark"?s.jsx(j1,{size:18,color:"#fbbf24",className:"theme-icon"}):s.jsx(v1,{size:18,color:"#6366f1",className:"theme-icon"})}),s.jsxs("a",{href:re.cvUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-sm",title:"Download Official Resume PDF",children:[s.jsx(jf,{size:15}),s.jsx("span",{children:"Resume"})]}),s.jsx("button",{className:"mobile-toggle-btn",onClick:()=>D(!Y),"aria-label":"Toggle Navigation",children:Y?s.jsx(Pd,{size:22}):s.jsx(m1,{size:22})})]})]}),Y&&s.jsxs("div",{className:"mobile-menu glass-panel",children:[s.jsx("a",{href:"#home",onClick:()=>D(!1),className:"mobile-nav-item",children:"Home"}),s.jsx("a",{href:"#about",onClick:()=>D(!1),className:"mobile-nav-item",children:"About Me"}),s.jsx("a",{href:"#projects",onClick:()=>D(!1),className:"mobile-nav-item",children:"Featured Projects"}),s.jsx("a",{href:"#contact",onClick:()=>D(!1),className:"mobile-nav-item",children:"Contact"}),s.jsxs("a",{href:re.cvUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-sm",style:{marginTop:"8px"},children:[s.jsx(jf,{size:16}),s.jsx("span",{children:"Download Resume PDF"})]})]}),s.jsx("style",{children:`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 18px 0;
          transition: all 0.3s ease;
        }

        .navbar-scrolled {
          padding: 12px 0;
          background: var(--bg-nav);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.25);
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
          font-weight: 800;
          font-size: 1.05rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .brand-role {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-item {
          font-family: var(--font-heading);
          font-size: 0.94rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-item:hover {
          color: var(--text-primary);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-brand);
          transition: width 0.25s ease;
          border-radius: 2px;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .theme-toggle-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          transform: rotate(20deg) scale(1.06);
          border-color: var(--border-focus);
        }

        .btn-sm {
          padding: 8px 18px;
          font-size: 0.88rem;
        }

        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 6px;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 20px;
          right: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          border-radius: var(--radius-md);
          margin-top: 10px;
        }

        .mobile-nav-item {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          padding: 8px 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (max-width: 860px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
        }
      `})]})}function C1(){return s.jsxs("section",{id:"home",className:"hero-section",children:[s.jsxs("div",{className:"container hero-container",children:[s.jsxs("div",{className:"badge-row",children:[s.jsxs("div",{className:"signature-pill",children:[s.jsx(Af,{size:14,color:"var(--accent-cyan)"}),s.jsx("span",{children:"Signature Focus · Real-Time AI & 3D Web"})]}),s.jsxs("div",{className:"location-pill",children:[s.jsx(Cf,{size:14,color:"var(--accent-indigo)"}),s.jsx("span",{children:re.location})]})]}),s.jsx("h1",{className:"hero-name",children:re.name}),s.jsx("h2",{className:"hero-title text-gradient",children:re.title}),s.jsx("p",{className:"hero-summary",children:re.summary}),s.jsxs("div",{className:"tech-tags-cloud",children:[s.jsxs("span",{className:"tech-tag",children:[s.jsx(u1,{size:13})," React 19 & Next.js"]}),s.jsxs("span",{className:"tech-tag",children:[s.jsx(w0,{size:13})," Three.js (@react-three/fiber)"]}),s.jsxs("span",{className:"tech-tag",children:[s.jsx(kd,{size:13})," Node.js & Python FastAPI"]}),s.jsxs("span",{className:"tech-tag",children:[s.jsx(Af,{size:13})," AI-Assisted Workflows (Antigravity & Claude Code)"]})]}),s.jsxs("div",{className:"hero-actions",children:[s.jsxs("a",{href:"#contact",className:"btn btn-primary",children:[s.jsx("span",{children:"Get In Touch"}),s.jsx(O0,{size:16})]}),s.jsx("a",{href:"#projects",className:"btn btn-secondary",children:s.jsx("span",{children:"View Projects"})}),s.jsx("a",{href:"#about",className:"btn btn-secondary",children:s.jsx("span",{children:"About Me"})})]}),s.jsx("div",{className:"hero-stats-grid",children:re.stats.map((z,R)=>s.jsxs("div",{className:"stat-card glass-panel",children:[s.jsx("span",{className:"stat-val text-gradient",children:z.value}),s.jsx("span",{className:"stat-lbl",children:z.label})]},R))})]}),s.jsx("style",{children:`
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
          max-width: 920px;
        }

        .badge-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
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
          max-width: 780px;
          margin-bottom: 30px;
        }

        .tech-tags-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px;
          margin-bottom: 36px;
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
          margin-bottom: 50px;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
        }

        .stat-card {
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          border-radius: var(--radius-md);
        }

        .stat-val {
          font-family: var(--font-heading);
          font-size: 1.02rem;
          font-weight: 700;
          text-align: center;
        }

        .stat-lbl {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
          text-align: center;
        }

        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.6rem;
          }
          .hero-title {
            font-size: 1.25rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})}function O1(){return s.jsxs("section",{id:"about",className:"about-section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("span",{className:"section-tag",children:"Background & Identity"}),s.jsxs("h2",{className:"section-title",children:["About ",s.jsx("span",{className:"text-gradient",children:"Dang Anh Tuong"})]}),s.jsx("p",{className:"section-desc",children:"Final-year Information Technology student at Thuyloi University passionate about building robust web applications and applying cutting-edge engineering tools."})]}),s.jsxs("div",{className:"about-grid",children:[s.jsxs("div",{className:"about-card glass-panel",children:[s.jsxs("div",{className:"about-card-header",children:[s.jsx("div",{className:"card-icon-wrap",children:s.jsx(l1,{size:22,color:"var(--accent-cyan)"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"card-title",children:"Academic Background"}),s.jsx("p",{className:"card-subtitle",children:re.education.university})]})]}),s.jsxs("div",{className:"education-timeline",children:[s.jsxs("div",{className:"edu-item",children:[s.jsx("div",{className:"edu-dot"}),s.jsxs("div",{className:"edu-content",children:[s.jsx("span",{className:"edu-degree",children:re.education.degree}),s.jsxs("span",{className:"edu-school",children:[re.education.university," — ",re.education.location]}),s.jsx("span",{className:"edu-time",children:re.education.timeline})]})]}),s.jsxs("div",{className:"edu-item",children:[s.jsx("div",{className:"edu-dot"}),s.jsxs("div",{className:"edu-content",children:[s.jsxs("div",{className:"cert-pill",children:[s.jsx(R0,{size:15,color:"var(--accent-emerald)"}),s.jsx("span",{className:"cert-name",children:re.education.englishCert})]}),s.jsxs("span",{className:"edu-school",children:["Languages: ",re.education.nativeLang,", English (Certified B1)"]})]})]})]}),s.jsxs("div",{className:"contact-pills-row",children:[s.jsxs("span",{className:"badge",children:[s.jsx(Cf,{size:12})," ",re.location]}),s.jsxs("span",{className:"badge",children:[s.jsx(Jd,{size:12})," ",re.email]}),s.jsxs("span",{className:"badge",children:[s.jsx($d,{size:12})," ",re.phone]})]})]}),s.jsxs("div",{className:"about-card glass-panel",children:[s.jsxs("div",{className:"about-card-header",children:[s.jsx("div",{className:"card-icon-wrap",children:s.jsx(B0,{size:22,color:"var(--accent-indigo)"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"card-title",children:"Engineering Methodology"}),s.jsx("p",{className:"card-subtitle",children:"Modern AI-Assisted Software Delivery"})]})]}),s.jsxs("p",{className:"philosophy-text",children:["I focus on bridging ",s.jsx("strong",{children:"full-stack software fundamentals"})," (clean architecture, decoupled microservices, database normalization) with ",s.jsx("strong",{children:"next-generation AI-assisted workflows"}),":"]}),s.jsxs("div",{className:"workflow-points",children:[s.jsxs("div",{className:"point-item",children:[s.jsx("span",{className:"point-badge",children:"Autonomous Workflows"}),s.jsxs("p",{children:["Proficient in orchestrating multi-agent systems via ",s.jsx("strong",{children:"Google Antigravity"})," and ",s.jsx("strong",{children:"Claude Code"})," to handle test generation, linting, and rapid prototyping."]})]}),s.jsxs("div",{className:"point-item",children:[s.jsx("span",{className:"point-badge",children:"Real-World Execution"}),s.jsxs("p",{children:["Proven track record building microservices with ",s.jsx("strong",{children:"Node.js & Python FastAPI"}),", audio streaming via WebSockets, and 3D WebGL rendering with ",s.jsx("strong",{children:"Three.js"}),"."]})]}),s.jsxs("div",{className:"point-item",children:[s.jsx("span",{className:"point-badge",children:"Clean & Honest Code"}),s.jsx("p",{children:"No artificial inflation of skillsets: commitment to code precision, zero-cache HTTP delivery, and reliable cloud deployments."})]})]}),s.jsxs("div",{className:"about-actions",children:[s.jsxs("a",{href:re.cvUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-sm",children:[s.jsx(W0,{size:15}),s.jsx("span",{children:"Download Resume (PDF)"})]}),s.jsxs("a",{href:re.linkedin,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",children:[s.jsx(_f,{size:15}),s.jsx("span",{children:"LinkedIn Profile"})]})]})]})]})]}),s.jsx("style",{children:`
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
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .card-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          padding-left: 18px;
        }

        .education-timeline::before {
          content: '';
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: var(--border-subtle);
        }

        .edu-item {
          position: relative;
        }

        .edu-dot {
          position: absolute;
          left: -18px;
          top: 6px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .edu-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .edu-degree {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .edu-school {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .edu-time {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-cyan);
        }

        .cert-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-emerald);
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
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
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
          color: var(--accent-cyan);
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
          gap: 12px;
          margin-top: 8px;
        }

        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function U1({project:z,onClose:R}){return Ve.useEffect(()=>{const U=m=>{m.key==="Escape"&&R()};return window.addEventListener("keydown",U),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",U),document.body.style.overflow="auto"}},[R]),z?s.jsxs("div",{className:"modal-backdrop",onClick:R,children:[s.jsxs("div",{className:"modal-content glass-panel",onClick:U=>U.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{children:[s.jsxs("span",{className:"badge",style:{borderColor:z.badgeColor,color:z.badgeColor},children:[z.category.toUpperCase()," · ",z.timeline]}),s.jsx("h2",{className:"modal-title",children:z.title}),s.jsx("p",{className:"modal-role",children:z.role})]}),s.jsx("button",{className:"modal-close-btn",onClick:R,"aria-label":"Close modal",children:s.jsx(Pd,{size:20})})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"modal-section",children:[s.jsx("h4",{className:"modal-section-title",children:"Overview & Purpose"}),s.jsx("p",{className:"modal-text",children:z.description})]}),z.privateNotice&&s.jsxs("div",{className:"private-notice-banner",children:[s.jsx(Nf,{size:20,color:"var(--accent-amber)",className:"private-banner-icon"}),s.jsxs("div",{className:"private-banner-text",children:[s.jsx("span",{className:"banner-title",children:"Mã nguồn & Quyền truy cập:"}),s.jsx("p",{children:z.privateNotice})]})]}),s.jsxs("div",{className:"modal-section",children:[s.jsx("h4",{className:"modal-section-title",children:"Verified Engineering Deliverables"}),s.jsx("div",{className:"highlights-list",children:z.bullets.map((U,m)=>s.jsxs("div",{className:"highlight-item",children:[s.jsx(Zd,{size:17,color:"var(--accent-emerald)",className:"highlight-icon"}),s.jsx("span",{children:U})]},m))})]}),s.jsxs("div",{className:"modal-section",children:[s.jsx("h4",{className:"modal-section-title",children:"System Architecture Layers"}),s.jsxs("div",{className:"arch-grid",children:[z.architecture.frontend&&s.jsxs("div",{className:"arch-card",children:[s.jsxs("div",{className:"arch-head",children:[s.jsx(Wd,{size:15,color:"var(--accent-cyan)"}),s.jsx("span",{children:"Frontend Client"})]}),s.jsx("p",{children:z.architecture.frontend})]}),z.architecture.backend&&s.jsxs("div",{className:"arch-card",children:[s.jsxs("div",{className:"arch-head",children:[s.jsx(Fd,{size:15,color:"var(--accent-indigo)"}),s.jsx("span",{children:"Backend Microservices"})]}),s.jsx("p",{children:z.architecture.backend})]}),z.architecture.database&&s.jsxs("div",{className:"arch-card",children:[s.jsxs("div",{className:"arch-head",children:[s.jsx(Kd,{size:15,color:"var(--accent-emerald)"}),s.jsx("span",{children:"Database & Caching"})]}),s.jsx("p",{children:z.architecture.database})]}),z.architecture.devops&&s.jsxs("div",{className:"arch-card",children:[s.jsxs("div",{className:"arch-head",children:[s.jsx(Id,{size:15,color:"var(--accent-amber)"}),s.jsx("span",{children:"DevOps & Deployment"})]}),s.jsx("p",{children:z.architecture.devops})]}),z.architecture.core&&s.jsxs("div",{className:"arch-card",children:[s.jsxs("div",{className:"arch-head",children:[s.jsx(z1,{size:15,color:"var(--accent-cyan)"}),s.jsx("span",{children:"3D Graphics & Engine"})]}),s.jsx("p",{children:z.architecture.core})]})]})]}),s.jsxs("div",{className:"modal-section",children:[s.jsx("h4",{className:"modal-section-title",children:"Technologies Used"}),s.jsx("div",{className:"tags-container",children:z.techStack.map((U,m)=>s.jsx("span",{className:"badge",children:U},m))})]})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsxs("a",{href:z.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",title:z.privateNotice||"View Source Code",children:[s.jsx(Df,{size:17}),s.jsx("span",{children:z.isPrivate?"GitHub (Private Repo)":"View Source Code"}),z.isPrivate&&s.jsx(Nf,{size:14,color:"var(--accent-amber)",style:{marginLeft:4}})]}),s.jsxs("a",{href:z.demo,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:[s.jsx(_f,{size:17}),s.jsx("span",{children:"Interactive Demo"})]})]})]}),s.jsx("style",{children:`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 7, 13, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 740px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 16px;
        }

        .modal-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-top: 6px;
        }

        .modal-role {
          font-size: 0.9rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          margin-top: 2px;
        }

        .modal-close-btn {
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modal-section-title {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          color: var(--accent-cyan);
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .modal-text {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .private-notice-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.28);
          padding: 14px 16px;
          border-radius: var(--radius-md);
        }

        .private-banner-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .private-banner-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .banner-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #f59e0b;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .private-banner-text p {
          font-size: 0.88rem;
          color: #fef3c7;
          line-height: 1.5;
          margin: 0;
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
          color: var(--text-primary);
          line-height: 1.5;
        }

        .highlight-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .arch-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .arch-card {
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          padding: 12px;
          border-radius: var(--radius-sm);
        }

        .arch-head {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .arch-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 18px;
        }

        @media (max-width: 640px) {
          .arch-grid {
            grid-template-columns: 1fr;
          }
          .modal-footer {
            flex-direction: column;
          }
          .modal-footer .btn {
            width: 100%;
          }
        }
      `})]}):null}function R1(){const[z,R]=Ve.useState("all"),[U,m]=Ve.useState(null),Y=z==="all"?wd:wd.filter(D=>D.category===z);return s.jsxs("section",{id:"projects",className:"projects-section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("span",{className:"section-tag",children:"Featured Engineering"}),s.jsxs("h2",{className:"section-title",children:["Production & Personal ",s.jsx("span",{className:"text-gradient",children:"Projects"})]}),s.jsx("p",{className:"section-desc",children:"Decoupled microservices, real-time AI audio streaming, and high-fidelity 3D WebGL interfaces built with verified engineering standards."})]}),s.jsx("div",{className:"category-filters",children:E1.map(D=>s.jsx("button",{className:`filter-btn ${z===D.id?"active":""}`,onClick:()=>R(D.id),children:D.label},D.id))}),s.jsx("div",{className:"projects-grid",children:Y.map(D=>s.jsxs("div",{className:"project-card glass-panel",children:[s.jsx("div",{className:"card-glow-bar",style:{background:D.gradient}}),s.jsxs("div",{className:"card-content",children:[s.jsxs("div",{className:"card-meta",children:[s.jsx("span",{className:"badge category-badge",style:{borderColor:D.badgeColor,color:D.badgeColor},children:D.category.toUpperCase()}),s.jsx("span",{className:"timeline-pill",children:D.timeline})]}),s.jsx("h3",{className:"project-title",children:D.title}),s.jsx("p",{className:"project-role",children:D.role}),s.jsx("p",{className:"project-tagline",children:D.tagline}),s.jsx("div",{className:"project-bullets",children:D.bullets.slice(0,2).map((te,xe)=>s.jsxs("div",{className:"bullet-row",children:[s.jsx(Zd,{size:15,color:"var(--accent-emerald)",className:"bullet-icon"}),s.jsx("span",{children:te})]},xe))}),s.jsxs("div",{className:"project-tags",children:[D.techStack.slice(0,5).map((te,xe)=>s.jsx("span",{className:"badge tag-pill",children:te},xe)),D.techStack.length>5&&s.jsxs("span",{className:"badge tag-pill-more",children:["+",D.techStack.length-5]})]}),D.privateNotice&&s.jsxs("div",{className:"card-private-hint",children:[s.jsx(Nf,{size:13,color:"var(--accent-amber)"}),s.jsx("span",{children:D.privateNotice})]}),s.jsxs("div",{className:"card-actions",children:[s.jsxs("button",{className:"btn btn-secondary card-btn",onClick:()=>m(D),children:[s.jsx(n1,{size:15,color:"var(--accent-cyan)"}),s.jsx("span",{children:"System Architecture"})]}),s.jsxs("div",{className:"action-links",children:[s.jsx("a",{href:D.github,target:"_blank",rel:"noopener noreferrer",className:"icon-action-btn",title:D.privateNotice||"View GitHub Repository",children:s.jsx(Df,{size:17})}),s.jsx("a",{href:D.demo,target:"_blank",rel:"noopener noreferrer",className:"icon-action-btn",title:"Open Live Preview",children:s.jsx(_f,{size:17})})]})]})]})]},D.id))})]}),U&&s.jsx(U1,{project:U,onClose:()=>m(null)}),s.jsx("style",{children:`
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
          padding: 8px 20px;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
        }

        .filter-btn.active {
          background: var(--gradient-brand);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(14, 165, 233, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        .project-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-subtle);
        }

        .card-glow-bar {
          height: 4px;
          width: 100%;
        }

        .card-content {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .timeline-pill {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
        }

        .project-title {
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-bottom: 4px;
          font-weight: 700;
        }

        .project-role {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-cyan);
          margin-bottom: 8px;
        }

        .project-tagline {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 18px;
        }

        .project-bullets {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .bullet-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .bullet-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 22px;
        }

        .tag-pill {
          font-size: 0.74rem;
          background: var(--badge-bg);
          border-color: var(--badge-border);
          color: var(--text-secondary);
        }

        .tag-pill-more {
          font-size: 0.74rem;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-indigo);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .card-private-hint {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          padding: 7px 12px;
          border-radius: var(--radius-sm);
          margin-top: 14px;
          line-height: 1.4;
        }

        .card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 18px;
          margin-top: auto;
        }

        .card-btn {
          padding: 8px 16px;
          font-size: 0.84rem;
        }

        .action-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon-action-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .icon-action-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
          transform: translateY(-2px);
        }

        @media (max-width: 860px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function H1(){const z=R=>{switch(R){case"Layout":return s.jsx(Wd,{size:18,color:"var(--accent-cyan)"});case"Server":return s.jsx(Fd,{size:18,color:"var(--accent-indigo)"});case"Code":return s.jsx(Qd,{size:18,color:"var(--accent-purple)"});case"Database":return s.jsx(Kd,{size:18,color:"var(--accent-emerald)"});case"Cpu":return s.jsx(kd,{size:18,color:"#ec4899"});case"Cloud":return s.jsx(L0,{size:18,color:"var(--accent-amber)"});case"Globe":return s.jsx(e1,{size:18,color:"var(--accent-cyan)"});default:return s.jsx(Qd,{size:18})}};return s.jsxs("section",{id:"skills",className:"skills-section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("span",{className:"section-tag",children:"Technical Competencies"}),s.jsxs("h2",{className:"section-title",children:["Skills & ",s.jsx("span",{className:"text-gradient",children:"Core Capabilities"})]}),s.jsx("p",{className:"section-desc",children:"Verified technologies, frameworks, and modern agentic engineering tools actively used in production and personal projects."})]}),s.jsx("div",{className:"skills-grid",children:_1.map((R,U)=>s.jsxs("div",{className:"skill-cat-card glass-panel",children:[s.jsxs("div",{className:"cat-header",children:[s.jsx("div",{className:"cat-icon-wrap",children:z(R.icon)}),s.jsx("h3",{className:"cat-title",children:R.category})]}),s.jsx("div",{className:"skills-pills-wrap",children:R.skills.map((m,Y)=>s.jsx("span",{className:"skill-pill",children:m},Y))})]},U))})]}),s.jsx("style",{children:`
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
      `})]})}var Of={};(function z(R,U,m,Y){var D=!!(R.Worker&&R.Blob&&R.Promise&&R.OffscreenCanvas&&R.OffscreenCanvasRenderingContext2D&&R.HTMLCanvasElement&&R.HTMLCanvasElement.prototype.transferControlToOffscreen&&R.URL&&R.URL.createObjectURL),te=typeof Path2D=="function"&&typeof DOMMatrix=="function",xe=(function(){if(!R.OffscreenCanvas)return!1;try{var h=new OffscreenCanvas(1,1),c=h.getContext("2d");c.fillRect(0,0,1,1);var v=h.transferToImageBitmap();c.createPattern(v,"no-repeat")}catch{return!1}return!0})();function H(){}function N(h){var c=U.exports.Promise,v=c!==void 0?c:R.Promise;return typeof v=="function"?new v(h):(h(H,H),null)}var I=(function(h,c){return{transform:function(v){if(h)return v;if(c.has(v))return c.get(v);var M=new OffscreenCanvas(v.width,v.height),A=M.getContext("2d");return A.drawImage(v,0,0),c.set(v,M),M},clear:function(){c.clear()}}})(xe,new Map),L=(function(){var h=Math.floor(16.666666666666668),c,v,M={},A=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(c=function(E){var O=Math.random();return M[O]=requestAnimationFrame(function _(Q){A===Q||A+h-1<Q?(A=Q,delete M[O],E()):M[O]=requestAnimationFrame(_)}),O},v=function(E){M[E]&&cancelAnimationFrame(M[E])}):(c=function(E){return setTimeout(E,h)},v=function(E){return clearTimeout(E)}),{frame:c,cancel:v}})(),pe=(function(){var h,c,v={};function M(A){function E(O,_){A.postMessage({options:O||{},callback:_})}A.init=function(_){var Q=_.transferControlToOffscreen();A.postMessage({canvas:Q},[Q])},A.fire=function(_,Q,V){if(c)return E(_,null),c;var me=Math.random().toString(36).slice(2);return c=N(function(se){function be(_e){_e.data.callback===me&&(delete v[me],A.removeEventListener("message",be),c=null,I.clear(),V(),se())}A.addEventListener("message",be),E(_,me),v[me]=be.bind(null,{data:{callback:me}})}),c},A.reset=function(){A.postMessage({reset:!0});for(var _ in v)v[_](),delete v[_]}}return function(){if(h)return h;if(!m&&D){var A=["var CONFETTI, SIZE = {}, module = {};","("+z.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{h=new Worker(URL.createObjectURL(new Blob([A])))}catch(E){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",E),null}M(h)}return h}})(),Fe={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Ze(h,c){return c?c(h):h}function Ye(h){return h!=null}function ce(h,c,v){return Ze(h&&Ye(h[c])?h[c]:Fe[c],v)}function Ie(h){return h<0?0:Math.floor(h)}function Lt(h,c){return Math.floor(Math.random()*(c-h))+h}function Ee(h){return parseInt(h,16)}function lt(h){return h.map(St)}function St(h){var c=String(h).replace(/[^0-9a-f]/gi,"");return c.length<6&&(c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]),{r:Ee(c.substring(0,2)),g:Ee(c.substring(2,4)),b:Ee(c.substring(4,6))}}function ke(h){var c=ce(h,"origin",Object);return c.x=ce(c,"x",Number),c.y=ce(c,"y",Number),c}function W(h){h.width=document.documentElement.clientWidth,h.height=document.documentElement.clientHeight}function Ke(h){var c=h.getBoundingClientRect();h.width=c.width,h.height=c.height}function zt(h){var c=document.createElement("canvas");return c.style.position="fixed",c.style.top="0px",c.style.left="0px",c.style.pointerEvents="none",c.style.zIndex=h,c}function rl(h,c,v,M,A,E,O,_,Q){h.save(),h.translate(c,v),h.rotate(E),h.scale(M,A),h.arc(0,0,1,O,_,Q),h.restore()}function Mt(h){var c=h.angle*(Math.PI/180),v=h.spread*(Math.PI/180);return{x:h.x,y:h.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:h.startVelocity*.5+Math.random()*h.startVelocity,angle2D:-c+(.5*v-Math.random()*v),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:h.color,shape:h.shape,tick:0,totalTicks:h.ticks,decay:h.decay,drift:h.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:h.gravity*3,ovalScalar:.6,scalar:h.scalar,flat:h.flat}}function Je(h,c){c.x+=Math.cos(c.angle2D)*c.velocity+c.drift,c.y+=Math.sin(c.angle2D)*c.velocity+c.gravity,c.velocity*=c.decay,c.flat?(c.wobble=0,c.wobbleX=c.x+10*c.scalar,c.wobbleY=c.y+10*c.scalar,c.tiltSin=0,c.tiltCos=0,c.random=1):(c.wobble+=c.wobbleSpeed,c.wobbleX=c.x+10*c.scalar*Math.cos(c.wobble),c.wobbleY=c.y+10*c.scalar*Math.sin(c.wobble),c.tiltAngle+=.1,c.tiltSin=Math.sin(c.tiltAngle),c.tiltCos=Math.cos(c.tiltAngle),c.random=Math.random()+2);var v=c.tick++/c.totalTicks,M=c.x+c.random*c.tiltCos,A=c.y+c.random*c.tiltSin,E=c.wobbleX+c.random*c.tiltCos,O=c.wobbleY+c.random*c.tiltSin;if(h.fillStyle="rgba("+c.color.r+", "+c.color.g+", "+c.color.b+", "+(1-v)+")",h.beginPath(),te&&c.shape.type==="path"&&typeof c.shape.path=="string"&&Array.isArray(c.shape.matrix))h.fill(C(c.shape.path,c.shape.matrix,c.x,c.y,Math.abs(E-M)*.1,Math.abs(O-A)*.1,Math.PI/10*c.wobble));else if(c.shape.type==="bitmap"){var _=Math.PI/10*c.wobble,Q=Math.abs(E-M)*.1,V=Math.abs(O-A)*.1,me=c.shape.bitmap.width*c.scalar,se=c.shape.bitmap.height*c.scalar,be=new DOMMatrix([Math.cos(_)*Q,Math.sin(_)*Q,-Math.sin(_)*V,Math.cos(_)*V,c.x,c.y]);be.multiplySelf(new DOMMatrix(c.shape.matrix));var _e=h.createPattern(I.transform(c.shape.bitmap),"no-repeat");_e.setTransform(be),h.globalAlpha=1-v,h.fillStyle=_e,h.fillRect(c.x-me/2,c.y-se/2,me,se),h.globalAlpha=1}else if(c.shape==="circle")h.ellipse?h.ellipse(c.x,c.y,Math.abs(E-M)*c.ovalScalar,Math.abs(O-A)*c.ovalScalar,Math.PI/10*c.wobble,0,2*Math.PI):rl(h,c.x,c.y,Math.abs(E-M)*c.ovalScalar,Math.abs(O-A)*c.ovalScalar,Math.PI/10*c.wobble,0,2*Math.PI);else if(c.shape==="star")for(var K=Math.PI/2*3,He=4*c.scalar,et=8*c.scalar,ot=c.x,jt=c.y,Bt=5,at=Math.PI/Bt;Bt--;)ot=c.x+Math.cos(K)*et,jt=c.y+Math.sin(K)*et,h.lineTo(ot,jt),K+=at,ot=c.x+Math.cos(K)*He,jt=c.y+Math.sin(K)*He,h.lineTo(ot,jt),K+=at;else h.moveTo(Math.floor(c.x),Math.floor(c.y)),h.lineTo(Math.floor(c.wobbleX),Math.floor(A)),h.lineTo(Math.floor(E),Math.floor(O)),h.lineTo(Math.floor(M),Math.floor(c.wobbleY));return h.closePath(),h.fill(),c.tick<c.totalTicks}function Zt(h,c,v,M,A){var E=c.slice(),O=h.getContext("2d"),_,Q,V=N(function(me){function se(){_=Q=null,O.clearRect(0,0,M.width,M.height),I.clear(),A(),me()}function be(){m&&!(M.width===Y.width&&M.height===Y.height)&&(M.width=h.width=Y.width,M.height=h.height=Y.height),!M.width&&!M.height&&(v(h),M.width=h.width,M.height=h.height),O.clearRect(0,0,M.width,M.height),E=E.filter(function(_e){return Je(O,_e)}),E.length?_=L.frame(be):se()}_=L.frame(be),Q=se});return{addFettis:function(me){return E=E.concat(me),V},canvas:h,promise:V,reset:function(){_&&L.cancel(_),Q&&Q()}}}function Tt(h,c){var v=!h,M=!!ce(c||{},"resize"),A=!1,E=ce(c,"disableForReducedMotion",Boolean),O=D&&!!ce(c||{},"useWorker"),_=O?pe():null,Q=v?W:Ke,V=h&&_?!!h.__confetti_initialized:!1,me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,se;function be(K,He,et){for(var ot=ce(K,"particleCount",Ie),jt=ce(K,"angle",Number),Bt=ce(K,"spread",Number),at=ce(K,"startVelocity",Number),La=ce(K,"decay",Number),lu=ce(K,"gravity",Number),au=ce(K,"drift",Number),We=ce(K,"colors",lt),nu=ce(K,"ticks",Number),Qa=ce(K,"shapes"),Yn=ce(K,"scalar"),ta=!!ce(K,"flat"),Gn=ke(K),wa=ot,Xa=[],iu=h.width*Gn.x,Bl=h.height*Gn.y;wa--;)Xa.push(Mt({x:iu,y:Bl,angle:jt,spread:Bt,startVelocity:at,color:We[wa%We.length],shape:Qa[Lt(0,Qa.length)],ticks:nu,decay:La,gravity:lu,drift:au,scalar:Yn,flat:ta}));return se?se.addFettis(Xa):(se=Zt(h,Xa,Q,He,et),se.promise)}function _e(K){var He=E||ce(K,"disableForReducedMotion",Boolean),et=ce(K,"zIndex",Number);if(He&&me)return N(function(at){at()});v&&se?h=se.canvas:v&&!h&&(h=zt(et),document.body.appendChild(h)),M&&!V&&Q(h);var ot={width:h.width,height:h.height};_&&!V&&_.init(h),V=!0,_&&(h.__confetti_initialized=!0);function jt(){if(_){var at={getBoundingClientRect:function(){if(!v)return h.getBoundingClientRect()}};Q(at),_.postMessage({resize:{width:at.width,height:at.height}});return}ot.width=ot.height=null}function Bt(){se=null,M&&(A=!1,R.removeEventListener("resize",jt)),v&&h&&(document.body.contains(h)&&document.body.removeChild(h),h=null,V=!1)}return M&&!A&&(A=!0,R.addEventListener("resize",jt,!1)),_?_.fire(K,ot,Bt):be(K,ot,Bt)}return _e.reset=function(){_&&_.reset(),se&&se.reset()},_e}var Pe;function S(){return Pe||(Pe=Tt(null,{useWorker:!0,resize:!0})),Pe}function C(h,c,v,M,A,E,O){var _=new Path2D(h),Q=new Path2D;Q.addPath(_,new DOMMatrix(c));var V=new Path2D;return V.addPath(Q,new DOMMatrix([Math.cos(O)*A,Math.sin(O)*A,-Math.sin(O)*E,Math.cos(O)*E,v,M])),V}function X(h){if(!te)throw new Error("path confetti are not supported in this browser");var c,v;typeof h=="string"?c=h:(c=h.path,v=h.matrix);var M=new Path2D(c),A=document.createElement("canvas"),E=A.getContext("2d");if(!v){for(var O=1e3,_=O,Q=O,V=0,me=0,se,be,_e=0;_e<O;_e+=2)for(var K=0;K<O;K+=2)E.isPointInPath(M,_e,K,"nonzero")&&(_=Math.min(_,_e),Q=Math.min(Q,K),V=Math.max(V,_e),me=Math.max(me,K));se=V-_,be=me-Q;var He=10,et=Math.min(He/se,He/be);v=[et,0,0,et,-Math.round(se/2+_)*et,-Math.round(be/2+Q)*et]}return{type:"path",path:c,matrix:v}}function fe(h){var c,v=1,M="#000000",A='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof h=="string"?c=h:(c=h.text,v="scalar"in h?h.scalar:v,A="fontFamily"in h?h.fontFamily:A,M="color"in h?h.color:M);var E=10*v,O=""+E+"px "+A,_=new OffscreenCanvas(E,E),Q=_.getContext("2d");Q.font=O;var V=Q.measureText(c),me=Math.ceil(V.actualBoundingBoxRight+V.actualBoundingBoxLeft),se=Math.ceil(V.actualBoundingBoxAscent+V.actualBoundingBoxDescent),be=2,_e=V.actualBoundingBoxLeft+be,K=V.actualBoundingBoxAscent+be;me+=be+be,se+=be+be,_=new OffscreenCanvas(me,se),Q=_.getContext("2d"),Q.font=O,Q.fillStyle=M,Q.fillText(c,_e,K);var He=1/v;return{type:"bitmap",bitmap:_.transferToImageBitmap(),matrix:[He,0,0,He,-me*He/2,-se*He/2]}}U.exports=function(){return S().apply(this,arguments)},U.exports.reset=function(){S().reset()},U.exports.create=Tt,U.exports.shapeFromPath=X,U.exports.shapeFromText=fe})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Of,!1);const B1=Of.exports;Of.exports.create;function q1(){const[z,R]=Ve.useState(!1),[U,m]=Ve.useState({name:"",email:"",message:""}),[Y,D]=Ve.useState(!1),te=()=>{navigator.clipboard.writeText(re.email),R(!0),B1({particleCount:50,spread:60,origin:{y:.85},colors:["#0ea5e9","#6366f1","#10b981","#ffffff"]}),setTimeout(()=>R(!1),3e3)},xe=H=>{H.preventDefault();const N=`mailto:${re.email}?subject=Project / Internship Inquiry from ${encodeURIComponent(U.name)}&body=${encodeURIComponent(U.message+`

Sender Contact: `+U.email)}`;window.location.href=N,D(!0),setTimeout(()=>D(!1),4e3)};return s.jsxs("footer",{id:"contact",className:"contact-footer",children:[s.jsxs("div",{className:"container",children:[s.jsx("div",{className:"contact-card glass-panel",children:s.jsxs("div",{className:"contact-grid",children:[s.jsxs("div",{className:"contact-info",children:[s.jsx("span",{className:"section-tag",children:"Direct Communication"}),s.jsxs("h2",{className:"contact-title",children:["Let's Discuss Next ",s.jsx("br",{}),s.jsx("span",{className:"text-gradient",children:"Opportunities"})]}),s.jsxs("p",{className:"contact-desc",children:["I am actively seeking a ",s.jsx("strong",{children:"Full-stack / Frontend Software Engineer Internship"}),". Feel free to reach out via email, phone, or LinkedIn to discuss how I can contribute to your engineering team."]}),s.jsxs("div",{className:"info-pills-list",children:[s.jsxs("div",{className:"email-copy-box",children:[s.jsxs("div",{className:"email-text-wrap",children:[s.jsx(Jd,{size:16,color:"var(--accent-cyan)"}),s.jsx("span",{className:"email-text",children:re.email})]}),s.jsx("button",{className:`copy-btn ${z?"copied":""}`,onClick:te,title:"Copy email to clipboard",children:z?s.jsxs(s.Fragment,{children:[s.jsx(Ld,{size:15,color:"var(--accent-emerald)"}),s.jsx("span",{children:"Copied!"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Z0,{size:15}),s.jsx("span",{children:"Copy Email"})]})})]}),s.jsxs("div",{className:"contact-meta-row",children:[s.jsxs("a",{href:`tel:${re.phone}`,className:"meta-item-link",children:[s.jsx($d,{size:15,color:"var(--accent-emerald)"}),s.jsx("span",{children:re.phone})]}),s.jsxs("div",{className:"meta-item",children:[s.jsx(Cf,{size:15,color:"var(--accent-indigo)"}),s.jsx("span",{children:re.location})]})]})]}),s.jsxs("div",{className:"social-links-row",children:[s.jsxs("a",{href:re.github,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"GitHub Profile",children:[s.jsx(Df,{size:17}),s.jsx("span",{children:"GitHub"})]}),s.jsxs("a",{href:re.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"LinkedIn Profile",children:[s.jsx(f1,{size:17}),s.jsx("span",{children:"LinkedIn"})]}),s.jsxs("a",{href:re.cvUrl,target:"_blank",rel:"noopener noreferrer",className:"social-btn",title:"Download Resume PDF",children:[s.jsx(jf,{size:17}),s.jsx("span",{children:"Resume (PDF)"})]})]})]}),s.jsx("div",{className:"contact-form-wrap",children:s.jsxs("form",{onSubmit:xe,className:"quick-form",children:[s.jsx("h3",{className:"form-title",children:"Send a Quick Message"}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"form-name",children:"Your Full Name"}),s.jsx("input",{id:"form-name",type:"text",required:!0,placeholder:"e.g. John Doe / Tech Recruiter",value:U.name,onChange:H=>m({...U,name:H.target.value})})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"form-email",children:"Your Email Address"}),s.jsx("input",{id:"form-email",type:"email",required:!0,placeholder:"name@company.com",value:U.email,onChange:H=>m({...U,email:H.target.value})})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"form-msg",children:"Inquiry Details"}),s.jsx("textarea",{id:"form-msg",rows:"3",required:!0,placeholder:"Briefly describe the role, project, or collaboration...",value:U.message,onChange:H=>m({...U,message:H.target.value})})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary form-submit-btn",children:[s.jsx(b1,{size:15}),s.jsx("span",{children:Y?"Opening Mail Client...":"Dispatch Message"})]})]})})]})}),s.jsxs("div",{className:"footer-bottom",children:[s.jsx("div",{className:"footer-left",children:s.jsxs("span",{className:"footer-copyright",children:["© ",new Date().getFullYear()," ",s.jsx("strong",{children:re.name}),". Built with React 19 & Vite."]})}),s.jsxs("div",{className:"footer-badges",children:[s.jsxs("span",{className:"badge footer-badge",children:[s.jsx(Af,{size:11,color:"var(--accent-cyan)"}),"Verified CV Data"]}),s.jsxs("span",{className:"badge footer-badge",children:[s.jsx(Ld,{size:11,color:"var(--accent-emerald)"}),"CEFR B1 Standard"]})]})]})]}),s.jsx("style",{children:`
        .contact-footer {
          padding: 70px 0 36px;
          position: relative;
        }

        .contact-card {
          padding: 44px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          margin-bottom: 50px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 44px;
          align-items: center;
        }

        .contact-title {
          font-size: 2.1rem;
          color: var(--text-primary);
          margin-bottom: 14px;
          line-height: 1.25;
        }

        .contact-desc {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .info-pills-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 22px;
        }

        .email-copy-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          padding: 10px 16px;
          border-radius: var(--radius-md);
        }

        .email-text-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .email-text {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          cursor: pointer;
          font-size: 0.78rem;
          font-family: var(--font-heading);
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-focus);
        }

        .copy-btn.copied {
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.4);
          color: var(--accent-emerald);
        }

        .contact-meta-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .meta-item-link, .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-decoration: none;
        }

        .meta-item-link:hover {
          color: var(--accent-emerald);
        }

        .social-links-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
          transform: translateY(-2px);
        }

        .contact-form-wrap {
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 26px;
        }

        .form-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .quick-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .form-group label {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .form-group input,
        .form-group textarea {
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 9px 13px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.88rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--border-focus);
        }

        .form-submit-btn {
          margin-top: 4px;
          width: 100%;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 22px;
        }

        .footer-copyright {
          font-size: 0.84rem;
          color: var(--text-muted);
        }

        .footer-badges {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 860px) {
          .contact-card {
            padding: 26px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 14px;
            text-align: center;
          }
        }
      `})]})}function Y1(){const[z,R]=Ve.useState(()=>localStorage.getItem("theme")||"light");Ve.useEffect(()=>{document.documentElement.setAttribute("data-theme",z),localStorage.setItem("theme",z)},[z]);const U=()=>{R(m=>m==="light"?"dark":"light")};return s.jsxs("div",{className:"portfolio-app",children:[s.jsx(D1,{theme:z,toggleTheme:U}),s.jsxs("main",{children:[s.jsx(C1,{}),s.jsx(O1,{}),s.jsx(R1,{}),s.jsx(H1,{})]}),s.jsx(q1,{})]})}A0.createRoot(document.getElementById("root")).render(s.jsx(b0.StrictMode,{children:s.jsx(Y1,{})}));
