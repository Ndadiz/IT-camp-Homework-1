(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(s){if(s.ep)return;s.ep=!0;const f=i(s);fetch(s.href,f)}})();function Hh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var od={exports:{}},Zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy;function xE(){if(Xy)return Zi;Xy=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(o,s,f){var d=null;if(f!==void 0&&(d=""+f),s.key!==void 0&&(d=""+s.key),"key"in s){f={};for(var p in s)p!=="key"&&(f[p]=s[p])}else f=s;return s=f.ref,{$$typeof:e,type:o,key:d,ref:s!==void 0?s:null,props:f}}return Zi.Fragment=r,Zi.jsx=i,Zi.jsxs=i,Zi}var Ky;function EE(){return Ky||(Ky=1,od.exports=xE()),od.exports}var _=EE(),ud={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy;function wE(){if(Zy)return Ee;Zy=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function x(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,w={};function T(C,j,J){this.props=C,this.context=j,this.refs=w,this.updater=J||$}T.prototype.isReactComponent={},T.prototype.setState=function(C,j){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,j,"setState")},T.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function N(){}N.prototype=T.prototype;function A(C,j,J){this.props=C,this.context=j,this.refs=w,this.updater=J||$}var M=A.prototype=new N;M.constructor=A,S(M,T.prototype),M.isPureReactComponent=!0;var P=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function U(C,j,J,Z,ae,fe){return J=fe.ref,{$$typeof:e,type:C,key:j,ref:J!==void 0?J:null,props:fe}}function ee(C,j){return U(C.type,j,void 0,void 0,void 0,C.props)}function re(C){return typeof C=="object"&&C!==null&&C.$$typeof===e}function ce(C){var j={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(J){return j[J]})}var $e=/\/+/g;function Re(C,j){return typeof C=="object"&&C!==null&&C.key!=null?ce(""+C.key):j.toString(36)}function De(){}function Ke(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(De,De):(C.status="pending",C.then(function(j){C.status==="pending"&&(C.status="fulfilled",C.value=j)},function(j){C.status==="pending"&&(C.status="rejected",C.reason=j)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function Ce(C,j,J,Z,ae){var fe=typeof C;(fe==="undefined"||fe==="boolean")&&(C=null);var oe=!1;if(C===null)oe=!0;else switch(fe){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(C.$$typeof){case e:case r:oe=!0;break;case y:return oe=C._init,Ce(oe(C._payload),j,J,Z,ae)}}if(oe)return ae=ae(C),oe=Z===""?"."+Re(C,0):Z,P(ae)?(J="",oe!=null&&(J=oe.replace($e,"$&/")+"/"),Ce(ae,j,J,"",function(nt){return nt})):ae!=null&&(re(ae)&&(ae=ee(ae,J+(ae.key==null||C&&C.key===ae.key?"":(""+ae.key).replace($e,"$&/")+"/")+oe)),j.push(ae)),1;oe=0;var Qe=Z===""?".":Z+":";if(P(C))for(var Se=0;Se<C.length;Se++)Z=C[Se],fe=Qe+Re(Z,Se),oe+=Ce(Z,j,J,fe,ae);else if(Se=x(C),typeof Se=="function")for(C=Se.call(C),Se=0;!(Z=C.next()).done;)Z=Z.value,fe=Qe+Re(Z,Se++),oe+=Ce(Z,j,J,fe,ae);else if(fe==="object"){if(typeof C.then=="function")return Ce(Ke(C),j,J,Z,ae);throw j=String(C),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return oe}function q(C,j,J){if(C==null)return C;var Z=[],ae=0;return Ce(C,Z,"","",function(fe){return j.call(J,fe,ae++)}),Z}function te(C){if(C._status===-1){var j=C._result;j=j(),j.then(function(J){(C._status===0||C._status===-1)&&(C._status=1,C._result=J)},function(J){(C._status===0||C._status===-1)&&(C._status=2,C._result=J)}),C._status===-1&&(C._status=0,C._result=j)}if(C._status===1)return C._result.default;throw C._result}var le=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function I(){}return Ee.Children={map:q,forEach:function(C,j,J){q(C,function(){j.apply(this,arguments)},J)},count:function(C){var j=0;return q(C,function(){j++}),j},toArray:function(C){return q(C,function(j){return j})||[]},only:function(C){if(!re(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Ee.Component=T,Ee.Fragment=i,Ee.Profiler=s,Ee.PureComponent=A,Ee.StrictMode=o,Ee.Suspense=m,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(C){return H.H.useMemoCache(C)}},Ee.cache=function(C){return function(){return C.apply(null,arguments)}},Ee.cloneElement=function(C,j,J){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Z=S({},C.props),ae=C.key,fe=void 0;if(j!=null)for(oe in j.ref!==void 0&&(fe=void 0),j.key!==void 0&&(ae=""+j.key),j)!V.call(j,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&j.ref===void 0||(Z[oe]=j[oe]);var oe=arguments.length-2;if(oe===1)Z.children=J;else if(1<oe){for(var Qe=Array(oe),Se=0;Se<oe;Se++)Qe[Se]=arguments[Se+2];Z.children=Qe}return U(C.type,ae,void 0,void 0,fe,Z)},Ee.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},Ee.createElement=function(C,j,J){var Z,ae={},fe=null;if(j!=null)for(Z in j.key!==void 0&&(fe=""+j.key),j)V.call(j,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ae[Z]=j[Z]);var oe=arguments.length-2;if(oe===1)ae.children=J;else if(1<oe){for(var Qe=Array(oe),Se=0;Se<oe;Se++)Qe[Se]=arguments[Se+2];ae.children=Qe}if(C&&C.defaultProps)for(Z in oe=C.defaultProps,oe)ae[Z]===void 0&&(ae[Z]=oe[Z]);return U(C,fe,void 0,void 0,null,ae)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(C){return{$$typeof:p,render:C}},Ee.isValidElement=re,Ee.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:te}},Ee.memo=function(C,j){return{$$typeof:h,type:C,compare:j===void 0?null:j}},Ee.startTransition=function(C){var j=H.T,J={};H.T=J;try{var Z=C(),ae=H.S;ae!==null&&ae(J,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(I,le)}catch(fe){le(fe)}finally{H.T=j}},Ee.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},Ee.use=function(C){return H.H.use(C)},Ee.useActionState=function(C,j,J){return H.H.useActionState(C,j,J)},Ee.useCallback=function(C,j){return H.H.useCallback(C,j)},Ee.useContext=function(C){return H.H.useContext(C)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(C,j){return H.H.useDeferredValue(C,j)},Ee.useEffect=function(C,j,J){var Z=H.H;if(typeof J=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(C,j)},Ee.useId=function(){return H.H.useId()},Ee.useImperativeHandle=function(C,j,J){return H.H.useImperativeHandle(C,j,J)},Ee.useInsertionEffect=function(C,j){return H.H.useInsertionEffect(C,j)},Ee.useLayoutEffect=function(C,j){return H.H.useLayoutEffect(C,j)},Ee.useMemo=function(C,j){return H.H.useMemo(C,j)},Ee.useOptimistic=function(C,j){return H.H.useOptimistic(C,j)},Ee.useReducer=function(C,j,J){return H.H.useReducer(C,j,J)},Ee.useRef=function(C){return H.H.useRef(C)},Ee.useState=function(C){return H.H.useState(C)},Ee.useSyncExternalStore=function(C,j,J){return H.H.useSyncExternalStore(C,j,J)},Ee.useTransition=function(){return H.H.useTransition()},Ee.version="19.1.0",Ee}var Wy;function So(){return Wy||(Wy=1,ud.exports=wE()),ud.exports}var v=So();const Dt=Hh(v);var sd={exports:{}},Wi={},cd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy;function $E(){return Jy||(Jy=1,function(e){function r(q,te){var le=q.length;q.push(te);e:for(;0<le;){var I=le-1>>>1,C=q[I];if(0<s(C,te))q[I]=te,q[le]=C,le=I;else break e}}function i(q){return q.length===0?null:q[0]}function o(q){if(q.length===0)return null;var te=q[0],le=q.pop();if(le!==te){q[0]=le;e:for(var I=0,C=q.length,j=C>>>1;I<j;){var J=2*(I+1)-1,Z=q[J],ae=J+1,fe=q[ae];if(0>s(Z,le))ae<C&&0>s(fe,Z)?(q[I]=fe,q[ae]=le,I=ae):(q[I]=Z,q[J]=le,I=J);else if(ae<C&&0>s(fe,le))q[I]=fe,q[ae]=le,I=ae;else break e}}return te}function s(q,te){var le=q.sortIndex-te.sortIndex;return le!==0?le:q.id-te.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;e.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();e.unstable_now=function(){return d.now()-p}}var m=[],h=[],y=1,b=null,x=3,$=!1,S=!1,w=!1,T=!1,N=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function P(q){for(var te=i(h);te!==null;){if(te.callback===null)o(h);else if(te.startTime<=q)o(h),te.sortIndex=te.expirationTime,r(m,te);else break;te=i(h)}}function H(q){if(w=!1,P(q),!S)if(i(m)!==null)S=!0,V||(V=!0,Re());else{var te=i(h);te!==null&&Ce(H,te.startTime-q)}}var V=!1,U=-1,ee=5,re=-1;function ce(){return T?!0:!(e.unstable_now()-re<ee)}function $e(){if(T=!1,V){var q=e.unstable_now();re=q;var te=!0;try{e:{S=!1,w&&(w=!1,A(U),U=-1),$=!0;var le=x;try{t:{for(P(q),b=i(m);b!==null&&!(b.expirationTime>q&&ce());){var I=b.callback;if(typeof I=="function"){b.callback=null,x=b.priorityLevel;var C=I(b.expirationTime<=q);if(q=e.unstable_now(),typeof C=="function"){b.callback=C,P(q),te=!0;break t}b===i(m)&&o(m),P(q)}else o(m);b=i(m)}if(b!==null)te=!0;else{var j=i(h);j!==null&&Ce(H,j.startTime-q),te=!1}}break e}finally{b=null,x=le,$=!1}te=void 0}}finally{te?Re():V=!1}}}var Re;if(typeof M=="function")Re=function(){M($e)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,Ke=De.port2;De.port1.onmessage=$e,Re=function(){Ke.postMessage(null)}}else Re=function(){N($e,0)};function Ce(q,te){U=N(function(){q(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_next=function(q){switch(x){case 1:case 2:case 3:var te=3;break;default:te=x}var le=x;x=te;try{return q()}finally{x=le}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(q,te){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var le=x;x=q;try{return te()}finally{x=le}},e.unstable_scheduleCallback=function(q,te,le){var I=e.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?I+le:I):le=I,q){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=le+C,q={id:y++,callback:te,priorityLevel:q,startTime:le,expirationTime:C,sortIndex:-1},le>I?(q.sortIndex=le,r(h,q),i(m)===null&&q===i(h)&&(w?(A(U),U=-1):w=!0,Ce(H,le-I))):(q.sortIndex=C,r(m,q),S||$||(S=!0,V||(V=!0,Re()))),q},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(q){var te=x;return function(){var le=x;x=te;try{return q.apply(this,arguments)}finally{x=le}}}}(fd)),fd}var Iy;function NE(){return Iy||(Iy=1,cd.exports=$E()),cd.exports}var dd={exports:{}},Lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function _E(){if(eg)return Lt;eg=1;var e=So();function r(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function f(m,h,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:b==null?null:""+b,children:m,containerInfo:h,implementation:y}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Lt.createPortal=function(m,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return f(m,h,null,y)},Lt.flushSync=function(m){var h=d.T,y=o.p;try{if(d.T=null,o.p=2,m)return m()}finally{d.T=h,o.p=y,o.d.f()}},Lt.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(m,h))},Lt.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},Lt.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var y=h.as,b=p(y,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,$=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?o.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:$}):y==="script"&&o.d.X(m,{crossOrigin:b,integrity:x,fetchPriority:$,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Lt.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=p(h.as,h.crossOrigin);o.d.M(m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(m)},Lt.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,b=p(y,h.crossOrigin);o.d.L(m,y,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Lt.preloadModule=function(m,h){if(typeof m=="string")if(h){var y=p(h.as,h.crossOrigin);o.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(m)},Lt.requestFormReset=function(m){o.d.r(m)},Lt.unstable_batchedUpdates=function(m,h){return m(h)},Lt.useFormState=function(m,h,y){return d.H.useFormState(m,h,y)},Lt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Lt.version="19.1.0",Lt}var tg;function Qv(){if(tg)return dd.exports;tg=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),dd.exports=_E(),dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function CE(){if(ng)return Wi;ng=1;var e=NE(),r=So(),i=Qv();function o(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(o(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(o(188));return n!==t?null:t}for(var a=t,l=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return p(u),t;if(c===l)return p(u),n;c=c.sibling}throw Error(o(188))}if(a.return!==l.return)a=u,l=c;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,l=c;break}if(E===l){g=!0,l=u,a=c;break}E=E.sibling}if(!g){for(E=c.child;E;){if(E===a){g=!0,a=c,l=u;break}if(E===l){g=!0,l=c,a=u;break}E=E.sibling}if(!g)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),M=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),$e=Symbol.iterator;function Re(t){return t===null||typeof t!="object"?null:(t=$e&&t[$e]||t["@@iterator"],typeof t=="function"?t:null)}var De=Symbol.for("react.client.reference");function Ke(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===De?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case S:return"Fragment";case T:return"Profiler";case w:return"StrictMode";case H:return"Suspense";case V:return"SuspenseList";case re:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case $:return"Portal";case M:return(t.displayName||"Context")+".Provider";case A:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return n=t.displayName||null,n!==null?n:Ke(t.type)||"Memo";case ee:n=t._payload,t=t._init;try{return Ke(t(n))}catch{}}return null}var Ce=Array.isArray,q=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},I=[],C=-1;function j(t){return{current:t}}function J(t){0>C||(t.current=I[C],I[C]=null,C--)}function Z(t,n){C++,I[C]=t.current,t.current=n}var ae=j(null),fe=j(null),oe=j(null),Qe=j(null);function Se(t,n){switch(Z(oe,n),Z(fe,t),Z(ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ey(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ey(n),t=wy(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(ae),Z(ae,t)}function nt(){J(ae),J(fe),J(oe)}function Bt(t){t.memoizedState!==null&&Z(Qe,t);var n=ae.current,a=wy(n,t.type);n!==a&&(Z(fe,t),Z(ae,a))}function Ye(t){fe.current===t&&(J(ae),J(fe)),Qe.current===t&&(J(Qe),Gi._currentValue=le)}var He=Object.prototype.hasOwnProperty,Pt=e.unstable_scheduleCallback,Qn=e.unstable_cancelCallback,oa=e.unstable_shouldYield,Tt=e.unstable_requestPaint,Ze=e.unstable_now,Qt=e.unstable_getCurrentPriorityLevel,qt=e.unstable_ImmediatePriority,vt=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,sr=e.unstable_LowPriority,Qr=e.unstable_IdlePriority,Ie=e.log,cr=e.unstable_setDisableYieldValue,Yn=null,wt=null;function et(t){if(typeof Ie=="function"&&cr(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Yn,t)}catch{}}var dt=Math.clz32?Math.clz32:ye,ue=Math.log,ge=Math.LN2;function ye(t){return t>>>=0,t===0?32:31-(ue(t)/ge|0)|0}var Pe=256,at=4194304;function Le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function en(t,n,a){var l=t.pendingLanes;if(l===0)return 0;var u=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=l&134217727;return E!==0?(l=E&~c,l!==0?u=Le(l):(g&=E,g!==0?u=Le(g):a||(a=E&~t,a!==0&&(u=Le(a))))):(E=l&~c,E!==0?u=Le(E):g!==0?u=Le(g):a||(a=l&~t,a!==0&&(u=Le(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Ae(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function tn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nn(){var t=Pe;return Pe<<=1,(Pe&4194048)===0&&(Pe=256),t}function pn(){var t=at;return at<<=1,(at&62914560)===0&&(at=4194304),t}function yn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Xn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Jl(t,n,a,l,u,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,O=t.expirationTimes,z=t.hiddenUpdates;for(a=g&~a;0<a;){var G=31-dt(a),K=1<<G;E[G]=0,O[G]=-1;var L=z[G];if(L!==null)for(z[G]=null,G=0;G<L.length;G++){var k=L[G];k!==null&&(k.lane&=-536870913)}a&=~K}l!==0&&gn(t,l,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function gn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-dt(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Ao(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-dt(a),u=1<<l;u&n|t[l]&n&&(t[l]|=n),a&=~u}}function Yr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Kn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fr(){var t=te.p;return t!==0?t:(t=window.event,t===void 0?32:qy(t.type))}function Dn(t,n){var a=te.p;try{return te.p=t,n()}finally{te.p=a}}var Zn=Math.random().toString(36).slice(2),rt="__reactFiber$"+Zn,zt="__reactProps$"+Zn,Bn="__reactContainer$"+Zn,Xr="__reactEvents$"+Zn,Il="__reactListeners$"+Zn,vn="__reactHandles$"+Zn,ua="__reactResources$"+Zn,jt="__reactMarker$"+Zn;function ei(t){delete t[rt],delete t[zt],delete t[Xr],delete t[Il],delete t[vn]}function sa(t){var n=t[rt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Bn]||a[rt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Cy(t);t!==null;){if(a=t[rt])return a;t=Cy(t)}return n}t=a,a=t.parentNode}return null}function bn(t){if(t=t[rt]||t[Bn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ca(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(o(33))}function Ra(t){var n=t[ua];return n||(n=t[ua]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ht(t){t[jt]=!0}var Mo=new Set,Ro={};function zn(t,n){Sn(t,n),Sn(t+"Capture",n)}function Sn(t,n){for(Ro[t]=n,t=0;t<n.length;t++)Mo.add(n[t])}var tc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Do={},ti={};function nc(t){return He.call(ti,t)?!0:He.call(Do,t)?!1:tc.test(t)?ti[t]=!0:(Do[t]=!0,!1)}function Da(t,n,a){if(nc(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Kr(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function jn(t,n,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+l)}}var ni,Ba;function Hn(t){if(ni===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ni=n&&n[1]||"",Ba=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ni+t+Ba}var ai=!1;function Zr(t,n){if(!t||ai)return"";ai=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(k){var L=k}Reflect.construct(t,[],K)}else{try{K.call()}catch(k){L=k}t.call(K.prototype)}}else{try{throw Error()}catch(k){L=k}(K=t())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(k){if(k&&L&&typeof k.stack=="string")return[k.stack,L.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),g=c[0],E=c[1];if(g&&E){var O=g.split(`
`),z=E.split(`
`);for(u=l=0;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;for(;u<z.length&&!z[u].includes("DetermineComponentFrameRoot");)u++;if(l===O.length||u===z.length)for(l=O.length-1,u=z.length-1;1<=l&&0<=u&&O[l]!==z[u];)u--;for(;1<=l&&0<=u;l--,u--)if(O[l]!==z[u]){if(l!==1||u!==1)do if(l--,u--,0>u||O[l]!==z[u]){var G=`
`+O[l].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=l&&0<=u);break}}}finally{ai=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Hn(a):""}function ac(t){switch(t.tag){case 26:case 27:case 5:return Hn(t.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 15:return Zr(t.type,!1);case 11:return Zr(t.type.render,!1);case 1:return Zr(t.type,!0);case 31:return Hn("Activity");default:return""}}function Bo(t){try{var n="";do n+=ac(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ot(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zo(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rc(t){var n=zo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,c=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wr(t){t._valueTracker||(t._valueTracker=rc(t))}function jo(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=zo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function dr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ho=/[\n"\\]/g;function ne(t){return t.replace(Ho,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function de(t,n,a,l,u,c,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ot(n)):t.value!==""+Ot(n)&&(t.value=""+Ot(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?mt(t,g,Ot(n)):a!=null?mt(t,g,Ot(a)):l!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Ot(E):t.removeAttribute("name")}function xe(t,n,a,l,u,c,g,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null))return;a=a!=null?""+Ot(a):"",n=n!=null?""+Ot(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function mt(t,n,a){n==="number"&&dr(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bt(t,n,a,l){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ot(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function xn(t,n,a){if(n!=null&&(n=""+Ot(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ot(a):""}function Ln(t,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(o(92));if(Ce(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Ot(n),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function fa(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Lo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jr(t,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,a):typeof a!="number"||a===0||Lo.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function wm(t,n,a){if(n!=null&&typeof n!="object")throw Error(o(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&a[u]!==l&&Jr(t,u,l)}else for(var c in n)n.hasOwnProperty(c)&&Jr(t,c,n[c])}function lc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),SS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uo(t){return SS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ic=null;function oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ir=null,el=null;function $m(t){var n=bn(t);if(n&&(t=n.stateNode)){var a=t[zt]||null;e:switch(t=n.stateNode,n.type){case"input":if(de(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ne(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var u=l[zt]||null;if(!u)throw Error(o(90));de(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===t.form&&jo(l)}break e;case"textarea":xn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&bt(t,!!a.multiple,n,!1)}}}var uc=!1;function Nm(t,n,a){if(uc)return t(n,a);uc=!0;try{var l=t(n);return l}finally{if(uc=!1,(Ir!==null||el!==null)&&($u(),Ir&&(n=Ir,t=el,el=Ir=null,$m(n),t)))for(n=0;n<t.length;n++)$m(t[n])}}function ri(t,n){var a=t.stateNode;if(a===null)return null;var l=a[zt]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=!1;if(da)try{var li={};Object.defineProperty(li,"passive",{get:function(){sc=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{sc=!1}var za=null,cc=null,ko=null;function _m(){if(ko)return ko;var t,n=cc,a=n.length,l,u="value"in za?za.value:za.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(l=1;l<=g&&n[a-l]===u[c-l];l++);return ko=u.slice(t,1<l?1-l:void 0)}function Po(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Cm(){return!1}function Yt(t){function n(a,l,u,c,g){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?qo:Cm,this.isPropagationStopped=Cm,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Yt(hr),ii=y({},hr,{view:0,detail:0}),xS=Yt(ii),fc,dc,oi,Vo=y({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oi&&(oi&&t.type==="mousemove"?(fc=t.screenX-oi.screenX,dc=t.screenY-oi.screenY):dc=fc=0,oi=t),fc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Tm=Yt(Vo),ES=y({},Vo,{dataTransfer:0}),wS=Yt(ES),$S=y({},ii,{relatedTarget:0}),hc=Yt($S),NS=y({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),_S=Yt(NS),CS=y({},hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TS=Yt(CS),OS=y({},hr,{data:0}),Om=Yt(OS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=RS[t])?!!n[t]:!1}function mc(){return DS}var BS=y({},ii,{key:function(t){if(t.key){var n=AS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(t){return t.type==="keypress"?Po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zS=Yt(BS),jS=y({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=Yt(jS),HS=y({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),LS=Yt(HS),US=y({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kS=Yt(US),PS=y({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qS=Yt(PS),FS=y({},hr,{newState:0,oldState:0}),VS=Yt(FS),GS=[9,13,27,32],pc=da&&"CompositionEvent"in window,ui=null;da&&"documentMode"in document&&(ui=document.documentMode);var QS=da&&"TextEvent"in window&&!ui,Mm=da&&(!pc||ui&&8<ui&&11>=ui),Rm=" ",Dm=!1;function Bm(t,n){switch(t){case"keyup":return GS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tl=!1;function YS(t,n){switch(t){case"compositionend":return zm(n);case"keypress":return n.which!==32?null:(Dm=!0,Rm);case"textInput":return t=n.data,t===Rm&&Dm?null:t;default:return null}}function XS(t,n){if(tl)return t==="compositionend"||!pc&&Bm(t,n)?(t=_m(),ko=cc=za=null,tl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mm&&n.locale!=="ko"?null:n.data;default:return null}}var KS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!KS[t.type]:n==="textarea"}function Hm(t,n,a,l){Ir?el?el.push(l):el=[l]:Ir=l,n=Au(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var si=null,ci=null;function ZS(t){gy(t,0)}function Go(t){var n=ca(t);if(jo(n))return t}function Lm(t,n){if(t==="change")return n}var Um=!1;if(da){var yc;if(da){var gc="oninput"in document;if(!gc){var km=document.createElement("div");km.setAttribute("oninput","return;"),gc=typeof km.oninput=="function"}yc=gc}else yc=!1;Um=yc&&(!document.documentMode||9<document.documentMode)}function Pm(){si&&(si.detachEvent("onpropertychange",qm),ci=si=null)}function qm(t){if(t.propertyName==="value"&&Go(ci)){var n=[];Hm(n,ci,t,oc(t)),Nm(ZS,n)}}function WS(t,n,a){t==="focusin"?(Pm(),si=n,ci=a,si.attachEvent("onpropertychange",qm)):t==="focusout"&&Pm()}function JS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(ci)}function IS(t,n){if(t==="click")return Go(n)}function ex(t,n){if(t==="input"||t==="change")return Go(n)}function tx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var an=typeof Object.is=="function"?Object.is:tx;function fi(t,n){if(an(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!He.call(n,u)||!an(t[u],n[u]))return!1}return!0}function Fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,n){var a=Fm(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fm(a)}}function Gm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Qm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=dr(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=dr(t.document)}return n}function vc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var nx=da&&"documentMode"in document&&11>=document.documentMode,nl=null,bc=null,di=null,Sc=!1;function Ym(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sc||nl==null||nl!==dr(l)||(l=nl,"selectionStart"in l&&vc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),di&&fi(di,l)||(di=l,l=Au(bc,"onSelect"),0<l.length&&(n=new Fo("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=nl)))}function mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var al={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},xc={},Xm={};da&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function pr(t){if(xc[t])return xc[t];if(!al[t])return t;var n=al[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xm)return xc[t]=n[a];return t}var Km=pr("animationend"),Zm=pr("animationiteration"),Wm=pr("animationstart"),ax=pr("transitionrun"),rx=pr("transitionstart"),lx=pr("transitioncancel"),Jm=pr("transitionend"),Im=new Map,Ec="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ec.push("scrollEnd");function Un(t,n){Im.set(t,n),zn(n,[t])}var ep=new WeakMap;function En(t,n){if(typeof t=="object"&&t!==null){var a=ep.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Bo(n)},ep.set(t,n),n)}return{value:t,source:n,stack:Bo(n)}}var wn=[],rl=0,wc=0;function Qo(){for(var t=rl,n=wc=rl=0;n<t;){var a=wn[n];wn[n++]=null;var l=wn[n];wn[n++]=null;var u=wn[n];wn[n++]=null;var c=wn[n];if(wn[n++]=null,l!==null&&u!==null){var g=l.pending;g===null?u.next=u:(u.next=g.next,g.next=u),l.pending=u}c!==0&&tp(a,u,c)}}function Yo(t,n,a,l){wn[rl++]=t,wn[rl++]=n,wn[rl++]=a,wn[rl++]=l,wc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function $c(t,n,a,l){return Yo(t,n,a,l),Xo(t)}function ll(t,n){return Yo(t,null,null,n),Xo(t)}function tp(t,n,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-dt(a),t=c.hiddenUpdates,l=t[u],l===null?t[u]=[n]:l.push(n),n.lane=a|536870912),c):null}function Xo(t){if(50<Hi)throw Hi=0,Mf=null,Error(o(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var il={};function ix(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,n,a,l){return new ix(t,n,a,l)}function Nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ha(t,n){var a=t.alternate;return a===null?(a=rn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function np(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ko(t,n,a,l,u,c){var g=0;if(l=t,typeof t=="function")Nc(t)&&(g=1);else if(typeof t=="string")g=uE(t,a,ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case re:return t=rn(31,a,n,u),t.elementType=re,t.lanes=c,t;case S:return yr(a.children,u,c,n);case w:g=8,u|=24;break;case T:return t=rn(12,a,n,u|2),t.elementType=T,t.lanes=c,t;case H:return t=rn(13,a,n,u),t.elementType=H,t.lanes=c,t;case V:return t=rn(19,a,n,u),t.elementType=V,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:case M:g=10;break e;case A:g=9;break e;case P:g=11;break e;case U:g=14;break e;case ee:g=16,l=null;break e}g=29,a=Error(o(130,t===null?"null":typeof t,"")),l=null}return n=rn(g,a,n,u),n.elementType=t,n.type=l,n.lanes=c,n}function yr(t,n,a,l){return t=rn(7,t,l,n),t.lanes=a,t}function _c(t,n,a){return t=rn(6,t,null,n),t.lanes=a,t}function Cc(t,n,a){return n=rn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ol=[],ul=0,Zo=null,Wo=0,$n=[],Nn=0,gr=null,ma=1,pa="";function vr(t,n){ol[ul++]=Wo,ol[ul++]=Zo,Zo=t,Wo=n}function ap(t,n,a){$n[Nn++]=ma,$n[Nn++]=pa,$n[Nn++]=gr,gr=t;var l=ma;t=pa;var u=32-dt(l)-1;l&=~(1<<u),a+=1;var c=32-dt(n)+u;if(30<c){var g=u-u%5;c=(l&(1<<g)-1).toString(32),l>>=g,u-=g,ma=1<<32-dt(n)+u|a<<u|l,pa=c+t}else ma=1<<c|a<<u|l,pa=t}function Tc(t){t.return!==null&&(vr(t,1),ap(t,1,0))}function Oc(t){for(;t===Zo;)Zo=ol[--ul],ol[ul]=null,Wo=ol[--ul],ol[ul]=null;for(;t===gr;)gr=$n[--Nn],$n[Nn]=null,pa=$n[--Nn],$n[Nn]=null,ma=$n[--Nn],$n[Nn]=null}var Ft=null,ut=null,ze=!1,br=null,Wn=!1,Ac=Error(o(519));function Sr(t){var n=Error(o(418,""));throw pi(En(n,t)),Ac}function rp(t){var n=t.stateNode,a=t.type,l=t.memoizedProps;switch(n[rt]=t,n[zt]=l,a){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(a=0;a<Ui.length;a++)Oe(Ui[a],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Oe("invalid",n),xe(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Wr(n);break;case"select":Oe("invalid",n);break;case"textarea":Oe("invalid",n),Ln(n,l.value,l.defaultValue,l.children),Wr(n)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||xy(n.textContent,a)?(l.popover!=null&&(Oe("beforetoggle",n),Oe("toggle",n)),l.onScroll!=null&&Oe("scroll",n),l.onScrollEnd!=null&&Oe("scrollend",n),l.onClick!=null&&(n.onclick=Mu),n=!0):n=!1,n||Sr(t)}function lp(t){for(Ft=t.return;Ft;)switch(Ft.tag){case 5:case 13:Wn=!1;return;case 27:case 3:Wn=!0;return;default:Ft=Ft.return}}function hi(t){if(t!==Ft)return!1;if(!ze)return lp(t),ze=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yf(t.type,t.memoizedProps)),a=!a),a&&ut&&Sr(t),lp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){ut=Pn(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}ut=null}}else n===27?(n=ut,Wa(t.type)?(t=Wf,Wf=null,ut=t):ut=n):ut=Ft?Pn(t.stateNode.nextSibling):null;return!0}function mi(){ut=Ft=null,ze=!1}function ip(){var t=br;return t!==null&&(Zt===null?Zt=t:Zt.push.apply(Zt,t),br=null),t}function pi(t){br===null?br=[t]:br.push(t)}var Mc=j(null),xr=null,ya=null;function ja(t,n,a){Z(Mc,n._currentValue),n._currentValue=a}function ga(t){t._currentValue=Mc.current,J(Mc)}function Rc(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function Dc(t,n,a,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var g=u.child;c=c.firstContext;e:for(;c!==null;){var E=c;c=u;for(var O=0;O<n.length;O++)if(E.context===n[O]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Rc(c.return,a,t),l||(g=null);break e}c=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(o(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Rc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function yi(t,n,a,l){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(o(387));if(g=g.memoizedProps,g!==null){var E=u.type;an(u.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(u===Qe.current){if(g=u.alternate,g===null)throw Error(o(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Gi):t=[Gi])}u=u.return}t!==null&&Dc(n,t,a,l),n.flags|=262144}function Jo(t){for(t=t.firstContext;t!==null;){if(!an(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Er(t){xr=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return op(xr,t)}function Io(t,n){return xr===null&&Er(t),op(t,n)}function op(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(t===null)throw Error(o(308));ya=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ya=ya.next=n;return a}var ox=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ux=e.unstable_scheduleCallback,sx=e.unstable_NormalPriority,St={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bc(){return{controller:new ox,data:new Map,refCount:0}}function gi(t){t.refCount--,t.refCount===0&&ux(sx,function(){t.controller.abort()})}var vi=null,zc=0,sl=0,cl=null;function cx(t,n){if(vi===null){var a=vi=[];zc=0,sl=Lf(),cl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return zc++,n.then(up,up),n}function up(){if(--zc===0&&vi!==null){cl!==null&&(cl.status="fulfilled");var t=vi;vi=null,sl=0,cl=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fx(t,n){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var sp=q.S;q.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&cx(t,n),sp!==null&&sp(t,n)};var wr=j(null);function jc(){var t=wr.current;return t!==null?t:Xe.pooledCache}function eu(t,n){n===null?Z(wr,wr.current):Z(wr,n.pool)}function cp(){var t=jc();return t===null?null:{parent:St._currentValue,pool:t}}var bi=Error(o(460)),fp=Error(o(474)),tu=Error(o(542)),Hc={then:function(){}};function dp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nu(){}function hp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(nu,nu),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pp(t),t;default:if(typeof n.status=="string")n.then(nu,nu);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pp(t),t}throw Si=n,bi}}var Si=null;function mp(){if(Si===null)throw Error(o(459));var t=Si;return Si=null,t}function pp(t){if(t===bi||t===tu)throw Error(o(483))}var Ha=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=Xo(t),tp(t,null,a),n}return Yo(t,l,n,a),Xo(t)}function xi(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Ao(t,a)}}function kc(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Pc=!1;function Ei(){if(Pc){var t=cl;if(t!==null)throw t}}function wi(t,n,a,l){Pc=!1;var u=t.updateQueue;Ha=!1;var c=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var O=E,z=O.next;O.next=null,g===null?c=z:g.next=z,g=O;var G=t.alternate;G!==null&&(G=G.updateQueue,E=G.lastBaseUpdate,E!==g&&(E===null?G.firstBaseUpdate=z:E.next=z,G.lastBaseUpdate=O))}if(c!==null){var K=u.baseState;g=0,G=z=O=null,E=c;do{var L=E.lane&-536870913,k=L!==E.lane;if(k?(Me&L)===L:(l&L)===L){L!==0&&L===sl&&(Pc=!0),G!==null&&(G=G.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var pe=t,he=E;L=n;var Ve=a;switch(he.tag){case 1:if(pe=he.payload,typeof pe=="function"){K=pe.call(Ve,K,L);break e}K=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=he.payload,L=typeof pe=="function"?pe.call(Ve,K,L):pe,L==null)break e;K=y({},K,L);break e;case 2:Ha=!0}}L=E.callback,L!==null&&(t.flags|=64,k&&(t.flags|=8192),k=u.callbacks,k===null?u.callbacks=[L]:k.push(L))}else k={lane:L,tag:E.tag,payload:E.payload,callback:E.callback,next:null},G===null?(z=G=k,O=K):G=G.next=k,g|=L;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;k=E,E=k.next,k.next=null,u.lastBaseUpdate=k,u.shared.pending=null}}while(!0);G===null&&(O=K),u.baseState=O,u.firstBaseUpdate=z,u.lastBaseUpdate=G,c===null&&(u.shared.lanes=0),Ya|=g,t.lanes=g,t.memoizedState=K}}function yp(t,n){if(typeof t!="function")throw Error(o(191,t));t.call(n)}function gp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)yp(a[t],n)}var fl=j(null),au=j(0);function vp(t,n){t=$a,Z(au,t),Z(fl,n),$a=t|n.baseLanes}function qc(){Z(au,$a),Z(fl,fl.current)}function Fc(){$a=au.current,J(fl),J(au)}var ka=0,Ne=null,qe=null,pt=null,ru=!1,dl=!1,$r=!1,lu=0,$i=0,hl=null,dx=0;function ct(){throw Error(o(321))}function Vc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!an(t[a],n[a]))return!1;return!0}function Gc(t,n,a,l,u,c){return ka=c,Ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,q.H=t===null||t.memoizedState===null?t0:n0,$r=!1,c=a(l,u),$r=!1,dl&&(c=Sp(n,a,l,u)),bp(t),c}function bp(t){q.H=fu;var n=qe!==null&&qe.next!==null;if(ka=0,pt=qe=Ne=null,ru=!1,$i=0,hl=null,n)throw Error(o(300));t===null||$t||(t=t.dependencies,t!==null&&Jo(t)&&($t=!0))}function Sp(t,n,a,l){Ne=t;var u=0;do{if(dl&&(hl=null),$i=0,dl=!1,25<=u)throw Error(o(301));if(u+=1,pt=qe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}q.H=bx,c=n(a,l)}while(dl);return c}function hx(){var t=q.H,n=t.useState()[0];return n=typeof n.then=="function"?Ni(n):n,t=t.useState()[0],(qe!==null?qe.memoizedState:null)!==t&&(Ne.flags|=1024),n}function Qc(){var t=lu!==0;return lu=0,t}function Yc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Xc(t){if(ru){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ru=!1}ka=0,pt=qe=Ne=null,dl=!1,$i=lu=0,hl=null}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ne.memoizedState=pt=t:pt=pt.next=t,pt}function yt(){if(qe===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var n=pt===null?Ne.memoizedState:pt.next;if(n!==null)pt=n,qe=t;else{if(t===null)throw Ne.alternate===null?Error(o(467)):Error(o(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},pt===null?Ne.memoizedState=pt=t:pt=pt.next=t}return pt}function Kc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ni(t){var n=$i;return $i+=1,hl===null&&(hl=[]),t=hp(hl,t,n),n=Ne,(pt===null?n.memoizedState:pt.next)===null&&(n=n.alternate,q.H=n===null||n.memoizedState===null?t0:n0),t}function iu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ni(t);if(t.$$typeof===M)return Ht(t)}throw Error(o(438,String(t)))}function Zc(t){var n=null,a=Ne.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Kc(),Ne.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),l=0;l<t;l++)a[l]=ce;return n.index++,a}function va(t,n){return typeof n=="function"?n(t):n}function ou(t){var n=yt();return Wc(n,qe,t)}function Wc(t,n,a){var l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var u=t.baseQueue,c=l.pending;if(c!==null){if(u!==null){var g=u.next;u.next=c.next,c.next=g}n.baseQueue=u=c,l.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var E=g=null,O=null,z=n,G=!1;do{var K=z.lane&-536870913;if(K!==z.lane?(Me&K)===K:(ka&K)===K){var L=z.revertLane;if(L===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),K===sl&&(G=!0);else if((ka&L)===L){z=z.next,L===sl&&(G=!0);continue}else K={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},O===null?(E=O=K,g=c):O=O.next=K,Ne.lanes|=L,Ya|=L;K=z.action,$r&&a(c,K),c=z.hasEagerState?z.eagerState:a(c,K)}else L={lane:K,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},O===null?(E=O=L,g=c):O=O.next=L,Ne.lanes|=K,Ya|=K;z=z.next}while(z!==null&&z!==n);if(O===null?g=c:O.next=E,!an(c,t.memoizedState)&&($t=!0,G&&(a=cl,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=O,l.lastRenderedState=c}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Jc(t){var n=yt(),a=n.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do c=t(c,g.action),g=g.next;while(g!==u);an(c,n.memoizedState)||($t=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,l]}function xp(t,n,a){var l=Ne,u=yt(),c=ze;if(c){if(a===void 0)throw Error(o(407));a=a()}else a=n();var g=!an((qe||u).memoizedState,a);g&&(u.memoizedState=a,$t=!0),u=u.queue;var E=$p.bind(null,l,u,t);if(_i(2048,8,E,[t]),u.getSnapshot!==n||g||pt!==null&&pt.memoizedState.tag&1){if(l.flags|=2048,ml(9,uu(),wp.bind(null,l,u,a,n),null),Xe===null)throw Error(o(349));c||(ka&124)!==0||Ep(l,n,a)}return a}function Ep(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Ne.updateQueue,n===null?(n=Kc(),Ne.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wp(t,n,a,l){n.value=a,n.getSnapshot=l,Np(n)&&_p(t)}function $p(t,n,a){return a(function(){Np(n)&&_p(t)})}function Np(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!an(t,a)}catch{return!0}}function _p(t){var n=ll(t,2);n!==null&&cn(n,t,2)}function Ic(t){var n=Xt();if(typeof t=="function"){var a=t;if(t=a(),$r){et(!0);try{a()}finally{et(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},n}function Cp(t,n,a,l){return t.baseState=a,Wc(t,qe,typeof l=="function"?l:va)}function mx(t,n,a,l,u){if(cu(t))throw Error(o(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};q.T!==null?a(!0):c.isTransition=!1,l(c),a=n.pending,a===null?(c.next=n.pending=c,Tp(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Tp(t,n){var a=n.action,l=n.payload,u=t.state;if(n.isTransition){var c=q.T,g={};q.T=g;try{var E=a(u,l),O=q.S;O!==null&&O(g,E),Op(t,n,E)}catch(z){ef(t,n,z)}finally{q.T=c}}else try{c=a(u,l),Op(t,n,c)}catch(z){ef(t,n,z)}}function Op(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ap(t,n,l)},function(l){return ef(t,n,l)}):Ap(t,n,a)}function Ap(t,n,a){n.status="fulfilled",n.value=a,Mp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Tp(t,a)))}function ef(t,n,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,Mp(n),n=n.next;while(n!==l)}t.action=null}function Mp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Rp(t,n){return n}function Dp(t,n){if(ze){var a=Xe.formState;if(a!==null){e:{var l=Ne;if(ze){if(ut){t:{for(var u=ut,c=Wn;u.nodeType!==8;){if(!c){u=null;break t}if(u=Pn(u.nextSibling),u===null){u=null;break t}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){ut=Pn(u.nextSibling),l=u.data==="F!";break e}}Sr(l)}l=!1}l&&(n=a[0])}}return a=Xt(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rp,lastRenderedState:n},a.queue=l,a=Jp.bind(null,Ne,l),l.dispatch=a,l=Ic(!1),c=lf.bind(null,Ne,!1,l.queue),l=Xt(),u={state:n,dispatch:null,action:t,pending:null},l.queue=u,a=mx.bind(null,Ne,u,c,a),u.dispatch=a,l.memoizedState=t,[n,a,!1]}function Bp(t){var n=yt();return zp(n,qe,t)}function zp(t,n,a){if(n=Wc(t,n,Rp)[0],t=ou(va)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ni(n)}catch(g){throw g===bi?tu:g}else l=n;n=yt();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(Ne.flags|=2048,ml(9,uu(),px.bind(null,u,a),null)),[l,c,t]}function px(t,n){t.action=n}function jp(t){var n=yt(),a=qe;if(a!==null)return zp(n,a,t);yt(),n=n.memoizedState,a=yt();var l=a.queue.dispatch;return a.memoizedState=t,[n,l,!1]}function ml(t,n,a,l){return t={tag:t,create:a,deps:l,inst:n,next:null},n=Ne.updateQueue,n===null&&(n=Kc(),Ne.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t),t}function uu(){return{destroy:void 0,resource:void 0}}function Hp(){return yt().memoizedState}function su(t,n,a,l){var u=Xt();l=l===void 0?null:l,Ne.flags|=t,u.memoizedState=ml(1|n,uu(),a,l)}function _i(t,n,a,l){var u=yt();l=l===void 0?null:l;var c=u.memoizedState.inst;qe!==null&&l!==null&&Vc(l,qe.memoizedState.deps)?u.memoizedState=ml(n,c,a,l):(Ne.flags|=t,u.memoizedState=ml(1|n,c,a,l))}function Lp(t,n){su(8390656,8,t,n)}function Up(t,n){_i(2048,8,t,n)}function kp(t,n){return _i(4,2,t,n)}function Pp(t,n){return _i(4,4,t,n)}function qp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Fp(t,n,a){a=a!=null?a.concat([t]):null,_i(4,4,qp.bind(null,n,t),a)}function tf(){}function Vp(t,n){var a=yt();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Vc(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function Gp(t,n){var a=yt();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Vc(n,l[1]))return l[0];if(l=t(),$r){et(!0);try{t()}finally{et(!1)}}return a.memoizedState=[l,n],l}function nf(t,n,a){return a===void 0||(ka&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=X0(),Ne.lanes|=t,Ya|=t,a)}function Qp(t,n,a,l){return an(a,n)?a:fl.current!==null?(t=nf(t,a,l),an(t,n)||($t=!0),t):(ka&42)===0?($t=!0,t.memoizedState=a):(t=X0(),Ne.lanes|=t,Ya|=t,n)}function Yp(t,n,a,l,u){var c=te.p;te.p=c!==0&&8>c?c:8;var g=q.T,E={};q.T=E,lf(t,!1,n,a);try{var O=u(),z=q.S;if(z!==null&&z(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var G=fx(O,l);Ci(t,n,G,sn(t))}else Ci(t,n,l,sn(t))}catch(K){Ci(t,n,{then:function(){},status:"rejected",reason:K},sn())}finally{te.p=c,q.T=g}}function yx(){}function af(t,n,a,l){if(t.tag!==5)throw Error(o(476));var u=Xp(t).queue;Yp(t,u,n,le,a===null?yx:function(){return Kp(t),a(l)})}function Xp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Kp(t){var n=Xp(t).next.queue;Ci(t,n,{},sn())}function rf(){return Ht(Gi)}function Zp(){return yt().memoizedState}function Wp(){return yt().memoizedState}function gx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=sn();t=La(a);var l=Ua(n,t,a);l!==null&&(cn(l,n,a),xi(l,n,a)),n={cache:Bc()},t.payload=n;return}n=n.return}}function vx(t,n,a){var l=sn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},cu(t)?Ip(n,a):(a=$c(t,n,a,l),a!==null&&(cn(a,t,l),e0(a,n,l)))}function Jp(t,n,a){var l=sn();Ci(t,n,a,l)}function Ci(t,n,a,l){var u={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(cu(t))Ip(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,E=c(g,a);if(u.hasEagerState=!0,u.eagerState=E,an(E,g))return Yo(t,n,u,0),Xe===null&&Qo(),!1}catch{}finally{}if(a=$c(t,n,u,l),a!==null)return cn(a,t,l),e0(a,n,l),!0}return!1}function lf(t,n,a,l){if(l={lane:2,revertLane:Lf(),action:l,hasEagerState:!1,eagerState:null,next:null},cu(t)){if(n)throw Error(o(479))}else n=$c(t,a,l,2),n!==null&&cn(n,t,2)}function cu(t){var n=t.alternate;return t===Ne||n!==null&&n===Ne}function Ip(t,n){dl=ru=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function e0(t,n,a){if((a&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Ao(t,a)}}var fu={readContext:Ht,use:iu,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct},t0={readContext:Ht,use:iu,useCallback:function(t,n){return Xt().memoizedState=[t,n===void 0?null:n],t},useContext:Ht,useEffect:Lp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,su(4194308,4,qp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return su(4194308,4,t,n)},useInsertionEffect:function(t,n){su(4,2,t,n)},useMemo:function(t,n){var a=Xt();n=n===void 0?null:n;var l=t();if($r){et(!0);try{t()}finally{et(!1)}}return a.memoizedState=[l,n],l},useReducer:function(t,n,a){var l=Xt();if(a!==void 0){var u=a(n);if($r){et(!0);try{a(n)}finally{et(!1)}}}else u=n;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=vx.bind(null,Ne,t),[l.memoizedState,t]},useRef:function(t){var n=Xt();return t={current:t},n.memoizedState=t},useState:function(t){t=Ic(t);var n=t.queue,a=Jp.bind(null,Ne,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:tf,useDeferredValue:function(t,n){var a=Xt();return nf(a,t,n)},useTransition:function(){var t=Ic(!1);return t=Yp.bind(null,Ne,t.queue,!0,!1),Xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var l=Ne,u=Xt();if(ze){if(a===void 0)throw Error(o(407));a=a()}else{if(a=n(),Xe===null)throw Error(o(349));(Me&124)!==0||Ep(l,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,Lp($p.bind(null,l,c,t),[t]),l.flags|=2048,ml(9,uu(),wp.bind(null,l,c,a,n),null),a},useId:function(){var t=Xt(),n=Xe.identifierPrefix;if(ze){var a=pa,l=ma;a=(l&~(1<<32-dt(l)-1)).toString(32)+a,n="«"+n+"R"+a,a=lu++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=dx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:rf,useFormState:Dp,useActionState:Dp,useOptimistic:function(t){var n=Xt();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lf.bind(null,Ne,!0,a),a.dispatch=n,[t,n]},useMemoCache:Zc,useCacheRefresh:function(){return Xt().memoizedState=gx.bind(null,Ne)}},n0={readContext:Ht,use:iu,useCallback:Vp,useContext:Ht,useEffect:Up,useImperativeHandle:Fp,useInsertionEffect:kp,useLayoutEffect:Pp,useMemo:Gp,useReducer:ou,useRef:Hp,useState:function(){return ou(va)},useDebugValue:tf,useDeferredValue:function(t,n){var a=yt();return Qp(a,qe.memoizedState,t,n)},useTransition:function(){var t=ou(va)[0],n=yt().memoizedState;return[typeof t=="boolean"?t:Ni(t),n]},useSyncExternalStore:xp,useId:Zp,useHostTransitionStatus:rf,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=yt();return Cp(a,qe,t,n)},useMemoCache:Zc,useCacheRefresh:Wp},bx={readContext:Ht,use:iu,useCallback:Vp,useContext:Ht,useEffect:Up,useImperativeHandle:Fp,useInsertionEffect:kp,useLayoutEffect:Pp,useMemo:Gp,useReducer:Jc,useRef:Hp,useState:function(){return Jc(va)},useDebugValue:tf,useDeferredValue:function(t,n){var a=yt();return qe===null?nf(a,t,n):Qp(a,qe.memoizedState,t,n)},useTransition:function(){var t=Jc(va)[0],n=yt().memoizedState;return[typeof t=="boolean"?t:Ni(t),n]},useSyncExternalStore:xp,useId:Zp,useHostTransitionStatus:rf,useFormState:jp,useActionState:jp,useOptimistic:function(t,n){var a=yt();return qe!==null?Cp(a,qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Zc,useCacheRefresh:Wp},pl=null,Ti=0;function du(t){var n=Ti;return Ti+=1,pl===null&&(pl=[]),hp(pl,t,n)}function Oi(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function hu(t,n){throw n.$$typeof===b?Error(o(525)):(t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function a0(t){var n=t._init;return n(t._payload)}function r0(t){function n(D,R){if(t){var B=D.deletions;B===null?(D.deletions=[R],D.flags|=16):B.push(R)}}function a(D,R){if(!t)return null;for(;R!==null;)n(D,R),R=R.sibling;return null}function l(D){for(var R=new Map;D!==null;)D.key!==null?R.set(D.key,D):R.set(D.index,D),D=D.sibling;return R}function u(D,R){return D=ha(D,R),D.index=0,D.sibling=null,D}function c(D,R,B){return D.index=B,t?(B=D.alternate,B!==null?(B=B.index,B<R?(D.flags|=67108866,R):B):(D.flags|=67108866,R)):(D.flags|=1048576,R)}function g(D){return t&&D.alternate===null&&(D.flags|=67108866),D}function E(D,R,B,X){return R===null||R.tag!==6?(R=_c(B,D.mode,X),R.return=D,R):(R=u(R,B),R.return=D,R)}function O(D,R,B,X){var ie=B.type;return ie===S?G(D,R,B.props.children,X,B.key):R!==null&&(R.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ee&&a0(ie)===R.type)?(R=u(R,B.props),Oi(R,B),R.return=D,R):(R=Ko(B.type,B.key,B.props,null,D.mode,X),Oi(R,B),R.return=D,R)}function z(D,R,B,X){return R===null||R.tag!==4||R.stateNode.containerInfo!==B.containerInfo||R.stateNode.implementation!==B.implementation?(R=Cc(B,D.mode,X),R.return=D,R):(R=u(R,B.children||[]),R.return=D,R)}function G(D,R,B,X,ie){return R===null||R.tag!==7?(R=yr(B,D.mode,X,ie),R.return=D,R):(R=u(R,B),R.return=D,R)}function K(D,R,B){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=_c(""+R,D.mode,B),R.return=D,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case x:return B=Ko(R.type,R.key,R.props,null,D.mode,B),Oi(B,R),B.return=D,B;case $:return R=Cc(R,D.mode,B),R.return=D,R;case ee:var X=R._init;return R=X(R._payload),K(D,R,B)}if(Ce(R)||Re(R))return R=yr(R,D.mode,B,null),R.return=D,R;if(typeof R.then=="function")return K(D,du(R),B);if(R.$$typeof===M)return K(D,Io(D,R),B);hu(D,R)}return null}function L(D,R,B,X){var ie=R!==null?R.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ie!==null?null:E(D,R,""+B,X);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case x:return B.key===ie?O(D,R,B,X):null;case $:return B.key===ie?z(D,R,B,X):null;case ee:return ie=B._init,B=ie(B._payload),L(D,R,B,X)}if(Ce(B)||Re(B))return ie!==null?null:G(D,R,B,X,null);if(typeof B.then=="function")return L(D,R,du(B),X);if(B.$$typeof===M)return L(D,R,Io(D,B),X);hu(D,B)}return null}function k(D,R,B,X,ie){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return D=D.get(B)||null,E(R,D,""+X,ie);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return D=D.get(X.key===null?B:X.key)||null,O(R,D,X,ie);case $:return D=D.get(X.key===null?B:X.key)||null,z(R,D,X,ie);case ee:var _e=X._init;return X=_e(X._payload),k(D,R,B,X,ie)}if(Ce(X)||Re(X))return D=D.get(B)||null,G(R,D,X,ie,null);if(typeof X.then=="function")return k(D,R,B,du(X),ie);if(X.$$typeof===M)return k(D,R,B,Io(R,X),ie);hu(R,X)}return null}function pe(D,R,B,X){for(var ie=null,_e=null,se=R,me=R=0,_t=null;se!==null&&me<B.length;me++){se.index>me?(_t=se,se=null):_t=se.sibling;var Be=L(D,se,B[me],X);if(Be===null){se===null&&(se=_t);break}t&&se&&Be.alternate===null&&n(D,se),R=c(Be,R,me),_e===null?ie=Be:_e.sibling=Be,_e=Be,se=_t}if(me===B.length)return a(D,se),ze&&vr(D,me),ie;if(se===null){for(;me<B.length;me++)se=K(D,B[me],X),se!==null&&(R=c(se,R,me),_e===null?ie=se:_e.sibling=se,_e=se);return ze&&vr(D,me),ie}for(se=l(se);me<B.length;me++)_t=k(se,D,me,B[me],X),_t!==null&&(t&&_t.alternate!==null&&se.delete(_t.key===null?me:_t.key),R=c(_t,R,me),_e===null?ie=_t:_e.sibling=_t,_e=_t);return t&&se.forEach(function(nr){return n(D,nr)}),ze&&vr(D,me),ie}function he(D,R,B,X){if(B==null)throw Error(o(151));for(var ie=null,_e=null,se=R,me=R=0,_t=null,Be=B.next();se!==null&&!Be.done;me++,Be=B.next()){se.index>me?(_t=se,se=null):_t=se.sibling;var nr=L(D,se,Be.value,X);if(nr===null){se===null&&(se=_t);break}t&&se&&nr.alternate===null&&n(D,se),R=c(nr,R,me),_e===null?ie=nr:_e.sibling=nr,_e=nr,se=_t}if(Be.done)return a(D,se),ze&&vr(D,me),ie;if(se===null){for(;!Be.done;me++,Be=B.next())Be=K(D,Be.value,X),Be!==null&&(R=c(Be,R,me),_e===null?ie=Be:_e.sibling=Be,_e=Be);return ze&&vr(D,me),ie}for(se=l(se);!Be.done;me++,Be=B.next())Be=k(se,D,me,Be.value,X),Be!==null&&(t&&Be.alternate!==null&&se.delete(Be.key===null?me:Be.key),R=c(Be,R,me),_e===null?ie=Be:_e.sibling=Be,_e=Be);return t&&se.forEach(function(SE){return n(D,SE)}),ze&&vr(D,me),ie}function Ve(D,R,B,X){if(typeof B=="object"&&B!==null&&B.type===S&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case x:e:{for(var ie=B.key;R!==null;){if(R.key===ie){if(ie=B.type,ie===S){if(R.tag===7){a(D,R.sibling),X=u(R,B.props.children),X.return=D,D=X;break e}}else if(R.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===ee&&a0(ie)===R.type){a(D,R.sibling),X=u(R,B.props),Oi(X,B),X.return=D,D=X;break e}a(D,R);break}else n(D,R);R=R.sibling}B.type===S?(X=yr(B.props.children,D.mode,X,B.key),X.return=D,D=X):(X=Ko(B.type,B.key,B.props,null,D.mode,X),Oi(X,B),X.return=D,D=X)}return g(D);case $:e:{for(ie=B.key;R!==null;){if(R.key===ie)if(R.tag===4&&R.stateNode.containerInfo===B.containerInfo&&R.stateNode.implementation===B.implementation){a(D,R.sibling),X=u(R,B.children||[]),X.return=D,D=X;break e}else{a(D,R);break}else n(D,R);R=R.sibling}X=Cc(B,D.mode,X),X.return=D,D=X}return g(D);case ee:return ie=B._init,B=ie(B._payload),Ve(D,R,B,X)}if(Ce(B))return pe(D,R,B,X);if(Re(B)){if(ie=Re(B),typeof ie!="function")throw Error(o(150));return B=ie.call(B),he(D,R,B,X)}if(typeof B.then=="function")return Ve(D,R,du(B),X);if(B.$$typeof===M)return Ve(D,R,Io(D,B),X);hu(D,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,R!==null&&R.tag===6?(a(D,R.sibling),X=u(R,B),X.return=D,D=X):(a(D,R),X=_c(B,D.mode,X),X.return=D,D=X),g(D)):a(D,R)}return function(D,R,B,X){try{Ti=0;var ie=Ve(D,R,B,X);return pl=null,ie}catch(se){if(se===bi||se===tu)throw se;var _e=rn(29,se,null,D.mode);return _e.lanes=X,_e.return=D,_e}finally{}}}var yl=r0(!0),l0=r0(!1),_n=j(null),Jn=null;function Pa(t){var n=t.alternate;Z(xt,xt.current&1),Z(_n,t),Jn===null&&(n===null||fl.current!==null||n.memoizedState!==null)&&(Jn=t)}function i0(t){if(t.tag===22){if(Z(xt,xt.current),Z(_n,t),Jn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Jn=t)}}else qa()}function qa(){Z(xt,xt.current),Z(_n,_n.current)}function ba(t){J(_n),Jn===t&&(Jn=null),J(xt)}var xt=j(0);function mu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Zf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function of(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var l=sn(),u=La(l);u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,l),n!==null&&(cn(n,t,l),xi(n,t,l))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=sn(),u=La(l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,l),n!==null&&(cn(n,t,l),xi(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=sn(),l=La(a);l.tag=2,n!=null&&(l.callback=n),n=Ua(t,l,a),n!==null&&(cn(n,t,a),xi(n,t,a))}};function o0(t,n,a,l,u,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,c,g):n.prototype&&n.prototype.isPureReactComponent?!fi(a,l)||!fi(u,c):!0}function u0(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&uf.enqueueReplaceState(n,n.state,null)}function Nr(t,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var pu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function s0(t){pu(t)}function c0(t){console.error(t)}function f0(t){pu(t)}function yu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function d0(t,n,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function sf(t,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){yu(t,n)},a}function h0(t){return t=La(t),t.tag=3,t}function m0(t,n,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=l.value;t.payload=function(){return u(c)},t.callback=function(){d0(n,a,l)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){d0(n,a,l),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function Sx(t,n,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&yi(n,a,u,!0),a=_n.current,a!==null){switch(a.tag){case 13:return Jn===null?Df():a.alternate===null&&st===0&&(st=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===Hc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),zf(t,l,u)),!1;case 22:return a.flags|=65536,l===Hc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),zf(t,l,u)),!1}throw Error(o(435,a.tag))}return zf(t,l,u),Df(),!1}if(ze)return n=_n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Ac&&(t=Error(o(422),{cause:l}),pi(En(t,a)))):(l!==Ac&&(n=Error(o(423),{cause:l}),pi(En(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=En(l,a),u=sf(t.stateNode,l,u),kc(t,u),st!==4&&(st=2)),!1;var c=Error(o(520),{cause:l});if(c=En(c,a),ji===null?ji=[c]:ji.push(c),st!==4&&(st=2),n===null)return!0;l=En(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=sf(a.stateNode,l,t),kc(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Xa===null||!Xa.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=h0(u),m0(u,t,a,l),kc(a,u),!1}a=a.return}while(a!==null);return!1}var p0=Error(o(461)),$t=!1;function At(t,n,a,l){n.child=t===null?l0(n,null,a,l):yl(n,t.child,a,l)}function y0(t,n,a,l,u){a=a.render;var c=n.ref;if("ref"in l){var g={};for(var E in l)E!=="ref"&&(g[E]=l[E])}else g=l;return Er(n),l=Gc(t,n,a,g,c,u),E=Qc(),t!==null&&!$t?(Yc(t,n,u),Sa(t,n,u)):(ze&&E&&Tc(n),n.flags|=1,At(t,n,l,u),n.child)}function g0(t,n,a,l,u){if(t===null){var c=a.type;return typeof c=="function"&&!Nc(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,v0(t,n,c,l,u)):(t=Ko(a.type,null,l,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!gf(t,u)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:fi,a(g,l)&&t.ref===n.ref)return Sa(t,n,u)}return n.flags|=1,t=ha(c,l),t.ref=n.ref,t.return=n,n.child=t}function v0(t,n,a,l,u){if(t!==null){var c=t.memoizedProps;if(fi(c,l)&&t.ref===n.ref)if($t=!1,n.pendingProps=l=c,gf(t,u))(t.flags&131072)!==0&&($t=!0);else return n.lanes=t.lanes,Sa(t,n,u)}return cf(t,n,a,l,u)}function b0(t,n,a){var l=n.pendingProps,u=l.children,c=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=c!==null?c.baseLanes|a:a,t!==null){for(u=n.child=t.child,c=0;u!==null;)c=c|u.lanes|u.childLanes,u=u.sibling;n.childLanes=c&~l}else n.childLanes=0,n.child=null;return S0(t,n,l,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&eu(n,c!==null?c.cachePool:null),c!==null?vp(n,c):qc(),i0(n);else return n.lanes=n.childLanes=536870912,S0(t,n,c!==null?c.baseLanes|a:a,a)}else c!==null?(eu(n,c.cachePool),vp(n,c),qa(),n.memoizedState=null):(t!==null&&eu(n,null),qc(),qa());return At(t,n,u,a),n.child}function S0(t,n,a,l){var u=jc();return u=u===null?null:{parent:St._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&eu(n,null),qc(),i0(n),t!==null&&yi(t,n,l,!0),null}function gu(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function cf(t,n,a,l,u){return Er(n),a=Gc(t,n,a,l,void 0,u),l=Qc(),t!==null&&!$t?(Yc(t,n,u),Sa(t,n,u)):(ze&&l&&Tc(n),n.flags|=1,At(t,n,a,u),n.child)}function x0(t,n,a,l,u,c){return Er(n),n.updateQueue=null,a=Sp(n,l,a,u),bp(t),l=Qc(),t!==null&&!$t?(Yc(t,n,c),Sa(t,n,c)):(ze&&l&&Tc(n),n.flags|=1,At(t,n,a,c),n.child)}function E0(t,n,a,l,u){if(Er(n),n.stateNode===null){var c=il,g=a.contextType;typeof g=="object"&&g!==null&&(c=Ht(g)),c=new a(l,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=uf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=l,c.state=n.memoizedState,c.refs={},Lc(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?Ht(g):il,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(of(n,a,g,l),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&uf.enqueueReplaceState(c,c.state,null),wi(n,l,c,u),Ei(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,O=Nr(a,E);c.props=O;var z=c.context,G=a.contextType;g=il,typeof G=="object"&&G!==null&&(g=Ht(G));var K=a.getDerivedStateFromProps;G=typeof K=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,G||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||z!==g)&&u0(n,c,l,g),Ha=!1;var L=n.memoizedState;c.state=L,wi(n,l,c,u),Ei(),z=n.memoizedState,E||L!==z||Ha?(typeof K=="function"&&(of(n,a,K,l),z=n.memoizedState),(O=Ha||o0(n,a,O,l,L,z,g))?(G||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=z),c.props=l,c.state=z,c.context=g,l=O):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{c=n.stateNode,Uc(t,n),g=n.memoizedProps,G=Nr(a,g),c.props=G,K=n.pendingProps,L=c.context,z=a.contextType,O=il,typeof z=="object"&&z!==null&&(O=Ht(z)),E=a.getDerivedStateFromProps,(z=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==K||L!==O)&&u0(n,c,l,O),Ha=!1,L=n.memoizedState,c.state=L,wi(n,l,c,u),Ei();var k=n.memoizedState;g!==K||L!==k||Ha||t!==null&&t.dependencies!==null&&Jo(t.dependencies)?(typeof E=="function"&&(of(n,a,E,l),k=n.memoizedState),(G=Ha||o0(n,a,G,l,L,k,O)||t!==null&&t.dependencies!==null&&Jo(t.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,k,O),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,k,O)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&L===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&L===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=k),c.props=l,c.state=k,c.context=O,l=G):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&L===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&L===t.memoizedState||(n.flags|=1024),l=!1)}return c=l,gu(t,n),l=(n.flags&128)!==0,c||l?(c=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&l?(n.child=yl(n,t.child,null,u),n.child=yl(n,null,a,u)):At(t,n,a,u),n.memoizedState=c.state,t=n.child):t=Sa(t,n,u),t}function w0(t,n,a,l){return mi(),n.flags|=256,At(t,n,a,l),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(t){return{baseLanes:t,cachePool:cp()}}function hf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Cn),t}function $0(t,n,a){var l=n.pendingProps,u=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(xt.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ze){if(u?Pa(n):qa(),ze){var E=ut,O;if(O=E){e:{for(O=E,E=Wn;O.nodeType!==8;){if(!E){E=null;break e}if(O=Pn(O.nextSibling),O===null){E=null;break e}}E=O}E!==null?(n.memoizedState={dehydrated:E,treeContext:gr!==null?{id:ma,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},O=rn(18,null,null,0),O.stateNode=E,O.return=n,n.child=O,Ft=n,ut=null,O=!0):O=!1}O||Sr(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Zf(E)?n.lanes=32:n.lanes=536870912,null;ba(n)}return E=l.children,l=l.fallback,u?(qa(),u=n.mode,E=vu({mode:"hidden",children:E},u),l=yr(l,u,a,null),E.return=n,l.return=n,E.sibling=l,n.child=E,u=n.child,u.memoizedState=df(a),u.childLanes=hf(t,g,a),n.memoizedState=ff,l):(Pa(n),mf(n,E))}if(O=t.memoizedState,O!==null&&(E=O.dehydrated,E!==null)){if(c)n.flags&256?(Pa(n),n.flags&=-257,n=pf(t,n,a)):n.memoizedState!==null?(qa(),n.child=t.child,n.flags|=128,n=null):(qa(),u=l.fallback,E=n.mode,l=vu({mode:"visible",children:l.children},E),u=yr(u,E,a,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,yl(n,t.child,null,a),l=n.child,l.memoizedState=df(a),l.childLanes=hf(t,g,a),n.memoizedState=ff,n=u);else if(Pa(n),Zf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var z=g.dgst;g=z,l=Error(o(419)),l.stack="",l.digest=g,pi({value:l,source:null,stack:null}),n=pf(t,n,a)}else if($t||yi(t,n,a,!1),g=(a&t.childLanes)!==0,$t||g){if(g=Xe,g!==null&&(l=a&-a,l=(l&42)!==0?1:Yr(l),l=(l&(g.suspendedLanes|a))!==0?0:l,l!==0&&l!==O.retryLane))throw O.retryLane=l,ll(t,l),cn(g,t,l),p0;E.data==="$?"||Df(),n=pf(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,ut=Pn(E.nextSibling),Ft=n,ze=!0,br=null,Wn=!1,t!==null&&($n[Nn++]=ma,$n[Nn++]=pa,$n[Nn++]=gr,ma=t.id,pa=t.overflow,gr=n),n=mf(n,l.children),n.flags|=4096);return n}return u?(qa(),u=l.fallback,E=n.mode,O=t.child,z=O.sibling,l=ha(O,{mode:"hidden",children:l.children}),l.subtreeFlags=O.subtreeFlags&65011712,z!==null?u=ha(z,u):(u=yr(u,E,a,null),u.flags|=2),u.return=n,l.return=n,l.sibling=u,n.child=l,l=u,u=n.child,E=t.child.memoizedState,E===null?E=df(a):(O=E.cachePool,O!==null?(z=St._currentValue,O=O.parent!==z?{parent:z,pool:z}:O):O=cp(),E={baseLanes:E.baseLanes|a,cachePool:O}),u.memoizedState=E,u.childLanes=hf(t,g,a),n.memoizedState=ff,l):(Pa(n),a=t.child,t=a.sibling,a=ha(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=vu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vu(t,n){return t=rn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function pf(t,n,a){return yl(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function N0(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Rc(t.return,n,a)}function yf(t,n,a,l,u){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=u)}function _0(t,n,a){var l=n.pendingProps,u=l.revealOrder,c=l.tail;if(At(t,n,l.children,a),l=xt.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&N0(t,a,n);else if(t.tag===19)N0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Z(xt,l),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&mu(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yf(n,!1,u,a,c);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&mu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}yf(n,!0,a,null,c);break;case"together":yf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(yi(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,a=ha(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ha(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function gf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jo(t)))}function xx(t,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),ja(n,St,t.memoizedState.cache),mi();break;case 27:case 5:Bt(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:ja(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$0(t,n,a):(Pa(n),t=Sa(t,n,a),t!==null?t.sibling:null);Pa(n);break;case 19:var u=(t.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(yi(t,n,a,!1),l=(a&n.childLanes)!==0),u){if(l)return _0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Z(xt,xt.current),l)break;return null;case 22:case 23:return n.lanes=0,b0(t,n,a);case 24:ja(n,St,t.memoizedState.cache)}return Sa(t,n,a)}function C0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)$t=!0;else{if(!gf(t,a)&&(n.flags&128)===0)return $t=!1,xx(t,n,a);$t=(t.flags&131072)!==0}else $t=!1,ze&&(n.flags&1048576)!==0&&ap(n,Wo,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var l=n.elementType,u=l._init;if(l=u(l._payload),n.type=l,typeof l=="function")Nc(l)?(t=Nr(l,t),n.tag=1,n=E0(null,n,l,t,a)):(n.tag=0,n=cf(null,n,l,t,a));else{if(l!=null){if(u=l.$$typeof,u===P){n.tag=11,n=y0(null,n,l,t,a);break e}else if(u===U){n.tag=14,n=g0(null,n,l,t,a);break e}}throw n=Ke(l)||l,Error(o(306,n,""))}}return n;case 0:return cf(t,n,n.type,n.pendingProps,a);case 1:return l=n.type,u=Nr(l,n.pendingProps),E0(t,n,l,u,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),t===null)throw Error(o(387));l=n.pendingProps;var c=n.memoizedState;u=c.element,Uc(t,n),wi(n,l,null,a);var g=n.memoizedState;if(l=g.cache,ja(n,St,l),l!==c.cache&&Dc(n,[St],a,!0),Ei(),l=g.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=w0(t,n,l,a);break e}else if(l!==u){u=En(Error(o(424)),n),pi(u),n=w0(t,n,l,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ut=Pn(t.firstChild),Ft=n,ze=!0,br=null,Wn=!0,a=l0(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(mi(),l===u){n=Sa(t,n,a);break e}At(t,n,l,a)}n=n.child}return n;case 26:return gu(t,n),t===null?(a=My(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,t=n.pendingProps,l=Ru(oe.current).createElement(a),l[rt]=n,l[zt]=t,Rt(l,a,t),ht(l),n.stateNode=l):n.memoizedState=My(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Bt(n),t===null&&ze&&(l=n.stateNode=Ty(n.type,n.pendingProps,oe.current),Ft=n,Wn=!0,u=ut,Wa(n.type)?(Wf=u,ut=Pn(l.firstChild)):ut=u),At(t,n,n.pendingProps.children,a),gu(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ze&&((u=l=ut)&&(l=Kx(l,n.type,n.pendingProps,Wn),l!==null?(n.stateNode=l,Ft=n,ut=Pn(l.firstChild),Wn=!1,u=!0):u=!1),u||Sr(n)),Bt(n),u=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,l=c.children,Yf(u,c)?l=null:g!==null&&Yf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Gc(t,n,hx,null,null,a),Gi._currentValue=u),gu(t,n),At(t,n,l,a),n.child;case 6:return t===null&&ze&&((t=a=ut)&&(a=Zx(a,n.pendingProps,Wn),a!==null?(n.stateNode=a,Ft=n,ut=null,t=!0):t=!1),t||Sr(n)),null;case 13:return $0(t,n,a);case 4:return Se(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=yl(n,null,l,a):At(t,n,l,a),n.child;case 11:return y0(t,n,n.type,n.pendingProps,a);case 7:return At(t,n,n.pendingProps,a),n.child;case 8:return At(t,n,n.pendingProps.children,a),n.child;case 12:return At(t,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,ja(n,n.type,l.value),At(t,n,l.children,a),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Er(n),u=Ht(u),l=l(u),n.flags|=1,At(t,n,l,a),n.child;case 14:return g0(t,n,n.type,n.pendingProps,a);case 15:return v0(t,n,n.type,n.pendingProps,a);case 19:return _0(t,n,a);case 31:return l=n.pendingProps,a=n.mode,l={mode:l.mode,children:l.children},t===null?(a=vu(l,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ha(t.child,l),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return b0(t,n,a);case 24:return Er(n),l=Ht(St),t===null?(u=jc(),u===null&&(u=Xe,c=Bc(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:l,cache:u},Lc(n),ja(n,St,u)):((t.lanes&a)!==0&&(Uc(t,n),wi(n,null,null,a),Ei()),u=t.memoizedState,c=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ja(n,St,l)):(l=c.cache,ja(n,St,l),l!==u.cache&&Dc(n,[St],a,!0))),At(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function xa(t){t.flags|=4}function T0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!jy(n)){if(n=_n.current,n!==null&&((Me&4194048)===Me?Jn!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Jn))throw Si=Hc,fp;t.flags|=8192}}function bu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?pn():536870912,t.lanes|=n,Sl|=n)}function Ai(t,n){if(!ze)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function lt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function Ex(t,n,a){var l=n.pendingProps;switch(Oc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(n),null;case 1:return lt(n),null;case 3:return a=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),ga(St),nt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hi(n)?xa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ip())),lt(n),null;case 26:return a=n.memoizedState,t===null?(xa(n),a!==null?(lt(n),T0(n,a)):(lt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(xa(n),lt(n),T0(n,a)):(lt(n),n.flags&=-16777217):(t.memoizedProps!==l&&xa(n),lt(n),n.flags&=-16777217),null;case 27:Ye(n),a=oe.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==l&&xa(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return lt(n),null}t=ae.current,hi(n)?rp(n):(t=Ty(u,l,a),n.stateNode=t,xa(n))}return lt(n),null;case 5:if(Ye(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&xa(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return lt(n),null}if(t=ae.current,hi(n))rp(n);else{switch(u=Ru(oe.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}t[rt]=n,t[zt]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Rt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&xa(n)}}return lt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&xa(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(o(166));if(t=oe.current,hi(n)){if(t=n.stateNode,a=n.memoizedProps,l=null,u=Ft,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[rt]=n,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||xy(t.nodeValue,a)),t||Sr(n)}else t=Ru(t).createTextNode(l),t[rt]=n,n.stateNode=t}return lt(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=hi(n),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(o(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[rt]=n}else mi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;lt(n),u=!1}else u=ip(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ba(n),n):(ba(n),null)}if(ba(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var c=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==u&&(l.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),bu(n,n.updateQueue),lt(n),null;case 4:return nt(),t===null&&qf(n.stateNode.containerInfo),lt(n),null;case 10:return ga(n.type),lt(n),null;case 19:if(J(xt),u=n.memoizedState,u===null)return lt(n),null;if(l=(n.flags&128)!==0,c=u.rendering,c===null)if(l)Ai(u,!1);else{if(st!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=mu(t),c!==null){for(n.flags|=128,Ai(u,!1),t=c.updateQueue,n.updateQueue=t,bu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)np(a,t),a=a.sibling;return Z(xt,xt.current&1|2),n.child}t=t.sibling}u.tail!==null&&Ze()>Eu&&(n.flags|=128,l=!0,Ai(u,!1),n.lanes=4194304)}else{if(!l)if(t=mu(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,bu(n,t),Ai(u,!0),u.tail===null&&u.tailMode==="hidden"&&!c.alternate&&!ze)return lt(n),null}else 2*Ze()-u.renderingStartTime>Eu&&a!==536870912&&(n.flags|=128,l=!0,Ai(u,!1),n.lanes=4194304);u.isBackwards?(c.sibling=n.child,n.child=c):(t=u.last,t!==null?t.sibling=c:n.child=c,u.last=c)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ze(),n.sibling=null,t=xt.current,Z(xt,l?t&1|2:t&1),n):(lt(n),null);case 22:case 23:return ba(n),Fc(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(lt(n),n.subtreeFlags&6&&(n.flags|=8192)):lt(n),a=n.updateQueue,a!==null&&bu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),t!==null&&J(wr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(St),lt(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function wx(t,n){switch(Oc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ga(St),nt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ye(n),null;case 13:if(ba(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));mi()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(xt),null;case 4:return nt(),null;case 10:return ga(n.type),null;case 22:case 23:return ba(n),Fc(),t!==null&&J(wr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ga(St),null;case 25:return null;default:return null}}function O0(t,n){switch(Oc(n),n.tag){case 3:ga(St),nt();break;case 26:case 27:case 5:Ye(n);break;case 4:nt();break;case 13:ba(n);break;case 19:J(xt);break;case 10:ga(n.type);break;case 22:case 23:ba(n),Fc(),t!==null&&J(wr);break;case 24:ga(St)}}function Mi(t,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&t)===t){l=void 0;var c=a.create,g=a.inst;l=c(),g.destroy=l}a=a.next}while(a!==u)}}catch(E){Ge(n,n.return,E)}}function Fa(t,n,a){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var c=u.next;l=c;do{if((l.tag&t)===t){var g=l.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var O=a,z=E;try{z()}catch(G){Ge(u,O,G)}}}l=l.next}while(l!==c)}}catch(G){Ge(n,n.return,G)}}function A0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{gp(n,a)}catch(l){Ge(t,t.return,l)}}}function M0(t,n,a){a.props=Nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ge(t,n,l)}}function Ri(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(u){Ge(t,n,u)}}function In(t,n){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){Ge(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(t,n,u)}else a.current=null}function R0(t){var n=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){Ge(t,t.return,u)}}function vf(t,n,a){try{var l=t.stateNode;Vx(l,t.type,a,n),l[zt]=n}catch(u){Ge(t,t.return,u)}}function D0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||D0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Mu));else if(l!==4&&(l===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Sf(t,n,a),t=t.sibling;t!==null;)Sf(t,n,a),t=t.sibling}function Su(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(l===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Su(t,n,a),t=t.sibling;t!==null;)Su(t,n,a),t=t.sibling}function B0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rt(n,l,a),n[rt]=t,n[zt]=a}catch(c){Ge(t,t.return,c)}}var Ea=!1,ft=!1,xf=!1,z0=typeof WeakSet=="function"?WeakSet:Set,Nt=null;function $x(t,n){if(t=t.containerInfo,Gf=Lu,t=Qm(t),vc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var g=0,E=-1,O=-1,z=0,G=0,K=t,L=null;t:for(;;){for(var k;K!==a||u!==0&&K.nodeType!==3||(E=g+u),K!==c||l!==0&&K.nodeType!==3||(O=g+l),K.nodeType===3&&(g+=K.nodeValue.length),(k=K.firstChild)!==null;)L=K,K=k;for(;;){if(K===t)break t;if(L===a&&++z===u&&(E=g),L===c&&++G===l&&(O=g),(k=K.nextSibling)!==null)break;K=L,L=K.parentNode}K=k}a=E===-1||O===-1?null:{start:E,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:t,selectionRange:a},Lu=!1,Nt=n;Nt!==null;)if(n=Nt,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Nt=t;else for(;Nt!==null;){switch(n=Nt,c=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=n,u=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var pe=Nr(a.type,u,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(pe,c),l.__reactInternalSnapshotBeforeUpdate=t}catch(he){Ge(a,a.return,he)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=n.sibling,t!==null){t.return=n.return,Nt=t;break}Nt=n.return}}function j0(t,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Va(t,a),l&4&&Mi(5,a);break;case 1:if(Va(t,a),l&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ge(a,a.return,g)}else{var u=Nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ge(a,a.return,g)}}l&64&&A0(a),l&512&&Ri(a,a.return);break;case 3:if(Va(t,a),l&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(t,n)}catch(g){Ge(a,a.return,g)}}break;case 27:n===null&&l&4&&B0(a);case 26:case 5:Va(t,a),n===null&&l&4&&R0(a),l&512&&Ri(a,a.return);break;case 12:Va(t,a);break;case 13:Va(t,a),l&4&&U0(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Dx.bind(null,a),Wx(t,a))));break;case 22:if(l=a.memoizedState!==null||Ea,!l){n=n!==null&&n.memoizedState!==null||ft,u=Ea;var c=ft;Ea=l,(ft=n)&&!c?Ga(t,a,(a.subtreeFlags&8772)!==0):Va(t,a),Ea=u,ft=c}break;case 30:break;default:Va(t,a)}}function H0(t){var n=t.alternate;n!==null&&(t.alternate=null,H0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ei(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tt=null,Kt=!1;function wa(t,n,a){for(a=a.child;a!==null;)L0(t,n,a),a=a.sibling}function L0(t,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Yn,a)}catch{}switch(a.tag){case 26:ft||In(a,n),wa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ft||In(a,n);var l=tt,u=Kt;Wa(a.type)&&(tt=a.stateNode,Kt=!1),wa(t,n,a),Pi(a.stateNode),tt=l,Kt=u;break;case 5:ft||In(a,n);case 6:if(l=tt,u=Kt,tt=null,wa(t,n,a),tt=l,Kt=u,tt!==null)if(Kt)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(a.stateNode)}catch(c){Ge(a,n,c)}else try{tt.removeChild(a.stateNode)}catch(c){Ge(a,n,c)}break;case 18:tt!==null&&(Kt?(t=tt,_y(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ki(t)):_y(tt,a.stateNode));break;case 4:l=tt,u=Kt,tt=a.stateNode.containerInfo,Kt=!0,wa(t,n,a),tt=l,Kt=u;break;case 0:case 11:case 14:case 15:ft||Fa(2,a,n),ft||Fa(4,a,n),wa(t,n,a);break;case 1:ft||(In(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&M0(a,n,l)),wa(t,n,a);break;case 21:wa(t,n,a);break;case 22:ft=(l=ft)||a.memoizedState!==null,wa(t,n,a),ft=l;break;default:wa(t,n,a)}}function U0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ki(t)}catch(a){Ge(n,n.return,a)}}function Nx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new z0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new z0),n;default:throw Error(o(435,t.tag))}}function Ef(t,n){var a=Nx(t);n.forEach(function(l){var u=Bx.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}function ln(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],c=t,g=n,E=g;e:for(;E!==null;){switch(E.tag){case 27:if(Wa(E.type)){tt=E.stateNode,Kt=!1;break e}break;case 5:tt=E.stateNode,Kt=!1;break e;case 3:case 4:tt=E.stateNode.containerInfo,Kt=!0;break e}E=E.return}if(tt===null)throw Error(o(160));L0(c,g,u),tt=null,Kt=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)k0(n,t),n=n.sibling}var kn=null;function k0(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ln(n,t),on(t),l&4&&(Fa(3,t,t.return),Mi(3,t),Fa(5,t,t.return));break;case 1:ln(n,t),on(t),l&512&&(ft||a===null||In(a,a.return)),l&64&&Ea&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=kn;if(ln(n,t),on(t),l&512&&(ft||a===null||In(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":c=u.getElementsByTagName("title")[0],(!c||c[jt]||c[rt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=u.createElement(l),u.head.insertBefore(c,u.querySelector("head > title"))),Rt(c,l,a),c[rt]=t,ht(c),l=c;break e;case"link":var g=By("link","href",u).get(l+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(c=g[E],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break t}}c=u.createElement(l),Rt(c,l,a),u.head.appendChild(c);break;case"meta":if(g=By("meta","content",u).get(l+(a.content||""))){for(E=0;E<g.length;E++)if(c=g[E],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break t}}c=u.createElement(l),Rt(c,l,a),u.head.appendChild(c);break;default:throw Error(o(468,l))}c[rt]=t,ht(c),l=c}t.stateNode=l}else zy(u,t.type,t.stateNode);else t.stateNode=Dy(u,l,t.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?zy(u,t.type,t.stateNode):Dy(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&vf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ln(n,t),on(t),l&512&&(ft||a===null||In(a,a.return)),a!==null&&l&4&&vf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ln(n,t),on(t),l&512&&(ft||a===null||In(a,a.return)),t.flags&32){u=t.stateNode;try{fa(u,"")}catch(k){Ge(t,t.return,k)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,vf(t,u,a!==null?a.memoizedProps:u)),l&1024&&(xf=!0);break;case 6:if(ln(n,t),on(t),l&4){if(t.stateNode===null)throw Error(o(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(k){Ge(t,t.return,k)}}break;case 3:if(zu=null,u=kn,kn=Du(n.containerInfo),ln(n,t),kn=u,on(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ki(n.containerInfo)}catch(k){Ge(t,t.return,k)}xf&&(xf=!1,P0(t));break;case 4:l=kn,kn=Du(t.stateNode.containerInfo),ln(n,t),on(t),kn=l;break;case 12:ln(n,t),on(t);break;case 13:ln(n,t),on(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tf=Ze()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ef(t,l)));break;case 22:u=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,z=Ea,G=ft;if(Ea=z||u,ft=G||O,ln(n,t),ft=G,Ea=z,on(t),l&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||O||Ea||ft||_r(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(c=O.stateNode,u)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=O.stateNode;var K=O.memoizedProps.style,L=K!=null&&K.hasOwnProperty("display")?K.display:null;E.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(k){Ge(O,O.return,k)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=u?"":O.memoizedProps}catch(k){Ge(O,O.return,k)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ef(t,a))));break;case 19:ln(n,t),on(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ef(t,l)));break;case 30:break;case 21:break;default:ln(n,t),on(t)}}function on(t){var n=t.flags;if(n&2){try{for(var a,l=t.return;l!==null;){if(D0(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var u=a.stateNode,c=bf(t);Su(t,c,u);break;case 5:var g=a.stateNode;a.flags&32&&(fa(g,""),a.flags&=-33);var E=bf(t);Su(t,E,g);break;case 3:case 4:var O=a.stateNode.containerInfo,z=bf(t);Sf(t,z,O);break;default:throw Error(o(161))}}catch(G){Ge(t,t.return,G)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function P0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;P0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)j0(t,n.alternate,n),n=n.sibling}function _r(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),_r(n);break;case 1:In(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&M0(n,n.return,a),_r(n);break;case 27:Pi(n.stateNode);case 26:case 5:In(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}t=t.sibling}}function Ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=t,c=n,g=c.flags;switch(c.tag){case 0:case 11:case 15:Ga(u,c,a),Mi(4,c);break;case 1:if(Ga(u,c,a),l=c,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(z){Ge(l,l.return,z)}if(l=c,u=l.updateQueue,u!==null){var E=l.stateNode;try{var O=u.shared.hiddenCallbacks;if(O!==null)for(u.shared.hiddenCallbacks=null,u=0;u<O.length;u++)yp(O[u],E)}catch(z){Ge(l,l.return,z)}}a&&g&64&&A0(c),Ri(c,c.return);break;case 27:B0(c);case 26:case 5:Ga(u,c,a),a&&l===null&&g&4&&R0(c),Ri(c,c.return);break;case 12:Ga(u,c,a);break;case 13:Ga(u,c,a),a&&g&4&&U0(u,c);break;case 22:c.memoizedState===null&&Ga(u,c,a),Ri(c,c.return);break;case 30:break;default:Ga(u,c,a)}n=n.sibling}}function wf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&gi(a))}function $f(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&gi(t))}function ea(t,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)q0(t,n,a,l),n=n.sibling}function q0(t,n,a,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ea(t,n,a,l),u&2048&&Mi(9,n);break;case 1:ea(t,n,a,l);break;case 3:ea(t,n,a,l),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&gi(t)));break;case 12:if(u&2048){ea(t,n,a,l),t=n.stateNode;try{var c=n.memoizedProps,g=c.id,E=c.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Ge(n,n.return,O)}}else ea(t,n,a,l);break;case 13:ea(t,n,a,l);break;case 23:break;case 22:c=n.stateNode,g=n.alternate,n.memoizedState!==null?c._visibility&2?ea(t,n,a,l):Di(t,n):c._visibility&2?ea(t,n,a,l):(c._visibility|=2,gl(t,n,a,l,(n.subtreeFlags&10256)!==0)),u&2048&&wf(g,n);break;case 24:ea(t,n,a,l),u&2048&&$f(n.alternate,n);break;default:ea(t,n,a,l)}}function gl(t,n,a,l,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var c=t,g=n,E=a,O=l,z=g.flags;switch(g.tag){case 0:case 11:case 15:gl(c,g,E,O,u),Mi(8,g);break;case 23:break;case 22:var G=g.stateNode;g.memoizedState!==null?G._visibility&2?gl(c,g,E,O,u):Di(c,g):(G._visibility|=2,gl(c,g,E,O,u)),u&&z&2048&&wf(g.alternate,g);break;case 24:gl(c,g,E,O,u),u&&z&2048&&$f(g.alternate,g);break;default:gl(c,g,E,O,u)}n=n.sibling}}function Di(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,l=n,u=l.flags;switch(l.tag){case 22:Di(a,l),u&2048&&wf(l.alternate,l);break;case 24:Di(a,l),u&2048&&$f(l.alternate,l);break;default:Di(a,l)}n=n.sibling}}var Bi=8192;function vl(t){if(t.subtreeFlags&Bi)for(t=t.child;t!==null;)F0(t),t=t.sibling}function F0(t){switch(t.tag){case 26:vl(t),t.flags&Bi&&t.memoizedState!==null&&cE(kn,t.memoizedState,t.memoizedProps);break;case 5:vl(t);break;case 3:case 4:var n=kn;kn=Du(t.stateNode.containerInfo),vl(t),kn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Bi,Bi=16777216,vl(t),Bi=n):vl(t));break;default:vl(t)}}function V0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function zi(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Nt=l,Q0(l,t)}V0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)G0(t),t=t.sibling}function G0(t){switch(t.tag){case 0:case 11:case 15:zi(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:zi(t);break;case 12:zi(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,xu(t)):zi(t);break;default:zi(t)}}function xu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Nt=l,Q0(l,t)}V0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),xu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,xu(n));break;default:xu(n)}t=t.sibling}}function Q0(t,n){for(;Nt!==null;){var a=Nt;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:gi(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Nt=l;else e:for(a=t;Nt!==null;){l=Nt;var u=l.sibling,c=l.return;if(H0(l),l===a){Nt=null;break e}if(u!==null){u.return=c,Nt=u;break e}Nt=c}}}var _x={getCacheForType:function(t){var n=Ht(St),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Cx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,Te=null,Me=0,ke=0,un=null,Qa=!1,bl=!1,Nf=!1,$a=0,st=0,Ya=0,Cr=0,_f=0,Cn=0,Sl=0,ji=null,Zt=null,Cf=!1,Tf=0,Eu=1/0,wu=null,Xa=null,Mt=0,Ka=null,xl=null,El=0,Of=0,Af=null,Y0=null,Hi=0,Mf=null;function sn(){if((Ue&2)!==0&&Me!==0)return Me&-Me;if(q.T!==null){var t=sl;return t!==0?t:Lf()}return fr()}function X0(){Cn===0&&(Cn=(Me&536870912)===0||ze?nn():536870912);var t=_n.current;return t!==null&&(t.flags|=32),Cn}function cn(t,n,a){(t===Xe&&(ke===2||ke===9)||t.cancelPendingCommit!==null)&&(wl(t,0),Za(t,Me,Cn,!1)),Xn(t,a),((Ue&2)===0||t!==Xe)&&(t===Xe&&((Ue&2)===0&&(Cr|=a),st===4&&Za(t,Me,Cn,!1)),ta(t))}function K0(t,n,a){if((Ue&6)!==0)throw Error(o(327));var l=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ae(t,n),u=l?Ax(t,n):Bf(t,n,!0),c=l;do{if(u===0){bl&&!l&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Tx(a)){u=Bf(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var E=t;u=ji;var O=E.current.memoizedState.isDehydrated;if(O&&(wl(E,g).flags|=256),g=Bf(E,g,!1),g!==2){if(Nf&&!O){E.errorRecoveryDisabledLanes|=c,Cr|=c,u=4;break e}c=Zt,Zt=u,c!==null&&(Zt===null?Zt=c:Zt.push.apply(Zt,c))}u=g}if(c=!1,u!==2)continue}}if(u===1){wl(t,0),Za(t,n,0,!0);break}e:{switch(l=t,c=u,c){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Za(l,n,Cn,!Qa);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(u=Tf+300-Ze(),10<u)){if(Za(l,n,Cn,!Qa),en(l,0,!0)!==0)break e;l.timeoutHandle=$y(Z0.bind(null,l,a,Zt,wu,Cf,n,Cn,Cr,Sl,Qa,c,2,-0,0),u);break e}Z0(l,a,Zt,wu,Cf,n,Cn,Cr,Sl,Qa,c,0,-0,0)}}break}while(!0);ta(t)}function Z0(t,n,a,l,u,c,g,E,O,z,G,K,L,k){if(t.timeoutHandle=-1,K=n.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(Vi={stylesheets:null,count:0,unsuspend:sE},F0(n),K=fE(),K!==null)){t.cancelPendingCommit=K(ay.bind(null,t,n,c,a,l,u,g,E,O,G,1,L,k)),Za(t,c,g,!z);return}ay(t,n,c,a,l,u,g,E,O)}function Tx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],c=u.getSnapshot;u=u.value;try{if(!an(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,l){n&=~_f,n&=~Cr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var u=n;0<u;){var c=31-dt(u),g=1<<c;l[c]=-1,u&=~g}a!==0&&gn(t,a,n)}function $u(){return(Ue&6)===0?(Li(0),!1):!0}function Rf(){if(Te!==null){if(ke===0)var t=Te.return;else t=Te,ya=xr=null,Xc(t),pl=null,Ti=0,t=Te;for(;t!==null;)O0(t.alternate,t),t=t.return;Te=null}}function wl(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Qx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Rf(),Xe=t,Te=a=ha(t.current,null),Me=n,ke=0,un=null,Qa=!1,bl=Ae(t,n),Nf=!1,Sl=Cn=_f=Cr=Ya=st=0,Zt=ji=null,Cf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var u=31-dt(l),c=1<<u;n|=t[u],l&=~c}return $a=n,Qo(),a}function W0(t,n){Ne=null,q.H=fu,n===bi||n===tu?(n=mp(),ke=3):n===fp?(n=mp(),ke=4):ke=n===p0?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,un=n,Te===null&&(st=1,yu(t,En(n,t.current)))}function J0(){var t=q.H;return q.H=fu,t===null?fu:t}function I0(){var t=q.A;return q.A=_x,t}function Df(){st=4,Qa||(Me&4194048)!==Me&&_n.current!==null||(bl=!0),(Ya&134217727)===0&&(Cr&134217727)===0||Xe===null||Za(Xe,Me,Cn,!1)}function Bf(t,n,a){var l=Ue;Ue|=2;var u=J0(),c=I0();(Xe!==t||Me!==n)&&(wu=null,wl(t,n)),n=!1;var g=st;e:do try{if(ke!==0&&Te!==null){var E=Te,O=un;switch(ke){case 8:Rf(),g=6;break e;case 3:case 2:case 9:case 6:_n.current===null&&(n=!0);var z=ke;if(ke=0,un=null,$l(t,E,O,z),a&&bl){g=0;break e}break;default:z=ke,ke=0,un=null,$l(t,E,O,z)}}Ox(),g=st;break}catch(G){W0(t,G)}while(!0);return n&&t.shellSuspendCounter++,ya=xr=null,Ue=l,q.H=u,q.A=c,Te===null&&(Xe=null,Me=0,Qo()),g}function Ox(){for(;Te!==null;)ey(Te)}function Ax(t,n){var a=Ue;Ue|=2;var l=J0(),u=I0();Xe!==t||Me!==n?(wu=null,Eu=Ze()+500,wl(t,n)):bl=Ae(t,n);e:do try{if(ke!==0&&Te!==null){n=Te;var c=un;t:switch(ke){case 1:ke=0,un=null,$l(t,n,c,1);break;case 2:case 9:if(dp(c)){ke=0,un=null,ty(n);break}n=function(){ke!==2&&ke!==9||Xe!==t||(ke=7),ta(t)},c.then(n,n);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:dp(c)?(ke=0,un=null,ty(n)):(ke=0,un=null,$l(t,n,c,7));break;case 5:var g=null;switch(Te.tag){case 26:g=Te.memoizedState;case 5:case 27:var E=Te;if(!g||jy(g)){ke=0,un=null;var O=E.sibling;if(O!==null)Te=O;else{var z=E.return;z!==null?(Te=z,Nu(z)):Te=null}break t}}ke=0,un=null,$l(t,n,c,5);break;case 6:ke=0,un=null,$l(t,n,c,6);break;case 8:Rf(),st=6;break e;default:throw Error(o(462))}}Mx();break}catch(G){W0(t,G)}while(!0);return ya=xr=null,q.H=l,q.A=u,Ue=a,Te!==null?0:(Xe=null,Me=0,Qo(),st)}function Mx(){for(;Te!==null&&!oa();)ey(Te)}function ey(t){var n=C0(t.alternate,t,$a);t.memoizedProps=t.pendingProps,n===null?Nu(t):Te=n}function ty(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=x0(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=x0(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Xc(n);default:O0(a,n),n=Te=np(n,$a),n=C0(a,n,$a)}t.memoizedProps=t.pendingProps,n===null?Nu(t):Te=n}function $l(t,n,a,l){ya=xr=null,Xc(n),pl=null,Ti=0;var u=n.return;try{if(Sx(t,u,n,a,Me)){st=1,yu(t,En(a,t.current)),Te=null;return}}catch(c){if(u!==null)throw Te=u,c;st=1,yu(t,En(a,t.current)),Te=null;return}n.flags&32768?(ze||l===1?t=!0:bl||(Me&536870912)!==0?t=!1:(Qa=t=!0,(l===2||l===9||l===3||l===6)&&(l=_n.current,l!==null&&l.tag===13&&(l.flags|=16384))),ny(n,t)):Nu(n)}function Nu(t){var n=t;do{if((n.flags&32768)!==0){ny(n,Qa);return}t=n.return;var a=Ex(n.alternate,n,$a);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=t}while(n!==null);st===0&&(st=5)}function ny(t,n){do{var a=wx(t.alternate,t);if(a!==null){a.flags&=32767,Te=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Te=t;return}Te=t=a}while(t!==null);st=6,Te=null}function ay(t,n,a,l,u,c,g,E,O){t.cancelPendingCommit=null;do _u();while(Mt!==0);if((Ue&6)!==0)throw Error(o(327));if(n!==null){if(n===t.current)throw Error(o(177));if(c=n.lanes|n.childLanes,c|=wc,Jl(t,a,c,g,E,O),t===Xe&&(Te=Xe=null,Me=0),xl=n,Ka=t,El=a,Of=c,Af=u,Y0=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zx(mn,function(){return uy(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=q.T,q.T=null,u=te.p,te.p=2,g=Ue,Ue|=4;try{$x(t,n,a)}finally{Ue=g,te.p=u,q.T=l}}Mt=1,ry(),ly(),iy()}}function ry(){if(Mt===1){Mt=0;var t=Ka,n=xl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var l=te.p;te.p=2;var u=Ue;Ue|=4;try{k0(n,t);var c=Qf,g=Qm(t.containerInfo),E=c.focusedElem,O=c.selectionRange;if(g!==E&&E&&E.ownerDocument&&Gm(E.ownerDocument.documentElement,E)){if(O!==null&&vc(E)){var z=O.start,G=O.end;if(G===void 0&&(G=z),"selectionStart"in E)E.selectionStart=z,E.selectionEnd=Math.min(G,E.value.length);else{var K=E.ownerDocument||document,L=K&&K.defaultView||window;if(L.getSelection){var k=L.getSelection(),pe=E.textContent.length,he=Math.min(O.start,pe),Ve=O.end===void 0?he:Math.min(O.end,pe);!k.extend&&he>Ve&&(g=Ve,Ve=he,he=g);var D=Vm(E,he),R=Vm(E,Ve);if(D&&R&&(k.rangeCount!==1||k.anchorNode!==D.node||k.anchorOffset!==D.offset||k.focusNode!==R.node||k.focusOffset!==R.offset)){var B=K.createRange();B.setStart(D.node,D.offset),k.removeAllRanges(),he>Ve?(k.addRange(B),k.extend(R.node,R.offset)):(B.setEnd(R.node,R.offset),k.addRange(B))}}}}for(K=[],k=E;k=k.parentNode;)k.nodeType===1&&K.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<K.length;E++){var X=K[E];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Lu=!!Gf,Qf=Gf=null}finally{Ue=u,te.p=l,q.T=a}}t.current=n,Mt=2}}function ly(){if(Mt===2){Mt=0;var t=Ka,n=xl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=q.T,q.T=null;var l=te.p;te.p=2;var u=Ue;Ue|=4;try{j0(t,n.alternate,n)}finally{Ue=u,te.p=l,q.T=a}}Mt=3}}function iy(){if(Mt===4||Mt===3){Mt=0,Tt();var t=Ka,n=xl,a=El,l=Y0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mt=5:(Mt=0,xl=Ka=null,oy(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),Kn(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Yn,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=q.T,u=te.p,te.p=2,q.T=null;try{for(var c=t.onRecoverableError,g=0;g<l.length;g++){var E=l[g];c(E.value,{componentStack:E.stack})}}finally{q.T=n,te.p=u}}(El&3)!==0&&_u(),ta(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Mf?Hi++:(Hi=0,Mf=t):Hi=0,Li(0)}}function oy(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,gi(n)))}function _u(t){return ry(),ly(),iy(),uy()}function uy(){if(Mt!==5)return!1;var t=Ka,n=Of;Of=0;var a=Kn(El),l=q.T,u=te.p;try{te.p=32>a?32:a,q.T=null,a=Af,Af=null;var c=Ka,g=El;if(Mt=0,xl=Ka=null,El=0,(Ue&6)!==0)throw Error(o(331));var E=Ue;if(Ue|=4,G0(c.current),q0(c,c.current,g,a),Ue=E,Li(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Yn,c)}catch{}return!0}finally{te.p=u,q.T=l,oy(t,n)}}function sy(t,n,a){n=En(a,n),n=sf(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Xn(t,2),ta(t))}function Ge(t,n,a){if(t.tag===3)sy(t,t,a);else for(;n!==null;){if(n.tag===3){sy(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xa===null||!Xa.has(l))){t=En(a,t),a=h0(2),l=Ua(n,a,2),l!==null&&(m0(a,l,n,t),Xn(l,2),ta(l));break}}n=n.return}}function zf(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Cx;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(Nf=!0,u.add(a),t=Rx.bind(null,t,n,a),n.then(t,t))}function Rx(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(Me&a)===a&&(st===4||st===3&&(Me&62914560)===Me&&300>Ze()-Tf?(Ue&2)===0&&wl(t,0):_f|=a,Sl===Me&&(Sl=0)),ta(t)}function cy(t,n){n===0&&(n=pn()),t=ll(t,n),t!==null&&(Xn(t,n),ta(t))}function Dx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),cy(t,a)}function Bx(t,n){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(n),cy(t,a)}function zx(t,n){return Pt(t,n)}var Cu=null,Nl=null,jf=!1,Tu=!1,Hf=!1,Tr=0;function ta(t){t!==Nl&&t.next===null&&(Nl===null?Cu=Nl=t:Nl=Nl.next=t),Tu=!0,jf||(jf=!0,Hx())}function Li(t,n){if(!Hf&&Tu){Hf=!0;do for(var a=!1,l=Cu;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var c=0;else{var g=l.suspendedLanes,E=l.pingedLanes;c=(1<<31-dt(42|t)+1)-1,c&=u&~(g&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,my(l,c))}else c=Me,c=en(l,l===Xe?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Ae(l,c)||(a=!0,my(l,c));l=l.next}while(a);Hf=!1}}function jx(){fy()}function fy(){Tu=jf=!1;var t=0;Tr!==0&&(Gx()&&(t=Tr),Tr=0);for(var n=Ze(),a=null,l=Cu;l!==null;){var u=l.next,c=dy(l,n);c===0?(l.next=null,a===null?Cu=u:a.next=u,u===null&&(Nl=a)):(a=l,(t!==0||(c&3)!==0)&&(Tu=!0)),l=u}Li(t)}function dy(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-dt(c),E=1<<g,O=u[g];O===-1?((E&a)===0||(E&l)!==0)&&(u[g]=tn(E,n)):O<=n&&(t.expiredLanes|=E),c&=~E}if(n=Xe,a=Me,a=en(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===n&&(ke===2||ke===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Qn(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ae(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(l!==null&&Qn(l),Kn(a)){case 2:case 8:a=vt;break;case 32:a=mn;break;case 268435456:a=Qr;break;default:a=mn}return l=hy.bind(null,t),a=Pt(a,l),t.callbackPriority=n,t.callbackNode=a,n}return l!==null&&l!==null&&Qn(l),t.callbackPriority=2,t.callbackNode=null,2}function hy(t,n){if(Mt!==0&&Mt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(_u()&&t.callbackNode!==a)return null;var l=Me;return l=en(t,t===Xe?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(K0(t,l,n),dy(t,Ze()),t.callbackNode!=null&&t.callbackNode===a?hy.bind(null,t):null)}function my(t,n){if(_u())return null;K0(t,n,!0)}function Hx(){Yx(function(){(Ue&6)!==0?Pt(qt,jx):fy()})}function Lf(){return Tr===0&&(Tr=nn()),Tr}function py(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Uo(""+t)}function yy(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Lx(t,n,a,l,u){if(n==="submit"&&a&&a.stateNode===u){var c=py((u[zt]||null).action),g=l.submitter;g&&(n=(n=g[zt]||null)?py(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var E=new Fo("action","action",null,l,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Tr!==0){var O=g?yy(u,g):new FormData(u);af(a,{pending:!0,data:O,method:u.method,action:c},null,O)}}else typeof c=="function"&&(E.preventDefault(),O=g?yy(u,g):new FormData(u),af(a,{pending:!0,data:O,method:u.method,action:c},c,O))},currentTarget:u}]})}}for(var Uf=0;Uf<Ec.length;Uf++){var kf=Ec[Uf],Ux=kf.toLowerCase(),kx=kf[0].toUpperCase()+kf.slice(1);Un(Ux,"on"+kx)}Un(Km,"onAnimationEnd"),Un(Zm,"onAnimationIteration"),Un(Wm,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(ax,"onTransitionRun"),Un(rx,"onTransitionStart"),Un(lx,"onTransitionCancel"),Un(Jm,"onTransitionEnd"),Sn("onMouseEnter",["mouseout","mouseover"]),Sn("onMouseLeave",["mouseout","mouseover"]),Sn("onPointerEnter",["pointerout","pointerover"]),Sn("onPointerLeave",["pointerout","pointerover"]),zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ui));function gy(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var c=void 0;if(n)for(var g=l.length-1;0<=g;g--){var E=l[g],O=E.instance,z=E.currentTarget;if(E=E.listener,O!==c&&u.isPropagationStopped())break e;c=E,u.currentTarget=z;try{c(u)}catch(G){pu(G)}u.currentTarget=null,c=O}else for(g=0;g<l.length;g++){if(E=l[g],O=E.instance,z=E.currentTarget,E=E.listener,O!==c&&u.isPropagationStopped())break e;c=E,u.currentTarget=z;try{c(u)}catch(G){pu(G)}u.currentTarget=null,c=O}}}}function Oe(t,n){var a=n[Xr];a===void 0&&(a=n[Xr]=new Set);var l=t+"__bubble";a.has(l)||(vy(n,t,2,!1),a.add(l))}function Pf(t,n,a){var l=0;n&&(l|=4),vy(a,t,l,n)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function qf(t){if(!t[Ou]){t[Ou]=!0,Mo.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||Pf(a,!1,t),Pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ou]||(n[Ou]=!0,Pf("selectionchange",!1,n))}}function vy(t,n,a,l){switch(qy(n)){case 2:var u=mE;break;case 8:u=pE;break;default:u=nd}a=u.bind(null,n,a,t),u=void 0,!sc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Ff(t,n,a,l,u){var c=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var E=l.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=l.return;g!==null;){var O=g.tag;if((O===3||O===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=sa(E),g===null)return;if(O=g.tag,O===5||O===6||O===26||O===27){l=c=g;continue e}E=E.parentNode}}l=l.return}Nm(function(){var z=c,G=oc(a),K=[];e:{var L=Im.get(t);if(L!==void 0){var k=Fo,pe=t;switch(t){case"keypress":if(Po(a)===0)break e;case"keydown":case"keyup":k=zS;break;case"focusin":pe="focus",k=hc;break;case"focusout":pe="blur",k=hc;break;case"beforeblur":case"afterblur":k=hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=wS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=LS;break;case Km:case Zm:case Wm:k=_S;break;case Jm:k=kS;break;case"scroll":case"scrollend":k=xS;break;case"wheel":k=qS;break;case"copy":case"cut":case"paste":k=TS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Am;break;case"toggle":case"beforetoggle":k=VS}var he=(n&4)!==0,Ve=!he&&(t==="scroll"||t==="scrollend"),D=he?L!==null?L+"Capture":null:L;he=[];for(var R=z,B;R!==null;){var X=R;if(B=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||B===null||D===null||(X=ri(R,D),X!=null&&he.push(ki(R,X,B))),Ve)break;R=R.return}0<he.length&&(L=new k(L,pe,null,a,G),K.push({event:L,listeners:he}))}}if((n&7)===0){e:{if(L=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",L&&a!==ic&&(pe=a.relatedTarget||a.fromElement)&&(sa(pe)||pe[Bn]))break e;if((k||L)&&(L=G.window===G?G:(L=G.ownerDocument)?L.defaultView||L.parentWindow:window,k?(pe=a.relatedTarget||a.toElement,k=z,pe=pe?sa(pe):null,pe!==null&&(Ve=f(pe),he=pe.tag,pe!==Ve||he!==5&&he!==27&&he!==6)&&(pe=null)):(k=null,pe=z),k!==pe)){if(he=Tm,X="onMouseLeave",D="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(he=Am,X="onPointerLeave",D="onPointerEnter",R="pointer"),Ve=k==null?L:ca(k),B=pe==null?L:ca(pe),L=new he(X,R+"leave",k,a,G),L.target=Ve,L.relatedTarget=B,X=null,sa(G)===z&&(he=new he(D,R+"enter",pe,a,G),he.target=B,he.relatedTarget=Ve,X=he),Ve=X,k&&pe)t:{for(he=k,D=pe,R=0,B=he;B;B=_l(B))R++;for(B=0,X=D;X;X=_l(X))B++;for(;0<R-B;)he=_l(he),R--;for(;0<B-R;)D=_l(D),B--;for(;R--;){if(he===D||D!==null&&he===D.alternate)break t;he=_l(he),D=_l(D)}he=null}else he=null;k!==null&&by(K,L,k,he,!1),pe!==null&&Ve!==null&&by(K,Ve,pe,he,!0)}}e:{if(L=z?ca(z):window,k=L.nodeName&&L.nodeName.toLowerCase(),k==="select"||k==="input"&&L.type==="file")var ie=Lm;else if(jm(L))if(Um)ie=ex;else{ie=JS;var _e=WS}else k=L.nodeName,!k||k.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?z&&lc(z.elementType)&&(ie=Lm):ie=IS;if(ie&&(ie=ie(t,z))){Hm(K,ie,a,G);break e}_e&&_e(t,L,z),t==="focusout"&&z&&L.type==="number"&&z.memoizedProps.value!=null&&mt(L,"number",L.value)}switch(_e=z?ca(z):window,t){case"focusin":(jm(_e)||_e.contentEditable==="true")&&(nl=_e,bc=z,di=null);break;case"focusout":di=bc=nl=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Ym(K,a,G);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":Ym(K,a,G)}var se;if(pc)e:{switch(t){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else tl?Bm(t,a)&&(me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Mm&&a.locale!=="ko"&&(tl||me!=="onCompositionStart"?me==="onCompositionEnd"&&tl&&(se=_m()):(za=G,cc="value"in za?za.value:za.textContent,tl=!0)),_e=Au(z,me),0<_e.length&&(me=new Om(me,t,null,a,G),K.push({event:me,listeners:_e}),se?me.data=se:(se=zm(a),se!==null&&(me.data=se)))),(se=QS?YS(t,a):XS(t,a))&&(me=Au(z,"onBeforeInput"),0<me.length&&(_e=new Om("onBeforeInput","beforeinput",null,a,G),K.push({event:_e,listeners:me}),_e.data=se)),Lx(K,t,z,a,G)}gy(K,n)})}function ki(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Au(t,n){for(var a=n+"Capture",l=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=ri(t,a),u!=null&&l.unshift(ki(t,u,c)),u=ri(t,n),u!=null&&l.push(ki(t,u,c))),t.tag===3)return l;t=t.return}return[]}function _l(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function by(t,n,a,l,u){for(var c=n._reactName,g=[];a!==null&&a!==l;){var E=a,O=E.alternate,z=E.stateNode;if(E=E.tag,O!==null&&O===l)break;E!==5&&E!==26&&E!==27||z===null||(O=z,u?(z=ri(a,c),z!=null&&g.unshift(ki(a,z,O))):u||(z=ri(a,c),z!=null&&g.push(ki(a,z,O)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var qx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function Sy(t){return(typeof t=="string"?t:""+t).replace(qx,`
`).replace(Fx,"")}function xy(t,n){return n=Sy(n),Sy(t)===n}function Mu(){}function Fe(t,n,a,l,u,c){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||fa(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&fa(t,""+l);break;case"className":Kr(t,"class",l);break;case"tabIndex":Kr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Kr(t,a,l);break;case"style":wm(t,l,c);break;case"data":if(n!=="object"){Kr(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Uo(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",u.name,u,null),Fe(t,n,"formEncType",u.formEncType,u,null),Fe(t,n,"formMethod",u.formMethod,u,null),Fe(t,n,"formTarget",u.formTarget,u,null)):(Fe(t,n,"encType",u.encType,u,null),Fe(t,n,"method",u.method,u,null),Fe(t,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Uo(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Mu);break;case"onScroll":l!=null&&Oe("scroll",t);break;case"onScrollEnd":l!=null&&Oe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Uo(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Oe("beforetoggle",t),Oe("toggle",t),Da(t,"popover",l);break;case"xlinkActuate":jn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":jn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":jn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":jn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":jn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":jn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":jn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":jn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":jn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Da(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bS.get(a)||a,Da(t,a,l))}}function Vf(t,n,a,l,u,c){switch(a){case"style":wm(t,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof l=="string"?fa(t,l):(typeof l=="number"||typeof l=="bigint")&&fa(t,""+l);break;case"onScroll":l!=null&&Oe("scroll",t);break;case"onScrollEnd":l!=null&&Oe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Mu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ro.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),c=t[zt]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(n,c,u),typeof l=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,l,u);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Da(t,a,l)}}}function Rt(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",t),Oe("load",t);var l=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Fe(t,n,c,g,a,null)}}u&&Fe(t,n,"srcSet",a.srcSet,a,null),l&&Fe(t,n,"src",a.src,a,null);return;case"input":Oe("invalid",t);var E=c=g=u=null,O=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":u=G;break;case"type":g=G;break;case"checked":O=G;break;case"defaultChecked":z=G;break;case"value":c=G;break;case"defaultValue":E=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,n));break;default:Fe(t,n,l,G,a,null)}}xe(t,c,E,O,z,g,u,!1),Wr(t);return;case"select":Oe("invalid",t),l=g=c=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":c=E;break;case"defaultValue":g=E;break;case"multiple":l=E;default:Fe(t,n,u,E,a,null)}n=c,a=g,t.multiple=!!l,n!=null?bt(t,!!l,n,!1):a!=null&&bt(t,!!l,a,!0);return;case"textarea":Oe("invalid",t),c=u=l=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":l=E;break;case"defaultValue":u=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(91));break;default:Fe(t,n,g,E,a,null)}Ln(t,l,u,c),Wr(t);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(l=a[O],l!=null))switch(O){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Fe(t,n,O,l,a,null)}return;case"dialog":Oe("beforetoggle",t),Oe("toggle",t),Oe("cancel",t),Oe("close",t);break;case"iframe":case"object":Oe("load",t);break;case"video":case"audio":for(l=0;l<Ui.length;l++)Oe(Ui[l],t);break;case"image":Oe("error",t),Oe("load",t);break;case"details":Oe("toggle",t);break;case"embed":case"source":case"link":Oe("error",t),Oe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Fe(t,n,z,l,a,null)}return;default:if(lc(n)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Vf(t,n,G,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Fe(t,n,E,l,a,null))}function Vx(t,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,g=null,E=null,O=null,z=null,G=null;for(k in a){var K=a[k];if(a.hasOwnProperty(k)&&K!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":O=K;default:l.hasOwnProperty(k)||Fe(t,n,k,null,l,K)}}for(var L in l){var k=l[L];if(K=a[L],l.hasOwnProperty(L)&&(k!=null||K!=null))switch(L){case"type":c=k;break;case"name":u=k;break;case"checked":z=k;break;case"defaultChecked":G=k;break;case"value":g=k;break;case"defaultValue":E=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,n));break;default:k!==K&&Fe(t,n,L,k,l,K)}}de(t,g,E,O,z,G,c,u);return;case"select":k=g=E=L=null;for(c in a)if(O=a[c],a.hasOwnProperty(c)&&O!=null)switch(c){case"value":break;case"multiple":k=O;default:l.hasOwnProperty(c)||Fe(t,n,c,null,l,O)}for(u in l)if(c=l[u],O=a[u],l.hasOwnProperty(u)&&(c!=null||O!=null))switch(u){case"value":L=c;break;case"defaultValue":E=c;break;case"multiple":g=c;default:c!==O&&Fe(t,n,u,c,l,O)}n=E,a=g,l=k,L!=null?bt(t,!!a,L,!1):!!l!=!!a&&(n!=null?bt(t,!!a,n,!0):bt(t,!!a,a?[]:"",!1));return;case"textarea":k=L=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Fe(t,n,E,null,l,u)}for(g in l)if(u=l[g],c=a[g],l.hasOwnProperty(g)&&(u!=null||c!=null))switch(g){case"value":L=u;break;case"defaultValue":k=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==c&&Fe(t,n,g,u,l,c)}xn(t,L,k);return;case"option":for(var pe in a)if(L=a[pe],a.hasOwnProperty(pe)&&L!=null&&!l.hasOwnProperty(pe))switch(pe){case"selected":t.selected=!1;break;default:Fe(t,n,pe,null,l,L)}for(O in l)if(L=l[O],k=a[O],l.hasOwnProperty(O)&&L!==k&&(L!=null||k!=null))switch(O){case"selected":t.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Fe(t,n,O,L,l,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in a)L=a[he],a.hasOwnProperty(he)&&L!=null&&!l.hasOwnProperty(he)&&Fe(t,n,he,null,l,L);for(z in l)if(L=l[z],k=a[z],l.hasOwnProperty(z)&&L!==k&&(L!=null||k!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,n));break;default:Fe(t,n,z,L,l,k)}return;default:if(lc(n)){for(var Ve in a)L=a[Ve],a.hasOwnProperty(Ve)&&L!==void 0&&!l.hasOwnProperty(Ve)&&Vf(t,n,Ve,void 0,l,L);for(G in l)L=l[G],k=a[G],!l.hasOwnProperty(G)||L===k||L===void 0&&k===void 0||Vf(t,n,G,L,l,k);return}}for(var D in a)L=a[D],a.hasOwnProperty(D)&&L!=null&&!l.hasOwnProperty(D)&&Fe(t,n,D,null,l,L);for(K in l)L=l[K],k=a[K],!l.hasOwnProperty(K)||L===k||L==null&&k==null||Fe(t,n,K,L,l,k)}var Gf=null,Qf=null;function Ru(t){return t.nodeType===9?t:t.ownerDocument}function Ey(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wy(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function Gx(){var t=window.event;return t&&t.type==="popstate"?t===Xf?!1:(Xf=t,!0):(Xf=null,!1)}var $y=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,Ny=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ny<"u"?function(t){return Ny.resolve(null).then(t).catch(Xx)}:$y;function Xx(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function _y(t,n){var a=n,l=0,u=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(0<l&&8>l){a=l;var g=t.ownerDocument;if(a&1&&Pi(g.documentElement),a&2&&Pi(g.body),a&4)for(a=g.head,Pi(a),g=a.firstChild;g;){var E=g.nextSibling,O=g.nodeName;g[jt]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&g.rel.toLowerCase()==="stylesheet"||a.removeChild(g),g=E}}if(u===0){t.removeChild(c),Ki(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:l=a.charCodeAt(0)-48;else l=0;a=c}while(a);Ki(n)}function Kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),ei(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Kx(t,n,a,l){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[jt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Pn(t.nextSibling),t===null)break}return null}function Zx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Pn(t.nextSibling),t===null))return null;return t}function Zf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Wx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Pn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Wf=null;function Cy(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Ty(t,n,a){switch(n=Ru(a),t){case"html":if(t=n.documentElement,!t)throw Error(o(452));return t;case"head":if(t=n.head,!t)throw Error(o(453));return t;case"body":if(t=n.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Pi(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ei(t)}var Tn=new Map,Oy=new Set;function Du(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Na=te.d;te.d={f:Jx,r:Ix,D:eE,C:tE,L:nE,m:aE,X:lE,S:rE,M:iE};function Jx(){var t=Na.f(),n=$u();return t||n}function Ix(t){var n=bn(t);n!==null&&n.tag===5&&n.type==="form"?Kp(n):Na.r(t)}var Cl=typeof document>"u"?null:document;function Ay(t,n,a){var l=Cl;if(l&&typeof n=="string"&&n){var u=ne(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Oy.has(u)||(Oy.add(u),t={rel:t,crossOrigin:a,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),Rt(n,"link",t),ht(n),l.head.appendChild(n)))}}function eE(t){Na.D(t),Ay("dns-prefetch",t,null)}function tE(t,n){Na.C(t,n),Ay("preconnect",t,n)}function nE(t,n,a){Na.L(t,n,a);var l=Cl;if(l&&t&&n){var u='link[rel="preload"][as="'+ne(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ne(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ne(a.imageSizes)+'"]')):u+='[href="'+ne(t)+'"]';var c=u;switch(n){case"style":c=Tl(t);break;case"script":c=Ol(t)}Tn.has(c)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Tn.set(c,t),l.querySelector(u)!==null||n==="style"&&l.querySelector(qi(c))||n==="script"&&l.querySelector(Fi(c))||(n=l.createElement("link"),Rt(n,"link",t),ht(n),l.head.appendChild(n)))}}function aE(t,n){Na.m(t,n);var a=Cl;if(a&&t){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ne(l)+'"][href="'+ne(t)+'"]',c=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ol(t)}if(!Tn.has(c)&&(t=y({rel:"modulepreload",href:t},n),Tn.set(c,t),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fi(c)))return}l=a.createElement("link"),Rt(l,"link",t),ht(l),a.head.appendChild(l)}}}function rE(t,n,a){Na.S(t,n,a);var l=Cl;if(l&&t){var u=Ra(l).hoistableStyles,c=Tl(t);n=n||"default";var g=u.get(c);if(!g){var E={loading:0,preload:null};if(g=l.querySelector(qi(c)))E.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Tn.get(c))&&Jf(t,a);var O=g=l.createElement("link");ht(O),Rt(O,"link",t),O._p=new Promise(function(z,G){O.onload=z,O.onerror=G}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Bu(g,n,l)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(c,g)}}}function lE(t,n){Na.X(t,n);var a=Cl;if(a&&t){var l=Ra(a).hoistableScripts,u=Ol(t),c=l.get(u);c||(c=a.querySelector(Fi(u)),c||(t=y({src:t,async:!0},n),(n=Tn.get(u))&&If(t,n),c=a.createElement("script"),ht(c),Rt(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(u,c))}}function iE(t,n){Na.M(t,n);var a=Cl;if(a&&t){var l=Ra(a).hoistableScripts,u=Ol(t),c=l.get(u);c||(c=a.querySelector(Fi(u)),c||(t=y({src:t,async:!0,type:"module"},n),(n=Tn.get(u))&&If(t,n),c=a.createElement("script"),ht(c),Rt(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(u,c))}}function My(t,n,a,l){var u=(u=oe.current)?Du(u):null;if(!u)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Tl(a.href),a=Ra(u).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Tl(a.href);var c=Ra(u).hoistableStyles,g=c.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=u.querySelector(qi(t)))&&!c._p&&(g.instance=c,g.state.loading=5),Tn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tn.set(t,a),c||oE(u,t,a,g.state))),n&&l===null)throw Error(o(528,""));return g}if(n&&l!==null)throw Error(o(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ol(a),a=Ra(u).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Tl(t){return'href="'+ne(t)+'"'}function qi(t){return'link[rel="stylesheet"]['+t+"]"}function Ry(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function oE(t,n,a,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Rt(n,"link",a),ht(n),t.head.appendChild(n))}function Ol(t){return'[src="'+ne(t)+'"]'}function Fi(t){return"script[async]"+t}function Dy(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+ne(a.href)+'"]');if(l)return n.instance=l,ht(l),l;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ht(l),Rt(l,"style",u),Bu(l,a.precedence,t),n.instance=l;case"stylesheet":u=Tl(a.href);var c=t.querySelector(qi(u));if(c)return n.state.loading|=4,n.instance=c,ht(c),c;l=Ry(a),(u=Tn.get(u))&&Jf(l,u),c=(t.ownerDocument||t).createElement("link"),ht(c);var g=c;return g._p=new Promise(function(E,O){g.onload=E,g.onerror=O}),Rt(c,"link",l),n.state.loading|=4,Bu(c,a.precedence,t),n.instance=c;case"script":return c=Ol(a.src),(u=t.querySelector(Fi(c)))?(n.instance=u,ht(u),u):(l=a,(u=Tn.get(c))&&(l=y({},a),If(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),ht(u),Rt(u,"link",l),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Bu(l,a.precedence,t));return n.instance}function Bu(t,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,c=u,g=0;g<l.length;g++){var E=l[g];if(E.dataset.precedence===n)c=E;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zu=null;function By(t,n,a){if(zu===null){var l=new Map,u=zu=new Map;u.set(a,l)}else u=zu,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[jt]||c[rt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var E=l.get(g);E?E.push(c):l.set(g,[c])}}return l}function zy(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function uE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jy(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Vi=null;function sE(){}function cE(t,n,a){if(Vi===null)throw Error(o(475));var l=Vi;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Tl(a.href),c=t.querySelector(qi(u));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=ju.bind(l),t.then(l,l)),n.state.loading|=4,n.instance=c,ht(c);return}c=t.ownerDocument||t,a=Ry(a),(u=Tn.get(u))&&Jf(a,u),c=c.createElement("link"),ht(c);var g=c;g._p=new Promise(function(E,O){g.onload=E,g.onerror=O}),Rt(c,"link",a),n.instance=c}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=ju.bind(l),t.addEventListener("load",n),t.addEventListener("error",n))}}function fE(){if(Vi===null)throw Error(o(475));var t=Vi;return t.stylesheets&&t.count===0&&ed(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&ed(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ju(){if(this.count--,this.count===0){if(this.stylesheets)ed(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hu=null;function ed(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hu=new Map,n.forEach(dE,t),Hu=null,ju.call(t))}function dE(t,n){if(!(n.state.loading&4)){var a=Hu.get(t);if(a)var l=a.get(null);else{a=new Map,Hu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var g=u[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),l=g)}l&&a.set(null,l)}u=n.instance,g=u.getAttribute("data-precedence"),c=a.get(g)||l,c===l&&a.set(null,u),a.set(g,u),this.count++,l=ju.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Gi={$$typeof:M,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function hE(t,n,a,l,u,c,g,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.hiddenUpdates=yn(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Hy(t,n,a,l,u,c,g,E,O,z,G,K){return t=new hE(t,n,a,g,E,O,z,K),n=1,c===!0&&(n|=24),c=rn(3,null,null,n),t.current=c,c.stateNode=t,n=Bc(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:n},Lc(c),t}function Ly(t){return t?(t=il,t):il}function Uy(t,n,a,l,u,c){u=Ly(u),l.context===null?l.context=u:l.pendingContext=u,l=La(n),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=Ua(t,l,n),a!==null&&(cn(a,t,n),xi(a,t,n))}function ky(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function td(t,n){ky(t,n),(t=t.alternate)&&ky(t,n)}function Py(t){if(t.tag===13){var n=ll(t,67108864);n!==null&&cn(n,t,67108864),td(t,67108864)}}var Lu=!0;function mE(t,n,a,l){var u=q.T;q.T=null;var c=te.p;try{te.p=2,nd(t,n,a,l)}finally{te.p=c,q.T=u}}function pE(t,n,a,l){var u=q.T;q.T=null;var c=te.p;try{te.p=8,nd(t,n,a,l)}finally{te.p=c,q.T=u}}function nd(t,n,a,l){if(Lu){var u=ad(l);if(u===null)Ff(t,n,l,Uu,a),Fy(t,l);else if(gE(u,t,n,a,l))l.stopPropagation();else if(Fy(t,l),n&4&&-1<yE.indexOf(t)){for(;u!==null;){var c=bn(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=Le(c.pendingLanes);if(g!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var O=1<<31-dt(g);E.entanglements[1]|=O,g&=~O}ta(c),(Ue&6)===0&&(Eu=Ze()+500,Li(0))}}break;case 13:E=ll(c,2),E!==null&&cn(E,c,2),$u(),td(c,2)}if(c=ad(l),c===null&&Ff(t,n,l,Uu,a),c===u)break;u=c}u!==null&&l.stopPropagation()}else Ff(t,n,l,null,a)}}function ad(t){return t=oc(t),rd(t)}var Uu=null;function rd(t){if(Uu=null,t=sa(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Uu=t,null}function qy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qt()){case qt:return 2;case vt:return 8;case mn:case sr:return 32;case Qr:return 268435456;default:return 32}default:return 32}}var ld=!1,Ja=null,Ia=null,er=null,Qi=new Map,Yi=new Map,tr=[],yE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fy(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Qi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(n.pointerId)}}function Xi(t,n,a,l,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[u]},n!==null&&(n=bn(n),n!==null&&Py(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function gE(t,n,a,l,u){switch(n){case"focusin":return Ja=Xi(Ja,t,n,a,l,u),!0;case"dragenter":return Ia=Xi(Ia,t,n,a,l,u),!0;case"mouseover":return er=Xi(er,t,n,a,l,u),!0;case"pointerover":var c=u.pointerId;return Qi.set(c,Xi(Qi.get(c)||null,t,n,a,l,u)),!0;case"gotpointercapture":return c=u.pointerId,Yi.set(c,Xi(Yi.get(c)||null,t,n,a,l,u)),!0}return!1}function Vy(t){var n=sa(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Dn(t.priority,function(){if(a.tag===13){var l=sn();l=Yr(l);var u=ll(a,l);u!==null&&cn(u,a,l),td(a,l)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ku(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ad(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ic=l,a.target.dispatchEvent(l),ic=null}else return n=bn(a),n!==null&&Py(n),t.blockedOn=a,!1;n.shift()}return!0}function Gy(t,n,a){ku(t)&&a.delete(n)}function vE(){ld=!1,Ja!==null&&ku(Ja)&&(Ja=null),Ia!==null&&ku(Ia)&&(Ia=null),er!==null&&ku(er)&&(er=null),Qi.forEach(Gy),Yi.forEach(Gy)}function Pu(t,n){t.blockedOn===n&&(t.blockedOn=null,ld||(ld=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vE)))}var qu=null;function Qy(t){qu!==t&&(qu=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){qu===t&&(qu=null);for(var n=0;n<t.length;n+=3){var a=t[n],l=t[n+1],u=t[n+2];if(typeof l!="function"){if(rd(l||a)===null)continue;break}var c=bn(a);c!==null&&(t.splice(n,3),n-=3,af(c,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function Ki(t){function n(O){return Pu(O,t)}Ja!==null&&Pu(Ja,t),Ia!==null&&Pu(Ia,t),er!==null&&Pu(er,t),Qi.forEach(n),Yi.forEach(n);for(var a=0;a<tr.length;a++){var l=tr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)Vy(a),a.blockedOn===null&&tr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],c=a[l+1],g=u[zt]||null;if(typeof c=="function")g||Qy(a);else if(g){var E=null;if(c&&c.hasAttribute("formAction")){if(u=c,g=c[zt]||null)E=g.formAction;else if(rd(u)!==null)continue}else E=g.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),Qy(a)}}}function id(t){this._internalRoot=t}Fu.prototype.render=id.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));var a=n.current,l=sn();Uy(a,l,t,n,null,null)},Fu.prototype.unmount=id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Uy(t.current,2,null,t,null,null),$u(),n[Bn]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var n=fr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<tr.length&&n!==0&&n<tr[a].priority;a++);tr.splice(a,0,t),a===0&&Vy(t)}};var Yy=r.version;if(Yy!=="19.1.0")throw Error(o(527,Yy,"19.1.0"));te.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var bE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Yn=Vu.inject(bE),wt=Vu}catch{}}return Wi.createRoot=function(t,n){if(!s(t))throw Error(o(299));var a=!1,l="",u=s0,c=c0,g=f0,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Hy(t,1,!1,null,null,a,l,u,c,g,E,null),t[Bn]=n.current,qf(t),new id(n)},Wi.hydrateRoot=function(t,n,a){if(!s(t))throw Error(o(299));var l=!1,u="",c=s0,g=c0,E=f0,O=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),n=Hy(t,1,!0,n,a??null,l,u,c,g,E,O,z),n.context=Ly(null),a=n.current,l=sn(),l=Yr(l),u=La(l),u.callback=null,Ua(a,u,l),a=l,n.current.lanes=a,Xn(n,a),ta(n),t[Bn]=n.current,qf(t),new Fu(n)},Wi.version="19.1.0",Wi}var ag;function TE(){if(ag)return sd.exports;ag=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),sd.exports=CE(),sd.exports}var OE=TE(),kt=function(){return kt=Object.assign||function(r){for(var i,o=1,s=arguments.length;o<s;o++){i=arguments[o];for(var f in i)Object.prototype.hasOwnProperty.call(i,f)&&(r[f]=i[f])}return r},kt.apply(this,arguments)};function oo(e,r,i){if(i||arguments.length===2)for(var o=0,s=r.length,f;o<s;o++)(f||!(o in r))&&(f||(f=Array.prototype.slice.call(r,0,o)),f[o]=r[o]);return e.concat(f||Array.prototype.slice.call(r))}var We="-ms-",ao="-moz-",je="-webkit-",Yv="comm",Ms="rule",Lh="decl",AE="@import",Xv="@keyframes",ME="@layer",Kv=Math.abs,Uh=String.fromCharCode,zd=Object.assign;function RE(e,r){return Ct(e,0)^45?(((r<<2^Ct(e,0))<<2^Ct(e,1))<<2^Ct(e,2))<<2^Ct(e,3):0}function Zv(e){return e.trim()}function _a(e,r){return(e=r.exec(e))?e[0]:e}function we(e,r,i){return e.replace(r,i)}function ts(e,r,i){return e.indexOf(r,i)}function Ct(e,r){return e.charCodeAt(r)|0}function Hl(e,r,i){return e.slice(r,i)}function aa(e){return e.length}function Wv(e){return e.length}function to(e,r){return r.push(e),e}function DE(e,r){return e.map(r).join("")}function rg(e,r){return e.filter(function(i){return!_a(i,r)})}var Rs=1,Ll=1,Jv=0,Mn=0,gt=0,Gl="";function Ds(e,r,i,o,s,f,d,p){return{value:e,root:r,parent:i,type:o,props:s,children:f,line:Rs,column:Ll,length:d,return:"",siblings:p}}function ar(e,r){return zd(Ds("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function Al(e){for(;e.root;)e=ar(e.root,{children:[e]});to(e,e.siblings)}function BE(){return gt}function zE(){return gt=Mn>0?Ct(Gl,--Mn):0,Ll--,gt===10&&(Ll=1,Rs--),gt}function Fn(){return gt=Mn<Jv?Ct(Gl,Mn++):0,Ll++,gt===10&&(Ll=1,Rs++),gt}function Dr(){return Ct(Gl,Mn)}function ns(){return Mn}function Bs(e,r){return Hl(Gl,e,r)}function jd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jE(e){return Rs=Ll=1,Jv=aa(Gl=e),Mn=0,[]}function HE(e){return Gl="",e}function hd(e){return Zv(Bs(Mn-1,Hd(e===91?e+2:e===40?e+1:e)))}function LE(e){for(;(gt=Dr())&&gt<33;)Fn();return jd(e)>2||jd(gt)>3?"":" "}function UE(e,r){for(;--r&&Fn()&&!(gt<48||gt>102||gt>57&&gt<65||gt>70&&gt<97););return Bs(e,ns()+(r<6&&Dr()==32&&Fn()==32))}function Hd(e){for(;Fn();)switch(gt){case e:return Mn;case 34:case 39:e!==34&&e!==39&&Hd(gt);break;case 40:e===41&&Hd(e);break;case 92:Fn();break}return Mn}function kE(e,r){for(;Fn()&&e+gt!==57;)if(e+gt===84&&Dr()===47)break;return"/*"+Bs(r,Mn-1)+"*"+Uh(e===47?e:Fn())}function PE(e){for(;!jd(Dr());)Fn();return Bs(e,Mn)}function qE(e){return HE(as("",null,null,null,[""],e=jE(e),0,[0],e))}function as(e,r,i,o,s,f,d,p,m){for(var h=0,y=0,b=d,x=0,$=0,S=0,w=1,T=1,N=1,A=0,M="",P=s,H=f,V=o,U=M;T;)switch(S=A,A=Fn()){case 40:if(S!=108&&Ct(U,b-1)==58){ts(U+=we(hd(A),"&","&\f"),"&\f",Kv(h?p[h-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:U+=hd(A);break;case 9:case 10:case 13:case 32:U+=LE(S);break;case 92:U+=UE(ns()-1,7);continue;case 47:switch(Dr()){case 42:case 47:to(FE(kE(Fn(),ns()),r,i,m),m);break;default:U+="/"}break;case 123*w:p[h++]=aa(U)*N;case 125*w:case 59:case 0:switch(A){case 0:case 125:T=0;case 59+y:N==-1&&(U=we(U,/\f/g,"")),$>0&&aa(U)-b&&to($>32?ig(U+";",o,i,b-1,m):ig(we(U," ","")+";",o,i,b-2,m),m);break;case 59:U+=";";default:if(to(V=lg(U,r,i,h,y,s,p,M,P=[],H=[],b,f),f),A===123)if(y===0)as(U,r,V,V,P,f,b,p,H);else switch(x===99&&Ct(U,3)===110?100:x){case 100:case 108:case 109:case 115:as(e,V,V,o&&to(lg(e,V,V,0,0,s,p,M,s,P=[],b,H),H),s,H,b,p,o?P:H);break;default:as(U,V,V,V,[""],H,0,p,H)}}h=y=$=0,w=N=1,M=U="",b=d;break;case 58:b=1+aa(U),$=S;default:if(w<1){if(A==123)--w;else if(A==125&&w++==0&&zE()==125)continue}switch(U+=Uh(A),A*w){case 38:N=y>0?1:(U+="\f",-1);break;case 44:p[h++]=(aa(U)-1)*N,N=1;break;case 64:Dr()===45&&(U+=hd(Fn())),x=Dr(),y=b=aa(M=U+=PE(ns())),A++;break;case 45:S===45&&aa(U)==2&&(w=0)}}return f}function lg(e,r,i,o,s,f,d,p,m,h,y,b){for(var x=s-1,$=s===0?f:[""],S=Wv($),w=0,T=0,N=0;w<o;++w)for(var A=0,M=Hl(e,x+1,x=Kv(T=d[w])),P=e;A<S;++A)(P=Zv(T>0?$[A]+" "+M:we(M,/&\f/g,$[A])))&&(m[N++]=P);return Ds(e,r,i,s===0?Ms:p,m,h,y,b)}function FE(e,r,i,o){return Ds(e,r,i,Yv,Uh(BE()),Hl(e,2,-2),0,o)}function ig(e,r,i,o,s){return Ds(e,r,i,Lh,Hl(e,0,o),Hl(e,o+1,-1),o,s)}function Iv(e,r,i){switch(RE(e,r)){case 5103:return je+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return je+e+e;case 4789:return ao+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return je+e+ao+e+We+e+e;case 5936:switch(Ct(e,r+11)){case 114:return je+e+We+we(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return je+e+We+we(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return je+e+We+we(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return je+e+We+e+e;case 6165:return je+e+We+"flex-"+e+e;case 5187:return je+e+we(e,/(\w+).+(:[^]+)/,je+"box-$1$2"+We+"flex-$1$2")+e;case 5443:return je+e+We+"flex-item-"+we(e,/flex-|-self/g,"")+(_a(e,/flex-|baseline/)?"":We+"grid-row-"+we(e,/flex-|-self/g,""))+e;case 4675:return je+e+We+"flex-line-pack"+we(e,/align-content|flex-|-self/g,"")+e;case 5548:return je+e+We+we(e,"shrink","negative")+e;case 5292:return je+e+We+we(e,"basis","preferred-size")+e;case 6060:return je+"box-"+we(e,"-grow","")+je+e+We+we(e,"grow","positive")+e;case 4554:return je+we(e,/([^-])(transform)/g,"$1"+je+"$2")+e;case 6187:return we(we(we(e,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),e,"")+e;case 5495:case 3959:return we(e,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return we(we(e,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+We+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+je+e+e;case 4200:if(!_a(e,/flex-|baseline/))return We+"grid-column-align"+Hl(e,r)+e;break;case 2592:case 3360:return We+we(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(o,s){return r=s,_a(o.props,/grid-\w+-end/)})?~ts(e+(i=i[r].value),"span",0)?e:We+we(e,"-start","")+e+We+"grid-row-span:"+(~ts(i,"span",0)?_a(i,/\d+/):+_a(i,/\d+/)-+_a(e,/\d+/))+";":We+we(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(o){return _a(o.props,/grid-\w+-start/)})?e:We+we(we(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return we(e,/(.+)-inline(.+)/,je+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(aa(e)-1-r>6)switch(Ct(e,r+1)){case 109:if(Ct(e,r+4)!==45)break;case 102:return we(e,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+ao+(Ct(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ts(e,"stretch",0)?Iv(we(e,"stretch","fill-available"),r,i)+e:e}break;case 5152:case 5920:return we(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,f,d,p,m,h){return We+s+":"+f+h+(d?We+s+"-span:"+(p?m:+m-+f)+h:"")+e});case 4949:if(Ct(e,r+6)===121)return we(e,":",":"+je)+e;break;case 6444:switch(Ct(e,Ct(e,14)===45?18:11)){case 120:return we(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+(Ct(e,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+We+"$2box$3")+e;case 100:return we(e,":",":"+We)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return we(e,"scroll-","scroll-snap-")+e}return e}function gs(e,r){for(var i="",o=0;o<e.length;o++)i+=r(e[o],o,e,r)||"";return i}function VE(e,r,i,o){switch(e.type){case ME:if(e.children.length)break;case AE:case Lh:return e.return=e.return||e.value;case Yv:return"";case Xv:return e.return=e.value+"{"+gs(e.children,o)+"}";case Ms:if(!aa(e.value=e.props.join(",")))return""}return aa(i=gs(e.children,o))?e.return=e.value+"{"+i+"}":""}function GE(e){var r=Wv(e);return function(i,o,s,f){for(var d="",p=0;p<r;p++)d+=e[p](i,o,s,f)||"";return d}}function QE(e){return function(r){r.root||(r=r.return)&&e(r)}}function YE(e,r,i,o){if(e.length>-1&&!e.return)switch(e.type){case Lh:e.return=Iv(e.value,e.length,i);return;case Xv:return gs([ar(e,{value:we(e.value,"@","@"+je)})],o);case Ms:if(e.length)return DE(i=e.props,function(s){switch(_a(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Al(ar(e,{props:[we(s,/:(read-\w+)/,":"+ao+"$1")]})),Al(ar(e,{props:[s]})),zd(e,{props:rg(i,o)});break;case"::placeholder":Al(ar(e,{props:[we(s,/:(plac\w+)/,":"+je+"input-$1")]})),Al(ar(e,{props:[we(s,/:(plac\w+)/,":"+ao+"$1")]})),Al(ar(e,{props:[we(s,/:(plac\w+)/,We+"input-$1")]})),Al(ar(e,{props:[s]})),zd(e,{props:rg(i,o)});break}return""})}}var XE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dn={},Ul=typeof process<"u"&&dn!==void 0&&(dn.REACT_APP_SC_ATTR||dn.SC_ATTR)||"data-styled",e1="active",t1="data-styled-version",zs="6.1.19",kh=`/*!sc*/
`,vs=typeof window<"u"&&typeof document<"u",KE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==""?dn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.SC_DISABLE_SPEEDY!==void 0&&dn.SC_DISABLE_SPEEDY!==""&&dn.SC_DISABLE_SPEEDY!=="false"&&dn.SC_DISABLE_SPEEDY),js=Object.freeze([]),kl=Object.freeze({});function ZE(e,r,i){return i===void 0&&(i=kl),e.theme!==i.theme&&e.theme||r||i.theme}var n1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),WE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,JE=/(^-|-$)/g;function og(e){return e.replace(WE,"-").replace(JE,"")}var IE=/(a)(d)/gi,Gu=52,ug=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ld(e){var r,i="";for(r=Math.abs(e);r>Gu;r=r/Gu|0)i=ug(r%Gu)+i;return(ug(r%Gu)+i).replace(IE,"$1-$2")}var md,a1=5381,Rl=function(e,r){for(var i=r.length;i;)e=33*e^r.charCodeAt(--i);return e},r1=function(e){return Rl(a1,e)};function l1(e){return Ld(r1(e)>>>0)}function e2(e){return e.displayName||e.name||"Component"}function pd(e){return typeof e=="string"&&!0}var i1=typeof Symbol=="function"&&Symbol.for,o1=i1?Symbol.for("react.memo"):60115,t2=i1?Symbol.for("react.forward_ref"):60112,n2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r2=((md={})[t2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},md[o1]=u1,md);function sg(e){return("type"in(r=e)&&r.type.$$typeof)===o1?u1:"$$typeof"in e?r2[e.$$typeof]:n2;var r}var l2=Object.defineProperty,i2=Object.getOwnPropertyNames,cg=Object.getOwnPropertySymbols,o2=Object.getOwnPropertyDescriptor,u2=Object.getPrototypeOf,fg=Object.prototype;function s1(e,r,i){if(typeof r!="string"){if(fg){var o=u2(r);o&&o!==fg&&s1(e,o,i)}var s=i2(r);cg&&(s=s.concat(cg(r)));for(var f=sg(e),d=sg(r),p=0;p<s.length;++p){var m=s[p];if(!(m in a2||i&&i[m]||d&&m in d||f&&m in f)){var h=o2(r,m);try{l2(e,m,h)}catch{}}}}return e}function Hr(e){return typeof e=="function"}function Ph(e){return typeof e=="object"&&"styledComponentId"in e}function Ar(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function Ud(e,r){if(e.length===0)return"";for(var i=e[0],o=1;o<e.length;o++)i+=e[o];return i}function uo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kd(e,r,i){if(i===void 0&&(i=!1),!i&&!uo(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)e[o]=kd(e[o],r[o]);else if(uo(r))for(var o in r)e[o]=kd(e[o],r[o]);return e}function qh(e,r){Object.defineProperty(e,"toString",{value:r})}function or(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var s2=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return e.prototype.indexOfGroup=function(r){for(var i=0,o=0;o<r;o++)i+=this.groupSizes[o];return i},e.prototype.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,f=s;r>=f;)if((f<<=1)<0)throw or(16,"".concat(r));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var d=s;d<f;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(r+1),m=(d=0,i.length);d<m;d++)this.tag.insertRule(p,i[d])&&(this.groupSizes[r]++,p++)},e.prototype.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],o=this.indexOfGroup(r),s=o+i;this.groupSizes[r]=0;for(var f=o;f<s;f++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var o=this.groupSizes[r],s=this.indexOfGroup(r),f=s+o,d=s;d<f;d++)i+="".concat(this.tag.getRule(d)).concat(kh);return i},e}(),rs=new Map,bs=new Map,ls=1,Qu=function(e){if(rs.has(e))return rs.get(e);for(;bs.has(ls);)ls++;var r=ls++;return rs.set(e,r),bs.set(r,e),r},c2=function(e,r){ls=r+1,rs.set(e,r),bs.set(r,e)},f2="style[".concat(Ul,"][").concat(t1,'="').concat(zs,'"]'),d2=new RegExp("^".concat(Ul,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),h2=function(e,r,i){for(var o,s=i.split(","),f=0,d=s.length;f<d;f++)(o=s[f])&&e.registerName(r,o)},m2=function(e,r){for(var i,o=((i=r.textContent)!==null&&i!==void 0?i:"").split(kh),s=[],f=0,d=o.length;f<d;f++){var p=o[f].trim();if(p){var m=p.match(d2);if(m){var h=0|parseInt(m[1],10),y=m[2];h!==0&&(c2(y,h),h2(e,y,m[3]),e.getTag().insertRules(h,s)),s.length=0}else s.push(p)}}},dg=function(e){for(var r=document.querySelectorAll(f2),i=0,o=r.length;i<o;i++){var s=r[i];s&&s.getAttribute(Ul)!==e1&&(m2(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function p2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var c1=function(e){var r=document.head,i=e||r,o=document.createElement("style"),s=function(p){var m=Array.from(p.querySelectorAll("style[".concat(Ul,"]")));return m[m.length-1]}(i),f=s!==void 0?s.nextSibling:null;o.setAttribute(Ul,e1),o.setAttribute(t1,zs);var d=p2();return d&&o.setAttribute("nonce",d),i.insertBefore(o,f),o},y2=function(){function e(r){this.element=c1(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,f=o.length;s<f;s++){var d=o[s];if(d.ownerNode===i)return d}throw or(17)}(this.element),this.length=0}return e.prototype.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var i=this.sheet.cssRules[r];return i&&i.cssText?i.cssText:""},e}(),g2=function(){function e(r){this.element=c1(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,i){if(r<=this.length&&r>=0){var o=document.createTextNode(i);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),v2=function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),hg=vs,b2={isServer:!vs,useCSSOMInjection:!KE},f1=function(){function e(r,i,o){r===void 0&&(r=kl),i===void 0&&(i={});var s=this;this.options=kt(kt({},b2),r),this.gs=i,this.names=new Map(o),this.server=!!r.isServer,!this.server&&vs&&hg&&(hg=!1,dg(this)),qh(this,function(){return function(f){for(var d=f.getTag(),p=d.length,m="",h=function(b){var x=function(N){return bs.get(N)}(b);if(x===void 0)return"continue";var $=f.names.get(x),S=d.getGroup(b);if($===void 0||!$.size||S.length===0)return"continue";var w="".concat(Ul,".g").concat(b,'[id="').concat(x,'"]'),T="";$!==void 0&&$.forEach(function(N){N.length>0&&(T+="".concat(N,","))}),m+="".concat(S).concat(w,'{content:"').concat(T,'"}').concat(kh)},y=0;y<p;y++)h(y);return m}(s)})}return e.registerId=function(r){return Qu(r)},e.prototype.rehydrate=function(){!this.server&&vs&&dg(this)},e.prototype.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new e(kt(kt({},this.options),r),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=function(i){var o=i.useCSSOMInjection,s=i.target;return i.isServer?new v2(s):o?new y2(s):new g2(s)}(this.options),new s2(r)));var r},e.prototype.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},e.prototype.registerName=function(r,i){if(Qu(r),this.names.has(r))this.names.get(r).add(i);else{var o=new Set;o.add(i),this.names.set(r,o)}},e.prototype.insertRules=function(r,i,o){this.registerName(r,i),this.getTag().insertRules(Qu(r),o)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup(Qu(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e}(),S2=/&/g,x2=/^\s*\/\/.*$/gm;function d1(e,r){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(r," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(r," ")),i.props=i.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=d1(i.children,r)),i})}function E2(e){var r,i,o,s=kl,f=s.options,d=f===void 0?kl:f,p=s.plugins,m=p===void 0?js:p,h=function(x,$,S){return S.startsWith(i)&&S.endsWith(i)&&S.replaceAll(i,"").length>0?".".concat(r):x},y=m.slice();y.push(function(x){x.type===Ms&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(S2,i).replace(o,h))}),d.prefix&&y.push(YE),y.push(VE);var b=function(x,$,S,w){$===void 0&&($=""),S===void 0&&(S=""),w===void 0&&(w="&"),r=w,i=$,o=new RegExp("\\".concat(i,"\\b"),"g");var T=x.replace(x2,""),N=qE(S||$?"".concat(S," ").concat($," { ").concat(T," }"):T);d.namespace&&(N=d1(N,d.namespace));var A=[];return gs(N,GE(y.concat(QE(function(M){return A.push(M)})))),A};return b.hash=m.length?m.reduce(function(x,$){return $.name||or(15),Rl(x,$.name)},a1).toString():"",b}var w2=new f1,Pd=E2(),h1=Dt.createContext({shouldForwardProp:void 0,styleSheet:w2,stylis:Pd});h1.Consumer;Dt.createContext(void 0);function mg(){return v.useContext(h1)}var m1=function(){function e(r,i){var o=this;this.inject=function(s,f){f===void 0&&(f=Pd);var d=o.name+f.hash;s.hasNameForId(o.id,d)||s.insertRules(o.id,d,f(o.rules,d,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=i,qh(this,function(){throw or(12,String(o.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=Pd),this.name+r.hash},e}(),$2=function(e){return e>="A"&&e<="Z"};function pg(e){for(var r="",i=0;i<e.length;i++){var o=e[i];if(i===1&&o==="-"&&e[0]==="-")return e;$2(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var p1=function(e){return e==null||e===!1||e===""},y1=function(e){var r,i,o=[];for(var s in e){var f=e[s];e.hasOwnProperty(s)&&!p1(f)&&(Array.isArray(f)&&f.isCss||Hr(f)?o.push("".concat(pg(s),":"),f,";"):uo(f)?o.push.apply(o,oo(oo(["".concat(s," {")],y1(f),!1),["}"],!1)):o.push("".concat(pg(s),": ").concat((r=s,(i=f)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||r in XE||r.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return o};function Br(e,r,i,o){if(p1(e))return[];if(Ph(e))return[".".concat(e.styledComponentId)];if(Hr(e)){if(!Hr(f=e)||f.prototype&&f.prototype.isReactComponent||!r)return[e];var s=e(r);return Br(s,r,i,o)}var f;return e instanceof m1?i?(e.inject(i,o),[e.getName(o)]):[e]:uo(e)?y1(e):Array.isArray(e)?Array.prototype.concat.apply(js,e.map(function(d){return Br(d,r,i,o)})):[e.toString()]}function N2(e){for(var r=0;r<e.length;r+=1){var i=e[r];if(Hr(i)&&!Ph(i))return!1}return!0}var _2=r1(zs),C2=function(){function e(r,i,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&N2(r),this.componentId=i,this.baseHash=Rl(_2,i),this.baseStyle=o,f1.registerId(i)}return e.prototype.generateAndInjectStyles=function(r,i,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))s=Ar(s,this.staticRulesId);else{var f=Ud(Br(this.rules,r,i,o)),d=Ld(Rl(this.baseHash,f)>>>0);if(!i.hasNameForId(this.componentId,d)){var p=o(f,".".concat(d),void 0,this.componentId);i.insertRules(this.componentId,d,p)}s=Ar(s,d),this.staticRulesId=d}else{for(var m=Rl(this.baseHash,o.hash),h="",y=0;y<this.rules.length;y++){var b=this.rules[y];if(typeof b=="string")h+=b;else if(b){var x=Ud(Br(b,r,i,o));m=Rl(m,x+y),h+=x}}if(h){var $=Ld(m>>>0);i.hasNameForId(this.componentId,$)||i.insertRules(this.componentId,$,o(h,".".concat($),void 0,this.componentId)),s=Ar(s,$)}}return s},e}(),so=Dt.createContext(void 0);so.Consumer;function Fh(){var e=v.useContext(so);if(!e)throw or(18);return e}function T2(e){var r=Dt.useContext(so),i=v.useMemo(function(){return function(o,s){if(!o)throw or(14);if(Hr(o)){var f=o(s);return f}if(Array.isArray(o)||typeof o!="object")throw or(8);return s?kt(kt({},s),o):o}(e.theme,r)},[e.theme,r]);return e.children?Dt.createElement(so.Provider,{value:i},e.children):null}var yd={};function O2(e,r,i){var o=Ph(e),s=e,f=!pd(e),d=r.attrs,p=d===void 0?js:d,m=r.componentId,h=m===void 0?function(P,H){var V=typeof P!="string"?"sc":og(P);yd[V]=(yd[V]||0)+1;var U="".concat(V,"-").concat(l1(zs+V+yd[V]));return H?"".concat(H,"-").concat(U):U}(r.displayName,r.parentComponentId):m,y=r.displayName,b=y===void 0?function(P){return pd(P)?"styled.".concat(P):"Styled(".concat(e2(P),")")}(e):y,x=r.displayName&&r.componentId?"".concat(og(r.displayName),"-").concat(r.componentId):r.componentId||h,$=o&&s.attrs?s.attrs.concat(p).filter(Boolean):p,S=r.shouldForwardProp;if(o&&s.shouldForwardProp){var w=s.shouldForwardProp;if(r.shouldForwardProp){var T=r.shouldForwardProp;S=function(P,H){return w(P,H)&&T(P,H)}}else S=w}var N=new C2(i,x,o?s.componentStyle:void 0);function A(P,H){return function(V,U,ee){var re=V.attrs,ce=V.componentStyle,$e=V.defaultProps,Re=V.foldedComponentIds,De=V.styledComponentId,Ke=V.target,Ce=Dt.useContext(so),q=mg(),te=V.shouldForwardProp||q.shouldForwardProp,le=ZE(U,Ce,$e)||kl,I=function(fe,oe,Qe){for(var Se,nt=kt(kt({},oe),{className:void 0,theme:Qe}),Bt=0;Bt<fe.length;Bt+=1){var Ye=Hr(Se=fe[Bt])?Se(nt):Se;for(var He in Ye)nt[He]=He==="className"?Ar(nt[He],Ye[He]):He==="style"?kt(kt({},nt[He]),Ye[He]):Ye[He]}return oe.className&&(nt.className=Ar(nt.className,oe.className)),nt}(re,U,le),C=I.as||Ke,j={};for(var J in I)I[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&I.theme===le||(J==="forwardedAs"?j.as=I.forwardedAs:te&&!te(J,C)||(j[J]=I[J]));var Z=function(fe,oe){var Qe=mg(),Se=fe.generateAndInjectStyles(oe,Qe.styleSheet,Qe.stylis);return Se}(ce,I),ae=Ar(Re,De);return Z&&(ae+=" "+Z),I.className&&(ae+=" "+I.className),j[pd(C)&&!n1.has(C)?"class":"className"]=ae,ee&&(j.ref=ee),v.createElement(C,j)}(M,P,H)}A.displayName=b;var M=Dt.forwardRef(A);return M.attrs=$,M.componentStyle=N,M.displayName=b,M.shouldForwardProp=S,M.foldedComponentIds=o?Ar(s.foldedComponentIds,s.styledComponentId):"",M.styledComponentId=x,M.target=o?s.target:e,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=o?function(H){for(var V=[],U=1;U<arguments.length;U++)V[U-1]=arguments[U];for(var ee=0,re=V;ee<re.length;ee++)kd(H,re[ee],!0);return H}({},s.defaultProps,P):P}}),qh(M,function(){return".".concat(M.styledComponentId)}),f&&s1(M,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function yg(e,r){for(var i=[e[0]],o=0,s=r.length;o<s;o+=1)i.push(r[o],e[o+1]);return i}var gg=function(e){return Object.assign(e,{isCss:!0})};function Q(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(Hr(e)||uo(e))return gg(Br(yg(js,oo([e],r,!0))));var o=e;return r.length===0&&o.length===1&&typeof o[0]=="string"?Br(o):gg(Br(yg(o,r)))}function qd(e,r,i){if(i===void 0&&(i=kl),!r)throw or(1,r);var o=function(s){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return e(r,i,Q.apply(void 0,oo([s],f,!1)))};return o.attrs=function(s){return qd(e,r,kt(kt({},i),{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return qd(e,r,kt(kt({},i),s))},o}var g1=function(e){return qd(O2,e)},Y=g1;n1.forEach(function(e){Y[e]=g1(e)});function v1(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var o=Ud(Q.apply(void 0,oo([e],r,!1))),s=l1(o);return new m1(s,o)}const A2={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F5F5F6","Neutral/Neutral 10":"#EAEBEC","Neutral/Neutral 20":"#D7D8DA","Neutral/Neutral 30":"#B2B5B8","Neutral/Neutral 40":"#9EA0A4","Neutral/Neutral 50":"#74767B","Neutral/Neutral 60":"#67696D","Neutral/Neutral 70":"#515256","Neutral/Neutral 80":"#37383B","Neutral/Neutral 90":"#252629","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#0000009A","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#0000000A","Opacity/Neutral 8":"#00000014","Opacity/Neutral 12":"#0000001F","Opacity/Neutral 16":"#00000029","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},M2={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #D6D8DD inset;
`},R2={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},vg={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},imageViewer:{flipHorizontallyText:"Flip horizontally",flipVerticallyText:"Flip vertically",rotateLeftText:"Rotate left",rotateRightText:"Rotate right",zoomInText:"Zoom in",zoomOutText:"Zoom out",backwardText:"Back",forwardText:"Forward"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(e,r)=>`Page ${e} of ${r}`,pageSizeSelectLabel:(e,r)=>`Entries ${e} out of ${r}`,itemRangeText:(e,r,i)=>`${e}–${r}  entries out of ${i}`,pageRangeText:e=>`from ${e} ${e===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(e,r,i)=>`${e}–${r} entries out of ${i}`},progressStepper:{renderNextStepName:e=>`Next - ${e}`,stepName:["step","steps"],progressText:(e,r,i)=>`${e} from ${r} ${i}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"},textArea:{copyTextMessage:"Copy text",copiedMessage:"Copied"}},D2={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},imageViewer:{flipHorizontallyText:"Отразить по горизонтали",flipVerticallyText:"Отразить по вертикали",rotateLeftText:"Повернуть влево",rotateRightText:"Повернуть вправо",zoomOutText:"Уменьшить",zoomInText:"Увеличить",backwardText:"Назад",forwardText:"Вперед"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(e,r)=>`Страница ${e} из ${r}`,pageSizeSelectLabel:(e,r)=>`Записей ${e} из ${r}`,itemRangeText:(e,r,i)=>`${e}–${r} записей из ${i}`,pageRangeText:e=>`из ${e} ${e===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(e,r,i)=>`${e}–${r} записей из ${i}`},progressStepper:{renderNextStepName:e=>`Далее - ${e}`,stepName:["шаг","шагов"],progressText:(e,r,i)=>`${e} из ${r} ${i}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"},textArea:{copyTextMessage:"Копировать текст",copiedMessage:"Скопировано"}},en:vg,"en-US":{...vg,firstDayOfWeek:0}},be=B2();function B2(){return{"Main/XXL":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/S":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/XS":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL1":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL2":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL3":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H1":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H2":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H3":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H4":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H5":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H6":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 1":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 2":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 3":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Long":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Short":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Long":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Short":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 1":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 2":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 1":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 2":Q`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `}}const Hs={color:A2,shadow:M2,zIndex:R2,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:D2,typography:be,fontFamily:"'VTB Group UI', sans-serif"};function Pl(e){switch(e.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function qr(e){switch(e.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function bg(e){return e!==null&&!Array.isArray(e)&&typeof e=="object"}const Ss={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let e=0;e<24;e+=1)Ss[112+e]="F"+(e+1);for(let e=0;e<26;e+=1){let r=e+65;Ss[r]=[String.fromCharCode(r+32),String.fromCharCode(r)]}const W={codes:Ss,getCode(e){return bg(e)?e.keyCode||e.which||this[e.key]:this[e]},getKey(e){const r=bg(e);if(r&&e.key)return e.key;let i=Ss[r?e.keyCode||e.which:e];return Array.isArray(i)&&(i=r?i[e.shiftKey?1:0]:i[0]),i},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};W.Spacebar=W[" "],W.Digit0=W[0],W.Digit1=W[1],W.Digit2=W[2],W.Digit3=W[3],W.Digit4=W[4],W.Digit5=W[5],W.Digit6=W[6],W.Digit7=W[7],W.Digit8=W[8],W.Digit9=W[9],W.Tilde=W["~"],W.GraveAccent=W["`"],W.ExclamationPoint=W["!"],W.AtSign=W["@"],W.PoundSign=W["#"],W.PercentSign=W["%"],W.Caret=W["^"],W.Ampersand=W["&"],W.PlusSign=W["+"],W.MinusSign=W["-"],W.EqualsSign=W["="],W.DivisionSign=W["/"],W.MultiplicationSign=W["*"],W.Comma=W[","],W.Decimal=W["."],W.Colon=W[":"],W.Semicolon=W[";"],W.Pipe=W["|"],W.BackSlash=W["\\"],W.QuestionMark=W["?"],W.SingleQuote=W["'"],W.DoubleQuote=W['"'],W.LeftCurlyBrace=W["{"],W.RightCurlyBrace=W["}"],W.LeftParenthesis=W["("],W.RightParenthesis=W[")"],W.LeftAngleBracket=W["<"],W.RightAngleBracket=W[">"],W.LeftSquareBracket=W["["],W.RightSquareBracket=W["]"];var Sg;function Fd(){return Fd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Fd.apply(null,arguments)}var z2=function(e){return v.createElement("svg",Fd({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Sg||(Sg=v.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};function j2(e,r){xo(e,r,"data-container",!0)}function H2(e){const r={};return xo(e,r,"data-dropdown-container",!0),r}function b1(e){const r={};return xo(e,r,"data-menu",!0),r}function xo(e,r,i,o){Object.keys(e).forEach(s=>{typeof s=="string"&&s.startsWith(i)&&(r[s]=e[s],o&&delete e[s])})}const L2=Y(z2)`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${e=>e.$isOpen?180:0}deg);
  & *[fill^='#'] {
    fill: ${({appearance:e,theme:r})=>e==="white"?`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`:`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`};
  }

  &:hover *[fill^='#'] {
    fill: ${e=>e.appearance==="white"?"":`var(--admiral-color-Primary_Primary70, ${e.theme.color["Primary/Primary 70"]})`};
  }

  &[data-loading] {
    pointer-events: none;
  }

  &[data-disabled] {
    pointer-events: none;

    *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Ls=e=>{let r=e;return r=r.replace("box-shadow: ",""),r=r.replace(";",""),r},U2=(e,r)=>{return(i=e,Object.keys(i)).some(o=>e[o]!==r[o]);var i};function S1(e,r){const i={};return{observe(){i.rafId&&cancelAnimationFrame(i.rafId);const o=()=>{if(i.isObserving){const{scrollHeight:s,scrollLeft:f,scrollTop:d,scrollWidth:p}=e,{bottom:m,height:h,left:y,right:b,top:x,width:$,x:S,y:w}=e.getBoundingClientRect(),T={bottom:m,height:h,left:y,right:b,top:x,width:$,x:S||y,y:w||x,scrollHeight:s,scrollLeft:f,scrollTop:d,scrollWidth:p};U2(T,i.rect||{})&&(i.rect=T,r(T)),i.rafId=requestAnimationFrame(o)}};i.rafId=requestAnimationFrame(o),i.isObserving=!0},unobserve(){i.rafId&&cancelAnimationFrame(i.rafId),i.isObserving&&(i.isObserving=!1)}}}var k2=Qv();const P2=Y.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:e})=>e.zIndex.dropdown});
`,Vh=({targetElement:e,rootRef:r,fullContainerWidth:i,...o})=>{const s=v.useRef(null);return v.useEffect(()=>{const f=s.current;if(f&&e){const d=S1(e,p=>{if(p){const{x:m,y:h,height:y,width:b}=p,{style:x}=f;x.top=`${h}px`,x.left=i?"0px":`${m}px`,x.height=`${y}px`,x.width=i?"100%":`${b}px`}});return d.observe(),()=>{d.unobserve()}}},[e,i]),k2.createPortal(_.jsx(P2,{ref:s,...o}),r?.current||document.body)};function q2(e,r){const i=v.useRef(null),o=v.useRef(e);return v.useEffect(()=>{o.current=e},[e]),v.useEffect(()=>(i.current=setInterval(()=>o.current(),r),()=>clearInterval(i.current||0)),[r]),i}function It(...e){return r=>{e.forEach(i=>{i&&(typeof i=="function"?i(r):i.current=r)})}}const Eo=v.createContext({}),F2=({rootRef:e,...r})=>{const[i,o]=v.useState([]),[s,f]=v.useState(void 0),d=v.useCallback(b=>{f(b)},[]),p=v.useCallback(b=>{f(x=>x===b?void 0:x)},[]),m=v.useCallback(b=>{o(x=>{const $=x.indexOf(b);return $>-1?x.slice(0,$):x})},[]),h=v.useCallback(b=>{o(x=>[...x,b])},[]),y=v.useMemo(()=>({addDropdown:h,removeDropdown:m,dropdowns:i,rootRef:e,activateMenu:d,deactivateMenu:p,currentActiveMenu:s}),[h,m,i,e,d,p,s]);return _.jsx(Eo.Provider,{value:y,children:r.children})};function x1(e){const{dropdowns:r=[],addDropdown:i,removeDropdown:o,activateMenu:s,deactivateMenu:f,currentActiveMenu:d}=v.useContext(Eo),p=r.indexOf(e);return{addDropdown:i,removeDropdown:o,dropdowns:p>-1?r.slice(p+1,r.length):[],activateMenu:s,deactivateMenu:f,currentActiveMenu:d}}const V2=(e,r)=>!r.some(i=>i.current&&i.current.contains(e.target)),G2=(e,r,i)=>{const o=e.bottom-e.top+8,s=r.top>=o,f=i-r.bottom>=o,d=r.top>=0&&r.bottom<=i,p=r.bottom<=0,m=r.top>=i,h=r.top<0&&0<r.bottom&&r.bottom<i,y=0<r.top&&r.top<i&&r.bottom>i;if(d){if(!s&&!f)return{upward:!1,translateY:i-r.bottom-o-16+"px"};if(s&&f)return{upward:!1,translateY:"0"};if(!s&&f)return{upward:!1,translateY:"0"};if(s&&!f)return{upward:!0,translateY:"0"}}else{if(p)return{upward:!1,translateY:0-r.bottom+8+"px"};if(m)return{upward:!0,translateY:i-r.top-8+"px"};if(h)return f?{upward:!1,translateY:"0"}:{upward:!1,translateY:0-r.bottom+8+"px"};if(y)return s?{upward:!0,translateY:"0"}:{upward:!0,translateY:""+(i-r.top-8)}}return{upward:!1,translateY:"0"}},Q2=(e,r,i)=>{const o=e.right-e.left,s=r.left>=0&&r.right<=i,f=r.right<=0,d=r.left>=i,p=r.left<0&&0<r.right&&r.right<i,m=r.right>i&&0<r.left&&r.left<i;if(s){const h=i-r.left>=o,y=r.right>=o,b=o>r.width;if(!y&&!h)return{align:"flex-end",translateX:i-r.right-16+"px"};if(y&&h)return{align:"flex-end",translateX:"0"};if(b&&!y&&h)return{align:"flex-start",translateX:"0"};if(b&&!h&&y)return{align:"flex-end",translateX:"0"}}else{if(f||p)return{align:"flex-start",translateX:0-r.left+16+"px"};if(d||m)return{align:"flex-end",translateX:i-r.right-16+"px"}}return{align:"",translateX:"0"}},Y2=Y.div`
  pointer-events: initial;
  margin: 8px 0;
  flex: 0 0 auto;
  ${e=>e.$alignSelf?`align-self: ${e.$alignSelf};`:""};
  max-width: calc(100vw - 32px);
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;

  &:focus-visible {
    border: 2px solid blue;
  }

  ${e=>e.$dropContainerCssMixin}
`,X2=Y.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`,K2=Y(Vh)`
  display: flex;
  flex-direction: ${e=>e.$reverse?"column-reverse":"column"};
  flex-wrap: nowrap;
`,Z2=()=>null,Gh=v.forwardRef(({targetElement:e,onClickOutside:r=Z2,className:i="",alignSelf:o,dropContainerCssMixin:s,...f},d)=>{const p=v.useRef(null),[m,h]=v.useState(!1),{rootRef:y}=v.useContext(Eo);v.useLayoutEffect(()=>{p.current!==document.activeElement&&p?.current?.focus()},[]);const b=v.useCallback(()=>{const S=p.current;if(S&&e){const w=S.getBoundingClientRect(),T=e.getBoundingClientRect(),N=globalThis.innerHeight,A=globalThis.innerWidth,{upward:M,translateY:P}=G2(w,T,N);if(m!==M&&h(M),o&&o!=="auto")S.style.transform=`translateY(${P})`;else{const{align:H,translateX:V}=Q2(w,T,A);S.style.transform=`translate(${V}, ${P})`,S.style.alignSelf=H}}},[m,e]);q2(b,100),v.useEffect(()=>{p.current&&(p.current.style.opacity="1")},[]);const[x,$]=v.useState(!1);return v.useEffect(()=>{function S(){$(!0)}return document.addEventListener("mousedown",S,!0),document.addEventListener("touchstart",S,!0),()=>{document.removeEventListener("mousedown",S,!0),document.removeEventListener("touchstart",S,!0)}},[]),v.useEffect(()=>{function S(w){r(w)}if(x)return document.addEventListener("mouseup",S),document.addEventListener("touchend",S),()=>{document.removeEventListener("mouseup",S),document.removeEventListener("touchend",S)}},[x]),_.jsx(_.Fragment,{children:_.jsxs(K2,{targetElement:e,$reverse:m,rootRef:y,onMouseDown:()=>$(!1),children:[_.jsx(X2,{}),_.jsx(Y2,{ref:It(d,p),...f,className:i+" dropdown-container",$alignSelf:o,$dropContainerCssMixin:s})]})})});Gh.displayName="DropdownContainer";const W2=Y(Gh)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>Ls(e.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${e=>qr(e.theme.shape)});
  overflow: hidden;
  width: max-content;
  background: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
`;W2.displayName="StyledDropdownContainer";function J2(...e){return r=>e.forEach(i=>function(o,s){typeof o=="function"?o(s):o!=null&&(o.current=s)}(i,r))}function Vd(...e){return v.useCallback(J2(...e),e)}function E1(e){return v.forwardRef(e)}const Qh=Q`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,I2=Y.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,ew=Y.div`
  ${Qh}
`,tw=Y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 10px;
`,nw=Y.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10px;
`,aw=Y.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  border-block: 4px solid transparent;
`,rw=Y.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-inline: 4px solid transparent;
`,lw=Y.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,iw=Y.div`
  pointer-events: all;
  position: relative;
  height: 6px;
  border-radius: 6px;
  background-color: ${e=>e.theme.color["Opacity/Neutral 16"]};
  width: var(${"--horizontal-thumb-width"}, 20px);
`,ow=Y.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,uw=Y.div`
  pointer-events: all;
  position: relative;
  width: 6px;
  border-radius: 6px;
  background-color: ${e=>e.theme.color["Opacity/Neutral 16"]};
  height: var(${"--vertical-thumb-height"}, 20px);
`,sw=E1(({children:e,verticalScrollProps:r,horizontalScrollProps:i,minThumbSize:o=20,contentBlockProps:s={},...f},d)=>{const p=v.useMemo(()=>s.id?s.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[s.id]),[m,h]=v.useState(null),y=Vd(s.ref,b=>h(b));return _.jsxs(I2,{ref:d,...f,children:[_.jsx(ew,{...s,id:p,ref:y,children:e}),_.jsx(w1,{contentNode:m,verticalScrollProps:r,horizontalScrollProps:i,minThumbSize:o})]})}),w1=({verticalScrollProps:e={},horizontalScrollProps:r={},contentNode:i,minThumbSize:o=20})=>{const s=v.useMemo(()=>i?.id?i?.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[i?.id]),[f,d]=v.useState(null),[p,m]=v.useState(null),[h,y]=v.useState(null),[b,x]=v.useState(null),[$,S]=v.useState(null),[w,T]=v.useState(null),[N,A]=v.useState(!1),[M,P]=v.useState(!1),[H,V]=v.useState(0),[U,ee]=v.useState(0),[re,ce]=v.useState(0),[$e,Re]=v.useState(0),[De,Ke]=v.useState(0),[Ce,q]=v.useState(0),te=Vd(e.ref,I=>d(I)),le=Vd(r.ref,I=>y(I));return v.useLayoutEffect(()=>{if(i&&$&&w&&f&&h&&p&&b){const{observe:I,unobserve:C}=S1(i,j=>{if(j){const J=function(Tt){const{clientHeight:Ze,scrollHeight:Qt}=Tt;return Qt-Ze>=1}(i),Z=function(Tt){const{clientWidth:Ze,scrollWidth:Qt}=Tt;return Qt-Ze>=1}(i),ae=Math.min(Math.max(0,j.scrollTop),j.scrollHeight-j.height),fe=Math.min(Math.max(0,j.scrollLeft),j.scrollWidth-j.width);i.style.setProperty("--vertical-content-scroll",`${ae}px`),i.style.setProperty("--horizontal-content-scroll",`${fe}px`),f.style.setProperty("display",J?null:"none"),f.style.setProperty("bottom",Z?"10px":null),h.style.setProperty("display",Z?null:"none"),h.style.setProperty("right",J?"10px":null);const oe=function(Tt,Ze){const{clientHeight:Qt,scrollHeight:qt}=Tt,{clientHeight:vt}=Ze;return Math.max(Math.round(Qt*vt/qt),o)}(i,p),Qe=function(Tt,Ze){const{clientWidth:Qt,scrollWidth:qt}=Tt,{clientWidth:vt}=Ze;return Math.max(Math.round(Qt*vt/qt),o)}(i,b);$.style.setProperty("--vertical-thumb-height",`${oe}px`),w.style.setProperty("--horizontal-thumb-width",`${Qe}px`);const{scrollTop:Se,scrollLeft:nt,scrollHeight:Bt,scrollWidth:Ye}=i,{clientHeight:He}=p,{clientWidth:Pt}=b,Qn=Math.round(Math.min(Se/Bt*He,He-oe)),oa=Math.round(Math.min(nt/Ye*Pt,Pt-Qe));$.style.top=`${Qn}px`,w.style.left=`${oa}px`}});return I(),C}},[i,$,w,f,h,p,b]),v.useEffect(()=>{function I(j){j.preventDefault(),j.stopPropagation(),N&&A(!1),M&&P(!1)}function C(j){if(i){if(j.preventDefault(),j.stopPropagation(),N){const{scrollHeight:J,clientHeight:Z}=i,ae=(j.clientY-H)*(J/Z),fe=Math.round(Math.min(re+ae,J-Z));i.scrollTop=fe}if(M){const{scrollWidth:J,clientWidth:Z}=i,ae=(j.clientX-U)*(J/Z),fe=Math.round(Math.min($e+ae,J-Z));i.scrollLeft=fe}}}if(N||M)return document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I)}},[i,N,M,re,$e,H,U]),v.useEffect(()=>{if(i){const{scrollHeight:I,clientHeight:C}=i,j=Math.round(De*I-C/2);i.scrollTo({top:j,behavior:"smooth"})}},[De]),v.useEffect(()=>{if(i){const{scrollWidth:I,clientWidth:C}=i,j=Math.round(Ce*I-C/2);i.scrollTo({left:j,behavior:"smooth"})}},[Ce]),v.useEffect(()=>{document.body.style.setProperty("cursor",N||M?"grabbing":null)},[N,M]),_.jsxs(_.Fragment,{children:[_.jsxs(tw,{...e,ref:te,role:"scrollbar","aria-controls":s,children:[_.jsx(ow,{onClick:function(I){if(I.preventDefault(),I.stopPropagation(),i){const{clientHeight:C}=i,{top:j}=i.getBoundingClientRect();Ke((I.clientY-j)/C)}}}),_.jsx(aw,{ref:I=>m(I),children:_.jsx(uw,{ref:S,onMouseDown:function(I){I.preventDefault(),I.stopPropagation(),V(I.clientY),i&&ce(i.scrollTop),A(!0)},style:{cursor:N?"grabbing":"grab"}})})]}),_.jsxs(nw,{...r,ref:le,role:"scrollbar","aria-controls":s,children:[_.jsx(lw,{onClick:function(I){if(I.preventDefault(),I.stopPropagation(),i){const{clientWidth:C}=i,{left:j}=i.getBoundingClientRect();q((I.clientX-j)/C)}}}),_.jsx(rw,{ref:I=>x(I),children:_.jsx(iw,{ref:T,onMouseDown:function(I){I.preventDefault(),I.stopPropagation(),ee(I.clientX),i&&Re(i.scrollLeft),P(!0)},style:{cursor:M?"grabbing":"grab"}})})]})]})},cw=Q`
  ${({$dimension:e})=>e==="s"?be["Body/Body 2 Long"]:be["Body/Body 1 Long"]}
  ul[data-dimension='s'] & {
    ${be["Body/Body 2 Long"]}
  }
`,fw=Q`
  color: ${({theme:e,$disabled:r})=>r?`var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${e.color["Neutral/Neutral 90"]})`};
`,dw=Q`
  background: ${({theme:e,$selected:r,$preselected:i,$hovered:o})=>o?`var(--admiral-color-Opacity_Hover, ${e.color["Opacity/Hover"]})`:i?`var(--admiral-color-Opacity_Press, ${e.color["Opacity/Press"]})`:r?`var(--admiral-color-Opacity_Focus, ${e.color["Opacity/Focus"]})`:`var(--admiral-color-Special_ElevatedBG, ${e.color["Special/Elevated BG"]})`};
`,hw=Q`
  padding: ${({$dimension:e})=>{switch(e){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}};
  ul[data-dimension='m'] && {
    padding: 8px 16px;
  }
  ul[data-dimension='s'] && {
    padding: 6px 12px;
  }
`;var xg;function Gd(){return Gd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Gd.apply(null,arguments)}var mw=function(e){return v.createElement("svg",Gd({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),xg||(xg=v.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};const pw=Y(mw)`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
  [data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
`,yw=e=>{e.preventDefault(),e.stopPropagation()},Yh=v.forwardRef(({children:e,expandIcon:r=_.jsx(pw,{}),hasSubmenu:i,onHover:o,disabled:s,readOnly:f,hovered:d,dimension:p="l",selected:m=!1,preselected:h=!1,selfRef:y,onMouseDown:b,onLeave:x,containerRef:$,...S},w)=>{const T=s?yw:b,N=y?It(w,y):w;return _.jsxs(gw,{ref:N,$dimension:p,$preselected:h,$selected:m,$hovered:d,"data-preselected":h,"data-hovered":d,"data-disabled":s,"data-readonly":f,"data-dimension":p,onMouseEnter:A=>{o?.(A),S.onMouseEnter?.(A)},onMouseLeave:A=>{x?.(A),S.onMouseLeave?.(A)},onMouseMove:A=>{o?.(A),S.onMouseMove?.(A)},onMouseDown:T,...S,children:[v.Children.toArray(e).map((A,M)=>typeof A=="string"?_.jsx(vw,{children:A},A+M):A),i&&r]})});Yh.displayName="MenuItem";const gw=Y.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  box-sizing: border-box;
  ${hw}
  ${cw}
  ${fw}
  ${dw}

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
    && input[type='checkbox'] + * [fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
    }
  }

  &&[data-readonly='true'] {
    cursor: default;
  }
`,vw=Y.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;function Xh(e){const r=v.useRef();return v.useEffect(()=>{r.current=e}),r.current}const Eg=Y.div`
  display: flex;
  flex: 0 0 auto;
`,bw=({scrollContainerRef:e,itemHeight:r,rowCount:i=6,aheadItemsCount:o=3,model:s,activeId:f,selected:d,onRenderItem:p})=>{const[m,h]=v.useState(0),[y,b]=v.useState({startIndex:0,endIndex:i,topPadding:"",bottomPadding:"",needAddListener:!1}),x=Xh({activeId:f}),$=v.useCallback(T=>{requestAnimationFrame(()=>{T.target&&h(T.target.scrollTop)})},[e]);v.useEffect(()=>{const T=e.current;return h(T?.scrollTop||0),T?.addEventListener("scroll",$),()=>T?.removeEventListener("scroll",$)},[$]),v.useEffect(()=>{y.needAddListener&&(setTimeout(()=>e?.current?.addEventListener("scroll",$)),b({...y,needAddListener:!1}))},[y,e]);const S=v.useCallback(T=>{const N=s.length,A=Math.max(0,T);let M=i+2*o;return M=Math.min(N-A,M),{startIndex:A,endIndex:A+M,topPadding:A*r+"px",bottomPadding:(N-A-M)*r+"px"}},[r,o,s,i]);v.useEffect(()=>{const T=Math.floor(m/r-o),N={...S(T),needAddListener:!1};b(N)},[m,S]),v.useEffect(()=>{if(!f||!x||x.activeId===f)return;const T=s.findIndex(N=>N.id===f);T!==-1&&(T<y.startIndex||T>y.endIndex)&&(e?.current?.removeEventListener("scroll",$),b({...S(T),needAddListener:!0}))},[f,y,S,e]);const w=v.useMemo(()=>[...s].slice(y.startIndex,y.endIndex).map((T,N)=>p?.(T,N)),[s,f,d,y]);return _.jsxs(_.Fragment,{children:[_.jsx(Eg,{style:{minHeight:y.topPadding}}),w,_.jsx(Eg,{style:{minHeight:y.bottomPadding}})]})},$1=(e,r)=>{const i=v.useCallback(o=>{e.every(s=>s.current&&!s.current.contains(o.target))&&r(o)},[r,e]);v.useEffect(()=>(document.addEventListener("mousedown",i,!0),document.addEventListener("touchstart",i),()=>{document.removeEventListener("mousedown",i,!0),document.removeEventListener("touchstart",i)}),[i])},Sw=(e,r)=>{let i,o=!1,s=!1;return[(...f)=>{if(s||o)return;const d=e(...f);return o=!0,i=setTimeout(()=>{o=!1},r),d},()=>{s=!0,clearTimeout(i)}]};function xw(e,r,i){const o=e.getBoundingClientRect(),s=r.getBoundingClientRect(),f=document.documentElement.clientWidth-o.right>s.width,d=o.left>s.width,p=i==="right"?!f&&d?"left":"right":!d&&f?"right":"left";return document.documentElement.clientHeight-o.top>s.height-1?{position:`${p}Bottom`}:{position:p,bottomOffset:8-(document.documentElement.clientHeight-o.top-s.height)}}const N1=(e,r)=>{for(let i=0;i<e.length;i++){const o=e[i];if(o.id===r)return o;if(o.subItems&&o.subItems.length>0){const s=N1(o.subItems,r);if(s)return s}}},_1=(e,r)=>!!e.subItems&&e.subItems.some(i=>r.includes(i.id)||_1(i,r)),wg=e=>Array.isArray(e)?[...e]:[e],Ew=Y.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`,ww=Y(Vh)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:e})=>e?`flex-direction: ${e};`:"flex-direction: column;"}
`,$w=Y.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,Nw=Y.div`
  position: relative;
  align-self: flex-start;
`,_w=Y.div`
  background-color: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>Ls(e.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${e=>qr(e.theme.shape)});
  overflow: hidden;
  box-sizing: border-box;
`,C1=({targetElement:e,children:r,onClickOutside:i,defaultRenderDirection:o="right",...s})=>{const{rootRef:f}=v.useContext(Eo),d=v.useRef(null),[p,m]=v.useState(null),[h,y]=v.useState("row");v.useLayoutEffect(()=>{const[S,w]=Sw(()=>{m({})},100);return addEventListener("resize",S),addEventListener("scroll",S),()=>{removeEventListener("resize",S),removeEventListener("scroll",S),w()}});const{addDropdown:b,removeDropdown:x,dropdowns:$}=x1(d);return v.useLayoutEffect(()=>(b?.(d),()=>{x?.(d)}),[]),$1([d],S=>{e&&!e.contains(S.target)&&V2(S,$)&&i?.(S)}),v.useLayoutEffect(()=>{const S=d.current;if(e&&S){const{position:w,bottomOffset:T=0}=xw(e,S,o);switch(w){case"right":y("row"),S.style.bottom=`${T}px`;break;case"left":y("row-reverse"),S.style.bottom=`${T}px`;break;case"rightBottom":default:y("row"),S.style.bottom="8px";break;case"leftBottom":y("row-reverse"),S.style.bottom="8px"}}},[e,p]),e&&_.jsx(Ew,{children:_.jsxs(ww,{targetElement:e,rootRef:f,$flexDirection:h,fullContainerWidth:!1,children:[_.jsx($w,{}),_.jsx(Nw,{ref:d,...s,children:_.jsx(_w,{children:r})})]})})};C1.displayName="SubMenu";const T1=e=>{switch(e){case"l":default:return 48;case"m":return 40;case"s":return 32}},Cw=Q`
  max-height: ${({$dimension:e,$rowCount:r})=>{return`min(calc(100vh - 16px), ${i=r,o=e,T1(o)*i+16}px)`;var i,o}};
`,Tw=Y.div`
  overflow: hidden;
  position: relative;

  padding: 0;
  ${e=>e.$hasTopPanel?"padding-top: 8px":""};
  ${e=>e.$hasBottomPanel?"padding-bottom: 8px":""};
  box-sizing: border-box;
  display: flex;

  flex-direction: column;
  align-items: stretch;
  pointer-events: initial;
  background-color: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
  max-width: calc(100vw - 32px);
  border-color: transparent;
  &:focus-visible {
    border: 0;
    outline: none;
  }
`,Ow=Y(sw)`
  position: relative;
  ${e=>e.$hasTopPanel?"":"padding-top: 8px"};
  ${e=>e.$hasBottomPanel?"":"padding-bottom: 8px"};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  box-sizing: border-box;
  ${Cw};
  ${e=>e.$maxHeight?`max-height: ${e.$maxHeight}`:""};
`,Kh=v.forwardRef(({model:e,defaultSelected:r,selected:i,preselected:o,active:s,onPreselectItem:f,onSelectItem:d,onDeselectItem:p,onActivateItem:m,renderTopPanel:h,renderBottomPanel:y,dimension:b="l",multiSelection:x=!1,disableSelectedOptionHighlight:$=!1,onForwardCycleApprove:S,onBackwardCycleApprove:w,containerRef:T,virtualScroll:N,rowCount:A=6,parentMenuRef:M,onCloseQuery:P,defaultIsActive:H=!0,subMenuRenderDirection:V,preventFocusSteal:U,maxHeight:ee,preselectedModeActive:re=!1,onMenuKeyDown:ce,disableSelectionOnSpace:$e,disableSelectionOnEnter:Re,...De},Ke)=>{const Ce=ue=>{const ge=ue?e.findIndex(at=>at.id===ue):-1;let ye=ge<e.length-1?ge+1:0,Pe=!1;for(;(e[ye].disabled||e[ye].readOnly)&&!Pe;)ye=ye<e.length-1?ye+1:0,Pe=ge===-1?ye===0:ye===ge;return ye=!(ge>-1&&ye<ge)||!S||S()?ye:ge,e[ye].disabled||e[ye].readOnly?void 0:e[ye].id},q=e.length>0?Ce():void 0,[te,le]=v.useState(r?wg(r):[]),[I,C]=v.useState(q),[j,J]=v.useState(q),Z=v.useRef(null),ae=v.useRef(null),[fe,oe]=v.useState(null),[Qe,Se]=v.useState(!1),nt=v.useRef();v.useEffect(()=>{C(q)},[e]);const Bt=$?[]:i===void 0?te:wg(i),Ye=s===void 0?I:s,He=re?o===void 0?j:o:void 0,Pt=v.useRef(null),Qn=v.useRef(null),oa=!!h,Tt=!!y,Ze=ue=>{Ye!==ue&&C(ue),m?.(ue)},Qt=ue=>{He!==ue&&J(ue),f?.(ue)},qt=ue=>{const ge=N1(e,ue);if(ge&&!ge.disabled&&!ge.readOnly){const ye=te.findIndex(Pe=>Pe===ue);x?ye>-1?(le(te.splice(ye,1)),p?.(ue)):(le([...te,ue]),d?.(ue)):(ye===-1&&le([ue]),d?.(ue))}},{currentActiveMenu:vt,activateMenu:mn,deactivateMenu:sr}=x1(Z);v.useEffect(()=>{function ue(ge){if(vt?.current===Z.current)switch(W.getCode(ge)){case W[" "]:if($e)break;re&&He?qt(He):Ye&&qt(Ye),ge.preventDefault();break;case W.Enter:if(Re)break;re&&He?qt(He):Ye&&qt(Ye),ge.preventDefault();break;case W.ArrowDown:{const ye=Ce(re&&He||Ye);re?Qt(ye):Ze(ye),ge.preventDefault();break}case W.ArrowUp:{const ye=(Pe=>{const at=Pe?e.findIndex(Ae=>Ae.id===Pe):-1;let Le=at>0?at-1:e.length-1,en=!1;for(;(e[Le].disabled||e[Le].readOnly)&&!en;)Le=Le>0?Le-1:e.length-1,en=at===-1?Le===0:Le===at;return Le=at>-1&&Le>at&&w&&!w()?at:Le,e[Le].disabled||e[Le].readOnly?void 0:e[Le].id})(re&&He||Ye);re?Qt(ye):Ze(ye),ge.preventDefault();break}case W.ArrowRight:{const ye=re&&He||Ye,Pe=e.find(at=>at.id===ye);!Pe||Pe.disabled||Pe.readOnly||!Pe.subItems||Qe||Se(!0),ae&&ae.current&&mn?.(ae);break}case W.ArrowLeft:M&&M.current&&P?.();break;default:ce?.(ge)}}return document.addEventListener("keydown",ue),()=>{document.removeEventListener("keydown",ue)}},[s,Ye,I,vt,He,$e,Re]),v.useEffect(()=>(H&&mn?.(Z),()=>{H&&vt===Z&&sr?.(Z)}),[H]);const Qr=()=>{Se(!1),mn?.(Z)},Ie=(ue,ge)=>{const{id:ye,subItems:Pe,render:at,...Le}=ue,en=!!Pe&&Pe.length>0,Ae=Ye===ye,tn=Bt.includes(ye)||_1(ue,Bt),nn={hovered:Ae,preselected:He!==void 0?He===ye:void 0,selected:tn,onLeave:pn=>{const yn=pn.relatedTarget;yn&&Object.hasOwn(yn,"nodeName")&&!ae.current?.contains(yn)&&!Qn.current?.contains(yn)&&Se(!1)},onHover:pn=>{Ze(ye),Se(en),oe(pn.currentTarget)},onMouseDown:U?pn=>pn.preventDefault():void 0,onClick:()=>qt(ye),hasSubmenu:en,disabled:Le.disabled,...Le};return typeof at=="function"?at({containerRef:T,...nn}):_.jsx(Yh,{...nn,children:at},`${ue.id}-${ge}`)},cr=v.useRef(),Yn=v.useRef(),wt=v.useRef(),et=v.useRef();v.useLayoutEffect(()=>{setTimeout(()=>{let ue;if(s&&cr.current!==s||Yn.current!==I?ue=Pt.current?.querySelector('[data-hovered="true"]'):(o&&wt.current!==o||et.current!==j)&&(ue=Pt.current?.querySelector('[data-preselected="true"]')),ue){const ge=Date.now(),ye=nt.current;ue?.scrollIntoView({behavior:!ye||ge-ye<150?"auto":"smooth",inline:"center",block:"nearest"}),nt.current=ge,cr.current=s,Yn.current=I,wt.current=o,et.current=j}},0)},[s,I,o,j,e]);const dt=b1(De);return v.useEffect(()=>{if(!fe||!Pt.current)return;const ue={root:Pt.current,rootMargin:"0px",threshold:.5},ge=new IntersectionObserver(ye=>{ye.forEach(Pe=>{Se(!(Pe.intersectionRatio<ue.threshold))})},ue);return ge.observe(fe),()=>ge.disconnect()},[fe]),_.jsxs(Tw,{ref:It(Z,Ke),$dimension:b,$hasTopPanel:oa,$hasBottomPanel:Tt,onMouseEnter:ue=>{vt!==Z&&mn?.(Z),De.onMouseEnter?.(ue)},onMouseLeave:ue=>{Ze(void 0),De.onMouseLeave?.(ue)},onFocus:ue=>{vt!==Z&&mn?.(Z),De.onFocus?.(ue)},onBlur:ue=>{vt===Z&&sr?.(Z),De.onBlur?.(ue)},...De,children:[oa&&h({dimension:b}),_.jsx(Ow,{$dimension:b,$rowCount:A,$hasTopPanel:oa,$hasBottomPanel:Tt,$maxHeight:ee,...dt,verticalScrollProps:{ref:Qn},contentBlockProps:{ref:Pt},children:N?(()=>{if(!N)return null;const ue=N.itemHeight==="auto"?T1(b):N.itemHeight;return _.jsx(bw,{scrollContainerRef:Pt,itemHeight:ue,model:e,rowCount:A,activeId:Ye,selected:Bt,onRenderItem:Ie})})():e.map((ue,ge)=>Ie({dimension:b,...ue},ge))}),Qe&&fe&&_.jsx(C1,{targetElement:fe,defaultRenderDirection:V,onClickOutside:M?void 0:()=>{Se(!1)},children:(()=>{const ue=e.find(ge=>ge.id===Ye);return ue&&ue.subItems&&ue.subItems.length>0&&_.jsx(Kh,{ref:ae,dimension:b,parentMenuRef:Z,model:ue.subItems,subMenuRenderDirection:V,onCloseQuery:Qr,selected:Bt,onSelectItem:ge=>qt(ge),virtualScroll:N,preventFocusSteal:!0})})()}),Tt&&y({dimension:b})]})});Kh.displayName="Menu";var $g;function Qd(){return Qd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Qd.apply(null,arguments)}var wo=function(e){return v.createElement("svg",Qd({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),$g||($g=v.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};function co(e){switch(e){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function O1(e){switch(e){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function Ng(e){return co(e)+2*O1(e)}const Aw=Q`
  & *[fill^='#'] {
    fill: ${e=>{switch(e.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${e.theme.color["Neutral/Neutral 50"]})`;default:return e.$iconColor}}};
  }
`,Mw=Y.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${Aw}

  & > svg {
    height: ${e=>co(e.$dimension)}px;
    width: ${e=>co(e.$dimension)}px;
  }
`,no=Y.div`
  width: ${e=>Ng(e.$dimension)}px;
  height: ${e=>Ng(e.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,Rw=Q`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${no} {
      background-color: ${e=>e.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${e.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${no} {
      background-color: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${no} {
      background-color: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${no} {
      background-color: transparent;
    }
  }
`,Dw=Y.button`
  position: relative;
  padding: 0;
  margin: ${e=>O1(e.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${e=>co(e.$dimension)}px;
  width: ${e=>co(e.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${e=>Pl(e.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
  &:not(:disabled) {
    ${Rw}
  }
`,Bw=v.forwardRef(({type:e="button",dimension:r="lBig",disabled:i=!1,highlightFocus:o=!0,appearance:s,children:f,...d},p)=>{const m=typeof s=="object"?s.iconColor?s.iconColor:"secondary":s;return _.jsxs(Dw,{ref:p,type:e,$dimension:r,disabled:i,$highlightFocus:o,...d,children:[_.jsx(no,{$dimension:r,"aria-hidden":!0}),_.jsx(Mw,{$dimension:r,$iconColor:m,"aria-hidden":!0,children:f})]})}),zw=v.forwardRef(({className:e,...r},i)=>_.jsx(Bw,{ref:i,className:`close-button ${e||""}`,...r,children:_.jsx(wo,{"aria-hidden":!0})}));var _g,Cg,Tg,Og,Ag,Mg;function Yd(){return Yd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Yd.apply(null,arguments)}var jw=function(e){return v.createElement("svg",Yd({xmlns:"http://www.w3.org/2000/svg",fill:"none"},e),_g||(_g=v.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),Cg||(Cg=v.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),Tg||(Tg=v.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),Og||(Og=v.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),Ag||(Ag=v.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),Mg||(Mg=v.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))};const Hw=v1`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,A1=Y(jw)`
  animation: ${Hw} 1s linear infinite;
  path {
    fill: ${({$inverse:e,theme:r})=>e?`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`};
  }
  width: 100%;
  height: 100%;
`,Lw=e=>v1`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, ${e.theme.color["Neutral/Neutral 20"]});
    border-color: var(--admiral-color-Neutral_Neutral20, ${e.theme.color["Neutral/Neutral 20"]});
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
  }
`,M1=Q`
  animation: ${e=>Lw(e)} 2s ease infinite;
`,Uw=()=>{let e=0;const r=document.createElement("div");return r.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,r.style.overflow="scroll",r.style.fontSize="14px",r.style.height="50px",r.style.maxHeight="50px",r.style.width="100px",r.style.position="absolute",r.style.top="-100000px",r.style.left="-100000px",document.body.appendChild(r),e=r.offsetWidth-r.clientWidth,document.body.removeChild(r),e||16},kw=Y.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,Pw=Y.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${e=>e.theme.color["Neutral/Neutral 80"]});
  ${e=>e.$dimension==="m"?be["Body/Body 2 Short"]:be["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${e=>Pl(e.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${e=>Ls(e.theme.shadow["Shadow 04"])});
  padding: ${e=>e.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,qw=Y.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,Fw=Y(Vh)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:e})=>e?`flex-direction: ${e};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:e})=>e.zIndex.tooltip});
`;function Vw(e,r,i,o){const s=e.getBoundingClientRect(),f=r.getBoundingClientRect(),d=Object.entries(function(h){return{bottom:{check:(y,b)=>{const x=globalThis.innerHeight-y.bottom-h>8+b.height,$=y.left+y.width/2>b.width/2,S=globalThis.innerWidth-y.right-h+y.width/2>b.width/2;return x&&$&&S}},top:{check:(y,b)=>{const x=y.top>8+b.height,$=y.left+y.width/2>b.width/2,S=globalThis.innerWidth-y.right-h+y.width/2>b.width/2;return x&&$&&S}},left:{check:(y,b)=>{const x=y.left>8+b.width,$=y.top>(b.height-y.height)/2,S=globalThis.innerHeight-y.bottom-h>(b.height-y.height)/2;return x&&S&&$}},right:{check:(y,b)=>{const x=globalThis.innerWidth-y.right-h>8+b.width,$=y.top>(b.height-y.height)/2,S=globalThis.innerHeight-y.bottom-h>(b.height-y.height)/2;return x&&S&&$}},bottomRight:{check:(y,b)=>{const x=globalThis.innerHeight-y.bottom-h>8+b.height,$=globalThis.innerWidth-y.left-h>b.width;return x&&$}},bottomLeft:{check:(y,b)=>{const x=globalThis.innerHeight-y.bottom-h>8+b.height,$=y.right>b.width;return x&&$}},topRight:{check:(y,b)=>{const x=y.top>8+b.height,$=globalThis.innerWidth-y.left-h>b.width;return x&&$}},topLeft:{check:(y,b)=>{const x=y.top>8+b.height,$=y.right>b.width;return x&&$}},leftBottom:{check:(y,b)=>{const x=y.left>8+b.width,$=globalThis.innerHeight-y.top-h>b.height;return x&&$}},leftTop:{check:(y,b)=>{const x=y.left>8+b.width,$=y.bottom>b.height;return x&&$}},rightBottom:{check:(y,b)=>{const x=globalThis.innerWidth-y.right-h>8+b.width,$=globalThis.innerHeight-y.top-h>b.height;return x&&$}},rightTop:{check:(y,b)=>{const x=globalThis.innerWidth-y.right-h>8+b.width,$=y.bottom>b.height;return x&&$}},bottomPageCenter:{check:(y,b)=>{const x=globalThis.innerHeight-y.bottom-h>8+b.height,$=globalThis.innerWidth-h>=b.width;return x&&$}},topPageCenter:{check:(y,b)=>{const x=y.top>8+b.height,$=globalThis.innerWidth-h>=b.width;return x&&$}}}}(i)),p=o?d.filter(h=>h[0].includes(o)&&h[1].check(s,f)):d.filter(h=>h[1].check(s,f)),m=o||"bottom";return p.length?p[0][0]:m}const Gw=1500,Fr=v.forwardRef(({dimension:e="m",renderContent:r,targetElement:i,tooltipPosition:o,...s},f)=>{const d=v.useRef(null),p=v.useRef(0),{rootRef:m}=v.useContext(Eo),h=v.useMemo(()=>!r()&&r()!==0,[r]),[y,b]=v.useState(),[x,$]=v.useState(!1),[S,w]=v.useState({});return v.useEffect(()=>{(T=>{const N=i;if(N&&d.current){const A=Vw(N,d.current,T,o),M=d.current;switch(A){case"leftBottom":case"leftTop":case"left":b("row-reverse"),$(!1),M.style.margin="0 8px 0 0",M.style.alignSelf=A==="leftBottom"?"flex-start":A==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":b("row"),$(!1),M.style.margin="0 0 0 8px",M.style.alignSelf=A==="rightBottom"?"flex-start":A==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":b("column-reverse"),$(A==="topPageCenter"),M.style.margin="0 0 8px 0",M.style.alignSelf=A==="topLeft"?"flex-end":A==="topRight"?"flex-start":"center";break;default:b("column"),$(A==="bottomPageCenter"),M.style.margin="8px 0 0 0",M.style.alignSelf=A==="bottomLeft"?"flex-end":A==="bottomRight"?"flex-start":"center"}}})(Uw())},[r(),i,o,S]),v.useLayoutEffect(()=>{if(d.current&&!h){const T=new ResizeObserver(N=>{N.forEach(A=>{p.current===0?p.current=A.contentRect.height:w({})})});return T.observe(d.current),()=>{T.disconnect()}}},[h]),v.useEffect(()=>{d.current&&!h&&(d.current.style.opacity="1")},[h]),h?null:_.jsxs(Fw,{targetElement:i,rootRef:m,$flexDirection:y,fullContainerWidth:x,children:[_.jsx(qw,{}),_.jsx(kw,{ref:It(f,d),children:_.jsx(Pw,{role:"tooltip",$dimension:e,...s,children:r()})})]})});Fr.displayName="Tooltip";function Qw(e){return E1((r,i)=>{const{renderContent:o,container:s,withDelay:f,tooltipRef:d,tooltipPosition:p,tooltipDimension:m,...h}=r,y=!o()&&o()!==0,b=v.useRef(null),[x,$]=v.useState(!1),[S,w]=v.useState(null),[T,N]=v.useState();return v.useEffect(()=>{function A(){N(setTimeout(()=>$(!0),f?Gw:0))}function M(){clearTimeout(T),$(!1)}if(S)return S.addEventListener("mouseenter",A),S.addEventListener("focus",A),S.addEventListener("mouseleave",M),S.addEventListener("blur",M),()=>{T&&clearTimeout(T),S.removeEventListener("mouseenter",A),S.removeEventListener("focus",A),S.removeEventListener("mouseleave",M),S.removeEventListener("blur",M)}},[S,N,$,T]),_.jsxs(_.Fragment,{children:[_.jsx(e,{...h,ref:It(i,b,w)}),x&&!y&&_.jsx(Fr,{targetElement:b.current,renderContent:o,container:s,tooltipPosition:p,dimension:m,ref:d})]})})}const Yw=Q`
  background: ${({$appearance:e,theme:r})=>{switch(e){case"info":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"warning":return`var(--admiral-color-Warning_Warning50Main, ${r.color["Warning/Warning 50 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`;case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"grey":return`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral80, ${r.color["Neutral/Neutral 80"]})`;case"whiteBlue":return`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`;case"white":case"whiteInactive":case"whiteDisable":return`var(--admiral-color-Neutral_Neutral00, ${r.color["Neutral/Neutral 00"]})`;default:return`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`}}};
`,Xw=Q`
  color: ${({$appearance:e,theme:r})=>{switch(e){case"info":case"warning":case"success":case"error":case"grey":return`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral00, ${r.color["Neutral/Neutral 00"]})`;case"whiteBlue":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"lightInactive":case"whiteInactive":return`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`;case"whiteDisable":case"lightDisable":return`var(--admiral-color-Neutral_Neutral30, ${r.color["Neutral/Neutral 30"]})`;default:return`var(--admiral-color-Neutral_Neutral90, ${r.color["Neutral/Neutral 90"]})`}}};
`,Kw=Y.div`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({$dimension:e})=>e==="s"?"0 5px":"0 6px"};
  height: ${({$dimension:e})=>e==="s"?"16px":"20px"};
  border-radius: ${({$dimension:e})=>e==="s"?"8px":"10px"};
  ${({$dimension:e})=>e==="s"?be["Caption/Caption 1"]:be["Body/Body 2 Long"]}
  ${Yw}
  ${Xw}
  user-select: none;
`,Zh=v.forwardRef(({children:e,dimension:r="m",appearance:i="light",locale:o,...s},f)=>{const d=Fh()||Hs,p=o?.amountAriaLabel||d.locales[d.currentLocale].badge.amountAriaLabel;return _.jsx(Kw,{ref:f,$dimension:r,$appearance:i,"aria-label":`${p} ${e}`,...s,children:e})});Zh.displayName="Badge";Y(Zh)`
  &:is(input:checked + div *) {
    background: ${e=>e.$disabled?`var(--admiral-color-Neutral_Neutral00, ${e.theme.color["Neutral/Neutral 00"]})`:`var(--admiral-color-Special_StaticWhite, ${e.theme.color["Special/Static White"]})`};
    color: ${e=>e.$disabled?`var(--admiral-color-Neutral_Neutral30, ${e.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`};
  }
`;const Rg=Q`
  background-color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
    border-color: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Primary_Primary80, ${e=>e.theme.color["Primary/Primary 80"]});
    border-color: var(--admiral-color-Primary_Primary80, ${e=>e.theme.color["Primary/Primary 80"]});
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Dg=Q`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    &:not(.button-group > button) {
      border-color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Bg=Q`
  background-color: var(--admiral-color-Opacity_Neutral8, ${e=>e.theme.color["Opacity/Neutral 8"]});
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Neutral12, ${e=>e.theme.color["Opacity/Neutral 12"]});
    color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Neutral16, ${e=>e.theme.color["Opacity/Neutral 16"]});
    color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Opacity_Neutral8, ${e=>e.theme.color["Opacity/Neutral 8"]});
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Zw=Q`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Ww=Q`
  background-color: transparent;
  color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(
      --admiral-color-Opacity_DarkStaticHover,
      ${e=>e.theme.color["Opacity/Dark Static Hover"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    }
  }

  &&&:active {
    background-color: var(
      --admiral-color-Opacity_DarkStaticPress,
      ${e=>e.theme.color["Opacity/Dark Static Press"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    border-color: var(
      --admiral-color-Special_DarkStaticNeutral30,
      ${e=>e.theme.color["Special/Dark Static Neutral 30"]}
    );
    color: var(--admiral-color-Special_DarkStaticNeutral30, ${e=>e.theme.color["Special/Dark Static Neutral 30"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral30, ${e=>e.theme.color["Special/Dark Static Neutral 30"]});
    }
  }
`,Jw=Q`
  background-color: var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Error_Error70, ${e=>e.theme.color["Error/Error 70"]});
    border-color: var(--admiral-color-Error_Error70, ${e=>e.theme.color["Error/Error 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Error_Error80, ${e=>e.theme.color["Error/Error 80"]});
    border-color: var(--admiral-color-Error_Error80, ${e=>e.theme.color["Error/Error 80"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Iw=Q`
  background-color: var(--admiral-color-Success_Success50Main, ${e=>e.theme.color["Success/Success 50 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Success_Success50Main, ${e=>e.theme.color["Success/Success 50 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Success_Success60, ${e=>e.theme.color["Success/Success 60"]});
    border-color: var(--admiral-color-Success_Success60, ${e=>e.theme.color["Success/Success 60"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Success_Success70, ${e=>e.theme.color["Success/Success 70"]});
    border-color: var(--admiral-color-Success_Success70, ${e=>e.theme.color["Success/Success 70"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,e$=Q`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,t$=Q`
  &[data-appearance~='primary']:not(.button-group > button) {
    ${Rg}
  }
  &[data-appearance~='secondary']:not(.button-group > button) {
    ${Dg}
  }
  &[data-appearance~='tertiary']:not(.button-group > button) {
    ${Bg}
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    ${Zw}
  }
  &[data-appearance~='white']:not(.button-group > button) {
    ${Ww}
  }
  &[data-appearance~='danger']:not(.button-group > button) {
    ${Jw}
  }
  &[data-appearance~='success']:not(.button-group > button) {
    ${Iw}
  }
  &:is(.button-group[data-appearance='primary'] > button) {
    ${Rg}
  }
  &:is(.button-group[data-appearance='secondary'] > button) {
    ${Dg}
  }
  &:is(.button-group[data-appearance='tertiary'] > button) {
    ${Bg}
  }

  ${e$}
`,ql=Y.div``;function rr(e){switch(e){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}Q`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${rr("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${rr("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${rr("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${rr("s")}px;`}
  }
`;Q`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${rr("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${rr("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${rr("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${rr("s")}px;`}
  }
`;const zg=Q`
  padding: 0;
  height: 56px;
  ${e=>e.$displayAsSquare?"width: 56px;":"padding: 0 29px;"}
  ${ql} {
    width: 24px;
    height: 24px;
  }

  ${be["Button/Button 1"]}
`,n$=Q`
  ${zg}

  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${zg}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    height: 48px;
    ${e=>e.$displayAsSquare?"width: 48px;":"padding: 0 21px;"}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    height: 40px;
    ${e=>e.$displayAsSquare?"width: 40px;":"padding: 0 17px;"}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    height: 32px;
    ${e=>e.$displayAsSquare?"width: 32px;":"padding: 0 13px;"}
    ${ql} {
      width: 20px;
      height: 20px;
    }
    ${be["Button/Button 2"]}
  }
`,R1=Y.div`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - ${e=>e.$addPadding}px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${ql} {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  .button-group[data-dimension='m'] &&,
  .button-group[data-dimension='l'] &&,
  .button-group[data-dimension='xl'] && {
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  .button-group[data-dimension='s'] &&,
  [data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`,a$=Y(ql)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
  .button-group[data-appearance='primary'] & {
    & path {
      fill: ${e=>`var(--admiral-color-Special_StaticWhite, ${e.theme.color["Special/Static White"]})`};
    }
  }
  .button-group[data-appearance='secondary'] &,
  .button-group[data-appearance='tertiary'] & {
    & path {
      fill: ${e=>`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`};
    }
  }
`,jg=Y.div`
  display: inline-block;
  width: 2px;
`,D1=v.forwardRef(({appearance:e="primary",dimension:r="xl",type:i="button",loading:o=!1,skeleton:s=!1,iconStart:f,iconEnd:d,icon:p,iconPlace:m="left",children:h,buttonCssMixin:y,displayAsDisabled:b,displayAsSquare:x,...$},S)=>{const w=!!f||!!p&&m==="left",T=!!d||!!p&&m==="right",N=(x||w?0:2)+(x||T?0:2);return _.jsxs(r$,{ref:S,$appearance:e,$dimension:r,type:i,$loading:o,$skeleton:s,$buttonCssMixin:y,$displayAsSquare:x,$displayAsDisabled:b,...$,children:[o&&_.jsx(a$,{children:_.jsx(A1,{$inverse:e!=="secondary"&&e!=="tertiary"&&e!=="ghost"})}),!x&&!w&&_.jsx(jg,{}),_.jsxs(R1,{$addPadding:N,children:[w?_.jsx(ql,{children:f||p}):null,v.Children.toArray(h).map((A,M)=>typeof A=="string"?_.jsx("div",{children:A},A+M):A),T?_.jsx(ql,{children:d||p}):null]}),!x&&!T&&_.jsx(jg,{})]})}),r$=Y.button.attrs(e=>({"data-dimension":e.$dimension,"data-appearance":[e.$appearance,e.$displayAsDisabled?"disabled":void 0].filter(r=>r!==void 0).join(" ")}))`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${e=>e.$skeleton?0:`var(--admiral-border-radius-Medium, ${qr(e.theme.shape)})`};
  appearance: none;
  vertical-align: middle;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  ${e=>(e.$loading||e.$skeleton)&&"pointer-events: none"};

  ${t$};
  ${n$};
  ${e=>e.$buttonCssMixin};
  ${({$skeleton:e})=>e&&M1};

  ${R1} {
    ${e=>e.$loading||e.$skeleton?"visibility: hidden;":""}
  }
`;D1.displayName="Button";var Hg;function Xd(){return Xd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Xd.apply(null,arguments)}var l$=function(e){return v.createElement("svg",Xd({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},e),Hg||(Hg=v.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))},Lg;function Kd(){return Kd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Kd.apply(null,arguments)}var i$=function(e){return v.createElement("svg",Kd({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},e),Lg||(Lg=v.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))};const o$=Q`
  width: ${({$dimension:e})=>{switch(e){case"m":default:return"20px";case"s":return"16px"}}};

  fieldset[data-dimension='s'] & {
    width: 16px;
  }
`,u$=Q`
  height: ${({$dimension:e})=>{switch(e){case"m":default:return"20px";case"s":return"16px"}}};
  fieldset[data-dimension='s'] & {
    height: 16px;
  }
`,s$=Y(l$)`
  pointer-events: none;
`,c$=Y(i$)`
  pointer-events: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }
`,f$=Y.div`
  position: relative;
  box-sizing: border-box;
  cursor: ${e=>e.$disabled?"not-allowed":e.$readOnly?"default":"pointer"};

  overflow: visible;
  ${o$};
  ${u$};
  flex: 0 0 auto; // при вставке во flex контейнер не должны изменяться размеры
`,zr=Y.div`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--admiral-border-radius-Small, ${e=>Pl(e.theme.shape)});
  outline: 0;
  transition: background-color 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  border: 1px solid
    ${({$error:e,theme:r})=>e?`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`};
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }
`,B1=Q`
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
`,Ug=Q`
  &:not(:disabled) {
    &::after {
      ${B1};
      background-color: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
    }
  }
`,d$=Q`
  &:not(:disabled) {
    &::after {
      ${B1};
      background-color: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
    }
  }
`,kg=Q`
  pointer-events: none;
  & + ${zr} {
    border: 1px solid var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
  }
`,Zd=Q`
  background-color: var(--admiral-color-Primary_Primary30, ${e=>e.theme.color["Primary/Primary 30"]});
  border: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  }
`,z1=Q`
  background-color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  border: none;
`,h$=Q`
  & + ${zr} {
    ${z1}
  }
`,j1=Q`
  & + ${zr} {
    ${Zd}
  }
`,m$=Q`
  ${e=>e.readOnly?j1:h$}
`,p$=Y.input`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: var(--admiral-border-radius-Small, ${e=>Pl(e.theme.shape)});
  margin: 0;
  padding: 0;

  ${e=>e.readOnly&&kg}

  &:checked + ${zr} {
    ${e=>e.readOnly?Zd:z1}
  }
  &:checked:disabled + ${zr} {
    ${Zd}
  }

  ${e=>e.$indeterminate&&m$}

  &:not(:checked) + ${zr} {
    > * {
      display: ${e=>e.$indeterminate?"block":"none"};
    }
  }

  &:disabled {
    cursor: not-allowed;
    ${kg}
    ${e=>e.$indeterminate&&j1}
  }

  ${e=>!e.readOnly&&e.$hovered&&Ug}

  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${Ug}

  &:active:not(:disabled) {
    ${d$}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,H1=v.forwardRef(({className:e,dimension:r="m",disabled:i,readOnly:o,hovered:s,indeterminate:f,error:d,...p},m)=>_.jsxs(f$,{$dimension:r,$disabled:i,$readOnly:o,className:e,children:[_.jsx(p$,{ref:m,disabled:i,readOnly:o,...p,type:"checkbox",$indeterminate:f,onKeyDown:h=>{o&&W.getCode(h)===W[" "]&&h.preventDefault(),p.onKeyDown?.(h)},"data-hovered":s,$hovered:s}),_.jsx(zr,{$error:d,children:_.jsx(f?c$:s$,{"aria-hidden":"true",focusable:"false"})})]}));H1.displayName="Checkbox";function L1(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}const y$=Q`
  height: ${({$dimension:e})=>{switch(e){case"xl":return"56px";case"s":return"32px";default:return"40px"}}};
`,U1=Q`
  ${M1}
  & > * {
    visibility: hidden;
  }
`,k1=Y.div`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${e=>e.$skeleton?0:`var(--admiral-border-radius-Medium, ${qr(e.theme.shape)})`};

  pointer-events: ${e=>e.$skeleton?"none":"all"};
  ${({$skeleton:e})=>e&&U1};
`,g$=Y(k1)`
  ${y$};
`;function Wd(e,r){return e.value!==r.value||e.selectionStart!==r.selectionStart||e.selectionEnd!==r.selectionEnd}function hn(e,r){const{value:i=e.value,selectionStart:o,selectionEnd:s}=r;if(Wd(e,{value:i,selectionStart:o,selectionEnd:s})){const f=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value")?.set;let d;f?.call(e,i),typeof o=="number"&&typeof s=="number"&&e.setSelectionRange(o,s),typeof Event=="function"?d=new Event("input",{bubbles:!0}):(d=document.createEvent("Event"),d.initEvent("input",!0,!0)),e.dispatchEvent(d)}}var Pg;function Jd(){return Jd=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Jd.apply(null,arguments)}var v$=function(e){return v.createElement("svg",Jd({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Pg||(Pg=v.createElement("path",{fill:"#74767B",d:"M21.7 10.04c.29.2.38.6.18.9-.5.75-1.14 1.57-1.92 2.36l1.84 1.84c.25.25.25.66 0 .91a.64.64 0 0 1-.92 0l-1.87-1.86c-.93.8-2.01 1.51-3.22 2.02l1.03 2.49a.65.65 0 0 1-1.2.5l-1.06-2.56a9.7 9.7 0 0 1-5.13.01L8.37 19.2a.65.65 0 0 1-1.2-.5l1.03-2.47c-1.25-.52-2.32-1.25-3.23-2.04l-1.86 1.86a.64.64 0 0 1-.92 0 .646.646 0 0 1 0-.91l1.84-1.85c-.8-.83-1.43-1.67-1.9-2.34-.2-.29-.13-.7.16-.9.3-.21.7-.13.91.16 1.46 2.1 4.34 5.48 8.8 5.48 4.03 0 7.14-2.98 8.79-5.47.2-.3.61-.38.91-.18"})))},qg;function Id(){return Id=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Id.apply(null,arguments)}var b$=function(e){return v.createElement("svg",Id({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),qg||(qg=v.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.43 10.68C3.86 8.65 7.11 5 12 5c4.88 0 8.13 3.65 9.56 5.68.56.8.56 1.83 0 2.63C20.13 15.34 16.88 19 12 19c-4.89 0-8.14-3.66-9.57-5.69-.56-.8-.56-1.83 0-2.63M6.29 12c0 3.14 2.56 5.7 5.71 5.7 3.14 0 5.7-2.56 5.7-5.7 0-3.15-2.56-5.71-5.7-5.71-3.15 0-5.71 2.56-5.71 5.71m14.21-.57c-.53-.74-1.27-1.66-2.21-2.51.45.93.71 1.97.71 3.08 0 1.1-.26 2.14-.71 3.07.94-.85 1.68-1.77 2.21-2.51.24-.35.24-.78 0-1.13m-17.01 0c.53-.74 1.27-1.66 2.21-2.51-.45.93-.7 1.97-.7 3.08 0 1.1.25 2.14.7 3.07-.94-.85-1.68-1.77-2.21-2.51a.98.98 0 0 1 0-1.13M12 9.7c0-.39-.32-.71-.7-.62A3.002 3.002 0 0 0 12 15a3 3 0 0 0 2.91-2.31c.09-.38-.23-.69-.62-.69h-1c-.71 0-1.29-.59-1.29-1.3z"})))};function S$({icon:e,...r}){return _.jsx(e,{...r})}const fo=Y(S$)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }
  cursor: pointer;

  [data-loading] &&& {
    pointer-events: none;
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
  }
`,x$=Q`
  width: ${({$dimension:e})=>{switch(e){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
  height: ${({$dimension:e})=>{switch(e){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
`,E$=Y.div`
  position: relative;
  container-type: inline-size;
  ${x$};

  & svg {
    ${e=>e.$svgMixin||""}
  }
`,Wh=({dimension:e="m",inverse:r=!1,svgMixin:i,...o})=>_.jsx(E$,{$dimension:e,$svgMixin:i,role:"alert","aria-live":"assertive",...o,children:_.jsx(A1,{$inverse:r})});Wh.displayName="Spinner";const Aa=e=>!!e&&(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth),eh=e=>{switch(e.$dimension){case"xl":default:return 24;case"s":return 20}},ho=e=>{switch(e.$dimension){case"xl":default:return 16;case"s":return 12}},w$=Q`
  padding-right: ${e=>ho(e)+(eh(e)+8)*(e.$iconsAfterCount??0)}px;
  padding-left: ${e=>ho(e)+(eh(e)+8)*(e.$iconsBeforeCount??0)}px;
`,$$=Q`
  background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,N$=Q`
  ${({$status:e,theme:r})=>{if(!e)return`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`;switch(e){case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`}}}
`,jl=Y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-radius: inherit;

  border: 1px solid ${N$};
  ${e=>e.disabled&&"border-color: transparent;"};
`,_$=Q`
  border-color: ${({$status:e,theme:r})=>{if(!e)return`var(--admiral-color-Neutral_Neutral60, ${r.color["Neutral/Neutral 60"]})`;switch(e){case"error":return`var(--admiral-color-Error_Error70, ${r.color["Error/Error 70"]})`;case"success":return`var(--admiral-color-Success_Success60, ${r.color["Success/Success 60"]})`}}};
`,C$=Q`
  border: 2px solid
    ${({$status:e,theme:r})=>{if(!e)return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;switch(e){case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`}}};
`,T$=Q`
  &:focus-within:not(:disabled) > ${jl} {
    ${e=>e.disabled||e.readOnly?"border-color: transparent":e.$isLoading?"":C$}
  }

  &:hover:not(:focus-within) > ${jl} {
    ${e=>e.$isLoading?"":e.disabled||e.readOnly?"transparent":_$};
  }
`,O$=Q`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,A$=Y.input`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  text-overflow: ellipsis;
  padding: 0 ${ho}px;

  ${e=>e.$dimension==="s"?be["Body/Body 2 Long"]:be["Body/Body 1 Long"]}

  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }

  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    &::selection {
      background-color: transparent;
    }
  }

  background-color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});

  &&&:user-invalid + ${jl} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }

  &&&:user-invalid:hover:not(:disabled) + ${jl} {
    border: 1px solid var(--admiral-color-Error_Error70, ${e=>e.theme.color["Error/Error 70"]});
  }

  &&&:user-invalid:focus:not(:disabled) + ${jl} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${$$}
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  ${w$}
  ${O$}
`,P1=Y.div`
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  & svg {
    border-radius: var(--admiral-border-radius-Medium, ${e=>qr(e.theme.shape)});
    display: block;
    width: ${eh}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
    }
  }
`,M$=Y(P1)`
  left: 0;

  padding-left: ${ho}px;

  & > *:not(:first-child) {
    margin-right: 8px;
  }
`,R$=Y(P1)`
  right: 0;

  padding-right: ${ho}px;

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`,D$=Y(g$)`
  ${T$}
  ${e=>e.disabled?"cursor: not-allowed;":e.$isLoading?"cursor: default;":""}
`;function B$(e){return e||{}}const q1=v.forwardRef(({dimension:e="m",type:r,displayClearIcon:i,isLoading:o,status:s,handleInput:f=B$,containerRef:d,icons:p,iconsBefore:m,iconsAfter:h,children:y,className:b,style:x,placeholder:$,skeleton:S=!1,showTooltip:w=!0,disableCopying:T,...N},A)=>{const M=v.useRef(null),P=d||v.useRef(null),H=v.Children.toArray(h||p),V=v.Children.toArray(m),[U,ee]=v.useState(!1),[re,ce]=v.useState(!1),[$e,Re]=v.useState(N.defaultValue??void 0),De=N.value??$e;v.useEffect(()=>{Aa(M.current)?ee(!0):ee(!1)},[re,ee]),v.useLayoutEffect(()=>{function le(){document.activeElement!==M.current&&ce(!0)}function I(){ce(!1)}const C=P.current;if(C)return C.addEventListener("mouseenter",le),C.addEventListener("mouseleave",I),C.addEventListener("mousedown",I),()=>{C.removeEventListener("mouseenter",le),C.removeEventListener("mouseleave",I),C.removeEventListener("mousedown",I)}},[ce]);const[Ke,Ce]=v.useState(!1);if(!N.readOnly&&r==="password"){const le=Ke?b$:v$;H.push(_.jsx(fo,{icon:le,onClick:()=>{Ce(!Ke)},"aria-hidden":!0},"eye-icon"))}!N.readOnly&&i&&De&&H.unshift(_.jsx(fo,{icon:wo,onMouseDown:le=>{le.preventDefault()},onClick:()=>{M.current&&hn(M.current,{value:""})},"aria-hidden":!0},"clear-icon")),o&&H.unshift(_.jsx(Wh,{dimension:e==="s"?"ms":"m"},"loading-icon"));const q=V.length,te=H.length;return v.useLayoutEffect(()=>{const le=f(null);function I(C){const{value:j,selectionStart:J,selectionEnd:Z}=this,ae=f({value:j,selectionStart:J,selectionEnd:Z},C);$&&!Wd(le,ae)?hn(this,{...ae,value:""}):hn(this,ae)}if(r!=="date"&&M.current){const C=M.current;C.addEventListener("input",I);const{value:j,selectionStart:J,selectionEnd:Z}=C,ae=f({value:j,selectionStart:J,selectionEnd:Z});return $&&!Wd(le,ae)?hn(C,{...ae,value:""}):hn(C,ae),()=>{C.removeEventListener("input",I)}}},[f,$]),v.useEffect(()=>{function le(){this.selectionEnd=this.selectionStart}if(T&&M.current){const I=M.current;return I.addEventListener("select",le,!0),()=>I.removeEventListener("select",le,!0)}},[T]),_.jsxs(_.Fragment,{children:[_.jsxs(D$,{className:b,style:x,$dimension:e,ref:P,disabled:N.disabled,readOnly:N.readOnly,$isLoading:o,$status:s,"data-disabled":!!N.disabled||void 0,"data-read-only":!!N.readOnly||void 0,"data-loading":!!o||void 0,"data-status":s,$skeleton:S,"data-disable-copying":!!T||void 0,children:[_.jsx(A$,{ref:It(A,M),...N,onChange:le=>{Re(le.currentTarget.value),N.onChange?.(le)},placeholder:$,$dimension:e,$iconsAfterCount:te,$iconsBeforeCount:q,type:r==="password"&&Ke?"text":r}),_.jsx(jl,{$status:s,disabled:N.disabled||N.readOnly}),q>0&&_.jsx(M$,{disabled:N.disabled,$dimension:e,children:V}),te>0&&_.jsx(R$,{disabled:N.disabled,$dimension:e,children:H}),y]}),w&&re&&U&&_.jsx(Fr,{renderContent:()=>M?.current?.value||"",targetElement:P.current})]})});q1.displayName="TextInput";const F1=v.createContext(null),V1=()=>v.useContext(F1),z$=({children:e,...r})=>_.jsx(F1.Provider,{value:r,children:e}),j$=v.createContext(null),G1=()=>v.useContext(j$),Fl=35,Fg=4,Jh=Q`
  height: ${({$dimension:e})=>e==="m"?"32px":"24px"};
`,H$=Q`
  width: ${({$dimension:e})=>e==="m"?"32px":"24px"};
`,th=Q`
  height: ${({$dimension:e})=>e==="m"?"20px":"16px"};
`,L$=Q`
  height: ${({$dimension:e})=>e==="m"?"20px":"16px"};
`,nh=Q`
  width: ${({$dimension:e})=>e==="m"?"20px":"16px"};
`,U$=Q`
  padding: ${({$dimension:e})=>e==="m"?"6px 12px":"4px 8px"};
`,k$=Q`
  padding: ${({$dimension:e})=>e==="m"?"5px 11px":"3px 7px"};
`,P$=Q`
  ${({$appearance:e})=>e==="filled"?U$:k$}
`,q$=Q`
  &:hover {
    color: ${({theme:e,$appearance:r,$selected:i})=>i?`var(--admiral-color-Special_StaticWhite, ${e.color["Special/Static White"]})`:r!=="filled"||i?`var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral90, ${e.color["Neutral/Neutral 90"]})`};
  }
`,F$=Q`
  ${({$dimension:e})=>e==="s"?be["Caption/Caption 1"]:be["Body/Body 2 Long"]}
  color: ${({theme:e,$appearance:r,$disabled:i,$selected:o})=>i&&!o?`var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`:o||o&&i?`var(--admiral-color-Special_StaticWhite, ${e.color["Special/Static White"]})`:r==="filled"?`var(--admiral-color-Neutral_Neutral90, ${e.color["Neutral/Neutral 90"]})`:`var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`};

  ${e=>!e&&q$}
`,V$=Q`
  &:hover {
    ${({theme:e,$appearance:r,$selected:i,$withCloseIcon:o})=>i?`background-color: var(--admiral-color-Primary_Primary70, ${e.color["Primary/Primary 70"]});`:r==="filled"?`background-color: var(--admiral-color-Opacity_Neutral12, ${e.color["Opacity/Neutral 12"]});`:o?void 0:`background-color: var(--admiral-color-Opacity_Hover, ${e.color["Opacity/Hover"]});`};
    ${e=>e.$selected&&`
      border-color: var(--admiral-color-Primary_Primary70, ${e.theme.color["Primary/Primary 70"]});
    `}
  }
  &:active {
    ${({theme:e,$appearance:r,$selected:i,$withCloseIcon:o})=>i?`background-color: var(--admiral-color-Primary_Primary80, ${e.color["Primary/Primary 80"]});`:r==="filled"?`background-color: var(--admiral-color-Opacity_Neutral16, ${e.color["Opacity/Neutral 16"]});`:o?void 0:`background-color: var(--admiral-color-Opacity_Press, ${e.color["Opacity/Press"]});`};
    ${e=>e.$selected&&`
      border-color: var(--admiral-color-Primary_Primary80, ${e.theme.color["Primary/Primary 80"]});
    `}
  }
`,G$=Q`
  background-color: ${({theme:e,$appearance:r,$selected:i,$disabled:o})=>i&&!o?`var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`:i&&o?`var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`:r==="filled"?`var(--admiral-color-Opacity_Neutral8, ${e.color["Opacity/Neutral 8"]})`:"transparent"};

  border: ${({theme:e,$appearance:r,$disabled:i})=>r==="filled"?"none":i?`1px solid var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`:`1px solid var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`};

  border-radius: 16px;

  ${e=>e.$clickable&&!e.$disabled&&V$}

  &:focus-visible {
    outline: 0;

    &:before {
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
      border-radius: 20px;
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      pointer-events: none;
    }
  }
`,Q$=Y.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-width: 190px;
  user-select: none;
  & > * {
    pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  }
  cursor: ${({$defaultChip:e,$disabled:r,$withTooltip:i})=>!e&&!i||r?r?"not-allowed":"default":"pointer"};
  ${G$}
  ${Jh}
  ${e=>e.$withCloseIcon?`padding-inline-start: ${(e.$dimension==="s"?8:12)-(e.$appearance==="outlined"?1:0)}px;`:P$}
  ${e=>e.$withBadge&&!e.$withCloseIcon?`padding-inline-end: ${(e.$dimension==="s"?4:6)-(e.$appearance==="outlined"?1:0)}px;
         padding-inline-start: ${(e.$dimension==="s"?8:12)-(e.$appearance==="outlined"?1:0)}px;`:""}
  ${F$}
`,Q1=Q`
  display: flex;
  align-items: center;
  justify-content: center;
`,Y$=Y.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  ${e=>e.$withCloseIcon&&Q1}
  ${e=>e.$withCloseIcon?Jh:L$}
  & svg {
    ${th}
    ${nh}
    & *[fill^='#'] {
      fill: ${({theme:e,$appearance:r,$disabled:i,$selected:o})=>o?`var(--admiral-color-Special_StaticWhite, ${e.color["Special/Static White"]})`:i?`var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`:r==="filled"?`var(--admiral-color-Neutral_Neutral50, ${e.color["Neutral/Neutral 50"]})`:`var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`};
    }
  }
`,X$=Y.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`,K$=Y.div`
  display: inline-block;
  margin-inline-end: 8px;
`,Z$=Y.div`
  display: inline-block;
  margin-inline-start: ${e=>e.$withCloseIcon?"2px":"8px"};
`,Vg=Y.div`
  ${e=>e.$withCloseIcon&&Q1}
  ${e=>e.$withCloseIcon?Jh:th}
  ${e=>e.$withCloseIcon?H$:nh}
  & > svg {
    ${th}
    ${nh}
  }
`,W$=Y(Zh)`
  margin-inline-start: ${({dimension:e})=>e==="s"?"6px":"8px"};
`,J$=Y(zw)`
  //дополнительный отступ в 2px, чтобы кружок ховера не стоял вплотную к элементу слева
  margin-inline-start: ${e=>e.dimension==="s"?"6px":"8px"};
  ${e=>e.appearance==="primary"?e.dimension==="s"?"margin-inline-end: 3px":"margin-inline-end: 5px":""};
`,I$=()=>"",Ih=v.forwardRef(({dimension:e="m",disabled:r,appearance:i="outlined",selected:o,onClose:s,children:f,renderContentTooltip:d=I$,iconBefore:p,iconAfter:m,iconStart:h,iconEnd:y,badge:b,...x},$)=>{const S=o!==void 0,[w,T]=v.useState(!1),[N,A]=v.useState(!1),M=!!s,P=!!b,H=v.useMemo(()=>o&&!r?"whiteBlue":r?o||i==="filled"?"whiteDisable":"lightDisable":i==="filled"?"white":"info",[i,o,r]),V=v.useRef(null),U=v.useRef(null);return v.useEffect(()=>{U.current&&Aa(U.current)!==w&&T(Aa(U.current))},[N,T]),v.useLayoutEffect(()=>{function ee(){A(!0)}function re(){A(!1)}const ce=V.current;if(ce)return ce.addEventListener("mouseenter",ee),ce.addEventListener("mouseleave",re),ce.addEventListener("focus",ee),ce.addEventListener("blur",re),()=>{ce.removeEventListener("mouseenter",ee),ce.removeEventListener("mouseleave",re),ce.removeEventListener("focus",ee),ce.removeEventListener("blur",re)}},[A]),_.jsxs(_.Fragment,{children:[_.jsx(Q$,{...x,ref:It($,V),$dimension:e,$disabled:r,$appearance:i,$selected:o,$defaultChip:S,$withCloseIcon:M,$withTooltip:w,$withBadge:P,onKeyDown:ee=>{if(!r){const re=W.getCode(ee);re!==W.Enter&&re!==W[" "]||(M?s?.():x.onClick?.(ee)),x.onKeyDown?.(ee)}},tabIndex:x.tabIndex??(r?-1:0),$clickable:!!x.onClick,children:_.jsxs(Y$,{$dimension:e,$disabled:r,$appearance:i,$selected:o,$withCloseIcon:M,children:[(h||p)&&_.jsx(K$,{children:_.jsx(Vg,{$dimension:e,$withCloseIcon:M,children:h||p})}),_.jsx(X$,{ref:U,children:f}),b!==void 0&&_.jsx(W$,{"data-badge":!0,dimension:e,appearance:H,children:b}),!s&&(y||m)&&_.jsx(Z$,{$dimension:e,children:_.jsx(Vg,{$dimension:e,$withCloseIcon:M,children:y||m})}),s&&_.jsx(J$,{dimension:e==="m"?"mBig":"s",highlightFocus:!1,onMouseDown:ee=>{ee.preventDefault(),s?.(x.id)},disabled:r,tabIndex:-1,appearance:i==="outlined"?"primary":"secondary"})]})}),N&&w&&_.jsx(Fr,{targetElement:V.current,renderContent:d})]})});Ih.displayName="Chips";const Y1=Y.div`
  width: ${Fl}px;
  height: 24px;
`,e6=Y.div`
  display: flex;
  width: ${Fl}px;
  visibility: hidden;
  [data-show-count] & {
    visibility: visible;
  }
  > * {
    width: ${Fl}px;
    border-radius: 16px;
    // Убирает действие inline-block
    display: flex;
  }
`,t6=Y(Ih)`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 4px 0;
  cursor: pointer;
`,n6=Y.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`,a6=Q`
  // оставлено, чтоб обрабатывался onClick
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }
`,r6=Y(Ih)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({disabled:e})=>e&&a6};

  min-width: ${Fl}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }

  // По дизайну при наведении цвет самого чипса меняться не должен, но т.к. есть обработчик onClick для stopPropagation,
  // то крестик чипса получается clickable и при ховере меняет цвет
  // disabled и readOnly чипсы не меняют цвет при ховере (в readOnly в целом отсутствует кнопка крестика)
  &:hover {
    ${({theme:e,disabled:r})=>{if(!r)return`background-color: var(--admiral-color-Opacity_Neutral8, ${e.color["Opacity/Neutral 8"]})`}}
  }
`,Yu=({value:e,disabled:r,renderChip:i,...o},s)=>{const f=i(),d={};return xo(o,d,"data",!1),(p=>typeof p=="object"&&p!==null&&!v.isValidElement(p))(f)?{...f,onClose:()=>f.onClose?.({value:e,disabled:r,...d})}:{disabled:r,onClose:()=>s(e),children:f}},Gg=({className:e,option:r,disabled:i,readOnly:o,onClick:s,onChipRemove:f})=>{const d=v.useCallback(p=>()=>_.jsx(n6,{children:p}),[]);return _.jsx(r6,{className:e,tabIndex:-1,dimension:"s",appearance:"filled",onClick:s,onClose:o?void 0:Yu(r,f).onClose,disabled:Yu(r,f).disabled||i,renderContentTooltip:d(Yu(r,f).children),children:Yu(r,f).children})},l6=({count:e,disabled:r,onClick:i})=>{const o=v.useRef(null),s=v.useRef(null);return e?_.jsx(e6,{onClick:i,ref:o,className:"counter",children:_.jsxs(t6,{ref:s,"data-visible":!0,tabIndex:-1,dimension:"s",appearance:"filled",disabled:r,children:["+",e]})}):_.jsx(Y1,{})},i6=Y.div`
  display: flex;
`,o6=v.forwardRef(({option:e,childrenOptions:r,containerRef:i,shouldShowCount:o,disabled:s,readOnly:f,onChipClick:d,onChipRemove:p},m)=>{const h=v.useRef(null),[y,b]=v.useState(!1);return v.useLayoutEffect(()=>{const x=new IntersectionObserver(function($){if($[0].isIntersecting&&!y){b(!0),$[0].target.setAttribute("data-visible","true");const S=$[0].target.previousElementSibling,w=$[0].target.nextElementSibling;return S&&S.removeAttribute("data-show-count"),void(w&&!w.getAttribute("data-visible")&&$[0].target.setAttribute("data-show-count",""))}if(y&&!$[0].isIntersecting){b(!1),$[0].target.removeAttribute("data-visible"),$[0].target.removeAttribute("data-show-count");const S=$[0].target.previousElementSibling;S&&S.getAttribute("data-visible")&&S.setAttribute("data-show-count","true")}},{root:i.current,threshold:[0,1]});return i.current&&h.current&&x.observe(h.current),()=>x.disconnect()},[y]),_.jsxs(i6,{ref:It(m,h),onMouseDown:x=>x.preventDefault(),children:[_.jsx(Gg,{className:"chip",option:e,disabled:s,readOnly:f,onClick:d,onChipRemove:p}),o&&r.length>0&&_.jsx(l6,{count:r.length,disabled:s,children:r.map(x=>_.jsx(Gg,{option:x,disabled:s,readOnly:f,onClick:d,onChipRemove:p},x.value))}),!o&&_.jsx(Y1,{})]},e.value)}),u6=({options:e,isOptionsListOpen:r,containerRef:i,hasMaxHeight:o,...s})=>{const f=Xh(r);return v.useEffect(()=>{o&&e.length!==0&&(f&&!r&&i.current?.scrollTo({top:0,left:0,behavior:"smooth"}),!f&&r&&setTimeout(()=>{i.current?.scrollTo({top:0,left:0,behavior:"instant"}),i.current?.scrollTo({top:i.current?.scrollHeight,left:0,behavior:"smooth"})}),r&&f&&i.current?.scrollTo({top:i.current?.scrollHeight,left:0,behavior:"smooth"}))},[r,e,o]),_.jsx(_.Fragment,{children:e.map((d,p)=>_.jsx(o6,{option:d,childrenOptions:p<e.length-1?e.slice(p+1):[],containerRef:i,...s},d.value))})},Ca=Y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-width: 1px;
  border-style: solid;
  border-radius: inherit;
`,s6=Q`
  min-height: ${({$multiple:e,$minRowCount:r,$dimension:i})=>e?r?24*r+4*(r-1)+"px":"24px":(i==="s"?20:24)+"px"};

  max-height: ${({$multiple:e,$maxRowCount:r,$opened:i,$idleHeight:o})=>e?r?24*r+4*(r-1)+"px":i||o!=="fixed"?"none":"24px":"none"};
`,c6=Q`
  > * {
    margin-left: ${`-${Fl+Fg}px`};
  }

  padding-left: ${`${Fl+Fg}px`};
`,X1=Y.div`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;

  ${({$multiple:e,$isEmpty:r})=>e&&!r&&c6}

  gap: 4px;
  flex-wrap: ${({$multiple:e})=>e?"wrap":"unset"};
  align-items: center;
  align-content: flex-start;

  ${e=>e.$dimension==="s"?be["Body/Body 2 Long"]:be["Body/Body 1 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});

  ${s6}
  [data-disabled='true'] &&& {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }
`,f6=Y.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,d6=Q`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,h6=Y.input`
  outline: none;
  appearance: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  width: 1px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});

  ${({$dimension:e})=>e==="s"?be["Body/Body 2 Long"]:be["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }

  &:read-only {
    cursor: inherit;
  }

  &:disabled,
  &:disabled::placeholder {
    cursor: inherit;
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  height: ${({$dimension:e,$isMultiple:r})=>{return i=r,(e!=="s"||i?24:20)+"px";var i}};

  ${d6};
`,m6=Q`
  pointer-events: none;
  cursor: default;
`,p6=Q`
  && > *:not(${X1}) {
    pointer-events: none;
  }

  & ${Ca} {
    border-color: transparent;
  }
`,y6=Q`
  ${Ca} {
    border-width: 2px;
  }
`,g6=Y.div`
  flex: 0 0 auto;

  display: flex;
  align-items: center;

  padding: ${({$dimension:e,$multiple:r})=>e==="s"&&r?"2px 0":"0"};

  & > * {
    margin-left: 8px;
    display: block;
    width: ${({$dimension:e})=>e==="s"?20:24}px;
    height: ${({$dimension:e})=>e==="s"?20:24}px;
  }

  [data-disabled='true'] &&& {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,v6=Y.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${e=>e.$multiple?"flex-start":"center"};
  cursor: ${({disabled:e,$readonly:r,$isLoading:i})=>e?"not-allowed":r||i?"default":"pointer"};

  padding: ${({$dimension:e,$multiple:r})=>{switch(e){case"xl":return"16px 16px";case"s":return r?"4px 12px":"6px 12px";default:return"8px 16px"}}};

  background: ${({theme:e,disabled:r,$readonly:i})=>r||i?`var(--admiral-color-Neutral_Neutral10, ${e.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${e.color["Neutral/Neutral 00"]})`};

  ${({disabled:e,$readonly:r})=>r||e?p6:""};
  ${({$focused:e,$readonly:r,$isLoading:i})=>!e||r||i?"":y6};

  & ${Ca} {
    border-color: ${e=>e.disabled||e.$readonly?"transparent":e.$focused&&!e.$isLoading?`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral40, ${e.theme.color["Neutral/Neutral 40"]})`};
  }

  &:hover ${Ca} {
    ${e=>!e.disabled&&!e.$readonly&&!e.$focused&&!e.$isLoading&&`
      border-color: var(--admiral-color-Neutral_Neutral60, ${e.theme.color["Neutral/Neutral 60"]});
    `};
  }

  &[data-status='success'] {
    ${e=>!e.disabled&&!e.$readonly&&!e.$isLoading&&`
      ${Ca} {
      border-color: var(--admiral-color-Success_Success50Main, ${e.theme.color["Success/Success 50 Main"]});
      }
      &:hover ${Ca} {
        border-color: var(--admiral-color-Success_Success60, ${e.theme.color["Success/Success 60"]});
      }
    `}
  }

  &[data-status='error'],
  &:user-invalid {
    ${e=>!e.disabled&&!e.$readonly&&!e.$isLoading&&`
      ${Ca} {
        border-color: var(--admiral-color-Error_Error60Main, ${e.theme.color["Error/Error 60 Main"]});
      }
  
      &:hover ${Ca} {
        border-color: var(--admiral-color-Error_Error70, ${e.theme.color["Error/Error 70"]});
      }
    `}
  }

  border-radius: ${e=>e.$skeleton?0:`var(--admiral-border-radius-Medium, ${qr(e.theme.shape)})`};

  ${({$skeleton:e})=>e&&U1};
  ${({$skeleton:e})=>e&&m6};
`,K1=Y.div`
  flex: 0 0 auto;

  word-break: break-word;
  display: flex;
  align-items: center;
  padding: ${({$dimension:e})=>{switch(e){case"xl":return"12px 16px";case"s":return"6px 12px";default:return"8px 16px"}}};

  background-color: transparent;

  ${({$dimension:e})=>{switch(e){case"xl":return be["Body/Body 1 Long"];case"s":return be["Body/Body 2 Long"];default:return be["Body/Body 1 Short"]}}}
`,b6=Q`
  ${be["Body/Body 1 Short"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  background-color: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
  border-radius: var(--admiral-border-radius-Medium, ${e=>qr(e.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>Ls(e.theme.shadow["Shadow 08"])});
  overflow: auto;
`,S6=Y(Kh)`
  ${b6}
`,x6=Y.div`
  user-select: none;
`,E6=Y(Yh)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
  ${e=>e.$selected&&!e.$hovered&&!e.$preselected&&e.$multiple&&"background-color: transparent;"}
`,w6=({visibleValue:e,isSearchPanelOpen:r,targetRef:i,forceHideOverflowTooltip:o})=>{const s=v.useRef(null),[f,d]=v.useState(!1),[p,m]=v.useState(!1);v.useEffect(()=>{s.current&&Aa(s.current)!==f&&d(Aa(s.current))},[p,d]),v.useEffect(()=>{function y(){m(!0)}function b(){m(!1)}const x=s.current;if(x)return x.addEventListener("mouseenter",y),x.addEventListener("mouseleave",b),()=>{x.removeEventListener("mouseenter",y),x.removeEventListener("mouseleave",b)}},[m]);const h=!o&&!r&&p&&f;return _.jsxs(_.Fragment,{children:[_.jsx(f6,{ref:s,children:e}),h&&_.jsx(Fr,{renderContent:()=>e,targetElement:i.current})]})},$6=e=>e.stopPropagation(),N6=Y.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  pointer-events: none;
`,_6=v.forwardRef(({options:e,...r},i)=>{const o=v.useRef(null);return v.useEffect(()=>{function s(f){const d=W.getCode(f);d&&[W[" "],W.Enter,W.ArrowDown,W.ArrowUp].includes(d)&&f.preventDefault()}return o.current?.addEventListener("keydown",s),()=>o.current?.removeEventListener("keydown",s)},[]),_.jsxs(N6,{ref:It(i,o),...r,onClick:$6,children:[_.jsx("option",{value:""}),e.map(s=>_.jsx("option",{value:s.value,disabled:s.disabled,children:s.value},s.value))]})}),Z1=v.createContext(null),C6=()=>v.useContext(Z1),T6=({children:e,...r})=>_.jsx(Z1.Provider,{value:r,children:e}),O6=(e="",r="",i="wholly")=>{const o=(i==="word"?r.split(" "):[r]).filter(Boolean).map(p=>p.toLowerCase()),s=["[","]","\\","^","$",".","|","?","*","+","(",")"],f=o.map(p=>`(${p.split("").map(m=>s.includes(m)?`\\${m}`:m).join("")})?`).join(""),d=e.split(new RegExp(f,"gi")).filter(Boolean);return!r||d.some(p=>o.includes(p.toLowerCase()))},A6=Y.label`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: 0;
  user-select: none;

  cursor: ${e=>e.disabled?"not-allowed":e.readOnly?"default":"pointer"};

  ${e=>e.$dimension==="s"?be["Body/Body 2 Short"]:be["Body/Body 1 Short"]}
  color: ${e=>e.disabled?`var(--admiral-color-Neutral_Neutral30, ${e.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${e.theme.color["Neutral/Neutral 90"]})`};

  fieldset[data-dimension='s'] && {
    ${be["Body/Body 2 Short"]};
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    cursor: not-allowed;
  }

  ${e=>e.readOnly?"pointer-events: none":""};
`,M6=Y.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: ${"8px"};
  ${e=>e.$dimension==="s"?be["Body/Body 2 Short"]:be["Body/Body 1 Short"]}
  color: ${e=>e.disabled?`var(--admiral-color-Neutral_Neutral30, ${e.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${e.theme.color["Neutral/Neutral 90"]})`};
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }
  fieldset[data-dimension='s'] && {
    ${be["Body/Body 2 Short"]}
  }
`,R6=Y.div`
  margin-top: 4px;
  ${e=>e.$dimension==="s"?be["Caption/Caption 1"]:be["Body/Body 2 Short"]}
  color: ${e=>e.disabled?`var(--admiral-color-Neutral_Neutral30, ${e.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${e.theme.color["Neutral/Neutral 50"]})`};

  fieldset[data-dimension='s'] && {
    ${be["Caption/Caption 1"]}
  }
`,D6=Y(H1)`
  margin-top: 2px;
`,W1=v.forwardRef(({children:e,disabled:r=!1,readOnly:i=!1,hovered:o,dimension:s="m",error:f,indeterminate:d=!1,extraText:p,className:m,id:h,name:y,style:b,...x},$)=>{const S=v.useMemo(()=>h||L1(),[h]),w={"data-field-id":S,"data-field-name":y};return j2(x,w),_.jsxs(A6,{className:m,$dimension:s,disabled:r,readOnly:i,style:b,...w,onClick:T=>{T.target.tagName!=="INPUT"&&T.stopPropagation()},children:[_.jsx(D6,{...x,ref:$,disabled:r,readOnly:i,type:"checkbox",indeterminate:d,onKeyDown:T=>{i&&W.getCode(T)===W[" "]&&T.preventDefault(),x.onKeyDown?.(T)},"data-hovered":o,hovered:o,dimension:s,id:S,name:y,error:f}),e&&_.jsxs(M6,{$dimension:s,disabled:r,children:[e,p&&_.jsx(R6,{disabled:r,$dimension:s,children:p})]})]})});W1.displayName="CheckboxField";Y(K1)`
  background-color: ${({active:e,selected:r,theme:i})=>r?`var(--admiral-color-Opacity_Focus, ${i.color["Opacity/Focus"]})`:e?`var(--admiral-color-Opacity_Hover, ${i.color["Opacity/Hover"]})`:"transparent"};

  color: ${({disabled:e,theme:r})=>e?`var(--admiral-color-Neutral_Neutral30, ${r.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${r.color["Neutral/Neutral 90"]})`};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  & > * {
    pointer-events: ${({disabled:e})=>e?"none":"all"};
  }
`;const B6=Y(W1)`
  margin-right: 8px;
  flex-shrink: 0;
`,z6=e=>V1()?_.jsx(j6,{...e}):null,j6=({disabled:e=!1,id:r,value:i,children:o,renderOption:s,renderChip:f,...d})=>{const p=V1(),m=G1(),h=m?.disabled||e,y=v.useCallback(()=>o,[o]),b=f||y,x=v.useMemo(()=>s?s({disabled:e}):o,[s,e,i,o]),$={};xo(d,$,"data",!1);const S=v.useMemo(()=>({id:r,value:i,disabled:h,children:x,renderChip:b,...$}),[r,i,h,x,b]);return v.useEffect(()=>(p?.onConstantOptionMount?.(S),()=>p?.onConstantOptionUnMount?.(S)),[p?.onConstantOptionMount,p?.onConstantOptionUnMount,S]),null},H6=({id:e,disabled:r=!1,readOnly:i=!1,value:o,children:s,renderOption:f,renderChip:d,...p})=>{const m=C6(),h=G1(),y=h?.disabled||r,b=x=>m?.multiple?(({selected:$=!1,hovered:S=!1})=>_.jsxs(_.Fragment,{children:[m?.showCheckbox&&_.jsx(B6,{checked:$,hovered:S,dimension:m?.dimension==="s"?"s":"m",disabled:r,onChange:()=>!1}),s]}))(x):s;return v.useEffect(()=>{const x=e||o,$={id:o,value:o,render:S=>{return f?f(S):v.createElement(E6,{...S,dimension:(w=m?.dimension,w==="xl"?"l":w),key:x,...p,$selected:S.selected,$hovered:S.hovered,$preselected:S.preselected,$multiple:m?.multiple},b({selected:S.selected,hovered:S.hovered}));var w},disabled:y,readOnly:i};return m?.onDropDownOptionMount?.($),()=>m?.onDropDownOptionUnMount?.($)},[m?.onDropDownOptionMount,m?.onDropDownOptionUnMount,m?.dimension,m?.multiple]),null},fn=e=>_.jsxs(_.Fragment,{children:[_.jsx(z6,{...e}),_.jsx(H6,{...e})]}),L6=Y(K1)`
  color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
`,Qg=e=>e.stopPropagation(),Yg=()=>{},ro=v.forwardRef(({value:e,isLoading:r,className:i,style:o,status:s,icons:f,portalTargetRef:d,targetElement:p,inputTargetRef:m,disabled:h,readOnly:y,placeholder:b,defaultValue:x,dimension:$="m",idleHeight:S="fixed",minRowCount:w="none",maxRowCount:T="none",mode:N="select",multiple:A=!1,showCheckbox:M=!0,displayClearIcon:P=!1,onClearIconClick:H,onInputChange:V,inputValue:U,defaultInputValue:ee,renderSelectValue:re,onFocus:ce,onBlur:$e,children:Re,alignDropdown:De="stretch",alignSelf:Ke="stretch",skeleton:Ce=!1,locale:q,dropContainerCssMixin:te,dropContainerClassName:le,dropContainerStyle:I,renderDropDownTopPanel:C,renderDropDownBottomPanel:j,renderTopPanel:J,renderBottomPanel:Z,forcedOpen:ae=!1,onChangeDropDownState:fe,onInputKeyDown:oe,onInputKeyUp:Qe,onInputKeyUpCapture:Se,onInputKeyDownCapture:nt,searchFormat:Bt="wholly",onFilterItem:Ye=O6,virtualScroll:He,title:Pt,forceHideOverflowTooltip:Qn=!1,onSelectedChange:oa,moveSelectedOnTop:Tt,clearInputValueAfterSelect:Ze=!0,openButtonPropsConfig:Qt=Yg,clearButtonPropsConfig:qt=Yg,...vt},mn)=>{const sr=Fh()||Hs,Qr=q?.emptyMessage||_.jsx(L6,{$dimension:$,children:sr.locales[sr.currentLocale].select.emptyMessage}),[Ie,cr]=v.useState(e??x),[Yn,wt]=v.useState(""),et=U===void 0?Yn:U,[dt,ue]=v.useState(!1),[ge,ye]=v.useState(),[Pe,at]=v.useState([]),[Le,en]=v.useState([]),[Ae,tn]=v.useState(ae),[nn,pn]=v.useState(!1),[yn,Xn]=v.useState(void 0),Jl=e===void 0,gn=N==="select",Ao=v.useMemo(()=>T!=="none"&&T>0?T:S==="fixed"?1:"none",[T,S])!=="none",Yr=e??x,Kn=v.useRef(Array.isArray(Yr)?Yr:[]),fr=v.useRef(!1),Dn=v.useRef([]);v.useEffect(()=>{Array.isArray(e)&&(Kn.current=e)},[e]);const Zn=v.useMemo(()=>A?null:Pe.find(ne=>ne.value===Ie),[A,Pe,Ie]),rt=v.useMemo(()=>A&&Array.isArray(Ie)?Ie.reduce((ne,de)=>{const xe=Pe.find(mt=>mt.value===de);return xe&&ne.push(xe),ne},[]):[],[Pe,Ie,A]),zt=Xh(Ae),[Bn,Xr]=v.useState([]);v.useEffect(()=>{if(A&&Tt||!(Bn.length>0)||Xr([]),A&&Tt&&zt!==Ae&&Ae){const ne=rt.map(xe=>xe.value),de=ne.length>0?ne.reduce((xe,mt)=>{const bt=Le.find(xn=>xn.value===mt);return bt&&xe.push(bt),xe},[]):[];Xr(de)}},[Le,Ae,rt,A,Tt]);const Il=v.useMemo(()=>{const ne=Bn.map(xe=>xe.value),de=Le.filter(xe=>Ye(xe.value,et,Bt)).reduce((xe,mt)=>(ne.includes(mt.value)||xe.push(mt),xe),[...Bn]);return de.length?de:[{id:"emptyMessage",render:()=>_.jsx(x6,{children:Qr},"empty"),disabled:!0}]},[r,Le,$,et,Bn]);v.useEffect(()=>{ge&&(Il.find(ne=>ne.id===ge)||ye(void 0))},[Il,ge]);const vn=m??v.useRef(null),ua=v.useRef(null),jt=v.useRef(null),ei=p||d?.current||jt.current,sa=v.useRef(null),bn=v.useRef(null),ca=v.useRef({shouldExtendInputValue:!1}),Ra=ne=>{at(de=>[...de,ne]),Dn.current.includes(ne.value)&&(Dn.current=Dn.current.filter(de=>de!==ne.value))},ht=ne=>{Kn.current.includes(ne.value)&&(Dn.current=[...Dn.current,ne.value]),at(de=>de.filter(xe=>xe.value!==ne.value))},Mo=v.useCallback(ne=>{en(de=>[...de,ne])},[]),Ro=v.useCallback(ne=>{en(de=>de.filter(xe=>xe.id!==ne.id))},[]),zn=v.useCallback(()=>{tn(!1),vn.current&&hn(vn.current,{value:""}),ue(!0)},[Ie]),Sn=v.useCallback(ne=>{const de=ua.current;if(!de)return;const xe=Array.from(de.options),mt=xe.find(bt=>bt.value===ne);if(mt&&(A||xe.forEach(bt=>bt.selected=!1),mt.selected=!A||!mt.selected,de.dispatchEvent(new Event("change",{bubbles:!0})),A||zn(),et&&vn.current&&Ze)){hn(vn.current,{value:"",selectionEnd:0,selectionStart:0});const bt=ge;ye(""),setTimeout(()=>ye(bt))}},[zn,A,et,ge]),tc=v.useCallback(()=>{const ne=ua.current;ne&&(ne.selectedIndex=-1,ne.dispatchEvent(new Event("change",{bubbles:!0})))},[]);v.useEffect(()=>{ae!==Ae&&tn(ae)},[ae]),v.useEffect(()=>{fe?.(Ae),!Ae&&nn&&document.activeElement!==jt.current&&ua.current?.focus()},[Ae,nn]);const Do=H||tc,ti=Ao&&!Ae,nc=v.useCallback(()=>_.jsx(u6,{containerRef:sa,options:rt,shouldShowCount:ti,disabled:h,readOnly:y,onChipRemove:Sn,onChipClick:Qg,isOptionsListOpen:Ae,hasMaxHeight:!!T&&T!=="none"}),[rt,ti,h,y,Sn,Ae,T]),Da=(A?!Ie?.length:!Ie)&&!!b&&!et,Kr=re?.(Ie,et),jn=Zn?.children,ni=A?nc():jn,Ba=Kr||ni||Ie||null,Hn=typeof Ba=="string",ai=Hn?_.jsx(w6,{visibleValue:Ba,isSearchPanelOpen:Ae,targetRef:jt,forceHideOverflowTooltip:Qn}):Ba,Zr=()=>{tn(ne=>!ne)},ac=()=>{if(!et&&Ie)return A?void(()=>{const ne=(de=[...rt].reverse(),de.find(({disabled:xe})=>!xe)?.value);var de;ne&&Sn(ne)})():ue(!1)};v.useEffect(()=>{if(!y&&!h)return jt.current?.addEventListener("keydown",ne),()=>{jt.current?.removeEventListener("keydown",ne)};function ne(de){const xe=W.getCode(de);xe===W[" "]&&(!gn&&et?de.stopPropagation():Ae||(de.preventDefault(),tn(!0),de.stopPropagation())),xe!==W.Enter||Ae||(de.preventDefault(),tn(!0),de.stopPropagation()),xe!==W.ArrowDown&&xe!==W.ArrowUp||Ae||(tn(!0),de.stopPropagation());const mt=de.ctrlKey||de.metaKey||de.altKey;de.key.length!==1||mt||Hn&&!et&&dt&&(ca.current.shouldExtendInputValue=!0),xe!==W.Backspace||de.repeat||ac(),xe===W.Backspace&&((bt=>{if(!Hn||!vn.current||et||!dt||!Ie)return;bt.preventDefault();const xn=Ba.slice(0,-1);hn(vn.current,{value:xn,selectionEnd:xn.length,selectionStart:xn.length})})(de),tn(!0)),xe===W.Escape&&Ae&&(tn(!1),de.preventDefault(),de.stopPropagation())}},[y,h,gn,et,Ae,rt]),v.useEffect(()=>{function ne(){fr.current=!1}return jt.current?.addEventListener("keyup",ne),()=>{jt.current?.removeEventListener("keyup",ne)}},[]),v.useEffect(()=>{(!nn&&!A||A)&&(vn.current&&hn(vn.current,{value:""}),ue(!0))},[A,nn]),v.useEffect(()=>{Ae&&(gn?ua.current?.focus():vn.current?.focus(),Xn(""))},[Ae,gn]),v.useEffect(()=>{yn&&ye("")},[yn]),v.useEffect(()=>{ge&&Xn("")},[ge]),v.useEffect(()=>{if(Ae){const ne=Ie&&!Array.isArray(Ie)?Ie:void 0;ye(ne)}},[Ae]),v.useEffect(()=>{Jl||cr(e)},[e,Jl]),$1([jt,bn],ne=>{ne.target&&jt.current?.contains(ne.target)||(pn(!1),zn())});const Bo=dt&&(A?!!Ie?.length:!!Ie),Ot=v.useMemo(()=>v.Children.map(Re,ne=>v.isValidElement(ne)?v.cloneElement(ne,{key:L1(),...ne.props}):null),[Re]),zo=v.useMemo(()=>_.jsx(T6,{onDropDownOptionMount:Mo,onDropDownOptionUnMount:Ro,dimension:$,multiple:A,showCheckbox:M,children:Ot}),[Ot,$,M,A]),rc=v.useMemo(()=>_.jsx(z$,{onConstantOptionMount:Ra,onConstantOptionUnMount:ht,children:Ot}),[Ot]),Wr=H2(vt),jo=b1(vt),dr={icon:wo,id:"searchSelectClearIcon",onClick:Do,"aria-hidden":!0},Ho={$isOpen:Ae,onClick:Zr,"aria-hidden":!0};return _.jsxs(v6,{className:i,style:o,$focused:nn,$multiple:A,disabled:h,"data-disabled":h,$readonly:y,$isLoading:r,$dimension:$,ref:jt,"data-status":s,onClick:h||y||r?void 0:ne=>{ne.target&&bn.current?.contains(ne.target)||!gn&&Ae||Zr()},onFocus:ne=>{nn||(pn(!0),ce?.(ne))},onMouseDown:ne=>{nn&&ne.preventDefault()},$skeleton:Ce,onBlur:ne=>{ne.currentTarget.contains(ne.relatedTarget)||bn.current?.contains(ne.relatedTarget)||(pn(!1),tn(!1),ua.current?.blur(),$e?.(ne),fr.current=!1)},title:Pt,children:[rc,zo,_.jsx(_6,{ref:It(mn,ua),value:Ie,multiple:A,disabled:h,options:Pe,...vt,onChange:ne=>{if(fr.current&&gn)return void Xn(ne.target.value);const de=A?Array.from(ne.target.selectedOptions).map(mt=>mt.value):ne.target.value;let xe=[];if(A&&Array.isArray(de)){const mt=de.filter(Ln=>!Kn.current.includes(Ln)&&!Dn.current.includes(Ln)),bt=Kn.current.filter(Ln=>!de.includes(Ln)&&!Dn.current.includes(Ln));xe=[...Kn.current,...mt];const xn=[...Dn.current];bt.forEach(Ln=>{const fa=xe.findIndex(Jr=>Ln===Jr);fa>-1&&xe.splice(fa,1);const Lo=xn.findIndex(Jr=>Ln===Jr);Lo>-1&&xn.splice(Lo,1)}),Kn.current=xe,Dn.current=xn}Jl&&cr(A?xe:de),vt.onChange?.(ne),oa?.(A?xe:de)}}),_.jsx(Ca,{}),_.jsxs(X1,{tabIndex:-1,ref:sa,className:"selectValueWrapper",$dimension:$,$multiple:A,$minRowCount:w!=="none"?w:void 0,$maxRowCount:T!=="none"?T:void 0,$idleHeight:S,$opened:Ae,$isEmpty:Da,children:[dt&&ai,(b&&Da||!gn)&&_.jsx(h6,{"data-id":vt.id,placeholder:Da?b:"",tabIndex:-1,ref:vn,disabled:h,readOnly:y||gn,value:et,defaultValue:ee,$isMultiple:A,$dimension:$,onChange:ne=>{A||ue(!1),(de=>{ca.current.shouldExtendInputValue&&Hn&&(de.target.value=`${Ba}${de.target.value}`,ca.current.shouldExtendInputValue=!1)})(ne),U===void 0&&wt(ne.target.value),V?.(ne)},onKeyDown:oe,onKeyUp:Qe,onKeyUpCapture:Se,onKeyDownCapture:nt})]}),Ae&&!Ce&&_.jsx(Gh,{ref:bn,tabIndex:-1,targetElement:ei,"data-dimension":$,alignSelf:De||Ke,dropContainerCssMixin:te,className:le,style:I,...Wr,children:_.jsx(S6,{dimension:$==="xl"?"l":$,active:ge,selected:Ie,onActivateItem:ne=>ye(ne),onSelectItem:Sn,onDeselectItem:Sn,multiSelection:A,model:Il,renderTopPanel:C||J,renderBottomPanel:j||Z,containerRef:bn,virtualScroll:He,preventFocusSteal:!0,preselectedModeActive:gn,preselected:yn,onPreselectItem:Xn,onMenuKeyDown:()=>{fr.current=!0},...jo})}),_.jsxs(g6,{$multiple:A,$dimension:$,onClick:Qg,onMouseDown:ne=>ne.preventDefault(),children:[r&&_.jsx(Wh,{dimension:$==="s"?"ms":"m"}),P&&!y&&Bo&&_.jsx(fo,{...dr,...qt(dr)}),f,!y&&_.jsx(L2,{"data-disabled":!!h||void 0,"data-loading":!!r||void 0,...Ho,...Qt(Ho)})]})]})});ro.displayName="Select";var Xg;function ah(){return ah=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},ah.apply(null,arguments)}var U6=function(e){return v.createElement("svg",ah({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Xg||(Xg=v.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M20.65 18c0 1.66-1.35 3-3 3h-8c-1.31 0-2.43-.84-2.84-2.01q-.36-.015-.69-.12a.65.65 0 0 1-.43-.81c.1-.35.46-.54.81-.44.05.02.1.03.15.04V8c0-1.66 1.34-3 3-3h7.16a1 1 0 0 0-.04-.15.64.64 0 0 1 .43-.81c.35-.11.71.09.81.43q.09.27.12.57A3 3 0 0 1 20.65 8zm-11 1.7h8c.93 0 1.7-.76 1.7-1.7V8c0-.94-.77-1.7-1.7-1.7h-8c-.94 0-1.71.76-1.71 1.7v10c0 .94.77 1.7 1.71 1.7m-4.28-3.2c.02.06.03.12.03.19a.647.647 0 0 1-1.27.18C4.04 16.6 4 16.3 4 16v-.95c0-.35.29-.65.65-.65.35 0 .65.3.65.65V16c0 .17.02.34.07.5m-.07-4.56c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65v-1.89c0-.36.29-.65.65-.65.35 0 .65.29.65.65zm0-5c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65v-.95c0-.36.05-.72.15-1.06.11-.34.47-.54.82-.43a.64.64 0 0 1 .43.81c-.07.21-.1.45-.1.68zm1.66-3.19c-.34.1-.71-.09-.81-.44a.6.6 0 0 1-.03-.19c0-.27.18-.53.46-.62.34-.1.7-.16 1.07-.16h.64c.36 0 .65.3.65.65 0 .36-.29.65-.65.65h-.64c-.24 0-.47.04-.69.11m9.06-1.27a.64.64 0 0 1 .43.81c-.1.34-.47.53-.81.43-.16-.05-.32-.08-.5-.08h-.77c-.36 0-.65-.29-.65-.65 0-.35.29-.65.65-.65h.77c.31 0 .6.05.88.14m-5.6 1.16c-.35 0-.65-.29-.65-.65 0-.35.3-.65.65-.65h1.42c.36 0 .65.3.65.65 0 .36-.29.65-.65.65z"})))};const rh=e=>{switch(e.$dimension){case"xl":default:return 24;case"s":return 20}},em=e=>{switch(e.$dimension){case"xl":return 16;case"m":default:return 8;case"s":return 6}},tm=e=>{switch(e.$dimension){case"xl":case"m":default:return 16;case"s":return 12}},k6=Q`
  padding-right: ${e=>tm(e)+(e.$iconsAfterCount?rh(e)+8:0)}px;
`,P6=Q`
  background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,Vt=Y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid var(--admiral-color-Neutral_Neutral40, ${e=>e.theme.color["Neutral/Neutral 40"]});
  border-radius: inherit;

  [data-status='error'] &&& {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] &&& {
    border: 1px solid var(--admiral-color-Success_Success50Main, ${e=>e.theme.color["Success/Success 50 Main"]});
  }

  [data-read-only] &&& {
    border-color: transparent;
  }
`,q6=Q`
  background-color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});

  &:focus + ${Vt} {
    border: 2px solid var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:disabled + ${Vt}, [data-read-only] &&& + ${Vt} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${Vt} {
    border-color: ${e=>e.disabled?"transparent":`var(--admiral-color-Neutral_Neutral60, ${e.theme.color["Neutral/Neutral 60"]})`};
  }

  &:user-invalid + ${Vt}, &:user-invalid:hover + ${Vt} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }

  [data-status='error']
    &&&:hover:not(:disabled)
    + ${Vt},
    &:user-invalid:hover:not(:disabled)
    + ${Vt} {
    border: 1px solid var(--admiral-color-Error_Error70, ${e=>e.theme.color["Error/Error 70"]});
  }

  [data-status='success'] &&&:hover:not(:disabled) + ${Vt} {
    border: 1px solid var(--admiral-color-Success_Success60, ${e=>e.theme.color["Success/Success 60"]});
  }

  [data-status='error']
    &&&:focus:not(:disabled)
    + ${Vt},
    &:user-invalid:focus:not(:disabled)
    + ${Vt} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] &&&:focus:not(:disabled) + ${Vt} {
    border: 2px solid var(--admiral-color-Success_Success50Main, ${e=>e.theme.color["Success/Success 50 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${P6}
  }

  [data-read-only] &&&:hover + ${Vt}, [data-read-only] &&&:focus + ${Vt} {
    border-color: transparent;
  }
`,F6=Q`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,J1=Q`
  outline: none;
  appearance: none;
  border-radius: inherit;
  border: none;
  box-sizing: border-box;
  margin: 0;
  padding: ${em}px ${tm}px;
  overflow-wrap: break-word;

  ${e=>e.$dimension==="s"?be["Body/Body 2 Long"]:be["Body/Body 1 Long"]}
  ${q6}
  ${k6}
`,V6=Y.div`
  ${Qh}
  ${J1}

  [data-disable-copying] & {
    cursor: default;
  }
`,G6=Y.textarea`
  ${Qh}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  resize: none;

  flex: 1 1 auto;
  min-width: 10px;
  background: transparent;

  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});

  ${e=>e.$dimension==="s"?be["Body/Body 2 Long"]:be["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder,
  &:disabled {
    cursor: not-allowed;
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  ${J1}
  ${F6}
`,Q6=Y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: ${tm}px;
  padding-top: ${em}px;

  & > * {
    display: block;
    width: ${rh}px;
    height: ${rh}px;
  }
`;function Y6(e){return e}const X6=e=>e.preventDefault(),gd=(e,r)=>e*(r==="s"?20:24)+2*em({$dimension:r}),K6=Y(k1)`
  min-height: ${e=>gd(e.$rows,e.$dimension)}px;
  ${e=>e.$maxRows?`max-height: ${gd(e.$maxRows,e.$dimension)}px;`:""}
  ${e=>e.$autoHeight?"":`height: ${gd(e.$rows,e.$dimension)}px;`}
  ${e=>e.disabled?"cursor: not-allowed;":""}
`,Z6=Qw(v.forwardRef((e,r)=>_.jsx("div",{ref:r,children:_.jsx(fo,{...e})})));function Kg(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/(\r?\n)$/g,"<br /><br />").replace(/\r?\n/g,"<br /> ")}const Zg=()=>{},nm=v.forwardRef(({rows:e=3,maxRows:r,value:i,displayClearIcon:o,displayCopyIcon:s,status:f,handleInput:d=Y6,containerRef:p,icons:m,iconsAfter:h,children:y,className:b,autoHeight:x,skeleton:$=!1,dimension:S="m",disableCopying:w,locale:T,clearIconPropsConfig:N=Zg,copyIconPropsConfig:A=Zg,...M},P)=>{const H=Fh()||Hs,V=v.useRef(null),[U,ee]=v.useState(null),re=v.useRef(null),ce=v.Children.toArray(h||m),$e=T?.copyTextMessage||H.locales[H.currentLocale]?.textArea?.copyTextMessage,Re=T?.copiedMessage||H.locales[H.currentLocale]?.textArea?.copiedMessage,[De,Ke]=v.useState($e),Ce=C=>{C.preventDefault()},q={icon:wo,onMouseDown:Ce,onClick:()=>{V.current&&hn(V.current,{value:""})},"aria-hidden":!0},te={tooltipDimension:"s",renderContent:()=>De,icon:U6,onMouseDown:Ce,onClick:()=>{document.hasFocus()||window.focus(),V.current&&(navigator.clipboard.writeText(V.current.value),Ke(Re),setTimeout(()=>Ke($e),2e3))},"aria-hidden":!0};!M.readOnly&&V?.current?.value&&(o?ce.unshift(v.createElement(fo,{...q,...N(q),key:"clear-icon"})):s&&ce.unshift(v.createElement(Z6,{...te,...A(te),key:"copy-icon"})));const le=ce.length,I=i!=null?d({value:String(i)}):{};return v.useLayoutEffect(()=>{function C(){const{value:j,selectionStart:J,selectionEnd:Z}=this,ae=d({value:j,selectionStart:J,selectionEnd:Z});hn(this,ae)}if(V.current){const j=V.current;j.addEventListener("input",C);const{value:J,selectionStart:Z,selectionEnd:ae}=j,fe=d({value:J,selectionStart:Z,selectionEnd:ae});return hn(j,fe),()=>{j.removeEventListener("input",C)}}},[d]),v.useEffect(()=>{function C(){const{value:j}=this,J=re.current;J&&(J.innerHTML=Kg(j),this.style.overflowY=J.clientHeight<J.scrollHeight?"":"hidden")}if(x&&V.current&&re.current){const j=V.current;return re.current.innerHTML=Kg(j.value),j.addEventListener("input",C),j.style.overflowY=re.current.clientHeight<re.current.scrollHeight?"":"hidden",()=>{j.removeEventListener("input",C),j.style.overflowY=""}}},[x,I.value,M.defaultValue]),_.jsxs(K6,{className:b,ref:p,"data-read-only":!!M.readOnly||void 0,"data-status":f,$skeleton:$,disabled:M.disabled,"data-disable-copying":!!w||void 0,$autoHeight:!!x,$rows:e,$maxRows:r,$dimension:S,...w&&{onMouseDown:X6},children:[_.jsx(V6,{ref:re,$dimension:S,disabled:M.disabled,$iconsAfterCount:le}),_.jsx(G6,{ref:It(P,V,C=>ee(C)),...M,$dimension:S,$iconsAfterCount:le,$autoHeight:x,value:I.value}),_.jsx(Vt,{}),_.jsx(w1,{contentNode:U}),le>0&&_.jsx(Q6,{disabled:M.disabled,$dimension:S,children:ce}),y]})});nm.displayName="TextArea";var Wg;function lh(){return lh=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},lh.apply(null,arguments)}var W6=function(e){return v.createElement("svg",lh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Wg||(Wg=v.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M16.04 3.88c.51-.51 1.33-.51 1.84 0l1.16 1.24c.5.5.5 1.33 0 1.83l-1.12 1.12a.7.7 0 0 1-1 0L14.9 5.99a.694.694 0 0 1 .01-.98zM14 6.93 16.01 9c.27.27.27.71 0 .98l-7.45 7.45c-.39.39-.9.67-1.44.8l-1.73.4c-.94.21-1.24-.17-1.02-1.1l.4-1.73c.12-.55.4-1.05.8-1.45L13 6.92c.27-.28.72-.27 1 .01"})))},Jg;function ih(){return ih=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},ih.apply(null,arguments)}var J6=function(e){return v.createElement("svg",ih({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Jg||(Jg=v.createElement("path",{fill:"#74767B",d:"M10.5 16.54c.28.28.74.27 1.01-.02l6.48-6.98c.24-.27.22-.68-.04-.92a.65.65 0 0 0-.92.04l-6.05 6.52-3.85-3.79a.66.66 0 0 0-.92 0c-.25.25-.25.67 0 .92z"})))};const am=Q`
  [data-dimension='s'] & {
    ${be["Body/Body 2 Long"]}
  }

  [data-dimension='s-bold'] & {
    ${be["Subtitle/Subtitle 3"]}
  }

  [data-dimension='m'] & {
    ${be["Body/Body 1 Long"]}
  }

  [data-dimension='m-bold'] & {
    ${be["Subtitle/Subtitle 2"]}
  }

  [data-dimension='xl'] & {
    ${be["Header/H5"]}
  }

  [data-dimension='xxl'] & {
    ${be["Header/H4"]}
  }
`,I6=Y(q1)`
  flex: 1 1 auto;
  & input {
    ${am}
  }
`;Y(nm)`
  flex: 1 1 auto;
  & textarea,
  & :first-child {
    ${am}
  }
`;const Ig=Y(D1)`
  margin-left: 4px;
  flex-shrink: 0;
  ${e=>e.$multiline&&"align-self: flex-start;"}
`,e3=Q`
  align-self: flex-start;

  [data-dimension='s-bold'] &&&,
  [data-dimension='s'] &&& {
    margin-top: 6px;
  }

  [data-dimension='m'] &&&,
  [data-dimension='m-bold'] &&& {
    margin-top: 8px;
  }

  [data-dimension='xl'] &&& {
    margin-top: 14px;
  }

  [data-dimension='xxl'] &&& {
    margin-top: 16px;
  }
`,rm=Q`
  display: flex;
  flex-shrink: 0;
  user-select: none;
`,I1=Y(W6)`
  ${rm}
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }
  cursor: pointer;

  [data-disabled='true'] & {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
  [data-disabled='false'] & {
    &:hover {
      & *[fill^='#'] {
        fill: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
      }
    }
  }

  ${e=>e.$multiline&&e3}
`,t3=Y(J6)`
  ${rm}
`,n3=Y(wo)`
  ${rm}
`,a3=Y.div`
  display: flex;
  align-items: center;
  ${({$cssMixin:e})=>e||""};
`,r3=Q`
  overflow-wrap: anywhere;
  height: auto;
  white-space: normal;

  [data-dimension='s-bold'] &&&,
  [data-dimension='s'] &&& {
    padding-top: 6px;
    padding-bottom: 6px;
  }

  [data-dimension='m'] &&&,
  [data-dimension='m-bold'] &&& {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  [data-dimension='xl'] &&& {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  [data-dimension='xxl'] &&& {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,l3=Q`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  [data-dimension='s'] &&& {
    height: 32px;
    line-height: 32px;
  }

  [data-dimension='s-bold'] &&& {
    height: 32px;
    line-height: 32px;
  }

  [data-dimension='m'] &&& {
    height: 40px;
    line-height: 40px;
  }

  [data-dimension='m-bold'] &&& {
    height: 40px;
    line-height: 40px;
  }

  [data-dimension='xl'] &&& {
    height: 56px;
    line-height: 56px;
  }

  [data-dimension='xxl'] &&& {
    height: 56px;
    line-height: 56px;
  }
`,i3=Y.div`
  display: block;

  align-items: center;
  cursor: text;
  margin-right: 12px;
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});

  ${am};
  ${e=>e.$multiline?r3:l3}

  [data-disabled='true'] & {
    cursor: default;
    pointer-events: none;
  }

  [data-disabled='false'] & {
    &:hover {
      & + ${I1} *[fill^='#'] {
        fill: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
      }
    }
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }
`,o3=e=>e.preventDefault(),vd=()=>{},eb=v.forwardRef(({dimension:e="m",bold:r=!1,containerCssMixin:i,disabled:o=!1,onEdit:s,onConfirm:f,onCancel:d,onClear:p,value:m,showTooltip:h=!0,multilineView:y=!1,confirmButtonPropsConfig:b=vd,cancelButtonPropsConfig:x=vd,editButtonPropsConfig:$=vd,...S},w)=>{const[T,N]=v.useState(!1),[A,M]=v.useState(m),P=e==="s"?20:24,H=v.useRef(null),V=v.useRef(null),[U,ee]=v.useState(!1),[re,ce]=v.useState(!1),[$e,Re]=v.useState(null),De=v.useRef(null);v.useLayoutEffect(()=>{function I(){ce(!0)}function C(){ce(!1)}if($e)return $e.addEventListener("mouseenter",I),$e.addEventListener("mouseleave",C),()=>{$e.removeEventListener("mouseenter",I),$e.removeEventListener("mouseleave",C)}},[ce,$e]),v.useLayoutEffect(()=>{De.current&&Aa(De.current)!==U&&ee(Aa(De.current))},[re,De.current,ee]);const Ke=()=>{N(!0),M(m),s?.(m)},Ce=e==="xxl"?"xl":e,q={appearance:"secondary",dimension:Ce,displayAsSquare:!0,disabled:S.status==="error",onClick:()=>{if(N(!1),H.current){const I=H.current.value;f?.(I)}},iconStart:_.jsx(t3,{height:P,width:P}),$multiline:!1},te={appearance:"secondary",dimension:Ce,displayAsSquare:!0,disabled:S.status==="error",onClick:()=>{N(!1),H.current&&(hn(H.current,{value:A.toString()}),d?.(A),p?.())},iconStart:_.jsx(n3,{height:P,width:P}),$multiline:!1},le={$multiline:y,height:P,width:P,onClick:o?void 0:Ke};return _.jsx(a3,{"data-dimension":`${e}${r&&Ce!=="xl"?"-bold":""}`,"data-disabled":o,$cssMixin:i,ref:V,"data-disable-copying":!!S.disableCopying||void 0,...S.disableCopying&&{onMouseDown:o3},children:T?!o&&!S.readOnly&&_.jsxs(_.Fragment,{children:[_.jsx(I6,{ref:It(w,H),autoFocus:!0,disabled:o,dimension:Ce,value:m,containerRef:V,...S}),_.jsx(Ig,{...q,...b(q)}),_.jsx(Ig,{...te,...x(te)})]}):_.jsxs(_.Fragment,{children:[_.jsx(i3,{ref:It(De,Re),$multiline:y,onClick:S.readOnly?void 0:Ke,children:m}),h&&re&&U&&_.jsx(Fr,{renderContent:()=>m,targetElement:De.current}),!S.readOnly&&_.jsx(I1,{...le,...$(le)})]})})});eb.displayName="EditMode";const u3=Q`
  background: ${({$background:e,theme:r})=>{switch(e){case"success":case"green":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning50Main, ${r.color["Warning/Warning 50 Main"]})`;default:return e}}};
`,s3=Q`
  background: ${({$background:e,theme:r})=>{switch(e){case"success":case"green":return`var(--admiral-color-Success_Success10, ${r.color["Success/Success 10"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary10, ${r.color["Primary/Primary 10"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error10, ${r.color["Error/Error 10"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning10, ${r.color["Warning/Warning 10"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`;default:return e||`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`}}};
`,c3=Q`
  border: 1px solid
    ${({$border:e,theme:r})=>{switch(e){case"success":case"green":return`var(--admiral-color-Success_Success40, ${r.color["Success/Success 40"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary50, ${r.color["Primary/Primary 50"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error50, ${r.color["Error/Error 50"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning40, ${r.color["Warning/Warning 40"]})`;case"neutral":return`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`;default:return e||`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`}}};
`,f3=Q`
  background: ${({$backgroundHover:e,theme:r})=>{switch(e){case"success":case"green":return`var(--admiral-color-Success_Success20, ${r.color["Success/Success 20"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary20, ${r.color["Primary/Primary 20"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error20, ${r.color["Error/Error 20"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning20, ${r.color["Warning/Warning 20"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]})`;default:return e||`var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]})`}}};
`,d3=Y.button`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;

  ${({$dimension:e})=>`
    height: ${e==="s"?20:24}px;
    padding: ${e==="s"?1:3}px ${e==="s"?5:7}px;
  `}

  ${({$width:e})=>e&&`width: ${typeof e=="number"?`${e}px`:e};`}
  border-radius: var(--admiral-border-radius-Small, ${e=>Pl(e.theme.shape)});
  ${({$statusViaBackground:e,theme:r})=>e?s3:`background: var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]});`}
  ${({$statusViaBackground:e})=>e?c3:"border: 1px solid transparent;"}

  display: inline-flex;
  align-items: center;
  cursor: ${({$clickable:e})=>e?"pointer":"default"};

  &:hover,
  &:active {
    ${({$statusViaBackground:e,$clickable:r})=>r&&!e?"border: 1px solid transparent;":""}
    ${({$statusViaBackground:e,theme:r,$clickable:i})=>i?e?f3:`background: var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]});`:""}
  }

  &:focus-visible {
    outline: none;

    &:before {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: var(--admiral-border-radius-Small, ${e=>Pl(e.theme.shape)});
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    }
  }
`,h3=Y.span`
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${be["Caption/Caption 1"]}
`,m3=Y.div`
  display: flex;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  ${u3}
`,p3=Y.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }
`,y3=Y.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-left: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }

  &:hover {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
    }
  }
`,is=v.forwardRef(({children:e,kind:r="neutral",dimension:i="m",width:o,statusViaBackground:s=!1,isBorderHidden:f=!1,icon:d,statusIcon:p,onClick:m,...h},y)=>{const b=v.useRef(null),x=v.useRef(null),[$,S]=v.useState(!1),[w,T]=v.useState(!1),N=typeof r=="object"?r.background?r.background:"neutral":r,A=f?"transparent":typeof r=="object"?r.background&&r.border?r.border:"neutral":r,M=typeof r=="object"?r.backgroundHover?r.backgroundHover:r.background?r.background:"neutral":r;return v.useLayoutEffect(()=>{const P=x.current;P&&Aa(P)!==$&&S(Aa(P))},[w,S]),v.useLayoutEffect(()=>{function P(){T(!0)}function H(){T(!1)}const V=b.current;if(V)return V.addEventListener("mouseenter",P),V.addEventListener("mouseleave",H),V.addEventListener("focus",P),V.addEventListener("blur",H),()=>{V.removeEventListener("mouseenter",P),V.removeEventListener("mouseleave",H),V.removeEventListener("focus",P),V.removeEventListener("blur",H)}},[T]),_.jsxs(_.Fragment,{children:[_.jsxs(d3,{ref:It(y,b),$width:o,onClick:m,$clickable:!!m,$statusViaBackground:s,$border:A,$background:N,$backgroundHover:M,$dimension:i,type:"button",...h,children:[N!=="neutral"&&!s&&_.jsx(m3,{$background:N}),s&&d&&_.jsx(p3,{children:d}),e&&_.jsx(h3,{ref:x,children:e}),p&&_.jsx(y3,{children:p})]}),w&&$&&_.jsx(Fr,{targetElement:b.current,renderContent:()=>e})]})});is.displayName="Tag";const g3=Y.div`
  display: flex;
  flex-flow: wrap;
  gap: 8px;
`,tb=({children:e,width:r,dimension:i,kind:o,isBorderHidden:s,statusViaBackground:f,onClick:d,...p})=>_.jsx(g3,{...p,children:v.Children.map(e,m=>v.isValidElement(m)?v.cloneElement(m,{onClick:m.props.onClick||d,width:m.props.width||r,kind:m.props.kind||o,statusViaBackground:m.props.statusViaBackground||f,isBorderHidden:m.props.isBorderHidden||s,...m.props,dimension:i}):null)});tb.displayName="Tags";const v3="/assets/VTBGroupUI-SemiBold-Wupg3RVc.ttf",b3="/assets/VTBGroupUI-Medium-CJW7SkqK.otf",S3="/assets/VTBGroupUI-Regular-JWIonCWQ.otf",x3=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${v3}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${b3}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${S3}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`;function E3(e){return _.jsx("style",{type:"text/css",children:x3,...e})}var Ji={},ev;function w3(){if(ev)return Ji;ev=1,Object.defineProperty(Ji,"__esModule",{value:!0}),Ji.parse=d,Ji.serialize=h;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,f=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,$){const S=new f,w=x.length;if(w<2)return S;const T=$?.decode||y;let N=0;do{const A=x.indexOf("=",N);if(A===-1)break;const M=x.indexOf(";",N),P=M===-1?w:M;if(A>P){N=x.lastIndexOf(";",A-1)+1;continue}const H=p(x,N,A),V=m(x,A,H),U=x.slice(H,V);if(S[U]===void 0){let ee=p(x,A+1,P),re=m(x,P,ee);const ce=T(x.slice(ee,re));S[U]=ce}N=P+1}while(N<w);return S}function p(x,$,S){do{const w=x.charCodeAt($);if(w!==32&&w!==9)return $}while(++$<S);return S}function m(x,$,S){for(;$>S;){const w=x.charCodeAt(--$);if(w!==32&&w!==9)return $+1}return S}function h(x,$,S){const w=S?.encode||encodeURIComponent;if(!e.test(x))throw new TypeError(`argument name is invalid: ${x}`);const T=w($);if(!r.test(T))throw new TypeError(`argument val is invalid: ${$}`);let N=x+"="+T;if(!S)return N;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);N+="; Max-Age="+S.maxAge}if(S.domain){if(!i.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);N+="; Domain="+S.domain}if(S.path){if(!o.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);N+="; Path="+S.path}if(S.expires){if(!b(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);N+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(N+="; HttpOnly"),S.secure&&(N+="; Secure"),S.partitioned&&(N+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":N+="; Priority=Low";break;case"medium":N+="; Priority=Medium";break;case"high":N+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":N+="; SameSite=Strict";break;case"lax":N+="; SameSite=Lax";break;case"none":N+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return N}function y(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function b(x){return s.call(x)==="[object Date]"}return Ji}w3();var tv="popstate";function $3(e={}){function r(o,s){let{pathname:f,search:d,hash:p}=o.location;return oh("",{pathname:f,search:d,hash:p},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(o,s){return typeof s=="string"?s:mo(s)}return _3(r,i,null,e)}function ot(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function ra(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function N3(){return Math.random().toString(36).substring(2,10)}function nv(e,r){return{usr:e.state,key:e.key,idx:r}}function oh(e,r,i=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof r=="string"?Ql(r):r,state:i,key:r&&r.key||o||N3()}}function mo({pathname:e="/",search:r="",hash:i=""}){return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ql(e){let r={};if(e){let i=e.indexOf("#");i>=0&&(r.hash=e.substring(i),e=e.substring(0,i));let o=e.indexOf("?");o>=0&&(r.search=e.substring(o),e=e.substring(0,o)),e&&(r.pathname=e)}return r}function _3(e,r,i,o={}){let{window:s=document.defaultView,v5Compat:f=!1}=o,d=s.history,p="POP",m=null,h=y();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function y(){return(d.state||{idx:null}).idx}function b(){p="POP";let T=y(),N=T==null?null:T-h;h=T,m&&m({action:p,location:w.location,delta:N})}function x(T,N){p="PUSH";let A=oh(w.location,T,N);h=y()+1;let M=nv(A,h),P=w.createHref(A);try{d.pushState(M,"",P)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;s.location.assign(P)}f&&m&&m({action:p,location:w.location,delta:1})}function $(T,N){p="REPLACE";let A=oh(w.location,T,N);h=y();let M=nv(A,h),P=w.createHref(A);d.replaceState(M,"",P),f&&m&&m({action:p,location:w.location,delta:0})}function S(T){return C3(T)}let w={get action(){return p},get location(){return e(s,d)},listen(T){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(tv,b),m=T,()=>{s.removeEventListener(tv,b),m=null}},createHref(T){return r(s,T)},createURL:S,encodeLocation(T){let N=S(T);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:x,replace:$,go(T){return d.go(T)}};return w}function C3(e,r=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),ot(i,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:mo(e);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=i+o),new URL(o,i)}function nb(e,r,i="/"){return T3(e,r,i,!1)}function T3(e,r,i,o){let s=typeof r=="string"?Ql(r):r,f=Ma(s.pathname||"/",i);if(f==null)return null;let d=ab(e);O3(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let h=k3(f);p=L3(d[m],h,o)}return p}function ab(e,r=[],i=[],o=""){let s=(f,d,p)=>{let m={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};m.relativePath.startsWith("/")&&(ot(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length));let h=Oa([o,m.relativePath]),y=i.concat(m);f.children&&f.children.length>0&&(ot(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),ab(f.children,r,y,h)),!(f.path==null&&!f.index)&&r.push({path:h,score:j3(h,f.index),routesMeta:y})};return e.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))s(f,d);else for(let p of rb(f.path))s(f,d,p)}),r}function rb(e){let r=e.split("/");if(r.length===0)return[];let[i,...o]=r,s=i.endsWith("?"),f=i.replace(/\?$/,"");if(o.length===0)return s?[f,""]:[f];let d=rb(o.join("/")),p=[];return p.push(...d.map(m=>m===""?f:[f,m].join("/"))),s&&p.push(...d),p.map(m=>e.startsWith("/")&&m===""?"/":m)}function O3(e){e.sort((r,i)=>r.score!==i.score?i.score-r.score:H3(r.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var A3=/^:[\w-]+$/,M3=3,R3=2,D3=1,B3=10,z3=-2,av=e=>e==="*";function j3(e,r){let i=e.split("/"),o=i.length;return i.some(av)&&(o+=z3),r&&(o+=R3),i.filter(s=>!av(s)).reduce((s,f)=>s+(A3.test(f)?M3:f===""?D3:B3),o)}function H3(e,r){return e.length===r.length&&e.slice(0,-1).every((o,s)=>o===r[s])?e[e.length-1]-r[r.length-1]:0}function L3(e,r,i=!1){let{routesMeta:o}=e,s={},f="/",d=[];for(let p=0;p<o.length;++p){let m=o[p],h=p===o.length-1,y=f==="/"?r:r.slice(f.length)||"/",b=xs({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},y),x=m.route;if(!b&&h&&i&&!o[o.length-1].route.index&&(b=xs({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!b)return null;Object.assign(s,b.params),d.push({params:s,pathname:Oa([f,b.pathname]),pathnameBase:V3(Oa([f,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(f=Oa([f,b.pathnameBase]))}return d}function xs(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,o]=U3(e.path,e.caseSensitive,e.end),s=r.match(i);if(!s)return null;let f=s[0],d=f.replace(/(.)\/+$/,"$1"),p=s.slice(1);return{params:o.reduce((h,{paramName:y,isOptional:b},x)=>{if(y==="*"){let S=p[x]||"";d=f.slice(0,f.length-S.length).replace(/(.)\/+$/,"$1")}const $=p[x];return b&&!$?h[y]=void 0:h[y]=($||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:d,pattern:e}}function U3(e,r=!1,i=!0){ra(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(o.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),o]}function k3(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return ra(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),e}}function Ma(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,o=e.charAt(i);return o&&o!=="/"?null:e.slice(i)||"/"}function P3(e,r="/"){let{pathname:i,search:o="",hash:s=""}=typeof e=="string"?Ql(e):e;return{pathname:i?i.startsWith("/")?i:q3(i,r):r,search:G3(o),hash:Q3(s)}}function q3(e,r){let i=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function bd(e,r,i,o){return`Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function F3(e){return e.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function lb(e){let r=F3(e);return r.map((i,o)=>o===r.length-1?i.pathname:i.pathnameBase)}function ib(e,r,i,o=!1){let s;typeof e=="string"?s=Ql(e):(s={...e},ot(!s.pathname||!s.pathname.includes("?"),bd("?","pathname","search",s)),ot(!s.pathname||!s.pathname.includes("#"),bd("#","pathname","hash",s)),ot(!s.search||!s.search.includes("#"),bd("#","search","hash",s)));let f=e===""||s.pathname==="",d=f?"/":s.pathname,p;if(d==null)p=i;else{let b=r.length-1;if(!o&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),b-=1;s.pathname=x.join("/")}p=b>=0?r[b]:"/"}let m=P3(s,p),h=d&&d!=="/"&&d.endsWith("/"),y=(f||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||y)&&(m.pathname+="/"),m}var Oa=e=>e.join("/").replace(/\/\/+/g,"/"),V3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),G3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Q3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Y3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var ob=["POST","PUT","PATCH","DELETE"];new Set(ob);var X3=["GET",...ob];new Set(X3);var Yl=v.createContext(null);Yl.displayName="DataRouter";var Us=v.createContext(null);Us.displayName="DataRouterState";var ub=v.createContext({isTransitioning:!1});ub.displayName="ViewTransition";var K3=v.createContext(new Map);K3.displayName="Fetchers";var Z3=v.createContext(null);Z3.displayName="Await";var la=v.createContext(null);la.displayName="Navigation";var $o=v.createContext(null);$o.displayName="Location";var ia=v.createContext({outlet:null,matches:[],isDataRoute:!1});ia.displayName="Route";var lm=v.createContext(null);lm.displayName="RouteError";function W3(e,{relative:r}={}){ot(No(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=v.useContext(la),{hash:s,pathname:f,search:d}=_o(e,{relative:r}),p=f;return i!=="/"&&(p=f==="/"?i:Oa([i,f])),o.createHref({pathname:p,search:d,hash:s})}function No(){return v.useContext($o)!=null}function Vr(){return ot(No(),"useLocation() may be used only in the context of a <Router> component."),v.useContext($o).location}var sb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cb(e){v.useContext(la).static||v.useLayoutEffect(e)}function im(){let{isDataRoute:e}=v.useContext(ia);return e?f4():J3()}function J3(){ot(No(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(Yl),{basename:r,navigator:i}=v.useContext(la),{matches:o}=v.useContext(ia),{pathname:s}=Vr(),f=JSON.stringify(lb(o)),d=v.useRef(!1);return cb(()=>{d.current=!0}),v.useCallback((m,h={})=>{if(ra(d.current,sb),!d.current)return;if(typeof m=="number"){i.go(m);return}let y=ib(m,JSON.parse(f),s,h.relative==="path");e==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:Oa([r,y.pathname])),(h.replace?i.replace:i.push)(y,h.state,h)},[r,i,f,s,e])}v.createContext(null);function I3(){let{matches:e}=v.useContext(ia),r=e[e.length-1];return r?r.params:{}}function _o(e,{relative:r}={}){let{matches:i}=v.useContext(ia),{pathname:o}=Vr(),s=JSON.stringify(lb(i));return v.useMemo(()=>ib(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function e4(e,r){return fb(e,r)}function fb(e,r,i,o){ot(No(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=v.useContext(la),{matches:f}=v.useContext(ia),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",h=d?d.pathnameBase:"/",y=d&&d.route;{let N=y&&y.path||"";db(m,!y||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let b=Vr(),x;if(r){let N=typeof r=="string"?Ql(r):r;ot(h==="/"||N.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${N.pathname}" was given in the \`location\` prop.`),x=N}else x=b;let $=x.pathname||"/",S=$;if(h!=="/"){let N=h.replace(/^\//,"").split("/");S="/"+$.replace(/^\//,"").split("/").slice(N.length).join("/")}let w=nb(e,{pathname:S});ra(y||w!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),ra(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=l4(w&&w.map(N=>Object.assign({},N,{params:Object.assign({},p,N.params),pathname:Oa([h,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?h:Oa([h,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),f,i,o);return r&&T?v.createElement($o.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},T):T}function t4(){let e=c4(),r=Y3(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:f},"ErrorBoundary")," or"," ",v.createElement("code",{style:f},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},r),i?v.createElement("pre",{style:s},i):null,d)}var n4=v.createElement(t4,null),a4=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?v.createElement(ia.Provider,{value:this.props.routeContext},v.createElement(lm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function r4({routeContext:e,match:r,children:i}){let o=v.useContext(Yl);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(ia.Provider,{value:e},i)}function l4(e,r=[],i=null,o=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(r.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let s=e,f=i?.errors;if(f!=null){let m=s.findIndex(h=>h.route.id&&f?.[h.route.id]!==void 0);ot(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let d=!1,p=-1;if(i)for(let m=0;m<s.length;m++){let h=s[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(p=m),h.route.id){let{loaderData:y,errors:b}=i,x=h.route.loader&&!y.hasOwnProperty(h.route.id)&&(!b||b[h.route.id]===void 0);if(h.route.lazy||x){d=!0,p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}return s.reduceRight((m,h,y)=>{let b,x=!1,$=null,S=null;i&&(b=f&&h.route.id?f[h.route.id]:void 0,$=h.route.errorElement||n4,d&&(p<0&&y===0?(db("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,S=null):p===y&&(x=!0,S=h.route.hydrateFallbackElement||null)));let w=r.concat(s.slice(0,y+1)),T=()=>{let N;return b?N=$:x?N=S:h.route.Component?N=v.createElement(h.route.Component,null):h.route.element?N=h.route.element:N=m,v.createElement(r4,{match:h,routeContext:{outlet:m,matches:w,isDataRoute:i!=null},children:N})};return i&&(h.route.ErrorBoundary||h.route.errorElement||y===0)?v.createElement(a4,{location:i.location,revalidation:i.revalidation,component:$,error:b,children:T(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):T()},null)}function om(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i4(e){let r=v.useContext(Yl);return ot(r,om(e)),r}function o4(e){let r=v.useContext(Us);return ot(r,om(e)),r}function u4(e){let r=v.useContext(ia);return ot(r,om(e)),r}function um(e){let r=u4(e),i=r.matches[r.matches.length-1];return ot(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function s4(){return um("useRouteId")}function c4(){let e=v.useContext(lm),r=o4("useRouteError"),i=um("useRouteError");return e!==void 0?e:r.errors?.[i]}function f4(){let{router:e}=i4("useNavigate"),r=um("useNavigate"),i=v.useRef(!1);return cb(()=>{i.current=!0}),v.useCallback(async(s,f={})=>{ra(i.current,sb),i.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:r,...f}))},[e,r])}var rv={};function db(e,r,i){!r&&!rv[e]&&(rv[e]=!0,ra(!1,i))}v.memo(d4);function d4({routes:e,future:r,state:i}){return fb(e,void 0,i,r)}function os(e){ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function h4({basename:e="/",children:r=null,location:i,navigationType:o="POP",navigator:s,static:f=!1}){ot(!No(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),p=v.useMemo(()=>({basename:d,navigator:s,static:f,future:{}}),[d,s,f]);typeof i=="string"&&(i=Ql(i));let{pathname:m="/",search:h="",hash:y="",state:b=null,key:x="default"}=i,$=v.useMemo(()=>{let S=Ma(m,d);return S==null?null:{location:{pathname:S,search:h,hash:y,state:b,key:x},navigationType:o}},[d,m,h,y,b,x,o]);return ra($!=null,`<Router basename="${d}"> is not able to match the URL "${m}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`),$==null?null:v.createElement(la.Provider,{value:p},v.createElement($o.Provider,{children:r,value:$}))}function m4({children:e,location:r}){return e4(uh(e),r)}function uh(e,r=[]){let i=[];return v.Children.forEach(e,(o,s)=>{if(!v.isValidElement(o))return;let f=[...r,s];if(o.type===v.Fragment){i.push.apply(i,uh(o.props.children,f));return}ot(o.type===os,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ot(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=uh(o.props.children,f)),i.push(d)}),i}var us="get",ss="application/x-www-form-urlencoded";function ks(e){return e!=null&&typeof e.tagName=="string"}function p4(e){return ks(e)&&e.tagName.toLowerCase()==="button"}function y4(e){return ks(e)&&e.tagName.toLowerCase()==="form"}function g4(e){return ks(e)&&e.tagName.toLowerCase()==="input"}function v4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function b4(e,r){return e.button===0&&(!r||r==="_self")&&!v4(e)}var Xu=null;function S4(){if(Xu===null)try{new FormData(document.createElement("form"),0),Xu=!1}catch{Xu=!0}return Xu}var x4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sd(e){return e!=null&&!x4.has(e)?(ra(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ss}"`),null):e}function E4(e,r){let i,o,s,f,d;if(y4(e)){let p=e.getAttribute("action");o=p?Ma(p,r):null,i=e.getAttribute("method")||us,s=Sd(e.getAttribute("enctype"))||ss,f=new FormData(e)}else if(p4(e)||g4(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||p.getAttribute("action");if(o=m?Ma(m,r):null,i=e.getAttribute("formmethod")||p.getAttribute("method")||us,s=Sd(e.getAttribute("formenctype"))||Sd(p.getAttribute("enctype"))||ss,f=new FormData(p,e),!S4()){let{name:h,type:y,value:b}=e;if(y==="image"){let x=h?`${h}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else h&&f.append(h,b)}}else{if(ks(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=us,o=null,s=ss,d=e}return f&&s==="text/plain"&&(d=f,f=void 0),{action:o,method:i.toLowerCase(),encType:s,formData:f,body:d}}function sm(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}async function w4(e,r){if(e.id in r)return r[e.id];try{let i=await import(e.module);return r[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $4(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function N4(e,r,i){let o=await Promise.all(e.map(async s=>{let f=r.routes[s.route.id];if(f){let d=await w4(f,i);return d.links?d.links():[]}return[]}));return O4(o.flat(1).filter($4).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function lv(e,r,i,o,s,f){let d=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return f==="assets"?r.filter((m,h)=>d(m,h)||p(m,h)):f==="data"?r.filter((m,h)=>{let y=o.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(d(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let b=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function _4(e,r,{includeHydrateFallback:i}={}){return C4(e.map(o=>{let s=r.routes[o.route.id];if(!s)return[];let f=[s.module];return s.clientActionModule&&(f=f.concat(s.clientActionModule)),s.clientLoaderModule&&(f=f.concat(s.clientLoaderModule)),i&&s.hydrateFallbackModule&&(f=f.concat(s.hydrateFallbackModule)),s.imports&&(f=f.concat(s.imports)),f}).flat(1))}function C4(e){return[...new Set(e)]}function T4(e){let r={},i=Object.keys(e).sort();for(let o of i)r[o]=e[o];return r}function O4(e,r){let i=new Set;return new Set(r),e.reduce((o,s)=>{let f=JSON.stringify(T4(s));return i.has(f)||(i.add(f),o.push({key:f,link:s})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var A4=new Set([100,101,204,205]);function M4(e,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname="_root.data":r&&Ma(i.pathname,r)==="/"?i.pathname=`${r.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function hb(){let e=v.useContext(Yl);return sm(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function R4(){let e=v.useContext(Us);return sm(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var cm=v.createContext(void 0);cm.displayName="FrameworkContext";function mb(){let e=v.useContext(cm);return sm(e,"You must render this element inside a <HydratedRouter> element"),e}function D4(e,r){let i=v.useContext(cm),[o,s]=v.useState(!1),[f,d]=v.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:y,onTouchStart:b}=r,x=v.useRef(null);v.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let w=N=>{N.forEach(A=>{d(A.isIntersecting)})},T=new IntersectionObserver(w,{threshold:.5});return x.current&&T.observe(x.current),()=>{T.disconnect()}}},[e]),v.useEffect(()=>{if(o){let w=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(w)}}},[o]);let $=()=>{s(!0)},S=()=>{s(!1),d(!1)};return i?e!=="intent"?[f,x,{}]:[f,x,{onFocus:Ii(p,$),onBlur:Ii(m,S),onMouseEnter:Ii(h,$),onMouseLeave:Ii(y,S),onTouchStart:Ii(b,$)}]:[!1,x,{}]}function Ii(e,r){return i=>{e&&e(i),i.defaultPrevented||r(i)}}function B4({page:e,...r}){let{router:i}=hb(),o=v.useMemo(()=>nb(i.routes,e,i.basename),[i.routes,e,i.basename]);return o?v.createElement(j4,{page:e,matches:o,...r}):null}function z4(e){let{manifest:r,routeModules:i}=mb(),[o,s]=v.useState([]);return v.useEffect(()=>{let f=!1;return N4(e,r,i).then(d=>{f||s(d)}),()=>{f=!0}},[e,r,i]),o}function j4({page:e,matches:r,...i}){let o=Vr(),{manifest:s,routeModules:f}=mb(),{basename:d}=hb(),{loaderData:p,matches:m}=R4(),h=v.useMemo(()=>lv(e,r,m,s,o,"data"),[e,r,m,s,o]),y=v.useMemo(()=>lv(e,r,m,s,o,"assets"),[e,r,m,s,o]),b=v.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let S=new Set,w=!1;if(r.forEach(N=>{let A=s.routes[N.route.id];!A||!A.hasLoader||(!h.some(M=>M.route.id===N.route.id)&&N.route.id in p&&f[N.route.id]?.shouldRevalidate||A.hasClientLoader?w=!0:S.add(N.route.id))}),S.size===0)return[];let T=M4(e,d);return w&&S.size>0&&T.searchParams.set("_routes",r.filter(N=>S.has(N.route.id)).map(N=>N.route.id).join(",")),[T.pathname+T.search]},[d,p,o,s,h,r,e,f]),x=v.useMemo(()=>_4(y,s),[y,s]),$=z4(y);return v.createElement(v.Fragment,null,b.map(S=>v.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...i})),x.map(S=>v.createElement("link",{key:S,rel:"modulepreload",href:S,...i})),$.map(({key:S,link:w})=>v.createElement("link",{key:S,...w})))}function H4(...e){return r=>{e.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var pb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{pb&&(window.__reactRouterVersion="7.6.3")}catch{}function L4({basename:e,children:r,window:i}){let o=v.useRef();o.current==null&&(o.current=$3({window:i,v5Compat:!0}));let s=o.current,[f,d]=v.useState({action:s.action,location:s.location}),p=v.useCallback(m=>{v.startTransition(()=>d(m))},[d]);return v.useLayoutEffect(()=>s.listen(p),[s,p]),v.createElement(h4,{basename:e,children:r,location:f.location,navigationType:f.action,navigator:s})}var yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ps=v.forwardRef(function({onClick:r,discover:i="render",prefetch:o="none",relative:s,reloadDocument:f,replace:d,state:p,target:m,to:h,preventScrollReset:y,viewTransition:b,...x},$){let{basename:S}=v.useContext(la),w=typeof h=="string"&&yb.test(h),T,N=!1;if(typeof h=="string"&&w&&(T=h,pb))try{let re=new URL(window.location.href),ce=h.startsWith("//")?new URL(re.protocol+h):new URL(h),$e=Ma(ce.pathname,S);ce.origin===re.origin&&$e!=null?h=$e+ce.search+ce.hash:N=!0}catch{ra(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=W3(h,{relative:s}),[M,P,H]=D4(o,x),V=q4(h,{replace:d,state:p,target:m,preventScrollReset:y,relative:s,viewTransition:b});function U(re){r&&r(re),re.defaultPrevented||V(re)}let ee=v.createElement("a",{...x,...H,href:T||A,onClick:N||f?r:U,ref:H4($,P),target:m,"data-discover":!w&&i==="render"?"true":void 0});return M&&!w?v.createElement(v.Fragment,null,ee,v.createElement(B4,{page:A})):ee});Ps.displayName="Link";var U4=v.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:f,to:d,viewTransition:p,children:m,...h},y){let b=_o(d,{relative:h.relative}),x=Vr(),$=v.useContext(Us),{navigator:S,basename:w}=v.useContext(la),T=$!=null&&Y4(b)&&p===!0,N=S.encodeLocation?S.encodeLocation(b).pathname:b.pathname,A=x.pathname,M=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;i||(A=A.toLowerCase(),M=M?M.toLowerCase():null,N=N.toLowerCase()),M&&w&&(M=Ma(M,w)||M);const P=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let H=A===N||!s&&A.startsWith(N)&&A.charAt(P)==="/",V=M!=null&&(M===N||!s&&M.startsWith(N)&&M.charAt(N.length)==="/"),U={isActive:H,isPending:V,isTransitioning:T},ee=H?r:void 0,re;typeof o=="function"?re=o(U):re=[o,H?"active":null,V?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let ce=typeof f=="function"?f(U):f;return v.createElement(Ps,{...h,"aria-current":ee,className:re,ref:y,style:ce,to:d,viewTransition:p},typeof m=="function"?m(U):m)});U4.displayName="NavLink";var k4=v.forwardRef(({discover:e="render",fetcherKey:r,navigate:i,reloadDocument:o,replace:s,state:f,method:d=us,action:p,onSubmit:m,relative:h,preventScrollReset:y,viewTransition:b,...x},$)=>{let S=G4(),w=Q4(p,{relative:h}),T=d.toLowerCase()==="get"?"get":"post",N=typeof p=="string"&&yb.test(p),A=M=>{if(m&&m(M),M.defaultPrevented)return;M.preventDefault();let P=M.nativeEvent.submitter,H=P?.getAttribute("formmethod")||d;S(P||M.currentTarget,{fetcherKey:r,method:H,navigate:i,replace:s,state:f,relative:h,preventScrollReset:y,viewTransition:b})};return v.createElement("form",{ref:$,method:T,action:w,onSubmit:o?m:A,...x,"data-discover":!N&&e==="render"?"true":void 0})});k4.displayName="Form";function P4(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gb(e){let r=v.useContext(Yl);return ot(r,P4(e)),r}function q4(e,{target:r,replace:i,state:o,preventScrollReset:s,relative:f,viewTransition:d}={}){let p=im(),m=Vr(),h=_o(e,{relative:f});return v.useCallback(y=>{if(b4(y,r)){y.preventDefault();let b=i!==void 0?i:mo(m)===mo(h);p(e,{replace:b,state:o,preventScrollReset:s,relative:f,viewTransition:d})}},[m,p,h,i,o,r,e,s,f,d])}var F4=0,V4=()=>`__${String(++F4)}__`;function G4(){let{router:e}=gb("useSubmit"),{basename:r}=v.useContext(la),i=s4();return v.useCallback(async(o,s={})=>{let{action:f,method:d,encType:p,formData:m,body:h}=E4(o,r);if(s.navigate===!1){let y=s.fetcherKey||V4();await e.fetch(y,i,s.action||f,{preventScrollReset:s.preventScrollReset,formData:m,body:h,formMethod:s.method||d,formEncType:s.encType||p,flushSync:s.flushSync})}else await e.navigate(s.action||f,{preventScrollReset:s.preventScrollReset,formData:m,body:h,formMethod:s.method||d,formEncType:s.encType||p,replace:s.replace,state:s.state,fromRouteId:i,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,r,i])}function Q4(e,{relative:r}={}){let{basename:i}=v.useContext(la),o=v.useContext(ia);ot(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),f={..._o(e||".",{relative:r})},d=Vr();if(e==null){f.search=d.search;let p=new URLSearchParams(f.search),m=p.getAll("index");if(m.some(y=>y==="")){p.delete("index"),m.filter(b=>b).forEach(b=>p.append("index",b));let y=p.toString();f.search=y?`?${y}`:""}}return(!e||e===".")&&s.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(f.pathname=f.pathname==="/"?i:Oa([i,f.pathname])),mo(f)}function Y4(e,r={}){let i=v.useContext(ub);ot(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=gb("useViewTransitionState"),s=_o(e,{relative:r.relative});if(!i.isTransitioning)return!1;let f=Ma(i.currentLocation.pathname,o)||i.currentLocation.pathname,d=Ma(i.nextLocation.pathname,o)||i.nextLocation.pathname;return xs(s.pathname,d)!=null||xs(s.pathname,f)!=null}[...A4];const X4="_MyInput_7poxd_1",K4={MyInput:X4};function Z4({...e}){return _.jsx("input",{className:K4.MyInput,type:"text",...e})}const W4="_MySelect_1x2il_1",J4={MySelect:W4};function I4({options:e,defaultValue:r,value:i,onChange:o}){return _.jsx("div",{children:_.jsxs(ro,{id:J4.MySelect,value:i,onChange:s=>o(s.target.value),children:[_.jsx(fn,{disabled:!0,value:"",children:r}),e.map(s=>_.jsx(fn,{value:s.value,children:s.name},s.value))]})})}const e5="_filterContainer_1amyd_1",t5={filterContainer:e5},n5=Y(Ps)`
  text-align: center;
  text-decoration: none;
  background-color: #286562;
  color: #fff;
  border-radius: 5px;
  padding: 9.5px;
  font-size: 14px;
`;function a5({filter:e,setFilter:r}){return _.jsxs("div",{className:t5.filterContainer,children:[_.jsx(Z4,{placeholder:"Поиск...",value:e.query,onChange:i=>r({...e,query:i.target.value})}),_.jsx(I4,{value:e.sort,onChange:i=>r({...e,sort:i}),defaultValue:"Sorting for",options:[{value:"title",name:"Title"},{value:"description",name:"Description"},{value:"category",name:"Category"},{value:"status",name:"Status"},{value:"priority",name:"Priority"},{value:"date",name:"Date"}]}),_.jsx(n5,{to:"/task/new",children:"Add Task"})]})}const r5=e=>v.createElement("svg",{width:"64px",height:"64px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","xmlns:sketch":"http://www.bohemiancoding.com/sketch/ns",fill:"#000000",...e},v.createElement("g",{id:"SVGRepo_bgCarrier",strokeWidth:0}),v.createElement("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),v.createElement("g",{id:"SVGRepo_iconCarrier"},v.createElement("title",null,"minus-circle"),v.createElement("desc",null,"Created with Sketch Beta."),v.createElement("defs",null),v.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd","sketch:type":"MSPage"},v.createElement("g",{id:"Icon-Set-Filled","sketch:type":"MSLayerGroup",transform:"translate(-518.000000, -1089.000000)",fill:"#c82828"},v.createElement("path",{d:"M540,1106 L528,1106 C527.447,1106 527,1105.55 527,1105 C527,1104.45 527.447,1104 528,1104 L540,1104 C540.553,1104 541,1104.45 541,1105 C541,1105.55 540.553,1106 540,1106 L540,1106 Z M534,1089 C525.163,1089 518,1096.16 518,1105 C518,1113.84 525.163,1121 534,1121 C542.837,1121 550,1113.84 550,1105 C550,1096.16 542.837,1089 534,1089 L534,1089 Z",id:"minus-circle","sketch:type":"MSShapeGroup"})))));var Xl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Lr=typeof window>"u"||"Deno"in globalThis;function Gt(){}function l5(e,r){return typeof e=="function"?e(r):e}function sh(e){return typeof e=="number"&&e>=0&&e!==1/0}function vb(e,r){return Math.max(e+(r||0)-Date.now(),0)}function ir(e,r){return typeof e=="function"?e(r):e}function On(e,r){return typeof e=="function"?e(r):e}function iv(e,r){const{type:i="all",exact:o,fetchStatus:s,predicate:f,queryKey:d,stale:p}=e;if(d){if(o){if(r.queryHash!==fm(d,r.options))return!1}else if(!po(r.queryKey,d))return!1}if(i!=="all"){const m=r.isActive();if(i==="active"&&!m||i==="inactive"&&m)return!1}return!(typeof p=="boolean"&&r.isStale()!==p||s&&s!==r.state.fetchStatus||f&&!f(r))}function ov(e,r){const{exact:i,status:o,predicate:s,mutationKey:f}=e;if(f){if(!r.options.mutationKey)return!1;if(i){if(Ur(r.options.mutationKey)!==Ur(f))return!1}else if(!po(r.options.mutationKey,f))return!1}return!(o&&r.state.status!==o||s&&!s(r))}function fm(e,r){return(r?.queryKeyHashFn||Ur)(e)}function Ur(e){return JSON.stringify(e,(r,i)=>ch(i)?Object.keys(i).sort().reduce((o,s)=>(o[s]=i[s],o),{}):i)}function po(e,r){return e===r?!0:typeof e!=typeof r?!1:e&&r&&typeof e=="object"&&typeof r=="object"?Object.keys(r).every(i=>po(e[i],r[i])):!1}function bb(e,r){if(e===r)return e;const i=uv(e)&&uv(r);if(i||ch(e)&&ch(r)){const o=i?e:Object.keys(e),s=o.length,f=i?r:Object.keys(r),d=f.length,p=i?[]:{},m=new Set(o);let h=0;for(let y=0;y<d;y++){const b=i?y:f[y];(!i&&m.has(b)||i)&&e[b]===void 0&&r[b]===void 0?(p[b]=void 0,h++):(p[b]=bb(e[b],r[b]),p[b]===e[b]&&e[b]!==void 0&&h++)}return s===d&&h===s?e:p}return r}function Es(e,r){if(!r||Object.keys(e).length!==Object.keys(r).length)return!1;for(const i in e)if(e[i]!==r[i])return!1;return!0}function uv(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function ch(e){if(!sv(e))return!1;const r=e.constructor;if(r===void 0)return!0;const i=r.prototype;return!(!sv(i)||!i.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function sv(e){return Object.prototype.toString.call(e)==="[object Object]"}function i5(e){return new Promise(r=>{setTimeout(r,e)})}function fh(e,r,i){return typeof i.structuralSharing=="function"?i.structuralSharing(e,r):i.structuralSharing!==!1?bb(e,r):r}function o5(e,r,i=0){const o=[...e,r];return i&&o.length>i?o.slice(1):o}function u5(e,r,i=0){const o=[r,...e];return i&&o.length>i?o.slice(0,-1):o}var dm=Symbol();function Sb(e,r){return!e.queryFn&&r?.initialPromise?()=>r.initialPromise:!e.queryFn||e.queryFn===dm?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function xb(e,r){return typeof e=="function"?e(...r):!!e}var s5=class extends Xl{#t;#e;#n;constructor(){super(),this.#n=e=>{if(!Lr&&window.addEventListener){const r=()=>e();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(e){this.#n=e,this.#e?.(),this.#e=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.#t!==e&&(this.#t=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(r=>{r(e)})}isFocused(){return typeof this.#t=="boolean"?this.#t:globalThis.document?.visibilityState!=="hidden"}},hm=new s5,c5=class extends Xl{#t=!0;#e;#n;constructor(){super(),this.#n=e=>{if(!Lr&&window.addEventListener){const r=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(e){this.#n=e,this.#e?.(),this.#e=e(this.setOnline.bind(this))}setOnline(e){this.#t!==e&&(this.#t=e,this.listeners.forEach(i=>{i(e)}))}isOnline(){return this.#t}},ws=new c5;function dh(){let e,r;const i=new Promise((s,f)=>{e=s,r=f});i.status="pending",i.catch(()=>{});function o(s){Object.assign(i,s),delete i.resolve,delete i.reject}return i.resolve=s=>{o({status:"fulfilled",value:s}),e(s)},i.reject=s=>{o({status:"rejected",reason:s}),r(s)},i}function f5(e){return Math.min(1e3*2**e,3e4)}function Eb(e){return(e??"online")==="online"?ws.isOnline():!0}var wb=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function xd(e){return e instanceof wb}function $b(e){let r=!1,i=0,o=!1,s;const f=dh(),d=w=>{o||(x(new wb(w)),e.abort?.())},p=()=>{r=!0},m=()=>{r=!1},h=()=>hm.isFocused()&&(e.networkMode==="always"||ws.isOnline())&&e.canRun(),y=()=>Eb(e.networkMode)&&e.canRun(),b=w=>{o||(o=!0,e.onSuccess?.(w),s?.(),f.resolve(w))},x=w=>{o||(o=!0,e.onError?.(w),s?.(),f.reject(w))},$=()=>new Promise(w=>{s=T=>{(o||h())&&w(T)},e.onPause?.()}).then(()=>{s=void 0,o||e.onContinue?.()}),S=()=>{if(o)return;let w;const T=i===0?e.initialPromise:void 0;try{w=T??e.fn()}catch(N){w=Promise.reject(N)}Promise.resolve(w).then(b).catch(N=>{if(o)return;const A=e.retry??(Lr?0:3),M=e.retryDelay??f5,P=typeof M=="function"?M(i,N):M,H=A===!0||typeof A=="number"&&i<A||typeof A=="function"&&A(i,N);if(r||!H){x(N);return}i++,e.onFail?.(i,N),i5(P).then(()=>h()?void 0:$()).then(()=>{r?x(N):S()})})};return{promise:f,cancel:d,continue:()=>(s?.(),f),cancelRetry:p,continueRetry:m,canStart:y,start:()=>(y()?S():$().then(S),f)}}var d5=e=>setTimeout(e,0);function h5(){let e=[],r=0,i=p=>{p()},o=p=>{p()},s=d5;const f=p=>{r?e.push(p):s(()=>{i(p)})},d=()=>{const p=e;e=[],p.length&&s(()=>{o(()=>{p.forEach(m=>{i(m)})})})};return{batch:p=>{let m;r++;try{m=p()}finally{r--,r||d()}return m},batchCalls:p=>(...m)=>{f(()=>{p(...m)})},schedule:f,setNotifyFunction:p=>{i=p},setBatchNotifyFunction:p=>{o=p},setScheduler:p=>{s=p}}}var Et=h5(),Nb=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),sh(this.gcTime)&&(this.#t=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Lr?1/0:5*60*1e3))}clearGcTimeout(){this.#t&&(clearTimeout(this.#t),this.#t=void 0)}},m5=class extends Nb{#t;#e;#n;#a;#r;#i;#o;constructor(e){super(),this.#o=!1,this.#i=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#a=e.client,this.#n=this.#a.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#t=p5(this.options),this.state=e.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#r?.promise}setOptions(e){this.options={...this.#i,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(e,r){const i=fh(this.state.data,e,this.options);return this.#l({data:i,type:"success",dataUpdatedAt:r?.updatedAt,manual:r?.manual}),i}setState(e,r){this.#l({type:"setState",state:e,setStateOptions:r})}cancel(e){const r=this.#r?.promise;return this.#r?.cancel(e),r?r.then(Gt).catch(Gt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.observers.some(e=>On(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===dm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>ir(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!vb(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(r=>r.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){this.observers.find(r=>r.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(r=>r!==e),this.observers.length||(this.#r&&(this.#o?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}fetch(e,r){if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&r?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(e&&this.setOptions(e),!this.options.queryFn){const m=this.observers.find(h=>h.options.queryFn);m&&this.setOptions(m.options)}const i=new AbortController,o=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(this.#o=!0,i.signal)})},s=()=>{const m=Sb(this.options,r),y=(()=>{const b={client:this.#a,queryKey:this.queryKey,meta:this.meta};return o(b),b})();return this.#o=!1,this.options.persister?this.options.persister(m,y,this):m(y)},d=(()=>{const m={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:s};return o(m),m})();this.options.behavior?.onFetch(d,this),this.#e=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==d.fetchOptions?.meta)&&this.#l({type:"fetch",meta:d.fetchOptions?.meta});const p=m=>{xd(m)&&m.silent||this.#l({type:"error",error:m}),xd(m)||(this.#n.config.onError?.(m,this),this.#n.config.onSettled?.(this.state.data,m,this)),this.scheduleGc()};return this.#r=$b({initialPromise:r?.initialPromise,fn:d.fetchFn,abort:i.abort.bind(i),onSuccess:m=>{if(m===void 0){p(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(m)}catch(h){p(h);return}this.#n.config.onSuccess?.(m,this),this.#n.config.onSettled?.(m,this.state.error,this),this.scheduleGc()},onError:p,onFail:(m,h)=>{this.#l({type:"failed",failureCount:m,error:h})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode,canRun:()=>!0}),this.#r.start()}#l(e){const r=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,..._b(i.data,this.options),fetchMeta:e.meta??null};case"success":return this.#e=void 0,{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=e.error;return xd(o)&&o.revert&&this.#e?{...this.#e,fetchStatus:"idle"}:{...i,error:o,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=r(this.state),Et.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:e})})}};function _b(e,r){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Eb(r.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function p5(e){const r=typeof e.initialData=="function"?e.initialData():e.initialData,i=r!==void 0,o=i?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:r,dataUpdateCount:0,dataUpdatedAt:i?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}var y5=class extends Xl{constructor(e={}){super(),this.config=e,this.#t=new Map}#t;build(e,r,i){const o=r.queryKey,s=r.queryHash??fm(o,r);let f=this.get(s);return f||(f=new m5({client:e,queryKey:o,queryHash:s,options:e.defaultQueryOptions(r),state:i,defaultOptions:e.getQueryDefaults(o)}),this.add(f)),f}add(e){this.#t.has(e.queryHash)||(this.#t.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const r=this.#t.get(e.queryHash);r&&(e.destroy(),r===e&&this.#t.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Et.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#t.get(e)}getAll(){return[...this.#t.values()]}find(e){const r={exact:!0,...e};return this.getAll().find(i=>iv(r,i))}findAll(e={}){const r=this.getAll();return Object.keys(e).length>0?r.filter(i=>iv(e,i)):r}notify(e){Et.batch(()=>{this.listeners.forEach(r=>{r(e)})})}onFocus(){Et.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Et.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},g5=class extends Nb{#t;#e;#n;constructor(e){super(),this.mutationId=e.mutationId,this.#e=e.mutationCache,this.#t=[],this.state=e.state||Cb(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(r=>r!==e),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#e.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(e){const r=()=>{this.#a({type:"continue"})};this.#n=$b({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(s,f)=>{this.#a({type:"failed",failureCount:s,error:f})},onPause:()=>{this.#a({type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});const i=this.state.status==="pending",o=!this.#n.canStart();try{if(i)r();else{this.#a({type:"pending",variables:e,isPaused:o}),await this.#e.config.onMutate?.(e,this);const f=await this.options.onMutate?.(e);f!==this.state.context&&this.#a({type:"pending",context:f,variables:e,isPaused:o})}const s=await this.#n.start();return await this.#e.config.onSuccess?.(s,e,this.state.context,this),await this.options.onSuccess?.(s,e,this.state.context),await this.#e.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,e,this.state.context),this.#a({type:"success",data:s}),s}catch(s){try{throw await this.#e.config.onError?.(s,e,this.state.context,this),await this.options.onError?.(s,e,this.state.context),await this.#e.config.onSettled?.(void 0,s,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,s,e,this.state.context),s}finally{this.#a({type:"error",error:s})}}finally{this.#e.runNext(this)}}#a(e){const r=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=r(this.state),Et.batch(()=>{this.#t.forEach(i=>{i.onMutationUpdate(e)}),this.#e.notify({mutation:this,type:"updated",action:e})})}};function Cb(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var v5=class extends Xl{constructor(e={}){super(),this.config=e,this.#t=new Set,this.#e=new Map,this.#n=0}#t;#e;#n;build(e,r,i){const o=new g5({mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(r),state:i});return this.add(o),o}add(e){this.#t.add(e);const r=Ku(e);if(typeof r=="string"){const i=this.#e.get(r);i?i.push(e):this.#e.set(r,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#t.delete(e)){const r=Ku(e);if(typeof r=="string"){const i=this.#e.get(r);if(i)if(i.length>1){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}else i[0]===e&&this.#e.delete(r)}}this.notify({type:"removed",mutation:e})}canRun(e){const r=Ku(e);if(typeof r=="string"){const o=this.#e.get(r)?.find(s=>s.state.status==="pending");return!o||o===e}else return!0}runNext(e){const r=Ku(e);return typeof r=="string"?this.#e.get(r)?.find(o=>o!==e&&o.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Et.batch(()=>{this.#t.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#t.clear(),this.#e.clear()})}getAll(){return Array.from(this.#t)}find(e){const r={exact:!0,...e};return this.getAll().find(i=>ov(r,i))}findAll(e={}){return this.getAll().filter(r=>ov(e,r))}notify(e){Et.batch(()=>{this.listeners.forEach(r=>{r(e)})})}resumePausedMutations(){const e=this.getAll().filter(r=>r.state.isPaused);return Et.batch(()=>Promise.all(e.map(r=>r.continue().catch(Gt))))}};function Ku(e){return e.options.scope?.id}function cv(e){return{onFetch:(r,i)=>{const o=r.options,s=r.fetchOptions?.meta?.fetchMore?.direction,f=r.state.data?.pages||[],d=r.state.data?.pageParams||[];let p={pages:[],pageParams:[]},m=0;const h=async()=>{let y=!1;const b=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(r.signal.aborted?y=!0:r.signal.addEventListener("abort",()=>{y=!0}),r.signal)})},x=Sb(r.options,r.fetchOptions),$=async(S,w,T)=>{if(y)return Promise.reject();if(w==null&&S.pages.length)return Promise.resolve(S);const A=(()=>{const V={client:r.client,queryKey:r.queryKey,pageParam:w,direction:T?"backward":"forward",meta:r.options.meta};return b(V),V})(),M=await x(A),{maxPages:P}=r.options,H=T?u5:o5;return{pages:H(S.pages,M,P),pageParams:H(S.pageParams,w,P)}};if(s&&f.length){const S=s==="backward",w=S?b5:fv,T={pages:f,pageParams:d},N=w(o,T);p=await $(T,N,S)}else{const S=e??f.length;do{const w=m===0?d[0]??o.initialPageParam:fv(o,p);if(m>0&&w==null)break;p=await $(p,w),m++}while(m<S)}return p};r.options.persister?r.fetchFn=()=>r.options.persister?.(h,{client:r.client,queryKey:r.queryKey,meta:r.options.meta,signal:r.signal},i):r.fetchFn=h}}}function fv(e,{pages:r,pageParams:i}){const o=r.length-1;return r.length>0?e.getNextPageParam(r[o],r,i[o],i):void 0}function b5(e,{pages:r,pageParams:i}){return r.length>0?e.getPreviousPageParam?.(r[0],r,i[0],i):void 0}var S5=class{#t;#e;#n;#a;#r;#i;#o;#l;constructor(e={}){this.#t=e.queryCache||new y5,this.#e=e.mutationCache||new v5,this.#n=e.defaultOptions||{},this.#a=new Map,this.#r=new Map,this.#i=0}mount(){this.#i++,this.#i===1&&(this.#o=hm.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#t.onFocus())}),this.#l=ws.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#t.onOnline())}))}unmount(){this.#i--,this.#i===0&&(this.#o?.(),this.#o=void 0,this.#l?.(),this.#l=void 0)}isFetching(e){return this.#t.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#e.findAll({...e,status:"pending"}).length}getQueryData(e){const r=this.defaultQueryOptions({queryKey:e});return this.#t.get(r.queryHash)?.state.data}ensureQueryData(e){const r=this.defaultQueryOptions(e),i=this.#t.build(this,r),o=i.state.data;return o===void 0?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime(ir(r.staleTime,i))&&this.prefetchQuery(r),Promise.resolve(o))}getQueriesData(e){return this.#t.findAll(e).map(({queryKey:r,state:i})=>{const o=i.data;return[r,o]})}setQueryData(e,r,i){const o=this.defaultQueryOptions({queryKey:e}),f=this.#t.get(o.queryHash)?.state.data,d=l5(r,f);if(d!==void 0)return this.#t.build(this,o).setData(d,{...i,manual:!0})}setQueriesData(e,r,i){return Et.batch(()=>this.#t.findAll(e).map(({queryKey:o})=>[o,this.setQueryData(o,r,i)]))}getQueryState(e){const r=this.defaultQueryOptions({queryKey:e});return this.#t.get(r.queryHash)?.state}removeQueries(e){const r=this.#t;Et.batch(()=>{r.findAll(e).forEach(i=>{r.remove(i)})})}resetQueries(e,r){const i=this.#t;return Et.batch(()=>(i.findAll(e).forEach(o=>{o.reset()}),this.refetchQueries({type:"active",...e},r)))}cancelQueries(e,r={}){const i={revert:!0,...r},o=Et.batch(()=>this.#t.findAll(e).map(s=>s.cancel(i)));return Promise.all(o).then(Gt).catch(Gt)}invalidateQueries(e,r={}){return Et.batch(()=>(this.#t.findAll(e).forEach(i=>{i.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},r)))}refetchQueries(e,r={}){const i={...r,cancelRefetch:r.cancelRefetch??!0},o=Et.batch(()=>this.#t.findAll(e).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let f=s.fetch(void 0,i);return i.throwOnError||(f=f.catch(Gt)),s.state.fetchStatus==="paused"?Promise.resolve():f}));return Promise.all(o).then(Gt)}fetchQuery(e){const r=this.defaultQueryOptions(e);r.retry===void 0&&(r.retry=!1);const i=this.#t.build(this,r);return i.isStaleByTime(ir(r.staleTime,i))?i.fetch(r):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Gt).catch(Gt)}fetchInfiniteQuery(e){return e.behavior=cv(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Gt).catch(Gt)}ensureInfiniteQueryData(e){return e.behavior=cv(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ws.isOnline()?this.#e.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#t}getMutationCache(){return this.#e}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,r){this.#a.set(Ur(e),{queryKey:e,defaultOptions:r})}getQueryDefaults(e){const r=[...this.#a.values()],i={};return r.forEach(o=>{po(e,o.queryKey)&&Object.assign(i,o.defaultOptions)}),i}setMutationDefaults(e,r){this.#r.set(Ur(e),{mutationKey:e,defaultOptions:r})}getMutationDefaults(e){const r=[...this.#r.values()],i={};return r.forEach(o=>{po(e,o.mutationKey)&&Object.assign(i,o.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;const r={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return r.queryHash||(r.queryHash=fm(r.queryKey,r)),r.refetchOnReconnect===void 0&&(r.refetchOnReconnect=r.networkMode!=="always"),r.throwOnError===void 0&&(r.throwOnError=!!r.suspense),!r.networkMode&&r.persister&&(r.networkMode="offlineFirst"),r.queryFn===dm&&(r.enabled=!1),r}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#t.clear(),this.#e.clear()}},x5=class extends Xl{constructor(e,r){super(),this.options=r,this.#t=e,this.#l=null,this.#o=dh(),this.options.experimental_prefetchInRender||this.#o.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(r)}#t;#e=void 0;#n=void 0;#a=void 0;#r;#i;#o;#l;#p;#d;#h;#s;#c;#u;#m=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),dv(this.#e,this.options)?this.#f():this.updateResult(),this.#b())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return hh(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return hh(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#S(),this.#x(),this.#e.removeObserver(this)}setOptions(e){const r=this.options,i=this.#e;if(this.options=this.#t.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof On(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#E(),this.#e.setOptions(this.options),r._defaulted&&!Es(this.options,r)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const o=this.hasListeners();o&&hv(this.#e,i,this.options,r)&&this.#f(),this.updateResult(),o&&(this.#e!==i||On(this.options.enabled,this.#e)!==On(r.enabled,this.#e)||ir(this.options.staleTime,this.#e)!==ir(r.staleTime,this.#e))&&this.#y();const s=this.#g();o&&(this.#e!==i||On(this.options.enabled,this.#e)!==On(r.enabled,this.#e)||s!==this.#u)&&this.#v(s)}getOptimisticResult(e){const r=this.#t.getQueryCache().build(this.#t,e),i=this.createResult(r,e);return w5(this,i)&&(this.#a=i,this.#i=this.options,this.#r=this.#e.state),i}getCurrentResult(){return this.#a}trackResult(e,r){return new Proxy(e,{get:(i,o)=>(this.trackProp(o),r?.(o),Reflect.get(i,o))})}trackProp(e){this.#m.add(e)}getCurrentQuery(){return this.#e}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const r=this.#t.defaultQueryOptions(e),i=this.#t.getQueryCache().build(this.#t,r);return i.fetch().then(()=>this.createResult(i,r))}fetch(e){return this.#f({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#a))}#f(e){this.#E();let r=this.#e.fetch(this.options,e);return e?.throwOnError||(r=r.catch(Gt)),r}#y(){this.#S();const e=ir(this.options.staleTime,this.#e);if(Lr||this.#a.isStale||!sh(e))return;const i=vb(this.#a.dataUpdatedAt,e)+1;this.#s=setTimeout(()=>{this.#a.isStale||this.updateResult()},i)}#g(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#v(e){this.#x(),this.#u=e,!(Lr||On(this.options.enabled,this.#e)===!1||!sh(this.#u)||this.#u===0)&&(this.#c=setInterval(()=>{(this.options.refetchIntervalInBackground||hm.isFocused())&&this.#f()},this.#u))}#b(){this.#y(),this.#v(this.#g())}#S(){this.#s&&(clearTimeout(this.#s),this.#s=void 0)}#x(){this.#c&&(clearInterval(this.#c),this.#c=void 0)}createResult(e,r){const i=this.#e,o=this.options,s=this.#a,f=this.#r,d=this.#i,m=e!==i?e.state:this.#n,{state:h}=e;let y={...h},b=!1,x;if(r._optimisticResults){const ee=this.hasListeners(),re=!ee&&dv(e,r),ce=ee&&hv(e,i,r,o);(re||ce)&&(y={...y,..._b(h.data,e.options)}),r._optimisticResults==="isRestoring"&&(y.fetchStatus="idle")}let{error:$,errorUpdatedAt:S,status:w}=y;x=y.data;let T=!1;if(r.placeholderData!==void 0&&x===void 0&&w==="pending"){let ee;s?.isPlaceholderData&&r.placeholderData===d?.placeholderData?(ee=s.data,T=!0):ee=typeof r.placeholderData=="function"?r.placeholderData(this.#h?.state.data,this.#h):r.placeholderData,ee!==void 0&&(w="success",x=fh(s?.data,ee,r),b=!0)}if(r.select&&x!==void 0&&!T)if(s&&x===f?.data&&r.select===this.#p)x=this.#d;else try{this.#p=r.select,x=r.select(x),x=fh(s?.data,x,r),this.#d=x,this.#l=null}catch(ee){this.#l=ee}this.#l&&($=this.#l,x=this.#d,S=Date.now(),w="error");const N=y.fetchStatus==="fetching",A=w==="pending",M=w==="error",P=A&&N,H=x!==void 0,U={status:w,fetchStatus:y.fetchStatus,isPending:A,isSuccess:w==="success",isError:M,isInitialLoading:P,isLoading:P,data:x,dataUpdatedAt:y.dataUpdatedAt,error:$,errorUpdatedAt:S,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>m.dataUpdateCount||y.errorUpdateCount>m.errorUpdateCount,isFetching:N,isRefetching:N&&!A,isLoadingError:M&&!H,isPaused:y.fetchStatus==="paused",isPlaceholderData:b,isRefetchError:M&&H,isStale:mm(e,r),refetch:this.refetch,promise:this.#o,isEnabled:On(r.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const ee=$e=>{U.status==="error"?$e.reject(U.error):U.data!==void 0&&$e.resolve(U.data)},re=()=>{const $e=this.#o=U.promise=dh();ee($e)},ce=this.#o;switch(ce.status){case"pending":e.queryHash===i.queryHash&&ee(ce);break;case"fulfilled":(U.status==="error"||U.data!==ce.value)&&re();break;case"rejected":(U.status!=="error"||U.error!==ce.reason)&&re();break}}return U}updateResult(){const e=this.#a,r=this.createResult(this.#e,this.options);if(this.#r=this.#e.state,this.#i=this.options,this.#r.data!==void 0&&(this.#h=this.#e),Es(r,e))return;this.#a=r;const i=()=>{if(!e)return!0;const{notifyOnChangeProps:o}=this.options,s=typeof o=="function"?o():o;if(s==="all"||!s&&!this.#m.size)return!0;const f=new Set(s??this.#m);return this.options.throwOnError&&f.add("error"),Object.keys(this.#a).some(d=>{const p=d;return this.#a[p]!==e[p]&&f.has(p)})};this.#w({listeners:i()})}#E(){const e=this.#t.getQueryCache().build(this.#t,this.options);if(e===this.#e)return;const r=this.#e;this.#e=e,this.#n=e.state,this.hasListeners()&&(r?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#b()}#w(e){Et.batch(()=>{e.listeners&&this.listeners.forEach(r=>{r(this.#a)}),this.#t.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function E5(e,r){return On(r.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&r.retryOnMount===!1)}function dv(e,r){return E5(e,r)||e.state.data!==void 0&&hh(e,r,r.refetchOnMount)}function hh(e,r,i){if(On(r.enabled,e)!==!1&&ir(r.staleTime,e)!=="static"){const o=typeof i=="function"?i(e):i;return o==="always"||o!==!1&&mm(e,r)}return!1}function hv(e,r,i,o){return(e!==r||On(o.enabled,e)===!1)&&(!i.suspense||e.state.status!=="error")&&mm(e,i)}function mm(e,r){return On(r.enabled,e)!==!1&&e.isStaleByTime(ir(r.staleTime,e))}function w5(e,r){return!Es(e.getCurrentResult(),r)}var $5=class extends Xl{#t;#e=void 0;#n;#a;constructor(r,i){super(),this.#t=r,this.setOptions(i),this.bindMethods(),this.#r()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(r){const i=this.options;this.options=this.#t.defaultMutationOptions(r),Es(this.options,i)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#n,observer:this}),i?.mutationKey&&this.options.mutationKey&&Ur(i.mutationKey)!==Ur(this.options.mutationKey)?this.reset():this.#n?.state.status==="pending"&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(r){this.#r(),this.#i(r)}getCurrentResult(){return this.#e}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#r(),this.#i()}mutate(r,i){return this.#a=i,this.#n?.removeObserver(this),this.#n=this.#t.getMutationCache().build(this.#t,this.options),this.#n.addObserver(this),this.#n.execute(r)}#r(){const r=this.#n?.state??Cb();this.#e={...r,isPending:r.status==="pending",isSuccess:r.status==="success",isError:r.status==="error",isIdle:r.status==="idle",mutate:this.mutate,reset:this.reset}}#i(r){Et.batch(()=>{if(this.#a&&this.hasListeners()){const i=this.#e.variables,o=this.#e.context;r?.type==="success"?(this.#a.onSuccess?.(r.data,i,o),this.#a.onSettled?.(r.data,null,i,o)):r?.type==="error"&&(this.#a.onError?.(r.error,i,o),this.#a.onSettled?.(void 0,r.error,i,o))}this.listeners.forEach(i=>{i(this.#e)})})}},Tb=v.createContext(void 0),Ob=e=>{const r=v.useContext(Tb);if(!r)throw new Error("No QueryClient set, use QueryClientProvider to set one");return r},N5=({client:e,children:r})=>(v.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),_.jsx(Tb.Provider,{value:e,children:r})),Ab=v.createContext(!1),_5=()=>v.useContext(Ab);Ab.Provider;function C5(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var T5=v.createContext(C5()),O5=()=>v.useContext(T5),A5=(e,r)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(r.isReset()||(e.retryOnMount=!1))},M5=e=>{v.useEffect(()=>{e.clearReset()},[e])},R5=({result:e,errorResetBoundary:r,throwOnError:i,query:o,suspense:s})=>e.isError&&!r.isReset()&&!e.isFetching&&o&&(s&&e.data===void 0||xb(i,[e.error,o])),D5=e=>{if(e.suspense){const r=o=>o==="static"?o:Math.max(o??1e3,1e3),i=e.staleTime;e.staleTime=typeof i=="function"?(...o)=>r(i(...o)):r(i),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},B5=(e,r)=>e.isLoading&&e.isFetching&&!r,z5=(e,r)=>e?.suspense&&r.isPending,mv=(e,r,i)=>r.fetchOptimistic(e).catch(()=>{i.clearReset()});function j5(e,r,i){const o=_5(),s=O5(),f=Ob(),d=f.defaultQueryOptions(e);f.getDefaultOptions().queries?._experimental_beforeQuery?.(d),d._optimisticResults=o?"isRestoring":"optimistic",D5(d),A5(d,s),M5(s);const p=!f.getQueryCache().get(d.queryHash),[m]=v.useState(()=>new r(f,d)),h=m.getOptimisticResult(d),y=!o&&e.subscribed!==!1;if(v.useSyncExternalStore(v.useCallback(b=>{const x=y?m.subscribe(Et.batchCalls(b)):Gt;return m.updateResult(),x},[m,y]),()=>m.getCurrentResult(),()=>m.getCurrentResult()),v.useEffect(()=>{m.setOptions(d)},[d,m]),z5(d,h))throw mv(d,m,s);if(R5({result:h,errorResetBoundary:s,throwOnError:d.throwOnError,query:f.getQueryCache().get(d.queryHash),suspense:d.suspense}))throw h.error;return f.getDefaultOptions().queries?._experimental_afterQuery?.(d,h),d.experimental_prefetchInRender&&!Lr&&B5(h,o)&&(p?mv(d,m,s):f.getQueryCache().get(d.queryHash)?.promise)?.catch(Gt).finally(()=>{m.updateResult()}),d.notifyOnChangeProps?h:m.trackResult(h)}function Mb(e,r){return j5(e,x5)}function mh(e,r){const i=Ob(),[o]=v.useState(()=>new $5(i,e));v.useEffect(()=>{o.setOptions(e)},[o,e]);const s=v.useSyncExternalStore(v.useCallback(d=>o.subscribe(Et.batchCalls(d)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),f=v.useCallback((d,p)=>{o.mutate(d,p).catch(Gt)},[o]);if(s.error&&xb(o.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:f,mutateAsync:s.mutate}}function Rb(e,r){return function(){return e.apply(r,arguments)}}const{toString:H5}=Object.prototype,{getPrototypeOf:pm}=Object,{iterator:qs,toStringTag:Db}=Symbol,Fs=(e=>r=>{const i=H5.call(r);return e[i]||(e[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Gn=e=>(e=e.toLowerCase(),r=>Fs(r)===e),Vs=e=>r=>typeof r===e,{isArray:Kl}=Array,yo=Vs("undefined");function L5(e){return e!==null&&!yo(e)&&e.constructor!==null&&!yo(e.constructor)&&Wt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Bb=Gn("ArrayBuffer");function U5(e){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Bb(e.buffer),r}const k5=Vs("string"),Wt=Vs("function"),zb=Vs("number"),Gs=e=>e!==null&&typeof e=="object",P5=e=>e===!0||e===!1,cs=e=>{if(Fs(e)!=="object")return!1;const r=pm(e);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Db in e)&&!(qs in e)},q5=Gn("Date"),F5=Gn("File"),V5=Gn("Blob"),G5=Gn("FileList"),Q5=e=>Gs(e)&&Wt(e.pipe),Y5=e=>{let r;return e&&(typeof FormData=="function"&&e instanceof FormData||Wt(e.append)&&((r=Fs(e))==="formdata"||r==="object"&&Wt(e.toString)&&e.toString()==="[object FormData]"))},X5=Gn("URLSearchParams"),[K5,Z5,W5,J5]=["ReadableStream","Request","Response","Headers"].map(Gn),I5=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Co(e,r,{allOwnKeys:i=!1}={}){if(e===null||typeof e>"u")return;let o,s;if(typeof e!="object"&&(e=[e]),Kl(e))for(o=0,s=e.length;o<s;o++)r.call(null,e[o],o,e);else{const f=i?Object.getOwnPropertyNames(e):Object.keys(e),d=f.length;let p;for(o=0;o<d;o++)p=f[o],r.call(null,e[p],p,e)}}function jb(e,r){r=r.toLowerCase();const i=Object.keys(e);let o=i.length,s;for(;o-- >0;)if(s=i[o],r===s.toLowerCase())return s;return null}const Mr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Hb=e=>!yo(e)&&e!==Mr;function ph(){const{caseless:e}=Hb(this)&&this||{},r={},i=(o,s)=>{const f=e&&jb(r,s)||s;cs(r[f])&&cs(o)?r[f]=ph(r[f],o):cs(o)?r[f]=ph({},o):Kl(o)?r[f]=o.slice():r[f]=o};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&Co(arguments[o],i);return r}const eN=(e,r,i,{allOwnKeys:o}={})=>(Co(r,(s,f)=>{i&&Wt(s)?e[f]=Rb(s,i):e[f]=s},{allOwnKeys:o}),e),tN=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),nN=(e,r,i,o)=>{e.prototype=Object.create(r.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:r.prototype}),i&&Object.assign(e.prototype,i)},aN=(e,r,i,o)=>{let s,f,d;const p={};if(r=r||{},e==null)return r;do{for(s=Object.getOwnPropertyNames(e),f=s.length;f-- >0;)d=s[f],(!o||o(d,e,r))&&!p[d]&&(r[d]=e[d],p[d]=!0);e=i!==!1&&pm(e)}while(e&&(!i||i(e,r))&&e!==Object.prototype);return r},rN=(e,r,i)=>{e=String(e),(i===void 0||i>e.length)&&(i=e.length),i-=r.length;const o=e.indexOf(r,i);return o!==-1&&o===i},lN=e=>{if(!e)return null;if(Kl(e))return e;let r=e.length;if(!zb(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=e[r];return i},iN=(e=>r=>e&&r instanceof e)(typeof Uint8Array<"u"&&pm(Uint8Array)),oN=(e,r)=>{const o=(e&&e[qs]).call(e);let s;for(;(s=o.next())&&!s.done;){const f=s.value;r.call(e,f[0],f[1])}},uN=(e,r)=>{let i;const o=[];for(;(i=e.exec(r))!==null;)o.push(i);return o},sN=Gn("HTMLFormElement"),cN=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,o,s){return o.toUpperCase()+s}),pv=(({hasOwnProperty:e})=>(r,i)=>e.call(r,i))(Object.prototype),fN=Gn("RegExp"),Lb=(e,r)=>{const i=Object.getOwnPropertyDescriptors(e),o={};Co(i,(s,f)=>{let d;(d=r(s,f,e))!==!1&&(o[f]=d||s)}),Object.defineProperties(e,o)},dN=e=>{Lb(e,(r,i)=>{if(Wt(e)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const o=e[i];if(Wt(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},hN=(e,r)=>{const i={},o=s=>{s.forEach(f=>{i[f]=!0})};return Kl(e)?o(e):o(String(e).split(r)),i},mN=()=>{},pN=(e,r)=>e!=null&&Number.isFinite(e=+e)?e:r;function yN(e){return!!(e&&Wt(e.append)&&e[Db]==="FormData"&&e[qs])}const gN=e=>{const r=new Array(10),i=(o,s)=>{if(Gs(o)){if(r.indexOf(o)>=0)return;if(!("toJSON"in o)){r[s]=o;const f=Kl(o)?[]:{};return Co(o,(d,p)=>{const m=i(d,s+1);!yo(m)&&(f[p]=m)}),r[s]=void 0,f}}return o};return i(e,0)},vN=Gn("AsyncFunction"),bN=e=>e&&(Gs(e)||Wt(e))&&Wt(e.then)&&Wt(e.catch),Ub=((e,r)=>e?setImmediate:r?((i,o)=>(Mr.addEventListener("message",({source:s,data:f})=>{s===Mr&&f===i&&o.length&&o.shift()()},!1),s=>{o.push(s),Mr.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Wt(Mr.postMessage)),SN=typeof queueMicrotask<"u"?queueMicrotask.bind(Mr):typeof process<"u"&&process.nextTick||Ub,xN=e=>e!=null&&Wt(e[qs]),F={isArray:Kl,isArrayBuffer:Bb,isBuffer:L5,isFormData:Y5,isArrayBufferView:U5,isString:k5,isNumber:zb,isBoolean:P5,isObject:Gs,isPlainObject:cs,isReadableStream:K5,isRequest:Z5,isResponse:W5,isHeaders:J5,isUndefined:yo,isDate:q5,isFile:F5,isBlob:V5,isRegExp:fN,isFunction:Wt,isStream:Q5,isURLSearchParams:X5,isTypedArray:iN,isFileList:G5,forEach:Co,merge:ph,extend:eN,trim:I5,stripBOM:tN,inherits:nN,toFlatObject:aN,kindOf:Fs,kindOfTest:Gn,endsWith:rN,toArray:lN,forEachEntry:oN,matchAll:uN,isHTMLForm:sN,hasOwnProperty:pv,hasOwnProp:pv,reduceDescriptors:Lb,freezeMethods:dN,toObjectSet:hN,toCamelCase:cN,noop:mN,toFiniteNumber:pN,findKey:jb,global:Mr,isContextDefined:Hb,isSpecCompliantForm:yN,toJSONObject:gN,isAsyncFn:vN,isThenable:bN,setImmediate:Ub,asap:SN,isIterable:xN};function ve(e,r,i,o,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",r&&(this.code=r),i&&(this.config=i),o&&(this.request=o),s&&(this.response=s,this.status=s.status?s.status:null)}F.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.status}}});const kb=ve.prototype,Pb={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pb[e]={value:e}});Object.defineProperties(ve,Pb);Object.defineProperty(kb,"isAxiosError",{value:!0});ve.from=(e,r,i,o,s,f)=>{const d=Object.create(kb);return F.toFlatObject(e,d,function(m){return m!==Error.prototype},p=>p!=="isAxiosError"),ve.call(d,e.message,r,i,o,s),d.cause=e,d.name=e.name,f&&Object.assign(d,f),d};const EN=null;function yh(e){return F.isPlainObject(e)||F.isArray(e)}function qb(e){return F.endsWith(e,"[]")?e.slice(0,-2):e}function yv(e,r,i){return e?e.concat(r).map(function(s,f){return s=qb(s),!i&&f?"["+s+"]":s}).join(i?".":""):r}function wN(e){return F.isArray(e)&&!e.some(yh)}const $N=F.toFlatObject(F,{},null,function(r){return/^is[A-Z]/.test(r)});function Qs(e,r,i){if(!F.isObject(e))throw new TypeError("target must be an object");r=r||new FormData,i=F.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,T){return!F.isUndefined(T[w])});const o=i.metaTokens,s=i.visitor||y,f=i.dots,d=i.indexes,m=(i.Blob||typeof Blob<"u"&&Blob)&&F.isSpecCompliantForm(r);if(!F.isFunction(s))throw new TypeError("visitor must be a function");function h(S){if(S===null)return"";if(F.isDate(S))return S.toISOString();if(F.isBoolean(S))return S.toString();if(!m&&F.isBlob(S))throw new ve("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(S)||F.isTypedArray(S)?m&&typeof Blob=="function"?new Blob([S]):Buffer.from(S):S}function y(S,w,T){let N=S;if(S&&!T&&typeof S=="object"){if(F.endsWith(w,"{}"))w=o?w:w.slice(0,-2),S=JSON.stringify(S);else if(F.isArray(S)&&wN(S)||(F.isFileList(S)||F.endsWith(w,"[]"))&&(N=F.toArray(S)))return w=qb(w),N.forEach(function(M,P){!(F.isUndefined(M)||M===null)&&r.append(d===!0?yv([w],P,f):d===null?w:w+"[]",h(M))}),!1}return yh(S)?!0:(r.append(yv(T,w,f),h(S)),!1)}const b=[],x=Object.assign($N,{defaultVisitor:y,convertValue:h,isVisitable:yh});function $(S,w){if(!F.isUndefined(S)){if(b.indexOf(S)!==-1)throw Error("Circular reference detected in "+w.join("."));b.push(S),F.forEach(S,function(N,A){(!(F.isUndefined(N)||N===null)&&s.call(r,N,F.isString(A)?A.trim():A,w,x))===!0&&$(N,w?w.concat(A):[A])}),b.pop()}}if(!F.isObject(e))throw new TypeError("data must be an object");return $(e),r}function gv(e){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function ym(e,r){this._pairs=[],e&&Qs(e,this,r)}const Fb=ym.prototype;Fb.append=function(r,i){this._pairs.push([r,i])};Fb.toString=function(r){const i=r?function(o){return r.call(this,o,gv)}:gv;return this._pairs.map(function(s){return i(s[0])+"="+i(s[1])},"").join("&")};function NN(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vb(e,r,i){if(!r)return e;const o=i&&i.encode||NN;F.isFunction(i)&&(i={serialize:i});const s=i&&i.serialize;let f;if(s?f=s(r,i):f=F.isURLSearchParams(r)?r.toString():new ym(r,i).toString(o),f){const d=e.indexOf("#");d!==-1&&(e=e.slice(0,d)),e+=(e.indexOf("?")===-1?"?":"&")+f}return e}class vv{constructor(){this.handlers=[]}use(r,i,o){return this.handlers.push({fulfilled:r,rejected:i,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){F.forEach(this.handlers,function(o){o!==null&&r(o)})}}const Gb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_N=typeof URLSearchParams<"u"?URLSearchParams:ym,CN=typeof FormData<"u"?FormData:null,TN=typeof Blob<"u"?Blob:null,ON={isBrowser:!0,classes:{URLSearchParams:_N,FormData:CN,Blob:TN},protocols:["http","https","file","blob","url","data"]},gm=typeof window<"u"&&typeof document<"u",gh=typeof navigator=="object"&&navigator||void 0,AN=gm&&(!gh||["ReactNative","NativeScript","NS"].indexOf(gh.product)<0),MN=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",RN=gm&&window.location.href||"http://localhost",DN=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gm,hasStandardBrowserEnv:AN,hasStandardBrowserWebWorkerEnv:MN,navigator:gh,origin:RN},Symbol.toStringTag,{value:"Module"})),Ut={...DN,...ON};function BN(e,r){return Qs(e,new Ut.classes.URLSearchParams,Object.assign({visitor:function(i,o,s,f){return Ut.isNode&&F.isBuffer(i)?(this.append(o,i.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)}},r))}function zN(e){return F.matchAll(/\w+|\[(\w*)]/g,e).map(r=>r[0]==="[]"?"":r[1]||r[0])}function jN(e){const r={},i=Object.keys(e);let o;const s=i.length;let f;for(o=0;o<s;o++)f=i[o],r[f]=e[f];return r}function Qb(e){function r(i,o,s,f){let d=i[f++];if(d==="__proto__")return!0;const p=Number.isFinite(+d),m=f>=i.length;return d=!d&&F.isArray(s)?s.length:d,m?(F.hasOwnProp(s,d)?s[d]=[s[d],o]:s[d]=o,!p):((!s[d]||!F.isObject(s[d]))&&(s[d]=[]),r(i,o,s[d],f)&&F.isArray(s[d])&&(s[d]=jN(s[d])),!p)}if(F.isFormData(e)&&F.isFunction(e.entries)){const i={};return F.forEachEntry(e,(o,s)=>{r(zN(o),s,i,0)}),i}return null}function HN(e,r,i){if(F.isString(e))try{return(r||JSON.parse)(e),F.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(i||JSON.stringify)(e)}const To={transitional:Gb,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const o=i.getContentType()||"",s=o.indexOf("application/json")>-1,f=F.isObject(r);if(f&&F.isHTMLForm(r)&&(r=new FormData(r)),F.isFormData(r))return s?JSON.stringify(Qb(r)):r;if(F.isArrayBuffer(r)||F.isBuffer(r)||F.isStream(r)||F.isFile(r)||F.isBlob(r)||F.isReadableStream(r))return r;if(F.isArrayBufferView(r))return r.buffer;if(F.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let p;if(f){if(o.indexOf("application/x-www-form-urlencoded")>-1)return BN(r,this.formSerializer).toString();if((p=F.isFileList(r))||o.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Qs(p?{"files[]":r}:r,m&&new m,this.formSerializer)}}return f||s?(i.setContentType("application/json",!1),HN(r)):r}],transformResponse:[function(r){const i=this.transitional||To.transitional,o=i&&i.forcedJSONParsing,s=this.responseType==="json";if(F.isResponse(r)||F.isReadableStream(r))return r;if(r&&F.isString(r)&&(o&&!this.responseType||s)){const d=!(i&&i.silentJSONParsing)&&s;try{return JSON.parse(r)}catch(p){if(d)throw p.name==="SyntaxError"?ve.from(p,ve.ERR_BAD_RESPONSE,this,null,this.response):p}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ut.classes.FormData,Blob:Ut.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],e=>{To.headers[e]={}});const LN=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),UN=e=>{const r={};let i,o,s;return e&&e.split(`
`).forEach(function(d){s=d.indexOf(":"),i=d.substring(0,s).trim().toLowerCase(),o=d.substring(s+1).trim(),!(!i||r[i]&&LN[i])&&(i==="set-cookie"?r[i]?r[i].push(o):r[i]=[o]:r[i]=r[i]?r[i]+", "+o:o)}),r},bv=Symbol("internals");function eo(e){return e&&String(e).trim().toLowerCase()}function fs(e){return e===!1||e==null?e:F.isArray(e)?e.map(fs):String(e)}function kN(e){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=i.exec(e);)r[o[1]]=o[2];return r}const PN=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ed(e,r,i,o,s){if(F.isFunction(o))return o.call(this,r,i);if(s&&(r=i),!!F.isString(r)){if(F.isString(o))return r.indexOf(o)!==-1;if(F.isRegExp(o))return o.test(r)}}function qN(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,o)=>i.toUpperCase()+o)}function FN(e,r){const i=F.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+i,{value:function(s,f,d){return this[o].call(this,r,s,f,d)},configurable:!0})})}let Jt=class{constructor(r){r&&this.set(r)}set(r,i,o){const s=this;function f(p,m,h){const y=eo(m);if(!y)throw new Error("header name must be a non-empty string");const b=F.findKey(s,y);(!b||s[b]===void 0||h===!0||h===void 0&&s[b]!==!1)&&(s[b||m]=fs(p))}const d=(p,m)=>F.forEach(p,(h,y)=>f(h,y,m));if(F.isPlainObject(r)||r instanceof this.constructor)d(r,i);else if(F.isString(r)&&(r=r.trim())&&!PN(r))d(UN(r),i);else if(F.isObject(r)&&F.isIterable(r)){let p={},m,h;for(const y of r){if(!F.isArray(y))throw TypeError("Object iterator must return a key-value pair");p[h=y[0]]=(m=p[h])?F.isArray(m)?[...m,y[1]]:[m,y[1]]:y[1]}d(p,i)}else r!=null&&f(i,r,o);return this}get(r,i){if(r=eo(r),r){const o=F.findKey(this,r);if(o){const s=this[o];if(!i)return s;if(i===!0)return kN(s);if(F.isFunction(i))return i.call(this,s,o);if(F.isRegExp(i))return i.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=eo(r),r){const o=F.findKey(this,r);return!!(o&&this[o]!==void 0&&(!i||Ed(this,this[o],o,i)))}return!1}delete(r,i){const o=this;let s=!1;function f(d){if(d=eo(d),d){const p=F.findKey(o,d);p&&(!i||Ed(o,o[p],p,i))&&(delete o[p],s=!0)}}return F.isArray(r)?r.forEach(f):f(r),s}clear(r){const i=Object.keys(this);let o=i.length,s=!1;for(;o--;){const f=i[o];(!r||Ed(this,this[f],f,r,!0))&&(delete this[f],s=!0)}return s}normalize(r){const i=this,o={};return F.forEach(this,(s,f)=>{const d=F.findKey(o,f);if(d){i[d]=fs(s),delete i[f];return}const p=r?qN(f):String(f).trim();p!==f&&delete i[f],i[p]=fs(s),o[p]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return F.forEach(this,(o,s)=>{o!=null&&o!==!1&&(i[s]=r&&F.isArray(o)?o.join(", "):o)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const o=new this(r);return i.forEach(s=>o.set(s)),o}static accessor(r){const o=(this[bv]=this[bv]={accessors:{}}).accessors,s=this.prototype;function f(d){const p=eo(d);o[p]||(FN(s,d),o[p]=!0)}return F.isArray(r)?r.forEach(f):f(r),this}};Jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(Jt.prototype,({value:e},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>e,set(o){this[i]=o}}});F.freezeMethods(Jt);function wd(e,r){const i=this||To,o=r||i,s=Jt.from(o.headers);let f=o.data;return F.forEach(e,function(p){f=p.call(i,f,s.normalize(),r?r.status:void 0)}),s.normalize(),f}function Yb(e){return!!(e&&e.__CANCEL__)}function Zl(e,r,i){ve.call(this,e??"canceled",ve.ERR_CANCELED,r,i),this.name="CanceledError"}F.inherits(Zl,ve,{__CANCEL__:!0});function Xb(e,r,i){const o=i.config.validateStatus;!i.status||!o||o(i.status)?e(i):r(new ve("Request failed with status code "+i.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function VN(e){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}function GN(e,r){e=e||10;const i=new Array(e),o=new Array(e);let s=0,f=0,d;return r=r!==void 0?r:1e3,function(m){const h=Date.now(),y=o[f];d||(d=h),i[s]=m,o[s]=h;let b=f,x=0;for(;b!==s;)x+=i[b++],b=b%e;if(s=(s+1)%e,s===f&&(f=(f+1)%e),h-d<r)return;const $=y&&h-y;return $?Math.round(x*1e3/$):void 0}}function QN(e,r){let i=0,o=1e3/r,s,f;const d=(h,y=Date.now())=>{i=y,s=null,f&&(clearTimeout(f),f=null),e.apply(null,h)};return[(...h)=>{const y=Date.now(),b=y-i;b>=o?d(h,y):(s=h,f||(f=setTimeout(()=>{f=null,d(s)},o-b)))},()=>s&&d(s)]}const $s=(e,r,i=3)=>{let o=0;const s=GN(50,250);return QN(f=>{const d=f.loaded,p=f.lengthComputable?f.total:void 0,m=d-o,h=s(m),y=d<=p;o=d;const b={loaded:d,total:p,progress:p?d/p:void 0,bytes:m,rate:h||void 0,estimated:h&&p&&y?(p-d)/h:void 0,event:f,lengthComputable:p!=null,[r?"download":"upload"]:!0};e(b)},i)},Sv=(e,r)=>{const i=e!=null;return[o=>r[0]({lengthComputable:i,total:e,loaded:o}),r[1]]},xv=e=>(...r)=>F.asap(()=>e(...r)),YN=Ut.hasStandardBrowserEnv?((e,r)=>i=>(i=new URL(i,Ut.origin),e.protocol===i.protocol&&e.host===i.host&&(r||e.port===i.port)))(new URL(Ut.origin),Ut.navigator&&/(msie|trident)/i.test(Ut.navigator.userAgent)):()=>!0,XN=Ut.hasStandardBrowserEnv?{write(e,r,i,o,s,f){const d=[e+"="+encodeURIComponent(r)];F.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),F.isString(o)&&d.push("path="+o),F.isString(s)&&d.push("domain="+s),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read(e){const r=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function KN(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ZN(e,r){return r?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e}function Kb(e,r,i){let o=!KN(r);return e&&(o||i==!1)?ZN(e,r):r}const Ev=e=>e instanceof Jt?{...e}:e;function kr(e,r){r=r||{};const i={};function o(h,y,b,x){return F.isPlainObject(h)&&F.isPlainObject(y)?F.merge.call({caseless:x},h,y):F.isPlainObject(y)?F.merge({},y):F.isArray(y)?y.slice():y}function s(h,y,b,x){if(F.isUndefined(y)){if(!F.isUndefined(h))return o(void 0,h,b,x)}else return o(h,y,b,x)}function f(h,y){if(!F.isUndefined(y))return o(void 0,y)}function d(h,y){if(F.isUndefined(y)){if(!F.isUndefined(h))return o(void 0,h)}else return o(void 0,y)}function p(h,y,b){if(b in r)return o(h,y);if(b in e)return o(void 0,h)}const m={url:f,method:f,data:f,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:p,headers:(h,y,b)=>s(Ev(h),Ev(y),b,!0)};return F.forEach(Object.keys(Object.assign({},e,r)),function(y){const b=m[y]||s,x=b(e[y],r[y],y);F.isUndefined(x)&&b!==p||(i[y]=x)}),i}const Zb=e=>{const r=kr({},e);let{data:i,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:f,headers:d,auth:p}=r;r.headers=d=Jt.from(d),r.url=Vb(Kb(r.baseURL,r.url,r.allowAbsoluteUrls),e.params,e.paramsSerializer),p&&d.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let m;if(F.isFormData(i)){if(Ut.hasStandardBrowserEnv||Ut.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((m=d.getContentType())!==!1){const[h,...y]=m?m.split(";").map(b=>b.trim()).filter(Boolean):[];d.setContentType([h||"multipart/form-data",...y].join("; "))}}if(Ut.hasStandardBrowserEnv&&(o&&F.isFunction(o)&&(o=o(r)),o||o!==!1&&YN(r.url))){const h=s&&f&&XN.read(f);h&&d.set(s,h)}return r},WN=typeof XMLHttpRequest<"u",JN=WN&&function(e){return new Promise(function(i,o){const s=Zb(e);let f=s.data;const d=Jt.from(s.headers).normalize();let{responseType:p,onUploadProgress:m,onDownloadProgress:h}=s,y,b,x,$,S;function w(){$&&$(),S&&S(),s.cancelToken&&s.cancelToken.unsubscribe(y),s.signal&&s.signal.removeEventListener("abort",y)}let T=new XMLHttpRequest;T.open(s.method.toUpperCase(),s.url,!0),T.timeout=s.timeout;function N(){if(!T)return;const M=Jt.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),H={data:!p||p==="text"||p==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:M,config:e,request:T};Xb(function(U){i(U),w()},function(U){o(U),w()},H),T=null}"onloadend"in T?T.onloadend=N:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(N)},T.onabort=function(){T&&(o(new ve("Request aborted",ve.ECONNABORTED,e,T)),T=null)},T.onerror=function(){o(new ve("Network Error",ve.ERR_NETWORK,e,T)),T=null},T.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const H=s.transitional||Gb;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),o(new ve(P,H.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,e,T)),T=null},f===void 0&&d.setContentType(null),"setRequestHeader"in T&&F.forEach(d.toJSON(),function(P,H){T.setRequestHeader(H,P)}),F.isUndefined(s.withCredentials)||(T.withCredentials=!!s.withCredentials),p&&p!=="json"&&(T.responseType=s.responseType),h&&([x,S]=$s(h,!0),T.addEventListener("progress",x)),m&&T.upload&&([b,$]=$s(m),T.upload.addEventListener("progress",b),T.upload.addEventListener("loadend",$)),(s.cancelToken||s.signal)&&(y=M=>{T&&(o(!M||M.type?new Zl(null,e,T):M),T.abort(),T=null)},s.cancelToken&&s.cancelToken.subscribe(y),s.signal&&(s.signal.aborted?y():s.signal.addEventListener("abort",y)));const A=VN(s.url);if(A&&Ut.protocols.indexOf(A)===-1){o(new ve("Unsupported protocol "+A+":",ve.ERR_BAD_REQUEST,e));return}T.send(f||null)})},IN=(e,r)=>{const{length:i}=e=e?e.filter(Boolean):[];if(r||i){let o=new AbortController,s;const f=function(h){if(!s){s=!0,p();const y=h instanceof Error?h:this.reason;o.abort(y instanceof ve?y:new Zl(y instanceof Error?y.message:y))}};let d=r&&setTimeout(()=>{d=null,f(new ve(`timeout ${r} of ms exceeded`,ve.ETIMEDOUT))},r);const p=()=>{e&&(d&&clearTimeout(d),d=null,e.forEach(h=>{h.unsubscribe?h.unsubscribe(f):h.removeEventListener("abort",f)}),e=null)};e.forEach(h=>h.addEventListener("abort",f));const{signal:m}=o;return m.unsubscribe=()=>F.asap(p),m}},e_=function*(e,r){let i=e.byteLength;if(i<r){yield e;return}let o=0,s;for(;o<i;)s=o+r,yield e.slice(o,s),o=s},t_=async function*(e,r){for await(const i of n_(e))yield*e_(i,r)},n_=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const r=e.getReader();try{for(;;){const{done:i,value:o}=await r.read();if(i)break;yield o}}finally{await r.cancel()}},wv=(e,r,i,o)=>{const s=t_(e,r);let f=0,d,p=m=>{d||(d=!0,o&&o(m))};return new ReadableStream({async pull(m){try{const{done:h,value:y}=await s.next();if(h){p(),m.close();return}let b=y.byteLength;if(i){let x=f+=b;i(x)}m.enqueue(new Uint8Array(y))}catch(h){throw p(h),h}},cancel(m){return p(m),s.return()}},{highWaterMark:2})},Ys=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Wb=Ys&&typeof ReadableStream=="function",a_=Ys&&(typeof TextEncoder=="function"?(e=>r=>e.encode(r))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Jb=(e,...r)=>{try{return!!e(...r)}catch{return!1}},r_=Wb&&Jb(()=>{let e=!1;const r=new Request(Ut.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!r}),$v=64*1024,vh=Wb&&Jb(()=>F.isReadableStream(new Response("").body)),Ns={stream:vh&&(e=>e.body)};Ys&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Ns[r]&&(Ns[r]=F.isFunction(e[r])?i=>i[r]():(i,o)=>{throw new ve(`Response type '${r}' is not supported`,ve.ERR_NOT_SUPPORT,o)})})})(new Response);const l_=async e=>{if(e==null)return 0;if(F.isBlob(e))return e.size;if(F.isSpecCompliantForm(e))return(await new Request(Ut.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(F.isArrayBufferView(e)||F.isArrayBuffer(e))return e.byteLength;if(F.isURLSearchParams(e)&&(e=e+""),F.isString(e))return(await a_(e)).byteLength},i_=async(e,r)=>{const i=F.toFiniteNumber(e.getContentLength());return i??l_(r)},o_=Ys&&(async e=>{let{url:r,method:i,data:o,signal:s,cancelToken:f,timeout:d,onDownloadProgress:p,onUploadProgress:m,responseType:h,headers:y,withCredentials:b="same-origin",fetchOptions:x}=Zb(e);h=h?(h+"").toLowerCase():"text";let $=IN([s,f&&f.toAbortSignal()],d),S;const w=$&&$.unsubscribe&&(()=>{$.unsubscribe()});let T;try{if(m&&r_&&i!=="get"&&i!=="head"&&(T=await i_(y,o))!==0){let H=new Request(r,{method:"POST",body:o,duplex:"half"}),V;if(F.isFormData(o)&&(V=H.headers.get("content-type"))&&y.setContentType(V),H.body){const[U,ee]=Sv(T,$s(xv(m)));o=wv(H.body,$v,U,ee)}}F.isString(b)||(b=b?"include":"omit");const N="credentials"in Request.prototype;S=new Request(r,{...x,signal:$,method:i.toUpperCase(),headers:y.normalize().toJSON(),body:o,duplex:"half",credentials:N?b:void 0});let A=await fetch(S,x);const M=vh&&(h==="stream"||h==="response");if(vh&&(p||M&&w)){const H={};["status","statusText","headers"].forEach(re=>{H[re]=A[re]});const V=F.toFiniteNumber(A.headers.get("content-length")),[U,ee]=p&&Sv(V,$s(xv(p),!0))||[];A=new Response(wv(A.body,$v,U,()=>{ee&&ee(),w&&w()}),H)}h=h||"text";let P=await Ns[F.findKey(Ns,h)||"text"](A,e);return!M&&w&&w(),await new Promise((H,V)=>{Xb(H,V,{data:P,headers:Jt.from(A.headers),status:A.status,statusText:A.statusText,config:e,request:S})})}catch(N){throw w&&w(),N&&N.name==="TypeError"&&/Load failed|fetch/i.test(N.message)?Object.assign(new ve("Network Error",ve.ERR_NETWORK,e,S),{cause:N.cause||N}):ve.from(N,N&&N.code,e,S)}}),bh={http:EN,xhr:JN,fetch:o_};F.forEach(bh,(e,r)=>{if(e){try{Object.defineProperty(e,"name",{value:r})}catch{}Object.defineProperty(e,"adapterName",{value:r})}});const Nv=e=>`- ${e}`,u_=e=>F.isFunction(e)||e===null||e===!1,Ib={getAdapter:e=>{e=F.isArray(e)?e:[e];const{length:r}=e;let i,o;const s={};for(let f=0;f<r;f++){i=e[f];let d;if(o=i,!u_(i)&&(o=bh[(d=String(i)).toLowerCase()],o===void 0))throw new ve(`Unknown adapter '${d}'`);if(o)break;s[d||"#"+f]=o}if(!o){const f=Object.entries(s).map(([p,m])=>`adapter ${p} `+(m===!1?"is not supported by the environment":"is not available in the build"));let d=r?f.length>1?`since :
`+f.map(Nv).join(`
`):" "+Nv(f[0]):"as no adapter specified";throw new ve("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return o},adapters:bh};function $d(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Zl(null,e)}function _v(e){return $d(e),e.headers=Jt.from(e.headers),e.data=wd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ib.getAdapter(e.adapter||To.adapter)(e).then(function(o){return $d(e),o.data=wd.call(e,e.transformResponse,o),o.headers=Jt.from(o.headers),o},function(o){return Yb(o)||($d(e),o&&o.response&&(o.response.data=wd.call(e,e.transformResponse,o.response),o.response.headers=Jt.from(o.response.headers))),Promise.reject(o)})}const eS="1.10.0",Xs={};["object","boolean","number","function","string","symbol"].forEach((e,r)=>{Xs[e]=function(o){return typeof o===e||"a"+(r<1?"n ":" ")+e}});const Cv={};Xs.transitional=function(r,i,o){function s(f,d){return"[Axios v"+eS+"] Transitional option '"+f+"'"+d+(o?". "+o:"")}return(f,d,p)=>{if(r===!1)throw new ve(s(d," has been removed"+(i?" in "+i:"")),ve.ERR_DEPRECATED);return i&&!Cv[d]&&(Cv[d]=!0,console.warn(s(d," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(f,d,p):!0}};Xs.spelling=function(r){return(i,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function s_(e,r,i){if(typeof e!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let s=o.length;for(;s-- >0;){const f=o[s],d=r[f];if(d){const p=e[f],m=p===void 0||d(p,f,e);if(m!==!0)throw new ve("option "+f+" must be "+m,ve.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ve("Unknown option "+f,ve.ERR_BAD_OPTION)}}const ds={assertOptions:s_,validators:Xs},na=ds.validators;let jr=class{constructor(r){this.defaults=r||{},this.interceptors={request:new vv,response:new vv}}async request(r,i){try{return await this._request(r,i)}catch(o){if(o instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const f=s.stack?s.stack.replace(/^.+\n/,""):"";try{o.stack?f&&!String(o.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+f):o.stack=f}catch{}}throw o}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=kr(this.defaults,i);const{transitional:o,paramsSerializer:s,headers:f}=i;o!==void 0&&ds.assertOptions(o,{silentJSONParsing:na.transitional(na.boolean),forcedJSONParsing:na.transitional(na.boolean),clarifyTimeoutError:na.transitional(na.boolean)},!1),s!=null&&(F.isFunction(s)?i.paramsSerializer={serialize:s}:ds.assertOptions(s,{encode:na.function,serialize:na.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),ds.assertOptions(i,{baseUrl:na.spelling("baseURL"),withXsrfToken:na.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let d=f&&F.merge(f.common,f[i.method]);f&&F.forEach(["delete","get","head","post","put","patch","common"],S=>{delete f[S]}),i.headers=Jt.concat(d,f);const p=[];let m=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(i)===!1||(m=m&&w.synchronous,p.unshift(w.fulfilled,w.rejected))});const h=[];this.interceptors.response.forEach(function(w){h.push(w.fulfilled,w.rejected)});let y,b=0,x;if(!m){const S=[_v.bind(this),void 0];for(S.unshift.apply(S,p),S.push.apply(S,h),x=S.length,y=Promise.resolve(i);b<x;)y=y.then(S[b++],S[b++]);return y}x=p.length;let $=i;for(b=0;b<x;){const S=p[b++],w=p[b++];try{$=S($)}catch(T){w.call(this,T);break}}try{y=_v.call(this,$)}catch(S){return Promise.reject(S)}for(b=0,x=h.length;b<x;)y=y.then(h[b++],h[b++]);return y}getUri(r){r=kr(this.defaults,r);const i=Kb(r.baseURL,r.url,r.allowAbsoluteUrls);return Vb(i,r.params,r.paramsSerializer)}};F.forEach(["delete","get","head","options"],function(r){jr.prototype[r]=function(i,o){return this.request(kr(o||{},{method:r,url:i,data:(o||{}).data}))}});F.forEach(["post","put","patch"],function(r){function i(o){return function(f,d,p){return this.request(kr(p||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:f,data:d}))}}jr.prototype[r]=i(),jr.prototype[r+"Form"]=i(!0)});let c_=class tS{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(f){i=f});const o=this;this.promise.then(s=>{if(!o._listeners)return;let f=o._listeners.length;for(;f-- >0;)o._listeners[f](s);o._listeners=null}),this.promise.then=s=>{let f;const d=new Promise(p=>{o.subscribe(p),f=p}).then(s);return d.cancel=function(){o.unsubscribe(f)},d},r(function(f,d,p){o.reason||(o.reason=new Zl(f,d,p),i(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=o=>{r.abort(o)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new tS(function(s){r=s}),cancel:r}}};function f_(e){return function(i){return e.apply(null,i)}}function d_(e){return F.isObject(e)&&e.isAxiosError===!0}const Sh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Sh).forEach(([e,r])=>{Sh[r]=e});function nS(e){const r=new jr(e),i=Rb(jr.prototype.request,r);return F.extend(i,jr.prototype,r,{allOwnKeys:!0}),F.extend(i,r,null,{allOwnKeys:!0}),i.create=function(s){return nS(kr(e,s))},i}const Je=nS(To);Je.Axios=jr;Je.CanceledError=Zl;Je.CancelToken=c_;Je.isCancel=Yb;Je.VERSION=eS;Je.toFormData=Qs;Je.AxiosError=ve;Je.Cancel=Je.CanceledError;Je.all=function(r){return Promise.all(r)};Je.spread=f_;Je.isAxiosError=d_;Je.mergeConfig=kr;Je.AxiosHeaders=Jt;Je.formToJSON=e=>Qb(F.isHTMLForm(e)?new FormData(e):e);Je.getAdapter=Ib.getAdapter;Je.HttpStatusCode=Sh;Je.default=Je;const{Axios:$C,AxiosError:NC,CanceledError:_C,isCancel:CC,CancelToken:TC,VERSION:OC,all:AC,Cancel:MC,isAxiosError:RC,spread:DC,toFormData:BC,AxiosHeaders:zC,HttpStatusCode:jC,formToJSON:HC,getAdapter:LC,mergeConfig:UC}=Je,h_=()=>Je.get("/api/tasks").then(e=>e.data),m_=e=>Je.get(`/api/tasks/${e}`).then(r=>r.data),p_=async e=>await Je.post("/api/tasks",e),y_=async(e,r)=>(await Je.patch(`/api/tasks/${e}`,r)).data,g_=async e=>{await Je.delete(`/api/tasks/${e}`)};function v_({id:e}){const r=mh({mutationFn:g_,onSuccess:()=>{vS.invalidateQueries({queryKey:["tasks"]})}}),i=o=>{o.stopPropagation(),r.mutate(e)};return _.jsx("button",{className:"delete-btn","aria-label":"close",onClick:i,children:_.jsx(r5,{className:"delete-svg"})})}const b_=Y.div`
  max-width: 300px;
  position: relative;
  display: flex;
  gap: 10px;
  padding: 1rem;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 300ms ease;
  flex-direction:column;

  &:hover {
    transform: scale(1.1);
  }
`,S_=Y.div`
  text-align: right;
  color: grey;
`,Tv=e=>{switch(e){case"High":case"To Do":return"danger";case"Medium":case"In Progress":return"orange";default:return"success"}};function x_({task:e}){const r=im();return _.jsxs(b_,{onClick:()=>r(`/task/${e.id}`),children:[_.jsx(v_,{id:e.id}),_.jsx("h3",{children:e.title}),e.description&&_.jsx("p",{children:e.description}),_.jsxs(tb,{children:[_.jsx(is,{children:e.category}),_.jsx(is,{kind:Tv(e.status),children:e.status}),_.jsx(is,{kind:Tv(e.priority),children:e.priority})]}),_.jsx(S_,{children:e.date})]})}const E_=()=>Mb({queryKey:["tasks"],queryFn:h_}),w_="_ServerStatus_1w2mm_1",Ov={ServerStatus:w_};function _s({children:e}){return _.jsx("div",{className:Ov.ServerStatus,children:_.jsx("div",{className:Ov.StatusContent,children:e})})}const xh=Y.section`
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  @media (max-width: 900px) {
  flex-wrap:wrap;}
`,$_=Y.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  flex-wrap: wrap;
  justify-content: center;
`,N_=Y.div`
  display: flex;
  justify-content: space-between;
`;function __(){const[e,r]=v.useState({sort:"",query:""}),{data:i,isLoading:o,error:s}=E_(),f=v.useMemo(()=>Array.isArray(i)?i:Object.values(i||{}),[i]),d=v.useMemo(()=>e.sort?[...f].sort((m,h)=>{const y=m[e.sort],b=h[e.sort];return typeof y=="string"&&typeof b=="string"?y.localeCompare(b):0}):f,[e.sort,f]),p=v.useMemo(()=>d.filter(m=>m.title.toLowerCase().includes(e.query.toLowerCase())),[e.query,d]);return o?_.jsx(_s,{children:"Loading..."}):s?_.jsxs(_s,{children:["Error: ",s.message]}):_.jsxs(_.Fragment,{children:[_.jsx("h1",{style:{textAlign:"center",padding:"25px 0"},children:"Task List"}),_.jsx(a5,{filter:e,setFilter:r}),_.jsx(xh,{children:_.jsx(N_,{children:_.jsx($_,{children:p.length===0?_.jsx("p",{style:{textAlign:"center",fontSize:"35px",fontWeight:" 500"},children:"No tasks"}):p.map(m=>_.jsx(x_,{task:m},m.id))})})})]})}function C_(e,r){for(const i in e)r(e[i],i)}function qn(e,r){e.forEach(r)}function An(e,r,i){if(!e)throw Error(`${i?i+": ":""}${r}`)}function Pr({node:e=[],from:r,source:i,parent:o=r||i,to:s,target:f,child:d=s||f,scope:p={},meta:m={},family:h={type:"regular"},regional:y}={}){const b=Ju(o),x=Ju(h.links),$=Ju(h.owners),S=[];qn(e,T=>T&&lr(S,T));const w={id:U_(),seq:S,next:Ju(d),meta:m,scope:p,family:{triggers:b.length,type:h.type||"crosslink",links:x,owners:$}};return qn(x,T=>lr(Ks(T),w)),qn($,T=>lr(Zs(T),w)),qn(b,T=>lr(T.next,w)),w}function aS(e,r,i){let o,s=Ta,f=null,d=it;if(e.target&&(r=e.params,i=e.defer,o=e.meta,s="page"in e?e.page:s,e.stack&&(f=e.stack),d=Zu(e)||d,e=e.target),d&&it&&d!==it&&(it=null),Array.isArray(e))for(let S=0;S<e.length;S++)Or("pure",s,Rn(e[S]),f,r[S],d,o);else Or("pure",s,Rn(e),f,r,d,o);if(i&&!Iu)return;const p={isRoot:Iu,currentPage:Ta,scope:it,isWatch:Td,isPure:ps};let m,h,y,b,x,$;Iu=0;e:for(;b=J_();){const{idx:S,stack:w,type:T}=b;y=w.node,Ta=x=w.page,it=Zu(w),x?$=x.reg:it&&($=it.reg);const N=!!x,A=!!it,M={fail:0,scope:y.scope};m=h=0;for(let P=S;P<y.seq.length&&!m;P++){const H=y.seq[P];if(H.order){const{priority:V,barrierID:U}=H.order,ee=U?x?`${x.fullID}_${U}`:U:0;if(P!==S||T!==V){U?Cd.has(ee)||(Cd.add(ee),$h(P,w,V,U)):$h(P,w,V,0);continue e}U&&Cd.delete(ee)}switch(H.type){case"mov":{const U=H.data;let ee;switch(U.from){case"stack":ee=hs(w);break;case"a":case"b":ee=w[U.from];break;case"value":ee=U.store;break;case"store":if($&&!$[U.store.id])if(N){const re=cS(x,U.store.id);w.page=x=re,re?$=re.reg:A?(Vl(it,U.store,0,1,U.softRead),$=it.reg):$=void 0}else A&&Vl(it,U.store,0,1,U.softRead);ee=sS($&&$[U.store.id]||U.store)}switch(U.to){case"stack":w.value=ee;break;case"a":case"b":w[U.to]=ee;break;case"store":I_(x,it,U.target,0).current=ee}break}case"compute":const V=H.data;if(V.fn){Td=y.meta.op==="watch",ps=V.pure;const U=V.safe?(0,V.fn)(hs(w),M.scope,w):tC(M,V.fn,w);V.filter?h=!U:w.value=U,Td=p.isWatch,ps=p.isPure}}m=M.fail||h}if(!m){const P=hs(w),H=Zu(w);if(qn(y.next,V=>{Or("child",x,V,w,P,H)}),H){y.meta.needFxCounter&&Or("child",x,H.fxCount,w,P,H),y.meta.storeChange&&Or("child",x,H.storeChange,w,P,H),y.meta.warnSerialize&&Or("child",x,H.warnSerializeNode,w,P,H);const V=H.additionalLinks[y.id];V&&qn(V,U=>{Or("child",x,U,w,P,H)})}}}Iu=p.isRoot,Ta=p.currentPage,it=Zu(p)}function T_(e,r){let i,o;const s=e;if(r){const f=D_(r);e.length===0?(i=f.path,o=f.fullName):(i=f.path.concat([e]),o=f.fullName.length===0?e:f.fullName+"/"+e)}else i=e.length===0?[]:[e],o=e;return{shortName:s,fullName:o,path:i}}function rS(e,r){if(!r||!r.name&&!r.named&&!r.loc)return e;let i=`[${e}]`;const o=r.named||r.name;o&&(i+=` unit '${o}'`);const s=r.loc;return!o&&s&&(i+=` (${s.file}:${s.line}:${s.column})`),i}function Eh(e){const r=()=>e();return r.unsubscribe=()=>e(),r}function lo(e,...r){}function Vn(e,r){const i=bo({or:r,and:typeof e=="string"?{name:e}:e}),o=rS("event",i),s=(p,...m)=>(An(!Rr(s,"derived"),"call of derived event is not supported, use createEvent instead",o),An(!ps,"unit call from pure function is not supported, use operators like sample instead",o),Ta?((h,y,b,x)=>{const $=Ta;zv(null);const w=h.create(b,x);return zv($),w})(s,f,p,m):s.create(p,m)),f=P_(),d=Object.assign(s,{graphite:Pr({meta:hS(i.actualOp||"event",s,i,dS(Vn)),regional:1}),create:p=>(aS({target:s,params:p,scope:it}),p),watch:p=>fS(s,p),map:p=>Od(s,go,p,[Bl()]),filter:p=>Od(s,"filter",p.fn?p:p.fn,[Bl(Is,1)]),filterMap:p=>Od(s,"filterMap",p,[Bl(),wh(m=>!io(m),1)]),prepend(p){An(s.targetable,".prepend of derived event is not supported, call source event instead",o);const m=Vn("* → "+s.shortName,{parent:Ts(s)});return lo("eventPrepend",Rn(m)),Em(m,s,[Bl()],"prepend",p),aC(s,m),m}});return i!=null&&i.domain&&i.domain.hooks.event(d),Dl(d,"id",d.graphite.id),oS(d.graphite),d}function Av(e,r,i,o,s){return G_(i,`${s} ${r}`,"first argument"),An(Gr(o),"second argument should be a function",s),Os(!Rr(e,"derived"),`${r} in derived store`,`${r} in store created via createStore`,s),qn(Array.isArray(i)?i:[i],f=>{e.off(f),mS(f,e,"on",Y_,o)}),e}function ur(e,r){const i=bo(r),o=Z_(e),s=rS("store",i),f=Vn({named:"updates",derived:1});lo("storeBase",o);const d=o.id,p="skipVoid"in i,m=p&&!i.skipVoid;Os(!(p&&i.skipVoid),"{skipVoid: true}","updateFilter",s);const h={updates:f,defaultState:e,stateRef:o,getState(){let N,A=o;if(Ta){let M=Ta;for(;M&&!M.reg[d];)M=Ts(M);M&&(N=M)}return!N&&it&&(Vl(it,o,1),N=it),N&&(A=N.reg[d]),sS(A)},setState:N=>aS({target:h,params:N,defer:1,scope:it}),reset:(...N)=>(An(h.targetable,".reset of derived store is not supported",s),qn(N,A=>Av(h,".reset",A,()=>h.defaultState,s)),h),on:(N,A)=>(An(h.targetable,".on of derived store is not supported",s),Av(h,".on",N,A,s)),off(N){const A=Rn(N).id,M=Rn(h).family.links.find(P=>P.meta.onTrigger===A);return M&&As(M),h},map(N,A){let M,P;Wl(N)&&(M=N,N=N.fn);const H=h.getState(),V=io(H);(!V||V&&m)&&(P=N(H));const U=ur(P,{name:`${h.shortName} → *`,derived:1,...A,and:M}),ee=mS(h,U,go,Is,N);return W_(Cs(U),{type:go,fn:N,from:o}),Cs(U).noInit=1,lo("storeMap",o,ee),U},watch(N,A){if(Os(!A,"watch second argument","sample",s),!A||!Ws(N)){const M=fS(h,N);return lo("storeWatch",o,N)||N(h.getState()),M}return An(Gr(A),"second argument should be a function",s),N.watch(M=>A(h.getState(),M))}},y=hS("store",h,i,dS(ur)),b=h.defaultConfig.updateFilter;h.graphite=Pr({scope:{state:o,fn:b},node:[wh((N,A,M)=>(M.scope&&!M.scope.reg[o.id]&&(M.b=1),N)),K_(o),wh((N,A,{a:M,b:P})=>{const H=io(N);return H&&!p&&H_(`${s}: ${Ad}`,Rr(h,"unitTrace")),(H&&m||!H)&&(N!==M||P)},1),b&&Bl(Q_,1),ec({from:"stack",target:o})],child:f,meta:{...y,defaultState:e,stateRef:o},regional:1}),Dl(h,"id",h.graphite.id),Dl(h,"rootStateRefId",d);const x=Rr(h,"serialize"),$=Rr(h,"derived"),S=x==="ignore",w=Rr(h,"sid");w&&(Dl(h,"storeChange",1),o.sid=w),w||S||$||Dl(h,"warnSerialize",1);const T=io(e);return An($||!T||T&&m,Ad,s),$&&T&&!p&&console.error(`${s}: ${Ad}`),F_(h,[f]),i!=null&&i.domain&&i.domain.hooks.store(h),$||(h.reinit=Vn({named:"reinit"}),h.reset(h.reinit)),o.meta=h.graphite.meta,oS(h.graphite),h}function O_(e,{scope:r,safe:i}={}){An(r||it||i,"scopeBind: scope not found");const o=r||it;return(...s)=>{function f(){Bv(m)}let d,p=0;const m=it;Bv(o);try{d=e(...s)}catch(h){d=h,p=1}if(f(),p)throw d;return d instanceof Promise&&d.then(f,f),d}}function A_({unit:e,fn:r,scope:i,batch:o}){const s=[ms.run({fn:d=>r(d)})];s.unshift(ms.compute({priority:"sampler",batch:1})),Js(e)&&s.unshift(ms.mov({store:e.stateRef,to:"stack"}));const f=Array.isArray(e)?e:[e];if(i){const d=[],p=i.additionalLinks;return f.forEach(m=>{const h=p[m.graphite.id]||[];p[m.graphite.id]=h;const y=Pr({node:M_(s,m),meta:{watchOp:m.kind}});h.push(y),d.push(()=>{const b=h.indexOf(y);b!==-1&&h.splice(b,1),As(y)})}),Eh(()=>{d.forEach(m=>m())})}{const d=Pr({node:s,parent:f,family:{owners:f}});return Eh(()=>{As(d)})}}function M_(e,r){return Js(r)?[ms.mov({store:r.stateRef,to:"stack"}),...e]:e}const R_=typeof Symbol<"u"&&Symbol.observable||"@@observable",go="map",Rn=e=>e.graphite||e,Ks=e=>e.family.owners,Zs=e=>e.family.links,Cs=e=>e.stateRef,hs=e=>e.value,Ts=e=>e.parent,Zu=e=>e.scope,Rr=(e,r)=>Rn(e).meta[r],Dl=(e,r,i)=>Rn(e).meta[r]=i,D_=e=>e.compositeName,Ws=e=>(Gr(e)||Wl(e))&&"kind"in e,Oo=e=>r=>Ws(r)&&r.kind===e,Js=Oo("store"),B_=Oo("event"),Mv=Oo("effect"),z_=e=>Ws(e)&&!!e.targetable,lS=Oo("domain"),j_=Oo("scope");var Wu={__proto__:null,unit:Ws,store:Js,event:B_,effect:Mv,targetable:z_,domain:lS,scope:j_,attached:e=>Mv(e)&&Rr(e,"attached")==1};const Nd=(e,r)=>e.includes(r),_d=(e,r)=>{const i=e.indexOf(r);i!==-1&&e.splice(i,1)},lr=(e,r)=>e.push(r),Os=(e,r,i,o)=>!e&&console.error(`${o?o+": ":""}${r} is deprecated${i?`, use ${i} instead`:""}`),H_=(e,r)=>{const i=Error(e);i.stack=r,console.error(i)},vm=()=>{let e=0;return()=>""+ ++e},L_=vm(),iS=vm(),U_=vm();let k_=null;const oS=e=>{},P_=()=>k_,q_=e=>e,F_=(e,r)=>{const i=Rn(e);qn(r,o=>{const s=Rn(o);i.family.type!=="domain"&&(s.family.type="crosslink"),lr(Ks(s),i),lr(Zs(i),s)})},Ju=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(Rn),Wl=e=>typeof e=="object"&&e!==null,Gr=e=>typeof e=="function",io=e=>e===void 0,V_=e=>An(Wl(e)||Gr(e),"expect first argument be an object"),Rv=(e,r,i,o)=>An(!(!Wl(e)&&!Gr(e)||!("family"in e)&&!("graphite"in e)),`${r}: expect ${i} to be a unit (store, event or effect)${o}`),G_=(e,r,i)=>{Array.isArray(e)?qn(e,(o,s)=>Rv(o,r,`${s} item of ${i}`,"")):Rv(e,r,i," or array of units")},Q_=(e,{fn:r},{a:i})=>r(e,i),Y_=(e,{fn:r},{a:i})=>r(i,e),Is=(e,{fn:r})=>r(e),uS=(e,r,i,o)=>{const s={id:iS(),type:e,data:r};return i&&(s.order={priority:i},o&&(s.order.barrierID=++X_)),s};let X_=0;const ec=({from:e="store",store:r,target:i,to:o=i?"store":"stack",batch:s,priority:f})=>uS("mov",{from:e,store:r,to:o,target:i},f,s),vo=({fn:e,batch:r,priority:i,safe:o=0,filter:s=0,pure:f=0})=>uS("compute",{fn:e,safe:o,filter:s,pure:f},i,r),bm=({fn:e})=>vo({fn:e,priority:"effect"}),wh=(e,r,i)=>vo({fn:e,safe:1,filter:r,priority:i}),K_=(e,r,i)=>ec({store:e,to:"a",priority:i,batch:1}),Bl=(e=Is,r)=>vo({fn:e,pure:1,filter:r}),ms={mov:ec,compute:vo,filter:({fn:e,pure:r})=>vo({fn:e,filter:1,pure:r}),run:bm},Z_=e=>({id:iS(),current:e,initial:e}),sS=({current:e})=>e,W_=(e,r)=>{e.before||(e.before=[]),lr(e.before,r)};let zl=null;const Sm=(e,r)=>{if(!e)return r;if(!r)return e;let i;return(e.v.type===r.v.type&&e.v.id>r.v.id||Nh(e.v.type)>Nh(r.v.type))&&(i=e,e=r,r=i),i=Sm(e.r,r),e.r=e.l,e.l=i,e},xm=[];let Dv=0;for(;Dv<6;)lr(xm,{first:null,last:null,size:0}),Dv+=1;const J_=()=>{for(let e=0;e<6;e++){const r=xm[e];if(r.size>0){if(e===3||e===4){r.size-=1;const o=zl.v;return zl=Sm(zl.l,zl.r),o}r.size===1&&(r.last=null);const i=r.first;return r.first=i.r,r.size-=1,i.v}}},Or=(e,r,i,o,s,f,d)=>$h(0,{a:null,b:null,node:i,parent:o,value:s,page:r,scope:f,meta:d},e,0),$h=(e,r,i,o)=>{const s=Nh(i),f=xm[s],d={v:{idx:e,stack:r,type:i,id:o},l:null,r:null};s===3||s===4?zl=Sm(zl,d):(f.size===0?f.first=d:f.last.r=d,f.last=d),f.size+=1},Nh=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Cd=new Set;let it,Iu=1,Td=0,ps=0,Ta=null;const Bv=e=>{it=e},zv=e=>{Ta=e},cS=(e,r)=>{if(e){for(;e&&!e.reg[r];)e=e.parent;if(e)return e}return null},I_=(e,r,i,o)=>{const s=cS(e,i.id);return s?s.reg[i.id]:r?(Vl(r,i,o),r.reg[i.id]):i},eC=e=>e,Vl=(e,r,i,o,s)=>{const f=e.reg;if(f[r.id])return;const d=r.sid,p={id:r.id,current:r.initial,meta:r.meta};if(p.id in e.values.idMap)p.current=e.values.idMap[p.id];else if(d&&d in e.values.sidMap&&!(d in e.sidIdMap)){var m;const h=r==null||(m=r.meta)===null||m===void 0?void 0:m.serialize;p.current=(e.fromSerialize&&h!=="ignore"&&h?.read||eC)(e.values.sidMap[d])}else if(r.before&&!s){let h=0;const y=i||!r.noInit||o;qn(r.before,b=>{switch(b.type){case"map":{const x=b.from;if((x||b.fn)&&(x&&Vl(e,x,i,o),y)){const $=x&&f[x.id].current;p.current=b.fn?b.fn($):$}break}case"field":Vl(e,b.from,i,o),h||(h=1,p.current=Array.isArray(p.current)?[...p.current]:{...p.current}),y&&(p.current[b.field]=f[f[b.from.id].id].current)}})}d&&(e.sidIdMap[d]=r.id),f[r.id]=p},tC=(e,r,i)=>{try{return r(hs(i),e.scope,i)}catch(o){console.error(o),e.fail=1,e.failReason=o}},bo=(e,r={})=>(Wl(e)&&(bo(e.or,r),C_(e,(i,o)=>{io(i)||o==="or"||o==="and"||(r[o]=i)}),bo(e.and,r)),r),jv=(e,r)=>{_d(e.next,r),_d(Ks(e),r),_d(Zs(e),r)},Hv=["on","reset","sample","split","merge","guard","forward"],ys=(e,r,i,o,s)=>{let f;e.next.length=0,e.seq.length=0,e.scope=null;let d=Zs(e);const{stateRef:p,defaultShape:m,isRegion:h,op:y}=e.meta;if(p&&(p.before=[],e.meta.stateRef=null),m)for(const x in m)m[x]=null;const b=h?e:o;if(d.length>0){const x=Nd(Hv,y),$=!h&&!s,S=$&&i&&!x;for(;f=d.pop();){const w=Nd(f.next,e);jv(f,e),h&&ys(f,0,0,e,1),w||(f.family.triggers-=1),(r||S||$&&f.family.type==="crosslink"&&!x||s&&Nd(Hv,f.meta.op)&&(w&&f.next.length===0||!w&&f.family.triggers<=0))&&ys(f,r,i&&f.meta.op!=="on",b,s)}}for(d=Ks(e);f=d.pop();)jv(f,e),i&&f.family.type==="crosslink"&&ys(f,r,f.meta.op!=="on",b,s)},es=e=>e.clear(),As=(e,{deep:r}={})=>{let i=0;if(e.ownerSet&&e.ownerSet.delete(e),lS(e)){i=1;const o=e.history;es(o.events),es(o.effects),es(o.stores),es(o.domains)}ys(Rn(e),!!r,i,null,0)},nC=e=>Eh(()=>As(e)),Em=(e,r,i,o,s)=>Pr({node:i,parent:e,child:r,scope:{fn:s},meta:{op:o},family:{owners:[e,r],links:r},regional:1}),fS=(e,r)=>(An(Gr(r),".watch argument should be a function"),nC(Pr({scope:{fn:r},node:[bm({fn:Is})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),aC=(e,r,i="event")=>{Ts(e)&&Ts(e).hooks[i](r)},dS=e=>{const r=Error("unit trace");return Error.captureStackTrace&&Error.captureStackTrace(r,e),r.stack},hS=(e,r,i,o)=>{const s=bo(i),f=e==="domain",d=L_(),{sid:p=null,named:m=null,domain:h=null,parent:y=h}=s,b=m||s.name||(f?"":d),x=T_(b,y),$={op:r.kind=e,name:r.shortName=b,sid:r.sid=q_(p),named:m,unitId:r.id=d,serialize:s.serialize,derived:s.derived,config:s,unitTrace:o};return r.targetable=!s.derived,r.parent=y,r.compositeName=x,r.defaultConfig=s,r.getType=()=>(Os(0,"getType","compositeName.fullName"),x.fullName),!f&&(r.subscribe=S=>(V_(S),r.watch(Gr(S)?S:w=>S.next&&S.next(w))),r[R_]=()=>r),$},Od=(e,r,i,o)=>{let s;Wl(i)&&(s=i,i=i.fn);const f=Vn({name:`${e.shortName} → *`,derived:1,and:s});return Em(e,f,o,r,i),f},Ad="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",mS=(e,r,i,o,s)=>{const f=Cs(r),d=ec({store:f,to:"a",priority:"read"});i===go&&(d.data.softRead=1);const p=[d,Bl(o)];lo("storeOnMap",f,p,Js(e)&&Cs(e));const m=Em(e,r,p,i,s);return i!==go&&Dl(m,"onTrigger",Rn(e).id),m};Pr({node:[bm({fn:({fn:e,value:r})=>e(r)})],meta:{op:"fx",fx:"sidechain"}});var Md={exports:{}},Rd={},Dd={exports:{}},Bd={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function rC(){if(Lv)return Bd;Lv=1;var e=So();function r(b,x){return b===x&&(b!==0||1/b===1/x)||b!==b&&x!==x}var i=typeof Object.is=="function"?Object.is:r,o=e.useState,s=e.useEffect,f=e.useLayoutEffect,d=e.useDebugValue;function p(b,x){var $=x(),S=o({inst:{value:$,getSnapshot:x}}),w=S[0].inst,T=S[1];return f(function(){w.value=$,w.getSnapshot=x,m(w)&&T({inst:w})},[b,$,x]),s(function(){return m(w)&&T({inst:w}),b(function(){m(w)&&T({inst:w})})},[b]),d($),$}function m(b){var x=b.getSnapshot;b=b.value;try{var $=x();return!i(b,$)}catch{return!0}}function h(b,x){return x()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:p;return Bd.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:y,Bd}var Uv;function pS(){return Uv||(Uv=1,Dd.exports=rC()),Dd.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function lC(){if(kv)return Rd;kv=1;var e=So(),r=pS();function i(h,y){return h===y&&(h!==0||1/h===1/y)||h!==h&&y!==y}var o=typeof Object.is=="function"?Object.is:i,s=r.useSyncExternalStore,f=e.useRef,d=e.useEffect,p=e.useMemo,m=e.useDebugValue;return Rd.useSyncExternalStoreWithSelector=function(h,y,b,x,$){var S=f(null);if(S.current===null){var w={hasValue:!1,value:null};S.current=w}else w=S.current;S=p(function(){function N(V){if(!A){if(A=!0,M=V,V=x(V),$!==void 0&&w.hasValue){var U=w.value;if($(U,V))return P=U}return P=V}if(U=P,o(M,V))return U;var ee=x(V);return $!==void 0&&$(U,ee)?(M=V,U):(M=V,P=ee)}var A=!1,M,P,H=b===void 0?null:b;return[function(){return N(y())},H===null?void 0:function(){return N(H())}]},[y,b,x,$]);var T=s(h,S[0],S[1]);return d(function(){w.hasValue=!0,w.value=T},[T]),m(T),T},Rd}var Pv;function iC(){return Pv||(Pv=1,Md.exports=lC()),Md.exports}var oC=iC();const uC=Hh(oC);var sC=pS();const cC=Hh(sC);function fC(e,r){const i=Wu.unit(e);let o={};i?o={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?o=e["@@unitShape"]():qv("expect @@unitShape to be a function"):o=e;const s=Array.isArray(o),f=Dt.useRef({stale:1,justSubscribed:0,scope:r}),[d,p,m,h,y]=Dt.useMemo(()=>{f.current.stale=1;const S=Array.isArray(o)?[]:{},w=[],T=[],N=[],A=[];for(const M in o){if(!{}.hasOwnProperty.call(o,M))continue;const P=o[M];Wu.unit(P)||qv(`expect useUnit ${i?"argument":`value in key "${M}"`} to be a unit`),Wu.event(P)||Wu.effect(P)?(S[M]=r?O_(P,{scope:r}):P,N.push(M),A.push(P)):(S[M]=null,w.push(M),T.push(P))}return[S,w,T,N,A]},[f,r,...Object.keys(o),...Object.values(o)]),b=Dt.useRef({value:d,storeKeys:p,eventKeys:h,eventValues:y}),x=Dt.useCallback(S=>{const w=f.current;return w.justSubscribed=1,A_({unit:m,fn:()=>{w.stale||(w.stale=1,S())},scope:r,batch:1})},[m,r,b,f]),$=Dt.useCallback(()=>{const S=b.current,w=f.current;let T,N=0;const A=S.value,M=S.storeKeys,P=S.eventKeys,H=S.eventValues,V=r!==w.scope;if(w.stale||w.justSubscribed||V){N=!w.justSubscribed||V,T=s?[...d]:{...d},M.length===p.length&&P.length===h.length||(N=1);for(let U=0;U<p.length;U++){const ee=mC(m[U],r),re=p[U];N||(N=M.includes(re)?A[re]!==ee:1),T[re]=ee}for(let U=0;U<h.length;U++){const ee=y[U],re=h[U];N||(N=P.includes(re)?H[P.indexOf(re)]!==ee:1)}}return N&&(S.value=T),S.storeKeys=p,S.eventKeys=h,S.eventValues=y,w.stale=0,w.justSubscribed=!N,w.scope=r,i?S.value.unit:S.value},[x,m,y,r,b,f]);return hC(x,$,$)}function dC(e){return Dt.useContext(yS)}function Ml(e,r){return fC(e,dC())}const qv=e=>{throw Error(e)};typeof window<"u"?Dt.useLayoutEffect:Dt.useEffect;const{useSyncExternalStore:hC}=cC,{useSyncExternalStoreWithSelector:kC}=uC,mC=(e,r)=>r?r.getState(e):e.getState(),yS=Dt.createContext(null),{Provider:PC}=yS,pC=Y.button`
  background-color: #286562;
  color: #fff;
`,yC=Y(Ps)`
  background-color: #e0f0e5;
  color: #286562;
  text-align: center;
  text-decoration: none;
`,_h=Vn(),Ch=Vn(),Th=Vn(),Oh=Vn(),Ah=Vn(),Mh=Vn(),Rh=ur(""),Dh=ur(""),Bh=ur("Bug"),zh=ur("To Do"),jh=ur("Medium"),gS=ur("");Rh.on(_h,(e,r)=>r);Dh.on(Ch,(e,r)=>r);Bh.on(Th,(e,r)=>r);zh.on(Oh,(e,r)=>r);jh.on(Ah,(e,r)=>r);gS.on(Mh,(e,r)=>r);function Fv({task:e,onSave:r}){Dt.useEffect(()=>{_h(e?.title??""),Ch(e?.description??""),Th(e?.category??"Bug"),Oh(e?.status??"To Do"),Ah(e?.priority??"Medium")},[e]);const i=Ml(Rh),o=Ml(Dh),s=Ml(Bh),f=Ml(zh),d=Ml(jh),p=Ml(gS);return _.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:16},children:[_.jsxs("label",{children:[_.jsx("h4",{style:{display:"inline"},children:"Title:"}),_.jsx("span",{style:{color:"red"},children:"*"}),_.jsx(eb,{value:i,onChange:m=>_h(m.currentTarget.value)}),p&&_.jsx("p",{style:{color:"red"},children:p})]}),_.jsxs("label",{children:[_.jsx("h4",{style:{display:"inline"},children:"Description:"}),_.jsx(nm,{value:o,onChange:m=>Ch(m.currentTarget.value)})]}),_.jsxs("label",{children:[_.jsx("h4",{style:{display:"inline"},children:"Category:"}),_.jsx("span",{style:{color:"red"},children:"*"}),_.jsxs(ro,{value:s,onChange:m=>Th(m.target.value),children:[_.jsx(fn,{value:"Bug",children:"Bug"}),_.jsx(fn,{value:"Feature",children:"Feature"}),_.jsx(fn,{value:"Documentation",children:"Documentation"}),_.jsx(fn,{value:"Refactor",children:"Refactor"}),_.jsx(fn,{value:"Test",children:"Test"})]})]}),_.jsxs("label",{children:[_.jsx("h4",{style:{display:"inline"},children:"Status:"}),_.jsx("span",{style:{color:"red"},children:"*"}),_.jsxs(ro,{value:f,onChange:m=>Oh(m.target.value),children:[_.jsx(fn,{value:"To Do",children:"To Do"}),_.jsx(fn,{value:"In Progress",children:"In Progress"}),_.jsx(fn,{value:"Done",children:"Done"})]})]}),_.jsxs("label",{children:[_.jsx("h4",{style:{display:"inline"},children:"Priority:"}),_.jsx("span",{style:{color:"red"},children:"*"}),_.jsxs(ro,{value:d,onChange:m=>Ah(m.target.value),children:[_.jsx(fn,{value:"Low",children:"Low"}),_.jsx(fn,{value:"Medium",children:"Medium"}),_.jsx(fn,{value:"High",children:"High"})]})]}),_.jsx(pC,{className:"btn",onClick:m=>{m.preventDefault();const h=Rh.getState();if(h.trim())Mh("");else{Mh("Title is required");return}const b=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}).replace(/ /g,"-");r({title:h,description:Dh.getState(),category:Bh.getState(),status:zh.getState(),priority:jh.getState(),date:b})},children:"Save"}),_.jsx(yC,{to:"/",className:"btn",children:"Cancel"})]})}const gC=e=>Mb({queryKey:["task",e],queryFn:()=>m_(e)}),Vv=Y.div`
  width: 600px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    width: 300px;
  }
`;function vC(){const e=im(),{id:r}=I3(),i=mh({mutationFn:p_,onSuccess:()=>e("/")}),o=mh({mutationFn:({id:h,task:y})=>y_(h,y),onSuccess:()=>e("/")});if(r===void 0){const h=y=>{i.mutate(y)};return _.jsx(xh,{children:_.jsx(Vv,{children:_.jsx(Fv,{task:void 0,onSave:h})})})}const s=parseInt(r),{data:f,isLoading:d,error:p}=gC(s);if(d)return _.jsx(_s,{children:"Loading..."});if(p)return _.jsxs(_s,{children:["Error: ",p.message]});const m=h=>{o.mutate({id:s,task:h})};return _.jsx(xh,{children:_.jsx(Vv,{children:_.jsx(Fv,{task:f,onSave:m})})})}function Gv(){return _.jsx(vC,{})}function bC(){return _.jsx(L4,{children:_.jsxs(m4,{children:[_.jsx(os,{path:"/",element:_.jsx(__,{})}),_.jsx(os,{path:"/task/new",element:_.jsx(Gv,{})}),_.jsx(os,{path:"/task/:id",element:_.jsx(Gv,{})})]})})}const vS=new S5;function SC(){return _.jsx("div",{children:_.jsx(N5,{client:vS,children:_.jsx(bC,{})})})}OE.createRoot(document.getElementById("root")).render(_.jsx(v.StrictMode,{children:_.jsx(T2,{theme:Hs,children:_.jsxs(F2,{children:[_.jsx(E3,{}),_.jsx(SC,{})]})})}));
