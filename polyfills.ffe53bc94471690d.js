"use strict";(self.webpackChunkarqma_web=self.webpackChunkarqma_web||[]).push([[429],{106:(jt,Wn,Gn)=>{"undefined"!=typeof window&&window,"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self;"undefined"!=typeof global&&global;Object.keys({useClass:null}),Object.keys({useFactory:null}),Object.keys({useValue:null}),Object.keys({useExisting:null}),Error;const Uo=function(s,...e){if(Uo.translate){const n=Uo.translate(s,e);s=n[0],e=n[1]}let t=ec(s[0],s.raw[0]);for(let n=1;n<s.length;n++)t+=e[n-1]+ec(s[n],s.raw[n]);return t};function ec(s,e){return":"===e.charAt(0)?s.substring(function Yl(s,e){for(let t=1,n=1;t<s.length;t++,n++)if("\\"===e[n])n++;else if(":"===s[t])return t;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(s,e)+1):s}(()=>"undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof global&&global||"undefined"!=typeof window&&window||"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self)().$localize=Uo,Gn(583)},583:()=>{!function(f){const v=f.performance;function S(oe){v&&v.mark&&v.mark(oe)}function y(oe,B){v&&v.measure&&v.measure(oe,B)}S("Zone");const x=f.__Zone_symbol_prefix||"__zone_symbol__";function A(oe){return x+oe}const V=!0===f[A("forceDuplicateZoneCheck")];if(f.Zone){if(V||"function"!=typeof f.Zone.__symbol__)throw new Error("Zone already loaded.");return f.Zone}let L=(()=>{class oe{constructor(c,E){this._parent=c,this._name=E?E.name||"unnamed":"<root>",this._properties=E&&E.properties||{},this._zoneDelegate=new Z(this,this._parent&&this._parent._zoneDelegate,E)}static assertZonePatched(){if(f.Promise!==Ie.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let c=oe.current;for(;c.parent;)c=c.parent;return c}static get current(){return ke.zone}static get currentTask(){return Ge}static __load_patch(c,E,K=!1){if(Ie.hasOwnProperty(c)){if(!K&&V)throw Error("Already loaded patch: "+c)}else if(!f["__Zone_disable_"+c]){const W="Zone:"+c;S(W),Ie[c]=E(f,oe,Fe),y(W,W)}}get parent(){return this._parent}get name(){return this._name}get(c){const E=this.getZoneWith(c);if(E)return E._properties[c]}getZoneWith(c){let E=this;for(;E;){if(E._properties.hasOwnProperty(c))return E;E=E._parent}return null}fork(c){if(!c)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,c)}wrap(c,E){if("function"!=typeof c)throw new Error("Expecting function got: "+c);const K=this._zoneDelegate.intercept(this,c,E),W=this;return function(){return W.runGuarded(K,this,arguments,E)}}run(c,E,K,W){ke={parent:ke,zone:this};try{return this._zoneDelegate.invoke(this,c,E,K,W)}finally{ke=ke.parent}}runGuarded(c,E=null,K,W){ke={parent:ke,zone:this};try{try{return this._zoneDelegate.invoke(this,c,E,K,W)}catch(se){if(this._zoneDelegate.handleError(this,se))throw se}}finally{ke=ke.parent}}runTask(c,E,K){if(c.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(c.zone||Ue).name+"; Execution: "+this.name+")");if(c.state===Se&&(c.type===Be||c.type===Q))return;const W=c.state!=I;W&&c._transitionTo(I,fe),c.runCount++;const se=Ge;Ge=c,ke={parent:ke,zone:this};try{c.type==Q&&c.data&&!c.data.isPeriodic&&(c.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,c,E,K)}catch(b){if(this._zoneDelegate.handleError(this,b))throw b}}finally{c.state!==Se&&c.state!==R&&(c.type==Be||c.data&&c.data.isPeriodic?W&&c._transitionTo(fe,I):(c.runCount=0,this._updateTaskCount(c,-1),W&&c._transitionTo(Se,I,Se))),ke=ke.parent,Ge=se}}scheduleTask(c){if(c.zone&&c.zone!==this){let K=this;for(;K;){if(K===c.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${c.zone.name}`);K=K.parent}}c._transitionTo(we,Se);const E=[];c._zoneDelegates=E,c._zone=this;try{c=this._zoneDelegate.scheduleTask(this,c)}catch(K){throw c._transitionTo(R,we,Se),this._zoneDelegate.handleError(this,K),K}return c._zoneDelegates===E&&this._updateTaskCount(c,1),c.state==we&&c._transitionTo(fe,we),c}scheduleMicroTask(c,E,K,W){return this.scheduleTask(new U(pe,c,E,K,W,void 0))}scheduleMacroTask(c,E,K,W,se){return this.scheduleTask(new U(Q,c,E,K,W,se))}scheduleEventTask(c,E,K,W,se){return this.scheduleTask(new U(Be,c,E,K,W,se))}cancelTask(c){if(c.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(c.zone||Ue).name+"; Execution: "+this.name+")");c._transitionTo(me,fe,I);try{this._zoneDelegate.cancelTask(this,c)}catch(E){throw c._transitionTo(R,me),this._zoneDelegate.handleError(this,E),E}return this._updateTaskCount(c,-1),c._transitionTo(Se,me),c.runCount=0,c}_updateTaskCount(c,E){const K=c._zoneDelegates;-1==E&&(c._zoneDelegates=null);for(let W=0;W<K.length;W++)K[W]._updateTaskCount(c.type,E)}}return oe.__symbol__=A,oe})();const $={name:"",onHasTask:(oe,B,c,E)=>oe.hasTask(c,E),onScheduleTask:(oe,B,c,E)=>oe.scheduleTask(c,E),onInvokeTask:(oe,B,c,E,K,W)=>oe.invokeTask(c,E,K,W),onCancelTask:(oe,B,c,E)=>oe.cancelTask(c,E)};class Z{constructor(B,c,E){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=B,this._parentDelegate=c,this._forkZS=E&&(E&&E.onFork?E:c._forkZS),this._forkDlgt=E&&(E.onFork?c:c._forkDlgt),this._forkCurrZone=E&&(E.onFork?this.zone:c._forkCurrZone),this._interceptZS=E&&(E.onIntercept?E:c._interceptZS),this._interceptDlgt=E&&(E.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=E&&(E.onIntercept?this.zone:c._interceptCurrZone),this._invokeZS=E&&(E.onInvoke?E:c._invokeZS),this._invokeDlgt=E&&(E.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=E&&(E.onInvoke?this.zone:c._invokeCurrZone),this._handleErrorZS=E&&(E.onHandleError?E:c._handleErrorZS),this._handleErrorDlgt=E&&(E.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=E&&(E.onHandleError?this.zone:c._handleErrorCurrZone),this._scheduleTaskZS=E&&(E.onScheduleTask?E:c._scheduleTaskZS),this._scheduleTaskDlgt=E&&(E.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=E&&(E.onScheduleTask?this.zone:c._scheduleTaskCurrZone),this._invokeTaskZS=E&&(E.onInvokeTask?E:c._invokeTaskZS),this._invokeTaskDlgt=E&&(E.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=E&&(E.onInvokeTask?this.zone:c._invokeTaskCurrZone),this._cancelTaskZS=E&&(E.onCancelTask?E:c._cancelTaskZS),this._cancelTaskDlgt=E&&(E.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=E&&(E.onCancelTask?this.zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const K=E&&E.onHasTask;(K||c&&c._hasTaskZS)&&(this._hasTaskZS=K?E:$,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=B,E.onScheduleTask||(this._scheduleTaskZS=$,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this.zone),E.onInvokeTask||(this._invokeTaskZS=$,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this.zone),E.onCancelTask||(this._cancelTaskZS=$,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this.zone))}fork(B,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,B,c):new L(B,c)}intercept(B,c,E){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,B,c,E):c}invoke(B,c,E,K,W){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,B,c,E,K,W):c.apply(E,K)}handleError(B,c){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,B,c)}scheduleTask(B,c){let E=c;if(this._scheduleTaskZS)this._hasTaskZS&&E._zoneDelegates.push(this._hasTaskDlgtOwner),E=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,B,c),E||(E=c);else if(c.scheduleFn)c.scheduleFn(c);else{if(c.type!=pe)throw new Error("Task is missing scheduleFn.");ne(c)}return E}invokeTask(B,c,E,K){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,B,c,E,K):c.callback.apply(E,K)}cancelTask(B,c){let E;if(this._cancelTaskZS)E=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,B,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");E=c.cancelFn(c)}return E}hasTask(B,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,B,c)}catch(E){this.handleError(B,E)}}_updateTaskCount(B,c){const E=this._taskCounts,K=E[B],W=E[B]=K+c;if(W<0)throw new Error("More tasks executed then were scheduled.");0!=K&&0!=W||this.hasTask(this.zone,{microTask:E.microTask>0,macroTask:E.macroTask>0,eventTask:E.eventTask>0,change:B})}}class U{constructor(B,c,E,K,W,se){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=B,this.source=c,this.data=K,this.scheduleFn=W,this.cancelFn=se,!E)throw new Error("callback is not defined");this.callback=E;const b=this;this.invoke=B===Be&&K&&K.useG?U.invokeTask:function(){return U.invokeTask.call(f,b,this,arguments)}}static invokeTask(B,c,E){B||(B=this),ze++;try{return B.runCount++,B.zone.runTask(B,c,E)}finally{1==ze&&q(),ze--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(Se,we)}_transitionTo(B,c,E){if(this._state!==c&&this._state!==E)throw new Error(`${this.type} '${this.source}': can not transition to '${B}', expecting state '${c}'${E?" or '"+E+"'":""}, was '${this._state}'.`);this._state=B,B==Se&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const z=A("setTimeout"),ae=A("Promise"),ce=A("then");let Pe,be=[],_e=!1;function Me(oe){if(Pe||f[ae]&&(Pe=f[ae].resolve(0)),Pe){let B=Pe[ce];B||(B=Pe.then),B.call(Pe,oe)}else f[z](oe,0)}function ne(oe){0===ze&&0===be.length&&Me(q),oe&&be.push(oe)}function q(){if(!_e){for(_e=!0;be.length;){const oe=be;be=[];for(let B=0;B<oe.length;B++){const c=oe[B];try{c.zone.runTask(c,null,null)}catch(E){Fe.onUnhandledError(E)}}}Fe.microtaskDrainDone(),_e=!1}}const Ue={name:"NO ZONE"},Se="notScheduled",we="scheduling",fe="scheduled",I="running",me="canceling",R="unknown",pe="microTask",Q="macroTask",Be="eventTask",Ie={},Fe={symbol:A,currentZoneFrame:()=>ke,onUnhandledError:Le,microtaskDrainDone:Le,scheduleMicroTask:ne,showUncaughtError:()=>!L[A("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:Le,patchMethod:()=>Le,bindArguments:()=>[],patchThen:()=>Le,patchMacroTask:()=>Le,patchEventPrototype:()=>Le,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>Le,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>Le,wrapWithCurrentZone:()=>Le,filterProperties:()=>[],attachOriginToPatched:()=>Le,_redefineProperty:()=>Le,patchCallbacks:()=>Le,nativeScheduleMicroTask:Me};let ke={parent:null,zone:new L(null,null)},Ge=null,ze=0;function Le(){}y("Zone","Zone"),f.Zone=L}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const jt=Object.getOwnPropertyDescriptor,Wn=Object.defineProperty,Gn=Object.getPrototypeOf,$e=Object.create,gt=Array.prototype.slice,In="addEventListener",Dn="removeEventListener",_s=Zone.__symbol__(In),zn=Zone.__symbol__(Dn),vt="true",Y="false",an=Zone.__symbol__("");function un(f,v){return Zone.current.wrap(f,v)}function Nn(f,v,S,y,x){return Zone.current.scheduleMacroTask(f,v,S,y,x)}const ye=Zone.__symbol__,Et="undefined"!=typeof window,Lt=Et?window:void 0,He=Et&&Lt||"object"==typeof self&&self||global;function ys(f,v){for(let S=f.length-1;S>=0;S--)"function"==typeof f[S]&&(f[S]=un(f[S],v+"_"+S));return f}function ut(f){return!f||!1!==f.writable&&!("function"==typeof f.get&&void 0===f.set)}const Kn="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,ln=!("nw"in He)&&void 0!==He.process&&"[object process]"==={}.toString.call(He.process),Ss=!ln&&!Kn&&!(!Et||!Lt.HTMLElement),le=void 0!==He.process&&"[object process]"==={}.toString.call(He.process)&&!Kn&&!(!Et||!Lt.HTMLElement),We={},or=function(f){if(!(f=f||He.event))return;let v=We[f.type];v||(v=We[f.type]=ye("ON_PROPERTY"+f.type));const S=this||f.target||He,y=S[v];let x;if(Ss&&S===Lt&&"error"===f.type){const A=f;x=y&&y.call(this,A.message,A.filename,A.lineno,A.colno,A.error),!0===x&&f.preventDefault()}else x=y&&y.apply(this,arguments),null!=x&&!x&&f.preventDefault();return x};function ar(f,v,S){let y=jt(f,v);if(!y&&S&&jt(S,v)&&(y={enumerable:!0,configurable:!0}),!y||!y.configurable)return;const x=ye("on"+v+"patched");if(f.hasOwnProperty(x)&&f[x])return;delete y.writable,delete y.value;const A=y.get,V=y.set,L=v.slice(2);let $=We[L];$||($=We[L]=ye("ON_PROPERTY"+L)),y.set=function(Z){let U=this;!U&&f===He&&(U=He),U&&("function"==typeof U[$]&&U.removeEventListener(L,or),V&&V.call(U,null),U[$]=Z,"function"==typeof Z&&U.addEventListener(L,or,!1))},y.get=function(){let Z=this;if(!Z&&f===He&&(Z=He),!Z)return null;const U=Z[$];if(U)return U;if(A){let z=A.call(this);if(z)return y.set.call(this,z),"function"==typeof Z.removeAttribute&&Z.removeAttribute(v),z}return null},Wn(f,v,y),f[x]=!0}function ur(f,v,S){if(v)for(let y=0;y<v.length;y++)ar(f,"on"+v[y],S);else{const y=[];for(const x in f)"on"==x.slice(0,2)&&y.push(x);for(let x=0;x<y.length;x++)ar(f,y[x],S)}}const Je=ye("originalInstance");function Zn(f){const v=He[f];if(!v)return;He[ye(f)]=v,He[f]=function(){const x=ys(arguments,f);switch(x.length){case 0:this[Je]=new v;break;case 1:this[Je]=new v(x[0]);break;case 2:this[Je]=new v(x[0],x[1]);break;case 3:this[Je]=new v(x[0],x[1],x[2]);break;case 4:this[Je]=new v(x[0],x[1],x[2],x[3]);break;default:throw new Error("Arg list too long.")}},Tt(He[f],v);const S=new v(function(){});let y;for(y in S)"XMLHttpRequest"===f&&"responseBlob"===y||function(x){"function"==typeof S[x]?He[f].prototype[x]=function(){return this[Je][x].apply(this[Je],arguments)}:Wn(He[f].prototype,x,{set:function(A){"function"==typeof A?(this[Je][x]=un(A,f+"."+x),Tt(this[Je][x],A)):this[Je][x]=A},get:function(){return this[Je][x]}})}(y);for(y in v)"prototype"!==y&&v.hasOwnProperty(y)&&(He[f][y]=v[y])}function Rt(f,v,S){let y=f;for(;y&&!y.hasOwnProperty(v);)y=Gn(y);!y&&f[v]&&(y=f);const x=ye(v);let A=null;if(y&&(!(A=y[x])||!y.hasOwnProperty(x))&&(A=y[x]=y[v],ut(y&&jt(y,v)))){const L=S(A,x,v);y[v]=function(){return L(this,arguments)},Tt(y[v],A)}return A}function ui(f,v,S){let y=null;function x(A){const V=A.data;return V.args[V.cbIdx]=function(){A.invoke.apply(this,arguments)},y.apply(V.target,V.args),A}y=Rt(f,v,A=>function(V,L){const $=S(V,L);return $.cbIdx>=0&&"function"==typeof L[$.cbIdx]?Nn($.name,L[$.cbIdx],$,x):A.apply(V,L)})}function Tt(f,v){f[ye("OriginalDelegate")]=v}let lr=!1,Xn=!1;function Yn(){if(lr)return Xn;lr=!0;try{const f=Lt.navigator.userAgent;(-1!==f.indexOf("MSIE ")||-1!==f.indexOf("Trident/")||-1!==f.indexOf("Edge/"))&&(Xn=!0)}catch(f){}return Xn}Zone.__load_patch("ZoneAwarePromise",(f,v,S)=>{const y=Object.getOwnPropertyDescriptor,x=Object.defineProperty,V=S.symbol,L=[],$=!0===f[V("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],Z=V("Promise"),U=V("then");S.onUnhandledError=b=>{if(S.showUncaughtError()){const D=b&&b.rejection;D?console.error("Unhandled Promise rejection:",D instanceof Error?D.message:D,"; Zone:",b.zone.name,"; Task:",b.task&&b.task.source,"; Value:",D,D instanceof Error?D.stack:void 0):console.error(b)}},S.microtaskDrainDone=()=>{for(;L.length;){const b=L.shift();try{b.zone.runGuarded(()=>{throw b.throwOriginal?b.rejection:b})}catch(D){ce(D)}}};const ae=V("unhandledPromiseRejectionHandler");function ce(b){S.onUnhandledError(b);try{const D=v[ae];"function"==typeof D&&D.call(this,b)}catch(D){}}function be(b){return b&&b.then}function _e(b){return b}function Pe(b){return c.reject(b)}const Me=V("state"),ne=V("value"),q=V("finally"),Ue=V("parentPromiseValue"),Se=V("parentPromiseState"),fe=null,I=!0,me=!1;function pe(b,D){return m=>{try{Fe(b,D,m)}catch(N){Fe(b,!1,N)}}}const Q=function(){let b=!1;return function(m){return function(){b||(b=!0,m.apply(null,arguments))}}},Ie=V("currentTaskTrace");function Fe(b,D,m){const N=Q();if(b===m)throw new TypeError("Promise resolved with itself");if(b[Me]===fe){let H=null;try{("object"==typeof m||"function"==typeof m)&&(H=m&&m.then)}catch(G){return N(()=>{Fe(b,!1,G)})(),b}if(D!==me&&m instanceof c&&m.hasOwnProperty(Me)&&m.hasOwnProperty(ne)&&m[Me]!==fe)Ge(m),Fe(b,m[Me],m[ne]);else if(D!==me&&"function"==typeof H)try{H.call(m,N(pe(b,D)),N(pe(b,!1)))}catch(G){N(()=>{Fe(b,!1,G)})()}else{b[Me]=D;const G=b[ne];if(b[ne]=m,b[q]===q&&D===I&&(b[Me]=b[Se],b[ne]=b[Ue]),D===me&&m instanceof Error){const O=v.currentTask&&v.currentTask.data&&v.currentTask.data.__creationTrace__;O&&x(m,Ie,{configurable:!0,enumerable:!1,writable:!0,value:O})}for(let O=0;O<G.length;)ze(b,G[O++],G[O++],G[O++],G[O++]);if(0==G.length&&D==me){b[Me]=0;let O=m;try{throw new Error("Uncaught (in promise): "+function A(b){return b&&b.toString===Object.prototype.toString?(b.constructor&&b.constructor.name||"")+": "+JSON.stringify(b):b?b.toString():Object.prototype.toString.call(b)}(m)+(m&&m.stack?"\n"+m.stack:""))}catch(ee){O=ee}$&&(O.throwOriginal=!0),O.rejection=m,O.promise=b,O.zone=v.current,O.task=v.currentTask,L.push(O),S.scheduleMicroTask()}}}return b}const ke=V("rejectionHandledHandler");function Ge(b){if(0===b[Me]){try{const D=v[ke];D&&"function"==typeof D&&D.call(this,{rejection:b[ne],promise:b})}catch(D){}b[Me]=me;for(let D=0;D<L.length;D++)b===L[D].promise&&L.splice(D,1)}}function ze(b,D,m,N,H){Ge(b);const G=b[Me],O=G?"function"==typeof N?N:_e:"function"==typeof H?H:Pe;D.scheduleMicroTask("Promise.then",()=>{try{const ee=b[ne],J=!!m&&q===m[q];J&&(m[Ue]=ee,m[Se]=G);const X=D.run(O,void 0,J&&O!==Pe&&O!==_e?[]:[ee]);Fe(m,!0,X)}catch(ee){Fe(m,!1,ee)}},m)}const oe=function(){},B=f.AggregateError;class c{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(D){return Fe(new this(null),I,D)}static reject(D){return Fe(new this(null),me,D)}static any(D){if(!D||"function"!=typeof D[Symbol.iterator])return Promise.reject(new B([],"All promises were rejected"));const m=[];let N=0;try{for(let O of D)N++,m.push(c.resolve(O))}catch(O){return Promise.reject(new B([],"All promises were rejected"))}if(0===N)return Promise.reject(new B([],"All promises were rejected"));let H=!1;const G=[];return new c((O,ee)=>{for(let J=0;J<m.length;J++)m[J].then(X=>{H||(H=!0,O(X))},X=>{G.push(X),N--,0===N&&(H=!0,ee(new B(G,"All promises were rejected")))})})}static race(D){let m,N,H=new this((ee,J)=>{m=ee,N=J});function G(ee){m(ee)}function O(ee){N(ee)}for(let ee of D)be(ee)||(ee=this.resolve(ee)),ee.then(G,O);return H}static all(D){return c.allWithCallback(D)}static allSettled(D){return(this&&this.prototype instanceof c?this:c).allWithCallback(D,{thenCallback:N=>({status:"fulfilled",value:N}),errorCallback:N=>({status:"rejected",reason:N})})}static allWithCallback(D,m){let N,H,G=new this((X,xe)=>{N=X,H=xe}),O=2,ee=0;const J=[];for(let X of D){be(X)||(X=this.resolve(X));const xe=ee;try{X.then(Te=>{J[xe]=m?m.thenCallback(Te):Te,O--,0===O&&N(J)},Te=>{m?(J[xe]=m.errorCallback(Te),O--,0===O&&N(J)):H(Te)})}catch(Te){H(Te)}O++,ee++}return O-=2,0===O&&N(J),G}constructor(D){const m=this;if(!(m instanceof c))throw new Error("Must be an instanceof Promise.");m[Me]=fe,m[ne]=[];try{const N=Q();D&&D(N(pe(m,I)),N(pe(m,me)))}catch(N){Fe(m,!1,N)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return c}then(D,m){var N;let H=null===(N=this.constructor)||void 0===N?void 0:N[Symbol.species];(!H||"function"!=typeof H)&&(H=this.constructor||c);const G=new H(oe),O=v.current;return this[Me]==fe?this[ne].push(O,G,D,m):ze(this,O,G,D,m),G}catch(D){return this.then(null,D)}finally(D){var m;let N=null===(m=this.constructor)||void 0===m?void 0:m[Symbol.species];(!N||"function"!=typeof N)&&(N=c);const H=new N(oe);H[q]=q;const G=v.current;return this[Me]==fe?this[ne].push(G,H,D,D):ze(this,G,H,D,D),H}}c.resolve=c.resolve,c.reject=c.reject,c.race=c.race,c.all=c.all;const E=f[Z]=f.Promise;f.Promise=c;const K=V("thenPatched");function W(b){const D=b.prototype,m=y(D,"then");if(m&&(!1===m.writable||!m.configurable))return;const N=D.then;D[U]=N,b.prototype.then=function(H,G){return new c((ee,J)=>{N.call(this,ee,J)}).then(H,G)},b[K]=!0}return S.patchThen=W,E&&(W(E),Rt(f,"fetch",b=>function se(b){return function(D,m){let N=b.apply(D,m);if(N instanceof c)return N;let H=N.constructor;return H[K]||W(H),N}}(b))),Promise[v.__symbol__("uncaughtPromiseErrors")]=L,c}),Zone.__load_patch("toString",f=>{const v=Function.prototype.toString,S=ye("OriginalDelegate"),y=ye("Promise"),x=ye("Error"),A=function(){if("function"==typeof this){const Z=this[S];if(Z)return"function"==typeof Z?v.call(Z):Object.prototype.toString.call(Z);if(this===Promise){const U=f[y];if(U)return v.call(U)}if(this===Error){const U=f[x];if(U)return v.call(U)}}return v.call(this)};A[S]=v,Function.prototype.toString=A;const V=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":V.call(this)}});let Pn=!1;if("undefined"!=typeof window)try{const f=Object.defineProperty({},"passive",{get:function(){Pn=!0}});window.addEventListener("test",f,f),window.removeEventListener("test",f,f)}catch(f){Pn=!1}const ws={useG:!0},nt={},cr={},hr=new RegExp("^"+an+"(\\w+)(true|false)$"),pr=ye("propagationStopped");function ci(f,v){const S=(v?v(f):f)+Y,y=(v?v(f):f)+vt,x=an+S,A=an+y;nt[f]={},nt[f][Y]=x,nt[f][vt]=A}function cn(f,v,S,y){const x=y&&y.add||In,A=y&&y.rm||Dn,V=y&&y.listeners||"eventListeners",L=y&&y.rmAll||"removeAllListeners",$=ye(x),Z="."+x+":",ae=function(ne,q,Ue){if(ne.isRemoved)return;const Se=ne.callback;let we;"object"==typeof Se&&Se.handleEvent&&(ne.callback=I=>Se.handleEvent(I),ne.originalDelegate=Se);try{ne.invoke(ne,q,[Ue])}catch(I){we=I}const fe=ne.options;return fe&&"object"==typeof fe&&fe.once&&q[A].call(q,Ue.type,ne.originalDelegate?ne.originalDelegate:ne.callback,fe),we};function ce(ne,q,Ue){if(!(q=q||f.event))return;const Se=ne||q.target||f,we=Se[nt[q.type][Ue?vt:Y]];if(we){const fe=[];if(1===we.length){const I=ae(we[0],Se,q);I&&fe.push(I)}else{const I=we.slice();for(let me=0;me<I.length&&(!q||!0!==q[pr]);me++){const R=ae(I[me],Se,q);R&&fe.push(R)}}if(1===fe.length)throw fe[0];for(let I=0;I<fe.length;I++){const me=fe[I];v.nativeScheduleMicroTask(()=>{throw me})}}}const be=function(ne){return ce(this,ne,!1)},_e=function(ne){return ce(this,ne,!0)};function Pe(ne,q){if(!ne)return!1;let Ue=!0;q&&void 0!==q.useG&&(Ue=q.useG);const Se=q&&q.vh;let we=!0;q&&void 0!==q.chkDup&&(we=q.chkDup);let fe=!1;q&&void 0!==q.rt&&(fe=q.rt);let I=ne;for(;I&&!I.hasOwnProperty(x);)I=Gn(I);if(!I&&ne[x]&&(I=ne),!I||I[$])return!1;const me=q&&q.eventNameToString,R={},pe=I[$]=I[x],Q=I[ye(A)]=I[A],Be=I[ye(V)]=I[V],Ie=I[ye(L)]=I[L];let Fe;function ke(m,N){return!Pn&&"object"==typeof m&&m?!!m.capture:Pn&&N?"boolean"==typeof m?{capture:m,passive:!0}:m?"object"==typeof m&&!1!==m.passive?Object.assign(Object.assign({},m),{passive:!0}):m:{passive:!0}:m}q&&q.prepend&&(Fe=I[ye(q.prepend)]=I[q.prepend]);const c=Ue?function(m){if(!R.isExisting)return pe.call(R.target,R.eventName,R.capture?_e:be,R.options)}:function(m){return pe.call(R.target,R.eventName,m.invoke,R.options)},E=Ue?function(m){if(!m.isRemoved){const N=nt[m.eventName];let H;N&&(H=N[m.capture?vt:Y]);const G=H&&m.target[H];if(G)for(let O=0;O<G.length;O++)if(G[O]===m){G.splice(O,1),m.isRemoved=!0,0===G.length&&(m.allRemoved=!0,m.target[H]=null);break}}if(m.allRemoved)return Q.call(m.target,m.eventName,m.capture?_e:be,m.options)}:function(m){return Q.call(m.target,m.eventName,m.invoke,m.options)},W=q&&q.diff?q.diff:function(m,N){const H=typeof N;return"function"===H&&m.callback===N||"object"===H&&m.originalDelegate===N},se=Zone[ye("UNPATCHED_EVENTS")],b=f[ye("PASSIVE_EVENTS")],D=function(m,N,H,G,O=!1,ee=!1){return function(){const J=this||f;let X=arguments[0];q&&q.transferEventName&&(X=q.transferEventName(X));let xe=arguments[1];if(!xe)return m.apply(this,arguments);if(ln&&"uncaughtException"===X)return m.apply(this,arguments);let Te=!1;if("function"!=typeof xe){if(!xe.handleEvent)return m.apply(this,arguments);Te=!0}if(Se&&!Se(m,xe,J,arguments))return;const st=Pn&&!!b&&-1!==b.indexOf(X),et=ke(arguments[2],st);if(se)for(let Ct=0;Ct<se.length;Ct++)if(X===se[Ct])return st?m.call(J,X,xe,et):m.apply(this,arguments);const Ts=!!et&&("boolean"==typeof et||et.capture),Cs=!(!et||"object"!=typeof et)&&et.once,fi=Zone.current;let Jn=nt[X];Jn||(ci(X,me),Jn=nt[X]);const kn=Jn[Ts?vt:Y];let fn,dn=J[kn],vr=!1;if(dn){if(vr=!0,we)for(let Ct=0;Ct<dn.length;Ct++)if(W(dn[Ct],xe))return}else dn=J[kn]=[];const As=J.constructor.name,mn=cr[As];mn&&(fn=mn[X]),fn||(fn=As+N+(me?me(X):X)),R.options=et,Cs&&(R.options.once=!1),R.target=J,R.capture=Ts,R.eventName=X,R.isExisting=vr;const Ln=Ue?ws:void 0;Ln&&(Ln.taskData=R);const _t=fi.scheduleEventTask(fn,xe,Ln,H,G);return R.target=null,Ln&&(Ln.taskData=null),Cs&&(et.once=!0),!Pn&&"boolean"==typeof _t.options||(_t.options=et),_t.target=J,_t.capture=Ts,_t.eventName=X,Te&&(_t.originalDelegate=xe),ee?dn.unshift(_t):dn.push(_t),O?J:void 0}};return I[x]=D(pe,Z,c,E,fe),Fe&&(I.prependListener=D(Fe,".prependListener:",function(m){return Fe.call(R.target,R.eventName,m.invoke,R.options)},E,fe,!0)),I[A]=function(){const m=this||f;let N=arguments[0];q&&q.transferEventName&&(N=q.transferEventName(N));const H=arguments[2],G=!!H&&("boolean"==typeof H||H.capture),O=arguments[1];if(!O)return Q.apply(this,arguments);if(Se&&!Se(Q,O,m,arguments))return;const ee=nt[N];let J;ee&&(J=ee[G?vt:Y]);const X=J&&m[J];if(X)for(let xe=0;xe<X.length;xe++){const Te=X[xe];if(W(Te,O))return X.splice(xe,1),Te.isRemoved=!0,0===X.length&&(Te.allRemoved=!0,m[J]=null,"string"==typeof N)&&(m[an+"ON_PROPERTY"+N]=null),Te.zone.cancelTask(Te),fe?m:void 0}return Q.apply(this,arguments)},I[V]=function(){const m=this||f;let N=arguments[0];q&&q.transferEventName&&(N=q.transferEventName(N));const H=[],G=dr(m,me?me(N):N);for(let O=0;O<G.length;O++){const ee=G[O];H.push(ee.originalDelegate?ee.originalDelegate:ee.callback)}return H},I[L]=function(){const m=this||f;let N=arguments[0];if(N){q&&q.transferEventName&&(N=q.transferEventName(N));const H=nt[N];if(H){const ee=m[H[Y]],J=m[H[vt]];if(ee){const X=ee.slice();for(let xe=0;xe<X.length;xe++){const Te=X[xe];this[A].call(this,N,Te.originalDelegate?Te.originalDelegate:Te.callback,Te.options)}}if(J){const X=J.slice();for(let xe=0;xe<X.length;xe++){const Te=X[xe];this[A].call(this,N,Te.originalDelegate?Te.originalDelegate:Te.callback,Te.options)}}}}else{const H=Object.keys(m);for(let G=0;G<H.length;G++){const ee=hr.exec(H[G]);let J=ee&&ee[1];J&&"removeListener"!==J&&this[L].call(this,J)}this[L].call(this,"removeListener")}if(fe)return this},Tt(I[x],pe),Tt(I[A],Q),Ie&&Tt(I[L],Ie),Be&&Tt(I[V],Be),!0}let Me=[];for(let ne=0;ne<S.length;ne++)Me[ne]=Pe(S[ne],y);return Me}function dr(f,v){if(!v){const A=[];for(let V in f){const L=hr.exec(V);let $=L&&L[1];if($&&(!v||$===v)){const Z=f[V];if(Z)for(let U=0;U<Z.length;U++)A.push(Z[U])}}return A}let S=nt[v];S||(ci(v),S=nt[v]);const y=f[S[Y]],x=f[S[vt]];return y?x?y.concat(x):y.slice():x?x.slice():[]}function hi(f,v){const S=f.Event;S&&S.prototype&&v.patchMethod(S.prototype,"stopImmediatePropagation",y=>function(x,A){x[pr]=!0,y&&y.apply(x,A)})}function hn(f,v,S,y,x){const A=Zone.__symbol__(y);if(v[A])return;const V=v[A]=v[y];v[y]=function(L,$,Z){return $&&$.prototype&&x.forEach(function(U){const z=`${S}.${y}::`+U,ae=$.prototype;try{if(ae.hasOwnProperty(U)){const ce=f.ObjectGetOwnPropertyDescriptor(ae,U);ce&&ce.value?(ce.value=f.wrapWithCurrentZone(ce.value,z),f._redefineProperty($.prototype,U,ce)):ae[U]&&(ae[U]=f.wrapWithCurrentZone(ae[U],z))}else ae[U]&&(ae[U]=f.wrapWithCurrentZone(ae[U],z))}catch(ce){}}),V.call(v,L,$,Z)},f.attachOriginToPatched(v[y],V)}function xs(f,v,S){if(!S||0===S.length)return v;const y=S.filter(A=>A.target===f);if(!y||0===y.length)return v;const x=y[0].ignoreProperties;return v.filter(A=>-1===x.indexOf(A))}function fr(f,v,S,y){f&&ur(f,xs(f,v,S),y)}function Qn(f){return Object.getOwnPropertyNames(f).filter(v=>v.startsWith("on")&&v.length>2).map(v=>v.substring(2))}Zone.__load_patch("util",(f,v,S)=>{const y=Qn(f);S.patchOnProperties=ur,S.patchMethod=Rt,S.bindArguments=ys,S.patchMacroTask=ui;const x=v.__symbol__("BLACK_LISTED_EVENTS"),A=v.__symbol__("UNPATCHED_EVENTS");f[A]&&(f[x]=f[A]),f[x]&&(v[x]=v[A]=f[x]),S.patchEventPrototype=hi,S.patchEventTarget=cn,S.isIEOrEdge=Yn,S.ObjectDefineProperty=Wn,S.ObjectGetOwnPropertyDescriptor=jt,S.ObjectCreate=$e,S.ArraySlice=gt,S.patchClass=Zn,S.wrapWithCurrentZone=un,S.filterProperties=xs,S.attachOriginToPatched=Tt,S._redefineProperty=Object.defineProperty,S.patchCallbacks=hn,S.getGlobalObjects=()=>({globalSources:cr,zoneSymbolEventNames:nt,eventNames:y,isBrowser:Ss,isMix:le,isNode:ln,TRUE_STR:vt,FALSE_STR:Y,ZONE_SYMBOL_PREFIX:an,ADD_EVENT_LISTENER_STR:In,REMOVE_EVENT_LISTENER_STR:Dn})});const pn=ye("zoneTask");function Wt(f,v,S,y){let x=null,A=null;S+=y;const V={};function L(Z){const U=Z.data;return U.args[0]=function(){return Z.invoke.apply(this,arguments)},U.handleId=x.apply(f,U.args),Z}function $(Z){return A.call(f,Z.data.handleId)}x=Rt(f,v+=y,Z=>function(U,z){if("function"==typeof z[0]){const ae={isPeriodic:"Interval"===y,delay:"Timeout"===y||"Interval"===y?z[1]||0:void 0,args:z},ce=z[0];z[0]=function(){try{return ce.apply(this,arguments)}finally{ae.isPeriodic||("number"==typeof ae.handleId?delete V[ae.handleId]:ae.handleId&&(ae.handleId[pn]=null))}};const be=Nn(v,z[0],ae,L,$);if(!be)return be;const _e=be.data.handleId;return"number"==typeof _e?V[_e]=be:_e&&(_e[pn]=be),_e&&_e.ref&&_e.unref&&"function"==typeof _e.ref&&"function"==typeof _e.unref&&(be.ref=_e.ref.bind(_e),be.unref=_e.unref.bind(_e)),"number"==typeof _e||_e?_e:be}return Z.apply(f,z)}),A=Rt(f,S,Z=>function(U,z){const ae=z[0];let ce;"number"==typeof ae?ce=V[ae]:(ce=ae&&ae[pn],ce||(ce=ae)),ce&&"string"==typeof ce.type?"notScheduled"!==ce.state&&(ce.cancelFn&&ce.data.isPeriodic||0===ce.runCount)&&("number"==typeof ae?delete V[ae]:ae&&(ae[pn]=null),ce.zone.cancelTask(ce)):Z.apply(f,z)})}Zone.__load_patch("legacy",f=>{const v=f[Zone.__symbol__("legacyPatch")];v&&v()}),Zone.__load_patch("queueMicrotask",(f,v,S)=>{S.patchMethod(f,"queueMicrotask",y=>function(x,A){v.current.scheduleMicroTask("queueMicrotask",A[0])})}),Zone.__load_patch("timers",f=>{const v="set",S="clear";Wt(f,v,S,"Timeout"),Wt(f,v,S,"Interval"),Wt(f,v,S,"Immediate")}),Zone.__load_patch("requestAnimationFrame",f=>{Wt(f,"request","cancel","AnimationFrame"),Wt(f,"mozRequest","mozCancel","AnimationFrame"),Wt(f,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(f,v)=>{const S=["alert","prompt","confirm"];for(let y=0;y<S.length;y++)Rt(f,S[y],(A,V,L)=>function($,Z){return v.current.run(A,f,Z,L)})}),Zone.__load_patch("EventTarget",(f,v,S)=>{(function di(f,v){v.patchEventPrototype(f,v)})(f,S),function pi(f,v){if(Zone[v.symbol("patchEventTarget")])return;const{eventNames:S,zoneSymbolEventNames:y,TRUE_STR:x,FALSE_STR:A,ZONE_SYMBOL_PREFIX:V}=v.getGlobalObjects();for(let $=0;$<S.length;$++){const Z=S[$],ae=V+(Z+A),ce=V+(Z+x);y[Z]={},y[Z][A]=ae,y[Z][x]=ce}const L=f.EventTarget;L&&L.prototype&&v.patchEventTarget(f,v,[L&&L.prototype])}(f,S);const y=f.XMLHttpRequestEventTarget;y&&y.prototype&&S.patchEventTarget(f,S,[y.prototype])}),Zone.__load_patch("MutationObserver",(f,v,S)=>{Zn("MutationObserver"),Zn("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(f,v,S)=>{Zn("IntersectionObserver")}),Zone.__load_patch("FileReader",(f,v,S)=>{Zn("FileReader")}),Zone.__load_patch("on_property",(f,v,S)=>{!function mr(f,v){if(ln&&!le||Zone[f.symbol("patchEvents")])return;const S=v.__Zone_ignore_on_properties;let y=[];if(Ss){const x=window;y=y.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const A=function li(){try{const f=Lt.navigator.userAgent;if(-1!==f.indexOf("MSIE ")||-1!==f.indexOf("Trident/"))return!0}catch(f){}return!1}()?[{target:x,ignoreProperties:["error"]}]:[];fr(x,Qn(x),S&&S.concat(A),Gn(x))}y=y.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let x=0;x<y.length;x++){const A=v[y[x]];A&&A.prototype&&fr(A.prototype,Qn(A.prototype),S)}}(S,f)}),Zone.__load_patch("customElements",(f,v,S)=>{!function gr(f,v){const{isBrowser:S,isMix:y}=v.getGlobalObjects();(S||y)&&f.customElements&&"customElements"in f&&v.patchCallbacks(v,f.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(f,S)}),Zone.__load_patch("XHR",(f,v)=>{!function $(Z){const U=Z.XMLHttpRequest;if(!U)return;const z=U.prototype;let ce=z[_s],be=z[zn];if(!ce){const R=Z.XMLHttpRequestEventTarget;if(R){const pe=R.prototype;ce=pe[_s],be=pe[zn]}}const _e="readystatechange",Pe="scheduled";function Me(R){const pe=R.data,Q=pe.target;Q[A]=!1,Q[L]=!1;const Be=Q[x];ce||(ce=Q[_s],be=Q[zn]),Be&&be.call(Q,_e,Be);const Ie=Q[x]=()=>{if(Q.readyState===Q.DONE)if(!pe.aborted&&Q[A]&&R.state===Pe){const ke=Q[v.__symbol__("loadfalse")];if(0!==Q.status&&ke&&ke.length>0){const Ge=R.invoke;R.invoke=function(){const ze=Q[v.__symbol__("loadfalse")];for(let Le=0;Le<ze.length;Le++)ze[Le]===R&&ze.splice(Le,1);!pe.aborted&&R.state===Pe&&Ge.call(R)},ke.push(R)}else R.invoke()}else!pe.aborted&&!1===Q[A]&&(Q[L]=!0)};return ce.call(Q,_e,Ie),Q[S]||(Q[S]=R),I.apply(Q,pe.args),Q[A]=!0,R}function ne(){}function q(R){const pe=R.data;return pe.aborted=!0,me.apply(pe.target,pe.args)}const Ue=Rt(z,"open",()=>function(R,pe){return R[y]=0==pe[2],R[V]=pe[1],Ue.apply(R,pe)}),we=ye("fetchTaskAborting"),fe=ye("fetchTaskScheduling"),I=Rt(z,"send",()=>function(R,pe){if(!0===v.current[fe]||R[y])return I.apply(R,pe);{const Q={target:R,url:R[V],isPeriodic:!1,args:pe,aborted:!1},Be=Nn("XMLHttpRequest.send",ne,Q,Me,q);R&&!0===R[L]&&!Q.aborted&&Be.state===Pe&&Be.invoke()}}),me=Rt(z,"abort",()=>function(R,pe){const Q=function ae(R){return R[S]}(R);if(Q&&"string"==typeof Q.type){if(null==Q.cancelFn||Q.data&&Q.data.aborted)return;Q.zone.cancelTask(Q)}else if(!0===v.current[we])return me.apply(R,pe)})}(f);const S=ye("xhrTask"),y=ye("xhrSync"),x=ye("xhrListener"),A=ye("xhrScheduled"),V=ye("xhrURL"),L=ye("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",f=>{f.navigator&&f.navigator.geolocation&&function Ve(f,v){const S=f.constructor.name;for(let y=0;y<v.length;y++){const x=v[y],A=f[x];if(A){if(!ut(jt(f,x)))continue;f[x]=(L=>{const $=function(){return L.apply(this,ys(arguments,S+"."+x))};return Tt($,L),$})(A)}}}(f.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(f,v)=>{function S(y){return function(x){dr(f,y).forEach(V=>{const L=f.PromiseRejectionEvent;if(L){const $=new L(y,{promise:x.promise,reason:x.rejection});V.invoke($)}})}}f.PromiseRejectionEvent&&(v[ye("unhandledPromiseRejectionHandler")]=S("unhandledrejection"),v[ye("rejectionHandledHandler")]=S("rejectionhandled"))})}},jt=>{jt(jt.s=106)}]);